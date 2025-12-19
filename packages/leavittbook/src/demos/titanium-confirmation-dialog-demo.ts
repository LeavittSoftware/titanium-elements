import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';
import '@material/web/textfield/filled-text-field';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/confirmation-dialog/confirmation-dialog';
import TitaniumConfirmationDialog from '@leavittsoftware/web/titanium/confirmation-dialog/confirmation-dialog';
import { heroStyles } from '../styles/hero-styles';

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
    heroStyles,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;
        margin-bottom: 48px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      p {
        margin-bottom: 12px;
      }

      md-filled-text-field {
        --md-filled-text-field-container-shape: 16px;

        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium confirmation dialog" level1Href="/titanium-confirmation-dialog" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium confirmation dialog" className="TitaniumConfirmationDialog"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic confirmation dialog with default button text</p>
              <p>Result: ${this.result}</p>
              <md-filled-tonal-button
                @click=${async () => {
                  this.result = await this.confirmationDialog?.open(
                    'Confirmation delete?',
                    'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.'
                  );
                }}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo1></titanium-confirmation-dialog>
            </div>

            <div>
              <h1>Custom button text</h1>
              <p>Confirmation dialog with custom confirm and cancel button text</p>
              <p>Result: ${this.result2}</p>
              <md-filled-tonal-button
                @click=${async () => {
                  this.result2 = await this.confirmationDialog2?.open(
                    'Do you agree?',
                    'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.'
                  );
                }}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo2 confirmActionText="Agree" cancelActionText="Disagree"></titanium-confirmation-dialog>
            </div>

            <div>
              <h1>Slot demo</h1>
              <p>Confirmation dialog with custom content in the slot</p>
              <p>Result: ${this.result3}</p>
              <md-filled-tonal-button
                @click=${async () => {
                  this.result3 = await this.confirmationDialog3?.open('What is your favorite color?', 'asf saf asdf');
                }}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo3>
                <md-filled-text-field label="What is your favorite color?"></md-filled-text-field>
              </titanium-confirmation-dialog>
            </div>

            <div>
              <h1>Required form demo</h1>
              <p>Confirmation dialog with form validation that disables confirm action</p>
              <p>Result: ${this.result4}</p>
              <md-filled-tonal-button
                @click=${async () => {
                  this.favoriteSnack = '';
                  this.result4 = await this.confirmationDialog4?.open('What is your favorite snack?', 'asf saf asdf');
                }}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo4 ?disable-confirmation-action=${!this.favoriteSnack}>
                <md-filled-text-field
                  label="Favorite snack"
                  .value=${this.favoriteSnack || ''}
                  @input=${(e) => (this.favoriteSnack = e.target.value || '')}
                ></md-filled-text-field>
              </titanium-confirmation-dialog>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-confirmation-dialog"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
