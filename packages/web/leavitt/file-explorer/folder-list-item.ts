import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/web/icon/icon';
import '@material/web/focus/md-focus-ring';
import '@material/web/ripple/ripple';

import dayjs from 'dayjs/esm';
import { FileExplorerFolderDto } from '@leavittsoftware/lg-core-typescript';

@customElement('folder-list-item')
export class FolderListItem extends LitElement {
  @property({ type: Object }) accessor folder: FileExplorerFolderDto;
  @property({ type: Boolean, reflect: true }) accessor selected: boolean = false;
  @property({ type: Number }) accessor selectedCount: number = 0;
  @property({ type: String, reflect: true, attribute: 'display' }) accessor display: 'grid' | 'list' = 'grid';

  #kFormatter(num: number) {
    return Math.abs(num) > 999 ? Math.floor((Math.sign(num) * Math.round(Math.abs(num) / 100)) / 10) + 'k+' : Math.sign(num) * Math.abs(num);
  }

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
      grid: 'name' auto;
      gap: 0;
      align-content: inherit;
      align-items: inherit;
    }

    /* Focus ring */
    md-focus-ring {
      --md-focus-ring-shape: 0;
    }

    :host([display='grid']) md-focus-ring {
      --md-focus-ring-shape: 16px;
    }

    /* File name */
    folder-name {
      grid-area: name;
      display: grid;
      grid: 'icon name' / auto 1fr;
      gap: 8px;

      align-items: center;
      font-weight: 500;

      min-width: 0;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    :host([display='grid']) folder-name {
      padding: 12px;
    }

    folder-name md-icon {
      grid-area: icon;
    }

    folder-name span[name] {
      grid-area: name;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1 1 auto;
      min-width: 20px;
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
      aria-label=${this.folder.Name}
      title="${this.folder.Name ?? ''}
${this.folder.FilesCount} file${this.folder.FilesCount === 1 ? '' : 's'}, ${this.folder.FoldersCount} folder${this.folder.FoldersCount === 1 ? '' : 's'}"
      @dblclick=${(e: MouseEvent) => {
        e.preventDefault();
        this.dispatchEvent(new Event('navigate'));
      }}
      @click=${(e: MouseEvent) => {
        e.stopPropagation();
        this.dispatchEvent(new Event('toggle-selected'));
      }}
      @keydown=${(e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (this.selectedCount === 0) {
            this.dispatchEvent(new Event('navigate'));
          } else {
            this.dispatchEvent(new Event('toggle-selected'));
          }
        }
        if (e.key == ' ') {
          e.preventDefault();
          this.dispatchEvent(new Event('toggle-selected'));
        }
      }}
    >
      <md-ripple></md-ripple>
      <md-focus-ring ?inward=${this.display === 'list'}></md-focus-ring>
      <folder-name>
        <span name>${this.folder.Name}</span>
        <md-icon>${this.display === 'list' && this.selected ? 'check' : 'folder_open'}</md-icon>
      </folder-name>

      ${this.display === 'list'
        ? html`
            <span date>${dayjs(this.folder.CreatedDate).format('MMM D, YYYY')}</span>
            <span size>${this.#kFormatter(this.folder.FilesCount ?? 0) || '0'} file${this.folder.FilesCount === 1 ? '' : 's'}</span>
          `
        : nothing}
    </button>`;
  }
}
