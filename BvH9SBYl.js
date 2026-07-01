import{i as t,c as i,_ as e,e as a,t as n}from"./D_imZRq6.js";import{S as l}from"./Cp0ERCaT.js";import"./Cr5T8rNp.js";import"./BrugqwTk.js";let s=class extends t{#t;get methodFocus(){return this.#t}set methodFocus(t){this.#t=t}static{this.styles=[l]}render(){return i`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium search input" level1Href="/titanium-search-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium filled search input" className="TitaniumFilledSearchInput"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic filled search input with clear button</p>
              <titanium-filled-search-input @input=${t=>console.log(t.target.value)}></titanium-filled-search-input>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled search input</p>
              <titanium-filled-search-input disabled></titanium-filled-search-input>
            </div>

            <div>
              <h1>Placeholder text</h1>
              <p>Search input with custom placeholder</p>
              <titanium-filled-search-input placeholder="Search for something"></titanium-filled-search-input>
            </div>

            <div>
              <h1>With value</h1>
              <p>Search input with an initial value</p>
              <titanium-filled-search-input value="Initial search"></titanium-filled-search-input>
            </div>

            <div>
              <h1>Methods</h1>
              <p>Demonstrates focusing the underlying text field</p>
              <titanium-filled-search-input method-focused></titanium-filled-search-input>
              <br />

              <section buttons>
                <md-filled-tonal-button @click=${()=>this.methodFocus.shadowRoot?.querySelector("md-filled-text-field")?.focus()}
                  >Focus</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-search-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};e([a("titanium-filled-search-input[method-focused]")],s.prototype,"methodFocus",null),s=e([n("titanium-search-input-demo")],s);export{s as TitaniumSearchInputDemo};
