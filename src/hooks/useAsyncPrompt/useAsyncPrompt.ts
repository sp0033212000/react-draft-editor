import { useCallback, useEffect, useState } from "react";

type Resolver<V extends any> =
  | ((...arg: V extends undefined ? [undefined] : [V]) => void)
  | null;
type Rejecter<V extends any> =
  | ((...arg: V extends undefined ? [undefined] : [V]) => void)
  | null;

export const useAsyncPrompt = <
  ResolveValue extends any,
  RejectValue extends any = ResolveValue
>() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [resolver, setResolver] = useState<Resolver<ResolveValue>>(null);
  const [rejecter, setRejecter] = useState<Rejecter<RejectValue>>(null);
  const [forceShutdown, setForceShutdown] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;
    if (!forceShutdown) return;

    setRejecter(null);
    setResolver(null);
    setIsOpen(false);
    setForceShutdown(false);
  }, [isOpen, forceShutdown]);

  const prompt = useCallback(
    () =>
      new Promise<ResolveValue | RejectValue>((res) => {
        setIsOpen(true);
        setResolver(
          () =>
            function (value: ResolveValue) {
              setResolver(null);
              setIsOpen(false);
              res(value);
            }
        );
        setRejecter(
          () =>
            function (value: RejectValue) {
              setRejecter(null);
              setIsOpen(false);
              res(value);
            }
        );
      }),
    // eslint-disable-next-line
    [isOpen]
  );

  const handleConfirm = useCallback(
    (...arg: ResolveValue extends undefined ? [undefined] : [ResolveValue]) =>
      resolver?.(...arg),
    [resolver]
  );
  const handleClose = useCallback(
    (...arg: RejectValue extends undefined ? [undefined] : [RejectValue]) =>
      rejecter?.(...arg),
    [rejecter]
  );

  const forceStopAsyncPrompt = useCallback(() => {
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

export default useAsyncPrompt;
