import { MdDialog } from '@material/web/dialog/dialog';

export function preventDialogOverflow(dialog: MdDialog) {
  const container = dialog?.shadowRoot?.querySelector<HTMLElement>('.container');
  const scroller = container?.querySelector<HTMLElement>('.scroller');
  if (scroller) {
    scroller.style.overflow = 'initial';
  }
  if (container) {
    container.style.overflow = 'initial';
  }
}

export function allowDialogOverflow(dialog: MdDialog) {
  const container = dialog?.shadowRoot?.querySelector<HTMLElement>('.container');
  const scroller = container?.querySelector<HTMLElement>('.scroller');
  if (scroller) {
    scroller.style.overflow = '';
  }
  if (container) {
    container.style.overflow = '';
  }
}
