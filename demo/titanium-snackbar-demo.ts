import '@leavittsoftware/titanium-elements/lib/titanium-snackbar';
import {TitaniumSnackbar} from '@leavittsoftware/titanium-elements/lib/titanium-snackbar';
import {css, customElement, html, LitElement, query} from 'lit-element';


// This decorator defines the element.
@customElement('titanium-snackbar-demo')
export class TitaniumSnackbarDemo extends LitElement {
  @query('titanium-snackbar[basic]') basic: TitaniumSnackbar;
  @query('titanium-snackbar[action]') action: TitaniumSnackbar;
  @query('titanium-snackbar[long]') long: TitaniumSnackbar;

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

<br />
<br />
        <a href="#action" @click=${async () => {
      await this.action.do_open();
      alert('Retrying network call.');
    }}> Open Action Snack</a>
        <titanium-snackbar actionText="RETRY" action message="Query failed"></titanium-snackbar>
        <br />
<br />
        <a href="#long" @click=${() => {
      this.long.do_open()
    }}> Open Long Action Snack</a>
        <titanium-snackbar actionText="LONGER ACTION TEXT" long message="This item already has the label travel. You can add a new label."></titanium-snackbar>
    
     `;
  }
}
