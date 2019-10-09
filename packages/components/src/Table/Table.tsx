import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'

import { Box, BoxProps } from '../Layout/Box'

export type TableProps = BoxProps<HTMLTableElement>

type ComponentType = FunctionComponent<TableProps>
type StyledComponentType = StyledComponent<ComponentType, TableProps>

const InternalTable: ComponentType = props => (
  <Box
    width="100%"
    // @ts-ignore
    as="table"
    {...props}
  />
)

const TableFactory = React.forwardRef<StyledComponentType, TableProps>(
  (props: TableProps, ref: Ref<StyledComponentType>) => (
    <InternalTable ref={ref} {...props} />
  )
)

/** @component */
export const Table = styled<ComponentType>(TableFactory)`
  border-collapse: collapse;
`
