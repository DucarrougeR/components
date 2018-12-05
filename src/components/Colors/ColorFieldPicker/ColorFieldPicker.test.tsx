import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'
import { ColorFieldPicker } from './ColorFieldPicker'

test('Default ColorFieldPicker', () => {
  assertSnapshot(<ColorFieldPicker />)
})

test('ColorFieldPicker with hidden input', () => {
  assertSnapshot(<ColorFieldPicker hideInput={true} />)
})

test('ColorFieldPicker with a named color and size values', () => {
  assertSnapshot(<ColorFieldPicker value="blue" cwSize={300} />)
})

test('ColorFieldPicker with a label', () => {
  assertSnapshot(
    <ColorFieldPicker value="#e1ff83" label="Pick a color" alignLabel="left" />
  )
})

test('ColorFieldPicker with a validation message', () => {
  assertSnapshot(
    <ColorFieldPicker
      value="#4c6670"
      label="Pick a color"
      alignLabel="left"
      validationMessage={{ type: 'error', message: 'Error!' }}
    />
  )
})
