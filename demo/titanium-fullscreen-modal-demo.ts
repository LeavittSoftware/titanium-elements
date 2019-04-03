import '@leavittsoftware/titanium-elements/lib/titanium-fullscreen-modal';

import {css, customElement, html, LitElement, query} from 'lit-element';
@customElement('titanium-fullscreen-modal-demo')
export default class TitaniumFullscreenModalDemo extends LitElement {
  @query('titanium-fullscreen-modal') modal: TitaniumFullscreenModal;


  openSimpleDemo() {
    this.modal.message = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    this.modal.open();
  }

  static styles = css``;

  render() {
    return html`

    <a href="#" @click=${this.openSimpleDemo}>Open Simple Demo</a>
    <titanium-fullscreen-modal></titanium-fullscreen-modal>
`;
  }
}