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
const attachmentSection_module_scss_1 = __importDefault(require("./attachmentSection.module.scss"));
const utils_1 = require("../../../utils");
const upload_square_svg_1 = require("../../../assets/icons/upload_square.svg");
const akar_icons_cross_svg_1 = require("../../../assets/icons/akar-icons_cross.svg");
const flexbox_1 = __importDefault(require("../../common/flexbox"));
const fragment_1 = __importDefault(require("../../common/fragment"));
const AttachmentSection = ({ files, onChange, fileUploader, useUploadFiles, readOnly, useTranslation, uploadFilesErrorFeedback }) => {
    const removeHandler = event => {
        if ((0, utils_1.isNotSet)(onChange))
            return;
        const targetIndex = Number(event.currentTarget.getAttribute('data-index'));
        if ((0, utils_1.isNotSet)(targetIndex) || isNaN(targetIndex))
            return;
        if ((0, utils_1.isNotSet)(files))
            return;
        onChange(files.filter((_, index) => index !== targetIndex));
    };
    const fileUploadHandler = (0, react_1.useCallback)(async (attach) => {
        if ((0, utils_1.isNotSet)(onChange))
            return;
        if ((0, utils_1.isNotSet)(fileUploader) || (0, utils_1.isNotSet)(plugin))
            return;
        const result = await fileUploader(attach);
        if ((0, utils_1.isSet)(result) && (0, utils_1.isNotEmptyArray)(result)) {
            const allFile = result.map(({ fileName, filePath }) => ({
                attachName: fileName,
                attachUrl: filePath
            }));
            onChange([...(files || []), ...allFile]);
        }
    }, [onChange, files]);
    const plugin = useUploadFiles?.({
        callback: fileUploadHandler,
        allowTypes: [
            '.csv',
            'text/csv',
            'text/comma-separated-values',
            'application/csv',
            'application/excel',
            'application/vnd.ms-excel',
            'application/vnd.msexcel',
            'text/anytext',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ],
        isMultiple: true,
        isNeedValidate: true,
        errorFeedback: uploadFilesErrorFeedback,
        disableErrorToast: true
    });
    if ((0, utils_1.isNotSet)(files))
        return null;
    return (react_1.default.createElement("div", { "aria-readonly": readOnly, className: (0, classnames_1.default)(attachmentSection_module_scss_1.default['attachmentSection']) },
        react_1.default.createElement(flexbox_1.default, { condition: !readOnly, justify: 'between', className: (0, classnames_1.default)(attachmentSection_module_scss_1.default['attachmentSection__header']) },
            react_1.default.createElement("p", null, "\u6587\u7AE0\u9644\u4EF6"),
            react_1.default.createElement("button", { onClick: plugin?.createFileInput, className: (0, classnames_1.default)(attachmentSection_module_scss_1.default['attachmentSection__uploadBtn']) },
                react_1.default.createElement(upload_square_svg_1.ReactComponent, null),
                "\u4E0A\u50B3\u9644\u4EF6")),
        react_1.default.createElement("div", { "aria-readonly": readOnly, className: (0, classnames_1.default)(attachmentSection_module_scss_1.default['attachmentSection__content']) }, files?.map((file, index) => (react_1.default.createElement(AttachmentItem, { key: file.attachUrl, attachUrl: file.attachUrl, attachName: file.attachName, index: index, removeHandler: removeHandler, readOnly: readOnly, useTranslation: useTranslation }))))));
};
exports.default = AttachmentSection;
const AttachmentItem = ({ index, removeHandler, attachName, attachUrl, readOnly, useTranslation }) => {
    const langPlugin = useTranslation?.();
    return (react_1.default.createElement(flexbox_1.default, { justify: 'start', className: (0, classnames_1.default)(attachmentSection_module_scss_1.default['attachmentSection__attach']) },
        react_1.default.createElement(fragment_1.default, { condition: !readOnly },
            react_1.default.createElement("button", { "data-index": index, onClick: removeHandler, className: (0, classnames_1.default)(attachmentSection_module_scss_1.default['attachmentSection__removeBtn']) },
                react_1.default.createElement(akar_icons_cross_svg_1.ReactComponent, null))),
        react_1.default.createElement("p", null, attachName),
        react_1.default.createElement(fragment_1.default, { condition: (0, utils_1.isTrue)(readOnly) },
            react_1.default.createElement("a", { className: (0, classnames_1.default)(attachmentSection_module_scss_1.default['attachmentSection__download']), href: attachUrl, target: '_blank', rel: 'noreferrer noopener' }, langPlugin?.t(`share.download`) || '下載'))));
};
//# sourceMappingURL=attachmentSection.js.map