import React from 'react'
import { Modal, ModalProps } from '../Modal'
import { DrawerSurface } from './DrawerSurface'

export const Drawer: React.FC<ModalProps> = ({
  width,
  children,
  surfaceStyles,
  ...props
}) => {
  const surface = (animationState: string) => {
    return (
      <DrawerSurface
        style={surfaceStyles}
        className={animationState}
        width={width}
      >
        {children}
      </DrawerSurface>
    )
  }
  return <Modal {...props} render={surface} />
}
