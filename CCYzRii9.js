import{h as t,a as i,p as e,i as s,k as r,_ as a,e as n,t as o}from"./BDVm1clO.js";import{S as p}from"./BYpX0Mqs.js";import"./BSBJUm6d.js";import"./DNpez9SM.js";import"./CCmSvFP9.js";import"./B29NwKRo.js";import"./B_UjpJlV.js";import"./DMMrNLrz.js";import"./y3grKe00.js";import"./DihM7gpy.js";import"./UNHCmXFX.js";import"./BnAFKI1h.js";import"./bsH9U0_p.js";import"./BwleRb8i.js";import"./CmWDcngB.js";import"./Dq5qrwSy.js";import"./Ct-HHgwR.js";let u=class extends t{#t;get methodFocus(){return this.#t}set methodFocus(t){this.#t=t}static{this.styles=[i,e,s`
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
    `]}render(){return r`
      <h1>Default</h1>
      <div>
        <titanium-search-input @input=${t=>console.log(t.target.value)}></titanium-search-input>
      </div>

      <h1>Disabled</h1>
      <div>
        <titanium-search-input disabled></titanium-search-input>
      </div>

      <h1>Placeholder text</h1>
      <div>
        <titanium-search-input placeholder="Search for something" hide-clear-button></titanium-search-input>
      </div>

      <h1>Collapse Prevented</h1>
      <div>
        <titanium-search-input prevent-collapse></titanium-search-input>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <titanium-card>
        <div>
          <titanium-search-input method-focused></titanium-search-input>
          <section buttons>
            <md-outlined-button @click=${()=>this.methodFocus.focus()}>Focus</md-outlined-button>
          </section>
        </div>
      </titanium-card>
    `}};a([n("titanium-search-input[method-focused]")],u.prototype,"methodFocus",null),u=a([o("titanium-search-input-playground")],u);let m=class extends t{static{this.styles=[p,s``]}render(){return r`
      <story-header name="Titanium Search Input" className="TitaniumSearchInputItem"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-search-input/project.json"
        ><titanium-search-input-playground></titanium-search-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-search-input"></api-docs>
    `}};m=a([o("titanium-search-input-demo")],m);export{m as TitaniumSearchInputItemDemo};
