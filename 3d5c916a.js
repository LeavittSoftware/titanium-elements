import{m as t,s as e,_ as s,n as i,e as o,A as a,x as l,d as r,T as n,B as d,u as h,t as p}from"./d0ace671.js";import{n as m}from"./9e8552c1.js";import{M as u,s as c}from"./dc22cb98.js";class g extends e{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new u(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(t){this.menuItemController.setTypeaheadText(t)}render(){return this.renderListItem(l`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const e="link"===this.type;let s;switch(this.menuItemController.tagName){case"a":s=r`a`;break;case"button":s=r`button`;break;default:s=r`li`}const i=e&&this.target?this.target:n;return d`
      <${s}
        id="item"
        tabindex=${this.disabled&&!e?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||n}
        aria-selected=${this.ariaSelected||n}
        aria-checked=${this.ariaChecked||n}
        aria-expanded=${this.ariaExpanded||n}
        aria-haspopup=${this.ariaHasPopup||n}
        class="list-item ${h(this.getRenderClasses())}"
        href=${this.href||n}
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
    `}focus(){this.listItemRoot?.focus()}}t(g),g.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0},s([i({type:Boolean,reflect:!0})],g.prototype,"disabled",void 0),s([i()],g.prototype,"type",void 0),s([i()],g.prototype,"href",void 0),s([i()],g.prototype,"target",void 0),s([i({type:Boolean,attribute:"keep-open"})],g.prototype,"keepOpen",void 0),s([i({type:Boolean})],g.prototype,"selected",void 0),s([o(".list-item")],g.prototype,"listItemRoot",void 0),s([a({slot:"headline"})],g.prototype,"headlineElements",void 0),s([a({slot:"supporting-text"})],g.prototype,"supportingTextElements",void 0),s([m({slot:""})],g.prototype,"defaultElements",void 0),s([i({attribute:"typeahead-text"})],g.prototype,"typeaheadText",null);let $=class extends g{};$.styles=[c],$=s([p("md-menu-item")],$);
