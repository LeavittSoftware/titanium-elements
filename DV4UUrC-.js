import{c as e,S as t,b as a,_ as s,n as i,t as l,A as o,U as n,d as r,T as c,i as d,r as p,e as m}from"./BkdWKSMI.js";import{S as h}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./pNeA5_IP.js";import{F as u}from"./CkDJilkW.js";import{T as v}from"./CletilfP.js";import{D as g}from"./DTS7lhmZ.js";import{g as y}from"./wLIUKFBh.js";import"./CIHPGdiZ.js";import"./DbnfmX2U.js";let b=class extends v{#e="Company";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a company";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#a="Name";get pathToSelectedText(){return this.#a}set pathToSelectedText(e){this.#a=e}#s=[];get companies(){return this.#s}set companies(e){this.#s=e}#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#l=!1;get disableAutoLoad(){return this.#l}set disableAutoLoad(e){this.#l=e}#o=["orderby=Name","select=Name,ShortName,MarkUrl,DarkMarkUrl,Id"];get odataParts(){return this.#o}set odataParts(e){this.#o=e}#n="Companies";get apiControllerName(){return this.#n}set apiControllerName(e){this.#n=e}#r="off";get autocomplete(){return this.#r}set autocomplete(e){this.#r=e}#c=!1;get spellcheck(){return this.#c}set spellcheck(e){this.#c=e}#d=t=>e`<md-menu-item .item=${t}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${t.Name}</span>
      <span slot="supporting-text">${t.ShortName||"-"}</span>
      <img loading="lazy" company-mark slot="start" src=${y(t,this.themePreference)} />
    </md-menu-item>`;get renderMenuItemContentTemplate(){return this.#d}set renderMenuItemContentTemplate(e){this.#d=e}async firstUpdated(){this.disableAutoLoad||this.companies.length||!this.apiService||this.#p()}async updated(e){e.has("companies")&&this.companies&&(this.defaultSuggestions=this.companies)}async reloadCompanies(){this.disableAutoLoad||console.warn("leavitt-company-select reloadCompanies method has been called manually without setting disableAutoLoad"),await this.#p()}async#p(){this.companies=await this.#m(),this.selected=this.companies.find(e=>e.Id===this.selected?.Id)??null}async#m(){try{const e=this.apiService?.getAsync(`${this.apiControllerName}?${this.odataParts.join("&")}`);this.loadWhile(e);const t=await e;return t?.toList()??[]}catch(e){this.dispatchEvent(new t(e))}return[]}static{this.styles=[...v.styles,a`
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `]}#h=new g(e=>this.#u(e));#v=new AbortController;async#u(e){this.#v.abort(),this.#v=new AbortController;const t={includeScore:!0,keys:["Name","ShortName"],shouldSort:!0,ignoreLocation:!0,threshold:.3};if(this.searchTerm){const a=new u(this.companies,t).search(e);this.showSuggestions(a.map(e=>e.item).slice(0,15),a.length)}}onInputChanged(e){this.#h.debounce(e)}renderSelectedLeadingInputSlot(t){return e` <img leading slot="leading-icon" src=${y(t,this.themePreference)} />`}renderSuggestion(e){return this.renderMenuItemContentTemplate(e)}};s([i({type:String})],b.prototype,"label",null),s([i({type:String})],b.prototype,"placeholder",null),s([i({type:String})],b.prototype,"pathToSelectedText",null),s([i({type:Array})],b.prototype,"companies",null),s([i({attribute:!1})],b.prototype,"apiService",null),s([i({type:Boolean})],b.prototype,"disableAutoLoad",null),s([i({type:Array})],b.prototype,"odataParts",null),s([i({type:String})],b.prototype,"apiControllerName",null),s([i({reflect:!0,type:String})],b.prototype,"autocomplete",null),s([i({reflect:!0,type:Boolean})],b.prototype,"spellcheck",null),s([i({type:Object})],b.prototype,"renderMenuItemContentTemplate",null),b=s([l("leavitt-company-select")],b);const S=new o(n);S.baseUrl=r?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",S.addHeader("X-LGAppName","Testing"),Object.freeze(S);let f=class extends(c(d)){#g=!1;get disableMenuOpenOnFocus(){return this.#g}set disableMenuOpenOnFocus(e){this.#g=e}#y;get methodsSelect(){return this.#y}set methodsSelect(e){this.#y=e}static{this.styles=[h]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt company select" level1Href="/leavitt-company-select" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Company Select" className="LeavittCompanySelect"></story-header>

            <div>
              <h1>Filled</h1>
              <item-row>
                <leavitt-company-select
                  style="width: 400px;"
                  filled
                  required
                  ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
                  .apiService=${S}
                ></leavitt-company-select>

                <leavitt-company-select
                  style="width: 400px;"
                  shaped
                  filled
                  required
                  ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
                  .apiService=${S}
                ></leavitt-company-select>
              </item-row>
            </div>

            <div>
              <h1>Methods</h1>
              <leavitt-company-select
                @selected=${e=>console.log("selected change 1",e.target.selected)}
                style="width: 400px;"
                methods-demo
                required
                ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
                .apiService=${S}
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
                <leavitt-company-select disableAutoLoad label="default" .apiService=${S}></leavitt-company-select>
                <leavitt-company-select disableAutoLoad label="shaped" shaped .apiService=${S}></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="pre-selected"
                  .selected=${{Id:57,Name:"Leavitt Group Enterprises"}}
                  .apiService=${S}
                ></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="disabled pre-selected"
                  .selected=${{Id:57,Name:"Leavitt Group Enterprises"}}
                  disabled
                  .apiService=${S}
                ></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="placeholder"
                  placeholder="placeholder text"
                  .apiService=${S}
                ></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${S}
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
                      src=${y(t,this.themePreference)}
                    />
                  </md-menu-item>`}
                .apiService=${S}
              ></leavitt-company-select>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-company-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};s([p()],f.prototype,"disableMenuOpenOnFocus",null),s([m("leavitt-company-select[methods-demo]")],f.prototype,"methodsSelect",null),f=s([l("leavitt-company-select-demo")],f);export{f as LeavittCompanySelectDemo};
