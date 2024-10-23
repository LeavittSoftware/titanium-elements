import{r as t,i as e,x as i,af as s,y as r,_ as n,n as a,d as o,e as h,a0 as l,ag as c,t as u}from"./Bu8jqD9G.js";let d=class extends t{constructor(){super(),this.onInvalid=t=>{this.isCheckingValidity||this.isReportingValidity||this.showErrorMessage(!1,t)},this.#t=!1,this.#e=!1,this.#i="",this.#s="",this.#r=!1,this.#n="",this.#a="",this.#o="",this.#h=!1,this.#l=!1,this.#c="",this.#u=-1,this.#d="",this.#p="",this.#g="",this.#x="date",this.#_=!1,this.#f=!1,this.#m=!1,this.#b="",this.isCheckingValidity=!1,this.isReportingValidity=!1,this.hasCustomValidityError=!1,this.internals_=this.attachInternals()}static{this.formAssociated=!0}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}connectedCallback(){super.connectedCallback(),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this.onInvalid)}#t;get disabled(){return this.#t}set disabled(t){this.#t=t}#e;get error(){return this.#e}set error(t){this.#e=t}#i;get errorText(){return this.#i}set errorText(t){this.#i=t}#s;get label(){return this.#s}set label(t){this.#s=t}#r;get required(){return this.#r}set required(t){this.#r=t}#n;get value(){return this.#n}set value(t){this.#n=t}#a;get prefixText(){return this.#a}set prefixText(t){this.#a=t}#o;get suffixText(){return this.#o}set suffixText(t){this.#o=t}#h;get hasLeadingIcon(){return this.#h}set hasLeadingIcon(t){this.#h=t}#l;get hasTrailingIcon(){return this.#l}set hasTrailingIcon(t){this.#l=t}#c;get max(){return this.#c}set max(t){this.#c=t}#u;get maxLength(){return this.#u}set maxLength(t){this.#u=t}#d;get min(){return this.#d}set min(t){this.#d=t}#p;get supportingText(){return this.#p}set supportingText(t){this.#p=t}#g;get placeholder(){return this.#g}set placeholder(t){this.#g=t}#x;get type(){return this.#x}set type(t){this.#x=t}#_;get dirty(){return this.#_}set dirty(t){this.#_=t}#f;get focused(){return this.#f}set focused(t){this.#f=t}#m;get nativeError(){return this.#m}set nativeError(t){this.#m=t}#b;get nativeErrorText(){return this.#b}set nativeErrorText(t){this.#b=t}#y;get input(){return this.#y}set input(t){this.#y=t}#$;get field(){return this.#$}set field(t){this.#$=t}#T;get leadingIcons(){return this.#T}set leadingIcons(t){this.#T=t}#v;get trailingIcons(){return this.#v}set trailingIcons(t){this.#v=t}checkValidity(){this.isCheckingValidity=!0,this.syncValidity();const t=this.internals_.checkValidity();return this.isCheckingValidity=!1,t}reportValidity(){let t;this.isReportingValidity=!0,this.addEventListener("invalid",(e=>{t=e}),{once:!0});const e=this.checkValidity();return this.showErrorMessage(e,t),this.isReportingValidity=!1,e}get validationMessage(){return this.syncValidity(),this.internals_.validationMessage}get validity(){return this.syncValidity(),this.internals_.validity}syncValidity(){const t=this.input;this.hasCustomValidityError?t.setCustomValidity(this.internals_.validationMessage):t.setCustomValidity(""),this.internals_.setValidity(t.validity,t.validationMessage,this.input)}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}getErrorText(){return this.error?this.errorText:this.nativeErrorText}showErrorMessage(t,e){if(e?.defaultPrevented)return t;const i=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.field?.reannounceError(),t}select(){this.input.select()}setCustomValidity(t){this.hasCustomValidityError=!!t,this.internals_.setValidity({customError:!!t},t,this.input)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText="",this.error=!1}static{this.styles=e`
    :host {
      display: block;
      /* Adjust chrome default to match height of other text inputs */
      --md-outlined-field-top-space: 15px;
      --md-outlined-field-bottom-space: 15px;
    }

    md-outlined-field {
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
  `}render(){return i`
      <md-outlined-field
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
          .value=${s(this.value)}
          @change=${t=>r(this,t)}
          @focusin=${()=>this.focused=!0}
          @focusout=${()=>this.focused=!1}
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
      </md-outlined-field>
    `}};n([a({type:Boolean,reflect:!0})],d.prototype,"disabled",null),n([a({type:Boolean,reflect:!0})],d.prototype,"error",null),n([a({attribute:"error-text"})],d.prototype,"errorText",null),n([a()],d.prototype,"label",null),n([a({type:Boolean,reflect:!0})],d.prototype,"required",null),n([a()],d.prototype,"value",null),n([a({attribute:"prefix-text"})],d.prototype,"prefixText",null),n([a({attribute:"suffix-text"})],d.prototype,"suffixText",null),n([a({type:Boolean,attribute:"has-leading-icon"})],d.prototype,"hasLeadingIcon",null),n([a({type:Boolean,attribute:"has-trailing-icon"})],d.prototype,"hasTrailingIcon",null),n([a()],d.prototype,"max",null),n([a({type:Number})],d.prototype,"maxLength",null),n([a()],d.prototype,"min",null),n([a({attribute:"supporting-text"})],d.prototype,"supportingText",null),n([a({reflect:!0,converter:c})],d.prototype,"placeholder",null),n([a({reflect:!0})],d.prototype,"type",null),n([o()],d.prototype,"dirty",null),n([o()],d.prototype,"focused",null),n([o()],d.prototype,"nativeError",null),n([o()],d.prototype,"nativeErrorText",null),n([h("input")],d.prototype,"input",null),n([h("md-outlined-field")],d.prototype,"field",null),n([l({slot:"leading-icon"})],d.prototype,"leadingIcons",null),n([l({slot:"trailing-icon"})],d.prototype,"trailingIcons",null),d=n([u("titanium-date-input")],d);
