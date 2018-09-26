import { rem } from 'polished'
import { InterpolationValue } from 'styled-components'
import {
  SizeLarge,
  SizeMedium,
  SizeNone,
  SizeSmall,
  SizeXLarge,
  SizeXSmall,
  SizeXXLarge,
  SizeXXXLarge,
} from '../types'
import { Easings, easings } from './easings'
import { shadows, Shadows } from './elevation'
import { fontFaces, FontFaces } from './font_faces'
import { FontRamp, fontSizes, lineHeights } from './font_sizes'
import { fontWeights } from './font_weights'
import { palette, Palette } from './palette'
import { SemanticColors, semanticColors } from './semantic_colors'
import { transitions, Transitions } from './transitions'

export * from './easings'
export * from './elevation'
export * from './font_sizes'
export * from './palette'
export * from './semantic_colors'
export * from './transitions'

export type SpacingSizes =
  | SizeNone
  | SizeLarge
  | SizeMedium
  | SizeSmall
  | SizeXLarge
  | SizeXSmall
  | SizeXXLarge
  | SizeXXXLarge

export interface Theme {
  breakpoints: string[]
  easings: Easings
  fontFaces: FontFaces
  fontSizes: FontRamp
  fontWeights: Record<string, number>
  lineHeights: FontRamp
  palette: Palette
  /**
   * A function that can be overridden to return different reset css properties
   * or null to remove all resets. Most base elements in Lens implement the reset.
   */
  reset: () => InterpolationValue
  semanticColors: SemanticColors
  shadows: Shadows
  space: Record<SpacingSizes, string>
  transitions: Transitions
}

export const theme: Theme = {
  breakpoints: ['30rem', '48rem', '64rem', '75rem', '90rem'],
  easings,
  fontFaces,
  fontSizes,
  fontWeights,
  lineHeights,
  palette,
  reset: () => {
    return {
      border: 0,
      font: 'inherit',
      fontSize: '100%',
      margin: 0,
      padding: 0,
      verticalAlign: 'baseline',
    }
  },
  semanticColors,
  shadows,
  space: {
    // tslint:disable:object-literal-sort-keys
    none: 'none',
    xsmall: rem(4),
    small: rem(8),
    medium: rem(16),
    large: rem(20),
    xlarge: rem(32),
    xxlarge: rem(40),
    xxxlarge: rem(60),
    // tslint:enable:object-literal-sort-keys
  },
  transitions,
}
