import{S as e,c as t,x as s,_ as r,n as o,t as a,i,A as l,d as n,h as c,p,r as m,f as d,e as h,G as u,E as y}from"./C3FxRHaz.js";import{S as g}from"./kaVdmEIP.js";import"./B08RhqQ_.js";import{T as v}from"./CD4EFCHI.js";import{g as S}from"./OXmljVLM.js";import{D as f}from"./DTS7lhmZ.js";import{F as b}from"./CkDJilkW.js";import{g as x}from"./wLIUKFBh.js";import"./DLazVuKu.js";import"./oAxV7t8W.js";import"./DmUDdBMC.js";import"./B3E7ArL7.js";import"./Ci3N8sjE.js";let $=class extends v{#e="Person or company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person or company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="People";get peopleApiControllerName(){return this.#s}set peopleApiControllerName(e){this.#s=e}#r="Companies";get companyApiControllerName(){return this.#r}set companyApiControllerName(e){this.#r=e}#o="Name";get pathToSelectedText(){return this.#o}set pathToSelectedText(e){this.#o=e}#a;get apiService(){return this.#a}set apiService(e){this.#a=e}#i="off";get autocomplete(){return this.#i}set autocomplete(e){this.#i=e}#l=!1;get spellcheck(){return this.#l}set spellcheck(e){this.#l=e}#n=new f(e=>this.#c(e));#p=new AbortController;searchTermToOData(e){const t=S(e);return t.length<1?null:t.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ")}async#c(e){if(!e)return;this.#p.abort(),this.#p=new AbortController;const t=Promise.all([this.#m(e),this.#d(e)]);this.loadWhile(t);const s=await t,r=[...s[0]?.entities??[],...s[1]?.entities??[]],o=(s[0]?.odataCount??0)+(s[1]?.odataCount??0),a=new b(r,{includeScore:!0,keys:["Name"],shouldSort:!0,ignoreLocation:!0,threshold:.3}).search(e);this.showSuggestions(a.map(e=>e.item)??[],o??0)}async#m(t){if(!t)return null;try{const e=["top=100","count=true","compute=FullName as Name","select=Name,Id,CompanyName,ProfilePictureCdnFileName"],s=S(t);if(s.length>0){const t=s.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ");e.push(`filter=${t}`)}const r=await(this.apiService?.getAsync(`${this.peopleApiControllerName}?${e.join("&")}`,{abortController:this.#p}));return r?.entities.forEach(e=>e.type="Person"),r}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}async#d(t){if(!t)return null;try{const e=["top=100","count=true","select=Name,Shortname,MarkUrl,DarkMarkUrl,Id"],s=S(t);if(s.length>0){const t=s.map(e=>`(contains(Name, '${e}') OR (contains(Shortname, '${e}')))`).join(" and ");e.push(`$filter=${t}`)}const r=await(this.apiService?.getAsync(`Companies?${e.join("&")}`,{abortController:this.#p}));return r?.entities.forEach(e=>e.type="Company"),r}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}static{this.styles=[...v.styles,t`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}onInputChanged(e){this.#n.debounce(e)}renderSelectedLeadingInputSlot(e){return"Person"===e.type?s`<profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`:"Company"===e.type?s`<img leading slot="leading-icon" src=${x(e,this.themePreference)} />`:s``}renderSuggestion(e){return"Person"===e.type?s`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
          <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
          <span slot="headline">${e.Name}</span>
          <span slot="supporting-text">${e.CompanyName}</span>
        </md-menu-item>`:"Company"===e.type?s`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
            <slot name="trailing-icon" slot="trailing-icon"></slot>
            <span slot="headline">${e.Name}</span>
            <span slot="supporting-text">${e.ShortName||"-"}</span>
            <img loading="lazy" company-mark slot="start" src=${x(e,this.themePreference)} />
          </md-menu-item>`:s``}};r([o({type:String})],$.prototype,"label",null),r([o({type:String})],$.prototype,"placeholder",null),r([o({type:String})],$.prototype,"peopleApiControllerName",null),r([o({type:String})],$.prototype,"companyApiControllerName",null),r([o({type:String})],$.prototype,"pathToSelectedText",null),r([o({attribute:!1})],$.prototype,"apiService",null),r([o({reflect:!0,type:String})],$.prototype,"autocomplete",null),r([o({reflect:!0,type:Boolean})],$.prototype,"spellcheck",null),$=r([a("leavitt-person-company-select")],$);let C=class extends i{#a;get apiService(){return this.#a}set apiService(e){this.#a=e}#h;get inputs(){return this.#h}set inputs(e){this.#h=e}#u;get methodsSelect(){return this.#u}set methodsSelect(e){this.#u=e}constructor(){super(),this.apiService=new l(new n),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[c,p,t`
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
    `}};r([m()],C.prototype,"apiService",null),r([d("leavitt-person-company-select")],C.prototype,"inputs",null),r([h("leavitt-person-company-select[methods-demo]")],C.prototype,"methodsSelect",null),C=r([a("leavitt-person-company-select-playground")],C);let N=class extends i{#y=null;get refreshToken(){return this.#y}set refreshToken(e){this.#y=e}static{this.styles=[g,t``]}async firstUpdated(){const e=await u();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return s`
      <story-header name="Leavitt Person/Company Select" className="LeavittPersonCompanySelect"></story-header>
      ${this.refreshToken?s`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-company-select/project.json"
          >
            <leavitt-person-company-select-playground></leavitt-person-company-select-playground>
          </smart-demo>`:y}
      <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
    `}};r([m()],N.prototype,"refreshToken",null),N=r([a("leavitt-person-company-select-demo")],N);export{N as LeavittPersonCompanySelectDemo};
