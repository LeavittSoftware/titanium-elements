import{i as e,b as t,K as i,C as s,M as l,_ as a,n as o,t as n}from"./BkdWKSMI.js";import{r as d}from"./yhgryvfy.js";import"./Crvvf7pv.js";import"./ChwwPp1m.js";let r=class extends e{#e=[10,15,20,50];get pageSizes(){return this.#e}set pageSizes(e){this.#e=e}#t=10;get defaultPageSize(){return this.#t}set defaultPageSize(e){this.#t=e}#i=0;get page(){return this.#i}set page(e){this.#i=e}#s;get count(){return this.#s}set count(e){this.#s=e}#l;get localStorageKey(){return this.#l}set localStorageKey(e){this.#l=e}#a="Items per page";get label(){return this.#a}set label(e){this.#a=e}#o;get disabled(){return this.#o}set disabled(e){this.#o=e}#n=!1;get filled(){return this.#n}set filled(e){this.#n=e}#d;get select(){return this.#d}set select(e){this.#d=e}get take(){const e=Number(window.localStorage.getItem(this.localStorageKey))||0;if(e>0)return e;return this.pageSizes.includes(this.defaultPageSize)?this.defaultPageSize:this.pageSizes?.[0]??1}set take(e){this.page=0,this.pageSizes.includes(e)||(this.pageSizes=[...this.pageSizes,e].sort((e,t)=>e-t)),localStorage.setItem(this.localStorageKey,String(e))}#r(e,t){if(!t)return"0-0 of 0";return`${0===t?t:e*this.take+1}-${(e+1)*this.take>t?t:(e+1)*this.take} of ${t}`}#c(){(this.page+1)*this.take>=this.count||(this.#h(this.page+1),this.dispatchEvent(new CustomEvent("action",{composed:!0})))}#g(){0!==this.page&&(this.#h(this.page-1),this.dispatchEvent(new CustomEvent("action",{composed:!0})))}#h(e){this.page=e}static{this.styles=t`
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

    md-outlined-select {
      min-width: 100px;
      --md-outlined-field-top-space: 4px;
      --md-outlined-field-bottom-space: 4px;
      --md-outlined-select-text-field-container-shape: 8px;
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
  `}render(){return l`
      <table-controls>
          <div ellipsis>${this.label}</div>
          <${this.filled?i`md-filled-select`:i`md-outlined-select`}
            ?disabled=${this.disabled}
            @request-selection=${e=>{e.stopPropagation(),this.take=Number(e.target.value),this.dispatchEvent(new CustomEvent("action",{composed:!0}))}}
          >
            ${s(this.pageSizes,e=>e,e=>l` <md-select-option ?selected=${this.take===e} value=${e}>
                  <div slot="headline">${e}</div>
                </md-select-option>`)}
          </${this.filled?i`md-filled-select`:i`md-outlined-select`}>
        ${this.#r(this.page,this.count)}
        <table-paging>
          <md-icon-button @click=${this.#g} ?disabled=${0===this.page||!this.count||this.disabled}>
            <md-icon>keyboard_arrow_left</md-icon>
          </md-icon-button>
          <md-icon-button @click=${this.#c} ?disabled=${!this.count||(this.page+1)*this.take>=this.count||this.disabled}>
            <md-icon>keyboard_arrow_right</md-icon>
          </md-icon-button>
        </table-paging>
      </table-controls>
    `}};a([o({type:Array})],r.prototype,"pageSizes",null),a([o({type:Number,attribute:"default-page-size"})],r.prototype,"defaultPageSize",null),a([o({type:Number})],r.prototype,"page",null),a([o({type:Number})],r.prototype,"count",null),a([o({type:String,attribute:"local-storage-key"})],r.prototype,"localStorageKey",null),a([o({type:String})],r.prototype,"label",null),a([o({type:Boolean})],r.prototype,"disabled",null),a([o({type:Boolean,attribute:"filled"})],r.prototype,"filled",null),a([d("md-select")],r.prototype,"select",null),a([o({type:Number})],r.prototype,"take",null),r=a([n("titanium-page-control")],r);
