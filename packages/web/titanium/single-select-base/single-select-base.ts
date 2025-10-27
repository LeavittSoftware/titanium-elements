import { css, LitElement, PropertyValues } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import '@material/web/progress/circular-progress';
import '@material/web/textfield/outlined-text-field';
import '@material/web/textfield/filled-text-field';

import '@material/web/iconbutton/icon-button';
import '@material/web/icon/icon';

import '@material/web/menu/menu';
import '@material/web/menu/menu-item';

import { DOMEvent } from '../types/dom-event';
import { CloseMenuEvent, MenuItem } from '@material/web/menu/menu';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { Menu } from '@material/web/menu/internal/menu';
import { LoadWhile } from '../../titanium/helpers/load-while';
import { Identifier } from '../types/identifier-interface';
import { redispatchEvent } from '@material/web/internal/events/redispatch-event';
import { ThemePreference } from '../../leavitt/theme/theme-preference';
import { html, literal } from 'lit/static-html.js';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';

@customElement('titanium-single-select-base')
export class TitaniumSingleSelectBase<T extends Identifier> extends ThemePreference(LoadWhile(LitElement)) {
  @state() protected accessor searchTerm: string;
  @state() protected accessor suggestions: Array<T> = [];

  //Suggestions shown to the user when no search terms are present
  @state() protected accessor defaultSuggestions: Array<T> = [];

