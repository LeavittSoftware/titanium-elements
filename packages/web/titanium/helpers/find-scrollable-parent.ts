export function findScrollableParent(element: Element): Element | null {
  let current: Element | null = element;

  while (current) {
    // Check if current element has overflow-y: auto
    const computedStyle = window.getComputedStyle(current);
    if (computedStyle.overflowY === 'auto' || computedStyle.overflowY === 'scroll') {
      return current;
    }

    // Check if current element is in a shadow DOM
    if (current.getRootNode() instanceof ShadowRoot) {
      const shadowRoot = current.getRootNode() as ShadowRoot;
      const host = shadowRoot.host;

      // Check the shadow host
      const hostStyle = window.getComputedStyle(host);
      if (hostStyle.overflowY === 'auto' || hostStyle.overflowY === 'scroll') {
        return host;
      }

      // Continue walking up from the shadow host
      current = host.parentElement;
    } else {
      // Regular light DOM, walk up normally
      current = current.parentElement;
    }
  }

  return null;
}
