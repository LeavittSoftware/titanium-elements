import{i as t,h as e,p as i,c as a,x as n,_ as s,r as m,e as r,t as l}from"./BaOkSZ9E.js";import{S as u}from"./DTX2uC6e.js";import"./Bfdw9yPR.js";let p=class extends t{constructor(){super(...arguments),this.getFilesResult=null,this.hasChanges=!1}#t;get getFilesInput(){return this.#t}set getFilesInput(t){this.#t=t}#e;get preselectFilesInput(){return this.#e}set preselectFilesInput(t){this.#e=t}#i;get preselectDisabledFilesInput(){return this.#i}set preselectDisabledFilesInput(t){this.#i=t}#a;get resetInput(){return this.#a}set resetInput(t){this.#a=t}static{this.styles=[e,i,a`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      div[vertical] {
        flex-direction: column;
      }

      div[vertical] p {
        margin-bottom: 12px;
      }

      div[vertical] p > span {
        color: #666;
        font-size: 11px;
      }
    `]}firstUpdated(){this.preselectFilesInput.setFiles({fileName:"chrome.png",previewSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAB+FBMVEUAAAA/mUPidDHiLi5Cn0XkNTPmeUrkdUg/m0Q0pEfcpSbwaVdKskg+lUP4zA/iLi3msSHkOjVAmETdJSjtYFE/lkPnRj3sWUs8kkLeqCVIq0fxvhXqUkbVmSjwa1n1yBLepyX1xxP0xRXqUkboST9KukpHpUbuvRrzrhF/ljbwaljuZFM4jELaoSdLtElJrUj1xxP6zwzfqSU4i0HYnydMtUlIqUfywxb60AxZqEXaoifgMCXptR9MtklHpEY2iUHWnSjvvRr70QujkC+pUC/90glMuEnlOjVMt0j70QriLS1LtEnnRj3qUUXfIidOjsxAhcZFo0bjNDH0xxNLr0dIrUdmntVTkMoyfL8jcLBRuErhJyrgKyb4zA/5zg3tYFBBmUTmQTnhMinruBzvvhnxwxZ/st+Ktt5zp9hqota2vtK6y9FemNBblc9HiMiTtMbFtsM6gcPV2r6dwroseLrMrbQrdLGdyKoobKbo3Zh+ynrgVllZulTsXE3rV0pIqUf42UVUo0JyjEHoS0HmsiHRGR/lmRz/1hjqnxjvpRWfwtOhusaz0LRGf7FEfbDVmqHXlJeW0pbXq5bec3fX0nTnzmuJuWvhoFFhm0FtrziBsjaAaDCYWC+uSi6jQS3FsSfLJiTirCOkuCG1KiG+wSC+GBvgyhTszQ64Z77KAAAARXRSTlMAIQRDLyUgCwsE6ebm5ubg2dLR0byXl4FDQzU1NDEuLSUgC+vr6urq6ubb29vb2tra2tG8vLu7u7uXl5eXgYGBgYGBLiUALabIAAABsElEQVQoz12S9VPjQBxHt8VaOA6HE+AOzv1wd7pJk5I2adpCC7RUcHd3d3fXf5PvLkxheD++z+yb7GSRlwD/+Hj/APQCZWxM5M+goF+RMbHK594v+tPoiN1uHxkt+xzt9+R9wnRTZZQpXQ0T5uP1IQxToyOAZiQu5HEpjeA4SWIoksRxNiGC1tRZJ4LNxgHgnU5nJZBDvuDdl8lzQRBsQ+s9PZt7s7Pz8wsL39/DkIfZ4xlB2Gqsq62ta9oxVlVrNZpihFRpGO9fzQw1ms0NDWZz07iGkJmIFH8xxkc3a/WWlubmFkv9AB2SEpDvKxbjidN2faseaNV3zoHXvv7wMODJdkOHAegweAfFPx4G67KluxzottCU9n8CUqXzcIQdXOytAHqXxomvykhEKN9EFutG22p//0rbNvHVxiJywa8yS2KDfV1dfbu31H8jF1RHiTKtWYeHxUvq3bn0pyjCRaiRU6aDO+gb3aEfEeVNsDgm8zzLy9egPa7Qt8TSJdwhjplk06HH43ZNJ3s91KKCHQ5x4sw1fRGYDZ0n1L4FKb9/BP5JLYxToheoFCVxz57PPS8UhhEpLBVeAAAAAElFTkSuQmCC"}),this.preselectDisabledFilesInput.setFiles({fileName:"chrome.png",previewSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAB+FBMVEUAAAA/mUPidDHiLi5Cn0XkNTPmeUrkdUg/m0Q0pEfcpSbwaVdKskg+lUP4zA/iLi3msSHkOjVAmETdJSjtYFE/lkPnRj3sWUs8kkLeqCVIq0fxvhXqUkbVmSjwa1n1yBLepyX1xxP0xRXqUkboST9KukpHpUbuvRrzrhF/ljbwaljuZFM4jELaoSdLtElJrUj1xxP6zwzfqSU4i0HYnydMtUlIqUfywxb60AxZqEXaoifgMCXptR9MtklHpEY2iUHWnSjvvRr70QujkC+pUC/90glMuEnlOjVMt0j70QriLS1LtEnnRj3qUUXfIidOjsxAhcZFo0bjNDH0xxNLr0dIrUdmntVTkMoyfL8jcLBRuErhJyrgKyb4zA/5zg3tYFBBmUTmQTnhMinruBzvvhnxwxZ/st+Ktt5zp9hqota2vtK6y9FemNBblc9HiMiTtMbFtsM6gcPV2r6dwroseLrMrbQrdLGdyKoobKbo3Zh+ynrgVllZulTsXE3rV0pIqUf42UVUo0JyjEHoS0HmsiHRGR/lmRz/1hjqnxjvpRWfwtOhusaz0LRGf7FEfbDVmqHXlJeW0pbXq5bec3fX0nTnzmuJuWvhoFFhm0FtrziBsjaAaDCYWC+uSi6jQS3FsSfLJiTirCOkuCG1KiG+wSC+GBvgyhTszQ64Z77KAAAARXRSTlMAIQRDLyUgCwsE6ebm5ubg2dLR0byXl4FDQzU1NDEuLSUgC+vr6urq6ubb29vb2tra2tG8vLu7u7uXl5eXgYGBgYGBLiUALabIAAABsElEQVQoz12S9VPjQBxHt8VaOA6HE+AOzv1wd7pJk5I2adpCC7RUcHd3d3fXf5PvLkxheD++z+yb7GSRlwD/+Hj/APQCZWxM5M+goF+RMbHK594v+tPoiN1uHxkt+xzt9+R9wnRTZZQpXQ0T5uP1IQxToyOAZiQu5HEpjeA4SWIoksRxNiGC1tRZJ4LNxgHgnU5nJZBDvuDdl8lzQRBsQ+s9PZt7s7Pz8wsL39/DkIfZ4xlB2Gqsq62ta9oxVlVrNZpihFRpGO9fzQw1ms0NDWZz07iGkJmIFH8xxkc3a/WWlubmFkv9AB2SEpDvKxbjidN2faseaNV3zoHXvv7wMODJdkOHAegweAfFPx4G67KluxzottCU9n8CUqXzcIQdXOytAHqXxomvykhEKN9EFutG22p//0rbNvHVxiJywa8yS2KDfV1dfbu31H8jF1RHiTKtWYeHxUvq3bn0pyjCRaiRU6aDO+gb3aEfEeVNsDgm8zzLy9egPa7Qt8TSJdwhjplk06HH43ZNJ3s91KKCHQ5x4sw1fRGYDZ0n1L4FKb9/BP5JLYxToheoFCVxz57PPS8UhhEpLBVeAAAAAElFTkSuQmCC"})}render(){return n`
      <h1>Default</h1>
      <p>Attribute examples</p>
      <div>
        <titanium-smart-attachment-input></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label="Multiple" multiple placeholder="Select Files"></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label="Required" required></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label="Disabled" disabled></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label=".pdf or .svg only" accept=".pdf,.svg"></titanium-smart-attachment-input>
        <titanium-smart-attachment-input
          label="Configure text"
          noItemsText="No certificate"
          addButtonLabel="Add certificate"
          accept=".pdf"
        ></titanium-smart-attachment-input>
        <titanium-smart-attachment-input
          label="Prevent cropping SVG or GIFs"
          .croppableImageFormats=${["png"]}
          accept=".svg,.png,.gif"
          multiple
        ></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label="supporting text" supportingText="Click the add button to get started"></titanium-smart-attachment-input>
      </div>

      <h1>Filled</h1>
      <p>Example with filled variant</p>
      <div>
        <titanium-smart-attachment-input filled></titanium-smart-attachment-input>
      </div>

      <h1>Get files</h1>
      <p>Demonstrates results of calling getFiles()</p>
      <div>
        <titanium-smart-attachment-input get-files multiple placeholder="Select Files"></titanium-smart-attachment-input>
        <md-text-button @click=${()=>this.getFilesResult=JSON.stringify(this.getFilesInput.getFiles())}>GetFiles()</md-text-button>
        <span style="overflow-y: auto">${this.getFilesResult}</span>
      </div>

      <h1>Pre-select</h1>
      <p>Populate input with pre selected attachments (using setFiles() in firstUpdated)</p>
      <div>
        <titanium-smart-attachment-input multiple placeholder="Select Files" preselect></titanium-smart-attachment-input>
        <titanium-smart-attachment-input multiple placeholder="Select Files" preselect-disabled disabled></titanium-smart-attachment-input>
      </div>

      <h1>Has changes</h1>
      <p>Currently ${this.hasChanges?"has changes":"has no changes"}</p>
      <div>
        <titanium-smart-attachment-input @change=${t=>this.hasChanges=t.target.hasChanges()}></titanium-smart-attachment-input>
      </div>

      <h1>Validate and Reset</h1>
      <p>Reset the input</p>
      <div>
        <titanium-smart-attachment-input required reset></titanium-smart-attachment-input>
        <md-text-button @click=${()=>this.resetInput.reportValidity()}>reportValidity()</md-text-button>
        <md-text-button @click=${()=>alert(this.resetInput.checkValidity())}>checkValidity()</md-text-button>
        <md-text-button @click=${()=>this.resetInput.reset()}>Reset()</md-text-button>
      </div>

      <h1>Confirm delete</h1>
      <p>Confirmation modal on delete request</p>
      <div>
        <titanium-smart-attachment-input
          label="Ducks"
          confirmDelete
          confirmDeleteHeader="Confirm delete"
          confirmDeleteText="Are you sure you would like to delete this duck?"
        ></titanium-smart-attachment-input>
      </div>

      <h1>Crop and save dialog options</h1>
      <p>Change how the cropper behaves</p>
      <div>
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
        ></titanium-smart-attachment-input>
      </div>
    `}};s([m()],p.prototype,"getFilesResult",void 0),s([m()],p.prototype,"hasChanges",void 0),s([r("titanium-smart-attachment-input[get-files]")],p.prototype,"getFilesInput",null),s([r("titanium-smart-attachment-input[preselect]")],p.prototype,"preselectFilesInput",null),s([r("titanium-smart-attachment-input[preselect-disabled]")],p.prototype,"preselectDisabledFilesInput",null),s([r("titanium-smart-attachment-input[reset]")],p.prototype,"resetInput",null),p=s([l("titanium-smart-attachment-input-playground")],p);let o=class extends t{static{this.styles=[u,a``]}render(){return n`
      <story-header name="Titanium Smart Attachment Input" className="TitaniumSmartAttachmentInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-smart-attachment-input/project.json"
        ><titanium-smart-attachment-input-playground></titanium-smart-attachment-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-smart-attachment-input"></api-docs>
    `}};o=s([l("titanium-smart-attachment-input-demo")],o);export{o as TitaniumSmartAttachmentInputDemo};
