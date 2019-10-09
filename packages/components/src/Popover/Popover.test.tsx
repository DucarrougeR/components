import 'jest-styled-components'
import React, { useRef } from 'react'
import { mountWithTheme } from '@looker/components-test-utils'
import { Popover } from './Popover'

const SimpleContent = <div>simple content</div>

const instantClick = jest.fn()
const requiresDismissal = jest.fn()

const PopoverGroup = () => {
  const groupRef = useRef<null | HTMLDivElement>(null)

  return (
    <>
      <div ref={groupRef}>
        <Popover content={SimpleContent} groupedPopoversRef={groupRef}>
          {(onClick, ref, className) => (
            <a onClick={onClick} ref={ref} className={className}>
              Instant Click
            </a>
          )}
        </Popover>

        <a onClick={instantClick} id="instant">
          Should activate instantly
        </a>
      </div>

      <button onClick={requiresDismissal} id="dismissed">
        Should require dismissal click
      </button>
    </>
  )
}

describe('Popover', () => {
  test('opens on click', () => {
    const popover = mountWithTheme(
      <Popover content={SimpleContent}>
        {(onClick, ref, className) => (
          <button ref={ref} onClick={onClick} className={className}>
            Test
          </button>
        )}
      </Popover>
    )

    // Verify hidden
    expect(popover.contains(SimpleContent)).toBeFalsy()

    const trigger = popover.find('button')
    trigger.simulate('click')

    // Find content
    expect(popover.contains(SimpleContent)).toBeTruthy()

    trigger.simulate('click')
    expect(popover.find(SimpleContent).exists()).toBeFalsy()
  })

  test('contains the content passed to it', () => {
    const popover = mountWithTheme(
      <Popover content={SimpleContent}>
        {(onClick, ref, className) => (
          <button ref={ref} onClick={onClick} className={className}>
            Test
          </button>
        )}
      </Popover>
    )
    const trigger = popover.find('button')
    trigger.simulate('click')
    expect(popover.contains(SimpleContent)).toBeTruthy()
  })

  test('stopPropagation works - event on container is not called', () => {
    const mockContainerOnClick = jest.fn()

    const popover = mountWithTheme(
      <div onClick={mockContainerOnClick}>
        <Popover content={SimpleContent}>
          {(onClick, ref, className) => (
            <button ref={ref} onClick={onClick} className={className}>
              Test
            </button>
          )}
        </Popover>
      </div>
    )
    const trigger = popover.find('button')
    trigger.simulate('click')
    expect(popover.contains(SimpleContent)).toBeTruthy()
    expect(mockContainerOnClick).not.toHaveBeenCalled()
  })

  xtest('Popover opens and closes', () => {
    const popover = mountWithTheme(
      <Popover content={SimpleContent}>
        {(onClick, ref, className) => (
          <a onClick={onClick} ref={ref} className={className}>
            Instant Click
          </a>
        )}
      </Popover>
    )

    const trigger = popover.find('a')
    expect(trigger.exists()).toBeTruthy()

    // Verify Popover close, then Open Popover and verify it's open
    expect(popover.contains(SimpleContent)).toBeFalsy()
    trigger.simulate('click')
    expect(popover.contains(SimpleContent)).toBeTruthy()

    // Collapse Popover by clicking outside of it (original trigger will do)
    trigger.simulate('click', {})

    /*
     * Testing this with Jest is frustrating because the component expects to operating with a real DOM
     * environment. Popover is looking for an event sent via document.addEventListener which isn't
     * produced within Jest's enviornment. Attempts at mocking haven't been successful.
     */
    expect(popover.contains(SimpleContent)).toBeFalsy()
  })

  xtest('Open popover cancels event on "dismissal click"', () => {
    const doThing = jest.fn()

    const popover = mountWithTheme(
      <>
        <Popover content={SimpleContent}>
          {(onClick, ref, className) => (
            <button onClick={onClick} ref={ref} className={className}>
              Instant Click
            </button>
          )}
        </Popover>
        <a onClick={doThing}>Do thing...</a>
      </>
    )

    const trigger = popover.find('button')
    trigger.simulate('click') // open Popover
    const closer = popover.find('a')
    closer.simulate('click')

    /*
     * Testing this with Jest is frustrating because the component expects to operating with a real DOM
     * environment. Popover is looking for an event sent via document.addEventListener which isn't
     * produced within Jest's enviornment. Attempts at mocking haven't been successful.
     */
    expect(popover.contains(SimpleContent)).toBeFalsy()
    expect(doThing).toBeCalledTimes(0)
  })

  xtest('Popover Group - item outside group does NOT receive first click event', () => {
    const groupedPopovers = mountWithTheme(<PopoverGroup />)
    const trigger = groupedPopovers.find('a')
    trigger.simulate('click') // open Popover

    const dismissed = groupedPopovers.find('button')
    expect(dismissed.exists()).toBeTruthy()
    dismissed.simulate('click')
    // @FAIL - Doesn't work because Popover is looking for an event sent via document.addEventListener
    expect(groupedPopovers.contains(SimpleContent)).toBeFalsy()
    expect(requiresDismissal).toBeCalledTimes(0)
  })

  xtest('Popover Group  - item within group immediately receives onClick', () => {
    const groupedPopovers = mountWithTheme(<PopoverGroup />)
    const trigger = groupedPopovers.find('a')
    trigger.simulate('click') // open Popover

    const instant = groupedPopovers.find('#instant')
    expect(instant.exists()).toBeTruthy()
    instant.simulate('click')

    /*
     * Testing this with Jest is frustrating because the component expects to operating with a real DOM
     * environment. Popover is looking for an event sent via document.addEventListener which isn't
     * produced within Jest's enviornment. Attempts at mocking haven't been successful.
     */
    expect(groupedPopovers.contains(SimpleContent)).toBeFalsy()
    expect(instantClick).toBeCalledTimes(1)
  })
})
