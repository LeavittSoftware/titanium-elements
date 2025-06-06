import{i as e,h as i,p as t,c as o,x as a,_ as n,t as s}from"./5fmKNdlA.js";import{S as d}from"./CR4PuYl3.js";import"./BGQXy7wM.js";let l=class extends e{static{this.styles=[i,t,o`
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
    `]}render(){return a`
      <h1>Demo</h1>
      <p>A promise driven pending-state-events loading scrim</p>
      <div>
        <titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
        <md-text-button
          @click=${e=>{e.preventDefault();const i=new Promise((e=>setTimeout(e,50))),t=new Promise((e=>setTimeout(e,3e3)));window.dispatchEvent(new CustomEvent("pending-state",{composed:!0,bubbles:!0,detail:{promise:i.then((()=>console.log("Done 1")))}})),window.dispatchEvent(new CustomEvent("pending-state",{composed:!0,bubbles:!0,detail:{promise:t.then((()=>console.log("Done 2")))}}))}}
          >Open loading veil for 2 seconds
        </md-text-button>
      </div>
    `}};l=n([s("titanium-full-page-loading-indicator-playground")],l);let r=class extends e{static{this.styles=[d,o``]}render(){return a`
      <story-header name="Titanium full page loading indicator" className="TitaniumFullPageLoadingIndicator"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-full-page-loading-indicator/project.json"
        ><titanium-full-page-loading-indicator-playground></titanium-full-page-loading-indicator-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-full-page-loading-indicator"></api-docs>
    `}};r=n([s("titanium-full-page-loading-indicator-demo")],r);export{r as TitaniumFullPageLoadingIndicatorDemo};
