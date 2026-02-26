import{i as t,b as a,c as e,_ as i,e as o,r as n,t as r}from"./BkdWKSMI.js";import{S as s}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./D6K90XK6.js";import"./yhgryvfy.js";import"./Crvvf7pv.js";import"./ChwwPp1m.js";import"./DbnfmX2U.js";import"./CIHPGdiZ.js";let l=class extends t{#t;get pageControl(){return this.#t}set pageControl(t){this.#t=t}#a=25;get count(){return this.#a}set count(t){this.#a=t}#e;get data(){return this.#e}set data(t){this.#e=t}#i;get filteredData(){return this.#i}set filteredData(t){this.#i=t}firstUpdated(){this.data=Array(25).fill(null).map((t,a)=>({id:a+1,name:"Bob"})),this.#o()}#o(){const t=this.pageControl.take*this.pageControl.page;this.filteredData=this.data.slice(t,t+this.pageControl.take)}static{this.styles=[s,a`
      suggestion-chip-group {
        display: flex;
        flex-wrap: wrap;
        margin: 24px 0;
        gap: 12px;
      }
    `]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium page control" level1Href="/titanium-page-control" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium page control" className="TitaniumPageControl"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic page control with local storage</p>
              <titanium-page-control localStorageKey="demoPageTake1"></titanium-page-control>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled page control</p>
              <titanium-page-control disabled></titanium-page-control>
            </div>

            <div>
              <h1>Filled</h1>
              <p>Filled page control variant</p>
              <titanium-page-control filled></titanium-page-control>
            </div>

            <div>
              <h1>Full example</h1>
              <p>Complete page control with data pagination</p>
              <suggestion-chip-group>
                ${this.filteredData?.map(t=>e` <md-suggestion-chip label="${t?.name} #${t?.id}"></md-suggestion-chip> `)}
              </suggestion-chip-group>
              <titanium-page-control
                main
                .pageSizes=${[2,4,6,8]}
                .count=${this.count}
                localStorageKey="demoPageTake2"
                @action=${()=>{this.#o()}}
              ></titanium-page-control>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};i([o("titanium-page-control[main]")],l.prototype,"pageControl",null),i([n()],l.prototype,"count",null),i([n()],l.prototype,"data",null),i([n()],l.prototype,"filteredData",null),l=i([r("titanium-page-control-demo")],l);export{l as TitaniumPageControlDemo};
