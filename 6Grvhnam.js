import{i as t,h as i,b as a,c as e,_ as n,t as d}from"./BkdWKSMI.js";import{S as o}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./zNz4s-SF.js";let m=class extends t{static{this.styles=[o,a`
      titanium-card {
        ${i};
      }

      img[card-image] {
        width: 110px;
      }
    `]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium card" level1Href="/titanium-card" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium card" className="TitaniumCard"></story-header>
            <h1>Default</h1>
            <p>Basic card with default styling</p>
            <titanium-card>
              <h1>Lorem ipsum dolor sit amet</h1>
            </titanium-card>

            <h1>Filled</h1>
            <p>Card with filled background</p>
            <titanium-card filled>
              <h1>Lorem ipsum dolor sit amet</h1>
            </titanium-card>

            <h1>Elevated</h1>
            <p>Card with elevation shadow</p>
            <titanium-card elevated>
              <h1>Lorem ipsum dolor sit amet</h1>
            </titanium-card>

            <h1>With Image</h1>
            <p>Card containing an image</p>
            <titanium-card>
              <img card-image alt="password" src="https://cdn.leavitt.com/icons/icon-permissions.svg" />
              <h1>Lorem ipsum dolor sit amet</h1>
              <p card-body></p>
            </titanium-card>

            <h1>With Footer</h1>
            <p>Card with footer containing action buttons</p>
            <titanium-card>
              <h1>Lorem ipsum dolor sit amet</h1>
              <main card-body></main>
              <span nav card-footer>
                <md-filled-tonal-button> Save </md-filled-tonal-button>
              </span>
            </titanium-card>

            <h1>With Menu</h1>
            <p>Card with menu button in the header</p>
            <titanium-card>
              <h1>Lorem ipsum dolor sit amet</h1>
              <md-icon-button card-menu> <md-icon>more_vert</md-icon> </md-icon-button>
              <div card-body></div>
            </titanium-card>

            <h1>With List Items</h1>
            <p>Card containing interactive list items</p>
            <titanium-card style="padding-bottom:0;overflow:hidden;">
              <h1>Lorem ipsum dolor sit amet</h1>
              <md-icon-button card-menu> <md-icon>more_vert</md-icon> </md-icon-button>
              <div card-body full-width>
                <md-list-item interactive href="/" target="_blank">
                  <img slot="start" height="48" src="https://cdn.leavitt.com/icons/icon-scoreboard-details.svg" />
                  <div slot="headline">Go Home</div>
                  <div slot="supporting-text">This will link you out in a new tab</div>
                  <md-icon slot="end">navigate_next</md-icon>
                </md-list-item>
                <md-list-item interactive href="/" target="_blank">
                  <img slot="start" height="48" src="https://cdn.leavitt.com/icons/icon-reminder.svg" />
                  <div slot="headline">Details</div>
                  <div slot="supporting-text">This will link you out in a new tab</div>
                  <md-icon slot="end">navigate_next</md-icon>
                </md-list-item>
              </div>
            </titanium-card>
            <api-docs src="./custom-elements.json" selected="titanium-card"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};m=n([d("titanium-card-demo")],m);export{m as TitaniumCardDemo};
