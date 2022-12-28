import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import '@material/mwc-button';
import '@material/mwc-textfield';
import '@leavittsoftware/titanium-dialog';

import { TitaniumDialogElement } from '@leavittsoftware/titanium-dialog';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';
import { FileExplorerFolderDto } from '@leavittsoftware/lg-core-typescript/api3.leavitt.com';
import { TextField } from '@material/mwc-textfield';
import { PendingStateEvent } from '@leavittsoftware/titanium-loading-indicator/lib/titanium-full-page-loading-indicator';
import { FileExplorerFolder } from '@leavittsoftware/lg-core-typescript';
import ApiService from '@leavittsoftware/api-service/lib/api-service';

@customElement('leavitt-add-folder-modal')
export class LeavittAddFolderModalElement extends LitElement {
  /**
   *  Required
   */
  @property({ attribute: false }) apiService: ApiService | null;
  @property({ type: Number }) fileExplorerId: number;
  @property({ type: Number }) parentFolderId: number;

  @state() protected name: string = '';
  @query('titanium-dialog') protected titaniumDialog!: TitaniumDialogElement;
  @query('mwc-textfield') protected nameTextField!: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  async #reset() {
    this.name = '';

    await this.updateComplete;
    this.nameTextField.mdcFoundation?.setValid(true);
    this.nameTextField.isUiValid = true;
  }

  async open(): Promise<FileExplorerFolderDto | null> {
    setTimeout(() => {
      this.nameTextField.focus();
    }, 0);

    const reason = await this.titaniumDialog.open();

    if (reason !== 'confirm') {
      this.#reset();
      return null;
    }

    const dto: Partial<FileExplorerFolder> = {
      FileExplorerId: this.fileExplorerId,
      Name: this.name,
      ParentFolderId: this.parentFolderId || undefined,
    };

    try {
      const post = this.apiService?.postAsync<FileExplorerFolder>('FileExplorerFolders?$expand=CreatorPerson($select=FirstName,LastName)', dto);
      if (post) {
        this.dispatchEvent(new PendingStateEvent(post));
      }
      const result = (await post)?.entity;
      this.#reset();

      return { ...result, CreatorLastName: result?.CreatorPerson?.LastName, CreatorFirstName: result?.CreatorPerson?.FirstName } as FileExplorerFolderDto;
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }

    this.#reset();
    return null;
  }

  #save() {
    if (!this.nameTextField.reportValidity()) {
      return;
    }
    this.titaniumDialog.close('confirm');
  }

  static styles = css`
    :host {
      --titanium-dialog-max-width: 550px;
    }

    main {
      display: grid;
    }

    @media (max-width: 520px) {
      main {
        min-width: 0;
      }
    }
  `;

  render() {
    return html`
      <titanium-dialog header="Add folder" fullwidth>
        <div slot="content">
          <main>
            <mwc-textfield
              @keyup=${(event: KeyboardEvent) => {
                if (event.key === 'Enter') {
                  this.#save();
                }
              }}
              @input=${event => {
                this.name = event.target.value;
              }}
              .value=${this.name || ''}
              required
              outlined
              label="Name"
            ></mwc-textfield>
          </main>
        </div>
        <div slot="actions">
          <mwc-button
            @click=${() => {
              this.titaniumDialog.close('cancel');
            }}
            label="CANCEL"
          ></mwc-button>
          <mwc-button @click=${() => this.#save()} label="SAVE"></mwc-button>
        </div>
      </titanium-dialog>
    `;
  }
}
