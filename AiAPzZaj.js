import{_ as e,n as t,t as l,c as a,S as r,i as s,A as i,e as o}from"./CyOMU7b-.js";import{A as n,S as p}from"./DayneWRO.js";import"./D528NSl_.js";import"./jB0Bcmk4.js";import{T as c}from"./Be3hRK-S.js";import{e as d}from"./CUwIGwiH.js";import{g as h}from"./OXmljVLM.js";import{D as m}from"./DTS7lhmZ.js";import{a as u}from"./Bsjd32IY.js";import"./DLNvVUrG.js";import"./1Q7ohYFr.js";let v=class extends c{#e="Person";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#l="People";get apiControllerName(){return this.#l}set apiControllerName(e){this.#l=e}#a="FullName";get pathToSelectedText(){return this.#a}set pathToSelectedText(e){this.#a=e}#r;get apiService(){return this.#r}set apiService(e){this.#r=e}#s=["top=15","orderby=FullName","select=FullName,CompanyName,Id,ProfilePictureCdnFileName","count=true"];get odataParts(){return this.#s}set odataParts(e){this.#s=e}#i=!1;get enablePeoplePreloading(){return this.#i}set enablePeoplePreloading(e){this.#i=e}#o="remote";get searchType(){return this.#o}set searchType(e){this.#o=e}#n=[];get people(){return this.#n}set people(e){this.#n=e}#p="off";get autocomplete(){return this.#p}set autocomplete(e){this.#p=e}#c=!1;get spellcheck(){return this.#c}set spellcheck(e){this.#c=e}#d=e=>a`<md-menu-item .item=${e}>
      <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
      <span slot="headline">${e.FullName}</span>
      <span slot="supporting-text">${e.CompanyName}</span>
    </md-menu-item>`;get renderMenuItemContentTemplate(){return this.#d}set renderMenuItemContentTemplate(e){this.#d=e}#h=new m(e=>this.#m(e));#u=new AbortController;async firstUpdated(){this.enablePeoplePreloading&&!this.people.length&&this.apiService&&this.reloadPeople()}async updated(e){e.has("people")&&this.people&&(this.defaultSuggestions=this.people)}searchTermToOData(e){const t=h(e);return t.length<1?null:t.map(e=>`contains(tolower(FullName), '${e.toLowerCase()}')`).join(" and ")}async reloadPeople(){this.people=await this.#v()}async#v(){const e=this.odataParts.filter(e=>!e.startsWith("top="));try{const t=this.apiService?.getAsync(`${this.apiControllerName}?${e.join("&")}`),l=await t;return l?.toList()??[]}catch(e){this.dispatchEvent(new r(e))}return[]}async#m(e){if(this.#u.abort(),this.#u=new AbortController,e)if("local"===this.searchType){const t={includeScore:!0,keys:["FullName"],ignoreLocation:!0,shouldSort:!0,threshold:.3};if(this.searchTerm){const l=new d(this.people,t).search(e);this.showSuggestions(l.map(e=>e.item).slice(0,15),l.length)}}else try{const t=this.searchTermToOData(e),l=structuredClone(this.odataParts);if(t){const e=l.findIndex(e=>e.startsWith("filter=")||e.startsWith("$filter="));e>-1?l[e]=[l[e],t].join(" and "):l.push(`filter=${t}`)}const a=this.apiService.getAsync(`${this.apiControllerName}?${l.join("&")}`,{abortController:this.#u});this.trackLoadingPromise(a);const r=await a;this.showSuggestions(r?.entities??[],r?.odataCount??0)}catch(e){const t=e;"AbortError"===t?.name||t?.message?.includes("Abort error")||this.dispatchEvent(new r(e))}}onInputChanged(e){this.#h.debounce(e)}renderSelectedLeadingInputSlot(e){return a` <profile-picture
      slot="leading-icon"
      .fileName=${e?.ProfilePictureCdnFileName||null}
      shape="circle"
      size=${this.large?"48":"24"}
    ></profile-picture>`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e)}};e([t({type:String})],v.prototype,"label",null),e([t({type:String})],v.prototype,"placeholder",null),e([t({type:String})],v.prototype,"apiControllerName",null),e([t({type:String})],v.prototype,"pathToSelectedText",null),e([t({attribute:!1})],v.prototype,"apiService",null),e([t({type:Array})],v.prototype,"odataParts",null),e([t({type:Boolean,attribute:"enable-people-preloading"})],v.prototype,"enablePeoplePreloading",null),e([t({type:String,attribute:"search-type"})],v.prototype,"searchType",null),e([t({type:Array})],v.prototype,"people",null),e([t({reflect:!0,type:String})],v.prototype,"autocomplete",null),e([t({reflect:!0,type:Boolean})],v.prototype,"spellcheck",null),e([t({type:Object})],v.prototype,"renderMenuItemContentTemplate",null),v=e([l("leavitt-person-select")],v);let g=class extends s{#g;get methodsSelect(){return this.#g}set methodsSelect(e){this.#g=e}#f=new n(this);static{this.styles=[p]}render(){return a`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person select" level1Href="/leavitt-person-select" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person Select" className="LeavittPersonSelect" requires-auth></story-header>

            ${this.#f.identity?a`
            <div>
              <h1>Methods</h1>
              <leavitt-person-select required methods-demo .apiService=${u}></leavitt-person-select>
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
                .apiService=${u}
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
                <leavitt-person-select label="default" .apiService=${u}></leavitt-person-select>

                <leavitt-person-select
                  label="prefilled"
                  .selected=${{Id:11056,FullName:"Aaron D.",CompanyName:"Leavitt Software Solutions",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe"}}
                  .apiService=${u}
                ></leavitt-person-select>

                <leavitt-person-select label="shaped" shaped .apiService=${u}></leavitt-person-select>
                <leavitt-person-select label="placeholder" placeholder="My placeholder" .apiService=${u}></leavitt-person-select>
                <leavitt-person-select label="Supporting text" supportingText="supporting text" .apiService=${u}></leavitt-person-select>
                <leavitt-person-select label="required" required validationMessage="required" .apiService=${u}></leavitt-person-select>
                <leavitt-person-select label="disabled" disabled .apiService=${u}></leavitt-person-select>
                <leavitt-person-select label="Suffix text" suffixText="Admin" .apiService=${u}></leavitt-person-select>
              </item-row>
            </div>

            </div>
              `:i}

            <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};e([o("leavitt-person-select[methods-demo]")],g.prototype,"methodsSelect",null),g=e([l("leavitt-person-select-demo")],g);export{g as LeavittPersonSelectDemo};
