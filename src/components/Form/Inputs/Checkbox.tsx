import tag from 'clean-tag'
import * as React from 'react'
import { reset } from '../../../style/helpers'
import styled from '../../../style/styled_components'
import { InputProps } from './InputProps'

export interface CheckboxProps extends InputProps {
  checked?: boolean
}

const InternalCheckbox: React.SFC<CheckboxProps> = ({ ...props }) => {
  return <tag.input type="checkbox" {...props} />
}

export const Checkbox = styled<CheckboxProps>(InternalCheckbox)`
  ${reset};
`
