import { MdDialog } from '@material/web/dialog/dialog';

/** 
    Adds a listener to the window popstate event that will close the dialog when the user navigates away from the page.
**/

export function dialogOpenNavigationHack(dialog: MdDialog) {
  const closeListener = () => {
    dialog.close('navigation-close');
    window.removeEventListener('popstate', closeListener, false);
  };
  window.addEventListener('popstate', closeListener, false);
}
