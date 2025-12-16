import{_ as e,n as t,t as s,x as l,S as r,i as a,A as i,U as o,h as n,p,c,r as u,f as h,e as d}from"./BriKlvrl.js";import{S as m}from"./BYDhJ-qH.js";import"./B5dYKavm.js";import{T as v}from"./4rLc9xfk.js";import{F as g}from"./CkDJilkW.js";import{g as S}from"./OXmljVLM.js";import{D as f}from"./DTS7lhmZ.js";import"./Um3mYSyR.js";import"./CoIpDvd9.js";import"./doSzMn6v.js";import"./c5f0ayQ_.js";import"./9nIrBYgP.js";let y=class extends v{#e="Person";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#s="People";get apiControllerName(){return this.#s}set apiControllerName(e){this.#s=e}#l="FullName";get pathToSelectedText(){return this.#l}set pathToSelectedText(e){this.#l=e}#r;get apiService(){return this.#r}set apiService(e){this.#r=e}#a=["top=15","orderby=FullName","select=FullName,CompanyName,Id,ProfilePictureCdnFileName","count=true"];get odataParts(){return this.#a}set odataParts(e){this.#a=e}#i=!1;get enablePeoplePreloading(){return this.#i}set enablePeoplePreloading(e){this.#i=e}#o="remote";get searchType(){return this.#o}set searchType(e){this.#o=e}#n=[];get people(){return this.#n}set people(e){this.#n=e}#p="off";get autocomplete(){return this.#p}set autocomplete(e){this.#p=e}#c=!1;get spellcheck(){return this.#c}set spellcheck(e){this.#c=e}#u=e=>l`<md-menu-item .item=${e}>
      <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
      <span slot="headline">${e.FullName}</span>
      <span slot="supporting-text">${e.CompanyName}</span>
    </md-menu-item>`;get renderMenuItemContentTemplate(){return this.#u}set renderMenuItemContentTemplate(e){this.#u=e}#h=new f(e=>this.#d(e));#m=new AbortController;async firstUpdated(){this.enablePeoplePreloading&&!this.people.length&&this.apiService&&this.reloadPeople()}async updated(e){e.has("people")&&this.people&&(this.defaultSuggestions=this.people)}searchTermToOData(e){const t=S(e);return t.length<1?null:t.map(e=>`contains(tolower(FullName), '${e.toLowerCase()}')`).join(" and ")}async reloadPeople(){this.people=await this.#v()}async#v(){const e=this.odataParts.filter(e=>!e.startsWith("top="));try{const t=this.apiService?.getAsync(`${this.apiControllerName}?${e.join("&")}`),s=await t;return s?.toList()??[]}catch(e){this.dispatchEvent(new r(e))}return[]}async#d(e){if(this.#m.abort(),this.#m=new AbortController,e)if("local"===this.searchType){const t={includeScore:!0,keys:["FullName"],ignoreLocation:!0,shouldSort:!0,threshold:.3};if(this.searchTerm){const s=new g(this.people,t).search(e);this.showSuggestions(s.map(e=>e.item).slice(0,15),s.length)}}else try{const t=this.searchTermToOData(e),s=structuredClone(this.odataParts);if(t){const e=s.findIndex(e=>e.startsWith("filter=")||e.startsWith("$filter="));e>-1?s[e]=[s[e],t].join(" and "):s.push(`filter=${t}`)}const l=this.apiService.getAsync(`${this.apiControllerName}?${s.join("&")}`,{abortController:this.#m});this.loadWhile(l);const r=await l;this.showSuggestions(r?.entities??[],r?.odataCount??0)}catch(e){e?.message?.includes("Abort error")||this.dispatchEvent(new r(e))}}onInputChanged(e){this.#h.debounce(e)}renderSelectedLeadingInputSlot(e){return l` <profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e)}};e([t({type:String})],y.prototype,"label",null),e([t({type:String})],y.prototype,"placeholder",null),e([t({type:String})],y.prototype,"apiControllerName",null),e([t({type:String})],y.prototype,"pathToSelectedText",null),e([t({attribute:!1})],y.prototype,"apiService",null),e([t({type:Array})],y.prototype,"odataParts",null),e([t({type:Boolean,attribute:"enable-people-preloading"})],y.prototype,"enablePeoplePreloading",null),e([t({type:String,attribute:"search-type"})],y.prototype,"searchType",null),e([t({type:Array})],y.prototype,"people",null),e([t({reflect:!0,type:String})],y.prototype,"autocomplete",null),e([t({reflect:!0,type:Boolean})],y.prototype,"spellcheck",null),e([t({type:Object})],y.prototype,"renderMenuItemContentTemplate",null),y=e([s("leavitt-person-select")],y);let x=class extends a{#r;get apiService(){return this.#r}set apiService(e){this.#r=e}#g;get inputs(){return this.#g}set inputs(e){this.#g=e}#S;get methodsSelect(){return this.#S}set methodsSelect(e){this.#S=e}constructor(){super(),this.apiService=new i(o),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[n,p,c`
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
    `]}render(){return l`
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
          .renderMenuItemContentTemplate=${e=>l` <md-menu-item .item=${e}>
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
    `}};e([u()],x.prototype,"apiService",null),e([h("leavitt-person-select")],x.prototype,"inputs",null),e([d("leavitt-person-select[methods-demo]")],x.prototype,"methodsSelect",null),x=e([s("leavitt-person-select-playground")],x);let b=class extends a{static{this.styles=[m,c``]}render(){return l`
      <story-header name="Leavitt Person Select" className="LeavittPersonSelect"></story-header>
      <leavitt-person-select-playground></leavitt-person-select-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
    `}};b=e([s("leavitt-person-select-demo")],b);export{b as LeavittPersonSelectDemo};
