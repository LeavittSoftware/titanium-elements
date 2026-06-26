import{i as e,b as t,y as i,c as s,_ as l,n as a,t as o}from"./CdKAnjTr.js";import{r}from"./BxKdizVk.js";import"./BKZvCGPJ.js";let n=class extends e{#e=[10,15,20,50];get pageSizes(){return this.#e}set pageSizes(e){this.#e=e}#t=10;get defaultPageSize(){return this.#t}set defaultPageSize(e){this.#t=e}#i=0;get page(){return this.#i}set page(e){this.#i=e}#s=0;get count(){return this.#s}set count(e){this.#s=e}#l="";get localStorageKey(){return this.#l}set localStorageKey(e){this.#l=e}#a="Items per page";get label(){return this.#a}set label(e){this.#a=e}#o=!1;get disabled(){return this.#o}set disabled(e){this.#o=e}#r;get select(){return this.#r}set select(e){this.#r=e}get take(){const e=Number(window.localStorage.getItem(this.localStorageKey))||0;if(e>0)return e;return this.pageSizes.includes(this.defaultPageSize)?this.defaultPageSize:this.pageSizes?.[0]??1}set take(e){this.page=0,this.pageSizes.includes(e)||(this.pageSizes=[...this.pageSizes,e].sort((e,t)=>e-t)),localStorage.setItem(this.localStorageKey,String(e))}#n(e,t){if(!t)return"0-0 of 0";return`${0===t?t:e*this.take+1}-${(e+1)*this.take>t?t:(e+1)*this.take} of ${t}`}#d(){(this.page+1)*this.take>=this.count||(this.#c(this.page+1),this.dispatchEvent(new CustomEvent("action",{composed:!0})))}#h(){0!==this.page&&(this.#c(this.page-1),this.dispatchEvent(new CustomEvent("action",{composed:!0})))}#c(e){this.page=e}static{this.styles=t`
    :host {
      display: inline-block;
      font-family: var(--titanium-page-control-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
    }

    table-controls {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;
      max-width: 450px;
      min-width: 0;

      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.011em;
      line-height: 20px;
      gap: 12px;
      user-select: none;
    }

    table-paging {
      display: flex;
    }

    md-filled-select {
      min-width: 100px;
      overflow: hidden;
      border-radius: 8px;
      --md-filled-select-text-field-container-color: var(--md-sys-color-surface-container-high);
      --md-filled-select-text-field-container-shape: 8px;
      --md-menu-container-shape: 8px;

      --md-filled-select-text-field-active-indicator-height: 0;
      --md-filled-select-text-field-error-active-indicator-height: 0;
      --md-filled-select-text-field-hover-active-indicator-height: 0;
      --md-filled-select-text-field-disabled-active-indicator-height: 0;

      --md-filled-field-top-space: 4px;
      --md-filled-field-bottom-space: 4px;
    }

    [hidden] {
      display: none;
    }
  `}render(){return s`
      <table-controls>
        <div ellipsis>${this.label}</div>
        <md-filled-select
          ?disabled=${this.disabled}
          @request-selection=${e=>{e.stopPropagation(),this.take=Number(e.target.value),this.dispatchEvent(new CustomEvent("action",{composed:!0}))}}
        >
          ${i(this.pageSizes,e=>e,e=>s` <md-select-option ?selected=${this.take===e} value=${e}>
                <div slot="headline">${e}</div>
              </md-select-option>`)}
        </md-filled-select>
        ${this.#n(this.page,this.count)}
        <table-paging>
          <md-icon-button @click=${this.#h} ?disabled=${0===this.page||!this.count||this.disabled}>
            <md-icon>keyboard_arrow_left</md-icon>
          </md-icon-button>
          <md-icon-button @click=${this.#d} ?disabled=${!this.count||(this.page+1)*this.take>=this.count||this.disabled}>
            <md-icon>keyboard_arrow_right</md-icon>
          </md-icon-button>
        </table-paging>
      </table-controls>
    `}};l([a({type:Array})],n.prototype,"pageSizes",null),l([a({type:Number,attribute:"default-page-size"})],n.prototype,"defaultPageSize",null),l([a({type:Number})],n.prototype,"page",null),l([a({type:Number})],n.prototype,"count",null),l([a({type:String,attribute:"local-storage-key"})],n.prototype,"localStorageKey",null),l([a({type:String})],n.prototype,"label",null),l([a({type:Boolean})],n.prototype,"disabled",null),l([r("md-select")],n.prototype,"select",null),l([a({type:Number})],n.prototype,"take",null),n=l([o("titanium-page-control")],n);
