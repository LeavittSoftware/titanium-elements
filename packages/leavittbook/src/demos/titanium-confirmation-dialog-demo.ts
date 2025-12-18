import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/button/outlined-button';
import '@material/web/textfield/outlined-text-field';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/confirmation-dialog/confirmation-dialog';
import TitaniumConfirmationDialog from '@leavittsoftware/web/titanium/confirmation-dialog/confirmation-dialog';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-confirmation-dialog-demo')
export class TitaniumConfirmationDialogDemo extends LitElement {
  @state() private accessor result: 'confirmed' | 'cancel' | undefined;
  @state() private accessor result2: 'confirmed' | 'cancel' | undefined;
  @state() private accessor result3: 'confirmed' | 'cancel' | undefined;
  @state() private accessor result4: 'confirmed' | 'cancel' | undefined;
  @state() private accessor favoriteSnack: string | undefined;

  @query('titanium-confirmation-dialog[demo1]') private accessor confirmationDialog: TitaniumConfirmationDialog | null;
  @query('titanium-confirmation-dialog[demo2]') private accessor confirmationDialog2: TitaniumConfirmationDialog | null;
  @query('titanium-confirmation-dialog[demo3]') private accessor confirmationDialog3: TitaniumConfirmationDialog | null;
  @query('titanium-confirmation-dialog[demo4]') private accessor confirmationDialog4: TitaniumConfirmationDialog | null;

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

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium confirmation dialog" className="TitaniumConfirmationDialog"></story-header>
      <h1>Default</h1>
      <p>Basic confirmation dialog with default button text</p>
      <div>
        <p>Result: ${this.result}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async () => {
              this.result = await this.confirmationDialog?.open(
                'Confirmation delete?',
                'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.'
              );
            }}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo1></titanium-confirmation-dialog>
      </div>

      <h1>Custom button text</h1>
      <p>Confirmation dialog with custom confirm and cancel button text</p>
      <div>
        <p>Result: ${this.result2}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async () => {
              this.result2 = await this.confirmationDialog2?.open(
                'Do you agree?',
                'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.'
              );
            }}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo2 confirmActionText="Agree" cancelActionText="Disagree"></titanium-confirmation-dialog>
      </div>

      <h1>Slot demo</h1>
      <p>Confirmation dialog with custom content in the slot</p>
      <div>
        <p>Result: ${this.result3}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async () => {
              this.result3 = await this.confirmationDialog3?.open('What is your favorite color?', 'asf saf asdf');
            }}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo3>
          <md-outlined-text-field label="What is your favorite color?"></md-outlined-text-field>
        </titanium-confirmation-dialog>
      </div>

      <h1>Required form demo</h1>
      <p>Confirmation dialog with form validation that disables confirm action</p>
      <div>
        <p>Result: ${this.result4}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async () => {
              this.favoriteSnack = '';
              this.result4 = await this.confirmationDialog4?.open('What is your favorite snack?', 'asf saf asdf');
            }}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo4 ?disable-confirmation-action=${!this.favoriteSnack}>
          <md-outlined-text-field
            label="Favorite snack"
            .value=${this.favoriteSnack || ''}
            @input=${(e) => (this.favoriteSnack = e.target.value || '')}
          ></md-outlined-text-field>
        </titanium-confirmation-dialog>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-confirmation-dialog"></api-docs>
    `;
  }
}
