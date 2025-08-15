import{x as e,S as t,c as s,_ as a,n as i,t as o,i as l,A as r,d as n,h as c,p as d,r as p,e as m,f as h,G as u,E as g}from"./-Qu_smub.js";import{S as y}from"./cOSQ4pB9.js";import"./BUX6rFny.js";import"./X_RhATIn.js";import{F as v}from"./CkDJilkW.js";import{T as b}from"./Ii1OBSQf.js";import{D as S}from"./DTS7lhmZ.js";import"./CJR4vHmj.js";let x=class extends b{#e="Company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="Name";get pathToSelectedText(){return this.#s}set pathToSelectedText(e){this.#s=e}#a=[];get companies(){return this.#a}set companies(e){this.#a=e}#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#o=!1;get disableAutoLoad(){return this.#o}set disableAutoLoad(e){this.#o=e}#l=["orderby=Name","select=Name,ShortName,MarkUrl,DarkMarkUrl,Id"];get odataParts(){return this.#l}set odataParts(e){this.#l=e}#r="Companies";get apiControllerName(){return this.#r}set apiControllerName(e){this.#r=e}#n="off";get autocomplete(){return this.#n}set autocomplete(e){this.#n=e}#c=!1;get spellcheck(){return this.#c}set spellcheck(e){this.#c=e}#d=t=>e`<md-menu-item .item=${t}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${t.Name}</span>
      <span slot="supporting-text">${t.ShortName||"-"}</span>
      <img loading="lazy" company-mark slot="start" src=${function(e,t){return"dark"==t?e?.DarkMarkUrl||e?.MarkUrl||"https://cdn.leavitt.com/lg-mark-dark.svg":e?.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"}(t,this.themePreference)} />
    </md-menu-item>`;get renderMenuItemContentTemplate(){return this.#d}set renderMenuItemContentTemplate(e){this.#d=e}async firstUpdated(){this.disableAutoLoad||this.companies.length||!this.apiService||this.#p()}async updated(e){e.has("companies")&&this.companies&&(this.defaultSuggestions=this.companies)}async reloadCompanies(){this.disableAutoLoad||console.warn("leavitt-company-select reloadCompanies method has been called manually without setting disableAutoLoad"),await this.#p()}async#p(){this.companies=await this.#m(),this.selected=this.companies.find(e=>e.Id===this.selected?.Id)??null}async#m(){try{const e=this.apiService?.getAsync(`${this.apiControllerName}?${this.odataParts.join("&")}`),t=await e;return t?.toList()??[]}catch(e){this.dispatchEvent(new t(e))}return[]}static{this.styles=[...b.styles,s`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}#h=new S(e=>this.#u(e));#g=new AbortController;async#u(e){this.#g.abort(),this.#g=new AbortController;const t={includeScore:!0,keys:["Name","ShortName"],shouldSort:!0,threshold:.3};if(this.searchTerm){const s=new v(this.companies,t).search(e);this.showSuggestions(s.map(e=>e.item).slice(0,15),s.length)}}onInputChanged(e){this.#h.debounce(e)}renderSelectedLeadingInputSlot(t){return e` <img leading slot="leading-icon" src=${t.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"} />`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e)}};a([i({type:String})],x.prototype,"label",null),a([i({type:String})],x.prototype,"placeholder",null),a([i({type:String})],x.prototype,"pathToSelectedText",null),a([i({type:Array})],x.prototype,"companies",null),a([i({attribute:!1})],x.prototype,"apiService",null),a([i({type:Boolean})],x.prototype,"disableAutoLoad",null),a([i({type:Array})],x.prototype,"odataParts",null),a([i({type:String})],x.prototype,"apiControllerName",null),a([i({reflect:!0,type:String})],x.prototype,"autocomplete",null),a([i({reflect:!0,type:Boolean})],x.prototype,"spellcheck",null),a([i({type:Object})],x.prototype,"renderMenuItemContentTemplate",null),x=a([o("leavitt-company-select")],x);let $=class extends l{#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#y=!1;get disableMenuOpenOnFocus(){return this.#y}set disableMenuOpenOnFocus(e){this.#y=e}#v;get methodsSelect(){return this.#v}set methodsSelect(e){this.#v=e}#b;get inputs(){return this.#b}set inputs(e){this.#b=e}constructor(){super(),this.apiService=new r(new n),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[c,d,s`
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
    `}};a([p()],$.prototype,"apiService",null),a([p()],$.prototype,"disableMenuOpenOnFocus",null),a([m("leavitt-company-select[methods-demo]")],$.prototype,"methodsSelect",null),a([h("leavitt-company-select")],$.prototype,"inputs",null),$=a([o("leavitt-company-select-playground")],$);let _=class extends l{#S=null;get refreshToken(){return this.#S}set refreshToken(e){this.#S=e}static{this.styles=[y,s``]}async firstUpdated(){const e=await u();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return e`
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
    `}};a([p()],_.prototype,"refreshToken",null),_=a([o("leavitt-company-select-demo")],_);export{_ as LeavittCompanySelectDemo};
