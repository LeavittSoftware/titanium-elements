import{i as t,c as i,_ as e,e as a,t as n}from"./BkdWKSMI.js";import{S as s}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./DrOQemLA.js";import"./Co12Lg7Y.js";let p=class extends t{#t;get methodFocus(){return this.#t}set methodFocus(t){this.#t=t}static{this.styles=[s]}render(){return i`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium search input" level1Href="/titanium-search-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-search-input</kbd> is deprecated and no longer in use.</p>
            </deprecation-notice>
            <story-header name="Titanium search input" className="TitaniumSearchInput"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic search input with expand/collapse functionality</p>
              <titanium-search-input @input=${t=>console.log(t.target.value)}></titanium-search-input>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled search input</p>
              <titanium-search-input disabled></titanium-search-input>
            </div>

            <div>
              <h1>Placeholder text</h1>
              <p>Search input with placeholder and hidden clear button</p>
              <titanium-search-input placeholder="Search for something" hide-clear-button></titanium-search-input>
            </div>

            <div>
              <h1>Collapse Prevented</h1>
              <p>Search input that stays expanded</p>
              <titanium-search-input prevent-collapse></titanium-search-input>
            </div>

            <div>
              <h1>Methods</h1>
              <p>Demonstrates public methods</p>
              <titanium-search-input method-focused></titanium-search-input>
              <br />

              <section buttons>
                <md-filled-tonal-button @click=${()=>this.methodFocus.focus()}>Focus</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-search-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};e([a("titanium-search-input[method-focused]")],p.prototype,"methodFocus",null),p=e([n("titanium-search-input-demo")],p);export{p as TitaniumSearchInputDemo};
