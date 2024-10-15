import{_ as t,r as e,x as s,y as r,e as i,n as l,ag as o}from"./BRzihpuF.js";class n extends e{#t;get input(){return this.#t}set input(t){this.#t=t}#e=!1;get error(){return this.#e}set error(t){this.#e=t}#s=!1;get disabled(){return this.#s}set disabled(t){this.#s=t}#r="";get errorText(){return this.#r}set errorText(t){this.#r=t}#i="";get label(){return this.#i}set label(t){this.#i=t}#l=!1;get required(){return this.#l}set required(t){this.#l=t}#o="";get value(){return this.#o}set value(t){this.#o=t}#n="";get prefixText(){return this.#n}set prefixText(t){this.#n=t}#a="";get suffixText(){return this.#a}set suffixText(t){this.#a=t}#c=!1;get hasLeadingIcon(){return this.#c}set hasLeadingIcon(t){this.#c=t}#h=!1;get hasTrailingIcon(){return this.#h}set hasTrailingIcon(t){this.#h=t}#u="";get supportingText(){return this.#u}set supportingText(t){this.#u=t}#g="";get textDirection(){return this.#g}set textDirection(t){this.#g=t}#p=2;get rows(){return this.#p}set rows(t){this.#p=t}#x=20;get cols(){return this.#x}set cols(t){this.#x=t}#_="";get inputMode(){return this.#_}set inputMode(t){this.#_=t}#d="";get max(){return this.#d}set max(t){this.#d=t}#m=-1;get maxLength(){return this.#m}set maxLength(t){this.#m=t}#f="";get min(){return this.#f}set min(t){this.#f=t}#$=-1;get minLength(){return this.#$}set minLength(t){this.#$=t}#y="";get pattern(){return this.#y}set pattern(t){this.#y=t}#T="";get placeholder(){return this.#T}set placeholder(t){this.#T=t}#b=!1;get readOnly(){return this.#b}set readOnly(t){this.#b=t}#L=!1;get multiple(){return this.#L}set multiple(t){this.#L=t}#I="";get step(){return this.#I}set step(t){this.#I=t}#B="text";get type(){return this.#B}set type(t){this.#B=t}#v="";get autocomplete(){return this.#v}set autocomplete(t){this.#v=t}#k;get spellcheck(){return this.#k}set spellcheck(t){this.#k=t}#w="";get autocorrect(){return this.#w}set autocorrect(t){this.#w=t}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}select(){this.input.select()}setCustomValidity(t){this.input.setCustomValidity(t)}setRangeText(t,e,s,r){this.input.setRangeText(t,e,s,r)}setSelectionRange(t,e,s){this.input.setSelectionRange(t,e,s)}stepDown(t){this.input.stepDown(t)}stepUp(t){this.input.stepUp(t)}reset(){this.input.reset()}focus(){this.input.focus()}renderMainSlot(){return s`
      <slot></slot>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <slot name="leading-icon" slot="leading-icon"></slot>
    `}render(){return s`
      <md-outlined-text-field
        part="text-field"
        @input=${t=>this.value=t.target.value}
        @blur=${t=>r(this,t)}
        @focus=${t=>r(this,t)}
        @change=${t=>r(this,t)}
        @invalid=${t=>r(this,t)}
        .disabled=${this.disabled}
        .required=${this.required}
        .error=${this.error}
        .autocomplete=${this.autocomplete}
        .autocorrect=${this.autocorrect}
        .spellcheck=${this.spellcheck}
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
    `}}t([i("md-outlined-text-field")],n.prototype,"input",null),t([l({type:Boolean,reflect:!0})],n.prototype,"error",null),t([l({type:Boolean,reflect:!0})],n.prototype,"disabled",null),t([l({attribute:"error-text"})],n.prototype,"errorText",null),t([l()],n.prototype,"label",null),t([l({type:Boolean,reflect:!0})],n.prototype,"required",null),t([l()],n.prototype,"value",null),t([l({attribute:"prefix-text"})],n.prototype,"prefixText",null),t([l({attribute:"suffix-text"})],n.prototype,"suffixText",null),t([l({type:Boolean,attribute:"has-leading-icon"})],n.prototype,"hasLeadingIcon",null),t([l({type:Boolean,attribute:"has-trailing-icon"})],n.prototype,"hasTrailingIcon",null),t([l({attribute:"supporting-text"})],n.prototype,"supportingText",null),t([l({attribute:"text-direction"})],n.prototype,"textDirection",null),t([l({type:Number})],n.prototype,"rows",null),t([l({type:Number})],n.prototype,"cols",null),t([l({reflect:!0})],n.prototype,"inputMode",null),t([l()],n.prototype,"max",null),t([l({type:Number})],n.prototype,"maxLength",null),t([l()],n.prototype,"min",null),t([l({type:Number})],n.prototype,"minLength",null),t([l()],n.prototype,"pattern",null),t([l({reflect:!0,converter:o})],n.prototype,"placeholder",null),t([l({type:Boolean,reflect:!0})],n.prototype,"readOnly",null),t([l({type:Boolean,reflect:!0})],n.prototype,"multiple",null),t([l()],n.prototype,"step",null),t([l({reflect:!0})],n.prototype,"type",null),t([l({reflect:!0,type:String})],n.prototype,"autocomplete",null),t([l({reflect:!0,type:Boolean})],n.prototype,"spellcheck",null),t([l({reflect:!0,type:String})],n.prototype,"autocorrect",null);export{n as E};
