import * as React from 'react'
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
} from 'styled-system'
import { css, styled } from '../../style'
import { Box, BoxProps } from '../Box'

export type InheritedBoxProps = Pick<
  BoxProps,
  Exclude<keyof BoxProps, 'display'>
>

export interface FlexBoxProps
  extends InheritedBoxProps,
    AlignContentProps,
    AlignItemsProps,
    FlexDirectionProps,
    FlexWrapProps,
    JustifyContentProps {
  className?: string
  hidden?: boolean
}

const InternalFlex: React.SFC<FlexBoxProps> = ({ ...props }) => {
  return (
    <Box display="flex" {...props}>
      {props.children}
    </Box>
  )
}

function hidden(hide: boolean | undefined) {
  if (hide) {
    return css`
      display: none;
    `
  } else {
    return false
  }
}

export const Flex = styled<FlexBoxProps>(InternalFlex)`
  ${alignContent};
  ${alignItems};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
  ${props => hidden(props.hidden)};
`
