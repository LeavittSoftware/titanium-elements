import { css, html, LitElement, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * Input validator to make components use validation consistent with mwc-components.
 *
 * @element titanium-input-validator
 * @slot default - The slotted element should fire the NotifyUserInputEvent when it is ready to be validated
 * @example
 * <titanium-input-validator .evaluator=${() => (this.collection?.length ?? 0) > 0} validationMessage="Collection must have one item">
 *     <custom-input @input=${() => this.dispatchEvent(new NotifyUserInputEvent())}></custom-input>
 * </titanium-input-validator>
 * @exports NotifyUserInputEvent - this is a custom event that the consumer of this component can fire to trigger validation
 * @cssprop {Color} [--mdc-theme-error=#b00020] - error color used for validation message
 */
@customElement('titanium-input-validator')
export class TitaniumInputValidator extends LitElement {
  /**
   *  Validation message displayed when the input is invalid
   */
  @property({ type: String }) validationMessage = '';

  /**
   *  Evaluator function that will be called to determine if the input is valid
   */
  @property({ type: Object }) evaluator = () => true;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = '';

  @property({ type: Boolean, reflect: true, attribute: 'has-error' }) protected hasError = false;

  firstUpdated() {
    this.addEventListener(NotifyUserInputEvent.eventName, e => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.reportValidity();
    });
  }

  /**
   *  Checks the result of the evaluator function to determine validity
   */
  checkValidity(): boolean {
    return !!this.evaluator();
  }

  /**
   *  Calls checkValidity() and reports the results back to the UI by displaying the error message if invalid
   */
  reportValidity(): boolean {
    const isValid = this.checkValidity();
    this.hasError = !isValid;
    return isValid;
  }

  reset() {
    this.hasError = false;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }

    outlined-container {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38));
      padding: 1px;
      border-radius: 4px;
      position: relative;
    }

    label {
      position: absolute;
      top: -9px;
      left: 12px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      background: #fff;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host([has-error]) outlined-container {
      border-color: var(--mdc-theme-error, #b00020);
    }

    :host(:focus-within) outlined-container {
      border-width: 2px;
      padding: 0;
    }

    :host(:focus-within:not([has-error])) outlined-container {
      border-color: var(--mdc-theme-primary, #1a73e8);
    }

    :host(:focus-within:not([has-error])) label {
      color: var(--mdc-theme-primary, #1a73e8);
    }

    :host([has-error]) label {
      color: var(--mdc-theme-error, #b00020);
    }

    error-message {
      color: var(--mdc-theme-error, #b00020);
      letter-spacing: 0.0333333em;
      font-size: 12px;
      height: 19px;
      padding: 0 16px;
      opacity: 0.99;
      -webkit-font-smoothing: antialiased;
    }
  `;

  render = () => html`
    <outlined-container part="outline">
      ${this.label ? html`<label part="label">${this.label}</label>` : nothing}
      <slot></slot>
    </outlined-container>
    ${this.validationMessage ? html` <error-message part="error">${this.hasError ? this.validationMessage : nothing}</error-message>` : nothing}
  `;
}

export class NotifyUserInputEvent extends Event {
  static eventName = 'user-input';

  constructor() {
    super(NotifyUserInputEvent.eventName, { bubbles: true, composed: true });
  }
}
