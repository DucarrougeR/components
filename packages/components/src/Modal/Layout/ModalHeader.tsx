import React from 'react'
import { IconNames } from '@looker/icons'
import { Box, BoxProps } from '../../Layout/Box'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { ModalContextProps, withModal } from '../ModalContext'

export interface ModalHeaderProps
  extends ModalContextProps,
    BoxProps<HTMLDivElement> {
  /**
   * Content that will be placed inside the DialogHeader
   * @required
   */
  children: React.ReactNode

  /**
   * Specify an icon to be used for close. Defaults to `Close`
   */
  closeIcon?: IconNames
}

const Internal: React.FC<ModalHeaderProps> = ({
  children,
  closeModal,
  closeIcon = 'Close',
  ...props
}) => {
  /*
   * @TODO / Note: When chrome supports `flex-basis: fit-content` minHeight can be removed
   */

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="row"
      // @ts-ignore
      as="header"
      p="large"
      px="xlarge"
      {...props}
    >
      <Box mr="xlarge">{children}</Box>
      <Button
        tabIndex={-1}
        ml="auto"
        p="none"
        variant="transparent"
        color="neutral"
        onClick={closeModal}
      >
        <Icon name={closeIcon} size="1.25rem" />
      </Button>
    </Box>
  )
}

export const ModalHeader = withModal(Internal)
