import { css, customElement, html, LitElement, property } from 'lit-element';
import { TitaniumPageMenuItemElement } from './titanium-page-menu-item';

@customElement('titanium-page-menu')
export class TitaniumPageMenuElement extends LitElement {
  @property({ type: Number }) width: number = 280;
  @property({ type: String }) selected: string = '';
  @property({ type: Boolean }) disabled: boolean;

  private _selectedElement: TitaniumPageMenuItemElement | null = null;
  private _items: Map<string, TitaniumPageMenuItemElement> = new Map();

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('selected', (e: CustomEvent) => {
      if (this.selected === e.detail.value) return;
      if (this._selectedElement) this._selectedElement.deselect();
      this.selected = e.detail.value;
    });
  }

  register(element: TitaniumPageMenuItemElement) {
    this._items.set(element.value, element);
  }

  updated(changedProps: Map<string, any>) {
    if (changedProps.has('disabled')) {
      this._items.forEach((i) => (i.parentDisabled = this.disabled));
    }

    if (changedProps.has('selected')) {
      if (this._selectedElement) this._selectedElement.deselect();
      this._selectedElement = this._items.get(this.selected) || null;
      if (this._selectedElement) this._selectedElement.select();
    }
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      font-size: 0.875rem;
      user-select: none;
    }

    ::slotted(hr) {
      border: 0;
      height: 1px;
      background: #dadce0;
      width: 100%;
    }
  `;

  render() {
    return html`
      <style>
        :host {
          width: ${this.width}px;
        }
      </style>
      <slot></slot>
    `;
  }
}
