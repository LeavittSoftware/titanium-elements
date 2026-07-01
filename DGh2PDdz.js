import{S as e,b as t,c as o,A as r,_ as l,n as a,t as s,i,e as p}from"./D_imZRq6.js";import{A as n,S as c}from"./Cp0ERCaT.js";import"./Cr5T8rNp.js";import"./BrugqwTk.js";import{T as u}from"./9hfUjaz1.js";import{g as d}from"./OXmljVLM.js";import{D as m}from"./DTS7lhmZ.js";import{e as g}from"./CX23hzyR.js";import{a as h}from"./Dd-al2T7.js";import"./DP0o14fc.js";import"./B4dJ93Bs.js";const v=new Map([["#lg.net.core.DataModel.Core.StatePeopleGroup",{icon:"location_searching",displayName:"State people group"}],["#lg.net.core.DataModel.Core.CityPeopleGroup",{icon:"share_location",displayName:"City people group"}],["#lg.net.core.DataModel.Core.JobRolePeopleGroup",{icon:"light_mode",displayName:"Job role people group"}],["#lg.net.core.DataModel.Core.CompanyPeopleGroup",{icon:"supervised_user_circle",displayName:"Company people group"}],["#lg.net.core.DataModel.Core.DepartmentPeopleGroup",{icon:"monetization_on",displayName:"Department people group"}],["#lg.net.core.DataModel.Core.BuildingPeopleGroup",{icon:"location_city",displayName:"Building people group"}],["#lg.net.core.DataModel.Core.CustomPeopleGroup",{icon:"tune",displayName:"Custom people group"}],["#lg.net.core.DataModel.Core.CompanyGroupPeopleGroup",{icon:"groups",displayName:"Company grouping people group"}],["#lg.net.core.DataModel.Core.StateManagerPeopleGroup",{icon:"deployed_code_account",displayName:"State manager people group"}],["#lg.net.core.DataModel.Core.HomeStatePeopleGroup",{icon:"other_houses",displayName:"Home state people group"}],["#lg.net.core.DataModel.Core.TypesOfInsuranceSoldPeopleGroup",{icon:"real_estate_agent",displayName:"Types of insurance sold people group"}],["#lg.net.core.DataModel.Core.TOISManagersPeopleGroup",{icon:"engineering",displayName:"Types of insurance sold managers people group"}]]);let S=class extends u{#e="Person or group";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person or group";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#o="People";get peopleApiControllerName(){return this.#o}set peopleApiControllerName(e){this.#o=e}#r="PeopleGroups";get groupApiControllerName(){return this.#r}set groupApiControllerName(e){this.#r=e}#l="Name";get pathToSelectedText(){return this.#l}set pathToSelectedText(e){this.#l=e}#a="off";get autocomplete(){return this.#a}set autocomplete(e){this.#a=e}#s=!1;get spellcheck(){return this.#s}set spellcheck(e){this.#s=e}#i;get apiService(){return this.#i}set apiService(e){this.#i=e}#p=new m(e=>this.#n(e));#c=new AbortController;searchTermToOData(e){const t=d(e);return t.length<1?null:t.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ")}async#n(e){if(!e)return;this.#c.abort(),this.#c=new AbortController;const t=Promise.all([this.#u(e),this.#d(e)]);this.trackLoadingPromise(t);const o=await t,r=[...o[0]?.entities??[],...o[1]?.entities??[]],l=(o[0]?.odataCount??0)+(o[1]?.odataCount??0),a=new g(r,{includeScore:!0,ignoreLocation:!0,shouldSort:!0,keys:["Name"]}).search(e).slice(0,20);this.showSuggestions(a.map(e=>e.item)??[],l??0)}async#u(t){if(!t)return null;try{const e=["top=100","count=true","compute=FullName as Name","select=Name,Id,CompanyName,ProfilePictureCdnFileName"],o=d(t);if(o.length>0){const t=o.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ");e.push(`filter=${t}`)}const r=await(this.apiService?.getAsync(`${this.peopleApiControllerName}?${e.join("&")}`,{abortController:this.#c}));return r?.entities.forEach(e=>e.type="Person"),r}catch(t){const o=t;"AbortError"===o?.name||o?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}async#d(t){if(!t)return null;const o=["not IsExpired"];try{const e=["top=100","count=true","select=Name,Id,Description","expand=EffectiveMembers(top=0;count=true)"],r=d(t);r.length>0&&o.push(r.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ")),e.push(`filter=${o.join(" and ")}`);const l=await(this.apiService?.getAsync(`${this.groupApiControllerName}?${e.join("&")}`,{abortController:this.#c}));return l?.entities.forEach(e=>e.type="PeopleGroup"),l}catch(t){const o=t;"AbortError"===o?.name||o?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}static{this.styles=[...u.styles,t`
      md-menu-item md-icon[group] {
        width: 40px;
        height: 40px;
        font-size: 40px;
      }

      md-icon[group] {
        color: var(--md-sys-color-primary);
      }
    `]}onInputChanged(e){this.#p.debounce(e)}renderSelectedLeadingInputSlot(e){return"Person"===e.type?o`<profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`:o`<md-icon group slot="leading-icon">${v.get(e["@odata.type"])?.icon??"task_alt"}</md-icon>`}renderSuggestion(e){return"Person"===e.type?o`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
          <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
          <span slot="headline">${e.Name}</span>
          <span slot="supporting-text">${e.CompanyName}</span>
        </md-menu-item>`:"PeopleGroup"===e.type?o`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
            <md-icon group slot="start">${v.get(e["@odata.type"])?.icon??"task_alt"}</md-icon>
            <span slot="headline">${e.Name}</span>

            ${Object.keys(e).some(e=>"EffectiveMembers@odata.count"===e)?o` <span slot="overline"> ${e["EffectiveMembers@odata.count"]} user${1===e["EffectiveMembers@odata.count"]?"":"s"} </span>`:r}
            <span slot="supporting-text">${e.Description||(v.get(e["@odata.type"])?.displayName??"People group")}</span>
          </md-menu-item>`:o``}};l([a({type:String})],S.prototype,"label",null),l([a({type:String})],S.prototype,"placeholder",null),l([a({type:String})],S.prototype,"peopleApiControllerName",null),l([a({type:String})],S.prototype,"groupApiControllerName",null),l([a({type:String})],S.prototype,"pathToSelectedText",null),l([a({reflect:!0,type:String})],S.prototype,"autocomplete",null),l([a({reflect:!0,type:Boolean})],S.prototype,"spellcheck",null),l([a({attribute:!1})],S.prototype,"apiService",null),S=l([s("leavitt-person-group-select")],S);let y=class extends i{#m;get methodsSelect(){return this.#m}set methodsSelect(e){this.#m=e}#g=new n(this);static{this.styles=[c]}render(){return o`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person/group select" level1Href="/leavitt-person-group-select" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person/Group Select" className="LeavittPersonGroupSelect" requires-auth></story-header>

            ${this.#g.identity?o`
            <div>
              <h1>Default</h1>
              <item-row>
                <leavitt-person-group-select label="default" .apiService=${h}></leavitt-person-group-select>
                <leavitt-person-group-select label="shaped" shaped .apiService=${h}></leavitt-person-group-select>
                <leavitt-person-group-select
                  label="pre-selected"
                  .selected=${{Name:"LGE Programmer Basic Access",Id:22,type:"PeopleGroup"}}
                  .apiService=${h}
                ></leavitt-person-group-select>
                <leavitt-person-group-select
                  label="disabled pre-selected"
                  .selected=${{Name:"Aaron Drabeck",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe",Id:11056,type:"Person"}}
                  disabled
                  .apiService=${h}
                ></leavitt-person-group-select>
                <leavitt-person-group-select label="placeholder" placeholder="placeholder text" .apiService=${h}></leavitt-person-group-select>
                <leavitt-person-group-select
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${h}
                ></leavitt-person-group-select>
              </item-row>
            </div>

            <div>
              <h1>Methods</h1>
              <item-row>
                <leavitt-person-group-select methods-demo required .apiService=${h}></leavitt-person-group-select>
              </item-row>
              <section buttons>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
              </section>
            </div>

            </div>
              `:r}

            <api-docs src="./custom-elements.json" selected="leavitt-person-group-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};l([p("leavitt-person-group-select[methods-demo]")],y.prototype,"methodsSelect",null),y=l([s("leavitt-person-group-select-demo")],y);export{y as LeavittPersonGroupSelectDemo};
