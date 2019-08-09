import FocusTrap from 'focus-trap-react'
import * as React from 'react'
import { HotKeys } from 'react-hotkeys'
import { Styles } from 'styled-components'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'
import { CustomizableModalAttributes } from './Modal'
import { ModalContext } from './ModalContext'

export interface ModalSurfaceProps extends BoxProps<HTMLDivElement> {
  anchor?: 'right'
  animationState?: string
}

export const ModalSurface: React.FC<ModalSurfaceProps> = ({
  anchor,
  style,
  className,
  ...props
}) => {
  const { closeModal } = React.useContext(ModalContext)

  return (
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
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: anchor === 'right' ? 'flex-end' : 'center',
        width: '100%',
      }}
      // NOTE: Styling is required because react-hotkeys injects a DOM element (`div` by default) that
      // breaks the flex inheritance. Eventually they will offer a React Hook that should allow removal
      // of this workaround.
      //
      // display: contents would be another workaround when it gains broader (corrected) support
    >
      <FocusTrap
        focusTrapOptions={{
          clickOutsideDeactivates: true,
          escapeDeactivates: true,
        }}
      >
        <TransitionTimers
          bg={CustomizableModalAttributes.surface.backgroundColor}
          display="flex"
          className={`surface-overflow ${className}`}
          flexDirection="column"
          maxWidth="100%"
          position="relative"
          tabIndex={-1}
          surfaceStyle={style}
          focusStyle={{ outline: 'none' }}
          {...props}
        />
      </FocusTrap>
    </HotKeys>
  )
}

interface SurfaceInternalProps extends BoxProps<HTMLElement> {
  surfaceStyle?: React.CSSProperties
}

const SurfaceFactory = (props: SurfaceInternalProps) => {
  const { surfaceStyle, ref, ...boxProps } = props
  return <Box {...boxProps} ref={ref} />
}

const TransitionTimers = styled(SurfaceFactory)<SurfaceInternalProps>`
  /* stylelint-disable */
  box-shadow: ${props => props.theme.shadows[3]};

  transition: transform ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease},
    opacity ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease};

  ${props => props.surfaceStyle as Styles};
`
