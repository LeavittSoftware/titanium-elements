import { MdDialog } from '@material/web/dialog/dialog';

/**
 * Listens for the Navigation API "navigate" event and closes the dialog when the user
 * navigates away from the path the dialog was opened from.
 */
export function dialogOpenNavigationHack(dialog: MdDialog) {
  const currentPath = window.location.pathname;
  const handler = (e: NavigateEvent) => {
    if (new URL(e.destination.url).pathname !== currentPath && dialog?.open) {
      dialog.close('navigation-close');
    }
  };

  window.navigation.addEventListener('navigate', handler);
  (dialog as DialogWithHackState).__navigationHackHandler = handler;
}

export function dialogCloseNavigationHack(dialog: MdDialog) {
  const handler = (dialog as DialogWithHackState).__navigationHackHandler;
  if (handler) {
    window.navigation.removeEventListener('navigate', handler);
    (dialog as DialogWithHackState).__navigationHackHandler = undefined;
  }
}

interface DialogWithHackState extends MdDialog {
  __navigationHackHandler?: (e: NavigateEvent) => void;
}
