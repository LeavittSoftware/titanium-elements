import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import '@material/web/dialog/dialog';
import '@material/web/button/text-button';
import '@material/web/textfield/filled-text-field';

import { FileExplorerFolder, FileExplorerFolderDto } from '@leavittsoftware/lg-core-typescript';
import { MdDialog } from '@material/web/dialog/dialog';
import ApiService from '../api-service/api-service';
import { TitaniumSnackbarSingleton } from '../../titanium/snackbar/snackbar';
import { PendingStateEvent } from '../../titanium/types/pending-state-event';
import { DOMEvent } from '../../titanium/types/dom-event';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { LoadWhile } from '../../titanium/helpers/helpers';

@customElement('leavitt-add-folder-modal')
export class AddFolderModal extends LoadWhile(LitElement) {
  /**
   *  Required
   */
  @property({ attribute: false }) accessor apiService: ApiService | null;
  @property({ type: Number }) accessor fileExplorerId: number;
  @property({ type: Number }) accessor parentFolderId: number;

  @state() private accessor folderName: string = '';
  @query('md-dialog') private accessor dialog!: MdDialog;

  resolve: (value: FileExplorerFolderDto | null) => void;

  async open() {
    this.folderName = '';
    this.dialog.show();
    return new Promise<FileExplorerFolderDto | null>((res) => {
      this.resolve = res;
    });
  }

  async #createFolder() {
    if (!this.apiService) {
      return;
    }

    const dto: Partial<FileExplorerFolder> = {
      FileExplorerId: this.fileExplorerId,
      Name: this.folderName,
      ParentFolderId: this.parentFolderId || undefined,
    };

    try {
      const post = this.apiService.postAsync<FileExplorerFolder>('FileExplorerFolders?expand=CreatorPerson(select=FullName,ProfilePictureCdnFileName)', dto);
      this.dispatchEvent(new PendingStateEvent(post));
      this.loadWhile(post);
      const result = (await post)?.entity;

      return {
        ...result,
        CreatorProfilePictureCndFileName: result?.CreatorPerson?.ProfilePictureCdnFileName,
        CreatorFullName: result?.CreatorPerson?.FullName,
      } as FileExplorerFolderDto;
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
    return null;
  }

  static styles = css`
    :host {
      display: block;
    }

    md-dialog {
      min-width: 550px;
    }

    md-filled-text-field {
      width: 100%;
    }

    @media (max-width: 620px) {
      md-dialog {
        min-width: initial;
      }
    }
  `;

  render() {
    return html`
      <md-dialog
        @closing=${(e: DOMEvent<MdDialog>) => {
          if (e.target.returnValue !== 'apply') {
            this.resolve(null);
          }
        }}
      >
        <div slot="headline">Add folder</div>
        <main slot="content">
          <md-filled-text-field
            label="Folder name"
            .value=${this.folderName ?? ''}
            @input=${(event: DOMEvent<MdOutlinedTextField>) => (this.folderName = event.target.value)}
          >
          </md-filled-text-field>
        </main>
        <div slot="actions">
          <md-text-button @click=${() => this.dialog.close()}> Cancel </md-text-button>
          <md-text-button
            ?disabled=${!this.folderName || this.isLoading}
            @click=${async () => {
              const folder = await this.#createFolder();
              if (folder) {
                this.dialog.close('apply');
                this.resolve(folder);
              }
            }}
            >Save</md-text-button
          >
        </div>
      </md-dialog>
    `;
  }
}
