"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../../utils");
const Fragment = ({ condition = true, children, ...props }) => {
    if ((0, utils_1.isFalse)(condition))
        return null;
    return react_1.default.createElement(react_1.default.Fragment, { ...props }, children);
};
exports.default = Fragment;
//# sourceMappingURL=fragment.js.map