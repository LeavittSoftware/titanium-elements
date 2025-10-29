import{i as t,c as e,al as i,K as s,H as r,J as l,_ as a,n,am as o,r as h,e as d,V as c,t as u}from"./qx-Pki5z.js";let p=class extends t{constructor(){super(),this.onInvalid=t=>{this.isCheckingValidity||this.isReportingValidity||this.showErrorMessage(!1,t)},this.#t=!1,this.#e=!1,this.#i="",this.#s="",this.#r=!1,this.#l=!1,this.#a="",this.#n="",this.#o="",this.#h=!1,this.#d=!1,this.#c="",this.#u=-1,this.#p="",this.#g="",this.#f="",this.#m="date",this.#x=!1,this.#_=!1,this.#b=!1,this.#y="",this.#$="",this.isCheckingValidity=!1,this.isReportingValidity=!1,this.hasCustomValidityError=!1,this.internals_=this.attachInternals()}static{this.formAssociated=!0}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this.onInvalid)}#t;get disabled(){return this.#t}set disabled(t){this.#t=t}#e;get error(){return this.#e}set error(t){this.#e=t}#i;get errorText(){return this.#i}set errorText(t){this.#i=t}#s;get label(){return this.#s}set label(t){this.#s=t}#r;get filled(){return this.#r}set filled(t){this.#r=t}#l;get required(){return this.#l}set required(t){this.#l=t}#a;get value(){return this.#a}set value(t){this.#a=t}#n;get prefixText(){return this.#n}set prefixText(t){this.#n=t}#o;get suffixText(){return this.#o}set suffixText(t){this.#o=t}#h;get hasLeadingIcon(){return this.#h}set hasLeadingIcon(t){this.#h=t}#d;get hasTrailingIcon(){return this.#d}set hasTrailingIcon(t){this.#d=t}#c;get max(){return this.#c}set max(t){this.#c=t}#u;get maxLength(){return this.#u}set maxLength(t){this.#u=t}#p;get min(){return this.#p}set min(t){this.#p=t}#g;get supportingText(){return this.#g}set supportingText(t){this.#g=t}#f;get placeholder(){return this.#f}set placeholder(t){this.#f=t}#m;get type(){return this.#m}set type(t){this.#m=t}#x;get dirty(){return this.#x}set dirty(t){this.#x=t}#_;get focused(){return this.#_}set focused(t){this.#_=t}#b;get nativeError(){return this.#b}set nativeError(t){this.#b=t}#y;get nativeErrorText(){return this.#y}set nativeErrorText(t){this.#y=t}#$;get autocomplete(){return this.#$}set autocomplete(t){this.#$=t}#v;get input(){return this.#v}set input(t){this.#v=t}#T;get leadingIcons(){return this.#T}set leadingIcons(t){this.#T=t}#k;get trailingIcons(){return this.#k}set trailingIcons(t){this.#k=t}checkValidity(){this.isCheckingValidity=!0,this.syncValidity();const t=this.internals_.checkValidity();return this.isCheckingValidity=!1,t}reportValidity(){let t;this.isReportingValidity=!0,this.addEventListener("invalid",e=>{t=e},{once:!0});const e=this.checkValidity();return this.showErrorMessage(e,t),this.isReportingValidity=!1,e}get validationMessage(){return this.syncValidity(),this.internals_.validationMessage}get validity(){return this.syncValidity(),this.internals_.validity}syncValidity(){const t=this.input;this.hasCustomValidityError?t.setCustomValidity(this.internals_.validationMessage):t.setCustomValidity(""),this.internals_.setValidity(t.validity,t.validationMessage,this.input)}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}getErrorText(){return this.error?this.errorText:this.nativeErrorText}showErrorMessage(t,e){if(e?.defaultPrevented)return t;const i=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.shadowRoot?.querySelector(this.filled?"md-filled-field":"md-outlined-field")?.reannounceError(),t}select(){this.input.select()}setCustomValidity(t){this.hasCustomValidityError=!!t,this.internals_.setValidity({customError:!!t},t,this.input)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText="",this.error=!1}static{this.styles=e`
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
    `}};a([n({type:Boolean,reflect:!0})],p.prototype,"disabled",null),a([n({type:Boolean,reflect:!0})],p.prototype,"error",null),a([n({attribute:"error-text"})],p.prototype,"errorText",null),a([n()],p.prototype,"label",null),a([n({type:Boolean,attribute:"filled"})],p.prototype,"filled",null),a([n({type:Boolean,reflect:!0})],p.prototype,"required",null),a([n()],p.prototype,"value",null),a([n({attribute:"prefix-text"})],p.prototype,"prefixText",null),a([n({attribute:"suffix-text"})],p.prototype,"suffixText",null),a([n({type:Boolean,attribute:"has-leading-icon"})],p.prototype,"hasLeadingIcon",null),a([n({type:Boolean,attribute:"has-trailing-icon"})],p.prototype,"hasTrailingIcon",null),a([n()],p.prototype,"max",null),a([n({type:Number})],p.prototype,"maxLength",null),a([n()],p.prototype,"min",null),a([n({attribute:"supporting-text"})],p.prototype,"supportingText",null),a([n({reflect:!0,converter:o})],p.prototype,"placeholder",null),a([n({reflect:!0})],p.prototype,"type",null),a([h()],p.prototype,"dirty",null),a([h()],p.prototype,"focused",null),a([h()],p.prototype,"nativeError",null),a([h()],p.prototype,"nativeErrorText",null),a([n({reflect:!0,type:String})],p.prototype,"autocomplete",null),a([d("input")],p.prototype,"input",null),a([c({slot:"leading-icon"})],p.prototype,"leadingIcons",null),a([c({slot:"trailing-icon"})],p.prototype,"trailingIcons",null),p=a([u("titanium-date-input")],p);
