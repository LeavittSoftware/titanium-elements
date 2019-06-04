import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';
import '@vaadin/vaadin-material-styles/mixins/required-field.js';
import '@vaadin/vaadin-material-styles/font-icons.js';
import '@vaadin/vaadin-material-styles/mixins/field-button.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field';
import './vaadin-material-outlined.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`
  <dom-module id="material-text-field-outlined" theme-for="vaadin-text-field">
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
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild($_documentContainer.content);
