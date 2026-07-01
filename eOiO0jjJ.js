import{A as e,E as t,i,P as s,S as o,b as a,c as r,_ as n,d as l,r as d,n as c,e as h,t as p,p as m,h as u,f,a as g,g as x,j as y,m as v,o as b,k as w,l as $,q as _}from"./D_imZRq6.js";import{A as k,S as F}from"./Cp0ERCaT.js";import"./Cr5T8rNp.js";import"./BrugqwTk.js";import"./BejvuRGr.js";import"./BhRRLomP.js";import"./DP0o14fc.js";import{d as E}from"./CuDVc1pF.js";import"./DTCF_Trb.js";import{a as C}from"./Dd-al2T7.js";import"./B4dJ93Bs.js";function N(t,i){return t.map((s,o)=>[s,o<t.length-1?i:e])}const I=new t;Object.freeze(I);let S=class extends i{#e=!1;get isLoading(){return this.#e}set isLoading(e){this.#e=e}#t=null;get apiService(){return this.#t}set apiService(e){this.#t=e}#i=0;get fileExplorerId(){return this.#i}set fileExplorerId(e){this.#i=e}#s=0;get parentFolderId(){return this.#s}set parentFolderId(e){this.#s=e}#o="";get folderName(){return this.#o}set folderName(e){this.#o=e}#a;get dialog(){return this.#a}set dialog(e){this.#a=e}async open(){return this.folderName="",this.dialog.show(),new Promise(e=>{this.resolve=e})}async#r(){if(!this.apiService)return;const e={FileExplorerId:this.fileExplorerId,Name:this.folderName,ParentFolderId:this.parentFolderId||void 0};try{const t=this.apiService.postAsync("FileExplorerFolders?expand=CreatorPerson(select=FullName,ProfilePictureCdnFileName)",e);this.dispatchEvent(new s(t)),this.trackLoadingPromise(t);const i=(await t)?.entity;return{...i,CreatorProfilePictureCndFileName:i?.CreatorPerson?.ProfilePictureCdnFileName,CreatorFullName:i?.CreatorPerson?.FullName}}catch(e){this.dispatchEvent(new o(e))}return null}static{this.styles=a`
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
  `}render(){return r`
      <md-dialog
        @closing=${e=>{"apply"!==e.target.returnValue&&this.resolve(null)}}
      >
        <div slot="headline">Add folder</div>
        <main slot="content">
          <md-filled-text-field
            label="Folder name"
            .value=${this.folderName??""}
            @input=${e=>this.folderName=e.target.value}
          >
          </md-filled-text-field>
        </main>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close()}> Cancel </md-text-button>
          <md-text-button
            ?disabled=${!this.folderName||this.isLoading}
            @click=${async()=>{const e=await this.#r();e&&(this.dialog.close("apply"),this.resolve(e))}}
            >Save</md-text-button
          >
        </div>
      </md-dialog>
    `}};n([l("trackLoadingPromise"),d()],S.prototype,"isLoading",null),n([c({attribute:!1})],S.prototype,"apiService",null),n([c({type:Number})],S.prototype,"fileExplorerId",null),n([c({type:Number})],S.prototype,"parentFolderId",null),n([d()],S.prototype,"folderName",null),n([h("md-dialog")],S.prototype,"dialog",null),S=n([p("leavitt-add-folder-modal")],S);let z=class extends i{static{this.styles=[m,a`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 48px 24px;
      }

      md-icon {
        height: 120px;
        width: 130px;
        font-size: 120px;
        color: var(--md-sys-color-surface-variant);
      }
    `]}render(){return r`
      <md-icon>folder_shared</md-icon>
      <p>No files or folders yet...</p>
    `}};z=n([p("leavitt-file-explorer-no-files")],z);let P=class extends i{static{this.styles=[m,a`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 48px 24px;
      }

      md-icon {
        height: 120px;
        width: 130px;
        font-size: 120px;
        color: var(--md-sys-color-surface-variant);
      }
    `]}render(){return r`
      <md-icon>gpp_bad</md-icon>
      <p>Something went wrong...</p>
    `}};P=n([p("leavitt-file-explorer-error")],P);let D=class extends i{static{this.styles=[m,a`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 48px 24px;
      }

      md-icon {
        height: 120px;
        width: 120px;
        font-size: 120px;
        color: var(--md-sys-color-surface-variant);
      }
    `]}render(){return r`
      <md-icon>https</md-icon>
      <p>Permission denied.</p>
    `}};D=n([p("leavitt-file-explorer-no-permission")],D);let j=class extends i{#e=!1;get isLoading(){return this.#e}set isLoading(e){this.#e=e}#t=null;get apiService(){return this.#t}set apiService(e){this.#t=e}#n=!1;get enableEditing(){return this.#n}set enableEditing(e){this.#n=e}#l="view";get state(){return this.#l}set state(e){this.#l=e}#d=null;get file(){return this.#d}set file(e){this.#d=e}#c=!1;get isCopying(){return this.#c}set isCopying(e){this.#c=e}#h=!1;get hasClipboard(){return this.#h}set hasClipboard(e){this.#h=e}#p="";get fileName(){return this.#p}set fileName(e){this.#p=e}#a;get dialog(){return this.#a}set dialog(e){this.#a=e}firstUpdated(){I.subscribe("FileExplorerFileDto","Update",e=>{e.Id===this.file?.Id&&(this.file={...this.file,...e})}),navigator.clipboard&&(this.hasClipboard=!0)}async#m(){if(!this.apiService||this.fileName===this.file?.Name||!this.fileName)return;const e={Name:this.fileName};try{const t=this.apiService.patchAsync(`FileExplorerAttachments(${this.file?.Id})`,e);this.trackLoadingPromise(t),await t,I.dispatch("FileExplorerFileDto","Update",{...this.file,Name:this.fileName}),this.state="view"}catch(e){this.dispatchEvent(new o(e))}}async open(e){return this.file=e,this.state="view",await this.dialog.show()}static{this.styles=[u,f,m,g,x,y,a`
      :host {
        display: block;
      }

      md-dialog {
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 48px);
      }

      header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        gap: 8px;
      }

      header h1 {
        margin: 4px 0 0 0;
        word-break: break-all;
        text-align: center;
      }

      header mwc-icon-button {
        align-self: center;
      }

      header md-filled-text-field {
        width: 100%;
        --md-filled-text-field-container-shape-start-start: 16px;
        --md-filled-text-field-container-shape-start-end: 16px;
      }

      main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        overflow: auto;
      }

      a[download-link] {
        cursor: pointer;
      }

      img[preview] {
        height: auto;
        width: auto;
        place-self: center;
      }

      main[ext='pdf'] img[preview] {
        border: 1px solid var(--md-sys-color-outline-variant);
      }

      no-preview {
        display: flex;
        flex-direction: column;
        height: 320px;
        width: 430px;
        place-self: center;
        place-content: center;
        text-align: center;
        border: 1px dashed var(--md-sys-color-outline-variant);
        border-radius: 8px;
      }

      data-row {
        margin: 0;
        border: none;
        padding: 8px 24px 8px 0px;
      }

      data-row p {
        max-width: 450px;
      }

      md-icon-button[save] {
        --md-icon-button-icon-color: var(--md-sys-color-primary);
        --md-icon-button-focus-icon-color: var(--md-sys-color-primary);
      }

      p[alert] {
        transition: 0.3s ease;
        opacity: 1;
        color: var(--md-sys-color-primary);
        font-size: 12px;
        font-weight: 500;
      }

      @media (max-width: 480px) {
        header {
          gap: 12px;
          align-items: center;
        }

        img[preview] {
          place-self: initial;
        }

        header {
          flex-direction: column;
        }

        no-preview {
          height: 120px;
          width: 230px;
        }
      }

      p[alert][invisible] {
        opacity: 0;
      }

      [hidden] {
        display: none;
      }
    `]}render(){return r`
      <md-dialog>
        <header slot="headline">
          ${"view"===this.state?r`<h1 title="${this.file?.Name??""}.${this.file?.Extension??""}">
                ${v(`${this.file?.Name??""}.${this.file?.Extension??""}`)}
              </h1>`:r`<md-filled-text-field
                label="File name"
                .value=${this.fileName??""}
                @input=${e=>this.fileName=e.target.value}
              >
                <md-icon-button slot="trailing-icon" @click=${()=>this.state="view"} ?disabled=${this.isLoading}>
                  <md-icon>cancel</md-icon>
                </md-icon-button>
                <md-icon-button
                  save
                  slot="trailing-icon"
                  ?disabled=${this.fileName===this.file?.Name||!this.fileName||this.isLoading}
                  @click=${()=>this.#m()}
                >
                  <md-icon>save</md-icon>
                </md-icon-button>
              </md-filled-text-field>`}

          <md-icon-button
            ?hidden=${!this.enableEditing||"edit"===this.state}
            @click=${()=>{this.state="edit",this.fileName=this.file?.Name??""}}
          >
            <md-icon>create</md-icon>
          </md-icon-button>
        </header>
        <main ext=${this.file?.Extension??""} slot="content">
          ${this.file?.PreviewSizes?.includes("512")?r` <img preview loading="lazy" src=${b(w(this.file,512))} />`:r`<no-preview><p>No preview currently available</p> </no-preview> `}

          <data-row force-stacked>
            <h5>Uploaded</h5>
            <p>${E(this.file?.CreatedDate).format("MMM D, YYYY h:mm:ss a")}</p>
          </data-row>
          ${this.file?.CreatorId?r`<data-row force-stacked>
                <h5>Uploaded by</h5>
                <p image><profile-picture size="24" .fileName=${this.file.CreatorProfilePictureCndFileName}></profile-picture> ${this.file?.CreatorFullName}</p>
              </data-row>`:e}
          <data-row force-stacked>
            <h5>Copy download link</h5>
            <p ellipsis>
              ${this.hasClipboard?r`
                    <a
                      download-link
                      title="Copy direct download link to clipboard"
                      @click=${()=>{const e=$(this.file);e&&(navigator.clipboard.writeText(e),this.isCopying=!0,setTimeout(()=>{this.isCopying=!1},2e3))}}
                    >
                      ${$(this.file)}
                    </a>
                  `:r` ${$(this.file)} `}
            </p>
            <p alert ?invisible=${!this.isCopying}>Copied to clipboard</p>
          </data-row>
        </main>
        <div slot="actions">
          <md-text-button
            @click=${()=>{const e=$(this.file);window.open(e)}}
            >Download</md-text-button
          >
          <md-text-button @click=${()=>this.dialog.close()}> Close </md-text-button>
        </div>
      </md-dialog>
    `}};n([l("trackLoadingPromise"),d()],j.prototype,"isLoading",null),n([c({attribute:!1})],j.prototype,"apiService",null),n([c({type:Boolean})],j.prototype,"enableEditing",null),n([d()],j.prototype,"state",null),n([d()],j.prototype,"file",null),n([d()],j.prototype,"isCopying",null),n([d()],j.prototype,"hasClipboard",null),n([d()],j.prototype,"fileName",null),n([h("md-dialog")],j.prototype,"dialog",null),j=n([p("leavitt-file-modal")],j);let M=class extends i{#e=!1;get isLoading(){return this.#e}set isLoading(e){this.#e=e}#t=null;get apiService(){return this.#t}set apiService(e){this.#t=e}#n=!1;get enableEditing(){return this.#n}set enableEditing(e){this.#n=e}#l="view";get state(){return this.#l}set state(e){this.#l=e}#u=null;get folder(){return this.#u}set folder(e){this.#u=e}#o="";get folderName(){return this.#o}set folderName(e){this.#o=e}#a;get dialog(){return this.#a}set dialog(e){this.#a=e}firstUpdated(){I.subscribe("FileExplorerFolder","Update",e=>{e.Id===this.folder?.Id&&(this.folder={...this.folder,...e})})}async#f(){if(!this.apiService||this.folderName===this.folder?.Name||!this.folderName)return;const e={Name:this.folderName};try{const t=this.apiService.patchAsync(`FileExplorerFolders(${this.folder?.Id})`,e);this.trackLoadingPromise(t),await t,I.dispatch("FileExplorerFolder","Update",{...this.folder,Name:this.folderName}),this.state="view"}catch(e){this.dispatchEvent(new o(e))}}open(e){this.folder=e,this.state="view",this.dialog.show()}static{this.styles=[u,f,m,g,x,y,a`
      :host {
        display: block;
      }

      md-dialog {
        min-width: 550px;
      }

      static-header {
        height: 80px;
        display: grid;
        grid: 'icon input button' / auto 1fr auto;
      }

      static-header h1 {
        word-break: break-all;
      }

      md-icon-button[save] {
        --md-icon-button-icon-color: var(--md-sys-color-primary);
        --md-icon-button-focus-icon-color: var(--md-sys-color-primary);
      }

      md-filled-text-field {
        width: 100%;
        --md-filled-text-field-container-shape-start-start: 16px;
        --md-filled-text-field-container-shape-start-end: 16px;
      }

      main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        overflow: auto;
      }

      data-row {
        margin: 0;
        border: none;
        padding: 8px 24px 8px 0px;
      }

      data-row p {
        max-width: 450px;
      }

      @media (max-width: 620px) {
        md-dialog {
          min-width: initial;
        }
      }

      @media (max-width: 480px) {
        header {
          gap: 12px;
          align-items: center;
        }

        header {
          flex-direction: column;
        }
      }

      [hidden] {
        display: none;
      }
    `]}render(){return r`
      <md-dialog>
        ${"view"===this.state?r`<static-header slot="headline"
              ><md-icon>folder</md-icon>
              <h1>${this.folder?.Name}</h1>
              <md-icon-button
                ?hidden=${!this.enableEditing}
                @click=${()=>{this.state="edit",this.folderName=this.folder?.Name??""}}
              >
                <md-icon>create</md-icon>
              </md-icon-button>
            </static-header>`:r`<md-filled-text-field
              slot="headline"
              label="Folder name"
              .value=${this.folderName??""}
              @input=${e=>this.folderName=e.target.value}
            >
              <md-icon-button slot="trailing-icon" @click=${()=>this.state="view"} ?disabled=${this.isLoading}>
                <md-icon>cancel</md-icon>
              </md-icon-button>
              <md-icon-button
                save
                slot="trailing-icon"
                ?disabled=${this.folderName===this.folder?.Name||!this.folderName||this.isLoading}
                @click=${()=>this.#f()}
              >
                <md-icon>save</md-icon>
              </md-icon-button>
            </md-filled-text-field>`}
        <main slot="content">
          <data-row force-stacked>
            <h5>Files</h5>
            <p>${this.folder?.FilesCount}</p>
          </data-row>
          <data-row force-stacked>
            <h5>Folders</h5>
            <p>${this.folder?.FoldersCount}</p>
          </data-row>
          <data-row force-stacked>
            <h5>Created</h5>
            <p>${E(this.folder?.CreatedDate).format("MMM D, YYYY h:mm:ss a")}</p>
          </data-row>
          ${this.folder?.CreatorId?r`<data-row force-stacked>
                <h5>Created by</h5>
                <p image>
                  <profile-picture size="24" .fileName=${this.folder.CreatorProfilePictureCndFileName}></profile-picture> ${this.folder?.CreatorFullName}
                </p>
              </data-row>`:e}
        </main>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close()}> Close </md-text-button>
        </div>
      </md-dialog>
    `}};function L(e){return"pdf"===e||"txt"===e||"rtf"===e||"doc"===e||"docx"===e||"csv"===e?"article":"pptx"===e||"pptm"===e||"ppt"===e?"slideshow":"xlsx"===e||"xlsx"===e?"text_snippet":"jpg"===e||"jpeg"===e||"png"===e||"webp"===e||"ico"===e||"svg"===e?"photo":"mp4"===e?"movie":"article"}n([l("trackLoadingPromise"),d()],M.prototype,"isLoading",null),n([c({attribute:!1})],M.prototype,"apiService",null),n([c({type:Boolean})],M.prototype,"enableEditing",null),n([d()],M.prototype,"state",null),n([d()],M.prototype,"folder",null),n([d()],M.prototype,"folderName",null),n([h("md-dialog")],M.prototype,"dialog",null),M=n([p("leavitt-folder-modal")],M);let A=class extends i{#g;get attachment(){return this.#g}set attachment(e){this.#g=e}static{this.styles=a`
    :host {
      user-select: none;
      display: flex;
      justify-content: center;
      background-color: #fdfcff;
      border-radius: 16px 16px 0 0;
    }

    img {
      border-radius: 16px 16px 0 0;

      object-fit: cover;
      object-position: 0 0;
      width: 100%;
      max-height: 100%;
    }

    md-icon {
      height: 64px;
      width: 64px;
      font-size: 64px;
      user-select: none;
      place-self: center;
      color: var(--md-sys-color-surface-variant);
    }
  `}render(){return r`
      ${this.attachment?.PreviewSizes?.includes("512")?r`<img draggable="false" loading="lazy" src=${b(w(this.attachment,512))} />`:r` <md-icon>${L(this.attachment?.Extension??"")}</md-icon>`}
    `}};function U(e,t=2){if(0===e)return"0 Bytes";const i=t||2,s=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,s)).toFixed(i))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][s]}n([c({type:Object})],A.prototype,"attachment",null),A=n([p("leavitt-file-explorer-image")],A);let Y=class extends i{#d;get file(){return this.#d}set file(e){this.#d=e}#x=!1;get selected(){return this.#x}set selected(e){this.#x=e}#y=0;get selectedCount(){return this.#y}set selectedCount(e){this.#y=e}#v="grid";get display(){return this.#v}set display(e){this.#v=e}static{this.styles=a`
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

    @media (max-width: 450px) {
      span[date] {
        display: none;
      }

      :host([display='list']) button {
        grid: 'name size ' / 1fr 100px;
      }
    }

    @media (max-width: 400px) {
      span[date],
      span[size] {
        display: none;
      }

      :host([display='list']) button {
        grid: 'name ' / 1fr;
      }
    }
  `}render(){return r` <button
      tabindex="0"
      aria-label="${this.file.Name}.${this.file.Extension}"
      title="${this.file.Name}.${this.file.Extension}"
      @dblclick=${e=>{e.preventDefault(),"list"===this.display&&0===this.selectedCount&&this.dispatchEvent(new Event("show-details"))}}
      @click=${e=>{e.stopPropagation(),"grid"===this.display&&0===this.selectedCount?this.dispatchEvent(new Event("show-details")):this.dispatchEvent(new Event("toggle-selected"))}}
      @keydown=${e=>{"Enter"===e.key&&(e.preventDefault(),0===this.selectedCount?this.dispatchEvent(new Event("show-details")):this.dispatchEvent(new Event("toggle-selected")))," "==e.key&&(e.preventDefault(),0===this.selectedCount?this.dispatchEvent(new Event("show-details")):this.dispatchEvent(new Event("toggle-selected")))}}
    >
      <md-ripple></md-ripple>
      <md-focus-ring ?inward=${"list"===this.display}></md-focus-ring>
      <file-name>
        <md-icon>${"list"===this.display&&this.selected?"check":L(this.file.Extension??"")}</md-icon>
        <span name>${this.file.Name}</span>
        <span ext>${this.file.Extension}</span>
      </file-name>
      ${"list"===this.display?r`
            <span date>${E(this.file.CreatedDate).format("MMM D, YYYY")}</span>
            <span size>${U(this.file.Size)}</span>
          `:r`<image-wrapper><leavitt-file-explorer-image .attachment=${this.file}></leavitt-file-explorer-image></image-wrapper>`}

      <md-filled-tonal-icon-button
        tabIndex=${this.selectedCount?"-1":"0"}
        @keydown=${e=>{" "!=e.key&&"Enter"!==e.key||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new Event("toggle-selected")))}}
        @click=${e=>{e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new Event("toggle-selected"))}}
      >
        <md-icon>check</md-icon>
      </md-filled-tonal-icon-button>
    </button>`}};n([c({type:Object})],Y.prototype,"file",null),n([c({type:Boolean,reflect:!0})],Y.prototype,"selected",null),n([c({type:Number,reflect:!0,attribute:"selected-count"})],Y.prototype,"selectedCount",null),n([c({type:String,reflect:!0,attribute:"display"})],Y.prototype,"display",null),Y=n([p("file-list-item")],Y);let B=class extends i{#u;get folder(){return this.#u}set folder(e){this.#u=e}#x=!1;get selected(){return this.#x}set selected(e){this.#x=e}#y=0;get selectedCount(){return this.#y}set selectedCount(e){this.#y=e}#v="grid";get display(){return this.#v}set display(e){this.#v=e}#b(e){return Math.abs(e)>999?Math.floor(Math.sign(e)*Math.round(Math.abs(e)/100)/10)+"k+":Math.sign(e)*Math.abs(e)}static{this.styles=a`
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

    @media (max-width: 450px) {
      span[date] {
        display: none;
      }

      :host([display='list']) button {
        grid: 'name size ' / 1fr 100px;
      }
    }

    @media (max-width: 400px) {
      span[date],
      span[size] {
        display: none;
      }

      :host([display='list']) button {
        grid: 'name ' / 1fr;
      }
    }
  `}render(){return r` <button
      tabindex="0"
      aria-label=${this.folder.Name}
      title="${this.folder.Name??""}
