import{r as t,h as i,p as a,i as d,x as e,_ as n,t as r}from"./BRzihpuF.js";import{S as o}from"./DxTkCELB.js";import"./DpsMy9xV.js";import"./B_yPmIVf.js";import"./DOnPD6Qs.js";let m=class extends t{static{this.styles=[i,a,d`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      titanium-card {
        margin: 12px 0;
      }

      img[card-image] {
        width: 110px;
      }
    `]}render(){return e`
      <titanium-card>
        <h1>Default</h1>
      </titanium-card>

      <titanium-card filled>
        <h1>filled</h1>
      </titanium-card>

      <titanium-card elevated>
        <h1>elevated</h1>
      </titanium-card>

      <titanium-card>
        <img card-image alt="password" src="https://cdn.leavitt.com/icons/icon-permissions.svg" />
        <h1>Has image</h1>
        <p card-body></p>
      </titanium-card>

      <titanium-card>
        <h1>Has footer</h1>
        <main card-body></main>
        <span nav card-footer>
          <md-filled-tonal-button> Save </md-filled-tonal-button>
        </span>
      </titanium-card>

      <titanium-card>
        <h1>Has menu</h1>
        <md-icon-button card-menu> <md-icon>more_vert</md-icon> </md-icon-button>
        <div card-body></div>
      </titanium-card>

      <titanium-card style="padding-bottom:0;overflow:hidden;">
        <h1>Card with list items</h1>
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
    `}};m=n([r("titanium-card-playground")],m);let s=class extends t{static{this.styles=[o,d``]}render(){return e`
      <story-header name="Titanium card" className="TitaniumCard"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-card/project.json"
        ><titanium-card-playground></titanium-card-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-card"></api-docs>
    `}};s=n([r("titanium-card-demo")],s);export{s as TitaniumChipDemo};
