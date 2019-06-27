import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import '@leavittsoftware/titanium-vaadin/lib/vaadin-text-area-material-outlined';
import '@leavittsoftware/titanium-vaadin/lib/vaadin-text-field-material-outlined';
import '@leavittsoftware/titanium-vaadin/lib/vaadin-number-field-material-outlined';

storiesOf('3RD PARTY|titanium-vaadin', module)
  .add(
    'vaadin-text-field',

    () => {
      return html`
        <div>
          <vaadin-text-field dense></vaadin-text-field>
          <vaadin-text-field dense label="Username"></vaadin-text-field>
          <vaadin-text-field dense placeholder="Placeholder"></vaadin-text-field>
          <vaadin-text-field dense label="Focused" focused></vaadin-text-field>
          <vaadin-text-field dense placeholder="Username" label="Username"></vaadin-text-field>
          <vaadin-text-field dense invalid label="Invalid" error-message="Invalid section"></vaadin-text-field>
          <vaadin-text-field dense disabled label="Disabled"></vaadin-text-field>
          <vaadin-text-field dense label="Suffix">
            <svg slot="suffix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </vaadin-text-field>

          <vaadin-text-field dense placeholder="Prefix" label="Prefix" theme="always-float-label">
            <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
              <path fill="none" d="M0 0h24v24H0V0z" />
            </svg>
          </vaadin-text-field>
          <vaadin-text-field dense required label="Required"></vaadin-text-field>
        </div>

        <div>
          <vaadin-text-field></vaadin-text-field>

          <vaadin-text-field label="Username"></vaadin-text-field>
          <vaadin-text-field placeholder="Placeholder"></vaadin-text-field>
          <vaadin-text-field label="Focused" focused></vaadin-text-field>
          <vaadin-text-field placeholder="Username" label="Username"></vaadin-text-field>
          <vaadin-text-field invalid label="Invalid" error-message="Invalid section"></vaadin-text-field>
          <vaadin-text-field disabled label="Disabled"></vaadin-text-field>
          <vaadin-text-field label="Suffix">
            <svg slot="suffix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </vaadin-text-field>

          <vaadin-text-field placeholder="Prefix" label="Prefix" theme="always-float-label">
            <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
              <path fill="none" d="M0 0h24v24H0V0z" />
            </svg>
          </vaadin-text-field>
          <vaadin-text-field required label="Required"></vaadin-text-field>
        </div>
      `;
    }
  )
  .add(
    'vaadin-text-area',

    () => {
      return html`
        <style>
          vaadin-text-area[tall] {
            height: 150px;
          }
        </style>
        <vaadin-text-area></vaadin-text-area>
        <vaadin-text-area tall label="Fixed Height"></vaadin-text-area>
        <vaadin-text-area placeholder="Placeholder"></vaadin-text-area>
        <vaadin-text-area label="Focused" focused></vaadin-text-area>
        <vaadin-text-area placeholder="Username" label="Username"></vaadin-text-area>
        <vaadin-text-area invalid label="Invalid" error-message="Invalid section"></vaadin-text-area>
        <vaadin-text-area disabled label="Disabled"></vaadin-text-area>
        <vaadin-text-area label="Suffix">
          <svg slot="suffix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </vaadin-text-area>

        <vaadin-text-area placeholder="Prefix" label="Prefix" theme="always-float-label">
          <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
            <path fill="none" d="M0 0h24v24H0V0z" />
          </svg>
        </vaadin-text-area>
        <vaadin-text-area required label="Required"></vaadin-text-area>
      `;
    }
  )
  .add('vaadin-number-field', () => {
    return html`
      <div>
        <vaadin-number-field dense></vaadin-number-field>
        <vaadin-number-field dense label="Age"></vaadin-number-field>
        <vaadin-number-field dense placeholder="Placeholder"></vaadin-number-field>
        <vaadin-number-field dense label="Focused Age" focused></vaadin-number-field>
      </div>
    `;
  })
  .add(
    'All inputs',

    () => {
      return html`
        <vaadin-text-field placeholder="Text Field"></vaadin-text-field>
        <vaadin-text-field label="Text" placeholder="Text Field"></vaadin-text-field>

        <vaadin-number-field placeholder="Number Field"></vaadin-number-field>
        <vaadin-number-field label="Number" placeholder="Number Field"></vaadin-number-field>

        <vaadin-text-area placeholder="Text Area"></vaadin-text-area>
        <vaadin-text-area label="Text Area" placeholder="Text Area"></vaadin-text-area>
      `;
    }
  );
