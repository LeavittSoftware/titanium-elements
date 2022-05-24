/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */
import '@leavittsoftware/titanium-single-select';
import '@leavittsoftware/titanium-single-select/lib/titanium-single-select-item';

/* playground-fold */
@customElement('titanium-single-select-playground')
export class TitaniumSingleSelectPlayground extends LitElement {
  @state() private data = [
    { FirstName: 'Alice', LastName: 'Smith', FullName: 'Alice Smith' },
    { FirstName: 'Bob', LastName: 'Silverstone', FullName: 'Bob Silverstone' },
    { FirstName: 'Charlie', LastName: 'Tu', FullName: 'Charlie Tu' },
    { FirstName: 'Dogg', LastName: 'Bounty', FullName: 'Dogg Bounty' },
    { FirstName: 'Alicia', LastName: 'Fu', FullName: 'Alicia Fu' },
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
          <titanium-single-select
            style="max-width: 400px; margin: 24px 0;"
            @input=${() => console.log('search something...')}
            @selected-changed=${e => {
              alert(JSON.stringify(e.detail));
            }}
            itemlabelpath="FullName"
            totalCount="532"
            hinttext="Search for a person or group to add them as a participant"
            placeholder="Add participants"
          >
            ${this.data.map(person => html`<titanium-single-select-item .value=${person}>${person.FirstName} ${person.LastName}</titanium-single-select-item>`)}
          </titanium-single-select>
        </div>
      </titanium-card>
    `;
  }
}
