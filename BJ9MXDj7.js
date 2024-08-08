import{h as t,p as e,j as i,i as r,k as s,m as o,D as a,_ as n,r as c,n as p,t as l,a as u}from"./BDVm1clO.js";import{S as m}from"./BYpX0Mqs.js";import"./BSBJUm6d.js";import"./DNpez9SM.js";import"./B29NwKRo.js";let h=class extends t{#t;get people(){return this.#t}set people(t){this.#t=t}#e=5;get max(){return this.#e}set max(t){this.#e=t}#i=!1;get enableDirectoryHref(){return this.#i}set enableDirectoryHref(t){this.#i=t}#r=!1;get autoResize(){return this.#r}set autoResize(t){this.#r=t}#s=30;get size(){return this.#s}set size(t){this.#s=t}#o=0;get autoMax(){return this.#o}set autoMax(t){this.#o=t}#a;updated(t){t.has("autoResize")&&(this.autoResize?this.#n():this.#a?.disconnect?.())}#n(){this.#a=new ResizeObserver((t=>{for(const e of t)if(e.contentBoxSize){const t=e.contentBoxSize[0].inlineSize;this.autoMax=Math.floor(t/this.size)}})),this.#a.observe(this)}static{this.styles=[e,i,r`
      :host {
        display: flex;
        flex-direction: row;
        position: relative;
        align-self: start;
      }

      profile-picture {
        transition: all 0.2s ease-in-out;
        transform-origin: bottom;
        background-color: var(--titanium-profile-picture-stack-bg-color, var(--md-sys-color-surface));
        border-radius: 50%;
        border: 2px solid transparent;
      }

      profile-picture:not(:first-child) {
        margin-left: -10px;
      }

      profile-picture:hover {
        transform: scale(var(--titanium-profile-picture-stack-transform-scale, 1.3));
        position: relative;
        z-index: 1;
      }

      md-icon {
        font-size: 12px;
        height: 7px;
        margin-top: 25px;
        margin-left: -4px;
      }

      p {
        align-self: center;
        margin-left: 8px;
      }

      :host([enable-directory-href]) profile-picture {
        cursor: pointer;
      }
    `]}render(){const t=this.autoResize?this.autoMax:this.max;return s`
      ${this.people?.slice(0,t)?.map((t=>s`
          <profile-picture
            @click=${()=>{this.enableDirectoryHref&&t?.Id&&window.open(`https://${o?"dev":""}directory.leavitt.com/profile/${t?.Id}`,"_blank")}}
            title=${t?.FullName??""}
            size=${this.size}
            .fileName=${t?.ProfilePictureCdnFileName??null}
            part="profile-picture"
          ></profile-picture>
          ${1===this.people?.length?s`<p part="name" ellipsis>${t?.FullName??""}</p>`:a}
        `))}
      ${this.people?.length>t?s`<md-icon part="more-icon" title="Shared with ${this.people.length} total users">more_horiz</md-icon>`:a}
    `}};n([p({type:Array})],h.prototype,"people",null),n([p({type:Number})],h.prototype,"max",null),n([p({type:Boolean,attribute:"enable-directory-href"})],h.prototype,"enableDirectoryHref",null),n([p({type:Boolean,attribute:"auto-resize"})],h.prototype,"autoResize",null),n([p({type:Number})],h.prototype,"size",null),n([c()],h.prototype,"autoMax",null),h=n([l("titanium-profile-picture-stack")],h);const d={Id:771130,FullName:"Kasey Person",ProfilePictureCdnFileName:"_hNIx5g5YkhcC1BCH_-lJBOlMy5urO1kMrmHl-DEyn15qs9IOnAzxXnlV9ed"},f={Id:771130,FullName:"Random Person",ProfilePictureCdnFileName:""};let k=class extends t{constructor(){super(...arguments),this.people=[f,d,f,d,f],this.manyPeople=new Array(25).fill(d)}static{this.styles=[u,e,r`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      titanium-profile-picture-stack {
        margin: 0 0 24px 0;
      }

      titanium-profile-picture-stack[size='50'] {
        --titanium-profile-picture-stack-transform-scale: 1.5;
      }

      titanium-card:first-of-type {
        margin-bottom: 12px;
      }

      button-container {
        align-items: center;
        justify-self: end;
        display: flex;
        gap: 12px;
      }
    `]}render(){return s`
      <titanium-card>
        <h1>Default</h1>
        <titanium-profile-picture-stack .people=${this.people}></titanium-profile-picture-stack>

        <h1>One person</h1>
        <titanium-profile-picture-stack .people=${[d]}></titanium-profile-picture-stack>

        <h1>Max of 3</h1>
        <titanium-profile-picture-stack max="3" .people=${this.people}></titanium-profile-picture-stack>

        <h1>Enable directory href</h1>
        <titanium-profile-picture-stack enable-directory-href .people=${this.people}></titanium-profile-picture-stack>

        <h1>Auto resize - Large</h1>
        <titanium-profile-picture-stack auto-resize size="50" .people=${new Array(25).fill(d)}></titanium-profile-picture-stack>
      </titanium-card>

      <titanium-card>
        <h1>Auto resize</h1>
        <titanium-profile-picture-stack auto-resize .people=${this.manyPeople}></titanium-profile-picture-stack>

        <button-container>
          <p>${this.manyPeople?.length} ${1===this.manyPeople?.length?"person":"people"}</p>
          <md-outlined-icon-button @click=${()=>this.manyPeople=[...this.manyPeople?.slice(0,(this.manyPeople?.length??0)-1)??void 0]}>
            <md-icon>remove</md-icon>
          </md-outlined-icon-button>
          <md-outlined-icon-button @click=${()=>this.manyPeople=[...this.manyPeople,d]}>
            <md-icon>add</md-icon>
          </md-outlined-icon-button>
        </button-container>
      </titanium-card>
    `}};n([c()],k.prototype,"people",void 0),n([c()],k.prototype,"manyPeople",void 0),k=n([l("titanium-profile-picture-stack-playground")],k);let x=class extends t{static{this.styles=[m,r``]}render(){return s`
      <story-header name="Titanium profile picture stack" className="TitaniumProfilePictureStack"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-profile-picture-stack/project.json"
        ><titanium-profile-picture-stack-playground></titanium-profile-picture-stack-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-profile-picture-stack"></api-docs>
    `}};x=n([l("titanium-profile-picture-stack-demo")],x);export{x as TitaniumProfilePictureStackDemo};
