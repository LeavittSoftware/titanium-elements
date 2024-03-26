import{S as e,i as t,x as o,T as r,_ as s,n as l,t as i,s as a,h as p,p as n,r as c,c as u,e as d,G as m}from"./f43924bd.js";import{S as h}from"./1c8b19cb.js";import"./3286da59.js";import{A as g,a as v}from"./508363fc.js";import{T as b}from"./25e1fb2c.js";import{g as S}from"./975570c0.js";import{D as y}from"./b7c4d201.js";import{F as f}from"./b7be6849.js";import"./68491de3.js";import"./35db0734.js";import"./d49dec57.js";import"./d8fb47ea.js";import"./75986af6.js";import"./72abf9b4.js";import"./c47213b1.js";import"./08f0fa74.js";import"./f42dd0a8.js";import"./27c9cb5c.js";import"./f7d1f7f2.js";import"./ff84c309.js";import"./3d226a42.js";import"./a0226597.js";import"./49ad9f2f.js";const x=new Map([["#lg.net.core.DataModel.Core.StatePeopleGroup",{icon:"location_searching",displayName:"State people group"}],["#lg.net.core.DataModel.Core.CityPeopleGroup",{icon:"share_location",displayName:"City people group"}],["#lg.net.core.DataModel.Core.JobRolePeopleGroup",{icon:"light_mode",displayName:"Job role people group"}],["#lg.net.core.DataModel.Core.LdapPeopleGroup",{icon:"account_circle",displayName:"LDAP people group"}],["#lg.net.core.DataModel.Core.CompanyPeopleGroup",{icon:"supervised_user_circle",displayName:"Company people group"}],["#lg.net.core.DataModel.Core.DepartmentPeopleGroup",{icon:"monetization_on",displayName:"Department people group"}],["#lg.net.core.DataModel.Core.BuildingPeopleGroup",{icon:"location_city",displayName:"Building people group"}],["#lg.net.core.DataModel.Core.FTEJobRolePeopleGroup",{icon:"work_outline",displayName:"FTE job role people group"}],["#lg.net.core.DataModel.Core.CompanyGroupPeopleGroup",{icon:"groups",displayName:"Company grouping people group"}]]);let $=class extends b{#e="Person or group";get label(){return this.#e}set label(e){this.#e=e}#t="Search for a person or group";get placeholder(){return this.#t}set placeholder(e){this.#t=e}#o="People";get peopleApiControllerName(){return this.#o}set peopleApiControllerName(e){this.#o=e}#r="PeopleGroups";get groupApiControllerName(){return this.#r}set groupApiControllerName(e){this.#r=e}#s="Name";get pathToSelectedText(){return this.#s}set pathToSelectedText(e){this.#s=e}#l;get apiService(){return this.#l}set apiService(e){this.#l=e}#i=new y((e=>this.#a(e)));#p=new AbortController;searchTermToOData(e){const t=S(e);return t.length<1?null:t.map((e=>`contains(tolower(Name), '${e.toLowerCase()}')`)).join(" and ")}async#a(e){if(!e)return;this.#p.abort(),this.#p=new AbortController;const t=Promise.all([this.#n(e),this.#c(e)]);this.loadWhile(t);const o=await t,r=[...o[0]?.entities??[],...o[1]?.entities??[]],s=(o[0]?.odataCount??0)+(o[1]?.odataCount??0),l=new f(r,{includeScore:!0,keys:["Name"]}).search(e).sort(((e,t)=>(t?.score??0)-(e?.score??0))).slice(0,15);this.showSuggestions(l.map((e=>e.item))??[],s??0)}async#n(t){if(!t)return null;try{const e=["top=100","count=true","compute=FullName as Name","select=Name,Id,CompanyName,ProfilePictureCdnFileName"],o=S(t);if(o.length>0){const t=o.map((e=>`contains(tolower(Name), '${e.toLowerCase()}')`)).join(" and ");e.push(`filter=${t}`)}const r=await(this.apiService?.getAsync(`${this.peopleApiControllerName}?${e.join("&")}`,{abortController:this.#p}));return r?.entities.forEach((e=>e.type="Person")),r}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}async#c(t){if(!t)return null;const o=["not IsExpired"];try{const e=["top=100","count=true","select=Name,Id,Description","expand=EffectiveMembers(top=0;count=true)"],r=S(t);r.length>0&&o.push(r.map((e=>`contains(tolower(Name), '${e.toLowerCase()}')`)).join(" and ")),e.push(`filter=${o.join(" and ")}`);const s=await(this.apiService?.getAsync(`${this.groupApiControllerName}?${e.join("&")}`,{abortController:this.#p}));return s?.entities.forEach((e=>e.type="PeopleGroup")),s}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}return null}static{this.styles=[...b.styles,t`
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

            ${Object.keys(e).some((e=>"EffectiveMembers@odata.count"===e))?o` <span slot="overline"> ${e["EffectiveMembers@odata.count"]} user${1===e["EffectiveMembers@odata.count"]?"":"s"} </span>`:r}
            <span slot="supporting-text">${e.Description||(x.get(e["@odata.type"])?.displayName??"People group")}</span>
          </md-menu-item>`:o``}};s([l({type:String})],$.prototype,"label",null),s([l({type:String})],$.prototype,"placeholder",null),s([l({type:String})],$.prototype,"peopleApiControllerName",null),s([l({type:String})],$.prototype,"groupApiControllerName",null),s([l({type:String})],$.prototype,"pathToSelectedText",null),s([l({attribute:!1})],$.prototype,"apiService",null),$=s([i("leavitt-person-group-select")],$);let N=class extends a{#l;get apiService(){return this.#l}set apiService(e){this.#l=e}#u;get inputs(){return this.#u}set inputs(e){this.#u=e}#d;get methodsSelect(){return this.#d}set methodsSelect(e){this.#d=e}constructor(){super(),this.apiService=new g(new v),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","Testing")}static{this.styles=[p,n,t`
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
    `}};s([c()],N.prototype,"apiService",null),s([u("leavitt-person-group-select)")],N.prototype,"inputs",null),s([d("leavitt-person-group-select[methods-demo]")],N.prototype,"methodsSelect",null),N=s([i("leavitt-person-group-select-playground")],N);let C=class extends a{#m=null;get refreshToken(){return this.#m}set refreshToken(e){this.#m=e}static{this.styles=[h,t``]}async firstUpdated(){const e=await m();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return o`
      <story-header name="Leavitt Person/Group Select" className="LeavittPersonGroupSelect"></story-header>
      ${this.refreshToken?o`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-group-select/project.json"
            ><leavitt-person-group-select-playground></leavitt-person-group-select-playground>
          </smart-demo>`:r}
      <api-docs src="./custom-elements.json" selected="leavitt-person-group-select"></api-docs>
    `}};s([c()],C.prototype,"refreshToken",null),C=s([i("leavitt-person-group-select-demo")],C);export{C as LeavittPersonGroupSelectDemo};
