import '@leavittsoftware/titanium-elements/lib/titanium-snackbar';
import {TitaniumSnackbar} from '@leavittsoftware/titanium-elements/lib/titanium-snackbar';
import {css, customElement, html, LitElement, query} from 'lit-element';


// This decorator defines the element.
@customElement('titanium-snackbar-demo')
export class TitaniumSnackbarDemo extends LitElement {
  @query('titanium-snackbar') snackbar: TitaniumSnackbar;

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
        <titanium-snackbar></titanium-snackbar>

        <a href="#snackbar" @click=${() => this.snackbar.open('Hello World')}> Open Basic Snack</a>
        <br />
        <br />
        <a href="#action" @click=${async () => {
      await this.snackbar.open('Query failed', 'RETRY');
      alert('Retrying network call.');
    }}> Open Action Snack</a>
              <br />
              <br />
              <a href="#long" @click=${() => {
      this.snackbar.open('This item already has the label travel. You can add a new label.', 'LONGER ACTION TEXT')
    }}> Open Long Action Snack</a>`;
  }
}
