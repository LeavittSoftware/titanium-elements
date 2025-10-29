import{i as e,h as i,p as r,c as p,x as t,_ as o,t as s}from"./qx-Pki5z.js";import{S as l}from"./Du2PYyjw.js";import"./Dup9yWAT.js";let c=class extends e{static{this.styles=[i,r,p`
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

      [custom]::part(test-user-indicator) {
        background: var(--md-sys-color-error);
      }
    `]}render(){return t`
      <h1>Default</h1>
      <p>Default profile picture styles</p>
      <div>
        <profile-picture></profile-picture>
      </div>

      <h1>Square</h1>
      <p>Square profile picture styles</p>
      <div>
        <profile-picture shape="square"></profile-picture>
      </div>

      <h1>Color ring</h1>
      <p>Color ring variant</p>
      <div>
        <profile-picture shape="square" show-ring></profile-picture>
        <profile-picture show-ring></profile-picture>
        <profile-picture profile-picture-link-person-id="11056" show-ring style="--profile-picture-ring-color: purple"></profile-picture>
      </div>

      <h1>Sizes</h1>
      <p>Sizes include 32, 64, 128, 256, and 512px</p>
      <div>
        <profile-picture profile-picture-link-person-id="11056" size="24"></profile-picture>
        <profile-picture size="32"></profile-picture>
        <profile-picture profile-picture-link-person-id="11056" size="64"></profile-picture>
        <profile-picture size="128"></profile-picture>
        <profile-picture profile-picture-link-person-id="11056" size="256"></profile-picture>
      </div>

      <h1>Responsive</h1>
      <p>Size can be adjusted further using responsive units</p>
      <div>
        <profile-picture size="256" useIntrisicImageSize style="width: 20vh;"></profile-picture>
        <profile-picture profile-picture-link-person-id="11056" size="256" useIntrisicImageSize style="width: 20vw;"></profile-picture>
      </div>

      <h1>Filename fallback</h1>
      <div>
        <profile-picture fileName="filenamedoesntexist.webp"></profile-picture>
      </div>

      <h1>Test user indicator</h1>
      <div>
        <profile-picture show-test-user-indicator size="24"></profile-picture>
        <profile-picture show-test-user-indicator size="32"></profile-picture>
        <profile-picture show-test-user-indicator size="64"></profile-picture>
        <profile-picture show-test-user-indicator size="128"></profile-picture>
        <profile-picture custom show-test-user-indicator size="256"></profile-picture>
      </div>
    `}};c=o([s("profile-picture-playground")],c);let u=class extends e{static{this.styles=[l,p``]}render(){return t`
      <story-header name="Profile picture" className="ProfilePicture"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/profile-picture/project.json"
        ><profile-picture-playground></profile-picture-playground>
      </smart-demo>

      <api-docs src="./custom-elements.json" selected="profile-picture"></api-docs>
    `}};u=o([s("profile-picture-demo")],u);export{u as ProfilePictureDemo};
