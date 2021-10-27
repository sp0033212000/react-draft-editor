"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScrollableParent = void 0;
const getScrollableParent = (node) => {
    if (node === null)
        return null;
    const { scrollHeight, clientHeight } = node;
    if (scrollHeight > clientHeight) {
        return node;
    }
    else {
        return (0, exports.getScrollableParent)(node.parentElement);
    }
};
exports.getScrollableParent = getScrollableParent;
//# sourceMappingURL=domHelper.js.map