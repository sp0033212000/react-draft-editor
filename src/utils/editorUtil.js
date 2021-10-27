"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEditorEmpty = exports.convertServerDataToEditorState = exports.convertEditorStateToServerData = exports.cloneEditorData = exports.convertFromServerData = exports.convertToServerData = void 0;
const draft_js_1 = require("draft-js");
const decorator_1 = require("../lib/draft/decorator");
const utils_1 = require("../utils");
const uuid_1 = require("uuid");
const convertToServerData = (editorData) => {
    let result = [];
    editorData?.forEach(data => {
        if (data.type === 'editor') {
            if ((0, utils_1.isNotSet)(data.content))
                return;
            result.push({
                ...data,
                content: (0, exports.convertEditorStateToServerData)(data.content)
            });
        }
        else {
            result.push(data);
        }
    });
    return result;
};
exports.convertToServerData = convertToServerData;
const convertFromServerData = (serverData) => {
    let result = [];
    serverData?.forEach(data => {
        if (data.type === 'editor') {
            if ((0, utils_1.isNotSet)(data.content))
                return;
            result.push({
                ...data,
                content: (0, exports.convertServerDataToEditorState)(data.content)
            });
        }
        else {
            result.push(data);
        }
    });
    return result;
};
exports.convertFromServerData = convertFromServerData;
const cloneEditorData = (editorData) => {
    return editorData.map(data => ({ ...data, id: (0, uuid_1.v4)() }));
};
exports.cloneEditorData = cloneEditorData;
const convertEditorStateToServerData = (editorState) => {
    return (0, draft_js_1.convertToRaw)(editorState.getCurrentContent());
};
exports.convertEditorStateToServerData = convertEditorStateToServerData;
const convertServerDataToEditorState = (data) => {
    try {
        return draft_js_1.EditorState.createWithContent((0, draft_js_1.convertFromRaw)(data), decorator_1.decorator);
    }
    catch (e) {
        return draft_js_1.EditorState.createEmpty(decorator_1.decorator);
    }
};
exports.convertServerDataToEditorState = convertServerDataToEditorState;
const isEditorEmpty = (editorState) => {
    console.log(editorState);
    if (editorState === null)
        return false;
    console.log(editorState.getCurrentContent().hasText());
    return editorState.getCurrentContent().hasText();
};
exports.isEditorEmpty = isEditorEmpty;
//# sourceMappingURL=editorUtil.js.map