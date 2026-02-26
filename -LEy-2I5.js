import{i as t,b as e,K as i,am as s,N as r,M as l,_ as a,n,an as o,r as h,e as d,F as c,t as u}from"./BkdWKSMI.js";let p=class extends t{constructor(){super(),this.onInvalid=t=>{this.isCheckingValidity||this.isReportingValidity||this.showErrorMessage(!1,t)},this.#t=!1,this.#e=!1,this.#i="",this.#s=!1,this.#r="",this.#l=!1,this.#a=!1,this.#n="",this.#o="",this.#h="",this.#d=!1,this.#c=!1,this.#u="",this.#p=-1,this.#g="",this.#f="",this.#m="",this.#x="date",this.#_=!1,this.#b=!1,this.#y=!1,this.#$="",this.#v="",this.isCheckingValidity=!1,this.isReportingValidity=!1,this.hasCustomValidityError=!1,this.internals_=this.attachInternals()}static{this.formAssociated=!0}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this.onInvalid)}#t;get disabled(){return this.#t}set disabled(t){this.#t=t}#e;get error(){return this.#e}set error(t){this.#e=t}#i;get errorText(){return this.#i}set errorText(t){this.#i=t}#s;get noAsterisk(){return this.#s}set noAsterisk(t){this.#s=t}#r;get label(){return this.#r}set label(t){this.#r=t}#l;get filled(){return this.#l}set filled(t){this.#l=t}#a;get required(){return this.#a}set required(t){this.#a=t}#n;get value(){return this.#n}set value(t){this.#n=t}#o;get prefixText(){return this.#o}set prefixText(t){this.#o=t}#h;get suffixText(){return this.#h}set suffixText(t){this.#h=t}#d;get hasLeadingIcon(){return this.#d}set hasLeadingIcon(t){this.#d=t}#c;get hasTrailingIcon(){return this.#c}set hasTrailingIcon(t){this.#c=t}#u;get max(){return this.#u}set max(t){this.#u=t}#p;get maxLength(){return this.#p}set maxLength(t){this.#p=t}#g;get min(){return this.#g}set min(t){this.#g=t}#f;get supportingText(){return this.#f}set supportingText(t){this.#f=t}#m;get placeholder(){return this.#m}set placeholder(t){this.#m=t}#x;get type(){return this.#x}set type(t){this.#x=t}#_;get dirty(){return this.#_}set dirty(t){this.#_=t}#b;get focused(){return this.#b}set focused(t){this.#b=t}#y;get nativeError(){return this.#y}set nativeError(t){this.#y=t}#$;get nativeErrorText(){return this.#$}set nativeErrorText(t){this.#$=t}#v;get autocomplete(){return this.#v}set autocomplete(t){this.#v=t}#T;get input(){return this.#T}set input(t){this.#T=t}#k;get leadingIcons(){return this.#k}set leadingIcons(t){this.#k=t}#I;get trailingIcons(){return this.#I}set trailingIcons(t){this.#I=t}checkValidity(){this.isCheckingValidity=!0,this.syncValidity();const t=this.internals_.checkValidity();return this.isCheckingValidity=!1,t}reportValidity(){let t;this.isReportingValidity=!0,this.addEventListener("invalid",e=>{t=e},{once:!0});const e=this.checkValidity();return this.showErrorMessage(e,t),this.isReportingValidity=!1,e}get validationMessage(){return this.syncValidity(),this.internals_.validationMessage}get validity(){return this.syncValidity(),this.internals_.validity}syncValidity(){const t=this.input;this.hasCustomValidityError?t.setCustomValidity(this.internals_.validationMessage):t.setCustomValidity(""),this.internals_.setValidity(t.validity,t.validationMessage,this.input)}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}getErrorText(){return this.error?this.errorText:this.nativeErrorText}showErrorMessage(t,e){if(e?.defaultPrevented)return t;const i=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.shadowRoot?.querySelector(this.filled?"md-filled-field":"md-outlined-field")?.reannounceError(),t}select(){this.input.select()}setCustomValidity(t){this.hasCustomValidityError=!!t,this.internals_.setValidity({customError:!!t},t,this.input)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText="",this.error=!1}static{this.styles=e`
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

      --md-filled-field-label-text-populated-line-height: 14px;
    }

    :host(:not([filled])) {
      --md-outlined-field-top-space: 15px;
      --md-outlined-field-bottom-space: 15px;
    }

    md-outlined-field,
    md-filled-field {
      width: 100%;
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

    :host([filled]) _::-webkit-full-page-media,
    :host([filled]) _:future,
    :host([filled]) input {
      padding-top: 21px;
      padding-bottom: 0;
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
        min-width: 100px;
        padding-bottom: 10px;
        padding-top: 16px;
        height: 30px;
      }

      :host([filled]) input {
        padding-bottom: 3px;
        padding-top: 23px;
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

      :host([filled]) {
        --md-filled-field-label-text-populated-line-height: 16px;
      }

      :host(:not([filled])) {
        --md-outlined-field-top-space: 16px;
        --md-outlined-field-bottom-space: 16px;
      }
    }
  `}render(){return l`
      <${this.filled?i`md-filled-field`:i`md-outlined-field`}
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
        ?no-asterisk=${this.noAsterisk}
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
          .value=${s(this.value)}
          @change=${t=>r(this,t)}
          @focusin=${()=>this.focused=!0}
          @focusout=${()=>this.focused=!1}
          .autocomplete=${this.autocomplete}
          max=${this.max}
          min=${this.min}
          @blur=${t=>r(this,t)}
          @input=${t=>{this.dirty=!0,this.value=t.target.value,this.syncValidity()}}
          @select=${t=>r(this,t)}
        />
        <span class="icon trailing" slot="end">
          <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
            <md-icon-button open-picker @click=${()=>this.input?.showPicker()}>
              <md-icon>calendar_today</md-icon>
            </md-icon-button>
          </slot>
        </span>
      </${this.filled?i`md-filled-field`:i`md-outlined-field`}>
    `}};a([n({type:Boolean,reflect:!0})],p.prototype,"disabled",null),a([n({type:Boolean,reflect:!0})],p.prototype,"error",null),a([n({attribute:"error-text"})],p.prototype,"errorText",null),a([n({type:Boolean,attribute:"no-asterisk"})],p.prototype,"noAsterisk",null),a([n()],p.prototype,"label",null),a([n({type:Boolean,attribute:"filled"})],p.prototype,"filled",null),a([n({type:Boolean,reflect:!0})],p.prototype,"required",null),a([n()],p.prototype,"value",null),a([n({attribute:"prefix-text"})],p.prototype,"prefixText",null),a([n({attribute:"suffix-text"})],p.prototype,"suffixText",null),a([n({type:Boolean,attribute:"has-leading-icon"})],p.prototype,"hasLeadingIcon",null),a([n({type:Boolean,attribute:"has-trailing-icon"})],p.prototype,"hasTrailingIcon",null),a([n()],p.prototype,"max",null),a([n({type:Number})],p.prototype,"maxLength",null),a([n()],p.prototype,"min",null),a([n({attribute:"supporting-text"})],p.prototype,"supportingText",null),a([n({reflect:!0,converter:o})],p.prototype,"placeholder",null),a([n({reflect:!0})],p.prototype,"type",null),a([h()],p.prototype,"dirty",null),a([h()],p.prototype,"focused",null),a([h()],p.prototype,"nativeError",null),a([h()],p.prototype,"nativeErrorText",null),a([n({reflect:!0,type:String})],p.prototype,"autocomplete",null),a([d("input")],p.prototype,"input",null),a([c({slot:"leading-icon"})],p.prototype,"leadingIcons",null),a([c({slot:"trailing-icon"})],p.prototype,"trailingIcons",null),p=a([u("titanium-date-input")],p);
