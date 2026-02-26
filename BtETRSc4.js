import{i as t,p as s,b as e,u as i,v as n,w as o,c as a,_ as l,r as c,e as d,t as h}from"./BkdWKSMI.js";class r extends Event{static{this.eventType="confirm-dialog-open"}constructor(t,s){super(r.eventType,{bubbles:!0,composed:!0}),this.header=t,this.text=s,this.dialogResult=new Promise(t=>{this.resolver=t})}}let m=class extends t{#t;get text(){return this.#t}set text(t){this.#t=t}#s;get headline(){return this.#s}set headline(t){this.#s=t}#e;get dialog(){return this.#e}set dialog(t){this.#e=t}#i;listenOn(t){t.addEventListener(r.eventType,async t=>{this.#n(t)})}async handleEvent(t){this.#n(t)}#n=async t=>{this.headline=t.header,this.text=t.text,this.dialog.returnValue="",this.dialog.show();const s=await new Promise(t=>{this.#i=t});t.resolver("confirmed"===s)};static{this.styles=[s,e`
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
        @open=${t=>{i(t.target),n(t.target)}}
        @close=${t=>(o(t.target),"confirmed"===t.target.returnValue?this.#i("confirmed"):this.#i("cancel"))}
      >
        <div slot="headline">${this.headline}</div>
        <p slot="content">${this.text}</p>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}>Cancel</md-text-button>
          <md-text-button @click=${()=>this.dialog.close("confirmed")}>Confirm</md-text-button>
        </div>
      </md-dialog>
    `}};l([c()],m.prototype,"text",null),l([c()],m.prototype,"headline",null),l([d("md-dialog")],m.prototype,"dialog",null),m=l([h("titanium-confirm-dialog")],m);var g=Object.freeze({__proto__:null});export{r as C,g as c};
