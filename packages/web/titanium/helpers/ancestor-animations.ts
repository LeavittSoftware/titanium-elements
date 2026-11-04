/**
 *  The longest wait for ancestor animations before giving up. Material Web dialogs animate open in
 *  500ms; this leaves room for a busy main thread.
 */
const defaultTimeout = 1000;

/**
 *  The element's ancestors in the flat tree, following slots and shadow roots, starting with the
 *  element itself.
 */
function* getFlatTreeAncestors(element: Element) {
  let node: Node | null = element;
  while (node) {
    if (node instanceof Element) {
      yield node;
    }
    if (node instanceof Element && node.assignedSlot) {
      node = node.assignedSlot;
    } else if (node.parentNode) {
      node = node.parentNode;
    } else {
      node = node instanceof ShadowRoot ? node.host : null;
    }
  }
}

function isFinite(animation: Animation) {
  const endTime = animation.effect?.getComputedTiming().endTime;
  return typeof endTime === 'number' && Number.isFinite(endTime);
}

/**
 *  Finite animations currently running on the element or any of its ancestors, across shadow
 *  roots. A dialog sliding in or a drawer opening shows up here.
 */
export function getRunningAncestorAnimations(element: Element) {
  const animations: Array<Animation> = [];
  for (const ancestor of getFlatTreeAncestors(element)) {
    for (const animation of ancestor.getAnimations()) {
      if (animation.playState === 'running' && isFinite(animation)) {
        animations.push(animation);
      }
    }
  }
  return animations;
}

/**
 *  Resolves once the element and its ancestors have stopped animating, or after `timeout` ms.
 *  Use before measuring an element that may be moving, such as a field in a dialog that is still
 *  sliding into place.
 */
export async function waitForAncestorAnimations(element: Element, timeout = defaultTimeout) {
  const animations = getRunningAncestorAnimations(element);
  if (!animations.length) {
    return;
  }

  let timer = 0;
  await Promise.race([
    Promise.all(animations.map((animation) => animation.finished.catch(() => undefined))),
    new Promise<void>((resolve) => (timer = window.setTimeout(resolve, timeout))),
  ]);
  clearTimeout(timer);
}
