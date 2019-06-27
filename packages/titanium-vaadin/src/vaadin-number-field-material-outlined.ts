import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';
import '@vaadin/vaadin-material-styles/mixins/required-field.js';
import '@vaadin/vaadin-material-styles/font-icons.js';
import '@vaadin/vaadin-material-styles/mixins/field-button.js';
import '@vaadin/vaadin-text-field/src/vaadin-number-field';
import './vaadin-material-outlined.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`
  <dom-module id="material-number-field-outlined" theme-for="vaadin-number-field">
    <template>
      <style include="material-required-field material-field-button vaadin-material-outlined">
        [part='input-field'] {
          height: 40px;
          padding: 8px;
          background-color: transparent;
          margin: 0;
        }

        :host([dense]) [part='input-field'] {
          height: 30px;
          padding: 4px 8px;
        }

        :host([focused][dense]:not([invalid])) [part='input-field'] {
          /* prevent shifting from the 2px border */
          padding: 3px 7px;
        }

        :host([dense]) [part="value"],
        :host([disabled][dense]) [part="input-field"] ::slotted(input),
        :host([disabled][dense]) [part="input-field"] ::slotted(textarea),
        /* Slotted by vaadin-select-text-field */
        :host([dense]) [part="input-field"] ::slotted([part="value"]) {
          padding: 0 8px;
        }

        :host([has-label][dense]:not([has-value]):not([focused]):not([invalid]):not([theme~='always-float-label'])) [part='label'] {
          transform: scale(1) translateY(22px);
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild($_documentContainer.content);
