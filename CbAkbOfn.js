import{c as t,E as e,x as i,_ as u,n as s,t as o,i as n,h as r,p as a,f as l,e as p}from"./-Qu_smub.js";import{S as d}from"./cOSQ4pB9.js";import{E as m}from"./cRNooSu6.js";import"./BUX6rFny.js";let c=class extends m{#t="off";get autocomplete(){return this.#t}set autocomplete(t){this.#t=t}#e=!1;get spellcheck(){return this.#e}set spellcheck(t){this.#e=t}firstUpdated(){this.label=this.label||"YouTube video key",this.pattern="^.{11}$"}updated(t){t.has("value")&&(this.value=this.#i(this.input.value))}#i(t){const e=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/),i=!(!e||11!==e[7].length)&&e[7];return i||t}static{this.styles=[t`
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
    `}};u([s({reflect:!0,type:String})],c.prototype,"autocomplete",null),u([s({reflect:!0,type:Boolean})],c.prototype,"spellcheck",null),c=u([o("titanium-youtube-input")],c);let h=class extends n{#u;get inputs(){return this.#u}set inputs(t){this.#u=t}#s;get requiredInput(){return this.#s}set requiredInput(t){this.#s=t}static{this.styles=[r,a,t`
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

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `]}render(){return i`
      <h1>Default</h1>
      <div>
        <titanium-youtube-input label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
      </div>

      <h1>Disabled</h1>
      <div>
        <titanium-youtube-input disabled label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
      </div>

      <h1>Methods</h1>
      <div>
        <titanium-youtube-input required label="Video" @input=${t=>console.log(t.target.value)}></titanium-youtube-input>
        <br />
        <section buttons>
          <md-outlined-button @click=${()=>this.requiredInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${()=>this.requiredInput.reportValidity()}>Report validity</md-outlined-button>
        </section>
      </div>
    `}};u([l("titanium-youtube-input")],h.prototype,"inputs",null),u([p("titanium-youtube-input[required]")],h.prototype,"requiredInput",null),h=u([o("titanium-youtube-input-playground")],h);let b=class extends n{static{this.styles=[d,t``]}render(){return i`
      <story-header name="Titanium Youtube Input" className="TitaniumYoutubeInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-youtube-input/project.json"
        ><titanium-youtube-input-playground></titanium-youtube-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-youtube-input"></api-docs>
    `}};b=u([o("titanium-youtube-input-demo")],b);export{b as TitaniumYoutubeInputDemo};
