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
const draft_js_1 = require("draft-js");
const classnames_1 = __importDefault(require("classnames"));
const toolbar_module_scss_1 = __importDefault(require("./toolbar.module.scss"));
const align_center_svg_1 = require("../../../../../assets/icons/align_center.svg");
const align_left_svg_1 = require("../../../../../assets/icons/align_left.svg");
const align_right_svg_1 = require("../../../../../assets/icons/align_right.svg");
const caret_down_svg_1 = require("../../../../../assets/icons/caret_down.svg");
const link_svg_1 = require("../../../../../assets/icons/link.svg");
const text_bold_svg_1 = require("../../../../../assets/icons/text_bold.svg");
const text_color_svg_1 = require("../../../../../assets/icons/text_color.svg");
const text_italic_svg_1 = require("../../../../../assets/icons/text_italic.svg");
const text_underline_svg_1 = require("../../../../../assets/icons/text_underline.svg");
const un_order_list_svg_1 = require("../../../../../assets/icons/un_order_list.svg");
const order_list_svg_1 = require("../../../../../assets/icons/order_list.svg");
const useAsyncPrompt_1 = __importDefault(require("../../../../../hooks/useAsyncPrompt/useAsyncPrompt"));
const useInteractiveOutsideTargetHandler_1 = __importDefault(require("../../../../../hooks/useInteractiveOutsideTargetHandler"));
const inlineStyle_1 = require("../../../inlineStyle/inlineStyle");
const utils_1 = require("../../../../../utils");
const utils_2 = require("../../../../../utils/utils");
const draftLinkPrompt_1 = __importDefault(require("../draftLinkPrompt"));
const flexbox_1 = __importDefault(require("../../../../../components/common/flexbox"));
// const toolbar: React.FC<ReadOnlyToolBarProps | ToolBarProps> = ({ editorState, setEditorState, containerEl, styleType, readOnly }) => {
const Toolbar = ({ editorState, setEditorState, containerEl, styleType, readOnly, focusing, promptRef, fixed }) => {
    const toolbarRef = (0, react_1.useRef)(null);
    const axisCache = (0, react_1.useRef)(null);
    // toolbar Position
    const axis = (0, react_1.useMemo)(() => {
        if ((0, utils_1.isNotSet)(containerEl))
            return null;
        if ((0, utils_1.isNotSet)(toolbarRef.current))
            return null;
        if (readOnly)
            return null;
        if (fixed)
            return null;
        const currentSelection = document.getSelection();
        const currentSelectionRangeCount = currentSelection?.rangeCount;
        const currentSelectedDOM = currentSelectionRangeCount && currentSelectionRangeCount > 0
            ? currentSelection?.getRangeAt(0)
            : null;
        const currentSelectedDOMBoundingRect = currentSelectedDOM?.getBoundingClientRect();
        const containerBoundingRect = containerEl.getBoundingClientRect();
        if ((0, utils_1.isNotSet)(currentSelectedDOMBoundingRect))
            return null;
        // const containerTop = containerBoundingRect.top
        const containerLeft = containerBoundingRect.left;
        const selectionTop = currentSelectedDOMBoundingRect.top;
        const selectionLeft = currentSelectedDOMBoundingRect.left;
        if (selectionLeft === 0 && selectionTop === 0)
            return axisCache.current;
        const selectionHeight = currentSelectedDOMBoundingRect.height + 8; // 8 is offset;
        const containerWidth = containerEl.clientWidth;
        const toolbarWidth = toolbarRef.current.scrollWidth;
        const toolbarHeight = toolbarRef.current.scrollHeight + 8; // 8 is offset;
        // keep toolbar stay in editor
        const x = selectionLeft + toolbarWidth < containerLeft + containerWidth
            ? selectionLeft
            : containerLeft + containerWidth - toolbarWidth;
        const y = selectionTop - toolbarHeight > 0
            ? selectionTop - toolbarHeight
            : selectionTop + selectionHeight + toolbarHeight;
        axisCache.current = { x, y };
        return { x, y };
        // eslint-disable-next-line
    }, [
        // eslint-disable-next-line react-hooks/exhaustive-deps
        editorState.getSelection().getAnchorOffset(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        editorState.getSelection().getAnchorKey(),
        readOnly
    ]);
    // URL Prompt
    const { isAsyncPromptOpen, prompt, handleClose, handleConfirm } = (0, useAsyncPrompt_1.default)();
    const isSelectionInLink = (0, react_1.useMemo)(() => {
        const selection = editorState.getSelection();
        const entities = (0, utils_1.getEntitiesFromSelection)(editorState, 'LINK');
        const entity = entities.find(({ start, end, blockKey }) => {
            return (0, utils_1.isSelectionInRange)(selection, { start, end, blockKey });
        });
        return {
            entity,
            inLink: !!entity
        };
    }, [editorState]);
    if (readOnly || (!focusing && !fixed))
        return null;
    // Style Handler
    const italicStyleHandler = () => {
        setEditorState?.(draft_js_1.RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };
    const boldStyleHandler = () => {
        setEditorState?.(draft_js_1.RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };
    const underlineStyleHandler = () => {
        setEditorState?.(draft_js_1.RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    };
    const unOrderListHandler = () => {
        setEditorState?.(draft_js_1.RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
    };
    const orderListHandler = () => {
        setEditorState?.(draft_js_1.RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
    };
    const linkAttributeHandler = async () => {
        const url = await prompt();
        if (url === false)
            return;
        if (isSelectionInLink.inLink) {
            const entity = isSelectionInLink.entity;
            if (!entity)
                return;
            const entitySelection = (0, utils_1.getSelectionStateByRange)(editorState, entity);
            if (url.length === 0) {
                setEditorState?.(draft_js_1.RichUtils.toggleLink(editorState, entitySelection, null));
            }
            else {
                (0, utils_2.editLinkEntity)(editorState, {
                    entityKey: entity.entityKey,
                    url,
                    selectionState: entitySelection
                });
            }
        }
        else {
            if (url.length === 0) {
                return;
            }
            else {
                setEditorState?.((0, utils_1.createLinkEntity)(editorState, url));
            }
        }
    };
    const selection = editorState.getSelection();
    const currentBlock = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
    const blockType = currentBlock.getType();
    // const currentInlineStyle = currentBlock.getInlineStyleAt(selection.getAnchorOffset())
    // console.log(currentInlineStyle.map(style => console.log(style)))
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(draftLinkPrompt_1.default, { customRef: promptRef, open: isAsyncPromptOpen, confirmHandler: handleConfirm, cancelHandler: () => handleClose(false), currentSelectionURL: (0, utils_1.getURLFromLinkEntity)(isSelectionInLink.entity) }),
        react_1.default.createElement(flexbox_1.default, { customRef: toolbarRef, style: {
                top: axis?.y,
                left: axis?.x,
                display: (0, utils_1.isFalse)(fixed) && (0, utils_1.isNotSet)(axis) ? 'none' : undefined
            }, className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar'], fixed ? toolbar_module_scss_1.default['toolbar__fixed'] : toolbar_module_scss_1.default['toolbar__float'], (0, utils_1.isNotSet)(axis) && !fixed && toolbar_module_scss_1.default['toolbar__hidden']) },
            react_1.default.createElement("button", { type: 'button', onClick: italicStyleHandler },
                react_1.default.createElement(text_italic_svg_1.ReactComponent, { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__iconBtn']) })),
            react_1.default.createElement("button", { type: 'button', onClick: boldStyleHandler },
                react_1.default.createElement(text_bold_svg_1.ReactComponent, { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__iconBtn']) })),
            react_1.default.createElement("button", { type: 'button', onClick: underlineStyleHandler },
                react_1.default.createElement(text_underline_svg_1.ReactComponent, { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__iconBtn']) })),
            react_1.default.createElement("div", { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__divider']) }),
            react_1.default.createElement(ColorPicker, { colorHandler: (color) => setEditorState?.(draft_js_1.RichUtils.toggleInlineStyle(editorState, color)) }),
            react_1.default.createElement("div", { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__divider']) }),
            react_1.default.createElement("button", { type: 'button', className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__link'], isSelectionInLink.inLink && toolbar_module_scss_1.default['toolbar__link--active']), onClick: linkAttributeHandler },
                react_1.default.createElement(link_svg_1.ReactComponent, { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__iconBtn']) })),
            react_1.default.createElement("div", { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__divider']) }),
            react_1.default.createElement(TextAlignmentPicker, { textAlignHandler: alignType => setEditorState?.(draft_js_1.RichUtils.toggleBlockType(editorState, `${styleType}-${alignType}`)) }),
            react_1.default.createElement("div", { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__divider']) }),
            react_1.default.createElement("button", { type: 'button', onClick: unOrderListHandler },
                react_1.default.createElement(un_order_list_svg_1.ReactComponent, { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__iconBtn'], blockType === 'unordered-list-item' && toolbar_module_scss_1.default['toolbar__iconBtn--active']) })),
            react_1.default.createElement("button", { type: 'button', onClick: orderListHandler },
                react_1.default.createElement(order_list_svg_1.ReactComponent, { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__iconBtn'], blockType === 'ordered-list-item' && toolbar_module_scss_1.default['toolbar__iconBtn--active']) })))));
};
exports.default = Toolbar;
const ColorPicker = ({ colorHandler }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    (0, useInteractiveOutsideTargetHandler_1.default)(ref.current, () => setIsOpen(false));
    return (react_1.default.createElement("div", { ref: ref, className: (0, classnames_1.default)(toolbar_module_scss_1.default['colorPicker']) },
        react_1.default.createElement("button", { type: 'button', onClick: () => setIsOpen(prev => !prev) },
            react_1.default.createElement(text_color_svg_1.ReactComponent, { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__iconBtn']) })),
        react_1.default.createElement("div", { className: (0, classnames_1.default)(toolbar_module_scss_1.default['fadeInContainer'], isOpen && toolbar_module_scss_1.default['fadeInContainer__active']) },
            react_1.default.createElement(flexbox_1.default, { wrap: 'wrap', justify: 'start', className: (0, classnames_1.default)(toolbar_module_scss_1.default['colorPicker__container']) }, Object.keys(inlineStyle_1.colorMap).map(color => (react_1.default.createElement("button", { type: 'button', key: color, className: (0, classnames_1.default)(toolbar_module_scss_1.default['colorPicker__iconBtn']), style: { backgroundColor: inlineStyle_1.colorMap[color].color }, onClick: () => {
                    colorHandler(color);
                    setIsOpen(false);
                } })))))));
};
const TEXT_ALIGNMENT_BUTTON = [
    {
        type: 'left',
        icon: align_left_svg_1.ReactComponent
    },
    {
        type: 'center',
        icon: align_center_svg_1.ReactComponent
    },
    {
        type: 'right',
        icon: align_right_svg_1.ReactComponent
    }
];
const TextAlignmentPicker = ({ textAlignHandler }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    (0, useInteractiveOutsideTargetHandler_1.default)(ref.current, () => setIsOpen(false));
    return (react_1.default.createElement("div", { ref: ref },
        react_1.default.createElement("button", { type: 'button', onClick: () => setIsOpen(prev => !prev), className: (0, classnames_1.default)(toolbar_module_scss_1.default['textAlignmentPicker__toggleBtn']) },
            react_1.default.createElement(align_left_svg_1.ReactComponent, { className: (0, classnames_1.default)(toolbar_module_scss_1.default['toolbar__iconBtn']) }),
            react_1.default.createElement(caret_down_svg_1.ReactComponent, null)),
        react_1.default.createElement("div", { className: (0, classnames_1.default)(toolbar_module_scss_1.default['fadeInContainer'], isOpen && toolbar_module_scss_1.default['fadeInContainer__active']) },
            react_1.default.createElement(flexbox_1.default, { direction: 'col', className: (0, classnames_1.default)(toolbar_module_scss_1.default['textAlignmentPicker__container']) }, TEXT_ALIGNMENT_BUTTON.map(align => (react_1.default.createElement("button", { type: 'button', key: align.type, onClick: () => textAlignHandler(align.type), className: (0, classnames_1.default)(toolbar_module_scss_1.default['textAlignmentPicker__targetBtn']) },
                react_1.default.createElement(align.icon, null))))))));
};
//# sourceMappingURL=toolbar.js.map