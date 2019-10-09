import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'

import { Button } from '../../Button'
import { ModalContext } from '../ModalContext'
import { ModalFooter } from './ModalFooter'

test('ModalFooter with Button', () => {
  assertSnapshot(
    <ModalFooter>
      <Button variant="transparent">Cancel</Button>
    </ModalFooter>
  )
})

test('ModalFooter with ModalContext', () => {
  assertSnapshot(
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <ModalFooter>
          <Button onClick={closeModal} variant="transparent">
            Cancel
          </Button>
          <Button
            onClick={() => {
              alert("doin' things...")
              close && close()
            }}
            color="danger"
          >
            Yes, Delete "Stuff"
          </Button>
        </ModalFooter>
      )}
    </ModalContext.Consumer>
  )
})
