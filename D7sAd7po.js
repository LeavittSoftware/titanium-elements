import{i as t,p as i,b as e,A as n,v as s,w as a,x as o,c,_ as l,n as r,e as d,t as h}from"./CyOMU7b-.js";let g=class extends t{constructor(){super(...arguments),this.#t="",this.#i="",this.#e="Confirm",this.#n="Cancel",this.#s=!1,this.#a=!1,this.open=async(t,i)=>(this.headline=t,this.text=i,this.dialog.returnValue="",this.dialog.show(),await new Promise(t=>{this.#o=t}))}#t;get text(){return this.#t}set text(t){this.#t=t}#i;get headline(){return this.#i}set headline(t){this.#i=t}#e;get confirmActionText(){return this.#e}set confirmActionText(t){this.#e=t}#n;get cancelActionText(){return this.#n}set cancelActionText(t){this.#n=t}#s;get disableConfirmationAction(){return this.#s}set disableConfirmationAction(t){this.#s=t}#a;get disableCancelAction(){return this.#a}set disableCancelAction(t){this.#a=t}#c;get dialog(){return this.#c}set dialog(t){this.#c=t}#o;static{this.styles=[i,e`
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
    `]}render(){return c`
      <md-dialog
        @open=${t=>{s(t.target),a(t.target)}}
        @close=${t=>(o(t.target),"confirmed"===t.target.returnValue?this.#o("confirmed"):this.#o("cancel"))}
      >
        <div slot="headline">${this.headline}</div>
        <main slot="content" part="content-container">
          ${this.text?c`<p>${this.text}</p>`:n}
          <slot></slot>
        </main>
        <div slot="actions">
          <md-text-button ?disabled=${this.disableCancelAction} @click=${()=>this.dialog.close("cancel")}>${this.cancelActionText}</md-text-button>
          <md-filled-tonal-button ?disabled=${this.disableConfirmationAction} @click=${()=>this.dialog.close("confirmed")}
            >${this.confirmActionText}</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};l([r({type:String})],g.prototype,"text",null),l([r({type:String})],g.prototype,"headline",null),l([r({type:String,attribute:"confirm-action-text"})],g.prototype,"confirmActionText",null),l([r({type:String,attribute:"cancel-action-text"})],g.prototype,"cancelActionText",null),l([r({type:Boolean,attribute:"disable-confirmation-action"})],g.prototype,"disableConfirmationAction",null),l([r({type:Boolean,attribute:"disable-cancel-action"})],g.prototype,"disableCancelAction",null),l([d("md-dialog")],g.prototype,"dialog",null),g=l([h("titanium-confirmation-dialog")],g);
