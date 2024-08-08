import{o as t,q as i,h as e,_ as s,n as r,r as n,e as a,z as o,k as h,R as l,A as d,D as c,E as u,i as p}from"./BDVm1clO.js";import{F as x,s as f}from"./BnAFKI1h.js";import{r as g}from"./BwleRb8i.js";import{V as v,m as $,c as m,g as b}from"./CmWDcngB.js";import{m as y,g as w}from"./Dq5qrwSy.js";import{m as k,o as _}from"./Ct-HHgwR.js";class T extends v{computeValidity({state:t,renderedControl:i}){let e=i;z(t)&&!e?(e=this.inputControl||document.createElement("input"),this.inputControl=e):e||(e=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=e);const s=z(t)?e:null;if(s&&(s.type=t.type),e.value!==t.value&&(e.value=t.value),e.required=t.required,s){const i=t;i.pattern?s.pattern=i.pattern:s.removeAttribute("pattern"),i.min?s.min=i.min:s.removeAttribute("min"),i.max?s.max=i.max:s.removeAttribute("max"),i.step?s.step=i.step:s.removeAttribute("step")}return(t.minLength??-1)>-1?e.setAttribute("minlength",String(t.minLength)):e.removeAttribute("minlength"),(t.maxLength??-1)>-1?e.setAttribute("maxlength",String(t.maxLength)):e.removeAttribute("maxlength"),{validity:e.validity,validationMessage:e.validationMessage}}equals({state:t},{state:i}){const e=t.type===i.type&&t.value===i.value&&t.required===i.required&&t.minLength===i.minLength&&t.maxLength===i.maxLength;return z(t)&&z(i)?e&&t.pattern===i.pattern&&t.min===i.min&&t.max===i.max&&t.step===i.step:e}copy({state:t}){return{state:z(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:i,pattern:e,min:s,max:r,step:n}=t;return{...this.copySharedState(t),type:i,pattern:e,min:s,max:r,step:n}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:i,minLength:e,maxLength:s}){return{value:t,required:i,minLength:e,maxLength:s}}}function z(t){return"textarea"!==t.type}const C=t(k($(y(i(e)))));class I extends C{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const i=this.getInput();i&&(i.valueAsNumber=t,this.value=i.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const i=this.getInput();i&&(i.valueAsDate=t,this.value=i.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,i,e){this.getInputOrTextarea().setSelectionRange(t,i,e)}stepDown(t){const i=this.getInput();i&&(i.stepDown(t),this.value=i.value)}stepUp(t){const i=this.getInput();i&&(i.stepUp(t),this.value=i.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,i,e){"value"===t&&this.dirty||super.attributeChangedCallback(t,i,e)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return h`
      <span class="text-field ${l(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const i=this.getInputOrTextarea().value;this.value!==i&&(this.value=i)}renderField(){return d`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return h`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return h`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},i=this.ariaLabel||this.label||c,e=this.autocomplete,s=(this.maxLength??-1)>-1,r=(this.minLength??-1)>-1;if("textarea"===this.type)return h`
        <textarea
          class="input"
          style=${u(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${i}
          autocomplete=${e||c}
          name=${this.name||c}
          ?disabled=${this.disabled}
          maxlength=${s?this.maxLength:c}
          minlength=${r?this.minLength:c}
          placeholder=${this.placeholder||c}
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
      `;const n=this.renderPrefix(),a=this.renderSuffix(),o=this.inputMode;return h`
      <div class="input-wrapper">
        ${n}
        <input
          class="input"
          style=${u(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${i}
          autocomplete=${e||c}
          name=${this.name||c}
          ?disabled=${this.disabled}
          inputmode=${o||c}
          max=${this.max||c}
          maxlength=${s?this.maxLength:c}
          min=${this.min||c}
          minlength=${r?this.minLength:c}
          pattern=${this.pattern||c}
          placeholder=${this.placeholder||c}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||c}
          type=${this.type}
          .value=${x(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${a}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,i){if(!t)return c;return h`<span class="${l({suffix:i,prefix:!i})}">${t}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){g(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[w](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[m](){return new T((()=>({state:this,renderedControl:this.inputOrTextarea})))}[b](){return this.inputOrTextarea}[_](t){t?.preventDefault();const i=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.field?.reannounceError()}}I.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0},s([r({type:Boolean,reflect:!0})],I.prototype,"error",void 0),s([r({attribute:"error-text"})],I.prototype,"errorText",void 0),s([r()],I.prototype,"label",void 0),s([r({type:Boolean,attribute:"no-asterisk"})],I.prototype,"noAsterisk",void 0),s([r({type:Boolean,reflect:!0})],I.prototype,"required",void 0),s([r()],I.prototype,"value",void 0),s([r({attribute:"prefix-text"})],I.prototype,"prefixText",void 0),s([r({attribute:"suffix-text"})],I.prototype,"suffixText",void 0),s([r({type:Boolean,attribute:"has-leading-icon"})],I.prototype,"hasLeadingIcon",void 0),s([r({type:Boolean,attribute:"has-trailing-icon"})],I.prototype,"hasTrailingIcon",void 0),s([r({attribute:"supporting-text"})],I.prototype,"supportingText",void 0),s([r({attribute:"text-direction"})],I.prototype,"textDirection",void 0),s([r({type:Number})],I.prototype,"rows",void 0),s([r({type:Number})],I.prototype,"cols",void 0),s([r({reflect:!0})],I.prototype,"inputMode",void 0),s([r()],I.prototype,"max",void 0),s([r({type:Number})],I.prototype,"maxLength",void 0),s([r()],I.prototype,"min",void 0),s([r({type:Number})],I.prototype,"minLength",void 0),s([r({type:Boolean,attribute:"no-spinner"})],I.prototype,"noSpinner",void 0),s([r()],I.prototype,"pattern",void 0),s([r({reflect:!0,converter:f})],I.prototype,"placeholder",void 0),s([r({type:Boolean,reflect:!0})],I.prototype,"readOnly",void 0),s([r({type:Boolean,reflect:!0})],I.prototype,"multiple",void 0),s([r()],I.prototype,"step",void 0),s([r({reflect:!0})],I.prototype,"type",void 0),s([r({reflect:!0})],I.prototype,"autocomplete",void 0),s([n()],I.prototype,"dirty",void 0),s([n()],I.prototype,"focused",void 0),s([n()],I.prototype,"nativeError",void 0),s([n()],I.prototype,"nativeErrorText",void 0),s([a(".input")],I.prototype,"inputOrTextarea",void 0),s([a(".field")],I.prototype,"field",void 0),s([o({slot:"leading-icon"})],I.prototype,"leadingIcons",void 0),s([o({slot:"trailing-icon"})],I.prototype,"trailingIcons",void 0);const S=p`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;export{I as T,S as s};
