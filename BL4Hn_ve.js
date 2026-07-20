import{c as e,S as t,b as a,_ as s,n as i,t as l,T as o,i as n,A as r,r as c,e as d}from"./CyOMU7b-.js";import{A as p,S as m}from"./DayneWRO.js";import"./D528NSl_.js";import"./jB0Bcmk4.js";import"./DLNvVUrG.js";import{e as h}from"./CUwIGwiH.js";import{T as u}from"./Be3hRK-S.js";import{D as g}from"./DTS7lhmZ.js";import{g as v}from"./wLIUKFBh.js";import{a as y}from"./Bsjd32IY.js";import"./1Q7ohYFr.js";let b=class extends u{#e="Company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#a="Name";get pathToSelectedText(){return this.#a}set pathToSelectedText(e){this.#a=e}#s=[];get companies(){return this.#s}set companies(e){this.#s=e}#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#l=!1;get disableAutoLoad(){return this.#l}set disableAutoLoad(e){this.#l=e}#o=["orderby=Name","select=Name,ShortName,MarkUrl,DarkMarkUrl,Id"];get odataParts(){return this.#o}set odataParts(e){this.#o=e}#n="Companies";get apiControllerName(){return this.#n}set apiControllerName(e){this.#n=e}#r="off";get autocomplete(){return this.#r}set autocomplete(e){this.#r=e}#c=!1;get spellcheck(){return this.#c}set spellcheck(e){this.#c=e}#d=t=>{const a=this.shaped?this.shaped&&"dark"===this.themePreference?"light":"dark":this.themePreference;return e`<md-menu-item .item=${t}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${t.Name}</span>
      <span slot="supporting-text">${t.ShortName||"-"}</span>
      <img loading="lazy" company-mark slot="start" src=${v(t,a)} />
    </md-menu-item> `};get renderMenuItemContentTemplate(){return this.#d}set renderMenuItemContentTemplate(e){this.#d=e}async firstUpdated(){this.disableAutoLoad||this.companies.length||!this.apiService||this.#p()}async updated(e){e.has("companies")&&this.companies&&(this.defaultSuggestions=this.companies)}async reloadCompanies(){this.disableAutoLoad||console.warn("leavitt-company-select reloadCompanies method has been called manually without setting disableAutoLoad"),await this.#p()}async#p(){this.companies=await this.#m(),this.selected=this.companies.find(e=>e.Id===this.selected?.Id)??null}async#m(){try{const e=this.apiService?.getAsync(`${this.apiControllerName}?${this.odataParts.join("&")}`);this.trackLoadingPromise(e);const t=await e;return t?.toList()??[]}catch(e){this.dispatchEvent(new t(e))}return[]}static{this.styles=[...u.styles,a`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}#h=new g(e=>this.#u(e));#g=new AbortController;async#u(e){this.#g.abort(),this.#g=new AbortController;const t={includeScore:!0,keys:["Name","ShortName"],shouldSort:!0,ignoreLocation:!0,threshold:.3};if(this.searchTerm){const a=new h(this.companies,t).search(e);this.showSuggestions(a.map(e=>e.item).slice(0,15),a.length)}}onInputChanged(e){this.#h.debounce(e)}renderSelectedLeadingInputSlot(t){return e` <img
      leading
      style="width: ${this.large?"40px":"24px"}; height: ${this.large?"40px":"24px"}"
      slot="leading-icon"
      src=${v(t,this.themePreference)}
    />`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e)}};s([i({type:String})],b.prototype,"label",null),s([i({type:String})],b.prototype,"placeholder",null),s([i({type:String})],b.prototype,"pathToSelectedText",null),s([i({type:Array})],b.prototype,"companies",null),s([i({attribute:!1})],b.prototype,"apiService",null),s([i({type:Boolean})],b.prototype,"disableAutoLoad",null),s([i({type:Array})],b.prototype,"odataParts",null),s([i({type:String})],b.prototype,"apiControllerName",null),s([i({reflect:!0,type:String})],b.prototype,"autocomplete",null),s([i({reflect:!0,type:Boolean})],b.prototype,"spellcheck",null),s([i({type:Object})],b.prototype,"renderMenuItemContentTemplate",null),b=s([l("leavitt-company-select")],b);let S=class extends(o(n)){#v=!1;get disableMenuOpenOnFocus(){return this.#v}set disableMenuOpenOnFocus(e){this.#v=e}#y;get methodsSelect(){return this.#y}set methodsSelect(e){this.#y=e}#b=new p(this);static{this.styles=[m]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt company select" level1Href="/leavitt-company-select" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Company Select" className="LeavittCompanySelect" requires-auth></story-header>

            ${this.#b.identity?e`
            <div>
              <h1>Filled</h1>
              <leavitt-company-select
                style="width: 400px;"
                required
                ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
                .apiService=${y}
              ></leavitt-company-select>
            </div>
            <div>
              <h1>Filled, shaped, large,</h1>

              <leavitt-company-select
                style=" margin-top: 16px; max-width: 680px;"
                shaped
                match-input-width
                label=""
                large
                required
                ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
                .apiService=${y}
              ></leavitt-company-select>
            </div>

            <div>
              <h1>Methods</h1>
              <leavitt-company-select
                @selected=${e=>console.log("selected change 1",e.target.selected)}
                style="width: 400px;"
                methods-demo
                required
                ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
                .apiService=${y}
              ></leavitt-company-select>
              <section buttons>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.required=!this.methodsSelect.required}>Toggle required</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.disableMenuOpenOnFocus=!this.disableMenuOpenOnFocus}
                  >Toggle auto open (${this.disableMenuOpenOnFocus?"on":"off"})
                </md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reloadCompanies()}>reloadCompanies()</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Default</h1>
              <item-row>
                <leavitt-company-select disableAutoLoad label="default" .apiService=${y}></leavitt-company-select>
                <leavitt-company-select disableAutoLoad label="shaped" shaped .apiService=${y}></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="pre-selected"
                  .selected=${{Id:57,Name:"Leavitt Group Enterprises"}}
                  .apiService=${y}
                ></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="disabled pre-selected"
                  .selected=${{Id:57,Name:"Leavitt Group Enterprises"}}
                  disabled
                  .apiService=${y}
                ></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="placeholder"
                  placeholder="placeholder text"
                  .apiService=${y}
                ></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${y}
                ></leavitt-company-select>
              </item-row>
            </div>

            <div>
              <h1>Custom menu item template</h1>
              <leavitt-company-select
                .renderMenuItemContentTemplate=${t=>e`<md-menu-item .item=${t}>
                    <slot name="trailing-icon" slot="trailing-icon"></slot>
                    <span slot="headline">${t.Name}</span>
                    <span slot="supporting-text">${t.ShortName||"-"}</span>
                    <img
                      loading="lazy"
                      style="max-width: 100px;width:100%;background:white;border-radius:8px"
                      slot="start"
                      src=${v(t,this.themePreference)}
                    />
                  </md-menu-item>`}
                .apiService=${y}
              ></leavitt-company-select>
            </div>

            </div>
              `:r}

            <api-docs src="./custom-elements.json" selected="leavitt-company-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};s([c()],S.prototype,"disableMenuOpenOnFocus",null),s([d("leavitt-company-select[methods-demo]")],S.prototype,"methodsSelect",null),S=s([l("leavitt-company-select-demo")],S);export{S as LeavittCompanySelectDemo};
