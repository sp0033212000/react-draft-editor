import { EditorState, RawDraftContentState } from 'draft-js';
import { AnnouncementEditorContent, AnnouncementEditorDataUnity, AnnouncementEditorDefaultContent, AnnouncementEditorRawDataUnity } from '..';
export declare const convertToServerData: (editorData: AnnouncementEditorContent) => AnnouncementEditorDefaultContent;
export declare const convertFromServerData: (serverData: Array<AnnouncementEditorRawDataUnity>) => Array<AnnouncementEditorDataUnity>;
export declare const cloneEditorData: (editorData: AnnouncementEditorContent) => AnnouncementEditorContent;
export declare const convertEditorStateToServerData: (editorState: EditorState) => RawDraftContentState;
export declare const convertServerDataToEditorState: (data: RawDraftContentState) => EditorState;
export declare const isEditorEmpty: (editorState: EditorState | null) => boolean;
