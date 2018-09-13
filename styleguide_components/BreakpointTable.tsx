import * as React from 'react'
import { Box } from '../src/components/Box/Box'
import { Code } from '../src/components/Text/Code'
import { Text } from '../src/components/Text/Text'

import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../src/components/Table/'

import { RampSizes } from '../src/styles/ramp_sizes'

const breakpointLabels = [
  'Breakpoint',
  'Starts At',
  'Definition',
  'Description',
]

const breakpointList = [
  {
    description: 'Smaller screens like phones',
    rem: '30rem',
    slot: 1,
    starts: '480px',
  },
  {
    description: 'Medium sized screens like tablets',
    rem: '48rem',
    slot: 2,
    starts: '768px',
  },
  {
    description: 'Large screens like laptops',
    rem: '64rem',

    slot: 3,
    starts: '1024px',
  },
  {
    description: 'Larger screens like a desktop monitor',
    rem: '75rem',
    slot: 4,
    starts: '1200px',
  },
  { description: 'Wider screens', rem: '90rem', slot: 5, starts: '1440px' },
]

export interface BreakpointExample {
  slot: number
  starts: string
  rem: string
  description: string
}

const TableLabel = (label: string, key: number) => {
  return (
    <TableHeaderCell key={key}>
      <Text size={RampSizes.Five} weight="semiBold">
        {label}
      </Text>
    </TableHeaderCell>
  )
}

const BreakpointRow = (
  slot: number,
  starts: string,
  rem: string,
  description: string,
  key: number
) => {
  return (
    <TableRow key={key} style={{ verticalAlign: 'middle' }}>
      <TableDataCell>
        <Text size={RampSizes.Five}>{slot}</Text>
      </TableDataCell>
      <TableDataCell>
        <Box mr="large">
          <Text size={RampSizes.Five}>{starts}</Text>
        </Box>
      </TableDataCell>
      <TableDataCell>
        <Box px="small" is="span" className="prop-code">
          <Code size={RampSizes.Six}>min-width: {rem}</Code>
        </Box>
      </TableDataCell>
      <TableDataCell>
        <Text size={RampSizes.Five}>{description}</Text>
      </TableDataCell>
    </TableRow>
  )
}

export class BreakpointOptionsRender extends React.Component<
  {},
  {
    breakpoints: BreakpointExample[]
    labels: string[]
  }
> {
  constructor(props: {}) {
    super(props)
    this.state = {
      breakpoints: breakpointList,
      labels: breakpointLabels,
    }
  }

  public render() {
    return (
      <div className="spacing-table">
        <Table>
          <TableHead>
            <TableRow>
              {this.state.labels.map((label, i) => {
                return TableLabel(label, i)
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.breakpoints.map((bp, i) => {
              return BreakpointRow(
                bp.slot,
                bp.starts,
                bp.rem,
                bp.description,
                i
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}
