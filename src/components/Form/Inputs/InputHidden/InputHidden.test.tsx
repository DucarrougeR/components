import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../../test/utils/snapshot'
import { InputHidden } from './InputHidden'

test('InputHidden default', () => {
  assertSnapshot(<InputHidden />)
})

test('InputHidden with name and id', () => {
  assertSnapshot(<InputHidden name="Bob" id="Bobby" />)
})

test('InputHidden with a value', () => {
  assertSnapshot(<InputHidden value="Some value" />)
})
