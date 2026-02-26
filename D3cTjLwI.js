import{S as e,b as t,c as a,_ as o,n as s,t as r,i,A as l,U as n,r as c,e as p}from"./BkdWKSMI.js";import{S as m}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import{T as h}from"./CletilfP.js";import{g as d}from"./OXmljVLM.js";import{D as u}from"./DTS7lhmZ.js";import{F as v}from"./CkDJilkW.js";import{g as y}from"./wLIUKFBh.js";import"./pNeA5_IP.js";import"./CIHPGdiZ.js";import"./DbnfmX2U.js";let g=class extends h{#e="Person or company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person or company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#a="People";get peopleApiControllerName(){return this.#a}set peopleApiControllerName(e){this.#a=e}#o="Companies";get companyApiControllerName(){return this.#o}set companyApiControllerName(e){this.#o=e}#s="Name";get pathToSelectedText(){return this.#s}set pathToSelectedText(e){this.#s=e}#r;get apiService(){return this.#r}set apiService(e){this.#r=e}#i="off";get autocomplete(){return this.#i}set autocomplete(e){this.#i=e}#l=!1;get spellcheck(){return this.#l}set spellcheck(e){this.#l=e}#n=new u(e=>this.#c(e));#p=new AbortController;searchTermToOData(e){const t=d(e);return t.length<1?null:t.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ")}async#c(e){if(!e)return;this.#p.abort(),this.#p=new AbortController;const t=Promise.all([this.#m(e),this.#h(e)]);this.loadWhile(t);const a=await t,o=[...a[0]?.entities??[],...a[1]?.entities??[]],s=(a[0]?.odataCount??0)+(a[1]?.odataCount??0),r=new v(o,{includeScore:!0,keys:["Name"],shouldSort:!0,ignoreLocation:!0,threshold:.3}).search(e);this.showSuggestions(r.map(e=>e.item)??[],s??0)}async#m(t){if(!t)return null;try{const e=["top=100","count=true","compute=FullName as Name","select=Name,Id,CompanyName,ProfilePictureCdnFileName"],a=d(t);if(a.length>0){const t=a.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ");e.push(`filter=${t}`)}const o=await(this.apiService?.getAsync(`${this.peopleApiControllerName}?${e.join("&")}`,{abortController:this.#p}));return o?.entities.forEach(e=>e.type="Person"),o}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}async#h(t){if(!t)return null;try{const e=["top=100","count=true","select=Name,Shortname,MarkUrl,DarkMarkUrl,Id"],a=d(t);if(a.length>0){const t=a.map(e=>`(contains(Name, '${e}') OR (contains(Shortname, '${e}')))`).join(" and ");e.push(`$filter=${t}`)}const o=await(this.apiService?.getAsync(`Companies?${e.join("&")}`,{abortController:this.#p}));return o?.entities.forEach(e=>e.type="Company"),o}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}static{this.styles=[...h.styles,t`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}onInputChanged(e){this.#n.debounce(e)}renderSelectedLeadingInputSlot(e){return"Person"===e.type?a`<profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`:"Company"===e.type?a`<img leading slot="leading-icon" src=${y(e,this.themePreference)} />`:a``}renderSuggestion(e){return"Person"===e.type?a`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
          <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
          <span slot="headline">${e.Name}</span>
          <span slot="supporting-text">${e.CompanyName}</span>
        </md-menu-item>`:"Company"===e.type?a`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
            <slot name="trailing-icon" slot="trailing-icon"></slot>
            <span slot="headline">${e.Name}</span>
            <span slot="supporting-text">${e.ShortName||"-"}</span>
            <img loading="lazy" company-mark slot="start" src=${y(e,this.themePreference)} />
          </md-menu-item>`:a``}};o([s({type:String})],g.prototype,"label",null),o([s({type:String})],g.prototype,"placeholder",null),o([s({type:String})],g.prototype,"peopleApiControllerName",null),o([s({type:String})],g.prototype,"companyApiControllerName",null),o([s({type:String})],g.prototype,"pathToSelectedText",null),o([s({attribute:!1})],g.prototype,"apiService",null),o([s({reflect:!0,type:String})],g.prototype,"autocomplete",null),o([s({reflect:!0,type:Boolean})],g.prototype,"spellcheck",null),g=o([r("leavitt-person-company-select")],g);let S=class extends i{#r;get apiService(){return this.#r}set apiService(e){this.#r=e}#d;get methodsSelect(){return this.#d}set methodsSelect(e){this.#d=e}constructor(){super(),this.apiService=new l(n),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[m]}render(){return a`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person company select" level1Href="/leavitt-person-company-select" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person Company Select" className="LeavittPersonCompanySelect"></story-header>

            <div>
              <h1>Methods</h1>
              <item-row>
                <leavitt-person-company-select required methods-demo .apiService=${this.apiService}></leavitt-person-company-select>
              </item-row>
              <section buttons>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Attributes</h1>
              <item-row>
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
                <leavitt-person-company-select
                  label="placeholder"
                  placeholder="placeholder text"
                  .apiService=${this.apiService}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${this.apiService}
                ></leavitt-person-company-select>
              </item-row>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};o([c()],S.prototype,"apiService",null),o([p("leavitt-person-company-select[methods-demo]")],S.prototype,"methodsSelect",null),S=o([r("leavitt-person-company-select-demo")],S);export{S as LeavittPersonCompanySelectDemo};
