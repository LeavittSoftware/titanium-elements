import '@material/mwc-textfield';
import '@material/mwc-button';

import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { FileExplorerFolderDto } from '@leavittsoftware/lg-core-typescript/api3.leavitt.com';
import { TextField } from '@material/mwc-textfield';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';
import { h1 } from '@leavittsoftware/titanium-styles';
import fileExplorerEvents from './events/file-explorer-events';
import { PendingStateEvent } from '@leavittsoftware/titanium-loading-indicator';
import ApiService from '@leavittsoftware/api-service/lib/api-service';

@customElement('leavitt-folder-edit')
export class LeavittFolderEditElement extends LitElement {
  /**
   *  Required
   */
  @property({ attribute: false }) apiService: ApiService | null;

  @property({ type: Object }) folder: FileExplorerFolderDto | null = null;
  @state() protected folderName: string;
  @query('mwc-textfield') protected nameTextField!: TextField;

  async firstUpdated() {
    await this.updateComplete;
    this.nameTextField.focus();
  }

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('folder')) {
      this.#populateForm();
    }
  }

  #populateForm() {
    this.folderName = this.folder?.Name ?? '';
  }

  async #saveToRemote() {
    if (!this.nameTextField.reportValidity() || this.folderName === this.folder?.Name) {
      return;
    }

    const dto: Partial<FileExplorerFolderDto> = {
      Name: this.folderName,
    };

    try {
      const patch = this.apiService?.patchAsync(`FileExplorerFolders(${this.folder?.Id})`, dto);
      if (patch) {
        this.dispatchEvent(new PendingStateEvent(patch));
      }
      await patch;
      fileExplorerEvents.dispatch('FileExplorerFolder', 'Update', { ...this.folder, Name: this.folderName });
      this.dispatchEvent(new CustomEvent('save-click'));
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
  }

  static styles = [
    h1,
    css`
      :host {
        display: block;
      }

      header {
        padding: 12px 12px 12px 24px;
        border-bottom: 1px solid var(--app-border-color, #dadce0);
      }

      header h1 {
        margin: 6px 0 0 0;
      }

      main {
        display: grid;
        margin: 40px 24px 12px 24px;
      }

      modal-actions {
        display: grid;
        grid-auto-flow: column;
        justify-content: right;
        gap: 8px;
        padding: 12px;
      }

      @media (max-width: 720px) {
        div {
          min-width: 0;
        }
      }
    `,
  ];

  render() {
    return html`
      <header>
        <h1>Edit folder name</h1>
      </header>
      <main>
        <mwc-textfield
          required
          outlined
          label="Folder name"
          .value=${this.folder?.Name ?? ''}
          @input=${(e) => (this.folderName = e.target.value)}
          @keyup=${(event: KeyboardEvent) => {
            if (event.key === 'Enter') {
              this.#saveToRemote();
            }
          }}
        ></mwc-textfield>
      </main>
      <modal-actions>
        <mwc-button @click=${() => this.dispatchEvent(new CustomEvent('cancel-click'))} label="CANCEL"></mwc-button>
        <mwc-button ?disabled=${this.folderName === this.folder?.Name} @click=${() => this.#saveToRemote()} label="SAVE"></mwc-button>
      </modal-actions>
    `;
  }
}
