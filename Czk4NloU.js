import{i as t,k as e,a as i,j as a,s,X as o,at as r,g as n,b as l,c as d,_ as p,t as m}from"./BkdWKSMI.js";import{S as h}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";let c=class extends t{static{this.styles=[h,e,i,a,s,o,r,n,l`
      leavitt-app-width-limiter > div[no-padding-right] {
        padding-right: 0;
      }

      typography-grid {
        display: grid;
        gap: 12px;

        h1 {
          margin-bottom: 0;
        }
      }
    `]}render(){return d`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium styles" level1Href="/titanium-styles" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium styles" className="TitaniumStyles"></story-header>

            <div>
              <typography-grid>
                <h1>Heading one</h1>
                <h2>Heading two</h2>
                <h3>Heading three</h3>
                <h4>Heading four</h4>
                <h5>Heading five</h5>
                <a href="#">Anchor tag</a>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus, felis mollis aliquet eleifend, sem nunc volutpat risus, eget cursus odio
                  eros vel sapien. Phasellus sit amet mi a tellus commodo molestie eu nec tellus. In hac habitasse platea dictumst.
                </p>
                <h2 ellipsis="" style="max-width: 130px">Ellipsis text sit amet, consectetur adipiscing elit. Duis</h2>
              </typography-grid>
            </div>

            <div no-padding-right>
              <div data-row-container>
                <data-row>
                  <h5>First name</h5>
                  <p image><img src="https://cdn.leavitt.com/user-0-32.jpeg" />Bob</p>
                </data-row>

                <data-row>
                  <h5>Last name</h5>
                  <p>Alice</p>
                </data-row>

                <data-row>
                  <h5>Bio</h5>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                    source.
                  </p>
                </data-row>
              </div>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-styles"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};c=p([m("titanium-styles-demo")],c);export{c as TitaniumStylesDemo};
