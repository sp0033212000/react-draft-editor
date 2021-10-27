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
const classnames_1 = __importDefault(require("classnames"));
const announcementEditor_module_scss_1 = __importDefault(require("./announcementEditor.module.scss"));
const useInteractiveOutsideTargetHandler_1 = __importDefault(require("./hooks/useInteractiveOutsideTargetHandler"));
const utils_1 = require("./utils");
const arrow_down_svg_1 = require("./assets/icons/arrow_down.svg");
const arrow_up_svg_1 = require("./assets/icons/arrow_up.svg");
const trash_svg_1 = require("./assets/icons/trash.svg");
const flexbox_1 = __importDefault(require("./components/common/flexbox"));
const fragment_1 = __importDefault(require("./components/common/fragment"));
const cEditor_1 = __importDefault(require("./lib/draft/component/feature/cEditor"));
const image_1 = __importDefault(require("./components/feature/image"));
const multiImage_1 = __importDefault(require("./components/feature/multiImage"));
const attachmentSection_1 = __importDefault(require("./components/feature/attachmentSection"));
const AnnouncementEditor = ({ content, readOnly, attachment, attachmentChangeHandler, fileUploader, useUploadFiles, useTranslation, contentChangeHandler, moveTowardHandler, moveBackwardHandler, removeContent, uploadFilesErrorFeedback }) => {
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(announcementEditor_module_scss_1.default['announcementEditor']) },
        content.map((contentDetail, index, array) => {
            return (react_1.default.createElement(AnnouncementEditorFunctionalWrapper, { disable: readOnly, index: index, id: contentDetail.id, key: contentDetail.id, isFirst: index === 0, isLast: index + 1 === array.length, moveTowardHandler: moveTowardHandler, moveBackwardHandler: moveBackwardHandler, removeContent: removeContent },
                react_1.default.createElement(AnnouncementEditorContentDispatchers, { id: contentDetail.id, type: contentDetail.type, contentType: contentDetail.contentType, content: contentDetail.content, readOnly: readOnly, onChange: (newContent) => contentChangeHandler?.(contentDetail.id, newContent), fileUploader: fileUploader, useUploadFiles: useUploadFiles, uploadFilesErrorFeedback: uploadFilesErrorFeedback })));
        }),
        react_1.default.createElement(fragment_1.default, { condition: (0, utils_1.isSet)(attachment) },
            react_1.default.createElement(AnnouncementEditorFunctionalWrapper, { disable: readOnly, removeContent: () => attachmentChangeHandler?.(null) },
                react_1.default.createElement(attachmentSection_1.default, { files: attachment, onChange: attachmentChangeHandler, useUploadFiles: useUploadFiles, fileUploader: fileUploader, readOnly: readOnly, useTranslation: useTranslation, uploadFilesErrorFeedback: uploadFilesErrorFeedback })))));
};
exports.default = AnnouncementEditor;
const AnnouncementEditorContentDispatchers = props => {
    switch (props.type) {
        case 'editor':
            return (react_1.default.createElement(cEditor_1.default, { styleType: props.contentType, editorState: props.content, setEditorState: props.onChange, readOnly: props.readOnly }));
        case 'image':
            return (react_1.default.createElement(image_1.default, { fileUploader: props.fileUploader, useUploadFiles: props.useUploadFiles, recommendWidth: 1200, recommendHeight: 540, data: props.content, onChange: image => props.onChange(image), readOnly: props.readOnly, uploadFilesErrorFeedback: props.uploadFilesErrorFeedback }));
        case 'multi-image':
            return (react_1.default.createElement(multiImage_1.default, { fileUploader: props.fileUploader, useUploadFiles: props.useUploadFiles, contentType: props.contentType, data: props.content, onChange: props.onChange, readOnly: props.readOnly, uploadFilesErrorFeedback: props.uploadFilesErrorFeedback }));
        default:
            return null;
    }
};
const AnnouncementEditorFunctionalWrapper = ({ children, isLast, isFirst, moveTowardHandler, moveBackwardHandler, removeContent, index, id, disable }) => {
    const [focusing, setFocusing] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useLayoutEffect)(() => {
        ref?.current?.scrollIntoView();
    }, []);
    (0, useInteractiveOutsideTargetHandler_1.default)(ref.current, () => setFocusing(false));
    if (disable)
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    return (react_1.default.createElement("div", { ref: ref, onFocus: () => setFocusing(true), onClick: () => setFocusing(true), className: (0, classnames_1.default)(announcementEditor_module_scss_1.default['announcementEditor__functionalWrapper']) },
        children,
        react_1.default.createElement(flexbox_1.default, { condition: focusing, direction: 'col', className: (0, classnames_1.default)(announcementEditor_module_scss_1.default['announcementEditor__functionalWrapper--container']) },
            react_1.default.createElement(fragment_1.default, { condition: !isFirst && (0, utils_1.isSet)(isFirst) },
                react_1.default.createElement("button", { "data-index": index, "data-id": id, onClick: moveTowardHandler, type: 'button', className: (0, classnames_1.default)(announcementEditor_module_scss_1.default['announcementEditor__functionalWrapper--btn']) },
                    react_1.default.createElement(arrow_up_svg_1.ReactComponent, null)),
                react_1.default.createElement("span", { className: (0, classnames_1.default)(announcementEditor_module_scss_1.default['announcementEditor__functionalWrapper--divider']) })),
            react_1.default.createElement(fragment_1.default, { condition: !isLast && (0, utils_1.isSet)(isLast) },
                react_1.default.createElement("button", { "data-index": index, "data-id": id, onClick: moveBackwardHandler, type: 'button', className: (0, classnames_1.default)(announcementEditor_module_scss_1.default['announcementEditor__functionalWrapper--btn']) },
                    react_1.default.createElement(arrow_down_svg_1.ReactComponent, null)),
                react_1.default.createElement("span", { className: (0, classnames_1.default)(announcementEditor_module_scss_1.default['announcementEditor__functionalWrapper--divider']) })),
            react_1.default.createElement("button", { "data-id": id, onClick: removeContent, type: 'button', className: (0, classnames_1.default)(announcementEditor_module_scss_1.default['announcementEditor__functionalWrapper--btn']) },
                react_1.default.createElement(trash_svg_1.ReactComponent, null)))));
};
//# sourceMappingURL=announcementEditor.js.map