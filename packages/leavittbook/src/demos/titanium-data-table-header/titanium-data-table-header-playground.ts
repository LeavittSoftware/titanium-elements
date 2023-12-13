/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/data-table/data-table-header';

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

        margin: 24px 12px;
      }

      header-container {
        display: flex;
        flex-direction: row;
      }

      /* titanium-data-table-header {
        border: 1px solid green;
      } */
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <header-container>
        <titanium-data-table-header sort-direction="asc" left column-name="Left" title="Left"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" center column-name="Center" title="Center"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" right column-name="Right" title="Right"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" large column-name="Large" title="Large"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" no-sort column-name="NoSort" title="No sort"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" desktop column-name="Desktop" title="Desktop"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" width="200px" column-name="Width" title="Width"></titanium-data-table-header>
      </header-container>
    `;
  }
}
