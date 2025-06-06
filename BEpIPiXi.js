import{i as t,C as i,p as e,c as s,Y as a,ai as n,aj as o,x as l,_ as d,r as c,e as h,t as r}from"./5fmKNdlA.js";let m=class extends t{#t;get text(){return this.#t}set text(t){this.#t=t}#i;get headline(){return this.#i}set headline(t){this.#i=t}#e;get dialog(){return this.#e}set dialog(t){this.#e=t}#s;listenOn(t){t.addEventListener(i.eventType,(async t=>{this.#a(t)}))}async handleEvent(t){this.#a(t)}#a=async t=>{this.headline=t.header,this.text=t.text,this.dialog.returnValue="",this.dialog.show();const i=await new Promise((t=>{this.#s=t}));t.resolver("confirmed"===i)};static{this.styles=[e,s`
      p {
        margin: 6px 24px 0 24px;
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
        @close=${t=>(o(t.target),"confirmed"===t.target.returnValue?this.#s("confirmed"):this.#s("cancel"))}
      >
        <div slot="headline">${this.headline}</div>
        <p slot="content">${this.text}</p>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}>Cancel</md-text-button>
          <md-text-button @click=${()=>this.dialog.close("confirmed")}>Confirm</md-text-button>
        </div>
      </md-dialog>
    `}};d([c()],m.prototype,"text",null),d([c()],m.prototype,"headline",null),d([h("md-dialog")],m.prototype,"dialog",null),m=d([r("titanium-confirm-dialog")],m);
