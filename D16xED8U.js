import{h as t,a as e,p as a,i as o,k as i,_ as r,r as s,e as n,t as l}from"./BDVm1clO.js";import{S as p}from"./BYpX0Mqs.js";import"./BSBJUm6d.js";import"./BNZaNXI7.js";import"./B29NwKRo.js";import"./CeXDAZTj.js";import"./DuymJoSJ.js";import"./bsH9U0_p.js";import"./BaNSYc_1.js";import"./y3grKe00.js";import"./DihM7gpy.js";import"./BwleRb8i.js";import"./CmWDcngB.js";import"./Dq5qrwSy.js";import"./Ct-HHgwR.js";import"./BWS08NO5.js";let m=class extends t{#t;get pageControl(){return this.#t}set pageControl(t){this.#t=t}#e=25;get count(){return this.#e}set count(t){this.#e=t}#a;get data(){return this.#a}set data(t){this.#a=t}#o;get filteredData(){return this.#o}set filteredData(t){this.#o=t}firstUpdated(){this.data=Array(25).fill(null).map(((t,e)=>({id:e+1,name:"Bob"}))),this.#i()}#i(){const t=this.pageControl.take*this.pageControl.page;this.filteredData=this.data.slice(t,t+this.pageControl.take)}static{this.styles=[e,a,o`
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
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `]}render(){return i`
      <div>
        <h1>Default</h1>
        <titanium-page-control localStorageKey="demoPageTake1"></titanium-page-control>
      </div>

      <div>
        <h1>Disabled</h1>
        <titanium-page-control disabled></titanium-page-control>
      </div>

      <div>
        <h1>Full example</h1>
        ${this.filteredData?.map((t=>i` <md-suggestion-chip label="${t?.name} #${t?.id}"></md-suggestion-chip> `))}
        <titanium-page-control
          main
          .pageSizes=${[2,4,6,8]}
          .count=${this.count}
          localStorageKey="demoPageTake2"
          @action=${()=>{this.#i()}}
        ></titanium-page-control>
      </div>
    `}};r([n("titanium-page-control[main]")],m.prototype,"pageControl",null),r([s()],m.prototype,"count",null),r([s()],m.prototype,"data",null),r([s()],m.prototype,"filteredData",null),m=r([l("titanium-page-control-playground")],m);let d=class extends t{static{this.styles=[p,o``]}render(){return i`
      <story-header name="Titanium Page Control" className="TitaniumPageControl"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-page-control/project.json"
        ><titanium-page-control-playground></titanium-page-control-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
    `}};d=r([l("titanium-page-control-demo")],d);export{d as TitaniumPageControlDemo};
