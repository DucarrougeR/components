import { rem } from 'polished'
import { InterpolationValue } from 'styled-components'
import { SpacingSizes } from './types'

/**
 * Theme attributes shouldn't be exported as they should be consumed via `theme` rather than via
 * direct import.
 */
import { fontFaces, FontFaces } from './font_faces'
import { FontWeightRamp, fontWeights } from './font_weights'
import { FontRamp, fontSizes } from './font_sizes'
import { easings, Easings } from './easings'
import { lineHeights } from './line_heights'
import { palette, Palette } from './palette'
import { radii, Radii } from './radii'
import { SemanticColors, semanticColors } from './semantic_colors'
import { shadows, Shadows } from './elevation'
import { transitions, Transitions } from './transitions'

export interface Theme {
  breakpoints: string[]
  colors: { palette: Palette; semanticColors: SemanticColors }
  easings: Easings
  fontSizes: FontRamp
  fontWeights: FontWeightRamp
  fonts: FontFaces
  lineHeights: FontRamp
  radii: Radii
  /**
   * A function that can be overridden to return different reset css properties
   * or null to remove all resets. Most base elements in Lens implement the reset.
   */
  reset: () => InterpolationValue
  shadows: Shadows
  space: Record<SpacingSizes, string>
  transitions: Transitions
}

export const theme: Theme = {
  breakpoints: ['30rem', '48rem', '64rem', '75rem', '90rem'],
  colors: { palette, semanticColors },
  easings,
  fontSizes,
  fontWeights,
  fonts: fontFaces,
  lineHeights,
  radii,
  reset: () => {
    return {
      border: 0,
      boxSizing: 'border-box',
      font: 'inherit',
      fontSize: '100%',
      margin: 0,
      padding: 0,
      verticalAlign: 'baseline',
    }
  },
  shadows,
  space: {
    /* eslint-disable sort-keys */
    none: rem(0),
    xxsmall: rem(4),
    xsmall: rem(8),
    small: rem(12),
    medium: rem(16),
    large: rem(20),
    xlarge: rem(32),
    xxlarge: rem(40),
    xxxlarge: rem(60),
    xxxxlarge: rem(80),
    /* eslint-enable sort-keys */
  },
  transitions,
}
