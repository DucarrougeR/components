import { themeColors, ThemeColors } from './theme_colors'
import { themeShadows, ThemeShadows } from './theme_elevation'
import { themeTransitions, ThemeTransitions } from './theme_transitions'
import { themeSpacing, ThemeSpacing } from './theme_spacing'
import {
  themeFontRamp,
  themeLineHeightRamp,
  ThemeFontRamp
} from './theme_font_sizes'

export interface ThemeInterface {
  colors: ThemeColors
  fontRamp: ThemeFontRamp
  lineHeightRamp: ThemeFontRamp
  shadows: ThemeShadows
  spacing: ThemeSpacing
  transitions: ThemeTransitions
}

const theme = {
  colors: themeColors,
  fontRamp: themeFontRamp,
  lineHeightRamp: themeLineHeightRamp,
  shadows: themeShadows,
  spacing: themeSpacing,
  transitions: themeTransitions
}

export default theme
