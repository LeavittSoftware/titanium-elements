import{i as e,x as t,h as a,a as r,p as i,c as o,W as l,_ as s,r as n,e as d,t as c}from"./BriKlvrl.js";import{S as m}from"./BYDhJ-qH.js";import"./B5dYKavm.js";import"./Drnf-8aB.js";import"./C5wQzWBc.js";import{n as p}from"./4NUcxRo8.js";import"./C-S6ieI7.js";import"./doSzMn6v.js";import"./c5f0ayQ_.js";import"./CgKZkKuN.js";import"./Um3mYSyR.js";import"./fEBq_QNq.js";const u=[{Id:1,Name:"Model 3",Appearance:"Slick",DragCoefficient:.23,Year:2017,Color:"Red",MaxSpeed:150,IsElectric:!0,Owner:{Id:1,FullName:"John Doe"},Trim:"RWD",Sequence:1},{Id:2,Name:"Model X",Appearance:"Slick",DragCoefficient:.1,Year:2018,Color:"Blue",MaxSpeed:120,IsElectric:!0,Owner:{Id:1,FullName:"Jane Doe"},Sequence:2,Trim:"Long Range"},{Id:3,Name:"Model Y",Appearance:"Slick",DragCoefficient:.4,Year:2020,Color:"Blue",MaxSpeed:110,IsElectric:!0,Owner:{Id:2,FullName:"Jim Doe"},Sequence:3,Trim:"Long Range"},{Id:4,Name:"Model S",Appearance:"Slick",DragCoefficient:.2,Year:2009,Color:"Green",MaxSpeed:150,IsElectric:!0,Owner:{Id:3,FullName:"Joe Doe"},Sequence:4,Trim:"AWD"},{Id:5,Name:"Cybertruck",Appearance:"Ugly",DragCoefficient:.3,Year:2024,Color:"Yellow",MaxSpeed:100,IsElectric:!0,Owner:{Id:4,FullName:"Jill Doe"},Sequence:5,Trim:"Cyberbeast"},{Id:6,Name:"Tesla Semi",Appearance:"Ugly",DragCoefficient:.3,Year:2022,Color:"Green",MaxSpeed:100,IsElectric:!0,Owner:{Id:5,FullName:"Jill Doe"},Sequence:6,Trim:"AWD"},{Id:7,Name:"Model X",Appearance:"Plaid",DragCoefficient:.1,Year:2024,Color:"Red",MaxSpeed:180,IsElectric:!0,Owner:{Id:6,FullName:"Jack Doe"},Sequence:7,Trim:"AWD"},{Id:8,Name:"Model S",Appearance:"Plaid",DragCoefficient:.1,Year:2020,Color:"Yellow",MaxSpeed:130,IsElectric:!0,Owner:{Id:7,FullName:"Jill Doe"},Sequence:8,Trim:"Plaid"},{Id:9,Name:"Model S",Appearance:"Plaid",DragCoefficient:.1,Year:2022,Color:"Red",MaxSpeed:130,IsElectric:!0,Owner:{Id:8,FullName:"Jill Doe"},Sequence:9,Trim:"Plaid+"},{Id:10,Name:"Gen. 2 Roadster",Appearance:"Slick",DragCoefficient:.23,Year:2025,Color:"Red",MaxSpeed:150,IsElectric:!0,Owner:{Id:9,FullName:"Jill Doe"},Sequence:10,Trim:"RWN"}];let f=class extends e{#e=[];get sort(){return this.#e}set sort(e){this.#e=e}#t=this.sortItems(u,this.sort);get items(){return this.#t}set items(e){this.#t=e}#a=[];get selected(){return this.#a}set selected(e){this.#a=e}#r;get tableCore(){return this.#r}set tableCore(e){this.#r=e}sortItems(e,t){return[...e].sort((e,a)=>{for(const r of t||[]){const t=e[r.key],i=a[r.key];if(null==t&&null==i)continue;if(null==t)return"asc"===r.direction?1:-1;if(null==i)return"asc"===r.direction?-1:1;let o=0;if(o="string"==typeof t&&"string"==typeof i?t.localeCompare(i):t<i?-1:t>i?1:0,"desc"===r.direction&&(o=-o),0!==o)return o}return 0})}#i={uniqueKey:e=>e.Id?.toString()??"",itemClickHandler:e=>alert(`item click ${e.Name}`),itemMetaData:[{key:"Name",friendlyName:"Name",render:e=>t`<image-row>
            <img src="https://picsum.photos/24" />
            <div>${e.Name}</div>
            <div supporting-text>${e.Trim}</div>
          </image-row>`,width:"450px",defaultSort:{direction:"asc",position:2}},{key:"Appearance",friendlyName:"Appearance",sortExpression:"Appearance",render:e=>t`${e.Appearance}`,width:"250px",defaultSort:{direction:"desc",position:1}},{key:"Owner",friendlyName:"Owner",render:e=>t`<two-line
            ><div>${e.Owner?.FullName}</div>
            <div supporting-text>(${e.Owner?.Id})</div></two-line
          >`,csvValue:e=>e.Owner?.FullName??"",width:"250px"},{key:"DragCoefficient",friendlyName:"Drag Coefficient",sortExpression:"DragCoefficient",render:e=>t`${e.DragCoefficient}%`,width:"250px"},{key:"Year",friendlyName:"Year",sortExpression:"Year",render:e=>t`${e.Year}`,width:"250px",hideByDefault:!0,disableSort:!0},{key:"Color",friendlyName:"Color",render:e=>t`${e.Color}`,width:"250px",hideByDefault:!0},{key:"MaxSpeed",render:e=>t`${e.MaxSpeed} mph`,width:"250px"},{key:"IsElectric",friendlyName:"Is Electric",render:e=>t`${e.IsElectric?"Yes":"No"}`,width:"250px",hideByDefault:!0}],maxCustomSortColumns:6,reorderConfig:{sortPropertyKey:"Sequence",reorderItemDisplayKey:"Name"}};get tableMetaData(){return this.#i}set tableMetaData(e){this.#i=e}static{this.styles=[a,r,p,i,o`
      :host {
        display: grid;
      }

      md-icon-button[table-settings] {
        position: relative;
      }

      main {
        overflow-x: auto;
        margin: 24px 0;
        resize: horizontal;
        max-width: 1200px;
      }

      md-filled-tonal-button {
        margin-right: 12px;
      }
    `]}render(){return t`
      <h1>Full working example</h1>
      <p>Table with items and method controls - supports multi-column sorting</p>
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
          .supplementalItemStyles=${o`
            img {
              border-radius: 50%;
            }
          `}
          @selected-changed=${e=>this.selected=[...e.target.selected]}
          @sort-changed=${async e=>{this.sort=e.target.sort;const t=l(300);this.tableCore.loadWhile(t),await t,this.items=this.sortItems(this.items,this.sort),this.requestUpdate("items")}}
          @reorder-save-request=${async e=>{console.log("reorder-save-request..simulating API delay",e.detail.items),await l(1300),e.detail.resolve()}}
          .items=${this.items}
          .tableMetaData=${this.tableMetaData}
          .selected=${this.selected}
        >
        </titanium-data-table-core>
      </main>
    `}};s([n()],f.prototype,"sort",null),s([n()],f.prototype,"items",null),s([n()],f.prototype,"selected",null),s([d("titanium-data-table-core")],f.prototype,"tableCore",null),s([n()],f.prototype,"tableMetaData",null),f=s([c("data-table-core-playground")],f);let h=class extends e{static{this.styles=[m,o``]}render(){return t`
      <story-header name="Titanium data table core" className="TitaniumDataTableCoreDemo"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table-core/project.json">
        <data-table-core-playground></data-table-core-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-core"></api-docs>
    `}};h=s([c("titanium-data-table-core-demo")],h);export{h as TitaniumDataTableCoreDemo};
