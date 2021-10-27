"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const cEditor_module_scss_1 = __importDefault(require("./cEditor.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const draft_js_1 = require("draft-js");
const decorator_1 = require("../../../decorator");
const useInteractiveOutsideTargetHandler_1 = __importDefault(require("../../../../../hooks/useInteractiveOutsideTargetHandler"));
const inlineStyle_1 = require("../../../inlineStyle/inlineStyle");
const utils_1 = require("../../../../../utils");
const toolbar_1 = __importDefault(require("../toolbar"));
const blockRenderMap_1 = __importDefault(require("../../../blockRenderMap"));
const DEFAULT_PRIMARY_HEADING_CONTENT = (0, draft_js_1.convertFromRaw)({
    blocks: [
        {
            key: (0, draft_js_1.genKey)(),
            type: 'primary-heading',
            depth: 0,
            text: '',
            inlineStyleRanges: [],
            entityRanges: []
        }
    ],
    entityMap: {}
});
const DEFAULT_SECONDARY_HEADING_CONTENT = (0, draft_js_1.convertFromRaw)({
    blocks: [
        {
            key: (0, draft_js_1.genKey)(),
            type: 'secondary-heading',
            depth: 0,
            text: '',
            inlineStyleRanges: [],
            entityRanges: []
        }
    ],
    entityMap: {}
});
const DEFAULT_PRIMARY_BODY_CONTENT = (0, draft_js_1.convertFromRaw)({
    blocks: [
        {
            key: (0, draft_js_1.genKey)(),
            type: 'primary-body',
            depth: 0,
            text: '',
            inlineStyleRanges: [],
            entityRanges: []
        }
    ],
    entityMap: {}
});
const DEFAULT_SECONDARY_BODY_CONTENT = (0, draft_js_1.convertFromRaw)({
    blocks: [
        {
            key: (0, draft_js_1.genKey)(),
            type: 'secondary-body',
            depth: 0,
            text: '',
            inlineStyleRanges: [],
            entityRanges: []
        }
    ],
    entityMap: {}
});
const STYLE_EDITOR_STATE = {
    'primary-heading': draft_js_1.EditorState.createWithContent(DEFAULT_PRIMARY_HEADING_CONTENT, decorator_1.decorator),
    'secondary-heading': draft_js_1.EditorState.createWithContent(DEFAULT_SECONDARY_HEADING_CONTENT, decorator_1.decorator),
    'primary-body': draft_js_1.EditorState.createWithContent(DEFAULT_PRIMARY_BODY_CONTENT, decorator_1.decorator),
    'secondary-body': draft_js_1.EditorState.createWithContent(DEFAULT_SECONDARY_BODY_CONTENT, decorator_1.decorator)
};
const CEditor = ({ styleType, editorState, setEditorState, readOnly, fixedToolbar, containerClassName, editorClassName }) => {
    const [focusing, setFocusing] = (0, react_1.useState)(false);
    const [promptRef, setPromptRef] = (0, react_1.useState)(null);
    const draftRef = (0, react_1.useRef)(null);
    const containerRef = (0, react_1.useRef)(null);
    const rawEditorDataString = editorState
        ? JSON.stringify((0, utils_1.convertEditorStateToServerData)(editorState))
        : null;
    (0, useInteractiveOutsideTargetHandler_1.default)(containerRef.current, () => setFocusing(false), [promptRef]);
    (0, react_1.useEffect)(() => {
        if ((0, utils_1.isNotSet)(editorState)) {
            setEditorState(STYLE_EDITOR_STATE[styleType]);
        }
    }, [editorState]);
    (0, react_1.useEffect)(() => {
        focusElement();
    }, [rawEditorDataString]);
    const focusElement = (0, react_1.useCallback)(() => {
        const parentElement = window.getSelection()?.focusNode?.parentElement;
        if ((0, utils_1.isNotSet)(parentElement))
            return;
        parentElement.focus();
    }, []);
    const focusEventHandler = () => {
        if ((0, utils_1.isNotSet)(draftRef.current))
            return;
        draftRef.current.focus();
        setFocusing(true);
    };
    if ((0, utils_1.isNotSet)(editorState))
        return null;
    const keyBindingFn = (e) => {
        //prevent cursor from selecting the next interactive element
        if (e.key === 'Tab') {
            e.preventDefault();
            // assign a constant for the new editorState
            const newState = draft_js_1.RichUtils.onTab(e, editorState, 1);
            // if a new editor state exists, set editor state to new state
            // and return 'handled', otherwise return 'not-handled
            setEditorState(newState);
            return null;
        }
        return (0, draft_js_1.getDefaultKeyBinding)(e);
    };
    // const handlePastedText: ComponentProps<typeof Editor>['handlePastedText'] = (
    //   _,
    //   html,
    //   editorState
    // ) => {
    //   if (isNotSet(html)) return 'not-handled'
    //   const dataFromHTML = convertFromHTML(html)
    //   dataFromHTML.contentBlocks = dataFromHTML.contentBlocks.map(block => {
    //     let handledBlock = block
    //
    //     if (block.getType() === 'unstyled' && isSet(styleType)) {
    //       handledBlock = block.set('type', styleType) as ContentBlock
    //     }
    //     return handledBlock
    //   })
    //   const contentState = ContentState.createFromBlockArray(
    //     dataFromHTML.contentBlocks,
    //     dataFromHTML.entityMap
    //   )
    //   const newEditorState = EditorState.createWithContent(contentState, decorator)
    //   setEditorState(newEditorState)
    //   return 'handled'
    // }
    return (react_1.default.createElement("div", { ref: containerRef, className: (0, classnames_1.default)(cEditor_module_scss_1.default['cEditor'], containerClassName) },
        react_1.default.createElement("div", { tabIndex: 2, onFocus: focusEventHandler, className: (0, classnames_1.default)(cEditor_module_scss_1.default['cEditor__container'], editorClassName) },
            react_1.default.createElement(toolbar_1.default, { fixed: fixedToolbar, readOnly: readOnly, styleType: styleType, editorState: editorState, setEditorState: setEditorState, containerEl: containerRef.current, focusing: focusing, promptRef: setPromptRef }),
            react_1.default.createElement("div", { className: (0, classnames_1.default)(fixedToolbar && cEditor_module_scss_1.default['cEditor__fixed'], cEditor_module_scss_1.default[`cEditor__${styleType}`]) },
                react_1.default.createElement(draft_js_1.Editor, { readOnly: readOnly, ref: draftRef, editorState: editorState, onChange: setEditorState, tabIndex: 2, blockStyleFn: (0, inlineStyle_1.getBlockStyle)(styleType), customStyleMap: inlineStyle_1.customStyleMap, blockRenderMap: blockRenderMap_1.default, keyBindingFn: keyBindingFn, 
                    // handlePastedText={handlePastedText}
                    placeholder: '請輸入內文' })))));
};
exports.default = CEditor;
// export default React.memo(CEditor, (prev, next) => {
//   const prevEditorState = prev.editorState
//   const prevRawDataString = prevEditorState ? convertEditorStateToServerData(prevEditorState) : null
//   const nextEditorState = next.editorState
//   const nextRawDataString = nextEditorState ? convertEditorStateToServerData(nextEditorState) : null
//   if (prevRawDataString !== nextRawDataString) return false
//   if (prev.styleType !== next.styleType) return false
//   if (prev.readOnly !== next.readOnly) return false
//   if (prev.fixedToolbar !== next.fixedToolbar) return false
//   if (prev.containerClassName !== next.containerClassName) return false
//   if (prev.editorClassName !== next.editorClassName) return false
//
//   return true
// })
//# sourceMappingURL=cEditor.js.map