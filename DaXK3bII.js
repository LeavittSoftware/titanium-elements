import{i as t,h as i,p as e,c as a,x as n,_ as u,e as d,r as o,t as s}from"./CIAkX42C.js";import{S as l}from"./DzDchJdO.js";import"./kwKBK7yw.js";import"./DmSwQ6-d.js";import"./BD_eJWVt.js";let m=class extends t{#t;get input(){return this.#t}set input(t){this.#t=t}#i;get value(){return this.#i}set value(t){this.#i=t}static{this.styles=[i,e,a`
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
    `]}render(){return n`
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

      <titanium-card>
        <h1>Filled demo</h1>
        <div>
          <titanium-date-input filled label="Start date"></titanium-date-input>
        </div>
      </titanium-card>
    `}};u([d("titanium-date-input[demo1]")],m.prototype,"input",null),u([o()],m.prototype,"value",null),m=u([s("titanium-date-input-playground")],m);let r=class extends t{static{this.styles=[l,a``]}render(){return n`
      <story-header name="Titanium Date Input" className="TitaniumDateInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-input/project.json"
        ><titanium-date-input-playground></titanium-date-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-input"></api-docs>
    `}};r=u([s("titanium-date-input-demo")],r);export{r as TitaniumDateInputItemDemo};
