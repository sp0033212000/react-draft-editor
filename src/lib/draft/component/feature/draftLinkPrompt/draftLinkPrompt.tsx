import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import style from './draftLinkPrompt.module.scss'

import classNames from 'classnames'
import Joi from 'joi'

import { ReactComponent as Unlink } from '../../../../../assets/icons/unlink.svg'
import Modal from '../../../../../components/feature/modal'
import Flexbox from '../../../../../components/common/flexbox'

interface Props {
  open: boolean
  confirmHandler: (url: string) => void
  cancelHandler: () => void
  currentSelectionURL: string | null
  customRef: JSX.IntrinsicElements['div']['ref']
}
const DraftLinkPrompt: React.FC<Props> = ({
  open,
  confirmHandler,
  cancelHandler,
  currentSelectionURL,
  customRef
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<{ url: string }>({ mode: 'all', defaultValues: { url: '' } })

  useEffect(() => {
    if (!currentSelectionURL) {
      reset({ url: '' })
    } else {
      reset({
        url: currentSelectionURL
      })
    }
  }, [currentSelectionURL])

  return (
    <Modal customRef={customRef} onFocus={event => event.stopPropagation()} visible={open}>
      <div className={classNames(style.draftLinkPrompt)}>
        <h2 className={classNames('text-2xl', 'font-bold', 'text-gray-900', 'mb-4')}>請輸入連結</h2>
        <input
          {...register('url', {
            validate: value => {
              return value && value.length !== 0 && Joi.string().uri().validate(value)?.error
                ? '請輸入正確的網址連結格式。'
                : undefined
            }
          })}
          className={classNames(style['draftLinkPrompt__input'])}
        />
        {errors.url?.message && (
          <p className={classNames(style['draftLinkPrompt__error'])}>{errors.url?.message}</p>
        )}
        <Flexbox className={classNames(style['draftLinkPrompt__btnGroup'])}>
          {!!currentSelectionURL && (
            <button
              onClick={() => confirmHandler('')}
              type={'button'}
              className={classNames(style['draftLinkPrompt__unlinkBtn'])}
            >
              <Unlink />
            </button>
          )}
          <button
            type={'button'}
            onClick={cancelHandler}
            className={classNames(
              style['draftLinkPrompt__btn'],
              style['draftLinkPrompt__btn--accept']
            )}
          >
            取消
          </button>
          <button
            type={'button'}
            onClick={handleSubmit(({ url }) => confirmHandler(url))}
            className={classNames(
              style['draftLinkPrompt__btn'],
              style['draftLinkPrompt__btn--denied']
            )}
          >
            確定
          </button>
        </Flexbox>
      </div>
    </Modal>
  )
}

export default DraftLinkPrompt
