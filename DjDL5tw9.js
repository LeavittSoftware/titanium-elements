import{i as e,p as t,j as i,b as r,f as a,c as s,d as o,_ as l,n as p,r as n,t as c}from"./BkdWKSMI.js";import{S as u}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";let h=class extends e{#e;get people(){return this.#e}set people(e){this.#e=e}#t=5;get max(){return this.#t}set max(e){this.#t=e}#i=!1;get enableDirectoryHref(){return this.#i}set enableDirectoryHref(e){this.#i=e}#r=!1;get showFullName(){return this.#r}set showFullName(e){this.#r=e}#a=!1;get autoResize(){return this.#a}set autoResize(e){this.#a=e}#s=30;get size(){return this.#s}set size(e){this.#s=e}#o=8;get overlap(){return this.#o}set overlap(e){this.#o=e}#l=0;get autoMax(){return this.#l}set autoMax(e){this.#l=e}#p;updated(e){e.has("autoResize")&&(this.autoResize?this.#n():this.#p?.disconnect?.()),e.has("overlap")&&this.style.setProperty("--profile-picture-stack-overlap",`${this.overlap}px`)}#n(){this.#p=new ResizeObserver(e=>{for(const t of e)this.autoMax=this.#c(this.size,this.overlap,t?.contentBoxSize?.[0]?.inlineSize||0)}),this.#p.observe(this)}#c(e,t,i){return i<e?0:Math.floor((i-e)/(e-t))}static{this.styles=[t,i,r`
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
    `]}render(){const e=this.autoResize?this.autoMax:this.max;return s`
      ${this.people?.length>e?s`<additional-users
            style="width:${this.size}px;height:${this.size}px;margin-left:-${this.overlap}px"
            part="additional-users"
            title="${(this.people?.length||0)-e} more"
          >
            <p part="additional-users-paragraph">+${(this.people?.length||0)-e}</p>
          </additional-users>`:a}
      ${this.people?.slice(0,e)?.reverse()?.map(e=>s`
            ${1===this.people?.length&&this.showFullName?s`<p part="name" ellipsis full-name>${e?.FullName??""}</p>`:a}
            <profile-picture
              @click=${()=>{this.enableDirectoryHref&&e?.Id&&window.open(`https://${o?"dev":""}directory.leavitt.com/profile/${e?.Id}`,"_blank")}}
              title=${e?.FullName??""}
              size=${this.size}
              style="margin-left:-${this.overlap}px;"
              .fileName=${e?.ProfilePictureCdnFileName??null}
              part="profile-picture"
            ></profile-picture>
          `)}
    `}};l([p({type:Array})],h.prototype,"people",null),l([p({type:Number})],h.prototype,"max",null),l([p({type:Boolean,attribute:"enable-directory-href"})],h.prototype,"enableDirectoryHref",null),l([p({type:Boolean,attribute:"show-full-name"})],h.prototype,"showFullName",null),l([p({type:Boolean,attribute:"auto-resize"})],h.prototype,"autoResize",null),l([p({type:Number})],h.prototype,"size",null),l([p({type:Number})],h.prototype,"overlap",null),l([n()],h.prototype,"autoMax",null),h=l([c("titanium-profile-picture-stack")],h);const m={Id:771130,FullName:"Kasey Person",ProfilePictureCdnFileName:"_hNIx5g5YkhcC1BCH_-lJBOlMy5urO1kMrmHl-DEyn15qs9IOnAzxXnlV9ed"},d={Id:11056,FullName:"Aaron Person",ProfilePictureCdnFileName:"HzJz-mPu5ENzFokQb3uEgJbiCscFQz6OQtCqkmaH3QczhQOvxqIdXPAGTV3u"},f={Id:771130,FullName:"Random Person",ProfilePictureCdnFileName:""};let x=class extends e{constructor(){super(...arguments),this.people=[f,m,d,f,f],this.manyPeople=new Array(20).fill(m)}static{this.styles=[u,r`
      titanium-profile-picture-stack {
        margin: 0 0 12px 0;
      }

      titanium-profile-picture-stack[size='50'] {
        --titanium-profile-picture-stack-transform-scale: 1.5;
      }

      p {
        font-size: 13px;
        opacity: 0.8;
      }
    `]}render(){return s`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium profile picture stack" level1Href="/titanium-profile-picture-stack" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium profile picture stack" className="TitaniumProfilePictureStack"></story-header>

            <div>
              <h1>Default size (24px)</h1>
              <item-row>
                <titanium-profile-picture-stack .people=${this.people}></titanium-profile-picture-stack>
                <p>${this.people.length} people</p>
              </item-row>
            </div>

            <div>
              <h1>Larger size (32px)</h1>
              <stack-container>
                <titanium-profile-picture-stack size="32" .people=${this.people}></titanium-profile-picture-stack>
                <p>${this.people.length} people</p>
              </stack-container>
            </div>

            <div>
              <h1>Even larger (50px)</h1>
              <stack-container>
                <titanium-profile-picture-stack size="50" .people=${this.people}></titanium-profile-picture-stack>
                <p>${this.people.length} people</p>
              </stack-container>
            </div>

            <div>
              <h1>Many people (20+)</h1>
              <stack-container>
                <titanium-profile-picture-stack .people=${this.manyPeople}></titanium-profile-picture-stack>
                <p>${this.manyPeople.length} people</p>
              </stack-container>
            </div>

            <div>
              <h1>With max display limit</h1>
              <stack-container>
                <titanium-profile-picture-stack max-display="3" .people=${this.manyPeople}></titanium-profile-picture-stack>
                <p>Showing 3 of ${this.manyPeople.length} people</p>
              </stack-container>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-profile-picture-stack"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};l([n()],x.prototype,"people",void 0),l([n()],x.prototype,"manyPeople",void 0),x=l([c("titanium-profile-picture-stack-demo")],x);export{x as TitaniumProfilePictureStackDemo};
