import { css, html, LitElement } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

@customElement('titanium-input-validator')
export class TitaniumInputValidatorElement extends LitElement {
  @property({ type: String }) validationMessage = '';
  @property({ type: Object }) evaluator = () => true;

  @state() protected isUiValid = true;

  firstUpdated() {
    this.addEventListener(NotifyUserInputEvent.eventName, e => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.reportValidity();
    });
  }

  checkValidity(): boolean {
    return !!this.evaluator();
  }

  reportValidity(): boolean {
    const isValid = this.checkValidity();
    this.isUiValid = isValid;
    return isValid;
  }

  static styles = css`
    :host {
      display: inline-flex;
      flex-direction: column;
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

  render = () => html`<slot></slot>
    <error-message>${this.isUiValid ? '' : this.validationMessage}</error-message> `;
}

export class NotifyUserInputEvent extends Event {
  static eventName = 'user-input';

  constructor() {
    super(NotifyUserInputEvent.eventName, { bubbles: true, composed: true });
  }
}
