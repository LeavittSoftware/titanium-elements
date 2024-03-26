import{i as t,x as i,T as e,_ as u,t as s,s as o,h as n,p as r,c as a,e as p}from"./f43924bd.js";import{S as d}from"./1c8b19cb.js";import{E as m}from"./a1524b94.js";import"./3286da59.js";import"./68491de3.js";import"./d8fb47ea.js";import"./75986af6.js";import"./72abf9b4.js";import"./c47213b1.js";import"./08f0fa74.js";import"./d49dec57.js";import"./f42dd0a8.js";import"./27c9cb5c.js";import"./f7d1f7f2.js";import"./ff84c309.js";let l=class extends m{firstUpdated(){this.label=this.label||"YouTube video key",this.pattern="^.{11}$"}updated(t){t.has("value")&&(this.value=this.#t(this.input.value))}#t(t){const i=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/),e=!(!i||11!==i[7].length)&&i[7];return e||t}static{this.styles=[t`
      img {
        max-height: 49px;
        margin-right: 5px;
        border-radius: 8px;
      }

      md-outlined-text-field {
        width: 100%;
      }
    `]}renderMainSlot(){return i`
      <md-icon slot="leading-icon"> youtube_activity </md-icon>
      ${this.value&&11===(this.value?.length||0)?i`<img slot="trailing-icon" src="https://img.youtube.com/vi/${this.value}/default.jpg" />`:e}
    `}};l=u([s("titanium-youtube-input")],l);let c=class extends o{#i;get inputs(){return this.#i}set inputs(t){this.#i=t}#e;get requiredInput(){return this.#e}set requiredInput(t){this.#e=t}static{this.styles=[n,r,t`
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
    `}};u([a("titanium-youtube-input")],c.prototype,"inputs",null),u([p("titanium-youtube-input[required]")],c.prototype,"requiredInput",null),c=u([s("titanium-youtube-input-playground")],c);let b=class extends o{static{this.styles=[d,t``]}render(){return i`
      <story-header name="Titanium Youtube Input" className="TitaniumYoutubeInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-youtube-input/project.json"
        ><titanium-youtube-input-playground></titanium-youtube-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-youtube-input"></api-docs>
    `}};b=u([s("titanium-youtube-input-demo")],b);export{b as TitaniumYoutubeInputDemo};
