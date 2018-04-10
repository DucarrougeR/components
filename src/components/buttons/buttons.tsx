import * as React from 'react'
import * as classNames from 'classnames'
import * as styles from './buttons.scss'
import { capitalize } from '../../utils/strings'

export interface LookerButtonHTMLAttributes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any
  /** mode is the color style */
  mode?: string | undefined
  size?: string | undefined
  state?: 'active' | 'hover' | undefined
}

export {
  styles as buttonStyles
}

type PropertyBag = {
  [key: string]: any
}

/**
 * Here's a basic button
 * @param {string} className
 * @param {string | undefined} size
 * @param {"default" | "ghost" | undefined} mode
 * @param {*} args
 * @returns {any}
 * @constructor
 */
export const Button = ({className, size, mode, state, ...args}: LookerButtonHTMLAttributes) => {
  const styleableProps: PropertyBag = {
    [styles.active]: state == 'active',
    [styles.hover]: state == 'hover'
  }
  if (size) styleableProps[(styles as PropertyBag)[`size${capitalize(size)}`]] = true
  if (mode) styleableProps[(styles as PropertyBag)[`mode${capitalize(mode)}`]] = true
  if (args.disabled) styleableProps['modeDisabled'] = true

  return (
    <button className={classNames(styles.button, className, styleableProps)} {...args}>{args.children}</button>
  )
}
