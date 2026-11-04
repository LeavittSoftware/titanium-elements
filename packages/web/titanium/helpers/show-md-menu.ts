import { Menu } from '@material/web/menu/internal/menu';

/**
 *  How long to wait for a closing menu to finish before opening it anyway. The Material Web close
 *  animation lasts 150ms; this leaves room for a busy main thread.
 */
const closeTimeout = 1000;

function getSurface(menu: Menu) {
  return menu.shadowRoot?.querySelector<HTMLElement>('.menu') ?? null;
}

function isSurfaceHidden(menu: Menu) {
  const surface = getSurface(menu);
  return !surface || getComputedStyle(surface).display === 'none';
}

function waitForClosed(menu: Menu) {
  return new Promise<void>((resolve) => {
    const done = () => {
      clearTimeout(timer);
      menu.removeEventListener('closed', done);
      resolve();
    };
    const timer = window.setTimeout(done, closeTimeout);
    menu.addEventListener('closed', done);
  });
}

/**
 *  Opens a Material Web `md-menu` without tripping over its close animation.
 *
 *  Calling `show()` while the menu is still animating closed leaves it reporting `open` with its
 *  surface hidden: the new opening animation cancels the closing one, and the cancelled close still
 *  hides the surface. Every later `show()` is then a no-op because the menu already thinks it is
 *  open. This helper waits for a close in progress to finish, and recovers a menu already stuck that
 *  way by closing it instantly before opening it again.
 */
export async function showMdMenu(menu: Menu | null | undefined) {
  if (!menu) {
    return;
  }

  const surface = getSurface(menu);

  // A close is in progress: the surface is still animating out.
  if (!menu.open && surface?.classList.contains('animating')) {
    await waitForClosed(menu);
  }

  if (menu.open && isSurfaceHidden(menu)) {
    // The surface stays hidden for a moment after show() while the menu positions itself, so
    // give it one update before deciding the menu is stuck.
    await menu.updateComplete;
    await new Promise((resolve) => requestAnimationFrame(resolve));

    if (menu.open && isSurfaceHidden(menu)) {
      const quick = menu.quick;
      const closed = waitForClosed(menu);
      menu.quick = true;
      menu.close();
      await closed;
      menu.quick = quick;
    }
  }

  menu.show();
}
