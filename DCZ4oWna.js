import{i as e,b as a,c as i,_ as t,t as d}from"./BkdWKSMI.js";import{S as n}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./BkQUVoFh.js";let r=class extends e{static{this.styles=[n,a`
      h1 {
        margin-bottom: 24px;
      }
    `]}render(){return i`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium header" level1Href="/titanium-header" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium header" className="TitaniumHeader"></story-header>
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-header</kbd> is deprecated. Use <kbd>leavitt-app-navigation-header</kbd> instead.</p>
            </deprecation-notice>
            <div>
              <h1>No nav</h1>
              <titanium-header header="Cheeses" subHeader="Your favorite cheeses" no-nav></titanium-header>
            </div>

            <div>
              <h1>Back Arrow (default window.history.back)</h1>
              <titanium-header header="Meats and cheese and dairy and things" subHeader="Your favorite meats"></titanium-header>
            </div>

            <div>
              <h1>Back Arrow (overloaded action)</h1>
              <titanium-header
                header="Meats and cheese and dairy and things"
                subHeader="Your favorite meats"
                disable-default-back-button-behavior
                @titanium-header-back-click=${()=>{alert("back clicked")}}
              ></titanium-header>
            </div>

            <div>
              <h1>With custom icon</h1>
              <titanium-header
                header="Meats and cheese and dairy and things"
                subHeader="Your favorite meats"
                icon="stadium"
                @titanium-header-back-click=${()=>{alert("back clicked")}}
              ></titanium-header>
            </div>

            <div>
              <h1>Custom icon with no navigation controls</h1>
              <titanium-header header="Meats and cheese and dairy and things" subHeader="Your favorite meats" icon="stadium" no-nav></titanium-header>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-header"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};r=t([d("titanium-header-demo")],r);export{r as TitaniumHeaderDemo};
