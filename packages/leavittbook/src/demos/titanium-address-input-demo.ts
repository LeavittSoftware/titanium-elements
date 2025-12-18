import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/button/outlined-button';
import '@material/web/icon/icon';
import '@material/web/select/outlined-select';
import '@material/web/select/select-option';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/address-input/address-input';
import '@leavittsoftware/web/titanium/address-input/google-address-input';

import { TitaniumAddressInput } from '@leavittsoftware/web/titanium/address-input/address-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { GoogleAddressInput } from '@leavittsoftware/web/titanium/address-input/google-address-input';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-address-input-demo')
export class TitaniumAddressInputDemo extends LitElement {
  @state() protected accessor setLocationResult: string | null = null;

  @query('google-address-input[demo-a]') protected accessor googleAddressInputDemoA!: GoogleAddressInput;
  @query('google-address-input[demo-a-filled]') protected accessor googleAddressInputDemoAFilled!: GoogleAddressInput;
  @query('titanium-address-input[demo-a]') protected accessor titaniumAddressInputDemoA!: TitaniumAddressInput;
  @query('titanium-address-input[demo-a-filled]') protected accessor titaniumAddressInputDemoAFilled!: TitaniumAddressInput;

  @state() accessor allowInternational: boolean = false;

  static styles = [
    StoryStyles,
    h1,
    h2,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 24px 12px;
      }

      h1,
      h2 {
        margin-bottom: -12px;
      }

      component-demo {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        gap: 24px;
      }

      section[actions] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      [locked] {
        display: block;
        position: relative;
        height: 300px;
        max-width: 650px;
        width: 100%;
      }

      [absolute] {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        will-change: transform;
        width: 100%;
      }

