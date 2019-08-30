import React, { FunctionComponent } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import { Text } from '../src/components/Text/Text'
import { easings, palette, transitions } from '../src/style'
import { ThemedProps } from '../src/types'
import {
  FeedbackSvg,
  FigmaSvg,
  GithubSvg,
} from '../styleguide_components/ResourceIcons'

const { blue600, charcoal200, red100, red500, yellow000, yellow400 } = palette

export type StatusLabels = 'experimental' | 'deprecated' | 'stable'
export interface StatusProps {
  status: StatusLabels
}

export type StatusComponentType = FunctionComponent<ThemedProps<StatusProps>>
export type StyledStatusComponentType = StyledComponent<
  StatusComponentType,
  ThemedProps<StatusProps>
>

const statusIndicator: StatusComponentType = ({ status, ...args }) => {
  return (
    <a className="support-link" href="/#!/Support%20Levels">
      <Text fontSize="small" {...args}>
        {status}
      </Text>
    </a>
  )
}

function getCorrectStatusColor(status: StatusLabels) {
  switch (status) {
    case 'experimental':
      return css`
        background-color: ${yellow000};
        border-left: solid 4px ${yellow400};
        flex-grow: 1;

        &::before {
          /* stylelint-disable */
          content: '⚠️';
          /* stylelint-enable */
        }
      `
    case 'deprecated':
      return css`
        background-color: ${red100};
        border-left: solid 5px ${red500};
        flex-grow: 1;

        &::before {
          /* stylelint-disable */
          content: '🚫';
          /* stylelint-enable */
        }
      `
    case 'stable':
      return css`
        &:hover {
          color: ${blue600};
        }
        &::before {
          /* stylelint-disable */
          content: '✅';
          /* stylelint-enable */
        }
      `
    default:
      return css`
        background-color: ${yellow000};
        border-left: solid 4px ${yellow400};
        flex-grow: 1;

        &::before {
          /* stylelint-disable */
          content: '⚠️';
          /* stylelint-enable */
        }
      `
  }
}

export const StatusDiv: StyledStatusComponentType = styled<StatusComponentType>(
  statusIndicator
)`
  display: flex;
  text-transform: capitalize;
  padding: ${props => props.theme.space.small};
  border-radius: 2px;
  margin-right: ${props => props.theme.space.medium};

  &::before {
    /* stylelint-disable */
    content: '';
    /* stylelint-enable */
    font-size: 16px;
    margin-right: ${props => props.theme.space.xsmall};
    transition: transform ${transitions.durationSimple} ${easings.easeOut};
  }

  &:hover {
    color: ${blue600};

    &::before {
      transform: scale(1.12);
    }
  }

  ${(props: StatusProps) => getCorrectStatusColor(props.status)};
`

export interface ResourceProps {
  url: string
}
export type ResourceComponentType = FunctionComponent<
  ThemedProps<ResourceProps>
>
export type StyledResourceComponentType = StyledComponent<
  ResourceComponentType,
  ThemedProps<ResourceProps>
>

const ResourceIconRender: ResourceComponentType = ({ url, ...args }) => {
  if (!url) {
    return null
  } else {
    return (
      <a href={url} target="_blank" {...args}>
        {args.children}
      </a>
    )
  }
}

const ResourceIcon: StyledResourceComponentType = styled<ResourceComponentType>(
  ResourceIconRender
)`
  margin-right: ${(props: ThemedProps<ResourceProps>) =>
    props.theme.space.medium};
  svg {
    transition: transform ${transitions.durationModerate} ${easings.easeOut};
  }

  &:hover svg {
    transform: scale(1.2);
  }
`

export interface StatusAndResourcesProps {
  status: StatusLabels
  figmaURL: string
  githubURL: string
  feedbackTitle: string
}
export type StatusAndResourcesComponentType = FunctionComponent<
  ThemedProps<StatusAndResourcesProps>
>
export type StyledStatusAndResourcesComponentType = StyledComponent<
  StatusAndResourcesComponentType,
  ThemedProps<StatusAndResourcesProps>
>

const StatusAndResourcesRenderer: StatusAndResourcesComponentType = ({
  status,
  figmaURL,
  githubURL,
  feedbackTitle,
  ...args
}) => {
  return (
    <div {...args}>
      <StatusDiv status={status} />
      <div>
        <ResourceIcon url={figmaURL}>
          <FigmaSvg />
        </ResourceIcon>
        <ResourceIcon url={githubURL}>
          <GithubSvg />
        </ResourceIcon>
        <ResourceIcon
          url={`https://github.com/looker/lens/issues/new?title=${feedbackTitle}`}
        >
          <FeedbackSvg />
        </ResourceIcon>
      </div>
    </div>
  )
}

export const StatusAndResources: StyledStatusAndResourcesComponentType = styled<
  StatusAndResourcesComponentType
>(StatusAndResourcesRenderer)`
  border-top: solid 1px ${charcoal200};
  border-bottom: solid 1px ${charcoal200};
  display: flex;
  padding: ${props => props.theme.space.medium};
  ${props => props.theme.space.small};
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    flex-grow: 1;
  }
`
