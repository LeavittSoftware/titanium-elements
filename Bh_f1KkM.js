import{h as t,C as i,p as s,i as e,k as o,_ as n,r as a,e as d,t as l}from"./BDVm1clO.js";import"./u6TM3blr.js";import{d as r}from"./YQcTPW3M.js";import{d as h,a as c}from"./B_N55c4N.js";import"./B29NwKRo.js";import"./BwleRb8i.js";let m=class extends t{#t;get text(){return this.#t}set text(t){this.#t=t}#i;get headline(){return this.#i}set headline(t){this.#i=t}#s;get dialog(){return this.#s}set dialog(t){this.#s=t}#e;listenOn(t){t.addEventListener(i.eventType,(async t=>{this.#o(t)}))}async handleEvent(t){this.#o(t)}#o=async t=>{this.headline=t.header,this.text=t.text,this.dialog.returnValue="",this.dialog.show();const i=await new Promise((t=>{this.#e=t}));t.resolver("confirmed"===i)};static{this.styles=[s,e`
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
    `]}render(){return o`
      <md-dialog
        @open=${t=>{r(t.target),h(t.target)}}
        @close=${t=>(c(t.target),"confirmed"===t.target.returnValue?this.#e("confirmed"):this.#e("cancel"))}
      >
        <div slot="headline">${this.headline}</div>
        <p slot="content">${this.text}</p>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}>Cancel</md-text-button>
          <md-text-button @click=${()=>this.dialog.close("confirmed")}>Confirm</md-text-button>
        </div>
      </md-dialog>
    `}};n([a()],m.prototype,"text",null),n([a()],m.prototype,"headline",null),n([d("md-dialog")],m.prototype,"dialog",null),m=n([l("titanium-confirm-dialog")],m);
