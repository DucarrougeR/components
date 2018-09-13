import styled, { css } from '../../../styled_components'
import { spacing } from '../../../themes/spacing'

export type FormControlDirections = 'left' | 'right' | 'top' | 'bottom'

export interface FormControlProps {
  alignLabel?: FormControlDirections
  alignCenter?: boolean
}

const alignLabels = (direction: FormControlDirections | undefined) => {
  switch (direction) {
    case 'left':
      return css`
        flex-direction: row;
      `
    case 'right':
      return css`
        flex-direction: row-reverse;
        justify-content: flex-end;
      `
    case 'bottom':
      return css`
        flex-direction: column-reverse;
        justify-content: flex-end;
      `
    case 'top':
    default:
      return css`
        flex-direction: column;
      `
  }
}

export const FormControl = styled<FormControlProps, 'div'>('div')`
  display: flex;
  margin-bottom: ${spacing.s};
  ${props => alignLabels(props.alignLabel)};
  align-items: ${props => (props.alignCenter ? 'center' : 'normal')};
`
