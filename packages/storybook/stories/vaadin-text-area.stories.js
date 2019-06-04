import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import '@leavittsoftware/titanium-vaadin';

storiesOf('3RD PARTY|vaadin-textarea', module).add(
  'Usage',

  () => {
    return html`
      <style>
        vaadin-text-area[tall] {
          height:150px;
        }
      </style>
      <vaadin-text-area dense></vaadin-text-area>
      <vaadin-text-area dense tall label="Fixed Height"></vaadin-text-area>
      <vaadin-text-area dense placeholder="Placeholder"></vaadin-text-area>
      <vaadin-text-area dense label="Focused" focused></vaadin-text-area>
      <vaadin-text-area dense placeholder="Username" label="Username"></vaadin-text-area>
      <vaadin-text-area dense invalid label="Invalid" error-message="Invalid section"></vaadin-text-area>
      <vaadin-text-area dense disabled label="Disabled"></vaadin-text-area>
      <vaadin-text-area dense label="Suffix">
        <svg slot="suffix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </vaadin-text-area>

      <vaadin-text-area dense placeholder="Prefix" label="Prefix" theme="always-float-label">
        <svg slot="prefix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
          <path fill="none" d="M0 0h24v24H0V0z" />
        </svg>
      </vaadin-text-area>
      <vaadin-text-area dense required label="Required"></vaadin-text-area>
    `;
  }
);
