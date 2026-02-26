import{i as t,b as e,c as s,_ as i,n as o,t as r}from"./BkdWKSMI.js";let n=class extends t{#t;get title(){return this.#t}set title(t){this.#t=t}#e;get sortBy(){return this.#e}set sortBy(t){this.#e=t}#s;get width(){return this.#s}set width(t){this.#s=t}#i=!1;get active(){return this.#i}set active(t){this.#i=t}#o;get sortDirection(){return this.#o}set sortDirection(t){this.#o=t}#r;get columnName(){return this.#r}set columnName(t){this.#r=t}#n=!1;get center(){return this.#n}set center(t){this.#n=t}#a=!1;get right(){return this.#a}set right(t){this.#a=t}#l=!1;get noSort(){return this.#l}set noSort(t){this.#l=t}#c=!1;get large(){return this.#c}set large(t){this.#c=t}#h=!1;get desktop(){return this.#h}set desktop(t){this.#h=t}#d=!1;get narrow(){return this.#d}set narrow(t){this.#d=t}updated(t){t.has("sortBy")&&t.get("sortBy")!==this.sortBy&&(this.active=this.sortBy===this.columnName),t.has("width")&&t.get("width")!==this.width&&this.width&&(this.style.width=this.width)}static{this.styles=e`
    :host {
      display: flex;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;

      text-align: left;
    }

    button {
      display: flex;
      flex-direction: row;
      align-items: center;

      position: relative;
      --md-focus-ring-shape: 0;

      font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
      font-size: 14px;
      padding: 8px;

      /* cancel padding so text aligns  */
      margin: 0 -8px;

      line-height: 28px;
      font-weight: 500;
      height: 100%;

      /* override default button styles */
      text-align: inherit;

      cursor: pointer;

      background-color: inherit;
      color: inherit;

      border: none;
      outline: none;
    }

    :host([right]) {
      justify-content: end;
      text-align: right;
    }

    :host([center]) {
      justify-content: center;
      text-align: center;
    }

    button:focus,
    button:active {
      outline: none;
      box-shadow: none;
    }

    :host(:not([width])) {
      -ms-flex: 3;
      -webkit-flex: 3;
      flex: 3;
    }

    :host(:not([width])[large]) {
      -ms-flex: 5;
      -webkit-flex: 5;
      flex: 5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([no-sort]) button {
      cursor: inherit;
    }

    :host([center]) button {
      margin-left: 22px;
    }

    :host([right]) button {
      flex-direction: row-reverse;
    }

    md-icon {
      display: block;
      height: 18px;
      width: 18px;
      font-size: 18px;
      margin-left: 4px;
      flex-shrink: 0;
      transform-origin: center;
      transition: transform 150ms ease;
    }

    :host([no-sort]) button md-icon {
      display: none;
    }

    :host([right]) md-icon {
      display: block;
      margin-left: 0;
      margin-right: 4px;
    }

    :host([width]) span {
      word-break: break-all;
    }

    md-icon {
      visibility: hidden;
    }

    :host([active][sort-direction='asc']) md-icon {
      transform: rotate(-180deg);
    }

    :host([active][sort-direction='asc']) md-icon,
    :host([active][sort-direction='desc']) md-icon {
      visibility: visible;
    }

    :host([narrow][desktop]) {
      display: none;
    }
  `}render(){return s`
      <button
        ?disabled=${this.noSort}
        @click=${()=>{this.active?(this.sortDirection="asc"===this.sortDirection?"desc":"asc",this.dispatchEvent(new CustomEvent("sort-direction-changed",{detail:this.sortDirection}))):(this.sortBy=this.columnName,this.dispatchEvent(new CustomEvent("sort-by-changed",{detail:this.sortBy})))}}
      >
        <span>${this.title}</span>
        <md-icon>arrow_downward</md-icon>
        <md-ripple ?disabled=${this.noSort}></md-ripple>
        <md-focus-ring inward></md-focus-ring>
      </button>
    `}};i([o({type:String})],n.prototype,"title",null),i([o({type:String})],n.prototype,"sortBy",null),i([o({reflect:!0,type:String})],n.prototype,"width",null),i([o({type:Boolean,reflect:!0})],n.prototype,"active",null),i([o({type:String,reflect:!0,attribute:"sort-direction"})],n.prototype,"sortDirection",null),i([o({type:String,attribute:"column-name"})],n.prototype,"columnName",null),i([o({type:Boolean,reflect:!0})],n.prototype,"center",null),i([o({type:Boolean,reflect:!0})],n.prototype,"right",null),i([o({type:Boolean,reflect:!0,attribute:"no-sort"})],n.prototype,"noSort",null),i([o({type:Boolean,reflect:!0})],n.prototype,"large",null),i([o({type:Boolean,reflect:!0})],n.prototype,"desktop",null),i([o({type:Boolean,reflect:!0})],n.prototype,"narrow",null),n=i([r("titanium-data-table-header")],n);
