import{i as t,b as e,c as a,_ as i,e as l,t as d}from"./C4zC-QpX.js";import{S as m}from"./BuWE4gAm.js";import"./iIryJ62l.js";import"./C5JZ_0-E.js";import"./CoQozzFQ.js";import"./BRw9g_ht.js";let n=class extends t{#t;get selectItem(){return this.#t}set selectItem(t){this.#t=t}static{this.styles=[m,e`
      section {
        display: flex;
        margin-top: 12px;
        gap: 12px;
      }
    `]}render(){return a`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium data table item" level1Href="/titanium-data-table-item" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-data-table-item</kbd> is deprecated. Use <kbd>titanium-data-table-core</kbd> instead (shown in separate demo).</p>
            </deprecation-notice>
            <story-header name="Titanium data table item" className="TitaniumDataTableItem"></story-header>

            <div>
              <h1>Default</h1>
              <p>Examples using disabled, closeable, and readonly attribute</p>
              <div vertical>
                <titanium-data-table-item>Default</titanium-data-table-item>
                <titanium-data-table-item selected>Selected</titanium-data-table-item>
                <titanium-data-table-item disable-select>Select disabled</titanium-data-table-item>
                <titanium-data-table-item enable-dragging><row-item></row-item></titanium-data-table-item>
              </div>
            </div>

            <div>
              <h1>Methods</h1>
              <p>Select, Deselect, Toggle</p>
              <div methods-demo>
                <titanium-data-table-item select-demo>Item</titanium-data-table-item>
                <section>
                  <md-filled-tonal-button raised @click=${()=>this.selectItem.select()}>select()</md-filled-tonal-button>
                  <md-filled-tonal-button raised @click=${()=>this.selectItem.deselect()}>deselect()</md-filled-tonal-button>
                  <md-filled-tonal-button raised @click=${()=>this.selectItem.toggleSelected()}>toggleSelected()</md-filled-tonal-button>
                </section>
              </div>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-data-table-item"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};i([l("titanium-data-table-item[select-demo]")],n.prototype,"selectItem",null),n=i([d("titanium-data-table-item-demo")],n);export{n as TitaniumDataTableItemDemo};
