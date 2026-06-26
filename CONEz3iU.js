import{ap as t,b as i,_ as e,n as l,t as n,i as u,c as a,e as o}from"./CdKAnjTr.js";import{S as d}from"./Dgl4svbZ.js";import"./nKzCDYkW.js";import"./DljEh-nS.js";let s=class extends t{constructor(){super(...arguments),this.autocomplete="off",this.spellcheck=!1,this.label="YouTube video key",this.pattern="^.{11}$",this.#t=null}#t;connectedCallback(){if(super.connectedCallback(),!this.querySelector('md-icon[slot="leading-icon"]')){const t=document.createElement("md-icon");t.slot="leading-icon",t.textContent="youtube_activity",this.appendChild(t)}}updated(t){if(super.updated(t),t.has("value")){const t=this.#i(this.value);t!==this.value&&(this.value=t),this.#e()}}#e(){this.value&&11===this.value.length?(this.#t||(this.#t=document.createElement("img"),this.#t.slot="trailing-icon",this.#t.style.maxHeight="42px",this.#t.style.borderRadius="8px",this.#t.style.position="relative",this.#t.style.right="12px",this.appendChild(this.#t)),this.#t.src=`https://img.youtube.com/vi/${this.value}/default.jpg`):this.#t&&(this.#t.remove(),this.#t=null)}reset(){super.reset(),this.value="",this.#t&&(this.#t.remove(),this.#t=null)}#i(t){const i=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/),e=!(!i||11!==i[7].length)&&i[7];return e||t}static{this.styles=[...Array.isArray(t.styles)?t.styles:[t.styles],i`
      :host {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }
    `]}};e([l({type:String})],s.prototype,"autocomplete",void 0),e([l({type:Boolean})],s.prototype,"spellcheck",void 0),e([l({type:String})],s.prototype,"label",void 0),e([l({type:String})],s.prototype,"pattern",void 0),s=e([n("titanium-filled-youtube-input")],s);let p=class extends u{#l;get filledInput(){return this.#l}set filledInput(t){this.#l=t}static{this.styles=[d,i`
      titanium-filled-youtube-input {
        width: 100%;
        margin-bottom: 24px;
      }
    `]}render(){return a`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium youtube input" level1Href="/titanium-youtube-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium filled youtube input" className="TitaniumFilledYouTubeInput"></story-header>

            <div>
              <h1>Filled youtube input</h1>
              <p>YouTube video input with URL validation</p>

              <titanium-filled-youtube-input
                required
                label="Video"
                value="SYmmXDTHx6Q"
                @input=${t=>console.log(t.target.value)}
              ></titanium-filled-youtube-input>
              <br />

              <section buttons>
                <md-filled-tonal-button
                  @click=${()=>{this.filledInput.reset()}}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.filledInput.focus()}}
                  >Focus</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.filledInput.reportValidity()}}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled YouTube input</p>
              <titanium-filled-youtube-input disabled label="Video" value="SYmmXDTHx6Q"></titanium-filled-youtube-input>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-youtube-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};e([o("titanium-filled-youtube-input[required]")],p.prototype,"filledInput",null),p=e([n("titanium-youtube-input-demo")],p);export{p as TitaniumYoutubeInputDemo};
