import{i as t,h as a,p as e,c as n,Y as o,S as i,x as r,_ as s,e as d,t as c}from"./9VdYylXu.js";import{S as l}from"./CHIVE7-D.js";import"./DV-lBPLw.js";let u=class extends t{static{this.styles=[a,e,n`
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
    `]}#t=0;render(){return r`
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

          <md-outlined-button @click=${()=>this.dispatchEvent(new i("",{overrideTemplate:r`<h1 style="color:red">ALERT!</h1>`}))}
            >Template literal</md-outlined-button
          >

          <md-dialog @open=${t=>o(t.target)} @close=${()=>this.snackbar.dismissAll()}>
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
    `}};s([d("md-dialog")],u.prototype,"dialog",void 0),s([d("titanium-snackbar-stack")],u.prototype,"snackbar",void 0),u=s([c("titanium-snackbar-playground")],u);let m=class extends t{static{this.styles=[l,n``]}render(){return r`
      <story-header name="Titanium Snackbar" className="TitaniumSnackbarStack"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-snackbar/project.json"
        ><titanium-snackbar-playground></titanium-snackbar-playground>
      </smart-demo>
    `}};m=s([c("titanium-snackbar-demo")],m);export{m as TitaniumSnackbarDemo};
