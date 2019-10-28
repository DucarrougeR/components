import {
  CompatibleHTMLProps,
  color,
  space,
  typography,
} from 'looker-design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../../Icon'
import { MenuItemStyle } from './menuItemStyle'

export interface MenuListItemProps extends CompatibleHTMLProps<HTMLLIElement> {
  current?: boolean
  currentMarker?: boolean
  itemStyle: MenuItemStyle
}

const currentBorder = (props: MenuListItemProps) => {
  if (!props.current || !props.currentMarker) return false

  return css`
    ::before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: ${props.itemStyle.marker.color};
      width: ${props.itemStyle.marker.size}px;
    }
  `
}

const hoverStyles = (props: MenuListItemProps) => {
  if (props.current) return false

  return css`
    &:hover {
      background: ${props.itemStyle.hover.bg};
      color: ${props.itemStyle.hover.color};
      font-size: ${props.itemStyle.hover.color};
      font-weight: ${props.itemStyle.hover.color};

      ${Icon} {
        color: ${props.itemStyle.hover.iconColor};
      }
    }
  `
}

const iconColor = (props: MenuListItemProps) =>
  props.current
    ? props.itemStyle.current.iconColor
    : props.itemStyle.initial.iconColor

/**
 * All of this drame is to deal with SC's behavior of auto-speading the Element interface
 * used when styled extends a base type. E.g. (styled.li has `color` prop)
 */
const Li = forwardRef((props: MenuListItemProps, ref: Ref<HTMLLIElement>) => {
  const { children, className } = props
  return (
    <li className={className} ref={ref}>
      {children}
    </li>
  )
})

Li.displayName = 'Li'

export const MenuItemListItem = styled(Li)<MenuListItemProps>`
  ${color}
  ${space}
  ${typography}

  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  text-decoration: none;
  transition: ${props =>
    `background ${props.theme.transitions.durationQuick} ${props.theme.easings.ease},
    color ${props.theme.transitions.durationQuick} ${props.theme.easings.ease}`};

  &:focus-within {
    box-shadow: ${props => `0 0 3px 1px ${props.theme.colors.palette.blue400}`};
    z-index: 1;
  }

  ${currentBorder};
  ${hoverStyles};

  ${Icon} {
    color: ${iconColor};
    transition: color
      ${props =>
        `${props.theme.transitions.durationQuick} ${props.theme.easings.ease}`};
  }
`
