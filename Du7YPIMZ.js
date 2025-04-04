import{r,h as e,p as a,i as s,x as t,_ as i,t as o}from"./BnoOacMI.js";import{S as p}from"./DwS_X1KN.js";import"./BE8JwNRx.js";let m=class extends r{static{this.styles=[e,a,s`
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
    `]}render(){return t`
      <h1>Default</h1>
      <p>Error page sample</p>
      <div>
        <titanium-error-page message="You can customize this message"></titanium-error-page>
      </div>
    `}};m=i([o("titanium-error-page-playground")],m);let n=class extends r{static{this.styles=[p,s``]}render(){return t`
      <story-header name="Titanium error page" className="TitaniumErrorPage"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-error-page/project.json"
        ><titanium-error-page-playground></titanium-error-page-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-error-page"></api-docs>
    `}};n=i([o("titanium-error-page-demo")],n);export{n as TitaniumErrorDemo};
