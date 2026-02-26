import{i as t,p as i,b as e,f as o,u as a,v as n,w as s,c as l,_ as r,n as c,e as d,t as u,r as m}from"./BkdWKSMI.js";import{S as h}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";let f=class extends t{constructor(){super(...arguments),this.#t="Confirm",this.#i="Cancel",this.#e=!1,this.#o=!1,this.open=async(t,i)=>(this.headline=t,this.text=i,this.dialog.returnValue="",this.dialog.show(),await new Promise(t=>{this.#a=t}))}#n;get text(){return this.#n}set text(t){this.#n=t}#s;get headline(){return this.#s}set headline(t){this.#s=t}#t;get confirmActionText(){return this.#t}set confirmActionText(t){this.#t=t}#i;get cancelActionText(){return this.#i}set cancelActionText(t){this.#i=t}#e;get disableConfirmationAction(){return this.#e}set disableConfirmationAction(t){this.#e=t}#o;get disableCancelAction(){return this.#o}set disableCancelAction(t){this.#o=t}#l;get dialog(){return this.#l}set dialog(t){this.#l=t}#a;static{this.styles=[i,e`
      main {
        display: grid;
        padding: 6px 24px 0 24px;
        gap: 12px;
      }

      md-dialog {
        max-width: 550px;
        max-height: calc(100vh - 24px);
      }

      b,
      strong {
        font-weight: 500;
      }
    `]}render(){return l`
      <md-dialog
        @open=${t=>{a(t.target),n(t.target)}}
        @close=${t=>(s(t.target),"confirmed"===t.target.returnValue?this.#a("confirmed"):this.#a("cancel"))}
      >
        <div slot="headline">${this.headline}</div>
        <main slot="content" part="content-container">
          ${this.text?l`<p>${this.text}</p>`:o}
          <slot></slot>
        </main>
        <div slot="actions">
          <md-text-button ?disabled=${this.disableCancelAction} @click=${()=>this.dialog.close("cancel")}>${this.cancelActionText}</md-text-button>
          <md-filled-tonal-button ?disabled=${this.disableConfirmationAction} @click=${()=>this.dialog.close("confirmed")}
            >${this.confirmActionText}</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};r([c({type:String})],f.prototype,"text",null),r([c({type:String})],f.prototype,"headline",null),r([c({type:String,attribute:"confirm-action-text"})],f.prototype,"confirmActionText",null),r([c({type:String,attribute:"cancel-action-text"})],f.prototype,"cancelActionText",null),r([c({type:Boolean,attribute:"disable-confirmation-action"})],f.prototype,"disableConfirmationAction",null),r([c({type:Boolean,attribute:"disable-cancel-action"})],f.prototype,"disableCancelAction",null),r([d("md-dialog")],f.prototype,"dialog",null),f=r([u("titanium-confirmation-dialog")],f);let g=class extends t{#r;get result(){return this.#r}set result(t){this.#r=t}#c;get result2(){return this.#c}set result2(t){this.#c=t}#d;get result3(){return this.#d}set result3(t){this.#d=t}#u;get result4(){return this.#u}set result4(t){this.#u=t}#m;get favoriteSnack(){return this.#m}set favoriteSnack(t){this.#m=t}#h;get confirmationDialog(){return this.#h}set confirmationDialog(t){this.#h=t}#f;get confirmationDialog2(){return this.#f}set confirmationDialog2(t){this.#f=t}#g;get confirmationDialog3(){return this.#g}set confirmationDialog3(t){this.#g=t}#p;get confirmationDialog4(){return this.#p}set confirmationDialog4(t){this.#p=t}static{this.styles=[h,e`
      md-filled-text-field {
        --md-filled-text-field-container-shape: 16px;

        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }
    `]}render(){return l`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium confirmation dialog" level1Href="/titanium-confirmation-dialog" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium confirmation dialog" className="TitaniumConfirmationDialog"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic confirmation dialog with default button text</p>
              <p>Result: ${this.result}</p>
              <md-filled-tonal-button
                @click=${async()=>{this.result=await(this.confirmationDialog?.open("Confirmation delete?","Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis."))}}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo1></titanium-confirmation-dialog>
            </div>

            <div>
              <h1>Custom button text</h1>
              <p>Confirmation dialog with custom confirm and cancel button text</p>
              <p>Result: ${this.result2}</p>
              <md-filled-tonal-button
                @click=${async()=>{this.result2=await(this.confirmationDialog2?.open("Do you agree?","Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis."))}}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo2 confirmActionText="Agree" cancelActionText="Disagree"></titanium-confirmation-dialog>
            </div>

            <div>
              <h1>Slot demo</h1>
              <p>Confirmation dialog with custom content in the slot</p>
              <p>Result: ${this.result3}</p>
              <md-filled-tonal-button
                @click=${async()=>{this.result3=await(this.confirmationDialog3?.open("What is your favorite color?","asf saf asdf"))}}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo3>
                <md-filled-text-field label="What is your favorite color?"></md-filled-text-field>
              </titanium-confirmation-dialog>
            </div>

            <div>
              <h1>Required form demo</h1>
              <p>Confirmation dialog with form validation that disables confirm action</p>
              <p>Result: ${this.result4}</p>
              <md-filled-tonal-button
                @click=${async()=>{this.favoriteSnack="",this.result4=await(this.confirmationDialog4?.open("What is your favorite snack?","asf saf asdf"))}}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo4 ?disable-confirmation-action=${!this.favoriteSnack}>
                <md-filled-text-field
                  label="Favorite snack"
                  .value=${this.favoriteSnack||""}
                  @input=${t=>this.favoriteSnack=t.target.value||""}
                ></md-filled-text-field>
              </titanium-confirmation-dialog>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-confirmation-dialog"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};r([m()],g.prototype,"result",null),r([m()],g.prototype,"result2",null),r([m()],g.prototype,"result3",null),r([m()],g.prototype,"result4",null),r([m()],g.prototype,"favoriteSnack",null),r([d("titanium-confirmation-dialog[demo1]")],g.prototype,"confirmationDialog",null),r([d("titanium-confirmation-dialog[demo2]")],g.prototype,"confirmationDialog2",null),r([d("titanium-confirmation-dialog[demo3]")],g.prototype,"confirmationDialog3",null),r([d("titanium-confirmation-dialog[demo4]")],g.prototype,"confirmationDialog4",null),g=r([u("titanium-confirmation-dialog-demo")],g);export{g as TitaniumConfirmationDialogDemo};
