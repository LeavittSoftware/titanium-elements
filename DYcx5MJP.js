import{i as e,h as r,p as i,c as s,U as t,x as a,_ as o,t as p}from"./BriKlvrl.js";import{S as l}from"./BYDhJ-qH.js";import"./B5dYKavm.js";let n=class extends e{static{this.styles=[r,i,s`
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
    `]}render(){return a`
      <h1>Default</h1>
      <p>Default profile picture styles</p>
      <div>
        <profile-picture-menu
          .userManager=${t}
          name="Testboii Testeri"
          email="testboi-tester@leavitt.com"
          company="Kasey Quality Assurance Inc."
        ></profile-picture-menu>
      </div>
    `}};n=o([p("profile-picture-menu-playground")],n);let u=class extends e{static{this.styles=[l,s``]}render(){return a`
      <story-header name="Profile picture menu" className="ProfilePictureMenu"></story-header>
      <profile-picture-menu-playground .userManager=${t}></profile-picture-menu-playground>
      <api-docs src="./custom-elements.json" selected="profile-picture-menu"></api-docs>
    `}};u=o([p("profile-picture-menu-demo")],u);export{u as ProfilePictureMenuDemo};
