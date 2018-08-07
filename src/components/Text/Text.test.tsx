import * as React from 'react'
import {
  Text,
  TextTransforms,
  TextWeights,
  TextAlignments,
  TextVariants
} from './Text'
import { RampSizes } from '../../styles/ramp_sizes'
import { createWithTheme } from '../../../test/utils/create_with_theme'

test('A default Text component', () => {
  const component = createWithTheme(<Text>🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component resized', () => {
  const component = createWithTheme(<Text size={RampSizes.D2}>🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component weight', () => {
  const component = createWithTheme(<Text weight={TextWeights.Bold}>🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component tuncated', () => {
  const component = createWithTheme(<Text truncate>🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component with variant', () => {
  const component = createWithTheme(
    <Text variant={TextVariants.Critical}>🥑</Text>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component transformed', () => {
  const component = createWithTheme(
    <Text textTransform={TextTransforms.Upper}>🥑</Text>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
