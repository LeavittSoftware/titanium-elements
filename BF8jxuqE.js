import{i as t,P as i,c as e,x as s,_ as n,n as o,t as r,e as a}from"./BRwII10n.js";import"./C9unvfR0.js";let c=class extends t{#t;get pendingStateElement(){return this.#t}set pendingStateElement(t){this.#t=t}#i;get open(){return this.#i}set open(t){this.#i=t}#e;get closed(){return this.#e}set closed(t){this.#e=t}#s;#n;#o=75;#r=400;#a;#c=0;firstUpdated(){(this.pendingStateElement??this).addEventListener(i.eventType,async t=>{t.stopPropagation(),this.#l(),this.#c++;try{await t.detail.promise}catch{}finally{this.#c--,0===this.#c&&this.#h()}})}#l(){window.clearTimeout(this.#s),window.clearTimeout(this.#n),this.#s=window.setTimeout(()=>{this.#a=performance.now(),this.parentElement?.setAttribute("inert",""),this.open=!0,this.closed=!1},this.#o)}#h(){window.clearTimeout(this.#s);const t=performance.now()-this.#a,i=Math.max(this.#r-t,0);this.#n=window.setTimeout(()=>{this.open=!1,this.closed=!0,this.parentElement?.removeAttribute("inert")},i)}static{this.styles=e`
    :host {
      display: none;
      opacity: 0;

      position: absolute;
      inset: 0;

      z-index: 1000;
      background-color: rgb(from var(--md-sys-color-scrim, #000) r g b / 0.52);
      backdrop-filter: blur(2px);

      transition:
        display 0.2s ease,
        opacity 0.2s ease;
      transition-behavior: allow-discrete;
    }

    :host([open]) {
      display: grid;
      opacity: 1;

      @starting-style {
        opacity: 0;
      }
    }

    md-circular-progress {
      place-self: center;
    }
  `}render(){return s` <md-circular-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-circular-progress>`}};n([o({type:Object})],c.prototype,"pendingStateElement",null),n([o({type:Boolean,reflect:!0})],c.prototype,"open",null),n([o({type:Boolean,reflect:!0})],c.prototype,"closed",null),c=n([r("titanium-circle-loading-indicator")],c);let l=class extends Event{constructor(t,i,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=i,this.callback=e,this.subscribe=s??!1}};class h{constructor(t,i,e,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,i)=>{this.unsubscribe&&(this.unsubscribe!==i&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,i)),this.unsubscribe=i},this.host=t,void 0!==i.context){const t=i;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=i,this.callback=e,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new l(this.context,this.host,this.t,this.subscribe))}}let d=class extends t{#d;get scrollContainer(){return this.#d}set scrollContainer(t){this.#d=t}#t;get pendingStateElement(){return this.#t}set pendingStateElement(t){this.#t=t}static{this.styles=[e`
      :host {
        display: grid;
        border-radius: 28px;
        background-color: var(--md-sys-color-surface-container-lowest);
        height: calc(100dvh - (64px + 12px));
        box-sizing: border-box;
        overflow: hidden;

        position: relative;

        margin-right: 16px;
      }

      :host([main-menu-position='drawer']) {
        border-radius: 0;
        height: calc(100dvh - (54px + 12px));
        margin-right: 0;
      }

      scroll-container {
        display: grid;
        overflow-y: auto;

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        border-radius: 28px;
      }
    `]}render(){return s`
      <titanium-circle-loading-indicator part="loading-indicator" .pendingStateElement=${this.pendingStateElement}></titanium-circle-loading-indicator>
      <scroll-container part="scroll-container"><slot></slot></scroll-container>
    `}};n([a("scroll-container")],d.prototype,"scrollContainer",null),n([o({type:Object})],d.prototype,"pendingStateElement",null),n([function({context:t,subscribe:i}){return(e,s)=>{"object"==typeof s?s.addInitializer(function(){new h(this,{context:t,callback:t=>{e.set.call(this,t)},subscribe:i})}):e.constructor.addInitializer(e=>{new h(e,{context:t,callback:t=>{e[s]=t},subscribe:i})})}}({context:"mainMenuPositionContext",subscribe:!0}),o({type:String,reflect:!0,attribute:"main-menu-position"})],d.prototype,"mainMenuPosition",void 0),d=n([r("leavitt-app-main-content-container")],d);
