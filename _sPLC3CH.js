import{i as e,h as t,g as i,b as l,A as s,c as r,_ as o,n,t as a}from"./B9KYe1CG.js";async function h(e){let t=e;for(;t;){await(t?.updateComplete);const e=t.scrollContainer;if(null!=e)return e;t=t.parentElement??null}return null}let c=class extends e{#e=!1;get stickyTop(){return this.#e}set stickyTop(e){this.#e=e}#t=null;get scrollableParent(){return this.#t}set scrollableParent(e){this.#t=e}#i=null;get level1Text(){return this.#i}set level1Text(e){this.#i=e}#l=null;get level1Href(){return this.#l}set level1Href(e){this.#l=e}#s=null;get level2Text(){return this.#s}set level2Text(e){this.#s=e}#r=null;get level2Href(){return this.#r}set level2Href(e){this.#r=e}#o=null;get level3Text(){return this.#o}set level3Text(e){this.#o=e}#n=null;get level3Href(){return this.#n}set level3Href(e){this.#n=e}#a=null;get level4Text(){return this.#a}set level4Text(e){this.#a=e}#h=null;get level4Href(){return this.#h}set level4Href(e){this.#h=e}#c=null;get level5Text(){return this.#c}set level5Text(e){this.#c=e}#p=null;get level5Href(){return this.#p}set level5Href(e){this.#p=e}#g=!1;get isScrolled(){return this.#g}set isScrolled(e){this.#g=e}#f=null;static{this.styles=[t,i,l`
      :host {
        display: grid;
        grid:
          'main gap trailing'
          'footer footer footer'
          / auto 1fr auto;
        align-items: start;

        min-height: 64px;
        background-color: var(--md-sys-color-surface-container-lowest);
        box-sizing: border-box;
        z-index: 2;

        position: relative;
      }

      :host([is-scrolled][sticky-top]) {
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      :host([sticky-top]) {
        position: sticky;
        top: 0;
      }

      :host(:not([sticky-top])) {
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      aside {
        grid-area: trailing;
        display: flex;
        flex-direction: row;
        gap: 4px;
        align-items: center;
        padding: 8px 16px 0 0;
      }

      footer {
        display: grid;
        grid-area: footer;
      }

      main {
        grid-area: main;
        display: flex;
        flex-direction: row;

        padding: 20px 8px 0 16px;

        /* position: sticky;
        left: 16px; */
        align-items: center;

        gap: 4px;
      }
      /*
       * Earlier crumbs start at zero width and grow, up to their full text, to share the free space.
       * Flexbox hands the space out evenly and stops growing a crumb once its text fits, so short
       * crumbs stay whole and only the longest ones are cut. Each keeps at least a letter and an
       * ellipsis. The current page keeps its full width and only shrinks when it alone is wider than
       * the row.
       */
      h1 {
        opacity: 0.8;
        flex: 1 1 0;
        min-width: 2.5em;
        max-width: max-content;
      }

      h1[current] {
        opacity: 1;
        flex: 0 1 auto;
        min-width: 0;
      }

      md-icon {
        flex: none;
      }

      h1 > a:visited,
      h1 > a {
        text-decoration: none;
        color: var(--md-sys-color-on-surface);
      }

      h1 > a:hover {
        text-decoration: underline;
      }

      md-icon {
        opacity: 0.8;
      }

      @container (width < 920px) {
        :host {
          min-height: 54px;
        }

        main {
          padding: 16px 8px 0 16px;
        }

        h1 {
          font-size: 16px;
          line-height: 18px;
        }
      }
    `]}async connectedCallback(){super.connectedCallback();const e=await h(this);this.#f=this.scrollableParent||e,this.#f&&this.#f.addEventListener("scroll",this.#d.bind(this),!1)}async disconnectedCallback(){this.#f&&this.#f.removeEventListener("scroll",this.#d.bind(this),!1),super.disconnectedCallback()}async updated(e){if(e.has("scrollableParent")){this.#f?.removeEventListener("scroll",this.#d.bind(this),!1);const e=await h(this);this.#f=this.scrollableParent||e,this.#f&&this.#f.addEventListener("scroll",this.#d.bind(this),!1)}}#u(){return[{text:this.level1Text,href:this.level1Href},{text:this.level2Text,href:this.level2Href},{text:this.level3Text,href:this.level3Href},{text:this.level4Text,href:this.level4Href},{text:this.level5Text,href:this.level5Href}].filter(e=>!!e.text)}#d(){this.isScrolled=(this.#f?.scrollTop||0)>0}render(){return r`
      <main ellipsis part="main">
        ${this.#u().map((e,t,i)=>r`${t>0?r`<md-icon>chevron_right</md-icon>`:s}
              <h1 ellipsis title=${e.text} ?current=${t===i.length-1}>
                ${e.href?r`<a href=${e.href}>${e.text}</a>`:e.text}
              </h1>`)}
      </main>
      <aside part="trailing"><slot name="trailing"></slot></aside>
      <footer part="footer"><slot name="footer"></slot></footer>
    `}};o([n({type:Boolean,reflect:!0,attribute:"sticky-top"})],c.prototype,"stickyTop",null),o([n({type:Object,attribute:"scrollable-parent"})],c.prototype,"scrollableParent",null),o([n({type:String})],c.prototype,"level1Text",null),o([n({type:String})],c.prototype,"level1Href",null),o([n({type:String})],c.prototype,"level2Text",null),o([n({type:String})],c.prototype,"level2Href",null),o([n({type:String})],c.prototype,"level3Text",null),o([n({type:String})],c.prototype,"level3Href",null),o([n({type:String})],c.prototype,"level4Text",null),o([n({type:String})],c.prototype,"level4Href",null),o([n({type:String})],c.prototype,"level5Text",null),o([n({type:String})],c.prototype,"level5Href",null),o([n({type:Boolean,reflect:!0,attribute:"is-scrolled"})],c.prototype,"isScrolled",null),c=o([a("leavitt-app-navigation-header")],c);const p=l`
  [heading1],
  h1 {
    font-family: var(--titanium-styles-h1-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    font-size: 32px;
    line-height: 34px;
    font-weight: 700;
    letter-spacing: -1px;

    margin: 0;
    padding: 0;
  }

  [heading2],
  h2 {
    font-family: var(--titanium-styles-h2-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    letter-spacing: -1.3px;

    margin: 0;
    padding: 0;
  }

  [heading3],
  h3 {
    font-family: var(--titanium-styles-h3-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.6px;

    margin: 0;
    padding: 0;
  }

  [heading4],
  h4 {
    font-family: var(--titanium-styles-h4-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.2px;

    margin: 0;
    padding: 0;
  }
`;export{h as f,p as h};
