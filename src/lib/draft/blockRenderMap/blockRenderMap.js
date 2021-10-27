"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const draft_js_1 = __importDefault(require("draft-js"));
const immutable_1 = __importDefault(require("immutable"));
const classnames_1 = __importDefault(require("classnames"));
const blockRenderMap_module_scss_1 = __importDefault(require("./blockRenderMap.module.scss"));
const UnOrderListBlockWrapper = ({ children }) => {
    return (react_1.default.createElement("ul", { className: (0, classnames_1.default)('public-DraftStyleDefault-ul', blockRenderMap_module_scss_1.default['draft-list'], blockRenderMap_module_scss_1.default['draft-list__un-order']) }, children));
};
const OrderListBlockWrapper = ({ children }) => {
    return (react_1.default.createElement("ol", { className: (0, classnames_1.default)('public-DraftStyleDefault-ol', blockRenderMap_module_scss_1.default['draft-list'], blockRenderMap_module_scss_1.default['draft-list__order']) }, children));
};
const blockRenderObject = {
    'unordered-list-item': {
        element: 'li',
        wrapper: react_1.default.createElement(UnOrderListBlockWrapper, null)
    },
    'ordered-list-item': {
        element: 'li',
        wrapper: react_1.default.createElement(OrderListBlockWrapper, null)
    }
};
const blockRenderMap = immutable_1.default.Map(blockRenderObject);
exports.default = draft_js_1.default.DefaultDraftBlockRenderMap.merge(blockRenderMap);
//# sourceMappingURL=blockRenderMap.js.map