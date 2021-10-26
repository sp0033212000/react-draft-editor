export const getScrollableParent = (node: HTMLElement | null): HTMLElement | null => {
  if (node === null) return null

  const { scrollHeight, clientHeight } = node
  if (scrollHeight > clientHeight) {
    return node
  } else {
    return getScrollableParent(node.parentElement)
  }
}
