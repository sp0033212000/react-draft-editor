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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSelectionInRange = exports.createLinkEntity = exports.getSelectionStateByRange = exports.getURLFromLinkEntity = exports.getCurrentLinkEntityFromEditorState = exports.getEntitiesFromSelection = void 0;
var utils_1 = require("./utils");
Object.defineProperty(exports, "getEntitiesFromSelection", { enumerable: true, get: function () { return utils_1.getEntitiesFromSelection; } });
Object.defineProperty(exports, "getCurrentLinkEntityFromEditorState", { enumerable: true, get: function () { return utils_1.getCurrentLinkEntityFromEditorState; } });
Object.defineProperty(exports, "getURLFromLinkEntity", { enumerable: true, get: function () { return utils_1.getURLFromLinkEntity; } });
Object.defineProperty(exports, "getSelectionStateByRange", { enumerable: true, get: function () { return utils_1.getSelectionStateByRange; } });
Object.defineProperty(exports, "createLinkEntity", { enumerable: true, get: function () { return utils_1.createLinkEntity; } });
Object.defineProperty(exports, "isSelectionInRange", { enumerable: true, get: function () { return utils_1.isSelectionInRange; } });
__exportStar(require("./formatChecker"), exports);
__exportStar(require("./dataHandler"), exports);
__exportStar(require("./editorUtil"), exports);
__exportStar(require("./domHelper"), exports);
//# sourceMappingURL=index.js.map