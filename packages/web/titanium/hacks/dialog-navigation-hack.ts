import { MdDialog } from '@material/web/dialog/dialog';

/** 
    Adds a listener to the window popstate event that will close the dialog when the user navigates away from the page.
**/

export function dialogOpenNavigationHack(dialog: MdDialog) {
  const closeListener = () => {
    if (dialog?.open) {
      dialog.close('navigation-close');
    }
  };
  (dialog as any).__closeListener = closeListener;
  window.addEventListener('popstate', closeListener, false);
}

export function dialogCloseNavigationHack(dialog: MdDialog) {
  if ((dialog as any)?.__closeListener) {
    window.removeEventListener('popstate', (dialog as any).__closeListener, false);
    (dialog as any).__closeListener = undefined;
  }
}
