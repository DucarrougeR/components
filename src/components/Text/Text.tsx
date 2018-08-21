import styled, { css } from '../../styled_components'
import {
  charcoal400,
  charcoal500,
  charcoal900,
  green500,
  red500
} from '../../styles/colors'
import { fontWeights } from '../../styles/font_weights'
import { lineHeights } from '../../styles/line_heights'
import { RampSizes } from '../../styles/ramp_sizes'
import { truncate } from '../../styles/typography'

export enum TextWeights {
  Bold = 'bold',
  Light = 'light',
  Normal = 'normal',
  SemiBold = 'semiBold'
}
export enum TextTransforms {
  Caps = 'caps',
  Lower = 'lower',
  None = 'none',
  Upper = 'upper'
}

export enum TextAlignments {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}

export enum TextVariants {
  Critical = 'critical',
  Positive = 'positive',
  Secondary = 'secondary',
  Subdued = 'subdued'
}

export interface TextProps {
  align?: TextAlignments
  variant?: TextVariants
  size?: RampSizes
  textTransform?: TextTransforms
  truncate?: boolean
  weight?: TextWeights
}

function textTransform(transform: TextTransforms | undefined) {
  switch (transform) {
    case TextTransforms.Upper:
      return css`
        text-transform: uppercase;
      `
    case TextTransforms.Lower:
      return css`
        text-transform: lowercase;
      `
    case TextTransforms.Caps:
      return css`
        text-transform: capitalize;
      `
    case TextTransforms.None:
    default:
      return css`
        text-transform: none;
      `
  }
}

function textVariant(variant: TextVariants | undefined) {
  switch (variant) {
    case TextVariants.Critical:
      return css`
        color: ${red500};
      `
    case TextVariants.Positive:
      return css`
        color: ${green500};
      `
    case TextVariants.Secondary:
      return css`
        color: ${charcoal500};
      `
    case TextVariants.Subdued:
      return css`
        color: ${charcoal400};
      `
    default:
      return css`
        color: ${charcoal900};
      `
  }
}

function alignment(align: TextAlignments | undefined) {
  return css`
    text-align: ${align || TextAlignments.Left};
  `
}

export const Text = styled<TextProps, 'div'>('div')`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${props => props.theme.fontRamp[props.size || RampSizes.Four]};
  line-height: ${props => lineHeights[props.size || RampSizes.Four]};
  font-weight: ${props => fontWeights[props.weight || TextWeights.Normal]};
  ${props => textTransform(props.textTransform)};
  ${props => alignment(props.align)};
  ${props => truncate(props.truncate || false)};
  ${props => textVariant(props.variant)};
`
