import { TemplateResult } from 'lit';

export class ConfirmDialogOpenEvent extends Event {
  static eventType = 'confirm-dialog-open';
  header: string;
  text: string | TemplateResult;
  dialogResult: Promise<boolean>;
  resolver: (confirmed: boolean) => void;

  constructor(header: string, text: string | TemplateResult) {
    super(ConfirmDialogOpenEvent.eventType, { bubbles: true, composed: true });
    this.header = header;
    this.text = text;
    this.dialogResult = new Promise((res) => {
      this.resolver = res;
    });
  }
}
