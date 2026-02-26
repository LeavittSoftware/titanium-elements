import{i as t,h as e,j as i,b as s,f as l,c as o,_ as r,n as a,t as n}from"./BkdWKSMI.js";async function h(t){let e=t;for(;e;){await(e?.updateComplete);const t=e.scrollContainer;if(null!=t)return t;e=e.parentElement??null}return null}let c=class extends t{#t=!1;get stickyTop(){return this.#t}set stickyTop(t){this.#t=t}#e=null;get scrollableParent(){return this.#e}set scrollableParent(t){this.#e=t}#i;get level1Text(){return this.#i}set level1Text(t){this.#i=t}#s;get level1Href(){return this.#s}set level1Href(t){this.#s=t}#l;get level2Text(){return this.#l}set level2Text(t){this.#l=t}#o;get level2Href(){return this.#o}set level2Href(t){this.#o=t}#r;get level3Text(){return this.#r}set level3Text(t){this.#r=t}#a;get level3Href(){return this.#a}set level3Href(t){this.#a=t}#n;get level4Text(){return this.#n}set level4Text(t){this.#n=t}#h;get level4Href(){return this.#h}set level4Href(t){this.#h=t}#c=!1;get isScrolled(){return this.#c}set isScrolled(t){this.#c=t}#p=null;static{this.styles=[e,i,s`
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
      h1 {
        opacity: 0.8;
      }

      h1 > a:visited,
      h1 > a {
        text-decoration: none;
        color: var(--md-sys-color-on-surface);
      }

      h1 > a:hover {
        text-decoration: underline;
      }

      h1:last-child {
        opacity: 1;
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
    `]}async connectedCallback(){super.connectedCallback();const t=await h(this);this.#p=this.scrollableParent||t,this.#p&&this.#p.addEventListener("scroll",this.#g.bind(this),!1)}async disconnectedCallback(){this.#p&&this.#p.removeEventListener("scroll",this.#g.bind(this),!1),super.disconnectedCallback()}async updated(t){if(t.has("scrollableParent")){this.#p?.removeEventListener("scroll",this.#g.bind(this),!1);const t=await h(this);this.#p=this.scrollableParent||t,this.#p&&this.#p.addEventListener("scroll",this.#g.bind(this),!1)}}#g(){this.isScrolled=(this.#p?.scrollTop||0)>0}render(){return o`
      <main ellipsis part="main">
        ${this.level1Text?this.level1Href?o`<h1 ellipsis><a title=${this.level1Text} href=${this.level1Href}>${this.level1Text}</a></h1>`:o`<h1 ellipsis>${this.level1Text}</h1>`:l}
        ${this.level2Text?this.level2Href?o` <md-icon>chevron_right</md-icon>
                <h1 ellipsis><a title=${this.level2Text} href=${this.level2Href}>${this.level2Text}</a></h1>`:o` <md-icon>chevron_right</md-icon>
                <h1 ellipsis>${this.level2Text}</h1>`:l}
        ${this.level3Text?this.level3Href?o`<md-icon>chevron_right</md-icon>
                <h1 ellipsis><a title=${this.level3Text} href=${this.level3Href}>${this.level3Text}</a></h1>`:o`<md-icon>chevron_right</md-icon>
                <h1 ellipsis>${this.level3Text}</h1>`:l}
        ${this.level4Text?this.level4Href?o`<md-icon>chevron_right</md-icon>
                <h1 ellipsis><a title=${this.level4Text} href=${this.level4Href}>${this.level4Text}</a></h1>`:o`<md-icon>chevron_right</md-icon>
                <h1 ellipsis>${this.level4Text}</h1>`:l}
      </main>
      <aside part="trailing"><slot name="trailing"></slot></aside>
      <footer part="footer"><slot name="footer"></slot></footer>
    `}};r([a({type:Boolean,reflect:!0,attribute:"sticky-top"})],c.prototype,"stickyTop",null),r([a({type:Object,attribute:"scrollable-parent"})],c.prototype,"scrollableParent",null),r([a({type:String})],c.prototype,"level1Text",null),r([a({type:String})],c.prototype,"level1Href",null),r([a({type:String})],c.prototype,"level2Text",null),r([a({type:String})],c.prototype,"level2Href",null),r([a({type:String})],c.prototype,"level3Text",null),r([a({type:String})],c.prototype,"level3Href",null),r([a({type:String})],c.prototype,"level4Text",null),r([a({type:String})],c.prototype,"level4Href",null),r([a({type:Boolean,reflect:!0,attribute:"is-scrolled"})],c.prototype,"isScrolled",null),c=r([n("leavitt-app-navigation-header")],c);const p=s`
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

  [heading2],
  h3 {
    font-family: var(--titanium-styles-h2-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.6px;

    margin: 0;
    padding: 0;
  }
`;export{h as f,p as h};
