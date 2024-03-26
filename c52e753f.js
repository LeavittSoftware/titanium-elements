import{s as a,h as e,p as t,i,x as r,_ as d,t as n}from"./f43924bd.js";import{S as s}from"./1c8b19cb.js";import"./3286da59.js";import"./d0c3be22.js";import"./fcfd02a6.js";import"./68491de3.js";let m=class extends a{static{this.styles=[e,t,i`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      titanium-card {
        margin: 24px 0;
      }
    `]}render(){return r`
      <h1>No nav</h1>
      <titanium-card>
        <titanium-header header="Cheeses" subHeader="Your favorite cheeses" no-nav></titanium-header>
      </titanium-card>

      <h1>Back Arrow (default window.history.back)</h1>
      <titanium-card>
        <titanium-header header="Meats and cheese and dairy and things" subHeader="Your favorite meats"></titanium-header>
      </titanium-card>

      <h1>Back Arrow (overloaded action)</h1>
      <titanium-card>
        <titanium-header
          header="Meats and cheese and dairy and things"
          subHeader="Your favorite meats"
          disable-default-back-button-behavior
          @titanium-header-back-click=${()=>{alert("back clicked")}}
        ></titanium-header>
      </titanium-card>

      <h1>Icon</h1>
      <titanium-card>
        <titanium-header
          header="Meats and cheese and dairy and things"
          subHeader="Your favorite meats"
          icon="stadium"
          @titanium-header-back-click=${()=>{alert("back clicked")}}
        ></titanium-header>
      </titanium-card>

      <h1>Icon no-nav</h1>
      <titanium-card>
        <titanium-header header="Meats and cheese and dairy and things" subHeader="Your favorite meats" icon="stadium" no-nav></titanium-header>
      </titanium-card>
    `}};m=d([n("titanium-header-playground")],m);let o=class extends a{static{this.styles=[s,i``]}render(){return r`
      <story-header name="Titanium Header" className="TitaniumHeaderItem"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-header/project.json"
        ><titanium-header-playground></titanium-header-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-header"></api-docs>
    `}};o=d([n("titanium-header-demo")],o);export{o as TitaniumHeaderItemDemo};
