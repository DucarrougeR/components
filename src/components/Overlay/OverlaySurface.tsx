import { Placement } from 'popper.js'
import * as React from 'react'
import { HotKeys } from 'react-hotkeys'
import { PopperArrowProps } from 'react-popper'
import { styled } from '../../style'
import { Box } from '../Box'
import { ModalContext } from '../Modal'

export interface SurfaceStyleProps {
  animation?: string
  backgroundColor: string
  border: string
  borderColor: string
  borderRadius: string
  boxShadow: string
  color: string
}

export interface OverlaySurfaceProps extends SurfaceStyleProps {
  arrow?: boolean
  arrowProps: PopperArrowProps
  children: React.ReactNode
  eventHandlers?: React.DOMAttributes<{}>
  placement: Placement
  style?: React.CSSProperties
  surfaceRef?: any
  zIndex?: number
}

const OverlaySurfaceInternal: React.FC<OverlaySurfaceProps> = ({
  animation,
  children,
  surfaceRef,
  style,
  zIndex,
  ...props
}) => {
  const { closeModal } = React.useContext(ModalContext)

  return (
    <Box
      p="xsmall"
      overflow="visible"
      innerRef={surfaceRef}
      style={{ ...style, animation }}
      zIndex={zIndex}
      {...props.eventHandlers}
    >
      <HotKeys
        keyMap={{
          CLOSE_MODAL: {
            action: 'keyup',
            name: 'Close Modal',
            sequence: 'esc',
          },
        }}
        handlers={{
          CLOSE_MODAL: () => {
            closeModal && closeModal()
          },
        }}
      >
        <Box
          bg={props.backgroundColor}
          borderRadius={props.borderRadius}
          border={props.border}
          borderColor={props.borderColor}
          boxShadow={props.boxShadow}
          color={props.color}
          focusStyle={{ outline: 'none' }}
          tabIndex={0}
        >
          {children}

          {props.arrow !== false && (
            <OverlaySurfaceArrow
              backgroundColor={props.backgroundColor}
              border={props.border}
              borderColor={props.borderColor}
              data-placement={props.placement}
              innerRef={props.arrowProps.ref}
              style={props.arrowProps.style}
            />
          )}
        </Box>
      </HotKeys>
    </Box>
  )
}

export const OverlaySurface = React.forwardRef(
  (props: OverlaySurfaceProps, ref) => (
    <OverlaySurfaceInternal surfaceRef={ref} {...props} />
  )
)

const OverlaySurfaceArrow = styled.div<{
  backgroundColor: string
  border: React.ReactText
  borderColor: React.ReactText
}>`
  position: absolute;

  &::before {
    content: '';
    display: block;
    margin: auto;
    width: 0.5rem;
    height: 0.5rem;
    background: ${props => props.backgroundColor};
    border-bottom: ${props => props.border} ${props => props.borderColor};
    border-right: ${props => props.border} ${props => props.borderColor};
  }

  &[data-placement*='top'] {
    bottom: 0.25rem;
    margin: 0 1rem;
    &::before {
      transform: rotate(45deg);
    }
  }

  &[data-placement*='right'] {
    left: 0.25rem;
    margin: 1rem 0;
    &::before {
      transform: rotate(135deg);
    }
  }

  &[data-placement*='bottom'] {
    top: 0.25rem;
    margin: 0 1rem;
    &::before {
      transform: rotate(225deg);
    }
  }

  &[data-placement*='left'] {
    right: 0.25rem;
    margin: 1rem 0;
    &::before {
      transform: rotate(315deg);
    }
  }
`
