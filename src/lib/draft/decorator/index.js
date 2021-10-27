"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator = void 0;
const draft_js_1 = require("draft-js");
const react_1 = __importDefault(require("react"));
const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
    }, callback);
};
const DraftLink = ({ contentState, entityKey, children }) => {
    const { url } = contentState.getEntity(entityKey).getData();
    return (react_1.default.createElement("a", { href: url, style: { color: '#16C0C0', textDecoration: 'underline' }, title: url, rel: 'noreferrer noopener', target: '_blank' }, children));
};
exports.decorator = new draft_js_1.CompositeDecorator([
    {
        strategy: findLinkEntities,
        component: DraftLink
    }
]);
//# sourceMappingURL=index.js.map