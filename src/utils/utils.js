"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectionStateByRange = exports.isEqual = exports.isNumberInRange = exports.getURLFromLinkEntity = exports.getCurrentLinkEntityFromEditorState = exports.isSelectionInRange = exports.getEntitiesFromSelection = exports.editLinkEntity = exports.createLinkEntity = void 0;
const draft_js_1 = require("draft-js");
const immutable_1 = __importDefault(require("immutable"));
const createLinkEntity = (editorState, url) => {
    if (url.length === 0)
        return editorState;
    let contentState = editorState.getCurrentContent();
    let selectionState = editorState.getSelection();
    if (selectionState.getStartOffset() === selectionState.getEndOffset()) {
        selectionState = (0, exports.getSelectionStateByRange)(editorState, {
            start: selectionState.getAnchorOffset(),
            end: selectionState.getAnchorOffset() + 4,
        });
        contentState = draft_js_1.Modifier.insertText(contentState, editorState.getSelection(), "Link", immutable_1.default.OrderedSet(["INSERT"]));
    }
    const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", {
        url,
    });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const contentStateWithLink = draft_js_1.Modifier.applyEntity(contentStateWithEntity, selectionState, entityKey);
    const newEditorState = draft_js_1.EditorState.set(editorState, {
        currentContent: contentStateWithLink,
    });
    return draft_js_1.RichUtils.toggleLink(newEditorState, selectionState, entityKey);
};
exports.createLinkEntity = createLinkEntity;
const editLinkEntity = (editorState, { entityKey, selectionState, url, }) => {
    const content = editorState.getCurrentContent();
    return draft_js_1.EditorState.set(editorState, {
        currentContent: content.replaceEntityData(entityKey, {
            url,
            selectionState,
        }),
    });
};
exports.editLinkEntity = editLinkEntity;
const getEntitiesFromSelection = (editorState, entityType) => {
    const content = editorState.getCurrentContent();
    const entities = [];
    content.getBlocksAsArray().forEach((block) => {
        let selectedEntity = null;
        block.findEntityRanges((character) => {
            if (character.getEntity() !== null) {
                const entity = content.getEntity(character.getEntity());
                if (editorState.getSelection().getStartKey() !== block.getKey() &&
                    editorState.getSelection().getEndKey() !== block.getKey())
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
        }, (start, end) => {
            entities.push({ ...selectedEntity, start, end });
        });
    });
    return entities;
};
exports.getEntitiesFromSelection = getEntitiesFromSelection;
const isSelectionInRange = (selection, range) => {
    const selectionStartAt = selection.getStartOffset();
    const selectionEndAt = selection.getEndOffset();
    const selectionStartKey = selection.getStartKey();
    const selectionEndKey = selection.getEndKey();
    const rangeStartAt = range.start;
    const rangeEndAt = range.end;
    const rangeKey = range.blockKey;
    if (!(0, exports.isEqual)(selectionStartKey, rangeKey) &&
        !(0, exports.isEqual)(selectionEndKey, rangeKey))
        return false;
    if (selectionStartAt !== selectionEndAt)
        return selectionStartAt === rangeStartAt && selectionEndAt === rangeEndAt;
    if ((0, exports.isNumberInRange)(selectionStartAt, rangeStartAt, rangeEndAt) &&
        (0, exports.isEqual)(selectionStartKey, rangeKey))
        return true;
    if ((0, exports.isNumberInRange)(selectionEndAt, rangeStartAt, rangeEndAt) &&
        (0, exports.isEqual)(selectionEndKey, rangeKey))
        return true;
    if ((0, exports.isNumberInRange)(selectionStartAt, rangeStartAt, rangeEndAt) &&
        (0, exports.isNumberInRange)(selectionEndAt, rangeStartAt, rangeEndAt) &&
        (0, exports.isEqual)(selectionStartKey, selectionEndKey, rangeKey))
        return true;
    return false;
};
exports.isSelectionInRange = isSelectionInRange;
const getCurrentLinkEntityFromEditorState = (editorState) => {
    const entities = (0, exports.getEntitiesFromSelection)(editorState, "LINK");
    if (entities.length === 0)
        return null;
    else
        return entities[0];
};
exports.getCurrentLinkEntityFromEditorState = getCurrentLinkEntityFromEditorState;
const getURLFromLinkEntity = (entity) => {
    if (!entity)
        return null;
    if (entity.entity.getType() !== "LINK")
        return null;
    return entity.entity.getData().url;
};
exports.getURLFromLinkEntity = getURLFromLinkEntity;
const isNumberInRange = (number, start, end) => {
    return start <= number && number <= end;
};
exports.isNumberInRange = isNumberInRange;
const isEqual = (...args) => {
    let equal = false;
    for (let i = 1; i < args.length; i++) {
        const curr = JSON.stringify(args[i]);
        const prev = JSON.stringify(args[i - 1]);
        if (curr === prev)
            equal = true;
        else
            return false;
    }
    return equal;
};
exports.isEqual = isEqual;
const getSelectionStateByRange = (editorState, entity) => {
    const selection = editorState.getSelection();
    const content = editorState.getCurrentContent();
    const selectionKey = selection.getAnchorKey();
    const block = content.getBlockForKey(selectionKey);
    const blockKey = block.getKey();
    return new draft_js_1.SelectionState({
        anchorOffset: entity.start,
        anchorKey: blockKey,
        focusOffset: entity.end,
        focusKey: blockKey,
        isBackward: false,
        hasFocus: selection.getHasFocus(),
    });
};
exports.getSelectionStateByRange = getSelectionStateByRange;
//# sourceMappingURL=utils.js.map