import{r as t,h as e,p as i,i as n,x as a,_ as o,d as u,e as d,t as s}from"./B87LNoAb.js";import{S as l}from"./nQDMyLps.js";import"./uXzSm2ar.js";import"./BARBAFIX.js";import"./Brw6a6hN.js";let r=class extends t{#t;get input(){return this.#t}set input(t){this.#t=t}#e;get value(){return this.#e}set value(t){this.#e=t}static{this.styles=[e,i,n`
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
      <titanium-card>
        <h1>Main demo</h1>

        <main card-body>
          <titanium-date-input
            autocomplete="bday"
            demo1
            label="Birthday"
            @change=${t=>this.value=t.target.value}
          ></titanium-date-input>
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
    `}};o([d("titanium-date-input[demo1]")],r.prototype,"input",null),o([u()],r.prototype,"value",null),r=o([s("titanium-date-input-playground")],r);let m=class extends t{static{this.styles=[l,n``]}render(){return a`
      <story-header name="Titanium Date Input" className="TitaniumDateInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-input/project.json"
        ><titanium-date-input-playground></titanium-date-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-input"></api-docs>
    `}};m=o([s("titanium-date-input-demo")],m);export{m as TitaniumDateInputItemDemo};