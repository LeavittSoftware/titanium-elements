import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { TitaniumNativeDialogBaseElement } from '@leavittsoftware/titanium-elements/packages/titanium/dialog/dialog';
import '@leavittsoftware/titanium-elements/packages/titanium/dialog/dialog';

import './leavitt-folder-detail';

import { FileExplorerFolderDto } from '@leavittsoftware/lg-core-typescript/api3.leavitt.com';
import fileExplorerEvents from './file-explorer-events';
import ApiService from '@leavittsoftware/api-service/lib/api-service';

@customElement('leavitt-folder-modal')
export class LeavittFolderModalElement extends LitElement {
  @property({ type: Boolean }) enableEditing: boolean = false;
  @property({ attribute: false }) apiService: ApiService | null;

  @state() protected state: 'view' | 'edit' = 'view';
  @state() protected folder: FileExplorerFolderDto | null = null;

  @query('titanium-native-dialog-base') protected dialog!: TitaniumNativeDialogBaseElement;

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
      <titanium-native-dialog-base full-width>
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
                .apiService=${this.apiService}
                @save-click=${() => (this.state = 'view')}
                @cancel-click=${() => (this.state = 'view')}
              ></leavitt-folder-edit>
            `}
      </titanium-native-dialog-base>
    `;
  }
}
