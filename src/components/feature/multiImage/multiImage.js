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
const react_textarea_autosize_1 = __importDefault(require("react-textarea-autosize"));
const multiImage_module_scss_1 = __importDefault(require("./multiImage.module.scss"));
const dataHandler_1 = require("../../../utils/dataHandler");
const flexbox_1 = __importDefault(require("../../common/flexbox"));
const image_1 = __importDefault(require("../../feature/image"));
const MultiImage = ({ data, contentType, onChange, readOnly, fileUploader, useUploadFiles, uploadFilesErrorFeedback }) => {
    const changeHandler = (0, react_1.useCallback)((index, newData) => {
        const target = data?.[index] || { image: null, title: '', body: '' };
        let result = (0, dataHandler_1.deepClone)(data || []);
        result[index] = { ...target, ...newData };
        onChange(result);
    }, [data]);
    return (react_1.default.createElement(flexbox_1.default, { className: (0, classnames_1.default)(multiImage_module_scss_1.default['multiImage']), align: 'start' }, [...new Array(contentType === 'twins' ? 2 : contentType === 'triplet' ? 3 : 0)].map((_, index, ary) => {
        const recommendSize = contentType === 'twins' ? 540 : 360;
        const itemData = data?.[index];
        return (react_1.default.createElement(flexbox_1.default, { className: (0, classnames_1.default)(multiImage_module_scss_1.default['multiImage__contentBox']), key: index, style: {
                width: `${100 / ary.length}%`
            }, direction: 'col' },
            react_1.default.createElement(image_1.default, { width: '100%', recommendWidth: recommendSize, recommendHeight: recommendSize * (2 / 3), data: itemData?.image, onChange: image => changeHandler(index, { image }), readOnly: readOnly, className: (0, classnames_1.default)(multiImage_module_scss_1.default['multiImage__image']), fileUploader: fileUploader, useUploadFiles: useUploadFiles, keepAspectRatio: true, uploadFilesErrorFeedback: uploadFilesErrorFeedback }),
            react_1.default.createElement(react_textarea_autosize_1.default, { className: (0, classnames_1.default)(multiImage_module_scss_1.default['multiImage__textarea'], multiImage_module_scss_1.default['multiImage__textarea--title']), readOnly: readOnly, placeholder: '請輸入標題', value: itemData?.title, onChange: event => changeHandler(index, { title: event.target.value }) }),
            react_1.default.createElement(react_textarea_autosize_1.default, { className: (0, classnames_1.default)(multiImage_module_scss_1.default['multiImage__textarea'], multiImage_module_scss_1.default['multiImage__textarea--body']), readOnly: readOnly, placeholder: '請輸入內容文字', value: itemData?.body, onChange: event => changeHandler(index, { body: event.target.value }) })));
    })));
};
exports.default = MultiImage;
//# sourceMappingURL=multiImage.js.map