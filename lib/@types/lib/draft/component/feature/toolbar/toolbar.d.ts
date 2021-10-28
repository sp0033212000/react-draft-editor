import React from 'react';
import { EditorState } from 'draft-js';
import { EditorDefaultStyleType } from '../cEditor';
interface Props {
    readOnly?: boolean;
    setEditorState?: (editorState: EditorState) => void;
    editorState: EditorState;
    containerEl: HTMLDivElement | null;
    promptRef: JSX.IntrinsicElements['div']['ref'];
    styleType: EditorDefaultStyleType;
    focusing: boolean;
    fixed?: boolean;
}
declare const Toolbar: React.FC<Props>;
export default Toolbar;
