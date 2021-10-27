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
const react_hook_form_1 = require("react-hook-form");
const draftLinkPrompt_module_scss_1 = __importDefault(require("./draftLinkPrompt.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const joi_1 = __importDefault(require("joi"));
const unlink_svg_1 = require("../../../../../assets/icons/unlink.svg");
const modal_1 = __importDefault(require("../../../../../components/feature/modal"));
const flexbox_1 = __importDefault(require("../../../../../components/common/flexbox"));
const DraftLinkPrompt = ({ open, confirmHandler, cancelHandler, currentSelectionURL, customRef }) => {
    const { register, formState: { errors }, handleSubmit, reset } = (0, react_hook_form_1.useForm)({ mode: 'all', defaultValues: { url: '' } });
    (0, react_1.useEffect)(() => {
        if (!currentSelectionURL) {
            reset({ url: '' });
        }
        else {
            reset({
                url: currentSelectionURL
            });
        }
    }, [currentSelectionURL]);
    return (react_1.default.createElement(modal_1.default, { customRef: customRef, onFocus: event => event.stopPropagation(), visible: open },
        react_1.default.createElement("div", { className: (0, classnames_1.default)(draftLinkPrompt_module_scss_1.default.draftLinkPrompt) },
            react_1.default.createElement("h2", { className: (0, classnames_1.default)('text-2xl', 'font-bold', 'text-gray-900', 'mb-4') }, "\u8ACB\u8F38\u5165\u9023\u7D50"),
            react_1.default.createElement("input", { ...register('url', {
                    validate: value => {
                        return value && value.length !== 0 && joi_1.default.string().uri().validate(value)?.error
                            ? '請輸入正確的網址連結格式。'
                            : undefined;
                    }
                }), className: (0, classnames_1.default)(draftLinkPrompt_module_scss_1.default['draftLinkPrompt__input']) }),
            errors.url?.message && (react_1.default.createElement("p", { className: (0, classnames_1.default)(draftLinkPrompt_module_scss_1.default['draftLinkPrompt__error']) }, errors.url?.message)),
            react_1.default.createElement(flexbox_1.default, { className: (0, classnames_1.default)(draftLinkPrompt_module_scss_1.default['draftLinkPrompt__btnGroup']) },
                !!currentSelectionURL && (react_1.default.createElement("button", { onClick: () => confirmHandler(''), type: 'button', className: (0, classnames_1.default)(draftLinkPrompt_module_scss_1.default['draftLinkPrompt__unlinkBtn']) },
                    react_1.default.createElement(unlink_svg_1.ReactComponent, null))),
                react_1.default.createElement("button", { type: 'button', onClick: cancelHandler, className: (0, classnames_1.default)(draftLinkPrompt_module_scss_1.default['draftLinkPrompt__btn'], draftLinkPrompt_module_scss_1.default['draftLinkPrompt__btn--accept']) }, "\u53D6\u6D88"),
                react_1.default.createElement("button", { type: 'button', onClick: handleSubmit(({ url }) => confirmHandler(url)), className: (0, classnames_1.default)(draftLinkPrompt_module_scss_1.default['draftLinkPrompt__btn'], draftLinkPrompt_module_scss_1.default['draftLinkPrompt__btn--denied']) }, "\u78BA\u5B9A")))));
};
exports.default = DraftLinkPrompt;
//# sourceMappingURL=draftLinkPrompt.js.map