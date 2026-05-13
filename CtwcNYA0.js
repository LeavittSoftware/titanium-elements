import{S as e,b as t,c as o,_ as a,n as r,t as l,i as s,e as i}from"./BwDOgaCl.js";import{S as n}from"./DqlEvKiU.js";import"./BDkKqPD2.js";import"./DZ1f3jXa.js";import{T as c}from"./IroFLKwD.js";import{g as p}from"./OXmljVLM.js";import{D as m}from"./DTS7lhmZ.js";import{F as d}from"./BU8LG2ZX.js";import{g as h}from"./wLIUKFBh.js";import{a as u}from"./BS_tg9SS.js";import"./DKGGrv-j.js";import"./BPQf_WJy.js";import"./CGD201Wd.js";let y=class extends c{#e="Person or company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person or company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#o="People";get peopleApiControllerName(){return this.#o}set peopleApiControllerName(e){this.#o=e}#a="Companies";get companyApiControllerName(){return this.#a}set companyApiControllerName(e){this.#a=e}#r="Name";get pathToSelectedText(){return this.#r}set pathToSelectedText(e){this.#r=e}#l;get apiService(){return this.#l}set apiService(e){this.#l=e}#s="off";get autocomplete(){return this.#s}set autocomplete(e){this.#s=e}#i=!1;get spellcheck(){return this.#i}set spellcheck(e){this.#i=e}#n=new m(e=>this.#c(e));#p=new AbortController;searchTermToOData(e){const t=p(e);return t.length<1?null:t.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ")}async#c(e){if(!e)return;this.#p.abort(),this.#p=new AbortController;const t=Promise.all([this.#m(e),this.#d(e)]);this.loadWhile(t);const o=await t,a=[...o[0]?.entities??[],...o[1]?.entities??[]],r=(o[0]?.odataCount??0)+(o[1]?.odataCount??0),l=new d(a,{includeScore:!0,keys:["Name"],shouldSort:!0,ignoreLocation:!0,threshold:.3}).search(e);this.showSuggestions(l.map(e=>e.item)??[],r??0)}async#m(t){if(!t)return null;try{const e=["top=100","count=true","compute=FullName as Name","select=Name,Id,CompanyName,ProfilePictureCdnFileName"],o=p(t);if(o.length>0){const t=o.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ");e.push(`filter=${t}`)}const a=await(this.apiService?.getAsync(`${this.peopleApiControllerName}?${e.join("&")}`,{abortController:this.#p}));return a?.entities.forEach(e=>e.type="Person"),a}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}async#d(t){if(!t)return null;try{const e=["top=100","count=true","select=Name,Shortname,MarkUrl,DarkMarkUrl,Id"],o=p(t);if(o.length>0){const t=o.map(e=>`(contains(Name, '${e}') OR (contains(Shortname, '${e}')))`).join(" and ");e.push(`$filter=${t}`)}const a=await(this.apiService?.getAsync(`Companies?${e.join("&")}`,{abortController:this.#p}));return a?.entities.forEach(e=>e.type="Company"),a}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}static{this.styles=[...c.styles,t`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}onInputChanged(e){this.#n.debounce(e)}renderSelectedLeadingInputSlot(e){return"Person"===e.type?o`<profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`:"Company"===e.type?o`<img leading slot="leading-icon" src=${h(e,this.themePreference)} />`:o``}renderSuggestion(e){return"Person"===e.type?o`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
          <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
          <span slot="headline">${e.Name}</span>
          <span slot="supporting-text">${e.CompanyName}</span>
        </md-menu-item>`:"Company"===e.type?o`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
            <slot name="trailing-icon" slot="trailing-icon"></slot>
            <span slot="headline">${e.Name}</span>
            <span slot="supporting-text">${e.ShortName||"-"}</span>
            <img loading="lazy" company-mark slot="start" src=${h(e,this.themePreference)} />
          </md-menu-item>`:o``}};a([r({type:String})],y.prototype,"label",null),a([r({type:String})],y.prototype,"placeholder",null),a([r({type:String})],y.prototype,"peopleApiControllerName",null),a([r({type:String})],y.prototype,"companyApiControllerName",null),a([r({type:String})],y.prototype,"pathToSelectedText",null),a([r({attribute:!1})],y.prototype,"apiService",null),a([r({reflect:!0,type:String})],y.prototype,"autocomplete",null),a([r({reflect:!0,type:Boolean})],y.prototype,"spellcheck",null),y=a([l("leavitt-person-company-select")],y);let v=class extends s{#h;get methodsSelect(){return this.#h}set methodsSelect(e){this.#h=e}static{this.styles=[n]}render(){return o`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person company select" level1Href="/leavitt-person-company-select" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person Company Select" className="LeavittPersonCompanySelect"></story-header>

            <div>
              <h1>Methods</h1>
              <item-row>
                <leavitt-person-company-select required methods-demo .apiService=${u}></leavitt-person-company-select>
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
                <leavitt-person-company-select label="default" .apiService=${u}></leavitt-person-company-select>
                <leavitt-person-company-select label="shaped" shaped .apiService=${u}></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="pre-selected"
                  .selected=${{Name:"Leavitt Group Enterprises",type:"Company"}}
                  .apiService=${u}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="disabled pre-selected"
                  .selected=${{FullName:"Aaron Drabeck",Id:11056,type:"Person",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"}}
                  disabled
                  .apiService=${u}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="placeholder"
                  placeholder="placeholder text"
                  .apiService=${u}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${u}
                ></leavitt-person-company-select>
              </item-row>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};a([i("leavitt-person-company-select[methods-demo]")],v.prototype,"methodsSelect",null),v=a([l("leavitt-person-company-select-demo")],v);export{v as LeavittPersonCompanySelectDemo};
