"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flexbox = void 0;
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const flexbox_module_scss_1 = __importDefault(require("./flexbox.module.scss"));
const Flexbox = ({ as = 'div', condition = true, children, className, direction, justify = 'center', align = 'center', expand, wrap, customRef, ...props }) => {
    const _className = (0, react_1.useMemo)(() => (0, classnames_1.default)(className, flexbox_module_scss_1.default.flexbox, {
        [flexbox_module_scss_1.default.flexbox__wrap]: wrap === 'wrap',
        [flexbox_module_scss_1.default.flexbox__wrapReverse]: wrap === 'wrap-reverse',
        [flexbox_module_scss_1.default.flexbox__nowrap]: wrap === 'nowrap'
    }, {
        [flexbox_module_scss_1.default.flexbox__row]: direction === 'row',
        [flexbox_module_scss_1.default.flexbox__col]: direction === 'col'
    }, {
        [flexbox_module_scss_1.default['flexbox__justifyStart']]: justify === 'start',
        [flexbox_module_scss_1.default['flexbox__justifyEnd']]: justify === 'end',
        [flexbox_module_scss_1.default['flexbox__justifyCenter']]: justify === 'center',
        [flexbox_module_scss_1.default['flexbox__justifyBetween']]: justify === 'between',
        [flexbox_module_scss_1.default['flexbox__justifyAround']]: justify === 'around',
        [flexbox_module_scss_1.default['flexbox__justifyEvenly']]: justify === 'evenly'
    }, {
        [flexbox_module_scss_1.default['flexbox__itemsStart']]: align === 'start',
        [flexbox_module_scss_1.default['flexbox__itemsEnd']]: align === 'end',
        [flexbox_module_scss_1.default['flexbox__itemsCenter']]: align === 'center',
        [flexbox_module_scss_1.default['flexbox__itemsBaseline']]: align === 'baseline',
        [flexbox_module_scss_1.default['flexbox__itemsStretch']]: align === 'stretch'
    }, { [flexbox_module_scss_1.default['flexbox__expand']]: expand }), [className, direction, justify, align, expand, wrap]);
    if (!condition)
        return null;
    return (0, react_1.createElement)(as, { className: _className, ...props, ref: customRef }, children);
};
exports.Flexbox = Flexbox;
exports.default = exports.Flexbox;
//# sourceMappingURL=flexbox.js.map