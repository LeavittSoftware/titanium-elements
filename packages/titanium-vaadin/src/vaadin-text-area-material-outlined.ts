import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';
import '@vaadin/vaadin-material-styles/mixins/required-field.js';
import '@vaadin/vaadin-material-styles/font-icons.js';
import '@vaadin/vaadin-material-styles/mixins/field-button.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-area.js';
import './vaadin-material-outlined.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`
  <dom-module id="material-text-area-outlined" theme-for="vaadin-text-area">
    <template>
      <style include="material-required-field material-field-button vaadin-material-outlined">
        [part='input-field'] {
          height: auto;
          box-sizing: border-box;
        }

        [part='input-field'] ::slotted(*:not([part='value']):not([part\$='-button']):not(input):not(textarea)) {
          margin-top: 8px;
        }

        /* NOTE(platosha): double attribute workarounds specifity for Firefox */
        [part='value'] {
          padding-top: 10px;
        }
        [part='input-field'] [part='value'],
        [part='input-field'] ::slotted(textarea) {
          white-space: pre-wrap;
          align-self: stretch;
          /* line-height: 15px; */
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild($_documentContainer.content);
