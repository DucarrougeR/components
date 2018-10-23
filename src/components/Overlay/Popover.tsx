import * as React from 'react'
import { PopperChildrenProps } from 'react-popper'
import { styled } from '../../style'
import { Box } from '../Box'
import { OverlayTrigger, OverlayTriggerProps } from './OverlayTrigger'

const PopoverArrow = styled.div`
  position: absolute;

  &:before {
    content: '';
    margin: auto;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${p => p.theme.colors.palette.white};
    border-bottom: 1px solid ${p => p.theme.colors.palette.charcoal200};
    border-right: 1px solid ${p => p.theme.colors.palette.charcoal200};
  }

  &[data-placement='top'] {
    bottom: -0.3125rem;
    margin: 0 1rem;
    &:before {
      transform: rotate(45deg);
    }
  }

  &[data-placement='right'] {
    left: -0.3125rem;
    margin: 1rem 0;
    &:before {
      transform: rotate(135deg);
    }
  }

  &[data-placement='bottom'] {
    top: -0.3125rem;
    margin: 0 1rem;
    &:before {
      transform: rotate(225deg);
    }
  }

  &[data-placement='left'] {
    right: -0.3125rem;
    margin: 1rem 0;
    &:before {
      transform: rotate(315deg);
    }
  }
`

const PopoverContent = (
  content: any,
  zIndex?: number
): React.SFC<PopperChildrenProps> => {
  return ({ ...props }) => {
    return (
      <Box
        position="relative"
        innerRef={props.ref}
        style={props.style}
        p="small"
        m="small"
        bg="palette.white"
        borderRadius={4}
        border="1px solid"
        borderColor="palette.charcoal200"
        zIndex={zIndex}
      >
        {content}
        <PopoverArrow
          innerRef={props.arrowProps.ref}
          style={props.arrowProps.style}
          data-placement={props.placement}
        />
      </Box>
    )
  }
}

export interface PopoverProps extends OverlayTriggerProps {
  zIndex?: number
}

export const Popover: React.SFC<PopoverProps> = ({ content, ...props }) => {
  return (
    <OverlayTrigger popper={PopoverContent(content, props.zIndex)} {...props}>
      {props.children}
    </OverlayTrigger>
  )
}