      @media (min-width: 450px) {
        titanium-address-input {
          min-width: 400px;
        }
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium address input" className="TitaniumAddressInput"></story-header>
      <h1>Google address input</h1>

      <component-demo>
        <h2>Main demo</h2>
        <google-address-input
          demo-a
          autocomplete="street-address"
          @selected=${(e: DOMEvent<GoogleAddressInput>) => console.log('selected change 1', e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </google-address-input>

        <google-address-input
          filled
          demo-a-filled
          autocomplete="street-address"
          @selected=${(e: DOMEvent<GoogleAddressInput>) => console.log('selected change 1', e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </google-address-input>

        <section actions>
          <md-outlined-button
            @click=${() => {
              this.googleAddressInputDemoA.reportValidity();
              console.log('googleAddressInputDemoAFilled', this.googleAddressInputDemoAFilled.reportValidity);
              this.googleAddressInputDemoAFilled.reportValidity();
            }}
            >reportValidity()</md-outlined-button
          >
          <md-outlined-button
            @click=${() => {
              this.googleAddressInputDemoA.required = !this.googleAddressInputDemoA.required;
              this.googleAddressInputDemoAFilled.required = !this.googleAddressInputDemoAFilled.required;
            }}
            >Toggle required</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.googleAddressInputDemoA.disabled = !this.googleAddressInputDemoA.disabled;
              this.googleAddressInputDemoAFilled.disabled = !this.googleAddressInputDemoAFilled.disabled;
            }}
            >Toggle disabled</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.googleAddressInputDemoA.supportingText = this.googleAddressInputDemoA.supportingText ? '' : 'Select an address above';
              this.googleAddressInputDemoAFilled.supportingText = this.googleAddressInputDemoAFilled.supportingText ? '' : 'Select an address above';
            }}
            >Toggle supporting text</md-outlined-button
          >
          <md-outlined-button
            @click=${() => {
              this.googleAddressInputDemoA.selected = {
                Id: '1',
                street: '11 North Main Street',
                city: 'Cedar City',
                state: 'UT',
                zip: '84720',
              };
              this.googleAddressInputDemoAFilled.selected = {
                Id: '1',
                street: '11 North Main Street',
                city: 'Cedar City',
                state: 'UT',
                zip: '84720',
              };
            }}
            >Prefill an address</md-outlined-button
          >
          <md-outlined-button
            @click=${() => {
              this.googleAddressInputDemoA.reset();
              this.googleAddressInputDemoAFilled.reset();
            }}
            >reset()</md-outlined-button
          >
        </section>
      </component-demo>
      <component-demo>
        <h2>Slots demo</h2>
        <google-address-input
          autocomplete="address"
          label="Slots"
          @selected=${(e: DOMEvent<GoogleAddressInput>) => console.log('selected change 1', e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
          <md-icon slot="trailing-icon">security</md-icon><md-icon slot="leading-icon">map</md-icon>
        </google-address-input>
      </component-demo>

      <h1>Titanium address input</h1>

      <component-demo>
        <h2>Main demo</h2>
        <titanium-address-input
          ?allow-international=${this.allowInternational}
          autocomplete="address"
          demo-a
          @selected=${(e: DOMEvent<GoogleAddressInput>) => console.log('selected change 1', e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </titanium-address-input>

        <titanium-address-input
          filled
          ?allow-international=${this.allowInternational}
          autocomplete="address"
          demo-a-filled
          @selected=${(e: DOMEvent<GoogleAddressInput>) => console.log('selected change 1', e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </titanium-address-input>

        <section actions>
          <md-outlined-button @click=${() => (this.allowInternational = !this.allowInternational)}>Allow international</md-outlined-button>
          <md-outlined-button
            @click=${() => {
              this.titaniumAddressInputDemoA.reportValidity();
              this.titaniumAddressInputDemoAFilled.reportValidity();
            }}
            >reportValidity()</md-outlined-button
          >
          <md-outlined-button
            @click=${() => {
              this.titaniumAddressInputDemoA.required = !this.titaniumAddressInputDemoA.required;
              this.titaniumAddressInputDemoAFilled.required = !this.titaniumAddressInputDemoAFilled.required;
            }}
            >Toggle required</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.titaniumAddressInputDemoA.disabled = !this.titaniumAddressInputDemoA.disabled;
              this.titaniumAddressInputDemoAFilled.disabled = !this.titaniumAddressInputDemoAFilled.disabled;
            }}
            >Toggle disabled</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.titaniumAddressInputDemoA.supportingText = this.titaniumAddressInputDemoA.supportingText ? '' : 'Select an address above';
              this.titaniumAddressInputDemoAFilled.supportingText = this.titaniumAddressInputDemoAFilled.supportingText ? '' : 'Select an address above';
            }}
            >Toggle supporting text</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.titaniumAddressInputDemoA.showCounty = !this.titaniumAddressInputDemoA.showCounty;
              this.titaniumAddressInputDemoAFilled.showCounty = !this.titaniumAddressInputDemoAFilled.showCounty;
            }}
            >Toggle show county</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.titaniumAddressInputDemoA.showStreet2 = !this.titaniumAddressInputDemoA.showStreet2;
              this.titaniumAddressInputDemoAFilled.showStreet2 = !this.titaniumAddressInputDemoAFilled.showStreet2;
            }}
            >Toggle show street2</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.titaniumAddressInputDemoA.selected = {
                Id: '1',
                street: '11 North Main Street',
                city: 'Cedar City',
                state: 'UT',
                zip: '84720',
                country: 'US',
              };
              this.titaniumAddressInputDemoAFilled.selected = {
                Id: '1',
                street: '11 North Main Street',
                city: 'Cedar City',
                state: 'UT',
                zip: '84720',
                country: 'US',
              };
            }}
            >Prefill an address</md-outlined-button
          >
          <md-outlined-button @click=${() => this.titaniumAddressInputDemoA.reset()}>reset()</md-outlined-button>
        </section>
      </component-demo>

      <api-docs src="./custom-elements.json" selected="titanium-address-input"></api-docs>
    `;
  }
}
