import tag from 'clean-tag'
import * as React from 'react'
import { ResponsiveValue, space, SpaceProps } from 'styled-system'
import styled from '../../styled_components'
import {
  SizeLarge,
  SizeMedium,
  SizeNone,
  SizeSmall,
  SizeXLarge,
  SizeXSmall,
  SizeXXLarge,
  SizeXXXLarge,
  SizeXXXXLarge,
} from '../../types'

export type SpacingSizes =
  | SizeNone
  | SizeLarge
  | SizeMedium
  | SizeSmall
  | SizeXLarge
  | SizeXSmall
  | SizeXXLarge
  | SizeXXXLarge
  | SizeXXXXLarge

export type ResponsiveSpacingSize = ResponsiveValue<SpacingSizes>

export type SpaceProps = { [P in keyof SpaceProps]?: ResponsiveSpacingSize }

export interface BoxProps extends SpaceProps {
  is?: string | React.ReactNode
  className?: string
}

const InternalBox: React.SFC<BoxProps> = ({ ...props }) => {
  return <tag.div {...props}>{props.children}</tag.div>
}

export const Box = styled<BoxProps>(InternalBox)`
  ${space};
`
