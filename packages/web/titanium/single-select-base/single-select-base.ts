import { css, html, LitElement } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import '@material/web/progress/linear-progress';
import '@material/web/icon/icon';
import '@material/web/textfield/outlined-text-field';

import '@material/web/menu/menu';
import '@material/web/menu/menu-item';

import { DOMEvent } from '../types/dom-event';
import { CloseMenuEvent, MenuItem } from '@material/web/menu/menu';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { Menu } from '@material/web/menu/internal/menu';
import { LoadWhile } from '../../titanium/helpers/load-while';
import { Identifier } from '../types/identifier-interface';
import { redispatchEvent } from '@material/web/internal/controller/events';

@customElement('titanium-single-select-base')
export class TitaniumSingleSelectBase<T extends Identifier> extends LoadWhile(LitElement) {
  @state() protected searchTerm: string;
  @state() protected suggestions: Array<T> = [];

  @query('md-menu') protected menu: Menu | null;
  @query('md-outlined-text-field') protected textfield: MdOutlinedTextField | null;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) accessor label: string = 'Single select';

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

  @state() protected accessor count: number;

  async firstUpdated() {
    if (this.textfield && this.required) {
      const originalCheckValidity = this.textfield?.checkValidity;
      this.textfield.checkValidity = () => !!this.selected && originalCheckValidity.bind(this.textfield);
    }
  }

  setCustomValidity(error: string) {
    this.textfield?.setCustomValidity(error);
  }

  /**
   *  Resets the selected entity, search term and suggestions.
   */
  async reset() {
    this.softReset();
    this.selected = null;

    if (this.textfield) {
      this.textfield.error = false;
      this.textfield.errorText = '';
    }
  }

  /**
   *  Resets search term and suggestions.
   */
  softReset() {
    if (this.textfield) {
      this.textfield.reset();
    }
    this.searchTerm = '';
    this.suggestions = [];
  }

  /**
   * Selects all the text in the text field.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
   */
  async select() {
    this.textfield?.select();
  }

  /**
   *  Sets focus on the input.
   */
  async focus() {
    this.textfield?.focus();
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.textfield?.checkValidity() && this.customCheckValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    const result = this.textfield?.reportValidity();
    this.customReportValidity();
    return result;
  }

  protected customCheckValidity() {
    this.errorText = 'Please fill out this field';
    if (!this.selected && this.textfield?.value) {
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

  async #onInput(searchTerm: string) {
    this.menu?.close();
    await this.updateComplete;

    this.setSelected(null);
    this.suggestions = [];
    this.count = 0;
    this.searchTerm = searchTerm;
    this.onInputChanged(searchTerm);

    if (this.menu) {
      this.menu.open = !!this.searchTerm || !!this.suggestions.length;
    }
  }

  static styles = [
    css`
      :host {
        display: block;
        position: relative;
      }

      md-outlined-text-field {
        width: 100%;
      }

      md-linear-progress {
        margin: 0px 12px 4px 12px;
        min-width: 276px;
        width: calc(100% - 24px);
      }

      md-linear-progress[hide] {
        visibility: hidden;
      }

      md-menu-item {
        min-width: 300px;
      }

      :host([shaped]) {
        --md-outlined-text-field-container-shape: 28px;
      }

      :host([shallow]) {
        --md-outlined-text-field-container-shape: 12px;
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
        color: var(--app-light-text-color);
        line-height: 18px;
        font-size: 13px;
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected renderSelectedLeadingInputSlot(_entity: T) {}

  protected renderTrailingInputSlot() {
    return html`<slot name="trailing-icon" slot="trailing-icon"></slot>`;
  }

  protected renderLeadingInputSlot() {
    return html`<slot name="leading-icon" slot="leading-icon"><md-icon>search</md-icon></slot>`;
  }

  protected renderTrailingSlot() {
    return html``;
  }

  render() {
    return html`
      <md-outlined-text-field
        id="menu-anchor"
        aria-haspopup="true"
        aria-controls="menu"
        .disabled=${this.disabled}
        .error=${this.error}
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
        .value=${this.selected?.[this.pathToSelectedText] || this.searchTerm || ''}
        default-focus="0"
        @keydown=${(e: KeyboardEvent) => {
          if (this.suggestions.length > 0 && (e.key == 'Enter' || e.key == 'ArrowDown' || e.key == 'ArrowUp')) {
            e.stopPropagation();
            this.menu?.activateNextItem();
          }
          if (e.key == 'Tab' || e.key == 'Escape') {
            if (this.menu?.open) {
              this.menu.close();
            }
          }
        }}
        @input=${async (e: DOMEvent<MdOutlinedTextField>) => this.#onInput(e.target.value)}
        @focus=${() => {
          if (this.selected) {
            this.select();
          } else {
            if (!!this.searchTerm || !!this.suggestions.length) {
              this.menu?.show();
            }
          }
        }}
      >
        ${this.selected ? this.renderSelectedLeadingInputSlot(this.selected) : this.renderLeadingInputSlot()} ${this.renderTrailingInputSlot()}
      </md-outlined-text-field>
      <md-menu
        @opening=${(e) => redispatchEvent(this, e)}
        @opened=${(e) => redispatchEvent(this, e)}
        @closing=${(e) => redispatchEvent(this, e)}
        @closed=${(e) => redispatchEvent(this, e)}
        quick
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
        <md-linear-progress ?indeterminate=${this.isLoading} ?hide=${!this.isLoading}></md-linear-progress>
        ${!!this.searchTerm && !this.isLoading
          ? html`<div summary>Showing ${this.suggestions.length} of ${this.count} result${this.count === 1 ? '' : 's'} for '${this.searchTerm}'</div>`
          : ''}
        ${repeat(
          this.suggestions,
          (item) => item?.Id,
          (item) => this.renderSuggestion(item)
        )}
      </md-menu>
      ${this.renderTrailingSlot()}
    `;
  }
}
