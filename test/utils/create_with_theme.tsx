import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../src/style/theme'

export const withThemeProvider = (Component: React.ReactElement<any>) => {
  return <ThemeProvider theme={theme}>{Component}</ThemeProvider>
}

export const createWithTheme = (Component: React.ReactElement<any>) => {
  return create(withThemeProvider(Component))
}

export const mountWithTheme = (Component: React.ReactElement<any>) => {
  return mount(withThemeProvider(Component))
}
