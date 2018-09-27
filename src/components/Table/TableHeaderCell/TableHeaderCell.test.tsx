import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { TableHeaderCell } from './TableHeaderCell'

test('A <TableHeaderCell> should render', () => {
  const component = createWithTheme(<TableHeaderCell>1</TableHeaderCell>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
