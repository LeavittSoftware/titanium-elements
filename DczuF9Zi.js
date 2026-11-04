import{_ as e,n as t,t as l,c as a,S as s,i,A as r,e as o}from"./B9KYe1CG.js";import{A as n,S as p}from"./DryU-tS1.js";import"./_sPLC3CH.js";import"./-AObJhKa.js";import{T as c}from"./DvsoDDpw.js";import{e as h}from"./CUwIGwiH.js";import{g as d}from"./OXmljVLM.js";import{D as u}from"./DTS7lhmZ.js";import{a as m}from"./hZuUi_wj.js";import"./DJDEYoX8.js";import"./ByCLBcve.js";const v=e=>(e??"").trim().toLowerCase();let g=class extends c{#e="Person";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#l="People";get apiControllerName(){return this.#l}set apiControllerName(e){this.#l=e}#a="FullName";get pathToSelectedText(){return this.#a}set pathToSelectedText(e){this.#a=e}#s;get apiService(){return this.#s}set apiService(e){this.#s=e}#i=["top=15","orderby=FullName","select=FullName,CompanyName,Id,ProfilePictureCdnFileName","count=true"];get odataParts(){return this.#i}set odataParts(e){this.#i=e}#r=!1;get enablePeoplePreloading(){return this.#r}set enablePeoplePreloading(e){this.#r=e}#o="remote";get searchType(){return this.#o}set searchType(e){this.#o=e}#n=[];get people(){return this.#n}set people(e){this.#n=e}#p="off";get autocomplete(){return this.#p}set autocomplete(e){this.#p=e}#c=!1;get spellcheck(){return this.#c}set spellcheck(e){this.#c=e}#h=(e,t={hasDuplicateName:!1})=>a`<md-menu-item .item=${e}>
      <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
      <span slot="headline">${e.FullName}</span>
      <span slot="supporting-text">${function(e,t){return t.hasDuplicateName?[e.CompanyName,e.JobTitle].filter(Boolean).join(" · "):e.CompanyName??""}(e,t)}</span>
    </md-menu-item>`;get renderMenuItemContentTemplate(){return this.#h}set renderMenuItemContentTemplate(e){this.#h=e}#d=new Set;willUpdate(e){super.willUpdate(e);if(e.has("suggestions")){const e=new Set;this.#d=new Set;for(const t of this.suggestions){const l=v(t.FullName);l&&(e.has(l)&&this.#d.add(l),e.add(l))}}}#u=new u(e=>this.#m(e));#v=new AbortController;async firstUpdated(){this.enablePeoplePreloading&&!this.people.length&&this.apiService&&this.reloadPeople()}async updated(e){e.has("people")&&this.people&&(this.defaultSuggestions=this.people)}searchTermToOData(e){const t=d(e);return t.length<1?null:t.map(e=>`contains(tolower(FullName), '${e.toLowerCase()}')`).join(" and ")}async reloadPeople(){this.people=await this.#g()}async#g(){const e=this.odataParts.filter(e=>!e.startsWith("top="));try{const t=this.apiService?.getAsync(`${this.apiControllerName}?${e.join("&")}`),l=await t;return l?.toList()??[]}catch(e){this.dispatchEvent(new s(e))}return[]}async#m(e){if(this.#v.abort(),this.#v=new AbortController,e)if("local"===this.searchType){const t={includeScore:!0,keys:["FullName"],ignoreLocation:!0,shouldSort:!0,threshold:.3};if(this.searchTerm){const l=new h(this.people,t).search(e);this.showSuggestions(l.map(e=>e.item).slice(0,15),l.length)}}else try{const t=this.searchTermToOData(e),l=structuredClone(this.odataParts);if(t){const e=l.findIndex(e=>e.startsWith("filter=")||e.startsWith("$filter="));e>-1?l[e]=[l[e],t].join(" and "):l.push(`filter=${t}`)}const a=this.apiService.getAsync(`${this.apiControllerName}?${l.join("&")}`,{abortController:this.#v});this.trackLoadingPromise(a);const s=await a;this.showSuggestions(s?.entities??[],s?.odataCount??0)}catch(e){const t=e;"AbortError"===t?.name||t?.message?.includes("Abort error")||this.dispatchEvent(new s(e))}}onInputChanged(e){this.#u.debounce(e)}renderSelectedLeadingInputSlot(e){return a` <profile-picture
      slot="leading-icon"
      .fileName=${e?.ProfilePictureCdnFileName||null}
      shape="circle"
      size=${this.large?"48":"24"}
    ></profile-picture>`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e,{hasDuplicateName:this.#d.has(v(e.FullName))})}};e([t({type:String})],g.prototype,"label",null),e([t({type:String})],g.prototype,"placeholder",null),e([t({type:String})],g.prototype,"apiControllerName",null),e([t({type:String})],g.prototype,"pathToSelectedText",null),e([t({attribute:!1})],g.prototype,"apiService",null),e([t({type:Array})],g.prototype,"odataParts",null),e([t({type:Boolean,attribute:"enable-people-preloading"})],g.prototype,"enablePeoplePreloading",null),e([t({type:String,attribute:"search-type"})],g.prototype,"searchType",null),e([t({type:Array})],g.prototype,"people",null),e([t({reflect:!0,type:String})],g.prototype,"autocomplete",null),e([t({reflect:!0,type:Boolean})],g.prototype,"spellcheck",null),e([t({type:Object})],g.prototype,"renderMenuItemContentTemplate",null),g=e([l("leavitt-person-select")],g);let f=class extends i{#f;get methodsSelect(){return this.#f}set methodsSelect(e){this.#f=e}#S=new n(this);static{this.styles=[p]}render(){return a`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person select" level1Href="/leavitt-person-select" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person Select" className="LeavittPersonSelect" requires-auth></story-header>

            ${this.#S.identity?a`
            <div>
              <h1>Methods</h1>
              <leavitt-person-select required methods-demo .apiService=${m}></leavitt-person-select>
              <section buttons>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Pre-load people - match input width</h1>
              <leavitt-person-select
                match-input-width
                shaped
                large
                label=""
                .odataParts=${["top=15","filter=contains(LastName, 'Leavitt')","orderby=FullName","select=FullName,CompanyName,Id,ProfilePictureCdnFileName","count=true"]}
                enable-people-preloading
                .apiService=${m}
              ></leavitt-person-select>
            </div>

            <div>
              <h1>Local searching</h1>
              <leavitt-person-select
                large
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
                <leavitt-person-select label="default" .apiService=${m}></leavitt-person-select>

                <leavitt-person-select
                  label="prefilled"
                  .selected=${{Id:11056,FullName:"Aaron D.",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"}}
                  .apiService=${m}
                ></leavitt-person-select>

                <leavitt-person-select label="shaped" shaped .apiService=${m}></leavitt-person-select>
                <leavitt-person-select label="placeholder" placeholder="My placeholder" .apiService=${m}></leavitt-person-select>
                <leavitt-person-select label="Supporting text" supportingText="supporting text" .apiService=${m}></leavitt-person-select>
                <leavitt-person-select label="required" required validationMessage="required" .apiService=${m}></leavitt-person-select>
                <leavitt-person-select label="disabled" disabled .apiService=${m}></leavitt-person-select>
                <leavitt-person-select label="Suffix text" suffixText="Admin" .apiService=${m}></leavitt-person-select>
              </item-row>
            </div>

            </div>
              `:r}

            <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};e([o("leavitt-person-select[methods-demo]")],f.prototype,"methodsSelect",null),f=e([l("leavitt-person-select-demo")],f);export{f as LeavittPersonSelectDemo};
