import{s as t,h as a,p as e,i as o,x as n,S as i,_ as r,e as s,t as d}from"./d0ace671.js";import{S as c}from"./9e8552c1.js";import"./41178c5b.js";import"./ffc1a613.js";import{d as l}from"./791b1dff.js";import"./ec341a4d.js";import"./f42dd0a8.js";let u=class extends t{static{this.styles=[a,e,o`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `]}#t=0;render(){return n`
      <h1>Demo</h1>

      <div>
        <section buttons>
          <md-outlined-button
            @click=${()=>{this.#t++,this.dispatchEvent(new i(`Default snackbar #${this.#t}`))}}
            >Default</md-outlined-button
          >
          <md-outlined-button @click=${()=>this.dispatchEvent(new i("Auto-hide snackbar",{autoHide:2e3}))}>Auto-hide</md-outlined-button>
          <md-outlined-button
            @click=${()=>this.dispatchEvent(new i({action:"GET",message:"Network error. Check your connection and try again.",statusCode:void 0,type:"HttpError"}))}
            >HTTP error</md-outlined-button
          >
          <md-outlined-button
            @click=${()=>this.dispatchEvent(new i({action:"GET",message:"Network error. Check your connection and try again.",statusCode:404,type:"HttpError",detail:"Major Outage. This was probably caused by a network outage in your area. Please contact your ISP for further assistance."}))}
            >HTTP error with detail</md-outlined-button
          >

          <md-outlined-button @click=${()=>this.dispatchEvent(new i("",{overrideTemplate:n`<h1 style="color:red">ALERT!</h1>`}))}
            >Template literal</md-outlined-button
          >

          <md-dialog @open=${t=>l(t.target)} @close=${()=>this.snackbar.dismissAll()}>
            <span slot="headline">Snackbar from a dialog</span>
            <main slot="content">
              <titanium-snackbar-stack></titanium-snackbar-stack>
              <md-outlined-button
                @click=${t=>t.target?.dispatchEvent(new i({action:"GET",message:"Network error. Check your connection and try again.",statusCode:void 0,type:"HttpError"}))}
                >Open snackbar
              </md-outlined-button>
            </main>
          </md-dialog>

          <md-outlined-button @click=${()=>this.dialog.show()}>Open dialog </md-outlined-button>
        </section>
      </div>
    `}};r([s("md-dialog")],u.prototype,"dialog",void 0),r([s("titanium-snackbar-stack")],u.prototype,"snackbar",void 0),u=r([d("titanium-snackbar-playground")],u);let m=class extends t{static{this.styles=[c,o``]}render(){return n`
      <story-header name="Titanium Snackbar" className="TitaniumSnackbarStack"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-snackbar/project.json"
        ><titanium-snackbar-playground></titanium-snackbar-playground>
      </smart-demo>
    `}};m=r([d("titanium-snackbar-demo")],m);export{m as TitaniumSnackbarDemo};
