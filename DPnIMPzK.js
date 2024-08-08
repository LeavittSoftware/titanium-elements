import{h as e,a as r,p as s,i as t,k as i,_ as o,t as n,G as a,D as l,r as p}from"./BDVm1clO.js";import{S as m}from"./BYpX0Mqs.js";import"./BSBJUm6d.js";import"./B29NwKRo.js";let u=class extends e{static{this.styles=[r,s,t`
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
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
        align-items: flex-end;
      }
    `]}render(){return i`
      <user-manager></user-manager>

      <h1>Default</h1>
      <p>Default profile picture styles</p>
      <div>
        <profile-picture-menu name="Testboii Testeri" email="testboi-tester@leavitt.com" company="Kasey Quality Assurance Inc."></profile-picture-menu>
      </div>
    `}};u=o([n("profile-picture-menu-playground")],u);let c=class extends e{#e=null;get refreshToken(){return this.#e}set refreshToken(e){this.#e=e}static{this.styles=[m,t``]}async firstUpdated(){const e=await a();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return i`
      <story-header name="Profile picture menu" className="ProfilePictureMenu"></story-header>
      ${this.refreshToken?i` <smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/profile-picture-menu/project.json"
            ><profile-picture-menu-playground></profile-picture-menu-playground>
          </smart-demo>`:l}
      <api-docs src="./custom-elements.json" selected="profile-picture-menu"></api-docs>
    `}};o([p()],c.prototype,"refreshToken",null),c=o([n("profile-picture-menu-demo")],c);export{c as ProfilePictureMenuDemo};
