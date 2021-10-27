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
const image_module_scss_1 = __importDefault(require("./image.module.scss"));
const utils_1 = require("../../../utils");
const flexbox_1 = __importDefault(require("../../common/flexbox"));
const fragment_1 = __importDefault(require("../../common/fragment"));
const fake_img_jpg_1 = __importDefault(require("../../../assets/images/fake_img.jpg"));
const Image = ({ width, maxWidth, height, data, onChange, recommendWidth, recommendHeight, readOnly, className, fileUploader, useUploadFiles, keepAspectRatio = false, uploadFilesErrorFeedback }) => {
    const fileUploadHandler = (0, react_1.useCallback)(async (files) => {
        if ((0, utils_1.isNotSet)(fileUploader) || (0, utils_1.isNotSet)(plugin))
            return;
        const result = await fileUploader(files);
        if ((0, utils_1.isSet)(result) && (0, utils_1.isNotEmptyArray)(result)) {
            const image = result[0];
            onChange({ url: image.filePath, name: image.fileName });
        }
    }, [onChange]);
    const plugin = useUploadFiles?.({
        callback: fileUploadHandler,
        allowTypes: ['image/jpeg', 'image/png'],
        isMultiple: false,
        isNeedValidate: true,
        errorFeedback: uploadFilesErrorFeedback,
        disableErrorToast: true
    });
    return (react_1.default.createElement(flexbox_1.default, { style: { width, height, maxWidth }, className: (0, classnames_1.default)(image_module_scss_1.default['image'], (0, utils_1.isSet)(data) && image_module_scss_1.default['imageSettle'], className) },
        react_1.default.createElement(flexbox_1.default, { condition: ((0, utils_1.isNotSet)(data) && !readOnly) || keepAspectRatio, style: { paddingTop: `${(recommendHeight / recommendWidth) * 100}%` }, className: (0, classnames_1.default)(image_module_scss_1.default['image__placeholder'], (0, utils_1.isSet)(data) && image_module_scss_1.default['image__placeholder--hidden']) }),
        react_1.default.createElement(fragment_1.default, { condition: (0, utils_1.isSet)(data) || (0, utils_1.isTrue)(readOnly) },
            react_1.default.createElement("img", { "aria-readonly": readOnly, src: data?.url ? data.url : typeof fake_img_jpg_1.default === 'string' ? fake_img_jpg_1.default : fake_img_jpg_1.default.src, alt: data?.name, className: (0, classnames_1.default)(keepAspectRatio && image_module_scss_1.default['image__preview--keepAspectRatio'], (0, utils_1.isSet)(data) && image_module_scss_1.default['image__preview--image'], (0, utils_1.isNotSet)(data) && readOnly && image_module_scss_1.default['image__preview--placeholder']) })),
        react_1.default.createElement(flexbox_1.default, { direction: 'col', condition: !readOnly, className: (0, classnames_1.default)(image_module_scss_1.default['image__functional'], (0, utils_1.isSet)(data) && image_module_scss_1.default['image__functional--hidden'], (0, utils_1.isSet)(data) && 'imageSettle__functional') },
            react_1.default.createElement("button", { onClick: plugin?.createFileInput, className: (0, classnames_1.default)(image_module_scss_1.default['image__functional--btn']) }, "\u4E0A\u50B3\u5716\u7247"),
            react_1.default.createElement("p", { className: (0, classnames_1.default)(image_module_scss_1.default['image__functional-recommend']) },
                "\u5EFA\u8B70\u5716\u7247\u6BD4\u4F8B",
                recommendWidth,
                "x",
                recommendHeight))));
};
exports.default = Image;
//# sourceMappingURL=image.js.map