import { TextAlignProperty } from 'csstype'
import React from 'react'
import { css } from 'styled-components'
import {
  CustomizableAttributes,
  fadeIn,
  palette,
  shadows,
} from '@looker/design-tokens'
import { ModalSurfaceStyleProps } from '../Modal'
import { Paragraph } from '../Text'

import { RichTooltip, RichTooltipProps } from './RichTooltip'

export interface TooltipProps extends Omit<RichTooltipProps, 'content'> {
  content: string

  /**
   * Specify the maximum width before wrapping text.
   * @default 16rem
   */
  maxWidth?: string
  /**
   * Specify a fixed content width.
   * @default auto
   */
  width?: string
  /**
   * Specify the text aligment within tooltips.
   * @default center
   */
  textAlign?: TextAlignProperty
}

export const Tooltip: React.FC<TooltipProps> = ({
  maxWidth,
  width,
  textAlign,
  content,
  ...props
}) => {
  const contentFormatted = (
    <Paragraph
      style={{ overflowWrap: 'anywhere', hyphens: 'auto' }}
      fontSize="xsmall"
      maxWidth={maxWidth || '16rem'}
      width={width || 'auto'}
      p="xsmall"
      m="none"
      textAlign={textAlign || 'center'}
    >
      {content}
    </Paragraph>
  )

  return (
    <RichTooltip
      {...props}
      content={contentFormatted}
      surfaceStyle={{
        ...CustomizableTooltipAttributes.surface,
      }}
    />
  )
}

export interface CustomizableTooltipAttributes extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

/*
 * NOTE: Use longform version of tagged function to prevent stylelint
 * from parsing and complaining about css`` keyframe interpolation.
 *
 * EQUIVALENT: css`${fadeIn} 0.2s linear;`
 */
const animationRule = css(
  (['', ' 0.2s linear;'] as any) as TemplateStringsArray,
  fadeIn
)

export const CustomizableTooltipAttributes: CustomizableTooltipAttributes = {
  surface: {
    animation: animationRule,
    backgroundColor: palette.charcoal600,
    border: 'none',
    borderColor: 'none',
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal000,
  },
}
