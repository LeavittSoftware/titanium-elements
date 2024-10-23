import{r as t,i as e,x as i,B as s,_ as a,n as o,t as l}from"./Bu8jqD9G.js";import{r as n}from"./BMJh7FNu.js";import"./n6bxdxZ8.js";let r=class extends t{#t=[10,15,20,50];get pageSizes(){return this.#t}set pageSizes(t){this.#t=t}#e=10;get defaultPageSize(){return this.#e}set defaultPageSize(t){this.#e=t}#i=0;get page(){return this.#i}set page(t){this.#i=t}#s;get count(){return this.#s}set count(t){this.#s=t}#a;get localStorageKey(){return this.#a}set localStorageKey(t){this.#a=t}#o="Items per page";get label(){return this.#o}set label(t){this.#o=t}#l;get disabled(){return this.#l}set disabled(t){this.#l=t}#n;get select(){return this.#n}set select(t){this.#n=t}get take(){const t=Number(window.localStorage.getItem(this.localStorageKey))||0;if(t>0)return t;return this.pageSizes.includes(this.defaultPageSize)?this.defaultPageSize:this.pageSizes?.[0]??1}set take(t){this.page=0,this.pageSizes.includes(t)||(this.pageSizes=[...this.pageSizes,t].sort(((t,e)=>t-e))),localStorage.setItem(this.localStorageKey,String(t))}#r(t,e){if(!e)return"0-0 of 0";return`${0===e?e:t*this.take+1}-${(t+1)*this.take>e?e:(t+1)*this.take} of ${e}`}#c(){(this.page+1)*this.take>=this.count||(this.#d(this.page+1),this.dispatchEvent(new CustomEvent("action",{composed:!0})))}#h(){0!==this.page&&(this.#d(this.page-1),this.dispatchEvent(new CustomEvent("action",{composed:!0})))}#d(t){this.page=t}static{this.styles=e`
    :host {
      display: inline-block;
      font-family: var(--titanium-page-control-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
    }

    table-controls {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      max-width: 450px;
      min-width: 0;

      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.011em;
      line-height: 20px;
      gap: 8px;
    }

    table-paging {
      display: flex;
    }

    take-control {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    md-outlined-select {
      min-width: 100px;
      --md-outlined-field-top-space: 4px;
      --md-outlined-field-bottom-space: 4px;
      --md-outlined-select-text-field-container-shape: 8px;
    }

    pagination-text {
      text-align: center;
      user-select: none;
      padding-left: 12px;
    }

    [hidden] {
      display: none;
    }
  `}render(){return i`
      <table-controls>
        <take-control>
          <div ellipsis>${this.label}</div>
          <md-outlined-select
            ?disabled=${this.disabled}
            @request-selection=${t=>{t.stopPropagation(),this.take=Number(t.target.value),this.dispatchEvent(new CustomEvent("action",{composed:!0}))}}
          >
            ${s(this.pageSizes,(t=>t),(t=>i` <md-select-option ?selected=${this.take===t} value=${t}>
                  <div slot="headline">${t}</div>
                </md-select-option>`))}
          </md-outlined-select>
        </take-control>
        <pagination-text>${this.#r(this.page,this.count)}</pagination-text>
        <table-paging>
          <md-icon-button @click=${this.#h} ?disabled=${0===this.page||!this.count||this.disabled}>
            <md-icon>keyboard_arrow_left</md-icon>
          </md-icon-button>
          <md-icon-button @click=${this.#c} ?disabled=${!this.count||(this.page+1)*this.take>=this.count||this.disabled}>
            <md-icon>keyboard_arrow_right</md-icon>
          </md-icon-button>
        </table-paging>
      </table-controls>
    `}};a([o({type:Array})],r.prototype,"pageSizes",null),a([o({type:Number,attribute:"default-page-size"})],r.prototype,"defaultPageSize",null),a([o({type:Number})],r.prototype,"page",null),a([o({type:Number})],r.prototype,"count",null),a([o({type:String})],r.prototype,"localStorageKey",null),a([o({type:String})],r.prototype,"label",null),a([o({type:Boolean})],r.prototype,"disabled",null),a([n("md-select")],r.prototype,"select",null),a([o({type:Number})],r.prototype,"take",null),r=a([l("titanium-page-control")],r);
