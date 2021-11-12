// Utils
interface UploadFilesParameters {
  allowTypes: string[];
  callback: (files: File[]) => Promise<void>;
  errorFeedback?: (error: { title: string; content: string }) => void;
  size?: number | "unlimited";
  isMultiple?: boolean;
  isNeedValidate?: boolean;
  disableErrorToast?: boolean;
  errorMessage?: {
    size?: { content?: string; title?: string };
    type?: { content?: string; title?: string };
  };
}

export interface UseUploadFiles {
  (props: UploadFilesParameters): {
    createFileInput: () => void;
    // previewImages: string[]
    // selectedFiles: File[] | null
  };
}

export interface useTranslationInterface {
  (): { t: (langKey: string) => string };
}
