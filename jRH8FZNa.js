import{i as e,c as t,b as a,Y as i,_ as r,r as o,e as l,t as n}from"./BkdWKSMI.js";import{S as s}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./BENrdMV4.js";import"./k8TuYmOd.js";import{n as d}from"./Dl2jDuSy.js";import"./sfbuyCKw.js";import"./pNeA5_IP.js";import"./CIHPGdiZ.js";import"./DbnfmX2U.js";import"./ChwwPp1m.js";import"./fEBq_QNq.js";const c=[{Id:1,Name:"Model 3",Appearance:"Slick",DragCoefficient:.23,Year:2017,Color:"Red",MaxSpeed:150,IsElectric:!0,Owner:{Id:1,FullName:"John Doe"},Trim:"RWD",Sequence:1},{Id:2,Name:"Model X",Appearance:"Slick",DragCoefficient:.1,Year:2018,Color:"Blue",MaxSpeed:120,IsElectric:!0,Owner:{Id:1,FullName:"Jane Doe"},Sequence:2,Trim:"Long Range"},{Id:3,Name:"Model Y",Appearance:"Slick",DragCoefficient:.4,Year:2020,Color:"Blue",MaxSpeed:110,IsElectric:!0,Owner:{Id:2,FullName:"Jim Doe"},Sequence:3,Trim:"Long Range"},{Id:4,Name:"Model S",Appearance:"Slick",DragCoefficient:.2,Year:2009,Color:"Green",MaxSpeed:150,IsElectric:!0,Owner:{Id:3,FullName:"Joe Doe"},Sequence:4,Trim:"AWD"},{Id:5,Name:"Cybertruck",Appearance:"Ugly",DragCoefficient:.3,Year:2024,Color:"Yellow",MaxSpeed:100,IsElectric:!0,Owner:{Id:4,FullName:"Jill Doe"},Sequence:5,Trim:"Cyberbeast"},{Id:6,Name:"Tesla Semi",Appearance:"Ugly",DragCoefficient:.3,Year:2022,Color:"Green",MaxSpeed:100,IsElectric:!0,Owner:{Id:5,FullName:"Jill Doe"},Sequence:6,Trim:"AWD"},{Id:7,Name:"Model X",Appearance:"Plaid",DragCoefficient:.1,Year:2024,Color:"Red",MaxSpeed:180,IsElectric:!0,Owner:{Id:6,FullName:"Jack Doe"},Sequence:7,Trim:"AWD"},{Id:8,Name:"Model S",Appearance:"Plaid",DragCoefficient:.1,Year:2020,Color:"Yellow",MaxSpeed:130,IsElectric:!0,Owner:{Id:7,FullName:"Jill Doe"},Sequence:8,Trim:"Plaid"},{Id:9,Name:"Model S",Appearance:"Plaid",DragCoefficient:.1,Year:2022,Color:"Red",MaxSpeed:130,IsElectric:!0,Owner:{Id:8,FullName:"Jill Doe"},Sequence:9,Trim:"Plaid+"},{Id:10,Name:"Gen. 2 Roadster",Appearance:"Slick",DragCoefficient:.23,Year:2025,Color:"Red",MaxSpeed:150,IsElectric:!0,Owner:{Id:9,FullName:"Jill Doe"},Sequence:10,Trim:"RWN"}];let m=class extends e{#e=[];get sort(){return this.#e}set sort(e){this.#e=e}#t=this.sortItems(c,this.sort);get items(){return this.#t}set items(e){this.#t=e}#a=[];get selected(){return this.#a}set selected(e){this.#a=e}#i;get tableCore(){return this.#i}set tableCore(e){this.#i=e}sortItems(e,t){return[...e].sort((e,a)=>{for(const i of t||[]){const t=e[i.key],r=a[i.key];if(null==t&&null==r)continue;if(null==t)return"asc"===i.direction?1:-1;if(null==r)return"asc"===i.direction?-1:1;let o=0;if(o="string"==typeof t&&"string"==typeof r?t.localeCompare(r):t<r?-1:t>r?1:0,"desc"===i.direction&&(o=-o),0!==o)return o}return 0})}#r={uniqueKey:e=>e.Id?.toString()??"",itemClickHandler:e=>alert(`item click ${e.Name}`),itemMetaData:[{key:"Name",friendlyName:"Name",render:e=>t`<image-row>
            <img src="https://picsum.photos/24" />
            <div>${e.Name}</div>
            <div supporting-text>${e.Trim}</div>
          </image-row>`,width:"450px",defaultSort:{direction:"asc",position:2}},{key:"Appearance",friendlyName:"Appearance",sortExpression:"Appearance",render:e=>t`${e.Appearance}`,width:"250px",defaultSort:{direction:"desc",position:1}},{key:"Owner",friendlyName:"Owner",render:e=>t`<two-line
            ><div>${e.Owner?.FullName}</div>
            <div supporting-text>(${e.Owner?.Id})</div></two-line
          >`,csvValue:e=>e.Owner?.FullName??"",width:"250px"},{key:"DragCoefficient",friendlyName:"Drag Coefficient",sortExpression:"DragCoefficient",render:e=>t`${e.DragCoefficient}%`,width:"250px"},{key:"Year",friendlyName:"Year",sortExpression:"Year",render:e=>t`${e.Year}`,width:"250px",hideByDefault:!0,disableSort:!0},{key:"Color",friendlyName:"Color",render:e=>t`${e.Color}`,width:"250px",hideByDefault:!0},{key:"MaxSpeed",render:e=>t`${e.MaxSpeed} mph`,width:"250px",friendlyName:"Max Speed"},{key:"IsElectric",friendlyName:"Is Electric",render:e=>t`${e.IsElectric?"Yes":"No"}`,width:"250px",hideByDefault:!0}],maxCustomSortColumns:6,reorderConfig:{sortPropertyKey:"Sequence",reorderItemDisplayKey:"Name"}};get tableMetaData(){return this.#r}set tableMetaData(e){this.#r=e}static{this.styles=[s,d,a`
      titanium-data-table-core {
        margin: 24px 0 36px 0;
      }

      [data-row] {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
        gap: 16px;
        padding: 12px 24px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
        align-items: center;
      }

      [data-row]:hover {
        background-color: var(--md-sys-color-surface-variant);
      }

      [data-row][selected] {
        background-color: var(--md-sys-color-secondary-container);
      }

      nice-badge {
        font-size: 12px;
        padding: 4px 8px;
      }

      .actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
    `]}render(){return t`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium data table core" level1Href="/titanium-data-table-core" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium data table core" className="TitaniumDataTableCore"></story-header>

            <main>
              <titanium-data-table-action-bar slot="footer" .selected=${this.selected}>
                <md-filled-tonal-button slot="add-button" @click=${()=>alert("add dialog")}>
                  <md-icon slot="icon">add</md-icon>
                  <span>Add tesla</span>
                </md-filled-tonal-button>

                <md-filled-button
                  slot="selected-actions"
                  ?disabled=${this.selected?.length>1}
                  @click=${()=>{alert("edit dialog"),this.selected=[]}}
                >
                  <md-icon slot="icon">edit</md-icon>
                  <span>Edit</span>
                </md-filled-button>

                <md-filled-button slot="selected-actions" ?disabled=${this.selected?.length>1} @click=${()=>alert("delete dialog")}>
                  <md-icon slot="icon">delete</md-icon>
                  <span>Delete (${this.selected.length})</span>
                </md-filled-button>
              </titanium-data-table-action-bar>
              <titanium-data-table-core
                selection-mode="multi"
                local-storage-key="test-dtc-pref-tesla-demo"
                sticky-header
                .supplementalItemStyles=${a`
                  img {
                    border-radius: 50%;
                  }
                `}
                @selected-changed=${e=>this.selected=[...e.target.selected]}
                @sort-changed=${async e=>{this.sort=e.target.sort;const t=i(300);this.tableCore.loadWhile(t),await t,this.items=this.sortItems(this.items,this.sort),this.requestUpdate("items")}}
                @reorder-save-request=${async e=>{console.log("reorder-save-request..simulating API delay",e.detail.items),await i(1300),e.detail.resolve()}}
                .items=${this.items}
                .tableMetaData=${this.tableMetaData}
                .selected=${this.selected}
              >
              </titanium-data-table-core>
            </main>

            <api-docs src="./custom-elements.json" selected="titanium-data-table-core"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};r([o()],m.prototype,"sort",null),r([o()],m.prototype,"items",null),r([o()],m.prototype,"selected",null),r([l("titanium-data-table-core")],m.prototype,"tableCore",null),r([o()],m.prototype,"tableMetaData",null),m=r([n("titanium-data-table-core-demo")],m);export{m as TitaniumDataTableCoreDemo};
