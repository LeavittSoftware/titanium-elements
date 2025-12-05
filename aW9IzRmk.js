import{i as t,h as e,p as a,c as i,x as o,_ as r,e as s,r as n,t as l}from"./BRwII10n.js";import{S as d}from"./9jYdvRPf.js";import"./PuY7V0q-.js";import"./TMiwMgdF.js";import"./Cpkk_VM2.js";import"./CKv0GAzC.js";import"./Bqq-1491.js";import"./BkmICBhh.js";let c=class extends t{#t;get pageControl(){return this.#t}set pageControl(t){this.#t=t}#e=25;get count(){return this.#e}set count(t){this.#e=t}#a;get data(){return this.#a}set data(t){this.#a=t}#i;get filteredData(){return this.#i}set filteredData(t){this.#i=t}firstUpdated(){this.data=Array(25).fill(null).map((t,e)=>({id:e+1,name:"Bob"})),this.#o()}#o(){const t=this.pageControl.take*this.pageControl.page;this.filteredData=this.data.slice(t,t+this.pageControl.take)}static{this.styles=[e,a,i`
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
    `]}render(){return o`
      <div>
        <h1>Default</h1>
        <titanium-page-control localStorageKey="demoPageTake1"></titanium-page-control>
      </div>

      <div>
        <h1>Disabled</h1>
        <titanium-page-control disabled></titanium-page-control>
      </div>

      <div>
        <h1>Filled</h1>
        <titanium-page-control filled></titanium-page-control>
      </div>

      <div>
        <h1>Full example</h1>
        ${this.filteredData?.map(t=>o` <md-suggestion-chip label="${t?.name} #${t?.id}"></md-suggestion-chip> `)}
        <titanium-page-control
          main
          .pageSizes=${[2,4,6,8]}
          .count=${this.count}
          localStorageKey="demoPageTake2"
          @action=${()=>{this.#o()}}
        ></titanium-page-control>
      </div>
    `}};r([s("titanium-page-control[main]")],c.prototype,"pageControl",null),r([n()],c.prototype,"count",null),r([n()],c.prototype,"data",null),r([n()],c.prototype,"filteredData",null),c=r([l("titanium-page-control-playground")],c);let p=class extends t{static{this.styles=[d,i``]}render(){return o`
      <story-header name="Titanium Page Control" className="TitaniumPageControl"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-page-control/project.json"
        ><titanium-page-control-playground></titanium-page-control-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
    `}};p=r([l("titanium-page-control-demo")],p);export{p as TitaniumPageControlDemo};
