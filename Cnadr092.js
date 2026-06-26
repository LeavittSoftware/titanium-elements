import{N as t,i as e,_ as s,n as i,e as a,u as o,c as l,a3 as n,A as r,Y as d,a4 as h,t as p}from"./CdKAnjTr.js";import{n as m,M as u,s as c}from"./zwnGCiZV.js";const g=t(e);class $ extends g{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new u(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(t){this.menuItemController.setTypeaheadText(t)}render(){return this.renderListItem(l`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const e="link"===this.type;let s;switch(this.menuItemController.tagName){case"a":s=n`a`;break;case"button":s=n`button`;break;default:s=n`li`}const i=e&&this.target?this.target:r;return h`
      <${s}
        id="item"
        tabindex=${this.disabled&&!e?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||r}
        aria-selected=${this.ariaSelected||r}
        aria-checked=${this.ariaChecked||r}
        aria-expanded=${this.ariaExpanded||r}
        aria-haspopup=${this.ariaHasPopup||r}
        class="list-item ${d(this.getRenderClasses())}"
        href=${this.href||r}
        target=${i}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${t}</${s}>
    `}renderRipple(){return l` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return l` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return l`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}}$.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0},s([i({type:Boolean,reflect:!0})],$.prototype,"disabled",void 0),s([i()],$.prototype,"type",void 0),s([i()],$.prototype,"href",void 0),s([i()],$.prototype,"target",void 0),s([i({type:Boolean,attribute:"keep-open"})],$.prototype,"keepOpen",void 0),s([i({type:Boolean})],$.prototype,"selected",void 0),s([a(".list-item")],$.prototype,"listItemRoot",void 0),s([o({slot:"headline"})],$.prototype,"headlineElements",void 0),s([o({slot:"supporting-text"})],$.prototype,"supportingTextElements",void 0),s([m({slot:""})],$.prototype,"defaultElements",void 0),s([i({attribute:"typeahead-text"})],$.prototype,"typeaheadText",null);let v=class extends ${};v.styles=[c],v=s([p("md-menu-item")],v);
