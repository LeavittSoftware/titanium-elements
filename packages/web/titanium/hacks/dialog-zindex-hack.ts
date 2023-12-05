import { MdDialog } from '@material/web/dialog/dialog';

/** 
    md-dialog does not use the native scrim and rolls their own.   
    On their scrim, they set the z-index to 1 so anything on your app with a higher z-index bleeds.
    hacky fix for https://github.com/material-components/material-web/issues/4948
    
    remove when resolved in origin

**/
export function dialogZIndexHack(dialog: MdDialog) {
  if (dialog.shadowRoot) {
    const scrim = dialog.shadowRoot.querySelector<HTMLElement>('.scrim');
    if (scrim) {
      scrim.style.display = 'none';
    }
    const nativeDialog = dialog.shadowRoot.querySelector<HTMLElement>('dialog');
    const html =
      '<style>dialog::backdrop { display:block;    background: var(--md-sys-color-scrim, #000); opacity: 0.32; transition: all 250ms ease 0s; }</style>';
    nativeDialog?.insertAdjacentHTML('beforeend', html);
  }
}
