import{_ as e,n as t,t as l,c as a,S as s,i,A as r,U as o,r as n,e as p}from"./BkdWKSMI.js";import{S as c}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import{T as h}from"./CletilfP.js";import{F as d}from"./CkDJilkW.js";import{g as m}from"./OXmljVLM.js";import{D as u}from"./DTS7lhmZ.js";import"./pNeA5_IP.js";import"./CIHPGdiZ.js";import"./DbnfmX2U.js";let v=class extends h{#e="Person";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#l="People";get apiControllerName(){return this.#l}set apiControllerName(e){this.#l=e}#a="FullName";get pathToSelectedText(){return this.#a}set pathToSelectedText(e){this.#a=e}#s;get apiService(){return this.#s}set apiService(e){this.#s=e}#i=["top=15","orderby=FullName","select=FullName,CompanyName,Id,ProfilePictureCdnFileName","count=true"];get odataParts(){return this.#i}set odataParts(e){this.#i=e}#r=!1;get enablePeoplePreloading(){return this.#r}set enablePeoplePreloading(e){this.#r=e}#o="remote";get searchType(){return this.#o}set searchType(e){this.#o=e}#n=[];get people(){return this.#n}set people(e){this.#n=e}#p="off";get autocomplete(){return this.#p}set autocomplete(e){this.#p=e}#c=!1;get spellcheck(){return this.#c}set spellcheck(e){this.#c=e}#h=e=>a`<md-menu-item .item=${e}>
      <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
      <span slot="headline">${e.FullName}</span>
      <span slot="supporting-text">${e.CompanyName}</span>
    </md-menu-item>`;get renderMenuItemContentTemplate(){return this.#h}set renderMenuItemContentTemplate(e){this.#h=e}#d=new u(e=>this.#m(e));#u=new AbortController;async firstUpdated(){this.enablePeoplePreloading&&!this.people.length&&this.apiService&&this.reloadPeople()}async updated(e){e.has("people")&&this.people&&(this.defaultSuggestions=this.people)}searchTermToOData(e){const t=m(e);return t.length<1?null:t.map(e=>`contains(tolower(FullName), '${e.toLowerCase()}')`).join(" and ")}async reloadPeople(){this.people=await this.#v()}async#v(){const e=this.odataParts.filter(e=>!e.startsWith("top="));try{const t=this.apiService?.getAsync(`${this.apiControllerName}?${e.join("&")}`),l=await t;return l?.toList()??[]}catch(e){this.dispatchEvent(new s(e))}return[]}async#m(e){if(this.#u.abort(),this.#u=new AbortController,e)if("local"===this.searchType){const t={includeScore:!0,keys:["FullName"],ignoreLocation:!0,shouldSort:!0,threshold:.3};if(this.searchTerm){const l=new d(this.people,t).search(e);this.showSuggestions(l.map(e=>e.item).slice(0,15),l.length)}}else try{const t=this.searchTermToOData(e),l=structuredClone(this.odataParts);if(t){const e=l.findIndex(e=>e.startsWith("filter=")||e.startsWith("$filter="));e>-1?l[e]=[l[e],t].join(" and "):l.push(`filter=${t}`)}const a=this.apiService.getAsync(`${this.apiControllerName}?${l.join("&")}`,{abortController:this.#u});this.loadWhile(a);const s=await a;this.showSuggestions(s?.entities??[],s?.odataCount??0)}catch(e){e?.message?.includes("Abort error")||this.dispatchEvent(new s(e))}}onInputChanged(e){this.#d.debounce(e)}renderSelectedLeadingInputSlot(e){return a` <profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e)}};e([t({type:String})],v.prototype,"label",null),e([t({type:String})],v.prototype,"placeholder",null),e([t({type:String})],v.prototype,"apiControllerName",null),e([t({type:String})],v.prototype,"pathToSelectedText",null),e([t({attribute:!1})],v.prototype,"apiService",null),e([t({type:Array})],v.prototype,"odataParts",null),e([t({type:Boolean,attribute:"enable-people-preloading"})],v.prototype,"enablePeoplePreloading",null),e([t({type:String,attribute:"search-type"})],v.prototype,"searchType",null),e([t({type:Array})],v.prototype,"people",null),e([t({reflect:!0,type:String})],v.prototype,"autocomplete",null),e([t({reflect:!0,type:Boolean})],v.prototype,"spellcheck",null),e([t({type:Object})],v.prototype,"renderMenuItemContentTemplate",null),v=e([l("leavitt-person-select")],v);let g=class extends i{#s;get apiService(){return this.#s}set apiService(e){this.#s=e}#g;get methodsSelect(){return this.#g}set methodsSelect(e){this.#g=e}constructor(){super(),this.apiService=new r(o),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[c]}render(){return a`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person select" level1Href="/leavitt-person-select" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person Select" className="LeavittPersonSelect"></story-header>

            <div>
              <h1>Methods</h1>
              <leavitt-person-select required methods-demo .apiService=${this.apiService}></leavitt-person-select>
              <section buttons>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Pre-load people</h1>
              <leavitt-person-select
                .odataParts=${["top=15","filter=contains(LastName, 'Leavitt')","orderby=FullName","select=FullName,CompanyName,Id,ProfilePictureCdnFileName","count=true"]}
                enable-people-preloading
                .apiService=${this.apiService}
              ></leavitt-person-select>
            </div>

            <div>
              <h1>Local searching</h1>
              <leavitt-person-select
                search-type="local"
                .people=${[{Id:1,FullName:"Taylor Swift",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"},{Id:2,FullName:"Jack Black",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"}]}
              ></leavitt-person-select>
            </div>

            <div>
              <h1>Custom menu item template</h1>
              <leavitt-person-select
                search-type="local"
                .renderMenuItemContentTemplate=${e=>a` <md-menu-item .item=${e}>
                    <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
                    <span slot="headline">${e.FullName}</span>
                    <span slot="supporting-text">${e.CompanyName}</span>
                    <span slot="overline">${e.Status}</span>
                  </md-menu-item>`}
                .people=${[{Id:1,FullName:"Taylor Swift",Status:"Admin",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"},{Id:2,"disable-item":!0,FullName:"Jack Black",Status:"User",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"}]}
              ></leavitt-person-select>
            </div>

            <div>
              <h1>Attributes</h1>
              <item-row>
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
              </item-row>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};e([n()],g.prototype,"apiService",null),e([p("leavitt-person-select[methods-demo]")],g.prototype,"methodsSelect",null),g=e([l("leavitt-person-select-demo")],g);export{g as LeavittPersonSelectDemo};
