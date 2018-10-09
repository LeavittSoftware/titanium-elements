import '@vaadin/vaadin-button/theme/material/vaadin-button';
import '@polymer/iron-flex-layout/iron-flex-layout';

import {customElement, property} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('titanium-chip')

export class TitaniumChipElement extends PolymerElement {
  @property() label: string;
  @property() src: string|null = null;
  @property({type: Boolean, reflectToAttribute: true})
  disabled: boolean = false;

  _onCloseButtonClicked() {
    this.dispatchEvent(new CustomEvent(
        'titanium-chip-close', {bubbles: true, composed: true}));
  }

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
    height: 30px;
    @apply --titanium-chip;
  }

  :host([disabled]) {
    opacity: .6;
  }

  :host([disabled]) {
    background-color: #eee !important;
  }

  :host(:hover) {
    background-color: #ddd;
    transition: .2s linear;
    @apply --titanium-chip-hover;
  }

  :host(:active) {
    background-color: #ccc;
    @apply --titanium-chip-active;
  }

  :host ::slotted(*) {
    margin-left: 8px;
  }

  label {
    @apply --layout-flex-auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-font-smoothing: antialiased;
    margin: 0 16px;
    font-size: 13px;
    line-height: 17px;
    font-weight: 500;
    color: #424242;
    cursor: pointer;
    @apply --titanium-chip-label;
  }

  img {
    border-radius: 50%;
    border: 1px solid transparent;
    height: 28px;
    width: 28px;
    @apply --titanium-chip-image;
  }

  vaadin-button {
    display: none;
    margin: 0 4px 0 -8px;
    padding: 0;
    height: 28px;
    width: 28px;
    min-width: 0;
    border-radius: 50%;
    flex-shrink: 0;
    color: #424242;
    @apply --titanium-chip-button;
  }

  vaadin-button::after,
  vaadin-button::before {
    opacity: 0;
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

<slot slot="chip-icon" name="chip-icon">
  <img src="[[src]]" hidden$="[[!src]]" />
</slot>
<label>[[label]]</label>
<vaadin-button disabled$="[[disabled]]" on-click="_onCloseButtonClicked">
  <svg prefix viewBox="0 0 24 24">
    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
  </svg>
</vaadin-button>`;
  }
}
