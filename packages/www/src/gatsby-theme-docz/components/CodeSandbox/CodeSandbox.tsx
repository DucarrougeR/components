import { Icon, IconButton, IconNames, Tooltip } from '@looker/components'
import { PrismTheme } from 'prism-react-renderer'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
  withLive,
} from 'react-live'
import styled from 'styled-components'
import materialTheme from '../../prism-themes/looker-material'

interface CodeSandboxProps {
  __code: string
  __scope: { [key: string]: any }
}

const CodeSandbox: React.FC<CodeSandboxProps> = ({ __code, __scope }) => {
  const [showEditor, setShowEditor] = useState(true)
  const toggleEditorView = () => {
    setShowEditor(!showEditor)
  }
  return (
    <SandboxWrapper>
      <LiveProvider scope={__scope} theme={materialTheme} code={__code}>
        <LivePreviewWrapper>
          <LiveConsumer>
            {(error?: string) => (
              <>
                {!!error || (
                  <PreviewWrapper>
                    <LivePreview />
                  </PreviewWrapper>
                )}
                {!!error && (
                  <ErrorWrapper>
                    <div>
                      <IconWrapper>
                        <Icon name="Warning" size={24} />
                      </IconWrapper>
                    </div>
                    <LiveError />
                  </ErrorWrapper>
                )}
              </>
            )}
          </LiveConsumer>
        </LivePreviewWrapper>
        <EditorWrapper>
          <ActionLayout editorIsVisible={showEditor}>
            <CopyButton code={__code} editorIsVisible={showEditor} />
            <ToggleCodeButton
              onClick={toggleEditorView}
              editorIsVisible={showEditor}
            />
          </ActionLayout>
          {showEditor && <LiveEditor />}
        </EditorWrapper>
      </LiveProvider>
    </SandboxWrapper>
  )
}

export default CodeSandbox

interface LiveProps {
  code: string
  disabled: boolean
  error?: string
  language: string
  theme: PrismTheme
  onChange: () => void
  onError: () => void
}

interface WithLiveProps {
  children: (error?: string) => React.ReactNode
  live?: LiveProps
}

const LivePreviewWrapper = styled.div`
  position: relative;
  z-index: 1;
`

export const LiveConsumer = withLive<WithLiveProps>(({ children, live }) => {
  return <React.Fragment>{children((live as LiveProps).error)}</React.Fragment>
})

interface ActionProps {
  editorIsVisible: boolean
}

interface CopyButtonProps extends ActionProps {
  code: string
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  code,
  editorIsVisible,
}) => {
  return (
    <Tooltip content="Copy sample code">
      {(eventHandlers, ref) => (
        <CopyToClipboard
          text={code}
          onCopy={() => alert(`Sample code copied to clipboard.`)}
        >
          <ActionButton
            ref={ref}
            {...eventHandlers}
            label="Copy"
            icon="Clipboard"
            size="xsmall"
            editorIsVisible={editorIsVisible}
          />
        </CopyToClipboard>
      )}
    </Tooltip>
  )
}

interface ToggleButtonProps extends ActionProps {
  onClick: () => void
}

export const ToggleCodeButton: React.FC<ToggleButtonProps> = ({
  editorIsVisible,
  onClick,
}) => {
  const toggleIcon: IconNames = editorIsVisible ? 'CaretUp' : 'CaretDown'
  const toggleLabel = editorIsVisible ? 'Hide code editor' : 'Show code editor'
  return (
    <Tooltip content={toggleLabel}>
      {(eventHandlers, ref) => (
        <ActionButton
          ref={ref}
          {...eventHandlers}
          editorIsVisible={editorIsVisible}
          onClick={onClick}
          label={toggleLabel}
          icon={toggleIcon}
          size="xsmall"
        />
      )}
    </Tooltip>
  )
}

const ActionButton = styled(IconButton)<ActionProps>`
  color: ${({ theme, editorIsVisible }) =>
    editorIsVisible
      ? theme.colors.palette.charcoal200
      : theme.colors.palette.charcoal500};
`

const ActionLayout = styled.div<ActionProps>`
  transition: background 0.3s;
  width: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: ${({ theme }) => theme.space.xsmall};
  justify-content: right;
  padding: ${({ theme }) => `${theme.space.xsmall} ${theme.space.small}`};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background: ${({ theme, editorIsVisible }) =>
    editorIsVisible
      ? theme.colors.palette.charcoal700
      : theme.colors.palette.charcoal200};
`

const SandboxWrapper = styled.div`
  overflow: hidden;
  ${({ theme: { lineHeights, colors, radii } }) => `
    line-height: ${lineHeights.medium};
    margin-bottom: ${lineHeights.medium};
    background: ${colors.palette.charcoal100};
    border-radius: ${radii.medium};
    color: ${colors.white};
    border-top: 1px solid ${colors.palette.charcoal200};
  `}
`

const PreviewWrapper = styled.div`
  ${({ theme: { space } }) => `
    padding: ${space.small};
  `}
`

const EditorWrapper = styled.div`
  position: relative;
  min-height: 2.5rem;
  textarea,
  pre {
    ${({ theme: { space } }) => `
      padding: ${space.small} !important;
    `}
  }
`

const ErrorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  ${({ theme: { colors, space } }) => `
    grid-column-gap: ${space.small};
    color: ${colors.palette.red600};
    padding: ${space.small};
    background: ${colors.palette.red100};
  `}
  pre {
    margin: 0;
  }
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  ${({ theme: { colors } }) => `
    background: ${colors.palette.red500};
    color: ${colors.palette.white};
  `}
  svg {
    transform: translateY(-2px);
  }
`
