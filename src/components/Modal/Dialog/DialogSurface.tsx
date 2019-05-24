import * as React from 'react'
import { styled } from '../../../style'
import { CustomizableModalAttributes } from '../Modal'
import { ModalSurface, ModalSurfaceProps } from '../ModalSurface'

export const DialogSurface: React.FC<ModalSurfaceProps> = ({
  children,
  ...props
}) => {
  return (
    <Surface
      borderRadius={CustomizableModalAttributes.surface.borderRadius}
      maxHeight="90vh"
      maxWidth="100%"
      {...props}
    >
      {children}
    </Surface>
  )
}

const Surface = styled(ModalSurface)`
  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateY(100%);
  }

  &.exited {
    opacity: 1;
    transform: translateY(0%);
  }
`
