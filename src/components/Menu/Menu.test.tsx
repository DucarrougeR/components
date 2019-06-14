import { shallow } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'

import { palette } from '../../style'
import { Menu } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'

test('Menu', () => {
  const menu = shallow(
    <Menu>
      <MenuItem>boo!</MenuItem>
      <MenuItem itemRole="link" href="test">
        boo!
      </MenuItem>
    </Menu>
  )

  expect(menu).toMatchSnapshot()
  expect(menu.find('div').find('a'))
})

test('Menu - composed', () => {
  const menu = shallow(
    <Menu>
      <MenuGroup>
        <MenuItem icon="LogoRings">Looker</MenuItem>
        <MenuItem icon="Validate">Validate</MenuItem>
        <MenuItem icon="ChartPie">Pizza!</MenuItem>
      </MenuGroup>
      <MenuGroup label="Cheeses">
        <MenuItem>Gouda</MenuItem>
        <MenuItem>Cheddar</MenuItem>
        <MenuItem>Swiss</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuItem icon="Beaker">Scary Stuff</MenuItem>
      </MenuGroup>
    </Menu>
  )

  expect(menu).toMatchSnapshot()
})

test('Menu - menu customization', () => {
  const menuCustomizations =
    // tslint:disable:object-literal-sort-keys
    {
      bg: palette.purple500,
      color: palette.purple200,
      iconColor: palette.purple300,
      iconSize: 20,
      marker: {
        color: palette.purple900,
        size: 10,
      },
      hover: {
        bg: palette.purple700,
        color: palette.white,
        iconColor: palette.purple100,
      },
      current: {
        bg: palette.purple200,
        color: palette.purple900,
        iconColor: palette.purple500,
      },
      // tslint:disable:enable-literal-sort-keys
    }

  const menu = shallow(
    <Menu customizationProps={menuCustomizations}>
      <MenuGroup>
        <MenuItem icon="LogoRings">Looker</MenuItem>
        <MenuItem icon="Validate">Validate</MenuItem>
        <MenuItem icon="ChartPie">Pizza!</MenuItem>
      </MenuGroup>
      <MenuGroup label="Cheeses">
        <MenuItem>Gouda</MenuItem>
        <MenuItem>Cheddar</MenuItem>
        <MenuItem>Swiss</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuItem icon="Beaker">Scary Stuff</MenuItem>
      </MenuGroup>
    </Menu>
  )

  expect(menu).toMatchSnapshot()
})
