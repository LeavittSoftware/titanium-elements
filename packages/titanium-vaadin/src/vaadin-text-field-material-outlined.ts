import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';
import '@vaadin/vaadin-material-styles/mixins/required-field.js';
import '@vaadin/vaadin-material-styles/font-icons.js';
import '@vaadin/vaadin-material-styles/mixins/field-button.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`
  <dom-module id="material-text-field-outlined" theme-for="vaadin-text-field">
    <template>
      <style include="material-required-field material-field-button">
        :host {
          display: inline-flex;
          position: relative;
          padding: 20px 0;
          outline: none;
          z-index: 0;
          color: var(--material-body-text-color);
          font-size: var(--material-body-font-size);
          line-height: 24px;
          font-family: var(--material-font-family);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          --material-disabled-text-color: #b3b3b3;
        }

        :host([invalid][error-message]) {
          padding-bottom: 0;
        }

        :host::before {
          line-height: 32px;
        }

        /* Strange gymnastics to make fields vertically align nicely in most cases
         (no label, with label, without prefix, with prefix, etc.) */

        [part='label']:empty {
          display: none;
        }

        [part='label']:empty::before {
          content: ' ';
          position: absolute;
        }

        [part='input-field'] {
          position: relative;
          height: 40px;
          padding: 8px;
          background-color: transparent;
          margin: 0;

          border: 1px solid var(--app-border-color, #dadce0);
          border-radius: 4px;
        }

        :host([dense]) [part='input-field'] {
          padding: 4px 8px;
          height: 30px;
        }

        :host(:hover) [part='input-field'] {
          border: 1px solid #404347;
        }

        :host([focused]:not([invalid])) [part='input-field'] {
          border: 2px solid var(--material-primary-text-color);

          /* prevent shifting from the 2px border */
          padding: 7px;
        }

        :host([focused][dense]:not([invalid])) [part='input-field'] {
          /* prevent shifting from the 2px border */
          padding: 3px 7px;
        }

        :host([invalid]) [part='input-field'] {
          border: 2px solid var(--material-error-text-color);
        }

        :host([disabled]) [part='input-field'] {
          border: 1px solid var(--material-disabled-text-color);
        }

        [part='error-message'] {
          padding-left: 16px;
        }

        :host([disabled]) [part='label'],
        :host([disabled]) [part='value'],
        :host([disabled]) [part='input-field'] ::slotted(input),
        :host([disabled]) [part='input-field'] ::slotted(textarea),
        :host([disabled]) [part='input-field'] ::slotted([part='value']) {
          color: var(--material-disabled-text-color);
          -webkit-text-fill-color: var(--material-disabled-text-color);
        }

        [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(input),
      :host([disabled]) [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
          outline: none;
          margin: 0;
          border: 0;
          border-radius: 0;
          padding: 8px;
          width: 100%;
          height: 100%;
          font-family: inherit;
          font-size: 1em;
          line-height: inherit;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        :host([dense]) [part="value"],
      :host([disabled][dense]) [part="input-field"] ::slotted(input),
      :host([disabled][dense]) [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      :host([dense]) [part="input-field"] ::slotted([part="value"]) {
          padding: 0 8px;
        }

        /* TODO: the text opacity should be 42%, but the disabled style is 38%.
      Would need to introduce another property for it if we want to be 100% accurate. */
        [part='value']::-webkit-input-placeholder {
          color: var(--material-disabled-text-color);
          transition: opacity 0.175s 0.05s;
          opacity: 1;
        }

        [part='value']:-ms-input-placeholder {
          color: var(--material-disabled-text-color);
        }

        [part='value']::-moz-placeholder {
          color: var(--material-disabled-text-color);
          transition: opacity 0.175s 0.05s;
          opacity: 1;
        }

        [part='value']::placeholder {
          color: var(--material-disabled-text-color);
          transition: opacity 0.175s 0.1s;
          opacity: 1;
        }

        :host([has-label]:not([focused]):not([invalid]):not([theme='always-float-label'])) [part='value']::-webkit-input-placeholder {
          opacity: 0;
          transition-delay: 0;
        }

        :host([has-label]:not([focused]):not([invalid]):not([theme='always-float-label'])) [part='value']::-moz-placeholder {
          opacity: 0;
          transition-delay: 0;
        }

        :host([has-label]:not([focused]):not([invalid]):not([theme='always-float-label'])) [part='value']::placeholder {
          opacity: 0;
          transition-delay: 0;
        }

        /* IE11 doesn’t show the placeholder when the input is focused, so it’s basically useless for this theme */
        :host([has-label]) [part='value']:-ms-input-placeholder {
          opacity: 0;
        }

        [part='label'] {
          transition: transform 0.175s, color 0.175s, width 0.175s;
          transition-timing-function: ease, ease, step-end;
          left: 8px;
          top: 10px;
          padding: 0 8px;
          background-color: #fff;
          z-index: 1;
        }

        /* TODO: using unsupported selector to fix IE11 (even thought the label element is scaled down,
         the 133% width still takes the same space as an unscaled element */
        ::-ms-backdrop,
        .vaadin-text-field-container {
          overflow: hidden;
        }

        /* Same fix for MS Edge ^^   */
        @supports (-ms-ime-align: auto) {
          .vaadin-text-field-container {
            overflow: hidden;
          }
        }

        :host(:hover:not([readonly]):not([invalid])) [part='input-field']::before {
          opacity: var(--_material-text-field-input-line-hover-opacity, 0.87);
        }

        :host([focused]:not([invalid])) [part='label'] {
          color: var(--material-primary-text-color);
        }

        :host([focused]) [part='input-field']::after,
        :host([invalid]) [part='input-field']::after {
          opacity: 1;
          transform: none;
          transition: transform 0.175s, opacity 0.175s;
        }

        :host([invalid]) [part='input-field']::after {
          background-color: var(--material-error-color);
        }

        :host([input-prevented]) [part='input-field'] {
          color: var(--material-error-text-color);
        }

        :host([disabled]) {
          pointer-events: none;
        }

        :host([disabled]) [part='input-field'] {
          color: var(--material-disabled-text-color);
        }

        :host([disabled]) [part='input-field']::before {
          background-color: transparent;
          background-image: linear-gradient(
            90deg,
            var(--_material-text-field-input-line-background-color, #000) 0,
            var(--_material-text-field-input-line-background-color, #000) 2px,
            transparent 2px
          );
          background-size: 4px 1px;
          background-repeat: repeat-x;
        }

        /* Only target the visible floating label */
        :host([has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~='always-float-label'])) [part='label'] {
          /* IE11 doesn’t work with calc inside the translate function, so we need to have a fixed pixel value instead of 50% + 16px */
          transform: scale(1) translateY(32px);
          transition-timing-function: ease, ease, step-start;
          pointer-events: none;
          left: 8px;
          transition-delay: 0.1s;
        }

        :host([has-label][dense]:not([has-value]):not([focused]):not([invalid]):not([theme~='always-float-label'])) [part='label'] {
          transform: scale(1) translateY(22px);
        }

        /* Slotted content */

        [part='input-field'] ::slotted(*:not([part='value']):not([part\$='-button']):not(input):not(textarea)) {
          color: var(--material-secondary-text-color);
          fill: var(--material-secondary-text-color);
        }

        [part='clear-button']::before {
          content: var(--material-icons-clear);
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild($_documentContainer.content);
