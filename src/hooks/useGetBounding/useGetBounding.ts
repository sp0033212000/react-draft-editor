import {
  DependencyList,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const getScrollableParent = (
  node: HTMLElement | null
): HTMLElement | null => {
  if (node === null) return null;

  const { scrollHeight, clientHeight } = node;
  if (scrollHeight > clientHeight) {
    return node;
  } else {
    return getScrollableParent(node.parentElement);
  }
};

interface Options {
  disable?: boolean;
  trackingDependencies?: DependencyList;
  offsetMargin?: number;
  targetHeightMode?: "scroll" | "client";
}

const useGetBounding = <R extends HTMLElement>(
  containerRef: R | null,
  targetRef: R | null,
  options?: Options
) => {
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const scrollRef = useRef<HTMLElement | null>(null);
  const offsetMargin = useRef<number>(options?.offsetMargin || 0);

  const getBounding = useCallback(() => {
    if (!containerRef || !targetRef) return;
    const offset = containerRef.getBoundingClientRect();
    const nodeHeight = containerRef.clientHeight;
    const { top, left, bottom } = offset;
    let { clientHeight, scrollHeight } = targetRef;
    let offsetTop: number = top;
    let targetHeight = clientHeight;

    if (options?.targetHeightMode === "scroll") {
      targetHeight = scrollHeight;
    }

    let offsetBottom = window.innerHeight - bottom;

    if (scrollRef.current) {
      offsetBottom = scrollRef.current.clientHeight - bottom;
    }

    if (offsetBottom < targetHeight) {
      offsetTop -= targetHeight + (offsetMargin.current || 0);
    } else {
      offsetTop += nodeHeight + (offsetMargin.current || 0);
    }

    setPosition({ top: offsetTop, left });
  }, [containerRef, targetRef]);

  useEffect(() => {
    offsetMargin.current = options?.offsetMargin || 0;
  }, [options?.offsetMargin]);

  useEffect(() => {
    if (!targetRef) return;
    if (options?.disable) return;
    getBounding();
    // eslint-disable-next-line
  }, [targetRef, options?.disable, ...(options?.trackingDependencies || [])]);

  useEffect(() => {
    if (!containerRef || !targetRef) return;
    if (options?.disable) return;

    const scrollParent = getScrollableParent(containerRef);

    if (!scrollParent) return;

    scrollRef.current = scrollParent;
    scrollParent.addEventListener("wheel", getBounding);
    scrollParent.addEventListener("touchmove", getBounding);

    return () => {
      scrollParent.removeEventListener("wheel", getBounding);
      scrollParent.removeEventListener("touchmove", getBounding);
      scrollRef.current = null;
    };
    // eslint-disable-next-line
  }, [containerRef, targetRef, options?.disable]);

  return { refreshBounding: getBounding, position };
};

export default useGetBounding;
