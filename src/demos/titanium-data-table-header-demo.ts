import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@material/web/icon/icon';
import '@api-viewer/docs';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/data-table/data-table-header';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-data-table-header-demo')
export class TitaniumDataTableHeaderDemo extends LitElement {
  static styles = [
    StoryStyles,
    css`
      header-container {
        display: flex;
        flex-direction: row;
        gap: 24px;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium data table header" level1Href="/titanium-data-table-header" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-data-table-header</kbd> is deprecated. Use <kbd>titanium-data-table-core</kbd> instead (shown in separate demo).</p>
            </deprecation-notice>
            <story-header name="Titanium data table header" className="TitaniumDataTableHeader"></story-header>

            <div>
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
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-data-table-header"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
