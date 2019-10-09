import {
  CompatibleHTMLProps,
  position,
  PositionProps,
  reset,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import styled, { css } from 'styled-components'

export interface CardProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    PositionProps,
    SpaceProps {
  /**
   * Show card with a BoxShadow applied
   * @default true
   */
  raised?: boolean
}

const cardTransition = () => css`
  ${props =>
    `${props.theme.transitions.durationQuick} ${props.theme.easings.ease}`}
`

const raised = (props: CardProps) =>
  props.raised &&
  css`
    box-shadow: ${props => props.theme.shadows[1]};

    &:hover {
      box-shadow: ${props => props.theme.shadows[2]};
    }
  `

export const Card = styled.div<CardProps>`
  ${reset}
  ${position}
  ${space}

  background: ${props => props.theme.colors.palette.white};
  border: solid 1px ${props =>
    props.theme.colors.semanticColors.primary.borderColor};
  border-radius: ${props => props.theme.radii.medium};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 200px;
  overflow: hidden;
  transition: border ${cardTransition}, box-shadow ${cardTransition};

  &:hover {
    border-color: ${props => props.theme.colors.palette.charcoal300};
  }

  ${raised}
`

Card.defaultProps = { raised: true }
