import {
  convertFromRaw,
  convertToRaw,
  EditorState,
  RawDraftContentState,
} from "draft-js";
import {
  AnnouncementEditorContent,
  AnnouncementEditorDataUnity,
  AnnouncementEditorDefaultContent,
  AnnouncementEditorRawDataUnity,
} from "..";
import { decorator } from "../lib/draft/decorator";
import { isNotSet } from "../utils";
import { v4 as uuidV4 } from "uuid";

export const convertToServerData = (
  editorData: AnnouncementEditorContent
): AnnouncementEditorDefaultContent => {
  let result: AnnouncementEditorDefaultContent = [];

  editorData?.forEach((data) => {
    if (data.type === "editor") {
      if (isNotSet(data.content)) return;
      result.push({
        ...data,
        content: convertEditorStateToServerData(data.content),
      });
    } else if (data.type === "image" || data.type === "multi-image") {
      result.push(data);
    }
  });

  return result;
};

export const convertFromServerData = (
  serverData: Array<AnnouncementEditorRawDataUnity>
): Array<AnnouncementEditorDataUnity> => {
  let result: Array<AnnouncementEditorDataUnity> = [];

  serverData?.forEach((data) => {
    if (data.type === "editor") {
      if (isNotSet(data.content)) return;
      result.push({
        ...data,
        content: convertServerDataToEditorState(data.content),
      });
    } else if (data.type === "image" || data.type === "multi-image") {
      result.push(data);
    }
  });
  return result;
};

export const cloneEditorData = (
  editorData: AnnouncementEditorContent
): AnnouncementEditorContent => {
  return editorData.map((data) => ({ ...data, id: uuidV4() }));
};

export const convertEditorStateToServerData = (editorState: EditorState) => {
  return convertToRaw(editorState.getCurrentContent());
};

export const convertServerDataToEditorState = (data: RawDraftContentState) => {
  try {
    return EditorState.createWithContent(convertFromRaw(data), decorator);
  } catch (e) {
    return EditorState.createEmpty(decorator);
  }
};

export const isEditorEmpty = (editorState: EditorState | null): boolean => {
  console.log(editorState);

  if (editorState === null) return false;
  console.log(editorState.getCurrentContent().hasText());
  return editorState.getCurrentContent().hasText();
};
