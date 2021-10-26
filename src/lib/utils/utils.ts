import {
  DraftEntityType,
  EditorState,
  EntityInstance,
  Modifier,
  RichUtils,
  SelectionState,
} from "draft-js";
import Immutable from "immutable";

export const createLinkEntity = (
  editorState: EditorState,
  url: string
): EditorState => {
  if (url.length === 0) return editorState;
  let contentState = editorState.getCurrentContent();
  let selectionState = editorState.getSelection();

  if (selectionState.getStartOffset() === selectionState.getEndOffset()) {
    selectionState = getSelectionStateByRange(editorState, {
      start: selectionState.getAnchorOffset(),
      end: selectionState.getAnchorOffset() + 4,
    });
    contentState = Modifier.insertText(
      contentState,
      editorState.getSelection(),
      "Link",
      Immutable.OrderedSet(["INSERT"])
    );
  }

  const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", {
    url,
  });
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const contentStateWithLink = Modifier.applyEntity(
    contentStateWithEntity,
    selectionState,
    entityKey
  );
  const newEditorState = EditorState.set(editorState, {
    currentContent: contentStateWithLink,
  });

  return RichUtils.toggleLink(newEditorState, selectionState, entityKey);
};

export const editLinkEntity = (
  editorState: EditorState,
  {
    entityKey,
    selectionState,
    url,
  }: { entityKey: string; url: string; selectionState: SelectionState }
): EditorState => {
  const content = editorState.getCurrentContent();
  return EditorState.set(editorState, {
    currentContent: content.replaceEntityData(entityKey, {
      url,
      selectionState,
    }),
  });
};

interface SelectedEntity {
  entityKey: string;
  blockKey: string;
  entity: EntityInstance;
}
interface Range {
  start: number;
  end: number;
}
interface EntityResult extends SelectedEntity, Range {}
export const getEntitiesFromSelection = (
  editorState: EditorState,
  entityType: DraftEntityType
) => {
  const content = editorState.getCurrentContent();
  const entities: Array<EntityResult> = [];
  content.getBlocksAsArray().forEach((block) => {
    let selectedEntity: SelectedEntity = null!;
    block.findEntityRanges(
      (character) => {
        if (character.getEntity() !== null) {
          const entity = content.getEntity(character.getEntity());
          if (
            editorState.getSelection().getStartKey() !== block.getKey() &&
            editorState.getSelection().getEndKey() !== block.getKey()
          )
            return false;
          if (!entityType || (entityType && entity.getType() === entityType)) {
            selectedEntity = {
              entityKey: character.getEntity(),
              blockKey: block.getKey(),
              entity: content.getEntity(character.getEntity()),
            };
            return true;
          }
        }
        return false;
      },
      (start, end) => {
        entities.push({ ...selectedEntity, start, end });
      }
    );
  });
  return entities;
};

export const isSelectionInRange = (
  selection: SelectionState,
  range: Range & { blockKey: string }
): boolean => {
  const selectionStartAt = selection.getStartOffset();
  const selectionEndAt = selection.getEndOffset();
  const selectionStartKey = selection.getStartKey();
  const selectionEndKey = selection.getEndKey();
  const rangeStartAt = range.start;
  const rangeEndAt = range.end;
  const rangeKey = range.blockKey;

  if (
    !isEqual(selectionStartKey, rangeKey) &&
    !isEqual(selectionEndKey, rangeKey)
  )
    return false;

  if (selectionStartAt !== selectionEndAt)
    return selectionStartAt === rangeStartAt && selectionEndAt === rangeEndAt;

  if (
    isNumberInRange(selectionStartAt, rangeStartAt, rangeEndAt) &&
    isEqual(selectionStartKey, rangeKey)
  )
    return true;

  if (
    isNumberInRange(selectionEndAt, rangeStartAt, rangeEndAt) &&
    isEqual(selectionEndKey, rangeKey)
  )
    return true;

  if (
    isNumberInRange(selectionStartAt, rangeStartAt, rangeEndAt) &&
    isNumberInRange(selectionEndAt, rangeStartAt, rangeEndAt) &&
    isEqual(selectionStartKey, selectionEndKey, rangeKey)
  )
    return true;

  return false;
};

export const getCurrentLinkEntityFromEditorState = (
  editorState: EditorState
) => {
  const entities = getEntitiesFromSelection(editorState, "LINK");
  if (entities.length === 0) return null;
  else return entities[0];
};

export const getURLFromLinkEntity = (
  entity: EntityResult | null | undefined
) => {
  if (!entity) return null;
  if (entity.entity.getType() !== "LINK") return null;
  return entity.entity.getData().url;
};

export const isNumberInRange = (
  number: number,
  start: number,
  end: number
): boolean => {
  return start <= number && number <= end;
};

export const isEqual = (...args: any[]): boolean => {
  let equal = false;
  for (let i = 1; i < args.length; i++) {
    const curr = JSON.stringify(args[i]);
    const prev = JSON.stringify(args[i - 1]);
    if (curr === prev) equal = true;
    else return false;
  }
  return equal;
};

export const getSelectionStateByRange = (
  editorState: EditorState,
  entity: Range
) => {
  const selection = editorState.getSelection();
  const content = editorState.getCurrentContent();
  const selectionKey = selection.getAnchorKey();
  const block = content.getBlockForKey(selectionKey);
  const blockKey = block.getKey();

  return new SelectionState({
    anchorOffset: entity.start,
    anchorKey: blockKey,
    focusOffset: entity.end,
    focusKey: blockKey,
    isBackward: false,
    hasFocus: selection.getHasFocus(),
  });
};
