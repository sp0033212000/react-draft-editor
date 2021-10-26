import { EditorState } from 'draft-js'
import { EditorDefaultStyleType } from '../../lib/draft/component/feature/cEditor'

// Content Data Interface
export interface AnnouncementEditorCEditorData {
  id: string
  type: 'editor'
  contentType: EditorDefaultStyleType
  content: EditorState | null
}

export interface EditorImageContentData {
  url: string
  name: string
}
export interface AnnouncementEditorImageData {
  id: string
  type: 'image'
  contentType: 'image'
  content: EditorImageContentData | null
}

export interface ImageWithDescriptionContentData {
  image: EditorImageContentData
  title: string
  body: string
}
export interface AnnouncementEditorMultiImageData {
  id: string
  type: 'multi-image'
  contentType: 'twins' | 'triplet'
  content: Array<ImageWithDescriptionContentData>
}

export interface AttachmentContentData {
  attachName: string
  attachUrl: string
}

export type AnnouncementEditorDataUnity =
  | AnnouncementEditorCEditorData
  | AnnouncementEditorImageData
  | AnnouncementEditorMultiImageData
export type AnnouncementEditorContent = Array<AnnouncementEditorDataUnity>
