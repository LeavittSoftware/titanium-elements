import{i as t,b as e,c as i,C as a,_ as s,r as l,e as n,t as r}from"./BkdWKSMI.js";import{S as o}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./7ceWwuQt.js";import"./CwzpXQ52.js";import"./DrOQemLA.js";import"./Crvvf7pv.js";import"./ChwwPp1m.js";import"./pNeA5_IP.js";import"./Dl2jDuSy.js";import{F as d}from"./De07Sj8y.js";import{g as c}from"./OXmljVLM.js";import{D as m}from"./DTS7lhmZ.js";import"./sfbuyCKw.js";import"./Co12Lg7Y.js";import"./DbnfmX2U.js";import"./CIHPGdiZ.js";import"./D6K90XK6.js";import"./yhgryvfy.js";import"./wYCSt_jS.js";const h=[{Name:"Model 3",Appearance:"Slick"},{Name:"Model X",Appearance:"Slick"},{Name:"Model Y",Appearance:"Slick"},{Name:"Model S",Appearance:"Slick"},{Name:"Cybertruck",Appearance:"Ugly"},{Name:"Tesla Semi",Appearance:"Ugly"},{Name:"Model X Plaid",Appearance:"Plaid"},{Name:"Model S Plaid",Appearance:"Plaid"},{Name:"Model S Plaid+",Appearance:"Plaid"},{Name:"Gen. 2 Roadster",Appearance:"Slick"}];let p=class extends t{#t=[];get allItems(){return this.#t}set allItems(t){this.#t=t}#e=[];get items(){return this.#e}set items(t){this.#e=t}#i=[];get selected(){return this.#i}set selected(t){this.#i=t}#a="";get searchTerm(){return this.#a}set searchTerm(t){this.#a=t}#s=0;get resultTotal(){return this.#s}set resultTotal(t){this.#s=t}#l="asc";get sortDirection(){return this.#l}set sortDirection(t){this.#l=t}#n="Name";get sortBy(){return this.#n}set sortBy(t){this.#n=t}#r;get filterController(){return this.#r}set filterController(t){this.#r=t}#o=!1;get singleSelect(){return this.#o}set singleSelect(t){this.#o=t}#d=!1;get disableSelect(){return this.#d}set disableSelect(t){this.#d=t}#c=!1;get disablePaging(){return this.#c}set disablePaging(t){this.#c=t}#m=[];get draggableItems(){return this.#m}set draggableItems(t){this.#m=t}#h;get dataTable(){return this.#h}set dataTable(t){this.#h=t}#p;get filterModal(){return this.#p}set filterModal(t){this.#p=t}constructor(){super(),this.filterController=new d("/titanium-data-table"),this.filterController.setFilter("Appearance",t=>`BasketId eq ${t}`),this.filterController.subscribeToFilterChange(async()=>{this.dataTable&&(this.dataTable?.resetPage(),this.#u())}),this.filterController.loadFromQueryString()}firstUpdated(){this.#g(),this.items=this.allItems.slice(0),this.draggableItems=[{Name:"Model 3",Appearance:"Slick"},{Name:"Model X",Appearance:"Slick"},{Name:"Model Y",Appearance:"Slick"},{Name:"Model S",Appearance:"Slick"},{Name:"Cybertruck",Appearance:"Ugly"},{Name:"Tesla Semi",Appearance:"Ugly"},{Name:"Model X Plaid",Appearance:"Plaid"},{Name:"Model S Plaid",Appearance:"Plaid"},{Name:"Model S Plaid+",Appearance:"Plaid"},{Name:"Gen. 2 Roadster",Appearance:"Slick"}]}#u(){this.getItemsAsync(this.searchTerm)}#g(){this.allItems=h.map(t=>({Name:t.Name,Appearance:t.Appearance})),this.#u()}#b(t){this.sortDirection=t.detail,this.dataTable.resetPage(),this.#u()}#$(t){this.sortBy=t.detail,this.dataTable.resetPage(),this.#u()}#f=new m(t=>this.getItemsAsync(t));async getItemsAsync(t){const e=c(t),i=await this.dataTable.getTake(),a=await this.dataTable.getPage(),s="asc"===this.sortDirection?1:-1;let l=this.allItems.filter(t=>e.every(e=>t.Name?.trim().toLowerCase()?.includes(e.trim().toLowerCase())));const n=this.filterController.getValue("Appearance");n&&(l=l.filter(t=>t.Appearance===n)),this.items=l.slice(0).sort((t,e)=>t[this.sortBy]===e[this.sortBy]?0:(t[this.sortBy]??"")<(e[this.sortBy]??"")?s:-s).slice(i*a,i*a+i),this.resultTotal=l.length}static{this.styles=[o,e`
      titanium-data-table {
        margin: 24px 0 36px 0;
        --titanium-page-control-select-width: 108px;
      }

      knob-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 24px;
        margin-top: 12px;
      }
    `]}render(){return i`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium data table" level1Href="/titanium-data-table" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-data-table</kbd> is deprecated. Use <kbd>titanium-data-table-core</kbd> instead (shown in separate demo).</p>
            </deprecation-notice>
            <story-header name="Titanium data table" className="TitaniumDataTable"></story-header>

            <div>
              <h1>Full working example</h1>
              <p>Table with items and method controls</p>

              <titanium-data-table
                header="Tesla Motors"
                .pageSizes=${[3,5,10,15,100,2e4]}
                @selected-changed=${t=>{this.selected=[...t.detail]}}
                @paging-changed=${()=>{this.#u()}}
                narrow-max-width="800"
                .count=${this.resultTotal}
                .items=${this.items}
                .searchTerm=${this.searchTerm}
                ?single-select=${this.singleSelect}
                ?disable-select=${this.disableSelect}
                ?disable-paging=${this.disablePaging}
              >
                <titanium-search-input
                  slot="search-button"
                  placeholder="Search"
                  .value=${this.searchTerm}
                  @input=${t=>{this.searchTerm=t.target.value,this.dataTable.resetPage(),this.#f.debounce(this.searchTerm)}}
                ></titanium-search-input>

                <md-icon-button
                  id="menu-anchor"
                  aria-haspopup="true"
                  aria-controls="menu"
                  aria-expanded="false"
                  @click=${t=>{const e=t.target.getRootNode().querySelector("#menu");e.open=!e.open}}
                >
                  <md-icon>more_vert</md-icon>
                </md-icon-button>

                <md-menu
                  id="menu"
                  anchor="menu-anchor"
                  @close-menu=${t=>{t.detail.itemPath?.[0]?.action?.()}}
                >
                  <md-menu-item headline="Reload list (reset)" .action=${()=>this.#g()}>
                    <md-icon refresh slot="start">refresh</md-icon>
                    Refresh
                  </md-menu-item>
                </md-menu>

                <md-filled-tonal-button
                  slot="add-button"
                  @click=${()=>{const t=h[this.allItems.length%h.length],e={Name:t.Name,Appearance:t.Appearance};this.allItems.push(e),this.#u()}}
                >
                  <md-icon slot="icon">add</md-icon>
                  Add item
                </md-filled-tonal-button>

                <data-table-demo-filter-modal slot="filters" .filterController=${this.filterController}></data-table-demo-filter-modal>

                <md-icon-button
                  slot="filter-button"
                  @click=${async()=>{this.filterModal.open()}}
                >
                  <md-icon>filter_list</md-icon>
                </md-icon-button>

                <md-icon-button
                  slot="selected-actions"
                  ?disabled=${this.selected?.length>1}
                  @click=${()=>{this.allItems=this.allItems.filter(t=>!this.selected.includes(t)),this.resultTotal=this.resultTotal-this.selected.length,this.#u()}}
                >
                  <md-icon>delete</md-icon>
                </md-icon-button>

                <titanium-data-table-header
                  slot="table-headers"
                  large
                  column-name="Name"
                  title="Name"
                  @sort-by-changed=${this.#$}
                  .sortBy=${this.sortBy}
                  .sortDirection=${this.sortDirection}
                  @sort-direction-changed=${this.#b}
                ></titanium-data-table-header>

                <titanium-data-table-header
                  slot="table-headers"
                  column-name="Appearance"
                  title="Appearance"
                  width="130px"
                  @sort-by-changed=${this.#$}
                  .sortBy=${this.sortBy}
                  .sortDirection=${this.sortDirection}
                  @sort-direction-changed=${this.#b}
                ></titanium-data-table-header>

                <titanium-data-table-header
                  slot="table-headers"
                  column-name="Appearance"
                  title="Appearance"
                  width="130px"
                  @sort-by-changed=${this.#$}
                  .sortBy=${this.sortBy}
                  .sortDirection=${this.sortDirection}
                  @sort-direction-changed=${this.#b}
                ></titanium-data-table-header>

                ${a(this.items??[],t=>t.Name,t=>i`
                    <titanium-data-table-item
                      ?disable-select=${this.disableSelect}
                      @titanium-data-table-item-navigate=${()=>{this.dataTable.clearSelection()}}
                      .item=${t}
                      slot="items"
                    >
                      <row-item large ellipsis title=${t.Name??""}>${t.Name??"-"}</row-item>
                      <row-item width="130px" title=${t.Appearance??""}>${t.Appearance??"-"}</row-item>
                      <row-item width="130px" title=${t.Appearance??""}>${t.Appearance??"-"}</row-item>
                    </titanium-data-table-item>
                  `)}
              </titanium-data-table>

              <h2>Knobs</h2>
              <knob-container>
                <md-switch
                  id="singleSelectSwitch"
                  .selected=${this.singleSelect}
                  @click=${()=>{this.dataTable.clearSelection(),this.singleSelect=!this.singleSelect}}
                ></md-switch>
                <label for="singleSelectSwitch">Single Select</label>

                <md-switch
                  id="disableSelectSwitch"
                  .selected=${this.disableSelect}
                  @click=${()=>{this.dataTable.clearSelection(),this.disableSelect=!this.disableSelect}}
                ></md-switch>
                <label for="disableSelectSwitch">Disable Select</label>

                <md-switch
                  id="disablePagingSwitch"
                  .selected=${this.disablePaging}
                  @click=${()=>{this.disablePaging=!this.disablePaging}}
                ></md-switch>
                <label for="disablePagingSwitch">Disable Paging</label>

                <md-filled-tonal-button raised @click=${()=>this.dataTable.resetPage()}>Reset page</md-filled-tonal-button>
                <md-filled-tonal-button raised @click=${()=>this.dataTable.clearSelection()}>Clear selection</md-filled-tonal-button>
              </knob-container>
            </div>

            <div>
              <h1>Draggable</h1>
              <p>Table with draggable items</p>
              <titanium-data-table
                header="Draggable"
                .items=${this.draggableItems}
                @titanium-data-table-items-reorder=${async()=>{this.draggableItems=structuredClone(this.draggableItems),await this.requestUpdate("draggableItems")}}
              >
                <titanium-data-table-header slot="table-headers" large column-name="Name" no-sort title="Name"></titanium-data-table-header>
                <titanium-data-table-header slot="table-headers" column-name="Appearance" no-sort title="Appearance"></titanium-data-table-header>
                <titanium-data-table-header right slot="table-headers" column-name="Link" no-sort title="Link"></titanium-data-table-header>

                ${a(this.draggableItems??[],t=>t.Name,t=>i`
                    <titanium-data-table-item enable-dragging .item=${t} slot="items">
                      <row-item large ellipsis title=${t.Name??""}>${t.Name??"-"}</row-item>
                      <row-item title=${t.Appearance??""}>${t.Appearance??"-"}</row-item>
                      <row-item right><a href="#">Learn More</a></row-item>
                    </titanium-data-table-item>
                  `)}
              </titanium-data-table>
              <h2>Results</h2>
              <p>${this.draggableItems.map(t=>t.Name).join(",")}</p>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-data-table"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};s([l()],p.prototype,"allItems",null),s([l()],p.prototype,"items",null),s([l()],p.prototype,"selected",null),s([l()],p.prototype,"searchTerm",null),s([l()],p.prototype,"resultTotal",null),s([l()],p.prototype,"sortDirection",null),s([l()],p.prototype,"sortBy",null),s([l()],p.prototype,"filterController",null),s([l()],p.prototype,"singleSelect",null),s([l()],p.prototype,"disableSelect",null),s([l()],p.prototype,"disablePaging",null),s([l()],p.prototype,"draggableItems",null),s([n("titanium-data-table")],p.prototype,"dataTable",null),s([n("data-table-demo-filter-modal")],p.prototype,"filterModal",null),p=s([r("titanium-data-table-demo")],p);let u=class extends t{#r;get filterController(){return this.#r}set filterController(t){this.#r=t}#w;get appearance(){return this.#w}set appearance(t){this.#w=t}#S;get dialog(){return this.#S}set dialog(t){this.#S=t}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.requestUpdate("filterController")})}async open(){this.dialog.show()}#A(){const t=this.dialog.shadowRoot?.querySelector("dialog"),e=t?.querySelector(".container"),i=e?.querySelector(".scroller");i&&(i.style.overflow="initial"),e&&(e.style.overflow="initial")}#v(){const t=this.dialog.shadowRoot?.querySelector("dialog"),e=t?.querySelector(".container"),i=e?.querySelector(".scroller");i&&(i.style.overflow=""),e&&(e.style.overflow="")}static{this.styles=[e`
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
      }

      md-dialog {
        width: 100%;
      }

      md-dialog form {
        container-type: inline-size;
      }

      md-outlined-select {
        width: 100%;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return i`
      <md-input-chip
        remove-only
        ?hidden=${!this.filterController.getValue("Appearance")}
        label=${this.filterController.getValue("Appearance")??""}
        @remove=${t=>{t.preventDefault(),this.filterController.setValue("Appearance",null),this.requestUpdate("filterController")}}
      >
        <md-icon slot="icon">conditions</md-icon>
      </md-input-chip>

      <md-dialog type="alert">
        <div slot="headline">Filter items by</div>
        <form slot="content" method="dialog">
          <md-outlined-select
            @opening=${()=>this.#A()}
            @closing=${()=>this.#v()}
            label="Appearance"
            hasLeadingIcon
            .value=${this.filterController.getValue("Appearance")??""}
            @request-selection=${t=>{this.appearance=t.target.value}}
          >
            <md-icon slot="leading-icon">conditions</md-icon>

            <md-select-option ?selected=${"Ugly"===this.filterController.getValue("Appearance")} value="Ugly">
              <div slot="headline">Ugly</div>
              <md-icon slot="start" data-variant="icon">conditions</md-icon>
            </md-select-option>
            <md-select-option ?selected=${"Plaid"===this.filterController.getValue("Appearance")} value="Plaid">
              <div slot="headline">Plaid</div>
              <md-icon slot="start" data-variant="icon">conditions</md-icon>
            </md-select-option>
            <md-select-option ?selected=${"Slick"===this.filterController.getValue("Appearance")} value="Slick">
              <div slot="headline">Slick</div>
              <md-icon slot="start" data-variant="icon">conditions</md-icon>
            </md-select-option>
          </md-outlined-select>
        </form>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}> Close </md-text-button>
          <md-filled-tonal-button
            @click=${()=>{this.filterController.setValue("Appearance",this.appearance||null),this.requestUpdate("filterController"),this.dialog.close()}}
            >Apply</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};s([l()],u.prototype,"filterController",null),s([l()],u.prototype,"appearance",null),s([n("md-dialog")],u.prototype,"dialog",null),u=s([r("data-table-demo-filter-modal")],u);export{u as DataTableDemoFilterModal,p as TitaniumDataTableDemo};
