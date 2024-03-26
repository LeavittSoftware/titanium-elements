import{s as t,i as e,x as s,_ as r,n as i,e as a,t as o}from"./f43924bd.js";import"./2f3f6766.js";let l=class extends t{#t;get label(){return this.#t}set label(t){this.#t=t}#e="No items";get noItemsText(){return this.#e}set noItemsText(t){this.#e=t}#s=!1;get required(){return this.#s}set required(t){this.#s=t}#r;get hasItems(){return this.#r}set hasItems(t){this.#r=t}#i;get supportingText(){return this.#i}set supportingText(t){this.#i=t}#a;get error(){return this.#a}set error(t){this.#a=t}#o;get errorText(){return this.#o}set errorText(t){this.#o=t}#l;get resizable(){return this.#l}set resizable(t){this.#l=t}#n;get disabled(){return this.#n}set disabled(t){this.#n=t}#h;get validator(){return this.#h}set validator(t){this.#h=t}updated(t){(t.get("hasItems")&&t.has("hasItems")||this.hasItems&&t.has("hasItems"))&&this.reportValidity()}checkValidity(){return this.validator?.checkValidity()}reportValidity(){return this.validator?.reportValidity()}reset(){this.validator?.reset()}static{this.styles=[e`
      :host {
        display: block;
        width: 100%;
      }

      titanium-input-validator {
        display: block;
        width: 100%;
      }

      slot-container {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 12px;
        align-items: center;
      }

      span {
        font-size: 13px;
      }
    `]}render(){return s`
      <titanium-input-validator
        ?disabled=${this.disabled}
        .evaluator=${()=>!this.required||!!this.hasItems}
        ?required=${this.required}
        .label=${this.label}
        .resizable=${this.resizable}
        .supportingText=${this.supportingText}
        .errorText=${this.errorText}
        ?error=${this.error}
      >
        <slot-container>
          <slot></slot>
          ${this.hasItems?"":s` <span>${this.noItemsText}</span>`}
        </slot-container>
      </titanium-input-validator>
    `}};r([i({type:String})],l.prototype,"label",null),r([i({type:String})],l.prototype,"noItemsText",null),r([i({type:Boolean})],l.prototype,"required",null),r([i({type:Boolean})],l.prototype,"hasItems",null),r([i({type:String})],l.prototype,"supportingText",null),r([i({type:Boolean})],l.prototype,"error",null),r([i({type:String})],l.prototype,"errorText",null),r([i({type:Boolean})],l.prototype,"resizable",null),r([i({type:Boolean,reflect:!0})],l.prototype,"disabled",null),r([a("titanium-input-validator")],l.prototype,"validator",null),l=r([o("titanium-chip-multi-select")],l);
