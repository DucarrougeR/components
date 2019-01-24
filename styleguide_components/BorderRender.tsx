import * as React from 'react'
import { Heading } from '../src/components/Heading/Heading'
import { Code } from '../src/components/Text/Code'
import { Text } from '../src/components/Text/Text'
import { palette } from '../src/style'

const {
  charcoal000,
  charcoal100,
  charcoal200,
  charcoal300,
  charcoal400,
  charcoal500,
  charcoal600,
  charcoal700,
  charcoal800,
} = palette

const renderBorder = (border: BorderType, index: number) => {
  const labels = [
    ['Theme Name', border.themeName],
    ['Lens Color', border.name],
    ['Hex Value', border.hex],
  ]

  return (
    <div key={index}>
      <Heading fontSize="small" fontWeight="bold">
        {border.label}
      </Heading>
      <div className="border-examples">
        {border.examples.map((example, idx) => (
          <div
            className="border-example"
            style={{ borderColor: border.hex, background: example.bgColor }}
            key={`border-${idx}`}
          >
            <div className={border.textClass}>
              <Text fontSize="xsmall" fontWeight="semiBold">
                On {example.name}
              </Text>
            </div>
            <div
              className="border-divider-example"
              style={{ background: border.hex }}
            >
              {' '}
            </div>
          </div>
        ))}
      </div>
      <div className="border-labels">
        {labels.map((label, idx) => (
          <div className="border-label-group" key={`label-${idx}`}>
            <Text variant="subdued" fontSize="small" fontWeight="semiBold">
              {label[0]}
            </Text>
            <Code fontSize="medium">{label[1]}</Code>
          </div>
        ))}
      </div>
    </div>
  )
}

export interface BorderExample {
  name: string
  bgColor: string
}

export interface BorderType {
  hex: string
  label: string
  name: string
  themeName: string
  textClass?: string
  examples: BorderExample[]
}

export class BorderRender extends React.Component<
  {},
  { borders: BorderType[] }
> {
  constructor(props: {}) {
    super(props)
    this.state = {
      borders: [
        {
          examples: [
            { name: 'White', bgColor: '#ffffff' },
            { name: 'Charcoal000', bgColor: charcoal000 },
            { name: 'Charcoal100', bgColor: charcoal100 },
          ],
          hex: charcoal300,
          label: 'Default Border',
          name: 'charcoal300',
          themeName: 'borderColor',
        },
        {
          examples: [
            { name: 'White', bgColor: '#ffffff' },
            { name: 'Charcoal000', bgColor: charcoal000 },
            { name: 'Charcoal100', bgColor: charcoal100 },
            { name: 'Charcoal200', bgColor: charcoal200 },
          ],
          hex: charcoal400,
          label: 'Dark Border',
          name: 'charcoal400',
          themeName: 'borderColorDark',
        },
        {
          examples: [
            { name: 'White', bgColor: '#ffffff' },
            { name: 'Charcoal000', bgColor: charcoal000 },
            { name: 'Charcoal100', bgColor: charcoal100 },
          ],
          hex: charcoal200,
          label: 'Light Border',
          name: 'charcoal200',
          themeName: 'borderColorLight',
        },
        {
          examples: [
            { name: 'Charcoal800', bgColor: charcoal800 },
            { name: 'Charcoal700', bgColor: charcoal700 },
            { name: 'Charcoal600', bgColor: charcoal600 },
          ],
          hex: charcoal500,
          label: 'Border on Dark',
          name: 'charcoal500',
          textClass: 'border-on-dark-text',
          themeName: 'borderColorOnDark',
        },
      ],
    }
  }

  public render() {
    return (
      <div>
        {this.state.borders.map((border, index) => renderBorder(border, index))}
      </div>
    )
  }
}
