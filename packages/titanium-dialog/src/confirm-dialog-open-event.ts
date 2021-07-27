export class ConfirmDialogOpenEvent extends Event {
  static eventType = 'confirm-dialog-open';
  header: string;
  text: string;
  dialogResult: Promise<boolean>;
  resolver: (confirmed: boolean) => void;

  constructor(header: string, text: string) {
    super(ConfirmDialogOpenEvent.eventType, { bubbles: true, composed: true });
    this.header = header;
    this.text = text;
    this.dialogResult = new Promise(res => {
      this.resolver = res;
    });
  }
}
