import { mount, ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'

import { mountWithTheme } from '../../../test/utils/create_with_theme'

import { theme, ThemeProvider } from '../../style'

import { Button } from '../Button'
import { Modal } from './Modal'
import { SimpleContent, SimpleContentSFC } from './modal.test.helpers'

import { ModalBackdrop } from './ModalBackdrop'
import { ModalContainer } from './ModalContainer'

const simpleContentFactory = () => <SimpleContentSFC />

describe('Modal', () => {
  test('Inactive', () => {
    assertSnapshot(<Modal render={simpleContentFactory} />)
  })

  test('Active', () => {
    assertSnapshot(<Modal open render={simpleContentFactory} />)
  })

  test('Inactive w/ wrapped element', () => {
    assertSnapshot(
      <Modal render={simpleContentFactory}>
        <Button>Click Here</Button>
      </Modal>
    )
  })

  test('Active w/ wrapped element', () => {
    assertSnapshot(
      <Modal open render={simpleContentFactory}>
        <Button>Click Here</Button>
      </Modal>
    )
  })

  test('Verify initial state', () => {
    const modal = mount(
      <ThemeProvider theme={theme}>
        <Modal render={simpleContentFactory} />
      </ThemeProvider>
    )

    expect(modal.find(ModalContainer).exists()).toEqual(false)
    expect(modal.contains(SimpleContent)).toBeFalsy()
  })

  test('Verify "open" prop', () => {
    const modal = mount(
      <ThemeProvider theme={theme}>
        <Modal open render={simpleContentFactory} />
      </ThemeProvider>
    )

    expect(modal.find(ModalContainer).exists()).toEqual(true)
    expect(modal.contains(SimpleContent)).toBeTruthy()
  })

  describe('Click events', () => {
    test('Trigger.click renders a backdrop, clicking backdrop closes it', () => {
      const modal = mountWithTheme(
        <Modal render={simpleContentFactory}>
          <Button>Open Modal</Button>
        </Modal>
      )

      // Drawer closed
      expect(modal.find(ModalContainer).exists()).toEqual(false)

      modal.find('button').simulate('click') // Click to open

      // Drawer open
      expect(modal.find(ModalContainer).exists()).toEqual(true)

      const backdrop = modal.find(ModalBackdrop)
      expect(backdrop.exists()).toEqual(true)
      backdrop.simulate('click')

      expect(modal.find(ModalContainer).exists()).toEqual(false)
    })
  })

  describe('Modal', () => {
    let modal: ReactWrapper
    beforeEach(() =>
      (modal = mountWithTheme(
        <Modal
          open
          render={simpleContentFactory}
          backdropStyles={{ backgroundColor: 'pink' }}
          surfaceStyles={{ backgroundColor: 'purple' }}
        />
      )))
    afterEach(() => modal.unmount())

    test('Modal applies the backdrop styles', () => {
      const backdrop = modal.find(ModalBackdrop)
      expect(backdrop.props().style).toEqual({ backgroundColor: 'pink' })
    })
  })
})
