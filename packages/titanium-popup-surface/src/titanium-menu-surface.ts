import { customElement, html, query, css } from 'lit-element';
import { TitaniumPopupSurfaceFoundation } from './titanium-popup-surface-foundation';

import './titanium-popup-surface-foundation';

@customElement('titanium-menu-surface')
export class TitaniumMenuSurfaceElement extends TitaniumPopupSurfaceFoundation {
  @query('slot') mainSlot: HTMLSlotElement;
  @query('main') list: HTMLElement;

  open() {
    super.open();
    document.body.addEventListener('keydown', this.keydownHandler);
    this.addListenersToItems();
  }

  close(skipRestoreFocus = false) {
    super.close(skipRestoreFocus);
    this.removeListenersFromItems();
    document.body.removeEventListener('keydown', this.keydownHandler);
  }

  private get items(): Element[] {
    return this.mainSlot?.assignedElements({ flatten: true }).filter(o => o.getAttribute('role') === 'menuitem') ?? [];
  }

  private setSelectedAtIndex(index: number) {
    const element = this.items[index] as HTMLElement;
    if (element) {
      element.setAttribute('aria-checked', 'aria-checked');
      element.setAttribute('tabindex', '1');
      (this.items[index] as HTMLElement)?.focus();
    }
  }

  private removeSelectedAtIndex(index: number) {
    const element = this.items[index] as HTMLElement;
    if (element) {
      element.removeAttribute('aria-checked');
      element.removeAttribute('tabindex');
    }
  }

  private getSelectedItemIndex() {
    return this.items.indexOf(this.items.filter(o => o.getAttribute('tabindex') === '1')[0]);
  }

  selectNextItem() {
    const selectedItemIndex = this.getSelectedItemIndex();
    const nextIndex = selectedItemIndex === -1 ? 0 : selectedItemIndex === this.items.length - 1 ? 0 : selectedItemIndex + 1;
    this.removeSelectedAtIndex(selectedItemIndex);
    this.setSelectedAtIndex(nextIndex);
  }

  selectPreviousItem() {
    const selectedItemIndex = this.getSelectedItemIndex();
    const previousIndex = selectedItemIndex < 1 ? this.items.length - 1 : selectedItemIndex - 1;
    this.removeSelectedAtIndex(selectedItemIndex);
    this.setSelectedAtIndex(previousIndex);
  }

  private keydownHandler = this.handleKeydownEvent.bind(this);

  private addListenersToItems() {
    this.items.forEach(i => {
      const item = i as Element & {
        ___titaniumClickHandler: EventListenerOrEventListenerObject;
        ___titaniumKeydownHandler: EventListenerOrEventListenerObject;
      };
      item.___titaniumClickHandler = () => {
        item.dispatchEvent(new CustomEvent('item-selected'));
        this.close();
      };
      item.___titaniumKeydownHandler = (evt: KeyboardEvent) => {
        const { key, keyCode } = evt;
        if (key === 'Enter' || keyCode === 13 || key === 'Space' || keyCode === 32) {
          item.dispatchEvent(new CustomEvent('item-selected'));
          this.close();
        }
      };
      item.addEventListener('keydown', item.___titaniumKeydownHandler);
      item.addEventListener('click', item.___titaniumClickHandler);
    });
  }

  private removeListenersFromItems() {
    this.items.forEach(i => {
      const item = i as Element & {
        ___titaniumClickHandler: EventListenerOrEventListenerObject;
        ___titaniumKeydownHandler: EventListenerOrEventListenerObject;
      };
      item.removeEventListener('click', item.___titaniumClickHandler);
      item.removeEventListener('keydown', item.___titaniumKeydownHandler);
    });
  }

  private handleKeydownEvent(evt: KeyboardEvent) {
    const { key, keyCode } = evt;
    const isTab = key === 'Tab' || keyCode === 9;
    if (isTab) {
      this.close(true);
    }

    if (key === 'ArrowDown' || keyCode === 40) {
      evt.preventDefault();
      this.selectNextItem();
    }

    if (key === 'ArrowUp' || keyCode === 38) {
      evt.preventDefault();
      this.selectPreviousItem();
    }
  }

  static styles = css`
    ${TitaniumPopupSurfaceFoundation.styles} :host {
      border-radius: 4px;
    }
  `;

  render() {
    return html`
      <main aria-hidden="true" role="menu">
        <slot></slot>
      </main>
    `;
  }
}
