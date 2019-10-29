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
import { rgba } from 'polished'
import { ButtonBase } from './ButtonBase'

export const Button = styled(ButtonBase)`
  &:focus {
    box-shadow: 0 0 0 0.15rem
      ${({ theme, color = 'primary' }) =>
        rgba(theme.colors.semanticColors[color].main, 0.25)};
  }
  background: ${({ theme, color = 'primary' }) =>
    theme.colors.semanticColors[color].main};
  border: 1px solid
    ${({ theme, color = 'primary' }) => theme.colors.semanticColors[color].main};
  color: ${({ theme, color = 'primary' }) =>
    theme.colors.semanticColors[color].text};

  &:active,
  &.active {
    background: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].darker};
    border-color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].darker};
  }
  &:hover,
  &:focus,
  &.hover {
    background: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].dark};
    border-color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].dark};
  }
  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      background-color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].main};
      border-color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].borderColor};
    }
  }
`
