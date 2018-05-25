import * as React from 'react'
import classNames from 'classnames'
//import * as styles from './CardContent.scss'
import { Block } from '../Block/Block'

export interface CardContentProps {
  className?: undefined
  pad?: 's' | 'm' | 'l' | 'xl'
}


type PropertyBag = {
  [key: string]: any
}

export const CardContent: React.SFC<CardContentProps> = ({className, pad, ...args}) => {

  const styleableProps: PropertyBag = {

  }

  // Use default padding if no pad is supplied
  let padAmount = pad? pad : 'm'

  return (
    <Block p={padAmount} className={classNames(className, styleableProps,)} {...args}>{args.children}</Block>
  )
}

