import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { TitaniumDialogBaseElement } from '@leavittsoftware/titanium-dialog/lib/titanium-dialog-base';
import '@leavittsoftware/titanium-dialog/lib/titanium-dialog-base';

import './leavitt-file-detail';

import { FileExplorerFileDto } from '@leavittsoftware/lg-core-typescript/lg.core.repository';
import fileExplorerEvents from './file-explorer-events';

@customElement('leavitt-file-modal')
export class LeavittFileModalElement extends LitElement {
  @property({ type: Boolean }) enableEditing: boolean = false;

  @state() private state: 'view' | 'edit' = 'view';
  @state() private file: FileExplorerFileDto | null = null;

  @query('titanium-dialog-base') private dialog!: TitaniumDialogBaseElement;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('enableEditing') && this.enableEditing) {
      //load admin elements
      await import('./leavitt-file-edit');
    }
  }

  firstUpdated() {
    fileExplorerEvents.subscribe<FileExplorerFileDto>('FileExplorerFileDto', 'Update', o => {
      if (o.Id === this.file?.Id) {
        this.file = { ...this.file, ...o };
      }
    });
  }

  async open(file: FileExplorerFileDto) {
    this.file = file;
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
      </titanium-dialog-base>
    `;
  }
}
