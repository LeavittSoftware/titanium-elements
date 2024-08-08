import{h as t,a as i,p as e,i as n,k as a,_ as o,r as u,e as d,t as s}from"./BDVm1clO.js";import{S as r}from"./BYpX0Mqs.js";import"./BSBJUm6d.js";import"./DNpez9SM.js";import"./Bx5lyspZ.js";import"./B29NwKRo.js";import"./BnAFKI1h.js";import"./bsH9U0_p.js";import"./BwleRb8i.js";import"./y3grKe00.js";import"./DihM7gpy.js";let m=class extends t{#t;get input(){return this.#t}set input(t){this.#t=t}#i;get value(){return this.#i}set value(t){this.#i=t}static{this.styles=[i,e,n`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
        gap: 24px;
      }

      titanium-card {
        gap: 24px;
      }

      footer {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `]}render(){return a`
      <titanium-card has-footer has-menu>
        <h1>Main demo</h1>

        <main card-body>
          <titanium-date-input demo1 label="Start date" @change=${t=>this.value=t.target.value}></titanium-date-input>
        </main>
        <span card-menu>Output: ${this.value}</span>

        <footer card-footer>
          <md-outlined-button @click=${()=>this.input.value=this.input.value?"":"2023-12-08"}>Set an value</md-outlined-button>
          <md-outlined-button
            @click=${()=>{this.input.error=!0,this.input.errorText=this.input.errorText?"":"Oh no not that date!"}}
            >Set an error</md-outlined-button
          >
          <md-outlined-button @click=${()=>this.input.required=!this.input.required}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${()=>this.input.disabled=!this.input.disabled}>Toggle disabled</md-outlined-button>

          <md-outlined-button @click=${()=>this.input.supportingText=this.input.supportingText?"":"Supporting text example"}
            >Toggle supporting text</md-outlined-button
          >

          <md-outlined-button @click=${()=>this.input.label=this.input.label?"":"Start date"}>Toggle label text</md-outlined-button>

          <md-outlined-button @click=${()=>this.input.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${()=>this.input.reportValidity()}>Report validity</md-outlined-button>
        </footer>
      </titanium-card>

      <titanium-card>
        <h1>Date time demo</h1>
        <div>
          <titanium-date-input type="datetime-local" label="Reboot every"></titanium-date-input>
        </div>
      </titanium-card>
    `}};o([d("titanium-date-input[demo1]")],m.prototype,"input",null),o([u()],m.prototype,"value",null),m=o([s("titanium-date-input-playground")],m);let l=class extends t{static{this.styles=[r,n``]}render(){return a`
      <story-header name="Titanium Date Input" className="TitaniumDateInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-input/project.json"
        ><titanium-date-input-playground></titanium-date-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-input"></api-docs>
    `}};l=o([s("titanium-date-input-demo")],l);export{l as TitaniumDateInputItemDemo};
