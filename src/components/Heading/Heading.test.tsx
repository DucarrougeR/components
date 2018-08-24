import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { RampSizes } from '../../styles/ramp_sizes'
import {
  Heading,
  HeadingLevels,
  HeadingTextTransforms,
  HeadingWeights,
} from './Heading'

test('A default Heading', () => {
  const component = createWithTheme(<Heading>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading', () => {
  const component = createWithTheme(
    <Heading level={HeadingLevels.L1}>🥑</Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading sized to <h2>', () => {
  const component = createWithTheme(
    <Heading level={HeadingLevels.L1} size={RampSizes.Two}>
      🥑
    </Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading to semi-bold', () => {
  const component = createWithTheme(
    <Heading weight={HeadingWeights.Bold}>🥑</Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading transformed', () => {
  const component = createWithTheme(
    <Heading transform={HeadingTextTransforms.Caps}>🥑</Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
