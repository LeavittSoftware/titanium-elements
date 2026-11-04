import{i,c as t,_ as e,e as n,t as o}from"./B9KYe1CG.js";import{S as a}from"./DryU-tS1.js";import"./_sPLC3CH.js";import"./-AObJhKa.js";import"./C7xTBR8p.js";import"./CUwIGwiH.js";import"./DvsoDDpw.js";import"./DJDEYoX8.js";import"./ByCLBcve.js";import"./DTS7lhmZ.js";let c=class extends i{#i;get requiredInput(){return this.#i}set requiredInput(i){this.#i=i}#t;get dialog(){return this.#t}set dialog(i){this.#t=i}static{this.styles=[a]}render(){return t`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium icon picker" level1Href="/titanium-icon-picker" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium icon picker" className="TitaniumIconPicker"></story-header>

            <div>
              <h1>Default</h1>
              <p>Icon picker example</p>
              <titanium-icon-picker></titanium-icon-picker>
            </div>

            <div>
              <h1>Filled</h1>
              <p>Filled icon picker example</p>
              <titanium-icon-picker></titanium-icon-picker>
            </div>

            <div>
              <h1>Favorite icons</h1>
              <p>Icon picker with favorite icons pre-selected</p>
              <titanium-icon-picker favorites=${"restaurant,cake,liquor,local_pizza,ramen_dining,icecream,egg,rice_bowl,skillet,oven"}></titanium-icon-picker>
            </div>

            <div>
              <h1>Whitelist icons</h1>
              <p>Icon picker restricted to whitelisted icons</p>
              <titanium-icon-picker
                whitelist="restaurant,cake,liquor,local_pizza,ramen_dining,icecream,egg,rice_bowl,skillet,oven"
                favorites="restaurant"
              ></titanium-icon-picker>
            </div>

            <div>
              <h1>Pre-populated</h1>
              <p>Icon picker example (pre-populated)</p>
              <titanium-icon-picker .selected=${{icon:"add"}}></titanium-icon-picker>
            </div>

            <div>
              <h1>Required</h1>
              <p>Icon picker required example</p>
              <titanium-icon-picker demo2 required label="Must pick an icon"></titanium-icon-picker>
              <section buttons>
                <md-filled-tonal-button @click=${()=>this.requiredInput.reset()}>Reset</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.requiredInput.reportValidity()}>Report validity</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Inside a dialog</h1>
              <p>Icon picker in an <code>md-dialog</code>. Type to search; the suggestions stay open while you type.</p>
              <section buttons>
                <md-filled-tonal-button @click=${()=>this.dialog.show()}>Open dialog</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-icon-picker"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <md-dialog>
        <div slot="headline">Pick an icon</div>
        <form slot="content" method="dialog">
          <titanium-icon-picker label="Icon"></titanium-icon-picker>
        </form>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close()}>Close</md-text-button>
        </div>
      </md-dialog>
    `}};e([n("titanium-icon-picker[demo2]")],c.prototype,"requiredInput",null),e([n("md-dialog")],c.prototype,"dialog",null),c=e([o("titanium-icon-picker-demo")],c);export{c as TitaniumIconPickerDemo};
