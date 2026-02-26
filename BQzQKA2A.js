import{i as t,b as i,S as a,v as e,u as n,w as l,c as s,_ as o,r as m,e as c,t as r}from"./BkdWKSMI.js";import{S as p}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./DctsHwvc.js";import"./BXTEaQeD.js";let d=class extends t{#t=[];get files(){return this.#t}set files(t){this.#t=t}#i=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];get selectedCroppableFormats(){return this.#i}set selectedCroppableFormats(t){this.#i=t}#a=["avif","bmp","dib","gif","ico","jfif","jxl","jpeg","jpg","pjp","pjpeg","png","svg","svgz","tif","tiff","webp","xbm"];get allImageFormats(){return this.#a}set allImageFormats(t){this.#a=t}#e;get smartAttachment(){return this.#e}set smartAttachment(t){this.#e=t}#n;get dialog(){return this.#n}set dialog(t){this.#n=t}static{this.styles=[p,i`
      md-dialog {
        --md-dialog-container-shape: 28px;
      }

      chip-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 16px 0;
      }

      input-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin: 16px 0;
      }
    `]}render(){return s`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium smart attachment input" level1Href="/titanium-smart-attachment-input" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium smart attachment input" className="TitaniumSmartAttachmentInput"></story-header>

            <div>
              <h1>Default</h1>
              <titanium-smart-attachment-input label="Upload files"></titanium-smart-attachment-input>
            </div>

            <div>
              <h1>Filled</h1>
              <titanium-smart-attachment-input
                filled
                .croppableImageFormats=${this.selectedCroppableFormats}
                .files=${this.files}
                label="Upload files"
              ></titanium-smart-attachment-input>

              <br />

              <section buttons>
                <md-filled-tonal-button
                  @click=${()=>this.smartAttachment.supportingText=this.smartAttachment.supportingText?"":"This is a supporting text"}
                  >Toggle supporting text</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.smartAttachment.reset(),this.files=[]}}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${()=>this.smartAttachment.disabled=!this.smartAttachment.disabled}
                  >Toggle disabled</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${()=>this.smartAttachment.required=!this.smartAttachment.required}
                  >Toggle required</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${()=>this.smartAttachment.reportValidity()}>Report validity</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.smartAttachment.multiple=!this.smartAttachment.multiple}
                  >Toggle multiple</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${()=>this.smartAttachment.confirmDelete=!this.smartAttachment.confirmDelete}
                  >Toggle confirm delete</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${()=>this.dialog?.show()}
                  >Configure croppable formats (${this.selectedCroppableFormats.length} selected)</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>this.dispatchEvent(new a(this.smartAttachment.getFiles().length?`${this.smartAttachment.getFiles().length} files selected`:"No files selected"))}
                  >Get files</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>this.files=[{file:new File([""],"sample.svg"),previewSrc:"https://cdn.leavitt.com/icons/icon-app-broker-key.svg"}]}
                  >Pre-select file</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>Crop and save dialog options</h1>
              <input-grid>
                <titanium-smart-attachment-input
                  label="Circle crop"
                  supporting-text="Forces an aspect ratio of 1:1"
                  .options=${{shape:"circle"}}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Custom aspect ratio"
                  .options=${{selectionAspectRatio:16/9}}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="No aspect ratio, no grid, no background"
                  .options=${{selectionHideGrid:!0,canvasHideBackground:!0}}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Constrain select to canvas"
                  .options=${{constrainSelectionTo:"canvas"}}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Constrain select to image"
                  .options=${{constrainSelectionTo:"image"}}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Maximize selection"
                  .options=${{maximizeSelection:!0}}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Maximize selection with aspect"
                  .options=${{maximizeSelection:!0,selectionAspectRatio:16/9}}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Maximize with wide aspect and image constrain"
                  .options=${{maximizeSelection:!0,selectionAspectRatio:16/9,constrainSelectionTo:"image"}}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Maximize with tall aspect and image constrain"
                  .options=${{maximizeSelection:!0,selectionAspectRatio:9/16,constrainSelectionTo:"image"}}
                ></titanium-smart-attachment-input
              ></input-grid>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-smart-attachment-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <md-dialog
        @open=${t=>{e(t.target),n(t.target)}}
        @close=${t=>{"cancel"!==t.target.returnValue&&"save"!==t.target.returnValue&&"navigation-close"!==t.target.returnValue||l(t.target)}}
      >
        <div slot="headline">Configure Croppable Image Formats</div>
        <form slot="content" id="format-form" method="dialog">
          <p>Select which image formats should be croppable. Selected formats will show crop options when uploading images.</p>
          <chip-container>
            ${this.allImageFormats.map(t=>s`
                <titanium-chip
                  label=${t.toUpperCase()}
                  ?selected=${this.selectedCroppableFormats.includes(t)}
                  @click=${()=>{this.selectedCroppableFormats.includes(t)?this.selectedCroppableFormats=this.selectedCroppableFormats.filter(i=>i!==t):this.selectedCroppableFormats=[...this.selectedCroppableFormats,t]}}
                >
                </titanium-chip>
              `)}
          </chip-container>
        </form>
        <div slot="actions">
          <md-text-button @click=${()=>this.selectedCroppableFormats=[...this.allImageFormats]}>Select All</md-text-button>
          <md-text-button @click=${()=>this.selectedCroppableFormats=[]}>Clear All</md-text-button>
          <md-filled-tonal-button @click=${()=>this.dialog?.close()}>Close</md-filled-tonal-button>
        </div>
      </md-dialog>
    `}};o([m()],d.prototype,"files",null),o([m()],d.prototype,"selectedCroppableFormats",null),o([m()],d.prototype,"allImageFormats",null),o([c("titanium-smart-attachment-input[filled]")],d.prototype,"smartAttachment",null),o([c("md-dialog")],d.prototype,"dialog",null),d=o([r("titanium-smart-attachment-input-demo")],d);export{d as TitaniumSmartAttachmentInputDemo};
