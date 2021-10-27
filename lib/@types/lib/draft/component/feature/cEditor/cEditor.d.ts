import React from 'react';
import { DraftBlockType, EditorState } from 'draft-js';
export declare type EditorDefaultStyleType = 'primary-heading' | 'secondary-heading' | 'primary-body' | 'secondary-body';
export declare type EditorBlockType = DraftBlockType | EditorDefaultStyleType;
interface Props {
    styleType: EditorDefaultStyleType;
    editorState: EditorState | null;
    setEditorState: (editorState: EditorState) => void;
    readOnly?: boolean;
    fixedToolbar?: boolean;
    containerClassName?: string;
    editorClassName?: string;
}
declare const CEditor: React.FC<Props>;
export default CEditor;
