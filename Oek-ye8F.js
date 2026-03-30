import{b as t,f as i,c as e,_ as u,n,t as l,at as o,i as s,e as a}from"./k6PMp29N.js";import{S as d}from"./DwVP1OXS.js";import"./T802Qb7b.js";import"./BrxQwxGL.js";import{E as p}from"./BmR4DXyS.js";let r=class extends p{#t="off";get autocomplete(){return this.#t}set autocomplete(t){this.#t=t}#i=!1;get spellcheck(){return this.#i}set spellcheck(t){this.#i=t}firstUpdated(){this.label=this.label||"YouTube video key",this.pattern="^.{11}$"}updated(t){t.has("value")&&(this.value=this.#e(this.input.value))}#e(t){const i=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/),e=!(!i||11!==i[7].length)&&i[7];return e||t}async reset(){super.reset(),this.value=""}static{this.styles=[t`
      img {
        max-height: 42px;
        margin-right: 22px;
        border-radius: 8px;
      }

      md-outlined-text-field {
        width: 100%;
      }
    `]}renderMainSlot(){return e`
      <md-icon slot="leading-icon"> youtube_activity </md-icon>
      ${this.value&&11===(this.value?.length||0)?e`<img slot="trailing-icon" src="https://img.youtube.com/vi/${this.value}/default.jpg" />`:i}
    `}};u([n({reflect:!0,type:String})],r.prototype,"autocomplete",null),u([n({reflect:!0,type:Boolean})],r.prototype,"spellcheck",null),r=u([l("titanium-youtube-input")],r);let c=class extends o{constructor(){super(...arguments),this.autocomplete="off",this.spellcheck=!1,this.label="YouTube video key",this.pattern="^.{11}$",this.#u=null}#u;connectedCallback(){if(super.connectedCallback(),!this.querySelector('md-icon[slot="leading-icon"]')){const t=document.createElement("md-icon");t.slot="leading-icon",t.textContent="youtube_activity",this.appendChild(t)}}updated(t){if(super.updated(t),t.has("value")){const t=this.#e(this.value);t!==this.value&&(this.value=t),this.#n()}}#n(){this.value&&11===this.value.length?(this.#u||(this.#u=document.createElement("img"),this.#u.slot="trailing-icon",this.#u.style.maxHeight="42px",this.#u.style.borderRadius="8px",this.#u.style.position="relative",this.#u.style.right="12px",this.appendChild(this.#u)),this.#u.src=`https://img.youtube.com/vi/${this.value}/default.jpg`):this.#u&&(this.#u.remove(),this.#u=null)}reset(){super.reset(),this.value="",this.#u&&(this.#u.remove(),this.#u=null)}#e(t){const i=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/),e=!(!i||11!==i[7].length)&&i[7];return e||t}static{this.styles=[...Array.isArray(o.styles)?o.styles:[o.styles],t`
      :host {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }
    `]}};u([n({type:String})],c.prototype,"autocomplete",void 0),u([n({type:Boolean})],c.prototype,"spellcheck",void 0),u([n({type:String})],c.prototype,"label",void 0),u([n({type:String})],c.prototype,"pattern",void 0),c=u([l("titanium-filled-youtube-input")],c);let h=class extends s{#l;get filledInput(){return this.#l}set filledInput(t){this.#l=t}#o;get outlinedInput(){return this.#o}set outlinedInput(t){this.#o=t}static{this.styles=[d,t`
      titanium-filled-youtube-input,
      titanium-youtube-input {
        width: 100%;
        margin-bottom: 24px;
      }
    `]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium youtube input" level1Href="/titanium-youtube-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-youtube-input</kbd> is deprecated. Use <kbd>titanium-filled-youtube-input</kbd> instead (shown below).</p>
            </deprecation-notice>
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

            <api-docs src="./custom-elements.json" selected="titanium-filled-youtube-input"></api-docs>

            <md-divider></md-divider>

            <story-header name="Titanium youtube input" className="TitaniumYouTubeInput"></story-header>

            <div>
              <h1>Default</h1>
              <p>YouTube video input with URL validation</p>
              <titanium-youtube-input label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled YouTube input</p>
              <titanium-youtube-input disabled label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
            </div>

            <div>
              <h1>Methods</h1>
              <p>Demonstrates public methods like reset and reportValidity</p>
              <titanium-youtube-input
                required
                label="Video"
                @input=${t=>console.log(t.target.value)}
              ></titanium-youtube-input>
              <br />
              <section buttons>
                <md-filled-tonal-button
                  @click=${()=>{this.outlinedInput.reset()}}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.outlinedInput.focus()}}
                  >Focus</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.outlinedInput.reportValidity()}}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-youtube-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};u([a("titanium-filled-youtube-input")],h.prototype,"filledInput",null),u([a("titanium-youtube-input[required]")],h.prototype,"outlinedInput",null),h=u([l("titanium-youtube-input-demo")],h);export{h as TitaniumYoutubeInputDemo};
