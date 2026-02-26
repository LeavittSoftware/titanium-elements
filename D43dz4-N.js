import{i,b as t,c as e,_ as a,r as o,e as n,t as r}from"./BkdWKSMI.js";import{S as s}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import{C as m}from"./BtETRSc4.js";let d=class extends i{#i=!1;get confirmed(){return this.#i}set confirmed(i){this.#i=i}#t;get confirmDialog(){return this.#t}set confirmDialog(i){this.#t=i}async#e(){const i=new m("Confirm delete?","Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.");this.dispatchEvent(i),this.confirmed=await i.dialogResult}firstUpdated(){this.addEventListener(m.eventType,async i=>{await import("./BtETRSc4.js").then(function(i){return i.c}),this.confirmDialog.handleEvent(i)})}static{this.styles=[s,t`
      h3 {
        margin-bottom: 12px;
      }
    `]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium confirm dialog" level1Href="/titanium-confirm-dialog" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium confirm dialog" className="TitaniumConfirmDialog"></story-header>
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-confirm-dialog</kbd> is deprecated. Use <kbd>titanium-confirmation-dialog</kbd> instead.</p>
            </deprecation-notice>
            <div>
              <h1>Default</h1>
              <h3>Confirmed: ${this.confirmed}</h3>
              <md-filled-tonal-button @click=${this.#e}>Open</md-filled-tonal-button>
            </div>
            <api-docs src="./custom-elements.json" selected="titanium-confirm-dialog"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
      <titanium-confirm-dialog></titanium-confirm-dialog>
    `}};a([o()],d.prototype,"confirmed",null),a([n("titanium-confirm-dialog")],d.prototype,"confirmDialog",null),d=a([r("titanium-confirm-dialog-demo")],d);export{d as TitaniumConfirmDialogDemo};
