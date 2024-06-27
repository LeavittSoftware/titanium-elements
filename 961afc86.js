import{_ as e,n as t,t as s,x as r,S as l,s as a,h as i,p as o,i as n,r as p,c,e as d,G as m,T as h}from"./d0ace671.js";import{S as u}from"./9e8552c1.js";import"./41178c5b.js";import{A as v,a as g}from"./2ab92938.js";import{T as f}from"./8dfc0595.js";import{F as S}from"./b7be6849.js";import{g as x}from"./975570c0.js";import{D as y}from"./b7c4d201.js";import"./ec341a4d.js";import"./20123ed4.js";import"./725c256f.js";import"./1c72d69a.js";import"./62698f2c.js";import"./663a7052.js";import"./7577643e.js";import"./ec5758e0.js";import"./f42dd0a8.js";import"./c3dfe460.js";import"./22c1ed29.js";import"./fb6bc6bd.js";import"./3d5c916a.js";import"./dc22cb98.js";import"./49ad9f2f.js";let b=class extends f{#e="Person";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="People";get apiControllerName(){return this.#s}set apiControllerName(e){this.#s=e}#r="FullName";get pathToSelectedText(){return this.#r}set pathToSelectedText(e){this.#r=e}#l;get apiService(){return this.#l}set apiService(e){this.#l=e}#a=["top=15","orderby=FullName","select=FullName,CompanyName,Id,ProfilePictureCdnFileName","count=true"];get odataParts(){return this.#a}set odataParts(e){this.#a=e}#i=!1;get enablePeoplePreloading(){return this.#i}set enablePeoplePreloading(e){this.#i=e}#o="remote";get searchType(){return this.#o}set searchType(e){this.#o=e}#n=[];get people(){return this.#n}set people(e){this.#n=e}#p=e=>r`<md-menu-item .item=${e}>
      <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
      <span slot="headline">${e.FullName}</span>
      <span slot="supporting-text">${e.CompanyName}</span>
    </md-menu-item>`;get renderMenuItemContentTemplate(){return this.#p}set renderMenuItemContentTemplate(e){this.#p=e}#c=new y((e=>this.#d(e)));#m=new AbortController;async firstUpdated(){this.enablePeoplePreloading&&!this.people.length&&this.apiService&&this.reloadPeople()}async updated(e){e.has("people")&&this.people&&(this.defaultSuggestions=this.people)}searchTermToOData(e){const t=x(e);return t.length<1?null:t.map((e=>`contains(tolower(FullName), '${e.toLowerCase()}')`)).join(" and ")}async reloadPeople(){this.people=await this.#h()}async#h(){const e=this.odataParts.filter((e=>!e.startsWith("top=")));try{const t=this.apiService?.getAsync(`${this.apiControllerName}?${e.join("&")}`),s=await t;return s?.toList()??[]}catch(e){this.dispatchEvent(new l(e))}return[]}async#d(e){if(this.#m.abort(),this.#m=new AbortController,e)if("local"===this.searchType){const t={includeScore:!0,keys:["FullName"],shouldSort:!0,threshold:.3};if(this.searchTerm){const s=new S(this.people,t).search(e);this.showSuggestions(s.map((e=>e.item)).slice(0,15),s.length)}}else try{const t=this.searchTermToOData(e),s=structuredClone(this.odataParts);if(t){const e=s.findIndex((e=>e.startsWith("filter=")||e.startsWith("$filter=")));e>-1?s[e]=[s[e],t].join(" and "):s.push(`filter=${t}`)}const r=this.apiService.getAsync(`${this.apiControllerName}?${s.join("&")}`,{abortController:this.#m});this.loadWhile(r);const l=await r;this.showSuggestions(l?.entities??[],l?.odataCount??0)}catch(e){e?.message?.includes("Abort error")||this.dispatchEvent(new l(e))}}onInputChanged(e){this.#c.debounce(e)}renderSelectedLeadingInputSlot(e){return r` <profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e)}};e([t({type:String})],b.prototype,"label",null),e([t({type:String})],b.prototype,"placeholder",null),e([t({type:String})],b.prototype,"apiControllerName",null),e([t({type:String})],b.prototype,"pathToSelectedText",null),e([t({attribute:!1})],b.prototype,"apiService",null),e([t({type:Array})],b.prototype,"odataParts",null),e([t({type:Boolean,attribute:"enable-people-preloading"})],b.prototype,"enablePeoplePreloading",null),e([t({type:String,attribute:"search-type"})],b.prototype,"searchType",null),e([t({type:Array})],b.prototype,"people",null),e([t({type:Object})],b.prototype,"renderMenuItemContentTemplate",null),b=e([s("leavitt-person-select")],b);let C=class extends a{#l;get apiService(){return this.#l}set apiService(e){this.#l=e}#u;get inputs(){return this.#u}set inputs(e){this.#u=e}#v;get methodsSelect(){return this.#v}set methodsSelect(e){this.#v=e}constructor(){super(),this.apiService=new v(new g),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[i,o,n`
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
    `]}render(){return r`
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

      <h1>Local searching</h1>
      <div row>
        <leavitt-person-select
          search-type="local"
          .people=${[{Id:1,FullName:"Taylor Swift",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"},{Id:2,FullName:"Jack Black",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"}]}
        ></leavitt-person-select>
      </div>

      <h1>Custom menu item template</h1>
      <div row>
        <leavitt-person-select
          search-type="local"
          .renderMenuItemContentTemplate=${e=>r` <md-menu-item .item=${e}>
              <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
              <span slot="headline">${e.FullName}</span>
              <span slot="supporting-text">${e.CompanyName}</span>
              <span slot="overline">${e.Status}</span>
            </md-menu-item>`}
          .people=${[{Id:1,FullName:"Taylor Swift",Status:"Admin",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"},{Id:2,"disable-item":!0,FullName:"Jack Black",Status:"User",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"}]}
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
    `}};e([p()],C.prototype,"apiService",null),e([c("leavitt-person-select")],C.prototype,"inputs",null),e([d("leavitt-person-select[methods-demo]")],C.prototype,"methodsSelect",null),C=e([s("leavitt-person-select-playground")],C);let P=class extends a{#g=null;get refreshToken(){return this.#g}set refreshToken(e){this.#g=e}static{this.styles=[u,n``]}async firstUpdated(){const e=await m();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return r`
      <story-header name="Leavitt Person Select" className="LeavittPersonSelect"></story-header>
      ${this.refreshToken?r`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-select/project.json"
            ><leavitt-person-select-playground></leavitt-person-select-playground>
          </smart-demo>`:h}
      <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
    `}};e([p()],P.prototype,"refreshToken",null),P=e([s("leavitt-person-select-demo")],P);export{P as LeavittPersonSelectDemo};
