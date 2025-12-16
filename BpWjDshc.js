import{S as e,c as t,x as s,_ as r,n as o,t as a,i,A as l,U as n,h as p,p as c,r as m,f as d,e as h}from"./BriKlvrl.js";import{S as u}from"./BYDhJ-qH.js";import"./B5dYKavm.js";import{T as y}from"./4rLc9xfk.js";import{g}from"./OXmljVLM.js";import{D as v}from"./DTS7lhmZ.js";import{F as S}from"./CkDJilkW.js";import{g as b}from"./wLIUKFBh.js";import"./Um3mYSyR.js";import"./CoIpDvd9.js";import"./doSzMn6v.js";import"./c5f0ayQ_.js";import"./9nIrBYgP.js";let x=class extends y{#e="Person or company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person or company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="People";get peopleApiControllerName(){return this.#s}set peopleApiControllerName(e){this.#s=e}#r="Companies";get companyApiControllerName(){return this.#r}set companyApiControllerName(e){this.#r=e}#o="Name";get pathToSelectedText(){return this.#o}set pathToSelectedText(e){this.#o=e}#a;get apiService(){return this.#a}set apiService(e){this.#a=e}#i="off";get autocomplete(){return this.#i}set autocomplete(e){this.#i=e}#l=!1;get spellcheck(){return this.#l}set spellcheck(e){this.#l=e}#n=new v(e=>this.#p(e));#c=new AbortController;searchTermToOData(e){const t=g(e);return t.length<1?null:t.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ")}async#p(e){if(!e)return;this.#c.abort(),this.#c=new AbortController;const t=Promise.all([this.#m(e),this.#d(e)]);this.loadWhile(t);const s=await t,r=[...s[0]?.entities??[],...s[1]?.entities??[]],o=(s[0]?.odataCount??0)+(s[1]?.odataCount??0),a=new S(r,{includeScore:!0,keys:["Name"],shouldSort:!0,ignoreLocation:!0,threshold:.3}).search(e);this.showSuggestions(a.map(e=>e.item)??[],o??0)}async#m(t){if(!t)return null;try{const e=["top=100","count=true","compute=FullName as Name","select=Name,Id,CompanyName,ProfilePictureCdnFileName"],s=g(t);if(s.length>0){const t=s.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ");e.push(`filter=${t}`)}const r=await(this.apiService?.getAsync(`${this.peopleApiControllerName}?${e.join("&")}`,{abortController:this.#c}));return r?.entities.forEach(e=>e.type="Person"),r}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}async#d(t){if(!t)return null;try{const e=["top=100","count=true","select=Name,Shortname,MarkUrl,DarkMarkUrl,Id"],s=g(t);if(s.length>0){const t=s.map(e=>`(contains(Name, '${e}') OR (contains(Shortname, '${e}')))`).join(" and ");e.push(`$filter=${t}`)}const r=await(this.apiService?.getAsync(`Companies?${e.join("&")}`,{abortController:this.#c}));return r?.entities.forEach(e=>e.type="Company"),r}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}static{this.styles=[...y.styles,t`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}onInputChanged(e){this.#n.debounce(e)}renderSelectedLeadingInputSlot(e){return"Person"===e.type?s`<profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`:"Company"===e.type?s`<img leading slot="leading-icon" src=${b(e,this.themePreference)} />`:s``}renderSuggestion(e){return"Person"===e.type?s`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
          <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
          <span slot="headline">${e.Name}</span>
          <span slot="supporting-text">${e.CompanyName}</span>
        </md-menu-item>`:"Company"===e.type?s`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
            <slot name="trailing-icon" slot="trailing-icon"></slot>
            <span slot="headline">${e.Name}</span>
            <span slot="supporting-text">${e.ShortName||"-"}</span>
            <img loading="lazy" company-mark slot="start" src=${b(e,this.themePreference)} />
          </md-menu-item>`:s``}};r([o({type:String})],x.prototype,"label",null),r([o({type:String})],x.prototype,"placeholder",null),r([o({type:String})],x.prototype,"peopleApiControllerName",null),r([o({type:String})],x.prototype,"companyApiControllerName",null),r([o({type:String})],x.prototype,"pathToSelectedText",null),r([o({attribute:!1})],x.prototype,"apiService",null),r([o({reflect:!0,type:String})],x.prototype,"autocomplete",null),r([o({reflect:!0,type:Boolean})],x.prototype,"spellcheck",null),x=r([a("leavitt-person-company-select")],x);let f=class extends i{#a;get apiService(){return this.#a}set apiService(e){this.#a=e}#h;get inputs(){return this.#h}set inputs(e){this.#h=e}#u;get methodsSelect(){return this.#u}set methodsSelect(e){this.#u=e}constructor(){super(),this.apiService=new l(n),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[p,c,t`
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
    `}};r([m()],f.prototype,"apiService",null),r([d("leavitt-person-company-select")],f.prototype,"inputs",null),r([h("leavitt-person-company-select[methods-demo]")],f.prototype,"methodsSelect",null),f=r([a("leavitt-person-company-select-playground")],f);let $=class extends i{static{this.styles=[u,t``]}render(){return s`
      <story-header name="Leavitt Person/Company Select" className="LeavittPersonCompanySelect"></story-header>
      <leavitt-person-company-select-playground></leavitt-person-company-select-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
    `}};$=r([a("leavitt-person-company-select-demo")],$);export{$ as LeavittPersonCompanySelectDemo};
