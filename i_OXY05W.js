import{i,b as t,c as e,_ as a,t as l}from"./BkdWKSMI.js";import{S as c}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./DctsHwvc.js";let n=class extends i{static{this.styles=[c,t`
      chip-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
      }

      titanium-chip[short] {
        width: 140px;
      }
    `]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium chip" level1Href="/titanium-chip" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium chip" className="TitaniumChip"></story-header>
            <h1>Default</h1>
            <p>Various chip examples demonstrating different states and configurations</p>
            <chip-container>
              <titanium-chip label="Jon Stewart"> </titanium-chip>
              <titanium-chip filled label="Jon Stewart"> </titanium-chip>
              <titanium-chip label="Stephen Colbert" input-chip @click=${()=>alert("click!")}> </titanium-chip>

              <titanium-chip label="Jimmy Kimmel" @click=${()=>alert("click!")}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip filled label="Jimmy Kimmel" @click=${()=>alert("click!")}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip label="All late shows" input-chip @remove=${()=>alert("remove!")} @click=${()=>alert("click!")}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip short label="I'm a little long" input-chip @remove=${()=>alert("remove!")} @click=${()=>alert("click!")}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip label="Informational" inert> </titanium-chip>

              <titanium-chip selected label="Selected" @click=${i=>i.target.selected=!i.target.selected}>
                <md-icon slot="icon">money</md-icon>
              </titanium-chip>

              <titanium-chip selected label="Selected" @click=${i=>i.target.selected=!i.target.selected}>
                <profile-picture slot="icon" inert size="24"></profile-picture>
              </titanium-chip>

              <titanium-chip selected filled label="Selected" @click=${i=>i.target.selected=!i.target.selected}>
                <profile-picture slot="icon" inert size="24"></profile-picture>
              </titanium-chip>

              <titanium-chip non-interactive label="Non-interactive" title="This is a non-interactive chip"> </titanium-chip>

              <titanium-chip disabled label="Disabled"> </titanium-chip>

              <titanium-chip disabled label="Disabled with remove button" input-chip @remove=${()=>alert("remove!")} @click=${()=>alert("click!")}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip disabled filled label="Disabled with remove button" input-chip @remove=${()=>alert("remove!")} @click=${()=>alert("click!")}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip href="https://google.com" target="_blank" download="google.xls" label="Href demo"> </titanium-chip>

              <titanium-chip filled label="Filled custom color" style="--titanium-chip-filled-background-color: bisque; --titanium-chip-filled-color: black">
              </titanium-chip>
            </chip-container>
            <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};n=a([l("titanium-chip-demo")],n);export{n as TitaniumChipDemo};
