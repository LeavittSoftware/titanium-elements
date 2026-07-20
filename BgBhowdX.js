import{i as t,b as i,c as e,_ as o,r as a,e as n,t as r}from"./CyOMU7b-.js";import{S as l}from"./DayneWRO.js";import"./D528NSl_.js";import"./jB0Bcmk4.js";import"./D7sAd7po.js";let s=class extends t{#t;get result(){return this.#t}set result(t){this.#t=t}#i;get result2(){return this.#i}set result2(t){this.#i=t}#e;get result3(){return this.#e}set result3(t){this.#e=t}#o;get result4(){return this.#o}set result4(t){this.#o=t}#a;get favoriteSnack(){return this.#a}set favoriteSnack(t){this.#a=t}#n;get confirmationDialog(){return this.#n}set confirmationDialog(t){this.#n=t}#r;get confirmationDialog2(){return this.#r}set confirmationDialog2(t){this.#r=t}#l;get confirmationDialog3(){return this.#l}set confirmationDialog3(t){this.#l=t}#s;get confirmationDialog4(){return this.#s}set confirmationDialog4(t){this.#s=t}static{this.styles=[l,i`
      md-filled-text-field {
        --md-filled-text-field-container-shape: 16px;

        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }
    `]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium confirmation dialog" level1Href="/titanium-confirmation-dialog" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium confirmation dialog" className="TitaniumConfirmationDialog"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic confirmation dialog with default button text</p>
              <p>Result: ${this.result}</p>
              <md-filled-tonal-button
                @click=${async()=>{this.result=await(this.confirmationDialog?.open("Confirmation delete?","Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis."))}}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo1></titanium-confirmation-dialog>
            </div>

            <div>
              <h1>Custom button text</h1>
              <p>Confirmation dialog with custom confirm and cancel button text</p>
              <p>Result: ${this.result2}</p>
              <md-filled-tonal-button
                @click=${async()=>{this.result2=await(this.confirmationDialog2?.open("Do you agree?","Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis."))}}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo2 confirmActionText="Agree" cancelActionText="Disagree"></titanium-confirmation-dialog>
            </div>

            <div>
              <h1>Slot demo</h1>
              <p>Confirmation dialog with custom content in the slot</p>
              <p>Result: ${this.result3}</p>
              <md-filled-tonal-button
                @click=${async()=>{this.result3=await(this.confirmationDialog3?.open("What is your favorite color?","asf saf asdf"))}}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo3>
                <md-filled-text-field label="What is your favorite color?"></md-filled-text-field>
              </titanium-confirmation-dialog>
            </div>

            <div>
              <h1>Required form demo</h1>
              <p>Confirmation dialog with form validation that disables confirm action</p>
              <p>Result: ${this.result4}</p>
              <md-filled-tonal-button
                @click=${async()=>{this.favoriteSnack="",this.result4=await(this.confirmationDialog4?.open("What is your favorite snack?","asf saf asdf"))}}
                >Open</md-filled-tonal-button
              >
              <titanium-confirmation-dialog demo4 ?disable-confirmation-action=${!this.favoriteSnack}>
                <md-filled-text-field
                  label="Favorite snack"
                  .value=${this.favoriteSnack||""}
                  @input=${t=>this.favoriteSnack=t.target.value||""}
                ></md-filled-text-field>
              </titanium-confirmation-dialog>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-confirmation-dialog"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};o([a()],s.prototype,"result",null),o([a()],s.prototype,"result2",null),o([a()],s.prototype,"result3",null),o([a()],s.prototype,"result4",null),o([a()],s.prototype,"favoriteSnack",null),o([n("titanium-confirmation-dialog[demo1]")],s.prototype,"confirmationDialog",null),o([n("titanium-confirmation-dialog[demo2]")],s.prototype,"confirmationDialog2",null),o([n("titanium-confirmation-dialog[demo3]")],s.prototype,"confirmationDialog3",null),o([n("titanium-confirmation-dialog[demo4]")],s.prototype,"confirmationDialog4",null),s=o([r("titanium-confirmation-dialog-demo")],s);export{s as TitaniumConfirmationDialogDemo};
