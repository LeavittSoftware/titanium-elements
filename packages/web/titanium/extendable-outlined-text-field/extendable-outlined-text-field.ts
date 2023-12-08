import '@material/web/textfield/outlined-text-field';

import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { stringConverter } from '@material/web/internal/controller/string-converter';
import { TextFieldType, UnsupportedTextFieldType } from '@material/web/textfield/internal/text-field';
import { DOMEvent } from '../types/dom-event';
import { redispatchEvent } from '@material/web/internal/controller/events';

export class ExtendableOutlinedTextField extends LitElement {
  @query('md-outlined-text-field') accessor input: MdOutlinedTextField;

  /**
   * Gets or sets whether or not the text field is in a visually invalid state.
   *
   * This error state overrides the error state controlled by
   * `reportValidity()`.
   */
  @property({ type: Boolean, reflect: true }) accessor error = false;

  @property({ type: Boolean, reflect: true }) accessor disabled = false;

  /**
   * The error message that replaces supporting text when `error` is true. If
   * `errorText` is an empty string, then the supporting text will continue to
   * show.
   *
   * This error message overrides the error message displayed by
   * `reportValidity()`.
   */
  @property({ attribute: 'error-text' }) accessor errorText = '';

  @property() accessor label = '';

  @property({ type: Boolean, reflect: true }) accessor required = false;

  /**
   * The current value of the text field. It is always a string.
   */
  @property() accessor value = '';

  /**
   * An optional prefix to display before the input value.
   */
  @property({ attribute: 'prefix-text' }) accessor prefixText = '';

  /**
   * An optional suffix to display after the input value.
   */
  @property({ attribute: 'suffix-text' }) accessor suffixText = '';

  /**
   * Whether or not the text field has a leading icon. Used for SSR.
   */
  @property({ type: Boolean, attribute: 'has-leading-icon' })
  accessor hasLeadingIcon = false;

  /**
   * Whether or not the text field has a trailing icon. Used for SSR.
   */
  @property({ type: Boolean, attribute: 'has-trailing-icon' })
  accessor hasTrailingIcon = false;

  /**
   * Conveys additional information below the text field, such as how it should
   * be used.
   */
  @property({ attribute: 'supporting-text' }) accessor supportingText = '';

  /**
   * Override the input text CSS `direction`. Useful for RTL languages that use
   * LTR notation for fractions.
   */
  @property({ attribute: 'text-direction' }) accessor textDirection = '';

  /**
   * The number of rows to display for a `type="textarea"` text field.
   * Defaults to 2.
   */
  @property({ type: Number }) accessor rows = 2;

  /**
   * The number of cols to display for a `type="textarea"` text field.
   * Defaults to 20.
   */
  @property({ type: Number }) accessor cols = 20;

  // <input> properties
  @property({ reflect: true }) override accessor inputMode = '';

  /**
   * Defines the greatest value in the range of permitted values.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
   */
  @property() accessor max = '';

  /**
   * The maximum number of characters a user can enter into the text field. Set
   * to -1 for none.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
   */
  @property({ type: Number }) accessor maxLength = -1;

  /**
   * Defines the most negative value in the range of permitted values.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
   */
  @property() accessor min = '';

  /**
   * The minimum number of characters a user can enter into the text field. Set
   * to -1 for none.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
   */
  @property({ type: Number }) accessor minLength = -1;

  /**
   * A regular expression that the text field's value must match to pass
   * constraint validation.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
   */
  @property() accessor pattern = '';

  @property({ reflect: true, converter: stringConverter }) accessor placeholder = '';

  /**
   * Indicates whether or not a user should be able to edit the text field's
   * value.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
   */
  @property({ type: Boolean, reflect: true }) accessor readOnly = false;

  /**
   * Indicates that input accepts multiple email addresses.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple
   */
  @property({ type: Boolean, reflect: true }) accessor multiple = false;

  /**
   * Returns or sets the element's step attribute, which works with min and max
   * to limit the increments at which a numeric or date-time value can be set.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
   */
  @property() accessor step = '';

  /**
   * The `<input>` type to use, defaults to "text". The type greatly changes how
   * the text field behaves.
   *
   * Text fields support a limited number of `<input>` types:
   *
   * - text
   * - textarea
   * - email
   * - number
   * - password
   * - search
   * - tel
   * - url
   *
   * See
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
   * for more details on each input type.
   */
  @property({ reflect: true }) accessor type: TextFieldType | UnsupportedTextFieldType = 'text';

  /**
   * Describes what, if any, type of autocomplete functionality the input
   * should provide.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  @property({ reflect: true }) accessor autocomplete = '';

  checkValidity() {
    return this.input.checkValidity();
  }

  reportValidity() {
    return this.input.reportValidity();
  }

  select() {
    this.input.select();
  }

  setCustomValidity(error: string) {
    this.input.setCustomValidity(error);
  }

  setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode) {
    this.input.setRangeText(replacement, start, end, selectionMode);
  }

  setSelectionRange(start: number | null, end: number | null, direction?: 'forward' | 'backward' | 'none') {
    this.input.setSelectionRange(start, end, direction);
  }

  stepDown(stepDecrement?: number) {
    this.input.stepDown(stepDecrement);
  }

  stepUp(stepDecrement?: number) {
    this.input.stepUp(stepDecrement);
  }

  reset() {
    this.input.reset();
  }

  focus() {
    this.input.focus();
  }

  protected renderMainSlot() {
    return html`
      <slot></slot>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <slot name="leading-icon" slot="leading-icon"></slot>
    `;
  }

  render() {
    return html`
      <md-outlined-text-field
        part="text-field"
        @input=${(e: DOMEvent<MdOutlinedTextField>) => (this.value = e.target.value)}
        @blur=${(e) => redispatchEvent(this, e)}
        @focus=${(e) => redispatchEvent(this, e)}
        @change=${(e) => redispatchEvent(this, e)}
        @invalid=${(e) => redispatchEvent(this, e)}
        .disabled=${this.disabled}
        .required=${this.required}
        .error=${this.error}
        .autocomplete=${this.autocomplete}
        .errorText=${this.errorText}
        .hasLeadingIcon=${this.hasLeadingIcon}
        .hasTrailingIcon=${this.hasTrailingIcon}
        .label=${this.label}
        .max=${this.max}
        .maxLength=${this.maxLength}
        .minLength=${this.minLength}
        .pattern=${this.pattern}
        .placeholder=${this.placeholder}
        .prefixText=${this.prefixText}
        .readOnly=${this.readOnly}
        .rows=${this.rows}
        .step=${this.step}
        .suffixText=${this.suffixText}
        .supportingText=${this.supportingText}
        .textDirection=${this.textDirection}
        .type=${this.type}
        .value=${this.value}
      >
        ${this.renderMainSlot()}
      </md-outlined-text-field>
    `;
  }
}
