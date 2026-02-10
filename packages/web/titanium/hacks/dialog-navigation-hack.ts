import { MdDialog } from '@material/web/dialog/dialog';

/** 
 * Listens for the Navigation API "navigate" event and closes the dialog when the user
 * navigates away from the path the dialog was opened from. Uses navigate
 * so it works with same-domain embedded links and programmatic navigation.
 */
export function dialogOpenNavigationHack(dialog: MdDialog) {
  const closeDialog = () => {
    if (dialog?.open) {
      dialog.close('navigation-close');
    }
  };

  const fromPath = window.location.pathname;
  const handleNavigate = (navigateEvent: NavigateEvent) => {
    const destinationPath = new URL(navigateEvent.destination.url).pathname;
    if (destinationPath === fromPath) return;

    if (navigateEvent.canIntercept) {
      navigateEvent.intercept({ handler: () => Promise.resolve(closeDialog()) });
    } else {
      closeDialog();
    }
  };

  const abortController = new AbortController();
  window.navigation.addEventListener('navigate', handleNavigate, { signal: abortController.signal });
  (dialog as DialogWithHackState).__navigationHackAbort = abortController;
}

export function dialogCloseNavigationHack(dialog: MdDialog) {
  const state = (dialog as DialogWithHackState).__navigationHackAbort;
  if (state) {
    state.abort();
    (dialog as DialogWithHackState).__navigationHackAbort = undefined;
  }
}

interface DialogWithHackState extends MdDialog {
  __navigationHackAbort?: AbortController;
}
