import { RawDraftContentState } from 'draft-js'
import {
  AnnouncementEditorCEditorData,
  AnnouncementEditorImageData,
  AnnouncementEditorMultiImageData
} from './content'

// Raw Data interface
export interface AnnouncementEditorCEditorRawData
  extends Omit<AnnouncementEditorCEditorData, 'content'> {
  content: RawDraftContentState | null
}

export type AnnouncementEditorRawDataUnity =
  | AnnouncementEditorCEditorRawData
  | AnnouncementEditorImageData
  | AnnouncementEditorMultiImageData
export type AnnouncementEditorDefaultContent = Array<AnnouncementEditorRawDataUnity>
