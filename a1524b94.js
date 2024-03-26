import{_ as t,s as e,x as s,e as r,n as i}from"./f43924bd.js";import"./d8fb47ea.js";import{s as n}from"./08f0fa74.js";import{r as o}from"./f42dd0a8.js";class a extends e{#t;get input(){return this.#t}set input(t){this.#t=t}#e=!1;get error(){return this.#e}set error(t){this.#e=t}#s=!1;get disabled(){return this.#s}set disabled(t){this.#s=t}#r="";get errorText(){return this.#r}set errorText(t){this.#r=t}#i="";get label(){return this.#i}set label(t){this.#i=t}#n=!1;get required(){return this.#n}set required(t){this.#n=t}#o="";get value(){return this.#o}set value(t){this.#o=t}#a="";get prefixText(){return this.#a}set prefixText(t){this.#a=t}#l="";get suffixText(){return this.#l}set suffixText(t){this.#l=t}#h=!1;get hasLeadingIcon(){return this.#h}set hasLeadingIcon(t){this.#h=t}#u=!1;get hasTrailingIcon(){return this.#u}set hasTrailingIcon(t){this.#u=t}#c="";get supportingText(){return this.#c}set supportingText(t){this.#c=t}#g="";get textDirection(){return this.#g}set textDirection(t){this.#g=t}#p=2;get rows(){return this.#p}set rows(t){this.#p=t}#x=20;get cols(){return this.#x}set cols(t){this.#x=t}#d="";get inputMode(){return this.#d}set inputMode(t){this.#d=t}#_="";get max(){return this.#_}set max(t){this.#_=t}#m=-1;get maxLength(){return this.#m}set maxLength(t){this.#m=t}#f="";get min(){return this.#f}set min(t){this.#f=t}#$=-1;get minLength(){return this.#$}set minLength(t){this.#$=t}#T="";get pattern(){return this.#T}set pattern(t){this.#T=t}#y="";get placeholder(){return this.#y}set placeholder(t){this.#y=t}#b=!1;get readOnly(){return this.#b}set readOnly(t){this.#b=t}#L=!1;get multiple(){return this.#L}set multiple(t){this.#L=t}#I="";get step(){return this.#I}set step(t){this.#I=t}#v="text";get type(){return this.#v}set type(t){this.#v=t}#B="";get autocomplete(){return this.#B}set autocomplete(t){this.#B=t}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}select(){this.input.select()}setCustomValidity(t){this.input.setCustomValidity(t)}setRangeText(t,e,s,r){this.input.setRangeText(t,e,s,r)}setSelectionRange(t,e,s){this.input.setSelectionRange(t,e,s)}stepDown(t){this.input.stepDown(t)}stepUp(t){this.input.stepUp(t)}reset(){this.input.reset()}focus(){this.input.focus()}renderMainSlot(){return s`
      <slot></slot>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <slot name="leading-icon" slot="leading-icon"></slot>
    `}render(){return s`
      <md-outlined-text-field
        part="text-field"
        @input=${t=>this.value=t.target.value}
        @blur=${t=>o(this,t)}
        @focus=${t=>o(this,t)}
        @change=${t=>o(this,t)}
        @invalid=${t=>o(this,t)}
        .disabled=${this.disabled}
        .required=${this.required}
        .error=${this.error}
        .autocomplete=${this.autocomplete}
        .errorText=${this.errorText}
        .hasLeadingIcon=${this.hasLeadingIcon}
        .hasTrailingIcon=${this.hasTrailingIcon}
        .label=${this.label}
        .max=${this.max}
        .maxLength=${this.maxLength}
        .minLength=${this.minLength}
        .pattern=${this.pattern}
        .placeholder=${this.placeholder}
        .prefixText=${this.prefixText}
        .readOnly=${this.readOnly}
        .rows=${this.rows}
        .step=${this.step}
        .suffixText=${this.suffixText}
        .supportingText=${this.supportingText}
        .textDirection=${this.textDirection}
        .type=${this.type}
        .value=${this.value}
      >
        ${this.renderMainSlot()}
      </md-outlined-text-field>
    `}}t([r("md-outlined-text-field")],a.prototype,"input",null),t([i({type:Boolean,reflect:!0})],a.prototype,"error",null),t([i({type:Boolean,reflect:!0})],a.prototype,"disabled",null),t([i({attribute:"error-text"})],a.prototype,"errorText",null),t([i()],a.prototype,"label",null),t([i({type:Boolean,reflect:!0})],a.prototype,"required",null),t([i()],a.prototype,"value",null),t([i({attribute:"prefix-text"})],a.prototype,"prefixText",null),t([i({attribute:"suffix-text"})],a.prototype,"suffixText",null),t([i({type:Boolean,attribute:"has-leading-icon"})],a.prototype,"hasLeadingIcon",null),t([i({type:Boolean,attribute:"has-trailing-icon"})],a.prototype,"hasTrailingIcon",null),t([i({attribute:"supporting-text"})],a.prototype,"supportingText",null),t([i({attribute:"text-direction"})],a.prototype,"textDirection",null),t([i({type:Number})],a.prototype,"rows",null),t([i({type:Number})],a.prototype,"cols",null),t([i({reflect:!0})],a.prototype,"inputMode",null),t([i()],a.prototype,"max",null),t([i({type:Number})],a.prototype,"maxLength",null),t([i()],a.prototype,"min",null),t([i({type:Number})],a.prototype,"minLength",null),t([i()],a.prototype,"pattern",null),t([i({reflect:!0,converter:n})],a.prototype,"placeholder",null),t([i({type:Boolean,reflect:!0})],a.prototype,"readOnly",null),t([i({type:Boolean,reflect:!0})],a.prototype,"multiple",null),t([i()],a.prototype,"step",null),t([i({reflect:!0})],a.prototype,"type",null),t([i({reflect:!0})],a.prototype,"autocomplete",null);export{a as E};
