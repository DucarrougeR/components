import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Box } from './Box'
// import { mount } from 'enzyme';

describe('Box', () => {
  test('Box default', () => {
    assertSnapshot(<Box mt="large">🥑</Box>)
  })

  test('Responsive margin top Box', () => {
    assertSnapshot(<Box mt={['large', 'medium', 'small']}>🥑</Box>)
  })

  test('Box with null values are removed from styling', () => {
    assertSnapshot(<Box mt={['large', null, 'medium']}>🥑</Box>)
  })

  test('Box with SizeNone is valid', () => {
    assertSnapshot(<Box mt="none">🥑</Box>)
  })

  test('Box supports background-color', () => {
    assertSnapshot(<Box bg="semanticColors.primary.main" />)
  })

  test('Box supports borders', () => {
    assertSnapshot(<Box border="1px solid black" />)
    assertSnapshot(<Box borderRadius="4px" />)
  })

  test('Box supports display', () => {
    assertSnapshot(<Box display="inline-block" />)
  })

  test('Box supports height properties', () => {
    assertSnapshot(<Box height="1vh" />)
    assertSnapshot(<Box maxHeight="1vh" />)
    assertSnapshot(<Box minHeight="1vh" />)
  })

  test('Box supports width', () => {
    assertSnapshot(<Box width="1vw" />)
    assertSnapshot(<Box maxWidth="1vw" />)
    assertSnapshot(<Box minWidth="1vw" />)
  })

  test('Box supports position, top, left, bottom, right', () => {
    assertSnapshot(<Box position="absolute" />)
    assertSnapshot(<Box top="1rem" />)
    assertSnapshot(<Box left="1rem" />)
    assertSnapshot(<Box right="1rem" />)
    assertSnapshot(<Box bottom="1rem" />)
  })

  describe('flex', () => {
    test('supports flex properties', () => {
      assertSnapshot(
        <Box
          display="flex"
          alignContent="flex-end"
          alignItems="baseline"
          justifyContent="center"
          flexWrap="wrap"
          flexDirection="column"
        />
      )
    })

    test('supports flex item properties', () => {
      assertSnapshot(
        <Box alignSelf="center" flexBasis="1" flex="1 1" order="unset" />
      )
    })
  })

  describe('is=', () => {
    test('allows Box to render as any HTML tag', () => {
      const boxAsButton = mountWithTheme(<Box is="button" />)
      expect(boxAsButton.find('button').exists()).toBeTruthy()
    })

    test('any prop can be passed to Box', () => {
      const BoxAsInput: React.SFC<{ type?: string }> = ({ ...props }) => (
        <Box is="input" {...props} />
      )
      const boxAsCheckbox = mountWithTheme(<BoxAsInput type="checkbox" />)
      expect(boxAsCheckbox.find('input[type="checkbox"]').exists()).toEqual(
        true
      )
    })
  })
})
