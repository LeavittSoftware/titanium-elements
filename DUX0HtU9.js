import{i as t,k as e,D as i,_ as u,n as s,t as o,h as r,a as n,p as a,d as p,e as l}from"./BDVm1clO.js";import{S as d}from"./BYpX0Mqs.js";import{E as m}from"./B_UjpJlV.js";import"./BSBJUm6d.js";import"./B29NwKRo.js";import"./DMMrNLrz.js";import"./y3grKe00.js";import"./DihM7gpy.js";import"./UNHCmXFX.js";import"./BnAFKI1h.js";import"./bsH9U0_p.js";import"./BwleRb8i.js";import"./CmWDcngB.js";import"./Dq5qrwSy.js";import"./Ct-HHgwR.js";let c=class extends m{#t="off";get autocomplete(){return this.#t}set autocomplete(t){this.#t=t}#e=!1;get spellcheck(){return this.#e}set spellcheck(t){this.#e=t}#i="off";get autocorrect(){return this.#i}set autocorrect(t){this.#i=t}firstUpdated(){this.label=this.label||"YouTube video key",this.pattern="^.{11}$"}updated(t){t.has("value")&&(this.value=this.#u(this.input.value))}#u(t){const e=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/),i=!(!e||11!==e[7].length)&&e[7];return i||t}static{this.styles=[t`
      img {
        max-height: 49px;
        margin-right: 5px;
        border-radius: 8px;
      }

      md-outlined-text-field {
        width: 100%;
      }
    `]}renderMainSlot(){return e`
      <md-icon slot="leading-icon"> youtube_activity </md-icon>
      ${this.value&&11===(this.value?.length||0)?e`<img slot="trailing-icon" src="https://img.youtube.com/vi/${this.value}/default.jpg" />`:i}
    `}};u([s({reflect:!0,type:String})],c.prototype,"autocomplete",null),u([s({reflect:!0,type:Boolean})],c.prototype,"spellcheck",null),u([s({reflect:!0,type:String})],c.prototype,"autocorrect",null),c=u([o("titanium-youtube-input")],c);let h=class extends r{#s;get inputs(){return this.#s}set inputs(t){this.#s=t}#o;get requiredInput(){return this.#o}set requiredInput(t){this.#o=t}static{this.styles=[n,a,t`
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
    `]}render(){return e`
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
    `}};u([p("titanium-youtube-input")],h.prototype,"inputs",null),u([l("titanium-youtube-input[required]")],h.prototype,"requiredInput",null),h=u([o("titanium-youtube-input-playground")],h);let b=class extends r{static{this.styles=[d,t``]}render(){return e`
      <story-header name="Titanium Youtube Input" className="TitaniumYoutubeInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-youtube-input/project.json"
        ><titanium-youtube-input-playground></titanium-youtube-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-youtube-input"></api-docs>
    `}};b=u([o("titanium-youtube-input-demo")],b);export{b as TitaniumYoutubeInputDemo};
