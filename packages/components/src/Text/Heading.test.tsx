import React from 'react'
import { createWithTheme } from 'looker-components-test-utils'
import { Heading } from './Heading'

test('A default Heading', () => {
  const component = createWithTheme(<Heading>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading', () => {
  const component = createWithTheme(<Heading as="h1">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading sized to <h2>', () => {
  const component = createWithTheme(
    <Heading as="h1" fontSize="xlarge">
      🥑
    </Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading to bold', () => {
  const component = createWithTheme(
    <Heading fontSize="large" fontWeight="bold">
      🥑
    </Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading transformed', () => {
  const component = createWithTheme(
    <Heading textTransform="capitalize">🥑</Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading with variant', () => {
  const component = createWithTheme(<Heading variant="subdued">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading truncated', () => {
  const component = createWithTheme(<Heading truncate>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading with multiline truncate', () => {
  const component = createWithTheme(<Heading truncateLines={2}>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
