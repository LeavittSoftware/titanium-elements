import { LitElement, css, html } from 'lit';
import { customElement, property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { redispatchEvent } from '@material/web/internal/controller/events';

import { stringConverter } from '@material/web/internal/controller/string-converter';

import '@material/web/field/outlined-field';
import '@material/web/icon/icon';
import { Field } from '@material/web/field/internal/field';

/**
 * A date input the works in Firefox, Safari and Chrome
 *
 * @element titanium-date-input
 *
 */
@customElement('titanium-date-input')
export class TitaniumDateInput extends LitElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  static readonly formAssociated = true;

  private readonly onInvalid = (invalidEvent: Event) => {
    if (this.isCheckingValidity || this.isReportingValidity) {
      return;
    }

    this.showErrorMessage(false, invalidEvent);
  };

  override attributeChangedCallback(attribute: string, newValue: string | null, oldValue: string | null) {
    if (attribute === 'value' && this.dirty) {
      // After user input, changing the value attribute no longer updates the
      // text field's value (until reset). This matches native <input> behavior.
      return;
    }

    super.attributeChangedCallback(attribute, newValue, oldValue);
  }

  override connectedCallback() {
    super.connectedCallback();

    // Handles the case where the user submits the form and native validation
    // error pops up. We want the error styles to show.
    this.addEventListener('invalid', this.onInvalid);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('invalid', this.onInvalid);
  }

  /**
   *  Whether or not the input should be disabled
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   * Gets or sets whether or not the text field is in a visually invalid state.
   *
   * This error state overrides the error state controlled by
   * `reportValidity()`.
   */
  @property({ type: Boolean, reflect: true }) error = false;

  /**
   * The error message that replaces supporting text when `error` is true. If
   * `errorText` is an empty string, then the supporting text will continue to
   * show.
   *
   * This error message overrides the error message displayed by
   * `reportValidity()`.
   */
  @property({ attribute: 'error-text' }) errorText = '';

  @property() label = '';

  @property({ type: Boolean, reflect: true }) required = false;

  /**
   * The current value of the text field. It is always a string.
   */
  @property() value = '';

  /**
   * An optional prefix to display before the input value.
   */
  @property({ attribute: 'prefix-text' }) prefixText = '';

  /**
   * An optional suffix to display after the input value.
   */
  @property({ attribute: 'suffix-text' }) suffixText = '';

  /**
   * Whether or not the text field has a leading icon. Used for SSR.
   */
  @property({ type: Boolean, attribute: 'has-leading-icon' })
  hasLeadingIcon = false;

  /**
   * Whether or not the text field has a trailing icon. Used for SSR.
   */
  @property({ type: Boolean, attribute: 'has-trailing-icon' })
  hasTrailingIcon = false;

  /**
   * Conveys additional information below the text field, such as how it should
   * be used.
   */
  @property({ attribute: 'supporting-text' }) supportingText = '';

  @property({ reflect: true, converter: stringConverter }) placeholder = '';

  @property({ reflect: true })
  type: 'date' | 'datetime-local' = 'date';

  /**
   * Returns true when the text field has been interacted with. Native
   * validation errors only display in response to user interactions.
   */
  @state() private dirty = false;
  @state() private focused = false;
  /**
   * Whether or not a native error has been reported via `reportValidity()`.
   */
  @state() private nativeError = false;
  /**
   * The validation message displayed from a native error via
   * `reportValidity()`.
   */
  @state() private nativeErrorText = '';

  @query('input') private accessor input: HTMLInputElement;
  @query('md-outlined-field') private accessor field: Field | null;

  @queryAssignedElements({ slot: 'leading-icon' }) private accessor leadingIcons!: Element[];
  @queryAssignedElements({ slot: 'trailing-icon' }) private accessor trailingIcons!: Element[];

  private isCheckingValidity = false;
  private isReportingValidity = false;

  // Needed for Safari, see https://bugs.webkit.org/show_bug.cgi?id=261432
  // Replace with this[internals].validity.customError when resolved.
  private hasCustomValidityError = false;
  private internals_: ElementInternals;

  checkValidity() {
    this.isCheckingValidity = true;
    this.syncValidity();
    const isValid = this.internals_.checkValidity();
    this.isCheckingValidity = false;
    return isValid;
  }

  reportValidity() {
    this.isReportingValidity = true;
    let invalidEvent: Event | undefined;
    this.addEventListener(
      'invalid',
      (event) => {
        invalidEvent = event;
      },
      { once: true }
    );

    const valid = this.checkValidity();
    this.showErrorMessage(valid, invalidEvent);

    this.isReportingValidity = false;

    return valid;
  }

  get validationMessage() {
    this.syncValidity();
    return this.internals_.validationMessage;
  }

  /**
   * Returns a `ValidityState` object that represents the validity states of the
   * text field.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   */
  get validity() {
    this.syncValidity();
    return this.internals_.validity;
  }

  private syncValidity() {
    // Sync the internal <input>'s validity and the host's ElementInternals
    // validity. We do this to re-use native `<input>` validation messages.
    const input = this.input;
    if (this.hasCustomValidityError) {
      input.setCustomValidity(this.internals_.validationMessage);
    } else {
      input.setCustomValidity('');
    }
    this.internals_.setValidity(input.validity, input.validationMessage, this.input);
  }

  private handleIconChange() {
    this.hasLeadingIcon = this.leadingIcons.length > 0;
    this.hasTrailingIcon = this.trailingIcons.length > 0;
  }

  private getErrorText() {
    return this.error ? this.errorText : this.nativeErrorText;
  }

  private showErrorMessage(valid: boolean, invalidEvent: Event | undefined) {
    if (invalidEvent?.defaultPrevented) {
      return valid;
    }

    const prevMessage = this.getErrorText();
    this.nativeError = !valid;
    this.nativeErrorText = this.validationMessage;

    if (prevMessage === this.getErrorText()) {
      this.field?.reannounceError();
    }

    return valid;
  }

  /**
   * Selects all the text in the text field.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
   */
  select() {
    this.input.select();
  }

  setCustomValidity(error: string) {
    this.hasCustomValidityError = !!error;
    this.internals_.setValidity({ customError: !!error }, error, this.input);
  }

  reset() {
    this.dirty = false;
    this.value = this.getAttribute('value') ?? '';
    this.nativeError = false;
    this.nativeErrorText = '';
  }

  static styles = css`
    :host {
      display: block;
    }

    input::-webkit-inner-spin-button,
    input::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    @-moz-document url-prefix() {
      md-outlined-field[focused] {
        --md-outlined-field-top-space: 4px;
        --md-outlined-field-bottom-space: 4px;
      }

      md-outlined-field:not([focused]) input {
        height: 26px;
      }
    }
  `;

  protected render() {
    return html`
      <md-outlined-field
        ?disabled=${this.disabled}
        ?error=${this.error || this.nativeError}
        error-text=${this.getErrorText()}
        ?focused=${this.focused}
        ?has-end=${this.hasTrailingIcon}
        ?has-start=${this.hasLeadingIcon}
        label=${this.label || 'Date'}
        ?populated=${!!this.value}
        ?required=${this.required}
        supporting-text=${this.supportingText}
      >
        <span class="icon leading" slot="start">
          <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
        </span>
        <input
          type=${this.type}
          ?disabled=${this.disabled}
          aria-describedby="description"
          aria-invalid=${this.error || this.nativeError}
          aria-label=${this.label}
          placeholder=${this.placeholder || ''}
          ?required=${this.required}
          .value=${live(this.value)}
          @change=${(e: Event) => redispatchEvent(this, e)}
          @focusin=${() => (this.focused = true)}
          @focusout=${() => (this.focused = false)}
          @input=${(event: InputEvent) => {
            this.dirty = true;
            this.value = (event.target as HTMLInputElement).value;
            // Sync validity so that clients can check validity on input.
            this.syncValidity();
          }}
          @select=${(e: Event) => redispatchEvent(this, e)}
        />
        <span class="icon trailing" slot="end">
          <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
        </span>
      </md-outlined-field>
    `;
  }
}
