import{V as e,N as t,O as i,Q as s,R as r,i as o,_ as a,n,r as d,e as c,W as l,X as h,Y as m,A as u,c as p,K as g,Z as b,$ as v,a0 as f,a1 as y,b as x,t as w,a2 as k,a3 as $,w as _,v as S,x as z,y as D,f as C,p as M,g as I,S as B,d as O,a as E,s as A,q as j,u as T}from"./CyOMU7b-.js";import"./DLNvVUrG.js";import"./VRm_2FXD.js";import{d as N}from"./CuDVc1pF.js";class H extends e{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,t){return e.checked===t.checked&&e.required===t.required}copy({checked:e,required:t}){return{checked:e,required:t}}}const R=t(i(s(r(o))));class Y extends R{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.required=!1,this.value="on",this.prevChecked=!1,this.prevDisabled=!1,this.prevIndeterminate=!1,this.addEventListener("click",e=>{l(e)&&this.input&&(this.focus(),h(this.input))})}update(e){(e.has("checked")||e.has("disabled")||e.has("indeterminate"))&&(this.prevChecked=e.get("checked")??this.checked,this.prevDisabled=e.get("disabled")??this.disabled,this.prevIndeterminate=e.get("indeterminate")??this.indeterminate),super.update(e)}render(){const e=!this.prevChecked&&!this.prevIndeterminate,t=this.prevChecked&&!this.prevIndeterminate,i=this.prevIndeterminate,s=this.checked&&!this.indeterminate,r=this.indeterminate,o=m({disabled:this.disabled,selected:s||r,unselected:!s&&!r,checked:s,indeterminate:r,"prev-unselected":e,"prev-checked":t,"prev-indeterminate":i,"prev-disabled":this.prevDisabled}),{ariaLabel:a,ariaInvalid:n}=this;return p`
      <div class="container ${o}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${r?"mixed":u}
          aria-label=${a||u}
          aria-invalid=${n||u}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `}handleInput(e){const t=e.target;this.checked=t.checked,this.indeterminate=t.indeterminate}handleChange(e){g(this,e)}[b](){return!this.checked||this.indeterminate?null:this.value}[v](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked="true"===e}[f](){return new H(()=>this)}[y](){return this.input}}Y.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0},a([n({type:Boolean})],Y.prototype,"checked",void 0),a([n({type:Boolean})],Y.prototype,"indeterminate",void 0),a([n({type:Boolean})],Y.prototype,"required",void 0),a([n()],Y.prototype,"value",void 0),a([d()],Y.prototype,"prevChecked",void 0),a([d()],Y.prototype,"prevDisabled",void 0),a([d()],Y.prototype,"prevIndeterminate",void 0),a([c("input")],Y.prototype,"input",void 0);const J=x`:host{border-start-start-radius:var(--md-checkbox-container-shape-start-start, var(--md-checkbox-container-shape, 2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end, var(--md-checkbox-container-shape, 2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end, var(--md-checkbox-container-shape, 2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start, var(--md-checkbox-container-shape, 2px));display:inline-flex;height:var(--md-checkbox-container-size, 18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size, 18px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size, 18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));border-style:solid;border-width:var(--md-checkbox-outline-width, 2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4))}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-checkbox-state-layer-size, 40px);inset:unset;width:var(--md-checkbox-state-layer-size, 40px);--md-ripple-hover-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12)}.selected md-ripple{--md-ripple-hover-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12)}.icon{fill:var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));height:var(--md-checkbox-icon-size, 18px);width:var(--md-checkbox-icon-size, 18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-hover-outline-width, 2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-focus-outline-width, 2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-pressed-outline-width, 2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-disabled-outline-width, 2px);opacity:var(--md-checkbox-disabled-container-opacity, 0.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity, 0.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff))}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}
`;J.styleSheet;let L=class extends Y{};L.styles=[J],L=a([w("md-checkbox")],L);const q=t(i(s(r(o))));class F extends q{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",this.addEventListener("click",e=>{l(e)&&this.input&&(this.focus(),h(this.input))}),k(this,"keydown"),this.addEventListener("keydown",e=>{$(e,()=>{e.defaultPrevented||"Enter"!==e.key||this.disabled||!this.input||this.input.click()})})}render(){return p`
      <div class="switch ${m(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||u}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return p`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${m(e)}">
          ${this.shouldShowIcons()?this.renderIcons():p``}
        </span>
      </span>
    `}renderIcons(){return p`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?p``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return p`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return p`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return p`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(e){const t=e.target;this.selected=t.checked}handleChange(e){g(this,e)}[b](){return this.selected?this.value:null}[v](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected="true"===e}[f](){return new H(()=>({checked:this.selected,required:this.required}))}[y](){return this.input}}F.shadowRootOptions={mode:"open",delegatesFocus:!0},a([n({type:Boolean})],F.prototype,"selected",void 0),a([n({type:Boolean})],F.prototype,"icons",void 0),a([n({type:Boolean,attribute:"show-only-selected-icon"})],F.prototype,"showOnlySelectedIcon",void 0),a([n({type:Boolean})],F.prototype,"required",void 0),a([n()],F.prototype,"value",void 0),a([c("input")],F.prototype,"input",void 0);const P=x`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;background:none;height:max(100%,var(--md-switch-touch-target-size, 48px));outline:none;margin:0;position:absolute;width:max(100%,var(--md-switch-touch-target-size, 48px));z-index:1;cursor:inherit;top:50%;left:50%;transform:translate(-50%, -50%)}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;P.styleSheet;let U=class extends F{};U.styles=[P],U=a([w("md-switch")],U);class G extends Event{static{this.eventType="item-drop"}constructor(e,t){super(G.eventType,{composed:!0,bubbles:!0}),this.hoverIndex=t,this.originIndex=e}}class K extends o{constructor(){super(...arguments),this.#e=!1,this.#t=!1,this.#i=!1,this.#s=!1,this.#r=!1,this.#o=0,this.#a=null,this.#n=null,this.mouseEvent=e=>{if(!this.disableDrag)return this.#d(e,"mouse")},this.touchEvent=e=>{if(!this.disableDrag)return this.#d(e,"touch")}}#e;get nudgeDown(){return this.#e}set nudgeDown(e){this.#e=e}#t;get nudgeUp(){return this.#t}set nudgeUp(e){this.#t=e}#i;get dragged(){return this.#i}set dragged(e){this.#i=e}#s;get dragging(){return this.#s}set dragging(e){this.#s=e}#r;get disableDrag(){return this.#r}set disableDrag(e){this.#r=e}#c;get scrollableContainer(){return this.#c}set scrollableContainer(e){this.#c=e}#o;get nudgeHeight(){return this.#o}set nudgeHeight(e){this.#o=e}#a;get hoverIndex(){return this.#a}set hoverIndex(e){this.#a=e}#n;get originIndex(){return this.#n}set originIndex(e){this.#n=e}static{this.styles=x`
    [drag] {
      cursor: grab;
    }

    md-elevation {
      transition-duration: 250ms;
      transition-timing-function: ease-in-out;
    }

    :host([disable-drag]) [drag] {
      cursor: inherit;
      opacity: 0.2;
    }

    :host([dragged]) md-elevation {
      --md-elevation-level: 3;
    }

    :host([dragged]) {
      transition: none;

      z-index: 5 !important;
      background-color: var(--md-sys-color-surface-container-high);
    }

    /* Only have transition under dragging, because we don't want nudged
     * items to transition into place once dragging is complete */
    :host([dragging]:not([dragged])) {
      transition: transform 0.2s ease-out;
    }
  `}get items(){return[]}get itemsContainer(){return null}updateDragProps(e,t,i,s){const r=this.items.indexOf(this);this.nudgeDown=null!==t&&null!==i&&r<t&&r>=i,this.nudgeUp=null!==t&&null!==i&&r>t&&r<=i,this.dragged=t===r,this.dragging=e,this.nudgeHeight=s}#l(e,t){for(let i=0;i<e.length;i++){if(t<=e[i])return i}return e.length-1}#h(e,t){const i=Math.max(t??0,e??0)+1;let s=Math.min(t??0,e??0)-1;return s=s<0?0:s,[i,s]}#m(e,t,i,s){const r=this.#h(e,t);for(let e=r[1];e<=r[0];e++){const t=this.items?.[e];t?.updateDragProps(i,this.originIndex,this.hoverIndex,s)}}#u(e,t){const i=this.#h(e,t);for(let e=i[1];e<=i[0];e++){const t=this.items?.[e];t?.updateDragProps(!1,null,null,0)}}#p(e,t){return e>10?t?1:2:e>5?t?1.5:4:t?2:6}#d(e,t){const i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if("mouse"===t&&1!==e.which)return;e.preventDefault();let s=0,r=0;this.dragging=!0,this.originIndex=this.items.indexOf(this);const o="touch"===t?"touchmove":"mousemove",a="touch"===t?"touchend":"mouseup",n=(e.pageY??e.touches[0].pageY)+this.scrollableContainer?.scrollTop,d=this.getBoundingClientRect().height;let c=0;const l=this.items.map(e=>(c+=e.getBoundingClientRect().height,c)),h=e=>{const t=e.pageY??e.touches[0].pageY,o=e.clientY??e.touches[0].clientY,a=e=>{const i=this.itemsContainer?.getBoundingClientRect()?.top??0,s=o-i;this.hoverIndex=this.#l(l,s),this.#m(this.originIndex,this.hoverIndex,this.dragging,d),s<l[l.length-1]&&(this.style.transform=`translateY(${t-n+e}px)`)};if(a(this.scrollableContainer?.scrollTop??0),this.scrollableContainer){const e=this.scrollableContainer?.getBoundingClientRect()?.top+window.scrollY,o=this.scrollableContainer?.getBoundingClientRect()?.bottom+window.scrollY,n=t-e,d=o-t,c=10,l=e=>{const t=performance.now();t-r>=c&&(a(this.scrollableContainer?.scrollTop),this.scrollableContainer.scrollBy(0,e),r=t)};if(n<20){clearInterval(s);const e=this.#p(n,i);l(-e),s=window.setInterval(()=>{l(-e)},c)}else if(d<20){clearInterval(s);const e=this.#p(d,i);l(e),s=window.setInterval(()=>{l(e)},c)}else clearInterval(s)}},m=()=>{clearInterval(s),document.removeEventListener(o,h),this.removeEventListener(a,u),this.dragging=!1;const e=()=>{this.#u(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",e)};this.addEventListener("transitionend",e),this.style.transition="transform 0.1s ease-out",this.style.transform="translate3d(0, 0, 0)",document.removeEventListener("mouseout",m)},u=()=>{clearInterval(s),s=0,this.dragging=!1,this.items.forEach(e=>e.dragging=!1),document.removeEventListener(o,h),document.removeEventListener(a,u),"mouse"===t&&document.removeEventListener("mouseout",m);const e=()=>{null!==this.originIndex&&null!==this.hoverIndex&&this.dispatchEvent(new G(this.originIndex,this.hoverIndex)),this.#u(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",e)};this.addEventListener("transitionend",e);const i=this.items.filter(e=>e.nudgeUp).map(e=>e.getBoundingClientRect().height>0?e.getBoundingClientRect().height-1:0).reduce((e,t)=>e+t,0),r=this.items.filter(e=>e.nudgeDown).map(e=>-e.getBoundingClientRect().height-1).reduce((e,t)=>e+t,0),n=0!==i?i:r;this.style.transition="transform 0.1s ease-out",this.style.transform=`translate3d(0, ${n}px, 0)`};"mouse"===t&&window.addEventListener("mouseout",m),document.addEventListener(a,u),document.addEventListener(o,h),h(e)}}a([n({type:Boolean,reflect:!0,attribute:"nudge-down"})],K.prototype,"nudgeDown",null),a([n({type:Boolean,reflect:!0,attribute:"nudge-up"})],K.prototype,"nudgeUp",null),a([n({type:Boolean,reflect:!0,attribute:"dragged"})],K.prototype,"dragged",null),a([n({type:Boolean,reflect:!0,attribute:"dragging"})],K.prototype,"dragging",null),a([n({type:Boolean,attribute:"disable-drag",reflect:!0})],K.prototype,"disableDrag",null),a([n({type:Object})],K.prototype,"scrollableContainer",null),a([d()],K.prototype,"nudgeHeight",null),a([d()],K.prototype,"hoverIndex",null),a([d()],K.prototype,"originIndex",null);let V=class extends K{#g="";get name(){return this.#g}set name(e){this.#g=e}#b=!1;get selected(){return this.#b}set selected(e){this.#b=e}#v=!1;get disabled(){return this.#v}set disabled(e){this.#v=e}get items(){return Array.from(this.parentElement?.querySelectorAll("titanium-data-table-core-settings-choose-columns-item")??[])}get itemsContainer(){return this.parentElement}static{this.styles=[K.styles,x`
      :host {
        display: grid;
        grid: 'icon label switch' / auto 1fr auto;
        user-select: none;

        font-size: 15px;
        line-height: 17px;

        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);

        position: relative;
        box-sizing: border-box;
      }

      :host(:last-of-type) {
        border-bottom: none;
      }

      md-switch {
        --md-switch-track-height: 24px;
        --md-switch-with-icon-handle-height: 20px;
        --md-switch-with-icon-handle-width: 20px;
        --md-switch-track-width: 40px;
      }
    `]}render(){return p`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <md-elevation></md-elevation>
      <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_handle</md-icon>
      <span>${this.name}</span>
      <md-switch
        ?selected=${this.selected}
        @change=${()=>{this.selected=!this.selected,this.dispatchEvent(new Event("changed"))}}
        icons
        show-only-selected-icon
        ?disabled=${this.disabled}
      ></md-switch>
    `}};a([n({type:String})],V.prototype,"name",null),a([n({type:Boolean})],V.prototype,"selected",null),a([n({type:Boolean})],V.prototype,"disabled",null),V=a([w("titanium-data-table-core-settings-choose-columns-item")],V);let W=class extends o{#f=null;get tableMetaData(){return this.#f}set tableMetaData(e){this.#f=e}#y=[];get userSettings(){return this.#y}set userSettings(e){this.#y=e}#x=!1;get customColumnsApplied(){return this.#x}set customColumnsApplied(e){this.#x=e}#w;get dialog(){return this.#w}set dialog(e){this.#w=e}updated(e){if(e.has("tableMetaData")&&(this.tableMetaData?.itemMetaData.some(e=>!this.userSettings.some(t=>t.key===e.key))&&this.resetColumns(),this.tableMetaData?.itemMetaData.length!==this.userSettings.length&&this.resetColumns()),e.has("userSettings")||e.has("tableMetaData")){const e=this.#k(this.userSettings,this.tableMetaData)>0;this.customColumnsApplied!==e&&(this.customColumnsApplied=e,this.dispatchEvent(new Event("custom-columns-applied-change")))}}#k(e,t){let i=0;for(const s of t?.itemMetaData??[]){const t=e.find(e=>e.key===s.key);t?.show&&s.hideByDefault&&i++,t?.show||s.hideByDefault||i++}return(e.some((e,i)=>e.key!==t?.itemMetaData[i].key)||t?.itemMetaData.some((t,i)=>t.key!==e[i].key))&&i++,i}resetColumns(){const e=this.tableMetaData?.itemMetaData.map(e=>({key:e.key,show:!e.hideByDefault}))??[];JSON.stringify(e)!==JSON.stringify(this.userSettings)&&(this.userSettings=e,this.dispatchEvent(new Event("setting-change")))}async show(){return this.dialog.returnValue="",this.dialog?.show(),await new Promise(e=>{this.#$=e})}#$;static{this.styles=[x`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100dvw - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;
      }

      form {
        display: grid;
      }
    `]}render(){return p` <md-dialog
      @open=${e=>{_(e.target),S(e.target)}}
      @close=${e=>{if("done"===e.target.returnValue||"navigation-close"===e.target.returnValue)return z(e.target),this.#$(e.target.returnValue);e.preventDefault()}}
    >
      <div slot="headline">Choose columns</div>

      <form
        slot="content"
        @item-drop=${e=>{e.stopPropagation();const t=this.userSettings??[],i=Math.min(e.hoverIndex,t.length-1);if(i!==e.originIndex){const s=t[e.originIndex];t.splice(e.originIndex,1),t.splice(i,0,s)}this.requestUpdate("userSettings"),this.dispatchEvent(new Event("setting-change"))}}
      >
        ${D(this.userSettings,e=>e.key,e=>p`
            <titanium-data-table-core-settings-choose-columns-item
              .name=${this.tableMetaData?.itemMetaData.find(t=>t.key===e.key)?.friendlyName??e.key}
              .selected=${e.show}
              .scrollableContainer=${this.dialog?.shadowRoot?.querySelector(".scroller")}
              ?disabled=${e.show&&1===this.userSettings.filter(e=>e.show).length}
              ?disable-drag=${1===this.userSettings.length}
              @changed=${t=>{e.show=t.target.selected,this.requestUpdate("userSettings"),this.dispatchEvent(new Event("setting-change"))}}
            ></titanium-data-table-core-settings-choose-columns-item>
          `)}
      </form>
      <div slot="actions">
        <md-filled-tonal-button @click=${()=>this.dialog?.close("done")}>Done</md-filled-tonal-button>
      </div>
    </md-dialog>`}};a([n({type:Object})],W.prototype,"tableMetaData",null),a([n({type:Array})],W.prototype,"userSettings",null),a([d()],W.prototype,"customColumnsApplied",null),a([c("md-dialog")],W.prototype,"dialog",null),W=a([w("titanium-data-table-core-settings-choose-columns-dialog")],W);let X=class extends K{#g="";get name(){return this.#g}set name(e){this.#g=e}#_;get sortDirection(){return this.#_}set sortDirection(e){this.#_=e}#S=0;get index(){return this.#S}set index(e){this.#S=e}#v=!1;get disabled(){return this.#v}set disabled(e){this.#v=e}get items(){return Array.from(this.parentElement?.querySelectorAll("data-table-core-settings-sort-item")??[])}get itemsContainer(){return this.parentElement}static{this.styles=[K.styles,C,M,I,x`
      :host {
        display: grid;
        grid: 'icon header gap select delete' / auto auto 1fr auto auto;
        user-select: none;

        font-size: 15px;
        line-height: 17px;

        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);

        position: relative;
        box-sizing: border-box;

        padding: 12px 0;

        label[disabled] span {
          opacity: 0.3;
        }
      }

      :host(:last-of-type) {
        border-bottom: none;
      }

      md-icon[drag] {
        grid-area: icon;
      }

      header {
        grid-area: header;

        h5[annotation] {
          opacity: 0.6;

          height: 16px;
          transition:
            opacity 0.2s ease-out,
            height 0.2s ease-out;
          transition-behavior: allow-discrete;
        }
      }

      md-icon-button[remove] {
        grid-area: delete;

        --md-icon-button-icon-color: var(--md-sys-color-error);
        --md-icon-button-pressed-icon-color: var(--md-sys-color-error);
        --md-icon-button-focus-icon-color: var(--md-sys-color-error);
        --md-icon-button-hover-icon-color: var(--md-sys-color-error);
      }

      md-filled-select {
        grid-area: select;
        --md-filled-field-top-space: 4px;
        --md-filled-field-bottom-space: 4px;
        --md-filled-field-content-size: 14px;
        --md-filled-field-label-text-populated-size: 11px;

        --md-filled-select-text-field-container-shape: 8px;
        --md-filled-select-text-field-active-indicator-height: 0;
        --md-filled-select-text-field-error-active-indicator-height: 0;
        --md-filled-select-text-field-hover-active-indicator-height: 0;
        --md-filled-select-text-field-focus-active-indicator-height: 0;
        --md-filled-select-text-field-disabled-active-indicator-height: 0;

        min-width: 142px;

        md-select-option {
          --md-menu-item-top-space: 6px;
          --md-menu-item-bottom-space: 6px;
          --md-menu-item-one-line-container-height: 36px;
          --md-menu-item-label-text-size: 14px;
        }
      }

      :host([dragging]) h5[annotation],
      :host([dragged]) h5[annotation] {
        opacity: 0;
        height: 0;
      }
    `]}render(){return p`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <md-elevation></md-elevation>
      <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_handle</md-icon>
      <header ellipsis>
        <h5 ellipsis annotation>${0===this.index?p`sort by`:p`then by`}</h5>
        <p ellipsis>${this.name}</p>
      </header>
      <md-filled-select
        ?disabled=${this.disabled}
        .value=${this.sortDirection}
        @change=${e=>{this.sortDirection=e.target.value,this.dispatchEvent(new Event("sort-direction-changed"))}}
      >
        <md-select-option value="asc"><span>Ascending</span></md-select-option>
        <md-select-option value="desc"><span>Descending</span> </md-select-option>
      </md-filled-select>
      <md-icon-button ?disabled=${this.disabled} remove @click=${()=>this.dispatchEvent(new Event("delete"))}><md-icon>close_small</md-icon></md-icon-button>
    `}};a([n({type:String})],X.prototype,"name",null),a([n({type:String,reflect:!0,attribute:"sort-direction"})],X.prototype,"sortDirection",null),a([n({type:Number})],X.prototype,"index",null),a([n({type:Boolean,reflect:!0})],X.prototype,"disabled",null),X=a([w("data-table-core-settings-sort-item")],X);const Z=x`
  nice-badge {
    box-sizing: border-box;

    background-color: var(--md-sys-color-error);
    color: var(--md-sys-color-on-error);

    display: grid;
    place-content: center;
    border-radius: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;

    font-family: Metropolis;

    padding: 1px 4px;
    border: 1px solid transparent;
    min-width: 8px;
    min-height: 8px;

    position: absolute;
    top: -1px;
    right: -1px;

    height: initial;
    width: initial;
  }

  nice-badge[primary] {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
  }

  nice-badge[secondary] {
    background-color: var(--md-sys-color-secondary);
    color: var(--md-sys-color-on-secondary);
  }

  nice-badge[green] {
    background-color: var(--app-accent-color-green-light);
    color: var(--app-accent-color-on-green-light);
  }

  nice-badge[compact] {
    padding: 1px 2px;

    font-size: 12px;
    line-height: 12px;
  }
`;let Q=class extends o{#f=null;get tableMetaData(){return this.#f}set tableMetaData(e){this.#f=e}#w;get dialog(){return this.#w}set dialog(e){this.#w=e}#z;get addMenu(){return this.#z}set addMenu(e){this.#z=e}#D=[];get sort(){return this.#D}set sort(e){this.#D=e}#C=[];async show(e){return this.#C=structuredClone(e),this.sort=structuredClone(e),this.dialog.returnValue="",this.dialog?.show(),await new Promise(e=>{this.#$=e})}hasChanges(e,t){return JSON.stringify(e)!==JSON.stringify(t)}#M;#$;static{this.styles=[M,Z,x`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100dvw - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;
      }

      main {
        display: grid;

        data-table-core-settings-sort-item {
          z-index: 0;
        }

        p[no-sort] {
          opacity: 0.8;
          text-align: center;
        }
      }

      div[slot='headline'] {
        display: grid;
        gap: 0px;

        p {
          font-size: 13px;
          line-height: 14px;
          opacity: 0.8;
        }
      }

      add-container {
        display: grid;
        position: relative;
      }

      md-menu-item {
        --md-menu-item-top-space: 6px;
        --md-menu-item-bottom-space: 6px;
        --md-menu-item-one-line-container-height: 36px;
        --md-menu-item-label-text-size: 14px;
      }

      div[slot='actions'] {
        display: flex;
        justify-content: space-between;
        gap: 8px;
      }
    `]}render(){const e=this.tableMetaData?.itemMetaData.filter(e=>!e.disableSort&&!this.sort.some(t=>t.key===e.key))??[];return p` <md-dialog
      @open=${e=>{_(e.target),S(e.target)}}
      @close=${e=>{if("apply"===e.target.returnValue||"cancel"===e.target.returnValue||"navigation-close"===e.target.returnValue)return z(e.target),this.#$(e.target.returnValue);e.preventDefault()}}
    >
      <div slot="headline">
        <div>Advanced sort</div>
        <p>Max ${this.tableMetaData?.maxCustomSortColumns??4} sort columns</p>
      </div>
      <main slot="content">
        <form
          @item-drop=${e=>{e.stopPropagation();const t=this.sort??[],i=Math.min(e.hoverIndex,t.length-1);if(i!==e.originIndex){const s=t[e.originIndex];t.splice(e.originIndex,1),t.splice(i,0,s)}this.requestUpdate("sort")}}
        >
          ${this.sort.length?D(this.sort,e=>e.key,(e,t)=>p`<data-table-core-settings-sort-item
                    .index=${t}
                    .name=${this.tableMetaData?.itemMetaData.find(t=>t.key===e.key)?.friendlyName??e.key}
                    sort-direction=${e.direction}
                    .scrollableContainer=${this.dialog?.shadowRoot?.querySelector(".scroller")}
                    ?disable-drag=${1===this.sort.length}
                    @sort-direction-changed=${e=>{this.sort[t].direction=e.target.sortDirection,this.requestUpdate("sort")}}
                    @delete=${()=>{this.sort.splice(t,1),this.requestUpdate("sort")}}
                  ></data-table-core-settings-sort-item>`):p`<p no-sort>No sort columns</p>`}
        </form>
      </main>
      <div slot="actions">
        <add-container>
          <md-text-button
            ?disabled=${this.sort.length>=(this.tableMetaData?.maxCustomSortColumns??4)}
            id="menu-anchor"
            leading-icon
            @click=${e=>{e.preventDefault();const t=e.target.getRootNode().querySelector("#menu");t.open=!t.open}}
          >
            <span>Add sort column</span>
            <md-icon slot="icon">add</md-icon>
          </md-text-button>

          <md-menu
            id="menu"
            anchor="menu-anchor"
            @opened=${()=>{this.#M=()=>this.addMenu.reposition(),document.addEventListener("scroll",this.#M,{passive:!0})}}
            @closed=${()=>document.removeEventListener("scroll",this.#M)}
            positioning="popover"
            @close-menu=${e=>{e.detail.itemPath?.[0]?.action?.()}}
          >
            ${D(e,e=>e.key,e=>p`<md-menu-item
                  .action=${()=>{this.sort.push({key:e.key,direction:"asc"}),this.requestUpdate("sort")}}
                >
                  <md-icon slot="start">sort_by_alpha</md-icon>
                  ${e.friendlyName??e.key}
                </md-menu-item>`)}
          </md-menu>
        </add-container>
        <div>
          <md-text-button @click=${()=>this.dialog?.close("cancel")}>Cancel</md-text-button>
          <md-filled-tonal-button
            ?disabled=${!this.hasChanges(this.sort,this.#C)}
            @click=${()=>{this.dialog?.close("apply"),this.dispatchEvent(new Event("sort-changed"))}}
            >Apply</md-filled-tonal-button
          >
        </div>
      </div>
    </md-dialog>`}};a([n({type:Object})],Q.prototype,"tableMetaData",null),a([c("md-dialog")],Q.prototype,"dialog",null),a([c("md-menu")],Q.prototype,"addMenu",null),a([d()],Q.prototype,"sort",null),Q=a([w("titanium-data-table-core-settings-sort-dialog")],Q);const ee=x`
  [supporting-text] {
    font-size: 12px;
    line-height: 14px;
    opacity: 0.8;
  }

  [indicator] {
    display: inline-grid;
    place-content: center;
    width: fit-content;
    max-width: 88px;
    border-radius: 16px;
    padding: 2px 10px;
    font-size: 13px;
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface-variant);
  }

  [indicator][green] {
    background-color: var(--app-accent-color-green);
    color: var(--app-accent-color-on-green);
  }

  [indicator][red] {
    background-color: var(--md-sys-color-error);
    color: var(--md-sys-color-on-error);
  }

  two-line {
    display: grid;
    grid-auto-flow: row;
    gap: 0;
  }

  image-row {
    display: grid;
    grid: 'image label' / auto 1fr;
    align-items: center;
    gap: 0 12px;

    md-icon {
      grid-area: image;
      --md-icon-size: 32px;
    }

    img {
      grid-area: image;
      height: 32px;
      width: 32px;
      image-rendering: -webkit-optimize-contrast;
    }

    profile-picture {
      grid-area: image;
    }

    [supporting-text] {
      grid-area: supporting-text;
    }
  }

  image-row:has([supporting-text]) {
    grid:
      'image label'
      'image supporting-text' / auto 1fr;
  }
`;let te=class extends K{#I;get item(){return this.#I}set item(e){this.#I=e}#f=null;get tableMetaData(){return this.#f}set tableMetaData(e){this.#f=e}#B=null;get supplementalItemStyles(){return this.#B}set supplementalItemStyles(e){this.#B=e}get items(){return Array.from(this.parentElement?.querySelectorAll("titanium-data-table-core-reorder-item")??[])}get itemsContainer(){return this.parentElement}static{this.styles=[K.styles,x`
      :host {
        display: grid;
        box-sizing: border-box;
      }

      main {
        display: grid;
        grid: 'label icon' / 1fr 48px;
        user-select: none;

        font-size: 15px;
        line-height: 17px;

        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
        border-top: 1px solid var(--md-sys-color-outline-variant);

        padding: 0 8px;

        position: relative;
        box-sizing: border-box;

        margin-bottom: -1px;
      }

      :host(:last-of-type) {
        border-bottom: none;
      }

      md-icon {
        grid-area: icon;
        display: grid;
        place-items: center;
        height: 48px;
        width: 48px;
        animation: wobble 0.4s ease-in-out infinite alternate;
        transform-origin: center center;
      }

      label-container {
        grid-area: label;

        display: grid;
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        padding: 6px 0;
        align-items: center;
        margin: 0;
      }

      @keyframes wobble {
        0%,
        100% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(1deg) translateX(1px);
        }
        50% {
          transform: rotate(-1deg) translateX(-1px);
        }
        75% {
          transform: rotate(1deg) translateX(1px);
        }
      }

      :host(:nth-child(even)) {
        md-icon {
          animation-delay: 100ms;
        }
      }

      :host(:nth-child(odd)) {
        md-icon {
          animation-delay: 150ms;
        }
      }
      :host([disable-drag]),
      :host(:hover) {
        md-icon {
          animation: none;
        }
      }
    `]}render(){return p`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }

        label-container{
          ${this.supplementalItemStyles?this.supplementalItemStyles:u};
          ${ee||u};
        }
      </style>
      <main>
        <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_handle</md-icon>
        <label-container
          >${this.tableMetaData?.itemMetaData.find(e=>e.key===this.tableMetaData?.reorderConfig?.reorderItemDisplayKey)?.render(this.item)??""}
        </label-container>
        <md-elevation></md-elevation>
      </main>
    `}};a([n({type:Object})],te.prototype,"item",null),a([n({type:Object})],te.prototype,"tableMetaData",null),a([n({type:Object})],te.prototype,"supplementalItemStyles",null),te=a([w("titanium-data-table-core-reorder-item")],te);let ie=class extends o{#O=!1;get isLoading(){return this.#O}set isLoading(e){this.#O=e}#f=null;get tableMetaData(){return this.#f}set tableMetaData(e){this.#f=e}#B=null;get supplementalItemStyles(){return this.#B}set supplementalItemStyles(e){this.#B=e}#w;get dialog(){return this.#w}set dialog(e){this.#w=e}#E;get snackbar(){return this.#E}set snackbar(e){this.#E=e}#A=[];get items(){return this.#A}set items(e){this.#A=e}#j=[];async show(e){const t=structuredClone(e),i=this.tableMetaData?.reorderConfig?.sortPropertyKey;if(i){t.every(e=>"number"==typeof e[i])?t.sort((e,t)=>e[i]-t[i]):t.sort((e,t)=>e[i].toString().localeCompare(t[i].toString()))}return this.items=t,this.#j=structuredClone(t),this.dialog.returnValue="",this.dialog?.show(),await new Promise(e=>{this.#$=e})}hasChanges(e,t){return JSON.stringify(e)!==JSON.stringify(t)}#$;static{this.styles=[x`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100dvw - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;
      }

      form {
        display: grid;
        padding: 12px 8px;
      }

      md-circular-progress {
        --md-circular-progress-size: 28px;
      }
    `]}render(){return p` <md-dialog
      @open=${e=>{_(e.target),S(e.target)}}
      @close=${e=>{if("apply"===e.target.returnValue||"cancel"===e.target.returnValue||"navigation-close"===e.target.returnValue)return z(e.target),this.snackbar.dismissAll(),this.#$(e.target.returnValue);e.preventDefault()}}
    >
      <div slot="headline">Reorder items</div>
      <form
        slot="content"
        @item-drop=${e=>{e.stopPropagation();const t=this.items??[],i=Math.min(e.hoverIndex,t.length-1);if(i!==e.originIndex){const s=t[e.originIndex];t.splice(e.originIndex,1),t.splice(i,0,s)}this.requestUpdate("items")}}
      >
        ${D(this.items,e=>this.tableMetaData?.uniqueKey(e),e=>p`
            <titanium-data-table-core-reorder-item
              ?disable-drag=${this.isLoading}
              .item=${e}
              .tableMetaData=${this.tableMetaData}
              .supplementalItemStyles=${this.supplementalItemStyles}
              .scrollableContainer=${this.dialog?.shadowRoot?.querySelector(".scroller")}
            ></titanium-data-table-core-reorder-item>
          `)}
        <titanium-snackbar-stack .eventListenerTarget=${this}></titanium-snackbar-stack>
      </form>
      <div slot="actions">
        <md-text-button @click=${()=>this.dialog?.close("cancel")} ?disabled=${this.isLoading}>Cancel</md-text-button>
        <md-filled-tonal-button
          trailing-icon
          ?disabled=${this.isLoading||!this.hasChanges(this.items,this.#j)}
          @click=${async()=>{let e=()=>{},t=()=>{};const i=new Promise((i,s)=>{e=i,t=s});this.trackLoadingPromise(i),this.dispatchEvent(new CustomEvent("reorder-save-request",{detail:{resolve:e,reject:t,items:this.items}}));try{await i,this.dialog?.close("apply")}catch(e){this.dispatchEvent(new B(e))}}}
          >Save
          ${this.isLoading?p`<md-circular-progress slot="icon" indeterminate></md-circular-progress>`:p` <md-icon slot="icon">save</md-icon>`}</md-filled-tonal-button
        >
      </div>
    </md-dialog>`}};var se,re;a([O("trackLoadingPromise"),d()],ie.prototype,"isLoading",null),a([n({type:Object})],ie.prototype,"tableMetaData",null),a([n({type:Object})],ie.prototype,"supplementalItemStyles",null),a([c("md-dialog")],ie.prototype,"dialog",null),a([c("titanium-snackbar-stack")],ie.prototype,"snackbar",null),a([d()],ie.prototype,"items",null),ie=a([w("titanium-data-table-core-reorder-dialog")],ie),(re=se||(se={})).csv="text/csv",re.tsv="text/tab-separated-values",re.plain="text/plain";var oe=e=>e,ae=e=>e,ne=oe,de=oe,ce=oe,le=oe,he=oe,me={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:se.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},ue=e=>Object.assign({},me,e);class pe extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class ge extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class be extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class ve extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var fe=e=>le("object"==typeof e?e.key:e),ye=e=>he("object"==typeof e?e.displayLabel:e),xe=e=>t=>de(e+t+"\r\n"),we=e=>(t,i)=>ke(e)(ce(t+i)),ke=e=>t=>t+e.fieldSeparator,$e=(e,t)=>{if((e=>+e===e&&(!isFinite(e)||Boolean(e%1)))(t)){if("locale"===e.decimalSeparator)return ne(t.toLocaleString());if(e.decimalSeparator)return ne(t.toString().replace(".",e.decimalSeparator))}return ne(t.toString())},_e=(e,t)=>{let i=t;return(e.quoteStrings||e.fieldSeparator&&t.indexOf(e.fieldSeparator)>-1||e.quoteCharacter&&t.indexOf(e.quoteCharacter)>-1||t.indexOf("\n")>-1||t.indexOf("\r")>-1)&&(i=e.quoteCharacter+function(e,t){return'"'==t&&e.indexOf('"')>-1?e.replace(/"/g,'""'):e}(t,e.quoteCharacter)+e.quoteCharacter),ne(i)},Se=(e,t)=>{if("number"==typeof t)return $e(e,t);if("string"==typeof t)return _e(e,t);if("boolean"==typeof t&&e.boolDisplay)return((e,t)=>{const i=t?"true":"false";return ne(e.boolDisplay[i])})(e,t);if(null==t)return((e,t)=>void 0===t&&void 0!==e.replaceUndefinedWith?_e(e,e.replaceUndefinedWith+""):_e(e,null===t?"null":""))(e,t);throw new ve(`\n    typeof ${typeof t} isn't supported. Only number, string, boolean, null and undefined are supported.\n    Please convert the data in your object to one of those before generating the CSV.\n    `)},ze=e=>t=>{const i=ue(e),s=i.useKeysAsHeaders?Object.keys(t[0]):i.columnHeaders;let r=((e,...t)=>t.reduce((e,t)=>t(e),e))(de(""),(e=>t=>e.useBom?de(t+"\ufeff"):t)(i),(e=>t=>e.showTitle?xe(de(t+e.title))(ce("")):t)(i),((e,t)=>i=>{if(!e.showColumnHeaders)return i;if(t.length<1)throw new ge("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let s=ce("");for(let i=0;i<t.length;i++){const r=ye(t[i]);s=we(e)(s,Se(e,ae(r)))}return s=ce(s.slice(0,-1)),xe(i)(s)})(i,s),((e,t,i)=>s=>{let r=s;for(var o=0;o<i.length;o++){let s=ce("");for(let r=0;r<t.length;r++){const a=fe(t[r]),n=i[o][ae(a)];s=we(e)(s,Se(e,n))}s=ce(ae(s).slice(0,-1)),r=xe(r)(s)}return r})(i,s,t));if(r.length<1)throw new pe("Output is empty. Is your data formatted correctly?");return r},De=e=>t=>{if(!window)throw new be("Downloading only supported in a browser environment.");const i=(e=>t=>{const i=ue(e),s=t,r=i.useTextFile?"text/plain":i.mediaType;return new Blob([s],{type:`${r};charset=utf8;`})})(e)(t),s=ue(e),r=s.useTextFile?"txt":s.fileExtension,o=`${s.filename}.${r}`,a=document.createElement("a");a.download=o,a.href=URL.createObjectURL(i),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)};function Ce(e){return e?.itemMetaData.filter(e=>e.defaultSort).sort((e,t)=>(e.defaultSort?.position??0)-(t.defaultSort?.position??0)).map(e=>({key:e.key,direction:e.defaultSort?.direction??"asc"}))??[]}let Me=class extends o{#O=!1;get isLoading(){return this.#O}set isLoading(e){this.#O=e}#A=[];get items(){return this.#A}set items(e){this.#A=e}#f=null;get tableMetaData(){return this.#f}set tableMetaData(e){this.#f=e}#B=null;get supplementalItemStyles(){return this.#B}set supplementalItemStyles(e){this.#B=e}#v=!1;get disabled(){return this.#v}set disabled(e){this.#v=e}#T=!1;get stickyHeader(){return this.#T}set stickyHeader(e){this.#T=e}#N="none";get selectionMode(){return this.#N}set selectionMode(e){this.#N=e}#b=[];get selected(){return this.#b}set selected(e){this.#b=e}#H;get chooseColumnsDialog(){return this.#H}set chooseColumnsDialog(e){this.#H=e}#R;get sortDialog(){return this.#R}set sortDialog(e){this.#R=e}#Y;get reorderDialog(){return this.#Y}set reorderDialog(e){this.#Y=e}#J="dtc-pref";get localStorageKey(){return this.#J}set localStorageKey(e){this.#J=e}#L=!1;get customSortApplied(){return this.#L}set customSortApplied(e){this.#L=e}#x=!1;get customColumnsApplied(){return this.#x}set customColumnsApplied(e){this.#x=e}get sort(){const e=window.localStorage.getItem(`${this.localStorageKey}-user-sort`);return null===e?Ce(this.tableMetaData):JSON.parse(e??"[]")||[]}set sort(e){localStorage.setItem(`${this.localStorageKey}-user-sort`,JSON.stringify(e))}get userSettings(){return JSON.parse(window.localStorage.getItem(`${this.localStorageKey}-user-settings`)??"[]")||[]}set userSettings(e){localStorage.setItem(`${this.localStorageKey}-user-settings`,JSON.stringify(e))}updated(e){if(e.has("items")&&e.get("items")!==this.items&&this.deselectAll(),e.has("sort")||e.has("tableMetaData")){const e=Ce(this.tableMetaData),t=JSON.stringify(e)!==JSON.stringify(this.sort);this.customSortApplied!==t&&(this.customSortApplied=t)}}selectAll(){"multi"===this.selectionMode&&(this.selected=this.items,this.#q())}deselectAll(){this.selected.length>0&&(this.selected=[],this.#q())}resetSort(){const e=Ce(this.tableMetaData);JSON.stringify(e)!==JSON.stringify(this.sort)&&(this.sort=e,this.dispatchEvent(new Event("sort-changed")))}loadWhile(e){return this.trackLoadingPromise(e)}#q(){this.dispatchEvent(new Event("selected-changed",{composed:!0}))}orderByUserPreference(e,t){return e.sort((e,i)=>{const s=t.findIndex(t=>t.key===e.key),r=t.findIndex(e=>e.key===i.key);return s-r})}static{this.styles=[E,Z,x`
      :host {
        display: grid;

        --titanium-data-table-core-background-color: var(--md-sys-color-surface-container-lowest, #1d1b20);
        background-color: var(--titanium-data-table-core-background-color);
        overflow: auto;
        z-index: 0;
      }

      table {
        border-spacing: 0;
        border-collapse: separate;

        background-color: inherit;
        align-self: start;
      }

      content-container {
        display: grid;
        height: 100%;
        box-sizing: border-box;
        background-color: var(--titanium-data-table-core-background-color);
      }

      :host([sticky-header]) {
        thead th:not([settings]) {
          position: sticky;
          top: 0;
          z-index: 3;
        }
      }

      table[has-selected-items] {
        tr {
          cursor: pointer;
        }
      }

      thead {
        tr {
          th[settings] {
            width: 48px;
            height: 48px;
            padding: 0;
            position: sticky;
            left: 0;
            top: 0;
            z-index: 4;

            content-container {
              nice-badge {
                transition: opacity 250ms ease;
              }
              md-icon-button {
                --md-icon-button-icon-size: 22px;
                --md-icon-button-state-layer-height: 32px;
                --md-icon-button-state-layer-width: 32px;
                padding: 8px;

                md-icon {
                  transition: transform 350ms ease;
                }

                nice-badge {
                  top: initial;
                  top: 2px;
                  right: 2px;
                }
              }

              md-menu[open] + md-icon-button {
                md-icon {
                  transform: rotate(120deg);
                }
                nice-badge {
                  opacity: 0;
                }
              }

              md-menu[open] md-menu-item {
                nice-badge {
                  opacity: 1;
                }
              }

              md-menu-item {
                --md-menu-item-top-space: 6px;
                --md-menu-item-bottom-space: 6px;
                --md-menu-item-one-line-container-height: 36px;
                --md-menu-item-two-line-container-height: 36px;
                --md-menu-item-label-text-size: 14px;
                text-align: left;

                [small] {
                  font-size: 12px;
                  line-height: 12px;
                  opacity: 0.8;
                }

                nice-badge {
                  top: 5px;
                  left: 35px;
                  right: initial;
                  opacity: 0;
                }
              }
            }
          }

          th {
            border-bottom: 1px var(--md-sys-color-outline-variant) solid;
            padding: 0;

            button {
              display: grid;
              grid: 'text icon blank' / auto auto 1fr;
              width: 100%;
              align-items: center;

              position: relative;
              --md-focus-ring-shape: 0;
              border-radius: 0;

              font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
              font-size: 14px;

              line-height: 28px;
              font-weight: 500;
              height: 100%;
              padding: 12px 6px 12px 6px;
              margin: 0;

              /* override default button styles */
              text-align: inherit;

              background-color: var(--md-sys-color-surface-container-lowest);
              color: inherit;

              border: none;
              outline: none;
              height: 48px;

              white-space: nowrap;

              icon-container {
                display: grid;
                position: relative;
                margin-left: 4px;
                visibility: hidden;

                height: 18px;
                width: 18px;

                div[sort-number] {
                  font-size: 8px;
                  line-height: 8px;
                  position: absolute;
                  bottom: -2px;
                  right: 0;
                }

                md-icon {
                  display: block;
                  height: 18px;
                  width: 18px;
                  font-size: 18px;

                  transform-origin: center;
                  transition: transform 150ms ease;
                }
              }
            }

            button[active-sort][sort-direction='asc'] md-icon {
              transform: rotate(-180deg);
            }

            button[active-sort] icon-container,
            button[active-sort] icon-container {
              visibility: visible;
            }

            button:not([disabled]) {
              cursor: pointer;
            }

            button:focus,
            button:active {
              outline: none;
              box-shadow: none;
            }
          }
        }
      }

      tbody {
        @-moz-document url-prefix() {
          /* hack: FF to fill 100% in a TD */
          tr {
            height: 1px !important;
          }
        }

        tr {
          @-moz-document url-prefix() {
            /* hack: FF to fill 100% in a TD */
            td {
              height: 100% !important;
            }
          }

          td {
            background-color: var(--titanium-data-table-core-background-color);

            border-bottom: 1px var(--md-sys-color-outline-variant) solid;
            padding: 0;
            box-sizing: border-box;
            /* hack: Chrome/Safari to fill 100% in a TD */
            height: 1px;

            content-container {
              font-size: 14px;
              line-height: 18px;
              font-weight: 400;
              padding: 6px 6px 6px 6px;
              align-items: center;
              margin: 0;
            }
          }

          td[checkbox] {
            width: 48px;
            position: sticky;
            left: 0;

            z-index: 1;

            content-container {
              display: grid;
              padding: 0;

              md-checkbox {
                padding: 15px;
                --md-checkbox-container-shape: 6px;
                --md-focus-ring-shape: 12px;
                --md-checkbox-state-layer-shape: 12px;
                --md-checkbox-state-layer-size: 32px;
              }

              md-checkbox::part(focus-ring) {
                height: 32px;
                width: 32px;
              }
            }
          }
        }

        tr[selected] content-container,
        tr[selected] td {
          background-color: var(--md-sys-color-secondary-container);
        }

        tr[link-url] {
          cursor: pointer;
        }
      }

      :host(:not([disabled])) tbody tr[link-url]:hover td content-container {
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08) !important;
      }

      td[table-message]:hover,
      td[table-message] {
        vertical-align: middle;
        border: none !important;
        opacity: 0.8;
        font-size: 14px;
        line-height: 14px;
        padding: 12px 6px;
      }

      tr:last-of-type td {
        border-bottom: none !important;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return p`
      <style>
        tbody{
          tr{
            td{
              content-container{
                ${this.supplementalItemStyles?this.supplementalItemStyles:u};
                ${ee||u};
              }
            }
          }
        }
      </style>
      <table part="table" ?has-selected-items=${this.selected.length>0}>
        <thead>
          <tr>
            <th settings>
              <content-container>
                <md-menu
                  id="menu"
                  positioning="popover"
                  anchor="menu-anchor"
                  y-offset="-10"
                  x-offset="16"
                  @close-menu=${e=>{e.detail.itemPath?.[0]?.action?.()}}
                >
                  ${"none"===this.selectionMode||"single"===this.selectionMode&&!this.selected.length?u:p` <md-menu-item
                          .action=${()=>{this.selected.length>0?this.deselectAll():this.selectAll()}}
                        >
                          <md-icon slot="start">${this.selected.length>0?"deselect":"select_all"}</md-icon>
                          <div slot="headline">${this.selected.length>0?"Deselect all":"Select all"}</div>
                        </md-menu-item>
                        <md-divider role="separator" tabindex="-1"></md-divider>`}

                  <md-menu-item .action=${()=>this.chooseColumnsDialog.show()}>
                    <md-icon slot="start">table_edit</md-icon>
                    ${this.customColumnsApplied?p`<nice-badge compact slot="start"></nice-badge>`:u}
                    <div slot="headline">Choose columns</div>
                  </md-menu-item>
                  <md-menu-item .action=${()=>this.chooseColumnsDialog.resetColumns()} ?disabled=${!this.customColumnsApplied}>
                    <md-icon style="visibility:hidden" slot="start">reset_settings</md-icon>
                    <div slot="headline">Reset columns</div>
                  </md-menu-item>
                  <md-divider role="separator" tabindex="-1"></md-divider>

                  <md-menu-item
                    .action=${async()=>{"apply"===await this.sortDialog.show(this.sort)&&(this.sort=structuredClone(this.sortDialog.sort),this.dispatchEvent(new Event("sort-changed")))}}
                  >
                    <md-icon slot="start">sort_by_alpha</md-icon>
                    ${this.customSortApplied?p`<nice-badge compact slot="start"></nice-badge>`:u}
                    <div slot="headline">Customize sort</div>
                  </md-menu-item>
                  <md-menu-item .action=${()=>this.resetSort()} ?disabled=${!this.customSortApplied}>
                    <md-icon style="visibility:hidden" slot="start">reset_settings</md-icon>
                    <div slot="headline">Reset sort</div>
                  </md-menu-item>

                  ${this.tableMetaData?.reorderConfig?.reorderItemDisplayKey&&this.tableMetaData?.reorderConfig?.sortPropertyKey?p` <md-divider role="separator" tabindex="-1"></md-divider>
                        <md-menu-item
                          .action=${async()=>{"apply"===await this.reorderDialog.show(this.items)&&(structuredClone(this.reorderDialog.items),this.dispatchEvent(new CustomEvent("items-reordered",{detail:this.items})))}}
                        >
                          <md-icon slot="start">drag_handle</md-icon>
                          <div slot="headline">Reorder items</div>
                        </md-menu-item>`:u}
                  ${this.items.length>0?p`<md-divider role="separator" tabindex="-1"></md-divider>
                        <md-menu-item
                          .action=${()=>{const e=N().format("YYYY-MM-DD HH-mm-ss"),t=ue({filename:`web export ${e}`,useKeysAsHeaders:!0}),i=this.orderByUserPreference(this.tableMetaData?.itemMetaData?.filter(e=>(!e.hideByDefault&&this.userSettings.find(t=>t.key===e.key)?.show||this.userSettings.find(t=>t.key===e.key)?.show)&&!e.omitFromCsv)??[],this.userSettings)??[],s=this.items.map(e=>{const t={};for(const s of i){t[s.friendlyName??s.key]=s.csvValue?s.csvValue(e):e[s.key]}return t})??[],r=ze(t)(s);De(t)(r)}}
                        >
                          <md-icon slot="start">file_save</md-icon>
                          <div slot="headline">Save to CSV</div>
                          <span small slot="supporting-text">${this.items.length} row${1===this.items.length?"":"s"}</span>
                        </md-menu-item>`:u}

                  <slot name="settings-menu-items"></slot>
                </md-menu>
                <md-icon-button
                  id="menu-anchor"
                  ?disabled=${this.isLoading}
                  @click=${e=>{e.preventDefault();const t=e.target.getRootNode().querySelector("#menu");t.open=!t.open}}
                >
                  <md-icon>settings</md-icon>
                  ${this.customSortApplied||this.customColumnsApplied?p`<nice-badge compact></nice-badge>`:u}
                </md-icon-button>
              </content-container>
            </th>
            ${D(this.orderByUserPreference(this.tableMetaData?.itemMetaData?.filter(e=>!e.hideByDefault&&this.userSettings.find(t=>t.key===e.key)?.show||this.userSettings.find(t=>t.key===e.key)?.show)??[],this.userSettings)??[],e=>e.key,e=>{const t=this.sort.find(t=>t.key===e.key),i=this.sort.findIndex(t=>t.key===e.key),s=this.tableMetaData?.itemMetaData?.find(t=>t.key===e.key)?.width;return p`<th style=${s?A({minWidth:s}):u}>
                  <button
                    ?active-sort=${-1!==i}
                    sort-direction=${t?.direction||u}
                    ?disabled=${this.disabled||e.disableSort}
                    @click=${()=>{this.sort=[{key:e.key,direction:"asc"===this.sort?.[0]?.direction?"desc":"asc"}],this.dispatchEvent(new Event("sort-changed"))}}
                  >
                    <span>${e.friendlyName??e.key??"-"}</span>
                    <icon-container
                      ><md-icon>arrow_downward</md-icon>
                      ${-1!==i&&this.sort.length>1?p`<div sort-number>${i+1}</div>`:u}
                    </icon-container>
                    <md-ripple ?disabled=${this.disabled||e.disableSort}></md-ripple>
                    <md-focus-ring inward></md-focus-ring>
                  </button>
                </th>`})}
          </tr>
        </thead>
        <tbody>
          ${this.isLoading||0!==this.items.length?u:p`
                <tr>
                  <td table-message></td>
                  <td table-message colspan=${this.tableMetaData?.itemMetaData?.length??0}>No results</td>
                </tr>
              `}
          ${D(this.items??[],e=>this.tableMetaData?.uniqueKey(e)??"",e=>p`
                <tr
                  ?link-url=${this.tableMetaData?.itemLinkUrl?.(e)||this.tableMetaData?.itemClickHandler}
                  ?selected=${this.selected.includes(e)}
                  @click=${()=>{0===this.selected.length?this.tableMetaData?.itemClickHandler?this.tableMetaData.itemClickHandler(e):this.tableMetaData?.itemLinkUrl?.(e)&&window.navigation.navigate(this.tableMetaData.itemLinkUrl(e)??""):"single"===this.selectionMode?(this.selected=[e],this.requestUpdate("selected"),this.#q()):"multi"===this.selectionMode&&(this.selected.includes(e)?this.selected.splice(this.selected.indexOf(e),1):this.selected.push(e),this.requestUpdate("selected"),this.#q())}}
                >
                  <td checkbox>
                    <content-container>
                      ${"none"!==this.selectionMode?p`
                            <md-checkbox
                              @click=${e=>e.stopPropagation()}
                              ?checked=${this.selected.includes(e)}
                              @change=${()=>{this.selected.includes(e)?this.selected.splice(this.selected.indexOf(e),1):"single"===this.selectionMode?this.selected=[e]:this.selected.push(e),this.requestUpdate("selected"),this.#q()}}
                              ?disabled=${this.disabled}
                            ></md-checkbox>
                          `:u}
                    </content-container>
                  </td>
                  ${D(this.orderByUserPreference(this.tableMetaData?.itemMetaData?.filter(e=>!e.hideByDefault&&this.userSettings.find(t=>t.key===e.key)?.show||this.userSettings.find(t=>t.key===e.key)?.show)??[],this.userSettings)?.map(e=>e.key)??[],e=>e,t=>p`<td>
                        <content-container>${this.tableMetaData?.itemMetaData?.find(e=>e.key===t)?.render(e)??"-"}</content-container>
                      </td>`)}
                </tr>
              `)}
        </tbody>
      </table>
      <titanium-data-table-core-reorder-dialog
        .tableMetaData=${this.tableMetaData}
        .items=${this.items}
        .supplementalItemStyles=${this.supplementalItemStyles}
        @reorder-save-request=${e=>g(this,e)}
      ></titanium-data-table-core-reorder-dialog>
      <titanium-data-table-core-settings-sort-dialog .tableMetaData=${this.tableMetaData}></titanium-data-table-core-settings-sort-dialog>
      <titanium-data-table-core-settings-choose-columns-dialog
        .tableMetaData=${this.tableMetaData}
        .userSettings=${this.userSettings}
        @custom-columns-applied-change=${e=>this.customColumnsApplied=e.target.customColumnsApplied}
        @setting-change=${e=>this.userSettings=structuredClone(e.target.userSettings)}
      ></titanium-data-table-core-settings-choose-columns-dialog>
    `}};a([O("trackLoadingPromise"),d()],Me.prototype,"isLoading",null),a([n({type:Array})],Me.prototype,"items",null),a([n({type:Object})],Me.prototype,"tableMetaData",null),a([n({type:Object})],Me.prototype,"supplementalItemStyles",null),a([n({type:Boolean,reflect:!0})],Me.prototype,"disabled",null),a([n({type:Boolean,attribute:"sticky-header",reflect:!0})],Me.prototype,"stickyHeader",null),a([n({type:String,attribute:"selection-mode",reflect:!0})],Me.prototype,"selectionMode",null),a([n({type:Array})],Me.prototype,"selected",null),a([c("titanium-data-table-core-settings-choose-columns-dialog")],Me.prototype,"chooseColumnsDialog",null),a([c("titanium-data-table-core-settings-sort-dialog")],Me.prototype,"sortDialog",null),a([c("titanium-data-table-core-reorder-dialog")],Me.prototype,"reorderDialog",null),a([n({type:String,attribute:"local-storage-key"})],Me.prototype,"localStorageKey",null),a([d()],Me.prototype,"customSortApplied",null),a([d()],Me.prototype,"customColumnsApplied",null),a([d()],Me.prototype,"sort",null),a([d()],Me.prototype,"userSettings",null),Me=a([w("titanium-data-table-core")],Me);class Ie extends Event{static{this.eventType="titanium-data-table-items-reorder"}constructor(){super(Ie.eventType)}}let Be=class extends o{#b=[];get selected(){return this.#b}set selected(e){this.#b=e}#F=!1;get hasSelected(){return this.#F}set hasSelected(e){this.#F=e}#P=!1;get hasAddButton(){return this.#P}set hasAddButton(e){this.#P=e}#U;get addButtonElements(){return this.#U}set addButtonElements(e){this.#U=e}updated(e){e.has("selected")&&(this.hasSelected=this.selected.length>0)}static{this.styles=[j,I,x`
      :host {
        display: grid;
        padding: 12px 16px;
        background-color: var(--md-sys-color-surface-container-lowest);
        box-sizing: border-box;
      }

      main {
        display: grid;
        grid: 'filters  add-button' / 1fr auto;

        opacity: 1;
        transition-behavior: allow-discrete;
        animation: fade-in-down 0.25s ease;

        div[add-button] {
          grid-area: add-button;
          align-self: end;
        }

        div[filters] {
          grid-area: filters;
          align-self: end;
        }
      }

      selected-action-veil {
        display: none;
        grid: 'text buttons' / minmax(min-content, 1fr) auto;
        min-height: 40px;
        align-items: end;

        gap: 6px 12px;

        background-color: inherit;
        opacity: 0;

        animation: fade-in-up 0.25s ease;
        transition-behavior: allow-discrete;

        margin: 0;

        action-container {
          grid-area: buttons;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
          justify-content: flex-end;

          ::slotted(md-filled-button) {
            --md-filled-button-container-height: 32px;
          }
        }
      }

      @starting-style {
        selected-action-veil[style*='display: grid'] {
          opacity: 0;
        }

        main[style*='display: grid'] {
          opacity: 1;
        }
      }

      :host([has-selected]) selected-action-veil {
        display: grid;
        opacity: 1;
        animation: fade-in-up 0.25s ease;
      }

      :host([has-selected]) main {
        animation: fade-out-down 0.25s ease;
        opacity: 0;
        height: 0;
        display: none;
      }

      @media (max-width: 920px) {
        h2 {
          font-size: 14px;
          line-height: 16px;
        }
      }

      @media (max-width: 500px) {
        main {
          grid:
            'filters'
            'add-button';
          gap: 12px;
        }

        selected-action-veil {
          grid:
            'text'
            'buttons';

          gap: 4px;
        }

        div[add-button] {
          justify-self: end;
        }
      }

      @keyframes fade-out-down {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(-20px);
        }
      }

      @keyframes fade-in-down {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fade-out-up {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(20px);
        }
      }

      @keyframes fade-in-up {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `]}render(){return p`
      <main part="main">
        <div add-button part="add-button-container">
          <slot name="add-button" @slotchange=${()=>this.hasAddButton=this.addButtonElements.length>0}></slot>
        </div>
        <div filters part="filters-container"><slot name="filters"></slot></div>
      </main>
      <selected-action-veil part="selected-action-veil">
        <h2 ellipsis part="selected-action-title">${this.selected.length} selected</h2>
        <action-container part="action-container"><slot name="selected-actions"></slot></action-container>
      </selected-action-veil>
    `}};a([n({type:Array})],Be.prototype,"selected",null),a([n({type:Boolean,reflect:!0,attribute:"has-selected"})],Be.prototype,"hasSelected",null),a([n({type:Boolean,reflect:!0,attribute:"has-add-button"})],Be.prototype,"hasAddButton",null),a([T({slot:"add-button"})],Be.prototype,"addButtonElements",null),Be=a([w("titanium-data-table-action-bar")],Be);export{Z as n};
