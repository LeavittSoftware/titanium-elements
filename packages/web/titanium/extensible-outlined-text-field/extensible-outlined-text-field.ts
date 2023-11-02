import '@material/web/textfield/outlined-text-field';

import { TextFieldType, UnsupportedTextFieldType } from '@material/web/textfield/internal/text-field';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';

export class ExtensibleOutlinedTextField extends LitElement {
  @property({ type: Boolean }) disabled: boolean;
  @property({ type: Boolean }) required: boolean;
  @property({ type: Boolean }) error: boolean;
  @property({ type: String }) autocomplete: string;
  @property({ type: String }) errorText: string;
  @property({ type: Boolean }) hasLeadingIcon: boolean;
  @property({ type: Boolean }) hasTrailingIcon: boolean;
  @property({ type: String }) label: string;
  @property({ type: String }) max: string;
  @property({ type: Number }) maxLength: number;
  @property({ type: Number }) minLength: number;
  @property({ type: String }) name: string;
  @property({ type: String }) pattern: string;
  @property({ type: String }) placeholder: string;
  @property({ type: String }) prefixText: string;
  @property({ type: Boolean }) readOnly: boolean;
  @property({ type: Number }) rows: number;
  @property({ type: String }) selectionDirection: 'forward' | 'backward' | 'none' | null;
  @property({ type: Number }) selectionEnd: number;
  @property({ type: Number }) selectionStart: number;
  @property({ type: String }) step: string;
  @property({ type: String }) suffixText: string;
  @property({ type: String }) supportingText: string;
  @property({ type: String }) textDirection: string;
  @property({ type: String }) type: TextFieldType | UnsupportedTextFieldType;
  @property({ type: String }) value: string;
  @property({ type: Date }) valueAsDate: Date;
  @property({ type: Number }) valueAsNumber: number;

  @query('md-outlined-text-field') outlinedTextField: MdOutlinedTextField;

  checkValidity() {
    return this.outlinedTextField.checkValidity();
  }

  reportValidity() {
    return this.outlinedTextField.reportValidity();
  }

  select() {
    this.outlinedTextField.select();
  }

  setCustomValidity(error: string) {
    this.outlinedTextField.setCustomValidity(error);
  }

  setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode) {
    this.outlinedTextField.setRangeText(replacement, start, end, selectionMode);
  }

  setSelectionRange(start: number | null, end: number | null, direction?: 'forward' | 'backward' | 'none') {
    this.outlinedTextField.setSelectionRange(start, end, direction);
  }

  stepDown(stepDecrement?: number) {
    this.outlinedTextField.stepDown(stepDecrement);
  }

  stepUp(stepDecrement?: number) {
    this.outlinedTextField.stepUp(stepDecrement);
  }

  reset() {
    this.outlinedTextField.reset();
  }

  render() {
    return html`
      <md-outlined-text-field
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
        .name=${this.name}
        .pattern=${this.pattern}
        .placeholder=${this.placeholder}
        .prefixText=${this.prefixText}
        .readOnly=${this.readOnly}
        .rows=${this.rows}
        .selectionDirection=${this.selectionDirection}
        .selectionEnd=${this.selectionEnd}
        .selectionStart=${this.selectionStart}
        .step=${this.step}
        .suffixText=${this.suffixText}
        .supportingText=${this.supportingText}
        .textDirection=${this.textDirection}
        .type=${this.type}
        .value=${this.value}
        .valueAsDate=${this.valueAsDate}
        .valueAsNumber=${this.valueAsNumber}
      >
      </md-outlined-text-field>
    `;
  }
}
