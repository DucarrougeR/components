import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../../../test/utils/snapshot'
import { Select } from './Select'

test('Select default', () => {
  assertSnapshot(<Select />)
})

test('Select with name and id', () => {
  assertSnapshot(<Select name="Bob" id="Bobby" />)
})

test('Select should accept disabled', () => {
  assertSnapshot(<Select disabled />)
})

test('Select with a placeholder', () => {
  assertSnapshot(<Select placeholder="I am a placeholder" />)
})

test('Select should accept readOnly', () => {
  assertSnapshot(<Select readOnly />)
})

test('Select should accept required', () => {
  assertSnapshot(<Select required />)
})

test('Select with a value', () => {
  const options = [{ value: 'Some Value', label: "Some Value's Label" }]
  assertSnapshot(<Select value="Some value" options={options} />)
})

test('Select with aria-describedby', () => {
  assertSnapshot(<Select aria-describedby="some-id" />)
})

test('Select with an error validation', () => {
  assertSnapshot(<Select validationType="error" />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(<Select onChange={handleChange} />)

  wrapper.find('select').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
