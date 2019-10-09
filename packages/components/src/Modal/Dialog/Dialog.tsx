import React from 'react'
import { Modal, ModalProps } from '../Modal'
import { DialogSurface } from './DialogSurface'

export const Dialog: React.FC<ModalProps> = ({
  width,
  children,
  surfaceStyles,
  ...props
}) => {
  const surface = (animationState: string) => (
    <DialogSurface
      style={surfaceStyles}
      className={animationState}
      width={width}
    >
      {children}
    </DialogSurface>
  )

  return <Modal {...props} render={surface} />
}
