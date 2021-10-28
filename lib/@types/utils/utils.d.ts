import { DraftEntityType, EditorState, EntityInstance, SelectionState } from "draft-js";
export declare const createLinkEntity: (editorState: EditorState, url: string) => EditorState;
export declare const editLinkEntity: (editorState: EditorState, { entityKey, selectionState, url, }: {
    entityKey: string;
    url: string;
    selectionState: SelectionState;
}) => EditorState;
interface SelectedEntity {
    entityKey: string;
    blockKey: string;
    entity: EntityInstance;
}
interface Range {
    start: number;
    end: number;
}
interface EntityResult extends SelectedEntity, Range {
}
export declare const getEntitiesFromSelection: (editorState: EditorState, entityType: DraftEntityType) => EntityResult[];
export declare const isSelectionInRange: (selection: SelectionState, range: Range & {
    blockKey: string;
}) => boolean;
export declare const getCurrentLinkEntityFromEditorState: (editorState: EditorState) => EntityResult | null;
export declare const getURLFromLinkEntity: (entity: EntityResult | null | undefined) => any;
export declare const isNumberInRange: (number: number, start: number, end: number) => boolean;
export declare const isEqual: (...args: any[]) => boolean;
export declare const getSelectionStateByRange: (editorState: EditorState, entity: Range) => SelectionState;
export {};
