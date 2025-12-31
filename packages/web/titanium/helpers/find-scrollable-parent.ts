export async function findScrollableParent(element: Element) {
  let current: Element | null = element;
  while (current) {
    await (current as any)?.updateComplete;
    const scrollContainer = (current as any).scrollContainer;
    if (scrollContainer !== null && scrollContainer !== undefined) {
      return scrollContainer;
    }
    current = current.parentElement ?? null;
  }
  return null;
}
