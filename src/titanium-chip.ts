import '@vaadin/vaadin-button/theme/material/vaadin-button';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-ripple/paper-ripple';

import {customElement, property} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('titanium-chip')

export class TitaniumChipElement extends PolymerElement {
  @property() label: string;
  @property() src: string|null = null;

  static get template() {
    return html`<style>
  :host {
    @apply --layout-horizontal;
    @apply --layout-center;
    position: relative;
    background-color: #eee;
    border-radius: 16px;
    cursor: pointer;
    user-select: none;
    min-height: 28px;
    @apply --titanium-chip;
  }

  :host(:hover) {
    background-color: #ddd;
    transition: .2s linear;
    @apply --titanium-chip-hover;
  }

  label {
    @apply --layout-flex-auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-font-smoothing: antialiased;
    padding: 0 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    @apply --titanium-chip-label;
  }

  img {
    border-radius: 50%;
    height: 28px;
    width: 28px;
    @apply --titanium-chip-image;
  }

  vaadin-button {
    margin: 0;
    padding: 0;
    height: 28px;
    width: 28px;
    min-width: 0;
    border-radius: 50%;
    flex-shrink: 0;
    display: none;
    @apply --titanium-chip-button;
  }

  :host([closeable]) vaadin-button {
    display: block;
  }

  svg {
    fill: #757575;
    width: 18px;
    height: 18px;
    @apply --titanium-chip-svg;
  }
</style>

<paper-ripple></paper-ripple>
<slot slot="chip-icon" name="chip-icon">
  <img src="[[src]]" hidden$="[[!src]]" />
</slot>
<label>[[label]]</label>
<vaadin-button>
  <svg prefix viewBox="0 0 24 24">
    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
  </svg>
</vaadin-button>`;
  }
}
