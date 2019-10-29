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

import styled from 'styled-components'
import { ModalSurface, ModalSurfaceProps } from '../ModalSurface'

export const DrawerSurface = styled(ModalSurface)<ModalSurfaceProps>`
  border-radius: 0;
  box-shadow: -18px 0 18px -18px rgba(0, 0, 0, 0.12);
  /* Shadow designed to match theme.shadows[3] but with a single left-side shadow */
  height: 100%;
  max-width: 100%;

  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateX(100%);
  }

  &.exited {
    opacity: 1;
    transform: translateX(0%);
  }
`

DrawerSurface.defaultProps = {
  anchor: 'right',
  width: '30rem',
}
