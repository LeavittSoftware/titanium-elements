/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-button';

/* playground-fold-end */
import '@leavittsoftware/titanium-color-input';

/* playground-fold */
@customElement('titanium-color-input-playground')
export class TitaniumColorInputPlayground extends LitElement {
  @query('titanium-color-input[required]') requiredInput;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples using disabled, closeable, and readonly attribute</p>
      <div>
        <titanium-color-input label="Default"></titanium-color-input>
        <titanium-color-input label="Preselected" value="salmon"></titanium-color-input>
        <titanium-color-input required label="Required" value="steelblu"></titanium-color-input>
        <mwc-button outlined label="validate" @click=${() => this.requiredInput?.reportValidity()}></mwc-button>
      </div>
    `;
  }
}
