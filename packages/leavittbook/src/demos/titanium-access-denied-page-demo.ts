import '../shared/story-header';

import '@api-viewer/docs';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/access-denied-page/access-denied-page';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-access-denied-page-demo')
export class TitaniumAccessDeniedPageDemo extends LitElement {
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

      div {
        border: 1px solid var(--md-sys-color-outline);
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
    return html`
      <story-header name="Titanium access denied page" className="TitaniumAccessDeniedPage"></story-header>
      <h1>Default</h1>
      <p>Access denied page sample</p>
      <div>
        <titanium-access-denied-page message="You can customize this message"></titanium-access-denied-page>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-access-denied-page"></api-docs>
    `;
  }
}
