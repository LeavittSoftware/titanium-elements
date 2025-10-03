import{aa as t,ab as e,x as s,$ as i,ac as n,a0 as h,a1 as o,a2 as r,i as a,_ as l,n as d,r as u,e as c,Y as p,ad as m,ae as g,af as v,a5 as x,E as b,O as f,X as y,ag as $,ah as w,ai as E,H as k,aj as T,a6 as I,a8 as C,a9 as q,c as B,t as R}from"./CIAkX42C.js";import{M as S,s as F}from"./DpTDlxJu.js";import{n as _}from"./DzDchJdO.js";class A extends t{computeValidity(t){return this.selectControl||(this.selectControl=document.createElement("select")),e(s`<option value=${t.value}></option>`,this.selectControl),this.selectControl.value=t.value,this.selectControl.required=t.required,{validity:this.selectControl.validity,validationMessage:this.selectControl.validationMessage}}equals(t,e){return t.value===e.value&&t.required===e.required}copy({value:t,required:e}){return{value:t,required:e}}}var D;const M=Symbol("value"),U=i(n(h(o(r(a)))));class j extends U{get value(){return this[M]}set value(t){this.lastUserSetValue=t,this.select(t)}get options(){return this.menu?.items??[]}get selectedIndex(){const[t,e]=(this.getSelectedOptions()??[])[0]??[];return e??-1}set selectedIndex(t){this.lastUserSetSelectedIndex=t,this.selectIndex(t)}get selectedOptions(){return(this.getSelectedOptions()??[]).map(([t])=>t)}get hasError(){return this.error||this.nativeError}constructor(){super(),this.quick=!1,this.required=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.supportingText="",this.error=!1,this.menuPositioning="popover",this.clampMenuWidth=!1,this.typeaheadDelay=m,this.hasLeadingIcon=!1,this.displayText="",this.menuAlign="start",this[D]="",this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText="",this.focused=!1,this.open=!1,this.defaultFocus=g.NONE,this.prevOpen=this.open,this.selectWidth=0,this.addEventListener("focus",this.handleFocus.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}select(t){const e=this.options.find(e=>e.value===t);e&&this.selectItem(e)}selectIndex(t){const e=this.options[t];e&&this.selectItem(e)}reset(){for(const t of this.options)t.selected=t.hasAttribute("selected");this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=""}showPicker(){this.open=!0}[(D=M,v)](t){t?.preventDefault();const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}update(t){if(this.hasUpdated||this.initUserSelection(),this.prevOpen!==this.open&&this.open){const t=this.getBoundingClientRect();this.selectWidth=t.width}this.prevOpen=this.open,super.update(t)}render(){return s`
      <span
        class="select ${x(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `}async firstUpdated(t){await(this.menu?.updateComplete),this.lastSelectedOptionRecords.length||this.initUserSelection(),this.lastSelectedOptionRecords.length||this.options.length||setTimeout(()=>{this.updateValueAndDisplayText()}),super.firstUpdated(t)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){const t=this.ariaLabel||this.label;return f`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?"-1":"0"}
          aria-label=${t||b}
          aria-describedby="description"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          ?no-asterisk=${this.noAsterisk}
          .focused=${this.focused||this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`}renderFieldContent(){return[this.renderLeadingIcon(),this.renderLabel(),this.renderTrailingIcon()]}renderLeadingIcon(){return s`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return s`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `}renderLabel(){return s`<div id="label">${this.displayText||s`&nbsp;`}</div>`}renderMenu(){const t=this.label||this.ariaLabel;return s`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${t||b}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${y({"--__menu-min-width":`${this.selectWidth}px`,"--__menu-max-width":this.clampMenuWidth?`${this.selectWidth}px`:void 0})}
        no-navigation-wrap
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${"start"===this.menuAlign?"end-start":"end-end"}
        .menuCorner=${"start"===this.menuAlign?"start-start":"start-end"}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`}renderMenuContent(){return s`<slot></slot>`}handleKeydown(t){if(this.open||this.disabled||!this.menu)return;const e=this.menu.typeaheadController,s="Space"===t.code||"ArrowDown"===t.code||"ArrowUp"===t.code||"End"===t.code||"Home"===t.code||"Enter"===t.code;if(!e.isTypingAhead&&s){switch(t.preventDefault(),this.open=!0,t.code){case"Space":case"ArrowDown":case"Enter":this.defaultFocus=g.NONE;break;case"End":this.defaultFocus=g.LAST_ITEM;break;case"ArrowUp":case"Home":this.defaultFocus=g.FIRST_ITEM}return}if(1===t.key.length){e.onKeydown(t),t.preventDefault();const{lastActiveRecord:s}=e;if(!s)return;this.labelEl?.setAttribute?.("aria-live","polite");this.selectItem(s[$.ITEM])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!this.open}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(t){t.relatedTarget&&w(t.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;const t=this.menu.items;return this.lastSelectedOptionRecords=function(t){const e=[];for(let s=0;s<t.length;s++){const i=t[s];i.selected&&e.push([i,s])}return e}(t),this.lastSelectedOptionRecords}async getUpdateComplete(){return await(this.menu?.updateComplete),super.getUpdateComplete()}updateValueAndDisplayText(){const t=this.getSelectedOptions()??[];let e=!1;if(t.length){const[s]=t[0];e=this.lastSelectedOption!==s,this.lastSelectedOption=s,this[M]=s.value,this.displayText=s.displayText}else e=null!==this.lastSelectedOption,this.lastSelectedOption=null,this[M]="",this.displayText="";return e}async handleOpening(t){if(this.labelEl?.removeAttribute?.("aria-live"),this.redispatchEvent(t),this.defaultFocus!==g.NONE)return;const e=this.menu.items,s=E(e)?.item;let[i]=this.lastSelectedOptionRecords[0]??[null];s&&s!==i&&(s.tabIndex=-1),i=i??e[0],i&&(i.tabIndex=0,i.focus())}redispatchEvent(t){k(this,t)}handleClosed(t){this.open=!1,this.redispatchEvent(t)}handleCloseMenu(t){const e=t.detail.reason,s=t.detail.itemPath[0];this.open=!1;let i=!1;"click-selection"===e.kind||"keydown"===e.kind&&T(e.key)?i=this.selectItem(s):(s.tabIndex=-1,s.blur()),i&&this.dispatchInteractionEvents()}selectItem(t){return(this.getSelectedOptions()??[]).forEach(([e])=>{t!==e&&(e.selected=!1)}),t.selected=!0,this.updateValueAndDisplayText()}handleRequestSelection(t){const e=t.target;this.lastSelectedOptionRecords.some(([t])=>t===e)||this.selectItem(e)}handleRequestDeselection(t){const e=t.target;this.lastSelectedOptionRecords.some(([t])=>t===e)&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):null===this.lastUserSetSelectedIndex||this.lastSelectedOptionRecords.length?this.updateValueAndDisplayText():this.selectIndex(this.lastUserSetSelectedIndex)}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}[I](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}click(){this.field?.click()}[C](){return new A(()=>this)}[q](){return this.field}}j.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0},l([d({type:Boolean})],j.prototype,"quick",void 0),l([d({type:Boolean})],j.prototype,"required",void 0),l([d({type:String,attribute:"error-text"})],j.prototype,"errorText",void 0),l([d()],j.prototype,"label",void 0),l([d({type:Boolean,attribute:"no-asterisk"})],j.prototype,"noAsterisk",void 0),l([d({type:String,attribute:"supporting-text"})],j.prototype,"supportingText",void 0),l([d({type:Boolean,reflect:!0})],j.prototype,"error",void 0),l([d({attribute:"menu-positioning"})],j.prototype,"menuPositioning",void 0),l([d({type:Boolean,attribute:"clamp-menu-width"})],j.prototype,"clampMenuWidth",void 0),l([d({type:Number,attribute:"typeahead-delay"})],j.prototype,"typeaheadDelay",void 0),l([d({type:Boolean,attribute:"has-leading-icon"})],j.prototype,"hasLeadingIcon",void 0),l([d({attribute:"display-text"})],j.prototype,"displayText",void 0),l([d({attribute:"menu-align"})],j.prototype,"menuAlign",void 0),l([d()],j.prototype,"value",null),l([d({type:Number,attribute:"selected-index"})],j.prototype,"selectedIndex",null),l([u()],j.prototype,"nativeError",void 0),l([u()],j.prototype,"nativeErrorText",void 0),l([u()],j.prototype,"focused",void 0),l([u()],j.prototype,"open",void 0),l([u()],j.prototype,"defaultFocus",void 0),l([c(".field")],j.prototype,"field",void 0),l([c("md-menu")],j.prototype,"menu",void 0),l([c("#label")],j.prototype,"labelEl",void 0),l([p({slot:"leading-icon",flatten:!0})],j.prototype,"leadingIcons",void 0);const H=B`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`;class L{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(t){this.menuItemController.setTypeaheadText(t)}get displayText(){return null!==this.internalDisplayText?this.internalDisplayText:this.menuItemController.typeaheadText}setDisplayText(t){this.internalDisplayText=t}constructor(t,e){this.host=t,this.internalDisplayText=null,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=t=>{this.menuItemController.onKeydown(t)},this.lastSelected=this.host.selected,this.menuItemController=new S(t,e),t.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?"true":"false")}hostUpdated(){this.lastSelected===this.host.selected||this.firstUpdate||(this.host.selected?this.host.dispatchEvent(new Event("request-selection",{bubbles:!0,composed:!0})):this.host.dispatchEvent(new Event("request-deselection",{bubbles:!0,composed:!0}))),this.lastSelected=this.host.selected,this.firstUpdate=!1}}const O=i(a);class N extends O{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value="",this.type="option",this.selectOptionController=new L(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(t){this.selectOptionController.setTypeaheadText(t)}get displayText(){return this.selectOptionController.displayText}set displayText(t){this.selectOptionController.setDisplayText(t)}render(){return this.renderListItem(s`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){return s`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||b}
        aria-selected=${this.ariaSelected||b}
        aria-checked=${this.ariaChecked||b}
        aria-expanded=${this.ariaExpanded||b}
        aria-haspopup=${this.ariaHasPopup||b}
        class="list-item ${x(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${t}</li
      >
    `}renderRipple(){return s` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return s` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return s`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}}N.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0},l([d({type:Boolean,reflect:!0})],N.prototype,"disabled",void 0),l([d({type:Boolean,attribute:"md-menu-item",reflect:!0})],N.prototype,"isMenuItem",void 0),l([d({type:Boolean})],N.prototype,"selected",void 0),l([d()],N.prototype,"value",void 0),l([c(".list-item")],N.prototype,"listItemRoot",void 0),l([p({slot:"headline"})],N.prototype,"headlineElements",void 0),l([p({slot:"supporting-text"})],N.prototype,"supportingTextElements",void 0),l([_({slot:""})],N.prototype,"defaultElements",void 0),l([d({attribute:"typeahead-text"})],N.prototype,"typeaheadText",null),l([d({attribute:"display-text"})],N.prototype,"displayText",null);let P=class extends N{};P.styles=[F],P=l([R("md-select-option")],P);export{j as S,H as s};
