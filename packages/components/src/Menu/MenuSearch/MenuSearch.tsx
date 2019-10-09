import React, { FunctionComponent } from 'react'
import { HotKeys, ObserveKeys } from 'react-hotkeys'
import styled, { StyledComponent } from 'styled-components'
import { palette } from '@looker/design-tokens'
import { InputSearch, InputSearchProps } from '../../Form/Inputs'
import { moveFocus } from '../moveFocus'

export interface MenuSearchProps extends Omit<InputSearchProps, 'as'> {
  /**
   * Specify ref of the Menu element that MenuSearch is related to.
   */
  menuRef?: React.RefObject<HTMLElement>
}

export type MenuSearchComponentType = FunctionComponent<MenuSearchProps>
export type StyledMenuSearchComponentType = StyledComponent<
  MenuSearchComponentType,
  MenuSearchProps
>

const InternalMenuSearch: MenuSearchComponentType = ({ menuRef, ...props }) => {
  return (
    <HotKeys
      keyMap={{ MOVE_DOWN: 'down', MOVE_UP: 'up' }}
      handlers={{
        MOVE_DOWN: () => moveFocus(1, 0, menuRef),
        MOVE_UP: () => moveFocus(-1, -1, menuRef),
      }}
    >
      <ObserveKeys except={[]} only={['down', 'up']}>
        <InputSearch
          borderRadius={0}
          border="none"
          borderBottom="1px solid"
          borderColor={palette.charcoal200}
          width="100%"
          p="large"
          height="auto"
          {...props}
        />
      </ObserveKeys>
    </HotKeys>
  )
}

/** @component */
export const MenuSearch: StyledMenuSearchComponentType = styled<
  MenuSearchComponentType
>(InternalMenuSearch)``
