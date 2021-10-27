import { EditorState } from 'draft-js';
import { EditorDefaultStyleType } from '../../lib/draft/component/feature/cEditor';
export interface AnnouncementEditorCEditorData {
    id: string;
    type: 'editor';
    contentType: EditorDefaultStyleType;
    content: EditorState | null;
}
export interface EditorImageContentData {
    url: string;
    name: string;
}
export interface AnnouncementEditorImageData {
    id: string;
    type: 'image';
    contentType: 'image';
    content: EditorImageContentData | null;
}
export interface ImageWithDescriptionContentData {
    image: EditorImageContentData;
    title: string;
    body: string;
}
export interface AnnouncementEditorMultiImageData {
    id: string;
    type: 'multi-image';
    contentType: 'twins' | 'triplet';
    content: Array<ImageWithDescriptionContentData>;
}
export interface AttachmentContentData {
    attachName: string;
    attachUrl: string;
}
export declare type AnnouncementEditorDataUnity = AnnouncementEditorCEditorData | AnnouncementEditorImageData | AnnouncementEditorMultiImageData;
export declare type AnnouncementEditorContent = Array<AnnouncementEditorDataUnity>;
