import{i as t,S as a,c as e,u as i,_ as n,e as o,t as r}from"./BkdWKSMI.js";import{S as s}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";let l=class extends t{static{this.styles=[s]}#t=0;render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium snackbar" level1Href="/titanium-snackbar" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium snackbar" className="TitaniumSnackbar"></story-header>

            <div>
              <h1>Snackbar stack</h1>
              <p>Snackbar notifications with different types and actions</p>

              <section buttons>
                <md-filled-tonal-button
                  @click=${()=>{this.#t++,this.dispatchEvent(new a(`Default snackbar #${this.#t}`))}}
                  >Default</md-filled-tonal-button
                >

                <md-filled-tonal-button @click=${()=>this.dispatchEvent(new a("Auto-hide snackbar",{autoHide:2e3}))}
                  >Auto-hide</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>this.dispatchEvent(new a({action:"GET",message:"Network error. Check your connection and try again.",statusCode:void 0,type:"HttpError"}))}
                  >HTTP error</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>this.dispatchEvent(new a({action:"GET",message:"Network error. Check your connection and try again.",statusCode:404,type:"HttpError",detail:"Major Outage. This was probably caused by a network outage in your area. Please contact your ISP for further assistance."}))}
                  >HTTP error with detail</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>this.dispatchEvent(new a("",{overrideTemplate:e`<h1 style="color:red">ALERT!</h1>`}))}
                  >Template literal</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-snackbar"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <md-dialog @open=${t=>i(t.target)} @close=${()=>this.snackbar.dismissAll()}>
        <span slot="headline">Snackbar from a dialog</span>
        <main slot="content">
          <titanium-snackbar-stack></titanium-snackbar-stack>
          <md-outlined-button
            @click=${t=>t.target?.dispatchEvent(new a({action:"GET",message:"Network error. Check your connection and try again.",statusCode:void 0,type:"HttpError"}))}
            >Open snackbar
          </md-outlined-button>
        </main>
      </md-dialog>
    `}};n([o("md-dialog")],l.prototype,"dialog",void 0),n([o("titanium-snackbar-stack")],l.prototype,"snackbar",void 0),l=n([r("titanium-snackbar-demo")],l);export{l as TitaniumSnackbarDemo};
