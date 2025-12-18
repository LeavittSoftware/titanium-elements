import '../shared/story-header';

import '@api-viewer/docs';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/data-table/data-table-header';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-data-table-header-demo')
export class TitaniumDataTableHeaderDemo extends LitElement {
  static styles = [
    StoryStyles,
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
        gap: 16px;
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium data table header" className="TitaniumDataTableHeader"></story-header>
      <h1>Table headers</h1>
      <p>Data table header components with different alignment and sizing options</p>
      <header-container>
        <titanium-data-table-header sort-direction="asc" left column-name="Left" title="Left"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" center column-name="Center" title="Center"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" right column-name="Right" title="Right"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" large column-name="Large" title="Large"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" no-sort column-name="NoSort" title="No sort"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" desktop column-name="Desktop" title="Desktop"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" width="200px" column-name="Width" title="Width"></titanium-data-table-header>
      </header-container>

      <api-docs src="./custom-elements.json" selected="titanium-data-table-header"></api-docs>
    `;
  }
}
