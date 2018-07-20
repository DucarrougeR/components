// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { fog400 } from '../../styles/colors'

export interface CardProps {
  raised?: boolean
}

export const Card = styled<CardProps, 'div'>('div')`
  background: #fff;
  border-radius: 4px;
  box-shadow: ${props => (props.raised ? props.theme.shadows.small : 'none')};
  border: solid 1px ${props => props.theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 200px;
  transition: border ${props => props.theme.transitions.durationShorter} ease;

  &:hover {
    border-color: ${fog400};
  }
`
