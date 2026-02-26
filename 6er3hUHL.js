import{f as e,E as t,L as i,i as s,P as o,S as r,b as a,c as l,_ as n,n as d,r as c,e as h,t as p,p as m,h as u,g as f,a as g,j as x,k as v,m as y,o as b,l as w,q as $,s as _,A as F,U as k}from"./BkdWKSMI.js";import{S as E}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import{C}from"./BtETRSc4.js";import"./wYCSt_jS.js";import"./pNeA5_IP.js";import{d as N}from"./fEBq_QNq.js";import"./Bl0xVEGl.js";import"./CIHPGdiZ.js";import"./DbnfmX2U.js";function S(t,i){return t.map((s,o)=>[s,o<t.length-1?i:e])}const I=new t;Object.freeze(I);let z=class extends(i(s)){#e;get apiService(){return this.#e}set apiService(e){this.#e=e}#t;get fileExplorerId(){return this.#t}set fileExplorerId(e){this.#t=e}#i;get parentFolderId(){return this.#i}set parentFolderId(e){this.#i=e}#s="";get folderName(){return this.#s}set folderName(e){this.#s=e}#o;get dialog(){return this.#o}set dialog(e){this.#o=e}async open(){return this.folderName="",this.dialog.show(),new Promise(e=>{this.resolve=e})}async#r(){if(!this.apiService)return;const e={FileExplorerId:this.fileExplorerId,Name:this.folderName,ParentFolderId:this.parentFolderId||void 0};try{const t=this.apiService.postAsync("FileExplorerFolders?expand=CreatorPerson(select=FullName,ProfilePictureCdnFileName)",e);this.dispatchEvent(new o(t)),this.loadWhile(t);const i=(await t)?.entity;return{...i,CreatorProfilePictureCndFileName:i?.CreatorPerson?.ProfilePictureCdnFileName,CreatorFullName:i?.CreatorPerson?.FullName}}catch(e){this.dispatchEvent(new r(e))}return null}static{this.styles=a`
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
  `}render(){return l`
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
    `}};n([d({attribute:!1})],z.prototype,"apiService",null),n([d({type:Number})],z.prototype,"fileExplorerId",null),n([d({type:Number})],z.prototype,"parentFolderId",null),n([c()],z.prototype,"folderName",null),n([h("md-dialog")],z.prototype,"dialog",null),z=n([p("leavitt-add-folder-modal")],z);let D=class extends s{static{this.styles=[m,a`
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
    `]}render(){return l`
      <md-icon>folder_shared</md-icon>
      <p>No files or folders yet...</p>
    `}};D=n([p("leavitt-file-explorer-no-files")],D);let j=class extends s{static{this.styles=[m,a`
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
    `]}render(){return l`
      <md-icon>gpp_bad</md-icon>
      <p>Something went wrong...</p>
    `}};j=n([p("leavitt-file-explorer-error")],j);let M=class extends s{static{this.styles=[m,a`
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
    `]}render(){return l`
      <md-icon>https</md-icon>
      <p>Permission denied.</p>
    `}};M=n([p("leavitt-file-explorer-no-permission")],M);let P=class extends(i(s)){#e;get apiService(){return this.#e}set apiService(e){this.#e=e}#a=!1;get enableEditing(){return this.#a}set enableEditing(e){this.#a=e}#l="view";get state(){return this.#l}set state(e){this.#l=e}#n=null;get file(){return this.#n}set file(e){this.#n=e}#d=!1;get isCopying(){return this.#d}set isCopying(e){this.#d=e}#c=!1;get hasClipboard(){return this.#c}set hasClipboard(e){this.#c=e}#h;get fileName(){return this.#h}set fileName(e){this.#h=e}#o;get dialog(){return this.#o}set dialog(e){this.#o=e}firstUpdated(){I.subscribe("FileExplorerFileDto","Update",e=>{e.Id===this.file?.Id&&(this.file={...this.file,...e})}),navigator.clipboard&&(this.hasClipboard=!0)}async#p(){if(!this.apiService||this.fileName===this.file?.Name||!this.fileName)return;const e={Name:this.fileName};try{const t=this.apiService.patchAsync(`FileExplorerAttachments(${this.file?.Id})`,e);this.loadWhile(t),await t,I.dispatch("FileExplorerFileDto","Update",{...this.file,Name:this.fileName}),this.state="view"}catch(e){this.dispatchEvent(new r(e))}}async open(e){return this.file=e,this.state="view",await this.dialog.show()}static{this.styles=[u,f,m,g,x,v,a`
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
    `]}render(){return l`
      <md-dialog>
        <header slot="headline">
          ${"view"===this.state?l`<h1 title="${this.file?.Name??""}.${this.file?.Extension??""}">
                ${y(`${this.file?.Name??""}.${this.file?.Extension??""}`)}
              </h1>`:l`<md-filled-text-field
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
                  @click=${()=>this.#p()}
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
          ${this.file?.PreviewSizes?.includes("512")?l` <img preview loading="lazy" src=${b(w(this.file,512))} />`:l`<no-preview><p>No preview currently available</p> </no-preview> `}

          <data-row force-stacked>
            <h5>Uploaded</h5>
            <p>${N(this.file?.CreatedDate).format("MMM D, YYYY h:mm:ss a")}</p>
          </data-row>
          ${this.file?.CreatorId?l`<data-row force-stacked>
                <h5>Uploaded by</h5>
                <p image><profile-picture size="24" .fileName=${this.file.CreatorProfilePictureCndFileName}></profile-picture> ${this.file?.CreatorFullName}</p>
              </data-row>`:e}
          <data-row force-stacked>
            <h5>Copy download link</h5>
            <p ellipsis>
              ${this.hasClipboard?l`
                    <a
                      download-link
                      title="Copy direct download link to clipboard"
                      @click=${()=>{const e=$(this.file);e&&(navigator.clipboard.writeText(e),this.isCopying=!0,setTimeout(()=>{this.isCopying=!1},2e3))}}
                    >
                      ${$(this.file)}
                    </a>
                  `:l` ${$(this.file)} `}
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
    `}};n([d({attribute:!1})],P.prototype,"apiService",null),n([d({type:Boolean})],P.prototype,"enableEditing",null),n([c()],P.prototype,"state",null),n([c()],P.prototype,"file",null),n([c()],P.prototype,"isCopying",null),n([c()],P.prototype,"hasClipboard",null),n([c()],P.prototype,"fileName",null),n([h("md-dialog")],P.prototype,"dialog",null),P=n([p("leavitt-file-modal")],P);let A=class extends(i(s)){#e;get apiService(){return this.#e}set apiService(e){this.#e=e}#a=!1;get enableEditing(){return this.#a}set enableEditing(e){this.#a=e}#l="view";get state(){return this.#l}set state(e){this.#l=e}#m=null;get folder(){return this.#m}set folder(e){this.#m=e}#s;get folderName(){return this.#s}set folderName(e){this.#s=e}#o;get dialog(){return this.#o}set dialog(e){this.#o=e}firstUpdated(){I.subscribe("FileExplorerFolder","Update",e=>{e.Id===this.folder?.Id&&(this.folder={...this.folder,...e})})}async#u(){if(!this.apiService||this.folderName===this.folder?.Name||!this.folderName)return;const e={Name:this.folderName};try{const t=this.apiService.patchAsync(`FileExplorerFolders(${this.folder?.Id})`,e);this.loadWhile(t),await t,I.dispatch("FileExplorerFolder","Update",{...this.folder,Name:this.folderName}),this.state="view"}catch(e){this.dispatchEvent(new r(e))}}open(e){this.folder=e,this.state="view",this.dialog.show()}static{this.styles=[u,f,m,g,x,v,a`
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
    `]}render(){return l`
      <md-dialog>
        ${"view"===this.state?l`<static-header slot="headline"
              ><md-icon>folder</md-icon>
              <h1>${this.folder?.Name}</h1>
              <md-icon-button
                ?hidden=${!this.enableEditing}
                @click=${()=>{this.state="edit",this.folderName=this.folder?.Name??""}}
              >
                <md-icon>create</md-icon>
              </md-icon-button>
            </static-header>`:l`<md-filled-text-field
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
                @click=${()=>this.#u()}
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
            <p>${N(this.folder?.CreatedDate).format("MMM D, YYYY h:mm:ss a")}</p>
          </data-row>
          ${this.folder?.CreatorId?l`<data-row force-stacked>
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
    `}};function U(e){return"pdf"===e||"txt"===e||"rtf"===e||"doc"===e||"docx"===e||"csv"===e?"article":"pptx"===e||"pptm"===e||"ppt"===e?"slideshow":"xlsx"===e||"xlsx"===e?"text_snippet":"jpg"===e||"jpeg"===e||"png"===e||"webp"===e||"ico"===e||"svg"===e?"photo":"mp4"===e?"movie":"article"}n([d({attribute:!1})],A.prototype,"apiService",null),n([d({type:Boolean})],A.prototype,"enableEditing",null),n([c()],A.prototype,"state",null),n([c()],A.prototype,"folder",null),n([c()],A.prototype,"folderName",null),n([h("md-dialog")],A.prototype,"dialog",null),A=n([p("leavitt-folder-modal")],A);let Y=class extends s{#f;get attachment(){return this.#f}set attachment(e){this.#f=e}static{this.styles=a`
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
  `}render(){return l`
      ${this.attachment?.PreviewSizes?.includes("512")?l`<img draggable="false" loading="lazy" src=${b(w(this.attachment,512))} />`:l` <md-icon>${U(this.attachment?.Extension??"")}</md-icon>`}
    `}};function B(e,t=2){if(0===e)return"0 Bytes";const i=t||2,s=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,s)).toFixed(i))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][s]}n([d({type:Object})],Y.prototype,"attachment",null),Y=n([p("leavitt-file-explorer-image")],Y);let L=class extends s{#n;get file(){return this.#n}set file(e){this.#n=e}#g=!1;get selected(){return this.#g}set selected(e){this.#g=e}#x=0;get selectedCount(){return this.#x}set selectedCount(e){this.#x=e}#v="grid";get display(){return this.#v}set display(e){this.#v=e}static{this.styles=a`
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
  `}render(){return l` <button
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
        <md-icon>${"list"===this.display&&this.selected?"check":U(this.file.Extension??"")}</md-icon>
        <span name>${this.file.Name}</span>
        <span ext>${this.file.Extension}</span>
      </file-name>
      ${"list"===this.display?l`
            <span date>${N(this.file.CreatedDate).format("MMM D, YYYY")}</span>
            <span size>${B(this.file.Size)}</span>
          `:l`<image-wrapper><leavitt-file-explorer-image .attachment=${this.file}></leavitt-file-explorer-image></image-wrapper>`}

      <md-filled-tonal-icon-button
        tabIndex=${this.selectedCount?"-1":"0"}
        @keydown=${e=>{" "!=e.key&&"Enter"!==e.key||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new Event("toggle-selected")))}}
        @click=${e=>{e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new Event("toggle-selected"))}}
      >
        <md-icon>check</md-icon>
      </md-filled-tonal-icon-button>
    </button>`}};n([d({type:Object})],L.prototype,"file",null),n([d({type:Boolean,reflect:!0})],L.prototype,"selected",null),n([d({type:Number,reflect:!0,attribute:"selected-count"})],L.prototype,"selectedCount",null),n([d({type:String,reflect:!0,attribute:"display"})],L.prototype,"display",null),L=n([p("file-list-item")],L);let T=class extends s{#m;get folder(){return this.#m}set folder(e){this.#m=e}#g=!1;get selected(){return this.#g}set selected(e){this.#g=e}#x=0;get selectedCount(){return this.#x}set selectedCount(e){this.#x=e}#v="grid";get display(){return this.#v}set display(e){this.#v=e}#y(e){return Math.abs(e)>999?Math.floor(Math.sign(e)*Math.round(Math.abs(e)/100)/10)+"k+":Math.sign(e)*Math.abs(e)}static{this.styles=a`
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
  `}render(){return l` <button
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

      ${"list"===this.display?l`
            <span date>${N(this.folder.CreatedDate).format("MMM D, YYYY")}</span>
            <span size>${this.#y(this.folder.FilesCount??0)||"0"} file${1===this.folder.FilesCount?"":"s"}</span>
          `:e}
    </button>`}};n([d({type:Object})],T.prototype,"folder",null),n([d({type:Boolean,reflect:!0})],T.prototype,"selected",null),n([d({type:Number})],T.prototype,"selectedCount",null),n([d({type:String,reflect:!0,attribute:"display"})],T.prototype,"display",null),T=n([p("folder-list-item")],T);var K={maxInProgress:5,failFast:!1,nextCheck:function(e,t){return Promise.resolve(e.amountStarted<t.length)},ignoreIsFunctionCheck:!1};function O(e,t){return new Promise(function(i,s){var o=Object.assign({},K,t),r={lastCompletedIndex:-1,amountDone:0,amountStarted:0,amountResolved:0,amountRejected:0,amountNextCheckFalsey:0,rejectedIndexes:[],resolvedIndexes:[],nextCheckFalseyIndexes:[],taskResults:[]};if(0===e.length)return i(r);for(var a=!1,l=0,n=function(e,t){if(r.taskResults[t]=e,r.rejectedIndexes.push(t),r.amountRejected++,!0===o.failFast)return r.lastCompletedIndex=t,a=!0,s(r);d(t)},d=function(t){if(!0!==a){if(r.amountDone++,r.lastCompletedIndex=t,"function"==typeof o.progressCallback&&o.progressCallback(r),r.amountDone===e.length)return i(r);l<e.length&&c(l++)}},c=function(t){o.nextCheck(r,e).then(function(i){!0===i?function(t){if(r.amountStarted++,"function"==typeof e[t])try{e[t]().then(function(e){r.taskResults[t]=e,r.resolvedIndexes.push(t),r.amountResolved++,d(t)},function(e){n(e,t)})}catch(e){n(e,t)}else{if(!0!==o.ignoreIsFunctionCheck)return a=!0,s(new Error("tasks["+t+"]: "+e[t]+", is supposed to be of type function"));r.taskResults[t]=e[t],r.resolvedIndexes.push(t),r.amountResolved++,d(t)}}(t):(r.amountNextCheckFalsey++,r.nextCheckFalseyIndexes.push(t),d(t))},s)},h=0;h<Math.min(o.maxInProgress,e.length);h++)c(l++)})}function R(e,t){return new Promise(function(i,s){O(e,t).then(function(e){i(e.taskResults)},function(e){e instanceof Error?s(e):s(e.taskResults[e.rejectedIndexes[0]])})})}function G(e,t){return R(e,Object.assign({},{failFast:!0},t))}let H=class extends(i(s)){#e;get apiService(){return this.#e}set apiService(e){this.#e=e}#t=0;get fileExplorerId(){return this.#t}set fileExplorerId(e){this.#t=e}#b=null;get folderId(){return this.#b}set folderId(e){this.#b=e}#w="leavitt-file-explorer-display";get localStorageDisplayKey(){return this.#w}set localStorageDisplayKey(e){this.#w=e}#$=!1;get preventNavigationUp(){return this.#$}set preventNavigationUp(e){this.#$=e}get display(){return window.localStorage.getItem(this.localStorageDisplayKey)||"grid"}set display(e){localStorage.setItem(this.localStorageDisplayKey,e)}#l="files";get state(){return this.#l}set state(e){this.#l=e}#_=!1;get isAdmin(){return this.#_}set isAdmin(e){this.#_=e}#F=null;get fileExplorer(){return this.#F}set fileExplorer(e){this.#F=e}#k=[];get files(){return this.#k}set files(e){this.#k=e}#E=[];get folders(){return this.#E}set folders(e){this.#E=e}#C=[];get path(){return this.#C}set path(e){this.#C=e}#g=[];get selected(){return this.#g}set selected(e){this.#g=e}#N;get uploadMenu(){return this.#N}set uploadMenu(e){this.#N=e}#S;get folderDialog(){return this.#S}set folderDialog(e){this.#S=e}#I;get addFolderDialog(){return this.#I}set addFolderDialog(e){this.#I=e}#z;get fileDialog(){return this.#z}set fileDialog(e){this.#z=e}#D;get fileInput(){return this.#D}set fileInput(e){this.#D=e}#j;get folderInput(){return this.#j}set folderInput(e){this.#j=e}#M;get confirmDialog(){return this.#M}set confirmDialog(e){this.#M=e}#P=0;firstUpdated(){this.display=structuredClone(this.display),this.addEventListener(C.eventType,async e=>{e.stopPropagation(),this.confirmDialog.handleEvent(e)}),this.addEventListener(o.eventType,async e=>{e.stopPropagation(),this.loadWhile(e.detail.promise)}),I.subscribe("FileExplorerFileDto","Update",e=>{const t=this.files.findIndex(t=>t.Id===e.Id);t>-1&&(this.files[t]={...this.files[t],...e},this.requestUpdate("files"))}),I.subscribe("FileExplorerFolder","Update",e=>{const t=this.folders.findIndex(t=>t.Id===e.Id);t>-1&&(this.folders[t]={...this.folders[t],...e},this.requestUpdate("folders"))})}async updated(e){(this.fileExplorerId>0&&e.has("fileExplorerId")||e.has("folderId"))&&(this.folderId&&0===this.#P&&(this.#P=this.folderId),this.isAdmin=!1,await this.reload())}#A(e){return"folder"===e?.type}async reload(){await this.#U(this.fileExplorerId,this.folderId)}async#U(e,t){try{const i=this.apiService?.getAsync(`FileExplorers(${e})/FileExplorerView(folderId=${t})`);i&&this.loadWhile(i);const s=await i;if(200==s?.status&&s.entity){this.fileExplorer=s.entity,this.folders=s.entity.Folders,this.files=s.entity.Files;const e=s.entity.Path;if(this.preventNavigationUp&&this.#P>0){const t=[];for(let i=e.length-1;i>0;i--){const s=e[i];if(t.unshift(s),s.FolderId===this.#P)break}this.path=t}else this.path=e;this.isAdmin=s.entity.CanEdit||!1,this.state=this.folders.length>0||this.files.length>0?"files":"no-files"}}catch(e){if(401==e?.statusCode||404==e?.statusCode)return this.path=[{Name:"Files"}],void(this.state="no-permission");this.path=[{Name:"Files"}],this.state="error"}}async#Y(){const e=await this.addFolderDialog.open();e&&(this.folders=[...this.folders,e],this.fileExplorer&&(this.fileExplorer.FoldersCount=this.fileExplorer?.FoldersCount+1,this.requestUpdate("fileExplorer")),this.state="files",this.dispatchEvent(new CustomEvent("folder-added",{detail:e})))}async#B(){const e=new C("Please confirm delete",`Deleting folders will delete all of their contents. Are you sure you would like to delete the selected item${1===this.selected.length?"":"s"}?`);if(this.dispatchEvent(e),await e.dialogResult){const e=[...this.selected],t=new Map;let i=0;const s=Promise.all(e.map(async e=>{try{this.#A(e)?(await(this.apiService?.deleteAsync(`FileExplorerFolders(${e.Id})`)),this.folders.splice(this.folders.findIndex(t=>t.Id===e.Id),1),this.dispatchEvent(new CustomEvent("folder-deleted")),this.fileExplorer&&(this.fileExplorer.FoldersCount=this.fileExplorer?.FoldersCount-1,this.requestUpdate("fileExplorer")),this.requestUpdate("folders")):(await(this.apiService?.deleteAsync(`FileExplorerAttachments(${e.Id})`)),this.files.splice(this.files.findIndex(t=>t.Id===e.Id),1),this.requestUpdate("files"),this.fileExplorer&&(this.fileExplorer.FilesCount=this.fileExplorer?.FilesCount-1,this.fileExplorer.Size=this.fileExplorer?.Size-e.Size,this.requestUpdate("fileExplorer")),this.dispatchEvent(new CustomEvent("file-deleted")))}catch(e){const s=(t.get(e)??0)+1;t.set(e,s),i++}}));this.loadWhile(s),await s,this.selected=[],this.state=this.folders.length>0||this.files.length>0?"files":"no-files",await this.reload(),i>0&&this.dispatchEvent(new r("",{overrideTemplate:l`Failed to delete ${1===i?"files and folders":`${i} files and folders: <br />`}.
            ${1===t.size?Array.from(t.keys())[0]:Array.from(t.entries()).map(([e,t])=>`(${t}) ${e} <br />`)}`}))}}#L(e){return e.webkitRelativePath.replace("/"+e.name,"")}async#T(e){const t=new Map,i=Array.from(e??[]);for(let e=0;e<i.length;e++){const s=i[e],o=this.#L(s).split("/"),r=[];let a=this.folderId;for(let e=0;e<o.length;e++){const i=o[e],s=[...r,i].join("/");if(t.has(s)){r.push(i),a=t.get(s)??0;continue}const l=await this.#r(i,a||null);if(a=l?.Id??0,r.push(i),t.set(r.join("/"),l?.Id??0),l?.ParentFolderId&&l?.ParentFolderId===this.folderId||!l?.ParentFolderId&&!this.folderId){const e={...l,CreatorLastName:l?.CreatorPerson?.LastName,CreatorFirstName:l?.CreatorPerson?.FirstName};this.folders=[...this.folders,e],this.state="files",this.dispatchEvent(new CustomEvent("folder-added",{detail:e}))}}}return t}async#K(e){const t=this.folderId?`FileExplorerFolders(${this.folderId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`:`FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`,i=[],s=G(Array.from(e??[]).map(e=>async()=>{try{const i=(await(this.apiService?.uploadFile(t,e,()=>console.log)))?.entity;if(i){const e={...i,CreatorProfilePictureCndFileName:i.Creator?.ProfilePictureCdnFileName??"",CreatorFullName:i.Creator?.FullName??"",CreatorFirstName:"",CreatorLastName:""};this.files=[...this.files,e],this.state="files",this.dispatchEvent(new CustomEvent("file-added")),this.fileExplorer&&(this.fileExplorer.FilesCount=this.fileExplorer?.FilesCount+1,this.fileExplorer.Size=this.fileExplorer?.Size+i.Size,this.requestUpdate("fileExplorer"))}}catch(t){i.push(e.name+": "+t.message)}}),{maxInProgress:4});this.loadWhile(s),await s,i.length>0&&(this.dispatchEvent(new r("",{overrideTemplate:l`Failed to upload ${i.length} file${1===i.length?"":"s"}: <br />
            ${S(i,l`<br />`)}`})),console.warn(`Failed to upload ${i.length} file${1===i.length?"":"s"}: \r\n${i.join("\r\n")}`)),this.fileInput.value=""}async#O(e){const t=this.#T(e),i=[],s=G(Array.from(e??[]).map(e=>async()=>{try{const i=this.#L(e),s=(await t).get(i),o=s?`FileExplorerFolders(${s})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`:`FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`,r=(await(this.apiService?.uploadFile(o,e,()=>console.log)))?.entity;r&&(this.dispatchEvent(new CustomEvent("file-added")),this.fileExplorer&&(this.fileExplorer.FilesCount=this.fileExplorer?.FilesCount+1,this.fileExplorer.Size=this.fileExplorer?.Size+r.Size,this.requestUpdate("fileExplorer")))}catch(t){i.push(e.webkitRelativePath+": "+t.message)}}),{maxInProgress:4});this.loadWhile(s),await s,i.length>0&&(this.dispatchEvent(new r("",{overrideTemplate:l`Failed to upload ${i.length} file${1===i.length?"":"s"}: <br />
            ${S(i,l`<br />`)}`})),console.warn(`Failed to upload ${i.length} file${1===i.length?"":"s"}: \r\n${i.join("\r\n")}`)),await this.reload(),this.folderInput.value=""}async#r(e,t){const i={FileExplorerId:this.fileExplorerId,Name:e,ParentFolderId:t||void 0};try{const e=this.apiService?.postAsync("FileExplorerFolders?expand=CreatorPerson(select=FirstName,LastName)",i);e&&this.dispatchEvent(new o(e));const t=(await e)?.entity;return this.fileExplorer&&(this.fileExplorer.FoldersCount=this.fileExplorer?.FoldersCount+1,this.requestUpdate("fileExplorer")),t}catch(e){this.dispatchEvent(new r(e))}return null}#R(e,t){const i=this.selected.find(i=>i?.Id===e.Id&&i.type===t);this.selected=i?[...this.selected.filter(e=>e!==i)]:[...this.selected,{...e,type:t}]}static{this.styles=[u,_,x,g,a`
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
    `]}render(){return l`
      <header>
        <aside ellipsis>
          <nav ellipsis>
            ${this.fileExplorer?this.path.map((e,t)=>l`
                    ${t==this.path.length-1?l` <span ellipsis end title=${e?.Name??""}> ${e.Name} </span> `:l`
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
                  `):l`<span ellipsis end> File explorer</span>`}
          </nav>
          <file-summary ?hidden=${!this.fileExplorer} ellipsis heading3
            >${this.fileExplorer?.FilesCount} files | ${this.fileExplorer?.FoldersCount} folders | ${B(this.fileExplorer?.Size)}</file-summary
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
            ${this.isAdmin?l` <md-icon-button title="Delete selected" @click=${this.#B}> <md-icon>delete</md-icon></md-icon-button> `:e}
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
          ${this.folders.map(e=>l`
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
          ${this.files.map(e=>l`
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

        ${this.isAdmin?l`
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
                  @change=${async()=>this.#O(this.folderInput.files)}
                  type="file"
                  webkitdirectory
                  directory
                  multiple
                  id="file"
                  style="display:none;"
                />
                <input files @change=${async()=>this.#K(this.fileInput.files)} type="file" multiple id="file" style="display:none;" />
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
      <titanium-confirm-dialog></titanium-confirm-dialog>
    `}};n([d({attribute:!1})],H.prototype,"apiService",null),n([d({type:Number,attribute:"file-explorer-id"})],H.prototype,"fileExplorerId",null),n([d({type:Number,attribute:"folder-id"})],H.prototype,"folderId",null),n([d({type:String,attribute:"local-storage-display-key"})],H.prototype,"localStorageDisplayKey",null),n([d({type:Boolean,reflect:!0,attribute:"prevent-navigation-up"})],H.prototype,"preventNavigationUp",null),n([d({type:String,reflect:!0,attribute:"display"})],H.prototype,"display",null),n([d({type:String})],H.prototype,"state",null),n([c()],H.prototype,"isAdmin",null),n([c()],H.prototype,"fileExplorer",null),n([c()],H.prototype,"files",null),n([c()],H.prototype,"folders",null),n([c()],H.prototype,"path",null),n([c()],H.prototype,"selected",null),n([h("md-menu[upload-menu]")],H.prototype,"uploadMenu",null),n([h("leavitt-folder-modal")],H.prototype,"folderDialog",null),n([h("leavitt-add-folder-modal")],H.prototype,"addFolderDialog",null),n([h("leavitt-file-modal")],H.prototype,"fileDialog",null),n([h("input[files]")],H.prototype,"fileInput",null),n([h("input[folders]")],H.prototype,"folderInput",null),n([h("titanium-confirm-dialog")],H.prototype,"confirmDialog",null),H=n([p("leavitt-file-explorer")],H);let q=class extends s{#G;get fileExplorerApiService(){return this.#G}set fileExplorerApiService(e){this.#G=e}constructor(){super(),this.fileExplorerApiService=new F(k),this.fileExplorerApiService.baseUrl="https://devapi3.leavitt.com/",this.fileExplorerApiService.addHeader("X-LGAppName","FileExplorer")}static{this.styles=[E]}render(){return l`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt file explorer" level1Href="/leavitt-file-explorer" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt File Explorer" className="LeavittFileExplorer"></story-header>

            <div>
              <h1>File Explorer</h1>
              <p>File explorer component with API integration</p>
              <leavitt-file-explorer file-explorer-id="1" .apiService=${this.fileExplorerApiService}></leavitt-file-explorer>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-file-explorer"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};n([c()],q.prototype,"fileExplorerApiService",null),q=n([p("leavitt-file-explorer-demo")],q);export{q as LeavittFileExplorerDemo};
