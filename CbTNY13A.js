import{S as e,c as t,x as o,E as r,_ as s,n as l,t as a,i as p,A as i,d as n,h as c,p as u,r as d,f as m,e as g,G as h}from"./Bo8Qgput.js";import{S as v}from"./9v0fXKyk.js";import"./CZsWnZDX.js";import{T as y}from"./CFj9BTe1.js";import{g as S}from"./OXmljVLM.js";import{D as f}from"./DTS7lhmZ.js";import{F as b}from"./CkDJilkW.js";import"./QHth85Pb.js";import"./DVBH-jeI.js";import"./BNgjtcVo.js";import"./BJeTwxzT.js";import"./Ef9_mUcF.js";const x=new Map([["#lg.net.core.DataModel.Core.StatePeopleGroup",{icon:"location_searching",displayName:"State people group"}],["#lg.net.core.DataModel.Core.CityPeopleGroup",{icon:"share_location",displayName:"City people group"}],["#lg.net.core.DataModel.Core.JobRolePeopleGroup",{icon:"light_mode",displayName:"Job role people group"}],["#lg.net.core.DataModel.Core.CompanyPeopleGroup",{icon:"supervised_user_circle",displayName:"Company people group"}],["#lg.net.core.DataModel.Core.DepartmentPeopleGroup",{icon:"monetization_on",displayName:"Department people group"}],["#lg.net.core.DataModel.Core.BuildingPeopleGroup",{icon:"location_city",displayName:"Building people group"}],["#lg.net.core.DataModel.Core.CustomPeopleGroup",{icon:"tune",displayName:"Custom people group"}],["#lg.net.core.DataModel.Core.CompanyGroupPeopleGroup",{icon:"groups",displayName:"Company grouping people group"}],["#lg.net.core.DataModel.Core.StateManagerPeopleGroup",{icon:"deployed_code_account",displayName:"State manager people group"}],["#lg.net.core.DataModel.Core.HomeStatePeopleGroup",{icon:"other_houses",displayName:"Home state people group"}],["#lg.net.core.DataModel.Core.TypesOfInsuranceSoldPeopleGroup",{icon:"real_estate_agent",displayName:"Types of insurance sold people group"}],["#lg.net.core.DataModel.Core.TOISManagersPeopleGroup",{icon:"engineering",displayName:"Types of insurance sold managers people group"}]]);let C=class extends y{#e="Person or group";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person or group";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#o="People";get peopleApiControllerName(){return this.#o}set peopleApiControllerName(e){this.#o=e}#r="PeopleGroups";get groupApiControllerName(){return this.#r}set groupApiControllerName(e){this.#r=e}#s="Name";get pathToSelectedText(){return this.#s}set pathToSelectedText(e){this.#s=e}#l="off";get autocomplete(){return this.#l}set autocomplete(e){this.#l=e}#a=!1;get spellcheck(){return this.#a}set spellcheck(e){this.#a=e}#p;get apiService(){return this.#p}set apiService(e){this.#p=e}#i=new f(e=>this.#n(e));#c=new AbortController;searchTermToOData(e){const t=S(e);return t.length<1?null:t.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ")}async#n(e){if(!e)return;this.#c.abort(),this.#c=new AbortController;const t=Promise.all([this.#u(e),this.#d(e)]);this.loadWhile(t);const o=await t,r=[...o[0]?.entities??[],...o[1]?.entities??[]],s=(o[0]?.odataCount??0)+(o[1]?.odataCount??0),l=new b(r,{includeScore:!0,ignoreLocation:!0,shouldSort:!0,keys:["Name"]}).search(e).slice(0,20);console.log(l),this.showSuggestions(l.map(e=>e.item)??[],s??0)}async#u(t){if(!t)return null;try{const e=["top=100","count=true","compute=FullName as Name","select=Name,Id,CompanyName,ProfilePictureCdnFileName"],o=S(t);if(o.length>0){const t=o.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ");e.push(`filter=${t}`)}const r=await(this.apiService?.getAsync(`${this.peopleApiControllerName}?${e.join("&")}`,{abortController:this.#c}));return r?.entities.forEach(e=>e.type="Person"),r}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}async#d(t){if(!t)return null;const o=["not IsExpired"];try{const e=["top=100","count=true","select=Name,Id,Description","expand=EffectiveMembers(top=0;count=true)"],r=S(t);r.length>0&&o.push(r.map(e=>`contains(tolower(Name), '${e.toLowerCase()}')`).join(" and ")),e.push(`filter=${o.join(" and ")}`);const s=await(this.apiService?.getAsync(`${this.groupApiControllerName}?${e.join("&")}`,{abortController:this.#c}));return s?.entities.forEach(e=>e.type="PeopleGroup"),s}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}static{this.styles=[...y.styles,t`
      md-menu-item md-icon[group] {
        width: 40px;
        height: 40px;
        font-size: 40px;
      }

      md-icon[group] {
        color: var(--md-sys-color-primary);
      }
    `]}onInputChanged(e){this.#i.debounce(e)}renderSelectedLeadingInputSlot(e){return"Person"===e.type?o`<profile-picture slot="leading-icon" .fileName=${e?.ProfilePictureCdnFileName||null} shape="circle" size="24"></profile-picture>`:o`<md-icon group slot="leading-icon">${x.get(e["@odata.type"])?.icon??"task_alt"}</md-icon>`}renderSuggestion(e){return"Person"===e.type?o`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
          <profile-picture slot="start" .fileName=${e?.ProfilePictureCdnFileName??null} shape="circle" size="40"></profile-picture>
          <span slot="headline">${e.Name}</span>
          <span slot="supporting-text">${e.CompanyName}</span>
        </md-menu-item>`:"PeopleGroup"===e.type?o`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
            <md-icon group slot="start">${x.get(e["@odata.type"])?.icon??"task_alt"}</md-icon>
            <span slot="headline">${e.Name}</span>

            ${Object.keys(e).some(e=>"EffectiveMembers@odata.count"===e)?o` <span slot="overline"> ${e["EffectiveMembers@odata.count"]} user${1===e["EffectiveMembers@odata.count"]?"":"s"} </span>`:r}
            <span slot="supporting-text">${e.Description||(x.get(e["@odata.type"])?.displayName??"People group")}</span>
          </md-menu-item>`:o``}};s([l({type:String})],C.prototype,"label",null),s([l({type:String})],C.prototype,"placeholder",null),s([l({type:String})],C.prototype,"peopleApiControllerName",null),s([l({type:String})],C.prototype,"groupApiControllerName",null),s([l({type:String})],C.prototype,"pathToSelectedText",null),s([l({reflect:!0,type:String})],C.prototype,"autocomplete",null),s([l({reflect:!0,type:Boolean})],C.prototype,"spellcheck",null),s([l({attribute:!1})],C.prototype,"apiService",null),C=s([a("leavitt-person-group-select")],C);let N=class extends p{#p;get apiService(){return this.#p}set apiService(e){this.#p=e}#m;get inputs(){return this.#m}set inputs(e){this.#m=e}#g;get methodsSelect(){return this.#g}set methodsSelect(e){this.#g=e}constructor(){super(),this.apiService=new i(new n),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[c,u,t`
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
    `]}render(){return o`
      <user-manager disableAutoload></user-manager>
      <h1>Default</h1>
      <p>Examples using required,shaped,preselected, and disabled</p>
      <div>
        <leavitt-person-group-select label="default" .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="shaped" shaped .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select
          label="pre-selected"
          .selected=${{Name:"LGE Programmer Basic Access",Id:22,type:"PeopleGroup"}}
          .apiService=${this.apiService}
        ></leavitt-person-group-select>
        <leavitt-person-group-select
          label="disabled pre-selected"
          .selected=${{Name:"Aaron Drabeck",ProfilePictureCdnFileName:"zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe",Id:11056,type:"Person"}}
          disabled
          .apiService=${this.apiService}
        ></leavitt-person-group-select>
        <leavitt-person-group-select label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-group-select>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div>
        <leavitt-person-group-select methods-demo required .apiService=${this.apiService}></leavitt-person-group-select>
        <section buttons>
          <md-text-button @click=${()=>this.methodsSelect.reset()}>reset()</md-text-button>
          <md-text-button @click=${()=>this.methodsSelect.focus()}>focus()</md-text-button>
          <md-text-button @click=${()=>this.methodsSelect.reportValidity()}>reportValidity()</md-text-button>
        </section>
      </div>
    `}};s([d()],N.prototype,"apiService",null),s([m("leavitt-person-group-select)")],N.prototype,"inputs",null),s([g("leavitt-person-group-select[methods-demo]")],N.prototype,"methodsSelect",null),N=s([a("leavitt-person-group-select-playground")],N);let _=class extends p{#h=null;get refreshToken(){return this.#h}set refreshToken(e){this.#h=e}static{this.styles=[v,t``]}async firstUpdated(){const e=await h();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return o`
      <story-header name="Leavitt Person/Group Select" className="LeavittPersonGroupSelect"></story-header>
      ${this.refreshToken?o`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-group-select/project.json"
            ><leavitt-person-group-select-playground></leavitt-person-group-select-playground>
          </smart-demo>`:r}
      <api-docs src="./custom-elements.json" selected="leavitt-person-group-select"></api-docs>
    `}};s([d()],_.prototype,"refreshToken",null),_=s([a("leavitt-person-group-select-demo")],_);export{_ as LeavittPersonGroupSelectDemo};
