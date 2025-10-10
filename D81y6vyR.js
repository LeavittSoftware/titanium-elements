import{i as t,h as e,a,p as i,c as s,D as l,x as r,_ as n,r as o,t as d,e as c}from"./C3FxRHaz.js";import{S as m}from"./kaVdmEIP.js";import"./B08RhqQ_.js";import"./CkPuRfPW.js";import"./C3dBdmys.js";import{F as h}from"./P4H5H-1e.js";import"./BXuUbDt0.js";import"./C-pZ40bV.js";import"./BeoPuN4s.js";import"./DmUDdBMC.js";import"./Ds0RqHB6.js";import{g as p}from"./OXmljVLM.js";import{D as u}from"./DTS7lhmZ.js";import"./ByMwHMON.js";import"./bEK_EdQI.js";import"./C6ghopC1.js";import"./CtPM2ivG.js";import"./CFyXn9rk.js";import"./B3E7ArL7.js";let g=class extends t{#t=[];get draggableItems(){return this.#t}set draggableItems(t){this.#t=t}firstUpdated(){this.draggableItems=[{Name:"Model 3",Appearance:"slick"},{Name:"Model X",Appearance:"slick"},{Name:"Model Y",Appearance:"slick"},{Name:"Model S",Appearance:"slick"},{Name:"Cybertruck",Appearance:"ugly"},{Name:"Tesla Semi",Appearance:"ugly"},{Name:"Model X Plaid",Appearance:"plaid"},{Name:"Model S Plaid",Appearance:"plaid"},{Name:"Model S Plaid+",Appearance:"plaid"},{Name:"Gen. 2 Roadster",Appearance:"slick"}]}static{this.styles=[e,a,i,s`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      div {
        margin: 24px 0 36px 0;
      }

      h2 {
        margin-top: 24px;
      }
    `]}render(){return r`
      <h1>Draggable</h1>
      <p>Table with draggable items</p>
      <div>
        <titanium-data-table
          header="Draggable"
          .items=${this.draggableItems}
          @titanium-data-table-items-reorder=${async()=>{this.draggableItems=structuredClone(this.draggableItems),await this.requestUpdate("draggableItems")}}
        >
          <titanium-data-table-header slot="table-headers" large column-name="Name" no-sort title="Name"></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" column-name="Appearance" no-sort title="Appearance"></titanium-data-table-header>
          <titanium-data-table-header right slot="table-headers" column-name="Link" no-sort title="Link"></titanium-data-table-header>

          ${l(this.draggableItems??[],t=>t.Name,t=>r`
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
    `}};n([o()],g.prototype,"draggableItems",null),g=n([d("draggable-playground")],g);const b=[{Name:"Model 3",Appearance:"Slick"},{Name:"Model X",Appearance:"Slick"},{Name:"Model Y",Appearance:"Slick"},{Name:"Model S",Appearance:"Slick"},{Name:"Cybertruck",Appearance:"Ugly"},{Name:"Tesla Semi",Appearance:"Ugly"},{Name:"Model X Plaid",Appearance:"Plaid"},{Name:"Model S Plaid",Appearance:"Plaid"},{Name:"Model S Plaid+",Appearance:"Plaid"},{Name:"Gen. 2 Roadster",Appearance:"Slick"}];let $=class extends t{#e=[];get allItems(){return this.#e}set allItems(t){this.#e=t}#a=[];get items(){return this.#a}set items(t){this.#a=t}#i=[];get selected(){return this.#i}set selected(t){this.#i=t}#s="";get searchTerm(){return this.#s}set searchTerm(t){this.#s=t}#l=0;get resultTotal(){return this.#l}set resultTotal(t){this.#l=t}#r="asc";get sortDirection(){return this.#r}set sortDirection(t){this.#r=t}#n="Name";get sortBy(){return this.#n}set sortBy(t){this.#n=t}#o;get filterController(){return this.#o}set filterController(t){this.#o=t}#d=!1;get singleSelect(){return this.#d}set singleSelect(t){this.#d=t}#c=!1;get disableSelect(){return this.#c}set disableSelect(t){this.#c=t}#m=!1;get disablePaging(){return this.#m}set disablePaging(t){this.#m=t}#h;get dataTable(){return this.#h}set dataTable(t){this.#h=t}#p;get filterModal(){return this.#p}set filterModal(t){this.#p=t}constructor(){super(),this.filterController=new h("/titanium-data-table"),this.filterController.setFilter("Appearance",t=>`BasketId eq ${t}`),this.filterController.subscribeToFilterChange(async()=>{this.dataTable&&(this.dataTable?.resetPage(),this.#u())}),this.filterController.loadFromQueryString()}firstUpdated(){this.#g(),this.items=this.allItems.slice(0)}#u(){this.getItemsAsync(this.searchTerm)}#g(){this.allItems=b.map(t=>({Name:t.Name,Appearance:t.Appearance})),this.#u()}#b(t){this.sortDirection=t.detail,this.dataTable.resetPage(),this.#u()}#$(t){this.sortBy=t.detail,this.dataTable.resetPage(),this.#u()}#f=new u(t=>this.getItemsAsync(t));async getItemsAsync(t){const e=p(t),a=await this.dataTable.getTake(),i=await this.dataTable.getPage(),s="asc"===this.sortDirection?1:-1;let l=this.allItems.filter(t=>e.every(e=>t.Name?.trim().toLowerCase()?.includes(e.trim().toLowerCase())));const r=this.filterController.getValue("Appearance");r&&(l=l.filter(t=>t.Appearance===r)),this.items=l.slice(0).sort((t,e)=>t[this.sortBy]===e[this.sortBy]?0:(t[this.sortBy]??"")<(e[this.sortBy]??"")?s:-s).slice(a*i,a*i+a),this.resultTotal=l.length}static{this.styles=[e,a,i,s`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      titanium-data-table {
        margin: 24px 0 36px 0;
        --titanium-page-control-select-width: 108px;
      }

      div[knobs] {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        margin: 12px 0;
      }

      div[knobs] div {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    `]}render(){return r`
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
        </div>

        <md-filled-tonal-button slot="add-button" 
        @click=${()=>{const t=b[this.allItems.length%b.length],e={Name:t.Name,Appearance:t.Appearance};this.allItems.push(e),this.#u()}}>
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
          width="90px"
          @sort-by-changed=${this.#$}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#b}
        ></titanium-data-table-header>

        <titanium-data-table-header
          center
          slot="table-headers"
          column-name="Appearance"
          title="Appearance"
          @sort-by-changed=${this.#$}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#b}
        ></titanium-data-table-header>

        <titanium-data-table-header
          right
          slot="table-headers"
          column-name="Appearance"
          title="Appearance"
          @sort-by-changed=${this.#$}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#b}
        ></titanium-data-table-header>

        ${l(this.items??[],t=>t.Name,t=>r`
            <titanium-data-table-item
              ?disable-select=${this.disableSelect}
              @titanium-data-table-item-navigate=${()=>{this.dataTable.clearSelection()}}
              .item=${t}
              slot="items"
            >
              <row-item large ellipsis title=${t.Name??""}>${t.Name??"-"}</row-item>
              <row-item width="90px" title=${t.Appearance??""}>${t.Appearance??"-"}</row-item>
              <row-item center title=${t.Appearance??""}>${t.Appearance??"-"}</row-item>
              <row-item right title=${t.Appearance??""}>${t.Appearance??"-"}</row-item>
            </titanium-data-table-item>
          `)}
      </titanium-data-table>

      <h2>Knobs</h2>
      <div knobs>
        <div>
        <md-switch
              id="singleSelectSwitch"
                .selected=${this.singleSelect}
                @click=${()=>{this.dataTable.clearSelection(),this.singleSelect=!this.singleSelect}}
              ></md-switch>
        <label for="singleSelectSwitch">Single Select</label>
              </div>
         
         
              <div>
          <md-switch
          id="disableSelectSwitch"
            .selected=${this.disableSelect}
            @click=${()=>{this.dataTable.clearSelection(),this.disableSelect=!this.disableSelect}}
          ></md-switch>
          <label for="disableSelectSwitch">Disable Select</label>

          </div>
          <div>
          <md-switch
          id="disablePagingSwitch"
            .selected=${this.disablePaging}
            @click=${()=>{this.disablePaging=!this.disablePaging}}
          ></md-switch>
          <label for="disablePagingSwitch">Disable Paging</label>
          </div>

        <md-filled-tonal-button
          raised
          @click=${()=>this.dataTable.resetPage()}
          >Reset page</md-filled-tonal-button>
        <md-filled-tonal-button
          raised
          @click=${()=>this.dataTable.clearSelection()}
          >Clear selection</md-filled-tonal-button >
      </div>
    `}};n([o()],$.prototype,"allItems",null),n([o()],$.prototype,"items",null),n([o()],$.prototype,"selected",null),n([o()],$.prototype,"searchTerm",null),n([o()],$.prototype,"resultTotal",null),n([o()],$.prototype,"sortDirection",null),n([o()],$.prototype,"sortBy",null),n([o()],$.prototype,"filterController",null),n([o()],$.prototype,"singleSelect",null),n([o()],$.prototype,"disableSelect",null),n([o()],$.prototype,"disablePaging",null),n([c("titanium-data-table")],$.prototype,"dataTable",null),n([c("data-table-demo-filter-modal")],$.prototype,"filterModal",null),$=n([d("titanium-data-table-full-playground")],$);let f=class extends t{#o;get filterController(){return this.#o}set filterController(t){this.#o=t}#y;get appearance(){return this.#y}set appearance(t){this.#y=t}#w;get dialog(){return this.#w}set dialog(t){this.#w=t}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.requestUpdate("filterController")})}async open(){this.dialog.show()}#A(){const t=this.dialog.shadowRoot?.querySelector("dialog"),e=t?.querySelector(".container"),a=e?.querySelector(".scroller");a&&(a.style.overflow="initial"),e&&(e.style.overflow="initial")}#S(){const t=this.dialog.shadowRoot?.querySelector("dialog"),e=t?.querySelector(".container"),a=e?.querySelector(".scroller");a&&(a.style.overflow=""),e&&(e.style.overflow="")}static{this.styles=[s`
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
    `]}render(){return r`
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
            @closing=${()=>this.#S()}
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
    `}};n([o()],f.prototype,"filterController",null),n([o()],f.prototype,"appearance",null),n([c("md-dialog")],f.prototype,"dialog",null),f=n([d("data-table-demo-filter-modal")],f);let y=class extends t{static{this.styles=[m,s``]}render(){return r`
      <story-header name="Titanium data table" className="TitaniumDataTable"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table/project.json">
        <titanium-data-table-full-playground></titanium-data-table-full-playground>
        <hr />
        <draggable-playground></draggable-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table"></api-docs>
    `}};y=n([d("titanium-data-table-demo")],y);export{y as TitaniumDataTableDemo};
