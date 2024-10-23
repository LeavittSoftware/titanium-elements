import{r as t,C as i,p as e,i as s,x as a,Y as n,ai as o,aj as l,_ as d,d as h,e as c,t as r}from"./Bu8jqD9G.js";let m=class extends t{#t;get text(){return this.#t}set text(t){this.#t=t}#i;get headline(){return this.#i}set headline(t){this.#i=t}#e;get dialog(){return this.#e}set dialog(t){this.#e=t}#s;listenOn(t){t.addEventListener(i.eventType,(async t=>{this.#a(t)}))}async handleEvent(t){this.#a(t)}#a=async t=>{this.headline=t.header,this.text=t.text,this.dialog.returnValue="",this.dialog.show();const i=await new Promise((t=>{this.#s=t}));t.resolver("confirmed"===i)};static{this.styles=[e,s`
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
    `]}render(){return a`
      <md-dialog
        @open=${t=>{n(t.target),o(t.target)}}
        @close=${t=>(l(t.target),"confirmed"===t.target.returnValue?this.#s("confirmed"):this.#s("cancel"))}
      >
        <div slot="headline">${this.headline}</div>
        <p slot="content">${this.text}</p>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}>Cancel</md-text-button>
          <md-text-button @click=${()=>this.dialog.close("confirmed")}>Confirm</md-text-button>
        </div>
      </md-dialog>
    `}};d([h()],m.prototype,"text",null),d([h()],m.prototype,"headline",null),d([c("md-dialog")],m.prototype,"dialog",null),m=d([r("titanium-confirm-dialog")],m);
