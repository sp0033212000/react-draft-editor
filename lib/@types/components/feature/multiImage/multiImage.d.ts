import React from 'react';
import { EditorImageContentData, FileUploader, UseUploadFiles } from '../../../';
interface Data {
    image: EditorImageContentData;
    title: string;
    body: string;
}
interface Props {
    data: Array<Data>;
    onChange: (data: Array<Data>) => void;
    readOnly?: boolean;
    contentType: 'twins' | 'triplet';
    fileUploader: FileUploader | undefined;
    useUploadFiles: UseUploadFiles | undefined;
    uploadFilesErrorFeedback: undefined | ((error: {
        title: string;
        content: string;
    }) => void);
}
declare const MultiImage: React.FC<Props>;
export default MultiImage;
