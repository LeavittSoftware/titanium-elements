import{x as e,S as t,i as s,_ as a,n as i,t as o,r as l,A as r,c as n,h as c,p as d,d as p,e as m,f as h,G as u,E as g}from"./B87LNoAb.js";import{S as y}from"./nQDMyLps.js";import"./uXzSm2ar.js";import"./vnz40oES.js";import{F as v}from"./BW3mJxao.js";import{T as b}from"./lnNxy_Tc.js";import{D as S}from"./Bbv0u4bt.js";import"./_4-EZz1b.js";let _=class extends b{#e="Company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="Name";get pathToSelectedText(){return this.#s}set pathToSelectedText(e){this.#s=e}#a=[];get companies(){return this.#a}set companies(e){this.#a=e}#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#o=!1;get disableAutoLoad(){return this.#o}set disableAutoLoad(e){this.#o=e}#l=["orderby=Name","select=Name,ShortName,MarkUrl,Id"];get odataParts(){return this.#l}set odataParts(e){this.#l=e}#r="Companies";get apiControllerName(){return this.#r}set apiControllerName(e){this.#r=e}#n="off";get autocomplete(){return this.#n}set autocomplete(e){this.#n=e}#c=!1;get spellcheck(){return this.#c}set spellcheck(e){this.#c=e}#d="off";get autocorrect(){return this.#d}set autocorrect(e){this.#d=e}#p=t=>e`<md-menu-item .item=${t}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${t.Name}</span>
      <span slot="supporting-text">${t.ShortName||"-"}</span>
      <img loading="lazy" company-mark slot="start" src=${t.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"} />
    </md-menu-item>`;get renderMenuItemContentTemplate(){return this.#p}set renderMenuItemContentTemplate(e){this.#p=e}async firstUpdated(){this.disableAutoLoad||this.companies.length||!this.apiService||this.#m()}async updated(e){e.has("companies")&&this.companies&&(this.defaultSuggestions=this.companies)}async reloadCompanies(){this.disableAutoLoad||console.warn("leavitt-company-select reloadCompanies method has been called manually without setting disableAutoLoad"),await this.#m()}async#m(){this.companies=await this.#h(),this.selected=this.companies.find((e=>e.Id===this.selected?.Id))??null}async#h(){try{const e=this.apiService?.getAsync(`${this.apiControllerName}?${this.odataParts.join("&")}`),t=await e;return t?.toList()??[]}catch(e){this.dispatchEvent(new t(e))}return[]}static{this.styles=[...b.styles,s`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}#u=new S((e=>this.#g(e)));#y=new AbortController;async#g(e){this.#y.abort(),this.#y=new AbortController;const t={includeScore:!0,keys:["Name","ShortName"],shouldSort:!0,threshold:.3};if(this.searchTerm){const s=new v(this.companies,t).search(e);this.showSuggestions(s.map((e=>e.item)).slice(0,15),s.length)}}onInputChanged(e){this.#u.debounce(e)}renderSelectedLeadingInputSlot(t){return e` <img leading slot="leading-icon" src=${t.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"} />`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e)}};a([i({type:String})],_.prototype,"label",null),a([i({type:String})],_.prototype,"placeholder",null),a([i({type:String})],_.prototype,"pathToSelectedText",null),a([i({type:Array})],_.prototype,"companies",null),a([i({attribute:!1})],_.prototype,"apiService",null),a([i({type:Boolean})],_.prototype,"disableAutoLoad",null),a([i({type:Array})],_.prototype,"odataParts",null),a([i({type:String})],_.prototype,"apiControllerName",null),a([i({reflect:!0,type:String})],_.prototype,"autocomplete",null),a([i({reflect:!0,type:Boolean})],_.prototype,"spellcheck",null),a([i({reflect:!0,type:String})],_.prototype,"autocorrect",null),a([i({type:Object})],_.prototype,"renderMenuItemContentTemplate",null),_=a([o("leavitt-company-select")],_);let f=class extends l{#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#v=!1;get disableMenuOpenOnFocus(){return this.#v}set disableMenuOpenOnFocus(e){this.#v=e}#b;get methodsSelect(){return this.#b}set methodsSelect(e){this.#b=e}#S;get inputs(){return this.#S}set inputs(e){this.#S=e}constructor(){super(),this.apiService=new r(new n),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[c,d,s`
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
      <user-manager disableAutoload></user-manager>
      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-company-select
          @selected=${e=>console.log("selected change 1",e.target.selected)}
          style="width: 400px;"
          methods-demo
          required
          ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <section buttons>
          <md-outlined-button @click=${()=>this.methodsSelect.reset()}>reset()</md-outlined-button>
          <md-outlined-button @click=${()=>this.methodsSelect.focus()}>focus()</md-outlined-button>
          <md-outlined-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-outlined-button>
          <md-outlined-button @click=${()=>this.methodsSelect.required=!this.methodsSelect.required}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${()=>this.disableMenuOpenOnFocus=!this.disableMenuOpenOnFocus}
            >Toggle auto open (${this.disableMenuOpenOnFocus?"on":"off"})</md-outlined-button
          >

          <md-outlined-button @click=${()=>this.methodsSelect.reloadCompanies()}>reloadCompanies()</md-outlined-button>
        </section>
      </div>

      <h1>Default</h1>
      <p>Examples using required,shaped,preselected, and disabled</p>
      <div>
        <leavitt-company-select disableAutoLoad label="default" .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="shaped" shaped .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select
          disableAutoLoad
          label="pre-selected"
          .selected=${{Id:57,Name:"Leavitt Group Enterprises"}}
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <leavitt-company-select
          disableAutoLoad
          label="disabled pre-selected"
          .selected=${{Id:57,Name:"Leavitt Group Enterprises"}}
          disabled
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-company-select>
      </div>

      <h1>Custom menu item template</h1>
      <div>
        <leavitt-company-select
          .renderMenuItemContentTemplate=${t=>e`<md-menu-item .item=${t}>
              <slot name="trailing-icon" slot="trailing-icon"></slot>
              <span slot="headline">${t.Name}</span>
              <span slot="supporting-text">${t.ShortName||"-"}</span>
              <img
                loading="lazy"
                style="max-width: 100px;width:100%;background:white;border-radius:8px"
                slot="start"
                src=${t.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"}
              />
            </md-menu-item>`}
          .apiService=${this.apiService}
        ></leavitt-company-select>
      </div>
      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};a([p()],f.prototype,"apiService",null),a([p()],f.prototype,"disableMenuOpenOnFocus",null),a([m("leavitt-company-select[methods-demo]")],f.prototype,"methodsSelect",null),a([h("leavitt-company-select")],f.prototype,"inputs",null),f=a([o("leavitt-company-select-playground")],f);let x=class extends l{#_=null;get refreshToken(){return this.#_}set refreshToken(e){this.#_=e}static{this.styles=[y,s``]}async firstUpdated(){const e=await u();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return e`
      <story-header name="Leavitt Company Select" className="LeavittCompanySelect"></story-header>
      ${this.refreshToken?e`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-company-select/project.json"
          >
            <leavitt-company-select-playground></leavitt-company-select-playground>
          </smart-demo>`:g}
      <api-docs src="./custom-elements.json" selected="leavitt-company-select"></api-docs>
    `}};a([p()],x.prototype,"refreshToken",null),x=a([o("leavitt-company-select-demo")],x);export{x as LeavittCompanySelectDemo};
