import{b as e,Z as t,a0 as a,a1 as i,i as r,_ as s,n,e as l,r as o,a2 as d,a3 as c,O as h,D as u,c as m,f as p,N as v,a4 as b,t as g,K as f,M as k}from"./BkdWKSMI.js";import{S as x}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import{r as _}from"./yhgryvfy.js";import"./k8TuYmOd.js";import{d as y}from"./fEBq_QNq.js";const w=e`@media(forced-colors: active){:host{--md-slider-active-track-color: CanvasText;--md-slider-disabled-active-track-color: GrayText;--md-slider-disabled-active-track-opacity: 1;--md-slider-disabled-handle-color: GrayText;--md-slider-disabled-inactive-track-color: GrayText;--md-slider-disabled-inactive-track-opacity: 1;--md-slider-focus-handle-color: CanvasText;--md-slider-handle-color: CanvasText;--md-slider-handle-shadow-color: Canvas;--md-slider-hover-handle-color: CanvasText;--md-slider-hover-state-layer-color: Canvas;--md-slider-hover-state-layer-opacity: 1;--md-slider-inactive-track-color: Canvas;--md-slider-label-container-color: Canvas;--md-slider-label-text-color: CanvasText;--md-slider-pressed-handle-color: CanvasText;--md-slider-pressed-state-layer-color: Canvas;--md-slider-pressed-state-layer-opacity: 1;--md-slider-with-overlap-handle-outline-color: CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}.tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='CanvasText'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}.tickmarks::after{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/svg%3E")}:host([disabled]) .tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}}
`;function z(e,t,a){return e?t(e):a?.(e)}const C=t(a(i(r)));class S extends C{get nameStart(){return this.getAttribute("name-start")??this.name}set nameStart(e){this.setAttribute("name-start",e)}get nameEnd(){return this.getAttribute("name-end")??this.nameStart}set nameEnd(e){this.setAttribute("name-end",e)}get renderAriaLabelStart(){const{ariaLabel:e}=this;return this.ariaLabelStart||e&&`${e} start`||this.valueLabelStart||String(this.valueStart)}get renderAriaValueTextStart(){return this.ariaValueTextStart||this.valueLabelStart||String(this.valueStart)}get renderAriaLabelEnd(){const{ariaLabel:e}=this;return this.range?this.ariaLabelEnd||e&&`${e} end`||this.valueLabelEnd||String(this.valueEnd):e||this.valueLabel||String(this.value)}get renderAriaValueTextEnd(){if(this.range)return this.ariaValueTextEnd||this.valueLabelEnd||String(this.valueEnd);const{ariaValueText:e}=this;return e||this.valueLabel||String(this.value)}constructor(){super(),this.min=0,this.max=100,this.valueLabel="",this.valueLabelStart="",this.valueLabelEnd="",this.ariaLabelStart="",this.ariaValueTextStart="",this.ariaLabelEnd="",this.ariaValueTextEnd="",this.step=1,this.ticks=!1,this.labeled=!1,this.range=!1,this.handleStartHover=!1,this.handleEndHover=!1,this.startOnTop=!1,this.handlesOverlapping=!1,this.ripplePointerId=1,this.isRedispatchingEvent=!1,this.addEventListener("click",e=>{d(e)&&this.inputEnd&&(this.focus(),c(this.inputEnd))})}focus(){this.inputEnd?.focus()}willUpdate(e){this.renderValueStart=e.has("valueStart")?this.valueStart:this.inputStart?.valueAsNumber;const t=e.has("valueEnd")&&this.range||e.has("value");this.renderValueEnd=t?this.range?this.valueEnd:this.value:this.inputEnd?.valueAsNumber,void 0!==e.get("handleStartHover")?this.toggleRippleHover(this.rippleStart,this.handleStartHover):void 0!==e.get("handleEndHover")&&this.toggleRippleHover(this.rippleEnd,this.handleEndHover)}updated(e){if(this.range&&(this.renderValueStart=this.inputStart.valueAsNumber),this.renderValueEnd=this.inputEnd.valueAsNumber,this.range){const e=(this.max-this.min)/3;if(void 0===this.valueStart){this.inputStart.valueAsNumber=this.min+e;const t=this.inputStart.valueAsNumber;this.valueStart=this.renderValueStart=t}if(void 0===this.valueEnd){this.inputEnd.valueAsNumber=this.min+2*e;const t=this.inputEnd.valueAsNumber;this.valueEnd=this.renderValueEnd=t}}else this.value??=this.renderValueEnd;if(e.has("range")||e.has("renderValueStart")||e.has("renderValueEnd")||this.isUpdatePending){const e=this.handleStart?.querySelector(".handleNub"),t=this.handleEnd?.querySelector(".handleNub");this.handlesOverlapping=function(e,t){if(!e||!t)return!1;const a=e.getBoundingClientRect(),i=t.getBoundingClientRect();return!(a.top>i.bottom||a.right<i.left||a.bottom<i.top||a.left>i.right)}(e,t)}this.performUpdate()}render(){const e=0===this.step?1:this.step,t=Math.max(this.max-this.min,e),a=this.range?((this.renderValueStart??this.min)-this.min)/t:0,i=((this.renderValueEnd??this.min)-this.min)/t,r={"--_start-fraction":String(a),"--_end-fraction":String(i),"--_tick-count":String(t/e)},s={ranged:this.range},n=this.valueLabelStart||String(this.renderValueStart),l=(this.range?this.valueLabelEnd:this.valueLabel)||String(this.renderValueEnd),o={start:!0,value:this.renderValueStart,ariaLabel:this.renderAriaLabelStart,ariaValueText:this.renderAriaValueTextStart,ariaMin:this.min,ariaMax:this.valueEnd??this.max},d={start:!1,value:this.renderValueEnd,ariaLabel:this.renderAriaLabelEnd,ariaValueText:this.renderAriaValueTextEnd,ariaMin:this.range?this.valueStart??this.min:this.min,ariaMax:this.max},c={start:!0,hover:this.handleStartHover,label:n},p={start:!1,hover:this.handleEndHover,label:l},v={hover:this.handleStartHover||this.handleEndHover};return m` <div
      class="container ${h(s)}"
      style=${u(r)}>
      ${z(this.range,()=>this.renderInput(o))}
      ${this.renderInput(d)} ${this.renderTrack()}
      <div class="handleContainerPadded">
        <div class="handleContainerBlock">
          <div class="handleContainer ${h(v)}">
            ${z(this.range,()=>this.renderHandle(c))}
            ${this.renderHandle(p)}
          </div>
        </div>
      </div>
    </div>`}renderTrack(){return m`
      <div class="track"></div>
      ${this.ticks?m`<div class="tickmarks"></div>`:p}
    `}renderLabel(e){return m`<div class="label" aria-hidden="true">
      <span class="labelContent" part="label">${e}</span>
    </div>`}renderHandle({start:e,hover:t,label:a}){const i=!this.disabled&&e===this.startOnTop,r=!this.disabled&&this.handlesOverlapping,s=e?"start":"end";return m`<div
      class="handle ${h({[s]:!0,hover:t,onTop:i,isOverlapping:r})}">
      <md-focus-ring part="focus-ring" for=${s}></md-focus-ring>
      <md-ripple
        for=${s}
        class=${s}
        ?disabled=${this.disabled}></md-ripple>
      <div class="handleNub">
        <md-elevation part="elevation"></md-elevation>
      </div>
      ${z(this.labeled,()=>this.renderLabel(a))}
    </div>`}renderInput({start:e,value:t,ariaLabel:a,ariaValueText:i,ariaMin:r,ariaMax:s}){const n=e?"start":"end";return m`<input
      type="range"
      class="${h({start:e,end:!e})}"
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
      .value=${String(t)}
      .tabIndex=${e?1:0}
      aria-label=${a||p}
      aria-valuetext=${i} />`}async toggleRippleHover(e,t){const a=await e;a&&(t?a.handlePointerenter(new PointerEvent("pointerenter",{isPrimary:!0,pointerId:this.ripplePointerId})):a.handlePointerleave(new PointerEvent("pointerleave",{isPrimary:!0,pointerId:this.ripplePointerId})))}handleFocus(e){this.updateOnTop(e.target)}startAction(e){const t=e.target,a=t===this.inputStart?this.inputEnd:this.inputStart;this.action={canFlip:"pointerdown"===e.type,flipped:!1,target:t,fixed:a,values:new Map([[t,t.valueAsNumber],[a,a?.valueAsNumber]])}}finishAction(e){this.action=void 0}handleKeydown(e){this.startAction(e)}handleKeyup(e){this.finishAction(e)}handleDown(e){this.startAction(e),this.ripplePointerId=e.pointerId;const t=e.target===this.inputStart;this.handleStartHover=!this.disabled&&t&&Boolean(this.handleStart),this.handleEndHover=!this.disabled&&!t&&Boolean(this.handleEnd)}async handleUp(e){if(!this.action)return;const{target:t,values:a,flipped:i}=this.action;await new Promise(requestAnimationFrame),void 0!==t&&(t.focus(),i&&t.valueAsNumber!==a.get(t)&&t.dispatchEvent(new Event("change",{bubbles:!0}))),this.finishAction(e)}handleMove(e){this.handleStartHover=!this.disabled&&$(e,this.handleStart),this.handleEndHover=!this.disabled&&$(e,this.handleEnd)}handleEnter(e){this.handleMove(e)}handleLeave(){this.handleStartHover=!1,this.handleEndHover=!1}updateOnTop(e){this.startOnTop=e.classList.contains("start")}needsClamping(){if(!this.action)return!1;const{target:e,fixed:t}=this.action;return e===this.inputStart?e.valueAsNumber>t.valueAsNumber:e.valueAsNumber<t.valueAsNumber}isActionFlipped(){const{action:e}=this;if(!e)return!1;const{target:t,fixed:a,values:i}=e;if(e.canFlip){i.get(t)===i.get(a)&&this.needsClamping()&&(e.canFlip=!1,e.flipped=!0,e.target=a,e.fixed=t)}return e.flipped}flipAction(){if(!this.action)return!1;const{target:e,fixed:t,values:a}=this.action,i=e.valueAsNumber!==t.valueAsNumber;return e.valueAsNumber=t.valueAsNumber,t.valueAsNumber=a.get(t),i}clampAction(){if(!this.needsClamping()||!this.action)return!1;const{target:e,fixed:t}=this.action;return e.valueAsNumber=t.valueAsNumber,!0}handleInput(e){if(this.isRedispatchingEvent)return;let t=!1,a=!1;this.range&&(this.isActionFlipped()&&(t=!0,a=this.flipAction()),this.clampAction()&&(t=!0,a=!1));const i=e.target;this.updateOnTop(i),this.range?(this.valueStart=this.inputStart.valueAsNumber,this.valueEnd=this.inputEnd.valueAsNumber):this.value=this.inputEnd.valueAsNumber,t&&e.stopPropagation(),a&&(this.isRedispatchingEvent=!0,v(i,e),this.isRedispatchingEvent=!1)}handleChange(e){const t=e.target,{target:a,values:i}=this.action??{};a&&a.valueAsNumber===i.get(t)||v(this,e),this.finishAction(e)}[b](){if(this.range){const e=new FormData;return e.append(this.nameStart,String(this.valueStart)),e.append(this.nameEnd,String(this.valueEnd)),e}return String(this.value)}formResetCallback(){if(this.range){const e=this.getAttribute("value-start");this.valueStart=null!==e?Number(e):void 0;const t=this.getAttribute("value-end");return void(this.valueEnd=null!==t?Number(t):void 0)}const e=this.getAttribute("value");this.value=null!==e?Number(e):void 0}formStateRestoreCallback(e){if(Array.isArray(e)){const[[,t],[,a]]=e;return this.valueStart=Number(t),this.valueEnd=Number(a),void(this.range=!0)}this.value=Number(e),this.range=!1}}function $({x:e,y:t},a){if(!a)return!1;const{top:i,left:r,bottom:s,right:n}=a.getBoundingClientRect();return e>=r&&e<=n&&t>=i&&t<=s}S.shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0},s([n({type:Number})],S.prototype,"min",void 0),s([n({type:Number})],S.prototype,"max",void 0),s([n({type:Number})],S.prototype,"value",void 0),s([n({type:Number,attribute:"value-start"})],S.prototype,"valueStart",void 0),s([n({type:Number,attribute:"value-end"})],S.prototype,"valueEnd",void 0),s([n({attribute:"value-label"})],S.prototype,"valueLabel",void 0),s([n({attribute:"value-label-start"})],S.prototype,"valueLabelStart",void 0),s([n({attribute:"value-label-end"})],S.prototype,"valueLabelEnd",void 0),s([n({attribute:"aria-label-start"})],S.prototype,"ariaLabelStart",void 0),s([n({attribute:"aria-valuetext-start"})],S.prototype,"ariaValueTextStart",void 0),s([n({attribute:"aria-label-end"})],S.prototype,"ariaLabelEnd",void 0),s([n({attribute:"aria-valuetext-end"})],S.prototype,"ariaValueTextEnd",void 0),s([n({type:Number})],S.prototype,"step",void 0),s([n({type:Boolean})],S.prototype,"ticks",void 0),s([n({type:Boolean})],S.prototype,"labeled",void 0),s([n({type:Boolean})],S.prototype,"range",void 0),s([l("input.start")],S.prototype,"inputStart",void 0),s([l(".handle.start")],S.prototype,"handleStart",void 0),s([_("md-ripple.start")],S.prototype,"rippleStart",void 0),s([l("input.end")],S.prototype,"inputEnd",void 0),s([l(".handle.end")],S.prototype,"handleEnd",void 0),s([_("md-ripple.end")],S.prototype,"rippleEnd",void 0),s([o()],S.prototype,"handleStartHover",void 0),s([o()],S.prototype,"handleEndHover",void 0),s([o()],S.prototype,"startOnTop",void 0),s([o()],S.prototype,"handlesOverlapping",void 0),s([o()],S.prototype,"renderValueStart",void 0),s([o()],S.prototype,"renderValueEnd",void 0);const N=e`:host{--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, var(--md-sys-shape-corner-full, 9999px));--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, var(--md-sys-shape-corner-full, 9999px));--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, var(--md-sys-shape-corner-full, 9999px));--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-slider-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-slider-label-text-font, var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-slider-label-text-line-height, var(--md-sys-typescale-label-medium-line-height, 1rem));--_label-text-size: var(--md-slider-label-text-size, var(--md-sys-typescale-label-medium-size, 0.75rem));--_label-text-weight: var(--md-slider-label-text-weight, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)));--_start-fraction: 0;--_end-fraction: 0;--_tick-count: 0;display:inline-flex;vertical-align:middle;min-inline-size:200px;--md-elevation-level: var(--_handle-elevation);--md-elevation-shadow-color: var(--_handle-shadow-color)}md-focus-ring{height:48px;inset:unset;width:48px}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level: var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track,.tickmarks{position:absolute;inset:0;display:flex;align-items:center}.track::before,.tickmarks::before,.track::after,.tickmarks::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--_tick-count)) 100%}.track::before,.tickmarks::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape)}.track::before{background:var(--_inactive-track-color)}.tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background:var(--_disabled-inactive-track-color)}.track::after,.tickmarks::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)))}.track::after{background:var(--_active-track-color)}.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}.tickmarks:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}:host([disabled]) .track::after{background:var(--_disabled-active-track-color)}:host([disabled]) .tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--_start-fraction));inline-size:calc(100%*(var(--_end-fraction) - var(--_start-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:flex;place-content:center;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.end:focus~.handleContainerPadded .handle.end>.handleNub,input.start:focus~.handleContainerPadded .handle.start>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.end:active~.handleContainerPadded .handle.end>.handleNub,:host(:not([disabled])) input.start:active~.handleContainerPadded .handle.start>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{outline:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.onTop.isOverlapping .handleNub{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.start{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle.end{inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:flex;padding:4px;place-content:center;place-items:center;border-radius:var(--md-sys-shape-corner-full, 9999px);color:var(--_label-text-color);font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label,:where(:has(input:active)) .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_handle-height);inline-size:var(--_handle-width);opacity:0;z-index:2}input.end::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_end-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.end:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}input.start::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_start-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.start:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.start{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))) 0 0)}.ranged input.start:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))))}.ranged input.end{clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)))}.ranged input.end:dir(rtl){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)) 0 0)}.onTop{z-index:1}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}
`;let q=class extends S{};q.styles=[N,w],q=s([g("md-slider")],q);let E=class extends r{#e=120;get collapseHeight(){return this.#e}set collapseHeight(e){this.#e=e}#t=!1;get disableFade(){return this.#t}set disableFade(e){this.#t=e}#a=!0;get collapsed(){return this.#a}set collapsed(e){this.#a=e}#i=!1;get hasHiddenItems(){return this.#i}set hasHiddenItems(e){this.#i=e}#r=0;get hiddenItemCount(){return this.#r}set hiddenItemCount(e){this.#r=e}#s=!1;get filled(){return this.#s}set filled(e){this.#s=e}#n;get itemsContainer(){return this.#n}set itemsContainer(e){this.#n=e}#l;get collapsedContainer(){return this.#l}set collapsedContainer(e){this.#l=e}updated(e){e.has("collapsed")&&this.dispatchEvent(new Event("collapsed-changed")),e.has("hiddenItemCount")&&this.dispatchEvent(new Event("hidden-item-count-changed"))}firstUpdated(){const e=new ResizeObserver(()=>{const e=this.itemsContainer.children?.[0]?.assignedElements();this.hiddenItemCount=e.filter(e=>!this.#o(this.collapsedContainer,e)).length,this.hasHiddenItems=!!this.hiddenItemCount});e.observe(this.itemsContainer)}#o(e,t){const a=e.getBoundingClientRect(),i=t.getBoundingClientRect();return i.top>=a.top&&i.bottom<=a.top+this.collapseHeight&&i.left>=a.left&&i.right<=a.right}static{this.styles=[e`
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

      md-outlined-button,
      md-filled-button {
        max-width: 160px;
        width: 100%;
        margin-top: 12px;
        align-self: center;
      }

      [hidden] {
        display: none;
      }
    `]}render(){return k`
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
        <${this.filled?f`md-filled-button`:f`md-outlined-button`} part="button">
          ${this.collapsed?`Show more (${this.hiddenItemCount})`:"Show less"}
        </${this.filled?f`md-filled-button`:f`md-outlined-button`}>
      </slot>
    `}};s([n({type:Number,attribute:"collapse-height"})],E.prototype,"collapseHeight",null),s([n({type:Boolean,reflect:!0,attribute:"disable-fade"})],E.prototype,"disableFade",null),s([n({type:Boolean,reflect:!0,attribute:"collapsed"})],E.prototype,"collapsed",null),s([n({type:Boolean,reflect:!0,attribute:"has-hidden-items"})],E.prototype,"hasHiddenItems",null),s([n({type:Number})],E.prototype,"hiddenItemCount",null),s([n({type:Boolean,attribute:"filled"})],E.prototype,"filled",null),s([l("items-container")],E.prototype,"itemsContainer",null),s([l("collapsed-box")],E.prototype,"collapsedContainer",null),E=s([g("titanium-show-hide")],E);let T=class extends r{#d=10;get verticalStepValue(){return this.#d}set verticalStepValue(e){this.#d=e}#c=3;get horizontalStepValue(){return this.#c}set horizontalStepValue(e){this.#c=e}#a;get collapsed(){return this.#a}set collapsed(e){this.#a=e}static{this.styles=[x,e`
      [horizontal] {
        --titanium-show-hide-flex-direction: row;
      }

      div[main] {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      h2 {
        margin-bottom: 12px;
      }

      credit-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.6s ease;
        padding: 12px 16px;
        position: relative;
        border-radius: 10px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: var(--app-accent-color-indigo);
        color: #fff;
        height: 150px;
        max-height: 150px;
        overflow: hidden;
        width: 250px;
        z-index: 2;
        transform: rotateY(0deg);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

        card-chip {
          width: 50px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;

          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 50%;
            background: rgba(255, 255, 255, 0.1);
            top: 0;
            left: 0;
          }

          &:after {
            content: '';
            position: absolute;
            width: 30%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            top: 0;
            left: 35%;
          }
        }

        h2 {
          margin: -32px 0 0 0;
          letter-spacing: 1.3px;
        }

        card-details {
          display: flex;
          gap: 24px;

          p {
            opacity: 0.8;
            font-size: 11px;
            margin-bottom: 0;
          }

          h3 {
            font-size: 14px;
            margin-top: -3px;
          }

          section {
            display: flex;
            flex-direction: column;
          }

          card-type {
            place-self: end;
            margin-left: 24px;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            margin: 0 0 0 44px;
            padding: 0;
            box-sizing: border-box;
            font-family:
              'Inter',
              -apple-system,
              BlinkMacSystemFont,
              'Segoe UI',
              Roboto,
              sans-serif;
          }
        }
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
        background: #fff;
        position: relative;
        top: 13px;
      }

      mark-gold circle-one:before {
        content: '';
        width: 30px;
        height: 5px;
        background: #fff;
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
        background: #fff;
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
        background: var(--app-accent-color-orange);
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

      md-filled-tonal-button {
        margin-top: 12px;
        max-width: 150px;
        width: 100%;
      }

      titanium-show-hide[start]::part(button) {
        align-self: start;
      }
    `]}#h(e){let t=11;if(e>t)return this.#h(t)+this.#h(e-t);t=Math.pow(10,e+1);const a=t/10;return(""+(Math.floor(Math.random()*(t-a+1))+a)).substring(1)}#u(e){return`•••• •••• •••• ${e}`}#m(){return this.#u(this.#h(4))}render(){return m`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium show hide" level1Href="/titanium-show-hide" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium show hide" className="TitaniumShowHide"></story-header>

            <div>
              <h1>Vertical Credit Card Generator</h1>
              <p>How many would you like?</p>
              <md-slider @input=${e=>this.verticalStepValue=e.target.value} .value=${this.verticalStepValue}> </md-slider>
              <titanium-show-hide collapse-height="200">
                ${new Array(this.verticalStepValue).fill(0).map(()=>m`<credit-card>
                      <card-chip></card-chip>
                      <h2>${this.#m()}</h2>

                      <card-details>
                        <section>
                          <p>Expires</p>
                          <h3>${y().format("MM/YY")}</h3>
                        </section>
                        <section>
                          <p>Card Holder</p>
                          <h3>John Doe</h3>
                        </section>
                        <card-type>Visa</card-type>
                      </card-details>
                    </credit-card>`)}
              </titanium-show-hide>
            </div>

            <div>
              <h1>Horizontal Credit Card Generator</h1>
              <p>How many would you like?</p>
              <md-slider @input=${e=>this.horizontalStepValue=e.target.value} .value=${this.horizontalStepValue}> </md-slider>
              <titanium-show-hide horizontal collapse-height="200">
                ${new Array(this.horizontalStepValue).fill(0).map(()=>m`<credit-card>
                      <card-chip></card-chip>
                      <h2>${this.#m()}</h2>

                      <card-details>
                        <section>
                          <p>Expires</p>
                          <h3>${y().format("MM/YY")}</h3>
                        </section>
                        <section>
                          <p>Card Holder</p>
                          <h3>John Doe</h3>
                        </section>
                        <card-type>Visa</card-type>
                      </card-details>
                    </credit-card>`)}
              </titanium-show-hide>
            </div>

            <div>
              <h1>Text Example</h1>
              <p>Using a custom slotted button</p>
              <titanium-show-hide @collapsed-changed=${e=>this.collapsed=e.target.collapsed} start>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum arcu, semper ac aliquet eu, porttitor vel turpis. Nullam non dolor ac
                  massa pharetra vulputate vel ac libero. In hac habitasse platea dictumst. Praesent lacus mi, vehicula eu euismod sit amet, accumsan porta
                  massa. Morbi nibh odio, pellentesque sit amet nulla sit amet, pellentesque mattis felis. Donec in eros sit amet lectus maximus porttitor.
                  Morbi iaculis velit sed interdum venenatis. Suspendisse ac consectetur tellus. Fusce molestie nunc ac dui sollicitudin, at sagittis dui
                  convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin euismod nisl et risus malesuada, non
                  fermentum diam pharetra. Sed accumsan diam turpis, aliquet viverra quam molestie viverra. Nam ullamcorper commodo dictum. Cras bibendum odio
                  vel tortor sodales porttitor ac nec ligula. Praesent eget tellus vitae diam vehicula aliquam sit amet ut mi. Curabitur pretium, enim in
                  lacinia vehicula, sapien metus ultrices eros, vitae volutpat ex tortor nec lacus. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Sed eget porttitor mi. Suspendisse sed dolor non justo euismod volutpat. Nulla massa quam, dignissim sed
                  dapibus ac, laoreet eu elit. Proin libero ipsum, blandit quis diam non, vulputate faucibus risus. Sed tincidunt elit metus. Aliquam maximus
                  fringilla erat, eget pretium erat. Maecenas euismod fringilla placerat. Nunc lorem nulla, feugiat sagittis dolor id, scelerisque convallis
                  risus. Nullam molestie, odio sed cursus convallis, nulla ligula gravida leo, ac suscipit mi elit nec velit. Nulla euismod molestie accumsan.
                  Suspendisse ut aliquet dolor. Sed vel mollis nisl, sit amet porta odio. Vivamus sagittis metus vulputate enim porttitor rhoncus. Ut facilisis
                  ligula eget lorem rhoncus, vel pretium mauris cursus. Cras vel condimentum odio. Fusce vehicula facilisis risus, in maximus ante suscipit sed.
                  Sed ac quam a nisl hendrerit tempor varius sed mauris. Donec tempor mauris et nisi sagittis laoreet. Sed dapibus ex non consectetur maximus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean arcu neque, molestie a nisi vel, tincidunt
                  vehicula arcu. Ut ut lectus gravida, tristique mauris a, aliquet magna. Duis sodales in ipsum pretium hendrerit.
                </p>
                <md-filled-tonal-button slot="button"> ${this.collapsed?"Read more":"Read less"} </md-filled-tonal-button>
              </titanium-show-hide>
            </div>

            <div>
              <h1>Filled button example</h1>
              <p>Read some text</p>
              <md-slider @input=${e=>this.verticalStepValue=e.target.value} .value=${this.verticalStepValue}> </md-slider>
              <titanium-show-hide filled collapse-height="200">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum arcu, semper ac aliquet eu, porttitor vel turpis. Nullam non dolor ac
                  massa pharetra vulputate vel ac libero. In hac habitasse platea dictumst. Praesent lacus mi, vehicula eu euismod sit amet, accumsan porta
                  massa. Morbi nibh odio, pellentesque sit amet nulla sit amet, pellentesque mattis felis. Donec in eros sit amet lectus maximus porttitor.
                  Morbi iaculis velit sed interdum venenatis. Suspendisse ac consectetur tellus. Fusce molestie nunc ac dui sollicitudin, at sagittis dui
                  convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin euismod nisl et risus malesuada, non
                  fermentum diam pharetra. Sed accumsan diam turpis, aliquet viverra quam molestie viverra. Nam ullamcorper commodo dictum. Cras bibendum odio
                  vel tortor sodales porttitor ac nec ligula. Praesent eget tellus vitae diam vehicula aliquam sit amet ut mi. Curabitur pretium, enim in
                  lacinia vehicula, sapien metus ultrices eros, vitae volutpat ex tortor nec lacus. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Sed eget porttitor mi. Suspendisse sed dolor non justo euismod volutpat. Nulla massa quam, dignissim sed
                  dapibus ac, laoreet eu elit. Proin libero ipsum, blandit quis diam non, vulputate faucibus risus. Sed tincidunt elit metus. Aliquam maximus
                  fringilla erat, eget pretium erat. Maecenas euismod fringilla placerat. Nunc lorem nulla, feugiat sagittis dolor id, scelerisque convallis
                  risus. Nullam molestie, odio sed cursus convallis, nulla ligula gravida leo, ac suscipit mi elit nec velit. Nulla euismod molestie accumsan.
                  Suspendisse ut aliquet dolor. Sed vel mollis nisl, sit amet porta odio. Vivamus sagittis metus vulputate enim porttitor rhoncus. Ut facilisis
                  ligula eget lorem rhoncus, vel pretium mauris cursus. Cras vel condimentum odio. Fusce vehicula facilisis risus, in maximus ante suscipit sed.
                  Sed ac quam a nisl hendrerit tempor varius sed mauris. Donec tempor mauris et nisi sagittis laoreet. Sed dapibus ex non consectetur maximus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean arcu neque, molestie a nisi vel, tincidunt
                  vehicula arcu. Ut ut lectus gravida, tristique mauris a, aliquet magna. Duis sodales in ipsum pretium hendrerit.
                </p>
              </titanium-show-hide>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-show-hide"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};s([l("titanium-show-hide[required]")],T.prototype,"requiredInput",void 0),s([o()],T.prototype,"verticalStepValue",null),s([o()],T.prototype,"horizontalStepValue",null),s([o()],T.prototype,"collapsed",null),T=s([g("titanium-show-hide-demo")],T);export{T as TitaniumShowHideDemo};
