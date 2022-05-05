import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/titanium-card';
import '@material/mwc-button';

@customElement('example-story')
export class ExampleStoryElement extends LitElement {
  static styles = [h1, h2, h3, p, css``];
  render() {
    return html`
      <titanium-card>
        <h1>Example story</h1>
        <p>Example story text</p>
        <mwc-button outlined label="Example story button">Click</mwc-button>
      </titanium-card>
    `;
  }
}
