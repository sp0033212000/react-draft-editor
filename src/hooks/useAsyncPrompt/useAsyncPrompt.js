"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncPrompt = void 0;
const react_1 = require("react");
const useAsyncPrompt = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [resolver, setResolver] = (0, react_1.useState)(null);
    const [rejecter, setRejecter] = (0, react_1.useState)(null);
    const [forceShutdown, setForceShutdown] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!isOpen)
            return;
        if (!forceShutdown)
            return;
        setRejecter(null);
        setResolver(null);
        setIsOpen(false);
        setForceShutdown(false);
    }, [isOpen, forceShutdown]);
    const prompt = (0, react_1.useCallback)(() => new Promise((res) => {
        setIsOpen(true);
        setResolver(() => function (value) {
            setResolver(null);
            setIsOpen(false);
            res(value);
        });
        setRejecter(() => function (value) {
            setRejecter(null);
            setIsOpen(false);
            res(value);
        });
    }), 
    // eslint-disable-next-line
    [isOpen]);
    const handleConfirm = (0, react_1.useCallback)((...arg) => resolver?.(...arg), [resolver]);
    const handleClose = (0, react_1.useCallback)((...arg) => rejecter?.(...arg), [rejecter]);
    const forceStopAsyncPrompt = (0, react_1.useCallback)(() => {
        setForceShutdown(true);
    }, []);
    return {
        prompt,
        handleConfirm,
        handleClose,
        isAsyncPromptOpen: isOpen,
        forceStopAsyncPrompt,
    };
};
exports.useAsyncPrompt = useAsyncPrompt;
exports.default = exports.useAsyncPrompt;
//# sourceMappingURL=useAsyncPrompt.js.map