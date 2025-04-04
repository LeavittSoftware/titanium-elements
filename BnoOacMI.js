var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function r(t,e,i,r){var o,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,i,n):o(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new WeakMap;let c=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}};const d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new c(i,t,a)},h=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:u,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:f,getOwnPropertySymbols:v,getPrototypeOf:g}=Object,b=globalThis,y=b.trustedTypes,x=y?y.emptyScript:"",w=b.reactiveElementPolyfillSupport,_=(t,e)=>t,k={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!u(t,e),z={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=z){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&p(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const s=r?.call(this);o.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??z}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...f(t),...v(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:k).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=r,this[r]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[_("elementProperties")]=new Map,S[_("finalized")]=new Map,w?.({ReactiveElement:S}),(b.reactiveElementVersions??=[]).push("2.0.4");const A=globalThis,C=A.trustedTypes,T=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+I,O=`<${P}>`,M=document,R=()=>M.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,j="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,U=/>/g,D=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,H=/"/g,V=/^(?:script|style|textarea|title)$/i,G=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Y=new WeakMap,K=M.createTreeWalker(M,129);function J(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}class Q{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const n=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,r=[];let o,s=2===e?"<svg>":3===e?"<math>":"",n=L;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===L?"!--"===l[1]?n=F:void 0!==l[1]?n=U:void 0!==l[2]?(V.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=o??L,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?H:q):n===H||n===q?n=D:n===F||n===U?n=L:(n=D,o=void 0);const h=n===D&&t[e+1].startsWith("/>")?" ":"";s+=n===L?i+O:c>=0?(r.push(a),i.slice(0,c)+E+i.slice(c)+I+h):i+I+(-2===c?e:h)}return[J(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]})(t,e);if(this.el=Q.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=K.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=c[s++],i=r.getAttribute(t).split(I),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?rt:"?"===n[1]?ot:"@"===n[1]?st:it}),r.removeAttribute(t)}else t.startsWith(I)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(V.test(r.tagName)){const t=r.textContent.split(I),e=t.length-1;if(e>0){r.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],R()),K.nextNode(),a.push({type:2,index:++o});r.append(t[e],R())}}}else if(8===r.nodeType)if(r.data===P)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(I,t+1));)a.push({type:7,index:o}),t+=I.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,r){if(e===W)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const s=B(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,r)),e}let tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??M).importNode(e,!0);K.currentNode=r;let o=K.nextNode(),s=0,n=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new et(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new nt(o,this,t)),this._$AV.push(e),a=i[++n]}s!==a?.index&&(o=K.nextNode(),s++)}return K.currentNode=M,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),B(t)?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==X&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new Q(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new et(this.O(R()),this.O(R()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(void 0===o)t=Z(this,t,e,0),s=!B(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const r=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Z(this,r[i+n],e,n),a===W&&(a=this._$AH[n]),s||=!B(a)||a!==this._$AH[n],a===X?t=X:t!==X&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}s&&!r&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class ot extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class st extends it{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??X)===W)return;const i=this._$AH,r=t===X&&i!==X||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==X&&(i===X||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at={I:et},lt=A.litHtmlPolyfillSupport;lt?.(Q,et),(A.litHtmlVersions??=[]).push("3.2.1");const ct=(t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new et(e.insertBefore(R(),t),t,void 0,i??{})}return o._$AI(t),o};let dt=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};dt._$litElement$=!0,dt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:dt});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:dt}),(globalThis.litElementVersions??=[]).push("4.1.1");const ut=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},pt={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$},mt=(t=pt,e,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function ft(t){return(e,i)=>"object"==typeof i?mt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function vt(t){return ft({...t,state:!0,attribute:!1})}const gt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function bt(t,e){return(i,r,o)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof r?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return gt(i,r,{get(){let i=t.call(this);return void 0===i&&(i=s(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return gt(i,r,{get(){return s(this)}})}}let yt;function xt(t){return(e,i)=>gt(e,i,{get(){return(this.renderRoot??(yt??=document.createDocumentFragment())).querySelectorAll(t)}})}function wt(t){return(e,i)=>{const{slot:r,selector:o}=t??{},s="slot"+(r?`[name=${r}]`:":not([name])");return gt(e,i,{get(){const e=this.renderRoot?.querySelector(s),i=e?.assignedElements(t)??[];return void 0===o?i:i.filter((t=>t.matches(o)))}})}}class _t extends dt{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return G`<span class="shadow"></span>`}}const kt=d`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;let $t=class extends _t{};$t.styles=[kt],$t=r([ut("md-elevation")],$t);let zt=class extends dt{#t;get shadow(){return this.#t}set shadow(t){this.#t=t}static{this.styles=d`
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
  `}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.#e.bind(this),!1)}disconnectedCallback(){document.removeEventListener("scroll",this.#e,!1),super.disconnectedCallback()}#e(){this.#i()}#i(){const t=window.innerHeight||(document.documentElement||document.body).clientHeight,e=this.#r(),i=window.scrollY||(document.documentElement||document.body.parentNode||document.body).scrollTop,r=e-t,o=Math.floor(i/r*100);this.shadow=0!==(o||0)}#r(){const t=document;return Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight)}render(){return G` <md-elevation></md-elevation><slot></slot>`}};r([ft({type:Boolean,reflect:!0})],zt.prototype,"shadow",null),zt=r([ut("titanium-toolbar")],zt);class St extends Error{}function At(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(t){return decodeURIComponent(atob(t).replace(/(.)/g,((t,e)=>{let i=e.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i})))}(e)}catch(t){return atob(e)}}St.prototype.name="InvalidTokenError";const Ct=(t=>{const e=[new RegExp("^https://10[\\.]"),new RegExp("^http://10[\\.]"),new RegExp("^http://192.168[\\.]"),new RegExp("^http://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])"),new RegExp("^https://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])")];return!t||t.indexOf("dev")>-1||e.some((e=>null!==e.exec(t)))})(window.location.origin),Tt=t=>class extends t{static get properties(){return{isLoading:{type:Boolean}}}#o=0;async loadWhile(t){this.isLoading=!0,this.#o++;try{await t}finally{this.#o--,0===this.#o&&(this.isLoading=!1)}}};function Et(t){return new Promise((function(e){setTimeout(e,t)}))}function It(t,e=15,i=10){return t.length>e+i?t.substr(0,e)+"..."+t.substr(t.length-i,t.length):t}class Pt extends Event{static{this.eventName="um-updated"}constructor(){super(Pt.eventName,{bubbles:!1,composed:!0})}}let Ot=null;const Mt=()=>{if(Ot)return Ot;throw"GetUserManagerInstance requested before an instance was created. Did you forget to add the <user-manager> element to your project?"};let Rt=class extends dt{#s=[];get roles(){return this.#s}set roles(t){this.#s=t}#n;get fullname(){return this.#n}set fullname(t){this.#n=t}#a;get username(){return this.#a}set username(t){this.#a=t}#l;get firstName(){return this.#l}set firstName(t){this.#l=t}#c;get lastName(){return this.#c}set lastName(t){this.#c=t}#d;get company(){return this.#d}set company(t){this.#d=t}#h;get companyId(){return this.#h}set companyId(t){this.#h=t}#u;get profilePictureFileName(){return this.#u}set profilePictureFileName(t){this.#u=t}#p;get email(){return this.#p}set email(t){this.#p=t}#m=0;get personId(){return this.#m}set personId(t){this.#m=t}#f=0;get refreshTokenId(){return this.#f}set refreshTokenId(t){this.#f=t}#v="https://signin.leavitt.com/";get redirectUrl(){return this.#v}set redirectUrl(t){this.#v=t}#g="https://devsignin.leavitt.com/";get redirectDevUrl(){return this.#g}set redirectDevUrl(t){this.#g=t}#b=Ct?"https://devoauth2.leavitt.com/token":"https://oauth2.leavitt.com/token";get tokenUri(){return this.#b}set tokenUri(t){this.#b=t}#y="https://oauth2.leavitt.com/";get issuerIdentifier(){return this.#y}set issuerIdentifier(t){this.#y=t}#x;get disableAutoload(){return this.#x}set disableAutoload(t){this.#x=t}#w;get isActiveEmployee(){return this.#w}set isActiveEmployee(t){this.#w=t}#_;constructor(){super(),Ot?console.warn("More than one <user-manager> element has been used in this web application, consider removing one."):Ot=this}async firstUpdated(){if(!this.disableAutoload||this.#k("refreshToken"))try{await this.authenticateAsync()}catch{}console.log("UserManager Ready.")}async isRefreshTokenValid(t){try{return await this.#$(t,this.tokenUri),!0}catch(t){}return!1}#z(t){const e=`${Ct?this.redirectDevUrl:this.redirectUrl}?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#S(t){const e=`${Ct?this.redirectDevUrl:this.redirectUrl}sign-out/?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#A(){const t=[];if(window.location.hash){let e=window.location.hash.substring(1);e=decodeURIComponent(e);const i=e.split("&");for(const e in i)if(Object.hasOwn(i,e)){const r=i[e].split("=");r.length>1&&t.push({key:r[0],value:decodeURIComponent(r[1])})}}return t}#C(t){try{return JSON.parse(window.localStorage.getItem(t)||"[]")}catch(t){return console.warn(`Failed to parse scopes in local storage. ${t}`),[]}}#T(){document.location&&document.location.hash&&document.location.hash.indexOf("refreshToken")>-1&&(document.location.hash="")}#k(t){const e=this.#A().filter((e=>e.key===t));return 0===e.length?null:e[0].value}#E(t){if(!t)return null;let e;try{e=function(t,e){if("string"!=typeof t)throw new St("Invalid token specified: must be a string");e||(e={});const i=!0===e.header?0:1,r=t.split(".")[i];if("string"!=typeof r)throw new St(`Invalid token specified: missing part #${i+1}`);let o;try{o=At(r)}catch(t){throw new St(`Invalid token specified: invalid base64 for part #${i+1} (${t.message})`)}try{return JSON.parse(o)}catch(t){throw new St(`Invalid token specified: invalid json for part #${i+1} (${t.message})`)}}(t)}catch(t){return null}return e&&(e.exp=new Date(0).setUTCSeconds(e.exp)),e}#I(t){const e=new Date;return e.setSeconds(e.getSeconds()+30),t.iss===this.issuerIdentifier&&!(t.exp<=e)}#P(){return window.localStorage.getItem("LG-AUTH-AT")||""}#O(t){window.localStorage.setItem("LG-AUTH-AT",t)}#M(){return window.localStorage.getItem("LG-AUTH-RT")||""}#R(t){window.localStorage.setItem("LG-AUTH-RT",t||"")}async#$(t,e){if(!window.navigator.onLine)return Promise.reject("Computer not connected. Make sure your computer is connected to the internet.");const i=this.#C("LgClaimScopes"),r={grant_type:"refresh_token",refresh_token:t};i.length>0&&(r.claim_scopes=i);const o=await fetch(e,{method:"POST",body:JSON.stringify(r),headers:[["Content-Type","application/json"],["Accept","application/json"]]});let s;try{s=await o.json()}catch(t){return Promise.reject("Get Auth Token: The server sent back invalid JSON.")}return 200===o.status&&s.access_token?Promise.resolve(s.access_token):s.error?"unauthorized_client"===s.error?Promise.reject("Not authenticated"):Promise.reject(s.error):Promise.reject("Not authenticated")}#B(t){this.personId=Number(t.nameid),this.refreshTokenId=Number(t.RefreshTokenId),this.fullname=t.unique_name,this.username=t.username,this.firstName=t.given_name,this.lastName=t.family_name,this.email=t.email,this.isActiveEmployee="True"===t.IsActiveEmployee,this.roles="string"==typeof t.role?[t.role]:t.role??[],this.company=t.Company??"",this.companyId=t.CompanyId?Number(t.CompanyId):0,this.profilePictureFileName=t.PicCdnFileName||null,this.dispatchEvent(new Pt)}async#N(){const t=this.#k("refreshToken");let e=t?"":this.#P();const i=t||this.#M()||null;this.#T();const r=this.#E(e);if(r&&this.#I(r))return this.#O(e),this.#R(i),this.#B(r),Promise.resolve(r);if(null!=i){try{e=await this.#$(i,this.tokenUri)}catch(t){return Promise.reject(t)}const t=this.#E(e);if(t&&this.#I(t))return this.#O(e),this.#R(i),this.#B(t),Promise.resolve(t)}return Promise.reject("Not authenticated")}async getAccessTokenAsync(){return await this.authenticateAsync(),this.#P()}async isAuthenticatedAsync(){try{await this.#N()}catch(t){return!1}return!0}async authenticateAsync(){const t=this;return this.#_?new Promise(((e,i)=>{this.addEventListener("token",(function r(o){t.removeEventListener("token",r),o.detail.rejected&&i(o.detail.message),e(o.detail.accessToken)}))})):new Promise((async(e,i)=>{let r;try{this.#_=!0,r=await this.#N()}catch(t){if("Not authenticated"===t)return document.location&&this.#z(document.location.href),this.#_=!1,void this.dispatchEvent(new CustomEvent("token",{detail:{rejected:!0,message:t}}));this.#_=!1,i(t)}this.#_=!1,t.dispatchEvent(new CustomEvent("token",{detail:r})),e(r)}))}reset(){localStorage.removeItem("LG-AUTH-AT"),localStorage.removeItem("LG-AUTH-RT"),this.personId=0,this.refreshTokenId=0,this.username="",this.fullname="",this.company="",this.companyId=null,this.profilePictureFileName=null,this.firstName="",this.lastName="",this.email="",this.isActiveEmployee=!1,this.roles.forEach((t=>{window.dispatchEvent(new CustomEvent("um-role-removed",{detail:{role:t}}))})),this.roles=[],this.dispatchEvent(new Pt)}logout(){this.reset(),document.location&&this.#S(document.location.href)}};r([ft({type:Array})],Rt.prototype,"roles",null),r([ft({type:String})],Rt.prototype,"fullname",null),r([ft({type:String})],Rt.prototype,"username",null),r([ft({type:String})],Rt.prototype,"firstName",null),r([ft({type:String})],Rt.prototype,"lastName",null),r([ft({type:String})],Rt.prototype,"company",null),r([ft({type:Number})],Rt.prototype,"companyId",null),r([ft({type:String})],Rt.prototype,"profilePictureFileName",null),r([ft({type:String})],Rt.prototype,"email",null),r([ft({type:Number})],Rt.prototype,"personId",null),r([ft({type:Number})],Rt.prototype,"refreshTokenId",null),r([ft({type:String})],Rt.prototype,"redirectUrl",null),r([ft({type:String})],Rt.prototype,"redirectDevUrl",null),r([ft({type:String})],Rt.prototype,"tokenUri",null),r([ft({type:String})],Rt.prototype,"issuerIdentifier",null),r([ft({type:Boolean})],Rt.prototype,"disableAutoload",null),r([ft({type:Boolean})],Rt.prototype,"isActiveEmployee",null),Rt=r([ut("user-manager")],Rt);const Bt=d`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`,Nt=Symbol("attachableController");let jt;jt=new MutationObserver((t=>{for(const e of t)e.target[Nt]?.hostConnected()}));class Lt{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){null===t?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[Nt]=this,jt?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}const Ft=["focusin","focusout","pointerdown"];class Ut extends dt{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Lt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[Dt]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}t[Dt]=!0}}onControlChange(t,e){for(const i of Ft)t?.removeEventListener(i,this),e?.addEventListener(i,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}r([ft({type:Boolean,reflect:!0})],Ut.prototype,"visible",void 0),r([ft({type:Boolean,reflect:!0})],Ut.prototype,"inward",void 0);const Dt=Symbol("handledByFocusRing"),qt=d`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;let Ht=class extends Ut{};Ht.styles=[qt],Ht=r([ut("md-focus-ring")],Ht);const Vt=1,Gt=2,Wt=3,Xt=4,Yt=t=>(...e)=>({_$litDirective$:t,values:e});let Kt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const Jt=Yt(class extends Kt{constructor(t){if(super(t),t.type!==Vt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}}),Qt={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)"};var Zt;!function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Zt||(Zt={}));const te=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],ee=window.matchMedia("(forced-colors: active)");class ie extends dt{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Zt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Lt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return G`<div class="surface ${Jt(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==Zt.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state!==Zt.HOLDING)return this.state===Zt.TOUCH_DELAY?(this.state=Zt.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Zt.WAITING_FOR_CLICK}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t))return this.state=Zt.WAITING_FOR_CLICK,void this.startPressAnimation(t);this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=Zt.TOUCH_DELAY,await new Promise((t=>{setTimeout(t,150)})),this.state===Zt.TOUCH_DELAY&&(this.state=Zt.HOLDING,this.startPressAnimation(t)))}}handleClick(){this.disabled||(this.state!==Zt.WAITING_FOR_CLICK?this.state===Zt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),i=Math.max(t,e),r=Math.max(.35*i,75),o=Math.floor(.2*i),s=Math.sqrt(e**2+t**2)+10;this.initialSize=o,this.rippleScale=""+(s+r)/o,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:i}=window,{left:r,top:o}=this.getBoundingClientRect(),s=e+r,n=i+o,{pageX:a,pageY:l}=t;return{x:a-s,y:l-n}}getTranslationCoordinates(t){const{height:e,width:i}=this.getBoundingClientRect(),r={x:(i-this.initialSize)/2,y:(e-this.initialSize)/2};let o;return o=t instanceof PointerEvent?this.getNormalizedPointerEventCoords(t):{x:i/2,y:e/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:r}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:i}=this.getTranslationCoordinates(t),r=`${e.x}px, ${e.y}px`,o=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:Qt.STANDARD,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Zt.INACTIVE;const t=this.growAnimation;let e=1/0;"number"==typeof t?.currentTime?e=t.currentTime:t?.currentTime&&(e=t.currentTime.to("ms").value),e>=225?this.pressed=!1:(await new Promise((t=>{setTimeout(t,225-e)})),this.growAnimation===t&&(this.pressed=!1))}shouldReactToEvent(t){if(this.disabled||!t.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if("pointerenter"===t.type||"pointerleave"===t.type)return!this.isTouch(t);const e=1===t.buttons;return this.isTouch(t)||e}inBounds({x:t,y:e}){const{top:i,left:r,bottom:o,right:s}=this.getBoundingClientRect();return t>=r&&t<=s&&e>=i&&e<=o}isTouch({pointerType:t}){return"touch"===t}async handleEvent(t){if(!ee?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t)}}onControlChange(t,e){for(const i of te)t?.removeEventListener(i,this),e?.addEventListener(i,this)}}r([ft({type:Boolean,reflect:!0})],ie.prototype,"disabled",void 0),r([vt()],ie.prototype,"hovered",void 0),r([vt()],ie.prototype,"pressed",void 0),r([bt(".surface")],ie.prototype,"mdRoot",void 0);const re=d`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;let oe=class extends ie{};oe.styles=[re],oe=r([ut("md-ripple")],oe);const se=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],ne=se.map(le);function ae(t){return ne.includes(t)}function le(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}const ce=Symbol("privateIgnoreAttributeChangesFor");function de(t){var e;class i extends t{constructor(){super(...arguments),this[e]=new Set}attributeChangedCallback(t,e,i){if(!ae(t))return void super.attributeChangedCallback(t,e,i);if(this[ce].has(t))return;this[ce].add(t),this.removeAttribute(t),this[ce].delete(t);const r=ue(t);null===i?delete this.dataset[r]:this.dataset[r]=i,this.requestUpdate(ue(t),e)}getAttribute(t){return ae(t)?super.getAttribute(he(t)):super.getAttribute(t)}removeAttribute(t){super.removeAttribute(t),ae(t)&&(super.removeAttribute(he(t)),this.requestUpdate())}}return e=ce,function(t){for(const e of se){const i=le(e),r=he(i),o=ue(i);t.createProperty(e,{attribute:i,noAccessor:!0}),t.createProperty(Symbol(r),{attribute:r,noAccessor:!0}),Object.defineProperty(t.prototype,e,{configurable:!0,enumerable:!0,get(){return this.dataset[o]??null},set(t){const i=this.dataset[o]??null;t!==i&&(null===t?delete this.dataset[o]:this.dataset[o]=t,this.requestUpdate(e,i))}})}}(i),i}function he(t){return`data-${t}`}function ue(t){return t.replace(/-\w/,(t=>t[1].toUpperCase()))}const pe=Symbol("internals"),me=Symbol("privateInternals");function fe(t){return class extends t{get[pe](){return this[me]||(this[me]=this.attachInternals()),this[me]}}}function ve(t){t.addInitializer((t=>{const e=t;e.addEventListener("click",(async t=>{const{type:i,[pe]:r}=e,{form:o}=r;o&&"button"!==i&&(await new Promise((t=>{setTimeout(t)})),t.defaultPrevented||("reset"!==i?(o.addEventListener("submit",(t=>{Object.defineProperty(t,"submitter",{configurable:!0,enumerable:!0,get:()=>e})}),{capture:!0,once:!0}),r.setFormValue(e.value),o.requestSubmit()):o.reset()))}))}))}function ge(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function be(t){return t.currentTarget===t.target&&(t.composedPath()[0]===t.target&&(!t.target.disabled&&!function(t){const e=ye;e&&(t.preventDefault(),t.stopImmediatePropagation());return async function(){ye=!0,await null,ye=!1}(),e}(t)))}let ye=!1;const xe=de(fe(dt));class we extends xe{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[pe].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const t=!this.href&&(this.disabled||this.softDisabled),e=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return G`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${i}
        ?disabled="${t}"></md-ripple>
      ${e}
    `}renderButton(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return G`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||X}
      aria-label="${t||X}"
      aria-haspopup="${e||X}"
      aria-expanded="${i||X}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return G`<a
      id="link"
      class="button"
      aria-label="${t||X}"
      aria-haspopup="${e||X}"
      aria-expanded="${i||X}"
      href=${this.href}
      download=${this.download||X}
      target=${this.target||X}
      >${this.renderContent()}
    </a>`}renderContent(){const t=G`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return G`
      <span class="touch"></span>
      ${this.trailingIcon?X:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:X}
    `}handleClick(t){if(!this.href&&this.softDisabled)return t.stopImmediatePropagation(),void t.preventDefault();be(t)&&this.buttonElement&&(this.focus(),ge(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}ve(we),we.formAssociated=!0,we.shadowRootOptions={mode:"open",delegatesFocus:!0},r([ft({type:Boolean,reflect:!0})],we.prototype,"disabled",void 0),r([ft({type:Boolean,attribute:"soft-disabled",reflect:!0})],we.prototype,"softDisabled",void 0),r([ft()],we.prototype,"href",void 0),r([ft()],we.prototype,"download",void 0),r([ft()],we.prototype,"target",void 0),r([ft({type:Boolean,attribute:"trailing-icon",reflect:!0})],we.prototype,"trailingIcon",void 0),r([ft({type:Boolean,attribute:"has-icon",reflect:!0})],we.prototype,"hasIcon",void 0),r([ft()],we.prototype,"type",void 0),r([ft({reflect:!0})],we.prototype,"value",void 0),r([bt(".button")],we.prototype,"buttonElement",void 0),r([wt({slot:"icon",flatten:!0})],we.prototype,"assignedIcons",void 0);class _e extends we{}const ke=d`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;let $e=class extends _e{};$e.styles=[Bt,ke],$e=r([ut("md-text-button")],$e);let ze=class extends dt{#j;#L;get open(){return this.#L}set open(t){this.#L=t}#F;get noAction(){return this.#F}set noAction(t){this.#F=t}#U;get actionText(){return this.#U}set actionText(t){this.#U=t}#D;get message(){return this.#D}set message(t){this.#D=t}constructor(){super(),this.popover="manual"}show(t,e){if(this.showPopover?this.showPopover():this.open=!0,this.message=e?.overrideTemplate?e?.overrideTemplate:t,this.noAction=e?.noAction??!1,this.actionText=e?.actionText??"Dismiss",e?.autoHide){const t="number"==typeof e?.autoHide?e?.autoHide:5e3;this.#q=window.setTimeout((()=>this.close("auto-close")),t)}return new Promise((t=>{this.#j=t}))}#q=0;close(t=""){clearTimeout(this.#q),this.hidePopover?this.hidePopover():this.open=!1,this.#j(t)}static{this.styles=[d`
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
    `]}render(){return G`
      <div main>${this.message}</div>
      <md-text-button ?hidden=${this.noAction} @click=${()=>this.close("dismiss")}>${this.actionText} </md-text-button>
    `}};r([ft({type:Boolean,reflect:!0})],ze.prototype,"open",null),r([ft({type:Boolean,reflect:!0})],ze.prototype,"noAction",null),r([ft({type:String})],ze.prototype,"actionText",null),r([ft({type:String})],ze.prototype,"message",null),ze=r([ut("titanium-simple-snackbar")],ze);let Se=class extends dt{#j;#L;get open(){return this.#L}set open(t){this.#L=t}#H=[];get httpErrors(){return this.#H}set httpErrors(t){this.#H=t}constructor(){super(),this.popover="manual"}show(t){return this.showPopover?this.showPopover():this.open=!0,this.httpErrors.push(t),new Promise((t=>{this.#j=t}))}addError(t){this.httpErrors=[...this.httpErrors,t]}#q=0;close(t=""){clearTimeout(this.#q),this.hidePopover?this.hidePopover():this.open=!1,this.#j(t)}static{this.styles=[...ze.styles,d`
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
    `]}#V(t){const e=t.split("\n"),i=e.length;return e.map(((t,e)=>e===i-1?t:G`${t}<br />`))}render(){return G`
      <div main>
        <http-error>
          <span action> ${this.httpErrors.length>1?G`${this.httpErrors.length} Network errors`:this.httpErrors?.[0]?.action} </span>
          <span status> ${this.httpErrors.length>1?G`${this.httpErrors?.[0]?.action}`:X} ${this.httpErrors?.[0]?.statusCode} </span>
          <span error>${this.#V(this.httpErrors?.[0]?.message??"")}</span>
          ${this.httpErrors?.[0]?.detail?G` <code detail>${this.#V(this.httpErrors?.[0]?.detail)}</code>`:X}
        </http-error>
      </div>
      <div actions>
        <md-text-button
          @click=${()=>{1===this.httpErrors.length?this.close("dismiss"):this.httpErrors=[...this.httpErrors.filter((t=>t!==this.httpErrors?.[0]))]}}
          >Dismiss
        </md-text-button>
        <md-text-button ?hidden=${1===this.httpErrors.length} @click=${()=>this.close("dismiss")}>Dismiss all (${this.httpErrors.length}) </md-text-button>
      </div>
    `}};r([ft({type:Boolean,reflect:!0})],Se.prototype,"open",null),r([ft({type:Array})],Se.prototype,"httpErrors",null),Se=r([ut("titanium-http-error-snackbar")],Se);class Ae extends Event{static{this.eventName="show-snackbar"}constructor(t,e){super(Ae.eventName,{bubbles:!0,composed:!0}),this.SnackbarMessage=t,this.SnackbarOptions=e}}let Ce=class extends dt{constructor(){super(...arguments),this.SnackbarStack=[]}#G;get eventListenerTarget(){return this.#G}set eventListenerTarget(t){this.#G=t}connectedCallback(){(this.eventListenerTarget||this.getRootNode()).addEventListener(Ae.eventName,(t=>{t.stopImmediatePropagation(),this.open(t.SnackbarMessage,t.SnackbarOptions)}))}async open(t,e){let i,r;if("string"==typeof t){const o="<titanium-simple-snackbar newest></titanium-simple-snackbar>";this.insertAdjacentHTML("beforeend",o);const s=this.querySelector("titanium-simple-snackbar[newest]");s.removeAttribute("newest"),e&&(e.close=t=>s.close(t)),this.SnackbarStack.unshift(s),i=s.show(t,e),r=s}else{let o=this.querySelector("titanium-http-error-snackbar");if(o)return void o.addError(t);{const e="<titanium-http-error-snackbar></titanium-http-error-snackbar>";this.insertAdjacentHTML("beforeend",e),o=this.querySelector("titanium-http-error-snackbar"),this.SnackbarStack.unshift(o),i=o.show(t)}e&&(e.close=t=>o.close(t)),r=o}return this.reposition(),await i,this.SnackbarStack.splice(this.SnackbarStack.indexOf(r),1),r.remove(),this.reposition(),i}dismissAll(){this.SnackbarStack.forEach((t=>t.close()))}async reposition(){let t=0;for(let e=0;e<this.SnackbarStack.length;e++){const i=this.SnackbarStack[e];await i.updateComplete,0===i.clientHeight&&i.close(),i.style.bottom=`${t}px`,t+=i.clientHeight+12}}};r([ft({type:Object})],Ce.prototype,"eventListenerTarget",null),Ce=r([ut("titanium-snackbar-stack")],Ce);class Te extends CustomEvent{static{this.eventType="pending-state"}constructor(t){super(Te.eventType,{bubbles:!0,composed:!0,detail:{promise:t}})}}const Ee="important",Ie=" !"+Ee,Pe=Yt(class extends Kt{constructor(t){if(super(t),t.type!==Vt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(Ie);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?Ee:""):i[t]=r}}return W}}),Oe=de(dt);class Me extends Oe{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:t}=this;return G`
      <div
        class="progress ${Jt(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${t||X}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?X:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}r([ft({type:Number})],Me.prototype,"value",void 0),r([ft({type:Number})],Me.prototype,"max",void 0),r([ft({type:Boolean})],Me.prototype,"indeterminate",void 0),r([ft({type:Boolean,attribute:"four-color"})],Me.prototype,"fourColor",void 0);class Re extends Me{constructor(){super(...arguments),this.buffer=0}renderIndicator(){const t={transform:`scaleX(${100*(this.indeterminate?1:this.value/this.max)}%)`},e=this.buffer??0,i=e>0,r={transform:`scaleX(${100*(this.indeterminate||!i?1:e/this.max)}%)`},o=this.indeterminate||!i||e>=this.max||this.value>=this.max;return G`
      <div class="dots" ?hidden=${o}></div>
      <div class="inactive-track" style=${Pe(r)}></div>
      <div class="bar primary-bar" style=${Pe(t)}>
        <div class="bar-inner"></div>
      </div>
      <div class="bar secondary-bar">
        <div class="bar-inner"></div>
      </div>
    `}}r([ft({type:Number})],Re.prototype,"buffer",void 0);const Be=d`:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, var(--md-sys-shape-corner-none, 0px));border-radius:var(--_track-shape);display:flex;position:relative;min-width:80px;height:var(--_track-height);content-visibility:auto;contain:strict}.progress,.dots,.inactive-track,.bar,.bar-inner{position:absolute}.progress{direction:ltr;inset:0;border-radius:inherit;overflow:hidden;display:flex;align-items:center}.bar{animation:none;width:100%;height:var(--_active-indicator-height);transform-origin:left center;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.inactive-track{background:var(--_track-color);inset:0;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.dots{inset:0;animation:linear infinite 250ms;animation-name:buffering;background-color:var(--_track-color);background-repeat:repeat-x;-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");z-index:-1}.dots[hidden]{display:none}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .primary-bar{animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate .primary-bar>.bar-inner{animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate .secondary-bar{animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate .secondary-bar>.bar-inner{animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host(:dir(rtl)){transform:scale(-1)}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(var(--_track-height) / 2 * 5))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.6714%)}100%{transform:translateX(200.611%)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.6519%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.3862%)}100%{transform:translateX(160.278%)}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media(forced-colors: active){:host{outline:1px solid CanvasText}.bar-inner,.dots{background-color:CanvasText}}
`;let Ne=class extends Re{};Ne.styles=[Be],Ne=r([ut("md-linear-progress")],Ne);let je=class extends dt{#L;get open(){return this.#L}set open(t){this.#L=t}#W;#X;#Y=75;#K=350;#J;#Q=0;firstUpdated(){this.popover="manual",this.addEventListener("toggle",(t=>this.open="open"===t.newState)),window.addEventListener(Te.eventType,(async t=>{this.#Z(),this.#Q++;try{await t.detail.promise}finally{this.#Q--,0===this.#Q&&this.#tt()}}))}#Z(){window.clearTimeout(this.#W),window.clearTimeout(this.#X),this.#W=window.setTimeout((()=>{this.#J=performance.now(),this.showPopover?this.showPopover():this.open=!0,this.style.display="block"}),this.#Y)}#tt(){window.clearTimeout(this.#W);const t=performance.now()-this.#J,e=Math.max(this.#K-t,0);this.#X=window.setTimeout((()=>{this.hidePopover?this.hidePopover():this.open=!1,this.style.display="none"}),e)}static{this.styles=d`
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
  `}render(){return G` <md-linear-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-linear-progress> `}};r([vt()],je.prototype,"open",null),je=r([ut("titanium-full-page-loading-indicator")],je);let Le=class extends dt{#D="We were unable to find the page you are looking for...";get message(){return this.#D}set message(t){this.#D=t}static{this.styles=d`
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
  `}render(){return G`
      <header>
        <h1>Oops!</h1>
        <h2>${this.message}</h2>
      </header>
      <img src="https://www.leavitt.com/images/alert.svg" />
    `}};r([ft({type:String})],Le.prototype,"message",null),Le=r([ut("titanium-error-page")],Le);let Fe=class extends dt{#et;get notificationsStatus(){return this.#et}set notificationsStatus(t){this.#et=t}#it="service-worker.js";get scriptUrl(){return this.#it}set scriptUrl(t){this.#it=t}#rt;#ot=!1;async connectedCallback(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration();t&&(t.addEventListener("updatefound",(()=>{this.#rt=t.installing,this.#rt?.addEventListener("statechange",(()=>{"installed"===this.#rt?.state&&navigator.serviceWorker.controller&&this.#st()}))})),t.waiting&&navigator.serviceWorker.controller&&(this.#rt=t.waiting,this.#st())),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.#ot||(window.location.reload(),this.#ot=!0)}))}}async#st(){await this.dispatchEvent(new Ae("Site has been updated",{actionText:"RELOAD"})),this.#rt?.postMessage({type:"SKIP_WAITING"})}render(){return G``}};var Ue;r([ft({type:String})],Fe.prototype,"notificationsStatus",null),r([ft({type:String})],Fe.prototype,"scriptUrl",null),Fe=r([ut("titanium-service-worker-notifier")],Fe);let De=class extends dt{static{Ue=this}#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}#at=!1;get fixed(){return this.#at}set fixed(t){this.#at=t}#lt=!1;get alwayShowContent(){return this.#lt}set alwayShowContent(t){this.#lt=t}#ct="ltr";get direction(){return this.#ct}set direction(t){this.#ct=t}#dt=!1;get hasHeader(){return this.#dt}set hasHeader(t){this.#dt=t}#ht=!1;get hasFooter(){return this.#ht}set hasFooter(t){this.#ht=t}async firstUpdated(){let t=0,e=0;this.addEventListener("touchstart",(e=>{t=e.changedTouches[0].screenX})),this.addEventListener("touchend",(i=>{e=i.changedTouches[0].screenX,t-e>50&&this.close()})),this.dialog?.addEventListener("click",(t=>{t.target instanceof Element&&"DIALOG"===t.target?.nodeName&&this.close()})),this.dialog?.addEventListener("cancel",(t=>{t.preventDefault(),this.close()})),window.addEventListener("popstate",(()=>this.dialog?.close()),!1),await Ue.animationsComplete(this.dialog),await Ue.animationsComplete(this.dialog),this.dialog?.removeAttribute("loading")}static async animationsComplete(t){return await Promise.allSettled(t.getAnimations().map((t=>t.finished)))}open(){this.dialog?.showModal(),this.dialog?.removeAttribute("hide"),this.setBodyOverflow("hidden")}async close(){this.dialog?.open&&(this.dialog?.setAttribute("hide",""),await Ue.animationsComplete(this.dialog),this.dialog?.close(),this.dialog?.removeAttribute("hide"))}closeQuick(){this.dialog?.open&&this.dialog?.close()}setBodyOverflow(t){const e=document.querySelector("html");e&&(e.style.overflow=t)}static{this.styles=d`
    :host {
      display: block;
    }

    dialog {
      background-color: var(--titanium-drawer-background-color, var(--md-sys-color-background));
      color: var(--titanium-drawer-color, var(--md-sys-color-on-background));
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

      flex-direction: column;
      width: var(--titanium-drawer-width, 300px);

      min-height: 100dvh;
      max-height: -webkit-fill-available;

      border-right: 1px solid var(--md-sys-color-outline-variant);
      padding-right: 8px;
      animation: show 0.25s ease normal;
    }

    :host([direction='rtl']) dialog[open] {
      animation: show-reverse 0.25s ease normal;
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

      background-color: var(--titanium-drawer-background-color, var(--md-sys-color-background));
      color: var(--titanium-drawer-color, var(--md-sys-color-on-background));
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
      min-width: var(--titanium-drawer-width, 300px);
      padding: 0;
      margin: 0;
      width: 100%;

      height: calc(100dvh - var(--titanium-drawer-full-height-padding, 48px));

      animation: show 0.25s ease normal;
    }

    :host([always-show-content][direction='rtl']) dialog:not([open]) {
      animation: show-reverse 0.25s ease normal;
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

    dialog[hide][direction='rtl'] {
      animation: close-reverse 0.25s ease normal;
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

    @keyframes show-reverse {
      from {
        transform: translateX(110%);
      }
      to {
        transform: translateX(0%);
      }
    }

    @keyframes close-reverse {
      to {
        transform: translateX(110%);
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
  `}render(){return G`<dialog
      loading
      @close=${()=>{this.setBodyOverflow("")}}
      part="dialog"
    >
      <header part="header"><slot name="header" @slotchange=${()=>this.hasHeader=this.headerElements.length>0}></slot></header>
      <main part="main"><slot></slot></main>
      <footer part="footer"><slot name="footer" @slotchange=${()=>this.hasFooter=this.footerElements.length>0}></slot></footer>
    </dialog>`}};r([bt("dialog")],De.prototype,"dialog",null),r([ft({type:Boolean,reflect:!0})],De.prototype,"fixed",null),r([ft({type:Boolean,reflect:!0,attribute:"always-show-content"})],De.prototype,"alwayShowContent",null),r([ft({type:String,reflect:!0})],De.prototype,"direction",null),r([ft({type:Boolean,reflect:!0,attribute:"has-header"})],De.prototype,"hasHeader",null),r([ft({type:Boolean,reflect:!0,attribute:"has-footer"})],De.prototype,"hasFooter",null),r([wt({slot:"header"})],De.prototype,"headerElements",void 0),r([wt({slot:"footer"})],De.prototype,"footerElements",void 0),De=Ue=r([ut("titanium-drawer")],De);let qe=class extends dt{#ut;get fileName(){return this.#ut}set fileName(t){this.#ut=t}#pt="circle";get shape(){return this.#pt}set shape(t){this.#pt=t}#mt;get showRing(){return this.#mt}set showRing(t){this.#mt=t}#ft;get profilePictureLinkPersonId(){return this.#ft}set profilePictureLinkPersonId(t){this.#ft=t}#vt=120;get size(){return this.#vt}set size(t){this.#vt=t}#gt=!1;get useIntrinsicImageSize(){return this.#gt}set useIntrinsicImageSize(t){this.#gt=t}#bt=new Set([32,64,128,256,512,1024]);#yt="https://cdn.leavitt.com/icon-user-profile-sq.svg";updated(t){(t.has("size")||t.has("useIntrinsicImageSize"))&&(this.style.width=this.useIntrinsicImageSize||!this.size?"":this.size+"px",this.style.height=this.useIntrinsicImageSize||!this.size?"":this.size+"px")}#xt(t){const e=[...this.#bt];for(let i=0;i<e.length;i++){const r=e[i];if(t<=r)return r}return 512}#wt(t,e){const i=this.#xt(e);return t?`https://cdn.leavitt.com/${t}-${i}.webp`:this.#yt}static{this.styles=d`
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
  `}renderProfilePicture(){return G`
      <img
        loading="lazy"
        draggable="false"
        alt="User profile picture"
        src=${this.#wt(this.fileName,this.size)}
        @error=${t=>{t.target.src!==this.#yt&&(t.target.src=this.#yt)}}
      />
    `}render(){return this.profilePictureLinkPersonId?G`<a target="_blank" href="https://${Ct?"dev":""}workforce.leavitt.com/user/${this.profilePictureLinkPersonId}/view"
        >${this.renderProfilePicture()}</a
      > `:this.renderProfilePicture()}};function He(t,e=Je){const i=We(t,e);return i&&(i.tabIndex=0,i.focus()),i}function Ve(t,e=Je){const i=Xe(t,e);return i&&(i.tabIndex=0,i.focus()),i}function Ge(t,e=Je){for(let i=0;i<t.length;i++){const r=t[i];if(0===r.tabIndex&&e(r))return{item:r,index:i}}return null}function We(t,e=Je){for(const i of t)if(e(i))return i;return null}function Xe(t,e=Je){for(let i=t.length-1;i>=0;i--){const r=t[i];if(e(r))return r}return null}function Ye(t,e,i=Je,r=!0){if(e){const o=function(t,e,i=Je,r=!0){for(let o=1;o<t.length;o++){const s=(o+e)%t.length;if(s<e&&!r)return null;const n=t[s];if(i(n))return n}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return He(t,i)}function Ke(t,e,i=Je,r=!0){if(e){const o=function(t,e,i=Je,r=!0){for(let o=1;o<t.length;o++){const s=(e-o+t.length)%t.length;if(s>e&&!r)return null;const n=t[s];if(i(n))return n}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return Ve(t,i)}function Je(t){return!t.disabled}r([ft({reflect:!0,type:String})],qe.prototype,"fileName",null),r([ft({reflect:!0,type:String})],qe.prototype,"shape",null),r([ft({reflect:!0,type:Boolean,attribute:"show-ring"})],qe.prototype,"showRing",null),r([ft({reflect:!0,type:Number,attribute:"profile-picture-link-person-id"})],qe.prototype,"profilePictureLinkPersonId",null),r([ft({type:Number})],qe.prototype,"size",null),r([ft({type:Boolean})],qe.prototype,"useIntrinsicImageSize",null),qe=r([ut("profile-picture")],qe);const Qe={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class Ze{constructor(t){this.handleKeydown=t=>{const e=t.key;if(t.defaultPrevented||!this.isNavigableKey(e))return;const i=this.items;if(!i.length)return;const r=Ge(i,this.isActivatable);t.preventDefault();const o=this.isRtl();let s=null;switch(e){case Qe.ArrowDown:case o?Qe.ArrowLeft:Qe.ArrowRight:s=Ye(i,r,this.isActivatable,this.wrapNavigation());break;case Qe.ArrowUp:case o?Qe.ArrowRight:Qe.ArrowLeft:s=Ke(i,r,this.isActivatable,this.wrapNavigation());break;case Qe.Home:s=He(i,this.isActivatable);break;case Qe.End:s=Ve(i,this.isActivatable)}s&&r&&r.item!==s&&(r.item.tabIndex=-1)},this.onDeactivateItems=()=>{const t=this.items;for(const e of t)this.deactivateItem(e)},this.onRequestActivation=t=>{this.onDeactivateItems();const e=t.target;this.activateItem(e),e.focus()},this.onSlotchange=()=>{const t=this.items;let e=!1;for(const i of t){!(!i.disabled&&i.tabIndex>-1)||e?i.tabIndex=-1:(e=!0,i.tabIndex=0)}if(e)return;const i=We(t,this.isActivatable);i&&(i.tabIndex=0)};const{isItem:e,getPossibleItems:i,isRtl:r,deactivateItem:o,activateItem:s,isNavigableKey:n,isActivatable:a,wrapNavigation:l}=t;this.isItem=e,this.getPossibleItems=i,this.isRtl=r,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=n,this.isActivatable=a,this.wrapNavigation=l??(()=>!0)}get items(){const t=this.getPossibleItems(),e=[];for(const i of t){if(this.isItem(i)){e.push(i);continue}const t=i.item;t&&this.isItem(t)&&e.push(t)}return e}activateNextItem(){const t=this.items,e=Ge(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Ye(t,e,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const t=this.items,e=Ge(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Ke(t,e,this.isActivatable,this.wrapNavigation())}}const ti=function(t,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:t,reason:e,itemPath:[t]}})},ei={SPACE:"Space",ENTER:"Enter"},ii={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},ri={ESCAPE:"Escape",SPACE:ei.SPACE,ENTER:ei.ENTER};function oi(t){return Object.values(ri).some((e=>e===t))}function si(t){return Object.values(ei).some((e=>e===t))}function ni(t,e){const i=new Event("md-contains",{bubbles:!0,composed:!0});let r=[];const o=t=>{r=t.composedPath()};e.addEventListener("md-contains",o),t.dispatchEvent(i),e.removeEventListener("md-contains",o);return r.length>0}const ai={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"},li="end-start",ci="start-start";class di{constructor(t,e){this.host=t,this.getProperties=e,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:t,anchorEl:e,anchorCorner:i,surfaceCorner:r,positioning:o,xOffset:s,yOffset:n,disableBlockFlip:a,disableInlineFlip:l,repositionStrategy:c}=this.getProperties(),d=i.toLowerCase().trim(),h=r.toLowerCase().trim();if(!t||!e)return;const u=window.innerWidth,p=window.innerHeight,m=document.createElement("div");m.style.opacity="0",m.style.position="fixed",m.style.display="block",m.style.inset="0",document.body.appendChild(m);const f=m.getBoundingClientRect();m.remove();const v=window.innerHeight-f.bottom,g=window.innerWidth-f.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,t.popover&&t.isConnected&&t.showPopover();const b=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),y=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),[x,w]=h.split("-"),[_,k]=d.split("-"),$="ltr"===getComputedStyle(t).direction;let{blockInset:z,blockOutOfBoundsCorrection:S,surfaceBlockProperty:A}=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:_,surfaceBlock:x,yOffset:n,positioning:o,windowInnerHeight:p,blockScrollbarHeight:v});if(S&&!a){const t="start"===x?"end":"start",e="start"===_?"end":"start",i=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:e,surfaceBlock:t,yOffset:n,positioning:o,windowInnerHeight:p,blockScrollbarHeight:v});S>i.blockOutOfBoundsCorrection&&(z=i.blockInset,S=i.blockOutOfBoundsCorrection,A=i.surfaceBlockProperty)}let{inlineInset:C,inlineOutOfBoundsCorrection:T,surfaceInlineProperty:E}=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:k,surfaceInline:w,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:u,inlineScrollbarWidth:g});if(T&&!l){const t="start"===w?"end":"start",e="start"===k?"end":"start",i=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:e,surfaceInline:t,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:u,inlineScrollbarWidth:g});Math.abs(T)>Math.abs(i.inlineOutOfBoundsCorrection)&&(C=i.inlineInset,T=i.inlineOutOfBoundsCorrection,E=i.surfaceInlineProperty)}"move"===c&&(z-=S,C-=T),this.surfaceStylesInternal={display:"block",opacity:"1",[A]:`${z}px`,[E]:`${C}px`},"resize"===c&&(S&&(this.surfaceStylesInternal.height=b.height-S+"px"),T&&(this.surfaceStylesInternal.width=b.width-T+"px")),this.host.requestUpdate()}calculateBlock(t){const{surfaceRect:e,anchorRect:i,anchorBlock:r,surfaceBlock:o,yOffset:s,positioning:n,windowInnerHeight:a,blockScrollbarHeight:l}=t,c="fixed"===n||"document"===n?1:0,d="document"===n?1:0,h="start"===o?1:0,u="end"===o?1:0,p=(r!==o?1:0)*i.height+s,m=h*i.top+u*(a-i.bottom-l);return{blockInset:c*m+d*(h*window.scrollY-u*window.scrollY)+p,blockOutOfBoundsCorrection:Math.abs(Math.min(0,a-m-p-e.height)),surfaceBlockProperty:"start"===o?"inset-block-start":"inset-block-end"}}calculateInline(t){const{isLTR:e,surfaceInline:i,anchorInline:r,anchorRect:o,surfaceRect:s,xOffset:n,positioning:a,windowInnerWidth:l,inlineScrollbarWidth:c}=t,d="fixed"===a||"document"===a?1:0,h="document"===a?1:0,u=e?1:0,p=e?0:1,m="start"===i?1:0,f="end"===i?1:0,v=(r!==i?1:0)*o.width+n,g=u*(m*o.left+f*(l-o.right-c))+p*(m*(l-o.right-c)+f*o.left);let b="start"===i?"inset-inline-start":"inset-inline-end";return"document"!==a&&"fixed"!==a||(b="start"===i&&e||"end"===i&&!e?"left":"right"),{inlineInset:d*g+v+h*(u*(m*window.scrollX-f*window.scrollX)+p*(f*window.scrollX-m*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-g-v-s.width)),surfaceInlineProperty:b}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const t=this.getProperties();let e=!1;for(const[i,r]of Object.entries(t))if(e=e||r!==this.lastValues[i],e)break;const i=this.lastValues.isOpen!==t.isOpen,r=!!t.anchorEl,o=!!t.surfaceEl;e&&r&&o&&(this.lastValues.isOpen=t.isOpen,t.isOpen?(this.lastValues=t,await this.position(),t.onOpen()):i&&(await t.beforeClose(),this.close(),t.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const t=this.getProperties().surfaceEl;t?.popover&&t?.isConnected&&t.hidePopover()}}const hi={INDEX:0,ITEM:1,TEXT:2};class ui{constructor(t){this.getProperties=t,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=t=>{this.isTypingAhead?this.typeahead(t):this.beginTypeahead(t)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(t){this.active&&("Space"===t.code||"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map(((t,e)=>[e,t,t.typeaheadText.trim().toLowerCase()])),this.lastActiveRecord=this.typeaheadRecords.find((t=>0===t[hi.ITEM].tabIndex))??null,this.lastActiveRecord&&(this.lastActiveRecord[hi.ITEM].tabIndex=-1),this.typeahead(t)))}typeahead(t){if(t.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[hi.ITEM].tabIndex=-1));"Space"===t.code&&t.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=t.key.toLowerCase();const e=this.lastActiveRecord?this.lastActiveRecord[hi.INDEX]:-1,i=this.typeaheadRecords.length,r=t=>(t[hi.INDEX]+i-e)%i,o=this.typeaheadRecords.filter((t=>!t[hi.ITEM].disabled&&t[hi.TEXT].startsWith(this.typaheadBuffer))).sort(((t,e)=>r(t)-r(e)));if(0===o.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[hi.ITEM].tabIndex=-1),void this.endTypeahead();const s=1===this.typaheadBuffer.length;let n;n=this.lastActiveRecord===o[0]&&s?o[1]??o[0]:o[0],this.lastActiveRecord&&(this.lastActiveRecord[hi.ITEM].tabIndex=-1),this.lastActiveRecord=n,n[hi.ITEM].tabIndex=0,n[hi.ITEM].focus()}}const pi=200,mi=new Set([Qe.ArrowDown,Qe.ArrowUp,Qe.Home,Qe.End]),fi=new Set([Qe.ArrowLeft,Qe.ArrowRight,...mi]);class vi extends dt{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(t){this.currentAnchorElement=t,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=200,this.anchorCorner=li,this.menuCorner=ci,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=ai.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=function(){let t=null;return{start:()=>(t?.abort(),t=new AbortController,t.signal),finish(){t=null}}}(),this.listController=new Ze({isItem:t=>t.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.selected=!1,t.tabIndex=-1},activateItem:t=>{t.selected=!0,t.tabIndex=0},isNavigableKey:t=>{if(!this.isSubmenu)return fi.has(t);return t===("rtl"===getComputedStyle(this).direction?Qe.ArrowLeft:Qe.ArrowRight)||mi.has(t)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new ui((()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive}))),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new di(this,(()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"}))),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async t=>{const e=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(e))return;if(t.relatedTarget){if(ni(t.relatedTarget,this)||0!==this.pointerPath.length&&ni(t.relatedTarget,e))return}else if(this.pointerPath.includes(this))return;const i=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=i},this.onOpened=async()=>{this.lastFocusedElement=function(t=document){let e=t.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}();const t=this.items,e=Ge(t);e&&this.defaultFocus!==ai.NONE&&(e.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case ai.FIRST_ITEM:const e=We(t);e&&(e.tabIndex=0,e.focus(),await e.updateComplete);break;case ai.LAST_ITEM:const i=Xe(t);i&&(i.tabIndex=0,i.focus(),await i.updateComplete);break;case ai.LIST_ROOT:this.focus()}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=t=>{this.pointerPath=t.composedPath()},this.onDocumentClick=t=>{if(!this.open)return;const e=t.composedPath();this.stayOpenOnOutsideClick||e.includes(this)||e.includes(this.anchorElement)||(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(t){t.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(t){t.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return G`
      <div
        class="menu ${Jt(this.getSurfaceClasses())}"
        style=${Pe(this.menuPositionController.surfaceStyles)}
        popover=${"popover"===this.positioning?"manual":X}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return G`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return G`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(t){t.target===this&&!t.defaultPrevented&&oi(t.code)&&(t.preventDefault(),this.close()),this.typeaheadController.onKeydown(t)}async animateOpen(){const t=this.surfaceEl,e=this.slotEl;if(!t||!e)return!0;const i=this.openDirection;this.dispatchEvent(new Event("opening")),t.classList.toggle("animating",!0);const r=this.openCloseAnimationSignal.start(),o=t.offsetHeight,s="UP"===i,n=this.items,a=250/n.length,l=t.animate([{height:"0px"},{height:`${o}px`}],{duration:500,easing:Qt.EMPHASIZED}),c=e.animate([{transform:s?`translateY(-${o}px)`:""},{transform:""}],{duration:500,easing:Qt.EMPHASIZED}),d=t.animate([{opacity:0},{opacity:1}],50),h=[];for(let t=0;t<n.length;t++){const e=n[s?n.length-1-t:t],i=e.animate([{opacity:0},{opacity:1}],{duration:250,delay:a*t});e.classList.toggle("md-menu-hidden",!0),i.addEventListener("finish",(()=>{e.classList.toggle("md-menu-hidden",!1)})),h.push([e,i])}let u=t=>{};const p=new Promise((t=>{u=t}));return r.addEventListener("abort",(()=>{l.cancel(),c.cancel(),d.cancel(),h.forEach((([t,e])=>{t.classList.toggle("md-menu-hidden",!1),e.cancel()})),u(!0)})),l.addEventListener("finish",(()=>{t.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),u(!1)})),await p}animateClose(){let t;const e=new Promise((e=>{t=e})),i=this.surfaceEl,r=this.slotEl;if(!i||!r)return t(!1),e;const o="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),i.classList.toggle("animating",!0);const s=this.openCloseAnimationSignal.start(),n=i.offsetHeight,a=this.items,l=150,c=50/a.length,d=i.animate([{height:`${n}px`},{height:.35*n+"px"}],{duration:l,easing:Qt.EMPHASIZED_ACCELERATE}),h=r.animate([{transform:""},{transform:o?`translateY(-${.65*n}px)`:""}],{duration:l,easing:Qt.EMPHASIZED_ACCELERATE}),u=i.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),p=[];for(let t=0;t<a.length;t++){const e=a[o?t:a.length-1-t],i=e.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+c*t});i.addEventListener("finish",(()=>{e.classList.toggle("md-menu-hidden",!0)})),p.push([e,i])}return s.addEventListener("abort",(()=>{d.cancel(),h.cancel(),u.cancel(),p.forEach((([t,e])=>{e.cancel(),t.classList.toggle("md-menu-hidden",!1)})),t(!1)})),d.addEventListener("finish",(()=>{i.classList.toggle("animating",!1),p.forEach((([t])=>{t.classList.toggle("md-menu-hidden",!1)})),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),t(!0)})),e}handleKeydown(t){this.pointerPath=[],this.listController.handleKeydown(t)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(t){t.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(t){t.stopPropagation(),this.listController.onRequestActivation(t)}handleDeactivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach((t=>{t.close?.()}))}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}r([bt(".menu")],vi.prototype,"surfaceEl",void 0),r([bt("slot")],vi.prototype,"slotEl",void 0),r([ft()],vi.prototype,"anchor",void 0),r([ft()],vi.prototype,"positioning",void 0),r([ft({type:Boolean})],vi.prototype,"quick",void 0),r([ft({type:Boolean,attribute:"has-overflow"})],vi.prototype,"hasOverflow",void 0),r([ft({type:Boolean,reflect:!0})],vi.prototype,"open",void 0),r([ft({type:Number,attribute:"x-offset"})],vi.prototype,"xOffset",void 0),r([ft({type:Number,attribute:"y-offset"})],vi.prototype,"yOffset",void 0),r([ft({type:Boolean,attribute:"no-horizontal-flip"})],vi.prototype,"noHorizontalFlip",void 0),r([ft({type:Boolean,attribute:"no-vertical-flip"})],vi.prototype,"noVerticalFlip",void 0),r([ft({type:Number,attribute:"typeahead-delay"})],vi.prototype,"typeaheadDelay",void 0),r([ft({attribute:"anchor-corner"})],vi.prototype,"anchorCorner",void 0),r([ft({attribute:"menu-corner"})],vi.prototype,"menuCorner",void 0),r([ft({type:Boolean,attribute:"stay-open-on-outside-click"})],vi.prototype,"stayOpenOnOutsideClick",void 0),r([ft({type:Boolean,attribute:"stay-open-on-focusout"})],vi.prototype,"stayOpenOnFocusout",void 0),r([ft({type:Boolean,attribute:"skip-restore-focus"})],vi.prototype,"skipRestoreFocus",void 0),r([ft({attribute:"default-focus"})],vi.prototype,"defaultFocus",void 0),r([ft({type:Boolean,attribute:"no-navigation-wrap"})],vi.prototype,"noNavigationWrap",void 0),r([wt({flatten:!0})],vi.prototype,"slotItems",void 0),r([vt()],vi.prototype,"typeaheadActive",void 0);const gi=d`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;let bi=class extends vi{};bi.styles=[gi],bi=r([ut("md-menu")],bi);class yi extends we{renderElevationOrOutline(){return G`<div class="outline"></div>`}}const xi=d`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host(:is([disabled],[soft-disabled])) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])) .background{border-color:GrayText}:host(:is([disabled],[soft-disabled])) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;let wi=class extends yi{};wi.styles=[Bt,xi],wi=r([ut("md-outlined-button")],wi);class _i extends dt{render(){return G`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}const ki=d`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;let $i=class extends _i{};$i.styles=[ki],$i=r([ut("md-icon")],$i);const zi=Symbol.for(""),Si=t=>{if(t?.r===zi)return t?._$litStatic$},Ai=(t,...e)=>({_$litStatic$:e.reduce(((e,i,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1]),t[0]),r:zi}),Ci=new Map,Ti=(t=>(e,...i)=>{const r=i.length;let o,s;const n=[],a=[];let l,c=0,d=!1;for(;c<r;){for(l=e[c];c<r&&void 0!==(s=i[c],o=Si(s));)l+=o+e[++c],d=!0;c!==r&&a.push(s),n.push(l),c++}if(c===r&&n.push(e[r]),d){const t=n.join("$$lit$$");void 0===(e=Ci.get(t))&&(n.raw=n,Ci.set(t,e=n)),i=a}return t(e,...i)})(G);function Ei(t,e=!0){return e&&"rtl"===getComputedStyle(t).getPropertyValue("direction").trim()}const Ii=de(fe(dt));class Pi extends Ii{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[pe].form}get labels(){return this[pe].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Ei(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){const t=this.href?Ai`div`:Ai`button`,{ariaLabel:e,ariaHasPopup:i,ariaExpanded:r}=this,o=e&&this.ariaLabelSelected,s=this.toggle?this.selected:X;let n=X;return this.href||(n=o&&this.selected?this.ariaLabelSelected:e),Ti`<${t}
        class="icon-button ${Jt(this.getRenderClasses())}"
        id="button"
        aria-label="${n||X}"
        aria-haspopup="${!this.href&&i||X}"
        aria-expanded="${!this.href&&r||X}"
        aria-pressed="${s}"
        aria-disabled=${!this.href&&this.softDisabled||X}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?X:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():X}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return G`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||X}"
        target="${this.target||X}"
        aria-label="${t||X}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return G`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return G`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return G`<span class="touch"></span>`}renderFocusRing(){return G`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){const t=!this.href&&(this.disabled||this.softDisabled);return G`<md-ripple
      for=${this.href?"link":X}
      ?disabled="${t}"></md-ripple>`}connectedCallback(){this.flipIcon=Ei(this,this.flipIconInRtl),super.connectedCallback()}handleClick(t){if(!this.href&&this.softDisabled)return t.stopImmediatePropagation(),void t.preventDefault()}async handleClickOnChild(t){await 0,!this.toggle||this.disabled||this.softDisabled||t.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}ve(Pi),Pi.formAssociated=!0,Pi.shadowRootOptions={mode:"open",delegatesFocus:!0},r([ft({type:Boolean,reflect:!0})],Pi.prototype,"disabled",void 0),r([ft({type:Boolean,attribute:"soft-disabled",reflect:!0})],Pi.prototype,"softDisabled",void 0),r([ft({type:Boolean,attribute:"flip-icon-in-rtl"})],Pi.prototype,"flipIconInRtl",void 0),r([ft()],Pi.prototype,"href",void 0),r([ft()],Pi.prototype,"download",void 0),r([ft()],Pi.prototype,"target",void 0),r([ft({attribute:"aria-label-selected"})],Pi.prototype,"ariaLabelSelected",void 0),r([ft({type:Boolean})],Pi.prototype,"toggle",void 0),r([ft({type:Boolean,reflect:!0})],Pi.prototype,"selected",void 0),r([ft()],Pi.prototype,"type",void 0),r([ft({reflect:!0})],Pi.prototype,"value",void 0),r([vt()],Pi.prototype,"flipIcon",void 0);const Oi=d`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`,Mi=d`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}
`;let Ri=class extends Pi{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Ri.styles=[Oi,Mi],Ri=r([ut("md-icon-button")],Ri);let Bi=class extends dt{constructor(){super(...arguments),this.#vt=40,this.#m=0,this.#p="",this.#d="",this.#_t="",this.positioning="popover"}#vt;get size(){return this.#vt}set size(t){this.#vt=t}#u;get profilePictureFileName(){return this.#u}set profilePictureFileName(t){this.#u=t}#m;get personId(){return this.#m}set personId(t){this.#m=t}#p;get email(){return this.#p}set email(t){this.#p=t}#d;get company(){return this.#d}set company(t){this.#d=t}#_t;get name(){return this.#_t}set name(t){this.#_t=t}#kt;get menu(){return this.#kt}set menu(t){this.#kt=t}firstUpdated(){Mt().addEventListener(Pt.eventName,(()=>this.setUserProps())),this.setUserProps()}setUserProps(){this.personId=Mt().personId,this.profilePictureFileName=Mt().profilePictureFileName,this.email=Mt().email,this.company=Mt().company,this.name=Mt().fullname}updated(t){t.has("size")&&t.get("size")!==this.size&&(this.style.width=this.size+"px",this.style.height=this.size+"px"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}static{this.styles=d`
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
  `}render(){return G`
      <md-icon-button
        id="icon-button"
        @click=${()=>{this.personId?this.menu.open=!this.menu.open:Mt().authenticateAsync()}}
        style=${Pe({height:`${this.size}px`,width:`${this.size}px`})}
      >
        <profile-picture shape="circle" .fileName=${this.profilePictureFileName} .size=${this.size}></profile-picture>
      </md-icon-button>
      <md-menu y-offset="4" anchor="icon-button" menu-corner="start-end" anchor-corner="end-end" .positioning=${this.positioning}>
        <main>
          <profile-picture shape="circle" .fileName=${this.profilePictureFileName} size="90"></profile-picture>
          <h1>${this.name}</h1>
          ${this.company?G`<h2 company>${this.company}</h2>`:""}
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
          <md-text-button @click=${()=>Mt().logout()}>Sign out</md-text-button>
        </footer>
      </md-menu>
    `}};r([ft({type:Number})],Bi.prototype,"size",null),r([ft({type:String})],Bi.prototype,"profilePictureFileName",null),r([ft({type:Number})],Bi.prototype,"personId",null),r([ft({type:String})],Bi.prototype,"email",null),r([ft({type:String})],Bi.prototype,"company",null),r([ft({type:String})],Bi.prototype,"name",null),r([bt("md-menu")],Bi.prototype,"menu",null),r([ft()],Bi.prototype,"positioning",void 0),Bi=r([ut("profile-picture-menu")],Bi);class Ni extends dt{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}r([ft({type:Boolean,reflect:!0})],Ni.prototype,"inset",void 0),r([ft({type:Boolean,reflect:!0,attribute:"inset-start"})],Ni.prototype,"insetStart",void 0),r([ft({type:Boolean,reflect:!0,attribute:"inset-end"})],Ni.prototype,"insetEnd",void 0);const ji=d`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;let Li=class extends Ni{};function Fi(t,e){!e.bubbles||t.shadowRoot&&!e.composed||e.stopPropagation();const i=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(i);return r||e.preventDefault(),r}Li.styles=[ji],Li=r([ut("md-divider")],Li);const Ui={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Qt.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Qt.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},Di={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Qt.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Qt.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]},qi=de(dt);class Hi extends qi{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>Ui,this.getCloseAnimation=()=>Di,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(t=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const e=this.dialog;if(!e.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=t;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),e.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),e={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,r=G`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:o}=this;return G`
      <div class="scrim"></div>
      <dialog
        class=${Jt(e)}
        aria-label=${o||X}
        aria-labelledby=${this.hasHeadline?"headline":X}
        role=${"alert"===this.type?"alertdialog":X}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||X}>
        ${i?r:X}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||X}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${i?r:X}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver((t=>{for(const e of t)this.handleAnchorIntersection(e)}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:i}=t;"dialog"===e.getAttribute("method")&&i&&this.close(i.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const e=!Fi(this,t);t.preventDefault(),e||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(t){"Escape"===t.key&&(this.escapePressedWithoutCancel=!0,setTimeout((()=>{this.escapePressedWithoutCancel=!1})))}async animateDialog(t){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:e,scrim:i,container:r,headline:o,content:s,actions:n}=this;if(!(e&&i&&r&&o&&s&&n))return;const{container:a,dialog:l,scrim:c,headline:d,content:h,actions:u}=t,p=[[e,l??[]],[i,c??[]],[r,a??[]],[o,d??[]],[s,h??[]],[n,u??[]]],m=[];for(const[t,e]of p)for(const i of e){const e=t.animate(...i);this.cancelAnimations.signal.addEventListener("abort",(()=>{e.cancel()})),m.push(e)}await Promise.all(m.map((t=>t.finished.catch((()=>{})))))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}handleAnchorIntersection(t){const{target:e,isIntersecting:i}=t;e===this.topAnchor&&(this.isAtScrollTop=i),e===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise((t=>{this.isConnectedPromiseResolve=t}))}handleFocusTrapFocus(t){const[e,i]=this.getFirstAndLastFocusableChildren();if(!e||!i)return void this.dialog?.focus();const r=t.target===this.firstFocusTrap,o=!r,s=t.relatedTarget===e,n=t.relatedTarget===i,a=!s&&!n;if(o&&n||r&&a)return void e.focus();(r&&s||o&&a)&&i.focus()}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let t=null,e=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;Vi(i)&&(t||(t=i),e=i)}return[t,e]}}function Vi(t){const e=":not(:disabled,[disabled])";if(t.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+e+':not([tabindex^="-"])'))return!0;return!!t.localName.includes("-")&&(!!t.matches(e)&&(t.shadowRoot?.delegatesFocus??!1))}r([ft({type:Boolean})],Hi.prototype,"open",null),r([ft({type:Boolean})],Hi.prototype,"quick",void 0),r([ft({attribute:!1})],Hi.prototype,"returnValue",void 0),r([ft()],Hi.prototype,"type",void 0),r([ft({type:Boolean,attribute:"no-focus-trap"})],Hi.prototype,"noFocusTrap",void 0),r([bt("dialog")],Hi.prototype,"dialog",void 0),r([bt(".scrim")],Hi.prototype,"scrim",void 0),r([bt(".container")],Hi.prototype,"container",void 0),r([bt(".headline")],Hi.prototype,"headline",void 0),r([bt(".content")],Hi.prototype,"content",void 0),r([bt(".actions")],Hi.prototype,"actions",void 0),r([vt()],Hi.prototype,"isAtScrollTop",void 0),r([vt()],Hi.prototype,"isAtScrollBottom",void 0),r([bt(".scroller")],Hi.prototype,"scroller",void 0),r([bt(".top.anchor")],Hi.prototype,"topAnchor",void 0),r([bt(".bottom.anchor")],Hi.prototype,"bottomAnchor",void 0),r([bt(".focus-trap")],Hi.prototype,"firstFocusTrap",void 0),r([vt()],Hi.prototype,"hasHeadline",void 0),r([vt()],Hi.prototype,"hasActions",void 0),r([vt()],Hi.prototype,"hasIcon",void 0);const Gi=d`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;let Wi=class extends Hi{};Wi.styles=[Gi],Wi=r([ut("md-dialog")],Wi);class Xi extends dt{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const t=this.count??-1,e=this.max??-1;return t<0||e<=0?"":`${t} / ${e}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&void 0!==t.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){const t=this.renderLabel(!0),e=this.renderLabel(!1),i=this.renderOutline?.(t),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return G`
      <div class="field ${Jt(r)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${i}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${e} ${i?X:t}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame((()=>{this.refreshErrorAlert=!1})),this.disableTransitions&&requestAnimationFrame((()=>{this.disableTransitions=!1}))}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return X;const i=G`<span>${t}</span>`,r=e?G`<span class="counter">${e}</span>`:X,o=this.error&&this.errorText&&!this.refreshErrorAlert;return G`
      <div class="supporting-text" role=${o?"alert":X}>${i}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)ct(G`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return X;let e;e=t?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const i={hidden:!e,floating:t,resting:!t},r=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return G`
      <span class="label ${Jt(i)}" aria-hidden=${!e}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){if(!this.label)return;t??=this.focused,e??=this.populated;(t||e)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:Qt.STANDARD}),this.labelAnimation?.addEventListener("finish",(()=>{this.isAnimating=!1})))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:i,y:r,height:o}=t.getBoundingClientRect(),{x:s,y:n,height:a}=e.getBoundingClientRect(),l=t.scrollWidth,c=e.scrollWidth,d=c/l,h=`translateX(${s-i}px) translateY(${n-r+Math.round((a-o*d)/2)}px) scale(${d})`,u="translateX(0) translateY(0) scale(1)",p=e.clientWidth,m=c>p?p/d+"px":"";return this.focused||this.populated?[{transform:h,width:m},{transform:u,width:m}]:[{transform:u,width:m},{transform:h,width:m}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}r([ft({type:Boolean})],Xi.prototype,"disabled",void 0),r([ft({type:Boolean})],Xi.prototype,"error",void 0),r([ft({type:Boolean})],Xi.prototype,"focused",void 0),r([ft()],Xi.prototype,"label",void 0),r([ft({type:Boolean,attribute:"no-asterisk"})],Xi.prototype,"noAsterisk",void 0),r([ft({type:Boolean})],Xi.prototype,"populated",void 0),r([ft({type:Boolean})],Xi.prototype,"required",void 0),r([ft({type:Boolean})],Xi.prototype,"resizable",void 0),r([ft({attribute:"supporting-text"})],Xi.prototype,"supportingText",void 0),r([ft({attribute:"error-text"})],Xi.prototype,"errorText",void 0),r([ft({type:Number})],Xi.prototype,"count",void 0),r([ft({type:Number})],Xi.prototype,"max",void 0),r([ft({type:Boolean,attribute:"has-start"})],Xi.prototype,"hasStart",void 0),r([ft({type:Boolean,attribute:"has-end"})],Xi.prototype,"hasEnd",void 0),r([wt({slot:"aria-describedby"})],Xi.prototype,"slottedAriaDescribedBy",void 0),r([vt()],Xi.prototype,"isAnimating",void 0),r([vt()],Xi.prototype,"refreshErrorAlert",void 0),r([vt()],Xi.prototype,"disableTransitions",void 0),r([bt(".label.floating")],Xi.prototype,"floatingLabelEl",void 0),r([bt(".label.resting")],Xi.prototype,"restingLabelEl",void 0),r([bt(".container")],Xi.prototype,"containerEl",void 0);class Yi extends Xi{renderOutline(t){return G`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${t}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}}const Ki=d`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`,Ji=d`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;let Qi=class extends Yi{};Qi.styles=[Ji,Ki],Qi=r([ut("md-outlined-field")],Qi);const Zi=d`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`,{I:tr}=at,er=()=>document.createComment(""),ir=(t,e,i)=>{const r=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=r.insertBefore(er(),o),s=r.insertBefore(er(),o);i=new tr(e,s,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,n=s!==t;if(n){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==o||n){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,o),t=e}}}return i},rr=(t,e,i=t)=>(t._$AI(e,i),t),or={},sr=(t,e=or)=>t._$AH=e,nr=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},ar=Yt(class extends Kt{constructor(t){if(super(t),t.type!==Wt&&t.type!==Vt&&t.type!==Xt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===W||e===X)return e;const i=t.element,r=t.name;if(t.type===Wt){if(e===i[r])return W}else if(t.type===Xt){if(!!e===i.hasAttribute(r))return W}else if(t.type===Vt&&i.getAttribute(r)===e+"")return W;return sr(t),e}}),lr={fromAttribute:t=>t??"",toAttribute:t=>t||null},cr=Symbol("createValidator"),dr=Symbol("getValidityAnchor"),hr=Symbol("privateValidator"),ur=Symbol("privateSyncValidity"),pr=Symbol("privateCustomValidationMessage");function mr(t){var e;class i extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[ur](),this[pe].validity}get validationMessage(){return this[ur](),this[pe].validationMessage}get willValidate(){return this[ur](),this[pe].willValidate}checkValidity(){return this[ur](),this[pe].checkValidity()}reportValidity(){return this[ur](),this[pe].reportValidity()}setCustomValidity(t){this[pr]=t,this[ur]()}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[ur]()}firstUpdated(t){super.firstUpdated(t),this[ur]()}[(e=pr,ur)](){this[hr]||(this[hr]=this[cr]());const{validity:t,validationMessage:e}=this[hr].getValidity(),i=!!this[pr],r=this[pr]||e;this[pe].setValidity({...t,customError:i},r,this[dr]()??void 0)}[cr](){throw new Error("Implement [createValidator]")}[dr](){throw new Error("Implement [getValidityAnchor]")}}return i}const fr=Symbol("getFormValue"),vr=Symbol("getFormState");function gr(t){class e extends t{get form(){return this[pe].form}get labels(){return this[pe].labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t,e,i){if("name"!==t&&"disabled"!==t)super.attributeChangedCallback(t,e,i);else{const i="disabled"===t?null!==e:e;this.requestUpdate(t,i)}}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[pe].setFormValue(this[fr](),this[vr]())}[fr](){throw new Error("Implement [getFormValue]")}[vr](){return this[fr]()}formDisabledCallback(t){this.disabled=t}}return e.formAssociated=!0,r([ft({noAccessor:!0})],e.prototype,"name",null),r([ft({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}const br=Symbol("onReportValidity"),yr=Symbol("privateCleanupFormListeners"),xr=Symbol("privateDoNotReportInvalid"),wr=Symbol("privateIsSelfReportingValidity"),_r=Symbol("privateCallOnReportValidity");function kr(t){var e,i,r;class o extends t{constructor(...t){super(...t),this[e]=new AbortController,this[i]=!1,this[r]=!1,this.addEventListener("invalid",(t=>{!this[xr]&&t.isTrusted&&this.addEventListener("invalid",(()=>{this[_r](t)}),{once:!0})}),{capture:!0})}checkValidity(){this[xr]=!0;const t=super.checkValidity();return this[xr]=!1,t}reportValidity(){this[wr]=!0;const t=super.reportValidity();return t&&this[_r](null),this[wr]=!1,t}[(e=yr,i=xr,r=wr,_r)](t){const e=t?.defaultPrevented;if(e)return;this[br](t);!e&&t?.defaultPrevented&&(this[wr]||function(t,e){if(!t)return!0;let i;for(const e of t.elements)if(e.matches(":invalid")){i=e;break}return i===e}(this[pe].form,this))&&this.focus()}[br](t){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(t){super.formAssociatedCallback&&super.formAssociatedCallback(t),this[yr].abort(),t&&(this[yr]=new AbortController,function(t,e,i,r){const o=function(t){if(!$r.has(t)){const e=new EventTarget;$r.set(t,e);for(const i of["reportValidity","requestSubmit"]){const r=t[i];t[i]=function(){e.dispatchEvent(new Event("before"));const t=Reflect.apply(r,this,arguments);return e.dispatchEvent(new Event("after")),t}}}return $r.get(t)}(e);let s,n=!1,a=!1;o.addEventListener("before",(()=>{a=!0,s=new AbortController,n=!1,t.addEventListener("invalid",(()=>{n=!0}),{signal:s.signal})}),{signal:r}),o.addEventListener("after",(()=>{a=!1,s?.abort(),n||i()}),{signal:r}),e.addEventListener("submit",(()=>{a||i()}),{signal:r})}(this,t,(()=>{this[_r](null)}),this[yr].signal))}}return o}const $r=new WeakMap;class zr{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;const{validity:e,validationMessage:i}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:i,validity:{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing}},this.currentValidity}}class Sr extends zr{computeValidity({state:t,renderedControl:e}){let i=e;Ar(t)&&!i?(i=this.inputControl||document.createElement("input"),this.inputControl=i):i||(i=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=i);const r=Ar(t)?i:null;if(r&&(r.type=t.type),i.value!==t.value&&(i.value=t.value),i.required=t.required,r){const e=t;e.pattern?r.pattern=e.pattern:r.removeAttribute("pattern"),e.min?r.min=e.min:r.removeAttribute("min"),e.max?r.max=e.max:r.removeAttribute("max"),e.step?r.step=e.step:r.removeAttribute("step")}return(t.minLength??-1)>-1?i.setAttribute("minlength",String(t.minLength)):i.removeAttribute("minlength"),(t.maxLength??-1)>-1?i.setAttribute("maxlength",String(t.maxLength)):i.removeAttribute("maxlength"),{validity:i.validity,validationMessage:i.validationMessage}}equals({state:t},{state:e}){const i=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return Ar(t)&&Ar(e)?i&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step:i}copy({state:t}){return{state:Ar(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:e,pattern:i,min:r,max:o,step:s}=t;return{...this.copySharedState(t),type:e,pattern:i,min:r,max:o,step:s}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:i,maxLength:r}){return{value:t,required:e,minLength:i,maxLength:r}}}function Ar(t){return"textarea"!==t.type}const Cr=de(kr(mr(gr(fe(dt)))));class Tr extends Cr{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,i){this.getInputOrTextarea().setSelectionRange(t,e,i)}showPicker(){const t=this.getInput();t&&t.showPicker()}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return G`
      <span class="text-field ${Jt(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return Ti`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${"textarea"===this.type}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return G`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return G`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||X,i=this.autocomplete,r=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if("textarea"===this.type)return G`
        <textarea
          class="input"
          style=${Pe(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||X}
          name=${this.name||X}
          ?disabled=${this.disabled}
          maxlength=${r?this.maxLength:X}
          minlength=${o?this.minLength:X}
          placeholder=${this.placeholder||X}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${ar(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const s=this.renderPrefix(),n=this.renderSuffix(),a=this.inputMode;return G`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${Pe(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||X}
          name=${this.name||X}
          ?disabled=${this.disabled}
          inputmode=${a||X}
          max=${this.max||X}
          maxlength=${r?this.maxLength:X}
          min=${this.min||X}
          minlength=${o?this.minLength:X}
          pattern=${this.pattern||X}
          placeholder=${this.placeholder||X}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||X}
          type=${this.type}
          .value=${ar(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${n}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){if(!t)return X;return G`<span class="${Jt({suffix:e,prefix:!e})}">${t}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){Fi(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[fr](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[cr](){return new Sr((()=>({state:this,renderedControl:this.inputOrTextarea})))}[dr](){return this.inputOrTextarea}[br](t){t?.preventDefault();const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}}Tr.shadowRootOptions={...dt.shadowRootOptions,delegatesFocus:!0},r([ft({type:Boolean,reflect:!0})],Tr.prototype,"error",void 0),r([ft({attribute:"error-text"})],Tr.prototype,"errorText",void 0),r([ft()],Tr.prototype,"label",void 0),r([ft({type:Boolean,attribute:"no-asterisk"})],Tr.prototype,"noAsterisk",void 0),r([ft({type:Boolean,reflect:!0})],Tr.prototype,"required",void 0),r([ft()],Tr.prototype,"value",void 0),r([ft({attribute:"prefix-text"})],Tr.prototype,"prefixText",void 0),r([ft({attribute:"suffix-text"})],Tr.prototype,"suffixText",void 0),r([ft({type:Boolean,attribute:"has-leading-icon"})],Tr.prototype,"hasLeadingIcon",void 0),r([ft({type:Boolean,attribute:"has-trailing-icon"})],Tr.prototype,"hasTrailingIcon",void 0),r([ft({attribute:"supporting-text"})],Tr.prototype,"supportingText",void 0),r([ft({attribute:"text-direction"})],Tr.prototype,"textDirection",void 0),r([ft({type:Number})],Tr.prototype,"rows",void 0),r([ft({type:Number})],Tr.prototype,"cols",void 0),r([ft({reflect:!0})],Tr.prototype,"inputMode",void 0),r([ft()],Tr.prototype,"max",void 0),r([ft({type:Number})],Tr.prototype,"maxLength",void 0),r([ft()],Tr.prototype,"min",void 0),r([ft({type:Number})],Tr.prototype,"minLength",void 0),r([ft({type:Boolean,attribute:"no-spinner"})],Tr.prototype,"noSpinner",void 0),r([ft()],Tr.prototype,"pattern",void 0),r([ft({reflect:!0,converter:lr})],Tr.prototype,"placeholder",void 0),r([ft({type:Boolean,reflect:!0})],Tr.prototype,"readOnly",void 0),r([ft({type:Boolean,reflect:!0})],Tr.prototype,"multiple",void 0),r([ft()],Tr.prototype,"step",void 0),r([ft({reflect:!0})],Tr.prototype,"type",void 0),r([ft({reflect:!0})],Tr.prototype,"autocomplete",void 0),r([vt()],Tr.prototype,"dirty",void 0),r([vt()],Tr.prototype,"focused",void 0),r([vt()],Tr.prototype,"nativeError",void 0),r([vt()],Tr.prototype,"nativeErrorText",void 0),r([bt(".input")],Tr.prototype,"inputOrTextarea",void 0),r([bt(".field")],Tr.prototype,"field",void 0),r([wt({slot:"leading-icon"})],Tr.prototype,"leadingIcons",void 0),r([wt({slot:"trailing-icon"})],Tr.prototype,"trailingIcons",void 0);class Er extends Tr{constructor(){super(...arguments),this.fieldTag=Ai`md-outlined-field`}}const Ir=d`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;let Pr=class extends Er{constructor(){super(...arguments),this.fieldTag=Ai`md-outlined-field`}};Pr.styles=[Ir,Zi],Pr=r([ut("md-outlined-text-field")],Pr);let Or=class extends Qi{constructor(){super(...arguments),this.populated=!0}#$t;get evaluator(){return this.#$t}set evaluator(t){this.#$t=t}firstUpdated(){this.addEventListener("focusin",(()=>this.focused=!0)),this.addEventListener("focusout",(()=>this.focused=!1))}reset(){this.error=!1}reportValidity(){const t=this.checkValidity();return this.error=!t,t}checkValidity(){return!!this.evaluator()}};r([ft({type:Boolean})],Or.prototype,"populated",void 0),r([ft({type:Object})],Or.prototype,"evaluator",null),Or=r([ut("titanium-input-validator")],Or);let Mr=class extends dt{#zt;get label(){return this.#zt}set label(t){this.#zt=t}#St="No items";get noItemsText(){return this.#St}set noItemsText(t){this.#St=t}#At=!1;get required(){return this.#At}set required(t){this.#At=t}#Ct;get hasItems(){return this.#Ct}set hasItems(t){this.#Ct=t}#Tt;get supportingText(){return this.#Tt}set supportingText(t){this.#Tt=t}#Et;get error(){return this.#Et}set error(t){this.#Et=t}#It;get errorText(){return this.#It}set errorText(t){this.#It=t}#Pt;get resizable(){return this.#Pt}set resizable(t){this.#Pt=t}#Ot;get disabled(){return this.#Ot}set disabled(t){this.#Ot=t}#Mt;get validator(){return this.#Mt}set validator(t){this.#Mt=t}updated(t){(t.get("hasItems")&&t.has("hasItems")||this.hasItems&&t.has("hasItems"))&&this.reportValidity()}checkValidity(){return this.validator?.checkValidity()}reportValidity(){return this.validator?.reportValidity()}reset(){this.validator?.reset()}static{this.styles=[d`
      :host {
        display: block;
        width: 100%;
      }

      titanium-input-validator {
        display: block;
        width: 100%;
      }

      slot-container {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 12px;
        align-items: center;
      }

      span {
        font-size: 13px;
      }
    `]}render(){return G`
      <titanium-input-validator
        ?disabled=${this.disabled}
        .evaluator=${()=>!this.required||!!this.hasItems}
        ?required=${this.required}
        .label=${this.label}
        .resizable=${this.resizable}
        .supportingText=${this.supportingText}
        .errorText=${this.errorText}
        ?error=${this.error}
      >
        <slot-container>
          <slot></slot>
          ${this.hasItems?"":G` <span>${this.noItemsText}</span>`}
        </slot-container>
      </titanium-input-validator>
    `}};r([ft({type:String})],Mr.prototype,"label",null),r([ft({type:String})],Mr.prototype,"noItemsText",null),r([ft({type:Boolean})],Mr.prototype,"required",null),r([ft({type:Boolean})],Mr.prototype,"hasItems",null),r([ft({type:String})],Mr.prototype,"supportingText",null),r([ft({type:Boolean})],Mr.prototype,"error",null),r([ft({type:String})],Mr.prototype,"errorText",null),r([ft({type:Boolean})],Mr.prototype,"resizable",null),r([ft({type:Boolean,reflect:!0})],Mr.prototype,"disabled",null),r([bt("titanium-input-validator")],Mr.prototype,"validator",null),Mr=r([ut("titanium-chip-multi-select")],Mr);const Rr="undefined"!=typeof window&&void 0!==window.document,Br=Rr?window:{},Nr=!!Rr&&"ontouchstart"in Br.document.documentElement,jr=!!Rr&&"PointerEvent"in Br,Lr="cropper",Fr=`${Lr}-canvas`,Ur=`${Lr}-crosshair`,Dr=`${Lr}-grid`,qr=`${Lr}-handle`,Hr=`${Lr}-image`,Vr=`${Lr}-selection`,Gr=`${Lr}-shade`,Wr=`${Lr}-viewer`,Xr="select",Yr="move",Kr="scale",Jr="rotate",Qr="transform",Zr="none",to="n-resize",eo="e-resize",io="s-resize",ro="w-resize",oo="ne-resize",so="nw-resize",no="se-resize",ao="sw-resize",lo=jr?"pointerdown":Nr?"touchstart":"mousedown",co=jr?"pointermove":Nr?"touchmove":"mousemove",ho=jr?"pointerup pointercancel":Nr?"touchend touchcancel":"mouseup",uo="error",po="keydown",mo="load",fo="wheel",vo="action",go="actionend",bo="actionstart",yo="change",xo="transform";const wo=Number.isNaN||Br.isNaN;function _o(t){return"number"==typeof t&&!wo(t)}function ko(t){return _o(t)&&t>0&&t<1/0}function $o(t){return"object"==typeof t&&null!==t}const{hasOwnProperty:zo}=Object.prototype;function So(t){if(!$o(t))return!1;try{const{constructor:e}=t,{prototype:i}=e;return e&&i&&zo.call(i,"isPrototypeOf")}catch(t){return!1}}function Ao(t){return"function"==typeof t}function Co(t){return"object"==typeof t&&null!==t&&1===t.nodeType}const To=/([a-z\d])([A-Z])/g;function Eo(t){return String(t).replace(To,"$1-$2").toLowerCase()}const Io=/-[A-z\d]/g;function Po(t){return t.replace(Io,(t=>t.slice(1).toUpperCase()))}const Oo=/\s\s*/;function Mo(t,e,i,r){e.trim().split(Oo).forEach((e=>{t.removeEventListener(e,i,r)}))}function Ro(t,e,i,r){e.trim().split(Oo).forEach((e=>{t.addEventListener(e,i,r)}))}function Bo(t,e,i,r){Ro(t,e,i,Object.assign(Object.assign({},r),{once:!0}))}const No={bubbles:!0,cancelable:!0,composed:!0};const jo=Promise.resolve();function Lo(t){const{documentElement:e}=t.ownerDocument,i=t.getBoundingClientRect();return{left:i.left+(Br.pageXOffset-e.clientLeft),top:i.top+(Br.pageYOffset-e.clientTop)}}const Fo=/deg|g?rad|turn$/i;function Uo(t){const e=parseFloat(t)||0;if(0!==e){const[i="rad"]=String(t).match(Fo)||[];switch(i.toLowerCase()){case"deg":return e/360*(2*Math.PI);case"grad":return e/400*(2*Math.PI);case"turn":return e*(2*Math.PI)}}return e}const Do="contain";function qo(t,e=Do){const{aspectRatio:i}=t;let{width:r,height:o}=t;const s=ko(r),n=ko(o);if(s&&n){const t=o*i;e===Do&&t>r||"cover"===e&&t<r?o=r/i:r=o*i}else s?o=r/i:n&&(r=o*i);return{width:r,height:o}}function Ho(t,...e){if(0===e.length)return t;const[i,r,o,s,n,a]=t,[l,c,d,h,u,p]=e[0];return Ho(t=[i*l+o*c,r*l+s*c,i*d+o*h,r*d+s*h,i*u+o*p+n,r*u+s*p+a],...e.slice(1))}const Vo=/left|top|width|height/i,Go="open",Wo=new WeakMap,Xo=new WeakMap,Yo=new Map,Ko=Br.document&&Array.isArray(Br.document.adoptedStyleSheets)&&"replaceSync"in Br.CSSStyleSheet.prototype;class Jo extends HTMLElement{get $sharedStyle(){return(this.themeColor?`:host{--theme-color: ${this.themeColor};}`:"")+":host([hidden]){display:none!important}"}constructor(){var t,e;super(),this.shadowRootMode=Go,this.slottable=!0;const i=null===(e=null===(t=Object.getPrototypeOf(this))||void 0===t?void 0:t.constructor)||void 0===e?void 0:e.$name;i&&Yo.set(i,this.tagName.toLowerCase())}static get observedAttributes(){return["shadow-root-mode","slottable","theme-color"]}attributeChangedCallback(t,e,i){if(Object.is(i,e))return;const r=Po(t);let o=i;switch(typeof this[r]){case"boolean":o=null!==i&&"false"!==i;break;case"number":o=Number(i)}switch(this[r]=o,t){case"theme-color":{const t=Xo.get(this),e=this.$sharedStyle;t&&e&&(Ko?t.replaceSync(e):t.textContent=e);break}}}$propertyChangedCallback(t,e,i){if(!Object.is(i,e))switch(t=Eo(t),typeof i){case"boolean":!0===i?this.hasAttribute(t)||this.setAttribute(t,""):this.removeAttribute(t);break;case"number":i=wo(i)?"":String(i);default:i?this.getAttribute(t)!==i&&this.setAttribute(t,i):this.removeAttribute(t)}}connectedCallback(){Object.getPrototypeOf(this).constructor.observedAttributes.forEach((t=>{const e=Po(t);let i=this[e];(function(t){return void 0===t})(i)||this.$propertyChangedCallback(e,void 0,i),Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>i,set(t){const r=i;i=t,this.$propertyChangedCallback(e,r,t)}})}));const t=this.attachShadow({mode:this.shadowRootMode||Go});if(this.shadowRoot||Wo.set(this,t),Xo.set(this,this.$addStyles(this.$sharedStyle)),this.$style&&this.$addStyles(this.$style),this.$template){const e=document.createElement("template");e.innerHTML=this.$template,t.appendChild(e.content)}if(this.slottable){const e=document.createElement("slot");t.appendChild(e)}}disconnectedCallback(){Xo.has(this)&&Xo.delete(this),Wo.has(this)&&Wo.delete(this)}$getTagNameOf(t){var e;return null!==(e=Yo.get(t))&&void 0!==e?e:t}$setStyles(t){return Object.keys(t).forEach((e=>{let i=t[e];_o(i)&&(i=0!==i&&Vo.test(e)?`${i}px`:String(i)),this.style[e]=i})),this}$getShadowRoot(){return this.shadowRoot||Wo.get(this)}$addStyles(t){let e;const i=this.$getShadowRoot();return Ko?(e=new CSSStyleSheet,e.replaceSync(t),i.adoptedStyleSheets=i.adoptedStyleSheets.concat(e)):(e=document.createElement("style"),e.textContent=t,i.appendChild(e)),e}$emit(t,e,i){return function(t,e,i,r){return t.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign(Object.assign({},No),{detail:i}),r)))}(this,t,e,i)}$nextTick(t){return function(t,e){return e?jo.then(t?e.bind(t):e):jo}(this,t)}static $define(t,e){$o(t)&&(e=t,t=""),t||(t=this.$name||this.name),t=Eo(t),Rr&&Br.customElements&&!Br.customElements.get(t)&&customElements.define(t,this,e)}}Jo.$version="2.0.0";class Qo extends Jo{constructor(){super(...arguments),this.$onPointerDown=null,this.$onPointerMove=null,this.$onPointerUp=null,this.$onWheel=null,this.$wheeling=!1,this.$pointers=new Map,this.$style=':host{display:block;min-height:100px;min-width:200px;overflow:hidden;position:relative;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([background]){background-color:#fff;background-image:repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc),repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc);background-image:repeating-conic-gradient(#ccc 0 25%,#fff 0 50%);background-position:0 0,.5rem .5rem;background-size:1rem 1rem}:host([disabled]){pointer-events:none}:host([disabled]):after{bottom:0;content:"";cursor:not-allowed;display:block;left:0;pointer-events:none;position:absolute;right:0;top:0}',this.$action=Zr,this.background=!1,this.disabled=!1,this.scaleStep=.1,this.themeColor="#39f"}static get observedAttributes(){return super.observedAttributes.concat(["background","disabled","scale-step"])}connectedCallback(){super.connectedCallback(),this.disabled||this.$bind()}disconnectedCallback(){this.disabled||this.$unbind(),super.disconnectedCallback()}$propertyChangedCallback(t,e,i){if(!Object.is(i,e)&&(super.$propertyChangedCallback(t,e,i),"disabled"===t))i?this.$unbind():this.$bind()}$bind(){this.$onPointerDown||(this.$onPointerDown=this.$handlePointerDown.bind(this),Ro(this,lo,this.$onPointerDown)),this.$onPointerMove||(this.$onPointerMove=this.$handlePointerMove.bind(this),Ro(this.ownerDocument,co,this.$onPointerMove)),this.$onPointerUp||(this.$onPointerUp=this.$handlePointerUp.bind(this),Ro(this.ownerDocument,ho,this.$onPointerUp)),this.$onWheel||(this.$onWheel=this.$handleWheel.bind(this),Ro(this,fo,this.$onWheel,{passive:!1,capture:!0}))}$unbind(){this.$onPointerDown&&(Mo(this,lo,this.$onPointerDown),this.$onPointerDown=null),this.$onPointerMove&&(Mo(this.ownerDocument,co,this.$onPointerMove),this.$onPointerMove=null),this.$onPointerUp&&(Mo(this.ownerDocument,ho,this.$onPointerUp),this.$onPointerUp=null),this.$onWheel&&(Mo(this,fo,this.$onWheel,{capture:!0}),this.$onWheel=null)}$handlePointerDown(t){const{buttons:e,button:i,type:r}=t;if(this.disabled||("pointerdown"===r&&"mouse"===t.pointerType||"mousedown"===r)&&(_o(e)&&1!==e||_o(i)&&0!==i||t.ctrlKey))return;const{$pointers:o}=this;let s="";if(t.changedTouches)Array.from(t.changedTouches).forEach((({identifier:t,pageX:e,pageY:i})=>{o.set(t,{startX:e,startY:i,endX:e,endY:i})}));else{const{pointerId:e=0,pageX:i,pageY:r}=t;o.set(e,{startX:i,startY:r,endX:i,endY:r})}o.size>1?s=Qr:Co(t.target)&&(s=t.target.action||t.target.getAttribute("action")||""),!1!==this.$emit(bo,{action:s,relatedEvent:t})&&(t.preventDefault(),this.$action=s,this.style.willChange="transform")}$handlePointerMove(t){const{$action:e,$pointers:i}=this;if(this.disabled||e===Zr||0===i.size)return;if(!1===this.$emit("actionmove",{action:e,relatedEvent:t}))return;if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach((({identifier:t,pageX:e,pageY:r})=>{const o=i.get(t);o&&Object.assign(o,{endX:e,endY:r})}));else{const{pointerId:e=0,pageX:r,pageY:o}=t,s=i.get(e);s&&Object.assign(s,{endX:r,endY:o})}const r={action:e,relatedEvent:t};if(e===Qr){const e=new Map(i);let o=0,s=0,n=0,a=0,l=t.pageX,c=t.pageY;i.forEach(((t,i)=>{e.delete(i),e.forEach((e=>{let i=e.startX-t.startX,r=e.startY-t.startY,d=e.endX-t.endX,h=e.endY-t.endY,u=0,p=0,m=0,f=0;if(0===i?r<0?m=2*Math.PI:r>0&&(m=Math.PI):i>0?m=Math.PI/2+Math.atan(r/i):i<0&&(m=1.5*Math.PI+Math.atan(r/i)),0===d?h<0?f=2*Math.PI:h>0&&(f=Math.PI):d>0?f=Math.PI/2+Math.atan(h/d):d<0&&(f=1.5*Math.PI+Math.atan(h/d)),f>0||m>0){const i=f-m,r=Math.abs(i);r>o&&(o=r,n=i,l=(t.startX+e.startX)/2,c=(t.startY+e.startY)/2)}if(i=Math.abs(i),r=Math.abs(r),d=Math.abs(d),h=Math.abs(h),i>0&&r>0?u=Math.sqrt(i*i+r*r):i>0?u=i:r>0&&(u=r),d>0&&h>0?p=Math.sqrt(d*d+h*h):d>0?p=d:h>0&&(p=h),u>0&&p>0){const i=(p-u)/u,r=Math.abs(i);r>s&&(s=r,a=i,l=(t.startX+e.startX)/2,c=(t.startY+e.startY)/2)}}))}));const d=o>0,h=s>0;d&&h?(r.rotate=n,r.scale=a,r.centerX=l,r.centerY=c):d?(r.action=Jr,r.rotate=n,r.centerX=l,r.centerY=c):h?(r.action=Kr,r.scale=a,r.centerX=l,r.centerY=c):r.action=Zr}else{const[t]=Array.from(i.values());Object.assign(r,t)}i.forEach((t=>{t.startX=t.endX,t.startY=t.endY})),r.action!==Zr&&this.$emit(vo,r,{cancelable:!1})}$handlePointerUp(t){const{$action:e,$pointers:i}=this;if(!this.disabled&&e!==Zr&&!1!==this.$emit(go,{action:e,relatedEvent:t})){if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach((({identifier:t})=>{i.delete(t)}));else{const{pointerId:e=0}=t;i.delete(e)}0===i.size&&(this.style.willChange="",this.$action=Zr)}}$handleWheel(t){if(this.disabled)return;if(t.preventDefault(),this.$wheeling)return;this.$wheeling=!0,setTimeout((()=>{this.$wheeling=!1}),50);const e=(t.deltaY>0?-1:1)*this.scaleStep;this.$emit(vo,{action:Kr,scale:e,relatedEvent:t},{cancelable:!1})}$setAction(t){return"string"==typeof t&&(this.$action=t),this}$toCanvas(t){return new Promise(((e,i)=>{if(!this.isConnected)return void i(new Error("The current element is not connected to the DOM."));const r=document.createElement("canvas");let o=this.offsetWidth,s=this.offsetHeight,n=1;So(t)&&(ko(t.width)||ko(t.height))&&(({width:o,height:s}=qo({aspectRatio:o/s,width:t.width,height:t.height})),n=o/this.offsetWidth),r.width=o,r.height=s;const a=this.querySelector(this.$getTagNameOf(Hr));a?a.$ready().then((i=>{const l=r.getContext("2d");if(l){const[e,c,d,h,u,p]=a.$getTransform();let m=u,f=p,v=i.naturalWidth,g=i.naturalHeight;1!==n&&(m*=n,f*=n,v*=n,g*=n);const b=v/2,y=g/2;l.fillStyle="transparent",l.fillRect(0,0,o,s),So(t)&&Ao(t.beforeDraw)&&t.beforeDraw.call(this,l,r),l.save(),l.translate(b,y),l.transform(e,c,d,h,m,f),l.translate(-b,-y),l.drawImage(i,0,0,v,g),l.restore()}e(r)})).catch(i):e(r)}))}}Qo.$name=Fr,Qo.$version="2.0.0";const Zo=new WeakMap,ts=["alt","crossorigin","decoding","importance","loading","referrerpolicy","sizes","src","srcset"];class es extends Jo{constructor(){super(...arguments),this.$matrix=[1,0,0,1,0,0],this.$onLoad=null,this.$onCanvasAction=null,this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$actionStartTarget=null,this.$style=":host{display:inline-block}img{display:block;height:100%;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}",this.$image=new Image,this.initialCenterSize="contain",this.rotatable=!1,this.scalable=!1,this.skewable=!1,this.slottable=!1,this.translatable=!1}set $canvas(t){Zo.set(this,t)}get $canvas(){return Zo.get(this)}static get observedAttributes(){return super.observedAttributes.concat(ts,["initial-center-size","rotatable","scalable","skewable","translatable"])}attributeChangedCallback(t,e,i){Object.is(i,e)||(super.attributeChangedCallback(t,e,i),ts.includes(t)&&this.$image.setAttribute(t,i))}$propertyChangedCallback(t,e,i){if(!Object.is(i,e)&&(super.$propertyChangedCallback(t,e,i),"initialCenterSize"===t))this.$nextTick((()=>{this.$center(i)}))}connectedCallback(){super.connectedCallback();const{$image:t}=this,e=this.closest(this.$getTagNameOf(Fr));e&&(this.$canvas=e,this.$setStyles({display:"block",position:"absolute"}),this.$onCanvasActionStart=t=>{var e,i;this.$actionStartTarget=null===(i=null===(e=t.detail)||void 0===e?void 0:e.relatedEvent)||void 0===i?void 0:i.target},this.$onCanvasActionEnd=()=>{this.$actionStartTarget=null},this.$onCanvasAction=this.$handleAction.bind(this),Ro(e,bo,this.$onCanvasActionStart),Ro(e,go,this.$onCanvasActionEnd),Ro(e,vo,this.$onCanvasAction)),this.$onLoad=this.$handleLoad.bind(this),Ro(t,mo,this.$onLoad),this.$getShadowRoot().appendChild(t)}disconnectedCallback(){const{$image:t,$canvas:e}=this;e&&(this.$onCanvasActionStart&&(Mo(e,bo,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Mo(e,go,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(Mo(e,vo,this.$onCanvasAction),this.$onCanvasAction=null)),t&&this.$onLoad&&(Mo(t,mo,this.$onLoad),this.$onLoad=null),this.$getShadowRoot().removeChild(t),super.disconnectedCallback()}$handleLoad(){const{$image:t}=this;this.$setStyles({width:t.naturalWidth,height:t.naturalHeight}),this.$canvas&&this.$center(this.initialCenterSize)}$handleAction(t){if(this.hidden||!(this.rotatable||this.scalable||this.translatable))return;const{$canvas:e}=this,{detail:i}=t;if(i){const{relatedEvent:t}=i;let{action:r}=i;switch(r!==Qr||this.rotatable&&this.scalable||(r=this.rotatable?Jr:this.scalable?Kr:Zr),r){case Yr:if(this.translatable){let r=null;t&&(r=t.target.closest(this.$getTagNameOf(Vr))),r||(r=e.querySelector(this.$getTagNameOf(Vr))),r&&r.multiple&&!r.active&&(r=e.querySelector(`${this.$getTagNameOf(Vr)}[active]`)),r&&!r.hidden&&r.movable&&!r.dynamic&&this.$actionStartTarget&&r.contains(this.$actionStartTarget)||this.$move(i.endX-i.startX,i.endY-i.startY)}break;case Jr:if(this.rotatable)if(t){const{x:e,y:r}=this.getBoundingClientRect();this.$rotate(i.rotate,t.clientX-e,t.clientY-r)}else this.$rotate(i.rotate);break;case Kr:if(this.scalable)if(t){const e=t.target.closest(this.$getTagNameOf(Vr));if(!e||!e.zoomable||e.zoomable&&e.dynamic){const{x:e,y:r}=this.getBoundingClientRect();this.$zoom(i.scale,t.clientX-e,t.clientY-r)}}else this.$zoom(i.scale);break;case Qr:if(this.rotatable&&this.scalable){const{rotate:e}=i;let{scale:r}=i;r<0?r=1/(1-r):r+=1;const o=Math.cos(e),s=Math.sin(e),[n,a,l,c]=[o*r,s*r,-s*r,o*r];if(t){const e=this.getBoundingClientRect(),i=t.clientX-e.x,r=t.clientY-e.y,[o,s,d,h]=this.$matrix,u=i-e.width/2,p=r-e.height/2,m=(u*h-d*p)/(o*h-d*s),f=(p*o-s*u)/(o*h-d*s);this.$transform(n,a,l,c,m*(1-n)+f*l,f*(1-c)+m*a)}else this.$transform(n,a,l,c,0,0)}}}}$ready(t){const{$image:e}=this,i=new Promise(((t,i)=>{const r=new Error("Failed to load the image source");if(e.complete)e.naturalWidth>0&&e.naturalHeight>0?t(e):i(r);else{const o=()=>{Mo(e,uo,s),t(e)},s=()=>{Mo(e,mo,o),i(r)};Bo(e,mo,o),Bo(e,uo,s)}}));return Ao(t)&&i.then((e=>(t(e),e))),i}$center(t){const{parentElement:e}=this;if(!e)return this;const i=e.getBoundingClientRect(),r=i.width,o=i.height,{x:s,y:n,width:a,height:l}=this.getBoundingClientRect(),c=s+a/2,d=n+l/2,h=i.x+r/2,u=i.y+o/2;if(this.$move(h-c,u-d),t&&(a!==r||l!==o)){const e=r/a,i=o/l;switch(t){case"cover":this.$scale(Math.max(e,i));break;case"contain":this.$scale(Math.min(e,i))}}return this}$move(t,e=t){if(this.translatable&&_o(t)&&_o(e)){const[i,r,o,s]=this.$matrix,n=(t*s-o*e)/(i*s-o*r),a=(e*i-r*t)/(i*s-o*r);this.$translate(n,a)}return this}$moveTo(t,e=t){if(this.translatable&&_o(t)&&_o(e)){const[i,r,o,s]=this.$matrix,n=(t*s-o*e)/(i*s-o*r),a=(e*i-r*t)/(i*s-o*r);this.$setTransform(i,r,o,s,n,a)}return this}$rotate(t,e,i){if(this.rotatable){const r=Uo(t),o=Math.cos(r),s=Math.sin(r),[n,a,l,c]=[o,s,-s,o];if(_o(e)&&_o(i)){const[t,r,o,s]=this.$matrix,{width:d,height:h}=this.getBoundingClientRect(),u=e-d/2,p=i-h/2,m=(u*s-o*p)/(t*s-o*r),f=(p*t-r*u)/(t*s-o*r);this.$transform(n,a,l,c,m*(1-n)-f*l,f*(1-c)-m*a)}else this.$transform(n,a,l,c,0,0)}return this}$zoom(t,e,i){if(!this.scalable||0===t)return this;if(t<0?t=1/(1-t):t+=1,_o(e)&&_o(i)){const[r,o,s,n]=this.$matrix,{width:a,height:l}=this.getBoundingClientRect(),c=e-a/2,d=i-l/2,h=(c*n-s*d)/(r*n-s*o),u=(d*r-o*c)/(r*n-s*o);this.$transform(t,0,0,t,h*(1-t),u*(1-t))}else this.$scale(t);return this}$scale(t,e=t){return this.scalable&&this.$transform(t,0,0,e,0,0),this}$skew(t,e=0){if(this.skewable){const i=Uo(t),r=Uo(e);this.$transform(1,Math.tan(r),Math.tan(i),1,0,0)}return this}$translate(t,e=t){return this.translatable&&_o(t)&&_o(e)&&this.$transform(1,0,0,1,t,e),this}$transform(t,e,i,r,o,s){return _o(t)&&_o(e)&&_o(i)&&_o(r)&&_o(o)&&_o(s)?this.$setTransform(Ho(this.$matrix,[t,e,i,r,o,s])):this}$setTransform(t,e,i,r,o,s){if((this.rotatable||this.scalable||this.skewable||this.translatable)&&(Array.isArray(t)&&([t,e,i,r,o,s]=t),_o(t)&&_o(e)&&_o(i)&&_o(r)&&_o(o)&&_o(s))){const n=[...this.$matrix],a=[t,e,i,r,o,s];if(!1===this.$emit(xo,{matrix:a,oldMatrix:n}))return this;this.$matrix=a,this.style.transform=`matrix(${a.join(", ")})`}return this}$getTransform(){return this.$matrix.slice()}$resetTransform(){return this.$setTransform([1,0,0,1,0,0])}}es.$name=Hr,es.$version="2.0.0";const is=new WeakMap;class rs extends Jo{constructor(){super(...arguments),this.$onCanvasChange=null,this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$style=":host{display:block;height:0;left:0;outline:var(--theme-color) solid 1px;position:relative;top:0;width:0}:host([transparent]){outline-color:transparent}",this.x=0,this.y=0,this.width=0,this.height=0,this.slottable=!1,this.themeColor="rgba(0, 0, 0, 0.65)"}set $canvas(t){is.set(this,t)}get $canvas(){return is.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["height","width","x","y"])}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Fr));if(t){this.$canvas=t,this.style.position="absolute";const e=t.querySelector(this.$getTagNameOf(Vr));e&&(this.$onCanvasActionStart=t=>{e.hidden&&t.detail.action===Xr&&(this.hidden=!1)},this.$onCanvasActionEnd=t=>{e.hidden&&t.detail.action===Xr&&(this.hidden=!0)},this.$onCanvasChange=t=>{const{x:i,y:r,width:o,height:s}=t.detail;this.$change(i,r,o,s),(e.hidden||0===i&&0===r&&0===o&&0===s)&&(this.hidden=!0)},Ro(t,bo,this.$onCanvasActionStart),Ro(t,go,this.$onCanvasActionEnd),Ro(t,yo,this.$onCanvasChange))}this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onCanvasActionStart&&(Mo(t,bo,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Mo(t,go,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasChange&&(Mo(t,yo,this.$onCanvasChange),this.$onCanvasChange=null)),super.disconnectedCallback()}$change(t,e,i=this.width,r=this.height){return _o(t)&&_o(e)&&_o(i)&&_o(r)&&(t!==this.x||e!==this.y||i!==this.width||r!==this.height)?(this.hidden&&(this.hidden=!1),this.x=t,this.y=e,this.width=i,this.height=r,this.$render()):this}$reset(){return this.$change(0,0,0,0)}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height,outlineWidth:Br.innerWidth})}}rs.$name=Gr,rs.$version="2.0.0";class os extends Jo{constructor(){super(...arguments),this.$onCanvasCropEnd=null,this.$onCanvasCropStart=null,this.$style=':host{background-color:var(--theme-color);display:block}:host([action=move]),:host([action=select]){height:100%;left:0;position:absolute;top:0;width:100%}:host([action=move]){cursor:move}:host([action=select]){cursor:crosshair}:host([action$=-resize]){background-color:transparent;height:15px;position:absolute;width:15px}:host([action$=-resize]):after{background-color:var(--theme-color);content:"";display:block;height:5px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:5px}:host([action=n-resize]),:host([action=s-resize]){cursor:ns-resize;left:50%;transform:translateX(-50%);width:100%}:host([action=n-resize]){top:-8px}:host([action=s-resize]){bottom:-8px}:host([action=e-resize]),:host([action=w-resize]){cursor:ew-resize;height:100%;top:50%;transform:translateY(-50%)}:host([action=e-resize]){right:-8px}:host([action=w-resize]){left:-8px}:host([action=ne-resize]){cursor:nesw-resize;right:-8px;top:-8px}:host([action=nw-resize]){cursor:nwse-resize;left:-8px;top:-8px}:host([action=se-resize]){bottom:-8px;cursor:nwse-resize;right:-8px}:host([action=se-resize]):after{height:15px;width:15px}@media (pointer:coarse){:host([action=se-resize]):after{height:10px;width:10px}}@media (pointer:fine){:host([action=se-resize]):after{height:5px;width:5px}}:host([action=sw-resize]){bottom:-8px;cursor:nesw-resize;left:-8px}:host([plain]){background-color:transparent}',this.action=Zr,this.plain=!1,this.slottable=!1,this.themeColor="rgba(51, 153, 255, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["action","plain"])}}os.$name=qr,os.$version="2.0.0";const ss=new WeakMap;class ns extends Jo{constructor(){super(...arguments),this.$onCanvasAction=null,this.$onCanvasActionStart=null,this.$onCanvasActionEnd=null,this.$onDocumentKeyDown=null,this.$action="",this.$actionStartTarget=null,this.$changing=!1,this.$style=':host{display:block;left:0;position:relative;right:0}:host([outlined]){outline:1px solid var(--theme-color)}:host([multiple]){outline:1px dashed hsla(0,0%,100%,.5)}:host([multiple]):after{bottom:0;content:"";cursor:pointer;display:block;left:0;position:absolute;right:0;top:0}:host([multiple][active]){outline-color:var(--theme-color);z-index:1}:host([multiple])>*{visibility:hidden}:host([multiple][active])>*{visibility:visible}:host([multiple][active]):after{display:none}',this.$initialSelection={x:0,y:0,width:0,height:0},this.x=0,this.y=0,this.width=0,this.height=0,this.aspectRatio=NaN,this.initialAspectRatio=NaN,this.initialCoverage=NaN,this.active=!1,this.linked=!1,this.dynamic=!1,this.movable=!1,this.resizable=!1,this.zoomable=!1,this.multiple=!1,this.keyboard=!1,this.outlined=!1,this.precise=!1}set $canvas(t){ss.set(this,t)}get $canvas(){return ss.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["active","aspect-ratio","dynamic","height","initial-aspect-ratio","initial-coverage","keyboard","linked","movable","multiple","outlined","precise","resizable","width","x","y","zoomable"])}$propertyChangedCallback(t,e,i){if(!Object.is(i,e))switch(super.$propertyChangedCallback(t,e,i),t){case"x":case"y":case"width":case"height":this.$changing||this.$nextTick((()=>{this.$change(this.x,this.y,this.width,this.height,this.aspectRatio,!0)}));break;case"aspectRatio":case"initialAspectRatio":this.$nextTick((()=>{this.$initSelection()}));break;case"initialCoverage":this.$nextTick((()=>{ko(i)&&i<=1&&this.$initSelection(!0,!0)}));break;case"keyboard":this.$nextTick((()=>{this.$canvas&&(i?this.$onDocumentKeyDown||(this.$onDocumentKeyDown=this.$handleKeyDown.bind(this),Ro(this.ownerDocument,po,this.$onDocumentKeyDown)):this.$onDocumentKeyDown&&(Mo(this.ownerDocument,po,this.$onDocumentKeyDown),this.$onDocumentKeyDown=null))}));break;case"multiple":this.$nextTick((()=>{if(this.$canvas){const t=this.$getSelections();i?(t.forEach((t=>{t.active=!1})),this.active=!0,this.$emit(yo,{x:this.x,y:this.y,width:this.width,height:this.height})):(this.active=!1,t.slice(1).forEach((t=>{this.$removeSelection(t)})))}}));break;case"precise":this.$nextTick((()=>{this.$change(this.x,this.y)}));break;case"linked":i&&(this.dynamic=!0)}}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Fr));t?(this.$canvas=t,this.$setStyles({position:"absolute",transform:`translate(${this.x}px, ${this.y}px)`}),this.hidden||this.$render(),this.$initSelection(!0),this.$onCanvasActionStart=this.$handleActionStart.bind(this),this.$onCanvasActionEnd=this.$handleActionEnd.bind(this),this.$onCanvasAction=this.$handleAction.bind(this),Ro(t,bo,this.$onCanvasActionStart),Ro(t,go,this.$onCanvasActionEnd),Ro(t,vo,this.$onCanvasAction)):this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onCanvasActionStart&&(Mo(t,bo,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Mo(t,go,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(Mo(t,vo,this.$onCanvasAction),this.$onCanvasAction=null)),super.disconnectedCallback()}$getSelections(){let t=[];return this.parentElement&&(t=Array.from(this.parentElement.querySelectorAll(this.$getTagNameOf(Vr)))),t}$initSelection(t=!1,e=!1){const{initialCoverage:i,parentElement:r}=this;if(ko(i)&&r){const o=this.aspectRatio||this.initialAspectRatio;let s=(e?0:this.width)||r.offsetWidth*i,n=(e?0:this.height)||r.offsetHeight*i;ko(o)&&({width:s,height:n}=qo({aspectRatio:o,width:s,height:n})),this.$change(this.x,this.y,s,n),t&&this.$center(),this.$initialSelection={x:this.x,y:this.y,width:this.width,height:this.height}}}$createSelection(){const t=this.cloneNode(!0);return this.hasAttribute("id")&&t.removeAttribute("id"),t.initialCoverage=NaN,this.active=!1,this.parentElement&&this.parentElement.insertBefore(t,this.nextSibling),t}$removeSelection(t=this){if(this.parentElement){const e=this.$getSelections();if(e.length>1){const i=e.indexOf(t),r=e[i+1]||e[i-1];r&&(t.active=!1,this.parentElement.removeChild(t),r.active=!0,r.$emit(yo,{x:r.x,y:r.y,width:r.width,height:r.height}))}else this.$clear()}}$handleActionStart(t){var e,i;const r=null===(i=null===(e=t.detail)||void 0===e?void 0:e.relatedEvent)||void 0===i?void 0:i.target;this.$action="",this.$actionStartTarget=r,!this.hidden&&this.multiple&&!this.active&&r===this&&this.parentElement&&(this.$getSelections().forEach((t=>{t.active=!1})),this.active=!0,this.$emit(yo,{x:this.x,y:this.y,width:this.width,height:this.height}))}$handleAction(t){const{currentTarget:e,detail:i}=t;if(!e||!i)return;const{relatedEvent:r}=i;let{action:o}=i;if(!o&&this.multiple&&(o=this.$action||(null==r?void 0:r.target.action),this.$action=o),!o||this.hidden&&o!==Xr||this.multiple&&!this.active&&o!==Kr)return;const s=i.endX-i.startX,n=i.endY-i.startY,{width:a,height:l}=this;let{aspectRatio:c}=this;switch(!ko(c)&&r.shiftKey&&(c=ko(a)&&ko(l)?a/l:1),o){case Xr:if(0!==s&&0!==n){const{$canvas:t}=this,r=Lo(e);(this.multiple&&!this.hidden?this.$createSelection():this).$change(i.startX-r.left,i.startY-r.top,Math.abs(s),Math.abs(n),c),s<0?n<0?o=so:n>0&&(o=ao):s>0&&(n<0?o=oo:n>0&&(o=no)),t&&(t.$action=o)}break;case Yr:this.movable&&(this.dynamic||this.$actionStartTarget&&this.contains(this.$actionStartTarget))&&this.$move(s,n);break;case Kr:if(r&&this.zoomable&&(this.dynamic||this.contains(r.target))){const t=Lo(e);this.$zoom(i.scale,r.pageX-t.left,r.pageY-t.top)}break;default:this.$resize(o,s,n,c)}}$handleActionEnd(){this.$action="",this.$actionStartTarget=null}$handleKeyDown(t){if(this.hidden||!this.keyboard||this.multiple&&!this.active||t.defaultPrevented)return;const{activeElement:e}=document;if(!e||!["INPUT","TEXTAREA"].includes(e.tagName)&&!["true","plaintext-only"].includes(e.contentEditable))switch(t.key){case"Backspace":t.metaKey&&(t.preventDefault(),this.$removeSelection());break;case"Delete":t.preventDefault(),this.$removeSelection();break;case"ArrowLeft":t.preventDefault(),this.$move(-1,0);break;case"ArrowRight":t.preventDefault(),this.$move(1,0);break;case"ArrowUp":t.preventDefault(),this.$move(0,-1);break;case"ArrowDown":t.preventDefault(),this.$move(0,1);break;case"+":t.preventDefault(),this.$zoom(.1);break;case"-":t.preventDefault(),this.$zoom(-.1)}}$center(){const{parentElement:t}=this;if(!t)return this;const e=(t.offsetWidth-this.width)/2,i=(t.offsetHeight-this.height)/2;return this.$change(e,i)}$move(t,e=t){return this.$moveTo(this.x+t,this.y+e)}$moveTo(t,e=t){return this.movable?this.$change(t,e):this}$resize(t,e=0,i=0,r=this.aspectRatio){if(!this.resizable)return this;const o=ko(r),{$canvas:s}=this;let{x:n,y:a,width:l,height:c}=this;switch(t){case to:a+=i,c-=i,c<0&&(t=io,c=-c,a-=c),o&&(n+=(e=i*r)/2,l-=e,l<0&&(l=-l,n-=l));break;case eo:l+=e,l<0&&(t=ro,l=-l,n-=l),o&&(a-=(i=e/r)/2,c+=i,c<0&&(c=-c,a-=c));break;case io:c+=i,c<0&&(t=to,c=-c,a-=c),o&&(n-=(e=i*r)/2,l+=e,l<0&&(l=-l,n-=l));break;case ro:n+=e,l-=e,l<0&&(t=eo,l=-l,n-=l),o&&(a+=(i=e/r)/2,c-=i,c<0&&(c=-c,a-=c));break;case oo:o&&(i=-e/r),a+=i,c-=i,l+=e,l<0&&c<0?(t=ao,l=-l,c=-c,n-=l,a-=c):l<0?(t=so,l=-l,n-=l):c<0&&(t=no,c=-c,a-=c);break;case so:o&&(i=e/r),n+=e,a+=i,l-=e,c-=i,l<0&&c<0?(t=no,l=-l,c=-c,n-=l,a-=c):l<0?(t=oo,l=-l,n-=l):c<0&&(t=ao,c=-c,a-=c);break;case no:o&&(i=e/r),l+=e,c+=i,l<0&&c<0?(t=so,l=-l,c=-c,n-=l,a-=c):l<0?(t=ao,l=-l,n-=l):c<0&&(t=oo,c=-c,a-=c);break;case ao:o&&(i=-e/r),n+=e,l-=e,c+=i,l<0&&c<0?(t=oo,l=-l,c=-c,n-=l,a-=c):l<0?(t=no,l=-l,n-=l):c<0&&(t=so,c=-c,a-=c)}return s&&s.$setAction(t),this.$change(n,a,l,c)}$zoom(t,e,i){if(!this.zoomable||0===t)return this;t<0?t=1/(1-t):t+=1;const{width:r,height:o}=this,s=r*t,n=o*t;let a=this.x,l=this.y;return _o(e)&&_o(i)?(a-=(s-r)*((e-this.x)/r),l-=(n-o)*((i-this.y)/o)):(a-=(s-r)/2,l-=(n-o)/2),this.$change(a,l,s,n)}$change(t,e,i=this.width,r=this.height,o=this.aspectRatio,s=!1){return this.$changing||!_o(t)||!_o(e)||!_o(i)||!_o(r)||i<0||r<0?this:(ko(o)&&({width:i,height:r}=qo({aspectRatio:o,width:i,height:r},"cover")),this.precise||(t=Math.round(t),e=Math.round(e),i=Math.round(i),r=Math.round(r)),t===this.x&&e===this.y&&i===this.width&&r===this.height&&Object.is(o,this.aspectRatio)&&!s?this:(this.hidden&&(this.hidden=!1),!1===this.$emit(yo,{x:t,y:e,width:i,height:r})?this:(this.$changing=!0,this.x=t,this.y=e,this.width=i,this.height=r,this.$changing=!1,this.$render())))}$reset(){const{x:t,y:e,width:i,height:r}=this.$initialSelection;return this.$change(t,e,i,r)}$clear(){return this.$change(0,0,0,0,NaN,!0),this.hidden=!0,this}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height})}$toCanvas(t){return new Promise(((e,i)=>{if(!this.isConnected)return void i(new Error("The current element is not connected to the DOM."));const r=document.createElement("canvas");let{width:o,height:s}=this,n=1;if(So(t)&&(ko(t.width)||ko(t.height))&&(({width:o,height:s}=qo({aspectRatio:o/s,width:t.width,height:t.height})),n=o/this.width),r.width=o,r.height=s,!this.$canvas)return void e(r);const a=this.$canvas.querySelector(this.$getTagNameOf(Hr));a?a.$ready().then((i=>{const l=r.getContext("2d");if(l){const[e,c,d,h,u,p]=a.$getTransform(),m=-this.x,f=-this.y,v=(m*h-d*f)/(e*h-d*c),g=(f*e-c*m)/(e*h-d*c);let b=e*v+d*g+u,y=c*v+h*g+p,x=i.naturalWidth,w=i.naturalHeight;1!==n&&(b*=n,y*=n,x*=n,w*=n);const _=x/2,k=w/2;l.fillStyle="transparent",l.fillRect(0,0,o,s),So(t)&&Ao(t.beforeDraw)&&t.beforeDraw.call(this,l,r),l.save(),l.translate(_,k),l.transform(e,c,d,h,b,y),l.translate(-_,-k),l.drawImage(i,0,0,x,w),l.restore()}e(r)})).catch(i):e(r)}))}}ns.$name=Vr,ns.$version="2.0.0";class as extends Jo{constructor(){super(...arguments),this.$style=":host{display:flex;flex-direction:column;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([bordered]){border:1px dashed var(--theme-color)}:host([covered]){bottom:0;left:0;position:absolute;right:0;top:0}:host>span{display:flex;flex:1}:host>span+span{border-top:1px dashed var(--theme-color)}:host>span>span{flex:1}:host>span>span+span{border-left:1px dashed var(--theme-color)}",this.bordered=!1,this.columns=3,this.covered=!1,this.rows=3,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["bordered","columns","covered","rows"])}$propertyChangedCallback(t,e,i){Object.is(i,e)||(super.$propertyChangedCallback(t,e,i),"rows"!==t&&"columns"!==t||this.$nextTick((()=>{this.$render()})))}connectedCallback(){super.connectedCallback(),this.$render()}$render(){const t=this.$getShadowRoot(),e=document.createDocumentFragment();for(let t=0;t<this.rows;t+=1){const t=document.createElement("span");t.setAttribute("role","row");for(let e=0;e<this.columns;e+=1){const e=document.createElement("span");e.setAttribute("role","gridcell"),t.appendChild(e)}e.appendChild(t)}t&&(t.innerHTML="",t.appendChild(e))}}as.$name=Dr,as.$version="2.0.0";class ls extends Jo{constructor(){super(...arguments),this.$style=':host{display:inline-block;height:1em;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1em}:host:after,:host:before{background-color:var(--theme-color);content:"";display:block;position:absolute}:host:before{height:1px;left:0;top:50%;transform:translateY(-50%);width:100%}:host:after{height:100%;left:50%;top:0;transform:translateX(-50%);width:1px}:host([centered]){left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}',this.centered=!1,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["centered"])}}ls.$name=Ur,ls.$version="2.0.0";const cs=new WeakMap,ds=new WeakMap,hs=new WeakMap,us=new WeakMap,ps="vertical";class ms extends Jo{constructor(){super(...arguments),this.$onSelectionChange=null,this.$onSourceImageLoad=null,this.$onSourceImageTransform=null,this.$scale=1,this.$style=":host{display:block;height:100%;overflow:hidden;position:relative;width:100%}",this.resize=ps,this.selection="",this.slottable=!1}set $image(t){ds.set(this,t)}get $image(){return ds.get(this)}set $sourceImage(t){us.set(this,t)}get $sourceImage(){return us.get(this)}set $canvas(t){cs.set(this,t)}get $canvas(){return cs.get(this)}set $selection(t){hs.set(this,t)}get $selection(){return hs.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["resize","selection"])}connectedCallback(){super.connectedCallback();let t=null;if(t=this.selection?this.ownerDocument.querySelector(this.selection):this.closest(this.$getTagNameOf(Vr)),Co(t)){this.$selection=t,this.$onSelectionChange=this.$handleSelectionChange.bind(this),Ro(t,yo,this.$onSelectionChange);const e=t.closest(this.$getTagNameOf(Fr));if(e){this.$canvas=e;const t=e.querySelector(this.$getTagNameOf(Hr));t&&(this.$sourceImage=t,this.$image=t.cloneNode(!0),this.$getShadowRoot().appendChild(this.$image),this.$onSourceImageLoad=this.$handleSourceImageLoad.bind(this),this.$onSourceImageTransform=this.$handleSourceImageTransform.bind(this),Ro(t.$image,mo,this.$onSourceImageLoad),Ro(t,xo,this.$onSourceImageTransform))}this.$render()}}disconnectedCallback(){const{$selection:t,$sourceImage:e}=this;t&&this.$onSelectionChange&&(Mo(t,yo,this.$onSelectionChange),this.$onSelectionChange=null),e&&this.$onSourceImageLoad&&(Mo(e.$image,mo,this.$onSourceImageLoad),this.$onSourceImageLoad=null),e&&this.$onSourceImageTransform&&(Mo(e,xo,this.$onSourceImageTransform),this.$onSourceImageTransform=null),super.disconnectedCallback()}$handleSelectionChange(t){this.$render(t.detail)}$handleSourceImageLoad(){const{$image:t,$sourceImage:e}=this,i=t.getAttribute("src"),r=e.getAttribute("src");r&&r!==i&&(t.setAttribute("src",r),t.$ready((()=>{setTimeout((()=>{this.$render()}),50)})))}$handleSourceImageTransform(t){this.$render(void 0,t.detail.matrix)}$render(t,e){const{$canvas:i,$selection:r}=this;t||r.hidden||(t=r),(!t||0===t.x&&0===t.y&&0===t.width&&0===t.height)&&(t={x:0,y:0,width:i.offsetWidth,height:i.offsetHeight});const{x:o,y:s,width:n,height:a}=t,l={},{clientWidth:c,clientHeight:d}=this;let h=c,u=d,p=NaN;switch(this.resize){case"both":p=1,h=n,u=a,l.width=n,l.height=a;break;case"horizontal":p=a>0?d/a:0,h=n*p,l.width=h;break;case ps:p=n>0?c/n:0,u=a*p,l.height=u;break;default:c>0?p=n>0?c/n:0:d>0&&(p=a>0?d/a:0)}this.$scale=p,this.$setStyles(l),this.$sourceImage&&this.$transformImageByOffset(null!=e?e:this.$sourceImage.$getTransform(),-o,-s)}$transformImageByOffset(t,e,i){const{$image:r,$scale:o,$sourceImage:s}=this;if(s&&r&&o>=0){const[s,n,a,l,c,d]=t,h=(e*l-a*i)/(s*l-a*n),u=(i*s-n*e)/(s*l-a*n),p=s*h+a*u+c,m=n*h+l*u+d;r.$ready((t=>{this.$setStyles.call(r,{width:t.naturalWidth*o,height:t.naturalHeight*o})})),r.$setTransform(s,n,a,l,p*o,m*o)}}}function fs(t){if(t.shadowRoot){const e=t.shadowRoot.querySelector(".scrim");e&&(e.style.display="none");const i=t.shadowRoot.querySelector("dialog"),r="<style>dialog::backdrop { display:block;    background: var(--md-sys-color-scrim, #000); opacity: 0.32; transition: all 250ms ease 0s; }</style>";i?.insertAdjacentHTML("beforeend",r)}}ms.$name=Wr,ms.$version="2.0.0",Qo.$define(),ls.$define(),as.$define(),os.$define(),es.$define(),ns.$define(),rs.$define(),ms.$define();const vs=d`
  .cropper-container {
    direction: ltr;
    font-size: 0;
    line-height: 0;
    position: relative;
    -ms-touch-action: none;
    touch-action: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .cropper-container img {
    display: block;
    height: 100%;
    image-orientation: 0deg;
    max-height: none !important;
    max-width: none !important;
    min-height: 0 !important;
    min-width: 0 !important;
    width: 100%;
  }

  .cropper-wrap-box,
  .cropper-canvas,
  .cropper-drag-box,
  .cropper-crop-box,
  .cropper-modal {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .cropper-wrap-box,
  .cropper-canvas {
    overflow: hidden;
  }

  .cropper-drag-box {
    background-color: #fff;
    opacity: 0;
  }

  .cropper-modal {
    background-color: #000;
    opacity: 0.5;
  }

  .cropper-view-box {
    display: block;
    height: 100%;
    outline: 1px solid #39f;
    outline-color: rgba(51, 153, 255, 0.75);
    overflow: hidden;
    width: 100%;
  }

  .cropper-dashed {
    border: 0 dashed #eee;
    display: block;
    opacity: 0.5;
    position: absolute;
  }

  .cropper-dashed.dashed-h {
    border-bottom-width: 1px;
    border-top-width: 1px;
    height: calc(100% / 3);
    left: 0;
    top: calc(100% / 3);
    width: 100%;
  }

  .cropper-dashed.dashed-v {
    border-left-width: 1px;
    border-right-width: 1px;
    height: 100%;
    left: calc(100% / 3);
    top: 0;
    width: calc(100% / 3);
  }

  .cropper-center {
    display: block;
    height: 0;
    left: 50%;
    opacity: 0.75;
    position: absolute;
    top: 50%;
    width: 0;
  }

  .cropper-center::before,
  .cropper-center::after {
    background-color: #eee;
    content: ' ';
    display: block;
    position: absolute;
  }

  .cropper-center::before {
    height: 1px;
    left: -3px;
    top: 0;
    width: 7px;
  }

  .cropper-center::after {
    height: 7px;
    left: 0;
    top: -3px;
    width: 1px;
  }

  .cropper-face,
  .cropper-line,
  .cropper-point {
    display: block;
    height: 100%;
    opacity: 0.1;
    position: absolute;
    width: 100%;
  }

  .cropper-face {
    background-color: #fff;
    left: 0;
    top: 0;
  }

  .cropper-line {
    background-color: #39f;
  }

  .cropper-line.line-e {
    cursor: ew-resize;
    right: -3px;
    top: 0;
    width: 5px;
  }

  .cropper-line.line-n {
    cursor: ns-resize;
    height: 5px;
    left: 0;
    top: -3px;
  }

  .cropper-line.line-w {
    cursor: ew-resize;
    left: -3px;
    top: 0;
    width: 5px;
  }

  .cropper-line.line-s {
    bottom: -3px;
    cursor: ns-resize;
    height: 5px;
    left: 0;
  }

  .cropper-point {
    background-color: #39f;
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }

  .cropper-point.point-e {
    cursor: ew-resize;
    margin-top: -3px;
    right: -3px;
    top: 50%;
  }

  .cropper-point.point-n {
    cursor: ns-resize;
    left: 50%;
    margin-left: -3px;
    top: -3px;
  }

  .cropper-point.point-w {
    cursor: ew-resize;
    left: -3px;
    margin-top: -3px;
    top: 50%;
  }

  .cropper-point.point-s {
    bottom: -3px;
    cursor: s-resize;
    left: 50%;
    margin-left: -3px;
  }

  .cropper-point.point-ne {
    cursor: nesw-resize;
    right: -3px;
    top: -3px;
  }

  .cropper-point.point-nw {
    cursor: nwse-resize;
    left: -3px;
    top: -3px;
  }

  .cropper-point.point-sw {
    bottom: -3px;
    cursor: nesw-resize;
    left: -3px;
  }

  .cropper-point.point-se {
    bottom: -3px;
    cursor: nwse-resize;
    height: 20px;
    opacity: 1;
    right: -3px;
    width: 20px;
  }

  @media (min-width: 768px) {
    .cropper-point.point-se {
      height: 15px;
      width: 15px;
    }
  }

  @media (min-width: 992px) {
    .cropper-point.point-se {
      height: 10px;
      width: 10px;
    }
  }

  @media (min-width: 1200px) {
    .cropper-point.point-se {
      height: 5px;
      opacity: 0.75;
      width: 5px;
    }
  }

  .cropper-point.point-se::before {
    background-color: #39f;
    bottom: -50%;
    content: ' ';
    display: block;
    height: 200%;
    opacity: 0;
    position: absolute;
    right: -50%;
    width: 200%;
  }

  .cropper-invisible {
    opacity: 0;
  }

  .cropper-bg {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
  }

  .cropper-hide {
    display: block;
    height: 0;
    position: absolute;
    width: 0;
  }

  .cropper-hidden {
    display: none !important;
  }

  .cropper-move {
    cursor: move;
  }

  .cropper-crop {
    cursor: crosshair;
  }

  .cropper-disabled .cropper-drag-box,
  .cropper-disabled .cropper-face,
  .cropper-disabled .cropper-line,
  .cropper-disabled .cropper-point {
    cursor: not-allowed;
  }

  [circle] .cropper-view-box {
    box-shadow: 0 0 0 1px #39f;
    border-radius: 50%;
    outline: 0;
  }
  [circle] .cropper-face {
    background-color: inherit !important;
  }
  [circle] .cropper-view-box {
    outline: inherit !important;
  }
`,gs=d`
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
`,bs=d`
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
`,ys=d`
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
`,xs=d`
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
`,ws=d`
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
`,_s=d`
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
`,ks=d`
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
`,$s=[ws,_s,d`
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

    /* @lit-plugin.rules.no-invalid-css */
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
  `],zs=d`
  [ellipsis] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Ss=t=>t??X,As={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},Cs={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},Ts={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},Es={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Is={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class Ps{static getFirstMatch(t,e){const i=e.match(t);return i&&i.length>0&&i[1]||""}static getSecondMatch(t,e){const i=e.match(t);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(t,e,i){if(t.test(e))return i}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const e=t.split(".").splice(0,2).map((t=>parseInt(t,10)||0));if(e.push(0),10===e[0])switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const e=t.split(".").splice(0,2).map((t=>parseInt(t,10)||0));if(e.push(0),!(1===e[0]&&e[1]<5))return 1===e[0]&&e[1]<6?"Cupcake":1===e[0]&&e[1]>=6?"Donut":2===e[0]&&e[1]<2?"Eclair":2===e[0]&&2===e[1]?"Froyo":2===e[0]&&e[1]>2?"Gingerbread":3===e[0]?"Honeycomb":4===e[0]&&e[1]<1?"Ice Cream Sandwich":4===e[0]&&e[1]<4?"Jelly Bean":4===e[0]&&e[1]>=4?"KitKat":5===e[0]?"Lollipop":6===e[0]?"Marshmallow":7===e[0]?"Nougat":8===e[0]?"Oreo":9===e[0]?"Pie":void 0}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,e,i=!1){const r=Ps.getVersionPrecision(t),o=Ps.getVersionPrecision(e);let s=Math.max(r,o),n=0;const a=Ps.map([t,e],(t=>{const e=s-Ps.getVersionPrecision(t),i=t+new Array(e+1).join(".0");return Ps.map(i.split("."),(t=>new Array(20-t.length).join("0")+t)).reverse()}));for(i&&(n=s-Math.min(r,o)),s-=1;s>=n;){if(a[0][s]>a[1][s])return 1;if(a[0][s]===a[1][s]){if(s===n)return 0;s-=1}else if(a[0][s]<a[1][s])return-1}}static map(t,e){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(t,e);for(r=0;r<t.length;r+=1)i.push(e(t[r]));return i}static find(t,e){let i,r;if(Array.prototype.find)return Array.prototype.find.call(t,e);for(i=0,r=t.length;i<r;i+=1){const r=t[i];if(e(r,i))return r}}static assign(t,...e){const i=t;let r,o;if(Object.assign)return Object.assign(t,...e);for(r=0,o=e.length;r<o;r+=1){const t=e[r];if("object"==typeof t&&null!==t){Object.keys(t).forEach((e=>{i[e]=t[e]}))}}return t}static getBrowserAlias(t){return As[t]}static getBrowserTypeByAlias(t){return Cs[t]||""}}const Os=/version\/(\d+(\.?_?\d+)+)/i,Ms=[{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},i=Ps.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/opera/i],describe(t){const e={name:"Opera"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},i=Ps.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},i=Ps.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},i=Ps.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},i=Ps.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(t){const e={name:"Opera Touch"},i=Ps.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},i=Ps.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},i=Ps.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},i=Ps.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},i=Ps.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},i=Ps.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},i=Ps.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},i=Ps.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},i=Ps.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},i=Ps.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return i&&(e.version=i),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},i=Ps.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},i=Ps.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},i=Ps.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},i=Ps.getFirstMatch(Os,t)||Ps.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},i=Ps.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},i=Ps.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},i=Ps.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},i=Ps.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},i=Ps.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MiuiBrowser/i],describe(t){const e={name:"Miui"},i=Ps.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},i=Ps.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},i=Ps.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},i=Ps.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e={name:"Android Browser"},i=Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},i=Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},i=Ps.getFirstMatch(Os,t);return i&&(e.version=i),e}},{test:[/.*/i],describe(t){const e=-1!==t.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:Ps.getFirstMatch(e,t),version:Ps.getSecondMatch(e,t)}}}];var Rs=[{test:[/Roku\/DVP/],describe(t){const e=Ps.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:Es.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=Ps.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:Es.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=Ps.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),i=Ps.getWindowsVersionName(e);return{name:Es.Windows,version:e,versionName:i}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(t){const e={name:Es.iOS},i=Ps.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return i&&(e.version=i),e}},{test:[/macintosh/i],describe(t){const e=Ps.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),i=Ps.getMacOSVersionName(e),r={name:Es.MacOS,version:e};return i&&(r.versionName=i),r}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=Ps.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:Es.iOS,version:e}}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e=Ps.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),i=Ps.getAndroidVersionName(e),r={name:Es.Android,version:e};return i&&(r.versionName=i),r}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=Ps.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),i={name:Es.WebOS};return e&&e.length&&(i.version=e),i}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=Ps.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||Ps.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||Ps.getFirstMatch(/\bbb(\d+)/i,t);return{name:Es.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=Ps.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:Es.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=Ps.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:Es.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:Es.Linux})},{test:[/CrOS/],describe:()=>({name:Es.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=Ps.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:Es.PlayStation4,version:e}}}],Bs=[{test:[/googlebot/i],describe:()=>({type:"bot",vendor:"Google"})},{test:[/huawei/i],describe(t){const e=Ps.getFirstMatch(/(can-l01)/i,t)&&"Nova",i={type:Ts.mobile,vendor:"Huawei"};return e&&(i.model=e),i}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:Ts.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:Ts.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:()=>({type:Ts.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:Ts.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:Ts.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:Ts.tablet})},{test(t){const e=t.test(/ipod|iphone/i),i=t.test(/like (ipod|iphone)/i);return e&&!i},describe(t){const e=Ps.getFirstMatch(/(ipod|iphone)/i,t);return{type:Ts.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:Ts.mobile,vendor:"Nexus"})},{test:[/[^-]mobi/i],describe:()=>({type:Ts.mobile})},{test:t=>"blackberry"===t.getBrowserName(!0),describe:()=>({type:Ts.mobile,vendor:"BlackBerry"})},{test:t=>"bada"===t.getBrowserName(!0),describe:()=>({type:Ts.mobile})},{test:t=>"windows phone"===t.getBrowserName(),describe:()=>({type:Ts.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&e>=3},describe:()=>({type:Ts.tablet})},{test:t=>"android"===t.getOSName(!0),describe:()=>({type:Ts.mobile})},{test:t=>"macos"===t.getOSName(!0),describe:()=>({type:Ts.desktop,vendor:"Apple"})},{test:t=>"windows"===t.getOSName(!0),describe:()=>({type:Ts.desktop})},{test:t=>"linux"===t.getOSName(!0),describe:()=>({type:Ts.desktop})},{test:t=>"playstation 4"===t.getOSName(!0),describe:()=>({type:Ts.tv})},{test:t=>"roku"===t.getOSName(!0),describe:()=>({type:Ts.tv})}],Ns=[{test:t=>"microsoft edge"===t.getBrowserName(!0),describe(t){if(/\sedg\//i.test(t))return{name:Is.Blink};const e=Ps.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:Is.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:Is.Trident},i=Ps.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:Is.Presto},i=Ps.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=t.test(/gecko/i),i=t.test(/like gecko/i);return e&&!i},describe(t){const e={name:Is.Gecko},i=Ps.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:Is.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:Is.WebKit},i=Ps.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}}];class js{constructor(t,e=!1){if(null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==e&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=Ps.find(Ms,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=Ps.find(Rs,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:e}=this.getOS();return t?String(e).toLowerCase()||"":e||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:e}=this.getPlatform();return t?String(e).toLowerCase()||"":e||""}parsePlatform(){this.parsedResult.platform={};const t=Ps.find(Bs,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=Ps.find(Ns,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return Ps.assign({},this.parsedResult)}satisfies(t){const e={};let i=0;const r={};let o=0;if(Object.keys(t).forEach((s=>{const n=t[s];"string"==typeof n?(r[s]=n,o+=1):"object"==typeof n&&(e[s]=n,i+=1)})),i>0){const t=Object.keys(e),i=Ps.find(t,(t=>this.isOS(t)));if(i){const t=this.satisfies(e[i]);if(void 0!==t)return t}const r=Ps.find(t,(t=>this.isPlatform(t)));if(r){const t=this.satisfies(e[r]);if(void 0!==t)return t}}if(o>0){const t=Object.keys(r),e=Ps.find(t,(t=>this.isBrowser(t,!0)));if(void 0!==e)return this.compareVersion(r[e])}}isBrowser(t,e=!1){const i=this.getBrowserName().toLowerCase();let r=t.toLowerCase();const o=Ps.getBrowserTypeByAlias(r);return e&&o&&(r=o.toLowerCase()),r===i}compareVersion(t){let e=[0],i=t,r=!1;const o=this.getBrowserVersion();if("string"==typeof o)return">"===t[0]||"<"===t[0]?(i=t.substr(1),"="===t[1]?(r=!0,i=t.substr(2)):e=[],">"===t[0]?e.push(1):e.push(-1)):"="===t[0]?i=t.substr(1):"~"===t[0]&&(r=!0,i=t.substr(1)),e.indexOf(Ps.compareVersions(o,i,r))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,e=!1){return this.isBrowser(t,e)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some((t=>this.is(t)))}}class Ls{static getParser(t,e=!1){if("string"!=typeof t)throw new Error("UserAgent should be a string");return new js(t,e)}static parse(t){return new js(t).getResult()}static get BROWSER_MAP(){return Cs}static get ENGINE_MAP(){return Is}static get OS_MAP(){return Es}static get PLATFORMS_MAP(){return Ts}}const Fs=new URL(new URL("D9xn2E7Y.gif",import.meta.url).href,import.meta.url).href;let Us=class extends(Tt(dt)){#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}#Rt;get main(){return this.#Rt}set main(t){this.#Rt=t}#Bt;get cropperCanvas(){return this.#Bt}set cropperCanvas(t){this.#Bt=t}#Nt;get cropperSelection(){return this.#Nt}set cropperSelection(t){this.#Nt=t}#jt;get cropperImage(){return this.#jt}set cropperImage(t){this.#jt=t}#Lt;get forcePNGOutput(){return this.#Lt}set forcePNGOutput(t){this.#Lt=t}#Ft;get options(){return this.#Ft}set options(t){this.#Ft=t}#ut="";get fileName(){return this.#ut}set fileName(t){this.#ut=t}#Ut="";get src(){return this.#Ut}set src(t){this.#Ut=t}#Dt="";#qt="";#Ht=!1;firstUpdated(){const t=Ls.getParser(window.navigator.userAgent),e=t?.getOS?.()?.name??"";this.#Dt="iOS"===e||"macOS"===e||this.forcePNGOutput?"image/png":"image/webp",this.#qt="iOS"===e||"macOS"===e||this.forcePNGOutput?"png":"webp",this.#Vt()}#Gt;#Vt(){this.#Gt=new ResizeObserver((()=>{this.#Ht&&this.cropperImage.$center("cover")})),this.#Gt.observe(this.main)}#Wt;#j;async open(t,e,i){return this.#Ht=!1,this.#Wt=i,this.dialog.returnValue="",this.reset(),this.fileName=e,this.src=t,await this.updateComplete,this.dialog.show(),this.cropperImage.$ready((async t=>{this.cropperCanvas.style.width=`${t.naturalWidth}px`,this.cropperCanvas.style.aspectRatio=`${t.naturalWidth} / ${t.naturalHeight}`;const e=this.cropperCanvas.getBoundingClientRect();this.cropperSelection.width=e.width/2,this.cropperSelection.height=e.height/2,this.cropperImage.$center("cover"),this.#Ht=!0,await this.updateComplete,this.cropperSelection.$center()})),await new Promise((t=>{this.#j=t}))}reset(){this.cropperImage.$resetTransform()}blobToFile(t,e){return new File([t],e,{lastModified:(new Date).getTime()})}#Xt(t,e){return t.slice(0,t.lastIndexOf("."))+`.${e}`}async#Yt(t){const e=document.createElement("canvas"),i=new Image,r=new Promise((t=>{i.onload=()=>{const r=Math.min(i.naturalWidth,i.naturalHeight);e.width=r,e.height=r;const o=e.getContext("2d");o.drawImage(i,0,0),o.globalCompositeOperation="destination-in",o.fillStyle="#000",o.beginPath(),o.arc(.5*r,.5*r,.5*r,0,2*Math.PI),o.fill(),o.globalCompositeOperation="source-over",t(e.toDataURL())}}));return i.src=t,await r}static{this.styles=[gs,_s,vs,d`
      :host {
        display: block;
      }

      md-dialog {
        max-width: calc(100vw - 24px);
        max-height: calc(100vh - 24px);
      }

      main {
        display: flex;
        position: relative;
        align-self: center;

        padding: 18px 24px 0px 24px;
      }

      loading-animation {
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
        width: 100%;
      }

      loading-animation img {
        height: 300px;
      }

      cropper-container {
        display: grid;
        grid-template-areas:
          'cropper'
          'buttons';
        gap: 8px 0;
      }

      cropper-canvas {
        max-width: min(800px, calc(100vw - 115px));
        max-height: calc(100vh - 250px);
      }

      crop-buttons {
        grid-area: buttons;
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 8px;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return G`
      <md-dialog
        @open=${t=>fs(t.target)}
        @close=${t=>{if("cancel"===t.target.returnValue||"cropped"===t.target.returnValue)return this.#j(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Crop image</div>
        <main slot="content">
          <loading-animation ?hidden=${!this.isLoading}>
            <img src=${Fs} />
            <p>Uploading image...</p>
          </loading-animation>
          <cropper-container ?hidden=${this.isLoading}>
            <cropper-canvas ?background=${!this.options?.canvasHideBackground}>
              <cropper-image initial-center-size="cover" .src=${this.src} alt="Picture" rotatable scalable skewable translatable></cropper-image>
              <cropper-shade hidden></cropper-shade>
              <cropper-handle action="select" plain></cropper-handle>
              <cropper-selection movable resizable aspect-ratio=${"circle"===this.options?.shape?1:Ss(this.options?.selectionAspectRatio)}>
                <cropper-grid role="grid" covered ?hidden=${this.options?.selectionHideGrid}></cropper-grid>
                <cropper-crosshair centered></cropper-crosshair>
                <cropper-handle theme-color="rgba(255, 255, 255, 0.35)" action="move"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="n-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="e-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="s-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="w-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="ne-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="nw-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="se-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="sw-resize"></cropper-handle>
              </cropper-selection>
            </cropper-canvas>
            <crop-buttons>
              <md-icon-button label="Rotate right" title="Rotate right" @click=${()=>this.cropperImage?.$rotate("90deg")}>
                <md-icon>rotate_right</md-icon>
              </md-icon-button>
              <md-icon-button label="Rotate left" title="Rotate left" @click=${()=>this.cropperImage.$rotate("-90deg")}>
                <md-icon>rotate_left</md-icon>
              </md-icon-button>
            </crop-buttons>
          </cropper-container>
        </main>
        <div slot="actions">
          <md-text-button
            ?disabled=${this.isLoading}
            @click=${()=>{this.reset(),this.dialog.close("cancel")}}
            >Cancel</md-text-button
          >
          <md-text-button
            ?disabled=${this.isLoading}
            @click=${async()=>{this.isLoading=!0,await this.updateComplete;const t=await(this.cropperSelection?.$toCanvas());if(!t)return;const e="circle"===this.options?.shape?await this.#Yt(t.toDataURL(this.#Dt)):t.toDataURL(this.#Dt),i=await fetch(e),r=this.blobToFile(await i.blob(),this.#Xt(this.fileName,this.#qt)),o=this.#Wt?.(r,e)||Promise.resolve();this.loadWhile(o),await o,this.isLoading=!1,this.dialog.close("cropped")}}
            >Save</md-text-button
          >
        </div>
      </md-dialog>
    `}};r([bt("md-dialog")],Us.prototype,"dialog",null),r([bt("main")],Us.prototype,"main",null),r([bt("cropper-canvas")],Us.prototype,"cropperCanvas",null),r([bt("cropper-selection")],Us.prototype,"cropperSelection",null),r([bt("cropper-image")],Us.prototype,"cropperImage",null),r([ft({type:Boolean,reflect:!0,attribute:"force-png"})],Us.prototype,"forcePNGOutput",null),r([ft({type:Object})],Us.prototype,"options",null),r([vt()],Us.prototype,"fileName",null),r([vt()],Us.prototype,"src",null),Us=r([ut("crop-and-save-image-dialog")],Us);let Ds=class extends dt{#Kt;get imageUrl(){return this.#Kt}set imageUrl(t){this.#Kt=t}#Jt;get downloadSrc(){return this.#Jt}set downloadSrc(t){this.#Jt=t}#Qt;get filename(){return this.#Qt}set filename(t){this.#Qt=t}#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}async open(t,e,i){return this.imageUrl=void 0,this.filename=i,this.downloadSrc=e,this.imageUrl=t,this.dialog.show()}static{this.styles=[d`
      div[header] {
        word-break: break-all;
      }

      md-dialog {
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 48px);
      }

      img {
        width: 100%;
      }
    `]}render(){return G`
      <md-dialog @open=${t=>fs(t.target)}>
        <div header slot="headline">${It(this.filename||"Image preview",60)}</div>
        <img slot="content" draggable="false" src=${Ss(this.imageUrl)} />
        <div slot="actions">
          ${this.downloadSrc?G`<md-text-button
                @click=${t=>{t.stopPropagation(),window.open(this.downloadSrc)}}
                ><md-icon slot="icon">file_download</md-icon>Download</md-text-button
              >`:G`<div></div>`}

          <md-text-button
            @click=${t=>{t.stopPropagation(),this.dialog.close("close")}}
            >Close</md-text-button
          >
        </div>
      </md-dialog>
    `}};r([vt()],Ds.prototype,"imageUrl",null),r([vt()],Ds.prototype,"downloadSrc",null),r([vt()],Ds.prototype,"filename",null),r([bt("md-dialog")],Ds.prototype,"dialog",null),Ds=r([ut("image-preview-dialog")],Ds);const qs=de(dt);class Hs extends qs{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1,this.addEventListener("click",this.handleClick.bind(this))}focus(t){this.disabled&&!this.alwaysFocusable||super.focus(t)}render(){return G`
      <div class="container ${Jt(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(t){t.has("disabled")&&void 0!==t.get("disabled")&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled||this.softDisabled,"has-icon":this.hasIcon}}renderContainerContent(){return G`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return G`<span class="outline"></span>`}renderLeadingIcon(){return G`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return G`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">
        <span class="label-text" id="label">
          ${this.label?this.label:G`<slot></slot>`}
        </span>
      </span>
      <span class="touch"></span>
    `}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements({flatten:!0}).length>0}handleClick(t){if(this.softDisabled||this.disabled&&this.alwaysFocusable)return t.stopImmediatePropagation(),void t.preventDefault()}}Hs.shadowRootOptions={...dt.shadowRootOptions,delegatesFocus:!0},r([ft({type:Boolean,reflect:!0})],Hs.prototype,"disabled",void 0),r([ft({type:Boolean,attribute:"soft-disabled",reflect:!0})],Hs.prototype,"softDisabled",void 0),r([ft({type:Boolean,attribute:"always-focusable"})],Hs.prototype,"alwaysFocusable",void 0),r([ft()],Hs.prototype,"label",void 0),r([ft({type:Boolean,reflect:!0,attribute:"has-icon"})],Hs.prototype,"hasIcon",void 0);const Vs="aria-label-remove";class Gs extends Hs{get ariaLabelRemove(){if(this.hasAttribute(Vs))return this.getAttribute(Vs);const{ariaLabel:t}=this;return t||this.label?`Remove ${t||this.label}`:null}set ariaLabelRemove(t){t!==this.ariaLabelRemove&&(null===t?this.removeAttribute(Vs):this.setAttribute(Vs,t),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(t){(this.alwaysFocusable||!this.disabled)&&t?.trailing&&this.trailingAction?this.trailingAction.focus(t):super.focus(t)}renderContainerContent(){return G`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(t){const e="ArrowLeft"===t.key,i="ArrowRight"===t.key;if(!e&&!i)return;if(!this.primaryAction||!this.trailingAction)return;const r="rtl"===getComputedStyle(this).direction?e:i,o=this.primaryAction?.matches(":focus-within"),s=this.trailingAction?.matches(":focus-within");if(r&&s||!r&&o)return;t.preventDefault(),t.stopPropagation();(r?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:t,trailingAction:e}=this;t&&e&&(t.tabIndex=-1,e.addEventListener("focusout",(()=>{t.tabIndex=0}),{once:!0}))}}function Ws({ariaLabel:t,disabled:e,focusListener:i,tabbable:r=!1}){return G`
    <span id="remove-label" hidden aria-hidden="true">Remove</span>
    <button
      class="trailing action"
      aria-label=${t||X}
      aria-labelledby=${t?X:"remove-label label"}
      tabindex=${r?X:-1}
      @click=${Xs}
      @focus=${i}>
      <md-focus-ring part="trailing-focus-ring"></md-focus-ring>
      <md-ripple ?disabled=${e}></md-ripple>
      <span class="trailing icon" aria-hidden="true">
        <slot name="remove-trailing-icon">
          <svg viewBox="0 96 960 960">
            <path
              d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </slot>
      </span>
      <span class="touch"></span>
    </button>
  `}function Xs(t){if(this.disabled||this.softDisabled)return;t.stopPropagation();!this.dispatchEvent(new Event("remove",{cancelable:!0}))||this.remove()}class Ys extends Gs{constructor(){super(...arguments),this.avatar=!1,this.href="",this.target="",this.removeOnly=!1,this.selected=!1}get primaryId(){return this.href?"link":this.removeOnly?"":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}get primaryAction(){return this.removeOnly?null:this.renderRoot.querySelector(".primary.action")}getContainerClasses(){return{...super.getContainerClasses(),avatar:this.avatar,disabled:!this.href&&(this.disabled||this.softDisabled),link:!!this.href,selected:this.selected,"has-trailing":!0}}renderPrimaryAction(t){const{ariaLabel:e}=this;return this.href?G`
        <a
          class="primary action"
          id="link"
          aria-label=${e||X}
          href=${this.href}
          target=${this.target||X}
          >${t}</a
        >
      `:this.removeOnly?G`
        <span class="primary action" aria-label=${e||X}>
          ${t}
        </span>
      `:G`
      <button
        class="primary action"
        id="button"
        aria-label=${e||X}
        aria-disabled=${this.softDisabled||X}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${t}</button
      >
    `}renderTrailingAction(t){return Ws({focusListener:t,ariaLabel:this.ariaLabelRemove,disabled:!this.href&&(this.disabled||this.softDisabled),tabbable:this.removeOnly})}}r([ft({type:Boolean})],Ys.prototype,"avatar",void 0),r([ft()],Ys.prototype,"href",void 0),r([ft()],Ys.prototype,"target",void 0),r([ft({type:Boolean,attribute:"remove-only"})],Ys.prototype,"removeOnly",void 0),r([ft({type:Boolean,reflect:!0})],Ys.prototype,"selected",void 0),r([bt(".trailing.action")],Ys.prototype,"trailingAction",void 0);const Ks=d`:host{--_container-height: var(--md-input-chip-container-height, 32px);--_disabled-label-text-color: var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color: var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font: var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color: var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color: var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width: var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color: var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity: var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color: var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape: var(--md-input-chip-avatar-shape, var(--md-sys-shape-corner-full, 9999px));--_avatar-size: var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color: var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size: var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color: var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color: var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color: var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color: var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-input-chip-leading-space, 16px);--_trailing-space: var(--md-input-chip-trailing-space, 16px);--_icon-label-space: var(--md-input-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-input-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-input-chip-with-trailing-icon-trailing-space, 8px)}:host([avatar]){--_container-shape-start-start: var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end: var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end: var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start: var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors: active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}
`,Js=d`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`,Qs=d`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}
`,Zs=d`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;let tn=class extends Ys{};tn.styles=[Qs,Zs,Js,Ks],tn=r([ut("md-input-chip")],tn);const en=(t,e,i)=>{const r=new Map;for(let o=e;o<=i;o++)r.set(t[o],o);return r},rn=Yt(class extends Kt{constructor(t){if(super(t),t.type!==Gt)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let r;void 0===i?i=e:void 0!==e&&(r=e);const o=[],s=[];let n=0;for(const e of t)o[n]=r?r(e,n):n,s[n]=i(e,n),n++;return{values:s,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,r]){const o=(t=>t._$AH)(t),{values:s,keys:n}=this.dt(e,i,r);if(!Array.isArray(o))return this.ut=n,s;const a=this.ut??=[],l=[];let c,d,h=0,u=o.length-1,p=0,m=s.length-1;for(;h<=u&&p<=m;)if(null===o[h])h++;else if(null===o[u])u--;else if(a[h]===n[p])l[p]=rr(o[h],s[p]),h++,p++;else if(a[u]===n[m])l[m]=rr(o[u],s[m]),u--,m--;else if(a[h]===n[m])l[m]=rr(o[h],s[m]),ir(t,l[m+1],o[h]),h++,m--;else if(a[u]===n[p])l[p]=rr(o[u],s[p]),ir(t,o[h],o[u]),u--,p++;else if(void 0===c&&(c=en(n,p,m),d=en(a,h,u)),c.has(a[h]))if(c.has(a[u])){const e=d.get(n[p]),i=void 0!==e?o[e]:null;if(null===i){const e=ir(t,o[h]);rr(e,s[p]),l[p]=e}else l[p]=rr(i,s[p]),ir(t,o[h],i),o[e]=null;p++}else nr(o[u]),u--;else nr(o[h]),h++;for(;p<=m;){const e=ir(t,l[m+1]);rr(e,s[p]),l[p++]=e}for(;h<=u;){const t=o[h++];null!==t&&nr(t)}return this.ut=n,sr(t,l),W}}),on=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];function sn(t){const e=t.split(".");return e?.[e.length-1]||""}function nn(t){return"pdf"===t.toLowerCase()?new URL(new URL("BrwlMowD.png",import.meta.url).href,import.meta.url).href:new URL(new URL("Ciwo_vsG.png",import.meta.url).href,import.meta.url).href}function an(t,e){if(t?.CdnFileName&&!e)return`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}?d=${encodeURIComponent(`${t.Name}.${t.Extension}`)}`}function ln(t,e){if(t?.CdnFileName)return t?.PreviewSizes&&t?.PreviewSizes?.split(",").includes(String(e))?`https://cdn.leavitt.com/${t.CdnFileName}-${e}.${t.PreviewExtension}`:function(t){return"png"===t?.Extension||"jpg"===t?.Extension||"jpeg"===t?.Extension||"gif"===t?.Extension||"svg"===t?.Extension||"webp"===t?.Extension}(t)?`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}`:void 0}let cn=class extends dt{#Zt=[];get files(){return this.#Zt}set files(t){this.#Zt=t}#te=!1;get isOver(){return this.#te}set isOver(t){this.#te=t}#ee=void 0;get previewSrc(){return this.#ee}set previewSrc(t){this.#ee=t}#ie;get input(){return this.#ie}set input(t){this.#ie=t}#re;get imagePreviewDialog(){return this.#re}set imagePreviewDialog(t){this.#re=t}#oe;get cropperDialog(){return this.#oe}set cropperDialog(t){this.#oe=t}#se;get confirmDeleteDialog(){return this.#se}set confirmDeleteDialog(t){this.#se=t}#ne;get chipMultiSelect(){return this.#ne}set chipMultiSelect(t){this.#ne=t}#ae=[];#le="image/*,.pdf";get accept(){return this.#le}set accept(t){this.#le=t}#ce=!1;get multiple(){return this.#ce}set multiple(t){this.#ce=t}#At=!1;get required(){return this.#At}set required(t){this.#At=t}#Ot=!1;get disabled(){return this.#Ot}set disabled(t){this.#Ot=t}#de=!1;get confirmDelete(){return this.#de}set confirmDelete(t){this.#de=t}#he="Confirm delete";get confirmDeleteHeader(){return this.#he}set confirmDeleteHeader(t){this.#he=t}#ue="Are you sure you would like to delete this attachment?";get confirmDeleteText(){return this.#ue}set confirmDeleteText(t){this.#ue=t}#pe="Add attachment";get addButtonLabel(){return this.#pe}set addButtonLabel(t){this.#pe=t}#zt="Attachments";get label(){return this.#zt}set label(t){this.#zt=t}#Tt;get supportingText(){return this.#Tt}set supportingText(t){this.#Tt=t}#St="No attachments";get noItemsText(){return this.#St}set noItemsText(t){this.#St=t}#Ft;get options(){return this.#Ft}set options(t){this.#Ft=t}#me=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];get croppableImageFormats(){return this.#me}set croppableImageFormats(t){this.#me=t}getFiles(){return this.files}setFiles(...t){this.files=[...t].map((t=>({file:new File([""],t.fileName),previewSrc:t.previewSrc,downloadSrc:t.downloadSrc,id:t.id}))),this.#ae=structuredClone(this.files)}setFilesFromDatabaseAttachments(...t){this.files=[...t].filter((t=>t.Name&&t.Extension)).map((t=>({id:t.Id,file:new File([""],`${t?.Name}.${t?.Extension}`),previewSrc:ln(t,512),downloadSrc:an(t)}))),this.#ae=structuredClone(this.files)}checkValidity(){return this.chipMultiSelect.checkValidity()}reportValidity(){return this.chipMultiSelect.reportValidity()}hasChanges(){return JSON.stringify(this.#ae)!==JSON.stringify(this.files)}async reset(){this.#ae=[],this.previewSrc=void 0,this.files=[],this.isOver=!1,await this.updateComplete,this.chipMultiSelect.reset()}async handleNewFile(t){let e=!1;for(let i=0;i<(t?.length??0);i++){const r=t?.item(i);if(r){const t=this.croppableImageFormats.some((t=>r.name?.toLowerCase()?.endsWith(t?.toLowerCase())));if(t){"cropped"===await this.cropperDialog.open(URL.createObjectURL(r),r.name,(async(t,e)=>{const i={file:t,previewSrc:e??void 0};this.multiple?this.files=[...this.files,i]:this.files=[i]}))&&(this.reportValidity(),e=!0),await Et(500)}else{const t={file:r},i=on.some((t=>r.name.endsWith(t)));if(i)try{const e=await this.toBase64(r);"string"==typeof e&&(t.previewSrc=e??void 0)}catch{}this.multiple?this.files=[...this.files,t]:this.files=[t],this.reportValidity(),e=!0}}}e&&this.#fe()}#ve=null;#ge(t){const e=this.files.findIndex((e=>e===t));this.files.splice(e,1),this.requestUpdate("files"),this.reportValidity(),this.#fe()}toBase64(t){return new Promise(((e,i)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(r.result),r.onerror=t=>i(t)}))}#fe(){this.dispatchEvent(new Event("change"))}static{this.styles=[_s,d`
      :host {
        display: block;
      }

      :host([is-over]:not([disabled])) drop-scrim {
        background-color: var(--md-sys-color-outline-variant);
        opacity: 0.08;
      }

      titanium-chip-multi-select {
        position: relative;
      }

      drop-scrim {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return G`
      <titanium-chip-multi-select
        .supportingText=${this.supportingText}
        .required=${this.required}
        ?disabled=${this.disabled}
        @drop=${t=>{if(this.disabled)return;const e=t.dataTransfer?.files??new FileList;this.handleNewFile(e),t.preventDefault(),this.isOver=!1}}
        @dragover=${t=>{t.preventDefault()}}
        @dragenter=${t=>{this.isOver="Files"===t.dataTransfer?.types?.[0],t.preventDefault()}}
        @dragleave=${()=>{this.isOver=!1}}
        label="${this.label} ${this.files.length?` (${this.files.length})`:""}"
        noItemsText=${this.noItemsText}
        .hasItems=${!!this.files.length}
      >
        <drop-scrim></drop-scrim>
        <md-outlined-button
          ?hidden=${!this.multiple&&!!this.files.length}
          .disabled=${this.disabled}
          @click=${()=>{this.disabled||(this.input.value="",this.input.click())}}
          >${this.addButtonLabel} <md-icon slot="icon">add</md-icon></md-outlined-button
        >
        ${rn(this.files,(t=>t.file.name),(t=>G`<md-input-chip
              label=${It(t.file.name)}
              ?closeable=${!this.disabled}
              @remove=${async e=>{e.preventDefault(),this.confirmDelete?(this.#ve=t,this.confirmDeleteDialog?.show()):this.#ge(t)}}
              @click=${()=>{(t.previewSrc||t.downloadSrc)&&this.imagePreviewDialog.open(t.previewSrc||nn(sn(t.file.name)),t.downloadSrc,t.file.name)}}
            >
              <img draggable="false" slot="icon" src="${t.previewSrc||nn(sn(t.file.name))}" />
            </md-input-chip>`))}
      </titanium-chip-multi-select>

      <label hidden for="upload">
        <input
          hidden
          type="file"
          id="input"
          name="image"
          ?multiple=${this.multiple}
          accept="${this.accept}"
          @change=${t=>{const e=t.target.files;this.handleNewFile(e)}}
        />
      </label>
      <crop-and-save-image-dialog .options=${this.options}></crop-and-save-image-dialog>
      <image-preview-dialog></image-preview-dialog>

      <md-dialog confirm-delete>
        <div slot="headline">${this.confirmDeleteHeader}</div>
        <div slot="content"><p>${this.confirmDeleteText}</p></div>
        <div slot="actions">
          <md-text-button @click=${()=>this.confirmDeleteDialog.close()}>Cancel</md-text-button>
          <md-text-button
            @click=${()=>{this.#ve&&this.#ge(this.#ve),this.confirmDeleteDialog.close()}}
            >Confirm</md-text-button
          >
        </div>
      </md-dialog>
    `}};r([ft({type:Array})],cn.prototype,"files",null),r([ft({type:Boolean,reflect:!0,attribute:"is-over"})],cn.prototype,"isOver",null),r([ft({type:String})],cn.prototype,"previewSrc",null),r([bt("input")],cn.prototype,"input",null),r([bt("image-preview-dialog")],cn.prototype,"imagePreviewDialog",null),r([bt("crop-and-save-image-dialog")],cn.prototype,"cropperDialog",null),r([bt("md-dialog[confirm-delete]")],cn.prototype,"confirmDeleteDialog",null),r([bt("titanium-chip-multi-select")],cn.prototype,"chipMultiSelect",null),r([ft({type:String})],cn.prototype,"accept",null),r([ft({type:Boolean})],cn.prototype,"multiple",null),r([ft({type:Boolean})],cn.prototype,"required",null),r([ft({type:Boolean,reflect:!0})],cn.prototype,"disabled",null),r([ft({type:Boolean})],cn.prototype,"confirmDelete",null),r([ft({type:String})],cn.prototype,"confirmDeleteHeader",null),r([ft({type:String})],cn.prototype,"confirmDeleteText",null),r([ft({type:String})],cn.prototype,"addButtonLabel",null),r([ft({type:String})],cn.prototype,"label",null),r([ft({type:String})],cn.prototype,"supportingText",null),r([ft({type:String})],cn.prototype,"noItemsText",null),r([ft({type:Object})],cn.prototype,"options",null),r([ft({type:Array})],cn.prototype,"croppableImageFormats",null),cn=r([ut("titanium-smart-attachment-input")],cn);class dn{async _getBearerTokenAsync(){return await Mt().getAccessTokenAsync()}}class hn{constructor(t,e){this.status=t.status,this.headers=t.headers,this.blob=e}}class un{constructor(){this.type=null,this.shortType=null}}class pn{constructor(t=new un){this._odataInfo=t}}class mn{static#be(t){const e=new Map;return Object.keys(t).filter((t=>0===t.indexOf("@odata"))).forEach((i=>e.set(i.replace("@odata.",""),t[i]))),e}#ye(t){return null===t.value||void 0===t.value||Array.isArray(t.value)?t:t.value}static#xe(t){return Array.isArray(t.value)?t.value:[]}get odataCount(){return this.metadata.has("count")?this.metadata.get("count"):0}count(){return this.entities.length}firstOrDefault(){return this.count()>0?this.entities[0]:null}toList(){return this.entities}constructor(t,e){this.status=t.status,this.headers=t.headers,this.metadata=mn.#be(e),this.entities=mn.#xe(e),this.entity=0===this.entities.length?this.#ye(e):null}get containsMultipleEntities(){return this.entities.length>0}}const fn=new Map;fn.set(0,"CORS Error"),fn.set(200,"OK"),fn.set(201,"Created"),fn.set(202,"Accepted"),fn.set(203,"Non-Authoritative Information"),fn.set(204,"No Content"),fn.set(205,"Reset Content"),fn.set(206,"Partial Content"),fn.set(300,"Multiple Choices"),fn.set(301,"Moved Permanently"),fn.set(302,"Found"),fn.set(303,"See Other"),fn.set(304,"Not Modified"),fn.set(305,"Use Proxy"),fn.set(306,"Unused"),fn.set(307,"Temporary Redirect"),fn.set(400,"Bad Request"),fn.set(401,"Unauthorized"),fn.set(402,"Payment Required"),fn.set(403,"Forbidden"),fn.set(404,"Not Found"),fn.set(405,"Method Not Allowed"),fn.set(406,"Not Acceptable"),fn.set(407,"Proxy Authentication Required"),fn.set(408,"Request Timeout"),fn.set(409,"Conflict"),fn.set(410,"Gone"),fn.set(411,"Length Required"),fn.set(412,"Precondition Required"),fn.set(413,"Request Entry Too Large"),fn.set(414,"Request-URI Too Long"),fn.set(415,"Unsupported Media Type"),fn.set(416,"Requested Range Not Satisfiable"),fn.set(417,"Expectation Failed"),fn.set(418,"I'm a teapot"),fn.set(429,"Too Many Requests"),fn.set(500,"Internal Server Error"),fn.set(501,"Not Implemented"),fn.set(502,"Bad Gateway"),fn.set(503,"Service Unavailable"),fn.set(504,"Gateway Timeout"),fn.set(505,"HTTP Version Not Supported");class vn{constructor(t,e){this.headers={},this.baseUrl="https://api2.leavitt.com/",this.#we=t,this.addHeader("Content-Type","application/json"),this.#_e=e?.appNameHeaderKey?e?.appNameHeaderKey:"X-LGAppName",this.addHeader(this.#_e,"General")}#we;#_e;addHeader(t,e){this.headers[t]=e}deleteHeader(t){delete this.headers[t]}#ke(t){return this.baseUrl?.endsWith("/")&&t?.startsWith("/")&&Ct&&alert(`API Service Warning: Malformed url, double slashes present. \r\n\r\n${this.baseUrl}${t}`),`${this.baseUrl}${t}`}async uploadFile(t,e,i,r){return new Promise((async(o,s)=>{r?.abortController?.signal&&r?.abortController.signal.aborted&&s(new gn);e&&e.name||s("ArgumentException: Invalid file passed to uploadFile.");try{const n=new XMLHttpRequest;n.onabort=function(){s(new gn)},r?.abortController?.signal&&(r?.abortController.signal.addEventListener("abort",(()=>n.abort())),n.onreadystatechange=function(){4===n.readyState&&r?.abortController?.signal.removeEventListener("abort",(()=>n.abort()))}),n.upload.addEventListener("progress",(t=>{i(t,n)})),n.open("POST",this.#ke(t),!0);const a={...this.headers},l=await this.#we._getBearerTokenAsync();null!==l&&(a.Authorization=`Bearer ${l}`),a["X-LGAttachmentName"]=e.name;for(const t in a)n.setRequestHeader(t,a[t]);n.addEventListener("loadend",(()=>{try{const e={text:()=>n.response,status:n.status};if("blob"===r?.responseType){const i=this.#$e(e,"UPLOAD",t);return o(i)}{const i=this.#ze(e,"UPLOAD",t);return o(i)}}catch(t){return s(t)}}),!1),n.send(e)}catch(e){return Promise.reject(this.#Se(e,"UPLOAD",t))}}))}async postAsync(t,e={},i){e instanceof pn&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers};i?.sendAsFormData&&delete r["Content-Type"];const o=await this.#we._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#ke(t),{method:"POST",body:i?.sendAsFormData?this.#Ae(e):JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#Se(e,"POST",t))}return"blob"===i?.responseType?await this.#$e(s,"POST",t):await this.#ze(s,"POST",t)}async patchAsync(t,e,i){e instanceof pn&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#we._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#ke(t),{method:"PATCH",body:JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#Se(e,"PATCH",t))}return"blob"===i?.responseType?await this.#$e(s,"PATCH",t):await this.#ze(s,"PATCH",t)}async patchReturnDtoAsync(t,e,i){e instanceof pn&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#we._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#ke(t),{method:"PATCH",body:JSON.stringify(e),headers:{...r,Prefer:"return=representation"},signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#Se(e,"PATCH",t))}return"blob"===i?.responseType?await this.#$e(s,"PATCH",t):await this.#ze(s,"PATCH",t)}async deleteAsync(t,e){const i={...this.headers},r=await this.#we._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#ke(t),{method:"DELETE",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#Se(e,"DELETE",t))}return"blob"===e?.responseType?await this.#$e(o,"DELETE",t):await this.#ze(o,"DELETE",t)}async getAsync(t,e){const i={...this.headers},r=await this.#we._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#ke(t),{method:"GET",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#Se(e,"GET",t))}return"blob"===e?.responseType?await this.#$e(o,"GET",t):await this.#ze(o,"GET",t)}#Ce(t,e,i){return i.indexOf(t)===e}async aggregateResponses(t){const e=new Map,i=[],r=t.map((async t=>{try{await t()}catch(t){i.push(t);const r=t.message;e.set(r,(e.get(r)??0)+1)}}));if(await Promise.allSettled(r),e.size>0){const r={type:"HttpError",action:i.map((t=>t.action)).filter(this.#Ce).join(", "),message:`${i.length} of ${t.length} actions failed`,detail:Array.from(e.keys()).map((t=>`${e.get(t)} error(s):  ${t}`)).join("\n"),baseUrl:i.map((t=>t.baseUrl)).filter(this.#Ce).join(", "),path:i.map((t=>t.path)).filter(this.#Ce).join(", ")};return Promise.reject(r)}}#Se(t,e,i,r=void 0){const o=t?.message?.includes("Failed to fetch")?"Network error. Check your connection and try again.":"AbortError"===t?.name?"Abort error. Request has been aborted.":t?.message||t;return{type:"HttpError",statusCode:r,baseUrl:this.baseUrl,message:o,action:e,path:i}}async#$e(t,e,i){try{if(0===t.status||t.status>=400&&t.status<=600){const r=await t.text(),o=r.length?JSON.parse(r):{},s=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||fn.get(t.status)||"unknown";o?.details&&console.warn(o.details);const n={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:s,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(n)}{const e=await t.blob();return Promise.resolve(new hn(t,e))}}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}async#ze(t,e,i){const r=await t.text();let o;try{if(o=r.length?JSON.parse(r):{},0===t.status||t.status>=400&&t.status<=600){const r=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||fn.get(t.status)||"unknown";o?.details&&console.warn(o.details);const s={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:r,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(s)}return Promise.resolve(new mn(t,o))}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}#Ae(t,e,i){const r=e||new FormData;let o;for(const e in t)if(Object.hasOwn(t,e)){if(void 0===t[e])continue;o=i?t[e]instanceof File?i:i+"["+e+"]":e,"object"!=typeof t[e]||t[e]instanceof File?r.append(o,t[e]):this.#Ae(t[e],r,o)}return r}}class gn extends Error{constructor(){super(...arguments),this.name="AbortError",this.message="Aborted"}}function bn(t){const e=()=>{t?.open&&t.close("navigation-close")};t.i=e,window.addEventListener("popstate",e,!1)}function yn(t){t?.i&&(window.removeEventListener("popstate",t.i,!1),t.i=void 0)}const xn=new vn(new dn);xn.baseUrl=Ct?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",xn.addHeader("X-LGAppName","IssueTracking"),Object.freeze(xn);let wn=class extends(Tt(dt)){#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}#Te;get snackbar(){return this.#Te}set snackbar(t){this.#Te=t}#Ee;get textArea(){return this.#Ee}set textArea(t){this.#Ee=t}#Ie;get imageInput(){return this.#Ie}set imageInput(t){this.#Ie=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.imageInput?.reset(),this.textArea?.reset()}async#Pe(){if(!this.textArea.reportValidity()||this.isLoading)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Bug",Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map((t=>t.file))};try{const e=xn.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new Te(e)),this.loadWhile(e);if(!(await e).entity)throw new Error("Error submitting problem. Please try again.");document.dispatchEvent(new Ae("",{overrideTemplate:G`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset(),this.dialog.close("done")}catch(t){this.dispatchEvent(new Ae(t))}}static{this.styles=[gs,_s,d`
      :host {
        display: grid;
        gap: 24px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      md-outlined-text-field {
        resize: none;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return G`
      <md-dialog
        @open=${t=>{bn(t.target),fs(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue)return yn(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
      >
        <div slot="headline">Report a problem</div>
        <form slot="content" method="dialog">
          <p>
            Please be specific and provide screenshots of the issue if possible in your report. Your report goes directly to our engineering teams so it can be
            addressed as soon as possible.
          </p>
          <md-outlined-text-field
            ?disabled=${this.isLoading}
            type="textarea"
            problem
            label="Describe the issue"
            rows="5"
            required
            outlined
          ></md-outlined-text-field>
          <titanium-smart-attachment-input
            ?disabled=${this.isLoading}
            multiple
            label="Supporting files"
            noItemsText="No files"
            addButtonLabel="Add file"
          ></titanium-smart-attachment-input>
        </form>
        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>

        <div slot="actions">
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.dialog.close("cancel")}> Cancel </md-text-button>
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#Pe()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};r([bt("md-dialog")],wn.prototype,"dialog",null),r([bt("titanium-snackbar-stack")],wn.prototype,"snackbar",null),r([bt("md-outlined-text-field")],wn.prototype,"textArea",null),r([bt("titanium-smart-attachment-input")],wn.prototype,"imageInput",null),wn=r([ut("report-a-problem-dialog")],wn);const _n=new vn(new dn);_n.baseUrl=Ct?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",_n.addHeader("X-LGAppName","IssueTracking"),Object.freeze(_n);let kn=class extends(Tt(dt)){#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}#Te;get snackbar(){return this.#Te}set snackbar(t){this.#Te=t}#Ee;get textArea(){return this.#Ee}set textArea(t){this.#Ee=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.textArea?.reset()}async#Pe(){if(!this.textArea.reportValidity()||this.isLoading||!this.textArea.value)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Feedback",Description:this.textArea.value,Attachments:[]};try{const e=_n.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new Te(e)),this.loadWhile(e);if(!(await e).entity)throw new Error("Error submitting feedback. Please try again.");document.dispatchEvent(new Ae("We appreciate your input, and we will promptly conduct a review!")),this.reset(),this.dialog.close("done")}catch(t){this.dispatchEvent(new Ae(t))}}static{this.styles=[gs,_s,d`
      :host {
        display: grid;
        gap: 24px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      md-outlined-text-field {
        resize: none;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return G`
      <md-dialog
        @open=${t=>{bn(t.target),fs(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue)return yn(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
      >
        <div slot="headline">Provide feedback</div>
        <form slot="content" method="dialog">
          <p>
            User feedback is a valuable tool that empowers our users to share their thoughts, suggestions, and concerns, helping us improve the overall user
            experience of our websites and tools. We welcome and appreciate user feedback as it enables us to make informed decisions and enhance our website
            based on the needs and expectations of our users.
          </p>
          <p>
            Please be specific and provide as much detail as possible in your feedback. Your feedback goes directly to our development teams so it can be
            carefully reviewed and planned into the next development cycle.
          </p>
          <md-outlined-text-field ?disabled=${this.isLoading} type="textarea" feedback label="Feedback" rows="5" required outlined></md-outlined-text-field>
        </form>
        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>

        <div slot="actions">
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.dialog.close("cancel")}> Cancel </md-text-button>
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#Pe()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};r([bt("md-dialog")],kn.prototype,"dialog",null),r([bt("titanium-snackbar-stack")],kn.prototype,"snackbar",null),r([bt("md-outlined-text-field")],kn.prototype,"textArea",null),kn=r([ut("provide-feedback-dialog")],kn);const $n=d`:host{--_container-height: var(--md-outlined-icon-button-container-height, 40px);--_container-width: var(--md-outlined-icon-button-container-width, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_disabled-outline-color: var(--md-outlined-icon-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-icon-button-disabled-outline-opacity, 0.12);--_focus-icon-color: var(--md-outlined-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-outlined-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-outlined-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_icon-color: var(--md-outlined-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-outlined-icon-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-icon-button-outline-width, 1px);--_pressed-icon-color: var(--md-outlined-icon-button-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-outlined-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-outlined-icon-button-container-shape-start-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-icon-button-container-shape-start-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-icon-button-container-shape-end-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-icon-button-container-shape-end-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.outlined{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_outline-color);border-width:var(--_outline-width)}.outlined:hover{color:var(--_hover-icon-color)}.outlined:focus{color:var(--_focus-icon-color)}.outlined:active{color:var(--_pressed-icon-color)}.outlined:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.outlined:is(:disabled,[aria-disabled=true])::before{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.outlined:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}.selected:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-outline-opacity: 1}.selected::before{border-color:CanvasText;border-width:var(--_outline-width)}.selected:is(:disabled,[aria-disabled=true])::before{border-color:GrayText;opacity:1}}
`;let zn=class extends Pi{getRenderClasses(){return{...super.getRenderClasses(),outlined:!0}}};zn.styles=[Oi,$n],zn=r([ut("md-outlined-icon-button")],zn);const Sn=new Set(Object.values(Qe));class An extends dt{get items(){return this.listController.items}constructor(){super(),this.listController=new Ze({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>Sn.has(t),isActivatable:t=>!t.disabled&&"text"!==t.type}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return G`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}r([wt({flatten:!0})],An.prototype,"slotItems",void 0);const Cn=d`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;let Tn=class extends An{};Tn.styles=[Cn],Tn=r([ut("md-list")],Tn);class En extends dt{constructor(){super(...arguments),this.multiline=!1}render(){return G`
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
    `}handleTextSlotChange(){let t=!1,e=0;for(const i of this.textSlots)if(In(i)&&(e+=1),e>1){t=!0;break}this.multiline=t}}function In(t){for(const e of t.assignedNodes({flatten:!0})){const t=e.nodeType===Node.ELEMENT_NODE,i=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(t||i)return!0}return!1}r([ft({type:Boolean,reflect:!0})],En.prototype,"multiline",void 0),r([xt(".text slot")],En.prototype,"textSlots",void 0);const Pn=d`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;let On=class extends En{};On.styles=[Pn],On=r([ut("md-item")],On);const Mn=de(dt);class Rn extends Mn{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&"link"!==this.type}willUpdate(t){this.href&&(this.type="link"),super.willUpdate(t)}render(){return this.renderListItem(G`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const e="link"===this.type;let i;switch(this.type){case"link":i=Ai`a`;break;case"button":i=Ai`button`;break;default:i=Ai`li`}const r="text"!==this.type,o=e&&this.target?this.target:X;return Ti`
      <${i}
        id="item"
        tabindex="${this.isDisabled||!r?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||X}
        aria-checked=${this.ariaChecked||X}
        aria-expanded=${this.ariaExpanded||X}
        aria-haspopup=${this.ariaHasPopup||X}
        class="list-item ${Jt(this.getRenderClasses())}"
        href=${this.href||X}
        target=${o}
        @focus=${this.onFocus}
      >${t}</${i}>
    `}renderRipple(){return"text"===this.type?X:G` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return"text"===this.type?X:G` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(t){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return G`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){-1===this.tabIndex&&this.dispatchEvent(new Event("request-activation",{bubbles:!0,composed:!0}))}focus(){this.listItemRoot?.focus()}click(){this.listItemRoot?this.listItemRoot.click():super.click()}}Rn.shadowRootOptions={...dt.shadowRootOptions,delegatesFocus:!0},r([ft({type:Boolean,reflect:!0})],Rn.prototype,"disabled",void 0),r([ft({reflect:!0})],Rn.prototype,"type",void 0),r([ft({type:Boolean,attribute:"md-list-item",reflect:!0})],Rn.prototype,"isListItem",void 0),r([ft()],Rn.prototype,"href",void 0),r([ft()],Rn.prototype,"target",void 0),r([bt(".list-item")],Rn.prototype,"listItemRoot",void 0);const Bn=d`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;let Nn=class extends Rn{};Nn.styles=[Bn],Nn=r([ut("md-list-item")],Nn);var jn=function(){return jn=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},jn.apply(this,arguments)},Ln=function(){function t(t,e,i){var r=this;this.endVal=e,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var i=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=i?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(t){var e,i,o,s,n=t<0?"-":"";e=Math.abs(t).toFixed(r.options.decimalPlaces);var a=(e+="").split(".");if(i=a[0],o=a.length>1?r.options.decimal+a[1]:"",r.options.useGrouping){s="";for(var l=3,c=0,d=0,h=i.length;d<h;++d)r.options.useIndianSeparators&&4===d&&(l=2,c=1),0!==d&&c%l==0&&(s=r.options.separator+s),c++,s=i[h-d-1]+s;i=s}return r.options.numerals&&r.options.numerals.length&&(i=i.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]})),o=o.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]}))),n+r.options.prefix+i+o+r.options.suffix},this.easeOutExpo=function(t,e,i,r){return i*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=jn(jn({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return r.handleScroll(r)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),r=i.top+window.pageYOffset,o=i.top+i.height+window.pageYOffset;o<e&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var i=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,i):"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();let Fn=class extends dt{#Oe;get major(){return this.#Oe}set major(t){this.#Oe=t}#Me;get minor(){return this.#Me}set minor(t){this.#Me=t}#Re;get rev(){return this.#Re}set rev(t){this.#Re=t}#Be;get downloads(){return this.#Be}set downloads(t){this.#Be=t}#Ne="@leavittsoftware%2Fweb";async firstUpdated(){const t=await this.#je(this.#Ne);if(t){const[e,i,r]=t.version?.split(".")?.map((t=>Number(t)))??[],o=new Ln(this.major,e,{suffix:".",duration:1}),s=new Ln(this.minor,i,{suffix:".",duration:1}),n=new Ln(this.rev,r,{duration:1});o.start(),setTimeout((()=>{s.start()}),500),setTimeout((()=>{n.start()}),1e3);new Ln(this.downloads,t.downloads??0,{useGrouping:!0,suffix:" weekly downloads"}).start()}}async#je(t){try{const e=await fetch(`https://api.npmjs.org/versions/${t}/last-week`,{method:"GET"}),i=await e.text(),r=i.length?JSON.parse(i):{},o=Object.entries(r.downloads).map((t=>({version:t?.[0]?.split(".").map((t=>+t+1e5)).join("."),downloads:t?.[1]}))).sort(((t,e)=>t.version.localeCompare(e.version))).map((t=>({...t,version:t.version?.split(".").map((t=>+t-1e5)).join(".")})));return o?.pop()}catch(t){console.warn(t)}return null}static{this.styles=[d`
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
    `]}render(){return G`
      <stats-container>
        <info-chip tertiary>
          <span>v<span class="major"></span><span class="minor"></span><span class="rev"></span></span
        ></info-chip>

        <info-chip>
          <span slot="label"><span class="downloads"></span></span
        ></info-chip>
      </stats-container>
    `}};r([bt("span.major")],Fn.prototype,"major",null),r([bt("span.minor")],Fn.prototype,"minor",null),r([bt("span.rev")],Fn.prototype,"rev",null),r([bt("span.downloads")],Fn.prototype,"downloads",null),Fn=r([ut("npm-stats")],Fn);class Un extends CustomEvent{static{this.eventName="change-route"}constructor(t){super(Un.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class Dn extends CustomEvent{static{this.eventName="redirect-route"}constructor(t){super(Dn.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class qn extends CustomEvent{static{this.eventName="site-error"}constructor(t){super(qn.eventName,{bubbles:!0,composed:!0,detail:t})}}class Hn extends Event{static{this.eventType="confirm-dialog-open"}constructor(t,e){super(Hn.eventType,{bubbles:!0,composed:!0}),this.header=t,this.text=e,this.dialogResult=new Promise((t=>{this.resolver=t}))}}const Vn=d`
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
`;var Gn=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Wn=na,Xn=Zn,Yn=function(t){return ta(Zn(t))},Kn=ta,Jn=sa,Qn=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Zn(t){for(var e,i=[],r=0,o=0,s="";null!=(e=Qn.exec(t));){var n=e[0],a=e[1],l=e.index;if(s+=t.slice(o,l),o=l+n.length,a)s+=a[1];else{s&&(i.push(s),s="");var c=e[2],d=e[3],h=e[4],u=e[5],p=e[6],m=e[7],f="+"===p||"*"===p,v="?"===p||"*"===p,g=c||"/",b=h||u||(m?".*":"[^"+g+"]+?");i.push({name:d||r++,prefix:c||"",delimiter:g,optional:v,repeat:f,pattern:ia(b)})}}return o<t.length&&(s+=t.substr(o)),s&&i.push(s),i}function ta(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^"+t[i].pattern+"$"));return function(i){for(var r="",o=i||{},s=0;s<t.length;s++){var n=t[s];if("string"!=typeof n){var a,l=o[n.name];if(null==l){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to be defined')}if(Gn(l)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(a=encodeURIComponent(l[c]),!e[s].test(a))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received "'+a+'"');r+=(0===c?n.prefix:n.delimiter)+a}}else{if(a=encodeURIComponent(l),!e[s].test(a))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+a+'"');r+=n.prefix+a}}else r+=n}return r}}function ea(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function ia(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function ra(t,e){return t.keys=e,t}function oa(t){return t.sensitive?"":"i"}function sa(t,e){for(var i=(e=e||{}).strict,r=!1!==e.end,o="",s=t[t.length-1],n="string"==typeof s&&/\/$/.test(s),a=0;a<t.length;a++){var l=t[a];if("string"==typeof l)o+=ea(l);else{var c=ea(l.prefix),d=l.pattern;l.repeat&&(d+="(?:"+c+d+")*"),o+=d=l.optional?c?"(?:"+c+"("+d+"))?":"("+d+")?":c+"("+d+")"}}return i||(o=(n?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":i&&n?"":"(?=\\/|$)",new RegExp("^"+o,oa(e))}function na(t,e,i){return Gn(e=e||[])?i||(i={}):(i=e,e=[]),t instanceof RegExp?function(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var r=0;r<i.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return ra(t,e)}(t,e):Gn(t)?function(t,e,i){for(var r=[],o=0;o<t.length;o++)r.push(na(t[o],e,i).source);return ra(new RegExp("(?:"+r.join("|")+")",oa(i)),e)}(t,e,i):function(t,e,i){for(var r=Zn(t),o=sa(r,i),s=0;s<r.length;s++)"string"!=typeof r[s]&&e.push(r[s]);return ra(o,e)}(t,e,i)}Wn.parse=Xn,Wn.compile=Yn,Wn.tokensToFunction=Kn,Wn.tokensToRegExp=Jn;var aa,la="undefined"!=typeof document,ca="undefined"!=typeof window,da="undefined"!=typeof history,ha="undefined"!=typeof process,ua=la&&document.ontouchstart?"touchstart":"click",pa=ca&&!(!window.history.location&&!window.location);function ma(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function fa(t,e){if("function"==typeof t)return fa.call(this,"*",t);if("function"==typeof e)for(var i=new ba(t,null,this),r=1;r<arguments.length;++r)this.callbacks.push(i.middleware(arguments[r]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function va(t){if(!t.handled){var e=this,i=e._window;(e._hashbang?pa&&this._getBase()+i.location.hash.replace("#!",""):pa&&i.location.pathname+i.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,pa&&(i.location.href=t.canonicalPath))}}function ga(t,e,i){var r=this.page=i||fa,o=r._window,s=r._hashbang,n=r._getBase();"/"===t[0]&&0!==t.indexOf(n)&&(t=n+(s?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var l=new RegExp("^"+function(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(n));if(this.path=t.replace(l,"")||"/",s&&(this.path=this.path.replace("#!","")||"/"),this.title=la&&o.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?r._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!s){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=r._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function ba(t,e,i){var r=this.page=i||ya,o=e||{};o.strict=o.strict||r._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=Wn(this.path,this.keys=[],o)}ma.prototype.configure=function(t){var e=t||{};this._window=e.window||ca&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&ca,this._click=!1!==e.click&&la,this._hashbang=!!e.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):ca&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(ua,this.clickHandler,!1):la&&i.document.removeEventListener(ua,this.clickHandler,!1),this._hashbang&&ca&&!da?i.addEventListener("hashchange",this._onpopstate,!1):ca&&i.removeEventListener("hashchange",this._onpopstate,!1)},ma.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},ma.prototype._getBase=function(){var t=this._base;if(t)return t;var e=ca&&this._window&&this._window.location;return ca&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},ma.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},ma.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var i;if(this._running=!0,pa){var r=this._window.location;i=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(i,null,!0,e.dispatch)}},ma.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(ua,this.clickHandler,!1),ca&&t.removeEventListener("popstate",this._onpopstate,!1),ca&&t.removeEventListener("hashchange",this._onpopstate,!1)}},ma.prototype.show=function(t,e,i,r){var o=new ga(t,e,this),s=this.prevContext;return this.prevContext=o,this.current=o.path,!1!==i&&this.dispatch(o,s),!1!==o.handled&&!1!==r&&o.pushState(),o},ma.prototype.back=function(t,e){var i=this;if(this.len>0){var r=this._window;da&&r.history.back(),this.len--}else t?setTimeout((function(){i.show(t,e)})):setTimeout((function(){i.show(i._getBase(),e)}))},ma.prototype.redirect=function(t,e){var i=this;"string"==typeof t&&"string"==typeof e&&fa.call(this,t,(function(t){setTimeout((function(){i.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){i.replace(t)}),0)},ma.prototype.replace=function(t,e,i,r){var o=new ga(t,e,this),s=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=i,o.save(),!1!==r&&this.dispatch(o,s),o},ma.prototype.dispatch=function(t,e){var i=0,r=0,o=this;function s(){var e=o.callbacks[i++];if(t.path===o.current)return e?void e(t,s):va.call(o,t);t.handled=!1}e?function t(){var i=o.exits[r++];if(!i)return s();i(e,t)}():s()},ma.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var i=new ba(t,null,this),r=1;r<arguments.length;++r)this.exits.push(i.middleware(arguments[r]))},ma.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,i=t.path||(t.composedPath?t.composedPath():null);if(i)for(var r=0;r<i.length;r++)if(i[r].nodeName&&"A"===i[r].nodeName.toUpperCase()&&i[r].href){e=i[r];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var o="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var s=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==s)&&!(s&&s.indexOf("mailto:")>-1)&&!(o?e.target.baseVal:e.target)&&(o||this.sameOrigin(e.href))){var n=o?e.href.baseVal:e.pathname+e.search+(e.hash||"");n="/"!==n[0]?"/"+n:n,ha&&n.match(/^\/[a-zA-Z]:\//)&&(n=n.replace(/^\/[a-zA-Z]:\//,"/"));var a=n,l=this._getBase();0===n.indexOf(l)&&(n=n.substr(l.length)),this._hashbang&&(n=n.replace("#!","")),(!l||a!==n||pa&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},ma.prototype._onpopstate=(aa=!1,ca?(la&&"complete"===document.readyState?aa=!0:window.addEventListener("load",(function(){setTimeout((function(){aa=!0}),0)})),function(t){if(aa){var e=this;if(t.state){var i=t.state.path;e.replace(i,t.state)}else if(pa){var r=e._window.location;e.show(r.pathname+r.search+r.hash,void 0,void 0,!1)}}}):function(){}),ma.prototype._which=function(t){return null==(t=t||ca&&this._window.event).which?t.button:t.which},ma.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&pa)return new URL(t,e.location.toString());if(la){var i=e.document.createElement("a");return i.href=t,i}},ma.prototype.sameOrigin=function(t){if(!t||!pa)return!1;var e=this._toURL(t),i=this._window.location;return i.protocol===e.protocol&&i.hostname===e.hostname&&(i.port===e.port||""===i.port&&(80==e.port||443==e.port))},ma.prototype._samePath=function(t){if(!pa)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},ma.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},ga.prototype.pushState=function(){var t=this.page,e=t._window,i=t._hashbang;t.len++,da&&e.history.pushState(this.state,this.title,i&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},ga.prototype.save=function(){var t=this.page;da&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},ba.prototype.middleware=function(t){var e=this;return function(i,r){if(e.match(i.path,i.params))return i.routePath=e.path,t(i,r);r()}},ba.prototype.match=function(t,e){var i=this.keys,r=t.indexOf("?"),o=~r?t.slice(0,r):t,s=this.regexp.exec(decodeURIComponent(o));if(!s)return!1;delete e[0];for(var n=1,a=s.length;n<a;++n){var l=i[n-1],c=this.page._decodeURLEncodedURIComponent(s[n]);void 0===c&&hasOwnProperty.call(e,l.name)||(e[l.name]=c)}return!0};var ya=function t(){var e=new ma;function i(){return fa.apply(e,arguments)}return i.callbacks=e.callbacks,i.exits=e.exits,i.base=e.base.bind(e),i.strict=e.strict.bind(e),i.start=e.start.bind(e),i.stop=e.stop.bind(e),i.show=e.show.bind(e),i.back=e.back.bind(e),i.redirect=e.redirect.bind(e),i.replace=e.replace.bind(e),i.dispatch=e.dispatch.bind(e),i.exit=e.exit.bind(e),i.configure=e.configure.bind(e),i.sameOrigin=e.sameOrigin.bind(e),i.clickHandler=e.clickHandler.bind(e),i.create=t,Object.defineProperty(i,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(i,"current",{get:function(){return e.current},set:function(t){e.current=t}}),i.Context=ga,i.Route=ba,i}(),xa=ya,wa=ya;xa.default=wa;const _a=new URL(new URL("WQLuWBBr.svg",import.meta.url).href,import.meta.url).href,ka=new URL(new URL("BTVD-IEO.svg",import.meta.url).href,import.meta.url).href;let $a=class extends dt{#Le;get page(){return this.#Le}set page(t){this.#Le=t}#Fe="";get fatalErrorMessage(){return this.#Fe}set fatalErrorMessage(t){this.#Fe=t}#Ue=!1;get isWideViewPort(){return this.#Ue}set isWideViewPort(t){this.#Ue=t}#De=!1;get collapseMainMenu(){return this.#De}set collapseMainMenu(t){this.#De=t}#qe;get confirmDialog(){return this.#qe}set confirmDialog(t){this.#qe=t}#He;get loadingIndicator(){return this.#He}set loadingIndicator(t){this.#He=t}#Ve;get drawer(){return this.#Ve}set drawer(t){this.#Ve=t}get themePreference(){return localStorage.getItem("theme-preference")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}set themePreference(t){localStorage.setItem("theme-preference",t),this.#Ge()}#Ge(){document.firstElementChild?.setAttribute("data-theme",this.themePreference)}async firstUpdated(){this.#Ge(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(({matches:t})=>{this.themePreference=t?"dark":"light",this.#Ge()})),((t,e)=>{const i=window.matchMedia(t);i.addListener((t=>e(t.matches))),e(i.matches)})("(max-width: 920px)",(async t=>{this.isWideViewPort=!t,this.isWideViewPort&&(this.drawer.closeQuick(),this.collapseMainMenu=!1)})),await this.loadingIndicator.updateComplete,this.addEventListener(Hn.eventType,(async t=>{await import("./Cz_KHiLD.js"),this.confirmDialog.handleEvent(t)})),this.addEventListener(Un.eventName,(t=>{xa.show(t.detail.path)})),this.addEventListener(Dn.eventName,(t=>{xa.redirect(t.detail.path)})),this.addEventListener(qn.eventName,(t=>{this.fatalErrorMessage=t.detail,this.#We("error")})),xa("*",((t,e)=>{this.drawer?.close(),e()})),xa("/",(async()=>{xa.show("/getting-started")})),xa("/getting-started",(()=>this.#We("getting-started",(()=>import("./jUcPW0km.js"))))),xa("/titanium-full-page-loading-indicator",(()=>this.#We("titanium-full-page-loading-indicator",(()=>import("./LhyXJO2z.js"))))),xa("/available-cdn-icons",(()=>this.#We("available-cdn-icons",(()=>import("./zlxWj9F2.js"))))),xa("/leavitt-company-select",(()=>this.#We("leavitt-company-select",(()=>import("./rLHkeMK_.js"))))),xa("/leavitt-file-explorer",(()=>this.#We("leavitt-file-explorer",(()=>import("./BQEqfvMs.js"))))),xa("/titanium-date-range-selector",(()=>this.#We("titanium-date-range-selector",(()=>import("./C33Qo5hP.js"))))),xa("/titanium-data-table-item",(()=>this.#We("titanium-data-table-item",(()=>import("./cw7B1PuK.js"))))),xa("/leavitt-person-select",(()=>this.#We("leavitt-person-select",(()=>import("./D7x8L3P-.js"))))),xa("/leavitt-person-company-select",(()=>this.#We("leavitt-person-company-select",(()=>import("./CCH4dUK7.js"))))),xa("/leavitt-person-group-select",(()=>this.#We("leavitt-person-group-select",(()=>import("./BrAPQtGq.js"))))),xa("/leavitt-user-feedback",(()=>this.#We("leavitt-user-feedback",(()=>import("./hIfsuFsq.js"))))),xa("/profile-picture",(()=>this.#We("profile-picture",(()=>import("./C9GSFEz3.js"))))),xa("/profile-picture-menu",(()=>this.#We("profile-picture-menu",(()=>import("./DcCRtTa2.js"))))),xa("/titanium-access-denied-page",(()=>this.#We("titanium-access-denied-page",(()=>import("./BylbVzrn.js"))))),xa("/titanium-data-table",(()=>this.#We("titanium-data-table",(()=>import("./D-EjJAY_.js"))))),xa("/titanium-data-table-item",(()=>this.#We("titanium-data-table-item",(()=>import("./cw7B1PuK.js"))))),xa("/titanium-drawer",(()=>this.#We("titanium-drawer",(()=>import("./20yhSV9F.js"))))),xa("/titanium-error-page",(()=>this.#We("titanium-error-page",(()=>import("./Du7YPIMZ.js"))))),xa("/titanium-address-input",(()=>this.#We("titanium-address-input",(()=>import("./Dnd18ruq.js"))))),xa("/titanium-header",(()=>this.#We("titanium-header",(()=>import("./9Gty6l6L.js"))))),xa("/titanium-icon-picker",(()=>this.#We("titanium-icon-picker",(()=>import("./DgcJdVib.js"))))),xa("/titanium-header",(()=>this.#We("titanium-header",(()=>import("./9Gty6l6L.js"))))),xa("/titanium-chip-multi-select",(()=>this.#We("titanium-chip-multi-select",(()=>import("./B6t931er.js"))))),xa("/titanium-input-validator",(()=>this.#We("titanium-input-validator",(()=>import("./DwLb97B0.js"))))),xa("/titanium-data-table-header",(()=>this.#We("titanium-data-table-header",(()=>import("./DHxip0XQ.js"))))),xa("/titanium-full-page-loading-indicator",(()=>this.#We("titanium-full-page-loading-indicator",(()=>import("./LhyXJO2z.js"))))),xa("/titanium-page-control",(()=>this.#We("titanium-page-control",(()=>import("./CGf4OAzl.js"))))),xa("/titanium-smart-attachment-input",(()=>this.#We("titanium-smart-attachment-input",(()=>import("./CusDrhHC.js"))))),xa("/titanium-date-input",(()=>this.#We("titanium-date-input",(()=>import("./8v-3xozR.js"))))),xa("/titanium-search-input",(()=>this.#We("titanium-search-input",(()=>import("./BPeHV8z8.js"))))),xa("/titanium-toolbar",(()=>this.#We("titanium-toolbar",(()=>import("./DEK3AO0B.js"))))),xa("/titanium-styles",(()=>this.#We("titanium-styles",(()=>import("./BGy1_SXi.js"))))),xa("/titanium-snackbar",(()=>this.#We("titanium-snackbar",(()=>import("./D5cFeQHF.js"))))),xa("/titanium-card",(()=>this.#We("titanium-card",(()=>import("./DBXhR4Rv.js"))))),xa("/titanium-chip",(()=>this.#We("titanium-chip",(()=>import("./B2eTo9nS.js"))))),xa("/titanium-youtube-input",(()=>this.#We("titanium-youtube-input",(()=>import("./DVyWI1w4.js"))))),xa("/titanium-show-hide",(()=>this.#We("titanium-show-hide",(()=>import("./wMbG_Zq4.js"))))),xa("/titanium-duration-input",(()=>this.#We("titanium-duration-input",(()=>import("./D0Quc37N.js"))))),xa("/titanium-profile-picture-stack",(()=>this.#We("titanium-profile-picture-stack",(()=>import("./DwE5vbqE.js"))))),xa("/titanium-confirm-dialog",(()=>this.#We("titanium-confirm-dialog",(()=>import("./Cmeq5zi7.js"))))),xa("*",(()=>{this.fatalErrorMessage="We were unable to find the page you are looking for",this.#We("error")})),xa.start()}async#We(t,e){this.page=t;try{const t=e?.();t&&this.dispatchEvent(new Te(t)),await t}catch(t){console.warn(t),this.fatalErrorMessage=t,this.page="error"}}static{this.styles=[Vn,_s,d`
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
    `]}render(){return G`<titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
      <user-manager disableAutoload></user-manager>

      <titanium-toolbar>
        <md-icon-button
          title="Main menu"
          @click=${()=>{this.isWideViewPort?this.collapseMainMenu=!this.collapseMainMenu:this.drawer?.open()}}
        >
          <md-icon>menu</md-icon>
        </md-icon-button>
        <a logo href="/" title="Back to home"><img src=${"dark"===this.themePreference?ka:_a} /></a>
        <h3 title="Leavitt book" @click=${()=>xa.show("/")} main-title>Leavitt book</h3>
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
        <a slot="header" logo href="/" title="Back to home"><img src=${"dark"===this.themePreference?ka:_a} /></a>
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
        <a
          slot="footer"
          href="#report-a-bug"
          @click=${t=>{t.preventDefault(),this.shadowRoot?.querySelector("report-a-problem-dialog")?.show()}}
          >Report a bug</a
        >
        <a
          slot="footer"
          href="#provide-feedback"
          @click=${t=>{t.preventDefault(),this.shadowRoot?.querySelector("provide-feedback-dialog")?.show()}}
          >Feedback</a
        >
        <a slot="footer" href="/user-feedback">Terms</a>
      </titanium-drawer>

      <main-content>
        ${"getting-started"===this.page?G`<getting-started></getting-started>`:X}
        ${"error"===this.page?G`<div>Oops, something went wrong.</div>`:X}

        <!-- Stories -->
        ${"available-cdn-icons"===this.page?G` <available-cdn-icons-demo large ?isActive=${"available-cdn-icons"===this.page}></available-cdn-icons-demo> `:X}
        ${"titanium-date-range-selector"===this.page?G` <titanium-date-range-selector-demo large ?isActive=${"titanium-date-range-selector"===this.page}></titanium-date-range-selector-demo> `:X}
        ${"leavitt-person-select"===this.page?G` <leavitt-person-select-demo large ?isActive=${"leavitt-person-select"===this.page}></leavitt-person-select-demo> `:X}
        ${"leavitt-company-select"===this.page?G` <leavitt-company-select-demo large ?isActive=${"leavitt-company-select"===this.page}></leavitt-company-select-demo> `:X}
        ${"leavitt-file-explorer"===this.page?G` <leavitt-file-explorer-demo large ?isActive=${"leavitt-file-explorer"===this.page}></leavitt-file-explorer-demo> `:X}
        ${"leavitt-user-feedback"===this.page?G` <leavitt-user-feedback-demo large ?isActive=${"leavitt-user-feedback"===this.page}></leavitt-user-feedback-demo> `:X}
        ${"leavitt-person-company-select"===this.page?G` <leavitt-person-company-select-demo large ?isActive=${"leavitt-person-company-select"===this.page}></leavitt-person-company-select-demo> `:X}
        ${"leavitt-person-group-select"===this.page?G` <leavitt-person-group-select-demo large ?isActive=${"leavitt-person-group-select"===this.page}></leavitt-person-group-select-demo> `:X}
        ${"titanium-drawer"===this.page?G` <titanium-drawer-demo ?isActive=${"titanium-drawer"===this.page}></titanium-drawer-demo> `:X}
        ${"profile-picture"===this.page?G` <profile-picture-demo ?isActive=${"profile-picture"===this.page}></profile-picture-demo> `:X}
        ${"profile-picture-menu"===this.page?G` <profile-picture-menu-demo large ?isActive=${"profile-picture-menu"===this.page}></profile-picture-menu-demo> `:X}
        ${"titanium-input-validator"===this.page?G` <titanium-input-validator-demo large ?isActive=${"titanium-input-validator"===this.page}></titanium-input-validator-demo> `:X}
        ${"titanium-data-table"===this.page?G` <titanium-data-table-demo large ?isActive=${"titanium-data-table"===this.page}></titanium-data-table-demo> `:X}
        ${"titanium-data-table-header"===this.page?G` <titanium-data-table-header-demo large ?isActive=${"titanium-data-table-header"===this.page}></titanium-data-table-header-demo> `:X}
        ${"titanium-data-table-item"===this.page?G` <titanium-data-table-item-demo large ?isActive=${"titanium-data-table-item"===this.page}></titanium-data-table-item-demo> `:X}
        ${"titanium-access-denied-page"===this.page?G` <titanium-access-denied-page-demo large ?isActive=${"titanium-access-denied-page"===this.page}></titanium-access-denied-page-demo> `:X}
        ${"titanium-address-input"===this.page?G` <titanium-address-input-demo large ?isActive=${"titanium-address-input"===this.page}></titanium-address-input-demo> `:X}
        ${"titanium-error-page"===this.page?G` <titanium-error-page-demo large ?isActive=${"titanium-error-page"===this.page}></titanium-error-page-demo> `:X}
        ${"titanium-header"===this.page?G` <titanium-header-demo ?isActive=${"titanium-header"===this.page}></titanium-header-demo> `:X}
        ${"titanium-icon"===this.page?G` <titanium-icon-demo ?isActive=${"titanium-icon"===this.page}></titanium-icon-demo> `:X}
        ${"titanium-icon-picker"===this.page?G` <titanium-icon-picker-demo large ?isActive=${"titanium-icon-picker"===this.page}></titanium-icon-picker-demo> `:X}
        ${"titanium-page-control"===this.page?G` <titanium-page-control-demo large ?isActive=${"titanium-page-control"===this.page}></titanium-page-control-demo> `:X}
        ${"titanium-date-input"===this.page?G` <titanium-date-input-demo large ?isActive=${"titanium-date-input"===this.page}></titanium-date-input-demo> `:X}
        ${"titanium-search-input"===this.page?G` <titanium-search-input-demo large ?isActive=${"titanium-search-input"===this.page}></titanium-search-input-demo> `:X}
        ${"titanium-toolbar"===this.page?G` <titanium-toolbar-demo large ?isActive=${"titanium-toolbar"===this.page}></titanium-toolbar-demo> `:X}
        ${"titanium-full-page-loading-indicator"===this.page?G`
              <titanium-full-page-loading-indicator-demo
                large
                ?isActive=${"titanium-full-page-loading-indicator"===this.page}
              ></titanium-full-page-loading-indicator-demo>
            `:X}
        ${"titanium-loading-indicator"===this.page?G` <titanium-loading-indicator-demo large ?isActive=${"titanium-loading-indicator"===this.page}></titanium-loading-indicator-demo> `:X}
        ${"titanium-chip-multi-select"===this.page?G` <titanium-chip-multi-select-demo large ?isActive=${"titanium-chip-multi-select"===this.page}></titanium-chip-multi-select-demo> `:X}
        ${"titanium-styles"===this.page?G` <titanium-styles-demo large ?isActive=${"titanium-styles"===this.page}></titanium-styles-demo> `:X}
        ${"titanium-snackbar"===this.page?G` <titanium-snackbar-demo large ?isActive=${"titanium-snackbar"===this.page}></titanium-snackbar-demo> `:X}
        ${"titanium-smart-attachment-input"===this.page?G`
              <titanium-smart-attachment-input-demo large ?isActive=${"titanium-smart-attachment-input"===this.page}></titanium-smart-attachment-input-demo>
            `:X}
        ${"titanium-card"===this.page?G` <titanium-card-demo large ?isActive=${"titanium-card"===this.page}></titanium-card-demo> `:X}
        ${"titanium-chip"===this.page?G` <titanium-chip-demo large ?isActive=${"titanium-chip"===this.page}></titanium-chip-demo> `:X}
        ${"titanium-youtube-input"===this.page?G` <titanium-youtube-input-demo large ?isActive=${"titanium-youtube-input"===this.page}></titanium-youtube-input-demo> `:X}
        ${"titanium-show-hide"===this.page?G` <titanium-show-hide-demo large ?isActive=${"titanium-show-hide"===this.page}></titanium-show-hide-demo> `:X}
        ${"titanium-duration-input"===this.page?G` <titanium-duration-input-demo large ?isActive=${"titanium-duration-input"===this.page}></titanium-duration-input-demo> `:X}
        ${"titanium-confirm-dialog"===this.page?G` <titanium-confirm-dialog-demo large ?isActive=${"titanium-confirm-dialog"===this.page}></titanium-confirm-dialog-demo> `:X}
        ${"titanium-profile-picture-stack"===this.page?G`
              <titanium-profile-picture-stack-demo large ?isActive=${"titanium-profile-picture-stack"===this.page}></titanium-profile-picture-stack-demo>
            `:X}
        <titanium-access-denied-page ?hidden=${"access-denied"!==this.page}></titanium-access-denied-page>
        <titanium-error-page ?hidden=${"error"!==this.page} .message=${this.fatalErrorMessage}></titanium-error-page>
      </main-content>

      <report-a-problem-dialog></report-a-problem-dialog>
      <provide-feedback-dialog></provide-feedback-dialog>

      <titanium-confirm-dialog></titanium-confirm-dialog>
      <titanium-snackbar-stack .eventListenerTarget=${document}></titanium-snackbar-stack>
      <titanium-service-worker-notifier></titanium-service-worker-notifier>`}};r([vt()],$a.prototype,"page",null),r([vt()],$a.prototype,"fatalErrorMessage",null),r([vt()],$a.prototype,"isWideViewPort",null),r([ft({type:Boolean,reflect:!0,attribute:"collapse-main-menu"})],$a.prototype,"collapseMainMenu",null),r([bt("titanium-confirm-dialog")],$a.prototype,"confirmDialog",null),r([bt("titanium-full-page-loading-indicator")],$a.prototype,"loadingIndicator",null),r([bt("titanium-drawer")],$a.prototype,"drawer",null),r([vt()],$a.prototype,"themePreference",null),$a=r([ut("my-app")],$a);export{Me as $,vn as A,rn as B,Hn as C,de as D,X as E,Xi as F,Mt as G,mr as H,Pi as I,gr as J,fe as K,Tt as L,be as M,ge as N,Jt as O,Te as P,fr as Q,vr as R,Ae as S,Tr as T,cr as U,dr as V,zr as W,Vn as X,fs as Y,ys as Z,r as _,bs as a,wt as a0,Ti as a1,ct as a2,kr as a3,pi as a4,ai as a5,br as a6,Pe as a7,hi as a8,ni as a9,Ge as aa,si as ab,ti as ac,oi as ad,ii as ae,ar as af,lr as ag,xs as ah,bn as ai,yn as aj,gt as ak,Hs as al,Qs as am,Qt as an,qn as ao,we as ap,Bt as aq,e as ar,o as as,i as at,ks as b,dn as c,vt as d,bt as e,xt as f,Ai as g,gs as h,d as i,Ir as j,ws as k,zs as l,$s as m,ft as n,It as o,_s as p,Ss as q,dt as r,Ji as s,ut as t,ln as u,an as v,Oi as w,G as x,Fi as y,Ct as z};
