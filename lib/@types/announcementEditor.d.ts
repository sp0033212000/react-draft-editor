import React from 'react';
import type { AnnouncementEditorContent, AnnouncementEditorDataUnity, AttachmentContentData, FileUploader, useTranslationInterface, UseUploadFiles } from '.';
interface Props {
    content: AnnouncementEditorContent;
    attachment: Array<AttachmentContentData> | null;
    attachmentChangeHandler?: (data: Array<AttachmentContentData> | null) => void;
    readOnly?: boolean;
    fileUploader?: FileUploader;
    useUploadFiles?: UseUploadFiles;
    useTranslation?: useTranslationInterface;
    contentChangeHandler?: (id: string, content: AnnouncementEditorDataUnity['content']) => void;
    moveTowardHandler?: React.MouseEventHandler<HTMLButtonElement>;
    moveBackwardHandler?: React.MouseEventHandler<HTMLButtonElement>;
    removeContent?: React.MouseEventHandler<HTMLButtonElement>;
    uploadFilesErrorFeedback?: (error: {
        title: string;
        content: string;
    }) => void;
}
declare const AnnouncementEditor: React.FC<Props>;
export default AnnouncementEditor;
