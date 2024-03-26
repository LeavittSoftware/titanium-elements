import{S as e,i as t,x as s,_ as a,n as i,t as o,s as r,h as l,p as n,r as c,e as p,c as d,G as m,T as h}from"./f43924bd.js";import{S as u}from"./1c8b19cb.js";import"./3286da59.js";import{A as g,a as y}from"./508363fc.js";import"./d8fb47ea.js";import"./3d226a42.js";import{F as v}from"./b7be6849.js";import{T as b}from"./25e1fb2c.js";import{D as S}from"./b7c4d201.js";import"./68491de3.js";import"./75986af6.js";import"./72abf9b4.js";import"./c47213b1.js";import"./08f0fa74.js";import"./d49dec57.js";import"./f42dd0a8.js";import"./27c9cb5c.js";import"./f7d1f7f2.js";import"./ff84c309.js";import"./a0226597.js";import"./35db0734.js";import"./49ad9f2f.js";let x=class extends b{#e="Company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="Name";get pathToSelectedText(){return this.#s}set pathToSelectedText(e){this.#s=e}#a=[];get companies(){return this.#a}set companies(e){this.#a=e}#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#o=!1;get disableAutoLoad(){return this.#o}set disableAutoLoad(e){this.#o=e}#r=["orderby=Name","select=Name,ShortName,MarkUrl,Id"];get odataParts(){return this.#r}set odataParts(e){this.#r=e}#l="Companies";get apiControllerName(){return this.#l}set apiControllerName(e){this.#l=e}async firstUpdated(){this.disableAutoLoad||this.companies.length||!this.apiService||this.#n()}async updated(e){e.has("companies")&&this.companies&&(this.defaultSuggestions=this.companies)}async reloadCompanies(){this.disableAutoLoad||console.warn("leavitt-company-select reloadCompanies method has been called manually without setting disableAutoLoad"),await this.#n()}async#n(){this.companies=await this.#c(),this.selected=this.companies.find((e=>e.Id===this.selected?.Id))??null}async#c(){try{const e=this.apiService?.getAsync(`${this.apiControllerName}?${this.odataParts.join("&")}`),t=await e;return t?.toList()??[]}catch(t){this.dispatchEvent(new e(t))}return[]}static{this.styles=[...b.styles,t`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}#p=new S((e=>this.#d(e)));#m=new AbortController;async#d(e){this.#m.abort(),this.#m=new AbortController;const t={includeScore:!0,keys:["Name","ShortName"],shouldSort:!0,threshold:.3};if(this.searchTerm){const s=new v(this.companies,t).search(e);this.showSuggestions(s.map((e=>e.item)).slice(0,15),s.length)}}onInputChanged(e){this.#p.debounce(e)}renderSelectedLeadingInputSlot(e){return s` <img leading slot="leading-icon" src=${e.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"} />`}renderSuggestion(e){return s`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${e.Name}</span>
      <span slot="supporting-text">${e.ShortName||"-"}</span>
      <img loading="lazy" company-mark slot="start" src=${e.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"} />
    </md-menu-item>`}};a([i({type:String})],x.prototype,"label",null),a([i({type:String})],x.prototype,"placeholder",null),a([i({type:String})],x.prototype,"pathToSelectedText",null),a([i({type:Array})],x.prototype,"companies",null),a([i({attribute:!1})],x.prototype,"apiService",null),a([i({type:Boolean})],x.prototype,"disableAutoLoad",null),a([i({type:Array})],x.prototype,"odataParts",null),a([i({type:String})],x.prototype,"apiControllerName",null),x=a([o("leavitt-company-select")],x);let j=class extends r{#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#h;get methodsSelect(){return this.#h}set methodsSelect(e){this.#h=e}#u;get inputs(){return this.#u}set inputs(e){this.#u=e}constructor(){super(),this.apiService=new g(new y),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[l,n,t`
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
    `]}render(){return s`
      <user-manager disableAutoload></user-manager>
      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-company-select
          @selected=${e=>console.log("selected change 1",e.target.selected)}
          style="width: 400px;"
          methods-demo
          required
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <section buttons>
          <md-outlined-button @click=${()=>this.methodsSelect.reset()}>reset()</md-outlined-button>
          <md-outlined-button @click=${()=>this.methodsSelect.focus()}>focus()</md-outlined-button>
          <md-outlined-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-outlined-button>
          <md-outlined-button @click=${()=>this.methodsSelect.required=!this.methodsSelect.required}>Toggle required</md-outlined-button>

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

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};a([c()],j.prototype,"apiService",null),a([p("leavitt-company-select[methods-demo]")],j.prototype,"methodsSelect",null),a([d("leavitt-company-select")],j.prototype,"inputs",null),j=a([o("leavitt-company-select-playground")],j);let $=class extends r{#g=null;get refreshToken(){return this.#g}set refreshToken(e){this.#g=e}static{this.styles=[u,t``]}async firstUpdated(){const e=await m();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return s`
      <story-header name="Leavitt Company Select" className="LeavittCompanySelect"></story-header>
      ${this.refreshToken?s`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-company-select/project.json"
          >
            <leavitt-company-select-playground></leavitt-company-select-playground>
          </smart-demo>`:h}
      <api-docs src="./custom-elements.json" selected="leavitt-company-select"></api-docs>
    `}};a([c()],$.prototype,"refreshToken",null),$=a([o("leavitt-company-select-demo")],$);export{$ as LeavittCompanySelectDemo};
