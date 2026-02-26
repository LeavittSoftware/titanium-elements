import{b as t,f as e,c as i,_ as u,n,t as a,i as o,W as s,e as l}from"./BkdWKSMI.js";import{S as r}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import{E as p}from"./Co12Lg7Y.js";let d=class extends p{#t="off";get autocomplete(){return this.#t}set autocomplete(t){this.#t=t}#e=!1;get spellcheck(){return this.#e}set spellcheck(t){this.#e=t}firstUpdated(){this.label=this.label||"YouTube video key",this.pattern="^.{11}$"}updated(t){t.has("value")&&(this.value=this.#i(this.input.value))}#i(t){const e=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/),i=!(!e||11!==e[7].length)&&e[7];return i||t}static{this.styles=[t`
      img {
        max-height: 42px;
        margin-right: 22px;
        border-radius: 8px;
      }

      md-outlined-text-field {
        width: 100%;
      }
    `]}renderMainSlot(){return i`
      <md-icon slot="leading-icon"> youtube_activity </md-icon>
      ${this.value&&11===(this.value?.length||0)?i`<img slot="trailing-icon" src="https://img.youtube.com/vi/${this.value}/default.jpg" />`:e}
    `}};u([n({reflect:!0,type:String})],d.prototype,"autocomplete",null),u([n({reflect:!0,type:Boolean})],d.prototype,"spellcheck",null),d=u([a("titanium-youtube-input")],d);let m=class extends o{#u;get inputs(){return this.#u}set inputs(t){this.#u=t}#n;get requiredInput(){return this.#n}set requiredInput(t){this.#n=t}static{this.styles=[r]}render(){return i`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium youtube input" level1Href="/titanium-youtube-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium youtube input" className="TitaniumYoutubeInput"></story-header>

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
                <md-filled-tonal-button @click=${()=>this.requiredInput.reset()}>Reset</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.requiredInput.reportValidity()}>Report validity</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-youtube-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};u([s("titanium-youtube-input")],m.prototype,"inputs",null),u([l("titanium-youtube-input[required]")],m.prototype,"requiredInput",null),m=u([a("titanium-youtube-input-demo")],m);export{m as TitaniumYoutubeInputDemo};
