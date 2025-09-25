import{i as t,c as e,al as i,H as s,a3 as r,a2 as a,_ as n,n as l,am as o,r as h,e as c,a7 as d,t as u}from"./CU2mI_nZ.js";import"./CKLNflfe.js";let g=class extends t{constructor(){super(),this.onInvalid=t=>{this.isCheckingValidity||this.isReportingValidity||this.showErrorMessage(!1,t)},this.#t=!1,this.#e=!1,this.#i="",this.#s="",this.#r=!1,this.#a=!1,this.#n="",this.#l="",this.#o="",this.#h=!1,this.#c=!1,this.#d="",this.#u=-1,this.#g="",this.#p="",this.#f="",this.#m="date",this.#x=!1,this.#_=!1,this.#b=!1,this.#y="",this.#$="",this.isCheckingValidity=!1,this.isReportingValidity=!1,this.hasCustomValidityError=!1,this.internals_=this.attachInternals()}static{this.formAssociated=!0}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this.onInvalid)}#t;get disabled(){return this.#t}set disabled(t){this.#t=t}#e;get error(){return this.#e}set error(t){this.#e=t}#i;get errorText(){return this.#i}set errorText(t){this.#i=t}#s;get label(){return this.#s}set label(t){this.#s=t}#r;get filled(){return this.#r}set filled(t){this.#r=t}#a;get required(){return this.#a}set required(t){this.#a=t}#n;get value(){return this.#n}set value(t){this.#n=t}#l;get prefixText(){return this.#l}set prefixText(t){this.#l=t}#o;get suffixText(){return this.#o}set suffixText(t){this.#o=t}#h;get hasLeadingIcon(){return this.#h}set hasLeadingIcon(t){this.#h=t}#c;get hasTrailingIcon(){return this.#c}set hasTrailingIcon(t){this.#c=t}#d;get max(){return this.#d}set max(t){this.#d=t}#u;get maxLength(){return this.#u}set maxLength(t){this.#u=t}#g;get min(){return this.#g}set min(t){this.#g=t}#p;get supportingText(){return this.#p}set supportingText(t){this.#p=t}#f;get placeholder(){return this.#f}set placeholder(t){this.#f=t}#m;get type(){return this.#m}set type(t){this.#m=t}#x;get dirty(){return this.#x}set dirty(t){this.#x=t}#_;get focused(){return this.#_}set focused(t){this.#_=t}#b;get nativeError(){return this.#b}set nativeError(t){this.#b=t}#y;get nativeErrorText(){return this.#y}set nativeErrorText(t){this.#y=t}#$;get autocomplete(){return this.#$}set autocomplete(t){this.#$=t}#v;get input(){return this.#v}set input(t){this.#v=t}#T;get leadingIcons(){return this.#T}set leadingIcons(t){this.#T=t}#k;get trailingIcons(){return this.#k}set trailingIcons(t){this.#k=t}checkValidity(){this.isCheckingValidity=!0,this.syncValidity();const t=this.internals_.checkValidity();return this.isCheckingValidity=!1,t}reportValidity(){let t;this.isReportingValidity=!0,this.addEventListener("invalid",e=>{t=e},{once:!0});const e=this.checkValidity();return this.showErrorMessage(e,t),this.isReportingValidity=!1,e}get validationMessage(){return this.syncValidity(),this.internals_.validationMessage}get validity(){return this.syncValidity(),this.internals_.validity}syncValidity(){const t=this.input;this.hasCustomValidityError?t.setCustomValidity(this.internals_.validationMessage):t.setCustomValidity(""),this.internals_.setValidity(t.validity,t.validationMessage,this.input)}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}getErrorText(){return this.error?this.errorText:this.nativeErrorText}showErrorMessage(t,e){if(e?.defaultPrevented)return t;const i=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.shadowRoot?.querySelector(this.filled?"md-filled-field":"md-outlined-field")?.reannounceError(),t}select(){this.input.select()}setCustomValidity(t){this.hasCustomValidityError=!!t,this.internals_.setValidity({customError:!!t},t,this.input)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText="",this.error=!1}static{this.styles=e`
    :host {
      display: block;
    }

    :host([filled]) {
      --md-filled-field-container-shape: 16px;

      --md-filled-field-active-indicator-height: 0;
      --md-filled-field-error-active-indicator-height: 0;
      --md-filled-field-hover-active-indicator-height: 0;
      --md-filled-field-focus-active-indicator-height: 0;
      --md-filled-field-disabled-active-indicator-height: 0;
    }

    md-outlined-field,
    md-filled-field {
      width: 100%;
      /* Adjust to match height of other text inputs */
      max-height: 56px;
    }

    input::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    md-icon-button {
      margin-right: 8px;
    }

    /* Safari Only */
    _::-webkit-full-page-media,
    _:future,
    input {
      padding-top: 14px;
      padding-bottom: 7px;
    }

    _::-webkit-full-page-media,
    _:future,
    md-icon-button[open-picker] {
      display: none;
    }

    @supports (-webkit-touch-callout: none) {
      /* CSS specific to iOS devices */
      input::-webkit-date-and-time-value {
        text-align: left;
      }

      input {
        height: 35px;
        padding-top: 16px;
        padding-bottom: 6px;
        min-width: 100px;
      }
    }

    /* FireFox specific hacks! */
    @-moz-document url-prefix() {
      input {
        min-width: 186px;
      }

      input[type='datetime-local'] {
        min-width: 285px;
      }

      md-icon-button[open-picker] {
        display: none;
      }

      input {
        padding-top: 16px;
        padding-bottom: 16px;
      }
    }
  `}render(){return a`
      <${this.filled?r`md-filled-field`:r`md-outlined-field`}
        ?disabled=${this.disabled}
        ?error=${this.error||this.nativeError}
        error-text=${this.getErrorText()}
        ?focused=${this.focused}
        ?has-end=${this.hasTrailingIcon}
        ?has-start=${this.hasLeadingIcon}
        label=${this.label}
        ?populated=${!!this.value}
        ?required=${this.required}
        supporting-text=${this.supportingText}
      >
        <span class="icon leading" slot="start">
          <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
        </span>
        <input
          type=${this.type}
          ?disabled=${this.disabled}
          aria-describedby="description"
          aria-invalid=${this.error||this.nativeError}
          aria-label=${this.label}
          placeholder=${this.placeholder||""}
          ?required=${this.required}
          .value=${i(this.value)}
          @change=${t=>s(this,t)}
          @focusin=${()=>this.focused=!0}
          @focusout=${()=>this.focused=!1}
          .autocomplete=${this.autocomplete}
          max=${this.max}
          min=${this.min}
          @blur=${t=>s(this,t)}
          @input=${t=>{this.dirty=!0,this.value=t.target.value,this.syncValidity()}}
          @select=${t=>s(this,t)}
        />
        <span class="icon trailing" slot="end">
          <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
            <md-icon-button open-picker @click=${()=>this.input?.showPicker()}>
              <md-icon>calendar_today</md-icon>
            </md-icon-button>
          </slot>
        </span>
      </${this.filled?r`md-filled-field`:r`md-outlined-field`}>
    `}};n([l({type:Boolean,reflect:!0})],g.prototype,"disabled",null),n([l({type:Boolean,reflect:!0})],g.prototype,"error",null),n([l({attribute:"error-text"})],g.prototype,"errorText",null),n([l()],g.prototype,"label",null),n([l({type:Boolean,attribute:"filled"})],g.prototype,"filled",null),n([l({type:Boolean,reflect:!0})],g.prototype,"required",null),n([l()],g.prototype,"value",null),n([l({attribute:"prefix-text"})],g.prototype,"prefixText",null),n([l({attribute:"suffix-text"})],g.prototype,"suffixText",null),n([l({type:Boolean,attribute:"has-leading-icon"})],g.prototype,"hasLeadingIcon",null),n([l({type:Boolean,attribute:"has-trailing-icon"})],g.prototype,"hasTrailingIcon",null),n([l()],g.prototype,"max",null),n([l({type:Number})],g.prototype,"maxLength",null),n([l()],g.prototype,"min",null),n([l({attribute:"supporting-text"})],g.prototype,"supportingText",null),n([l({reflect:!0,converter:o})],g.prototype,"placeholder",null),n([l({reflect:!0})],g.prototype,"type",null),n([h()],g.prototype,"dirty",null),n([h()],g.prototype,"focused",null),n([h()],g.prototype,"nativeError",null),n([h()],g.prototype,"nativeErrorText",null),n([l({reflect:!0,type:String})],g.prototype,"autocomplete",null),n([c("input")],g.prototype,"input",null),n([d({slot:"leading-icon"})],g.prototype,"leadingIcons",null),n([d({slot:"trailing-icon"})],g.prototype,"trailingIcons",null),g=n([u("titanium-date-input")],g);
