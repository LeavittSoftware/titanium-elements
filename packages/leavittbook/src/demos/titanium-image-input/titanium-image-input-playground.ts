/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import { h1, p, button } from '@leavittsoftware/titanium-styles';

import '@material/mwc-button';
import '@leavittsoftware/user-manager';

/* playground-fold-end */
import '@leavittsoftware/titanium-image-input';
import { TitaniumImageInputElement } from '@leavittsoftware/titanium-image-input';

/* playground-fold */
@customElement('titanium-image-input-playground')
export class TitaniumImageInputPlaygroundElement extends LitElement {
  @queryAll('titanium-image-input') private inputs!: NodeListOf<TitaniumImageInputElement>;
  @query('titanium-image-input[methods-demo]') private methodsPersonSelect!: TitaniumImageInputElement;

  async firstUpdated() {
    // Fix MWC floating label problem
    requestAnimationFrame(() => {
      Array.from(this.inputs).forEach(() => {
        //TODO: add method to input
        //   o.layout();
      });
    });
  }

  static styles = [
    h1,
    p,
    button,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
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
    /* playground-fold-end */
    return html`
      <user-manager disableAutoload></user-manager>
      <h1>Default</h1>
      <p>Default person select</p>
      <div>
        <titanium-image-input></titanium-image-input>
        <titanium-image-input label="Placeholder" placeholder="My placeholder"></titanium-image-input>
        <titanium-image-input label="Disabled" disabled></titanium-image-input>
        <titanium-image-input label="Required" required validationMessage="required"></titanium-image-input>
        <titanium-image-input label="Tall aspect ratio" .options=${{ aspectRatio: 220 / 850 }}></titanium-image-input>
        <titanium-image-input label="Wide aspect ratio" .options=${{ aspectRatio: 848 / 100 }}></titanium-image-input>
        <titanium-image-input label="Circle crop" .options=${{ shape: 'circle' }}></titanium-image-input>
        <titanium-image-input></titanium-image-input>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div>
        <titanium-image-input required methods-demo></titanium-image-input>
        <section buttons>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsPersonSelect.reset();
            }}
            label="reset()"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsPersonSelect.setImage('https://cdn.leavitt.com/icons/icon-reminder.svg');
            }}
            label="setImage('https://cdn.leavitt.com/icons/icon-reminder.svg')"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              alert(this.methodsPersonSelect.getFile());
            }}
            label="getFile()"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsPersonSelect.reportValidity();
            }}
            label="reportValidity()"
          ></mwc-button>
        </section>
      </div>
    `;
  }
}
