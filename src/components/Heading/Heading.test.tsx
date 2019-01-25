import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { Heading } from './Heading'

test('A default Heading', () => {
  const component = createWithTheme(<Heading>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading', () => {
  const component = createWithTheme(<Heading is="h1">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading sized to <h2>', () => {
  const component = createWithTheme(
    <Heading is="h1" size="xlarge">
      🥑
    </Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading to bold', () => {
  const component = createWithTheme(<Heading weight="bold">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading transformed', () => {
  const component = createWithTheme(<Heading transform="caps">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading truncated', () => {
  const component = createWithTheme(<Heading truncate>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
