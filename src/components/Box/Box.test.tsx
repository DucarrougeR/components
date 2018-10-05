import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Box } from './Box'

test('Box default', () => {
  const component = createWithTheme(<Box mt="large">🥑</Box>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Responsive margin top Box', () => {
  const component = createWithTheme(
    <div>
      <Box mt={['large', 'medium', 'small']}>🥑</Box>
    </div>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Box with null values are removed from styling', () => {
  const component = createWithTheme(
    <div>
      <Box mt={['large', null, 'medium']}>🥑</Box>
    </div>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Box with SizeNone is valid', () => {
  const component = createWithTheme(
    <div>
      <Box mt="none">🥑</Box>
    </div>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Box supports background-color', () => {
  assertSnapshot(<Box bg="semanticColors.primary.main" />)
})

test('Box supports display', () => {
  assertSnapshot(<Box display="inline-block" />)
})

test('Box supports height', () => {
  assertSnapshot(<Box height="1rem" />)
})

test('Box supports maxHeight', () => {
  assertSnapshot(<Box maxHeight="1rem" />)
})

test('Box supports minHeight', () => {
  assertSnapshot(<Box minHeight="1rem" />)
})

test('Box supports width', () => {
  assertSnapshot(<Box width="1rem" />)
})

test('Box supports maxWidth', () => {
  assertSnapshot(<Box maxWidth="1rem" />)
})

test('Box supports maxWidth', () => {
  assertSnapshot(<Box minWidth="1rem" />)
})

test('Box supports position', () => {
  assertSnapshot(<Box position="absolute" />)
})

test('Box supports position', () => {
  assertSnapshot(<Box position="absolute" />)
})

test('Box supports top, left, bottom, right', () => {
  assertSnapshot(<Box top="1rem" />)
  assertSnapshot(<Box left="1rem" />)
  assertSnapshot(<Box right="1rem" />)
  assertSnapshot(<Box bottom="1rem" />)
})
