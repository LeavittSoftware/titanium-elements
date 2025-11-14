import{i as t,p as i,c as e,E as o,u as n,v as a,w as s,x as r,_ as l,n as c,e as u,t as d,h as m,r as g}from"./BaOkSZ9E.js";import{S as h}from"./DTX2uC6e.js";import"./Bfdw9yPR.js";let p=class extends t{constructor(){super(...arguments),this.#t="Confirm",this.#i="Cancel",this.#e=!1,this.#o=!1,this.open=async(t,i)=>(this.headline=t,this.text=i,this.dialog.returnValue="",this.dialog.show(),await new Promise(t=>{this.#n=t}))}#a;get text(){return this.#a}set text(t){this.#a=t}#s;get headline(){return this.#s}set headline(t){this.#s=t}#t;get confirmActionText(){return this.#t}set confirmActionText(t){this.#t=t}#i;get cancelActionText(){return this.#i}set cancelActionText(t){this.#i=t}#e;get disableConfirmationAction(){return this.#e}set disableConfirmationAction(t){this.#e=t}#o;get disableCancelAction(){return this.#o}set disableCancelAction(t){this.#o=t}#r;get dialog(){return this.#r}set dialog(t){this.#r=t}#n;static{this.styles=[i,e`
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
    `]}render(){return r`
      <md-dialog
        @open=${t=>{n(t.target),a(t.target)}}
        @close=${t=>(s(t.target),"confirmed"===t.target.returnValue?this.#n("confirmed"):this.#n("cancel"))}
      >
        <div slot="headline">${this.headline}</div>
        <main slot="content" part="content-container">
          ${this.text?r`<p>${this.text}</p>`:o}
          <slot></slot>
        </main>
        <div slot="actions">
          <md-text-button ?disabled=${this.disableCancelAction} @click=${()=>this.dialog.close("cancel")}>${this.cancelActionText}</md-text-button>
          <md-filled-tonal-button ?disabled=${this.disableConfirmationAction} @click=${()=>this.dialog.close("confirmed")}
            >${this.confirmActionText}</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};l([c({type:String})],p.prototype,"text",null),l([c({type:String})],p.prototype,"headline",null),l([c({type:String,attribute:"confirm-action-text"})],p.prototype,"confirmActionText",null),l([c({type:String,attribute:"cancel-action-text"})],p.prototype,"cancelActionText",null),l([c({type:Boolean,attribute:"disable-confirmation-action"})],p.prototype,"disableConfirmationAction",null),l([c({type:Boolean,attribute:"disable-cancel-action"})],p.prototype,"disableCancelAction",null),l([u("md-dialog")],p.prototype,"dialog",null),p=l([d("titanium-confirmation-dialog")],p);let f=class extends t{#l;get result(){return this.#l}set result(t){this.#l=t}#c;get result2(){return this.#c}set result2(t){this.#c=t}#u;get result3(){return this.#u}set result3(t){this.#u=t}#d;get result4(){return this.#d}set result4(t){this.#d=t}#m;get favoriteSnack(){return this.#m}set favoriteSnack(t){this.#m=t}#g;get confirmationDialog(){return this.#g}set confirmationDialog(t){this.#g=t}#h;get confirmationDialog2(){return this.#h}set confirmationDialog2(t){this.#h=t}#p;get confirmationDialog3(){return this.#p}set confirmationDialog3(t){this.#p=t}#f;get confirmationDialog4(){return this.#f}set confirmationDialog4(t){this.#f=t}static{this.styles=[m,i,e`
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

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `]}render(){return r`
      <h1>Default</h1>
      <div>
        <p>Result: ${this.result}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async()=>{this.result=await(this.confirmationDialog?.open("Confirmation delete?","Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis."))}}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo1></titanium-confirmation-dialog>
      </div>

      <h1>Custom button text</h1>
      <div>
        <p>Result: ${this.result2}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async()=>{this.result2=await(this.confirmationDialog2?.open("Do you agree?","Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis."))}}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo2 confirmActionText="Agree" cancelActionText="Disagree"></titanium-confirmation-dialog>
      </div>

      <h1>Slot demo</h1>
      <div>
        <p>Result: ${this.result3}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async()=>{this.result3=await(this.confirmationDialog3?.open("What is your favorite color?","asf saf asdf"))}}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo3>
          <md-outlined-text-field label="What is your favorite color?"></md-outlined-text-field>
        </titanium-confirmation-dialog>
      </div>

      <h1>Required form demo</h1>
      <div>
        <p>Result: ${this.result4}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async()=>{this.favoriteSnack="",this.result4=await(this.confirmationDialog4?.open("What is your favorite snack?","asf saf asdf"))}}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo4 ?disable-confirmation-action=${!this.favoriteSnack}>
          <md-outlined-text-field
            label="Favorite snack"
            .value=${this.favoriteSnack||""}
            @input=${t=>this.favoriteSnack=t.target.value||""}
          ></md-outlined-text-field>
        </titanium-confirmation-dialog>
      </div>
    `}};l([g()],f.prototype,"result",null),l([g()],f.prototype,"result2",null),l([g()],f.prototype,"result3",null),l([g()],f.prototype,"result4",null),l([g()],f.prototype,"favoriteSnack",null),l([u("titanium-confirmation-dialog[demo1]")],f.prototype,"confirmationDialog",null),l([u("titanium-confirmation-dialog[demo2]")],f.prototype,"confirmationDialog2",null),l([u("titanium-confirmation-dialog[demo3]")],f.prototype,"confirmationDialog3",null),l([u("titanium-confirmation-dialog[demo4]")],f.prototype,"confirmationDialog4",null),f=l([d("titanium-confirmation-dialog-playground")],f);let b=class extends t{static{this.styles=[h,e``]}render(){return r`
      <story-header name="Titanium confirmation dialog" className="TitaniumConfirmationDialog"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-confirmation-dialog/project.json"
        ><titanium-confirmation-dialog-playground></titanium-confirmation-dialog-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-confirmation-dialog"></api-docs>
    `}};b=l([d("titanium-confirmation-dialog-demo")],b);export{b as TitaniumConfirmationDialogDemo};
