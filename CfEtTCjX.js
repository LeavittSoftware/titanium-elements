import{i as e,U as t,c as i,_ as a,t as r}from"./BkdWKSMI.js";import{S as n}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";let p=class extends e{static{this.styles=[n]}render(){return i`
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
    `}};p=a([r("profile-picture-menu-demo")],p);export{p as ProfilePictureMenuDemo};
