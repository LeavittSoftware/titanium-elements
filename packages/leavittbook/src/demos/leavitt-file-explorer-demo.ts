import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import '@leavittsoftware/web/leavitt/file-explorer/file-explorer';

import { html, LitElement, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../styles/story-styles';
import api3UserService from '../services/api3-user-service';
import { AuthIdentityController } from '../services/auth-identity-controller';

@customElement('leavitt-file-explorer-demo')
export class LeavittFileExplorerDemo extends LitElement {
  #auth = new AuthIdentityController(this);

  connectedCallback() {
    super.connectedCallback();
    api3UserService.addHeader('X-LGAppName', 'FileExplorer');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (api3UserService.headers['X-LGAppName'] === 'FileExplorer') {
      api3UserService.addHeader('X-LGAppName', 'Testing');
    }
  }

  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt file explorer" level1Href="/leavitt-file-explorer" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt File Explorer" className="LeavittFileExplorer" requires-auth></story-header>

            ${this.#auth.identity
              ? html`
                  <div>
                    <h1>File Explorer</h1>
                    <p>File explorer component with API integration</p>
                    <leavitt-file-explorer file-explorer-id="1" .apiService=${api3UserService}></leavitt-file-explorer>
                  </div>
                `
              : nothing}

            <api-docs src="./custom-elements.json" selected="leavitt-file-explorer"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
  }
}
