import{i as t,b as a,c as e,_ as i,t as n}from"./BkdWKSMI.js";import{S as d}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./CwzpXQ52.js";let r=class extends t{static{this.styles=[d,a`
      header-container {
        display: flex;
        flex-direction: row;
        gap: 24px;
      }
    `]}render(){return e`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium data table header" level1Href="/titanium-data-table-header" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-data-table-header</kbd> is deprecated. Use <kbd>titanium-data-table-core</kbd> instead (shown in separate demo).</p>
            </deprecation-notice>
            <story-header name="Titanium data table header" className="TitaniumDataTableHeader"></story-header>

            <div>
              <h1>Table headers</h1>
              <p>Data table header components with different alignment and sizing options</p>
              <header-container>
                <titanium-data-table-header sort-direction="asc" left column-name="Left" title="Left"></titanium-data-table-header>
                <titanium-data-table-header sort-direction="asc" center column-name="Center" title="Center"></titanium-data-table-header>
                <titanium-data-table-header sort-direction="asc" right column-name="Right" title="Right"></titanium-data-table-header>
                <titanium-data-table-header sort-direction="asc" large column-name="Large" title="Large"></titanium-data-table-header>
                <titanium-data-table-header sort-direction="asc" no-sort column-name="NoSort" title="No sort"></titanium-data-table-header>
                <titanium-data-table-header sort-direction="asc" desktop column-name="Desktop" title="Desktop"></titanium-data-table-header>
                <titanium-data-table-header sort-direction="asc" width="200px" column-name="Width" title="Width"></titanium-data-table-header>
              </header-container>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-data-table-header"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};r=i([n("titanium-data-table-header-demo")],r);export{r as TitaniumDataTableHeaderDemo};
