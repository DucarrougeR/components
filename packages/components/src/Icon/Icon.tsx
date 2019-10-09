import {
  color,
  CompatibleHTMLProps,
  LayoutProps,
  layout,
  reset,
  SpaceProps,
  space,
} from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { Glyphs, IconNames } from '@looker/icons'
import omit from 'lodash/omit'

export interface IconProps
  extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'onClick'>,
    LayoutProps,
    SpaceProps {
  color?: string
  name: IconNames
  size?: number | string
}

export { IconNames }

const IconFactory = forwardRef((props: IconProps, ref: Ref<HTMLDivElement>) => {
  const Glyph = Glyphs[props.name]

  return (
    <Styled ref={ref} {...omit(props, 'name')}>
      <Glyph width="100%" height="100%" fill="currentColor" />
    </Styled>
  )
})

const Styled = styled.div.attrs((props: IconProps) => ({
  height: props.height ? props.height : props.size,
  width: props.width ? props.width : props.size,
}))<Omit<IconProps, 'name'>>`
  ${reset}
  ${color}
  ${space}
  ${layout}
  align-items: center;
  display: inline-flex;
`

Styled.defaultProps = { size: '1em' }

export const Icon = styled(IconFactory)``