${this.folder.FilesCount} file${1===this.folder.FilesCount?"":"s"}, ${this.folder.FoldersCount} folder${1===this.folder.FoldersCount?"":"s"}"
      @dblclick=${e=>{e.preventDefault(),this.dispatchEvent(new Event("navigate"))}}
      @click=${e=>{e.stopPropagation(),this.dispatchEvent(new Event("toggle-selected"))}}
      @keydown=${e=>{"Enter"===e.key&&(e.preventDefault(),0===this.selectedCount?this.dispatchEvent(new Event("navigate")):this.dispatchEvent(new Event("toggle-selected")))," "==e.key&&(e.preventDefault(),this.dispatchEvent(new Event("toggle-selected")))}}
    >
      <md-ripple></md-ripple>
      <md-focus-ring ?inward=${"list"===this.display}></md-focus-ring>
      <folder-name>
        <span name>${this.folder.Name}</span>
        <md-icon>${"list"===this.display&&this.selected?"check":"folder_open"}</md-icon>
      </folder-name>

      ${"list"===this.display?r`
            <span date>${E(this.folder.CreatedDate).format("MMM D, YYYY")}</span>
            <span size>${this.#b(this.folder.FilesCount??0)||"0"} file${1===this.folder.FilesCount?"":"s"}</span>
          `:e}
    </button>`}};n([c({type:Object})],B.prototype,"folder",null),n([c({type:Boolean,reflect:!0})],B.prototype,"selected",null),n([c({type:Number})],B.prototype,"selectedCount",null),n([c({type:String,reflect:!0,attribute:"display"})],B.prototype,"display",null),B=n([p("folder-list-item")],B);var T={maxInProgress:5,failFast:!1,nextCheck:function(e,t){return Promise.resolve(e.amountStarted<t.length)},ignoreIsFunctionCheck:!1};function K(e,t){return new Promise(function(i,s){var o=Object.assign({},T,t),a={lastCompletedIndex:-1,amountDone:0,amountStarted:0,amountResolved:0,amountRejected:0,amountNextCheckFalsey:0,rejectedIndexes:[],resolvedIndexes:[],nextCheckFalseyIndexes:[],taskResults:[]};if(0===e.length)return i(a);for(var r=!1,n=0,l=function(e,t){if(a.taskResults[t]=e,a.rejectedIndexes.push(t),a.amountRejected++,!0===o.failFast)return a.lastCompletedIndex=t,r=!0,s(a);d(t)},d=function(t){if(!0!==r){if(a.amountDone++,a.lastCompletedIndex=t,"function"==typeof o.progressCallback&&o.progressCallback(a),a.amountDone===e.length)return i(a);n<e.length&&c(n++)}},c=function(t){o.nextCheck(a,e).then(function(i){!0===i?function(t){if(a.amountStarted++,"function"==typeof e[t])try{e[t]().then(function(e){a.taskResults[t]=e,a.resolvedIndexes.push(t),a.amountResolved++,d(t)},function(e){l(e,t)})}catch(e){l(e,t)}else{if(!0!==o.ignoreIsFunctionCheck)return r=!0,s(new Error("tasks["+t+"]: "+e[t]+", is supposed to be of type function"));a.taskResults[t]=e[t],a.resolvedIndexes.push(t),a.amountResolved++,d(t)}}(t):(a.amountNextCheckFalsey++,a.nextCheckFalseyIndexes.push(t),d(t))},s)},h=0;h<Math.min(o.maxInProgress,e.length);h++)c(n++)})}function O(e,t){return new Promise(function(i,s){K(e,t).then(function(e){i(e.taskResults)},function(e){e instanceof Error?s(e):s(e.taskResults[e.rejectedIndexes[0]])})})}function G(e,t){return O(e,Object.assign({},{failFast:!0},t))}let R=class extends i{#e=!1;get isLoading(){return this.#e}set isLoading(e){this.#e=e}#t=null;get apiService(){return this.#t}set apiService(e){this.#t=e}#i=0;get fileExplorerId(){return this.#i}set fileExplorerId(e){this.#i=e}#w=null;get folderId(){return this.#w}set folderId(e){this.#w=e}#$="leavitt-file-explorer-display";get localStorageDisplayKey(){return this.#$}set localStorageDisplayKey(e){this.#$=e}#_=!1;get preventNavigationUp(){return this.#_}set preventNavigationUp(e){this.#_=e}get display(){return window.localStorage.getItem(this.localStorageDisplayKey)||"grid"}set display(e){localStorage.setItem(this.localStorageDisplayKey,e)}#l="files";get state(){return this.#l}set state(e){this.#l=e}#k=!1;get isAdmin(){return this.#k}set isAdmin(e){this.#k=e}#F=null;get fileExplorer(){return this.#F}set fileExplorer(e){this.#F=e}#E=[];get files(){return this.#E}set files(e){this.#E=e}#C=[];get folders(){return this.#C}set folders(e){this.#C=e}#N=[];get path(){return this.#N}set path(e){this.#N=e}#x=[];get selected(){return this.#x}set selected(e){this.#x=e}#I;get uploadMenu(){return this.#I}set uploadMenu(e){this.#I=e}#S;get folderDialog(){return this.#S}set folderDialog(e){this.#S=e}#z;get addFolderDialog(){return this.#z}set addFolderDialog(e){this.#z=e}#P;get fileDialog(){return this.#P}set fileDialog(e){this.#P=e}#D;get fileInput(){return this.#D}set fileInput(e){this.#D=e}#j;get folderInput(){return this.#j}set folderInput(e){this.#j=e}#M;get confirmationDialog(){return this.#M}set confirmationDialog(e){this.#M=e}#L=0;firstUpdated(){this.display=structuredClone(this.display),this.addEventListener(s.eventType,async e=>{e.stopPropagation(),this.trackLoadingPromise(e.detail.promise)}),I.subscribe("FileExplorerFileDto","Update",e=>{const t=this.files.findIndex(t=>t.Id===e.Id);t>-1&&(this.files[t]={...this.files[t],...e},this.requestUpdate("files"))}),I.subscribe("FileExplorerFolder","Update",e=>{const t=this.folders.findIndex(t=>t.Id===e.Id);t>-1&&(this.folders[t]={...this.folders[t],...e},this.requestUpdate("folders"))})}async updated(e){(this.fileExplorerId>0&&e.has("fileExplorerId")||e.has("folderId"))&&(this.folderId&&0===this.#L&&(this.#L=this.folderId),this.isAdmin=!1,await this.reload())}#A(e){return"folder"===e?.type}async reload(){await this.#U(this.fileExplorerId,this.folderId)}async#U(e,t){try{const i=this.apiService?.getAsync(`FileExplorers(${e})/FileExplorerView(folderId=${t})`);i&&this.trackLoadingPromise(i);const s=await i;if(200==s?.status&&s.entity){this.fileExplorer=s.entity,this.folders=s.entity.Folders,this.files=s.entity.Files;const e=s.entity.Path;if(this.preventNavigationUp&&this.#L>0){const t=[];for(let i=e.length-1;i>0;i--){const s=e[i];if(t.unshift(s),s.FolderId===this.#L)break}this.path=t}else this.path=e;this.isAdmin=s.entity.CanEdit||!1,this.state=this.folders.length>0||this.files.length>0?"files":"no-files"}}catch(e){const t=e;if(401==t?.statusCode||404==t?.statusCode)return this.path=[{Name:"Files"}],void(this.state="no-permission");this.path=[{Name:"Files"}],this.state="error"}}async#Y(){const e=await this.addFolderDialog.open();e&&(this.folders=[...this.folders,e],this.fileExplorer&&(this.fileExplorer.FoldersCount=this.fileExplorer?.FoldersCount+1,this.requestUpdate("fileExplorer")),this.state="files",this.dispatchEvent(new CustomEvent("folder-added",{detail:e})))}async#B(){if("confirmed"===await this.confirmationDialog.open("Please confirm delete",`Deleting folders will delete all of their contents. Are you sure you would like to delete the selected item${1===this.selected.length?"":"s"}?`)){const e=[...this.selected],t=new Map;let i=0;const s=Promise.all(e.map(async e=>{try{this.#A(e)?(await(this.apiService?.deleteAsync(`FileExplorerFolders(${e.Id})`)),this.folders.splice(this.folders.findIndex(t=>t.Id===e.Id),1),this.dispatchEvent(new CustomEvent("folder-deleted")),this.fileExplorer&&(this.fileExplorer.FoldersCount=this.fileExplorer?.FoldersCount-1,this.requestUpdate("fileExplorer")),this.requestUpdate("folders")):(await(this.apiService?.deleteAsync(`FileExplorerAttachments(${e.Id})`)),this.files.splice(this.files.findIndex(t=>t.Id===e.Id),1),this.requestUpdate("files"),this.fileExplorer&&(this.fileExplorer.FilesCount=this.fileExplorer?.FilesCount-1,this.fileExplorer.Size=this.fileExplorer?.Size-e.Size,this.requestUpdate("fileExplorer")),this.dispatchEvent(new CustomEvent("file-deleted")))}catch(e){const s=e instanceof Error?e.message:String(e),o=(t.get(s)??0)+1;t.set(s,o),i++}}));this.trackLoadingPromise(s),await s,this.selected=[],this.state=this.folders.length>0||this.files.length>0?"files":"no-files",await this.reload(),i>0&&this.dispatchEvent(new o("",{overrideTemplate:r`Failed to delete ${1===i?"files and folders":`${i} files and folders: <br />`}.
            ${1===t.size?Array.from(t.keys())[0]:Array.from(t.entries()).map(([e,t])=>`(${t}) ${e} <br />`)}`}))}}#T(e){return e.webkitRelativePath.replace("/"+e.name,"")}async#K(e){const t=new Map,i=Array.from(e??[]);for(let e=0;e<i.length;e++){const s=i[e],o=this.#T(s).split("/"),a=[];let r=this.folderId;for(let e=0;e<o.length;e++){const i=o[e],s=[...a,i].join("/");if(t.has(s)){a.push(i),r=t.get(s)??0;continue}const n=await this.#r(i,r||null);if(r=n?.Id??0,a.push(i),t.set(a.join("/"),n?.Id??0),n?.ParentFolderId&&n?.ParentFolderId===this.folderId||!n?.ParentFolderId&&!this.folderId){const e={...n,CreatorLastName:n?.CreatorPerson?.LastName,CreatorFirstName:n?.CreatorPerson?.FirstName};this.folders=[...this.folders,e],this.state="files",this.dispatchEvent(new CustomEvent("folder-added",{detail:e}))}}}return t}async#O(e){const t=this.folderId?`FileExplorerFolders(${this.folderId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`:`FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`,i=[],s=G(Array.from(e??[]).map(e=>async()=>{try{const i=(await(this.apiService?.uploadFile(t,e,()=>console.log)))?.entity;if(i){const e={...i,CreatorProfilePictureCndFileName:i.Creator?.ProfilePictureCdnFileName??"",CreatorFullName:i.Creator?.FullName??"",CreatorFirstName:"",CreatorLastName:""};this.files=[...this.files,e],this.state="files",this.dispatchEvent(new CustomEvent("file-added")),this.fileExplorer&&(this.fileExplorer.FilesCount=this.fileExplorer?.FilesCount+1,this.fileExplorer.Size=this.fileExplorer?.Size+i.Size,this.requestUpdate("fileExplorer"))}}catch(t){const s=t instanceof Error?t.message:String(t);i.push(e.name+": "+s)}}),{maxInProgress:4});this.trackLoadingPromise(s),await s,i.length>0&&(this.dispatchEvent(new o("",{overrideTemplate:r`Failed to upload ${i.length} file${1===i.length?"":"s"}: <br />
            ${N(i,r`<br />`)}`})),console.warn(`Failed to upload ${i.length} file${1===i.length?"":"s"}: \r\n${i.join("\r\n")}`)),this.fileInput.value=""}async#G(e){const t=this.#K(e),i=[],s=G(Array.from(e??[]).map(e=>async()=>{try{const i=this.#T(e),s=(await t).get(i),o=s?`FileExplorerFolders(${s})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`:`FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`,a=(await(this.apiService?.uploadFile(o,e,()=>console.log)))?.entity;a&&(this.dispatchEvent(new CustomEvent("file-added")),this.fileExplorer&&(this.fileExplorer.FilesCount=this.fileExplorer?.FilesCount+1,this.fileExplorer.Size=this.fileExplorer?.Size+a.Size,this.requestUpdate("fileExplorer")))}catch(t){const s=t instanceof Error?t.message:String(t);i.push(e.webkitRelativePath+": "+s)}}),{maxInProgress:4});this.trackLoadingPromise(s),await s,i.length>0&&(this.dispatchEvent(new o("",{overrideTemplate:r`Failed to upload ${i.length} file${1===i.length?"":"s"}: <br />
            ${N(i,r`<br />`)}`})),console.warn(`Failed to upload ${i.length} file${1===i.length?"":"s"}: \r\n${i.join("\r\n")}`)),await this.reload(),this.folderInput.value=""}async#r(e,t){const i={FileExplorerId:this.fileExplorerId,Name:e,ParentFolderId:t||void 0};try{const e=this.apiService?.postAsync("FileExplorerFolders?expand=CreatorPerson(select=FirstName,LastName)",i);e&&this.dispatchEvent(new s(e));const t=(await e)?.entity;return this.fileExplorer&&(this.fileExplorer.FoldersCount=this.fileExplorer?.FoldersCount+1,this.requestUpdate("fileExplorer")),t}catch(e){this.dispatchEvent(new o(e))}return null}#R(e,t){const i=this.selected.find(i=>i?.Id===e.Id&&i.type===t);this.selected=i?[...this.selected.filter(e=>e!==i)]:[...this.selected,{...e,type:t}]}static{this.styles=[u,_,x,g,a`
      :host {
        display: grid;
        grid:
          'header' 69px
          'main' minmax(150px, 1fr)
          'footer' auto;

        border: 1px solid var(--md-sys-color-outline-variant);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        border-radius: 8px;

        font-family: var(--leavitt-file-explorer-font-family, 'Roboto', 'Noto', sans-serif);
        -webkit-font-smoothing: antialiased;
        width: 100%;
      }

      header {
        display: grid;
        grid: 'nav actions' / 4fr auto;
        gap: 0px 12px;
        position: relative;

        margin: 0;
        padding: 0 12px 0 12px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      header aside {
        grid-area: nav;
      }

      header nav {
        font-family: Metropolis;
        font-size: 18px;
        letter-spacing: -0.264px;
        font-weight: 400;
        flex-direction: row;
        align-items: center;
        gap: 2px;
        display: flex;
        margin: 12px 0 0 12px;
      }

      header md-icon-button {
        justify-self: center;
        align-self: center;
      }

      main {
        position: relative;
        overflow-y: auto;
      }

      content-veil {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--md-sys-color-scrim);
        opacity: 0;
        -webkit-transition: opacity 75ms linear;
        -o-transition: opacity 75ms linear;
        transition: opacity 75ms linear;
        z-index: 6;
        backdrop-filter: blur(6px);
      }

      content-veil[opened] {
        opacity: 0.32;
        display: block;
      }

      main > section {
        display: flex;
        flex-direction: column;
      }

      :host([display='grid']) section:last-of-type {
        margin-bottom: 12px;
      }

      main > h3 {
        display: none;
      }

      :host([display='grid']) main > h3 {
        display: block;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        letter-spacing: -0.264px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        margin: 24px 12px 0 24px;
      }

      :host([display='grid']) main > section {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-gap: 12px;
        padding: 12px 24px;
      }

      md-linear-progress {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        width: unset;
      }

      file-summary {
        grid-area: summary;
        display: block;
        padding-left: 12px !important;
        font-size: 12px;
      }

      :host([prevent-navigation-up]) file-summary {
        display: none;
      }

      header nav md-icon {
        color: var(--md-sys-color-surface-variant);
        flex-shrink: 0;
      }

      selected-actions {
        display: grid;
        gap: 6px;
        grid: 'deselect selected-text buttons' / auto 1fr auto;
        background-color: var(--md-sys-color-secondary-container);
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        margin: 0 !important;
        align-content: center;
        align-items: center;
        padding: 12px;
        z-index: 1;
      }

      selected-actions h2 {
        color: var(--md-sys-color-on-secondary-container);
        font-size: 18px;
        font-weight: 400;
      }

      selected-actions div[buttons] {
        display: flex;
        align-items: center;
        gap: 0 8px;
        justify-content: flex-end;
      }

      nav a:visited,
      nav span,
      nav a {
        display: block;
        font-size: 18px;
        min-width: 20px;
      }

      a[disabled] {
        pointer-events: none;
        cursor: default;
      }

      nav a span {
        padding: 0;
      }

      header span {
        grid-area: text;
        position: relative;
      }

      /*File item styles */

      footer {
        display: grid;
        grid: 'count . actions' / auto 1fr auto;
        gap: 12px;
        align-items: center;
        padding: 6px 8px 6px 24px;
        border-top: 1px solid var(--md-sys-color-outline-variant);
      }

      footer span[counts] {
        grid-area: count;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
      }

      footer-actions {
        grid-area: actions;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      md-menu[upload-menu] md-menu-item {
        min-width: 200px;
      }

      :host([display='grid']) footer span[counts] {
        display: none;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return r`
      <header>
        <aside ellipsis>
          <nav ellipsis>
            ${this.fileExplorer?this.path.map((e,t)=>r`
                    ${t==this.path.length-1?r` <span ellipsis end title=${e?.Name??""}> ${e.Name} </span> `:r`
                          <a
                            ?disabled=${this.isLoading}
                            ellipsis
                            title=${e.Name??""}
                            href="#"
                            @click=${t=>{t.preventDefault(),this.folderId=e.FolderId??null,this.selected=[]}}
                          >
                            ${e.Name}</a
                          >
                          <md-icon>navigate_next</md-icon>
                        `}
                  `):r`<span ellipsis end> File explorer</span>`}
          </nav>
          <file-summary ?hidden=${!this.fileExplorer} ellipsis heading3
            >${this.fileExplorer?.FilesCount} files | ${this.fileExplorer?.FoldersCount} folders | ${U(this.fileExplorer?.Size)}</file-summary
          >
        </aside>
        <md-icon-button
          ?disabled=${this.isLoading}
          view-style
          @click=${()=>this.display="grid"===this.display?"list":"grid"}
          title=${"grid"===this.display?"Show list view":"Show grid view"}
        >
          <md-icon>${"grid"===this.display?"view_list":"view_module"}</md-icon>
        </md-icon-button>
        <selected-actions ?hidden=${0===this.selected.length}>
          <md-icon-button title="Clear selected" @click=${()=>this.selected=[]}> <md-icon>clear</md-icon></md-icon-button>
          <h2 ellipsis>${this.selected.length} selected</h2>
          <div buttons part="selected-actions-container">
            ${this.isAdmin?r` <md-icon-button title="Delete selected" @click=${this.#B}> <md-icon>delete</md-icon></md-icon-button> `:e}
            <md-icon-button
              primary
              ?hidden=${!this.selected.length}
              ?disabled=${1!==this.selected.length}
              @click=${()=>{this.selected&&(this.#A(this.selected[0])?this.folderDialog.open(this.selected[0]):this.fileDialog.open(this.selected[0]))}}
            >
              <md-icon>info</md-icon>
            </md-icon-button>
          </div>
        </selected-actions>

        <md-linear-progress ?hidden=${!this.isLoading} indeterminate></md-linear-progress>
      </header>
      <main>
        <leavitt-file-explorer-no-files ?hidden=${"no-files"!==this.state}> </leavitt-file-explorer-no-files>
        <leavitt-file-explorer-no-permission ?hidden=${"no-permission"!==this.state}> </leavitt-file-explorer-no-permission>
        <leavitt-file-explorer-error ?hidden=${"error"!==this.state}> </leavitt-file-explorer-error>

        <h3 ?hidden=${0===this.folders.length||"files"!=this.state}>Folders (${this.folders.length})</h3>
        <section ?hidden=${0===this.folders.length||"files"!=this.state}>
          ${this.folders.map(e=>r`
              <folder-list-item
                .folder=${e}
                ?selected=${this.selected.some(t=>t?.Id===e.Id&&"folder"===t.type)}
                .selectedCount=${this.selected.length}
                .display=${this.display}
                @show-details=${()=>this.folderDialog.open(e)}
                @toggle-selected=${()=>this.#R(e,"folder")}
                @navigate=${()=>{this.selected=[],this.folderId=e.Id??null}}
              ></folder-list-item>
            `)}
        </section>
        <h3 ?hidden=${0===this.files.length||"files"!=this.state}>Files (${this.files.length})</h3>
        <section ?hidden=${0===this.files.length||"files"!=this.state}>
          ${this.files.map(e=>r`
              <file-list-item
                .file=${e}
                ?selected=${this.selected.some(t=>t?.Id===e.Id&&"file"===t.type)}
                .selectedCount=${this.selected.length}
                .display=${this.display}
                @show-details=${()=>this.fileDialog.open(e)}
                @toggle-selected=${()=>this.#R(e,"file")}
              ></file-list-item>
            `)}
        </section>
        <content-veil ?opened=${this.isLoading}></content-veil>
      </main>
      <footer>
        <span counts> ${this.files.length} files | ${this.folders.length} folders </span>

        ${this.isAdmin?r`
              <footer-actions>
                <md-text-button ?disabled=${this.isLoading} @click=${this.#Y}>
                  <md-icon slot="icon">create_new_folder</md-icon>
                  <span> Add folder</span>
                </md-text-button>
                <div style="position: relative;">
                  <md-text-button
                    id="upload-button"
                    ?disabled=${this.isLoading}
                    @click=${()=>{this.uploadMenu.open=!this.uploadMenu.open}}
                  >
                    <md-icon slot="icon">backup</md-icon>
                    Upload
                  </md-text-button>
                  <md-menu
                    upload-menu
                    anchor="upload-button"
                    @close-menu=${e=>{e.detail.itemPath?.[0]?.action?.()}}
                  >
                    <md-menu-item .action=${()=>this.fileInput.click()}>
                      <span slot="headline">Upload files</span>
                      <md-icon slot="start">upload_file</md-icon>
                    </md-menu-item>
                    <md-menu-item .action=${()=>this.folderInput.click()}>
                      <span slot="headline">Upload folders</span>
                      <md-icon slot="start">perm_media</md-icon>
                    </md-menu-item>
                  </md-menu>
                </div>
                <input
                  folders
                  @change=${async()=>this.#G(this.folderInput.files)}
                  type="file"
                  webkitdirectory
                  directory
                  multiple
                  id="file"
                  style="display:none;"
                />
                <input files @change=${async()=>this.#O(this.fileInput.files)} type="file" multiple id="file" style="display:none;" />
              </footer-actions>
            `:e}
      </footer>
      <leavitt-add-folder-modal
        .apiService=${this.apiService}
        .fileExplorerId=${this.fileExplorerId}
        .parentFolderId=${this?.folderId??0}
      ></leavitt-add-folder-modal>
      <leavitt-folder-modal .apiService=${this.apiService} .enableEditing=${this.isAdmin}></leavitt-folder-modal>
      <leavitt-file-modal .apiService=${this.apiService} .enableEditing=${this.isAdmin}></leavitt-file-modal>
      <titanium-confirmation-dialog></titanium-confirmation-dialog>
    `}};n([l("trackLoadingPromise"),d()],R.prototype,"isLoading",null),n([c({attribute:!1})],R.prototype,"apiService",null),n([c({type:Number,attribute:"file-explorer-id"})],R.prototype,"fileExplorerId",null),n([c({type:Number,attribute:"folder-id"})],R.prototype,"folderId",null),n([c({type:String,attribute:"local-storage-display-key"})],R.prototype,"localStorageDisplayKey",null),n([c({type:Boolean,reflect:!0,attribute:"prevent-navigation-up"})],R.prototype,"preventNavigationUp",null),n([c({type:String,reflect:!0,attribute:"display"})],R.prototype,"display",null),n([c({type:String})],R.prototype,"state",null),n([d()],R.prototype,"isAdmin",null),n([d()],R.prototype,"fileExplorer",null),n([d()],R.prototype,"files",null),n([d()],R.prototype,"folders",null),n([d()],R.prototype,"path",null),n([d()],R.prototype,"selected",null),n([h("md-menu[upload-menu]")],R.prototype,"uploadMenu",null),n([h("leavitt-folder-modal")],R.prototype,"folderDialog",null),n([h("leavitt-add-folder-modal")],R.prototype,"addFolderDialog",null),n([h("leavitt-file-modal")],R.prototype,"fileDialog",null),n([h("input[files]")],R.prototype,"fileInput",null),n([h("input[folders]")],R.prototype,"folderInput",null),n([h("titanium-confirmation-dialog")],R.prototype,"confirmationDialog",null),R=n([p("leavitt-file-explorer")],R);let q=class extends i{#q=new k(this);connectedCallback(){super.connectedCallback(),C.addHeader("X-LGAppName","FileExplorer")}disconnectedCallback(){super.disconnectedCallback(),"FileExplorer"===C.headers["X-LGAppName"]&&C.addHeader("X-LGAppName","Testing")}static{this.styles=[F]}render(){return r`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt file explorer" level1Href="/leavitt-file-explorer" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt File Explorer" className="LeavittFileExplorer" requires-auth></story-header>

            ${this.#q.identity?r`
                  <div>
                    <h1>File Explorer</h1>
                    <p>File explorer component with API integration</p>
                    <leavitt-file-explorer file-explorer-id="1" .apiService=${C}></leavitt-file-explorer>
                  </div>
                `:e}

            <api-docs src="./custom-elements.json" selected="leavitt-file-explorer"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};q=n([p("leavitt-file-explorer-demo")],q);export{q as LeavittFileExplorerDemo};
