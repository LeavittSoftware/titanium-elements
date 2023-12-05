import { TemplateResult } from 'lit';
import { SnackbarOptions } from './types/snackbar-options';
import { HttpError } from '../../leavitt/api-service/HttpError';

export class ShowSnackbarEvent extends Event {
  static eventName = 'show-snackbar';
  SnackbarMessage: string | TemplateResult | HttpError;
  SnackbarOptions?: SnackbarOptions;

  constructor(message: string | TemplateResult | HttpError, options?: SnackbarOptions) {
    super(ShowSnackbarEvent.eventName, { bubbles: true, composed: true });

    this.SnackbarMessage = message;
    this.SnackbarOptions = options;
  }
}
