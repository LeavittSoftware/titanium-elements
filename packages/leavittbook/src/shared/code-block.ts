/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, PropertyValues, css, TemplateResult, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import 'prismjs/prism.js';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-bash.js';
import '@material/mwc-icon-button';
import CodeBlockStyles from './code-block-styles';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';

declare var Prism: any;

@customElement('code-block')
export default class CodeBlockElement extends LitElement {
  @property({ type: String }) language = 'html';
  @property({ type: Boolean }) lineNumbers = false;
  @property({ type: Boolean }) open = false;
  @property({ type: Boolean, attribute: 'hide-open-button' }) hideOpenButton = false;
  @property({ type: Object }) snippet: TemplateResult<1>;
  @query('#output') output: HTMLElement;

  #snippet: string;

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('snippet')) {
      if (this.snippet) {
        this.#snippet = this.#getTemplateAsString(this.snippet);
        this.#codeToOutput(this.#snippet);
      }
    }
  }

  #codeToOutput(snippet: string) {
    const highlight = Prism.highlight(snippet, Prism.languages[this.language], this.language);
    this.output.innerHTML = highlight;
  }

  #copyToClipboard(snippet: string) {
    if (snippet) {
      navigator.clipboard.writeText(snippet);
      TitaniumSnackbarSingleton.open('Copied to clipboard', { autoHide: true, noAction: true });
    }
  }

  #getTemplateAsString(template) {
    const { strings, values } = template;
    const v = [...values, ''];
    return strings.reduce((acc, s, i) => acc + s + v[i], '');
  }

  static styles = [
    css`
      :host {
        display: block;
        position: relative;
      }

      mwc-icon-button {
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
      }

      div[content] {
        position: relative;
        display: grid;
        grid: 'code button' / 1fr auto;
        background-color: #f9f9f9;
        padding: 4px 12px 4px 24px;
        border-radius: 8px;
      }

      details {
        display: flex;
        justify-content: flex-end;
        flex: 1 1 auto;
        margin-top: 12px;
      }

      summary {
        display: flex;
        justify-content: flex-end;
        user-select: none;
        position: relative;
        cursor: pointer;
        padding-left: 12px;
        font-size: 13px;
        color: var(--app-light-text-color);
      }

      details summary::-webkit-details-marker {
        display: none;
      }

      details[open] > summary:before {
        transform: rotate(90deg);
      }
    `,
    CodeBlockStyles,
  ];

  content() {
    return html`
      <div content>
        <pre class="language-${this.language}"><code id="output"></code></pre>
        <mwc-icon-button @click=${() => this.#copyToClipboard(this.#snippet)} icon="content_copy"></mwc-icon-button>
      </div>
    `;
  }

  render() {
    return html`
      ${this.hideOpenButton
        ? this.content()
        : html`<details ?open=${this.open}>
            <summary>Show code</summary>
            ${this.content()}
          </details> `}
    `;
  }
}
