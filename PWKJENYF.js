import{i as t,b as e,c as i,_ as a,e as s,r as n,t as r}from"./BkdWKSMI.js";import{S as d}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./ChwwPp1m.js";import"./BXTEaQeD.js";import"./DbnfmX2U.js";import"./CIHPGdiZ.js";let m=class extends t{#t;get drawerOne(){return this.#t}set drawerOne(t){this.#t=t}#e;get drawerTwo(){return this.#e}set drawerTwo(t){this.#e=t}#i="flyover";get drawerTwoMode(){return this.#i}set drawerTwoMode(t){this.#i=t}#a=!1;get drawerTwoOpen(){return this.#a}set drawerTwoOpen(t){this.#a=t}static{this.styles=[d,e`
      md-filled-tonal-button,
      md-filled-select,
      h1 {
        margin-bottom: 12px;
      }

      demo-controls {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px;

        span {
          font-size: 14px;
          color: var(--md-sys-color-on-surface-variant, #49454f);
        }
      }

      [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        h3 {
          margin: 0;
          flex: 1;
          font-family: Metropolis, Roboto, Noto, sans-serif;
          font-weight: 400;
          padding: 12px 0 4px 16px;
        }
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
    `]}render(){return i`
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
              <h1>Mode demo</h1>
              <demo-controls>
                <md-filled-select
                  label="Mode"
                  .value=${this.drawerTwoMode}
                  @change=${t=>{this.drawerTwoMode=t.target.value}}
                >
                  <md-select-option value="flyover"><span>Flyover</span></md-select-option>
                  <md-select-option value="inline"><span>Inline</span></md-select-option>
                </md-filled-select>
                <md-filled-tonal-button @click=${()=>this.drawerTwo.open()}><span>Open</span></md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.drawerTwo.close()}><span>Close</span></md-filled-tonal-button>
                <span>State: ${this.drawerTwoOpen?"Open":"Closed"}</span>
              </demo-controls>
              <titanium-drawer
                style="width: 280px;"
                two
                .mode=${this.drawerTwoMode}
                @open-change=${t=>{this.drawerTwoOpen=t.target.isOpen}}
              >
                <section slot="header">
                  <h3>Drawer title</h3>
                  <md-icon-button @click=${()=>this.drawerTwo.close()} aria-label="Close"><md-icon>close</md-icon></md-icon-button>
                </section>
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
    `}};a([s("titanium-drawer[one]")],m.prototype,"drawerOne",null),a([s("titanium-drawer[two]")],m.prototype,"drawerTwo",null),a([n()],m.prototype,"drawerTwoMode",null),a([n()],m.prototype,"drawerTwoOpen",null),m=a([r("titanium-drawer-demo")],m);export{m as TitaniumDrawerDemo};
