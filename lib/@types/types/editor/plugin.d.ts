interface UploadFilesParameters {
    allowTypes: string[];
    callback: (files: File[]) => Promise<void>;
    errorFeedback?: (error: {
        title: string;
        content: string;
    }) => void;
    size?: number;
    isMultiple?: boolean;
    isNeedValidate?: boolean;
    disableErrorToast?: boolean;
}
export interface UseUploadFiles {
    (props: UploadFilesParameters): {
        createFileInput: () => void;
    };
}
export interface useTranslationInterface {
    (): {
        t: (langKey: string) => string;
    };
}
export {};
