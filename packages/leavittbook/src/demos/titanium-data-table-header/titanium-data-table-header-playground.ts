/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';
import '@material/mwc-icon';

/* playground-fold */
@customElement('titanium-data-table-header-playground')
export class TitaniumDataTableHeaderPlayground extends LitElement {
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
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples using left, center, right, large, no-sort, desktop, and width attributes</p>
      <div>
        <titanium-data-table-header left column-name="Left" title="Left"></titanium-data-table-header>
        <titanium-data-table-header center column-name="Center" title="Center"></titanium-data-table-header>
        <titanium-data-table-header right column-name="Right" title="Right"></titanium-data-table-header>
        <titanium-data-table-header large column-name="Large" title="Large"></titanium-data-table-header>
        <titanium-data-table-header no-sort column-name="NoSort" title="No sort"></titanium-data-table-header>
        <titanium-data-table-header desktop column-name="Desktop" title="Desktop"></titanium-data-table-header>
        <titanium-data-table-header width="200px" column-name="Width" title="Width"></titanium-data-table-header>
      </div>
    `;
  }
}
