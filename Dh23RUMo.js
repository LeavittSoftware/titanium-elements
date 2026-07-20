import{i as t,b as e,an as i,K as s,c as r,_ as a,n,ao as o,r as l,e as h,u as c,t as u}from"./CyOMU7b-.js";let d=class extends t{constructor(){super(),this.onInvalid=t=>{this.isCheckingValidity||this.isReportingValidity||this.showErrorMessage(!1,t)},this.#t=!1,this.#e=!1,this.#i="",this.#s=!1,this.#r="",this.#a=!1,this.#n="",this.#o="",this.#l="",this.#h=!1,this.#c=!1,this.#u="",this.#d=-1,this.#g="",this.#p="",this.#f="",this.#x="date",this.#m=!1,this.#_=!1,this.#b=!1,this.#y="",this.#v="",this.isCheckingValidity=!1,this.isReportingValidity=!1,this.hasCustomValidityError=!1,this.internals_=this.attachInternals()}static{this.formAssociated=!0}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this.onInvalid)}#t;get disabled(){return this.#t}set disabled(t){this.#t=t}#e;get error(){return this.#e}set error(t){this.#e=t}#i;get errorText(){return this.#i}set errorText(t){this.#i=t}#s;get noAsterisk(){return this.#s}set noAsterisk(t){this.#s=t}#r;get label(){return this.#r}set label(t){this.#r=t}#a;get required(){return this.#a}set required(t){this.#a=t}#n;get value(){return this.#n}set value(t){this.#n=t}#o;get prefixText(){return this.#o}set prefixText(t){this.#o=t}#l;get suffixText(){return this.#l}set suffixText(t){this.#l=t}#h;get hasLeadingIcon(){return this.#h}set hasLeadingIcon(t){this.#h=t}#c;get hasTrailingIcon(){return this.#c}set hasTrailingIcon(t){this.#c=t}#u;get max(){return this.#u}set max(t){this.#u=t}#d;get maxLength(){return this.#d}set maxLength(t){this.#d=t}#g;get min(){return this.#g}set min(t){this.#g=t}#p;get supportingText(){return this.#p}set supportingText(t){this.#p=t}#f;get placeholder(){return this.#f}set placeholder(t){this.#f=t}#x;get type(){return this.#x}set type(t){this.#x=t}#m;get dirty(){return this.#m}set dirty(t){this.#m=t}#_;get focused(){return this.#_}set focused(t){this.#_=t}#b;get nativeError(){return this.#b}set nativeError(t){this.#b=t}#y;get nativeErrorText(){return this.#y}set nativeErrorText(t){this.#y=t}#v;get autocomplete(){return this.#v}set autocomplete(t){this.#v=t}#$;get input(){return this.#$}set input(t){this.#$=t}#T;get leadingIcons(){return this.#T}set leadingIcons(t){this.#T=t}#k;get trailingIcons(){return this.#k}set trailingIcons(t){this.#k=t}checkValidity(){this.isCheckingValidity=!0,this.syncValidity();const t=this.internals_.checkValidity();return this.isCheckingValidity=!1,t}reportValidity(){let t;this.isReportingValidity=!0,this.addEventListener("invalid",e=>{t=e},{once:!0});const e=this.checkValidity();return this.showErrorMessage(e,t),this.isReportingValidity=!1,e}get validationMessage(){return this.syncValidity(),this.internals_.validationMessage}get validity(){return this.syncValidity(),this.internals_.validity}syncValidity(){const t=this.input;this.hasCustomValidityError?t.setCustomValidity(this.internals_.validationMessage):t.setCustomValidity(""),this.internals_.setValidity(t.validity,t.validationMessage,this.input)}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}getErrorText(){return this.error?this.errorText:this.nativeErrorText}showErrorMessage(t,e){if(e?.defaultPrevented)return t;const i=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.shadowRoot?.querySelector("md-filled-field")?.reannounceError(),t}select(){this.input.select()}setCustomValidity(t){this.hasCustomValidityError=!!t,this.internals_.setValidity({customError:!!t},t,this.input)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText="",this.error=!1}static{this.styles=e`
    :host {
      display: block;
    }

    :host {
      --md-filled-field-container-shape: 16px;

      --md-filled-field-active-indicator-height: 0;
      --md-filled-field-error-active-indicator-height: 0;
      --md-filled-field-hover-active-indicator-height: 0;
      --md-filled-field-focus-active-indicator-height: 0;
      --md-filled-field-disabled-active-indicator-height: 0;

      --md-filled-field-label-text-populated-line-height: 14px;
    }

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
    :host input {
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
        padding-bottom: 3px;
        padding-top: 23px;
        height: 30px;
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

      :host {
        --md-filled-field-label-text-populated-line-height: 16px;
      }
    }
  `}render(){return r`
      <md-filled-field
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
      </md-filled-field>
    `}};a([n({type:Boolean,reflect:!0})],d.prototype,"disabled",null),a([n({type:Boolean,reflect:!0})],d.prototype,"error",null),a([n({attribute:"error-text"})],d.prototype,"errorText",null),a([n({type:Boolean,attribute:"no-asterisk"})],d.prototype,"noAsterisk",null),a([n()],d.prototype,"label",null),a([n({type:Boolean,reflect:!0})],d.prototype,"required",null),a([n()],d.prototype,"value",null),a([n({attribute:"prefix-text"})],d.prototype,"prefixText",null),a([n({attribute:"suffix-text"})],d.prototype,"suffixText",null),a([n({type:Boolean,attribute:"has-leading-icon"})],d.prototype,"hasLeadingIcon",null),a([n({type:Boolean,attribute:"has-trailing-icon"})],d.prototype,"hasTrailingIcon",null),a([n()],d.prototype,"max",null),a([n({type:Number})],d.prototype,"maxLength",null),a([n()],d.prototype,"min",null),a([n({attribute:"supporting-text"})],d.prototype,"supportingText",null),a([n({reflect:!0,converter:o})],d.prototype,"placeholder",null),a([n({reflect:!0})],d.prototype,"type",null),a([l()],d.prototype,"dirty",null),a([l()],d.prototype,"focused",null),a([l()],d.prototype,"nativeError",null),a([l()],d.prototype,"nativeErrorText",null),a([n({reflect:!0,type:String})],d.prototype,"autocomplete",null),a([h("input")],d.prototype,"input",null),a([c({slot:"leading-icon"})],d.prototype,"leadingIcons",null),a([c({slot:"trailing-icon"})],d.prototype,"trailingIcons",null),d=a([u("titanium-date-input")],d);
