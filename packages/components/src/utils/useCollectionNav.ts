/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { FocusEvent, KeyboardEvent, useState } from 'react'
import { getNextFocusTarget } from './getNextFocusTarget'
import { getTabStops, moveFocus } from './moveFocus'
import { useWrapEvent } from './useWrapEvent'

const isMovingUp = (e: FocusEvent, element: HTMLElement) => {
  const previousFocus = getNextFocusTarget(e)
  const relationship =
    previousFocus && element.compareDocumentPosition(previousFocus as Node)
  return relationship === Node.DOCUMENT_POSITION_FOLLOWING
}

export interface UseCollectionNavProps<E extends HTMLElement> {
  element: E | null
  onKeyDown?: (e: KeyboardEvent<E>) => void
  onFocus?: (e: FocusEvent<E>) => void
  onBlur?: (e: FocusEvent<E>) => void
}

export const useCollectionNav = <E extends HTMLElement = HTMLElement>({
  element,
  onBlur,
  onFocus,
  onKeyDown,
}: UseCollectionNavProps<E>) => {
  const [focusedItem, setFocusedItem] = useState<HTMLElement | null>(null)
  const [focusInside, setFocusInside] = useState(false)

  const handleArrowKey = (
    e: KeyboardEvent<E>,
    direction: number,
    initial: number
  ) => {
    const newFocusedItem = moveFocus(direction, initial, element)
    if (newFocusedItem) {
      e.preventDefault()
      setFocusedItem(newFocusedItem)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<E>) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        handleArrowKey(e, -1, -1)
        break
      case 'ArrowDown':
        e.preventDefault()
        handleArrowKey(e, 1, 0)
        break
    }
  }

  const handleFocus = (e: FocusEvent<E>) => {
    setFocusInside(true)
    if (e.target === element) {
      if (focusedItem && element.contains(focusedItem)) {
        focusedItem.focus()
      } else {
        const tabStops = getTabStops(element)
        const toFocus = isMovingUp(e, element)
          ? tabStops[tabStops.length - 1]
          : tabStops[0]
        toFocus.focus()
      }
    }
  }

  const handleBlur = () => {
    setFocusInside(false)
  }

  return {
    onBlur: useWrapEvent(handleBlur, onBlur),
    onFocus: useWrapEvent(handleFocus, onFocus),
    onKeyDown: useWrapEvent(handleKeyDown, onKeyDown),
    tabIndex: focusInside ? undefined : 0,
  }
}
