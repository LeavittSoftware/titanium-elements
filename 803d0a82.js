import{s as t,C as i,p as e,i as s,x as o,_ as n,r as a,e as d,t as l}from"./f43924bd.js";import"./feb6c099.js";import{d as r}from"./791b1dff.js";import{d as h,a as c}from"./85c22fe7.js";import"./68491de3.js";import"./f42dd0a8.js";let m=class extends t{#t;get text(){return this.#t}set text(t){this.#t=t}#i;get headline(){return this.#i}set headline(t){this.#i=t}#e;get dialog(){return this.#e}set dialog(t){this.#e=t}#s;listenOn(t){t.addEventListener(i.eventType,(async t=>{this.#o(t)}))}async handleEvent(t){this.#o(t)}#o=async t=>{this.headline=t.header,this.text=t.text,this.dialog.returnValue="",this.dialog.show();const i=await new Promise((t=>{this.#s=t}));t.resolver("confirmed"===i)};static{this.styles=[e,s`
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
        @close=${t=>(c(t.target),"confirmed"===t.target.returnValue?this.#s("confirmed"):this.#s("cancel"))}
      >
        <div slot="headline">${this.headline}</div>
        <p slot="content">${this.text}</p>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}>Cancel</md-text-button>
          <md-text-button @click=${()=>this.dialog.close("confirmed")}>Confirm</md-text-button>
        </div>
      </md-dialog>
    `}};n([a()],m.prototype,"text",null),n([a()],m.prototype,"headline",null),n([d("md-dialog")],m.prototype,"dialog",null),m=n([l("titanium-confirm-dialog")],m);
