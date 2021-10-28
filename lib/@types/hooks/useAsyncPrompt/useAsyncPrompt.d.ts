export declare const useAsyncPrompt: <ResolveValue extends unknown, RejectValue extends unknown = ResolveValue>() => {
    prompt: () => Promise<ResolveValue | RejectValue>;
    handleConfirm: (...arg: ResolveValue extends undefined ? [undefined] : [ResolveValue]) => void | undefined;
    handleClose: (...arg: RejectValue extends undefined ? [undefined] : [RejectValue]) => void | undefined;
    isAsyncPromptOpen: boolean;
    forceStopAsyncPrompt: () => void;
};
export default useAsyncPrompt;
