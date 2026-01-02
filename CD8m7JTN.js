import{i as t,b as i,c as e,_ as a,e as s,t as n}from"./D-PdOFNH.js";import{S as m}from"./-nlQtSV8.js";import"./Cf3bE9pS.js";import"./Br0ktJq7.js";let r=class extends t{#t;get drawerOne(){return this.#t}set drawerOne(t){this.#t=t}#i;get drawerTwo(){return this.#i}set drawerTwo(t){this.#i=t}static{this.styles=[m,i`
      md-filled-tonal-button,
      h1 {
        margin-bottom: 12px;
      }

      md-icon {
        --md-icon-size: 16px;
      }

      md-list-item {
        height: 26px;
        --md-list-item-one-line-container-height: 26px;
        --md-list-item-label-text-size: 14px;
        --md-list-item-label-text-weight: 400;
      }
    `]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium drawer" level1Href="/titanium-drawer" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium drawer" className="TitaniumDrawer"></story-header>

            <div>
              <h1>Basic drawer</h1>
              <md-filled-tonal-button @click=${()=>this.drawerOne.open()}><span>Open</span></md-filled-tonal-button>
              <titanium-drawer one>
                <md-list-item href="/titanium-drawer/#default" type="link">Default</md-list-item>
                <md-list-item type="button" disabled>Disabled</md-list-item>
                <md-list-item href="/titanium-drawer/#selected" type="link" selected>Selected</md-list-item>
              </titanium-drawer>
            </div>

            <div>
              <h1>Always show slotted content</h1>

              <md-filled-tonal-button @click=${()=>this.drawerTwo.open()}><span>Open</span></md-filled-tonal-button>
              <titanium-drawer style="width: 280px;" two always-show-content>
                <h3 slot="header">Fruits</h3>
                <md-list-item href="/titanium-drawer" type="link"> <md-icon slot="start">restaurant</md-icon><span>Fruits</span> </md-list-item>
                <h4 sub>Walnut</h4>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Edit fruit</span>
                </md-list-item>
                <md-list-item sub href="/titanium-drawer" type="link">
                  <span>Assign farmers</span>
                </md-list-item>

                <h4>Administration</h4>
                <md-list-item href="/titanium-drawer" type="link"> <md-icon slot="start">home</md-icon><span>Rules</span> </md-list-item>
                <menu-divider></menu-divider>
                <md-list-item href="/titanium-drawer" type="link"> <md-icon slot="start">question_answer</md-icon><span>Feedback</span> </md-list-item>
                <md-list-item href="/titanium-drawer" type="link">
                  <md-icon slot="start">apps</md-icon><span>Back to my apps</span><md-icon slot="end">exit_to_app</md-icon>
                </md-list-item>

                <a slot="footer" href="#legal">Legal</a>
              </titanium-drawer>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-drawer"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};a([s("titanium-drawer[one]")],r.prototype,"drawerOne",null),a([s("titanium-drawer[two]")],r.prototype,"drawerTwo",null),r=a([n("titanium-drawer-demo")],r);export{r as TitaniumDrawerDemo};
