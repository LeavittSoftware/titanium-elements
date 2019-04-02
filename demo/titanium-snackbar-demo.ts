import '@leavittsoftware/titanium-elements/lib/titanium-snackbar';
import {TitaniumSnackbar} from '@leavittsoftware/titanium-elements/lib/titanium-snackbar';
import {css, customElement, html, LitElement, query} from 'lit-element';


// This decorator defines the element.
@customElement('titanium-snackbar-demo')
export class TitaniumSnackbarDemo extends LitElement {
  @query('titanium-snackbar[basic]') basic: TitaniumSnackbar;

  static styles = css`
  :host {
    
  }

  header{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #dadce0;
    border-top: 1px solid #dadce0;
  }
`;

  render() {
    return html`
        <a href="#snackbar" @click=${() => this.basic.do_open()}> Open Basic Snack</a>
        <titanium-snackbar basic message="Hello World"></titanium-snackbar>
    
     `;
  }
}
