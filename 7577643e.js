import{m as t,s as i,_ as e,n as s,r,e as n,A as a,x as o,u as h,B as l,T as d,H as c,v as u,i as p}from"./d0ace671.js";import{l as x,s as f}from"./ec5758e0.js";import{r as g}from"./f42dd0a8.js";import{V as v,m as $,c as m,g as b}from"./c3dfe460.js";import{m as y,g as w}from"./22c1ed29.js";import{m as _,o as k}from"./fb6bc6bd.js";class T extends v{computeValidity({state:t,renderedControl:i}){let e=i;z(t)&&!e?(e=this.inputControl||document.createElement("input"),this.inputControl=e):e||(e=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=e);const s=z(t)?e:null;if(s&&(s.type=t.type),e.value!==t.value&&(e.value=t.value),e.required=t.required,s){const i=t;i.pattern?s.pattern=i.pattern:s.removeAttribute("pattern"),i.min?s.min=i.min:s.removeAttribute("min"),i.max?s.max=i.max:s.removeAttribute("max"),i.step?s.step=i.step:s.removeAttribute("step")}return(t.minLength??-1)>-1?e.setAttribute("minlength",String(t.minLength)):e.removeAttribute("minlength"),(t.maxLength??-1)>-1?e.setAttribute("maxlength",String(t.maxLength)):e.removeAttribute("maxlength"),{validity:e.validity,validationMessage:e.validationMessage}}equals({state:t},{state:i}){const e=t.type===i.type&&t.value===i.value&&t.required===i.required&&t.minLength===i.minLength&&t.maxLength===i.maxLength;return z(t)&&z(i)?e&&t.pattern===i.pattern&&t.min===i.min&&t.max===i.max&&t.step===i.step:e}copy({state:t}){return{state:z(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:i,pattern:e,min:s,max:r,step:n}=t;return{...this.copySharedState(t),type:i,pattern:e,min:s,max:r,step:n}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:i,minLength:e,maxLength:s}){return{value:t,required:i,minLength:e,maxLength:s}}}function z(t){return"textarea"!==t.type}const C=_($(y(u(i))));class I extends C{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const i=this.getInput();i&&(i.valueAsNumber=t,this.value=i.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const i=this.getInput();i&&(i.valueAsDate=t,this.value=i.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,i,e){this.getInputOrTextarea().setSelectionRange(t,i,e)}stepDown(t){const i=this.getInput();i&&(i.stepDown(t),this.value=i.value)}stepUp(t){const i=this.getInput();i&&(i.stepUp(t),this.value=i.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,i,e){"value"===t&&this.dirty||super.attributeChangedCallback(t,i,e)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return o`
      <span class="text-field ${h(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const i=this.getInputOrTextarea().value;this.value!==i&&(this.value=i)}renderField(){return l`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${"textarea"===this.type}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`}renderLeadingIcon(){return o`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return o`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},i=this.ariaLabel||this.label||d,e=this.autocomplete,s=(this.maxLength??-1)>-1,r=(this.minLength??-1)>-1;if("textarea"===this.type)return o`
        <textarea
          class="input"
          style=${c(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${i}
          autocomplete=${e||d}
          name=${this.name||d}
          ?disabled=${this.disabled}
          maxlength=${s?this.maxLength:d}
          minlength=${r?this.minLength:d}
          placeholder=${this.placeholder||d}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${x(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const n=this.renderPrefix(),a=this.renderSuffix(),h=this.inputMode;return o`
      <div class="input-wrapper">
        ${n}
        <input
          class="input"
          style=${c(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${i}
          autocomplete=${e||d}
          name=${this.name||d}
          ?disabled=${this.disabled}
          inputmode=${h||d}
          max=${this.max||d}
          maxlength=${s?this.maxLength:d}
          min=${this.min||d}
          minlength=${r?this.minLength:d}
          pattern=${this.pattern||d}
          placeholder=${this.placeholder||d}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||d}
          type=${this.type}
          .value=${x(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${a}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,i){if(!t)return d;return o`<span class="${h({suffix:i,prefix:!i})}">${t}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){g(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[w](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[m](){return new T((()=>({state:this,renderedControl:this.inputOrTextarea})))}[b](){return this.inputOrTextarea}[k](t){t?.preventDefault();const i=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.field?.reannounceError()}}t(I),I.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0},e([s({type:Boolean,reflect:!0})],I.prototype,"error",void 0),e([s({attribute:"error-text"})],I.prototype,"errorText",void 0),e([s()],I.prototype,"label",void 0),e([s({type:Boolean,attribute:"no-asterisk"})],I.prototype,"noAsterisk",void 0),e([s({type:Boolean,reflect:!0})],I.prototype,"required",void 0),e([s()],I.prototype,"value",void 0),e([s({attribute:"prefix-text"})],I.prototype,"prefixText",void 0),e([s({attribute:"suffix-text"})],I.prototype,"suffixText",void 0),e([s({type:Boolean,attribute:"has-leading-icon"})],I.prototype,"hasLeadingIcon",void 0),e([s({type:Boolean,attribute:"has-trailing-icon"})],I.prototype,"hasTrailingIcon",void 0),e([s({attribute:"supporting-text"})],I.prototype,"supportingText",void 0),e([s({attribute:"text-direction"})],I.prototype,"textDirection",void 0),e([s({type:Number})],I.prototype,"rows",void 0),e([s({type:Number})],I.prototype,"cols",void 0),e([s({reflect:!0})],I.prototype,"inputMode",void 0),e([s()],I.prototype,"max",void 0),e([s({type:Number})],I.prototype,"maxLength",void 0),e([s()],I.prototype,"min",void 0),e([s({type:Number})],I.prototype,"minLength",void 0),e([s({type:Boolean,attribute:"no-spinner"})],I.prototype,"noSpinner",void 0),e([s()],I.prototype,"pattern",void 0),e([s({reflect:!0,converter:f})],I.prototype,"placeholder",void 0),e([s({type:Boolean,reflect:!0})],I.prototype,"readOnly",void 0),e([s({type:Boolean,reflect:!0})],I.prototype,"multiple",void 0),e([s()],I.prototype,"step",void 0),e([s({reflect:!0})],I.prototype,"type",void 0),e([s({reflect:!0})],I.prototype,"autocomplete",void 0),e([r()],I.prototype,"dirty",void 0),e([r()],I.prototype,"focused",void 0),e([r()],I.prototype,"nativeError",void 0),e([r()],I.prototype,"nativeErrorText",void 0),e([n(".input")],I.prototype,"inputOrTextarea",void 0),e([n(".field")],I.prototype,"field",void 0),e([a({slot:"leading-icon"})],I.prototype,"leadingIcons",void 0),e([a({slot:"trailing-icon"})],I.prototype,"trailingIcons",void 0);const S=p`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;export{I as T,S as s};
