import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { TitaniumDialogBaseElement } from '@leavittsoftware/titanium-dialog/lib/titanium-dialog-base';
import '@leavittsoftware/titanium-dialog/lib/titanium-dialog-base';

import './leavitt-folder-detail';

import { FileExplorerFolderDto } from '@leavittsoftware/lg-core-typescript/api3.leavitt.com';
import fileExplorerEvents from './file-explorer-events';

@customElement('leavitt-folder-modal')
export class LeavittFolderModalElement extends LitElement {
  @property({ type: Boolean }) enableEditing: boolean = false;

  @state() private state: 'view' | 'edit' = 'view';
  @state() private folder: FileExplorerFolderDto | null = null;

  @query('titanium-dialog-base') private dialog!: TitaniumDialogBaseElement;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('enableEditing') && this.enableEditing) {
      //load admin elements
      await import('./leavitt-folder-edit');
    }
  }

  firstUpdated() {
    fileExplorerEvents.subscribe<FileExplorerFolderDto>('FileExplorerFolder', 'Update', o => {
      if (o.Id === this.folder?.Id) {
        this.folder = { ...this.folder, ...o };
      }
    });
  }

  async open(folder: FileExplorerFolderDto) {
    this.folder = folder;
    await this.updateComplete;
    return await this.dialog.open();
  }

  static styles = css`
    :host {
      display: block;
      --titanium-dialog-max-width: 550px;
    }
  `;

  render() {
    return html`
      <titanium-dialog-base fullwidth>
        ${this.state == 'view'
          ? html`
              <leavitt-folder-detail
                .folder=${this.folder}
                .enableEditing=${this.enableEditing}
                @edit-click=${() => (this.state = 'edit')}
                @close-click=${() => this.dialog.close('close button')}
              ></leavitt-folder-detail>
            `
          : html`
              <leavitt-folder-edit
                .folder=${this.folder}
                @save-click=${() => (this.state = 'view')}
                @cancel-click=${() => (this.state = 'view')}
              ></leavitt-folder-edit>
            `}
      </titanium-dialog-base>
    `;
  }
}