  @query('md-menu[suggestions]') protected accessor menu: Menu;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) accessor label: string = 'Single select';

  /**
   *  Swaps out outlined text field for a filled text field.
   */
  @property({ type: Boolean, attribute: 'filled' }) accessor filled: boolean = false;

  /**
   *  Sets placeholder text value.
   */
  @property({ type: String }) accessor placeholder: string = 'Search for a entity';

  /**
   *  The entity object selected by the user.
   */
  @property({ type: Object }) accessor selected: T | null = null;

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean }) accessor disabled: boolean = false;

  /**
   *  Disables the asterisk on the floating label, when the text field is required.
   */
  @property({ type: Boolean, attribute: 'no-asterisk' }) accessor noAsterisk: boolean = false;

  /**
   * Describes what, if any, type of autocomplete functionality the input
   * should provide.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  @property({ reflect: true, type: String }) accessor autocomplete = '';

  /**
   * Describes what, if any, type of spellcheck functionality the input
   * should provide.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck
   */
  @property({ reflect: true, type: Boolean }) accessor spellcheck = false;

  /**
   * Gets or sets whether or not the text field is in a visually invalid state.
   *
   * This error state overrides the error state controlled by
   * `reportValidity()`.
   */
  @property({ type: Boolean }) accessor error: boolean = false;

  @property({ type: String }) accessor errorText: string;

  /**
   *  Displays error state if input is empty and input is blurred.
   */
  @property({ type: Boolean }) accessor required: boolean = false;

  /**
   * An optional prefix to display before the input value.
   */
  @property({ type: String }) accessor prefixText: string;

  /**
   * An optional suffix to display after the input value.
   */
  @property({ type: String }) accessor suffixText: string;

  /**
   * Whether or not the text field has a leading icon. Used for SSR.
   */
  @property({ type: Boolean }) accessor hasLeadingIcon: boolean;

  /**
   * Whether or not the text field has a trailing icon. Used for SSR.
   */
  @property({ type: Boolean }) accessor hasTrailingIcon: boolean;

  /**
   * Prevents menu from automatically showing on focus.
   */
  @property({ type: Boolean, attribute: 'disable-menu-open-on-focus' }) accessor disableMenuOpenOnFocus: boolean;

  /**
   * Conveys additional information below the text field, such as how it should
   * be used.
   */
  @property({ type: String }) accessor supportingText: string;

  /**
   * Override the input text CSS `direction`. Useful for RTL languages that use
   * LTR notation for fractions.
   */
  @property({ type: String }) accessor textDirection: string;
  @property({ type: String }) accessor pathToSelectedText: string = 'Name';

  @property() positioning: 'absolute' | 'fixed' | 'document' | 'popover' = 'popover';

  @state() protected accessor count: number;

  getTextField() {
    return this.filled ? this.shadowRoot?.querySelector('md-filled-text-field') : this.shadowRoot?.querySelector('md-outlined-text-field');
  }

  async firstUpdated() {
    const textField = this.getTextField();
    if (textField && this.required) {
      const originalCheckValidity = textField?.checkValidity;
      textField.checkValidity = () => !!this.selected && originalCheckValidity.bind(textField);
    }
  }

  update(changed: PropertyValues<this>) {
    // Firefox does not support popover. Fall-back to using fixed.
    if (changed.has('positioning') && this.positioning === 'popover' && !this.showPopover) {
      this.positioning = 'fixed';
    }

    super.update(changed);
  }

  setCustomValidity(error: string) {
    this.getTextField()?.setCustomValidity(error);
  }

  /**
   *  Resets the selected entity, search term and suggestions.
   */
  async reset() {
    this.softReset();
    this.selected = null;

    const textField = this.getTextField();
    if (textField) {
      textField.error = false;
      textField.errorText = '';
      textField.reset();
    }
  }

  /**
   *  Resets search term and suggestions.
   */
  softReset() {
    this.searchTerm = '';
    this.suggestions = [];
  }

  /**
   * Selects all the text in the text field.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
   */
  async select() {
    this.getTextField()?.select();
  }

  /**
   *  Sets focus on the input.
   */
  async focus() {
    this.getTextField()?.focus();
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.getTextField()?.checkValidity() && this.customCheckValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.getTextField()?.reportValidity() && this.customReportValidity();
  }

  protected customCheckValidity() {
    this.errorText = 'Please fill out this field';
    if (!this.selected && this.getTextField()?.value) {
      return false;
    }

    if (!this.required && !this.selected) {
      return true;
    }

    return !!this.selected;
  }

  protected customReportValidity() {
    if (!this.customCheckValidity()) {
      this.error = true;
    } else {
      this.error = false;
      this.errorText = '';
    }
    return !this.error;
  }

  protected async setSelected(entity: T | null) {
    const previouslySelected = this.selected;
    this.selected = entity;
    if (this.selected) {
      this.softReset();
      setTimeout(() => {
        this.reportValidity();
      }, 0);
    }

    if (previouslySelected?.Id !== this.selected?.Id) {
      this.dispatchEvent(new Event('selected'));
    }
  }

  protected onInputChanged(searchTerm: string) {
    console.log(searchTerm);
  }

  protected async showSuggestions(suggestions: Array<T>, totalSuggestionCount: number) {
    this.suggestions = suggestions;
    this.count = totalSuggestionCount;
    await this.updateComplete;
    this.menu.show();
  }

  async #onInput(searchTerm: string) {
    if (searchTerm || !this.defaultSuggestions.length) {
      this.menu.close();
    }

    this.setSelected(null);
    this.suggestions = !searchTerm ? this.defaultSuggestions : [];
    this.count = !searchTerm ? this.defaultSuggestions.length : 0;
    this.searchTerm = searchTerm;
    await this.updateComplete;

    this.onInputChanged(searchTerm);
  }

  static styles = [
    css`
      :host {
        display: block;
        position: relative;
      }

      md-filled-text-field,
      md-outlined-text-field {
        width: 100%;
      }

      md-circular-progress {
        --md-circular-progress-size: 40px;
        margin-right: 6px;
      }

      md-menu-item {
        min-width: 300px;
      }

      :host([filled]) {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-field-container-shape: 16px;
        --md-menu-container-shape: 16px;

        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }

      :host([shaped]) {
        --md-outlined-text-field-container-shape: 28px;
        --md-filled-text-field-container-shape: 28px;
      }

      img[leading] {
        width: 24px;
        height: 24px;
      }

      img[company-mark] {
        width: 40px;
        height: 40px;
      }

      [summary] {
        padding: 0px 16px 4px 16px;
        font-family: Roboto, Arial, sans-serif;
        line-height: 18px;
        font-size: 13px;
        color: var(--md-sys-color-on-surface);
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  // Override to create custom menu items for type T
  protected renderSuggestion(entity: T) {
    return html`<md-menu-item .item=${entity} ?selected=${this.selected?.Id === entity.Id}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${entity.Id}</span>
    </md-menu-item>`;
  }

  protected renderSelectedLeadingInputSlot(_entity: T) {}

  #renderTrailingInputSlot() {
    return html`<div slot="trailing-icon">
      <md-circular-progress ?indeterminate=${this.isLoading} ?hidden=${!this.isLoading}></md-circular-progress>
      <md-icon-button
        ?hidden=${this.isLoading || !this.selected}
        ?disabled=${this.disabled}
        title="Clear selection"
        @click=${async (e: MouseEvent) => {
          e.preventDefault();
          this.setSelected(null);
          this.focus();
        }}
      >
        <md-icon>close</md-icon>
      </md-icon-button>
      ${this.renderTrailingInputSlot()}
    </div>`;
  }

  protected renderTrailingInputSlot() {
    return html``;
  }

  protected renderLeadingInputSlot() {
    return html`<slot name="leading-icon" slot="leading-icon"><md-icon>search</md-icon></slot>`;
  }

  protected renderTrailingSlot() {
    return html``;
  }

  protected renderTrailingMenuSlot() {
    return html``;
  }

  render() {
    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${this.filled ? literal`md-filled-text-field` : literal`md-outlined-text-field`}
        id="menu-anchor"
        aria-haspopup="true"
        aria-controls="menu"
        .disabled=${this.disabled}
        ?error=${this.error}
        .errorText=${this.errorText}
        .label=${this.label}
        .required=${this.required}
        .prefixText=${this.prefixText}
        .suffixText=${this.suffixText}
        .hasLeadingIcon=${this.hasLeadingIcon}
        .hasTrailingIcon=${this.hasTrailingIcon}
        .supportingText=${this.supportingText}
        .textDirection=${this.textDirection}
        .placeholder=${this.placeholder}
        .autocomplete=${this.autocomplete}
        .spellcheck=${this.spellcheck}
        .noAsterisk=${this.noAsterisk}
        .value=${this.selected?.[this.pathToSelectedText] || this.searchTerm || ''}
        default-focus="0"
        @keydown=${(e: KeyboardEvent) => {
          if (this.suggestions.length > 0 && (e.key == 'Enter' || e.key == 'ArrowDown' || e.key == 'ArrowUp')) {
            if (!this.menu.open) {
              this.menu.show();
            }
            e.stopPropagation();
            this.menu?.activateNextItem();
          }
          if (e.key == 'Tab' || e.key == 'Escape') {
            if (this.menu?.open) {
              this.menu.close();
            }
          }
        }}
        @input=${async (e: DOMEvent<MdOutlinedTextField | MdFilledTextField>) => this.#onInput(e.target.value)}
        @focus=${() => {
          if (this.selected) {
            this.select();
          } else {
            if (!this.searchTerm && this.defaultSuggestions) {
              this.suggestions = this.defaultSuggestions;
            }

            if ((!!this.searchTerm || !!this.suggestions.length) && !this.disableMenuOpenOnFocus) {
              this.menu.show();
            }
          }
        }}
      >
        ${this.selected ? this.renderSelectedLeadingInputSlot(this.selected) : this.renderLeadingInputSlot()} ${this.#renderTrailingInputSlot()}
        </${this.filled ? literal`md-filled-text-field` : literal`md-outlined-text-field`}>
      <md-menu
        suggestions
        @opening=${(e) => redispatchEvent(this, e)}
        @opened=${(e) => redispatchEvent(this, e)}
        @closing=${(e) => redispatchEvent(this, e)}
        @closed=${(e) => redispatchEvent(this, e)}
        .positioning=${this.positioning}
        id="menu"
        anchor="menu-anchor"
        anchor-corner="end-start"
        default-focus="list-root"
        skip-restore-focus
        @close-menu=${(e: CloseMenuEvent) => {
          const selectedMenuItem = (e.detail.itemPath?.[0] ?? null) as MenuItem & { item: T };
          this.setSelected(selectedMenuItem?.item);
        }}
      >
        ${
          !!this.searchTerm && !this.isLoading
            ? html`<div summary>Showing ${this.suggestions.length} of ${this.count} result${this.count === 1 ? '' : 's'} for '${this.searchTerm}'</div>`
            : ''
        }
        ${repeat(
          this.suggestions,
          (item) => item?.Id,
          (item) => this.renderSuggestion(item)
        )}
        ${this.renderTrailingMenuSlot()}
      </md-menu>
      ${this.renderTrailingSlot()}
    `;
    /* eslint-enable lit/binding-positions, lit/no-invalid-html */
  }
}
