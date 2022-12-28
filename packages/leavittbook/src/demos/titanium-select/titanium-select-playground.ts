/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */
import '@leavittsoftware/titanium-select';

/* playground-fold */
@customElement('titanium-select-playground')
export class TitaniumSelectPlayground extends LitElement {
  @state() protected data = [
    { Id: 'Alice', Name: 'Alice' },
    { Id: 'Bob', Name: 'Bob' },
    { Id: 'Charlie', Name: 'Charlie' },
    { Id: 'Dogg', Name: 'Dogg' },
    { Id: 'Alicia', Name: 'Alicia' },
  ];

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
      <titanium-card>
        <p>Simple demo</p>
        <div>
          <titanium-select
            style="max-width: 400px; margin: 24px 0;"
            @value-changed=${e => {
              alert(JSON.stringify(e.detail));
            }}
            .options=${this.data}
          >
          </titanium-select>
        </div>
      </titanium-card>
    `;
  }
}
