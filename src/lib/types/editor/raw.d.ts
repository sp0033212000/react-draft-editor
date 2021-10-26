import { RawDraftContentState } from 'draft-js';
import { AnnouncementEditorCEditorData, AnnouncementEditorImageData, AnnouncementEditorMultiImageData } from './content';
export interface AnnouncementEditorCEditorRawData extends Omit<AnnouncementEditorCEditorData, 'content'> {
    content: RawDraftContentState | null;
}
export declare type AnnouncementEditorRawDataUnity = AnnouncementEditorCEditorRawData | AnnouncementEditorImageData | AnnouncementEditorMultiImageData;
export declare type AnnouncementEditorDefaultContent = Array<AnnouncementEditorRawDataUnity>;
