import '@material/mwc-textfield';
import '@material/mwc-button';

import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { FileExplorerAttachment, FileExplorerFileDto } from '@leavittsoftware/lg-core-typescript';
import { TextField } from '@material/mwc-textfield';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';
import { h1 } from '@leavittsoftware/titanium-styles';

import { PendingStateEvent } from '@leavittsoftware/titanium-loading-indicator';
import fileExplorerEvents from './events/file-explorer-events';
import ApiService from '@leavittsoftware/api-service/lib/api-service';

@customElement('leavitt-file-edit')
export class LeavittFileEditElement extends LitElement {
  /**
   *  Required
   */
  @property({ attribute: false }) apiService: ApiService | null;

  @property({ type: Object }) file: Partial<FileExplorerFileDto> | null = null;

  @state() protected fileName: string;

  @query('mwc-textfield') protected nameTextField!: TextField;

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('file')) {
      this.#populateForm();
    }
  }

  async firstUpdated() {
    await this.updateComplete;
    this.nameTextField.focus();
  }

  #populateForm() {
    this.fileName = this.file?.Name ?? '';
  }

  async #saveToRemote() {
    if (!this.nameTextField.reportValidity() || this.fileName === this.file?.Name) {
      return;
    }

    const dto: Partial<FileExplorerAttachment> = {
      Name: this.fileName,
    };

    try {
      const patch = this.apiService?.patchAsync(`FileExplorerAttachments(${this.file?.Id})`, dto);
      if (patch) {
        this.dispatchEvent(new PendingStateEvent(patch));
      }
      await patch;
      fileExplorerEvents.dispatch('FileExplorerFileDto', 'Update', { ...this.file, Name: this.fileName });
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
        <h1>Edit filename</h1>
      </header>
      <main>
        <mwc-textfield
          .value=${this.file?.Name ?? ''}
          @input=${(e) => (this.fileName = e.target.value)}
          required
          outlined
          label="File name"
          @keyup=${(event: KeyboardEvent) => {
            if (event.key === 'Enter') {
              this.#saveToRemote();
            }
          }}
        ></mwc-textfield>
      </main>
      <modal-actions>
        <mwc-button @click=${() => this.dispatchEvent(new CustomEvent('cancel-click'))} label="CANCEL"></mwc-button>
        <mwc-button ?disabled=${this.fileName === this.file?.Name} @click=${() => this.#saveToRemote()} label="SAVE"></mwc-button>
      </modal-actions>
    `;
  }
}
