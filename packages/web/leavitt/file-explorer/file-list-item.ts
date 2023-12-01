import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/web/icon/icon';
import '@material/web/iconbutton/filled-tonal-icon-button';
import '@material/web/focus/md-focus-ring';
import '@material/web/ripple/ripple';
import './file-explorer-image';

import dayjs from 'dayjs/esm';
import { getIcon } from './helpers/file-types';
import { FileExplorerFileDto } from '@leavittsoftware/lg-core-typescript';
import { formatBytes } from './helpers/format-bytes';

@customElement('file-list-item')
export class FileListItem extends LitElement {
  @property({ type: Object }) accessor file: FileExplorerFileDto;
  @property({ type: Boolean, reflect: true }) accessor selected: boolean = false;
  @property({ type: Number, reflect: true, attribute: 'selected-count' }) accessor selectedCount: number = 0;
  @property({ type: String, reflect: true, attribute: 'display' }) accessor display: 'grid' | 'list' = 'grid';

  static styles = css`
    :host {
      display: grid;
    }

    button {
      display: grid;
      background-color: inherit;
      grid: 'name date size' / 1fr 100px 100px;
      gap: 12px;
      padding: 12px 24px;
      font-size: 14px;
      border: none;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
      align-content: center;
      align-items: center;
      position: relative;
      outline: none;
      color: inherit;
    }

    :host([display='grid'][selected]) button {
      border-color: transparent;
    }

    :host([selected]) button {
      background-color: var(--md-sys-color-secondary-container);
    }

    :host([display='grid']) button {
      cursor: pointer;
      border: 1px solid var(--md-sys-color-outline-variant);
      border-radius: 16px;
      padding: 0;
      max-height: 166px;
      grid:
        'preview' 118px
        'name' auto;
      gap: 0;
      align-content: inherit;
      align-items: inherit;
    }

    :host([display='grid'][selected-count='0']) button {
      cursor: zoom-in;
    }

    /* Focus ring */
    md-focus-ring {
      --md-focus-ring-shape: 0;
    }

    :host([display='grid']) md-focus-ring {
      --md-focus-ring-shape: 16px;
    }

    /* icon button */
    md-filled-tonal-icon-button {
      display: none;
    }

    :host([display='grid']) md-filled-tonal-icon-button {
      display: block;
      position: absolute;

      top: 5px;
      left: 5px;
      --md-filled-tonal-icon-button-container-width: 22px;
      --md-filled-tonal-icon-button-container-height: 22px;
      --md-filled-tonal-icon-button-icon-size: 22px;
      --md-filled-tonal-icon-button-container-color: var(--md-sys-color-surface);
      --md-filled-tonal-icon-button-icon-color: var(--md-sys-color-surface);
      border: 2px solid var(--md-sys-color-outline-variant);
      border-radius: 24px;
    }

    :host([display='grid'][selected]) md-filled-tonal-icon-button {
      --md-filled-tonal-icon-button-container-color: inherit;
      --md-filled-tonal-icon-button-icon-color: inherit;
      border-color: var(--md-sys-color-on-secondary-container);
    }

    /* image */
    image-wrapper {
      display: block;
      grid-area: preview;
      border-radius: 16px 16px 0 0;
      background-color: var(--md-sys-color-secondary-container);
    }

    leavitt-file-explorer-image {
      height: 100%;
      width: 100%;
      transition: all 0.2s ease-in-out;
      transform-origin: center bottom;
    }

    :host([selected]) leavitt-file-explorer-image {
      transform: scale(0.9) rotate(0.01deg);
    }

    /* File name */
    file-name {
      grid-area: name;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 500;

      min-width: 0;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    :host([display='grid']) file-name {
      padding: 12px;
      border-top: 1px solid var(--md-sys-color-outline-variant);
    }

    :host([display='grid'][selected]) file-name {
      border-color: transparent;
    }

    file-name md-icon {
      padding-right: 8px;
      flex-shrink: 0;
    }

    file-name span[name] {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 20px;
    }

    file-name span[name]:after {
      content: '.';
    }

    file-name span[ext] {
      flex-shrink: 0;
    }

    span[date] {
      grid-area: date;
      text-align: center;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    span[size] {
      grid-area: size;
      text-align: right;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }
  `;

  render() {
    return html` <button
      tabindex="0"
      aria-label="${this.file.Name}.${this.file.Extension}"
      title="${this.file.Name}.${this.file.Extension}"
      @dblclick=${(e: MouseEvent) => {
        e.preventDefault();
        if (this.display === 'list' && this.selectedCount === 0) {
          this.dispatchEvent(new Event('show-details'));
        }
      }}
      @click=${(e: MouseEvent) => {
        e.stopPropagation();
        if (this.display === 'grid' && this.selectedCount === 0) {
          this.dispatchEvent(new Event('show-details'));
        } else {
          this.dispatchEvent(new Event('toggle-selected'));
        }
      }}
      @keydown=${(e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (this.selectedCount === 0) {
            this.dispatchEvent(new Event('show-details'));
          } else {
            this.dispatchEvent(new Event('toggle-selected'));
          }
        }
        if (e.key == ' ') {
          e.preventDefault();
          if (this.selectedCount === 0) {
            this.dispatchEvent(new Event('show-details'));
          } else {
            this.dispatchEvent(new Event('toggle-selected'));
          }
        }
      }}
    >
      <md-ripple></md-ripple>
      <md-focus-ring ?inward=${this.display === 'list'}></md-focus-ring>
      <file-name>
        <md-icon>${this.display === 'list' && this.selected ? 'check' : getIcon(this.file.Extension ?? '')}</md-icon>
        <span name>${this.file.Name}</span>
        <span ext>${this.file.Extension}</span>
      </file-name>
      ${this.display === 'list'
        ? html`
            <span date>${dayjs(this.file.CreatedDate).format('MMM D, YYYY')}</span>
            <span size>${formatBytes(this.file.Size)}</span>
          `
        : html`<image-wrapper><leavitt-file-explorer-image .attachment=${this.file}></leavitt-file-explorer-image></image-wrapper>`}

      <md-filled-tonal-icon-button
        tabIndex=${this.selectedCount ? '-1' : '0'}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key == ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            this.dispatchEvent(new Event('toggle-selected'));
          }
        }}
        @click=${(e: MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          this.dispatchEvent(new Event('toggle-selected'));
        }}
      >
        <md-icon>check</md-icon>
      </md-filled-tonal-icon-button>
    </button>`;
  }
}
