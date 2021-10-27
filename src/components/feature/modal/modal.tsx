import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import style from './modal.module.scss'

import classNames from 'classnames'
import Flexbox from '../../common/flexbox'

type DivProps = JSX.IntrinsicElements['div']

interface Props extends Omit<DivProps, 'onClick'> {
  visible: boolean
  onBackdrop?: DivProps['onClick']
  disableDefaultZIndex?: boolean
  customRef?: DivProps['ref']
}

export const Modal: React.FC<Props> = ({
  children,
  visible,
  onBackdrop,
  className,
  disableDefaultZIndex,
  customRef,
  ...props
}) => {
  const clickHandler: React.MouseEventHandler<HTMLDivElement> = useCallback(
    event => {
      event.stopPropagation()
      onBackdrop?.(event)
    },
    [onBackdrop]
  )
  if (!visible) return null

  return ReactDOM.createPortal(
    <Flexbox
      customRef={customRef}
      onClick={clickHandler}
      className={classNames(className, style['modal'], {
        [style['modal__defaultZindex']]: !disableDefaultZIndex
      })}
      {...props}
    >
      {children}
    </Flexbox>,
    document.querySelector('body')!
  )
}

export default Modal
