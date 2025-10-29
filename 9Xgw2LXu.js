import{i as t,C as e,p as i,c as s,u as n,v as a,w as o,x as l,_ as d,r as c,e as h,t as r}from"./qx-Pki5z.js";let m=class extends t{#t;get text(){return this.#t}set text(t){this.#t=t}#e;get headline(){return this.#e}set headline(t){this.#e=t}#i;get dialog(){return this.#i}set dialog(t){this.#i=t}#s;listenOn(t){t.addEventListener(e.eventType,async t=>{this.#n(t)})}async handleEvent(t){this.#n(t)}#n=async t=>{this.headline=t.header,this.text=t.text,this.dialog.returnValue="",this.dialog.show();const e=await new Promise(t=>{this.#s=t});t.resolver("confirmed"===e)};static{this.styles=[i,s`
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
        @open=${t=>{n(t.target),a(t.target)}}
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
