import{i as t,h as i,p as e,c as a,x as d,_ as n,e as l,r as o,t as u}from"./v29v6fYj.js";import{S as s}from"./98-jDCgK.js";import"./B0y45SPD.js";import"./eK6ZMnmI.js";import"./D4HtBcT4.js";import"./ChTMHNkg.js";let r=class extends t{#t;get input(){return this.#t}set input(t){this.#t=t}#i;get filledInput(){return this.#i}set filledInput(t){this.#i=t}#e;get value(){return this.#e}set value(t){this.#e=t}static{this.styles=[i,e,a`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
        gap: 24px;
      }

      md-filled-text-field {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }

      titanium-card {
        gap: 24px;
      }

      two-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        align-items: start;
        margin-top: 12px;
        margin-bottom: 12px;
      }

      footer {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `]}render(){return d`
      <titanium-card>
        <h1>Main demo</h1>

        <main card-body>
          <two-column>
            <titanium-date-input
              autocomplete="bday"
              demo1
              label="Birthday"
              @change=${t=>this.value=t.target.value}
            ></titanium-date-input>
            <md-outlined-text-field label="Birthday" value="Test"></md-outlined-text-field>
          </two-column>

          <two-column>
            <titanium-date-input filled label="Start date"></titanium-date-input>
            <md-filled-text-field label="Start date" value="Test"></md-filled-text-field>
          </two-column>
        </main>
        <span card-menu>Output: ${this.value}</span>

        <footer card-footer>
          <md-outlined-button
            @click=${()=>{this.input.value=this.input.value?"":"2023-12-08",this.filledInput.value=this.filledInput.value?"":"2023-12-08"}}
            >Set a value</md-outlined-button
          >
          <md-outlined-button
            @click=${()=>{this.input.error=!0,this.input.errorText=this.input.errorText?"":"Oh no not that date!",this.filledInput.error=!0,this.filledInput.errorText=this.filledInput.errorText?"":"Oh no not that date!"}}
            >Set an error</md-outlined-button
          >
          <md-outlined-button
            @click=${()=>{this.input.required=!this.input.required,this.filledInput.required=!this.filledInput.required}}
            >Toggle required</md-outlined-button
          >
          <md-outlined-button
            @click=${()=>{this.input.disabled=!this.input.disabled,this.filledInput.disabled=!this.filledInput.disabled}}
            >Toggle disabled</md-outlined-button
          >

          <md-outlined-button
            @click=${()=>{this.input.supportingText=this.input.supportingText?"":"Thank you for your birthday! I hope you have a great day!",this.filledInput.supportingText=this.filledInput.supportingText?"":"Thank you for your birthday! I hope you have a great day!"}}
          >
            Toggle supporting text
          </md-outlined-button>

          <md-outlined-button
            @click=${()=>{this.input.label=this.input.label?"":"Start date",this.filledInput.label=this.filledInput.label?"":"Start date"}}
            >Toggle label text</md-outlined-button
          >

          <md-outlined-button
            @click=${()=>{this.input.reset(),this.filledInput.reset()}}
            >Reset</md-outlined-button
          >
          <md-outlined-button
            @click=${()=>{this.input.reportValidity(),this.filledInput.reportValidity()}}
            >Report validity</md-outlined-button
          >
        </footer>
      </titanium-card>

      <titanium-card>
        <h1>Date time demo</h1>
        <div>
          <titanium-date-input type="datetime-local" label="Reboot every"></titanium-date-input>
        </div>
      </titanium-card>
    `}};n([l("titanium-date-input[demo1]")],r.prototype,"input",null),n([l("titanium-date-input[filled]")],r.prototype,"filledInput",null),n([o()],r.prototype,"value",null),r=n([u("titanium-date-input-playground")],r);let m=class extends t{static{this.styles=[s,a``]}render(){return d`
      <story-header name="Titanium Date Input" className="TitaniumDateInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-input/project.json"
        ><titanium-date-input-playground></titanium-date-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-input"></api-docs>
    `}};m=n([u("titanium-date-input-demo")],m);export{m as TitaniumDateInputItemDemo};
