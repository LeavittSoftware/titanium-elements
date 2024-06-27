import{T as e,x as t,i,_ as o,t as r,d as l,P as a,S as d,r as s,s as n,n as c,e as f,p,h,f as m,b as v,g as u,j as g,k as x,I as b,C as y,a as _,G as w}from"./d0ace671.js";import{S as $}from"./9e8552c1.js";import{L as k}from"./49ad9f2f.js";import"./b3a186d6.js";import"./3d5c916a.js";import"./ffc1a613.js";import{F,s as z}from"./663a7052.js";import{T as E,s as C}from"./7577643e.js";import{d as N}from"./5f341198.js";import{m as I,o as j,g as S,a as D}from"./9bf90cb9.js";import{A as M,a as A}from"./2ab92938.js";import"./ec341a4d.js";import"./791b1dff.js";import"./85c22fe7.js";import"./dc22cb98.js";import"./f42dd0a8.js";import"./ec5758e0.js";import"./725c256f.js";import"./c3dfe460.js";import"./22c1ed29.js";import"./fb6bc6bd.js";function P(t,i){return t.map(((o,r)=>[o,r<t.length-1?i:e]))}const U=new class{#e=[];subscribe(e,t,i){Array.isArray(e)?e.forEach((e=>this.subscribe(e,t,i))):Array.isArray(t)?t.forEach((t=>this.subscribe(e,t,i))):this.#t(e,t,i)}subscribeAll(e,t){Array.isArray(e)?e.forEach((e=>this.#t(e,"All",t))):this.#t(e,"All",t)}#t(e,t,i){const o={entityType:e,eventTypes:t,callback:i};this.#e.push(o)}unsubscribe(e,t,i){Array.isArray(e)?e.forEach((e=>this.unsubscribe(e,t,i))):Array.isArray(t)?t.forEach((t=>this.unsubscribe(e,t,i))):this.#i(e,t,i)}#i(e,t,i){this.#e=this.#e.filter((o=>o.callback!==i||o.entityType!==e||o.eventTypes!==t))}dispatch(e,t,i){this.#e.filter((i=>i.entityType===e&&("All"===i.eventTypes||i.eventTypes===t))).forEach((e=>e.callback(i)))}};Object.freeze(U);class Y extends F{renderBackground(){return t`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return t`<div class="active-indicator"></div>`}}const B=i`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;let T=class extends Y{};T.styles=[z,B],T=o([r("md-filled-field")],T);const R=i`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`;class L extends E{constructor(){super(...arguments),this.fieldTag=l`md-filled-field`}}let G=class extends L{constructor(){super(...arguments),this.fieldTag=l`md-filled-field`}};G.styles=[C,R],G=o([r("md-filled-text-field")],G);let O=class extends(k(n)){#o;get apiService(){return this.#o}set apiService(e){this.#o=e}#r;get fileExplorerId(){return this.#r}set fileExplorerId(e){this.#r=e}#l;get parentFolderId(){return this.#l}set parentFolderId(e){this.#l=e}#a="";get folderName(){return this.#a}set folderName(e){this.#a=e}#d;get dialog(){return this.#d}set dialog(e){this.#d=e}async open(){return this.folderName="",this.dialog.show(),new Promise((e=>{this.resolve=e}))}async#s(){if(!this.apiService)return;const e={FileExplorerId:this.fileExplorerId,Name:this.folderName,ParentFolderId:this.parentFolderId||void 0};try{const t=this.apiService.postAsync("FileExplorerFolders?expand=CreatorPerson(select=FullName,ProfilePictureCdnFileName)",e);this.dispatchEvent(new a(t)),this.loadWhile(t);const i=(await t)?.entity;return{...i,CreatorProfilePictureCndFileName:i?.CreatorPerson?.ProfilePictureCdnFileName,CreatorFullName:i?.CreatorPerson?.FullName}}catch(e){this.dispatchEvent(new d(e))}return null}static{this.styles=i`
    :host {
      display: block;
    }

    md-dialog {
      min-width: 550px;
    }

    md-filled-text-field {
      width: 100%;
    }

    @media (max-width: 620px) {
      md-dialog {
        min-width: initial;
      }
    }
  `}render(){return t`
      <md-dialog
        @closing=${e=>{"apply"!==e.target.returnValue&&this.resolve(null)}}
      >
        <div slot="headline">Add folder</div>
        <main slot="content">
          <md-filled-text-field
            label="Folder name"
            .value=${this.folderName??""}
            @input=${e=>this.folderName=e.target.value}
          >
          </md-filled-text-field>
        </main>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close()}> Cancel </md-text-button>
          <md-text-button
            ?disabled=${!this.folderName||this.isLoading}
            @click=${async()=>{const e=await this.#s();e&&(this.dialog.close("apply"),this.resolve(e))}}
            >Save</md-text-button
          >
        </div>
      </md-dialog>
    `}};o([c({attribute:!1})],O.prototype,"apiService",null),o([c({type:Number})],O.prototype,"fileExplorerId",null),o([c({type:Number})],O.prototype,"parentFolderId",null),o([s()],O.prototype,"folderName",null),o([f("md-dialog")],O.prototype,"dialog",null),O=o([r("leavitt-add-folder-modal")],O);let K=class extends n{static{this.styles=[p,i`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 48px 24px;
      }

      md-icon {
        height: 120px;
        width: 130px;
        font-size: 120px;
        color: var(--md-sys-color-surface-variant);
      }
    `]}render(){return t`
      <md-icon>folder_shared</md-icon>
      <p>No files or folders yet...</p>
    `}};K=o([r("leavitt-file-explorer-no-files")],K);let V=class extends n{static{this.styles=[p,i`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 48px 24px;
      }

      md-icon {
        height: 120px;
        width: 130px;
        font-size: 120px;
        color: var(--md-sys-color-surface-variant);
      }
    `]}render(){return t`
      <md-icon>gpp_bad</md-icon>
      <p>Something went wrong...</p>
    `}};V=o([r("leavitt-file-explorer-error")],V);let X=class extends n{static{this.styles=[p,i`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 48px 24px;
      }

      md-icon {
        height: 120px;
        width: 120px;
        font-size: 120px;
        color: var(--md-sys-color-surface-variant);
      }
    `]}render(){return t`
      <md-icon>https</md-icon>
      <p>Permission denied.</p>
    `}};X=o([r("leavitt-file-explorer-no-permission")],X);let H=class extends(k(n)){#o;get apiService(){return this.#o}set apiService(e){this.#o=e}#n=!1;get enableEditing(){return this.#n}set enableEditing(e){this.#n=e}#c="view";get state(){return this.#c}set state(e){this.#c=e}#f=null;get file(){return this.#f}set file(e){this.#f=e}#p=!1;get isCopying(){return this.#p}set isCopying(e){this.#p=e}#h=!1;get hasClipboard(){return this.#h}set hasClipboard(e){this.#h=e}#m;get fileName(){return this.#m}set fileName(e){this.#m=e}#d;get dialog(){return this.#d}set dialog(e){this.#d=e}firstUpdated(){U.subscribe("FileExplorerFileDto","Update",(e=>{e.Id===this.file?.Id&&(this.file={...this.file,...e})})),navigator.clipboard&&(this.hasClipboard=!0)}async#v(){if(!this.apiService||this.fileName===this.file?.Name||!this.fileName)return;const e={Name:this.fileName};try{const t=this.apiService.patchAsync(`FileExplorerAttachments(${this.file?.Id})`,e);this.loadWhile(t),await t,U.dispatch("FileExplorerFileDto","Update",{...this.file,Name:this.fileName}),this.state="view"}catch(e){this.dispatchEvent(new d(e))}}async open(e){return this.file=e,this.state="view",await this.dialog.show()}static{this.styles=[h,m,p,v,u,g,i`
      :host {
        display: block;
      }

      md-dialog {
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 48px);
      }

      header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        gap: 8px;
      }

      header h1 {
        margin: 4px 0 0 0;
        word-break: break-all;
        text-align: center;
      }

      header mwc-icon-button {
        align-self: center;
      }

      header md-filled-text-field {
        width: 100%;
        --md-filled-text-field-container-shape-start-start: 16px;
        --md-filled-text-field-container-shape-start-end: 16px;
      }

      main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        overflow: auto;
      }

      a[download-link] {
        cursor: pointer;
      }

      img[preview] {
        height: auto;
        width: auto;
        place-self: center;
      }

      main[ext='pdf'] img[preview] {
        border: 1px solid var(--md-sys-color-outline-variant);
      }

      no-preview {
        display: flex;
        flex-direction: column;
        height: 320px;
        width: 430px;
        place-self: center;
        place-content: center;
        text-align: center;
        border: 1px dashed var(--md-sys-color-outline-variant);
        border-radius: 8px;
      }

      data-row {
        margin: 0;
        border: none;
        padding: 8px 24px 8px 0px;
      }

      data-row p {
        max-width: 450px;
      }

      md-icon-button[save] {
        --md-icon-button-icon-color: var(--md-sys-color-primary);
        --md-icon-button-focus-icon-color: var(--md-sys-color-primary);
      }

      p[alert] {
        transition: 0.3s ease;
        opacity: 1;
        color: var(--md-sys-color-primary);
        font-size: 12px;
        font-weight: 500;
      }

      @media (max-width: 480px) {
        header {
          gap: 12px;
          align-items: center;
        }

        img[preview] {
          place-self: initial;
        }

        header {
          flex-direction: column;
        }

        no-preview {
          height: 120px;
          width: 230px;
        }
      }

      p[alert][invisible] {
        opacity: 0;
      }

      [hidden] {
        display: none;
      }
    `]}render(){return t`
      <md-dialog>
        <header slot="headline">
          ${"view"===this.state?t`<h1 title="${this.file?.Name??""}.${this.file?.Extension??""}">
                ${I(`${this.file?.Name??""}.${this.file?.Extension??""}`)}
              </h1>`:t`<md-filled-text-field
                label="File name"
                .value=${this.fileName??""}
                @input=${e=>this.fileName=e.target.value}
              >
                <md-icon-button slot="trailing-icon" @click=${()=>this.state="view"} ?disabled=${this.isLoading}>
                  <md-icon>cancel</md-icon>
                </md-icon-button>
                <md-icon-button
                  save
                  slot="trailing-icon"
                  ?disabled=${this.fileName===this.file?.Name||!this.fileName||this.isLoading}
                  @click=${()=>this.#v()}
                >
                  <md-icon>save</md-icon>
                </md-icon-button>
              </md-filled-text-field>`}

          <md-icon-button
            ?hidden=${!this.enableEditing||"edit"===this.state}
            @click=${()=>{this.state="edit",this.fileName=this.file?.Name??""}}
          >
            <md-icon>create</md-icon>
          </md-icon-button>
        </header>
        <main ext="${this.file?.Extension??""}" slot="content">
          ${this.file?.PreviewSizes?.includes("512")?t` <img preview loading="lazy" src=${j(S(this.file,512))} />`:t`<no-preview><p>No preview currently available</p> </no-preview> `}

          <data-row force-stacked>
            <h5>Uploaded</h5>
            <p>${N(this.file?.CreatedDate).format("MMM D, YYYY h:mm:ss a")}</p>
          </data-row>
          ${this.file?.CreatorId?t`<data-row force-stacked>
                <h5>Uploaded by</h5>
                <p image><profile-picture size="24" .fileName=${this.file.CreatorProfilePictureCndFileName}></profile-picture> ${this.file?.CreatorFullName}</p>
              </data-row>`:e}
          <data-row force-stacked>
            <h5>Copy download link</h5>
            <p ellipsis>
              ${this.hasClipboard?t`
                    <a
                      download-link
                      title="Copy direct download link to clipboard"
                      @click=${()=>{const e=D(this.file);e&&(navigator.clipboard.writeText(e),this.isCopying=!0,setTimeout((()=>{this.isCopying=!1}),2e3))}}
                    >
                      ${D(this.file)}
                    </a>
                  `:t` ${D(this.file)} `}
            </p>
            <p alert ?invisible=${!this.isCopying}>Copied to clipboard</p>
          </data-row>
        </main>
        <div slot="actions">
          <md-text-button
            @click=${()=>{const e=D(this.file);window.open(e)}}
            >Download</md-text-button
          >
          <md-text-button @click=${()=>this.dialog.close()}> Close </md-text-button>
        </div>
      </md-dialog>
    `}};o([c({attribute:!1})],H.prototype,"apiService",null),o([c({type:Boolean})],H.prototype,"enableEditing",null),o([s()],H.prototype,"state",null),o([s()],H.prototype,"file",null),o([s()],H.prototype,"isCopying",null),o([s()],H.prototype,"hasClipboard",null),o([s()],H.prototype,"fileName",null),o([f("md-dialog")],H.prototype,"dialog",null),H=o([r("leavitt-file-modal")],H);let J=class extends(k(n)){#o;get apiService(){return this.#o}set apiService(e){this.#o=e}#n=!1;get enableEditing(){return this.#n}set enableEditing(e){this.#n=e}#c="view";get state(){return this.#c}set state(e){this.#c=e}#u=null;get folder(){return this.#u}set folder(e){this.#u=e}#a;get folderName(){return this.#a}set folderName(e){this.#a=e}#d;get dialog(){return this.#d}set dialog(e){this.#d=e}firstUpdated(){U.subscribe("FileExplorerFolder","Update",(e=>{e.Id===this.folder?.Id&&(this.folder={...this.folder,...e})}))}async#g(){if(!this.apiService||this.folderName===this.folder?.Name||!this.folderName)return;const e={Name:this.folderName};try{const t=this.apiService.patchAsync(`FileExplorerFolders(${this.folder?.Id})`,e);this.loadWhile(t),await t,U.dispatch("FileExplorerFolder","Update",{...this.folder,Name:this.folderName}),this.state="view"}catch(e){this.dispatchEvent(new d(e))}}open(e){this.folder=e,this.state="view",this.dialog.show()}static{this.styles=[h,m,p,v,u,g,i`
      :host {
        display: block;
      }

      md-dialog {
        min-width: 550px;
      }

      static-header {
        height: 80px;
        display: grid;
        grid: 'icon input button' / auto 1fr auto;
      }

      static-header h1 {
        word-break: break-all;
      }

      md-icon-button[save] {
        --md-icon-button-icon-color: var(--md-sys-color-primary);
        --md-icon-button-focus-icon-color: var(--md-sys-color-primary);
      }

      md-filled-text-field {
        width: 100%;
        --md-filled-text-field-container-shape-start-start: 16px;
        --md-filled-text-field-container-shape-start-end: 16px;
      }

      main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        overflow: auto;
      }

      data-row {
        margin: 0;
        border: none;
        padding: 8px 24px 8px 0px;
      }

      data-row p {
        max-width: 450px;
      }

      @media (max-width: 620px) {
        md-dialog {
          min-width: initial;
        }
      }

      @media (max-width: 480px) {
        header {
          gap: 12px;
          align-items: center;
        }

        header {
          flex-direction: column;
        }
      }

      [hidden] {
        display: none;
      }
    `]}render(){return t`
      <md-dialog>
        ${"view"===this.state?t`<static-header slot="headline"
              ><md-icon>folder</md-icon>
              <h1>${this.folder?.Name}</h1>
              <md-icon-button
                ?hidden=${!this.enableEditing}
                @click=${()=>{this.state="edit",this.folderName=this.folder?.Name??""}}
              >
                <md-icon>create</md-icon>
              </md-icon-button>
            </static-header>`:t`<md-filled-text-field
              slot="headline"
              label="Folder name"
              .value=${this.folderName??""}
              @input=${e=>this.folderName=e.target.value}
            >
              <md-icon-button slot="trailing-icon" @click=${()=>this.state="view"} ?disabled=${this.isLoading}>
                <md-icon>cancel</md-icon>
              </md-icon-button>
              <md-icon-button
                save
                slot="trailing-icon"
                ?disabled=${this.folderName===this.folder?.Name||!this.folderName||this.isLoading}
                @click=${()=>this.#g()}
              >
                <md-icon>save</md-icon>
              </md-icon-button>
            </md-filled-text-field>`}
        <main slot="content">
          <data-row force-stacked>
            <h5>Files</h5>
            <p>${this.folder?.FilesCount}</p>
          </data-row>
          <data-row force-stacked>
            <h5>Folders</h5>
            <p>${this.folder?.FoldersCount}</p>
          </data-row>
          <data-row force-stacked>
            <h5>Created</h5>
            <p>${N(this.folder?.CreatedDate).format("MMM D, YYYY h:mm:ss a")}</p>
          </data-row>
          ${this.folder?.CreatorId?t`<data-row force-stacked>
                <h5>Created by</h5>
                <p image>
                  <profile-picture size="24" .fileName=${this.folder.CreatorProfilePictureCndFileName}></profile-picture> ${this.folder?.CreatorFullName}
                </p>
              </data-row>`:e}
        </main>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close()}> Close </md-text-button>
        </div>
      </md-dialog>
    `}};o([c({attribute:!1})],J.prototype,"apiService",null),o([c({type:Boolean})],J.prototype,"enableEditing",null),o([s()],J.prototype,"state",null),o([s()],J.prototype,"folder",null),o([s()],J.prototype,"folderName",null),o([f("md-dialog")],J.prototype,"dialog",null),J=o([r("leavitt-folder-modal")],J);const Q=i`:host{--_container-color: var(--md-filled-tonal-icon-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-height: var(--md-filled-tonal-icon-button-container-height, 40px);--_container-width: var(--md-filled-tonal-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-tonal-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-tonal-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-icon-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-icon-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-icon-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-tonal-icon-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-tonal-icon-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-icon-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-tonal-icon-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_toggle-selected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_unselected-container-color: var(--md-filled-tonal-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-icon-color: var(--md-filled-tonal-icon-button-toggle-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filled-tonal-icon-button-container-shape-start-start, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-icon-button-container-shape-start-end, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-icon-button-container-shape-end-end, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-icon-button-container-shape-end-start, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled-tonal{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled-tonal:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled-tonal:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled-tonal:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled-tonal:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled-tonal:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}
`;let W=class extends b{getRenderClasses(){return{...super.getRenderClasses(),"filled-tonal":!0,"toggle-filled-tonal":this.toggle}}};function Z(e){return"pdf"===e||"txt"===e||"rtf"===e||"doc"===e||"docx"===e||"csv"===e?"article":"pptx"===e||"pptm"===e||"ppt"===e?"slideshow":"xlsx"===e||"xlsx"===e?"text_snippet":"jpg"===e||"jpeg"===e||"png"===e||"webp"===e||"ico"===e||"svg"===e?"photo":"mp4"===e?"movie":"article"}W.styles=[x,Q],W=o([r("md-filled-tonal-icon-button")],W);let q=class extends n{#x;get attachment(){return this.#x}set attachment(e){this.#x=e}static{this.styles=i`
    :host {
      user-select: none;
      display: flex;
      justify-content: center;
      background-color: #fdfcff;
      border-radius: 16px 16px 0 0;
    }

    img {
      border-radius: 16px 16px 0 0;

      object-fit: cover;
      object-position: 0 0;
      width: 100%;
      max-height: 100%;
    }

    md-icon {
      height: 64px;
      width: 64px;
      font-size: 64px;
      user-select: none;
      place-self: center;
      color: var(--md-sys-color-surface-variant);
    }
  `}render(){return t`
      ${this.attachment?.PreviewSizes?.includes("512")?t`<img draggable="false" loading="lazy" src=${j(S(this.attachment,512))} />`:t` <md-icon>${Z(this.attachment?.Extension??"")}</md-icon>`}
    `}};function ee(e,t=2){if(0===e)return"0 Bytes";const i=t||2,o=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,o)).toFixed(i))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}o([c({type:Object})],q.prototype,"attachment",null),q=o([r("leavitt-file-explorer-image")],q);let te=class extends n{#f;get file(){return this.#f}set file(e){this.#f=e}#b=!1;get selected(){return this.#b}set selected(e){this.#b=e}#y=0;get selectedCount(){return this.#y}set selectedCount(e){this.#y=e}#_="grid";get display(){return this.#_}set display(e){this.#_=e}static{this.styles=i`
    :host {
      display: grid;
    }

    button {
      display: grid;
      background-color: inherit;
      grid: 'name date size' / 1fr 100px 100px;
      gap: 12px;
      padding: 12px 24px;
      font-size: 14px;
      border: none;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
      align-content: center;
      align-items: center;
      position: relative;
      outline: none;
      color: inherit;
    }

    :host([display='grid'][selected]) button {
      border-color: transparent;
    }

    :host([selected]) button {
      background-color: var(--md-sys-color-secondary-container);
    }

    :host([display='grid']) button {
      cursor: pointer;
      border: 1px solid var(--md-sys-color-outline-variant);
      border-radius: 16px;
      padding: 0;
      max-height: 166px;
      grid:
        'preview' 118px
        'name' auto;
      gap: 0;
      align-content: inherit;
      align-items: inherit;
    }

    :host([display='grid'][selected-count='0']) button {
      cursor: zoom-in;
    }

    /* Focus ring */
    md-focus-ring {
      --md-focus-ring-shape: 0;
    }

    :host([display='grid']) md-focus-ring {
      --md-focus-ring-shape: 16px;
    }

    /* icon button */
    md-filled-tonal-icon-button {
      display: none;
    }

    :host([display='grid']) md-filled-tonal-icon-button {
      display: block;
      position: absolute;

      top: 5px;
      left: 5px;
      --md-filled-tonal-icon-button-container-width: 22px;
      --md-filled-tonal-icon-button-container-height: 22px;
      --md-filled-tonal-icon-button-icon-size: 22px;
      --md-filled-tonal-icon-button-container-color: var(--md-sys-color-surface);
      --md-filled-tonal-icon-button-icon-color: var(--md-sys-color-surface);
      border: 2px solid var(--md-sys-color-outline-variant);
      border-radius: 24px;
    }

    :host([display='grid'][selected]) md-filled-tonal-icon-button {
      --md-filled-tonal-icon-button-container-color: inherit;
      --md-filled-tonal-icon-button-icon-color: inherit;
      border-color: var(--md-sys-color-on-secondary-container);
    }

    /* image */
    image-wrapper {
      display: block;
      grid-area: preview;
      border-radius: 16px 16px 0 0;
      background-color: var(--md-sys-color-secondary-container);
    }

    leavitt-file-explorer-image {
      height: 100%;
      width: 100%;
      transition: all 0.2s ease-in-out;
      transform-origin: center bottom;
    }

    :host([selected]) leavitt-file-explorer-image {
      transform: scale(0.9) rotate(0.01deg);
    }

    /* File name */
    file-name {
      grid-area: name;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 500;

      min-width: 0;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    :host([display='grid']) file-name {
      padding: 12px;
      border-top: 1px solid var(--md-sys-color-outline-variant);
    }

    :host([display='grid'][selected]) file-name {
      border-color: transparent;
    }

    file-name md-icon {
      padding-right: 8px;
      flex-shrink: 0;
    }

    file-name span[name] {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 20px;
    }

    file-name span[name]:after {
      content: '.';
    }

    file-name span[ext] {
      flex-shrink: 0;
    }

    span[date] {
      grid-area: date;
      text-align: center;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    span[size] {
      grid-area: size;
      text-align: right;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    @media (max-width: 450px) {
      span[date] {
        display: none;
      }

      :host([display='list']) button {
        grid: 'name size ' / 1fr 100px;
      }
    }

    @media (max-width: 400px) {
      span[date],
      span[size] {
        display: none;
      }

      :host([display='list']) button {
        grid: 'name ' / 1fr;
      }
    }
  `}render(){return t` <button
      tabindex="0"
      aria-label="${this.file.Name}.${this.file.Extension}"
      title="${this.file.Name}.${this.file.Extension}"
      @dblclick=${e=>{e.preventDefault(),"list"===this.display&&0===this.selectedCount&&this.dispatchEvent(new Event("show-details"))}}
      @click=${e=>{e.stopPropagation(),"grid"===this.display&&0===this.selectedCount?this.dispatchEvent(new Event("show-details")):this.dispatchEvent(new Event("toggle-selected"))}}
      @keydown=${e=>{"Enter"===e.key&&(e.preventDefault(),0===this.selectedCount?this.dispatchEvent(new Event("show-details")):this.dispatchEvent(new Event("toggle-selected")))," "==e.key&&(e.preventDefault(),0===this.selectedCount?this.dispatchEvent(new Event("show-details")):this.dispatchEvent(new Event("toggle-selected")))}}
    >
      <md-ripple></md-ripple>
      <md-focus-ring ?inward=${"list"===this.display}></md-focus-ring>
      <file-name>
        <md-icon>${"list"===this.display&&this.selected?"check":Z(this.file.Extension??"")}</md-icon>
        <span name>${this.file.Name}</span>
        <span ext>${this.file.Extension}</span>
      </file-name>
      ${"list"===this.display?t`
            <span date>${N(this.file.CreatedDate).format("MMM D, YYYY")}</span>
            <span size>${ee(this.file.Size)}</span>
          `:t`<image-wrapper><leavitt-file-explorer-image .attachment=${this.file}></leavitt-file-explorer-image></image-wrapper>`}

      <md-filled-tonal-icon-button
        tabIndex=${this.selectedCount?"-1":"0"}
        @keydown=${e=>{" "!=e.key&&"Enter"!==e.key||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new Event("toggle-selected")))}}
        @click=${e=>{e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new Event("toggle-selected"))}}
      >
        <md-icon>check</md-icon>
      </md-filled-tonal-icon-button>
    </button>`}};o([c({type:Object})],te.prototype,"file",null),o([c({type:Boolean,reflect:!0})],te.prototype,"selected",null),o([c({type:Number,reflect:!0,attribute:"selected-count"})],te.prototype,"selectedCount",null),o([c({type:String,reflect:!0,attribute:"display"})],te.prototype,"display",null),te=o([r("file-list-item")],te);let ie=class extends n{#u;get folder(){return this.#u}set folder(e){this.#u=e}#b=!1;get selected(){return this.#b}set selected(e){this.#b=e}#y=0;get selectedCount(){return this.#y}set selectedCount(e){this.#y=e}#_="grid";get display(){return this.#_}set display(e){this.#_=e}#w(e){return Math.abs(e)>999?Math.floor(Math.sign(e)*Math.round(Math.abs(e)/100)/10)+"k+":Math.sign(e)*Math.abs(e)}static{this.styles=i`
    :host {
      display: grid;
    }

    button {
      display: grid;
      background-color: inherit;
      grid: 'name date size' / 1fr 100px 100px;
      gap: 12px;
      padding: 12px 24px;
      font-size: 14px;
      border: none;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
      align-content: center;
      align-items: center;
      position: relative;
      outline: none;
      color: inherit;
    }

    :host([display='grid'][selected]) button {
      border-color: transparent;
    }

    :host([selected]) button {
      background-color: var(--md-sys-color-secondary-container);
    }

    :host([display='grid']) button {
      cursor: pointer;
      border: 1px solid var(--md-sys-color-outline-variant);
      border-radius: 16px;
      padding: 0;
      max-height: 166px;
      grid: 'name' auto;
      gap: 0;
      align-content: inherit;
      align-items: inherit;
    }

    /* Focus ring */
    md-focus-ring {
      --md-focus-ring-shape: 0;
    }

    :host([display='grid']) md-focus-ring {
      --md-focus-ring-shape: 16px;
    }

    /* File name */
    folder-name {
      grid-area: name;
      display: grid;
      grid: 'icon name' / auto 1fr;
      gap: 8px;

      align-items: center;
      font-weight: 500;

      min-width: 0;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    :host([display='grid']) folder-name {
      padding: 12px;
    }

    folder-name md-icon {
      grid-area: icon;
    }

    folder-name span[name] {
      grid-area: name;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1 1 auto;
      min-width: 20px;
    }

    span[date] {
      grid-area: date;
      text-align: center;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    span[size] {
      grid-area: size;
      text-align: right;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    @media (max-width: 450px) {
      span[date] {
        display: none;
      }

      :host([display='list']) button {
        grid: 'name size ' / 1fr 100px;
      }
    }

    @media (max-width: 400px) {
      span[date],
      span[size] {
        display: none;
      }

      :host([display='list']) button {
        grid: 'name ' / 1fr;
      }
    }
  `}render(){return t` <button
      tabindex="0"
      aria-label=${this.folder.Name}
      title="${this.folder.Name??""}
${this.folder.FilesCount} file${1===this.folder.FilesCount?"":"s"}, ${this.folder.FoldersCount} folder${1===this.folder.FoldersCount?"":"s"}"
      @dblclick=${e=>{e.preventDefault(),this.dispatchEvent(new Event("navigate"))}}
      @click=${e=>{e.stopPropagation(),this.dispatchEvent(new Event("toggle-selected"))}}
      @keydown=${e=>{"Enter"===e.key&&(e.preventDefault(),0===this.selectedCount?this.dispatchEvent(new Event("navigate")):this.dispatchEvent(new Event("toggle-selected")))," "==e.key&&(e.preventDefault(),this.dispatchEvent(new Event("toggle-selected")))}}
    >
      <md-ripple></md-ripple>
      <md-focus-ring ?inward=${"list"===this.display}></md-focus-ring>
      <folder-name>
        <span name>${this.folder.Name}</span>
        <md-icon>${"list"===this.display&&this.selected?"check":"folder_open"}</md-icon>
      </folder-name>

      ${"list"===this.display?t`
            <span date>${N(this.folder.CreatedDate).format("MMM D, YYYY")}</span>
            <span size>${this.#w(this.folder.FilesCount??0)||"0"} file${1===this.folder.FilesCount?"":"s"}</span>
          `:e}
    </button>`}};o([c({type:Object})],ie.prototype,"folder",null),o([c({type:Boolean,reflect:!0})],ie.prototype,"selected",null),o([c({type:Number})],ie.prototype,"selectedCount",null),o([c({type:String,reflect:!0,attribute:"display"})],ie.prototype,"display",null),ie=o([r("folder-list-item")],ie);var oe={maxInProgress:5,failFast:!1,nextCheck:function(e,t){return Promise.resolve(e.amountStarted<t.length)},ignoreIsFunctionCheck:!1};function re(e,t){return new Promise((function(i,o){var r=Object.assign({},oe,t),l={lastCompletedIndex:-1,amountDone:0,amountStarted:0,amountResolved:0,amountRejected:0,amountNextCheckFalsey:0,rejectedIndexes:[],resolvedIndexes:[],nextCheckFalseyIndexes:[],taskResults:[]};if(0===e.length)return i(l);for(var a=!1,d=0,s=function(e,t){if(l.taskResults[t]=e,l.rejectedIndexes.push(t),l.amountRejected++,!0===r.failFast)return l.lastCompletedIndex=t,a=!0,o(l);n(t)},n=function(t){if(!0!==a){if(l.amountDone++,l.lastCompletedIndex=t,"function"==typeof r.progressCallback&&r.progressCallback(l),l.amountDone===e.length)return i(l);d<e.length&&c(d++)}},c=function(t){r.nextCheck(l,e).then((function(i){!0===i?function(t){if(l.amountStarted++,"function"==typeof e[t])try{e[t]().then((function(e){l.taskResults[t]=e,l.resolvedIndexes.push(t),l.amountResolved++,n(t)}),(function(e){s(e,t)}))}catch(e){s(e,t)}else{if(!0!==r.ignoreIsFunctionCheck)return a=!0,o(new Error("tasks["+t+"]: "+e[t]+", is supposed to be of type function"));l.taskResults[t]=e[t],l.resolvedIndexes.push(t),l.amountResolved++,n(t)}}(t):(l.amountNextCheckFalsey++,l.nextCheckFalseyIndexes.push(t),n(t))}),o)},f=0;f<Math.min(r.maxInProgress,e.length);f++)c(d++)}))}function le(e,t){return new Promise((function(i,o){re(e,t).then((function(e){i(e.taskResults)}),(function(e){e instanceof Error?o(e):o(e.taskResults[e.rejectedIndexes[0]])}))}))}function ae(e,t){return le(e,Object.assign({},{failFast:!0},t))}let de=class extends(k(n)){#o;get apiService(){return this.#o}set apiService(e){this.#o=e}#r=0;get fileExplorerId(){return this.#r}set fileExplorerId(e){this.#r=e}#$=null;get folderId(){return this.#$}set folderId(e){this.#$=e}#k="leavitt-file-explorer-display";get localStorageDisplayKey(){return this.#k}set localStorageDisplayKey(e){this.#k=e}#F=!1;get preventNavigationUp(){return this.#F}set preventNavigationUp(e){this.#F=e}get display(){return window.localStorage.getItem(this.localStorageDisplayKey)||"grid"}set display(e){localStorage.setItem(this.localStorageDisplayKey,e)}#c="files";get state(){return this.#c}set state(e){this.#c=e}#z=!1;get isAdmin(){return this.#z}set isAdmin(e){this.#z=e}#E=null;get fileExplorer(){return this.#E}set fileExplorer(e){this.#E=e}#C=[];get files(){return this.#C}set files(e){this.#C=e}#N=[];get folders(){return this.#N}set folders(e){this.#N=e}#I=[];get path(){return this.#I}set path(e){this.#I=e}#b=[];get selected(){return this.#b}set selected(e){this.#b=e}#j;get uploadMenu(){return this.#j}set uploadMenu(e){this.#j=e}#S;get folderDialog(){return this.#S}set folderDialog(e){this.#S=e}#D;get addFolderDialog(){return this.#D}set addFolderDialog(e){this.#D=e}#M;get fileDialog(){return this.#M}set fileDialog(e){this.#M=e}#A;get fileInput(){return this.#A}set fileInput(e){this.#A=e}#P;get folderInput(){return this.#P}set folderInput(e){this.#P=e}#U;get confirmDialog(){return this.#U}set confirmDialog(e){this.#U=e}#Y=0;firstUpdated(){this.display=this.display,this.addEventListener(y.eventType,(async e=>{e.stopPropagation(),this.confirmDialog.handleEvent(e)})),this.addEventListener(a.eventType,(async e=>{e.stopPropagation(),this.loadWhile(e.detail.promise)})),U.subscribe("FileExplorerFileDto","Update",(e=>{const t=this.files.findIndex((t=>t.Id===e.Id));t>-1&&(this.files[t]={...this.files[t],...e},this.requestUpdate("files"))})),U.subscribe("FileExplorerFolder","Update",(e=>{const t=this.folders.findIndex((t=>t.Id===e.Id));t>-1&&(this.folders[t]={...this.folders[t],...e},this.requestUpdate("folders"))}))}async updated(e){(this.fileExplorerId>0&&e.has("fileExplorerId")||e.has("folderId"))&&(this.folderId&&0===this.#Y&&(this.#Y=this.folderId),this.isAdmin=!1,await this.reload())}#B(e){return"folder"===e?.type}async reload(){await this.#T(this.fileExplorerId,this.folderId)}async#T(e,t){try{const i=this.apiService?.getAsync(`FileExplorers(${e})/FileExplorerView(folderId=${t})`);i&&this.loadWhile(i);const o=await i;if(200==o?.status&&o.entity){this.fileExplorer=o.entity,this.folders=o.entity.Folders,this.files=o.entity.Files;const e=o.entity.Path;if(this.preventNavigationUp&&this.#Y>0){const t=[];for(let i=e.length-1;i>0;i--){const o=e[i];if(t.unshift(o),o.FolderId===this.#Y)break}this.path=t}else this.path=e;this.isAdmin=o.entity.CanEdit,this.state=this.folders.length>0||this.files.length>0?"files":"no-files"}}catch(e){if(401==e?.statusCode||404==e?.statusCode)return this.path=[{Name:"Files"}],void(this.state="no-permission");this.path=[{Name:"Files"}],this.state="error"}}async#R(){const e=await this.addFolderDialog.open();e&&(this.folders=[...this.folders,e],this.fileExplorer&&(this.fileExplorer.FoldersCount=this.fileExplorer?.FoldersCount+1,this.requestUpdate("fileExplorer")),this.state="files",this.dispatchEvent(new CustomEvent("folder-added",{detail:e})))}async#L(){const e=new y("Please confirm delete",`Deleting folders will delete all of their contents. Are you sure you would like to delete the selected item${1===this.selected.length?"":"s"}?`);if(this.dispatchEvent(e),await e.dialogResult){const e=[...this.selected],i=new Map;let o=0;const r=Promise.all(e.map((async e=>{try{this.#B(e)?(await(this.apiService?.deleteAsync(`FileExplorerFolders(${e.Id})`)),this.folders.splice(this.folders.findIndex((t=>t.Id===e.Id)),1),this.dispatchEvent(new CustomEvent("folder-deleted")),this.fileExplorer&&(this.fileExplorer.FoldersCount=this.fileExplorer?.FoldersCount-1,this.requestUpdate("fileExplorer")),this.requestUpdate("folders")):(await(this.apiService?.deleteAsync(`FileExplorerAttachments(${e.Id})`)),this.files.splice(this.files.findIndex((t=>t.Id===e.Id)),1),this.requestUpdate("files"),this.fileExplorer&&(this.fileExplorer.FilesCount=this.fileExplorer?.FilesCount-1,this.fileExplorer.Size=this.fileExplorer?.Size-e.Size,this.requestUpdate("fileExplorer")),this.dispatchEvent(new CustomEvent("file-deleted")))}catch(e){const t=(i.get(e)??0)+1;i.set(e,t),o++}})));this.loadWhile(r),await r,this.selected=[],this.state=this.folders.length>0||this.files.length>0?"files":"no-files",await this.reload(),o>0&&this.dispatchEvent(new d("",{overrideTemplate:t`Failed to delete ${1===o?"files and folders":`${o} files and folders: <br />`}.
            ${1===i.size?Array.from(i.keys())[0]:Array.from(i.entries()).map((([e,t])=>`(${t}) ${e} <br />`))}`}))}}#G(e){return e.webkitRelativePath.replace("/"+e.name,"")}async#O(e){const t=new Map,i=Array.from(e??[]);for(let e=0;e<i.length;e++){const o=i[e],r=this.#G(o).split("/"),l=[];let a=this.folderId;for(let e=0;e<r.length;e++){const i=r[e],o=[...l,i].join("/");if(t.has(o)){l.push(i),a=t.get(o)??0;continue}const d=await this.#s(i,a||null);if(a=d?.Id??0,l.push(i),t.set(l.join("/"),d?.Id??0),d?.ParentFolderId&&d?.ParentFolderId===this.folderId||!d?.ParentFolderId&&!this.folderId){const e={...d,CreatorLastName:d?.CreatorPerson?.LastName,CreatorFirstName:d?.CreatorPerson?.FirstName};this.folders=[...this.folders,e],this.state="files",this.dispatchEvent(new CustomEvent("folder-added",{detail:e}))}}}return t}async#K(e){const i=this.folderId?`FileExplorerFolders(${this.folderId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`:`FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`,o=[],r=ae(Array.from(e??[]).map((e=>async()=>{try{const t=(await(this.apiService?.uploadFile(i,e,(()=>console.log))))?.entity;if(t){const e={...t,CreatorProfilePictureCndFileName:t.Creator?.ProfilePictureCdnFileName??"",CreatorFullName:t.Creator?.FullName??"",CreatorFirstName:"",CreatorLastName:""};this.files=[...this.files,e],this.state="files",this.dispatchEvent(new CustomEvent("file-added")),this.fileExplorer&&(this.fileExplorer.FilesCount=this.fileExplorer?.FilesCount+1,this.fileExplorer.Size=this.fileExplorer?.Size+t.Size,this.requestUpdate("fileExplorer"))}}catch(t){o.push(e.name+": "+t.message)}})),{maxInProgress:4});this.loadWhile(r),await r,o.length>0&&(this.dispatchEvent(new d("",{overrideTemplate:t`Failed to upload ${o.length} file${1===o.length?"":"s"}: <br />
            ${P(o,t`<br />`)}`})),console.warn(`Failed to upload ${o.length} file${1===o.length?"":"s"}: \r\n${o.join("\r\n")}`)),this.fileInput.value=""}async#V(e){const i=this.#O(e),o=[],r=ae(Array.from(e??[]).map((e=>async()=>{try{const t=this.#G(e),o=(await i).get(t),r=o?`FileExplorerFolders(${o})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`:`FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`,l=(await(this.apiService?.uploadFile(r,e,(()=>console.log))))?.entity;l&&(this.dispatchEvent(new CustomEvent("file-added")),this.fileExplorer&&(this.fileExplorer.FilesCount=this.fileExplorer?.FilesCount+1,this.fileExplorer.Size=this.fileExplorer?.Size+l.Size,this.requestUpdate("fileExplorer")))}catch(t){o.push(e.webkitRelativePath+": "+t.message)}})),{maxInProgress:4});this.loadWhile(r),await r,o.length>0&&(this.dispatchEvent(new d("",{overrideTemplate:t`Failed to upload ${o.length} file${1===o.length?"":"s"}: <br />
            ${P(o,t`<br />`)}`})),console.warn(`Failed to upload ${o.length} file${1===o.length?"":"s"}: \r\n${o.join("\r\n")}`)),await this.reload(),this.folderInput.value=""}async#s(e,t){const i={FileExplorerId:this.fileExplorerId,Name:e,ParentFolderId:t||void 0};try{const e=this.apiService?.postAsync("FileExplorerFolders?expand=CreatorPerson(select=FirstName,LastName)",i);e&&this.dispatchEvent(new a(e));const t=(await e)?.entity;return this.fileExplorer&&(this.fileExplorer.FoldersCount=this.fileExplorer?.FoldersCount+1,this.requestUpdate("fileExplorer")),t}catch(e){this.dispatchEvent(new d(e))}return null}#X(e,t){const i=this.selected.find((i=>i?.Id===e.Id&&i.type===t));this.selected=i?[...this.selected.filter((e=>e!==i))]:[...this.selected,{...e,type:t}]}static{this.styles=[h,_,u,v,i`
      :host {
        display: grid;
        grid:
          'header' 69px
          'main' minmax(150px, 1fr)
          'footer' auto;

        border: 1px solid var(--md-sys-color-outline-variant);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        border-radius: 8px;

        font-family: var(--leavitt-file-explorer-font-family, 'Roboto', 'Noto', sans-serif);
        -webkit-font-smoothing: antialiased;
        width: 100%;
      }

      header {
        display: grid;
        grid: 'nav actions' / 4fr auto;
        gap: 0px 12px;
        position: relative;

        margin: 0;
        padding: 0 12px 0 12px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      header aside {
        grid-area: nav;
      }

      header nav {
        font-family: Metropolis;
        font-size: 18px;
        letter-spacing: -0.264px;
        font-weight: 400;
        flex-direction: row;
        align-items: center;
        gap: 2px;
        display: flex;
        margin: 12px 0 0 12px;
      }

      header md-icon-button {
        justify-self: center;
        align-self: center;
      }

      main {
        position: relative;
        overflow-y: auto;
      }

      content-veil {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--md-sys-color-scrim);
        opacity: 0;
        -webkit-transition: opacity 75ms linear;
        -o-transition: opacity 75ms linear;
        transition: opacity 75ms linear;
        z-index: 6;
        backdrop-filter: blur(6px);
      }

      content-veil[opened] {
        opacity: 0.32;
        display: block;
      }

      main > section {
        display: flex;
        flex-direction: column;
      }

      :host([display='grid']) section:last-of-type {
        margin-bottom: 12px;
      }

      main > h3 {
        display: none;
      }

      :host([display='grid']) main > h3 {
        display: block;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        letter-spacing: -0.264px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        margin: 24px 12px 0 24px;
      }

      :host([display='grid']) main > section {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-gap: 12px;
        padding: 12px 24px;
      }

      md-linear-progress {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        width: unset;
      }

      file-summary {
        grid-area: summary;
        display: block;
        padding-left: 12px !important;
        font-size: 12px;
      }

      :host([prevent-navigation-up]) file-summary {
        display: none;
      }

      header nav md-icon {
        color: var(--md-sys-color-surface-variant);
        flex-shrink: 0;
      }

      selected-actions {
        display: grid;
        gap: 6px;
        grid: 'deselect selected-text buttons' / auto 1fr auto;
        background-color: var(--md-sys-color-secondary-container);
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        margin: 0 !important;
        align-content: center;
        align-items: center;
        padding: 12px;
        z-index: 1;
      }

      selected-actions h2 {
        color: var(--md-sys-color-on-secondary-container);
        font-size: 18px;
        font-weight: 400;
      }

      selected-actions div[buttons] {
        display: flex;
        align-items: center;
        gap: 0 8px;
        justify-content: flex-end;
      }

      nav a:visited,
      nav span,
      nav a {
        display: block;
        font-size: 18px;
        min-width: 20px;
      }

      a[disabled] {
        pointer-events: none;
        cursor: default;
      }

      nav a span {
        padding: 0;
      }

      header span {
        grid-area: text;
        position: relative;
      }

      /*File item styles */

      footer {
        display: grid;
        grid: 'count . actions' / auto 1fr auto;
        gap: 12px;
        align-items: center;
        padding: 6px 8px 6px 24px;
        border-top: 1px solid var(--md-sys-color-outline-variant);
      }

      footer span[counts] {
        grid-area: count;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
      }

      footer-actions {
        grid-area: actions;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      md-menu[upload-menu] md-menu-item {
        min-width: 200px;
      }

      :host([display='grid']) footer span[counts] {
        display: none;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return t`
      <header>
        <aside ellipsis>
          <nav ellipsis>
            ${this.fileExplorer?this.path.map(((e,i)=>t`
                    ${i==this.path.length-1?t` <span ellipsis end title=${e?.Name??""}> ${e.Name} </span> `:t`
                          <a
                            ?disabled=${this.isLoading}
                            ellipsis
                            title=${e.Name??""}
                            href="#"
                            @click=${t=>{t.preventDefault(),this.folderId=e.FolderId??null,this.selected=[]}}
                          >
                            ${e.Name}</a
                          >
                          <md-icon>navigate_next</md-icon>
                        `}
                  `)):t`<span ellipsis end> File explorer</span>`}
          </nav>
          <file-summary ?hidden=${!this.fileExplorer} ellipsis heading3
            >${this.fileExplorer?.FilesCount} files | ${this.fileExplorer?.FoldersCount} folders | ${ee(this.fileExplorer?.Size)}</file-summary
          >
        </aside>
        <md-icon-button
          ?disabled=${this.isLoading}
          view-style
          @click=${()=>this.display="grid"===this.display?"list":"grid"}
          title=${"grid"===this.display?"Show list view":"Show grid view"}
        >
          <md-icon>${"grid"===this.display?"view_list":"view_module"}</md-icon>
        </md-icon-button>
        <selected-actions ?hidden=${0===this.selected.length}>
          <md-icon-button title="Clear selected" @click=${()=>this.selected=[]}> <md-icon>clear</md-icon></md-icon-button>
          <h2 ellipsis>${this.selected.length} selected</h2>
          <div buttons part="selected-actions-container">
            ${this.isAdmin?t` <md-icon-button title="Delete selected" @click=${this.#L}> <md-icon>delete</md-icon></md-icon-button> `:e}
            <md-icon-button
              primary
              ?hidden=${!this.selected.length}
              ?disabled=${1!==this.selected.length}
              @click=${()=>{this.selected&&(this.#B(this.selected[0])?this.folderDialog.open(this.selected[0]):this.fileDialog.open(this.selected[0]))}}
            >
              <md-icon>info</md-icon>
            </md-icon-button>
          </div>
        </selected-actions>

        <md-linear-progress ?hidden=${!this.isLoading} indeterminate></md-linear-progress>
      </header>
      <main>
        <leavitt-file-explorer-no-files ?hidden=${"no-files"!==this.state}> </leavitt-file-explorer-no-files>
        <leavitt-file-explorer-no-permission ?hidden=${"no-permission"!==this.state}> </leavitt-file-explorer-no-permission>
        <leavitt-file-explorer-error ?hidden=${"error"!==this.state}> </leavitt-file-explorer-error>

        <h3 ?hidden=${0===this.folders.length||"files"!=this.state}>Folders (${this.folders.length})</h3>
        <section ?hidden=${0===this.folders.length||"files"!=this.state}>
          ${this.folders.map((e=>t`
              <folder-list-item
                .folder=${e}
                ?selected=${this.selected.some((t=>t?.Id===e.Id&&"folder"===t.type))}
                .selectedCount=${this.selected.length}
                .display=${this.display}
                @show-details=${()=>this.folderDialog.open(e)}
                @toggle-selected=${()=>this.#X(e,"folder")}
                @navigate=${()=>{this.selected=[],this.folderId=e.Id??null}}
              ></folder-list-item>
            `))}
        </section>
        <h3 ?hidden=${0===this.files.length||"files"!=this.state}>Files (${this.files.length})</h3>
        <section ?hidden=${0===this.files.length||"files"!=this.state}>
          ${this.files.map((e=>t`
              <file-list-item
                .file=${e}
                ?selected=${this.selected.some((t=>t?.Id===e.Id&&"file"===t.type))}
                .selectedCount=${this.selected.length}
                .display=${this.display}
                @show-details=${()=>this.fileDialog.open(e)}
                @toggle-selected=${()=>this.#X(e,"file")}
              ></file-list-item>
            `))}
        </section>
        <content-veil ?opened=${this.isLoading}></content-veil>
      </main>
      <footer>
        <span counts> ${this.files.length} files | ${this.folders.length} folders </span>

        ${this.isAdmin?t`
              <footer-actions>
                <md-text-button ?disabled=${this.isLoading} @click=${this.#R}>
                  <md-icon slot="icon">create_new_folder</md-icon>
                  <span> Add folder</span>
                </md-text-button>
                <div style="position: relative;">
                  <md-text-button
                    id="upload-button"
                    ?disabled=${this.isLoading}
                    @click=${()=>{this.uploadMenu.open=!this.uploadMenu.open}}
                  >
                    <md-icon slot="icon">backup</md-icon>
                    Upload
                  </md-text-button>
                  <md-menu
                    upload-menu
                    anchor="upload-button"
                    @close-menu=${e=>{e.detail.itemPath?.[0]?.action?.()}}
                  >
                    <md-menu-item .action=${()=>this.fileInput.click()}>
                      <span slot="headline">Upload files</span>
                      <md-icon slot="start">upload_file</md-icon>
                    </md-menu-item>
                    <md-menu-item .action=${()=>this.folderInput.click()}>
                      <span slot="headline">Upload folders</span>
                      <md-icon slot="start">perm_media</md-icon>
                    </md-menu-item>
                  </md-menu>
                </div>
                <input
                  folders
                  @change=${async()=>this.#V(this.folderInput.files)}
                  type="file"
                  webkitdirectory
                  directory
                  multiple
                  id="file"
                  style="display:none;"
                />
                <input files @change=${async()=>this.#K(this.fileInput.files)} type="file" multiple id="file" style="display:none;" />
              </footer-actions>
            `:e}
      </footer>
      <leavitt-add-folder-modal
        .apiService=${this.apiService}
        .fileExplorerId=${this.fileExplorerId}
        .parentFolderId=${this?.folderId??0}
      ></leavitt-add-folder-modal>
      <leavitt-folder-modal .apiService=${this.apiService} .enableEditing=${this.isAdmin}></leavitt-folder-modal>
      <leavitt-file-modal .apiService=${this.apiService} .enableEditing=${this.isAdmin}></leavitt-file-modal>
      <titanium-confirm-dialog></titanium-confirm-dialog>
    `}};o([c({attribute:!1})],de.prototype,"apiService",null),o([c({type:Number,attribute:"file-explorer-id"})],de.prototype,"fileExplorerId",null),o([c({type:Number,attribute:"folder-id"})],de.prototype,"folderId",null),o([c({type:String,attribute:"local-storage-display-key"})],de.prototype,"localStorageDisplayKey",null),o([c({type:Boolean,reflect:!0,attribute:"prevent-navigation-up"})],de.prototype,"preventNavigationUp",null),o([c({type:String,reflect:!0,attribute:"display"})],de.prototype,"display",null),o([c({type:String})],de.prototype,"state",null),o([s()],de.prototype,"isAdmin",null),o([s()],de.prototype,"fileExplorer",null),o([s()],de.prototype,"files",null),o([s()],de.prototype,"folders",null),o([s()],de.prototype,"path",null),o([s()],de.prototype,"selected",null),o([f("md-menu[upload-menu]")],de.prototype,"uploadMenu",null),o([f("leavitt-folder-modal")],de.prototype,"folderDialog",null),o([f("leavitt-add-folder-modal")],de.prototype,"addFolderDialog",null),o([f("leavitt-file-modal")],de.prototype,"fileDialog",null),o([f("input[files]")],de.prototype,"fileInput",null),o([f("input[folders]")],de.prototype,"folderInput",null),o([f("titanium-confirm-dialog")],de.prototype,"confirmDialog",null),de=o([r("leavitt-file-explorer")],de);let se=class extends n{static{this.styles=[h,p,i`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }
    `]}constructor(){super(),this.fileExplorerApiService=new M(new A),this.fileExplorerApiService.baseUrl="https://devapi3.leavitt.com/",this.fileExplorerApiService.addHeader("X-LGAppName","FileExplorer")}render(){return t`
      <user-manager></user-manager>
      <leavitt-file-explorer file-explorer-id="1" .apiService=${this.fileExplorerApiService}></leavitt-file-explorer>
      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};o([s()],se.prototype,"fileExplorerApiService",void 0),se=o([r("leavitt-file-explorer-playground")],se);let ne=class extends n{#H=null;get refreshToken(){return this.#H}set refreshToken(e){this.#H=e}static{this.styles=[$,i``]}async firstUpdated(){const e=await w();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return t`
      <story-header name="Leavitt file explorer" className="LeavittUserFileExplorer"></story-header>
      ${this.refreshToken?t`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-file-explorer/project.json"
          >
            <leavitt-file-explorer-playground></leavitt-file-explorer-playground>
          </smart-demo>`:e}
    `}};o([s()],ne.prototype,"refreshToken",null),ne=o([r("leavitt-file-explorer-demo")],ne);export{ne as LeavittUserFileExplorerDemo};
