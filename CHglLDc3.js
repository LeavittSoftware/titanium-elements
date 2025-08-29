import{i as t,p as i,c as o,E as e,Z as n,ak as a,al as s,x as r,_ as l,n as u,e as c,t as d,h as m,r as g}from"./Dis8517n.js";import{S as p}from"./DMe0zOFc.js";import"./viUsCm5E.js";import"./C5yNkNgZ.js";let h=class extends t{constructor(){super(...arguments),this.#t="Confirm",this.#i="Cancel",this.open=async(t,i)=>(this.headline=t,this.text=i,this.dialog.returnValue="",this.dialog.show(),await new Promise(t=>{this.#o=t}))}#e;get text(){return this.#e}set text(t){this.#e=t}#n;get headline(){return this.#n}set headline(t){this.#n=t}#t;get confirmActionText(){return this.#t}set confirmActionText(t){this.#t=t}#i;get cancelActionText(){return this.#i}set cancelActionText(t){this.#i=t}#a;get dialog(){return this.#a}set dialog(t){this.#a=t}#o;static{this.styles=[i,o`
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
        @close=${t=>(s(t.target),"confirmed"===t.target.returnValue?this.#o("confirmed"):this.#o("cancel"))}
      >
        <div slot="headline">${this.headline}</div>
        <main slot="content" part="content-container">
          ${this.text?r`<p>${this.text}</p>`:e}
          <slot></slot>
        </main>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}>${this.cancelActionText}</md-text-button>
          <md-filled-tonal-button @click=${()=>this.dialog.close("confirmed")}>${this.confirmActionText}</md-filled-tonal-button>
        </div>
      </md-dialog>
    `}};l([u({type:String})],h.prototype,"text",null),l([u({type:String})],h.prototype,"headline",null),l([u({type:String,attribute:"confirm-action-text"})],h.prototype,"confirmActionText",null),l([u({type:String,attribute:"cancel-action-text"})],h.prototype,"cancelActionText",null),l([c("md-dialog")],h.prototype,"dialog",null),h=l([d("titanium-confirmation-dialog")],h);let f=class extends t{#s;get result(){return this.#s}set result(t){this.#s=t}#r;get result2(){return this.#r}set result2(t){this.#r=t}#l;get result3(){return this.#l}set result3(t){this.#l=t}#u;get confirmationDialog(){return this.#u}set confirmationDialog(t){this.#u=t}#c;get confirmationDialog2(){return this.#c}set confirmationDialog2(t){this.#c=t}#d;get confirmationDialog3(){return this.#d}set confirmationDialog3(t){this.#d=t}static{this.styles=[m,i,o`
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
    `}};l([g()],f.prototype,"result",null),l([g()],f.prototype,"result2",null),l([g()],f.prototype,"result3",null),l([c("titanium-confirmation-dialog[demo1]")],f.prototype,"confirmationDialog",null),l([c("titanium-confirmation-dialog[demo2]")],f.prototype,"confirmationDialog2",null),l([c("titanium-confirmation-dialog[demo3]")],f.prototype,"confirmationDialog3",null),f=l([d("titanium-confirmation-dialog-playground")],f);let x=class extends t{static{this.styles=[p,o``]}render(){return r`
      <story-header name="Titanium confirmation dialog" className="TitaniumConfirmationDialog"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-confirmation-dialog/project.json"
        ><titanium-confirmation-dialog-playground></titanium-confirmation-dialog-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-confirmation-dialog"></api-docs>
    `}};x=l([d("titanium-confirmation-dialog-demo")],x);export{x as TitaniumConfirmationDialogDemo};
