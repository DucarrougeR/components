import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { Divider } from './Divider'

test('Default Divider', () => {
  assertSnapshot(<Divider />)
})

test('Divider with a variant', () => {
  assertSnapshot(<Divider appearance="onDark" />)
})

test('A custom Divider', () => {
  assertSnapshot(<Divider size="20px" customColor="turquoise" />)
})
