import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/icon/icon';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/error-page/error-page';
import StoryStyles from '../styles/story-styles';

@customElement('leavitt-error-page-demo')
export class LeavittErrorPageDemo extends LitElement {
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
    `,
  ];

  render() {
    return html`
      <story-header name="Leavitt error page" className="LeavittErrorPage"></story-header>
      <h1>Default</h1>
      <p>Error page sample</p>
      <div>
        <leavitt-error-page message="It looks like this demo doesn't exist."></leavitt-error-page>

        <leavitt-error-page heading="Sorry!" message="It looks like you don't have access to this area."><md-icon slot="icon">lock</md-icon></leavitt-error-page>
      </div>

      <api-docs src="./custom-elements.json" selected="leavitt-error-page"></api-docs>
    `;
  }
}
