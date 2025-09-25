import{i as e,p as t,k as i,c as r,E as s,x as a,J as o,_ as l,n,r as p,t as u,h as c}from"./CU2mI_nZ.js";import{S as m}from"./syhS3759.js";import"./g0SGJilc.js";import"./BQTVtIdS.js";let h=class extends e{#e;get people(){return this.#e}set people(e){this.#e=e}#t=5;get max(){return this.#t}set max(e){this.#t=e}#i=!1;get enableDirectoryHref(){return this.#i}set enableDirectoryHref(e){this.#i=e}#r=!1;get showFullName(){return this.#r}set showFullName(e){this.#r=e}#s=!1;get autoResize(){return this.#s}set autoResize(e){this.#s=e}#a=30;get size(){return this.#a}set size(e){this.#a=e}#o=8;get overlap(){return this.#o}set overlap(e){this.#o=e}#l=0;get autoMax(){return this.#l}set autoMax(e){this.#l=e}#n;updated(e){e.has("autoResize")&&(this.autoResize?this.#p():this.#n?.disconnect?.()),e.has("overlap")&&this.style.setProperty("--profile-picture-stack-overlap",`${this.overlap}px`)}#p(){this.#n=new ResizeObserver(e=>{for(const t of e)this.autoMax=this.#u(this.size,this.overlap,t?.contentBoxSize?.[0]?.inlineSize||0)}),this.#n.observe(this)}#u(e,t,i){return i<e?0:Math.floor((i-e)/(e-t))}static{this.styles=[t,i,r`
      :host {
        display: flex;
        padding-left: var(--profile-picture-stack-overlap, 10px);
        flex-direction: row-reverse;
        justify-content: flex-end;
      }

      profile-picture {
        box-sizing: border-box;
        transition: all 0.25s ease-in-out;
        transform-origin: bottom;
        background-color: var(--titanium-profile-picture-stack-bg-color, var(--md-sys-color-surface));
        border-radius: 50%;
        border: 2px solid transparent;
      }

      profile-picture:hover {
        transform: translateY(-5px);
        z-index: 1;
      }

      p[full-name] {
        align-self: center;
        margin-left: 6px;
      }

      additional-users {
        display: grid;
        box-sizing: border-box;
        transition: all 0.25s ease-in-out;
        border-radius: 50%;
        background: var(--md-sys-color-surface-container);
        place-items: center;
        border: 2px solid transparent;
        cursor: default;
      }

      additional-users p {
        font-weight: 500;
        font-size: 13px;
        max-width: 75%;
      }

      additional-users:hover {
        transform: translateY(-5px);
        z-index: 1;
      }

      :host([enable-directory-href]) profile-picture {
        cursor: pointer;
      }
    `]}render(){const e=this.autoResize?this.autoMax:this.max;return a`
      ${this.people?.length>e?a`<additional-users
            style="width:${this.size}px;height:${this.size}px;margin-left:-${this.overlap}px"
            part="additional-users"
            title="${(this.people?.length||0)-e} more"
          >
            <p part="additional-users-paragraph">+${(this.people?.length||0)-e}</p>
          </additional-users>`:s}
      ${this.people?.slice(0,e)?.reverse()?.map(e=>a`
            ${1===this.people?.length&&this.showFullName?a`<p part="name" ellipsis full-name>${e?.FullName??""}</p>`:s}
            <profile-picture
              @click=${()=>{this.enableDirectoryHref&&e?.Id&&window.open(`https://${o?"dev":""}directory.leavitt.com/profile/${e?.Id}`,"_blank")}}
              title=${e?.FullName??""}
              size=${this.size}
              style="margin-left:-${this.overlap}px;"
              .fileName=${e?.ProfilePictureCdnFileName??null}
              part="profile-picture"
            ></profile-picture>
          `)}
    `}};l([n({type:Array})],h.prototype,"people",null),l([n({type:Number})],h.prototype,"max",null),l([n({type:Boolean,attribute:"enable-directory-href"})],h.prototype,"enableDirectoryHref",null),l([n({type:Boolean,attribute:"show-full-name"})],h.prototype,"showFullName",null),l([n({type:Boolean,attribute:"auto-resize"})],h.prototype,"autoResize",null),l([n({type:Number})],h.prototype,"size",null),l([n({type:Number})],h.prototype,"overlap",null),l([p()],h.prototype,"autoMax",null),h=l([u("titanium-profile-picture-stack")],h);const d={Id:771130,FullName:"Kasey Person",ProfilePictureCdnFileName:"_hNIx5g5YkhcC1BCH_-lJBOlMy5urO1kMrmHl-DEyn15qs9IOnAzxXnlV9ed"},f={Id:11056,FullName:"Aaron Person",ProfilePictureCdnFileName:"HzJz-mPu5ENzFokQb3uEgJbiCscFQz6OQtCqkmaH3QczhQOvxqIdXPAGTV3u"},x={Id:771130,FullName:"Random Person",ProfilePictureCdnFileName:""};let b=class extends e{constructor(){super(...arguments),this.people=[x,d,f,x,x],this.manyPeople=new Array(20).fill(d)}static{this.styles=[c,t,r`
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
    `]}render(){return a`
      <titanium-card>
        <h1>Default</h1>
        <titanium-profile-picture-stack .people=${this.people}></titanium-profile-picture-stack>

        <h1>One person</h1>
        <titanium-profile-picture-stack .people=${[d]}></titanium-profile-picture-stack>

        <h1>One person with show full name</h1>
        <titanium-profile-picture-stack show-full-name .people=${[d]}></titanium-profile-picture-stack>

        <h1>Max of 3</h1>
        <titanium-profile-picture-stack max="3" .people=${this.people}></titanium-profile-picture-stack>

        <h1>Enable directory href</h1>
        <titanium-profile-picture-stack enable-directory-href .people=${this.people}></titanium-profile-picture-stack>

        <h1>Auto resize - Large</h1>
        <titanium-profile-picture-stack
          auto-resize
          size="40"
          .people=${[...new Array(20).fill(d),...new Array(20).fill(f)]}
        ></titanium-profile-picture-stack>

        <h1>Auto resize - Extra large</h1>
        <titanium-profile-picture-stack
          auto-resize
          size="60"
          .people=${[...new Array(15).fill(d),...new Array(15).fill(f)]}
        ></titanium-profile-picture-stack>

        <h1>Auto resize - Custom overlap</h1>
        <titanium-profile-picture-stack
          auto-resize
          size="40"
          overlap="20"
          .people=${[...new Array(15).fill(d),...new Array(15).fill(f)]}
        ></titanium-profile-picture-stack>
      </titanium-card>

      <titanium-card>
        <h1>Auto resize</h1>
        <titanium-profile-picture-stack auto-resize .people=${this.manyPeople}></titanium-profile-picture-stack>

        <button-container>
          <p>${this.manyPeople?.length} ${1===this.manyPeople?.length?"person":"people"}</p>
          <md-outlined-icon-button @click=${()=>this.manyPeople=[...this.manyPeople?.slice(0,(this.manyPeople?.length??0)-1)??void 0]}>
            <md-icon>remove</md-icon>
          </md-outlined-icon-button>
          <md-outlined-icon-button @click=${()=>this.manyPeople=[...this.manyPeople,this.manyPeople?.length%2==1?d:f]}>
            <md-icon>add</md-icon>
          </md-outlined-icon-button>
        </button-container>
      </titanium-card>
    `}};l([p()],b.prototype,"people",void 0),l([p()],b.prototype,"manyPeople",void 0),b=l([u("titanium-profile-picture-stack-playground")],b);let k=class extends e{static{this.styles=[m,r``]}render(){return a`
      <story-header name="Titanium profile picture stack" className="TitaniumProfilePictureStack"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-profile-picture-stack/project.json"
        ><titanium-profile-picture-stack-playground></titanium-profile-picture-stack-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-profile-picture-stack"></api-docs>
    `}};k=l([u("titanium-profile-picture-stack-demo")],k);export{k as TitaniumProfilePictureStackDemo};
