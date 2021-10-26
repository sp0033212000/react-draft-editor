import React, { useLayoutEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import style from './announcementEditor.module.scss'

import useInteractiveOutsideTargetHandler from './hooks/useInteractiveOutsideTargetHandler'
import { isSet } from './utils'

import type {
  AnnouncementEditorComponentPropsUnity,
  AnnouncementEditorContent,
  AnnouncementEditorDataUnity,
  AttachmentContentData,
  FileUploader,
  useTranslationInterface,
  UseUploadFiles
} from '.'

import { ReactComponent as ArrowDown } from './assets/icons/arrow_down.svg'
import { ReactComponent as ArrowUp } from './assets/icons/arrow_up.svg'
import { ReactComponent as Trash } from './assets/icons/trash.svg'
import Flexbox from './components/common/flexbox'
import Fragment from './components/common/fragment'
import CEditor from './lib/draft/component/feature/cEditor'
import Image from './components/feature/image'
import MultiImage from './components/feature/multiImage'
import AttachmentSection from './components/feature/attachmentSection'

interface Props {
  content: AnnouncementEditorContent
  attachment: Array<AttachmentContentData> | null
  attachmentChangeHandler?: (data: Array<AttachmentContentData> | null) => void
  readOnly?: boolean
  fileUploader?: FileUploader
  useUploadFiles?: UseUploadFiles
  useTranslation?: useTranslationInterface
  contentChangeHandler?: (id: string, content: AnnouncementEditorDataUnity['content']) => void
  moveTowardHandler?: React.MouseEventHandler<HTMLButtonElement>
  moveBackwardHandler?: React.MouseEventHandler<HTMLButtonElement>
  removeContent?: React.MouseEventHandler<HTMLButtonElement>
  uploadFilesErrorFeedback?: (error: { title: string; content: string }) => void
}
const AnnouncementEditor: React.FC<Props> = ({
  content,
  readOnly,
  attachment,
  attachmentChangeHandler,
  fileUploader,
  useUploadFiles,
  useTranslation,
  contentChangeHandler,
  moveTowardHandler,
  moveBackwardHandler,
  removeContent,
  uploadFilesErrorFeedback
}) => {
  return (
    <div className={classNames(style['announcementEditor'])}>
      {content.map((contentDetail, index, array) => {
        return (
          <AnnouncementEditorFunctionalWrapper
            disable={readOnly}
            index={index}
            id={contentDetail.id}
            key={contentDetail.id}
            isFirst={index === 0}
            isLast={index + 1 === array.length}
            moveTowardHandler={moveTowardHandler}
            moveBackwardHandler={moveBackwardHandler}
            removeContent={removeContent}
          >
            {/*@ts-ignore*/}
            <AnnouncementEditorContentDispatchers
              id={contentDetail.id}
              type={contentDetail.type}
              contentType={contentDetail.contentType}
              content={contentDetail.content}
              readOnly={readOnly}
              onChange={(newContent: AnnouncementEditorDataUnity['content']) =>
                contentChangeHandler?.(contentDetail.id, newContent)
              }
              fileUploader={fileUploader}
              useUploadFiles={useUploadFiles}
              uploadFilesErrorFeedback={uploadFilesErrorFeedback}
            />
          </AnnouncementEditorFunctionalWrapper>
        )
      })}
      <Fragment condition={isSet(attachment)}>
        <AnnouncementEditorFunctionalWrapper
          disable={readOnly}
          removeContent={() => attachmentChangeHandler?.(null)}
        >
          <AttachmentSection
            files={attachment}
            onChange={attachmentChangeHandler}
            useUploadFiles={useUploadFiles}
            fileUploader={fileUploader}
            readOnly={readOnly}
            useTranslation={useTranslation}
            uploadFilesErrorFeedback={uploadFilesErrorFeedback}
          />
        </AnnouncementEditorFunctionalWrapper>
      </Fragment>
    </div>
  )
}

export default AnnouncementEditor

const AnnouncementEditorContentDispatchers: React.FC<
  AnnouncementEditorComponentPropsUnity & {
    readOnly?: boolean
  }
> = props => {
  switch (props.type) {
    case 'editor':
      return (
        <CEditor
          styleType={props.contentType}
          editorState={props.content}
          setEditorState={props.onChange}
          readOnly={props.readOnly}
        />
      )
    case 'image':
      return (
        <Image
          fileUploader={props.fileUploader}
          useUploadFiles={props.useUploadFiles}
          recommendWidth={1200}
          recommendHeight={540}
          data={props.content}
          onChange={image => props.onChange(image)}
          readOnly={props.readOnly}
          uploadFilesErrorFeedback={props.uploadFilesErrorFeedback}
        />
      )
    case 'multi-image':
      return (
        <MultiImage
          fileUploader={props.fileUploader}
          useUploadFiles={props.useUploadFiles}
          contentType={props.contentType}
          data={props.content}
          onChange={props.onChange}
          readOnly={props.readOnly}
          uploadFilesErrorFeedback={props.uploadFilesErrorFeedback}
        />
      )
    default:
      return null
  }
}

interface AnnouncementEditorFunctionalWrapperProps {
  isLast?: boolean
  isFirst?: boolean
  moveTowardHandler?: React.MouseEventHandler<HTMLButtonElement>
  moveBackwardHandler?: React.MouseEventHandler<HTMLButtonElement>
  removeContent?: React.MouseEventHandler<HTMLButtonElement>
  index?: number
  id?: string
  disable?: boolean
}
const AnnouncementEditorFunctionalWrapper: React.FC<AnnouncementEditorFunctionalWrapperProps> = ({
  children,
  isLast,
  isFirst,
  moveTowardHandler,
  moveBackwardHandler,
  removeContent,
  index,
  id,
  disable
}) => {
  const [focusing, setFocusing] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    ref?.current?.scrollIntoView()
  }, [])

  useInteractiveOutsideTargetHandler(ref.current, () => setFocusing(false))

  if (disable) return <React.Fragment>{children}</React.Fragment>

  return (
    <div
      ref={ref}
      onFocus={() => setFocusing(true)}
      onClick={() => setFocusing(true)}
      className={classNames(style['announcementEditor__functionalWrapper'])}
    >
      {children}
      <Flexbox
        condition={focusing}
        direction={'col'}
        className={classNames(style['announcementEditor__functionalWrapper--container'])}
      >
        <Fragment condition={!isFirst && isSet(isFirst)}>
          <button
            data-index={index}
            data-id={id}
            onClick={moveTowardHandler}
            type={'button'}
            className={classNames(style['announcementEditor__functionalWrapper--btn'])}
          >
            <ArrowUp />
          </button>
          <span className={classNames(style['announcementEditor__functionalWrapper--divider'])} />
        </Fragment>
        <Fragment condition={!isLast && isSet(isLast)}>
          <button
            data-index={index}
            data-id={id}
            onClick={moveBackwardHandler}
            type={'button'}
            className={classNames(style['announcementEditor__functionalWrapper--btn'])}
          >
            <ArrowDown />
          </button>
          <span className={classNames(style['announcementEditor__functionalWrapper--divider'])} />
        </Fragment>
        <button
          data-id={id}
          onClick={removeContent}
          type={'button'}
          className={classNames(style['announcementEditor__functionalWrapper--btn'])}
        >
          <Trash />
        </button>
      </Flexbox>
    </div>
  )
}
