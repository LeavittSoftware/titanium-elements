import{_ as e,n as t,t as s,S as r,x as i,s as l,h as a,p as o,i as n,r as p,c,e as d,G as h,T as u}from"./f43924bd.js";import{S as m}from"./1c8b19cb.js";import"./3286da59.js";import{A as g,a as v}from"./508363fc.js";import{T as S}from"./25e1fb2c.js";import{g as b}from"./975570c0.js";import{D as f}from"./b7c4d201.js";import"./68491de3.js";import"./35db0734.js";import"./d49dec57.js";import"./d8fb47ea.js";import"./75986af6.js";import"./72abf9b4.js";import"./c47213b1.js";import"./08f0fa74.js";import"./f42dd0a8.js";import"./27c9cb5c.js";import"./f7d1f7f2.js";import"./ff84c309.js";import"./3d226a42.js";import"./a0226597.js";import"./49ad9f2f.js";let x=class extends S{#e="Person";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="People";get apiControllerName(){return this.#s}set apiControllerName(e){this.#s=e}#r="FullName";get pathToSelectedText(){return this.#r}set pathToSelectedText(e){this.#r=e}#i=e=>e.CompanyName;get pathToSupportingText(){return this.#i}set pathToSupportingText(e){this.#i=e}#l;get apiService(){return this.#l}set apiService(e){this.#l=e}#a=["top=15","orderby=FullName","select=FullName,CompanyName,Id,ProfilePictureCdnFileName","count=true"];get odataParts(){return this.#a}set odataParts(e){this.#a=e}#o=!1;get enablePeoplePreloading(){return this.#o}set enablePeoplePreloading(e){this.#o=e}#n=[];get people(){return this.#n}set people(e){this.#n=e}#p=new f((e=>this.#c(e)));#d=new AbortController;async firstUpdated(){this.enablePeoplePreloading&&!this.people.length&&this.apiService&&this.reloadPeople()}async updated(e){e.has("people")&&this.people&&(this.defaultSuggestions=this.people)}searchTermToOData(e){const t=b(e);return t.length<1?null:t.map((e=>`contains(tolower(FullName), '${e.toLowerCase()}')`)).join(" and ")}async reloadPeople(){this.people=await this.#h()}async#h(){const e=this.odataParts.filter((e=>!e.startsWith("top=")));try{const t=this.apiService?.getAsync(`${this.apiControllerName}?${e.join("&")}`),s=await t;return s?.toList()??[]}catch(e){this.dispatchEvent(new r(e))}return[]}async#c(e){if(e){this.#d.abort(),this.#d=new AbortController;try{const t=this.searchTermToOData(e),s=structuredClone(this.odataParts);if(t){const e=s.findIndex((e=>e.startsWith("filter=")||e.startsWith("$filter=")));e>-1?s[e]=[s[e],t].join(" and "):s.push(`filter=${t}`)}const r=this.apiService.getAsync(`${this.apiControllerName}?${s.join("&")}`,{abortController:this.#d});this.loadWhile(r);const i=await r;this.showSuggestions(i?.entities??[],i?.odataCount??0)}catch(e){e?.message?.includes("Abort error")||this.dispatchEvent(new r(e))}}}onInputChanged(e){this.#p.debounce(e)}renderSelectedLeadingInputSlot(e){return i` <profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`}renderSuggestion(e){return i`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
      <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
      <span slot="headline">${e.FullName}</span>
      <span slot="supporting-text">${this.pathToSupportingText(e)}</span>
    </md-menu-item>`}};e([t({type:String})],x.prototype,"label",null),e([t({type:String})],x.prototype,"placeholder",null),e([t({type:String})],x.prototype,"apiControllerName",null),e([t({type:String})],x.prototype,"pathToSelectedText",null),e([t({type:Object})],x.prototype,"pathToSupportingText",null),e([t({attribute:!1})],x.prototype,"apiService",null),e([t({type:Array})],x.prototype,"odataParts",null),e([t({type:Boolean,attribute:"enable-people-preloading"})],x.prototype,"enablePeoplePreloading",null),e([t({type:Array})],x.prototype,"people",null),x=e([s("leavitt-person-select")],x);let y=class extends l{#l;get apiService(){return this.#l}set apiService(e){this.#l=e}#u;get inputs(){return this.#u}set inputs(e){this.#u=e}#m;get methodsSelect(){return this.#m}set methodsSelect(e){this.#m=e}constructor(){super(),this.apiService=new g(new v),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[a,o,n`
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
      <user-manager disableAutoload></user-manager>
      <h1>Demo</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-person-select required methods-demo .apiService=${this.apiService}></leavitt-person-select>
        <section buttons>
          <md-text-button @click=${()=>this.methodsSelect.reset()}>reset()</md-text-button>
          <md-text-button @click=${()=>this.methodsSelect.focus()}>focus()</md-text-button>
          <md-text-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-text-button>
        </section>
      </div>

      <h1>Pre-load people</h1>
      <div row>
        <leavitt-person-select
          .odataParts=${["top=15","filter=contains(LastName, 'Leavitt')","orderby=FullName","select=FullName,CompanyName,Id,ProfilePictureCdnFileName","count=true"]}
          enable-people-preloading
          .apiService=${this.apiService}
        ></leavitt-person-select>
      </div>

      <h1>Attributes</h1>
      <p>Default person select</p>
      <div>
        <leavitt-person-select label="default" .apiService=${this.apiService}></leavitt-person-select>

        <leavitt-person-select
          label="prefilled"
          .selected=${{Id:11056,FullName:"Aaron D.",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"}}
          .apiService=${this.apiService}
        ></leavitt-person-select>

        <leavitt-person-select label="shaped" shaped .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="placeholder" placeholder="My placeholder" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="Supporting text" supportingText="supporting text" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="disabled" disabled .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="Suffix text" suffixText="Admin" .apiService=${this.apiService}></leavitt-person-select>
      </div>
    `}};e([p()],y.prototype,"apiService",null),e([c("leavitt-person-select")],y.prototype,"inputs",null),e([d("leavitt-person-select[methods-demo]")],y.prototype,"methodsSelect",null),y=e([s("leavitt-person-select-playground")],y);let $=class extends l{#g=null;get refreshToken(){return this.#g}set refreshToken(e){this.#g=e}static{this.styles=[m,n``]}async firstUpdated(){const e=await h();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return i`
      <story-header name="Leavitt Person Select" className="LeavittPersonSelect"></story-header>
      ${this.refreshToken?i`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-select/project.json"
            ><leavitt-person-select-playground></leavitt-person-select-playground>
          </smart-demo>`:u}
      <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
    `}};e([p()],$.prototype,"refreshToken",null),$=e([s("leavitt-person-select-demo")],$);export{$ as LeavittPersonSelectDemo};
