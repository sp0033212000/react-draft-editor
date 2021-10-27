import React, { useCallback } from 'react'
import classNames from 'classnames'
import style from './attachmentSection.module.scss'

import { isNotEmptyArray, isNotSet, isSet, isTrue } from '../../../utils'

import { ReactComponent as UploadIcon } from '../../../assets/icons/upload_square.svg'
import { ReactComponent as TimesIcon } from '../../../assets/icons/akar-icons_cross.svg'
import Flexbox from '../../common/flexbox'
import { AttachmentContentData, FileUploader, UseUploadFiles } from '../../../'
import Fragment from '../../common/fragment'
import { useTranslationInterface } from '../../../index'

interface Props {
  files: Array<AttachmentContentData> | null
  onChange?: (data: Props['files']) => void
  fileUploader: FileUploader | undefined
  useUploadFiles: UseUploadFiles | undefined
  readOnly?: boolean
  useTranslation?: useTranslationInterface
  uploadFilesErrorFeedback: undefined | ((error: { title: string; content: string }) => void)
}
const AttachmentSection: React.FC<Props> = ({
  files,
  onChange,
  fileUploader,
  useUploadFiles,
  readOnly,
  useTranslation,
  uploadFilesErrorFeedback
}) => {
  const removeHandler: React.MouseEventHandler<HTMLButtonElement> = event => {
    if (isNotSet(onChange)) return

    const targetIndex = Number(event.currentTarget.getAttribute('data-index'))
    if (isNotSet(targetIndex) || isNaN(targetIndex)) return
    if (isNotSet(files)) return
    onChange(files.filter((_, index) => index !== targetIndex))
  }

  const fileUploadHandler = useCallback(
    async (attach: File[]) => {
      if (isNotSet(onChange)) return
      if (isNotSet(fileUploader) || isNotSet(plugin)) return
      const result = await fileUploader(attach)
      if (isSet(result) && isNotEmptyArray(result)) {
        const allFile = result.map<AttachmentContentData>(({ fileName, filePath }) => ({
          attachName: fileName,
          attachUrl: filePath
        }))
        onChange([...(files || []), ...allFile])
      }
    },
    [onChange, files]
  )

  const plugin = useUploadFiles?.({
    callback: fileUploadHandler,
    allowTypes: [
      '.csv',
      'text/csv',
      'text/comma-separated-values',
      'application/csv',
      'application/excel',
      'application/vnd.ms-excel',
      'application/vnd.msexcel',
      'text/anytext',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ],
    isMultiple: true,
    isNeedValidate: true,
    errorFeedback: uploadFilesErrorFeedback,
    disableErrorToast: true
  })

  if (isNotSet(files)) return null

  return (
    <div aria-readonly={readOnly} className={classNames(style['attachmentSection'])}>
      <Flexbox
        condition={!readOnly}
        justify={'between'}
        className={classNames(style['attachmentSection__header'])}
      >
        <p>文章附件</p>
        <button
          onClick={plugin?.createFileInput}
          className={classNames(style['attachmentSection__uploadBtn'])}
        >
          <UploadIcon />
          上傳附件
        </button>
      </Flexbox>
      <div aria-readonly={readOnly} className={classNames(style['attachmentSection__content'])}>
        {files?.map((file, index) => (
          <AttachmentItem
            key={file.attachUrl}
            attachUrl={file.attachUrl}
            attachName={file.attachName}
            index={index}
            removeHandler={removeHandler}
            readOnly={readOnly}
            useTranslation={useTranslation}
          />
        ))}
      </div>
    </div>
  )
}

export default AttachmentSection

const AttachmentItem: React.FC<
  NonNullable<Props['files']>[number] & {
    index: number
    removeHandler: React.MouseEventHandler<HTMLButtonElement>
    readOnly?: boolean
    useTranslation?: useTranslationInterface
  }
> = ({ index, removeHandler, attachName, attachUrl, readOnly, useTranslation }) => {
  const langPlugin = useTranslation?.()

  return (
    <Flexbox justify={'start'} className={classNames(style['attachmentSection__attach'])}>
      <Fragment condition={!readOnly}>
        <button
          data-index={index}
          onClick={removeHandler}
          className={classNames(style['attachmentSection__removeBtn'])}
        >
          <TimesIcon />
        </button>
      </Fragment>
      <p>{attachName}</p>
      <Fragment condition={isTrue(readOnly)}>
        <a
          className={classNames(style['attachmentSection__download'])}
          href={attachUrl}
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          {langPlugin?.t(`share.download`) || '下載'}
        </a>
      </Fragment>
    </Flexbox>
  )
}
