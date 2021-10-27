import { EditorState } from 'draft-js'
import {
  AnnouncementEditorCEditorData,
  AnnouncementEditorImageData,
  AnnouncementEditorMultiImageData,
  EditorImageContentData,
  ImageWithDescriptionContentData
} from './content'
import { UseUploadFiles } from './plugin'

// Editor Block Component Props
export interface AnnouncementEditorCEditorComponentProps extends AnnouncementEditorCEditorData {
  onChange: (editorState: EditorState) => void
  fileUploader: undefined
  useUploadFiles: undefined
  uploadFilesErrorFeedback: undefined
}

export interface FileUploader {
  (files: File[]): Promise<Array<{ fileName: string; filePath: string }> | null>
}
export interface AnnouncementEditorImageComponentProps extends AnnouncementEditorImageData {
  onChange: (data: EditorImageContentData) => void
  fileUploader: FileUploader
  useUploadFiles: UseUploadFiles
  uploadFilesErrorFeedback: (error: { title: string; content: string }) => void
}

export interface AnnouncementEditorMultiImageComponentProps
  extends AnnouncementEditorMultiImageData {
  onChange: (data: Array<ImageWithDescriptionContentData>) => void
  fileUploader: FileUploader
  useUploadFiles: UseUploadFiles
  uploadFilesErrorFeedback: (error: { title: string; content: string }) => void
}

export type AnnouncementEditorComponentPropsUnity =
  | AnnouncementEditorCEditorComponentProps
  | AnnouncementEditorImageComponentProps
  | AnnouncementEditorMultiImageComponentProps
