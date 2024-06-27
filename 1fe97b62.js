import{x as e,S as t,i as s,_ as a,n as i,t as o,s as l,h as r,p as n,r as c,e as p,c as d,G as m,T as h}from"./d0ace671.js";import{S as u}from"./9e8552c1.js";import"./41178c5b.js";import{A as g,a as y}from"./2ab92938.js";import"./1c72d69a.js";import"./3d5c916a.js";import{F as v}from"./b7be6849.js";import{T as b}from"./8dfc0595.js";import{D as S}from"./b7c4d201.js";import"./ec341a4d.js";import"./62698f2c.js";import"./663a7052.js";import"./7577643e.js";import"./ec5758e0.js";import"./725c256f.js";import"./f42dd0a8.js";import"./c3dfe460.js";import"./22c1ed29.js";import"./fb6bc6bd.js";import"./dc22cb98.js";import"./20123ed4.js";import"./49ad9f2f.js";let x=class extends b{#e="Company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="Name";get pathToSelectedText(){return this.#s}set pathToSelectedText(e){this.#s=e}#a=[];get companies(){return this.#a}set companies(e){this.#a=e}#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#o=!1;get disableAutoLoad(){return this.#o}set disableAutoLoad(e){this.#o=e}#l=["orderby=Name","select=Name,ShortName,MarkUrl,Id"];get odataParts(){return this.#l}set odataParts(e){this.#l=e}#r="Companies";get apiControllerName(){return this.#r}set apiControllerName(e){this.#r=e}#n=t=>e`<md-menu-item .item=${t}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${t.Name}</span>
      <span slot="supporting-text">${t.ShortName||"-"}</span>
      <img loading="lazy" company-mark slot="start" src=${t.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"} />
    </md-menu-item>`;get renderMenuItemContentTemplate(){return this.#n}set renderMenuItemContentTemplate(e){this.#n=e}async firstUpdated(){this.disableAutoLoad||this.companies.length||!this.apiService||this.#c()}async updated(e){e.has("companies")&&this.companies&&(this.defaultSuggestions=this.companies)}async reloadCompanies(){this.disableAutoLoad||console.warn("leavitt-company-select reloadCompanies method has been called manually without setting disableAutoLoad"),await this.#c()}async#c(){this.companies=await this.#p(),this.selected=this.companies.find((e=>e.Id===this.selected?.Id))??null}async#p(){try{const e=this.apiService?.getAsync(`${this.apiControllerName}?${this.odataParts.join("&")}`),t=await e;return t?.toList()??[]}catch(e){this.dispatchEvent(new t(e))}return[]}static{this.styles=[...b.styles,s`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}#d=new S((e=>this.#m(e)));#h=new AbortController;async#m(e){this.#h.abort(),this.#h=new AbortController;const t={includeScore:!0,keys:["Name","ShortName"],shouldSort:!0,threshold:.3};if(this.searchTerm){const s=new v(this.companies,t).search(e);this.showSuggestions(s.map((e=>e.item)).slice(0,15),s.length)}}onInputChanged(e){this.#d.debounce(e)}renderSelectedLeadingInputSlot(t){return e` <img leading slot="leading-icon" src=${t.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"} />`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e)}};a([i({type:String})],x.prototype,"label",null),a([i({type:String})],x.prototype,"placeholder",null),a([i({type:String})],x.prototype,"pathToSelectedText",null),a([i({type:Array})],x.prototype,"companies",null),a([i({attribute:!1})],x.prototype,"apiService",null),a([i({type:Boolean})],x.prototype,"disableAutoLoad",null),a([i({type:Array})],x.prototype,"odataParts",null),a([i({type:String})],x.prototype,"apiControllerName",null),a([i({type:Object})],x.prototype,"renderMenuItemContentTemplate",null),x=a([o("leavitt-company-select")],x);let $=class extends l{#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#u=!1;get disableMenuOpenOnFocus(){return this.#u}set disableMenuOpenOnFocus(e){this.#u=e}#g;get methodsSelect(){return this.#g}set methodsSelect(e){this.#g=e}#y;get inputs(){return this.#y}set inputs(e){this.#y=e}constructor(){super(),this.apiService=new g(new y),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[r,n,s`
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
    `}};a([c()],$.prototype,"apiService",null),a([c()],$.prototype,"disableMenuOpenOnFocus",null),a([p("leavitt-company-select[methods-demo]")],$.prototype,"methodsSelect",null),a([d("leavitt-company-select")],$.prototype,"inputs",null),$=a([o("leavitt-company-select-playground")],$);let _=class extends l{#v=null;get refreshToken(){return this.#v}set refreshToken(e){this.#v=e}static{this.styles=[u,s``]}async firstUpdated(){const e=await m();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return e`
      <story-header name="Leavitt Company Select" className="LeavittCompanySelect"></story-header>
      ${this.refreshToken?e`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-company-select/project.json"
          >
            <leavitt-company-select-playground></leavitt-company-select-playground>
          </smart-demo>`:h}
      <api-docs src="./custom-elements.json" selected="leavitt-company-select"></api-docs>
    `}};a([c()],_.prototype,"refreshToken",null),_=a([o("leavitt-company-select-demo")],_);export{_ as LeavittCompanySelectDemo};
