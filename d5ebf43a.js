import{S as e,i as t,x as s,_ as r,n as o,t as a,s as i,h as n,p as l,r as p,c,e as m,G as d,T as h}from"./f43924bd.js";import{S as u}from"./1c8b19cb.js";import"./3286da59.js";import{A as y,a as g}from"./508363fc.js";import{T as v}from"./25e1fb2c.js";import{g as S}from"./975570c0.js";import{D as b}from"./b7c4d201.js";import{F as x}from"./b7be6849.js";import"./68491de3.js";import"./35db0734.js";import"./d49dec57.js";import"./d8fb47ea.js";import"./75986af6.js";import"./72abf9b4.js";import"./c47213b1.js";import"./08f0fa74.js";import"./f42dd0a8.js";import"./27c9cb5c.js";import"./f7d1f7f2.js";import"./ff84c309.js";import"./3d226a42.js";import"./a0226597.js";import"./49ad9f2f.js";let f=class extends v{#e="Person or company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person or company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="People";get peopleApiControllerName(){return this.#s}set peopleApiControllerName(e){this.#s=e}#r="Companies";get companyApiControllerName(){return this.#r}set companyApiControllerName(e){this.#r=e}#o="Name";get pathToSelectedText(){return this.#o}set pathToSelectedText(e){this.#o=e}#a;get apiService(){return this.#a}set apiService(e){this.#a=e}#i=new b((e=>this.#n(e)));#l=new AbortController;searchTermToOData(e){const t=S(e);return t.length<1?null:t.map((e=>`contains(tolower(Name), '${e.toLowerCase()}')`)).join(" and ")}async#n(e){if(!e)return;this.#l.abort(),this.#l=new AbortController;const t=Promise.all([this.#p(e),this.#c(e)]);this.loadWhile(t);const s=await t,r=[...s[0]?.entities??[],...s[1]?.entities??[]],o=(s[0]?.odataCount??0)+(s[1]?.odataCount??0),a=new x(r,{includeScore:!0,keys:["Name"]}).search(e).sort(((e,t)=>(t?.score??0)-(e?.score??0)));this.showSuggestions(a.map((e=>e.item))??[],o??0)}async#p(t){if(!t)return null;try{const e=["top=100","count=true","compute=FullName as Name","select=Name,Id,CompanyName,ProfilePictureCdnFileName"],s=S(t);if(s.length>0){const t=s.map((e=>`contains(tolower(Name), '${e.toLowerCase()}')`)).join(" and ");e.push(`filter=${t}`)}const r=await(this.apiService?.getAsync(`${this.peopleApiControllerName}?${e.join("&")}`,{abortController:this.#l}));return r?.entities.forEach((e=>e.type="Person")),r}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}async#c(t){if(!t)return null;try{const e=["top=100","count=true","select=Name,Shortname,MarkUrl,Id"],s=S(t);if(s.length>0){const t=s.map((e=>`(contains(Name, '${e}') OR (contains(Shortname, '${e}')))`)).join(" and ");e.push(`$filter=${t}`)}const r=await(this.apiService?.getAsync(`Companies?${e.join("&")}`,{abortController:this.#l}));return r?.entities.forEach((e=>e.type="Company")),r}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}static{this.styles=[...v.styles,t`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}onInputChanged(e){this.#i.debounce(e)}renderSelectedLeadingInputSlot(e){return"Person"===e.type?s`<profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`:"Company"===e.type?s`<img leading slot="leading-icon" src=${e.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"} />`:s``}renderSuggestion(e){return"Person"===e.type?s`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
          <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
          <span slot="headline">${e.Name}</span>
          <span slot="supporting-text">${e.CompanyName}</span>
        </md-menu-item>`:"Company"===e.type?s`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
            <slot name="trailing-icon" slot="trailing-icon"></slot>
            <span slot="headline">${e.Name}</span>
            <span slot="supporting-text">${e.ShortName||"-"}</span>
            <img loading="lazy" company-mark slot="start" src=${e.MarkUrl||"https://cdn.leavitt.com/lg-mark.svg"} />
          </md-menu-item>`:s``}};r([o({type:String})],f.prototype,"label",null),r([o({type:String})],f.prototype,"placeholder",null),r([o({type:String})],f.prototype,"peopleApiControllerName",null),r([o({type:String})],f.prototype,"companyApiControllerName",null),r([o({type:String})],f.prototype,"pathToSelectedText",null),r([o({attribute:!1})],f.prototype,"apiService",null),f=r([a("leavitt-person-company-select")],f);let $=class extends i{#a;get apiService(){return this.#a}set apiService(e){this.#a=e}#m;get inputs(){return this.#m}set inputs(e){this.#m=e}#d;get methodsSelect(){return this.#d}set methodsSelect(e){this.#d=e}constructor(){super(),this.apiService=new y(new g),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[n,l,t`
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
        <leavitt-person-company-select required methods-demo .apiService=${this.apiService}></leavitt-person-company-select>
        <section buttons>
          <md-text-button @click=${()=>this.methodsSelect.reset()}>reset()</md-text-button>
          <md-text-button @click=${()=>this.methodsSelect.focus()}>focus()</md-text-button>
          <md-text-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-text-button>
        </section>
      </div>

      <h1>Attributes</h1>
      <p>Examples using required,shaped,preselected, and disabled</p>
      <div>
        <leavitt-person-company-select label="default" .apiService=${this.apiService}></leavitt-person-company-select>
        <leavitt-person-company-select label="shaped" shaped .apiService=${this.apiService}></leavitt-person-company-select>
        <leavitt-person-company-select
          label="pre-selected"
          .selected=${{Name:"Leavitt Group Enterprises",type:"Company"}}
          .apiService=${this.apiService}
        ></leavitt-person-company-select>
        <leavitt-person-company-select
          label="disabled pre-selected"
          .selected=${{FullName:"Aaron Drabeck",Id:11056,type:"Person",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"}}
          disabled
          .apiService=${this.apiService}
        ></leavitt-person-company-select>
        <leavitt-person-company-select label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-person-company-select>
        <leavitt-person-company-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-company-select>
      </div>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};r([p()],$.prototype,"apiService",null),r([c("leavitt-person-company-select")],$.prototype,"inputs",null),r([m("leavitt-person-company-select[methods-demo]")],$.prototype,"methodsSelect",null),$=r([a("leavitt-person-company-select-playground")],$);let C=class extends i{#h=null;get refreshToken(){return this.#h}set refreshToken(e){this.#h=e}static{this.styles=[u,t``]}async firstUpdated(){const e=await d();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return s`
      <story-header name="Leavitt Person/Company Select" className="LeavittPersonCompanySelect"></story-header>
      ${this.refreshToken?s`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-company-select/project.json"
          >
            <leavitt-person-company-select-playground></leavitt-person-company-select-playground>
          </smart-demo>`:h}
      <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
    `}};r([p()],C.prototype,"refreshToken",null),C=r([a("leavitt-person-company-select-demo")],C);export{C as LeavittPersonCompanySelectDemo};
