import { MdDialog } from '@material/web/dialog/dialog';

/** 
    Adds a listener to the navigate event that will close the dialog when the user navigates away from the url the dialog was opened from.
**/

export function dialogOpenNavigationHack(dialog: MdDialog) {
  const closeListener = () => {
    if (dialog?.open) {
      dialog.close('navigation-close');
    }
  };
  (dialog as any).__closeListener = closeListener;

  // Persist the path the dialog was opened from so we can compare it to the destination path
  const fromPath = window.location.pathname;
  window.navigation.addEventListener('navigate', (navigateEvent) => {
    const destinationPath = navigateEvent.destination.pathname;

    if (!destinationPath.includes(fromPath)) {
      navigateEvent.intercept({ handler: closeListener });
    }
  });
}

export function dialogCloseNavigationHack(dialog: MdDialog) {
  if ((dialog as any)?.__closeListener) {
    window.removeEventListener('navigate', (dialog as any).__closeListener, false);
    (dialog as any).__closeListener = undefined;
  }
}

declare global {
  interface Window {
    navigation: any;
  }
}
