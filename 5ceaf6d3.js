import{s as t,h as e,p as o,i as a,x as i,_ as r,r as s,e as n,t as l}from"./f43924bd.js";import{S as p}from"./1c8b19cb.js";import"./3286da59.js";import"./f04cd7d4.js";import"./68491de3.js";import"./c0a7d937.js";import"./35db0734.js";import"./d49dec57.js";import"./7d2261f8.js";import"./75986af6.js";import"./72abf9b4.js";import"./f42dd0a8.js";import"./27c9cb5c.js";import"./f7d1f7f2.js";import"./ff84c309.js";import"./a0226597.js";let m=class extends t{#t;get pageControl(){return this.#t}set pageControl(t){this.#t=t}#e=25;get count(){return this.#e}set count(t){this.#e=t}#o;get data(){return this.#o}set data(t){this.#o=t}#a;get filteredData(){return this.#a}set filteredData(t){this.#a=t}firstUpdated(){this.data=Array(25).fill(null).map(((t,e)=>({id:e+1,name:"Bob"}))),this.#i()}#i(){const t=this.pageControl.take*this.pageControl.page;this.filteredData=this.data.slice(t,t+this.pageControl.take)}static{this.styles=[e,o,a`
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
