/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { CSSProperties, RefObject } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components'
import { CustomizableAttributes } from 'looker-design-tokens'
import { ModalBackdrop } from './ModalBackdrop'
import { ModalContext } from './ModalContext'
import { ModalPortal } from './ModalPortal'

export interface ModalSurfaceStyleProps {
  animation?: FlattenSimpleInterpolation
  backgroundColor: string
  border: string
  borderColor: string
  borderRadius: string
  boxShadow: string
  color: string
}

export interface CustomizableModalAttributes extends CustomizableAttributes {
  zIndex?: number
}

export const CustomizableModalAttributes: CustomizableModalAttributes = {
  backdrop: { backgroundColor: 'palette.charcoal200', opacity: 0.6 },
}

export interface ManagedModalProps {
  /**
   * Optional backdrop styles to merge with the Backdrop implementation. These
   * must be a CSSProperty compatible key / value paired object. For example
   * {backgroundColor: 'pink'}.
   */
  backdrop?: CSSProperties

  /**
   * Optional surface styles to merge with the Surface implementation. These
   * must be a CSSProperty compatible key / value paired object.
   */
  surfaceStyles?: CSSProperties

  /**
   * Explicitly specifying a width will set the Surface to be the lesser of the specified width or the viewport width.
   * You can also specify `auto` if you want the Surface to auto-size to its content.
   * @default auto
   */
  width?: string

  portalRef?: RefObject<HTMLDivElement>
}

export interface ModalProps extends ManagedModalProps {
  /**
   * When true, renders the Backdrop, Surface and it's contained content.
   * @default false
   */
  isOpen?: boolean
  /**
   * Specify a callback to be called each time this Modal is closed
   */
  onClose?: () => void
}

export interface ModalInternalProps extends ModalProps {
  /**
   * To implement Modal the Surface is supplied as a function so it can consume the animationState of the Modal.
   * animationState will be null, 'exited', 'entering' or 'exiting' and can be used to set CSS class on Surface
   * element to provide CSS transitions. (See DialogSurface & DrawerSurface for implementation examples)
   */
  render: (animationState: string) => JSX.Element
}

export function Modal({
  backdrop,
  isOpen,
  onClose,
  portalRef,
  render,
}: ModalInternalProps) {
  return (
    <ModalContext.Provider value={{ closeModal: onClose }}>
      <CSSTransition
        classNames="modal"
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={{ enter: 0, exit: 250 }}
      >
        {(state: string) => (
          <ModalPortal portalRef={portalRef}>
            <ModalBackdrop
              className={state}
              onClick={onClose}
              visible={backdrop === undefined ? true : !!backdrop}
              style={
                !!backdrop && backdrop !== true
                  ? (backdrop as CSSObject)
                  : undefined
              }
            />
            {render(state)}
          </ModalPortal>
        )}
      </CSSTransition>
    </ModalContext.Provider>
  )
}
