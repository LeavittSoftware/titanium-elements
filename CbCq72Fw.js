import{i,C as t,h as e,p as o,c as r,x as s,_ as a,r as n,t as u}from"./CW20JWwx.js";import{S as d}from"./DOG8MWDK.js";import"./QEodieUd.js";import"./XakGrGxB.js";let l=class extends i{#i=!1;get confirmed(){return this.#i}set confirmed(i){this.#i=i}async#t(){const i=new t("Confirm delete?","Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.");this.dispatchEvent(i),this.confirmed=await i.dialogResult}static{this.styles=[e,o,r`
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
    `]}render(){return s`
      <h1>Default</h1>
      <div>
        <p>Confirmed: ${this.confirmed}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${this.#t}>Open</md-outlined-button>
        </section>
      </div>
    `}};a([n()],l.prototype,"confirmed",null),l=a([u("titanium-confirm-dialog-playground")],l);let m=class extends i{static{this.styles=[d,r``]}render(){return s`
      <story-header name="Titanium confirm dialog" className="TitaniumConfirmDialog"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-confirm-dialog/project.json"
        ><titanium-confirm-dialog-playground></titanium-confirm-dialog-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-confirm-dialog"></api-docs>
    `}};m=a([u("titanium-confirm-dialog-demo")],m);export{m as TitaniumConfirmDialogDemo};
