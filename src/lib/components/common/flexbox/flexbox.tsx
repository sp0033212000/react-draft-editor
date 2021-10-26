import React, { createElement, HTMLAttributes, useMemo } from 'react'
import classNames from 'classnames'
import style from './flexbox.module.scss'

type SupportedEl =
  | EP<'div'>
  | EP<'main'>
  | EP<'footer'>
  | EP<'header'>
  | EP<'li'>
  | EP<'ul'>
  | EP<'ol'>
  | EP<'nav'>
  | EP<'span'>
  | EP<'aside'>
  | EP<'label'>
  | EP<'button'>

interface DefaultProps extends EP<'div'> {
  as?: undefined
  customRef?: DivProps['ref']
}

type ElementProps = SupportedEl | DefaultProps

export interface FlexboxProps {
  condition?: boolean
  direction?: 'row' | 'col'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  expand?: boolean
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

export const Flexbox: React.FC<FlexboxProps & ElementProps> = ({
  as = 'div',
  condition = true,
  children,
  className,
  direction,
  justify = 'center',
  align = 'center',
  expand,
  wrap,
  customRef,
  ...props
}) => {
  const _className = useMemo<HTMLAttributes<HTMLElement>['className']>(
    () =>
      classNames(
        className,
        style.flexbox,
        {
          [style.flexbox__wrap]: wrap === 'wrap',
          [style.flexbox__wrapReverse]: wrap === 'wrap-reverse',
          [style.flexbox__nowrap]: wrap === 'nowrap'
        },
        {
          [style.flexbox__row]: direction === 'row',
          [style.flexbox__col]: direction === 'col'
        },
        {
          [style['flexbox__justifyStart']]: justify === 'start',
          [style['flexbox__justifyEnd']]: justify === 'end',
          [style['flexbox__justifyCenter']]: justify === 'center',
          [style['flexbox__justifyBetween']]: justify === 'between',
          [style['flexbox__justifyAround']]: justify === 'around',
          [style['flexbox__justifyEvenly']]: justify === 'evenly'
        },
        {
          [style['flexbox__itemsStart']]: align === 'start',
          [style['flexbox__itemsEnd']]: align === 'end',
          [style['flexbox__itemsCenter']]: align === 'center',
          [style['flexbox__itemsBaseline']]: align === 'baseline',
          [style['flexbox__itemsStretch']]: align === 'stretch'
        },
        { [style['flexbox__expand']]: expand }
      ),
    [className, direction, justify, align, expand, wrap]
  )

  if (!condition) return null

  return createElement(as, { className: _className, ...props, ref: customRef }, children)
}

export default Flexbox
