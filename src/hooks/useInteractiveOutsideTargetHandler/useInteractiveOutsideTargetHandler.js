"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInteractiveOutsideTargetHandler = void 0;
const react_1 = require("react");
const utils_1 = require("../../utils");
const useInteractiveOutsideTargetHandler = (el, cb, excludeEls = []) => {
    const clickHandler = (0, react_1.useCallback)((event) => {
        if ((0, utils_1.isNotSet)(el))
            return;
        if (el instanceof HTMLElement &&
            event.target instanceof HTMLElement &&
            !el.contains(event.target)) {
            const isExcludedElement = excludeEls.includes(event.target);
            const isInExcludedElement = excludeEls.some(excludeEl => {
                return excludeEl?.contains(event.target);
            });
            if (!isExcludedElement && !isInExcludedElement) {
                cb();
            }
        }
    }, [cb, el]);
    (0, react_1.useEffect)(() => {
        document.addEventListener('mousedown', clickHandler);
        document.addEventListener('touchstart', clickHandler);
        return () => {
            document.removeEventListener('mousedown', clickHandler);
            document.removeEventListener('touchstart', clickHandler);
        };
    }, [clickHandler]);
};
exports.useInteractiveOutsideTargetHandler = useInteractiveOutsideTargetHandler;
exports.default = exports.useInteractiveOutsideTargetHandler;
//# sourceMappingURL=useInteractiveOutsideTargetHandler.js.map