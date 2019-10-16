import React, { cloneElement } from 'react'
import styled from 'styled-components'

export interface TabListProps {
  children: JSX.Element[]
  selectedIndex?: number
  onSelectTab?: (index: any) => void
}

export const TabList: React.FC<TabListProps> = ({
  children,
  selectedIndex,
  onSelectTab,
}) => {
  const clonedChildren = React.Children.map(
    children,
    (child: JSX.Element, index: number) => {
      return cloneElement(child, {
        onSelect: () => onSelectTab && onSelectTab(index),
        selected: index === selectedIndex,
        selectedIndex,
      })
    }
  )

  return <TabListContainer>{clonedChildren}</TabListContainer>
}

const TabListContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.palette.charcoal200};
`
