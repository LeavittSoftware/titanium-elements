import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { TitaniumNativeDialogBaseElement } from '../../titanium/dialog/dialog';
import '../../titanium/dialog/dialog';

import './leavitt-file-detail';

import { FileExplorerFileDto } from '@leavittsoftware/lg-core-typescript/api3.leavitt.com';
import fileExplorerEvents from './file-explorer-events';

@customElement('leavitt-file-modal')
export class LeavittFileModalElement extends LitElement {
  @property({ type: Boolean }) enableEditing: boolean = false;

  @state() protected state: 'view' | 'edit' = 'view';
  @state() protected file: FileExplorerFileDto | null = null;

  @query('titanium-native-dialog-base') protected dialog!: TitaniumNativeDialogBaseElement;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('enableEditing') && this.enableEditing) {
      //load admin elements
      await import('./leavitt-file-edit');
    }
  }

  firstUpdated() {
    fileExplorerEvents.subscribe<FileExplorerFileDto>('FileExplorerFileDto', 'Update', (o) => {
      if (o.Id === this.file?.Id) {
        this.file = { ...this.file, ...o };
      }
    });
  }

  async open(file: FileExplorerFileDto) {
    this.file = file;
    this.state = 'view';
    await this.updateComplete;
    return await this.dialog.open();
  }

  static styles = css`
    :host {
      display: block;
      --titanium-dialog-max-width: 850px;
    }
  `;

  render() {
    return html`
      <titanium-native-dialog-base full-width>
        ${this.state == 'view'
          ? html`
              <leavitt-file-detail
                .file=${this.file}
                .enableEditing=${this.enableEditing}
                @edit-click=${() => (this.state = 'edit')}
                @close-click=${() => this.dialog.close('close button')}
              ></leavitt-file-detail>
            `
          : html`
              <leavitt-file-edit .file=${this.file} @cancel-click=${() => (this.state = 'view')} @save-click=${() => (this.state = 'view')}></leavitt-file-edit>
            `}
      </titanium-native-dialog-base>
    `;
  }
}
