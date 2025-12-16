import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';

import '../../shared/story-header';
import '../../shared/smart-demo';
import './leavitt-file-explorer-playground';

@customElement('leavitt-file-explorer-demo')
export class LeavittUserFileExplorerDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Leavitt file explorer" className="LeavittUserFileExplorer"></story-header>
      <leavitt-file-explorer-playground></leavitt-file-explorer-playground>
    `;
  }
}
