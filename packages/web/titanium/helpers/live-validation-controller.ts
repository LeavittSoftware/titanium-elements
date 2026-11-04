import { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 *  A field that reports its own validity, such as `md-filled-text-field`, `md-filled-select`,
 *  `titanium-date-input` or the titanium selects.
 */
type ValidatableField = Element & {
  hasError: boolean;
  checkValidity: () => boolean;
  reportValidity: () => boolean;
};

export type LiveValidationControllerOptions = {
  /**
   *  Events that mean a field's value may have changed. Listened for in the capture phase so events
   *  that do not bubble, like `selected` from the titanium selects, are seen too.
   *  Defaults to `input`, `change`, `selected` and `selected-changed`.
   */
  events?: Array<string>;
};

const defaultEvents = ['input', 'change', 'selected', 'selected-changed'];

function isValidatableField(target: EventTarget): target is ValidatableField {
  return (
    target instanceof Element &&
    'hasError' in target &&
    typeof (target as Partial<ValidatableField>).checkValidity === 'function' &&
    typeof (target as Partial<ValidatableField>).reportValidity === 'function'
  );
}

/**
 *  Clears a field's validation error as soon as the user corrects it.
 *
 *  Material Web fields show an error when `reportValidity()` finds them invalid and keep showing
 *  it until the next `reportValidity()` or `reset()`, even after the user fixes the value. Attach
 *  this controller to a page or dialog that validates on save: whenever a field inside the host's
 *  render root changes while it shows an error, the controller checks it again and clears the
 *  error once the value is valid.
 *
 *  It never shows an error that is not already showing, and it leaves a field that is still invalid
 *  alone, so focus does not jump and screen readers do not re-announce the error on each keystroke.
 *
 *  @example
 *  class MyDialog extends LitElement {
 *    // A public field: the controller registers itself, so the field is never read.
 *    liveValidation = new LiveValidationController(this);
 *  }
 */
export class LiveValidationController implements ReactiveController {
  #host: ReactiveControllerHost & HTMLElement;
  #events: Array<string>;
  #root: EventTarget | null = null;

  constructor(host: ReactiveControllerHost & HTMLElement, options: LiveValidationControllerOptions = {}) {
    this.#host = host;
    this.#events = options.events ?? defaultEvents;
    host.addController(this);
  }

  hostConnected() {
    this.#root = (this.#host as HTMLElement & { renderRoot?: EventTarget }).renderRoot ?? this.#host;
    for (const type of this.#events) {
      this.#root.addEventListener(type, this.#onFieldEvent, { capture: true });
    }
  }

  hostDisconnected() {
    for (const type of this.#events) {
      this.#root?.removeEventListener(type, this.#onFieldEvent, { capture: true });
    }
    this.#root = null;
  }

  #onFieldEvent = (event: Event) => {
    const field = this.#findField(event);
    if (!field) {
      return;
    }

    // Capture listeners run before the field handles the event itself, so check once it has.
    setTimeout(() => {
      if (field.hasError && field.checkValidity()) {
        field.reportValidity();
      }
    });
  };

  /**
   *  The outermost field in the event's path below the host's render root. Outermost so a titanium
   *  select is checked as a whole rather than through the text field inside it.
   */
  #findField(event: Event) {
    let field: ValidatableField | null = null;
    for (const target of event.composedPath()) {
      if (target === this.#root) {
        break;
      }
      if (isValidatableField(target)) {
        field = target;
      }
    }

    return field;
  }
}
