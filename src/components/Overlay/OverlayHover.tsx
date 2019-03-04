import * as React from 'react'
import { Popper } from 'react-popper'
import { CustomizableModalAttributes } from '../Modal'
import { OverlayProps, OverlayState } from './Overlay'

export interface OverlayHoverProps extends OverlayProps {
  onClick?: () => void
}

export class OverlayHover extends React.Component<
  OverlayHoverProps,
  OverlayState
> {
  private surfaceRef: HTMLElement | null
  private triggerRef: React.RefObject<HTMLElement>

  constructor(props: OverlayHoverProps) {
    super(props)
    this.state = { isOpen: !!props.open }
    this.surfaceRef = null
    this.triggerRef = React.createRef()
  }

  public render() {
    const surfaceEventHandlers: React.DOMAttributes<{}> = {
      onMouseOut: this.handleMouseOut,
      onMouseOver: this.open,
    }

    const triggerEventHandlers: React.DOMAttributes<{}> = {
      ...surfaceEventHandlers,
      onBlur: this.close,
      onClick: this.props.onClick,
      onFocus: this.open,
    }

    const surface = this.state.isOpen && (
      <Popper
        positionFixed
        innerRef={this.setSurfaceRef}
        placement={this.props.placement}
        referenceElement={
          this.triggerRef.current ? this.triggerRef.current : undefined
        }
      >
        {({ ref, style, arrowProps, placement }) =>
          this.props.render({
            arrowProps,
            eventHandlers: surfaceEventHandlers,
            placement,
            ref,
            style: {
              ...style,
              zIndex: CustomizableModalAttributes.zIndex,
            },
          })
        }
      </Popper>
    )

    return (
      <>
        {this.generateTrigger(triggerEventHandlers)}
        {surface}
      </>
    )
  }

  private generateTrigger(eventHandlers?: React.DOMAttributes<{}>) {
    return React.cloneElement(this.props.children, {
      innerRef: this.triggerRef, // SC4-Upgrade this will change to `ref: ...`
      ...eventHandlers,
    })
  }

  private setSurfaceRef = (ref: null | HTMLElement) => (this.surfaceRef = ref)

  private close = () => this.setState({ isOpen: false })
  private open = () => this.setState({ isOpen: true })

  private handleMouseOut = (e: React.MouseEvent) => {
    if (!this.state.isOpen) return

    const related = e.relatedTarget

    if (
      this.triggerRef.current &&
      (this.triggerRef.current === related ||
        this.triggerRef.current.contains(related as Node))
    ) {
      return
    }

    if (
      this.surfaceRef &&
      (this.surfaceRef === related || this.surfaceRef.contains(related as Node))
    ) {
      return
    }

    this.close()
  }
}
