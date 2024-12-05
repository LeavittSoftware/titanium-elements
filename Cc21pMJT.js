import{r as t,h as a,p as e,i,x as r,_ as d,t as n}from"./B87LNoAb.js";import{S as o}from"./nQDMyLps.js";import"./uXzSm2ar.js";import"./B4_jjJQR.js";let l=class extends t{static{this.styles=[a,e,i`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      header-container {
        display: flex;
        flex-direction: row;
        gap: 16px;
      }

      /* titanium-data-table-header {
        border: 1px solid green;
      } */
    `]}render(){return r`
      <header-container>
        <titanium-data-table-header sort-direction="asc" left column-name="Left" title="Left"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" center column-name="Center" title="Center"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" right column-name="Right" title="Right"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" large column-name="Large" title="Large"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" no-sort column-name="NoSort" title="No sort"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" desktop column-name="Desktop" title="Desktop"></titanium-data-table-header>
        <titanium-data-table-header sort-direction="asc" width="200px" column-name="Width" title="Width"></titanium-data-table-header>
      </header-container>
    `}};l=d([n("titanium-data-table-header-playground")],l);let s=class extends t{static{this.styles=[o,i``]}render(){return r`
      <story-header name="Titanium data table header" className="TitaniumDataTableHeader"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table-header/project.json"
        ><titanium-data-table-header-playground></titanium-data-table-header-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-header"></api-docs>
    `}};s=d([n("titanium-data-table-header-demo")],s);export{s as TitaniumDataTableHeaderDemo};
