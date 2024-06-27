import{s as t,h as e,p as o,i as a,x as i,_ as r,r as s,e as n,t as l}from"./d0ace671.js";import{S as p}from"./9e8552c1.js";import"./41178c5b.js";import"./05b95cb7.js";import"./ec341a4d.js";import"./a2e77e56.js";import"./20123ed4.js";import"./725c256f.js";import"./3e67aa42.js";import"./62698f2c.js";import"./663a7052.js";import"./f42dd0a8.js";import"./c3dfe460.js";import"./22c1ed29.js";import"./fb6bc6bd.js";import"./dc22cb98.js";let m=class extends t{#t;get pageControl(){return this.#t}set pageControl(t){this.#t=t}#e=25;get count(){return this.#e}set count(t){this.#e=t}#o;get data(){return this.#o}set data(t){this.#o=t}#a;get filteredData(){return this.#a}set filteredData(t){this.#a=t}firstUpdated(){this.data=Array(25).fill(null).map(((t,e)=>({id:e+1,name:"Bob"}))),this.#i()}#i(){const t=this.pageControl.take*this.pageControl.page;this.filteredData=this.data.slice(t,t+this.pageControl.take)}static{this.styles=[e,o,a`
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
    `}};r([n("titanium-page-control[main]")],m.prototype,"pageControl",null),r([s()],m.prototype,"count",null),r([s()],m.prototype,"data",null),r([s()],m.prototype,"filteredData",null),m=r([l("titanium-page-control-playground")],m);let d=class extends t{static{this.styles=[p,a``]}render(){return i`
      <story-header name="Titanium Page Control" className="TitaniumPageControl"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-page-control/project.json"
        ><titanium-page-control-playground></titanium-page-control-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
    `}};d=r([l("titanium-page-control-demo")],d);export{d as TitaniumPageControlDemo};
