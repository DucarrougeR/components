import { Icon, IconButton, IconNames, Tooltip } from 'looker-lens'
import { PrismTheme, Language } from 'prism-react-renderer'
import React, { FC, ReactNode, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
  withLive,
} from 'react-live'
import styled from 'styled-components'
import prismTheme from './prism-theme'
import { allComponents } from './allComponents'

interface CodeSandboxProps {
  code: string
  language: Language
  editorVisible?: boolean
}

const transformCode = (code: string) => {
  if (code.startsWith(';')) {
    // Workaround for annoying issue where prettier likes to inject a leading semicolon
    return code.replace(/(^;)/g, '')
  } else if (code.startsWith('()') || code.startsWith('class')) {
    return code
  } else {
    return `<>${code}</>`
  }
}

const CodeSandbox = ({
  code,
  language,
  editorVisible = true,
}: CodeSandboxProps) => {
  const [showEditor, setShowEditor] = useState(editorVisible)
  const toggleEditorView = () => {
    setShowEditor(!showEditor)
  }

  return (
    <SandboxWrapper>
      <LiveProvider
        scope={allComponents}
        theme={prismTheme}
        code={code}
        language={language}
        transformCode={code => transformCode(code)}
      >
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
          {showEditor && <LiveEditor />}
          <ActionLayout editorIsVisible={showEditor}>
            <CopyButton code={code} editorIsVisible={showEditor} />
            <ToggleCodeButton
              onClick={toggleEditorView}
              editorIsVisible={showEditor}
            />
          </ActionLayout>
        </EditorWrapper>
      </LiveProvider>
    </SandboxWrapper>
  )
}

// CodeSandbox.defaultProps = { live: true, language: 'jsx' }

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
  children: (error?: string) => ReactNode
  live?: LiveProps
}

const LivePreviewWrapper = styled.div`
  position: relative;
`

export const LiveConsumer = withLive<WithLiveProps>(({ children, live }) => {
  return <>{children((live as LiveProps).error)}</>
})

interface ActionProps {
  editorIsVisible: boolean
}

interface CopyButtonProps extends ActionProps {
  code: string
}

export const CopyButton: FC<CopyButtonProps> = ({ code, editorIsVisible }) => {
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

export const ToggleCodeButton: FC<ToggleButtonProps> = ({
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
