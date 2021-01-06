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

export const getTabStops = (ref: HTMLElement): HTMLElement[] =>
  Array.from(
    ref.querySelectorAll(
      'a,button:not(:disabled),[tabindex="0"],[tabindex="-1"]'
    )
  )

export const moveFocus = (
  direction: number,
  initial: number,
  element?: HTMLElement | null
) => {
  if (element) {
    const tabStops = getTabStops(element)

    if (tabStops.length > 0) {
      let toFocus = tabStops.slice(initial)[0]
      if (
        document.activeElement &&
        tabStops.includes(document.activeElement as HTMLElement)
      ) {
        const next =
          tabStops.findIndex((f) => f === document.activeElement) + direction

        if (next === tabStops.length) return null
        if (!tabStops[next]) return null
        toFocus = tabStops[next]
      }
      toFocus.focus()
      return toFocus
    }
  }
  return null
}
