import{i as t,b as i,c as e,_ as a,e as n,t as l}from"./BkdWKSMI.js";import{S as d}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./-LEy-2I5.js";let u=class extends t{#t;get input(){return this.#t}set input(t){this.#t=t}#i;get filledInput(){return this.#i}set filledInput(t){this.#i=t}static{this.styles=[d,i`
      md-filled-text-field {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }

      titanium-date-input,
      h1 {
        margin-bottom: 12px;
      }

      two-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
    `]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium date input" level1Href="/titanium-date-input" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium date input" className="TitaniumDateInput"></story-header>

            <div>
              <h1>Basic date input</h1>

              <two-column>
                <titanium-date-input
                  required
                  label="Date"
                  @change=${t=>console.log("change",t.target.value)}
                ></titanium-date-input>
                <titanium-date-input
                  required
                  filled
                  label="Filled"
                  @change=${t=>console.log("change",t.target.value)}
                ></titanium-date-input>
              </two-column>

              <section buttons>
                <md-filled-tonal-button
                  @click=${()=>{this.input.reset(),this.filledInput.reset()}}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.input.reportValidity(),this.filledInput.reportValidity()}}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>With pre-filled value</h1>
              <titanium-date-input label="Pre-filled" .value=${"2023-12-18"}></titanium-date-input>
            </div>

            <div>
              <h1>Disabled and required</h1>
              <two-column>
                <titanium-date-input disabled label="Disabled" .value=${"2023-12-18"}></titanium-date-input>
                <titanium-date-input required label="Required"></titanium-date-input>
              </two-column>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-date-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};a([n("titanium-date-input")],u.prototype,"input",null),a([n("titanium-date-input[filled]")],u.prototype,"filledInput",null),u=a([l("titanium-date-input-demo")],u);export{u as TitaniumDateInputDemo};
