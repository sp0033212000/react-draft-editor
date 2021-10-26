import React from 'react';
import { AttachmentContentData, FileUploader, UseUploadFiles } from '../../../';
import { useTranslationInterface } from '../../../index';
interface Props {
    files: Array<AttachmentContentData> | null;
    onChange?: (data: Props['files']) => void;
    fileUploader: FileUploader | undefined;
    useUploadFiles: UseUploadFiles | undefined;
    readOnly?: boolean;
    useTranslation?: useTranslationInterface;
    uploadFilesErrorFeedback: undefined | ((error: {
        title: string;
        content: string;
    }) => void);
}
declare const AttachmentSection: React.FC<Props>;
export default AttachmentSection;
