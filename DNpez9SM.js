import{h as e,i as t,k as o,_ as a,n as r,t as s}from"./BDVm1clO.js";let i=class extends e{#e;get hasMenu(){return this.#e}set hasMenu(e){this.#e=e}#t;get hasImage(){return this.#t}set hasImage(e){this.#t=e}#o;get hasFooter(){return this.#o}set hasFooter(e){this.#o=e}#a;get filled(){return this.#a}set filled(e){this.#a=e}#r;get elevated(){return this.#r}set elevated(e){this.#r=e}static{this.styles=[t`
      :host {
        display: grid;
        padding: 24px;
        gap: 8px 12px;
        grid:
          'title' auto
          'body' 1fr;
        border-radius: 12px;
        position: relative;

        border: 1px solid var(--md-sys-color-outline-variant);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
      }

      :host([filled]) {
        border: none;
        background-color: var(--md-sys-color-surface-container-highest);
      }

      :host([elevated]) {
        border: none;
        background-color: var(--md-sys-color-surface-container-low);
        --md-elevation-level: 1;
      }

      :host([has-menu]) {
        grid:
          'title menu' auto
          'body body' 1fr / 1fr auto;
      }

      :host([has-footer]) {
        grid:
          'title' auto
          'body' 1fr
          'footer' auto;
      }

      :host([has-footer][has-menu]) {
        grid:
          'title menu' min-content
          'body body' 1fr
          'footer footer' auto / 1fr auto;
      }

      :host([has-image]) {
        grid:
          'title image' min-content
          'body body' 1fr / 1fr auto;
      }

      :host([has-image][has-footer]) {
        grid:
          'title image' min-content
          'body body' 1fr
          'footer footer' auto / 1fr auto;
      }

      :host([has-image][has-footer][has-menu]) {
        grid:
          'title menu' min-content
          'body image' 1fr
          'footer footer' auto / 1fr auto;
      }

      ::slotted([card-menu]) {
        grid-area: menu;
        justify-self: right;
        margin: -12px -12px -12px 0;
      }

      ::slotted([card-title]) {
        grid-area: title;
      }

      ::slotted([card-body]) {
        grid-area: body;
      }

      ::slotted([card-image]) {
        grid-area: image;
      }

      ::slotted([full-width]) {
        margin: 0 -24px;
      }

      ::slotted([card-footer]) {
        grid-area: footer;
      }

      ::slotted([nav]) {
        margin: 16px -12px -12px 0;
        justify-self: right;
        display: flex;
        gap: 12px;
        align-items: center;
      }

      @media (max-width: 400px) {
        ::slotted([card-image]) {
          display: none;
        }

        :host([has-image][has-footer]) {
          grid:
            'title' min-content
            'body' auto
            'footer' 1fr / auto;
        }

        :host([has-image]) {
          grid:
            'title' min-content
            'body' auto / auto;
        }
      }
    `]}render(){return o`<md-elevation></md-elevation> <slot></slot> `}};a([r({type:Boolean,reflect:!0,attribute:"has-menu"})],i.prototype,"hasMenu",null),a([r({type:Boolean,reflect:!0,attribute:"has-image"})],i.prototype,"hasImage",null),a([r({type:Boolean,reflect:!0,attribute:"has-footer"})],i.prototype,"hasFooter",null),a([r({type:Boolean,reflect:!0,attribute:"filled"})],i.prototype,"filled",null),a([r({type:Boolean,reflect:!0,attribute:"elevated"})],i.prototype,"elevated",null),i=a([s("titanium-card")],i);
