import "@babel/polyfill";

export type {
  EditorDefaultStyleType,
  EditorBlockType,
} from "./lib/draft/component/feature/cEditor/cEditor";
export type { EditorState, ContentState } from "draft-js";
export { default as CEditor } from "./lib/draft/component/feature/cEditor/cEditor";

export { default } from "./announcementEditor";

export * from "./utils";
export * from "./hooks/useInteractiveOutsideTargetHandler";
export * from "./hooks/useAsyncPrompt";

export type {
  AnnouncementEditorDataUnity,
  AnnouncementEditorContent,
  AnnouncementEditorCEditorComponentProps,
  AnnouncementEditorCEditorRawData,
  AnnouncementEditorDefaultContent,
  AnnouncementEditorImageData,
  AnnouncementEditorMultiImageData,
  EditorImageContentData,
  ImageWithDescriptionContentData,
  AttachmentContentData,
  AnnouncementEditorMultiImageComponentProps,
  AnnouncementEditorRawDataUnity,
  AnnouncementEditorImageComponentProps,
  AnnouncementEditorComponentPropsUnity,
  AnnouncementEditorCEditorData,
  FileUploader,
  UseUploadFiles,
  useTranslationInterface,
} from "./types/editor";
