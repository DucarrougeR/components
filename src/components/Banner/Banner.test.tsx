import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Banner } from './Banner'

test('Warning banner', () => {
  assertSnapshot(<Banner intent="warning">Warning</Banner>)
})

test('Error banner', () => {
  assertSnapshot(<Banner intent="error">Error</Banner>)
})

test('Info banner', () => {
  assertSnapshot(<Banner intent="info">Info</Banner>)
})

test('Confirmation banner', () => {
  assertSnapshot(<Banner intent="confirmation">Confirmation</Banner>)
})

test('Dismissable banner', () => {
  assertSnapshot(
    <Banner intent="info" dismissable>
      Info!
    </Banner>
  )
})
