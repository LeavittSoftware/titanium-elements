import { SnackbarOptions } from './types/snackbar-options';
import { HttpError } from '../../leavitt/api-service/HttpError';

export class ShowSnackbarEvent extends Event {
  static eventName = 'show-snackbar';
  SnackbarMessage: string | Partial<HttpError>;
  SnackbarOptions?: SnackbarOptions;

  constructor(message: string | Partial<HttpError>, options?: SnackbarOptions) {
    super(ShowSnackbarEvent.eventName, { bubbles: true, composed: true });

    this.SnackbarMessage = message;
    this.SnackbarOptions = options;
  }
}
