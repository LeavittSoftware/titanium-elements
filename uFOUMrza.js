import{i as e,U as t,c as i,_ as a,t as r}from"./DCbxK7kb.js";import{S as n}from"./B4TQG20J.js";import"./D3Z9-Jx-.js";import"./OLgN8cSM.js";import"@leavittsoftware/web/leavitt/user-manager/user-manager";let s=class extends e{static{this.styles=[n]}render(){return i`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Profile picture menu" level1Href="/profile-picture-menu" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Profile Picture Menu" className="ProfilePictureMenu"></story-header>

            <div>
              <h1>Default</h1>
              <profile-picture-menu
                .userManager=${t}
                name="Testboii Testeri"
                email="testboi-tester@leavitt.com"
                company="Kasey Quality Assurance Inc."
              ></profile-picture-menu>
            </div>

            <api-docs src="./custom-elements.json" selected="profile-picture-menu"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};s=a([r("profile-picture-menu-demo")],s);export{s as ProfilePictureMenuDemo};
