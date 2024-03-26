import{i as t,m as e,s as a,_ as i,n as r,e as s,r as n,o,q as l,x as d,u as c,H as h,T as u,v as m,t as v,h as p,a as b,p as g}from"./f43924bd.js";import{S as k}from"./1c8b19cb.js";import"./3286da59.js";import{r as f}from"./c0a7d937.js";import{r as _}from"./f42dd0a8.js";import{m as x,g as y}from"./f7d1f7f2.js";import{d as w}from"./5f341198.js";import"./68491de3.js";const z=t`@media(forced-colors: active){:host{--md-slider-active-track-color: CanvasText;--md-slider-disabled-active-track-color: GrayText;--md-slider-disabled-active-track-opacity: 1;--md-slider-disabled-handle-color: GrayText;--md-slider-disabled-inactive-track-color: GrayText;--md-slider-disabled-inactive-track-opacity: 1;--md-slider-focus-handle-color: CanvasText;--md-slider-handle-color: CanvasText;--md-slider-handle-shadow-color: Canvas;--md-slider-hover-handle-color: CanvasText;--md-slider-hover-state-layer-color: Canvas;--md-slider-hover-state-layer-opacity: 1;--md-slider-inactive-track-color: Canvas;--md-slider-label-container-color: Canvas;--md-slider-label-text-color: CanvasText;--md-slider-pressed-handle-color: CanvasText;--md-slider-pressed-state-layer-color: Canvas;--md-slider-pressed-state-layer-opacity: 1;--md-slider-with-overlap-handle-outline-color: CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}.tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='CanvasText'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}.tickmarks::after{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/svg%3E")}:host([disabled]) .tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}}
`;function C(t,e,a){return t?e(t):a?.(t)}const $=x(m(a));class S extends ${get nameStart(){return this.getAttribute("name-start")??this.name}set nameStart(t){this.setAttribute("name-start",t)}get nameEnd(){return this.getAttribute("name-end")??this.nameStart}set nameEnd(t){this.setAttribute("name-end",t)}get renderAriaLabelStart(){const{ariaLabel:t}=this;return this.ariaLabelStart||t&&`${t} start`||this.valueLabelStart||String(this.valueStart)}get renderAriaValueTextStart(){return this.ariaValueTextStart||this.valueLabelStart||String(this.valueStart)}get renderAriaLabelEnd(){const{ariaLabel:t}=this;return this.range?this.ariaLabelEnd||t&&`${t} end`||this.valueLabelEnd||String(this.valueEnd):t||this.valueLabel||String(this.value)}get renderAriaValueTextEnd(){if(this.range)return this.ariaValueTextEnd||this.valueLabelEnd||String(this.valueEnd);const{ariaValueText:t}=this;return t||this.valueLabel||String(this.value)}constructor(){super(),this.min=0,this.max=100,this.valueLabel="",this.valueLabelStart="",this.valueLabelEnd="",this.ariaLabelStart="",this.ariaValueTextStart="",this.ariaLabelEnd="",this.ariaValueTextEnd="",this.step=1,this.ticks=!1,this.labeled=!1,this.range=!1,this.handleStartHover=!1,this.handleEndHover=!1,this.startOnTop=!1,this.handlesOverlapping=!1,this.ripplePointerId=1,this.isRedispatchingEvent=!1,this.addEventListener("click",(t=>{o(t)&&this.inputEnd&&(this.focus(),l(this.inputEnd))}))}focus(){this.inputEnd?.focus()}willUpdate(t){this.renderValueStart=t.has("valueStart")?this.valueStart:this.inputStart?.valueAsNumber;const e=t.has("valueEnd")&&this.range||t.has("value");this.renderValueEnd=e?this.range?this.valueEnd:this.value:this.inputEnd?.valueAsNumber,void 0!==t.get("handleStartHover")?this.toggleRippleHover(this.rippleStart,this.handleStartHover):void 0!==t.get("handleEndHover")&&this.toggleRippleHover(this.rippleEnd,this.handleEndHover)}updated(t){if(this.range&&(this.renderValueStart=this.inputStart.valueAsNumber),this.renderValueEnd=this.inputEnd.valueAsNumber,this.range){const t=(this.max-this.min)/3;if(void 0===this.valueStart){this.inputStart.valueAsNumber=this.min+t;const e=this.inputStart.valueAsNumber;this.valueStart=this.renderValueStart=e}if(void 0===this.valueEnd){this.inputEnd.valueAsNumber=this.min+2*t;const e=this.inputEnd.valueAsNumber;this.valueEnd=this.renderValueEnd=e}}else this.value??(this.value=this.renderValueEnd);if(t.has("range")||t.has("renderValueStart")||t.has("renderValueEnd")||this.isUpdatePending){const t=this.handleStart?.querySelector(".handleNub"),e=this.handleEnd?.querySelector(".handleNub");this.handlesOverlapping=function(t,e){if(!t||!e)return!1;const a=t.getBoundingClientRect(),i=e.getBoundingClientRect();return!(a.top>i.bottom||a.right<i.left||a.bottom<i.top||a.left>i.right)}(t,e)}this.performUpdate()}render(){const t=0===this.step?1:this.step,e=Math.max(this.max-this.min,t),a=this.range?((this.renderValueStart??this.min)-this.min)/e:0,i=((this.renderValueEnd??this.min)-this.min)/e,r={"--_start-fraction":String(a),"--_end-fraction":String(i),"--_tick-count":String(e/t)},s={ranged:this.range},n=this.valueLabelStart||String(this.renderValueStart),o=(this.range?this.valueLabelEnd:this.valueLabel)||String(this.renderValueEnd),l={start:!0,value:this.renderValueStart,ariaLabel:this.renderAriaLabelStart,ariaValueText:this.renderAriaValueTextStart,ariaMin:this.min,ariaMax:this.valueEnd??this.max},u={start:!1,value:this.renderValueEnd,ariaLabel:this.renderAriaLabelEnd,ariaValueText:this.renderAriaValueTextEnd,ariaMin:this.range?this.valueStart??this.min:this.min,ariaMax:this.max},m={start:!0,hover:this.handleStartHover,label:n},v={start:!1,hover:this.handleEndHover,label:o},p={hover:this.handleStartHover||this.handleEndHover};return d` <div
      class="container ${c(s)}"
      style=${h(r)}>
      ${C(this.range,(()=>this.renderInput(l)))}
      ${this.renderInput(u)} ${this.renderTrack()}
      <div class="handleContainerPadded">
        <div class="handleContainerBlock">
          <div class="handleContainer ${c(p)}">
            ${C(this.range,(()=>this.renderHandle(m)))}
            ${this.renderHandle(v)}
          </div>
        </div>
      </div>
    </div>`}renderTrack(){return d`
      <div class="track"></div>
      ${this.ticks?d`<div class="tickmarks"></div>`:u}
    `}renderLabel(t){return d`<div class="label" aria-hidden="true">
      <span class="labelContent" part="label">${t}</span>
    </div>`}renderHandle({start:t,hover:e,label:a}){const i=!this.disabled&&t===this.startOnTop,r=!this.disabled&&this.handlesOverlapping,s=t?"start":"end";return d`<div
      class="handle ${c({[s]:!0,hover:e,onTop:i,isOverlapping:r})}">
      <md-focus-ring part="focus-ring" for=${s}></md-focus-ring>
      <md-ripple
        for=${s}
        class=${s}
        ?disabled=${this.disabled}></md-ripple>
      <div class="handleNub">
        <md-elevation part="elevation"></md-elevation>
      </div>
      ${C(this.labeled,(()=>this.renderLabel(a)))}
    </div>`}renderInput({start:t,value:e,ariaLabel:a,ariaValueText:i,ariaMin:r,ariaMax:s}){const n=t?"start":"end";return d`<input
      type="range"
      class="${c({start:t,end:!t})}"
      @focus=${this.handleFocus}
      @pointerdown=${this.handleDown}
      @pointerup=${this.handleUp}
      @pointerenter=${this.handleEnter}
      @pointermove=${this.handleMove}
      @pointerleave=${this.handleLeave}
      @keydown=${this.handleKeydown}
      @keyup=${this.handleKeyup}
      @input=${this.handleInput}
      @change=${this.handleChange}
      id=${n}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      aria-valuemin=${r}
      .max=${String(this.max)}
      aria-valuemax=${s}
      .step=${String(this.step)}
      .value=${String(e)}
      .tabIndex=${t?1:0}
      aria-label=${a||u}
      aria-valuetext=${i} />`}async toggleRippleHover(t,e){const a=await t;a&&(e?a.handlePointerenter(new PointerEvent("pointerenter",{isPrimary:!0,pointerId:this.ripplePointerId})):a.handlePointerleave(new PointerEvent("pointerleave",{isPrimary:!0,pointerId:this.ripplePointerId})))}handleFocus(t){this.updateOnTop(t.target)}startAction(t){const e=t.target,a=e===this.inputStart?this.inputEnd:this.inputStart;this.action={canFlip:"pointerdown"===t.type,flipped:!1,target:e,fixed:a,values:new Map([[e,e.valueAsNumber],[a,a?.valueAsNumber]])}}finishAction(t){this.action=void 0}handleKeydown(t){this.startAction(t)}handleKeyup(t){this.finishAction(t)}handleDown(t){this.startAction(t),this.ripplePointerId=t.pointerId;const e=t.target===this.inputStart;this.handleStartHover=!this.disabled&&e&&Boolean(this.handleStart),this.handleEndHover=!this.disabled&&!e&&Boolean(this.handleEnd)}async handleUp(t){if(!this.action)return;const{target:e,values:a,flipped:i}=this.action;await new Promise(requestAnimationFrame),void 0!==e&&(e.focus(),i&&e.valueAsNumber!==a.get(e)&&e.dispatchEvent(new Event("change",{bubbles:!0}))),this.finishAction(t)}handleMove(t){this.handleStartHover=!this.disabled&&N(t,this.handleStart),this.handleEndHover=!this.disabled&&N(t,this.handleEnd)}handleEnter(t){this.handleMove(t)}handleLeave(){this.handleStartHover=!1,this.handleEndHover=!1}updateOnTop(t){this.startOnTop=t.classList.contains("start")}needsClamping(){if(!this.action)return!1;const{target:t,fixed:e}=this.action;return t===this.inputStart?t.valueAsNumber>e.valueAsNumber:t.valueAsNumber<e.valueAsNumber}isActionFlipped(){const{action:t}=this;if(!t)return!1;const{target:e,fixed:a,values:i}=t;if(t.canFlip){i.get(e)===i.get(a)&&this.needsClamping()&&(t.canFlip=!1,t.flipped=!0,t.target=a,t.fixed=e)}return t.flipped}flipAction(){if(!this.action)return!1;const{target:t,fixed:e,values:a}=this.action,i=t.valueAsNumber!==e.valueAsNumber;return t.valueAsNumber=e.valueAsNumber,e.valueAsNumber=a.get(e),i}clampAction(){if(!this.needsClamping()||!this.action)return!1;const{target:t,fixed:e}=this.action;return t.valueAsNumber=e.valueAsNumber,!0}handleInput(t){if(this.isRedispatchingEvent)return;let e=!1,a=!1;this.range&&(this.isActionFlipped()&&(e=!0,a=this.flipAction()),this.clampAction()&&(e=!0,a=!1));const i=t.target;this.updateOnTop(i),this.range?(this.valueStart=this.inputStart.valueAsNumber,this.valueEnd=this.inputEnd.valueAsNumber):this.value=this.inputEnd.valueAsNumber,e&&t.stopPropagation(),a&&(this.isRedispatchingEvent=!0,_(i,t),this.isRedispatchingEvent=!1)}handleChange(t){const e=t.target,{target:a,values:i}=this.action??{};a&&a.valueAsNumber===i.get(e)||_(this,t),this.finishAction(t)}[y](){if(this.range){const t=new FormData;return t.append(this.nameStart,String(this.valueStart)),t.append(this.nameEnd,String(this.valueEnd)),t}return String(this.value)}formResetCallback(){if(this.range){const t=this.getAttribute("value-start");this.valueStart=null!==t?Number(t):void 0;const e=this.getAttribute("value-end");return void(this.valueEnd=null!==e?Number(e):void 0)}const t=this.getAttribute("value");this.value=null!==t?Number(t):void 0}formStateRestoreCallback(t){if(Array.isArray(t)){const[[,e],[,a]]=t;return this.valueStart=Number(e),this.valueEnd=Number(a),void(this.range=!0)}this.value=Number(t),this.range=!1}}function N({x:t,y:e},a){if(!a)return!1;const{top:i,left:r,bottom:s,right:n}=a.getBoundingClientRect();return t>=r&&t<=n&&e>=i&&e<=s}e(S),S.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0},i([r({type:Number})],S.prototype,"min",void 0),i([r({type:Number})],S.prototype,"max",void 0),i([r({type:Number})],S.prototype,"value",void 0),i([r({type:Number,attribute:"value-start"})],S.prototype,"valueStart",void 0),i([r({type:Number,attribute:"value-end"})],S.prototype,"valueEnd",void 0),i([r({attribute:"value-label"})],S.prototype,"valueLabel",void 0),i([r({attribute:"value-label-start"})],S.prototype,"valueLabelStart",void 0),i([r({attribute:"value-label-end"})],S.prototype,"valueLabelEnd",void 0),i([r({attribute:"aria-label-start"})],S.prototype,"ariaLabelStart",void 0),i([r({attribute:"aria-valuetext-start"})],S.prototype,"ariaValueTextStart",void 0),i([r({attribute:"aria-label-end"})],S.prototype,"ariaLabelEnd",void 0),i([r({attribute:"aria-valuetext-end"})],S.prototype,"ariaValueTextEnd",void 0),i([r({type:Number})],S.prototype,"step",void 0),i([r({type:Boolean})],S.prototype,"ticks",void 0),i([r({type:Boolean})],S.prototype,"labeled",void 0),i([r({type:Boolean})],S.prototype,"range",void 0),i([s("input.start")],S.prototype,"inputStart",void 0),i([s(".handle.start")],S.prototype,"handleStart",void 0),i([f("md-ripple.start")],S.prototype,"rippleStart",void 0),i([s("input.end")],S.prototype,"inputEnd",void 0),i([s(".handle.end")],S.prototype,"handleEnd",void 0),i([f("md-ripple.end")],S.prototype,"rippleEnd",void 0),i([n()],S.prototype,"handleStartHover",void 0),i([n()],S.prototype,"handleEndHover",void 0),i([n()],S.prototype,"startOnTop",void 0),i([n()],S.prototype,"handlesOverlapping",void 0),i([n()],S.prototype,"renderValueStart",void 0),i([n()],S.prototype,"renderValueEnd",void 0);const E=t`:host{--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, var(--md-sys-shape-corner-full, 9999px));--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, var(--md-sys-shape-corner-full, 9999px));--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, var(--md-sys-shape-corner-full, 9999px));--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-slider-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-slider-label-text-font, var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-slider-label-text-line-height, var(--md-sys-typescale-label-medium-line-height, 1rem));--_label-text-size: var(--md-slider-label-text-size, var(--md-sys-typescale-label-medium-size, 0.75rem));--_label-text-weight: var(--md-slider-label-text-weight, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)));--_start-fraction: 0;--_end-fraction: 0;--_tick-count: 0;display:inline-flex;vertical-align:middle;min-inline-size:200px;--md-elevation-level: var(--_handle-elevation);--md-elevation-shadow-color: var(--_handle-shadow-color)}md-focus-ring{height:48px;inset:unset;width:48px}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level: var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track,.tickmarks{position:absolute;inset:0;display:flex;align-items:center}.track::before,.tickmarks::before,.track::after,.tickmarks::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--_tick-count)) 100%}.track::before,.tickmarks::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape)}.track::before{background:var(--_inactive-track-color)}.tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background:var(--_disabled-inactive-track-color)}.track::after,.tickmarks::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)))}.track::after{background:var(--_active-track-color)}.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}.tickmarks:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}:host([disabled]) .track::after{background:var(--_disabled-active-track-color)}:host([disabled]) .tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--_start-fraction));inline-size:calc(100%*(var(--_end-fraction) - var(--_start-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:flex;place-content:center;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.end:focus~.handleContainerPadded .handle.end>.handleNub,input.start:focus~.handleContainerPadded .handle.start>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.end:active~.handleContainerPadded .handle.end>.handleNub,:host(:not([disabled])) input.start:active~.handleContainerPadded .handle.start>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{outline:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.onTop.isOverlapping .handleNub{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.start{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle.end{inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:flex;padding:4px;place-content:center;place-items:center;border-radius:var(--md-sys-shape-corner-full, 9999px);color:var(--_label-text-color);font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label,:where(:has(input:active)) .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_handle-height);inline-size:var(--_handle-width);opacity:0;z-index:2}input.end::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_end-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.end:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}input.start::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_start-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.start:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.start{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))) 0 0)}.ranged input.start:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))))}.ranged input.end{clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)))}.ranged input.end:dir(rtl){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)) 0 0)}.onTop{z-index:1}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}
`;let T=class extends S{};T.styles=[E,z],T=i([v("md-slider")],T);let V=class extends a{#t=120;get collapseHeight(){return this.#t}set collapseHeight(t){this.#t=t}#e=!1;get disableFade(){return this.#e}set disableFade(t){this.#e=t}#a=!0;get collapsed(){return this.#a}set collapsed(t){this.#a=t}#i=!1;get hasHiddenItems(){return this.#i}set hasHiddenItems(t){this.#i=t}#r=0;get hiddenItemCount(){return this.#r}set hiddenItemCount(t){this.#r=t}#s;get itemsContainer(){return this.#s}set itemsContainer(t){this.#s=t}#n;get collapsedContainer(){return this.#n}set collapsedContainer(t){this.#n=t}updated(t){t.has("collapsed")&&this.dispatchEvent(new Event("collapsed-changed")),t.has("hiddenItemCount")&&this.dispatchEvent(new Event("hidden-item-count-changed"))}firstUpdated(){const t=new ResizeObserver((()=>{const t=this.itemsContainer.children?.[0]?.assignedElements();this.hiddenItemCount=t.filter((t=>!this.#o(this.collapsedContainer,t))).length,this.hasHiddenItems=!!this.hiddenItemCount}));t.observe(this.itemsContainer)}#o(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect();return i.top>=a.top&&i.bottom<=a.top+this.collapseHeight&&i.left>=a.left&&i.right<=a.right}static{this.styles=[t`
      :host {
        display: flex;
        flex-direction: column;
      }

      items-container,
      collapsed-box {
        display: block;
      }

      :host([collapsed]) collapsed-box {
        overflow: hidden;
      }

      :host([collapsed][has-hidden-items]:not([disable-fade])) collapsed-box {
        -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
      }

      items-container {
        display: flex;
        flex-direction: var(--titanium-show-hide-flex-direction, column);
        flex-wrap: var(--titanium-show-hide-flex-wrap, wrap);
        gap: var(--titanium-show-hide-gap, 8px);
      }

      md-outlined-button {
        max-width: 160px;
        width: 100%;
        margin-top: 12px;
        align-self: center;
      }

      [hidden] {
        display: none;
      }
    `]}render(){return d`
      <style>
        :host([collapsed]) collapsed-box {
          max-height: ${this.collapseHeight}px;
        }
      </style>
      <collapsed-box>
        <items-container part="items-container">
          <slot></slot>
        </items-container>
      </collapsed-box>
      <slot name="button" @click=${()=>this.collapsed=!this.collapsed} ?hidden=${!this.hasHiddenItems}>
        <md-outlined-button part="button"> ${this.collapsed?`Show more (${this.hiddenItemCount})`:"Show less"}</md-outlined-button>
      </slot>
    `}};i([r({type:Number,attribute:"collapse-height"})],V.prototype,"collapseHeight",null),i([r({type:Boolean,reflect:!0,attribute:"disable-fade"})],V.prototype,"disableFade",null),i([r({type:Boolean,reflect:!0,attribute:"collapsed"})],V.prototype,"collapsed",null),i([r({type:Boolean,reflect:!0,attribute:"has-hidden-items"})],V.prototype,"hasHiddenItems",null),i([r({type:Number})],V.prototype,"hiddenItemCount",null),i([s("items-container")],V.prototype,"itemsContainer",null),i([s("collapsed-box")],V.prototype,"collapsedContainer",null),V=i([v("titanium-show-hide")],V);let M=class extends a{#l=10;get verticalStepValue(){return this.#l}set verticalStepValue(t){this.#l=t}#d=3;get horizontalStepValue(){return this.#d}set horizontalStepValue(t){this.#d=t}#a;get collapsed(){return this.#a}set collapsed(t){this.#a=t}static{this.styles=[p,b,g,t`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      [horizontal] {
        --titanium-show-hide-flex-direction: row;
      }

      :host > h1,
      :host > p {
        margin-left: 24px;
      }

      div[main] {
        border: 1px solid var(--md-sys-color-surface-variant);
        border-radius: 8px;
        padding: 12px 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 12px;
      }

      credit-card {
        transition: 0.6s ease;
        padding: 10px;
        position: relative;
        border-radius: 10px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
        height: 150px;
        max-height: 150px;
        overflow: hidden;
        width: 250px;
        z-index: 2;
        transform: rotateY(0deg);
        border: 2px solid var(--md-sys-color-on-background);
      }

      credit-card h3 {
        border-bottom: 1px solid var(--md-sys-color-on-background);
        padding-bottom: 6px;
        font-weight: 500;
        color: var(--md-sys-color-on-background);
        font-family: 'Metropolis';
        margin: 0;
      }

      credit-card p {
        font-size: 11px;
        margin: 8px 0 1px 2px;
      }

      card-number {
        display: inline-block;
        background-color: var(--md-sys-color-primary);
        font-size: 13px;
        color: var(--md-sys-color-on-primary);
        padding: 4px 12px;
        border-radius: 8px;
      }

      mark-gold {
        position: absolute;
        bottom: 10px;
        right: 10px;
        border: solid 2px var(--md-sys-color-primary);
        border-radius: 10px;
        width: 40px;
        height: 50px;
      }

      mark-gold circle-one {
        width: 40px;
        height: 25px;
        border-radius: 6px;
        background: var(--md-sys-color-surface-variant);
        position: relative;
        top: 13px;
      }

      mark-gold circle-one:before {
        content: '';
        width: 30px;
        height: 5px;
        background: var(--md-sys-color-surface-variant);
        border-radius: 3px;
        position: absolute;
        bottom: 2px;
        left: 5px;
      }

      mark-gold circle-one:after {
        content: '';
        width: 30px;
        top: 2px;
        left: 5px;
        border-radius: 3px;
        height: 5px;
        background: var(--md-sys-color-surface-variant);
        position: absolute;
      }

      mark-gold circle-two {
        margin-top: 2px;
        width: 28px;
        height: 25px;
        position: relative;
        bottom: -28px;
        left: 21px;
      }

      mark-gold circle-two:before {
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: var(--md-sys-color-surface-variant);
        position: absolute;
        right: -2px;
      }

      mark-gold circle-two:after {
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: var(--md-sys-color-primary);
        position: absolute;
        left: -2px;
      }

      md-text-button {
        margin-top: 12px;
        max-width: 150px;
        width: 100%;
      }

      titanium-show-hide[start]::part(button) {
        align-self: start;
      }
    `]}#c(t){let e=11;if(t>e)return this.#c(e)+this.#c(t-e);e=Math.pow(10,t+1);const a=e/10;return(""+(Math.floor(Math.random()*(e-a+1))+a)).substring(1)}#h(t){return t.replace(/(\d{4})(\d{4})(\d{4})(\d+)/,"$1-$2-$3-$4")}#u(){return this.#h(this.#c(16))}render(){return d`
      <div main>
        <h2>Vertical Credit Card Generator</h2>
        <p>How many would you like?</p>
        <md-slider @input=${t=>this.verticalStepValue=t.target.value} .value=${this.verticalStepValue}> </md-slider>
        <titanium-show-hide collapse-height="200">
          ${new Array(this.verticalStepValue).fill(0).map(((t,e)=>d`<credit-card>
                <h3>Credit Card ${e+1}</h3>
                <p>CARD NUMBER</p>
                <card-number>${this.#u()}</card-number>
                <mark-gold>
                  <div>
                    <circle-one></circle-one>
                    <circle-two></circle-two>
                  </div>
                </mark-gold>
                <p>CARD EXPIRATION</p>
                <card-number>${w().format("MM/YY")}</card-number>
              </credit-card>`))}
        </titanium-show-hide>
      </div>

      <div main>
        <h2>Horizontal Credit Card Generator</h2>
        <p>How many would you like?</p>
        <md-slider @input=${t=>this.horizontalStepValue=t.target.value} .value=${this.horizontalStepValue}> </md-slider>
        <titanium-show-hide horizontal collapse-height="200">
          ${new Array(this.horizontalStepValue).fill(0).map(((t,e)=>d`<credit-card>
                <h3>Credit Card ${e+1}</h3>
                <p>CARD NUMBER</p>
                <card-number>${this.#u()}</card-number>
                <mark-gold>
                  <div>
                    <circle-one></circle-one>
                    <circle-two></circle-two>
                  </div>
                </mark-gold>
                <p>CARD EXPIRATION</p>
                <card-number>${w().format("MM/YY")}</card-number>
              </credit-card>`))}
        </titanium-show-hide>
      </div>
      <div main>
        <h2>Text Example</h2>
        <p>Using a custom slotted button</p>
        <titanium-show-hide @collapsed-changed=${t=>this.collapsed=t.target.collapsed} start>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum arcu, semper ac aliquet eu, porttitor vel turpis. Nullam non dolor ac massa
            pharetra vulputate vel ac libero. In hac habitasse platea dictumst. Praesent lacus mi, vehicula eu euismod sit amet, accumsan porta massa. Morbi
            nibh odio, pellentesque sit amet nulla sit amet, pellentesque mattis felis. Donec in eros sit amet lectus maximus porttitor. Morbi iaculis velit sed
            interdum venenatis. Suspendisse ac consectetur tellus. Fusce molestie nunc ac dui sollicitudin, at sagittis dui convallis. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin euismod nisl et risus malesuada, non fermentum diam pharetra. Sed accumsan
            diam turpis, aliquet viverra quam molestie viverra. Nam ullamcorper commodo dictum. Cras bibendum odio vel tortor sodales porttitor ac nec ligula.
            Praesent eget tellus vitae diam vehicula aliquam sit amet ut mi. Curabitur pretium, enim in lacinia vehicula, sapien metus ultrices eros, vitae
            volutpat ex tortor nec lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget porttitor mi.
            Suspendisse sed dolor non justo euismod volutpat. Nulla massa quam, dignissim sed dapibus ac, laoreet eu elit. Proin libero ipsum, blandit quis diam
            non, vulputate faucibus risus. Sed tincidunt elit metus. Aliquam maximus fringilla erat, eget pretium erat. Maecenas euismod fringilla placerat.
            Nunc lorem nulla, feugiat sagittis dolor id, scelerisque convallis risus. Nullam molestie, odio sed cursus convallis, nulla ligula gravida leo, ac
            suscipit mi elit nec velit. Nulla euismod molestie accumsan. Suspendisse ut aliquet dolor. Sed vel mollis nisl, sit amet porta odio. Vivamus
            sagittis metus vulputate enim porttitor rhoncus. Ut facilisis ligula eget lorem rhoncus, vel pretium mauris cursus. Cras vel condimentum odio. Fusce
            vehicula facilisis risus, in maximus ante suscipit sed. Sed ac quam a nisl hendrerit tempor varius sed mauris. Donec tempor mauris et nisi sagittis
            laoreet. Sed dapibus ex non consectetur maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean arcu
            neque, molestie a nisi vel, tincidunt vehicula arcu. Ut ut lectus gravida, tristique mauris a, aliquet magna. Duis sodales in ipsum pretium
            hendrerit.
          </p>
          <md-text-button slot="button"> ${this.collapsed?"Read more":"Read less"} </md-text-button>
        </titanium-show-hide>
      </div>
    `}};i([s("titanium-show-hide[required]")],M.prototype,"requiredInput",void 0),i([n()],M.prototype,"verticalStepValue",null),i([n()],M.prototype,"horizontalStepValue",null),i([n()],M.prototype,"collapsed",null),M=i([v("titanium-show-hide-playground")],M);let q=class extends a{static{this.styles=[k,t``]}render(){return d`
      <story-header name="Titanium show hide" className="TitaniumShowHide"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-show-hide/project.json"
        ><titanium-show-hide-playground></titanium-show-hide-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-show-hide"></api-docs>
    `}};q=i([v("titanium-show-hide-demo")],q);export{q as TitaniumShowHideDemo};
