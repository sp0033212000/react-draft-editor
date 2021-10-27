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
exports.Modal = void 0;
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const modal_module_scss_1 = __importDefault(require("./modal.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const flexbox_1 = __importDefault(require("../../common/flexbox"));
const Modal = ({ children, visible, onBackdrop, className, disableDefaultZIndex, customRef, ...props }) => {
    const clickHandler = (0, react_1.useCallback)(event => {
        event.stopPropagation();
        onBackdrop?.(event);
    }, [onBackdrop]);
    if (!visible)
        return null;
    return react_dom_1.default.createPortal(react_1.default.createElement(flexbox_1.default, { customRef: customRef, onClick: clickHandler, className: (0, classnames_1.default)(className, modal_module_scss_1.default['modal'], {
            [modal_module_scss_1.default['modal__defaultZindex']]: !disableDefaultZIndex
        }), ...props }, children), document.querySelector('body'));
};
exports.Modal = Modal;
exports.default = exports.Modal;
//# sourceMappingURL=modal.js.map