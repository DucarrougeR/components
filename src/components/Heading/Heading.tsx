import * as React from 'react'
import { css, ResponsiveFontSize, shouldTruncate, styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'

export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingTextTransforms = 'caps' | 'lower' | 'none' | 'upper'

export interface HeadingProps
  extends BoxPropsWithout<HTMLHeadingElement, 'color' | 'truncate'> {
  /** Heading level from h1-h6 */
  is?: HeadingLevels
  /** Text tranform  */
  transform?: HeadingTextTransforms
  /** Truncate heading text */
  truncate?: boolean
  /** Custom css class */
  className?: string
}

const InternalHeading: React.FC<HeadingProps> = ({
  fontSize,
  fontWeight,
  lineHeight,
  transform,
  truncate,
  is,
  ...props
}) => (
  <Box
    is={is || 'h2'}
    fontSize={fontSize || headingLevelSize(is)}
    lineHeight={lineHeight || headingLineHeight(is, fontSize)}
    fontWeight={fontWeight || 'normal'}
    {...props}
  >
    {props.children}
  </Box>
)

const HeadingFactory = React.forwardRef((props: HeadingProps, ref) => (
  <InternalHeading innerRef={ref as React.RefObject<HTMLElement>} {...props} />
))

export const Heading = styled(HeadingFactory)`
  ${props => textTransform(props.transform)};
  ${props => shouldTruncate(props.truncate || false)};
`

const textTransform = (transform: HeadingTextTransforms | undefined) => {
  switch (transform) {
    case 'upper':
      return css`
        text-transform: uppercase;
      `
    case 'lower':
      return css`
        text-transform: lowercase;
      `
    case 'caps':
      return css`
        text-transform: capitalize;
      `
    case 'none':
    default:
      return css`
        text-transform: none;
      `
  }
}

const headingLevelSize = (is?: HeadingLevels) => {
  switch (is) {
    case 'h1':
      return 'xxlarge'
    case 'h2':
      return 'xlarge'
    case 'h3':
      return 'large'
    case 'h4':
      return 'medium'
    case 'h5':
      return 'small'
    case 'h6':
      return 'xsmall'
    default:
      return 'large'
  }
}

const headingLineHeight = (is?: HeadingLevels, size?: ResponsiveFontSize) => {
  if (size) return size

  switch (is) {
    case 'h1':
      return 'xxlarge'
    case 'h2':
      return 'xlarge'
    case 'h3':
      return 'large'
    case 'h4':
      return 'medium'
    case 'h5':
      return 'small'
    case 'h6':
      return 'xsmall'
    default:
      return 'large'
  }
}
