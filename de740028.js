import{s as t,h as e,p as a,i,x as m,_ as d,e as l,t as s}from"./d0ace671.js";import{S as o}from"./9e8552c1.js";import"./41178c5b.js";import"./9555855c.js";import"./ec341a4d.js";import"./f42dd0a8.js";import"./c3dfe460.js";import"./22c1ed29.js";let r=class extends t{#t;get selectItem(){return this.#t}set selectItem(t){this.#t=t}static{this.styles=[e,a,i`
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

      div[vertical] {
        display: flex;
        gap: 0;
        flex-direction: column;
      }

      div[methods-demo] {
        display: flex;
        gap: 24px;
        flex-direction: column;
      }
    `]}render(){return m`
      <h1>Default</h1>
      <p>Examples using disabled, closeable, and readonly attribute</p>
      <div vertical>
        <titanium-data-table-item>Default</titanium-data-table-item>
        <titanium-data-table-item selected>Selected</titanium-data-table-item>
        <titanium-data-table-item disable-select>Select disabled</titanium-data-table-item>
        <titanium-data-table-item enable-dragging><row-item></row-item></titanium-data-table-item>
      </div>

      <h1>Methods</h1>
      <p>Select, Deselect, Toggle</p>
      <div methods-demo>
        <titanium-data-table-item select-demo>Item</titanium-data-table-item>
        <section>
          <md-text-button raised @click=${()=>this.selectItem.select()}>select()</md-text-button>
          <md-text-button raised @click=${()=>this.selectItem.deselect()}>deselect()</md-text-button>
          <md-text-button raised @click=${()=>this.selectItem.toggleSelected()}>toggleSelected()</md-text-button>
        </section>
      </div>
    `}};d([l("titanium-data-table-item[select-demo]")],r.prototype,"selectItem",null),r=d([s("titanium-data-table-item-playground")],r);let n=class extends t{static{this.styles=[o,i``]}render(){return m`
      <story-header name="Titanium data table item" className="TitaniumDataTableItem"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table-item/project.json"
        ><titanium-data-table-item-playground></titanium-data-table-item-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-item"></api-docs>
    `}};n=d([s("titanium-data-table-item-demo")],n);export{n as TitaniumDataTableItemDemo};
