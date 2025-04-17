import{i as t,h as i,p as e,c as s,x as a,_ as n,e as r,t as o}from"./9VdYylXu.js";import{S as u}from"./CHIVE7-D.js";import"./DV-lBPLw.js";import"./7Ac3HbYG.js";import"./CULPSkiS.js";import"./CB8XehPG.js";let c=class extends t{#t;get methodFocus(){return this.#t}set methodFocus(t){this.#t=t}static{this.styles=[i,e,s`
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
    `]}render(){return a`
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
    `}};n([r("titanium-search-input[method-focused]")],c.prototype,"methodFocus",null),c=n([o("titanium-search-input-playground")],c);let d=class extends t{static{this.styles=[u,s``]}render(){return a`
      <story-header name="Titanium Search Input" className="TitaniumSearchInputItem"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-search-input/project.json"
        ><titanium-search-input-playground></titanium-search-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-search-input"></api-docs>
    `}};d=n([o("titanium-search-input-demo")],d);export{d as TitaniumSearchInputItemDemo};
