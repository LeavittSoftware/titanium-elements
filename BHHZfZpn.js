import{i as e,m as s,b as a,l as t,h as i,a as o,Z as r,ah as l,k as n,p as d,c as p,x as m,_ as u,t as c}from"./5fmKNdlA.js";import{S as h}from"./CR4PuYl3.js";import"./BGQXy7wM.js";let g=class extends e{static{this.styles=[s,a,t,i,o,r,l,n,d,p`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      div[basic] {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      div:last-of-type {
        border: 1px solid var(--md-sys-color-outline);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
      }
    `]}render(){return m`
      <h1>Default</h1>
      <p>Examples using h1, h2, h3, h4, h5, a, p, and lowercase attributes</p>
      <div basic>
        <h1>Heading one</h1>
        <h2>Heading two</h2>
        <h3>Heading three</h3>
        <h4>Heading four</h4>
        <h5>Heading five</h5>
        <a href="#">Anchor tag</a>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus, felis mollis aliquet eleifend, sem nunc volutpat risus, eget cursus odio eros
          vel sapien. Phasellus sit amet mi a tellus commodo molestie eu nec tellus. In hac habitasse platea dictumst.
        </p>
        <h2 ellipsis="" style="max-width: 130px">Ellipsis text sit amet, consectetur adipiscing elit. Duis</h2>
      </div>

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
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>
        </data-row>
      </div>
    `}};g=u([c("titanium-styles-playground")],g);let x=class extends e{static{this.styles=[h,p``]}render(){return m`
      <story-header name="Titanium styles"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-styles/project.json"
        ><titanium-styles-playground></titanium-styles-playground>
      </smart-demo>
    `}};x=u([c("titanium-styles-demo")],x);export{x as TitaniumStylesDemo};
