var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function s(t,e,i,s){var o,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],s=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&s>=t.length&&(t=void 0),{value:t&&t[s++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}"function"==typeof SuppressedError&&SuppressedError;const r=globalThis,a=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),l=new WeakMap;let c=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}};const d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new c(i,t,n)},h=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:u,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:f,getOwnPropertySymbols:v,getPrototypeOf:g}=Object,b=globalThis,y=b.trustedTypes,x=y?y.emptyScript:"",w=b.reactiveElementPolyfillSupport,_=(t,e)=>t,k={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!u(t,e),S={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=S){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&p(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);o.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...f(t),...v(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(a)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),s=r.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:k).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[_("elementProperties")]=new Map,E[_("finalized")]=new Map,w?.({ReactiveElement:E}),(b.reactiveElementVersions??=[]).push("2.0.4");const z=globalThis,A=z.trustedTypes,T=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",I=`lit$${(Math.random()+"").slice(9)}$`,R="?"+I,P=`<${R}>`,N=document,O=()=>N.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M=t=>U(t)||"function"==typeof t?.[Symbol.iterator],L="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,F=/>/g,H=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,G=/"/g,W=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Y=new WeakMap,Z=N.createTreeWalker(N,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",a=B;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===B?"!--"===l[1]?a=D:void 0!==l[1]?a=F:void 0!==l[2]?(W.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=o??B,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?H:'"'===l[3]?G:X):a===G||a===X?a=H:a===D||a===F?a=B:(a=H,o=void 0);const h=a===H&&t[e+1].startsWith("/>")?" ":"";r+=a===B?i+P:c>=0?(s.push(n),i.slice(0,c)+C+i.slice(c)+I+h):i+I+(-2===c?e:h)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class tt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const a=t.length-1,n=this.parts,[l,c]=Q(t,e);if(this.el=tt.createElement(l,i),Z.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&n.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[r++],i=s.getAttribute(t).split(I),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?rt:"?"===a[1]?at:"@"===a[1]?nt:ot}),s.removeAttribute(t)}else t.startsWith(I)&&(n.push({type:6,index:o}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(I),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),Z.nextNode(),n.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===R)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(I,t+1));)n.push({type:7,index:o}),t+=I.length-1}o++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function et(t,e,i=t,s){if(e===q)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=j(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=et(t,o._$AS(t,e.values),o,s)),e}class it{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);Z.currentNode=s;let o=Z.nextNode(),r=0,a=0,n=i[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new st(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new lt(o,this,t)),this._$AV.push(e),n=i[++a]}r!==n?.index&&(o=Z.nextNode(),r++)}return Z.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class st{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),j(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):M(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==K&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=tt.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new it(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new tt(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new st(this.S(O()),this.S(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=et(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const s=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=et(this,s[i+a],e,a),n===q&&(n=this._$AH[a]),r||=!j(n)||n!==this._$AH[a],n===K?t=K:t!==K&&(t+=(n??"")+o[a+1]),this._$AH[a]=n}r&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class at extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class nt extends ot{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??K)===q)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const ct={P:C,A:I,C:R,M:1,L:Q,R:it,D:M,V:et,I:st,H:ot,N:at,U:nt,B:rt,F:lt},dt=z.litHtmlPolyfillSupport;dt?.(tt,st),(z.litHtmlVersions??=[]).push("3.1.2");const ht=(t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new st(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o};let ut=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};ut._$litElement$=!0,ut.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ut});const pt=globalThis.litElementPolyfillSupport;pt?.({LitElement:ut}),(globalThis.litElementVersions??=[]).push("4.0.4");const mt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ft={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$},vt=(t=ft,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function gt(t){return(e,i)=>"object"==typeof i?vt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function bt(t){return gt({...t,state:!0,attribute:!1})}const yt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function xt(t,e){return(i,s,o)=>{const r=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof s?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return yt(i,s,{get(){let i=t.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return yt(i,s,{get(){return r(this)}})}}let wt;function _t(t){return(e,i)=>yt(e,i,{get(){return(this.renderRoot??(wt??=document.createDocumentFragment())).querySelectorAll(t)}})}function kt(t){return(e,i)=>{const{slot:s,selector:o}=t??{},r="slot"+(s?`[name=${s}]`:":not([name])");return yt(e,i,{get(){const e=this.renderRoot?.querySelector(r),i=e?.assignedElements(t)??[];return void 0===o?i:i.filter((t=>t.matches(o)))}})}}class $t extends ut{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return V`<span class="shadow"></span>`}}const St=d`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;let Et=class extends $t{};Et.styles=[St],Et=s([mt("md-elevation")],Et);let zt=class extends ut{#t;get shadow(){return this.#t}set shadow(t){this.#t=t}static{this.styles=d`
    :host {
      display: flex;

      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;

      font-family: Roboto, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;

      flex-direction: row;
      align-items: center;

      height: 48px;
      padding: 0 14px;
      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);

      --md-elevation-level: 0;
    }

    :host([shadow]) {
      --md-elevation-level: 3;
    }

    ::slotted([main-title]) {
      font-size: 22px;
      letter-spacing: 0.9px;
      color: var(--md-sys-color-on-background);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0px;
      font-weight: 400;
    }

    [hidden] {
      display: none !important;
    }
  `}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.#e.bind(this),!1)}disconnectedCallback(){document.removeEventListener("scroll",this.#e,!1),super.disconnectedCallback()}#e(){this.#i()}#i(){const t=window.innerHeight||(document.documentElement||document.body).clientHeight,e=this.#s(),i=window.scrollY||(document.documentElement||document.body.parentNode||document.body).scrollTop,s=e-t,o=Math.floor(i/s*100);this.shadow=0!==(o||0)}#s(){const t=document;return Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight)}render(){return V` <md-elevation></md-elevation><slot></slot>`}};s([gt({type:Boolean,reflect:!0})],zt.prototype,"shadow",null),zt=s([mt("titanium-toolbar")],zt);class At extends Error{}function Tt(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(t){return decodeURIComponent(atob(t).replace(/(.)/g,((t,e)=>{let i=e.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i})))}(e)}catch(t){return atob(e)}}At.prototype.name="InvalidTokenError";const Ct=(t=>{const e=[new RegExp("^https://10[\\.]"),new RegExp("^http://10[\\.]"),new RegExp("^http://192.168[\\.]"),new RegExp("^http://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])"),new RegExp("^https://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])")];return!t||t.indexOf("dev")>-1||e.some((e=>null!==e.exec(t)))})(window.location.origin);class It extends Event{static{this.eventName="um-updated"}constructor(){super(It.eventName,{bubbles:!1,composed:!0})}}let Rt=null;const Pt=()=>{if(Rt)return Rt;throw"GetUserManagerInstance requested before an instance was created. Did you forget to add the <user-manager> element to your project?"};let Nt=class extends ut{#o=[];get roles(){return this.#o}set roles(t){this.#o=t}#r;get fullname(){return this.#r}set fullname(t){this.#r=t}#a;get username(){return this.#a}set username(t){this.#a=t}#n;get firstName(){return this.#n}set firstName(t){this.#n=t}#l;get lastName(){return this.#l}set lastName(t){this.#l=t}#c;get company(){return this.#c}set company(t){this.#c=t}#d;get companyId(){return this.#d}set companyId(t){this.#d=t}#h;get profilePictureFileName(){return this.#h}set profilePictureFileName(t){this.#h=t}#u;get email(){return this.#u}set email(t){this.#u=t}#p=0;get personId(){return this.#p}set personId(t){this.#p=t}#m=0;get refreshTokenId(){return this.#m}set refreshTokenId(t){this.#m=t}#f="https://signin.leavitt.com/";get redirectUrl(){return this.#f}set redirectUrl(t){this.#f=t}#v="https://devsignin.leavitt.com/";get redirectDevUrl(){return this.#v}set redirectDevUrl(t){this.#v=t}#g=Ct?"https://devoauth2.leavitt.com/token":"https://oauth2.leavitt.com/token";get tokenUri(){return this.#g}set tokenUri(t){this.#g=t}#b="https://oauth2.leavitt.com/";get issuerIdentifier(){return this.#b}set issuerIdentifier(t){this.#b=t}#y;get disableAutoload(){return this.#y}set disableAutoload(t){this.#y=t}#x;get isActiveEmployee(){return this.#x}set isActiveEmployee(t){this.#x=t}#w;constructor(){super(),Rt?console.warn("More than one <user-manager> element has been used in this web application, consider removing one."):Rt=this}async firstUpdated(){if(!this.disableAutoload||this.#_("refreshToken"))try{await this.authenticateAsync()}catch(t){}console.log("UserManager Ready.")}async isRefreshTokenValid(t){try{return await this.#k(t,this.tokenUri),!0}catch(t){}return!1}#$(t){const e=`${Ct?this.redirectDevUrl:this.redirectUrl}?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#S(t){const e=`${Ct?this.redirectDevUrl:this.redirectUrl}sign-out/?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#E(){const t=[];if(window.location.hash){let e=window.location.hash.substring(1);e=decodeURIComponent(e);const i=e.split("&");for(const e in i)if(i.hasOwnProperty(e)){const s=i[e].split("=");s.length>1&&t.push({key:s[0],value:decodeURIComponent(s[1])})}}return t}#z(t){try{return JSON.parse(window.localStorage.getItem(t)||"[]")}catch(t){return console.warn(`Failed to parse scopes in local storage. ${t}`),[]}}#A(){document.location&&document.location.hash&&document.location.hash.indexOf("refreshToken")>-1&&(document.location.hash="")}#_(t){const e=this.#E().filter((e=>e.key===t));return 0===e.length?null:e[0].value}#T(t){if(!t)return null;let e;try{e=function(t,e){if("string"!=typeof t)throw new At("Invalid token specified: must be a string");e||(e={});const i=!0===e.header?0:1,s=t.split(".")[i];if("string"!=typeof s)throw new At(`Invalid token specified: missing part #${i+1}`);let o;try{o=Tt(s)}catch(t){throw new At(`Invalid token specified: invalid base64 for part #${i+1} (${t.message})`)}try{return JSON.parse(o)}catch(t){throw new At(`Invalid token specified: invalid json for part #${i+1} (${t.message})`)}}(t)}catch(t){return null}return e&&(e.exp=new Date(0).setUTCSeconds(e.exp)),e}#C(t){const e=new Date;return e.setSeconds(e.getSeconds()+30),t.iss===this.issuerIdentifier&&!(t.exp<=e)}#I(){return window.localStorage.getItem("LG-AUTH-AT")||""}#R(t){window.localStorage.setItem("LG-AUTH-AT",t)}#P(){return window.localStorage.getItem("LG-AUTH-RT")||""}#N(t){window.localStorage.setItem("LG-AUTH-RT",t||"")}async#k(t,e){if(!window.navigator.onLine)return Promise.reject("Computer not connected. Make sure your computer is connected to the internet.");const i=this.#z("LgClaimScopes"),s={grant_type:"refresh_token",refresh_token:t};i.length>0&&(s.claim_scopes=i);const o=await fetch(e,{method:"POST",body:JSON.stringify(s),headers:[["Content-Type","application/json"],["Accept","application/json"]]});let r;try{r=await o.json()}catch(t){return Promise.reject("Get Auth Token: The server sent back invalid JSON.")}return 200===o.status&&r.access_token?Promise.resolve(r.access_token):r.error?"unauthorized_client"===r.error?Promise.reject("Not authenticated"):Promise.reject(r.error):Promise.reject("Not authenticated")}#O(t){this.personId=Number(t.nameid),this.refreshTokenId=Number(t.RefreshTokenId),this.fullname=t.unique_name,this.username=t.username,this.firstName=t.given_name,this.lastName=t.family_name,this.email=t.email,this.isActiveEmployee="True"===t.IsActiveEmployee,this.roles="string"==typeof t.role?[t.role]:t.role??[],this.company=t.Company??"",this.companyId=t.CompanyId?Number(t.CompanyId):0,this.profilePictureFileName=t.PicCdnFileName||null,this.dispatchEvent(new It)}async#j(){const t=this.#_("refreshToken");let e=t?"":this.#I();const i=t||this.#P()||null;this.#A();const s=this.#T(e);if(s&&this.#C(s))return this.#R(e),this.#N(i),this.#O(s),Promise.resolve(s);if(null!=i){try{e=await this.#k(i,this.tokenUri)}catch(t){return Promise.reject(t)}const t=this.#T(e);if(t&&this.#C(t))return this.#R(e),this.#N(i),this.#O(t),Promise.resolve(t)}return Promise.reject("Not authenticated")}async getAccessTokenAsync(){return await this.authenticateAsync(),this.#I()}async isAuthenticatedAsync(){try{await this.#j()}catch(t){return!1}return!0}async authenticateAsync(){const t=this;return this.#w?new Promise(((e,i)=>{this.addEventListener("token",(function s(o){t.removeEventListener("token",s),o.detail.rejected&&i(o.detail.message),e(o.detail.accessToken)}))})):new Promise((async(e,i)=>{let s;try{this.#w=!0,s=await this.#j()}catch(t){if("Not authenticated"===t)return document.location&&this.#$(document.location.href),this.#w=!1,void this.dispatchEvent(new CustomEvent("token",{detail:{rejected:!0,message:t}}));this.#w=!1,i(t)}this.#w=!1,t.dispatchEvent(new CustomEvent("token",{detail:s})),e(s)}))}reset(){localStorage.removeItem("LG-AUTH-AT"),localStorage.removeItem("LG-AUTH-RT"),this.personId=0,this.refreshTokenId=0,this.username="",this.fullname="",this.company="",this.companyId=null,this.profilePictureFileName=null,this.firstName="",this.lastName="",this.email="",this.isActiveEmployee=!1,this.roles.forEach((t=>{window.dispatchEvent(new CustomEvent("um-role-removed",{detail:{role:t}}))})),this.roles=[],this.dispatchEvent(new It)}logout(){this.reset(),document.location&&this.#S(document.location.href)}};s([gt({type:Array})],Nt.prototype,"roles",null),s([gt({type:String})],Nt.prototype,"fullname",null),s([gt({type:String})],Nt.prototype,"username",null),s([gt({type:String})],Nt.prototype,"firstName",null),s([gt({type:String})],Nt.prototype,"lastName",null),s([gt({type:String})],Nt.prototype,"company",null),s([gt({type:Number})],Nt.prototype,"companyId",null),s([gt({type:String})],Nt.prototype,"profilePictureFileName",null),s([gt({type:String})],Nt.prototype,"email",null),s([gt({type:Number})],Nt.prototype,"personId",null),s([gt({type:Number})],Nt.prototype,"refreshTokenId",null),s([gt({type:String})],Nt.prototype,"redirectUrl",null),s([gt({type:String})],Nt.prototype,"redirectDevUrl",null),s([gt({type:String})],Nt.prototype,"tokenUri",null),s([gt({type:String})],Nt.prototype,"issuerIdentifier",null),s([gt({type:Boolean})],Nt.prototype,"disableAutoload",null),s([gt({type:Boolean})],Nt.prototype,"isActiveEmployee",null),Nt=s([mt("user-manager")],Nt);const Ot=d`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`,jt=Symbol("attachableController");let Ut;Ut=new MutationObserver((t=>{for(const e of t)e.target[jt]?.hostConnected()}));class Mt{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){null===t?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[jt]=this,Ut?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}const Lt=["focusin","focusout","pointerdown"];class Bt extends ut{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Mt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[Dt]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}t[Dt]=!0}}onControlChange(t,e){for(const i of Lt)t?.removeEventListener(i,this),e?.addEventListener(i,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}s([gt({type:Boolean,reflect:!0})],Bt.prototype,"visible",void 0),s([gt({type:Boolean,reflect:!0})],Bt.prototype,"inward",void 0);const Dt=Symbol("handledByFocusRing"),Ft=d`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;let Ht=class extends Bt{};Ht.styles=[Ft],Ht=s([mt("md-focus-ring")],Ht);const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Gt=t=>(...e)=>({_$litDirective$:t,values:e});let Wt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const Vt=Gt(class extends Wt{constructor(t){if(super(t),t.type!==Xt.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return q}}),qt={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};var Kt;!function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Kt||(Kt={}));const Yt=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Zt=window.matchMedia("(forced-colors: active)");class Jt extends ut{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Kt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Mt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return V`<div class="surface ${Vt(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==Kt.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state!==Kt.HOLDING)return this.state===Kt.TOUCH_DELAY?(this.state=Kt.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Kt.WAITING_FOR_CLICK}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t))return this.state=Kt.WAITING_FOR_CLICK,void this.startPressAnimation(t);this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=Kt.TOUCH_DELAY,await new Promise((t=>{setTimeout(t,150)})),this.state===Kt.TOUCH_DELAY&&(this.state=Kt.HOLDING,this.startPressAnimation(t)))}}handleClick(){this.disabled||(this.state!==Kt.WAITING_FOR_CLICK?this.state===Kt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),i=Math.max(t,e),s=Math.max(.35*i,75),o=Math.floor(.2*i),r=Math.sqrt(e**2+t**2)+10;this.initialSize=o,this.rippleScale=""+(r+s)/o,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:i}=window,{left:s,top:o}=this.getBoundingClientRect(),r=e+s,a=i+o,{pageX:n,pageY:l}=t;return{x:n-r,y:l-a}}getTranslationCoordinates(t){const{height:e,width:i}=this.getBoundingClientRect(),s={x:(i-this.initialSize)/2,y:(e-this.initialSize)/2};let o;return o=t instanceof PointerEvent?this.getNormalizedPointerEventCoords(t):{x:i/2,y:e/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:s}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:i}=this.getTranslationCoordinates(t),s=`${e.x}px, ${e.y}px`,o=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${s}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:qt.STANDARD,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Kt.INACTIVE;const t=this.growAnimation;let e=1/0;"number"==typeof t?.currentTime?e=t.currentTime:t?.currentTime&&(e=t.currentTime.to("ms").value),e>=225?this.pressed=!1:(await new Promise((t=>{setTimeout(t,225-e)})),this.growAnimation===t&&(this.pressed=!1))}shouldReactToEvent(t){if(this.disabled||!t.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if("pointerenter"===t.type||"pointerleave"===t.type)return!this.isTouch(t);const e=1===t.buttons;return this.isTouch(t)||e}inBounds({x:t,y:e}){const{top:i,left:s,bottom:o,right:r}=this.getBoundingClientRect();return t>=s&&t<=r&&e>=i&&e<=o}isTouch({pointerType:t}){return"touch"===t}async handleEvent(t){if(!Zt?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t)}}onControlChange(t,e){for(const i of Yt)t?.removeEventListener(i,this),e?.addEventListener(i,this)}}s([gt({type:Boolean,reflect:!0})],Jt.prototype,"disabled",void 0),s([bt()],Jt.prototype,"hovered",void 0),s([bt()],Jt.prototype,"pressed",void 0),s([xt(".surface")],Jt.prototype,"mdRoot",void 0);const Qt=d`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;let te=class extends Jt{};te.styles=[Qt],te=s([mt("md-ripple")],te);const ee=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];function ie(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function se(t){for(const e of ee)t.createProperty(e,{attribute:ie(e),reflect:!0});t.addInitializer((t=>{const e={hostConnected(){t.setAttribute("role","presentation")}};t.addController(e)}))}ee.map(ie);const oe=Symbol("internals"),re=Symbol("privateInternals");function ae(t){return class extends t{get[oe](){return this[re]||(this[re]=this.attachInternals()),this[re]}}}function ne(t){t.addInitializer((t=>{const e=t;e.addEventListener("click",(async t=>{const{type:i,[oe]:s}=e,{form:o}=s;o&&"button"!==i&&(await new Promise((t=>{setTimeout(t)})),t.defaultPrevented||("reset"!==i?(o.addEventListener("submit",(t=>{Object.defineProperty(t,"submitter",{configurable:!0,enumerable:!0,get:()=>e})}),{capture:!0,once:!0}),s.setFormValue(e.value),o.requestSubmit()):o.reset()))}))}))}function le(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function ce(t){return t.currentTarget===t.target&&(t.composedPath()[0]===t.target&&(!t.target.disabled&&!function(t){const e=de;e&&(t.preventDefault(),t.stopImmediatePropagation());return async function(){de=!0,await null,de=!1}(),e}(t)))}let de=!1;const he=ae(ut);class ue extends he{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[oe].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=t=>{ce(t)&&this.buttonElement&&(this.focus(),le(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const t=this.disabled&&!this.href,e=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return V`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple for=${i} ?disabled="${t}"></md-ripple>
      ${e}
    `}renderButton(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return V`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${t||K}"
      aria-haspopup="${e||K}"
      aria-expanded="${i||K}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return V`<a
      id="link"
      class="button"
      aria-label="${t||K}"
      aria-haspopup="${e||K}"
      aria-expanded="${i||K}"
      href=${this.href}
      target=${this.target||K}
      >${this.renderContent()}
    </a>`}renderContent(){const t=V`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return V`
      <span class="touch"></span>
      ${this.trailingIcon?K:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:K}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}se(ue),ne(ue),ue.formAssociated=!0,ue.shadowRootOptions={mode:"open",delegatesFocus:!0},s([gt({type:Boolean,reflect:!0})],ue.prototype,"disabled",void 0),s([gt()],ue.prototype,"href",void 0),s([gt()],ue.prototype,"target",void 0),s([gt({type:Boolean,attribute:"trailing-icon",reflect:!0})],ue.prototype,"trailingIcon",void 0),s([gt({type:Boolean,attribute:"has-icon",reflect:!0})],ue.prototype,"hasIcon",void 0),s([gt()],ue.prototype,"type",void 0),s([gt({reflect:!0})],ue.prototype,"value",void 0),s([xt(".button")],ue.prototype,"buttonElement",void 0),s([kt({slot:"icon",flatten:!0})],ue.prototype,"assignedIcons",void 0);class pe extends ue{}const me=d`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;let fe=class extends pe{};fe.styles=[Ot,me],fe=s([mt("md-text-button")],fe);let ve=class extends ut{#U;#M;get open(){return this.#M}set open(t){this.#M=t}#L;get noAction(){return this.#L}set noAction(t){this.#L=t}#B;get actionText(){return this.#B}set actionText(t){this.#B=t}#D;get message(){return this.#D}set message(t){this.#D=t}constructor(){super(),this.popover="manual"}show(t,e){if(this.showPopover?this.showPopover():this.open=!0,this.message=e?.overrideTemplate?e?.overrideTemplate:t,this.noAction=e?.noAction??!1,this.actionText=e?.actionText??"Dismiss",e?.autoHide){const t="number"==typeof e?.autoHide?e?.autoHide:5e3;this.#F=window.setTimeout((()=>this.close("auto-close")),t)}return new Promise((t=>{this.#U=t}))}#F=0;close(t=""){clearTimeout(this.#F),this.hidePopover?this.hidePopover():this.open=!1,this.#U(t)}static{this.styles=[d`
      :host {
        display: none;
      }

      :host([popover]),
      :host([open]) {
        display: flex;

        position: fixed;
        inset: unset;
        left: 0;
        bottom: 0;
        border: 0;

        min-width: 240px;
        flex-direction: column;
        font-family: Roboto, Noto, sans-serif;
        -webkit-font-smoothing: antialiased;
        margin: 16px;
        padding: 8px;
        border-radius: 4px;
        background: var(--md-sys-color-inverse-surface);
        color: var(--md-sys-color-inverse-on-surface);
        font-size: 14px;
        -webkit-box-shadow:
          0 3px 5px -1px rgba(0, 0, 0, 0.2),
          0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);
        box-shadow:
          0 3px 5px -1px rgba(0, 0, 0, 0.2),
          0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);

        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      /* Firefox non-popover support */
      :host([open]) {
        z-index: 99;
      }

      div[main] {
        max-width: 600px;
        overflow: hidden;
        margin: 12px;
      }

      md-text-button {
        --md-text-button-label-text-color: var(--md-sys-color-inverse-primary);
        align-self: flex-end;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return V`
      <div main>${this.message}</div>
      <md-text-button ?hidden=${this.noAction} @click=${()=>this.close("dismiss")}>${this.actionText} </md-text-button>
    `}};s([gt({type:Boolean,reflect:!0})],ve.prototype,"open",null),s([gt({type:Boolean,reflect:!0})],ve.prototype,"noAction",null),s([gt({type:String})],ve.prototype,"actionText",null),s([gt({type:String})],ve.prototype,"message",null),ve=s([mt("titanium-simple-snackbar")],ve);let ge=class extends ut{#U;#M;get open(){return this.#M}set open(t){this.#M=t}#H=[];get httpErrors(){return this.#H}set httpErrors(t){this.#H=t}constructor(){super(),this.popover="manual"}show(t){return this.showPopover?this.showPopover():this.open=!0,this.httpErrors.push(t),new Promise((t=>{this.#U=t}))}addError(t){this.httpErrors=[...this.httpErrors,t]}#F=0;close(t=""){clearTimeout(this.#F),this.hidePopover?this.hidePopover():this.open=!1,this.#U(t)}static{this.styles=[...ve.styles,d`
      /* HTTP error styles */
      http-error {
        display: grid;
        gap: 24px;
        grid:
          'action status'
          'error error';
      }

      http-error [detail] {
        font-size: 12px;
        overflow-y: auto;
        overflow-y: auto;
        max-height: 400px;
        grid-column: 1 / -1;
      }

      http-error [error] {
        grid-area: error;
      }

      http-error [status] {
        grid-area: status;
        font-size: 12px;
        justify-self: end;
      }

      http-error [action] {
        grid-area: action;

        font-size: 12px;
      }

      div[actions] {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 6px;
      }

      [hidden] {
        display: none !important;
      }
    `]}#X(t){const e=t.split("\n"),i=e.length;return e.map(((t,e)=>e===i-1?t:V`${t}<br />`))}render(){return V`
      <div main>
        <http-error>
          <span action> ${this.httpErrors.length>1?V`${this.httpErrors.length} Network errors`:this.httpErrors?.[0]?.action} </span>
          <span status> ${this.httpErrors.length>1?V`${this.httpErrors?.[0]?.action}`:K} ${this.httpErrors?.[0]?.statusCode} </span>
          <span error>${this.#X(this.httpErrors?.[0]?.message??"")}</span>
          ${this.httpErrors?.[0]?.detail?V` <code detail>${this.#X(this.httpErrors?.[0]?.detail)}</code>`:K}
        </http-error>
      </div>
      <div actions>
        <md-text-button
          @click=${()=>{1===this.httpErrors.length?this.close("dismiss"):this.httpErrors=[...this.httpErrors.filter((t=>t!==this.httpErrors?.[0]))]}}
          >Dismiss
        </md-text-button>
        <md-text-button ?hidden=${1===this.httpErrors.length} @click=${()=>this.close("dismiss")}>Dismiss all (${this.httpErrors.length}) </md-text-button>
      </div>
    `}};s([gt({type:Boolean,reflect:!0})],ge.prototype,"open",null),s([gt({type:Array})],ge.prototype,"httpErrors",null),ge=s([mt("titanium-http-error-snackbar")],ge);class be extends Event{static{this.eventName="show-snackbar"}constructor(t,e){super(be.eventName,{bubbles:!0,composed:!0}),this.SnackbarMessage=t,this.SnackbarOptions=e}}let ye=class extends ut{constructor(){super(...arguments),this.SnackbarStack=[]}#G;get eventListenerTarget(){return this.#G}set eventListenerTarget(t){this.#G=t}connectedCallback(){(this.eventListenerTarget||this.getRootNode()).addEventListener(be.eventName,(t=>{t.stopImmediatePropagation(),this.open(t.SnackbarMessage,t.SnackbarOptions)}))}async open(t,e){let i,s;if("string"==typeof t){const o="<titanium-simple-snackbar newest></titanium-simple-snackbar>";this.insertAdjacentHTML("beforeend",o);const r=this.querySelector("titanium-simple-snackbar[newest]");r.removeAttribute("newest"),e&&(e.close=t=>r.close(t)),this.SnackbarStack.unshift(r),i=r.show(t,e),s=r}else{let o=this.querySelector("titanium-http-error-snackbar");if(o)return void o.addError(t);{const e="<titanium-http-error-snackbar></titanium-http-error-snackbar>";this.insertAdjacentHTML("beforeend",e),o=this.querySelector("titanium-http-error-snackbar"),this.SnackbarStack.unshift(o),i=o.show(t)}e&&(e.close=t=>o.close(t)),s=o}return this.reposition(),await i,this.SnackbarStack.splice(this.SnackbarStack.indexOf(s),1),s.remove(),this.reposition(),i}dismissAll(){this.SnackbarStack.forEach((t=>t.close()))}async reposition(){let t=0;for(let e=0;e<this.SnackbarStack.length;e++){const i=this.SnackbarStack[e];await i.updateComplete,0===i.clientHeight&&i.close(),i.style.bottom=`${t}px`,t+=i.clientHeight+12}}};s([gt({type:Object})],ye.prototype,"eventListenerTarget",null),ye=s([mt("titanium-snackbar-stack")],ye);class xe extends CustomEvent{static{this.eventType="pending-state"}constructor(t){super(xe.eventType,{bubbles:!0,composed:!0,detail:{promise:t}})}}const we="important",_e=" !"+we,ke=Gt(class extends Wt{constructor(t){if(super(t),t.type!==Xt.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(_e);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?we:""):i[t]=s}}return q}});class $e extends ut{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:t}=this;return V`
      <div
        class="progress ${Vt(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${t||K}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?K:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}se($e),s([gt({type:Number})],$e.prototype,"value",void 0),s([gt({type:Number})],$e.prototype,"max",void 0),s([gt({type:Boolean})],$e.prototype,"indeterminate",void 0),s([gt({type:Boolean,attribute:"four-color"})],$e.prototype,"fourColor",void 0);class Se extends $e{constructor(){super(...arguments),this.buffer=0}renderIndicator(){const t={transform:`scaleX(${100*(this.indeterminate?1:this.value/this.max)}%)`},e=this.buffer??0,i=e>0,s={transform:`scaleX(${100*(this.indeterminate||!i?1:e/this.max)}%)`},o=this.indeterminate||!i||e>=this.max||this.value>=this.max;return V`
      <div class="dots" ?hidden=${o}></div>
      <div class="inactive-track" style=${ke(s)}></div>
      <div class="bar primary-bar" style=${ke(t)}>
        <div class="bar-inner"></div>
      </div>
      <div class="bar secondary-bar">
        <div class="bar-inner"></div>
      </div>
    `}}s([gt({type:Number})],Se.prototype,"buffer",void 0);const Ee=d`:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, var(--md-sys-shape-corner-none, 0px));border-radius:var(--_track-shape);display:flex;position:relative;min-width:80px;height:var(--_track-height);content-visibility:auto;contain:strict}.progress,.dots,.inactive-track,.bar,.bar-inner{position:absolute}.progress{direction:ltr;inset:0;border-radius:inherit;overflow:hidden;display:flex;align-items:center}.bar{animation:none;width:100%;height:var(--_active-indicator-height);transform-origin:left center;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.inactive-track{background:var(--_track-color);inset:0;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.dots{inset:0;animation:linear infinite 250ms;animation-name:buffering;background-color:var(--_track-color);background-repeat:repeat-x;-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");z-index:-1}.dots[hidden]{display:none}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .primary-bar{animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate .primary-bar>.bar-inner{animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate .secondary-bar{animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate .secondary-bar>.bar-inner{animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host(:dir(rtl)){transform:scale(-1)}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(var(--_track-height) / 2 * 5))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.6714%)}100%{transform:translateX(200.611%)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.6519%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.3862%)}100%{transform:translateX(160.278%)}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media(forced-colors: active){:host{outline:1px solid CanvasText}.bar-inner,.dots{background-color:CanvasText}}
`;let ze=class extends Se{};ze.styles=[Ee],ze=s([mt("md-linear-progress")],ze);let Ae=class extends ut{#M;get open(){return this.#M}set open(t){this.#M=t}#W;#V;#q=75;#K=350;#Y;#Z=0;firstUpdated(){this.popover="manual",this.addEventListener("toggle",(t=>this.open="open"===t.newState)),window.addEventListener(xe.eventType,(async t=>{this.#J(),this.#Z++;try{await t.detail.promise}catch{}finally{this.#Z--,0===this.#Z&&this.#Q()}}))}#J(){window.clearTimeout(this.#W),window.clearTimeout(this.#V),this.#W=window.setTimeout((()=>{this.#Y=performance.now(),this.showPopover?this.showPopover():this.open=!0,this.style.display="block"}),this.#q)}#Q(){window.clearTimeout(this.#W);const t=performance.now()-this.#Y,e=Math.max(this.#K-t,0);this.#V=window.setTimeout((()=>{this.hidePopover?this.hidePopover():this.open=!1,this.style.display="none"}),e)}static{this.styles=d`
    :host {
      width: 100%;
      height: 100%;
      max-width: 100vw;
      max-height: 100vh;

      border: 0;
      inset: unset;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: 0;
      padding: 0;
      background: transparent;
    }

    :host::backdrop {
      background-color: var(--md-sys-color-scrim, #000);
      backdrop-filter: blur(6px);
    }

    :host(:popover-open)::backdrop {
      opacity: 0.32;
    }

    md-linear-progress {
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      left: 0;
    }
  `}render(){return V` <md-linear-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-linear-progress> `}};s([bt()],Ae.prototype,"open",null),Ae=s([mt("titanium-full-page-loading-indicator")],Ae);let Te=class extends ut{#D="We were unable to find the page you are looking for...";get message(){return this.#D}set message(t){this.#D=t}static{this.styles=d`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      font-family: Roboto, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;

      max-width: 1300px;
    }

    header {
      flex: 1 1 auto;
      margin-right: 24px;
    }

    h1 {
      font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
      font-weight: 600;
      font-size: 75px;
      line-height: 85px;
      margin: 0;
    }

    h2 {
      font-weight: 400;
      margin: 8px 0 0 4px;
      max-width: 75%;
    }

    img {
      flex-shrink: 0;
      height: 280px;
      width: 280px;
    }

    @media (max-width: 768px) {
      :host {
        margin-top: 24px;
      }

      h2 {
        max-width: inherit;
        font-size: 21px;
      }

      img {
        height: 120px;
        width: 120px;
        align-self: flex-start;
      }

      h1 {
        font-size: 55px;
        line-height: 65px;
      }
    }
  `}render(){return V`
      <header>
        <h1>Oops!</h1>
        <h2>${this.message}</h2>
      </header>
      <img src="https://www.leavitt.com/images/alert.svg" />
    `}};s([gt({type:String})],Te.prototype,"message",null),Te=s([mt("titanium-error-page")],Te);let Ce=class extends ut{#tt;get notificationsStatus(){return this.#tt}set notificationsStatus(t){this.#tt=t}#et="service-worker.js";get scriptUrl(){return this.#et}set scriptUrl(t){this.#et=t}#it;#st=!1;async connectedCallback(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration();t&&(t.addEventListener("updatefound",(()=>{this.#it=t.installing,this.#it?.addEventListener("statechange",(()=>{"installed"===this.#it?.state&&navigator.serviceWorker.controller&&this.#ot()}))})),t.waiting&&navigator.serviceWorker.controller&&(this.#it=t.waiting,this.#ot())),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.#st||(window.location.reload(),this.#st=!0)}))}}async#ot(){await this.dispatchEvent(new be("Site has been updated",{actionText:"RELOAD"})),this.#it?.postMessage({type:"SKIP_WAITING"})}render(){return V``}};var Ie;s([gt({type:String})],Ce.prototype,"notificationsStatus",null),s([gt({type:String})],Ce.prototype,"scriptUrl",null),Ce=s([mt("titanium-service-worker-notifier")],Ce);let Re=class extends ut{static{Ie=this}#rt;get dialog(){return this.#rt}set dialog(t){this.#rt=t}#at=!1;get fixed(){return this.#at}set fixed(t){this.#at=t}#nt=!1;get alwayShowContent(){return this.#nt}set alwayShowContent(t){this.#nt=t}#lt=!1;get hasHeader(){return this.#lt}set hasHeader(t){this.#lt=t}#ct=!1;get hasFooter(){return this.#ct}set hasFooter(t){this.#ct=t}async firstUpdated(){let t=0,e=0;this.addEventListener("touchstart",(e=>{t=e.changedTouches[0].screenX})),this.addEventListener("touchend",(i=>{e=i.changedTouches[0].screenX,t-e>50&&this.close()})),this.dialog?.addEventListener("click",(t=>{t.target instanceof Element&&"DIALOG"===t.target?.nodeName&&this.close()})),this.dialog?.addEventListener("cancel",(t=>{t.preventDefault(),this.close()})),window.addEventListener("popstate",(()=>this.dialog?.close()),!1),await Ie.animationsComplete(this.dialog),await Ie.animationsComplete(this.dialog),this.dialog?.removeAttribute("loading")}static async animationsComplete(t){return await Promise.allSettled(t.getAnimations().map((t=>t.finished)))}open(){this.dialog?.showModal(),this.dialog?.removeAttribute("hide"),this.setBodyOverflow("hidden")}async close(){this.dialog?.open&&(this.dialog?.setAttribute("hide",""),await Ie.animationsComplete(this.dialog),this.dialog?.close(),this.dialog?.removeAttribute("hide"))}closeQuick(){this.dialog?.open&&this.dialog?.close()}setBodyOverflow(t){const e=document.querySelector("html");e&&(e.style.overflow=t)}static{this.styles=d`
    :host {
      display: block;
    }

    dialog {
      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);
      box-sizing: border-box;

      grid:
        'content' 1fr
        'footer' auto;
    }

    :host([has-footer]) dialog {
      grid:
        'content' 1fr
        'footer' auto;
    }

    :host([has-header]) dialog {
      grid:
        'header' auto
        'content' 1fr;
    }

    :host([has-footer][has-header]) dialog {
      grid:
        'header' auto
        'content' 1fr
        'footer' auto;
    }

    dialog[loading] {
      visibility: hidden;
    }

    dialog[open] {
      display: grid;

      inset-inline-end: inherit;
      border: 0;
      padding: 0;
      margin: 0;
      width: 100%;
      flex-direction: column;
      width: 300px;

      min-height: 100dvh;
      max-height: -webkit-fill-available;

      border-right: 1px solid var(--md-sys-color-outline-variant);
      padding-right: 8px;
      animation: show 0.25s ease normal;
    }

    main {
      grid-area: content;
      scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
      scrollbar-width: thin;
      overflow-y: auto;
    }

    header,
    footer {
      display: none;

      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);
    }

    :host([has-footer]) header {
      display: grid;
      grid-area: header;
    }

    :host([has-footer]) footer {
      grid-area: footer;

      display: flex;
      flex-direction: row;
      padding: 8px 24px;
      gap: 24px;
    }

    footer ::slotted(a) {
      text-decoration: none;
      color: var(--md-sys-color-on-surface-variant);
      font-family: var(--titanium-styles-a-font-family, Metropolis, Roboto, Noto, sans-serif);
      font-weight: 400;
      font-size: 12px;
      opacity: 0.8;
    }

    :host([always-show-content]) dialog:not([open]) {
      position: sticky;
      top: var(--titanium-drawer-full-height-padding, 48px);

      display: grid;
      inset-inline-start: initial;
      inset-inline-end: inherit;
      border: 0;
      min-width: 300px;
      padding: 0;
      margin: 0;
      width: 100%;

      height: calc(100dvh - var(--titanium-drawer-full-height-padding, 48px));

      animation: show 0.25s ease normal;
    }

    ::slotted(h3) {
      font-family: 'Metropolis';
      color: var(--md-sys-color-on-background);
      margin: 0px;
      font-weight: 400;
      padding: 12px 0px 4px 16px;
    }

    ::slotted(h4) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--md-sys-color-on-background);
      font-weight: 400;
      margin: 0px;
      padding: 16px 16px 8px 16px;
      min-height: 24px;
    }

    ::slotted(h4[sub]) {
      font-weight: 300;
      font-size: 14px;
      padding: 4px 12px 2px 66px;
      cursor: inherit;
    }

    dialog[hide] {
      animation: close 0.25s ease normal;
    }

    @keyframes show {
      from {
        transform: translateX(-110%);
      }
      to {
        transform: translateX(0%);
      }
    }

    @keyframes close {
      to {
        transform: translateX(-110%);
      }
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
    }

    @supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))) {
      dialog::backdrop {
        background-color: rgba(255, 255, 255, 0.7);
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
        /* Not supported yet */
        transition: backdrop-filter 0.5s ease;
      }
    }
  `}render(){return V`<dialog
      loading
      @close=${()=>{this.setBodyOverflow("")}}
      part="dialog"
    >
      <header part="header"><slot name="header" @slotchange=${()=>this.hasHeader=this.headerElements.length>0}></slot></header>
      <main part="main"><slot></slot></main>
      <footer part="footer"><slot name="footer" @slotchange=${()=>this.hasFooter=this.footerElements.length>0}></slot></footer>
    </dialog>`}};s([xt("dialog")],Re.prototype,"dialog",null),s([gt({type:Boolean,reflect:!0})],Re.prototype,"fixed",null),s([gt({type:Boolean,reflect:!0,attribute:"always-show-content"})],Re.prototype,"alwayShowContent",null),s([gt({type:Boolean,reflect:!0,attribute:"has-header"})],Re.prototype,"hasHeader",null),s([gt({type:Boolean,reflect:!0,attribute:"has-footer"})],Re.prototype,"hasFooter",null),s([kt({slot:"header"})],Re.prototype,"headerElements",void 0),s([kt({slot:"footer"})],Re.prototype,"footerElements",void 0),Re=Ie=s([mt("titanium-drawer")],Re);let Pe=class extends ut{#dt;get fileName(){return this.#dt}set fileName(t){this.#dt=t}#ht="circle";get shape(){return this.#ht}set shape(t){this.#ht=t}#ut;get showRing(){return this.#ut}set showRing(t){this.#ut=t}#pt;get profilePictureLinkPersonId(){return this.#pt}set profilePictureLinkPersonId(t){this.#pt=t}#mt=120;get size(){return this.#mt}set size(t){this.#mt=t}#ft=!1;get useIntrinsicImageSize(){return this.#ft}set useIntrinsicImageSize(t){this.#ft=t}#vt=new Set([32,64,128,256,512,1024]);updated(t){(t.has("size")||t.has("useIntrinsicImageSize"))&&(this.style.width=this.useIntrinsicImageSize||!this.size?"":this.size+"px",this.style.height=this.useIntrinsicImageSize||!this.size?"":this.size+"px")}#gt(t){const e=[...this.#vt];for(let i=0;i<e.length;i++){const s=e[i];if(t<=s)return s}return 512}#bt(t,e){const i=this.#gt(e);return t?`https://cdn.leavitt.com/${t}-${i}.webp`:"https://cdn.leavitt.com/icon-user-profile-sq.svg"}static{this.styles=d`
    :host {
      display: inline-block;
      white-space: normal;
      flex-shrink: 0;
      position: relative;
    }

    img {
      display: block;
      width: 100%;
      aspect-ratio: 1;
      image-rendering: -webkit-optimize-contrast;
    }

    :host([shape='circle']) a:after,
    :host([shape='circle']) img {
      border-radius: 50%;
    }

    :host([show-ring]) {
      justify-self: center;
      border: 3px solid var(--profile-picture-ring-color, var(--app-accent-color-blue, #4285f4));
      padding: 3px;
    }

    :host([show-ring][shape='circle']) {
      border-radius: 50%;
    }

    a:after,
    a:before {
      position: absolute;
      opacity: 0;
      transition: all 0.5s;
      -webkit-transition: all 0.5s;
    }

    a:after {
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.2);
    }

    a:before {
      content: '↗';
      width: 100%;
      color: #fff;
      z-index: 1;
      bottom: 0;
      text-align: center;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
    }

    a:hover:before,
    a:hover:after {
      opacity: 1;
    }
  `}renderProfilePicture(){return V` <img loading="lazy" draggable="false" alt="User profile picture" src=${this.#bt(this.fileName,this.size)} /> `}render(){return this.profilePictureLinkPersonId?V`<a target="_blank" href="https://${Ct?"dev":""}directory.leavitt.com/profile/${this.profilePictureLinkPersonId}"
        >${this.renderProfilePicture()}</a
      > `:this.renderProfilePicture()}};function Ne(t,e=De){const i=Ue(t,e);return i&&(i.tabIndex=0,i.focus()),i}function Oe(t,e=De){const i=Me(t,e);return i&&(i.tabIndex=0,i.focus()),i}function je(t,e=De){for(let i=0;i<t.length;i++){const s=t[i];if(0===s.tabIndex&&e(s))return{item:s,index:i}}return null}function Ue(t,e=De){for(const i of t)if(e(i))return i;return null}function Me(t,e=De){for(let i=t.length-1;i>=0;i--){const s=t[i];if(e(s))return s}return null}function Le(t,e,i=De,s=!0){if(e){const o=function(t,e,i=De,s=!0){for(let o=1;o<t.length;o++){const r=(o+e)%t.length;if(r<e&&!s)return null;const a=t[r];if(i(a))return a}return t[e]?t[e]:null}(t,e.index,i,s);return o&&(o.tabIndex=0,o.focus()),o}return Ne(t,i)}function Be(t,e,i=De,s=!0){if(e){const o=function(t,e,i=De,s=!0){for(let o=1;o<t.length;o++){const r=(e-o+t.length)%t.length;if(r>e&&!s)return null;const a=t[r];if(i(a))return a}return t[e]?t[e]:null}(t,e.index,i,s);return o&&(o.tabIndex=0,o.focus()),o}return Oe(t,i)}function De(t){return!t.disabled}s([gt({reflect:!0,type:String})],Pe.prototype,"fileName",null),s([gt({reflect:!0,type:String})],Pe.prototype,"shape",null),s([gt({reflect:!0,type:Boolean,attribute:"show-ring"})],Pe.prototype,"showRing",null),s([gt({reflect:!0,type:Number,attribute:"profile-picture-link-person-id"})],Pe.prototype,"profilePictureLinkPersonId",null),s([gt({type:Number})],Pe.prototype,"size",null),s([gt({type:Boolean})],Pe.prototype,"useIntrinsicImageSize",null),Pe=s([mt("profile-picture")],Pe);const Fe={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class He{constructor(t){this.handleKeydown=t=>{const e=t.key;if(t.defaultPrevented||!this.isNavigableKey(e))return;const i=this.items;if(!i.length)return;const s=je(i,this.isActivatable);t.preventDefault();const o=this.isRtl();let r=null;switch(e){case Fe.ArrowDown:case o?Fe.ArrowLeft:Fe.ArrowRight:r=Le(i,s,this.isActivatable,this.wrapNavigation());break;case Fe.ArrowUp:case o?Fe.ArrowRight:Fe.ArrowLeft:r=Be(i,s,this.isActivatable,this.wrapNavigation());break;case Fe.Home:r=Ne(i,this.isActivatable);break;case Fe.End:r=Oe(i,this.isActivatable)}r&&s&&s.item!==r&&(s.item.tabIndex=-1)},this.onDeactivateItems=()=>{const t=this.items;for(const e of t)this.deactivateItem(e)},this.onRequestActivation=t=>{this.onDeactivateItems();const e=t.target;this.activateItem(e),e.focus()},this.onSlotchange=()=>{const t=this.items;let e=!1;for(const i of t){!(!i.disabled&&i.tabIndex>-1)||e?i.tabIndex=-1:(e=!0,i.tabIndex=0)}if(e)return;const i=Ue(t,this.isActivatable);i&&(i.tabIndex=0)};const{isItem:e,getPossibleItems:i,isRtl:s,deactivateItem:o,activateItem:r,isNavigableKey:a,isActivatable:n,wrapNavigation:l}=t;this.isItem=e,this.getPossibleItems=i,this.isRtl=s,this.deactivateItem=o,this.activateItem=r,this.isNavigableKey=a,this.isActivatable=n,this.wrapNavigation=l??(()=>!0)}get items(){const t=this.getPossibleItems(),e=[];for(const i of t){if(this.isItem(i)){e.push(i);continue}const t=i.item;t&&this.isItem(t)&&e.push(t)}return e}activateNextItem(){const t=this.items,e=je(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Le(t,e,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const t=this.items,e=je(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Be(t,e,this.isActivatable,this.wrapNavigation())}}const Xe=function(t,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:t,reason:e,itemPath:[t]}})},Ge={SPACE:"Space",ENTER:"Enter"},We={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},Ve={ESCAPE:"Escape",SPACE:Ge.SPACE,ENTER:Ge.ENTER};function qe(t){return Object.values(Ve).some((e=>e===t))}function Ke(t){return Object.values(Ge).some((e=>e===t))}function Ye(t,e){const i=new Event("md-contains",{bubbles:!0,composed:!0});let s=[];const o=t=>{s=t.composedPath()};e.addEventListener("md-contains",o),t.dispatchEvent(i),e.removeEventListener("md-contains",o);return s.length>0}const Ze={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"},Je="end-start",Qe="start-start";class ti{constructor(t,e){this.host=t,this.getProperties=e,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:t,anchorEl:e,anchorCorner:i,surfaceCorner:s,positioning:o,xOffset:r,yOffset:a,repositionStrategy:n}=this.getProperties(),l=i.toLowerCase().trim(),c=s.toLowerCase().trim();if(!t||!e)return;const d=window.innerWidth,h=window.innerHeight,u=document.createElement("div");u.style.opacity="0",u.style.position="fixed",u.style.display="block",u.style.inset="0",document.body.appendChild(u);const p=u.getBoundingClientRect();u.remove();const m=window.innerHeight-p.bottom,f=window.innerWidth-p.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,t.popover&&t.isConnected&&t.showPopover();const v=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),g=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),[b,y]=c.split("-"),[x,w]=l.split("-"),_="ltr"===getComputedStyle(t).direction;let{blockInset:k,blockOutOfBoundsCorrection:$,surfaceBlockProperty:S}=this.calculateBlock({surfaceRect:v,anchorRect:g,anchorBlock:x,surfaceBlock:b,yOffset:a,positioning:o,windowInnerHeight:h,blockScrollbarHeight:m});if($){const t="start"===b?"end":"start",e="start"===x?"end":"start",i=this.calculateBlock({surfaceRect:v,anchorRect:g,anchorBlock:e,surfaceBlock:t,yOffset:a,positioning:o,windowInnerHeight:h,blockScrollbarHeight:m});$>i.blockOutOfBoundsCorrection&&(k=i.blockInset,$=i.blockOutOfBoundsCorrection,S=i.surfaceBlockProperty)}let{inlineInset:E,inlineOutOfBoundsCorrection:z,surfaceInlineProperty:A}=this.calculateInline({surfaceRect:v,anchorRect:g,anchorInline:w,surfaceInline:y,xOffset:r,positioning:o,isLTR:_,windowInnerWidth:d,inlineScrollbarWidth:f});if(z){const t="start"===y?"end":"start",e="start"===w?"end":"start",i=this.calculateInline({surfaceRect:v,anchorRect:g,anchorInline:e,surfaceInline:t,xOffset:r,positioning:o,isLTR:_,windowInnerWidth:d,inlineScrollbarWidth:f});Math.abs(z)>Math.abs(i.inlineOutOfBoundsCorrection)&&(E=i.inlineInset,z=i.inlineOutOfBoundsCorrection,A=i.surfaceInlineProperty)}"move"===n&&(k-=$,E-=z),this.surfaceStylesInternal={display:"block",opacity:"1",[S]:`${k}px`,[A]:`${E}px`},"resize"===n&&($&&(this.surfaceStylesInternal.height=v.height-$+"px"),z&&(this.surfaceStylesInternal.width=v.width-z+"px")),this.host.requestUpdate()}calculateBlock(t){const{surfaceRect:e,anchorRect:i,anchorBlock:s,surfaceBlock:o,yOffset:r,positioning:a,windowInnerHeight:n,blockScrollbarHeight:l}=t,c="fixed"===a||"document"===a?1:0,d="document"===a?1:0,h="start"===o?1:0,u="end"===o?1:0,p=(s!==o?1:0)*i.height+r,m=h*i.top+u*(n-i.bottom-l);return{blockInset:c*m+d*(h*window.scrollY-u*window.scrollY)+p,blockOutOfBoundsCorrection:Math.abs(Math.min(0,n-m-p-e.height)),surfaceBlockProperty:"start"===o?"inset-block-start":"inset-block-end"}}calculateInline(t){const{isLTR:e,surfaceInline:i,anchorInline:s,anchorRect:o,surfaceRect:r,xOffset:a,positioning:n,windowInnerWidth:l,inlineScrollbarWidth:c}=t,d="fixed"===n||"document"===n?1:0,h="document"===n?1:0,u=e?1:0,p=e?0:1,m="start"===i?1:0,f="end"===i?1:0,v=(s!==i?1:0)*o.width+a,g=u*(m*o.left+f*(l-o.right-c))+p*(m*(l-o.right-c)+f*o.left);let b="start"===i?"inset-inline-start":"inset-inline-end";return"document"!==n&&"fixed"!==n||(b="start"===i&&e||"end"===i&&!e?"left":"right"),{inlineInset:d*g+v+h*(u*(m*window.scrollX-f*window.scrollX)+p*(f*window.scrollX-m*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-g-v-r.width)),surfaceInlineProperty:b}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const t=this.getProperties();let e=!1;for(const[i,s]of Object.entries(t))if(e=e||s!==this.lastValues[i],e)break;const i=this.lastValues.isOpen!==t.isOpen,s=!!t.anchorEl,o=!!t.surfaceEl;e&&s&&o&&(this.lastValues.isOpen=t.isOpen,t.isOpen?(this.lastValues=t,await this.position(),t.onOpen()):i&&(await t.beforeClose(),this.close(),t.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const t=this.getProperties().surfaceEl;t?.popover&&t?.isConnected&&t.hidePopover()}}const ei={INDEX:0,ITEM:1,TEXT:2};class ii{constructor(t){this.getProperties=t,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=t=>{this.isTypingAhead?this.typeahead(t):this.beginTypeahead(t)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(t){this.active&&("Space"===t.code||"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map(((t,e)=>[e,t,t.typeaheadText.trim().toLowerCase()])),this.lastActiveRecord=this.typeaheadRecords.find((t=>0===t[ei.ITEM].tabIndex))??null,this.lastActiveRecord&&(this.lastActiveRecord[ei.ITEM].tabIndex=-1),this.typeahead(t)))}typeahead(t){if(t.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[ei.ITEM].tabIndex=-1));"Space"===t.code&&t.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=t.key.toLowerCase();const e=this.lastActiveRecord?this.lastActiveRecord[ei.INDEX]:-1,i=this.typeaheadRecords.length,s=t=>(t[ei.INDEX]+i-e)%i,o=this.typeaheadRecords.filter((t=>!t[ei.ITEM].disabled&&t[ei.TEXT].startsWith(this.typaheadBuffer))).sort(((t,e)=>s(t)-s(e)));if(0===o.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[ei.ITEM].tabIndex=-1),void this.endTypeahead();const r=1===this.typaheadBuffer.length;let a;a=this.lastActiveRecord===o[0]&&r?o[1]??o[0]:o[0],this.lastActiveRecord&&(this.lastActiveRecord[ei.ITEM].tabIndex=-1),this.lastActiveRecord=a,a[ei.ITEM].tabIndex=0,a[ei.ITEM].focus()}}const si=200,oi=new Set([Fe.ArrowDown,Fe.ArrowUp,Fe.Home,Fe.End]),ri=new Set([Fe.ArrowLeft,Fe.ArrowRight,...oi]);class ai extends ut{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(t){this.currentAnchorElement=t,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.typeaheadDelay=200,this.anchorCorner=Je,this.menuCorner=Qe,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=Ze.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=function(){let t=null;return{start:()=>(t?.abort(),t=new AbortController,t.signal),finish(){t=null}}}(),this.listController=new He({isItem:t=>t.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.selected=!1,t.tabIndex=-1},activateItem:t=>{t.selected=!0,t.tabIndex=0},isNavigableKey:t=>{if(!this.isSubmenu)return ri.has(t);return t===("rtl"===getComputedStyle(this).direction?Fe.ArrowLeft:Fe.ArrowRight)||oi.has(t)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new ii((()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive}))),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new ti(this,(()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"}))),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async t=>{const e=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(e))return;if(t.relatedTarget){if(Ye(t.relatedTarget,this)||0!==this.pointerPath.length&&Ye(t.relatedTarget,e))return}else if(this.pointerPath.includes(this))return;const i=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=i},this.onOpened=async()=>{this.lastFocusedElement=function(t=document){let e=t.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}();const t=this.items,e=je(t);e&&this.defaultFocus!==Ze.NONE&&(e.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case Ze.FIRST_ITEM:const e=Ue(t);e&&(e.tabIndex=0,e.focus(),await e.updateComplete);break;case Ze.LAST_ITEM:const i=Me(t);i&&(i.tabIndex=0,i.focus(),await i.updateComplete);break;case Ze.LIST_ROOT:this.focus()}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=t=>{this.pointerPath=t.composedPath()},this.onDocumentClick=t=>{if(!this.open)return;const e=t.composedPath();this.stayOpenOnOutsideClick||e.includes(this)||e.includes(this.anchorElement)||(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(t){t.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(t){t.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}render(){return this.renderSurface()}renderSurface(){return V`
      <div
        class="menu ${Vt(this.getSurfaceClasses())}"
        style=${ke(this.menuPositionController.surfaceStyles)}
        popover=${"popover"===this.positioning?"manual":K}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return V`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return V`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(t){t.target===this&&!t.defaultPrevented&&qe(t.code)&&(t.preventDefault(),this.close()),this.typeaheadController.onKeydown(t)}async animateOpen(){const t=this.surfaceEl,e=this.slotEl;if(!t||!e)return!0;const i=this.openDirection;this.dispatchEvent(new Event("opening")),t.classList.toggle("animating",!0);const s=this.openCloseAnimationSignal.start(),o=t.offsetHeight,r="UP"===i,a=this.items,n=250/a.length,l=t.animate([{height:"0px"},{height:`${o}px`}],{duration:500,easing:qt.EMPHASIZED}),c=e.animate([{transform:r?`translateY(-${o}px)`:""},{transform:""}],{duration:500,easing:qt.EMPHASIZED}),d=t.animate([{opacity:0},{opacity:1}],50),h=[];for(let t=0;t<a.length;t++){const e=a[r?a.length-1-t:t],i=e.animate([{opacity:0},{opacity:1}],{duration:250,delay:n*t});e.classList.toggle("md-menu-hidden",!0),i.addEventListener("finish",(()=>{e.classList.toggle("md-menu-hidden",!1)})),h.push([e,i])}let u=t=>{};const p=new Promise((t=>{u=t}));return s.addEventListener("abort",(()=>{l.cancel(),c.cancel(),d.cancel(),h.forEach((([t,e])=>{t.classList.toggle("md-menu-hidden",!1),e.cancel()})),u(!0)})),l.addEventListener("finish",(()=>{t.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),u(!1)})),await p}animateClose(){let t,e;const i=new Promise(((i,s)=>{t=i,e=s})),s=this.surfaceEl,o=this.slotEl;if(!s||!o)return e(),i;const r="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),s.classList.toggle("animating",!0);const a=this.openCloseAnimationSignal.start(),n=s.offsetHeight,l=this.items,c=150,d=50/l.length,h=s.animate([{height:`${n}px`},{height:.35*n+"px"}],{duration:c,easing:qt.EMPHASIZED_ACCELERATE}),u=o.animate([{transform:""},{transform:r?`translateY(-${.65*n}px)`:""}],{duration:c,easing:qt.EMPHASIZED_ACCELERATE}),p=s.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),m=[];for(let t=0;t<l.length;t++){const e=l[r?t:l.length-1-t],i=e.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+d*t});i.addEventListener("finish",(()=>{e.classList.toggle("md-menu-hidden",!0)})),m.push([e,i])}return a.addEventListener("abort",(()=>{h.cancel(),u.cancel(),p.cancel(),m.forEach((([t,e])=>{e.cancel(),t.classList.toggle("md-menu-hidden",!1)})),e()})),h.addEventListener("finish",(()=>{s.classList.toggle("animating",!1),m.forEach((([t])=>{t.classList.toggle("md-menu-hidden",!1)})),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),t(!0)})),i}handleKeydown(t){this.pointerPath=[],this.listController.handleKeydown(t)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(t){t.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(t){t.stopPropagation(),this.listController.onRequestActivation(t)}handleDeactivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach((t=>{t.close?.()}))}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}s([xt(".menu")],ai.prototype,"surfaceEl",void 0),s([xt("slot")],ai.prototype,"slotEl",void 0),s([gt()],ai.prototype,"anchor",void 0),s([gt()],ai.prototype,"positioning",void 0),s([gt({type:Boolean})],ai.prototype,"quick",void 0),s([gt({type:Boolean,attribute:"has-overflow"})],ai.prototype,"hasOverflow",void 0),s([gt({type:Boolean,reflect:!0})],ai.prototype,"open",void 0),s([gt({type:Number,attribute:"x-offset"})],ai.prototype,"xOffset",void 0),s([gt({type:Number,attribute:"y-offset"})],ai.prototype,"yOffset",void 0),s([gt({type:Number,attribute:"typeahead-delay"})],ai.prototype,"typeaheadDelay",void 0),s([gt({attribute:"anchor-corner"})],ai.prototype,"anchorCorner",void 0),s([gt({attribute:"menu-corner"})],ai.prototype,"menuCorner",void 0),s([gt({type:Boolean,attribute:"stay-open-on-outside-click"})],ai.prototype,"stayOpenOnOutsideClick",void 0),s([gt({type:Boolean,attribute:"stay-open-on-focusout"})],ai.prototype,"stayOpenOnFocusout",void 0),s([gt({type:Boolean,attribute:"skip-restore-focus"})],ai.prototype,"skipRestoreFocus",void 0),s([gt({attribute:"default-focus"})],ai.prototype,"defaultFocus",void 0),s([gt({type:Boolean,attribute:"no-navigation-wrap"})],ai.prototype,"noNavigationWrap",void 0),s([kt({flatten:!0})],ai.prototype,"slotItems",void 0),s([bt()],ai.prototype,"typeaheadActive",void 0);const ni=d`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;let li=class extends ai{};li.styles=[ni],li=s([mt("md-menu")],li);class ci extends ue{renderElevationOrOutline(){return V`<div class="outline"></div>`}}const di=d`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;let hi=class extends ci{};hi.styles=[Ot,di],hi=s([mt("md-outlined-button")],hi);class ui extends ut{render(){return V`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}const pi=d`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;let mi=class extends ui{};mi.styles=[pi],mi=s([mt("md-icon")],mi);const fi=Symbol.for(""),vi=t=>{if(t?.r===fi)return t?._$litStatic$},gi=(t,...e)=>({_$litStatic$:e.reduce(((e,i,s)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]),r:fi}),bi=new Map,yi=(t=>(e,...i)=>{const s=i.length;let o,r;const a=[],n=[];let l,c=0,d=!1;for(;c<s;){for(l=e[c];c<s&&void 0!==(r=i[c],o=vi(r));)l+=o+e[++c],d=!0;c!==s&&n.push(r),a.push(l),c++}if(c===s&&a.push(e[s]),d){const t=a.join("$$lit$$");void 0===(e=bi.get(t))&&(a.raw=a,bi.set(t,e=a)),i=n}return t(e,...i)})(V);function xi(t,e=!0){return e&&"rtl"===getComputedStyle(t).getPropertyValue("direction").trim()}const wi=ae(ut);class _i extends wi{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=xi(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[oe].form}get labels(){return this[oe].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const t=this.href?gi`div`:gi`button`,{ariaLabel:e,ariaHasPopup:i,ariaExpanded:s}=this,o=e&&this.ariaLabelSelected,r=this.toggle?this.selected:K;let a=K;return this.href||(a=o&&this.selected?this.ariaLabelSelected:e),yi`<${t}
        class="icon-button ${Vt(this.getRenderClasses())}"
        id="button"
        aria-label="${a||K}"
        aria-haspopup="${!this.href&&i||K}"
        aria-expanded="${!this.href&&s||K}"
        aria-pressed="${r}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?K:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():K}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return V`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||K}"
        aria-label="${t||K}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return V`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return V`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return V`<span class="touch"></span>`}renderFocusRing(){return V`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return V`<md-ripple
      for=${this.href?"link":K}
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=xi(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(t){await 0,!this.toggle||this.disabled||t.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}se(_i),ne(_i),_i.formAssociated=!0,_i.shadowRootOptions={mode:"open",delegatesFocus:!0},s([gt({type:Boolean,reflect:!0})],_i.prototype,"disabled",void 0),s([gt({type:Boolean,attribute:"flip-icon-in-rtl"})],_i.prototype,"flipIconInRtl",void 0),s([gt()],_i.prototype,"href",void 0),s([gt()],_i.prototype,"target",void 0),s([gt({attribute:"aria-label-selected"})],_i.prototype,"ariaLabelSelected",void 0),s([gt({type:Boolean})],_i.prototype,"toggle",void 0),s([gt({type:Boolean,reflect:!0})],_i.prototype,"selected",void 0),s([gt()],_i.prototype,"type",void 0),s([gt({reflect:!0})],_i.prototype,"value",void 0),s([bt()],_i.prototype,"flipIcon",void 0);const ki=d`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`,$i=d`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}
`;let Si=class extends _i{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Si.styles=[ki,$i],Si=s([mt("md-icon-button")],Si);let Ei=class extends ut{constructor(){super(...arguments),this.#mt=40,this.#p=0,this.#u="",this.#c="",this.#yt="",this.positioning="popover"}#mt;get size(){return this.#mt}set size(t){this.#mt=t}#h;get profilePictureFileName(){return this.#h}set profilePictureFileName(t){this.#h=t}#p;get personId(){return this.#p}set personId(t){this.#p=t}#u;get email(){return this.#u}set email(t){this.#u=t}#c;get company(){return this.#c}set company(t){this.#c=t}#yt;get name(){return this.#yt}set name(t){this.#yt=t}#xt;get menu(){return this.#xt}set menu(t){this.#xt=t}firstUpdated(){Pt().addEventListener(It.eventName,(()=>this.setUserProps())),this.setUserProps()}setUserProps(){this.personId=Pt().personId,this.profilePictureFileName=Pt().profilePictureFileName,this.email=Pt().email,this.company=Pt().company,this.name=Pt().fullname}updated(t){t.has("size")&&t.get("size")!==this.size&&(this.style.width=this.size+"px",this.style.height=this.size+"px"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}static{this.styles=d`
    :host {
      display: block;
      position: relative;
    }

    md-menu main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
    }

    md-menu main profile-picture {
      margin: 24px 24px 20px;
    }

    md-menu h1 {
      display: block;
      font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.25px;
      margin: 0;
      padding: 0 24px 0 24px;
    }

    md-menu h2 {
      display: flex;
      font-family: Roboto, sans-serif;

      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.25px;
      margin: 0;
      padding: 0 24px 12px 24px;
    }

    md-menu h2[company] {
      padding-bottom: 12px;
    }

    md-menu slot-container {
      display: flex;
      flex-direction: column;
    }

    md-outlined-button {
      margin: 8px 24px 24px 24px;
    }

    md-menu footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 8px;
    }
  `}render(){return V`
      <md-icon-button
        id="icon-button"
        @click=${()=>{this.personId?this.menu.open=!this.menu.open:Pt().authenticateAsync()}}
        style=${ke({height:`${this.size}px`,width:`${this.size}px`})}
      >
        <profile-picture shape="circle" .fileName=${this.profilePictureFileName} .size=${this.size}></profile-picture>
      </md-icon-button>
      <md-menu y-offset="4" anchor="icon-button" menu-corner="start-end" anchor-corner="end-end" .positioning=${this.positioning}>
        <main>
          <profile-picture shape="circle" .fileName=${this.profilePictureFileName} size="90"></profile-picture>
          <h1>${this.name}</h1>
          ${this.company?V`<h2 company>${this.company}</h2>`:""}
          <h2>${this.email}</h2>
          <slot-container>
            <slot name="content"></slot>
          </slot-container>
          <md-outlined-button account href="https://accounts.leavitt.com/" target="_blank"
            ><md-icon slot="icon">apps</md-icon>Browse Leavitt applications</md-outlined-button
          >
        </main>
        <md-divider role="separator" tabindex="-1"></md-divider>
        <footer>
          <md-text-button href="https://accounts.leavitt.com/profile" target="_blank">Account settings</md-text-button>
          <md-text-button @click=${()=>Pt().logout()}>Sign out</md-text-button>
        </footer>
      </md-menu>
    `}};s([gt({type:Number})],Ei.prototype,"size",null),s([gt({type:String})],Ei.prototype,"profilePictureFileName",null),s([gt({type:Number})],Ei.prototype,"personId",null),s([gt({type:String})],Ei.prototype,"email",null),s([gt({type:String})],Ei.prototype,"company",null),s([gt({type:String})],Ei.prototype,"name",null),s([xt("md-menu")],Ei.prototype,"menu",null),s([gt()],Ei.prototype,"positioning",void 0),Ei=s([mt("profile-picture-menu")],Ei);const zi=d`:host{--_container-height: var(--md-outlined-icon-button-container-height, 40px);--_container-width: var(--md-outlined-icon-button-container-width, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_disabled-outline-color: var(--md-outlined-icon-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-icon-button-disabled-outline-opacity, 0.12);--_focus-icon-color: var(--md-outlined-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-outlined-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-outlined-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_icon-color: var(--md-outlined-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-outlined-icon-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-icon-button-outline-width, 1px);--_pressed-icon-color: var(--md-outlined-icon-button-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-outlined-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-outlined-icon-button-container-shape-start-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-icon-button-container-shape-start-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-icon-button-container-shape-end-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-icon-button-container-shape-end-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.outlined{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_outline-color);border-width:var(--_outline-width)}.outlined:hover{color:var(--_hover-icon-color)}.outlined:focus{color:var(--_focus-icon-color)}.outlined:active{color:var(--_pressed-icon-color)}.outlined:disabled{color:var(--_disabled-icon-color)}.outlined:disabled::before{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.outlined:disabled .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}.selected:disabled::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){:host([disabled]){--_disabled-outline-opacity: 1}.selected::before{border-color:CanvasText;border-width:var(--_outline-width)}.selected:disabled::before{border-color:GrayText;opacity:1}}
`;let Ai=class extends _i{getRenderClasses(){return{...super.getRenderClasses(),outlined:!0}}};Ai.styles=[ki,zi],Ai=s([mt("md-outlined-icon-button")],Ai);const Ti=new Set(Object.values(Fe));class Ci extends ut{get items(){return this.listController.items}constructor(){super(),this.listController=new He({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>Ti.has(t),isActivatable:t=>!t.disabled&&"text"!==t.type}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return V`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}s([kt({flatten:!0})],Ci.prototype,"slotItems",void 0);const Ii=d`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;let Ri=class extends Ci{};Ri.styles=[Ii],Ri=s([mt("md-list")],Ri);class Pi extends ut{constructor(){super(...arguments),this.multiline=!1}render(){return V`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let t=!1,e=0;for(const i of this.textSlots)if(Ni(i)&&(e+=1),e>1){t=!0;break}this.multiline=t}}function Ni(t){for(const e of t.assignedNodes({flatten:!0})){const t=e.nodeType===Node.ELEMENT_NODE,i=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(t||i)return!0}return!1}s([gt({type:Boolean,reflect:!0})],Pi.prototype,"multiline",void 0),s([_t(".text slot")],Pi.prototype,"textSlots",void 0);const Oi=d`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;let ji=class extends Pi{};ji.styles=[Oi],ji=s([mt("md-item")],ji);class Ui extends ut{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&"link"!==this.type}willUpdate(t){this.href&&(this.type="link"),super.willUpdate(t)}render(){return this.renderListItem(V`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const e="link"===this.type;let i;switch(this.type){case"link":i=gi`a`;break;case"button":i=gi`button`;break;default:i=gi`li`}const s="text"!==this.type,o=e&&this.target?this.target:K;return yi`
      <${i}
        id="item"
        tabindex="${this.isDisabled||!s?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||K}
        aria-checked=${this.ariaChecked||K}
        aria-expanded=${this.ariaExpanded||K}
        aria-haspopup=${this.ariaHasPopup||K}
        class="list-item ${Vt(this.getRenderClasses())}"
        href=${this.href||K}
        target=${o}
        @focus=${this.onFocus}
      >${t}</${i}>
    `}renderRipple(){return"text"===this.type?K:V` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return"text"===this.type?K:V` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(t){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return V`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){-1===this.tabIndex&&this.dispatchEvent(new Event("request-activation",{bubbles:!0,composed:!0}))}focus(){this.listItemRoot?.focus()}}se(Ui),Ui.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0},s([gt({type:Boolean,reflect:!0})],Ui.prototype,"disabled",void 0),s([gt({reflect:!0})],Ui.prototype,"type",void 0),s([gt({type:Boolean,attribute:"md-list-item",reflect:!0})],Ui.prototype,"isListItem",void 0),s([gt()],Ui.prototype,"href",void 0),s([gt()],Ui.prototype,"target",void 0),s([xt(".list-item")],Ui.prototype,"listItemRoot",void 0);const Mi=d`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;let Li=class extends Ui{};Li.styles=[Mi],Li=s([mt("md-list-item")],Li);var Bi=function(){return Bi=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Bi.apply(this,arguments)},Di=function(){function t(t,e,i){var s=this;this.endVal=e,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration);var i=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=i?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(t){var e,i,o,r,a=t<0?"-":"";e=Math.abs(t).toFixed(s.options.decimalPlaces);var n=(e+="").split(".");if(i=n[0],o=n.length>1?s.options.decimal+n[1]:"",s.options.useGrouping){r="";for(var l=3,c=0,d=0,h=i.length;d<h;++d)s.options.useIndianSeparators&&4===d&&(l=2,c=1),0!==d&&c%l==0&&(r=s.options.separator+r),c++,r=i[h-d-1]+r;i=r}return s.options.numerals&&s.options.numerals.length&&(i=i.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),o=o.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),a+s.options.prefix+i+o+s.options.suffix},this.easeOutExpo=function(t,e,i,s){return i*(1-Math.pow(2,-10*t/s))*1024/1023+e},this.options=Bi(Bi({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),s=i.top+window.pageYOffset,o=i.top+i.height+window.pageYOffset;o<e&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||s>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var i=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,i):"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();let Fi=class extends ut{#wt;get major(){return this.#wt}set major(t){this.#wt=t}#_t;get minor(){return this.#_t}set minor(t){this.#_t=t}#kt;get rev(){return this.#kt}set rev(t){this.#kt=t}#$t;get downloads(){return this.#$t}set downloads(t){this.#$t=t}#St="@leavittsoftware%2Fweb";async firstUpdated(){const t=await this.#Et(this.#St);if(t){const[e,i,s]=t.version?.split(".")?.map((t=>Number(t)))??[],o=new Di(this.major,e,{suffix:".",duration:1}),r=new Di(this.minor,i,{suffix:".",duration:1}),a=new Di(this.rev,s,{duration:1});o.start(),setTimeout((()=>{r.start()}),500),setTimeout((()=>{a.start()}),1e3);new Di(this.downloads,t.downloads??0,{useGrouping:!0,suffix:" weekly downloads"}).start()}}async#Et(t){try{const e=await fetch(`https://api.npmjs.org/versions/${t}/last-week`,{method:"GET"}),i=await e.text(),s=i.length?JSON.parse(i):{},o=Object.entries(s.downloads).map((t=>({version:t?.[0]?.split(".").map((t=>+t+1e5)).join("."),downloads:t?.[1]}))).sort(((t,e)=>t.version.localeCompare(e.version))).map((t=>({...t,version:t.version?.split(".").map((t=>+t-1e5)).join(".")})));return o?.pop()}catch(t){console.warn(t)}return null}static{this.styles=[d`
      :host {
        display: block;
      }

      stats-container {
        display: flex;
        gap: 6px;
      }

      [tertiary] {
        background-color: var(--md-sys-color-tertiary);
        color: var(--md-sys-color-on-tertiary);
      }

      info-chip {
        height: 24px;
        padding: 0px 6px;
        border: 1px var(--md-sys-color-outline-variant) solid;
        border-radius: 12px;
      }
    `]}render(){return V`
      <stats-container>
        <info-chip tertiary>
          <span>v<span class="major"></span><span class="minor"></span><span class="rev"></span></span
        ></info-chip>

        <info-chip>
          <span slot="label"><span class="downloads"></span></span
        ></info-chip>
      </stats-container>
    `}};s([xt("span.major")],Fi.prototype,"major",null),s([xt("span.minor")],Fi.prototype,"minor",null),s([xt("span.rev")],Fi.prototype,"rev",null),s([xt("span.downloads")],Fi.prototype,"downloads",null),Fi=s([mt("npm-stats")],Fi);class Hi extends CustomEvent{static{this.eventName="change-route"}constructor(t){super(Hi.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class Xi extends CustomEvent{static{this.eventName="redirect-route"}constructor(t){super(Xi.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class Gi extends CustomEvent{static{this.eventName="site-error"}constructor(t){super(Gi.eventName,{bubbles:!0,composed:!0,detail:t})}}class Wi extends Event{static{this.eventType="confirm-dialog-open"}constructor(t,e){super(Wi.eventType,{bubbles:!0,composed:!0}),this.header=t,this.text=e,this.dialogResult=new Promise((t=>{this.resolver=t}))}}const Vi=d`
  :host {
    display: grid;
    grid:
      'toolbar toolbar' 48px
      'menu content' auto / 300px 1fr;
    transition: 250ms;
    --app-accent-color-orange: #f8ad03;
    --app-accent-color-red: #dc3327;
    --app-accent-color-blue: #4285f4;
    --app-accent-color-light-blue: #0288d1;
    --app-accent-color-teal: #00796b;
    --app-accent-color-indigo: #303f9f;
    --app-accent-color-green: #34a853;

    --mdc-icon-font: 'Material Symbols Outlined';
  }

  /* Menu */

  md-list-item {
    border-radius: 24px;
    margin-left: 4px;
    /* --md-list-item-label-text-font: Metropolis; */
    --md-list-item-label-text-size: 13px;
    --md-list-item-label-text-weight: 500;
    --md-list-item-one-line-container-height: 44px;
    --md-list-item-top-space: 10px;
    --md-list-item-bottom-space: 10px;
    --md-focus-ring-shape-end-end: 24px;
    --md-focus-ring-shape-start-end: 24px;
    --md-focus-ring-shape-end-start: 24px;
    --md-focus-ring-shape-start-start: 24px;
    letter-spacing: 0.35px;
  }

  md-list-item[sub] {
    margin-left: 62px;
    --md-list-item-one-line-container-height: 20px;
    --md-list-item-top-space: 4px;
    --md-list-item-bottom-space: 4px;
  }

  md-list-item[selected] {
    background-color: var(--md-sys-color-secondary-container);
  }

  menu-divider {
    display: block;
    border-top: 1px solid var(--md-sys-color-outline-variant);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 8px;
    padding-bottom: 8px;
  }

  menu-divider[sub] {
    margin: 8px 24px 0 24px;
  }

  md-icon-button[themePref] {
    margin: 24px 12px;
  }

  /* Menu end */

  :host([collapse-main-menu]) {
    grid:
      'toolbar toolbar' 48px
      'menu content' auto / 0 1fr;
  }

  titanium-toolbar {
    grid-area: toolbar;
    display: grid;
    grid: 'main-menu-button logo profile' / auto auto 1fr;
    align-items: center;
    gap: 6px;
    height: 48px;
    z-index: 25;
  }

  titanium-toolbar md-icon-button[hamburger] {
    grid-area: main-menu-button;
    width: 48px;
    margin: 0 0 0 -12px;
  }

  titanium-toolbar h3[main-title] {
    text-align: center;
  }

  titanium-error-page {
    margin-top: 24px;
  }

  right-panel {
    grid-area: profile;
    justify-self: end;
    display: flex;
    gap: 12px;
    align-items: center;
  }

  right-panel md-outlined-icon-button {
    height: 36px;
    width: 36px;
    margin: 0 !important;
  }

  right-panel md-outlined-icon-button md-icon {
    height: 20px;
    width: 20px;
    font-size: 20px;
  }

  titanium-toolbar a {
    height: 26px;
    width: 148px;
  }

  main-content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin: 24px 48px;
  }

  main-content > * {
    max-width: 850px;
    width: 100%;
  }

  main-content [med] {
    width: 100%;
    max-width: 1000px;
  }

  main-content [large] {
    width: 100%;
    max-width: 1200px;
  }

  main-content [xl] {
    width: 100%;
    max-width: 1700px;
  }

  titanium-drawer {
    grid-area: menu;
  }

  titanium-drawer a[logo] {
    display: block;
    height: 26px;
    width: 148px;
    margin: 8px 14px 0px;
  }

  titanium-drawer h3 {
    padding-bottom: 0;
  }

  titanium-drawer p {
    margin-bottom: 12px;
    margin-left: 24px;
  }

  titanium-full-page-loading-indicator {
    z-index: 8;
  }

  h4[bread-crumb] {
    font-weight: 300;
    font-size: 14px;
    padding: 0;
    margin: 0 0 12px 0;
  }

  h4 a:visited,
  h4 a {
    text-decoration: none;
  }

  h4 a:hover {
    text-decoration: underline;
  }

  @media (min-width: 920px) {
    h4[bread-crumb],
    titanium-toolbar h3[main-title] {
      display: none;
    }

    titanium-drawer a[logo] {
      display: none;
    }
  }

  @media (max-width: 920px) {
    :host {
      grid:
        'toolbar' 56px
        'content' auto / 1fr;
    }

    titanium-toolbar {
      grid: 'main-menu-button title profile' / auto 1fr auto;
    }

    h4[bread-crumb] {
      margin: 0 0 24px 0;
    }

    main-content {
      margin: 4px 16px;
    }

    titanium-toolbar a[logo] {
      display: none;
    }
  }

  [hidden] {
    display: none !important;
  }
`,qi=d`
  [heading1],
  h1 {
    font-family: var(--titanium-styles-h1-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 300;
    font-size: 22px;
    line-height: 28px;
    text-wrap: balance;

    margin: 0;
    padding: 0;
  }
`,Ki=d`
  [heading2],
  h2 {
    font-family: var(--titanium-styles-h2-font-family, Roboto, Noto, sans-serif);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-wrap: balance;
    margin: 0;
    padding: 0;
  }
`,Yi=d`
  [heading3],
  h3 {
    font-family: var(--titanium-styles-h3-font-family, Roboto, Noto, sans-serif);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-wrap: balance;
    margin: 0;
    padding: 0;
  }
`,Zi=d`
  [heading4],
  h4 {
    font-family: var(--titanium-styles-h4-font-family, Roboto, Noto, sans-serif);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 400;
    text-wrap: balance;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
    padding: 0;
  }
`,Ji=d`
  [heading5],
  h5 {
    letter-spacing: 0.07272727em;
    font-family: var(--titanium-styles-h5-font-family, Metropolis, Roboto, Noto, sans-serif);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.1px;
    hyphens: auto;
    word-break: break-word;
    word-wrap: break-word;
    text-wrap: balance;
    margin: 0;
    padding: 0;
  }
`,Qi=d`
  [paragraph],
  p {
    font-family: var(--titanium-styles-p-font-family, Roboto, Noto, sans-serif);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;
    line-height: 20px;

    margin: 0;
    padding: 0;
  }
`,ts=d`
  [anchor],
  a {
    text-decoration: none;
    font-size: 14px;
    color: var(--md-sys-color-primary);

    font-family: var(--titanium-styles-a-font-family, Metropolis, Roboto, Noto, sans-serif);
    font-weight: 400;
  }

  [anchor]:hover,
  a:hover {
    text-decoration: underline;
  }
`,es=[Ji,Qi,d`
    data-row {
      display: grid;
      grid: 'label text' / 150px 1fr;
      align-items: center;
      gap: 16px;

      padding: 16px 24px 16px 0;
      margin-left: 24px;

      border-bottom: 1px solid var(--md-sys-color-outline-variant);
    }

    data-row:last-of-type {
      border: none;
    }

    [data-row-container] {
      container-type: inline-size;
    }

    data-row p {
      font-size: 16px;
    }

    data-row h5 {
      margin: 0 0 4px 0;
    }

    [image] {
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }

    data-row[force-stacked] {
      grid:
        'label'
        'text';
      gap: 6px;
    }

    @container (max-width: 500px) {
      data-row {
        grid:
          'label'
          'text';
        gap: 6px;
      }
    }
  `],is=d`
  [ellipsis] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;var ss=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},os=gs,rs=ds,as=function(t){return hs(ds(t))},ns=hs,ls=vs,cs=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function ds(t){for(var e,i=[],s=0,o=0,r="";null!=(e=cs.exec(t));){var a=e[0],n=e[1],l=e.index;if(r+=t.slice(o,l),o=l+a.length,n)r+=n[1];else{r&&(i.push(r),r="");var c=e[2],d=e[3],h=e[4],u=e[5],p=e[6],m=e[7],f="+"===p||"*"===p,v="?"===p||"*"===p,g=c||"/",b=h||u||(m?".*":"[^"+g+"]+?");i.push({name:d||s++,prefix:c||"",delimiter:g,optional:v,repeat:f,pattern:ps(b)})}}return o<t.length&&(r+=t.substr(o)),r&&i.push(r),i}function hs(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^"+t[i].pattern+"$"));return function(i){for(var s="",o=i||{},r=0;r<t.length;r++){var a=t[r];if("string"!=typeof a){var n,l=o[a.name];if(null==l){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(ss(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(n=encodeURIComponent(l[c]),!e[r].test(n))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+n+'"');s+=(0===c?a.prefix:a.delimiter)+n}}else{if(n=encodeURIComponent(l),!e[r].test(n))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+n+'"');s+=a.prefix+n}}else s+=a}return s}}function us(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function ps(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function ms(t,e){return t.keys=e,t}function fs(t){return t.sensitive?"":"i"}function vs(t,e){for(var i=(e=e||{}).strict,s=!1!==e.end,o="",r=t[t.length-1],a="string"==typeof r&&/\/$/.test(r),n=0;n<t.length;n++){var l=t[n];if("string"==typeof l)o+=us(l);else{var c=us(l.prefix),d=l.pattern;l.repeat&&(d+="(?:"+c+d+")*"),o+=d=l.optional?c?"(?:"+c+"("+d+"))?":"("+d+")?":c+"("+d+")"}}return i||(o=(a?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=s?"$":i&&a?"":"(?=\\/|$)",new RegExp("^"+o,fs(e))}function gs(t,e,i){return ss(e=e||[])?i||(i={}):(i=e,e=[]),t instanceof RegExp?function(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var s=0;s<i.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return ms(t,e)}(t,e):ss(t)?function(t,e,i){for(var s=[],o=0;o<t.length;o++)s.push(gs(t[o],e,i).source);return ms(new RegExp("(?:"+s.join("|")+")",fs(i)),e)}(t,e,i):function(t,e,i){for(var s=ds(t),o=vs(s,i),r=0;r<s.length;r++)"string"!=typeof s[r]&&e.push(s[r]);return ms(o,e)}(t,e,i)}os.parse=rs,os.compile=as,os.tokensToFunction=ns,os.tokensToRegExp=ls;var bs,ys="undefined"!=typeof document,xs="undefined"!=typeof window,ws="undefined"!=typeof history,_s="undefined"!=typeof process,ks=ys&&document.ontouchstart?"touchstart":"click",$s=xs&&!(!window.history.location&&!window.location);function Ss(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function Es(t,e){if("function"==typeof t)return Es.call(this,"*",t);if("function"==typeof e)for(var i=new Ts(t,null,this),s=1;s<arguments.length;++s)this.callbacks.push(i.middleware(arguments[s]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function zs(t){if(!t.handled){var e=this,i=e._window;(e._hashbang?$s&&this._getBase()+i.location.hash.replace("#!",""):$s&&i.location.pathname+i.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,$s&&(i.location.href=t.canonicalPath))}}function As(t,e,i){var s=this.page=i||Es,o=s._window,r=s._hashbang,a=s._getBase();"/"===t[0]&&0!==t.indexOf(a)&&(t=a+(r?"#!":"")+t);var n=t.indexOf("?");this.canonicalPath=t;var l=new RegExp("^"+function(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(a));if(this.path=t.replace(l,"")||"/",r&&(this.path=this.path.replace("#!","")||"/"),this.title=ys&&o.document.title,this.state=e||{},this.state.path=t,this.querystring=~n?s._decodeURLEncodedURIComponent(t.slice(n+1)):"",this.pathname=s._decodeURLEncodedURIComponent(~n?t.slice(0,n):t),this.params={},this.hash="",!r){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=s._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function Ts(t,e,i){var s=this.page=i||Cs,o=e||{};o.strict=o.strict||s._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=os(this.path,this.keys=[],o)}Ss.prototype.configure=function(t){var e=t||{};this._window=e.window||xs&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&xs,this._click=!1!==e.click&&ys,this._hashbang=!!e.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):xs&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(ks,this.clickHandler,!1):ys&&i.document.removeEventListener(ks,this.clickHandler,!1),this._hashbang&&xs&&!ws?i.addEventListener("hashchange",this._onpopstate,!1):xs&&i.removeEventListener("hashchange",this._onpopstate,!1)},Ss.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},Ss.prototype._getBase=function(){var t=this._base;if(t)return t;var e=xs&&this._window&&this._window.location;return xs&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},Ss.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},Ss.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var i;if(this._running=!0,$s){var s=this._window.location;i=this._hashbang&&~s.hash.indexOf("#!")?s.hash.substr(2)+s.search:this._hashbang?s.search+s.hash:s.pathname+s.search+s.hash}this.replace(i,null,!0,e.dispatch)}},Ss.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(ks,this.clickHandler,!1),xs&&t.removeEventListener("popstate",this._onpopstate,!1),xs&&t.removeEventListener("hashchange",this._onpopstate,!1)}},Ss.prototype.show=function(t,e,i,s){var o=new As(t,e,this),r=this.prevContext;return this.prevContext=o,this.current=o.path,!1!==i&&this.dispatch(o,r),!1!==o.handled&&!1!==s&&o.pushState(),o},Ss.prototype.back=function(t,e){var i=this;if(this.len>0){var s=this._window;ws&&s.history.back(),this.len--}else t?setTimeout((function(){i.show(t,e)})):setTimeout((function(){i.show(i._getBase(),e)}))},Ss.prototype.redirect=function(t,e){var i=this;"string"==typeof t&&"string"==typeof e&&Es.call(this,t,(function(t){setTimeout((function(){i.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){i.replace(t)}),0)},Ss.prototype.replace=function(t,e,i,s){var o=new As(t,e,this),r=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=i,o.save(),!1!==s&&this.dispatch(o,r),o},Ss.prototype.dispatch=function(t,e){var i=0,s=0,o=this;function r(){var e=o.callbacks[i++];if(t.path===o.current)return e?void e(t,r):zs.call(o,t);t.handled=!1}e?function t(){var i=o.exits[s++];if(!i)return r();i(e,t)}():r()},Ss.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var i=new Ts(t,null,this),s=1;s<arguments.length;++s)this.exits.push(i.middleware(arguments[s]))},Ss.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,i=t.path||(t.composedPath?t.composedPath():null);if(i)for(var s=0;s<i.length;s++)if(i[s].nodeName&&"A"===i[s].nodeName.toUpperCase()&&i[s].href){e=i[s];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var o="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var r=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==r)&&!(r&&r.indexOf("mailto:")>-1)&&!(o?e.target.baseVal:e.target)&&(o||this.sameOrigin(e.href))){var a=o?e.href.baseVal:e.pathname+e.search+(e.hash||"");a="/"!==a[0]?"/"+a:a,_s&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var n=a,l=this._getBase();0===a.indexOf(l)&&(a=a.substr(l.length)),this._hashbang&&(a=a.replace("#!","")),(!l||n!==a||$s&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(n))}}}}},Ss.prototype._onpopstate=(bs=!1,xs?(ys&&"complete"===document.readyState?bs=!0:window.addEventListener("load",(function(){setTimeout((function(){bs=!0}),0)})),function(t){if(bs){var e=this;if(t.state){var i=t.state.path;e.replace(i,t.state)}else if($s){var s=e._window.location;e.show(s.pathname+s.search+s.hash,void 0,void 0,!1)}}}):function(){}),Ss.prototype._which=function(t){return null==(t=t||xs&&this._window.event).which?t.button:t.which},Ss.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&$s)return new URL(t,e.location.toString());if(ys){var i=e.document.createElement("a");return i.href=t,i}},Ss.prototype.sameOrigin=function(t){if(!t||!$s)return!1;var e=this._toURL(t),i=this._window.location;return i.protocol===e.protocol&&i.hostname===e.hostname&&(i.port===e.port||""===i.port&&(80==e.port||443==e.port))},Ss.prototype._samePath=function(t){if(!$s)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},Ss.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},As.prototype.pushState=function(){var t=this.page,e=t._window,i=t._hashbang;t.len++,ws&&e.history.pushState(this.state,this.title,i&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},As.prototype.save=function(){var t=this.page;ws&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},Ts.prototype.middleware=function(t){var e=this;return function(i,s){if(e.match(i.path,i.params))return i.routePath=e.path,t(i,s);s()}},Ts.prototype.match=function(t,e){var i=this.keys,s=t.indexOf("?"),o=~s?t.slice(0,s):t,r=this.regexp.exec(decodeURIComponent(o));if(!r)return!1;delete e[0];for(var a=1,n=r.length;a<n;++a){var l=i[a-1],c=this.page._decodeURLEncodedURIComponent(r[a]);void 0===c&&hasOwnProperty.call(e,l.name)||(e[l.name]=c)}return!0};var Cs=function t(){var e=new Ss;function i(){return Es.apply(e,arguments)}return i.callbacks=e.callbacks,i.exits=e.exits,i.base=e.base.bind(e),i.strict=e.strict.bind(e),i.start=e.start.bind(e),i.stop=e.stop.bind(e),i.show=e.show.bind(e),i.back=e.back.bind(e),i.redirect=e.redirect.bind(e),i.replace=e.replace.bind(e),i.dispatch=e.dispatch.bind(e),i.exit=e.exit.bind(e),i.configure=e.configure.bind(e),i.sameOrigin=e.sameOrigin.bind(e),i.clickHandler=e.clickHandler.bind(e),i.create=t,Object.defineProperty(i,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(i,"current",{get:function(){return e.current},set:function(t){e.current=t}}),i.Context=As,i.Route=Ts,i}(),Is=Cs,Rs=Cs;Is.default=Rs;const Ps=new URL(new URL("5a0734c3.svg",import.meta.url).href,import.meta.url).href,Ns=new URL(new URL("66fb602e.svg",import.meta.url).href,import.meta.url).href;let Os=class extends ut{#zt;get page(){return this.#zt}set page(t){this.#zt=t}#At="";get fatalErrorMessage(){return this.#At}set fatalErrorMessage(t){this.#At=t}#Tt=!1;get isWideViewPort(){return this.#Tt}set isWideViewPort(t){this.#Tt=t}#Ct=!1;get collapseMainMenu(){return this.#Ct}set collapseMainMenu(t){this.#Ct=t}#It;get confirmDialog(){return this.#It}set confirmDialog(t){this.#It=t}#Rt;get loadingIndicator(){return this.#Rt}set loadingIndicator(t){this.#Rt=t}#Pt;get drawer(){return this.#Pt}set drawer(t){this.#Pt=t}get themePreference(){return localStorage.getItem("theme-preference")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}set themePreference(t){localStorage.setItem("theme-preference",t),this.#Nt()}#Nt(){document.firstElementChild?.setAttribute("data-theme",this.themePreference)}async firstUpdated(){this.#Nt(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(({matches:t})=>{this.themePreference=t?"dark":"light",this.#Nt()})),((t,e)=>{const i=window.matchMedia(t);i.addListener((t=>e(t.matches))),e(i.matches)})("(max-width: 920px)",(async t=>{this.isWideViewPort=!t,this.isWideViewPort&&(this.drawer.closeQuick(),this.collapseMainMenu=!1)})),await this.loadingIndicator.updateComplete,this.addEventListener(Wi.eventType,(async t=>{await import("./803d0a82.js"),this.confirmDialog.handleEvent(t)})),this.addEventListener(Hi.eventName,(t=>{Is.show(t.detail.path)})),this.addEventListener(Xi.eventName,(t=>{Is.redirect(t.detail.path)})),this.addEventListener(Gi.eventName,(t=>{this.fatalErrorMessage=t.detail,this.#Ot("error")})),Is("*",((t,e)=>{this.drawer?.close(),e()})),Is("/",(async()=>{Is.show("/getting-started")})),Is("/getting-started",(()=>this.#Ot("getting-started",(()=>import("./7ec246bc.js"))))),Is("/titanium-full-page-loading-indicator",(()=>this.#Ot("titanium-full-page-loading-indicator",(()=>import("./ad63d9ba.js"))))),Is("/available-cdn-icons",(()=>this.#Ot("available-cdn-icons",(()=>import("./03b160ce.js"))))),Is("/leavitt-company-select",(()=>this.#Ot("leavitt-company-select",(()=>import("./2d464d58.js"))))),Is("/leavitt-file-explorer",(()=>this.#Ot("leavitt-file-explorer",(()=>import("./56fe32f2.js"))))),Is("/titanium-date-range-selector",(()=>this.#Ot("titanium-date-range-selector",(()=>import("./14220317.js"))))),Is("/titanium-data-table-item",(()=>this.#Ot("titanium-data-table-item",(()=>import("./af9e44e4.js"))))),Is("/leavitt-person-select",(()=>this.#Ot("leavitt-person-select",(()=>import("./5767874d.js"))))),Is("/leavitt-person-company-select",(()=>this.#Ot("leavitt-person-company-select",(()=>import("./d5ebf43a.js"))))),Is("/leavitt-person-group-select",(()=>this.#Ot("leavitt-person-group-select",(()=>import("./a7a7d1c5.js"))))),Is("/leavitt-user-feedback",(()=>this.#Ot("leavitt-user-feedback",(()=>import("./682ecda5.js"))))),Is("/profile-picture",(()=>this.#Ot("profile-picture",(()=>import("./0bccd59a.js"))))),Is("/profile-picture-menu",(()=>this.#Ot("profile-picture-menu",(()=>import("./e5001465.js"))))),Is("/titanium-access-denied-page",(()=>this.#Ot("titanium-access-denied-page",(()=>import("./8bd8abde.js"))))),Is("/titanium-data-table",(()=>this.#Ot("titanium-data-table",(()=>import("./03d09462.js"))))),Is("/titanium-data-table-item",(()=>this.#Ot("titanium-data-table-item",(()=>import("./af9e44e4.js"))))),Is("/titanium-drawer",(()=>this.#Ot("titanium-drawer",(()=>import("./0c7253f7.js"))))),Is("/titanium-error-page",(()=>this.#Ot("titanium-error-page",(()=>import("./81d3ad01.js"))))),Is("/titanium-address-input",(()=>this.#Ot("titanium-address-input",(()=>import("./da97e3e7.js"))))),Is("/titanium-header",(()=>this.#Ot("titanium-header",(()=>import("./c52e753f.js"))))),Is("/titanium-icon-picker",(()=>this.#Ot("titanium-icon-picker",(()=>import("./ca8909fc.js"))))),Is("/titanium-header",(()=>this.#Ot("titanium-header",(()=>import("./c52e753f.js"))))),Is("/titanium-chip-multi-select",(()=>this.#Ot("titanium-chip-multi-select",(()=>import("./50e80403.js"))))),Is("/titanium-input-validator",(()=>this.#Ot("titanium-input-validator",(()=>import("./df23b0ad.js"))))),Is("/titanium-data-table-header",(()=>this.#Ot("titanium-data-table-header",(()=>import("./427d69b8.js"))))),Is("/titanium-full-page-loading-indicator",(()=>this.#Ot("titanium-full-page-loading-indicator",(()=>import("./ad63d9ba.js"))))),Is("/titanium-page-control",(()=>this.#Ot("titanium-page-control",(()=>import("./5ceaf6d3.js"))))),Is("/titanium-smart-attachment-input",(()=>this.#Ot("titanium-smart-attachment-input",(()=>import("./b67a5702.js"))))),Is("/titanium-date-input",(()=>this.#Ot("titanium-date-input",(()=>import("./ddf448f1.js"))))),Is("/titanium-search-input",(()=>this.#Ot("titanium-search-input",(()=>import("./9e0bf70a.js"))))),Is("/titanium-toolbar",(()=>this.#Ot("titanium-toolbar",(()=>import("./6a1aef75.js"))))),Is("/titanium-styles",(()=>this.#Ot("titanium-styles",(()=>import("./5c88c171.js"))))),Is("/titanium-snackbar",(()=>this.#Ot("titanium-snackbar",(()=>import("./fda4810c.js"))))),Is("/titanium-card",(()=>this.#Ot("titanium-card",(()=>import("./0d8a9992.js"))))),Is("/titanium-chip",(()=>this.#Ot("titanium-chip",(()=>import("./d06ab197.js"))))),Is("/titanium-youtube-input",(()=>this.#Ot("titanium-youtube-input",(()=>import("./b165e500.js"))))),Is("/titanium-show-hide",(()=>this.#Ot("titanium-show-hide",(()=>import("./977c9a4c.js"))))),Is("/titanium-duration-input",(()=>this.#Ot("titanium-duration-input",(()=>import("./1731496d.js"))))),Is("/titanium-profile-picture-stack",(()=>this.#Ot("titanium-profile-picture-stack",(()=>import("./b22c713a.js"))))),Is("/titanium-confirm-dialog",(()=>this.#Ot("titanium-confirm-dialog",(()=>import("./7012a5dd.js"))))),Is("*",(()=>{this.fatalErrorMessage="We were unable to find the page you are looking for",this.#Ot("error")})),Is.start()}#Ot(t,e){const i=new Promise((async i=>{this.page=t;try{await(e?.())}catch(t){console.warn(t),this.fatalErrorMessage=t,this.page="error"}i()}));this.dispatchEvent(new xe(i))}static{this.styles=[Vi,Qi,d`
      titanium-drawer npm-stats {
        margin: 0 12px 12px 24px;
        gap: 12px;
      }

      titanium-drawer md-list-item {
        height: 26px;
        --md-list-item-one-line-container-height: 26px;
        --md-list-item-label-text-size: 14px;
        --md-list-item-label-text-weight: 400;
      }

      titanium-drawer md-icon {
        height: 16px;
        width: 16px;
        font-size: 16px;
      }

      titanium-drawer summary {
        padding-left: 24px;
        font-size: 13px;
        padding: 2px 20px;
        border-radius: 0px 50px 50px 0px;
        cursor: pointer;
        font-weight: 500;
        margin-top: 12px;
      }

      titanium-drawer summary::marker {
        margin-right: 12px;
      }

      titanium-drawer details {
        user-select: none;
      }

      summary:hover {
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08);
      }
    `]}render(){return V`<titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
      <user-manager disableAutoload></user-manager>

      <titanium-toolbar>
        <md-icon-button
          title="Main menu"
          @click=${()=>{this.isWideViewPort?this.collapseMainMenu=!this.collapseMainMenu:this.drawer?.open()}}
        >
          <md-icon>menu</md-icon>
        </md-icon-button>
        <a logo href="/" title="Back to home"><img src=${"dark"===this.themePreference?Ns:Ps} /></a>
        <h3 title="Leavitt book" @click=${()=>Is.show("/")} main-title>Leavitt book</h3>
        <right-panel>
          <md-outlined-icon-button
            title="Switch to ${"light"===this.themePreference?"dark":"light"} theme "
            themePref
            @click=${()=>this.themePreference="light"===this.themePreference?"dark":"light"}
          >
            <md-icon>${"light"===this.themePreference?"dark_mode":"light_mode"}</md-icon>
          </md-outlined-icon-button>
          <profile-picture-menu size="36"></profile-picture-menu>
        </right-panel>
      </titanium-toolbar>

      <titanium-drawer ?always-show-content=${this.isWideViewPort&&!this.collapseMainMenu}>
        <a slot="header" logo href="/" title="Back to home"><img src=${"dark"===this.themePreference?Ns:Ps} /></a>
        <h3 slot="header">Titanium elements</h3>
        <p slot="header">Leavitt group custom elements</p>

        <npm-stats></npm-stats>

        <md-list-item ?selected=${!!this.page?.includes("getting-started")} href="/getting-started" type="link">
          <md-icon slot="start">home</md-icon> <span>Getting started</span>
        </md-list-item>

        <md-list-item ?selected=${!!this.page?.includes("available-cdn-icons")} href="/available-cdn-icons" type="link">
          <md-icon slot="start">photo_camera</md-icon> <span>Icons</span>
        </md-list-item>

        <section>
          <details open>
            <summary>Titanium</summary>
            <!-- Titanium menu -->

            <md-list-item ?selected=${"titanium-access-denied-page"===this.page} href="/titanium-access-denied-page" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Access denied page</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-address-input"===this.page} href="/titanium-address-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Address input</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-card"===this.page} href="/titanium-card" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Card</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-chip"===this.page} href="/titanium-chip" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Chip</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-chip-multi-select"===this.page} href="/titanium-chip-multi-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Chip multi select</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-confirm-dialog"===this.page} href="/titanium-confirm-dialog" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Confirm dialog</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-data-table"===this.page} href="/titanium-data-table" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Data table</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-data-table-header"===this.page} href="/titanium-data-table-header" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Data table header</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-data-table-item"===this.page} href="/titanium-data-table-item" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Data table item</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-date-input")} href="/titanium-date-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Date input </span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-date-range-selector"===this.page} href="/titanium-date-range-selector" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Date range selector</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-drawer"===this.page} href="/titanium-drawer" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Drawer</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-duration-input")} href="/titanium-duration-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Duration input</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-error-page")} href="/titanium-error-page" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Error page</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-full-page-loading-indicator")} href="/titanium-full-page-loading-indicator" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Full page loading indicator</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-header"===this.page} href="/titanium-header" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Header</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-icon-picker"===this.page} href="/titanium-icon-picker" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Icon picker</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-input-validator")} href="/titanium-input-validator" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Input validator</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-page-control")} href="/titanium-page-control" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Page control</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-profile-picture-stack")} href="/titanium-profile-picture-stack" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Profile picture stack</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-search-input")} href="/titanium-search-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Search input </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-show-hide")} href="/titanium-show-hide" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Show hide </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-smart-attachment-input")} href="/titanium-smart-attachment-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Smart attachment input</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-snackbar")} href="/titanium-snackbar" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Snackbar</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-styles")} href="/titanium-styles" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Styles</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-toolbar")} href="/titanium-toolbar" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Toolbar</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes("titanium-youtube-input")} href="/titanium-youtube-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Youtube input</span>
            </md-list-item>
          </details>
        </section>

        <section>
          <details open>
            <summary>Leavitt</summary>
            <!-- Leavitt menu -->
            <md-list-item ?selected=${"leavitt-company-select"===this.page} href="/leavitt-company-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Company select</span>
            </md-list-item>

            <md-list-item ?selected=${"leavitt-file-explorer"===this.page} href="/leavitt-file-explorer" type="link">
              <md-icon slot="start">library_books</md-icon> <span>File explorer</span>
            </md-list-item>

            <md-list-item ?selected=${"leavitt-person-company-select"===this.page} href="/leavitt-person-company-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Person company select</span>
            </md-list-item>

            <md-list-item ?selected=${"leavitt-person-group-select"===this.page} href="/leavitt-person-group-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Person group select</span>
            </md-list-item>

            <md-list-item ?selected=${"leavitt-person-select"===this.page} href="/leavitt-person-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Person select</span>
            </md-list-item>

            <md-list-item ?selected=${"profile-picture"===this.page} href="/profile-picture" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Profile picture</span>
            </md-list-item>

            <md-list-item ?selected=${"profile-picture-menu"===this.page} href="/profile-picture-menu" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Profile picture menu</span>
            </md-list-item>

            <md-list-item ?selected=${"leavitt-user-feedback"===this.page} href="/leavitt-user-feedback" type="link">
              <md-icon slot="start">library_books</md-icon> <span>User feedback</span>
            </md-list-item>
          </details>
        </section>
        <a slot="footer" href="/user-feedback">Report bug</a>
        <a slot="footer" href="/user-feedback">Feedback</a>
        <a slot="footer" href="/user-feedback">Terms</a>
      </titanium-drawer>

      <main-content>
        ${"getting-started"===this.page?V`<getting-started></getting-started>`:K}
        ${"error"===this.page?V`<div>Oops, something went wrong.</div>`:K}

        <!-- Stories -->
        ${"available-cdn-icons"===this.page?V` <available-cdn-icons-demo large ?isActive=${"available-cdn-icons"===this.page}></available-cdn-icons-demo> `:K}
        ${"titanium-date-range-selector"===this.page?V` <titanium-date-range-selector-demo large ?isActive=${"titanium-date-range-selector"===this.page}></titanium-date-range-selector-demo> `:K}
        ${"leavitt-person-select"===this.page?V` <leavitt-person-select-demo large ?isActive=${"leavitt-person-select"===this.page}></leavitt-person-select-demo> `:K}
        ${"leavitt-company-select"===this.page?V` <leavitt-company-select-demo large ?isActive=${"leavitt-company-select"===this.page}></leavitt-company-select-demo> `:K}
        ${"leavitt-file-explorer"===this.page?V` <leavitt-file-explorer-demo large ?isActive=${"leavitt-file-explorer"===this.page}></leavitt-file-explorer-demo> `:K}
        ${"leavitt-user-feedback"===this.page?V` <leavitt-user-feedback-demo large ?isActive=${"leavitt-user-feedback"===this.page}></leavitt-user-feedback-demo> `:K}
        ${"leavitt-person-company-select"===this.page?V` <leavitt-person-company-select-demo large ?isActive=${"leavitt-person-company-select"===this.page}></leavitt-person-company-select-demo> `:K}
        ${"leavitt-person-group-select"===this.page?V` <leavitt-person-group-select-demo large ?isActive=${"leavitt-person-group-select"===this.page}></leavitt-person-group-select-demo> `:K}
        ${"titanium-drawer"===this.page?V` <titanium-drawer-demo ?isActive=${"titanium-drawer"===this.page}></titanium-drawer-demo> `:K}
        ${"profile-picture"===this.page?V` <profile-picture-demo ?isActive=${"profile-picture"===this.page}></profile-picture-demo> `:K}
        ${"profile-picture-menu"===this.page?V` <profile-picture-menu-demo large ?isActive=${"profile-picture-menu"===this.page}></profile-picture-menu-demo> `:K}
        ${"titanium-input-validator"===this.page?V` <titanium-input-validator-demo large ?isActive=${"titanium-input-validator"===this.page}></titanium-input-validator-demo> `:K}
        ${"titanium-data-table"===this.page?V` <titanium-data-table-demo large ?isActive=${"titanium-data-table"===this.page}></titanium-data-table-demo> `:K}
        ${"titanium-data-table-header"===this.page?V` <titanium-data-table-header-demo large ?isActive=${"titanium-data-table-header"===this.page}></titanium-data-table-header-demo> `:K}
        ${"titanium-data-table-item"===this.page?V` <titanium-data-table-item-demo large ?isActive=${"titanium-data-table-item"===this.page}></titanium-data-table-item-demo> `:K}
        ${"titanium-access-denied-page"===this.page?V` <titanium-access-denied-page-demo large ?isActive=${"titanium-access-denied-page"===this.page}></titanium-access-denied-page-demo> `:K}
        ${"titanium-address-input"===this.page?V` <titanium-address-input-demo large ?isActive=${"titanium-address-input"===this.page}></titanium-address-input-demo> `:K}
        ${"titanium-error-page"===this.page?V` <titanium-error-page-demo large ?isActive=${"titanium-error-page"===this.page}></titanium-error-page-demo> `:K}
        ${"titanium-header"===this.page?V` <titanium-header-demo ?isActive=${"titanium-header"===this.page}></titanium-header-demo> `:K}
        ${"titanium-icon"===this.page?V` <titanium-icon-demo ?isActive=${"titanium-icon"===this.page}></titanium-icon-demo> `:K}
        ${"titanium-icon-picker"===this.page?V` <titanium-icon-picker-demo large ?isActive=${"titanium-icon-picker"===this.page}></titanium-icon-picker-demo> `:K}
        ${"titanium-page-control"===this.page?V` <titanium-page-control-demo large ?isActive=${"titanium-page-control"===this.page}></titanium-page-control-demo> `:K}
        ${"titanium-date-input"===this.page?V` <titanium-date-input-demo large ?isActive=${"titanium-date-input"===this.page}></titanium-date-input-demo> `:K}
        ${"titanium-search-input"===this.page?V` <titanium-search-input-demo large ?isActive=${"titanium-search-input"===this.page}></titanium-search-input-demo> `:K}
        ${"titanium-toolbar"===this.page?V` <titanium-toolbar-demo large ?isActive=${"titanium-toolbar"===this.page}></titanium-toolbar-demo> `:K}
        ${"titanium-full-page-loading-indicator"===this.page?V`
              <titanium-full-page-loading-indicator-demo
                large
                ?isActive=${"titanium-full-page-loading-indicator"===this.page}
              ></titanium-full-page-loading-indicator-demo>
            `:K}
        ${"titanium-loading-indicator"===this.page?V` <titanium-loading-indicator-demo large ?isActive=${"titanium-loading-indicator"===this.page}></titanium-loading-indicator-demo> `:K}
        ${"titanium-chip-multi-select"===this.page?V` <titanium-chip-multi-select-demo large ?isActive=${"titanium-chip-multi-select"===this.page}></titanium-chip-multi-select-demo> `:K}
        ${"titanium-styles"===this.page?V` <titanium-styles-demo large ?isActive=${"titanium-styles"===this.page}></titanium-styles-demo> `:K}
        ${"titanium-snackbar"===this.page?V` <titanium-snackbar-demo large ?isActive=${"titanium-snackbar"===this.page}></titanium-snackbar-demo> `:K}
        ${"titanium-smart-attachment-input"===this.page?V`
              <titanium-smart-attachment-input-demo large ?isActive=${"titanium-smart-attachment-input"===this.page}></titanium-smart-attachment-input-demo>
            `:K}
        ${"titanium-card"===this.page?V` <titanium-card-demo large ?isActive=${"titanium-card"===this.page}></titanium-card-demo> `:K}
        ${"titanium-chip"===this.page?V` <titanium-chip-demo large ?isActive=${"titanium-chip"===this.page}></titanium-chip-demo> `:K}
        ${"titanium-youtube-input"===this.page?V` <titanium-youtube-input-demo large ?isActive=${"titanium-youtube-input"===this.page}></titanium-youtube-input-demo> `:K}
        ${"titanium-show-hide"===this.page?V` <titanium-show-hide-demo large ?isActive=${"titanium-show-hide"===this.page}></titanium-show-hide-demo> `:K}
        ${"titanium-duration-input"===this.page?V` <titanium-duration-input-demo large ?isActive=${"titanium-duration-input"===this.page}></titanium-duration-input-demo> `:K}
        ${"titanium-confirm-dialog"===this.page?V` <titanium-confirm-dialog-demo large ?isActive=${"titanium-confirm-dialog"===this.page}></titanium-confirm-dialog-demo> `:K}
        ${"titanium-profile-picture-stack"===this.page?V`
              <titanium-profile-picture-stack-demo large ?isActive=${"titanium-profile-picture-stack"===this.page}></titanium-profile-picture-stack-demo>
            `:K}
        <titanium-access-denied-page ?hidden=${"access-denied"!==this.page}></titanium-access-denied-page>
        <titanium-error-page ?hidden=${"error"!==this.page} .message=${this.fatalErrorMessage}></titanium-error-page>
      </main-content>

      <titanium-confirm-dialog></titanium-confirm-dialog>
      <titanium-snackbar-stack .eventListenerTarget=${document}></titanium-snackbar-stack>
      <titanium-service-worker-notifier></titanium-service-worker-notifier>`}};s([bt()],Os.prototype,"page",null),s([bt()],Os.prototype,"fatalErrorMessage",null),s([bt()],Os.prototype,"isWideViewPort",null),s([gt({type:Boolean,reflect:!0,attribute:"collapse-main-menu"})],Os.prototype,"collapseMainMenu",null),s([xt("titanium-confirm-dialog")],Os.prototype,"confirmDialog",null),s([xt("titanium-full-page-loading-indicator")],Os.prototype,"loadingIndicator",null),s([xt("titanium-drawer")],Os.prototype,"drawer",null),s([bt()],Os.prototype,"themePreference",null),Os=s([mt("my-app")],Os);export{Gi as $,kt as A,yi as B,Wi as C,ht as D,si as E,Ze as F,Pt as G,ke as H,_i as I,ei as J,Ye as K,je as L,Ke as M,Xe as N,qe as O,xe as P,We as Q,Gt as R,be as S,K as T,Wt as U,Xt as V,q as W,Zi as X,qt as Y,yt as Z,s as _,Ki as a,ct as a0,oe as a1,ue as a2,Ot as a3,e as a4,o as a5,i as a6,ts as b,_t as c,gi as d,xt as e,Ji as f,is as g,qi as h,d as i,es as j,ki as k,Ct as l,se as m,gt as n,ce as o,Qi as p,le as q,bt as r,ut as s,mt as t,Vt as u,ae as v,Vi as w,V as x,Yi as y,$e as z};
