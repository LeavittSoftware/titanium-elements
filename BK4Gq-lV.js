import{i as t,P as i,b as e,c as n,_ as o,r as a,t as s}from"./BkdWKSMI.js";import{S as r}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./wYCSt_jS.js";let l=class extends t{#t;get open(){return this.#t}set open(t){this.#t=t}#i;#e;#n=75;#o=350;#a;#s=0;firstUpdated(){this.popover="manual",this.addEventListener("toggle",t=>this.open="open"===t.newState),window.addEventListener(i.eventType,async t=>{this.#r(),this.#s++;try{await t.detail.promise}catch{}finally{this.#s--,0===this.#s&&this.#l()}})}#r(){window.clearTimeout(this.#i),window.clearTimeout(this.#e),this.#i=window.setTimeout(()=>{this.#a=performance.now(),this.showPopover?this.showPopover():this.open=!0,this.style.display="block"},this.#n)}#l(){window.clearTimeout(this.#i);const t=performance.now()-this.#a,i=Math.max(this.#o-t,0);this.#e=window.setTimeout(()=>{this.hidePopover?this.hidePopover():this.open=!1,this.style.display="none"},i)}static{this.styles=e`
    :host {
      width: 100%;
      height: 100%;
      max-width: 100vw;
      max-height: 100vh;

      border: 0;
      inset: unset;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: 0;
      padding: 0;
      background: transparent;
    }

    :host::backdrop {
      background-color: var(--md-sys-color-scrim, #000);
      backdrop-filter: blur(6px);
    }

    :host(:popover-open)::backdrop {
      opacity: 0.32;
    }

    md-linear-progress {
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      left: 0;
    }
  `}render(){return n` <md-linear-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-linear-progress> `}};o([a()],l.prototype,"open",null),l=o([s("titanium-full-page-loading-indicator")],l);let d=class extends t{static{this.styles=[r]}render(){return n`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium full page loading indicator" level1Href="/titanium-full-page-loading-indicator" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium full page loading indicator" className="TitaniumFullPageLoadingIndicator"></story-header>
            <div>
              <h1>Demo</h1>
              <p>A promise driven pending-state-events loading scrim</p>
              <titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
              <md-filled-tonal-button
                @click=${t=>{t.preventDefault();const i=new Promise(t=>setTimeout(t,50)),e=new Promise(t=>setTimeout(t,3e3));window.dispatchEvent(new CustomEvent("pending-state",{composed:!0,bubbles:!0,detail:{promise:i.then(()=>console.log("Done 1"))}})),window.dispatchEvent(new CustomEvent("pending-state",{composed:!0,bubbles:!0,detail:{promise:e.then(()=>console.log("Done 2"))}}))}}
                >Open loading veil for 2 seconds</md-filled-tonal-button
              >
            </div>
            <api-docs src="./custom-elements.json" selected="titanium-full-page-loading-indicator"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};d=o([s("titanium-full-page-loading-indicator-demo")],d);export{d as TitaniumFullPageLoadingIndicatorDemo};
