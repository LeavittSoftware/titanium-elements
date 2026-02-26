import{i as e,b as t,c as a,_ as i,t as r}from"./BkdWKSMI.js";import{S as o}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";let s=class extends e{static{this.styles=[o,t`
      md-divider {
        margin: 24px 0;
      }
    `]}render(){return a`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt error page" level1Href="/leavitt-error-page" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt error page" className="LeavittErrorPage"></story-header>

            <div>
              <leavitt-error-page message="It looks like this demo doesn't exist."></leavitt-error-page>
              <md-divider></md-divider>
              <leavitt-error-page heading="Sorry!" message="It looks like you don't have access to this area."
                ><md-icon slot="icon">lock</md-icon></leavitt-error-page
              >
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-error-page"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};s=i([r("leavitt-error-page-demo")],s);export{s as LeavittErrorPageDemo};
