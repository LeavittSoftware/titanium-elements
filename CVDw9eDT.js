import{i as t,h as i,p as e,N as r,c as s,x as a,_ as n,e as d,t as m}from"./qx-Pki5z.js";import{S as l}from"./Du2PYyjw.js";import"./Dup9yWAT.js";let o=class extends t{#t;get drawerOne(){return this.#t}set drawerOne(t){this.#t=t}#i;get drawerTwo(){return this.#i}set drawerTwo(t){this.#i=t}static{this.styles=[i,e,r,s`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        margin: 24px 0 12px 0;
        width: 280px;
      }

      md-outlined-button {
        margin-bottom: 12px;
      }

      md-icon {
        height: 16px;
        width: 16px;
        font-size: 16px;
      }

      md-list-item {
        height: 26px;
        --md-list-item-one-line-container-height: 26px;
        --md-list-item-label-text-size: 14px;
        --md-list-item-label-text-weight: 400;
      }

      titanium-drawer[two]::part(dialog) {
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: 8px;
      }
    `]}render(){return a`
      <h1>Basic drawer</h1>
      <p>Basic</p>
      <div>
        <md-outlined-button @click=${()=>this.drawerOne.open()}><span>Open</span></md-outlined-button>
        <titanium-drawer one>
          <md-list-item href="/titanium-drawer/#default" type="link">Default</md-list-item>
          <md-list-item type="button" disabled>Disabled</md-list-item>
          <md-list-item href="/titanium-drawer/#selected" type="link" selected>Selected</md-list-item>
        </titanium-drawer>
      </div>

      <h1>Always show slotted content</h1>
      <p>Show drawer content when closed</p>

      <div>
        <md-outlined-button @click=${()=>this.drawerTwo.open()}><span>Open</span></md-outlined-button>
        <titanium-drawer direction="rtl" two always-show-content>
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
    `}};n([d("titanium-drawer[one]")],o.prototype,"drawerOne",null),n([d("titanium-drawer[two]")],o.prototype,"drawerTwo",null),o=n([m("titanium-drawer-playground")],o);let p=class extends t{static{this.styles=[l,s``]}render(){return a`
      <story-header name="Titanium Drawer" className="TitaniumDrawer"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-drawer/project.json"
        ><titanium-drawer-playground></titanium-drawer-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-drawer"></api-docs>
    `}};p=n([m("titanium-drawer-demo")],p);export{p as TitaniumDrawerDemo};
