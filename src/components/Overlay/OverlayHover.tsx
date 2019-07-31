import { Placement } from 'popper.js'
import * as React from 'react'
import { Popper } from 'react-popper'
import { ModalPortal } from '../Modal/ModalPortal'
import { OverlayChildrenProps } from './Overlay'

export interface OverlayHoverProps {
  children: (props: OverlayChildrenProps) => React.ReactNode
  isOpen?: boolean
  onMouseOut?: (event: React.MouseEvent) => void
  placement?: Placement
  portalRef?: React.RefObject<HTMLElement>
  setSurfaceRef?: (ref: HTMLElement | null) => void
  triggerRef?: React.RefObject<HTMLElement>
}

export const OverlayHover: React.FC<OverlayHoverProps> = ({
  children,
  isOpen,
  onMouseOut,
  placement: outerPlacement,
  portalRef,
  setSurfaceRef,
  triggerRef,
}) => {
  const referenceElement =
    triggerRef && triggerRef.current ? triggerRef.current : undefined

  return isOpen ? (
    <ModalPortal portalRef={portalRef}>
      <Popper
        positionFixed
        innerRef={setSurfaceRef}
        placement={outerPlacement}
        modifiers={{
          flip: {
            behavior: 'flip',
            enabled: true,
            flipVariations: true,
            flipVariationsByContent: true,
          },
          preventOverflow: {
            boundariesElement: 'viewport',
            escapeWithReference: true,
            padding: 0,
          },
        }}
        referenceElement={referenceElement}
      >
        {({ ref, style, arrowProps, placement: innerPlacement }) =>
          children({
            arrowProps,
            eventHandlers: { onMouseOut },
            placement: innerPlacement,
            ref,
            style,
          })
        }
      </Popper>
    </ModalPortal>
  ) : null
}
