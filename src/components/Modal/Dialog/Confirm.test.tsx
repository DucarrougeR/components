import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../../test/utils/create_with_theme'
import { semanticColors } from '../../../style'
import { Button } from '../../Button'
import { Confirm } from './Confirm'

afterEach(() => {
  requiredProps.onConfirm.mockClear()
  optionalProps.onCancel.mockClear()
})

const requiredProps = {
  message: 'Foo',
  onConfirm: jest.fn(),
  title: 'Bar',
}

const optionalProps = {
  cancelLabel: 'Dont Delete',
  confirmLabel: 'Delete',
  message: 'This is permanent',
  onCancel: jest.fn(),
  title: 'Delete the thing?',
}

test('<Confirm/> with defaults', () => {
  const result = renderWithTheme(
    <Confirm {...requiredProps}>
      {open => <Button onClick={open}>Do Something</Button>}
    </Confirm>
  )
  const { getByText, queryByText } = result
  const opener = getByText('Do Something')
  fireEvent.click(opener)

  const button = getByText('Confirm')

  expect(getByText(requiredProps.title)).toBeVisible()
  expect(getByText(requiredProps.message)).toBeVisible()
  expect(button).toHaveStyle(`background: ${semanticColors.primary.main}`)

  fireEvent.click(button)
  expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1)

  fireEvent.click(getByText('Cancel'))
  expect(queryByText(requiredProps.title)).toBeNull()
})

test('<Confirm/> with custom props', () => {
  const result = renderWithTheme(
    <Confirm {...requiredProps} {...optionalProps} buttonColor="danger">
      {open => <Button onClick={open}>Do Something</Button>}
    </Confirm>
  )
  const { getByText } = result
  const opener = getByText('Do Something')
  fireEvent.click(opener)

  const button = getByText(optionalProps.confirmLabel || '')
  expect(button).toHaveStyle(`background: ${semanticColors.danger.main}`)

  fireEvent.click(getByText(optionalProps.cancelLabel || ''))
  fireEvent.click(button)

  expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1)
  expect(optionalProps.onCancel).toHaveBeenCalledTimes(1)
})
