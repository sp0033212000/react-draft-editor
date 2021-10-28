import React from 'react';
import { EditorImageContentData, FileUploader, UseUploadFiles } from '../../../';
interface Props {
    width?: string;
    maxWidth?: string;
    height?: string;
    recommendWidth: number;
    recommendHeight: number;
    data: EditorImageContentData | null | undefined;
    onChange: (image: EditorImageContentData) => void;
    className?: string;
    readOnly?: boolean;
    fileUploader: FileUploader | undefined;
    useUploadFiles: UseUploadFiles | undefined;
    keepAspectRatio?: boolean;
    uploadFilesErrorFeedback: undefined | ((error: {
        title: string;
        content: string;
    }) => void);
}
declare const Image: React.FC<Props>;
export default Image;
