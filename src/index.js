"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.CEditor = void 0;
require("@babel/polyfill");
var cEditor_1 = require("./lib/draft/component/feature/cEditor/cEditor");
Object.defineProperty(exports, "CEditor", { enumerable: true, get: function () { return __importDefault(cEditor_1).default; } });
var announcementEditor_1 = require("./announcementEditor");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(announcementEditor_1).default; } });
__exportStar(require("./utils"), exports);
//# sourceMappingURL=index.js.map