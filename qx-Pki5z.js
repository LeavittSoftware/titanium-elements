var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function r(t,e,i,r){var o,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,a=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),l=new WeakMap;let c=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}};const d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new c(i,t,n)},h=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:p,defineProperty:u,getOwnPropertyDescriptor:m,getOwnPropertyNames:f,getOwnPropertySymbols:v,getPrototypeOf:g}=Object,b=globalThis,y=b.trustedTypes,x=y?y.emptyScript:"",w=b.reactiveElementPolyfillSupport,_=(t,e)=>t,k={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!p(t,e),z={attribute:!0,type:String,converter:k,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=z){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&u(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const s=r?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??z}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...f(t),...v(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(a)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:k).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=r;const s=o.fromAttribute(e,t.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const r=this.constructor,o=this[t];if(i??=r.getPropertyOptions(t),!((i.hasChanged??$)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[_("elementProperties")]=new Map,A[_("finalized")]=new Map,w?.({ReactiveElement:A}),(b.reactiveElementVersions??=[]).push("2.1.1");const S=globalThis,T=S.trustedTypes,C=T?T.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+I,O=`<${P}>`,M=document,R=()=>M.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,j="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,F=/>/g,D=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,q=/"/g,H=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Y=new WeakMap,J=M.createTreeWalker(M,129);function K(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}class Q{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const a=t.length-1,n=this.parts,[l,c]=((t,e)=>{const i=t.length-1,r=[];let o,s=2===e?"<svg>":3===e?"<math>":"",a=L;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===L?"!--"===l[1]?a=U:void 0!==l[1]?a=F:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=D):void 0!==l[3]&&(a=D):a===D?">"===l[0]?(a=o??L,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?D:'"'===l[3]?q:G):a===q||a===G?a=D:a===U||a===F?a=L:(a=D,o=void 0);const h=a===D&&t[e+1].startsWith("/>")?" ":"";s+=a===L?i+O:c>=0?(r.push(n),i.slice(0,c)+E+i.slice(c)+I+h):i+I+(-2===c?e:h)}return[K(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]})(t,e);if(this.el=Q.createElement(l,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&n.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=c[s++],i=r.getAttribute(t).split(I),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?rt:"?"===a[1]?ot:"@"===a[1]?st:it}),r.removeAttribute(t)}else t.startsWith(I)&&(n.push({type:6,index:o}),r.removeAttribute(t));if(H.test(r.tagName)){const t=r.textContent.split(I),e=t.length-1;if(e>0){r.textContent=T?T.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],R()),J.nextNode(),n.push({type:2,index:++o});r.append(t[e],R())}}}else if(8===r.nodeType)if(r.data===P)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(I,t+1));)n.push({type:7,index:o}),t+=I.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,r){if(e===W)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const s=B(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,r)),e}let tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??M).importNode(e,!0);J.currentNode=r;let o=J.nextNode(),s=0,a=0,n=i[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new et(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new at(o,this,t)),this._$AV.push(e),n=i[++a]}s!==n?.index&&(o=J.nextNode(),s++)}return J.currentNode=M,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),B(t)?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==X&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new Q(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new et(this.O(R()),this.O(R()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(void 0===o)t=Z(this,t,e,0),s=!B(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const r=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=Z(this,r[i+a],e,a),n===W&&(n=this._$AH[a]),s||=!B(n)||n!==this._$AH[a],n===X?t=X:t!==X&&(t+=(n??"")+o[a+1]),this._$AH[a]=n}s&&!r&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class ot extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class st extends it{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??X)===W)return;const i=this._$AH,r=t===X&&i!==X||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==X&&(i===X||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt={I:et},lt=S.litHtmlPolyfillSupport;lt?.(Q,et),(S.litHtmlVersions??=[]).push("3.3.1");const ct=(t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new et(e.insertBefore(R(),t),t,void 0,i??{})}return o._$AI(t),o},dt=globalThis;let ht=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ht._$litElement$=!0,ht.finalized=!0,dt.litElementHydrateSupport?.({LitElement:ht});const pt=dt.litElementPolyfillSupport;pt?.({LitElement:ht}),(dt.litElementVersions??=[]).push("4.2.1");const ut=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},mt={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$},ft=(t=mt,e,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function vt(t){return(e,i)=>"object"==typeof i?ft(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function gt(t){return vt({...t,state:!0,attribute:!1})}const bt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function yt(t,e){return(i,r,o)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof r?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return bt(i,r,{get(){let i=t.call(this);return void 0===i&&(i=s(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return bt(i,r,{get(){return s(this)}})}}let xt;function wt(t){return(e,i)=>bt(e,i,{get(){return(this.renderRoot??(xt??=document.createDocumentFragment())).querySelectorAll(t)}})}function _t(t){return(e,i)=>{const{slot:r,selector:o}=t??{},s="slot"+(r?`[name=${r}]`:":not([name])");return bt(e,i,{get(){const e=this.renderRoot?.querySelector(s),i=e?.assignedElements(t)??[];return void 0===o?i:i.filter(t=>t.matches(o))}})}}class kt extends ht{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return V`<span class="shadow"></span>`}}const $t=d`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;let zt=class extends kt{};zt.styles=[$t],zt=r([ut("md-elevation")],zt);let At=class extends ht{#t;get shadow(){return this.#t}set shadow(t){this.#t=t}static{this.styles=d`
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
  `}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.#e.bind(this),!1)}disconnectedCallback(){document.removeEventListener("scroll",this.#e,!1),super.disconnectedCallback()}#e(){this.#i()}#i(){const t=window.innerHeight||(document.documentElement||document.body).clientHeight,e=this.#r(),i=window.scrollY||(document.documentElement||document.body.parentNode||document.body).scrollTop,r=e-t,o=Math.floor(i/r*100);this.shadow=0!==(o||0)}#r(){const t=document;return Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight)}render(){return V` <md-elevation></md-elevation><slot></slot>`}};r([vt({type:Boolean,reflect:!0})],At.prototype,"shadow",null),At=r([ut("titanium-toolbar")],At);class St extends Error{}function Tt(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(t){return decodeURIComponent(atob(t).replace(/(.)/g,(t,e)=>{let i=e.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}(e)}catch(t){return atob(e)}}St.prototype.name="InvalidTokenError";const Ct=(t=>{const e=[new RegExp("^https://10[\\.]"),new RegExp("^http://10[\\.]"),new RegExp("^http://192.168[\\.]"),new RegExp("^http://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])"),new RegExp("^https://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])")];return!t||t.indexOf("dev")>-1||e.some(e=>null!==e.exec(t))})(window.location.origin),Et=t=>class extends t{static get properties(){return{isLoading:{type:Boolean}}}#o=0;async loadWhile(t){this.isLoading=!0,this.#o++;try{await t}catch{}finally{this.#o--,0===this.#o&&(this.isLoading=!1)}}};function It(t){return new Promise(function(e){setTimeout(e,t)})}function Pt(t,e=15,i=10){return t.length>e+i?t.slice(0,e)+"..."+t.slice(t.length-i,t.length):t}class Ot extends Event{static{this.eventName="um-updated"}constructor(){super(Ot.eventName,{bubbles:!1,composed:!0})}}let Mt=null;const Rt=()=>{if(Mt)return Mt;throw"GetUserManagerInstance requested before an instance was created. Did you forget to add the <user-manager> element to your project?"};let Bt=class extends ht{#s=[];get roles(){return this.#s}set roles(t){this.#s=t}#a;get fullname(){return this.#a}set fullname(t){this.#a=t}#n;get username(){return this.#n}set username(t){this.#n=t}#l;get firstName(){return this.#l}set firstName(t){this.#l=t}#c;get lastName(){return this.#c}set lastName(t){this.#c=t}#d;get company(){return this.#d}set company(t){this.#d=t}#h;get companyId(){return this.#h}set companyId(t){this.#h=t}#p;get profilePictureFileName(){return this.#p}set profilePictureFileName(t){this.#p=t}#u;get email(){return this.#u}set email(t){this.#u=t}#m=0;get personId(){return this.#m}set personId(t){this.#m=t}#f=0;get refreshTokenId(){return this.#f}set refreshTokenId(t){this.#f=t}#v="https://signin.leavitt.com/";get redirectUrl(){return this.#v}set redirectUrl(t){this.#v=t}#g="https://devsignin.leavitt.com/";get redirectDevUrl(){return this.#g}set redirectDevUrl(t){this.#g=t}#b=Ct?"https://devoauth2.leavitt.com/token":"https://oauth2.leavitt.com/token";get tokenUri(){return this.#b}set tokenUri(t){this.#b=t}#y="https://oauth2.leavitt.com/";get issuerIdentifier(){return this.#y}set issuerIdentifier(t){this.#y=t}#x;get disableAutoload(){return this.#x}set disableAutoload(t){this.#x=t}#w;get isActiveEmployee(){return this.#w}set isActiveEmployee(t){this.#w=t}#_;constructor(){super(),Mt?console.warn("More than one <user-manager> element has been used in this web application, consider removing one."):Mt=this}async firstUpdated(){if(!this.disableAutoload||this.#k("refreshToken"))try{await this.authenticateAsync()}catch{}console.log("UserManager Ready.")}async isRefreshTokenValid(t){try{return await this.#$(t,this.tokenUri),!0}catch(t){}return!1}#z(t){const e=`${Ct?this.redirectDevUrl:this.redirectUrl}?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#A(t){const e=`${Ct?this.redirectDevUrl:this.redirectUrl}sign-out/?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#S(){const t=[];if(window.location.hash){let e=window.location.hash.substring(1);e=decodeURIComponent(e);const i=e.split("&");for(const e in i)if(Object.hasOwn(i,e)){const r=i[e].split("=");r.length>1&&t.push({key:r[0],value:decodeURIComponent(r[1])})}}return t}#T(t){try{return JSON.parse(window.localStorage.getItem(t)||"[]")}catch(t){return console.warn(`Failed to parse scopes in local storage. ${t}`),[]}}#C(){document.location&&document.location.hash&&document.location.hash.indexOf("refreshToken")>-1&&(document.location.hash="")}#k(t){const e=this.#S().filter(e=>e.key===t);return 0===e.length?null:e[0].value}#E(t){if(!t)return null;let e;try{e=function(t,e){if("string"!=typeof t)throw new St("Invalid token specified: must be a string");e||(e={});const i=!0===e.header?0:1,r=t.split(".")[i];if("string"!=typeof r)throw new St(`Invalid token specified: missing part #${i+1}`);let o;try{o=Tt(r)}catch(t){throw new St(`Invalid token specified: invalid base64 for part #${i+1} (${t.message})`)}try{return JSON.parse(o)}catch(t){throw new St(`Invalid token specified: invalid json for part #${i+1} (${t.message})`)}}(t)}catch(t){return null}return e&&(e.exp=new Date(0).setUTCSeconds(e.exp)),e}#I(t){const e=new Date;return e.setSeconds(e.getSeconds()+30),t.iss===this.issuerIdentifier&&!(t.exp<=e)}#P(){return window.localStorage.getItem("LG-AUTH-AT")||""}#O(t){window.localStorage.setItem("LG-AUTH-AT",t)}#M(){return window.localStorage.getItem("LG-AUTH-RT")||""}#R(t){window.localStorage.setItem("LG-AUTH-RT",t||"")}async#$(t,e){if(!window.navigator.onLine)return Promise.reject("Computer not connected. Make sure your computer is connected to the internet.");const i=this.#T("LgClaimScopes"),r={grant_type:"refresh_token",refresh_token:t};i.length>0&&(r.claim_scopes=i);const o=await fetch(e,{method:"POST",body:JSON.stringify(r),headers:[["Content-Type","application/json"],["Accept","application/json"]]});let s;try{s=await o.json()}catch(t){return Promise.reject("Get Auth Token: The server sent back invalid JSON.")}return 200===o.status&&s.access_token?Promise.resolve(s.access_token):s.error?"unauthorized_client"===s.error?Promise.reject("Not authenticated"):Promise.reject(s.error):Promise.reject("Not authenticated")}#B(t){this.personId=Number(t.nameid),this.refreshTokenId=Number(t.RefreshTokenId),this.fullname=t.unique_name,this.username=t.username,this.firstName=t.given_name,this.lastName=t.family_name,this.email=t.email,this.isActiveEmployee="True"===t.IsActiveEmployee,this.roles="string"==typeof t.role?[t.role]:t.role??[],this.company=t.Company??"",this.companyId=t.CompanyId?Number(t.CompanyId):0,this.profilePictureFileName=t.PicCdnFileName||null,this.dispatchEvent(new Ot)}async#N(){const t=this.#k("refreshToken");let e=t?"":this.#P();const i=t||this.#M()||null;this.#C();const r=this.#E(e);if(r&&this.#I(r))return this.#O(e),this.#R(i),this.#B(r),Promise.resolve(r);if(null!=i){try{e=await this.#$(i,this.tokenUri)}catch(t){return Promise.reject(t)}const t=this.#E(e);if(t&&this.#I(t))return this.#O(e),this.#R(i),this.#B(t),Promise.resolve(t)}return Promise.reject("Not authenticated")}async getAccessTokenAsync(){return await this.authenticateAsync(),this.#P()}async isAuthenticatedAsync(){try{await this.#N()}catch(t){return!1}return!0}async authenticateAsync(){const t=this;return this.#_?new Promise((e,i)=>{this.addEventListener("token",function r(o){t.removeEventListener("token",r),o.detail.rejected&&i(o.detail.message),e(o.detail.accessToken)})}):new Promise(async(e,i)=>{let r;try{this.#_=!0,r=await this.#N()}catch(t){if("Not authenticated"===t)return document.location&&this.#z(document.location.href),this.#_=!1,void this.dispatchEvent(new CustomEvent("token",{detail:{rejected:!0,message:t}}));this.#_=!1,i(t)}this.#_=!1,t.dispatchEvent(new CustomEvent("token",{detail:r})),e(r)})}reset(){localStorage.removeItem("LG-AUTH-AT"),localStorage.removeItem("LG-AUTH-RT"),this.personId=0,this.refreshTokenId=0,this.username="",this.fullname="",this.company="",this.companyId=null,this.profilePictureFileName=null,this.firstName="",this.lastName="",this.email="",this.isActiveEmployee=!1,this.roles.forEach(t=>{window.dispatchEvent(new CustomEvent("um-role-removed",{detail:{role:t}}))}),this.roles=[],this.dispatchEvent(new Ot)}logout(){this.reset(),document.location&&this.#A(document.location.href)}};r([vt({type:Array})],Bt.prototype,"roles",null),r([vt({type:String})],Bt.prototype,"fullname",null),r([vt({type:String})],Bt.prototype,"username",null),r([vt({type:String})],Bt.prototype,"firstName",null),r([vt({type:String})],Bt.prototype,"lastName",null),r([vt({type:String})],Bt.prototype,"company",null),r([vt({type:Number})],Bt.prototype,"companyId",null),r([vt({type:String})],Bt.prototype,"profilePictureFileName",null),r([vt({type:String})],Bt.prototype,"email",null),r([vt({type:Number})],Bt.prototype,"personId",null),r([vt({type:Number})],Bt.prototype,"refreshTokenId",null),r([vt({type:String})],Bt.prototype,"redirectUrl",null),r([vt({type:String})],Bt.prototype,"redirectDevUrl",null),r([vt({type:String})],Bt.prototype,"tokenUri",null),r([vt({type:String})],Bt.prototype,"issuerIdentifier",null),r([vt({type:Boolean})],Bt.prototype,"disableAutoload",null),r([vt({type:Boolean})],Bt.prototype,"isActiveEmployee",null),Bt=r([ut("user-manager")],Bt);const Nt=d`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`,jt=Symbol("attachableController");let Lt;Lt=new MutationObserver(t=>{for(const e of t)e.target[jt]?.hostConnected()});class Ut{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){null===t?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[jt]=this,Lt?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}const Ft=["focusin","focusout","pointerdown"];class Dt extends ht{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Ut(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[Gt]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}t[Gt]=!0}}onControlChange(t,e){for(const i of Ft)t?.removeEventListener(i,this),e?.addEventListener(i,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}r([vt({type:Boolean,reflect:!0})],Dt.prototype,"visible",void 0),r([vt({type:Boolean,reflect:!0})],Dt.prototype,"inward",void 0);const Gt=Symbol("handledByFocusRing"),qt=d`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;let Ht=class extends Dt{};Ht.styles=[qt],Ht=r([ut("md-focus-ring")],Ht);const Vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Wt=t=>(...e)=>({_$litDirective$:t,values:e});let Xt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const Yt=Wt(class extends Xt{constructor(t){if(super(t),t.type!==Vt.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}}),Jt={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)"};var Kt;!function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Kt||(Kt={}));const Qt=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Zt=window.matchMedia("(forced-colors: active)");class te extends ht{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Kt.INACTIVE,this.attachableController=new Ut(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return V`<div class="surface ${Yt(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==Kt.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state!==Kt.HOLDING)return this.state===Kt.TOUCH_DELAY?(this.state=Kt.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Kt.WAITING_FOR_CLICK}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t))return this.state=Kt.WAITING_FOR_CLICK,void this.startPressAnimation(t);this.state=Kt.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,150)}),this.state===Kt.TOUCH_DELAY&&(this.state=Kt.HOLDING,this.startPressAnimation(t))}}handleClick(){this.disabled||(this.state!==Kt.WAITING_FOR_CLICK?this.state===Kt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),i=Math.max(t,e),r=Math.max(.35*i,75),o=this.currentCSSZoom??1,s=Math.floor(.2*i/o),a=Math.sqrt(e**2+t**2)+10;this.initialSize=s;const n=(a+r)/s;this.rippleScale=""+n/o,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:i}=window,{left:r,top:o}=this.getBoundingClientRect(),s=e+r,a=i+o,{pageX:n,pageY:l}=t,c=this.currentCSSZoom??1;return{x:(n-s)/c,y:(l-a)/c}}getTranslationCoordinates(t){const{height:e,width:i}=this.getBoundingClientRect(),r=this.currentCSSZoom??1,o={x:(i/r-this.initialSize)/2,y:(e/r-this.initialSize)/2};let s;return s=t instanceof PointerEvent?this.getNormalizedPointerEventCoords(t):{x:i/r/2,y:e/r/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:o}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:i}=this.getTranslationCoordinates(t),r=`${e.x}px, ${e.y}px`,o=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:Jt.STANDARD,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Kt.INACTIVE;const t=this.growAnimation;let e=1/0;"number"==typeof t?.currentTime?e=t.currentTime:t?.currentTime&&(e=t.currentTime.to("ms").value),e>=225?this.pressed=!1:(await new Promise(t=>{setTimeout(t,225-e)}),this.growAnimation===t&&(this.pressed=!1))}shouldReactToEvent(t){if(this.disabled||!t.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if("pointerenter"===t.type||"pointerleave"===t.type)return!this.isTouch(t);const e=1===t.buttons;return this.isTouch(t)||e}isTouch({pointerType:t}){return"touch"===t}async handleEvent(t){if(!Zt?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t)}}onControlChange(t,e){for(const i of Qt)t?.removeEventListener(i,this),e?.addEventListener(i,this)}}r([vt({type:Boolean,reflect:!0})],te.prototype,"disabled",void 0),r([gt()],te.prototype,"hovered",void 0),r([gt()],te.prototype,"pressed",void 0),r([yt(".surface")],te.prototype,"mdRoot",void 0);const ee=d`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;let ie=class extends te{};ie.styles=[ee],ie=r([ut("md-ripple")],ie);const re=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],oe=re.map(ae);function se(t){return oe.includes(t)}function ae(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}const ne=Symbol("privateIgnoreAttributeChangesFor");function le(t){var e;class i extends t{constructor(){super(...arguments),this[e]=new Set}attributeChangedCallback(t,e,i){if(!se(t))return void super.attributeChangedCallback(t,e,i);if(this[ne].has(t))return;this[ne].add(t),this.removeAttribute(t),this[ne].delete(t);const r=de(t);null===i?delete this.dataset[r]:this.dataset[r]=i,this.requestUpdate(de(t),e)}getAttribute(t){return se(t)?super.getAttribute(ce(t)):super.getAttribute(t)}removeAttribute(t){super.removeAttribute(t),se(t)&&(super.removeAttribute(ce(t)),this.requestUpdate())}}return e=ne,function(t){for(const e of re){const i=ae(e),r=ce(i),o=de(i);t.createProperty(e,{attribute:i,noAccessor:!0}),t.createProperty(Symbol(r),{attribute:r,noAccessor:!0}),Object.defineProperty(t.prototype,e,{configurable:!0,enumerable:!0,get(){return this.dataset[o]??null},set(t){const i=this.dataset[o]??null;t!==i&&(null===t?delete this.dataset[o]:this.dataset[o]=t,this.requestUpdate(e,i))}})}}(i),i}function ce(t){return`data-${t}`}function de(t){return t.replace(/-\w/,t=>t[1].toUpperCase())}const he=Symbol("internals"),pe=Symbol("privateInternals");function ue(t){return class extends t{get[he](){return this[pe]||(this[pe]=this.attachInternals()),this[pe]}}}function me(t){t.addInitializer(t=>{const e=t;e.addEventListener("click",async t=>{const{type:i,[he]:r}=e,{form:o}=r;o&&"button"!==i&&(await new Promise(t=>{setTimeout(t)}),t.defaultPrevented||("reset"!==i?(o.addEventListener("submit",t=>{Object.defineProperty(t,"submitter",{configurable:!0,enumerable:!0,get:()=>e})},{capture:!0,once:!0}),r.setFormValue(e.value),o.requestSubmit()):o.reset()))})})}function fe(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function ve(t){return t.currentTarget===t.target&&(t.composedPath()[0]===t.target&&(!t.target.disabled&&!function(t){const e=ge;e&&(t.preventDefault(),t.stopImmediatePropagation());return async function(){ge=!0,await null,ge=!1}(),e}(t)))}let ge=!1;const be=le(ue(ht));class ye extends be{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[he].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const t=this.disabled||this.softDisabled,e=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return V`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${i}
        ?disabled="${t}"></md-ripple>
      ${e}
    `}renderButton(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return V`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||X}
      aria-label="${t||X}"
      aria-haspopup="${e||X}"
      aria-expanded="${i||X}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return V`<a
      id="link"
      class="button"
      aria-label="${t||X}"
      aria-haspopup="${e||X}"
      aria-expanded="${i||X}"
      aria-disabled=${this.disabled||this.softDisabled||X}
      tabindex="${this.disabled&&!this.softDisabled?-1:X}"
      href=${this.href}
      download=${this.download||X}
      target=${this.target||X}
      >${this.renderContent()}
    </a>`}renderContent(){const t=V`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return V`
      <span class="touch"></span>
      ${this.trailingIcon?X:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:X}
    `}handleClick(t){if(this.softDisabled||this.disabled&&this.href)return t.stopImmediatePropagation(),void t.preventDefault();ve(t)&&this.buttonElement&&(this.focus(),fe(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}me(ye),ye.formAssociated=!0,ye.shadowRootOptions={mode:"open",delegatesFocus:!0},r([vt({type:Boolean,reflect:!0})],ye.prototype,"disabled",void 0),r([vt({type:Boolean,attribute:"soft-disabled",reflect:!0})],ye.prototype,"softDisabled",void 0),r([vt()],ye.prototype,"href",void 0),r([vt()],ye.prototype,"download",void 0),r([vt()],ye.prototype,"target",void 0),r([vt({type:Boolean,attribute:"trailing-icon",reflect:!0})],ye.prototype,"trailingIcon",void 0),r([vt({type:Boolean,attribute:"has-icon",reflect:!0})],ye.prototype,"hasIcon",void 0),r([vt()],ye.prototype,"type",void 0),r([vt({reflect:!0})],ye.prototype,"value",void 0),r([yt(".button")],ye.prototype,"buttonElement",void 0),r([_t({slot:"icon",flatten:!0})],ye.prototype,"assignedIcons",void 0);class xe extends ye{}const we=d`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;let _e=class extends xe{};_e.styles=[Nt,we],_e=r([ut("md-text-button")],_e);let ke=class extends ht{#j;#L;get open(){return this.#L}set open(t){this.#L=t}#U;get noAction(){return this.#U}set noAction(t){this.#U=t}#F;get actionText(){return this.#F}set actionText(t){this.#F=t}#D;get message(){return this.#D}set message(t){this.#D=t}constructor(){super(),this.popover="manual"}show(t,e){if(this.showPopover?this.showPopover():this.open=!0,this.message=e?.overrideTemplate?e?.overrideTemplate:t,this.noAction=e?.noAction??!1,this.actionText=e?.actionText??"Dismiss",e?.autoHide){const t="number"==typeof e?.autoHide?e?.autoHide:5e3;this.#G=window.setTimeout(()=>this.close("auto-close"),t)}return new Promise(t=>{this.#j=t})}#G=0;close(t=""){clearTimeout(this.#G),this.hidePopover?this.hidePopover():this.open=!1,this.#j(t)}static{this.styles=[d`
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
    `}};r([vt({type:Boolean,reflect:!0})],ke.prototype,"open",null),r([vt({type:Boolean,reflect:!0})],ke.prototype,"noAction",null),r([vt({type:String})],ke.prototype,"actionText",null),r([vt({type:String})],ke.prototype,"message",null),ke=r([ut("titanium-simple-snackbar")],ke);let $e=class extends ht{#j;#L;get open(){return this.#L}set open(t){this.#L=t}#q=[];get httpErrors(){return this.#q}set httpErrors(t){this.#q=t}constructor(){super(),this.popover="manual"}show(t,e){return this.showPopover?this.showPopover():this.open=!0,this.httpErrors.push(t),this.#H(e),this.#V(t),new Promise(t=>{this.#j=t})}#V(t){const e=t.message,i=t.detail;console.warn("APP-HTTP-ERROR:",e||"",i?`\n\n${i}`:"")}#H(t){if(t?.autoHide){clearTimeout(this.#G);const e="number"==typeof t?.autoHide?t?.autoHide:5e3;this.#G=window.setTimeout(()=>this.close("auto-close"),e)}}addError(t,e){this.#H(e),this.#V(t),this.httpErrors=[...this.httpErrors,t]}#G=0;close(t=""){this.hidePopover?this.hidePopover():this.open=!1,this.#j(t)}static{this.styles=[...ke.styles,d`
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
    `]}#W(t){const e=t.split("\n"),i=e.length;return e.map((t,e)=>e===i-1?t:V`${t}<br />`)}render(){return V`
      <div main>
        <http-error>
          <span action> ${this.httpErrors.length>1?V`${this.httpErrors.length} Network errors`:this.httpErrors?.[0]?.action} </span>
          <span status> ${this.httpErrors.length>1?V`${this.httpErrors?.[0]?.action}`:X} ${this.httpErrors?.[0]?.statusCode} </span>
          <span error>${this.#W(this.httpErrors?.[0]?.message??"")}</span>
          ${this.httpErrors?.[0]?.detail?V` <code detail>${this.#W(this.httpErrors?.[0]?.detail)}</code>`:X}
        </http-error>
      </div>
      <div actions>
        <md-text-button
          @click=${()=>{1===this.httpErrors.length?this.close("dismiss"):this.httpErrors=[...this.httpErrors.filter(t=>t!==this.httpErrors?.[0])]}}
          >Dismiss
        </md-text-button>
        <md-text-button ?hidden=${1===this.httpErrors.length} @click=${()=>this.close("dismiss")}>Dismiss all (${this.httpErrors.length}) </md-text-button>
      </div>
    `}};r([vt({type:Boolean,reflect:!0})],$e.prototype,"open",null),r([vt({type:Array})],$e.prototype,"httpErrors",null),$e=r([ut("titanium-http-error-snackbar")],$e);class ze extends Event{static{this.eventName="show-snackbar"}constructor(t,e){super(ze.eventName,{bubbles:!0,composed:!0}),this.SnackbarMessage=t,this.SnackbarOptions=e}}let Ae=class extends ht{constructor(){super(...arguments),this.SnackbarStack=[]}#X;get eventListenerTarget(){return this.#X}set eventListenerTarget(t){this.#X=t}connectedCallback(){(this.eventListenerTarget||this.getRootNode()).addEventListener(ze.eventName,t=>{t.stopImmediatePropagation(),this.open(t.SnackbarMessage,t.SnackbarOptions)})}async open(t,e){let i,r;if("string"==typeof t){const o="<titanium-simple-snackbar newest></titanium-simple-snackbar>";this.insertAdjacentHTML("beforeend",o);const s=this.querySelector("titanium-simple-snackbar[newest]");s.removeAttribute("newest"),e&&(e.close=t=>s.close(t)),this.SnackbarStack.unshift(s),i=s.show(t,e),r=s}else{let o=this.querySelector("titanium-http-error-snackbar");if(o)return void o.addError(t,e);{const r="<titanium-http-error-snackbar></titanium-http-error-snackbar>";this.insertAdjacentHTML("beforeend",r),o=this.querySelector("titanium-http-error-snackbar"),this.SnackbarStack.unshift(o),i=o.show(t,e)}e&&(e.close=t=>o.close(t)),r=o}return this.reposition(),await i,this.SnackbarStack.splice(this.SnackbarStack.indexOf(r),1),r.remove(),this.reposition(),i}dismissAll(){this.SnackbarStack.forEach(t=>t.close())}async reposition(){let t=0;for(let e=0;e<this.SnackbarStack.length;e++){const i=this.SnackbarStack[e];await i.updateComplete,0===i.clientHeight&&i.close(),i.style.bottom=`${t}px`,t+=i.clientHeight+12}}};r([vt({type:Object})],Ae.prototype,"eventListenerTarget",null),Ae=r([ut("titanium-snackbar-stack")],Ae);class Se extends CustomEvent{static{this.eventType="pending-state"}constructor(t){super(Se.eventType,{bubbles:!0,composed:!0,detail:{promise:t}})}}const Te="important",Ce=" !"+Te,Ee=Wt(class extends Xt{constructor(t){if(super(t),t.type!==Vt.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(Ce);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?Te:""):i[t]=r}}return W}}),Ie=le(ht);class Pe extends Ie{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:t}=this;return V`
      <div
        class="progress ${Yt(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${t||X}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?X:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}r([vt({type:Number})],Pe.prototype,"value",void 0),r([vt({type:Number})],Pe.prototype,"max",void 0),r([vt({type:Boolean})],Pe.prototype,"indeterminate",void 0),r([vt({type:Boolean,attribute:"four-color"})],Pe.prototype,"fourColor",void 0);class Oe extends Pe{constructor(){super(...arguments),this.buffer=0}renderIndicator(){const t={transform:`scaleX(${100*(this.indeterminate?1:this.value/this.max)}%)`},e=this.buffer??0,i=e>0,r={transform:`scaleX(${100*(this.indeterminate||!i?1:e/this.max)}%)`},o=this.indeterminate||!i||e>=this.max||this.value>=this.max;return V`
      <div class="dots" ?hidden=${o}></div>
      <div class="inactive-track" style=${Ee(r)}></div>
      <div class="bar primary-bar" style=${Ee(t)}>
        <div class="bar-inner"></div>
      </div>
      <div class="bar secondary-bar">
        <div class="bar-inner"></div>
      </div>
    `}}r([vt({type:Number})],Oe.prototype,"buffer",void 0);const Me=d`:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, var(--md-sys-shape-corner-none, 0px));border-radius:var(--_track-shape);display:flex;position:relative;min-width:80px;height:var(--_track-height);content-visibility:auto;contain:strict}.progress,.dots,.inactive-track,.bar,.bar-inner{position:absolute}.progress{direction:ltr;inset:0;border-radius:inherit;overflow:hidden;display:flex;align-items:center}.bar{animation:none;width:100%;height:var(--_active-indicator-height);transform-origin:left center;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.inactive-track{background:var(--_track-color);inset:0;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.dots{inset:0;animation:linear infinite 250ms;animation-name:buffering;background-color:var(--_track-color);background-repeat:repeat-x;-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");z-index:-1}.dots[hidden]{display:none}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .primary-bar{animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate .primary-bar>.bar-inner{animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate .secondary-bar{animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate .secondary-bar>.bar-inner{animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host(:dir(rtl)){transform:scale(-1)}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(var(--_track-height) / 2 * 5))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.6714%)}100%{transform:translateX(200.611%)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.6519%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.3862%)}100%{transform:translateX(160.278%)}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media(forced-colors: active){:host{outline:1px solid CanvasText}.bar-inner,.dots{background-color:CanvasText}}
`;let Re=class extends Oe{};Re.styles=[Me],Re=r([ut("md-linear-progress")],Re);let Be=class extends ht{#L;get open(){return this.#L}set open(t){this.#L=t}#Y;#J;#K=75;#Q=350;#Z;#tt=0;firstUpdated(){this.popover="manual",this.addEventListener("toggle",t=>this.open="open"===t.newState),window.addEventListener(Se.eventType,async t=>{this.#et(),this.#tt++;try{await t.detail.promise}catch{}finally{this.#tt--,0===this.#tt&&this.#it()}})}#et(){window.clearTimeout(this.#Y),window.clearTimeout(this.#J),this.#Y=window.setTimeout(()=>{this.#Z=performance.now(),this.showPopover?this.showPopover():this.open=!0,this.style.display="block"},this.#K)}#it(){window.clearTimeout(this.#Y);const t=performance.now()-this.#Z,e=Math.max(this.#Q-t,0);this.#J=window.setTimeout(()=>{this.hidePopover?this.hidePopover():this.open=!1,this.style.display="none"},e)}static{this.styles=d`
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
  `}render(){return V` <md-linear-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-linear-progress> `}};r([gt()],Be.prototype,"open",null),Be=r([ut("titanium-full-page-loading-indicator")],Be);let Ne=class extends ht{#D="We were unable to find the page you are looking for...";get message(){return this.#D}set message(t){this.#D=t}static{this.styles=d`
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
    `}};r([vt({type:String})],Ne.prototype,"message",null),Ne=r([ut("titanium-error-page")],Ne);let je=class extends ht{#rt;get notificationsStatus(){return this.#rt}set notificationsStatus(t){this.#rt=t}#ot="service-worker.js";get scriptUrl(){return this.#ot}set scriptUrl(t){this.#ot=t}#st;#at=!1;async connectedCallback(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration();t&&(t.addEventListener("updatefound",()=>{this.#st=t.installing,this.#st?.addEventListener("statechange",()=>{"installed"===this.#st?.state&&navigator.serviceWorker.controller&&this.#nt()})}),t.waiting&&navigator.serviceWorker.controller&&(this.#st=t.waiting,this.#nt())),navigator.serviceWorker.addEventListener("controllerchange",()=>{this.#at||(window.location.reload(),this.#at=!0)})}}async#nt(){await this.dispatchEvent(new ze("Site has been updated",{actionText:"RELOAD"})),this.#st?.postMessage({type:"SKIP_WAITING"})}render(){return V``}};var Le;r([vt({type:String})],je.prototype,"notificationsStatus",null),r([vt({type:String})],je.prototype,"scriptUrl",null),je=r([ut("titanium-service-worker-notifier")],je);let Ue=class extends ht{static{Le=this}#lt;get dialog(){return this.#lt}set dialog(t){this.#lt=t}#ct=!1;get fixed(){return this.#ct}set fixed(t){this.#ct=t}#dt=!1;get alwayShowContent(){return this.#dt}set alwayShowContent(t){this.#dt=t}#ht="ltr";get direction(){return this.#ht}set direction(t){this.#ht=t}#pt=!1;get hasHeader(){return this.#pt}set hasHeader(t){this.#pt=t}#ut=!1;get hasFooter(){return this.#ut}set hasFooter(t){this.#ut=t}async firstUpdated(){let t=0,e=0;this.addEventListener("touchstart",e=>{t=e.changedTouches[0].screenX}),this.addEventListener("touchend",i=>{e=i.changedTouches[0].screenX,t-e>50&&this.close()}),this.dialog?.addEventListener("click",t=>{t.target instanceof Element&&"DIALOG"===t.target?.nodeName&&this.close()}),this.dialog?.addEventListener("cancel",t=>{t.preventDefault(),this.close()}),window.addEventListener("popstate",()=>this.dialog?.close(),!1),await Le.animationsComplete(this.dialog),await Le.animationsComplete(this.dialog),this.dialog?.removeAttribute("loading")}static async animationsComplete(t){return await Promise.allSettled(t.getAnimations().map(t=>t.finished))}open(){this.dialog?.showModal(),this.dialog?.removeAttribute("hide"),this.setBodyOverflow("hidden")}async close(){this.dialog?.open&&(this.dialog?.setAttribute("hide",""),await Le.animationsComplete(this.dialog),this.dialog?.close(),this.dialog?.removeAttribute("hide"))}closeQuick(){this.dialog?.open&&this.dialog?.close()}setBodyOverflow(t){const e=document.querySelector("html");e&&(e.style.overflow=t)}static{this.styles=d`
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
      display: grid;
      align-content: start;
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

    :host([has-header]) header {
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
    </dialog>`}};r([yt("dialog")],Ue.prototype,"dialog",null),r([vt({type:Boolean,reflect:!0})],Ue.prototype,"fixed",null),r([vt({type:Boolean,reflect:!0,attribute:"always-show-content"})],Ue.prototype,"alwayShowContent",null),r([vt({type:String,reflect:!0})],Ue.prototype,"direction",null),r([vt({type:Boolean,reflect:!0,attribute:"has-header"})],Ue.prototype,"hasHeader",null),r([vt({type:Boolean,reflect:!0,attribute:"has-footer"})],Ue.prototype,"hasFooter",null),r([_t({slot:"header"})],Ue.prototype,"headerElements",void 0),r([_t({slot:"footer"})],Ue.prototype,"footerElements",void 0),Ue=Le=r([ut("titanium-drawer")],Ue);class Fe extends ht{render(){return V`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}const De=d`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;let Ge=class extends Fe{};Ge.styles=[De],Ge=r([ut("md-icon")],Ge);let qe=class extends ht{#mt;get fileName(){return this.#mt}set fileName(t){this.#mt=t}#ft="circle";get shape(){return this.#ft}set shape(t){this.#ft=t}#vt;get showRing(){return this.#vt}set showRing(t){this.#vt=t}#gt;get showTestUserIndicator(){return this.#gt}set showTestUserIndicator(t){this.#gt=t}#bt;get profilePictureLinkPersonId(){return this.#bt}set profilePictureLinkPersonId(t){this.#bt=t}#yt=120;get size(){return this.#yt}set size(t){this.#yt=t}#xt=!1;get useIntrinsicImageSize(){return this.#xt}set useIntrinsicImageSize(t){this.#xt=t}#wt=new Set([32,64,128,256,512,1024]);#_t="https://cdn.leavitt.com/icon-user-profile-sq.svg";updated(t){(t.has("size")||t.has("useIntrinsicImageSize"))&&(this.style.width=this.useIntrinsicImageSize||!this.size?"":this.size+"px",this.style.height=this.useIntrinsicImageSize||!this.size?"":this.size+"px")}#kt(t){const e=[...this.#wt];for(let i=0;i<e.length;i++){const r=e[i];if(t<=r)return r}return 512}#$t(t,e){const i=this.#kt(e);return t?`https://cdn.leavitt.com/${t}-${i}.webp`:this.#_t}static{this.styles=d`
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

    md-icon {
      position: absolute;
      bottom: -2px;
      right: -2px;
      color: var(--md-sys-color-on-primary);
      background-color: var(--md-sys-color-primary);
      border-radius: 50%;
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
  `}renderProfilePicture(){return V`
      <img
        loading="lazy"
        draggable="false"
        alt="User profile picture"
        src=${this.#$t(this.fileName,this.size)}
        @error=${t=>{t.target.src!==this.#_t&&(t.target.src=this.#_t)}}
      />
      ${this.showTestUserIndicator?V`<md-icon part="test-user-indicator" style="--md-icon-size: calc(${this.size}px * 0.35);padding: calc(${this.size}px * 0.05)" title="Test user"
            >bug_report</md-icon
          >`:X}
    `}render(){return this.profilePictureLinkPersonId?V`<a target="_blank" href="https://${Ct?"dev":""}workforce.leavitt.com/user/${this.profilePictureLinkPersonId}/view"
        >${this.renderProfilePicture()}</a
      > `:this.renderProfilePicture()}};function He(t,e=Qe){const i=Xe(t,e);return i&&(i.tabIndex=0,i.focus()),i}function Ve(t,e=Qe){const i=Ye(t,e);return i&&(i.tabIndex=0,i.focus()),i}function We(t,e=Qe){for(let i=0;i<t.length;i++){const r=t[i];if(0===r.tabIndex&&e(r))return{item:r,index:i}}return null}function Xe(t,e=Qe){for(const i of t)if(e(i))return i;return null}function Ye(t,e=Qe){for(let i=t.length-1;i>=0;i--){const r=t[i];if(e(r))return r}return null}function Je(t,e,i=Qe,r=!0){if(e){const o=function(t,e,i=Qe,r=!0){for(let o=1;o<t.length;o++){const s=(o+e)%t.length;if(s<e&&!r)return null;const a=t[s];if(i(a))return a}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return He(t,i)}function Ke(t,e,i=Qe,r=!0){if(e){const o=function(t,e,i=Qe,r=!0){for(let o=1;o<t.length;o++){const s=(e-o+t.length)%t.length;if(s>e&&!r)return null;const a=t[s];if(i(a))return a}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return Ve(t,i)}function Qe(t){return!t.disabled}r([vt({reflect:!0,type:String})],qe.prototype,"fileName",null),r([vt({reflect:!0,type:String})],qe.prototype,"shape",null),r([vt({reflect:!0,type:Boolean,attribute:"show-ring"})],qe.prototype,"showRing",null),r([vt({reflect:!0,type:Boolean,attribute:"show-test-user-indicator"})],qe.prototype,"showTestUserIndicator",null),r([vt({reflect:!0,type:Number,attribute:"profile-picture-link-person-id"})],qe.prototype,"profilePictureLinkPersonId",null),r([vt({type:Number})],qe.prototype,"size",null),r([vt({type:Boolean})],qe.prototype,"useIntrinsicImageSize",null),qe=r([ut("profile-picture")],qe);const Ze={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class ti{constructor(t){this.handleKeydown=t=>{const e=t.key;if(t.defaultPrevented||!this.isNavigableKey(e))return;const i=this.items;if(!i.length)return;const r=We(i,this.isActivatable);t.preventDefault();const o=this.isRtl();let s=null;switch(e){case Ze.ArrowDown:case o?Ze.ArrowLeft:Ze.ArrowRight:s=Je(i,r,this.isActivatable,this.wrapNavigation());break;case Ze.ArrowUp:case o?Ze.ArrowRight:Ze.ArrowLeft:s=Ke(i,r,this.isActivatable,this.wrapNavigation());break;case Ze.Home:s=He(i,this.isActivatable);break;case Ze.End:s=Ve(i,this.isActivatable)}s&&r&&r.item!==s&&(r.item.tabIndex=-1)},this.onDeactivateItems=()=>{const t=this.items;for(const e of t)this.deactivateItem(e)},this.onRequestActivation=t=>{this.onDeactivateItems();const e=t.target;this.activateItem(e),e.focus()},this.onSlotchange=()=>{const t=this.items;let e=!1;for(const i of t){!(!i.disabled&&i.tabIndex>-1)||e?i.tabIndex=-1:(e=!0,i.tabIndex=0)}if(e)return;const i=Xe(t,this.isActivatable);i&&(i.tabIndex=0)};const{isItem:e,getPossibleItems:i,isRtl:r,deactivateItem:o,activateItem:s,isNavigableKey:a,isActivatable:n,wrapNavigation:l}=t;this.isItem=e,this.getPossibleItems=i,this.isRtl=r,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=a,this.isActivatable=n,this.wrapNavigation=l??(()=>!0)}get items(){const t=this.getPossibleItems(),e=[];for(const i of t){if(this.isItem(i)){e.push(i);continue}const t=i.item;t&&this.isItem(t)&&e.push(t)}return e}activateNextItem(){const t=this.items,e=We(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Je(t,e,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const t=this.items,e=We(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Ke(t,e,this.isActivatable,this.wrapNavigation())}}const ei=function(t,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:t,reason:e,itemPath:[t]}})},ii={SPACE:"Space",ENTER:"Enter"},ri={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},oi={ESCAPE:"Escape",SPACE:ii.SPACE,ENTER:ii.ENTER};function si(t){return Object.values(oi).some(e=>e===t)}function ai(t){return Object.values(ii).some(e=>e===t)}function ni(t,e){const i=new Event("md-contains",{bubbles:!0,composed:!0});let r=[];const o=t=>{r=t.composedPath()};e.addEventListener("md-contains",o),t.dispatchEvent(i),e.removeEventListener("md-contains",o);return r.length>0}const li={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"},ci="end-start",di="start-start";class hi{constructor(t,e){this.host=t,this.getProperties=e,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:t,anchorEl:e,anchorCorner:i,surfaceCorner:r,positioning:o,xOffset:s,yOffset:a,disableBlockFlip:n,disableInlineFlip:l,repositionStrategy:c}=this.getProperties(),d=i.toLowerCase().trim(),h=r.toLowerCase().trim();if(!t||!e)return;const p=window.innerWidth,u=window.innerHeight,m=document.createElement("div");m.style.opacity="0",m.style.position="fixed",m.style.display="block",m.style.inset="0",document.body.appendChild(m);const f=m.getBoundingClientRect();m.remove();const v=window.innerHeight-f.bottom,g=window.innerWidth-f.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,t.popover&&t.isConnected&&t.showPopover();const b=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),y=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),[x,w]=h.split("-"),[_,k]=d.split("-"),$="ltr"===getComputedStyle(t).direction;let{blockInset:z,blockOutOfBoundsCorrection:A,surfaceBlockProperty:S}=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:_,surfaceBlock:x,yOffset:a,positioning:o,windowInnerHeight:u,blockScrollbarHeight:v});if(A&&!n){const t="start"===x?"end":"start",e="start"===_?"end":"start",i=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:e,surfaceBlock:t,yOffset:a,positioning:o,windowInnerHeight:u,blockScrollbarHeight:v});A>i.blockOutOfBoundsCorrection&&(z=i.blockInset,A=i.blockOutOfBoundsCorrection,S=i.surfaceBlockProperty)}let{inlineInset:T,inlineOutOfBoundsCorrection:C,surfaceInlineProperty:E}=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:k,surfaceInline:w,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:p,inlineScrollbarWidth:g});if(C&&!l){const t="start"===w?"end":"start",e="start"===k?"end":"start",i=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:e,surfaceInline:t,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:p,inlineScrollbarWidth:g});Math.abs(C)>Math.abs(i.inlineOutOfBoundsCorrection)&&(T=i.inlineInset,C=i.inlineOutOfBoundsCorrection,E=i.surfaceInlineProperty)}"move"===c&&(z-=A,T-=C),this.surfaceStylesInternal={display:"block",opacity:"1",[S]:`${z}px`,[E]:`${T}px`},"resize"===c&&(A&&(this.surfaceStylesInternal.height=b.height-A+"px"),C&&(this.surfaceStylesInternal.width=b.width-C+"px")),this.host.requestUpdate()}calculateBlock(t){const{surfaceRect:e,anchorRect:i,anchorBlock:r,surfaceBlock:o,yOffset:s,positioning:a,windowInnerHeight:n,blockScrollbarHeight:l}=t,c="fixed"===a||"document"===a?1:0,d="document"===a?1:0,h="start"===o?1:0,p="end"===o?1:0,u=(r!==o?1:0)*i.height+s,m=h*i.top+p*(n-i.bottom-l);return{blockInset:c*m+d*(h*window.scrollY-p*window.scrollY)+u,blockOutOfBoundsCorrection:Math.abs(Math.min(0,n-m-u-e.height)),surfaceBlockProperty:"start"===o?"inset-block-start":"inset-block-end"}}calculateInline(t){const{isLTR:e,surfaceInline:i,anchorInline:r,anchorRect:o,surfaceRect:s,xOffset:a,positioning:n,windowInnerWidth:l,inlineScrollbarWidth:c}=t,d="fixed"===n||"document"===n?1:0,h="document"===n?1:0,p=e?1:0,u=e?0:1,m="start"===i?1:0,f="end"===i?1:0,v=(r!==i?1:0)*o.width+a,g=p*(m*o.left+f*(l-o.right-c))+u*(m*(l-o.right-c)+f*o.left);let b="start"===i?"inset-inline-start":"inset-inline-end";return"document"!==n&&"fixed"!==n||(b="start"===i&&e||"end"===i&&!e?"left":"right"),{inlineInset:d*g+v+h*(p*(m*window.scrollX-f*window.scrollX)+u*(f*window.scrollX-m*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-g-v-s.width)),surfaceInlineProperty:b}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const t=this.getProperties();let e=!1;for(const[i,r]of Object.entries(t))if(e=e||r!==this.lastValues[i],e)break;const i=this.lastValues.isOpen!==t.isOpen,r=!!t.anchorEl,o=!!t.surfaceEl;e&&r&&o&&(this.lastValues.isOpen=t.isOpen,t.isOpen?(this.lastValues=t,await this.position(),t.onOpen()):i&&(await t.beforeClose(),this.close(),t.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const t=this.getProperties().surfaceEl;t?.popover&&t?.isConnected&&t.hidePopover()}}const pi={INDEX:0,ITEM:1,TEXT:2};class ui{constructor(t){this.getProperties=t,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=t=>{this.isTypingAhead?this.typeahead(t):this.beginTypeahead(t)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(t){this.active&&("Space"===t.code||"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((t,e)=>[e,t,t.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(t=>0===t[pi.ITEM].tabIndex)??null,this.lastActiveRecord&&(this.lastActiveRecord[pi.ITEM].tabIndex=-1),this.typeahead(t)))}typeahead(t){if(t.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[pi.ITEM].tabIndex=-1));"Space"===t.code&&t.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=t.key.toLowerCase();const e=this.lastActiveRecord?this.lastActiveRecord[pi.INDEX]:-1,i=this.typeaheadRecords.length,r=t=>(t[pi.INDEX]+i-e)%i,o=this.typeaheadRecords.filter(t=>!t[pi.ITEM].disabled&&t[pi.TEXT].startsWith(this.typaheadBuffer)).sort((t,e)=>r(t)-r(e));if(0===o.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[pi.ITEM].tabIndex=-1),void this.endTypeahead();const s=1===this.typaheadBuffer.length;let a;a=this.lastActiveRecord===o[0]&&s?o[1]??o[0]:o[0],this.lastActiveRecord&&(this.lastActiveRecord[pi.ITEM].tabIndex=-1),this.lastActiveRecord=a,a[pi.ITEM].tabIndex=0,a[pi.ITEM].focus()}}const mi=200,fi=new Set([Ze.ArrowDown,Ze.ArrowUp,Ze.Home,Ze.End]),vi=new Set([Ze.ArrowLeft,Ze.ArrowRight,...fi]);class gi extends ht{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(t){this.currentAnchorElement=t,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=200,this.anchorCorner=ci,this.menuCorner=di,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=li.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=function(){let t=null;return{start:()=>(t?.abort(),t=new AbortController,t.signal),finish(){t=null}}}(),this.listController=new ti({isItem:t=>t.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.selected=!1,t.tabIndex=-1},activateItem:t=>{t.selected=!0,t.tabIndex=0},isNavigableKey:t=>{if(!this.isSubmenu)return vi.has(t);return t===("rtl"===getComputedStyle(this).direction?Ze.ArrowLeft:Ze.ArrowRight)||fi.has(t)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new ui(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new hi(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"})),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async t=>{const e=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(e))return;if(t.relatedTarget){if(ni(t.relatedTarget,this)||0!==this.pointerPath.length&&ni(t.relatedTarget,e))return}else if(this.pointerPath.includes(this))return;const i=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=i},this.onOpened=async()=>{this.lastFocusedElement=function(t=document){let e=t.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}();const t=this.items,e=We(t);e&&this.defaultFocus!==li.NONE&&(e.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case li.FIRST_ITEM:const e=Xe(t);e&&(e.tabIndex=0,e.focus(),await e.updateComplete);break;case li.LAST_ITEM:const i=Ye(t);i&&(i.tabIndex=0,i.focus(),await i.updateComplete);break;case li.LIST_ROOT:this.focus()}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=t=>{this.pointerPath=t.composedPath()},this.onDocumentClick=t=>{if(!this.open)return;const e=t.composedPath();this.stayOpenOnOutsideClick||e.includes(this)||e.includes(this.anchorElement)||(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(t){t.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(t){t.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return V`
      <div
        class="menu ${Yt(this.getSurfaceClasses())}"
        style=${Ee(this.menuPositionController.surfaceStyles)}
        popover=${"popover"===this.positioning?"manual":X}>
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
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return V`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(t){t.target===this&&!t.defaultPrevented&&si(t.code)&&(t.preventDefault(),this.close()),this.typeaheadController.onKeydown(t)}async animateOpen(){const t=this.surfaceEl,e=this.slotEl;if(!t||!e)return!0;const i=this.openDirection;this.dispatchEvent(new Event("opening")),t.classList.toggle("animating",!0);const r=this.openCloseAnimationSignal.start(),o=t.offsetHeight,s="UP"===i,a=this.items,n=250/a.length,l=t.animate([{height:"0px"},{height:`${o}px`}],{duration:500,easing:Jt.EMPHASIZED}),c=e.animate([{transform:s?`translateY(-${o}px)`:""},{transform:""}],{duration:500,easing:Jt.EMPHASIZED}),d=t.animate([{opacity:0},{opacity:1}],50),h=[];for(let t=0;t<a.length;t++){const e=a[s?a.length-1-t:t],i=e.animate([{opacity:0},{opacity:1}],{duration:250,delay:n*t});e.classList.toggle("md-menu-hidden",!0),i.addEventListener("finish",()=>{e.classList.toggle("md-menu-hidden",!1)}),h.push([e,i])}let p=t=>{};const u=new Promise(t=>{p=t});return r.addEventListener("abort",()=>{l.cancel(),c.cancel(),d.cancel(),h.forEach(([t,e])=>{t.classList.toggle("md-menu-hidden",!1),e.cancel()}),p(!0)}),l.addEventListener("finish",()=>{t.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),p(!1)}),await u}animateClose(){let t;const e=new Promise(e=>{t=e}),i=this.surfaceEl,r=this.slotEl;if(!i||!r)return t(!1),e;const o="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),i.classList.toggle("animating",!0);const s=this.openCloseAnimationSignal.start(),a=i.offsetHeight,n=this.items,l=150,c=50/n.length,d=i.animate([{height:`${a}px`},{height:.35*a+"px"}],{duration:l,easing:Jt.EMPHASIZED_ACCELERATE}),h=r.animate([{transform:""},{transform:o?`translateY(-${.65*a}px)`:""}],{duration:l,easing:Jt.EMPHASIZED_ACCELERATE}),p=i.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),u=[];for(let t=0;t<n.length;t++){const e=n[o?t:n.length-1-t],i=e.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+c*t});i.addEventListener("finish",()=>{e.classList.toggle("md-menu-hidden",!0)}),u.push([e,i])}return s.addEventListener("abort",()=>{d.cancel(),h.cancel(),p.cancel(),u.forEach(([t,e])=>{e.cancel(),t.classList.toggle("md-menu-hidden",!1)}),t(!1)}),d.addEventListener("finish",()=>{i.classList.toggle("animating",!1),u.forEach(([t])=>{t.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),t(!0)}),e}handleKeydown(t){this.pointerPath=[],this.listController.handleKeydown(t)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(t){t.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(t){t.stopPropagation(),this.listController.onRequestActivation(t)}handleDeactivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach(t=>{t.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}r([yt(".menu")],gi.prototype,"surfaceEl",void 0),r([yt("slot")],gi.prototype,"slotEl",void 0),r([vt()],gi.prototype,"anchor",void 0),r([vt()],gi.prototype,"positioning",void 0),r([vt({type:Boolean})],gi.prototype,"quick",void 0),r([vt({type:Boolean,attribute:"has-overflow"})],gi.prototype,"hasOverflow",void 0),r([vt({type:Boolean,reflect:!0})],gi.prototype,"open",void 0),r([vt({type:Number,attribute:"x-offset"})],gi.prototype,"xOffset",void 0),r([vt({type:Number,attribute:"y-offset"})],gi.prototype,"yOffset",void 0),r([vt({type:Boolean,attribute:"no-horizontal-flip"})],gi.prototype,"noHorizontalFlip",void 0),r([vt({type:Boolean,attribute:"no-vertical-flip"})],gi.prototype,"noVerticalFlip",void 0),r([vt({type:Number,attribute:"typeahead-delay"})],gi.prototype,"typeaheadDelay",void 0),r([vt({attribute:"anchor-corner"})],gi.prototype,"anchorCorner",void 0),r([vt({attribute:"menu-corner"})],gi.prototype,"menuCorner",void 0),r([vt({type:Boolean,attribute:"stay-open-on-outside-click"})],gi.prototype,"stayOpenOnOutsideClick",void 0),r([vt({type:Boolean,attribute:"stay-open-on-focusout"})],gi.prototype,"stayOpenOnFocusout",void 0),r([vt({type:Boolean,attribute:"skip-restore-focus"})],gi.prototype,"skipRestoreFocus",void 0),r([vt({attribute:"default-focus"})],gi.prototype,"defaultFocus",void 0),r([vt({type:Boolean,attribute:"no-navigation-wrap"})],gi.prototype,"noNavigationWrap",void 0),r([_t({flatten:!0})],gi.prototype,"slotItems",void 0),r([gt()],gi.prototype,"typeaheadActive",void 0);const bi=d`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;let yi=class extends gi{};yi.styles=[bi],yi=r([ut("md-menu")],yi);class xi extends ye{renderElevationOrOutline(){return V`<div class="outline"></div>`}}const wi=d`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host(:is([disabled],[soft-disabled])) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])) .background{border-color:GrayText}:host(:is([disabled],[soft-disabled])) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;let _i=class extends xi{};_i.styles=[Nt,wi],_i=r([ut("md-outlined-button")],_i);const ki=Symbol.for(""),$i=t=>{if(t?.r===ki)return t?._$litStatic$},zi=(t,...e)=>({_$litStatic$:e.reduce((e,i,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:ki}),Ai=new Map,Si=(t=>(e,...i)=>{const r=i.length;let o,s;const a=[],n=[];let l,c=0,d=!1;for(;c<r;){for(l=e[c];c<r&&void 0!==(s=i[c],o=$i(s));)l+=o+e[++c],d=!0;c!==r&&n.push(s),a.push(l),c++}if(c===r&&a.push(e[r]),d){const t=a.join("$$lit$$");void 0===(e=Ai.get(t))&&(a.raw=a,Ai.set(t,e=a)),i=n}return t(e,...i)})(V);function Ti(t,e=!0){return e&&"rtl"===getComputedStyle(t).getPropertyValue("direction").trim()}const Ci=le(ue(ht));class Ei extends Ci{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[he].form}get labels(){return this[he].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Ti(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){const t=this.href?zi`div`:zi`button`,{ariaLabel:e,ariaHasPopup:i,ariaExpanded:r}=this,o=e&&this.ariaLabelSelected,s=this.toggle?this.selected:X;let a=X;return this.href||(a=o&&this.selected?this.ariaLabelSelected:e),Si`<${t}
        class="icon-button ${Yt(this.getRenderClasses())}"
        id="button"
        aria-label="${a||X}"
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
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return V`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||X}"
        target="${this.target||X}"
        aria-label="${t||X}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return V`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return V`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return V`<span class="touch"></span>`}renderFocusRing(){return V`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){const t=!this.href&&(this.disabled||this.softDisabled);return V`<md-ripple
      for=${this.href?"link":X}
      ?disabled="${t}"></md-ripple>`}connectedCallback(){this.flipIcon=Ti(this,this.flipIconInRtl),super.connectedCallback()}handleClick(t){if(!this.href&&this.softDisabled)return t.stopImmediatePropagation(),void t.preventDefault()}async handleClickOnChild(t){await 0,!this.toggle||this.disabled||this.softDisabled||t.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}me(Ei),Ei.formAssociated=!0,Ei.shadowRootOptions={mode:"open",delegatesFocus:!0},r([vt({type:Boolean,reflect:!0})],Ei.prototype,"disabled",void 0),r([vt({type:Boolean,attribute:"soft-disabled",reflect:!0})],Ei.prototype,"softDisabled",void 0),r([vt({type:Boolean,attribute:"flip-icon-in-rtl"})],Ei.prototype,"flipIconInRtl",void 0),r([vt()],Ei.prototype,"href",void 0),r([vt()],Ei.prototype,"download",void 0),r([vt()],Ei.prototype,"target",void 0),r([vt({attribute:"aria-label-selected"})],Ei.prototype,"ariaLabelSelected",void 0),r([vt({type:Boolean})],Ei.prototype,"toggle",void 0),r([vt({type:Boolean,reflect:!0})],Ei.prototype,"selected",void 0),r([vt()],Ei.prototype,"type",void 0),r([vt({reflect:!0})],Ei.prototype,"value",void 0),r([gt()],Ei.prototype,"flipIcon",void 0);const Ii=d`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`,Pi=d`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}
`;let Oi=class extends Ei{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Oi.styles=[Ii,Pi],Oi=r([ut("md-icon-button")],Oi);let Mi=class extends ht{constructor(){super(...arguments),this.#yt=40,this.#m=0,this.#u="",this.#d="",this.#zt="",this.positioning="popover"}#yt;get size(){return this.#yt}set size(t){this.#yt=t}#p;get profilePictureFileName(){return this.#p}set profilePictureFileName(t){this.#p=t}#m;get personId(){return this.#m}set personId(t){this.#m=t}#u;get email(){return this.#u}set email(t){this.#u=t}#d;get company(){return this.#d}set company(t){this.#d=t}#zt;get name(){return this.#zt}set name(t){this.#zt=t}#At;get menu(){return this.#At}set menu(t){this.#At=t}firstUpdated(){Rt().addEventListener(Ot.eventName,()=>this.setUserProps()),this.setUserProps()}setUserProps(){this.personId=Rt().personId,this.profilePictureFileName=Rt().profilePictureFileName,this.email=Rt().email,this.company=Rt().company,this.name=Rt().fullname}updated(t){t.has("size")&&t.get("size")!==this.size&&(this.style.width=this.size+"px",this.style.height=this.size+"px"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}static{this.styles=d`
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
        @click=${()=>{this.personId?this.menu.open=!this.menu.open:Rt().authenticateAsync()}}
        style=${Ee({height:`${this.size}px`,width:`${this.size}px`})}
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
          <md-text-button @click=${()=>Rt().logout()}>Sign out</md-text-button>
        </footer>
      </md-menu>
    `}};r([vt({type:Number})],Mi.prototype,"size",null),r([vt({type:String})],Mi.prototype,"profilePictureFileName",null),r([vt({type:Number})],Mi.prototype,"personId",null),r([vt({type:String})],Mi.prototype,"email",null),r([vt({type:String})],Mi.prototype,"company",null),r([vt({type:String})],Mi.prototype,"name",null),r([yt("md-menu")],Mi.prototype,"menu",null),r([vt()],Mi.prototype,"positioning",void 0),Mi=r([ut("profile-picture-menu")],Mi);class Ri extends ht{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}r([vt({type:Boolean,reflect:!0})],Ri.prototype,"inset",void 0),r([vt({type:Boolean,reflect:!0,attribute:"inset-start"})],Ri.prototype,"insetStart",void 0),r([vt({type:Boolean,reflect:!0,attribute:"inset-end"})],Ri.prototype,"insetEnd",void 0);const Bi=d`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;let Ni=class extends Ri{};function ji(t,e){!e.bubbles||t.shadowRoot&&!e.composed||e.stopPropagation();const i=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(i);return r||e.preventDefault(),r}Ni.styles=[Bi],Ni=r([ut("md-divider")],Ni);const Li={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Jt.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Jt.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},Ui={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Jt.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Jt.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]},Fi=le(ht);class Di extends Fi{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>Li,this.getCloseAnimation=()=>Ui,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(t=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const e=this.dialog;if(!e.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=t;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),e.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),e={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,r=V`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:o}=this;return V`
      <div class="scrim"></div>
      <dialog
        class=${Yt(e)}
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(t=>{for(const e of t)this.handleAnchorIntersection(e)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:i}=t;"dialog"===e.getAttribute("method")&&i&&this.close(i.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const e=!ji(this,t);t.preventDefault(),e||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(t){"Escape"===t.key&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(t){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:e,scrim:i,container:r,headline:o,content:s,actions:a}=this;if(!(e&&i&&r&&o&&s&&a))return;const{container:n,dialog:l,scrim:c,headline:d,content:h,actions:p}=t,u=[[e,l??[]],[i,c??[]],[r,n??[]],[o,d??[]],[s,h??[]],[a,p??[]]],m=[];for(const[t,e]of u)for(const i of e){const e=t.animate(...i);this.cancelAnimations.signal.addEventListener("abort",()=>{e.cancel()}),m.push(e)}await Promise.all(m.map(t=>t.finished.catch(()=>{})))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}handleAnchorIntersection(t){const{target:e,isIntersecting:i}=t;e===this.topAnchor&&(this.isAtScrollTop=i),e===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise(t=>{this.isConnectedPromiseResolve=t})}handleFocusTrapFocus(t){const[e,i]=this.getFirstAndLastFocusableChildren();if(!e||!i)return void this.dialog?.focus();const r=t.target===this.firstFocusTrap,o=!r,s=t.relatedTarget===e,a=t.relatedTarget===i,n=!s&&!a;if(o&&a||r&&n)return void e.focus();(r&&s||o&&n)&&i.focus()}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let t=null,e=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;Gi(i)&&(t||(t=i),e=i)}return[t,e]}}function Gi(t){const e=":not(:disabled,[disabled])";if(t.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+e+':not([tabindex^="-"])'))return!0;return!!t.localName.includes("-")&&(!!t.matches(e)&&(t.shadowRoot?.delegatesFocus??!1))}r([vt({type:Boolean})],Di.prototype,"open",null),r([vt({type:Boolean})],Di.prototype,"quick",void 0),r([vt({attribute:!1})],Di.prototype,"returnValue",void 0),r([vt()],Di.prototype,"type",void 0),r([vt({type:Boolean,attribute:"no-focus-trap"})],Di.prototype,"noFocusTrap",void 0),r([yt("dialog")],Di.prototype,"dialog",void 0),r([yt(".scrim")],Di.prototype,"scrim",void 0),r([yt(".container")],Di.prototype,"container",void 0),r([yt(".headline")],Di.prototype,"headline",void 0),r([yt(".content")],Di.prototype,"content",void 0),r([yt(".actions")],Di.prototype,"actions",void 0),r([gt()],Di.prototype,"isAtScrollTop",void 0),r([gt()],Di.prototype,"isAtScrollBottom",void 0),r([yt(".scroller")],Di.prototype,"scroller",void 0),r([yt(".top.anchor")],Di.prototype,"topAnchor",void 0),r([yt(".bottom.anchor")],Di.prototype,"bottomAnchor",void 0),r([yt(".focus-trap")],Di.prototype,"firstFocusTrap",void 0),r([gt()],Di.prototype,"hasHeadline",void 0),r([gt()],Di.prototype,"hasActions",void 0),r([gt()],Di.prototype,"hasIcon",void 0);const qi=d`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;let Hi=class extends Di{};Hi.styles=[qi],Hi=r([ut("md-dialog")],Hi);class Vi extends ht{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const t=this.count??-1,e=this.max??-1;return t<0||e<=0?"":`${t} / ${e}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&void 0!==t.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){const t=this.renderLabel(!0),e=this.renderLabel(!1),i=this.renderOutline?.(t),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return V`
      <div class="field ${Yt(r)}">
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
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return X;const i=V`<span>${t}</span>`,r=e?V`<span class="counter">${e}</span>`:X,o=this.error&&this.errorText&&!this.refreshErrorAlert;return V`
      <div class="supporting-text" role=${o?"alert":X}>${i}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)ct(V`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return X;let e;e=t?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const i={hidden:!e,floating:t,resting:!t},r=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return V`
      <span class="label ${Yt(i)}" aria-hidden=${!e}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){if(!this.label)return;t??=this.focused,e??=this.populated;(t||e)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:Jt.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:i,y:r,height:o}=t.getBoundingClientRect(),{x:s,y:a,height:n}=e.getBoundingClientRect(),l=t.scrollWidth,c=e.scrollWidth,d=c/l,h=`translateX(${s-i}px) translateY(${a-r+Math.round((n-o*d)/2)}px) scale(${d})`,p="translateX(0) translateY(0) scale(1)",u=e.clientWidth,m=c>u?u/d+"px":"";return this.focused||this.populated?[{transform:h,width:m},{transform:p,width:m}]:[{transform:p,width:m},{transform:h,width:m}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}r([vt({type:Boolean})],Vi.prototype,"disabled",void 0),r([vt({type:Boolean})],Vi.prototype,"error",void 0),r([vt({type:Boolean})],Vi.prototype,"focused",void 0),r([vt()],Vi.prototype,"label",void 0),r([vt({type:Boolean,attribute:"no-asterisk"})],Vi.prototype,"noAsterisk",void 0),r([vt({type:Boolean})],Vi.prototype,"populated",void 0),r([vt({type:Boolean})],Vi.prototype,"required",void 0),r([vt({type:Boolean})],Vi.prototype,"resizable",void 0),r([vt({attribute:"supporting-text"})],Vi.prototype,"supportingText",void 0),r([vt({attribute:"error-text"})],Vi.prototype,"errorText",void 0),r([vt({type:Number})],Vi.prototype,"count",void 0),r([vt({type:Number})],Vi.prototype,"max",void 0),r([vt({type:Boolean,attribute:"has-start"})],Vi.prototype,"hasStart",void 0),r([vt({type:Boolean,attribute:"has-end"})],Vi.prototype,"hasEnd",void 0),r([_t({slot:"aria-describedby"})],Vi.prototype,"slottedAriaDescribedBy",void 0),r([gt()],Vi.prototype,"isAnimating",void 0),r([gt()],Vi.prototype,"refreshErrorAlert",void 0),r([gt()],Vi.prototype,"disableTransitions",void 0),r([yt(".label.floating")],Vi.prototype,"floatingLabelEl",void 0),r([yt(".label.resting")],Vi.prototype,"restingLabelEl",void 0),r([yt(".container")],Vi.prototype,"containerEl",void 0);class Wi extends Vi{renderOutline(t){return V`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${t}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}}const Xi=d`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`,Yi=d`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;let Ji=class extends Wi{};Ji.styles=[Yi,Xi],Ji=r([ut("md-outlined-field")],Ji);const Ki=d`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`,{I:Qi}=nt,Zi=()=>document.createComment(""),tr=(t,e,i)=>{const r=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=r.insertBefore(Zi(),o),s=r.insertBefore(Zi(),o);i=new Qi(e,s,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,a=s!==t;if(a){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==o||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,o),t=e}}}return i},er=(t,e,i=t)=>(t._$AI(e,i),t),ir={},rr=(t,e=ir)=>t._$AH=e,or=t=>{t._$AR(),t._$AA.remove()},sr=Wt(class extends Xt{constructor(t){if(super(t),t.type!==Vt.PROPERTY&&t.type!==Vt.ATTRIBUTE&&t.type!==Vt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===W||e===X)return e;const i=t.element,r=t.name;if(t.type===Vt.PROPERTY){if(e===i[r])return W}else if(t.type===Vt.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(r))return W}else if(t.type===Vt.ATTRIBUTE&&i.getAttribute(r)===e+"")return W;return rr(t),e}}),ar={fromAttribute:t=>t??"",toAttribute:t=>t||null},nr=Symbol("createValidator"),lr=Symbol("getValidityAnchor"),cr=Symbol("privateValidator"),dr=Symbol("privateSyncValidity"),hr=Symbol("privateCustomValidationMessage");function pr(t){var e;class i extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[dr](),this[he].validity}get validationMessage(){return this[dr](),this[he].validationMessage}get willValidate(){return this[dr](),this[he].willValidate}checkValidity(){return this[dr](),this[he].checkValidity()}reportValidity(){return this[dr](),this[he].reportValidity()}setCustomValidity(t){this[hr]=t,this[dr]()}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[dr]()}firstUpdated(t){super.firstUpdated(t),this[dr]()}[(e=hr,dr)](){this[cr]||(this[cr]=this[nr]());const{validity:t,validationMessage:e}=this[cr].getValidity(),i=!!this[hr],r=this[hr]||e;this[he].setValidity({...t,customError:i},r,this[lr]()??void 0)}[nr](){throw new Error("Implement [createValidator]")}[lr](){throw new Error("Implement [getValidityAnchor]")}}return i}const ur=Symbol("getFormValue"),mr=Symbol("getFormState");function fr(t){class e extends t{get form(){return this[he].form}get labels(){return this[he].labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t,e,i){if("name"===t||"disabled"===t){const i="disabled"===t?null!==e:e;return void this.requestUpdate(t,i)}super.attributeChangedCallback(t,e,i)}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[he].setFormValue(this[ur](),this[mr]())}[ur](){throw new Error("Implement [getFormValue]")}[mr](){return this[ur]()}formDisabledCallback(t){this.disabled=t}}return e.formAssociated=!0,r([vt({noAccessor:!0})],e.prototype,"name",null),r([vt({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}const vr=Symbol("onReportValidity"),gr=Symbol("privateCleanupFormListeners"),br=Symbol("privateDoNotReportInvalid"),yr=Symbol("privateIsSelfReportingValidity"),xr=Symbol("privateCallOnReportValidity");function wr(t){var e,i,r;class o extends t{constructor(...t){super(...t),this[e]=new AbortController,this[i]=!1,this[r]=!1,this.addEventListener("invalid",t=>{!this[br]&&t.isTrusted&&this.addEventListener("invalid",()=>{this[xr](t)},{once:!0})},{capture:!0})}checkValidity(){this[br]=!0;const t=super.checkValidity();return this[br]=!1,t}reportValidity(){this[yr]=!0;const t=super.reportValidity();return t&&this[xr](null),this[yr]=!1,t}[(e=gr,i=br,r=yr,xr)](t){const e=t?.defaultPrevented;if(e)return;this[vr](t);!e&&t?.defaultPrevented&&(this[yr]||function(t,e){if(!t)return!0;let i;for(const e of t.elements)if(e.matches(":invalid")){i=e;break}return i===e}(this[he].form,this))&&this.focus()}[vr](t){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(t){super.formAssociatedCallback&&super.formAssociatedCallback(t),this[gr].abort(),t&&(this[gr]=new AbortController,function(t,e,i,r){const o=function(t){if(!_r.has(t)){const e=new EventTarget;_r.set(t,e);for(const i of["reportValidity","requestSubmit"]){const r=t[i];t[i]=function(){e.dispatchEvent(new Event("before"));const t=Reflect.apply(r,this,arguments);return e.dispatchEvent(new Event("after")),t}}}return _r.get(t)}(e);let s,a=!1,n=!1;o.addEventListener("before",()=>{n=!0,s=new AbortController,a=!1,t.addEventListener("invalid",()=>{a=!0},{signal:s.signal})},{signal:r}),o.addEventListener("after",()=>{n=!1,s?.abort(),a||i()},{signal:r}),e.addEventListener("submit",()=>{n||i()},{signal:r})}(this,t,()=>{this[xr](null)},this[gr].signal))}}return o}const _r=new WeakMap;class kr{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;const{validity:e,validationMessage:i}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:i,validity:{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing}},this.currentValidity}}class $r extends kr{computeValidity({state:t,renderedControl:e}){let i=e;zr(t)&&!i?(i=this.inputControl||document.createElement("input"),this.inputControl=i):i||(i=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=i);const r=zr(t)?i:null;if(r&&(r.type=t.type),i.value!==t.value&&(i.value=t.value),i.required=t.required,r){const e=t;e.pattern?r.pattern=e.pattern:r.removeAttribute("pattern"),e.min?r.min=e.min:r.removeAttribute("min"),e.max?r.max=e.max:r.removeAttribute("max"),e.step?r.step=e.step:r.removeAttribute("step")}return(t.minLength??-1)>-1?i.setAttribute("minlength",String(t.minLength)):i.removeAttribute("minlength"),(t.maxLength??-1)>-1?i.setAttribute("maxlength",String(t.maxLength)):i.removeAttribute("maxlength"),{validity:i.validity,validationMessage:i.validationMessage}}equals({state:t},{state:e}){const i=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return zr(t)&&zr(e)?i&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step:i}copy({state:t}){return{state:zr(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:e,pattern:i,min:r,max:o,step:s}=t;return{...this.copySharedState(t),type:e,pattern:i,min:r,max:o,step:s}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:i,maxLength:r}){return{value:t,required:e,minLength:i,maxLength:r}}}function zr(t){return"textarea"!==t.type}const Ar=le(wr(pr(fr(ue(ht)))));class Sr extends Ar{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,i){this.getInputOrTextarea().setSelectionRange(t,e,i)}showPicker(){const t=this.getInput();t&&t.showPicker()}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return V`
      <span class="text-field ${Yt(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return Si`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return V`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return V`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||X,i=this.autocomplete,r=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if("textarea"===this.type)return V`
        <textarea
          class="input"
          style=${Ee(t)}
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
          .value=${sr(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const s=this.renderPrefix(),a=this.renderSuffix(),n=this.inputMode;return V`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${Ee(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||X}
          name=${this.name||X}
          ?disabled=${this.disabled}
          inputmode=${n||X}
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
          .value=${sr(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${a}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){if(!t)return X;return V`<span class="${Yt({suffix:e,prefix:!e})}">${t}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){ji(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[ur](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[nr](){return new $r(()=>({state:this,renderedControl:this.inputOrTextarea}))}[lr](){return this.inputOrTextarea}[vr](t){t?.preventDefault();const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}}Sr.shadowRootOptions={...ht.shadowRootOptions,delegatesFocus:!0},r([vt({type:Boolean,reflect:!0})],Sr.prototype,"error",void 0),r([vt({attribute:"error-text"})],Sr.prototype,"errorText",void 0),r([vt()],Sr.prototype,"label",void 0),r([vt({type:Boolean,attribute:"no-asterisk"})],Sr.prototype,"noAsterisk",void 0),r([vt({type:Boolean,reflect:!0})],Sr.prototype,"required",void 0),r([vt()],Sr.prototype,"value",void 0),r([vt({attribute:"prefix-text"})],Sr.prototype,"prefixText",void 0),r([vt({attribute:"suffix-text"})],Sr.prototype,"suffixText",void 0),r([vt({type:Boolean,attribute:"has-leading-icon"})],Sr.prototype,"hasLeadingIcon",void 0),r([vt({type:Boolean,attribute:"has-trailing-icon"})],Sr.prototype,"hasTrailingIcon",void 0),r([vt({attribute:"supporting-text"})],Sr.prototype,"supportingText",void 0),r([vt({attribute:"text-direction"})],Sr.prototype,"textDirection",void 0),r([vt({type:Number})],Sr.prototype,"rows",void 0),r([vt({type:Number})],Sr.prototype,"cols",void 0),r([vt({reflect:!0})],Sr.prototype,"inputMode",void 0),r([vt()],Sr.prototype,"max",void 0),r([vt({type:Number})],Sr.prototype,"maxLength",void 0),r([vt()],Sr.prototype,"min",void 0),r([vt({type:Number})],Sr.prototype,"minLength",void 0),r([vt({type:Boolean,attribute:"no-spinner"})],Sr.prototype,"noSpinner",void 0),r([vt()],Sr.prototype,"pattern",void 0),r([vt({reflect:!0,converter:ar})],Sr.prototype,"placeholder",void 0),r([vt({type:Boolean,reflect:!0})],Sr.prototype,"readOnly",void 0),r([vt({type:Boolean,reflect:!0})],Sr.prototype,"multiple",void 0),r([vt()],Sr.prototype,"step",void 0),r([vt({reflect:!0})],Sr.prototype,"type",void 0),r([vt({reflect:!0})],Sr.prototype,"autocomplete",void 0),r([gt()],Sr.prototype,"dirty",void 0),r([gt()],Sr.prototype,"focused",void 0),r([gt()],Sr.prototype,"nativeError",void 0),r([gt()],Sr.prototype,"nativeErrorText",void 0),r([yt(".input")],Sr.prototype,"inputOrTextarea",void 0),r([yt(".field")],Sr.prototype,"field",void 0),r([_t({slot:"leading-icon"})],Sr.prototype,"leadingIcons",void 0),r([_t({slot:"trailing-icon"})],Sr.prototype,"trailingIcons",void 0);class Tr extends Sr{constructor(){super(...arguments),this.fieldTag=zi`md-outlined-field`}}const Cr=d`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;let Er=class extends Tr{constructor(){super(...arguments),this.fieldTag=zi`md-outlined-field`}};Er.styles=[Cr,Ki],Er=r([ut("md-outlined-text-field")],Er);let Ir=class extends Ji{constructor(){super(...arguments),this.populated=!0}#St;get evaluator(){return this.#St}set evaluator(t){this.#St=t}firstUpdated(){this.addEventListener("focusin",()=>this.focused=!0),this.addEventListener("focusout",()=>this.focused=!1)}reset(){this.error=!1}reportValidity(){const t=this.checkValidity();return this.error=!t,t}checkValidity(){return!!this.evaluator()}};r([vt({type:Boolean})],Ir.prototype,"populated",void 0),r([vt({type:Object})],Ir.prototype,"evaluator",null),Ir=r([ut("titanium-outlined-input-validator")],Ir);class Pr extends Vi{renderBackground(){return V` <div class="background"></div> `}renderStateLayer(){return V` <div class="state-layer"></div> `}renderIndicator(){return V`<div class="active-indicator"></div>`}}const Or=d`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-filled-field-content-space, 16px);--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_with-leading-content-leading-space: var(--md-filled-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-filled-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;let Mr=class extends Pr{};Mr.styles=[Yi,Or],Mr=r([ut("md-filled-field")],Mr);let Rr=class extends Mr{constructor(){super(...arguments),this.populated=!0}#St;get evaluator(){return this.#St}set evaluator(t){this.#St=t}firstUpdated(){this.addEventListener("focusin",()=>this.focused=!0),this.addEventListener("focusout",()=>this.focused=!1)}reset(){this.error=!1}reportValidity(){const t=this.checkValidity();return this.error=!t,t}checkValidity(){return!!this.evaluator()}};r([vt({type:Boolean})],Rr.prototype,"populated",void 0),r([vt({type:Object})],Rr.prototype,"evaluator",null),Rr=r([ut("titanium-filled-input-validator")],Rr);let Br=class extends ht{#Tt=!1;get filled(){return this.#Tt}set filled(t){this.#Tt=t}#Ct;get label(){return this.#Ct}set label(t){this.#Ct=t}#Et="No items";get noItemsText(){return this.#Et}set noItemsText(t){this.#Et=t}#It=!1;get required(){return this.#It}set required(t){this.#It=t}#Pt;get hasItems(){return this.#Pt}set hasItems(t){this.#Pt=t}#Ot;get supportingText(){return this.#Ot}set supportingText(t){this.#Ot=t}#Mt;get error(){return this.#Mt}set error(t){this.#Mt=t}#Rt;get errorText(){return this.#Rt}set errorText(t){this.#Rt=t}#Bt;get resizable(){return this.#Bt}set resizable(t){this.#Bt=t}#Nt;get disabled(){return this.#Nt}set disabled(t){this.#Nt=t}#jt;get validator(){return this.#jt}set validator(t){this.#jt=t}updated(t){(t.get("hasItems")&&t.has("hasItems")||this.hasItems&&t.has("hasItems"))&&this.reportValidity()}checkValidity(){return this.validator?.checkValidity()}reportValidity(){return this.validator?.reportValidity()}reset(){this.validator?.reset()}static{this.styles=[d`
      :host {
        display: block;
        width: 100%;
      }

      titanium-outlined-input-validator,
      titanium-filled-input-validator {
        display: block;
        width: 100%;
      }

      slot-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
      }

      span {
        font-size: 13px;
      }

      :host([filled]) {
        --md-filled-field-container-shape: 16px;

        --md-filled-field-active-indicator-height: 0;
        --md-filled-field-error-active-indicator-height: 0;
        --md-filled-field-hover-active-indicator-height: 0;
        --md-filled-field-focus-active-indicator-height: 0;
        --md-filled-field-disabled-active-indicator-height: 0;

        slot-container {
          margin-top: 6px;
        }

        titanium-filled-input-validator {
          --md-filled-field-with-label-bottom-space: 12px;
        }

        ::slotted(md-filled-button),
        ::slotted(md-filled-tonal-button) {
          --md-filled-button-container-shape: 8px;
          --md-filled-button-container-height: 32px;

          --md-filled-button-with-trailing-icon-leading-space: 8px;
          --md-filled-button-with-trailing-icon-trailing-space: 16px;
          --md-filled-button-with-leading-icon-leading-space: 8px;
          --md-filled-button-with-leading-icon-trailing-space: 16px;

          --md-filled-tonal-button-with-trailing-icon-leading-space: 8px;
          --md-filled-tonal-button-with-trailing-icon-trailing-space: 16px;
          --md-filled-tonal-button-with-leading-icon-leading-space: 8px;
          --md-filled-tonal-button-with-leading-icon-trailing-space: 16px;
          --md-filled-tonal-button-container-shape: 8px;
          --md-filled-tonal-button-container-height: 32px;
        }

        ::slotted(md-input-chip) {
          background: var(--md-sys-color-surface-container);
          --md-sys-color-outline: transparent;
        }
      }
    `]}render(){return Si`
      <${this.filled?zi`titanium-filled-input-validator`:zi`titanium-outlined-input-validator`}
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
          ${this.hasItems?"":Si` <span>${this.noItemsText}</span>`}
        </slot-container>
      </${this.filled?zi`titanium-filled-input-validator`:zi`titanium-outlined-input-validator`}>
    `}};r([vt({type:Boolean,attribute:"filled"})],Br.prototype,"filled",null),r([vt({type:String})],Br.prototype,"label",null),r([vt({type:String})],Br.prototype,"noItemsText",null),r([vt({type:Boolean})],Br.prototype,"required",null),r([vt({type:Boolean})],Br.prototype,"hasItems",null),r([vt({type:String})],Br.prototype,"supportingText",null),r([vt({type:Boolean})],Br.prototype,"error",null),r([vt({type:String})],Br.prototype,"errorText",null),r([vt({type:Boolean})],Br.prototype,"resizable",null),r([vt({type:Boolean,reflect:!0})],Br.prototype,"disabled",null),r([yt("titanium-outlined-input-validator, titanium-filled-input-validator")],Br.prototype,"validator",null),Br=r([ut("titanium-chip-multi-select")],Br);class Nr extends ye{renderElevationOrOutline(){return V`<md-elevation part="elevation"></md-elevation>`}}const jr=d`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`,Lr=d`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;let Ur=class extends Nr{};Ur.styles=[Nt,Lr,jr],Ur=r([ut("md-filled-tonal-button")],Ur);const Fr="undefined"!=typeof window&&void 0!==window.document,Dr=Fr?window:{},Gr=!!Fr&&"ontouchstart"in Dr.document.documentElement,qr=!!Fr&&"PointerEvent"in Dr,Hr="cropper",Vr=`${Hr}-canvas`,Wr=`${Hr}-crosshair`,Xr=`${Hr}-grid`,Yr=`${Hr}-handle`,Jr=`${Hr}-image`,Kr=`${Hr}-selection`,Qr=`${Hr}-shade`,Zr=`${Hr}-viewer`,to="select",eo="move",io="scale",ro="rotate",oo="transform",so="none",ao="n-resize",no="e-resize",lo="s-resize",co="w-resize",ho="ne-resize",po="nw-resize",uo="se-resize",mo="sw-resize",fo=qr?"pointerdown":Gr?"touchstart":"mousedown",vo=qr?"pointermove":Gr?"touchmove":"mousemove",go=qr?"pointerup pointercancel":Gr?"touchend touchcancel":"mouseup",bo="error",yo="keydown",xo="load",wo="wheel",_o="action",ko="actionend",$o="actionstart",zo="change",Ao="transform";const So=Number.isNaN||Dr.isNaN;function To(t){return"number"==typeof t&&!So(t)}function Co(t){return To(t)&&t>0&&t<1/0}function Eo(t){return"object"==typeof t&&null!==t}const{hasOwnProperty:Io}=Object.prototype;function Po(t){if(!Eo(t))return!1;try{const{constructor:e}=t,{prototype:i}=e;return e&&i&&Io.call(i,"isPrototypeOf")}catch(t){return!1}}function Oo(t){return"function"==typeof t}function Mo(t){return"object"==typeof t&&null!==t&&1===t.nodeType}const Ro=/([a-z\d])([A-Z])/g;function Bo(t){return String(t).replace(Ro,"$1-$2").toLowerCase()}const No=/-[A-z\d]/g;function jo(t){return t.replace(No,t=>t.slice(1).toUpperCase())}const Lo=/\s\s*/;function Uo(t,e,i,r){e.trim().split(Lo).forEach(e=>{t.removeEventListener(e,i,r)})}function Fo(t,e,i,r){e.trim().split(Lo).forEach(e=>{t.addEventListener(e,i,r)})}function Do(t,e,i,r){Fo(t,e,i,Object.assign(Object.assign({},r),{once:!0}))}const Go={bubbles:!0,cancelable:!0,composed:!0};const qo=Promise.resolve();function Ho(t){const{documentElement:e}=t.ownerDocument,i=t.getBoundingClientRect();return{left:i.left+(Dr.pageXOffset-e.clientLeft),top:i.top+(Dr.pageYOffset-e.clientTop)}}const Vo=/deg|g?rad|turn$/i;function Wo(t){const e=parseFloat(t)||0;if(0!==e){const[i="rad"]=String(t).match(Vo)||[];switch(i.toLowerCase()){case"deg":return e/360*(2*Math.PI);case"grad":return e/400*(2*Math.PI);case"turn":return e*(2*Math.PI)}}return e}const Xo="contain";function Yo(t,e=Xo){const{aspectRatio:i}=t;let{width:r,height:o}=t;const s=Co(r),a=Co(o);if(s&&a){const t=o*i;e===Xo&&t>r||"cover"===e&&t<r?o=r/i:r=o*i}else s?o=r/i:a&&(r=o*i);return{width:r,height:o}}function Jo(t,...e){if(0===e.length)return t;const[i,r,o,s,a,n]=t,[l,c,d,h,p,u]=e[0];return Jo(t=[i*l+o*c,r*l+s*c,i*d+o*h,r*d+s*h,i*p+o*u+a,r*p+s*u+n],...e.slice(1))}const Ko=/left|top|width|height/i,Qo="open",Zo=new WeakMap,ts=new WeakMap,es=new Map,is=Dr.document&&Array.isArray(Dr.document.adoptedStyleSheets)&&"replaceSync"in Dr.CSSStyleSheet.prototype;class rs extends HTMLElement{get $sharedStyle(){return(this.themeColor?`:host{--theme-color: ${this.themeColor};}`:"")+":host([hidden]){display:none!important}"}constructor(){var t,e;super(),this.shadowRootMode=Qo,this.slottable=!0;const i=null===(e=null===(t=Object.getPrototypeOf(this))||void 0===t?void 0:t.constructor)||void 0===e?void 0:e.$name;i&&es.set(i,this.tagName.toLowerCase())}static get observedAttributes(){return["shadow-root-mode","slottable","theme-color"]}attributeChangedCallback(t,e,i){if(Object.is(i,e))return;const r=jo(t);let o=i;switch(typeof this[r]){case"boolean":o=null!==i&&"false"!==i;break;case"number":o=Number(i)}switch(this[r]=o,t){case"theme-color":{const t=ts.get(this),e=this.$sharedStyle;t&&e&&(is?t.replaceSync(e):t.textContent=e);break}}}$propertyChangedCallback(t,e,i){if(!Object.is(i,e))switch(t=Bo(t),typeof i){case"boolean":!0===i?this.hasAttribute(t)||this.setAttribute(t,""):this.removeAttribute(t);break;case"number":i=So(i)?"":String(i);default:i?this.getAttribute(t)!==i&&this.setAttribute(t,i):this.removeAttribute(t)}}connectedCallback(){Object.getPrototypeOf(this).constructor.observedAttributes.forEach(t=>{const e=jo(t);let i=this[e];(function(t){return void 0===t})(i)||this.$propertyChangedCallback(e,void 0,i),Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>i,set(t){const r=i;i=t,this.$propertyChangedCallback(e,r,t)}})});const t=this.shadowRoot||this.attachShadow({mode:this.shadowRootMode||Qo});if(Zo.set(this,t),ts.set(this,this.$addStyles(this.$sharedStyle)),this.$style&&this.$addStyles(this.$style),this.$template){const e=document.createElement("template");e.innerHTML=this.$template,t.appendChild(e.content)}if(this.slottable){const e=document.createElement("slot");t.appendChild(e)}}disconnectedCallback(){ts.has(this)&&ts.delete(this),Zo.has(this)&&Zo.delete(this)}$getTagNameOf(t){var e;return null!==(e=es.get(t))&&void 0!==e?e:t}$setStyles(t){return Object.keys(t).forEach(e=>{let i=t[e];To(i)&&(i=0!==i&&Ko.test(e)?`${i}px`:String(i)),this.style[e]=i}),this}$getShadowRoot(){return this.shadowRoot||Zo.get(this)}$addStyles(t){let e;const i=this.$getShadowRoot();return is?(e=new CSSStyleSheet,e.replaceSync(t),i.adoptedStyleSheets=i.adoptedStyleSheets.concat(e)):(e=document.createElement("style"),e.textContent=t,i.appendChild(e)),e}$emit(t,e,i){return function(t,e,i,r){return t.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign(Object.assign({},Go),{detail:i}),r)))}(this,t,e,i)}$nextTick(t){return function(t,e){return e?qo.then(t?e.bind(t):e):qo}(this,t)}static $define(t,e){Eo(t)&&(e=t,t=""),t||(t=this.$name||this.name),t=Bo(t),Fr&&Dr.customElements&&!Dr.customElements.get(t)&&customElements.define(t,this,e)}}rs.$version="2.1.0";class os extends rs{constructor(){super(...arguments),this.$onPointerDown=null,this.$onPointerMove=null,this.$onPointerUp=null,this.$onWheel=null,this.$wheeling=!1,this.$pointers=new Map,this.$style=':host{display:block;min-height:100px;min-width:200px;overflow:hidden;position:relative;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([background]){background-color:#fff;background-image:repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc),repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc);background-image:repeating-conic-gradient(#ccc 0 25%,#fff 0 50%);background-position:0 0,.5rem .5rem;background-size:1rem 1rem}:host([disabled]){pointer-events:none}:host([disabled]):after{bottom:0;content:"";cursor:not-allowed;display:block;left:0;pointer-events:none;position:absolute;right:0;top:0}',this.$action=so,this.background=!1,this.disabled=!1,this.scaleStep=.1,this.themeColor="#39f"}static get observedAttributes(){return super.observedAttributes.concat(["background","disabled","scale-step"])}connectedCallback(){super.connectedCallback(),this.disabled||this.$bind()}disconnectedCallback(){this.disabled||this.$unbind(),super.disconnectedCallback()}$propertyChangedCallback(t,e,i){if(!Object.is(i,e)&&(super.$propertyChangedCallback(t,e,i),"disabled"===t))i?this.$unbind():this.$bind()}$bind(){this.$onPointerDown||(this.$onPointerDown=this.$handlePointerDown.bind(this),Fo(this,fo,this.$onPointerDown)),this.$onPointerMove||(this.$onPointerMove=this.$handlePointerMove.bind(this),Fo(this.ownerDocument,vo,this.$onPointerMove)),this.$onPointerUp||(this.$onPointerUp=this.$handlePointerUp.bind(this),Fo(this.ownerDocument,go,this.$onPointerUp)),this.$onWheel||(this.$onWheel=this.$handleWheel.bind(this),Fo(this,wo,this.$onWheel,{passive:!1,capture:!0}))}$unbind(){this.$onPointerDown&&(Uo(this,fo,this.$onPointerDown),this.$onPointerDown=null),this.$onPointerMove&&(Uo(this.ownerDocument,vo,this.$onPointerMove),this.$onPointerMove=null),this.$onPointerUp&&(Uo(this.ownerDocument,go,this.$onPointerUp),this.$onPointerUp=null),this.$onWheel&&(Uo(this,wo,this.$onWheel,{capture:!0}),this.$onWheel=null)}$handlePointerDown(t){const{buttons:e,button:i,type:r}=t;if(this.disabled||("pointerdown"===r&&"mouse"===t.pointerType||"mousedown"===r)&&(To(e)&&1!==e||To(i)&&0!==i||t.ctrlKey))return;const{$pointers:o}=this;let s="";if(t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:t,pageX:e,pageY:i})=>{o.set(t,{startX:e,startY:i,endX:e,endY:i})});else{const{pointerId:e=0,pageX:i,pageY:r}=t;o.set(e,{startX:i,startY:r,endX:i,endY:r})}o.size>1?s=oo:Mo(t.target)&&(s=t.target.action||t.target.getAttribute("action")||""),!1!==this.$emit($o,{action:s,relatedEvent:t})&&(t.preventDefault(),this.$action=s,this.style.willChange="transform")}$handlePointerMove(t){const{$action:e,$pointers:i}=this;if(this.disabled||e===so||0===i.size)return;if(!1===this.$emit("actionmove",{action:e,relatedEvent:t}))return;if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:t,pageX:e,pageY:r})=>{const o=i.get(t);o&&Object.assign(o,{endX:e,endY:r})});else{const{pointerId:e=0,pageX:r,pageY:o}=t,s=i.get(e);s&&Object.assign(s,{endX:r,endY:o})}const r={action:e,relatedEvent:t};if(e===oo){const e=new Map(i);let o=0,s=0,a=0,n=0,l=t.pageX,c=t.pageY;i.forEach((t,i)=>{e.delete(i),e.forEach(e=>{let i=e.startX-t.startX,r=e.startY-t.startY,d=e.endX-t.endX,h=e.endY-t.endY,p=0,u=0,m=0,f=0;if(0===i?r<0?m=2*Math.PI:r>0&&(m=Math.PI):i>0?m=Math.PI/2+Math.atan(r/i):i<0&&(m=1.5*Math.PI+Math.atan(r/i)),0===d?h<0?f=2*Math.PI:h>0&&(f=Math.PI):d>0?f=Math.PI/2+Math.atan(h/d):d<0&&(f=1.5*Math.PI+Math.atan(h/d)),f>0||m>0){const i=f-m,r=Math.abs(i);r>o&&(o=r,a=i,l=(t.startX+e.startX)/2,c=(t.startY+e.startY)/2)}if(i=Math.abs(i),r=Math.abs(r),d=Math.abs(d),h=Math.abs(h),i>0&&r>0?p=Math.sqrt(i*i+r*r):i>0?p=i:r>0&&(p=r),d>0&&h>0?u=Math.sqrt(d*d+h*h):d>0?u=d:h>0&&(u=h),p>0&&u>0){const i=(u-p)/p,r=Math.abs(i);r>s&&(s=r,n=i,l=(t.startX+e.startX)/2,c=(t.startY+e.startY)/2)}})});const d=o>0,h=s>0;d&&h?(r.rotate=a,r.scale=n,r.centerX=l,r.centerY=c):d?(r.action=ro,r.rotate=a,r.centerX=l,r.centerY=c):h?(r.action=io,r.scale=n,r.centerX=l,r.centerY=c):r.action=so}else{const[t]=Array.from(i.values());Object.assign(r,t)}i.forEach(t=>{t.startX=t.endX,t.startY=t.endY}),r.action!==so&&this.$emit(_o,r,{cancelable:!1})}$handlePointerUp(t){const{$action:e,$pointers:i}=this;if(!this.disabled&&e!==so&&!1!==this.$emit(ko,{action:e,relatedEvent:t})){if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:t})=>{i.delete(t)});else{const{pointerId:e=0}=t;i.delete(e)}0===i.size&&(this.style.willChange="",this.$action=so)}}$handleWheel(t){if(this.disabled)return;if(t.preventDefault(),this.$wheeling)return;this.$wheeling=!0,setTimeout(()=>{this.$wheeling=!1},50);const e=(t.deltaY>0?-1:1)*this.scaleStep;this.$emit(_o,{action:io,scale:e,relatedEvent:t},{cancelable:!1})}$setAction(t){return"string"==typeof t&&(this.$action=t),this}$toCanvas(t){return new Promise((e,i)=>{if(!this.isConnected)return void i(new Error("The current element is not connected to the DOM."));const r=document.createElement("canvas");let o=this.offsetWidth,s=this.offsetHeight,a=1;Po(t)&&(Co(t.width)||Co(t.height))&&(({width:o,height:s}=Yo({aspectRatio:o/s,width:t.width,height:t.height})),a=o/this.offsetWidth),r.width=o,r.height=s;const n=this.querySelector(this.$getTagNameOf(Jr));n?n.$ready().then(i=>{const l=r.getContext("2d");if(l){const[e,c,d,h,p,u]=n.$getTransform();let m=p,f=u,v=i.naturalWidth,g=i.naturalHeight;1!==a&&(m*=a,f*=a,v*=a,g*=a);const b=v/2,y=g/2;l.fillStyle="transparent",l.fillRect(0,0,o,s),Po(t)&&Oo(t.beforeDraw)&&t.beforeDraw.call(this,l,r),l.save(),l.translate(b,y),l.transform(e,c,d,h,m,f),l.translate(-b,-y),l.drawImage(i,0,0,v,g),l.restore()}e(r)}).catch(i):e(r)})}}os.$name=Vr,os.$version="2.1.0";const ss=new WeakMap,as=["alt","crossorigin","decoding","elementtiming","fetchpriority","loading","referrerpolicy","sizes","src","srcset"];class ns extends rs{constructor(){super(...arguments),this.$matrix=[1,0,0,1,0,0],this.$onLoad=null,this.$onCanvasAction=null,this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$actionStartTarget=null,this.$style=":host{display:inline-block}img{display:block;height:100%;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}",this.$image=new Image,this.initialCenterSize="contain",this.rotatable=!1,this.scalable=!1,this.skewable=!1,this.slottable=!1,this.translatable=!1,this.alt="",this.crossorigin="",this.decoding="",this.elementtiming="",this.fetchpriority="",this.loading="",this.referrerpolicy="",this.sizes="",this.src="",this.srcset=""}set $canvas(t){ss.set(this,t)}get $canvas(){return ss.get(this)}static get observedAttributes(){return super.observedAttributes.concat(as,["initial-center-size","rotatable","scalable","skewable","translatable"])}attributeChangedCallback(t,e,i){Object.is(i,e)||(super.attributeChangedCallback(t,e,i),as.includes(t)&&this.$image.setAttribute(t,i))}$propertyChangedCallback(t,e,i){if(!Object.is(i,e)&&(super.$propertyChangedCallback(t,e,i),"initialCenterSize"===t))this.$nextTick(()=>{this.$center(i)})}connectedCallback(){super.connectedCallback();const{$image:t}=this,e=this.closest(this.$getTagNameOf(Vr));e&&(this.$canvas=e,this.$setStyles({display:"block",position:"absolute"}),this.$onCanvasActionStart=t=>{var e,i;this.$actionStartTarget=null===(i=null===(e=t.detail)||void 0===e?void 0:e.relatedEvent)||void 0===i?void 0:i.target},this.$onCanvasActionEnd=()=>{this.$actionStartTarget=null},this.$onCanvasAction=this.$handleAction.bind(this),Fo(e,$o,this.$onCanvasActionStart),Fo(e,ko,this.$onCanvasActionEnd),Fo(e,_o,this.$onCanvasAction)),this.$onLoad=this.$handleLoad.bind(this),Fo(t,xo,this.$onLoad),this.$getShadowRoot().appendChild(t)}disconnectedCallback(){const{$image:t,$canvas:e}=this;e&&(this.$onCanvasActionStart&&(Uo(e,$o,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Uo(e,ko,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(Uo(e,_o,this.$onCanvasAction),this.$onCanvasAction=null)),t&&this.$onLoad&&(Uo(t,xo,this.$onLoad),this.$onLoad=null),this.$getShadowRoot().removeChild(t),super.disconnectedCallback()}$handleLoad(){const{$image:t}=this;this.$setStyles({width:t.naturalWidth,height:t.naturalHeight}),this.$canvas&&this.$center(this.initialCenterSize)}$handleAction(t){if(this.hidden||!(this.rotatable||this.scalable||this.translatable))return;const{$canvas:e}=this,{detail:i}=t;if(i){const{relatedEvent:t}=i;let{action:r}=i;switch(r!==oo||this.rotatable&&this.scalable||(r=this.rotatable?ro:this.scalable?io:so),r){case eo:if(this.translatable){let r=null;t&&(r=t.target.closest(this.$getTagNameOf(Kr))),r||(r=e.querySelector(this.$getTagNameOf(Kr))),r&&r.multiple&&!r.active&&(r=e.querySelector(`${this.$getTagNameOf(Kr)}[active]`)),r&&!r.hidden&&r.movable&&!r.dynamic&&this.$actionStartTarget&&r.contains(this.$actionStartTarget)||this.$move(i.endX-i.startX,i.endY-i.startY)}break;case ro:if(this.rotatable)if(t){const{x:e,y:r}=this.getBoundingClientRect();this.$rotate(i.rotate,t.clientX-e,t.clientY-r)}else this.$rotate(i.rotate);break;case io:if(this.scalable)if(t){const e=t.target.closest(this.$getTagNameOf(Kr));if(!e||!e.zoomable||e.zoomable&&e.dynamic){const{x:e,y:r}=this.getBoundingClientRect();this.$zoom(i.scale,t.clientX-e,t.clientY-r)}}else this.$zoom(i.scale);break;case oo:if(this.rotatable&&this.scalable){const{rotate:e}=i;let{scale:r}=i;r<0?r=1/(1-r):r+=1;const o=Math.cos(e),s=Math.sin(e),[a,n,l,c]=[o*r,s*r,-s*r,o*r];if(t){const e=this.getBoundingClientRect(),i=t.clientX-e.x,r=t.clientY-e.y,[o,s,d,h]=this.$matrix,p=i-e.width/2,u=r-e.height/2,m=(p*h-d*u)/(o*h-d*s),f=(u*o-s*p)/(o*h-d*s);this.$transform(a,n,l,c,m*(1-a)+f*l,f*(1-c)+m*n)}else this.$transform(a,n,l,c,0,0)}}}}$ready(t){const{$image:e}=this,i=new Promise((t,i)=>{const r=new Error("Failed to load the image source");if(e.complete)e.naturalWidth>0&&e.naturalHeight>0?t(e):i(r);else{const o=()=>{Uo(e,bo,s),setTimeout(()=>{t(e)})},s=()=>{Uo(e,xo,o),i(r)};Do(e,xo,o),Do(e,bo,s)}});return Oo(t)&&i.then(e=>(t(e),e)),i}$center(t){const{parentElement:e}=this;if(!e)return this;const i=e.getBoundingClientRect(),r=i.width,o=i.height,{x:s,y:a,width:n,height:l}=this.getBoundingClientRect(),c=s+n/2,d=a+l/2,h=i.x+r/2,p=i.y+o/2;if(this.$move(h-c,p-d),t&&(n!==r||l!==o)){const e=r/n,i=o/l;switch(t){case"cover":this.$scale(Math.max(e,i));break;case"contain":this.$scale(Math.min(e,i))}}return this}$move(t,e=t){if(this.translatable&&To(t)&&To(e)){const[i,r,o,s]=this.$matrix,a=(t*s-o*e)/(i*s-o*r),n=(e*i-r*t)/(i*s-o*r);this.$translate(a,n)}return this}$moveTo(t,e=t){if(this.translatable&&To(t)&&To(e)){const[i,r,o,s]=this.$matrix,a=(t*s-o*e)/(i*s-o*r),n=(e*i-r*t)/(i*s-o*r);this.$setTransform(i,r,o,s,a,n)}return this}$rotate(t,e,i){if(this.rotatable){const r=Wo(t),o=Math.cos(r),s=Math.sin(r),[a,n,l,c]=[o,s,-s,o];if(To(e)&&To(i)){const[t,r,o,s]=this.$matrix,{width:d,height:h}=this.getBoundingClientRect(),p=e-d/2,u=i-h/2,m=(p*s-o*u)/(t*s-o*r),f=(u*t-r*p)/(t*s-o*r);this.$transform(a,n,l,c,m*(1-a)-f*l,f*(1-c)-m*n)}else this.$transform(a,n,l,c,0,0)}return this}$zoom(t,e,i){if(!this.scalable||0===t)return this;if(t<0?t=1/(1-t):t+=1,To(e)&&To(i)){const[r,o,s,a]=this.$matrix,{width:n,height:l}=this.getBoundingClientRect(),c=e-n/2,d=i-l/2,h=(c*a-s*d)/(r*a-s*o),p=(d*r-o*c)/(r*a-s*o);this.$transform(t,0,0,t,h*(1-t),p*(1-t))}else this.$scale(t);return this}$scale(t,e=t){return this.scalable&&this.$transform(t,0,0,e,0,0),this}$skew(t,e=0){if(this.skewable){const i=Wo(t),r=Wo(e);this.$transform(1,Math.tan(r),Math.tan(i),1,0,0)}return this}$translate(t,e=t){return this.translatable&&To(t)&&To(e)&&this.$transform(1,0,0,1,t,e),this}$transform(t,e,i,r,o,s){return To(t)&&To(e)&&To(i)&&To(r)&&To(o)&&To(s)?this.$setTransform(Jo(this.$matrix,[t,e,i,r,o,s])):this}$setTransform(t,e,i,r,o,s){if((this.rotatable||this.scalable||this.skewable||this.translatable)&&(Array.isArray(t)&&([t,e,i,r,o,s]=t),To(t)&&To(e)&&To(i)&&To(r)&&To(o)&&To(s))){const a=[...this.$matrix],n=[t,e,i,r,o,s];if(!1===this.$emit(Ao,{matrix:n,oldMatrix:a}))return this;this.$matrix=n,this.style.transform=`matrix(${n.join(", ")})`}return this}$getTransform(){return this.$matrix.slice()}$resetTransform(){return this.$setTransform([1,0,0,1,0,0])}}ns.$name=Jr,ns.$version="2.1.0";const ls=new WeakMap;class cs extends rs{constructor(){super(...arguments),this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$onSelectionChange=null,this.$style=":host{display:block;height:0;left:0;outline:var(--theme-color) solid 1px;position:relative;top:0;width:0}:host([transparent]){outline-color:transparent}",this.x=0,this.y=0,this.width=0,this.height=0,this.slottable=!1,this.themeColor="rgba(0, 0, 0, 0.65)"}set $canvas(t){ls.set(this,t)}get $canvas(){return ls.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["height","width","x","y"])}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Vr));if(t){this.$canvas=t,this.style.position="absolute";const e=t.querySelector(this.$getTagNameOf(Kr));e&&(this.$onCanvasActionStart=t=>{e.hidden&&t.detail.action===to&&(this.hidden=!1)},this.$onCanvasActionEnd=t=>{e.hidden&&t.detail.action===to&&(this.hidden=!0)},this.$onSelectionChange=t=>{const{x:i,y:r,width:o,height:s}=t.defaultPrevented?e:t.detail;this.$change(i,r,o,s),(e.hidden||0===i&&0===r&&0===o&&0===s)&&(this.hidden=!0)},Fo(t,$o,this.$onCanvasActionStart),Fo(t,ko,this.$onCanvasActionEnd),Fo(t,zo,this.$onSelectionChange))}this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onCanvasActionStart&&(Uo(t,$o,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Uo(t,ko,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onSelectionChange&&(Uo(t,zo,this.$onSelectionChange),this.$onSelectionChange=null)),super.disconnectedCallback()}$change(t,e,i=this.width,r=this.height){return To(t)&&To(e)&&To(i)&&To(r)&&(t!==this.x||e!==this.y||i!==this.width||r!==this.height)?(this.hidden&&(this.hidden=!1),this.x=t,this.y=e,this.width=i,this.height=r,this.$render()):this}$reset(){return this.$change(0,0,0,0)}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height,outlineWidth:Dr.innerWidth})}}cs.$name=Qr,cs.$version="2.1.0";class ds extends rs{constructor(){super(...arguments),this.$onCanvasCropEnd=null,this.$onCanvasCropStart=null,this.$style=':host{background-color:var(--theme-color);display:block}:host([action=move]),:host([action=select]){height:100%;left:0;position:absolute;top:0;width:100%}:host([action=move]){cursor:move}:host([action=select]){cursor:crosshair}:host([action$=-resize]){background-color:transparent;height:15px;position:absolute;width:15px}:host([action$=-resize]):after{background-color:var(--theme-color);content:"";display:block;height:5px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:5px}:host([action=n-resize]),:host([action=s-resize]){cursor:ns-resize;left:50%;transform:translateX(-50%);width:100%}:host([action=n-resize]){top:-8px}:host([action=s-resize]){bottom:-8px}:host([action=e-resize]),:host([action=w-resize]){cursor:ew-resize;height:100%;top:50%;transform:translateY(-50%)}:host([action=e-resize]){right:-8px}:host([action=w-resize]){left:-8px}:host([action=ne-resize]){cursor:nesw-resize;right:-8px;top:-8px}:host([action=nw-resize]){cursor:nwse-resize;left:-8px;top:-8px}:host([action=se-resize]){bottom:-8px;cursor:nwse-resize;right:-8px}:host([action=se-resize]):after{height:15px;width:15px}@media (pointer:coarse){:host([action=se-resize]):after{height:10px;width:10px}}@media (pointer:fine){:host([action=se-resize]):after{height:5px;width:5px}}:host([action=sw-resize]){bottom:-8px;cursor:nesw-resize;left:-8px}:host([plain]){background-color:transparent}',this.action=so,this.plain=!1,this.slottable=!1,this.themeColor="rgba(51, 153, 255, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["action","plain"])}}ds.$name=Yr,ds.$version="2.1.0";const hs=new WeakMap;class ps extends rs{constructor(){super(...arguments),this.$onCanvasAction=null,this.$onCanvasActionStart=null,this.$onCanvasActionEnd=null,this.$onDocumentKeyDown=null,this.$action="",this.$actionStartTarget=null,this.$changing=!1,this.$style=':host{display:block;left:0;position:relative;right:0}:host([outlined]){outline:1px solid var(--theme-color)}:host([multiple]){outline:1px dashed hsla(0,0%,100%,.5)}:host([multiple]):after{bottom:0;content:"";cursor:pointer;display:block;left:0;position:absolute;right:0;top:0}:host([multiple][active]){outline-color:var(--theme-color);z-index:1}:host([multiple])>*{visibility:hidden}:host([multiple][active])>*{visibility:visible}:host([multiple][active]):after{display:none}',this.$initialSelection={x:0,y:0,width:0,height:0},this.x=0,this.y=0,this.width=0,this.height=0,this.aspectRatio=NaN,this.initialAspectRatio=NaN,this.initialCoverage=NaN,this.active=!1,this.linked=!1,this.dynamic=!1,this.movable=!1,this.resizable=!1,this.zoomable=!1,this.multiple=!1,this.keyboard=!1,this.outlined=!1,this.precise=!1}set $canvas(t){hs.set(this,t)}get $canvas(){return hs.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["active","aspect-ratio","dynamic","height","initial-aspect-ratio","initial-coverage","keyboard","linked","movable","multiple","outlined","precise","resizable","width","x","y","zoomable"])}$propertyChangedCallback(t,e,i){if(!Object.is(i,e))switch(super.$propertyChangedCallback(t,e,i),t){case"x":case"y":case"width":case"height":this.$changing||this.$nextTick(()=>{this.$change(this.x,this.y,this.width,this.height,this.aspectRatio,!0)});break;case"aspectRatio":case"initialAspectRatio":this.$nextTick(()=>{this.$initSelection()});break;case"initialCoverage":this.$nextTick(()=>{Co(i)&&i<=1&&this.$initSelection(!0,!0)});break;case"keyboard":this.$nextTick(()=>{this.$canvas&&(i?this.$onDocumentKeyDown||(this.$onDocumentKeyDown=this.$handleKeyDown.bind(this),Fo(this.ownerDocument,yo,this.$onDocumentKeyDown)):this.$onDocumentKeyDown&&(Uo(this.ownerDocument,yo,this.$onDocumentKeyDown),this.$onDocumentKeyDown=null))});break;case"multiple":this.$nextTick(()=>{if(this.$canvas){const t=this.$getSelections();i?(t.forEach(t=>{t.active=!1}),this.active=!0,this.$emit(zo,{x:this.x,y:this.y,width:this.width,height:this.height})):(this.active=!1,t.slice(1).forEach(t=>{this.$removeSelection(t)}))}});break;case"precise":this.$nextTick(()=>{this.$change(this.x,this.y)});break;case"linked":i&&(this.dynamic=!0)}}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Vr));t?(this.$canvas=t,this.$setStyles({position:"absolute",transform:`translate(${this.x}px, ${this.y}px)`}),this.hidden||this.$render(),this.$initSelection(!0),this.$onCanvasActionStart=this.$handleActionStart.bind(this),this.$onCanvasActionEnd=this.$handleActionEnd.bind(this),this.$onCanvasAction=this.$handleAction.bind(this),Fo(t,$o,this.$onCanvasActionStart),Fo(t,ko,this.$onCanvasActionEnd),Fo(t,_o,this.$onCanvasAction)):this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onCanvasActionStart&&(Uo(t,$o,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Uo(t,ko,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(Uo(t,_o,this.$onCanvasAction),this.$onCanvasAction=null)),super.disconnectedCallback()}$getSelections(){let t=[];return this.parentElement&&(t=Array.from(this.parentElement.querySelectorAll(this.$getTagNameOf(Kr)))),t}$initSelection(t=!1,e=!1){const{initialCoverage:i,parentElement:r}=this;if(Co(i)&&r){const o=this.aspectRatio||this.initialAspectRatio;let s=(e?0:this.width)||r.offsetWidth*i,a=(e?0:this.height)||r.offsetHeight*i;Co(o)&&({width:s,height:a}=Yo({aspectRatio:o,width:s,height:a})),this.$change(this.x,this.y,s,a),t&&this.$center(),this.$initialSelection={x:this.x,y:this.y,width:this.width,height:this.height}}}$createSelection(){const t=this.cloneNode(!0);return this.hasAttribute("id")&&t.removeAttribute("id"),t.initialCoverage=NaN,this.active=!1,this.parentElement&&this.parentElement.insertBefore(t,this.nextSibling),t}$removeSelection(t=this){if(this.parentElement){const e=this.$getSelections();if(e.length>1){const i=e.indexOf(t),r=e[i+1]||e[i-1];r&&(t.active=!1,this.parentElement.removeChild(t),r.active=!0,r.$emit(zo,{x:r.x,y:r.y,width:r.width,height:r.height}))}else this.$clear()}}$handleActionStart(t){var e,i;const r=null===(i=null===(e=t.detail)||void 0===e?void 0:e.relatedEvent)||void 0===i?void 0:i.target;this.$action="",this.$actionStartTarget=r,!this.hidden&&this.multiple&&!this.active&&r===this&&this.parentElement&&(this.$getSelections().forEach(t=>{t.active=!1}),this.active=!0,this.$emit(zo,{x:this.x,y:this.y,width:this.width,height:this.height}))}$handleAction(t){const{currentTarget:e,detail:i}=t;if(!e||!i)return;const{relatedEvent:r}=i;let{action:o}=i;const s=r?function(t){if("function"==typeof t.composedPath)return t.composedPath().find(Mo)||t.target;return t.target}(r):null;if(!o&&this.multiple&&(o=this.$action||(null==s?void 0:s.action),this.$action=o),!o||this.hidden&&o!==to||this.multiple&&!this.active&&o!==io)return;const{width:a,height:n}=this;let l=i.endX-i.startX,c=i.endY-i.startY,{aspectRatio:d}=this;switch(!Co(d)&&r.shiftKey&&(d=Co(a)&&Co(n)?a/n:1),o){case to:if(0!==l||0!==c){0===l?l=c:0===c&&(c=l);const{$canvas:t}=this,r=Ho(e);(this.multiple&&!this.hidden?this.$createSelection():this).$change(i.startX-r.left,i.startY-r.top,Math.abs(l),Math.abs(c),d),l<0?c<0?o=po:c>0&&(o=mo):l>0&&(c<0?o=ho:c>0&&(o=uo)),t&&(t.$action=o)}break;case eo:this.movable&&(this.dynamic||this.$actionStartTarget&&this.contains(this.$actionStartTarget))&&this.$move(l,c);break;case io:if(r&&this.zoomable&&(this.dynamic||this.contains(r.target))){const t=Ho(e);this.$zoom(i.scale,r.pageX-t.left,r.pageY-t.top)}break;default:this.$resize(o,l,c,d)}}$handleActionEnd(){this.$action="",this.$actionStartTarget=null}$handleKeyDown(t){if(this.hidden||!this.keyboard||this.multiple&&!this.active||t.defaultPrevented)return;const{activeElement:e}=document;if(!e||!["INPUT","TEXTAREA"].includes(e.tagName)&&!["true","plaintext-only"].includes(e.contentEditable))switch(t.key){case"Backspace":t.metaKey&&(t.preventDefault(),this.$removeSelection());break;case"Delete":t.preventDefault(),this.$removeSelection();break;case"ArrowLeft":t.preventDefault(),this.$move(-1,0);break;case"ArrowRight":t.preventDefault(),this.$move(1,0);break;case"ArrowUp":t.preventDefault(),this.$move(0,-1);break;case"ArrowDown":t.preventDefault(),this.$move(0,1);break;case"+":t.preventDefault(),this.$zoom(.1);break;case"-":t.preventDefault(),this.$zoom(-.1)}}$center(){const{parentElement:t}=this;if(!t)return this;const e=(t.offsetWidth-this.width)/2,i=(t.offsetHeight-this.height)/2;return this.$change(e,i)}$move(t,e=t){return this.$moveTo(this.x+t,this.y+e)}$moveTo(t,e=t){return this.movable?this.$change(t,e):this}$resize(t,e=0,i=0,r=this.aspectRatio){if(!this.resizable)return this;const o=Co(r),{$canvas:s}=this;let{x:a,y:n,width:l,height:c}=this;switch(t){case ao:n+=i,c-=i,c<0&&(t=lo,c=-c,n-=c),o&&(a+=(e=i*r)/2,l-=e,l<0&&(l=-l,a-=l));break;case no:l+=e,l<0&&(t=co,l=-l,a-=l),o&&(n-=(i=e/r)/2,c+=i,c<0&&(c=-c,n-=c));break;case lo:c+=i,c<0&&(t=ao,c=-c,n-=c),o&&(a-=(e=i*r)/2,l+=e,l<0&&(l=-l,a-=l));break;case co:a+=e,l-=e,l<0&&(t=no,l=-l,a-=l),o&&(n+=(i=e/r)/2,c-=i,c<0&&(c=-c,n-=c));break;case ho:o&&(i=-e/r),n+=i,c-=i,l+=e,l<0&&c<0?(t=mo,l=-l,c=-c,a-=l,n-=c):l<0?(t=po,l=-l,a-=l):c<0&&(t=uo,c=-c,n-=c);break;case po:o&&(i=e/r),a+=e,n+=i,l-=e,c-=i,l<0&&c<0?(t=uo,l=-l,c=-c,a-=l,n-=c):l<0?(t=ho,l=-l,a-=l):c<0&&(t=mo,c=-c,n-=c);break;case uo:o&&(i=e/r),l+=e,c+=i,l<0&&c<0?(t=po,l=-l,c=-c,a-=l,n-=c):l<0?(t=mo,l=-l,a-=l):c<0&&(t=ho,c=-c,n-=c);break;case mo:o&&(i=-e/r),a+=e,l-=e,c+=i,l<0&&c<0?(t=ho,l=-l,c=-c,a-=l,n-=c):l<0?(t=uo,l=-l,a-=l):c<0&&(t=po,c=-c,n-=c)}return s&&s.$setAction(t),this.$change(a,n,l,c)}$zoom(t,e,i){if(!this.zoomable||0===t)return this;t<0?t=1/(1-t):t+=1;const{width:r,height:o}=this,s=r*t,a=o*t;let n=this.x,l=this.y;return To(e)&&To(i)?(n-=(s-r)*((e-this.x)/r),l-=(a-o)*((i-this.y)/o)):(n-=(s-r)/2,l-=(a-o)/2),this.$change(n,l,s,a)}$change(t,e,i=this.width,r=this.height,o=this.aspectRatio,s=!1){return this.$changing||!To(t)||!To(e)||!To(i)||!To(r)||i<0||r<0?this:(Co(o)&&({width:i,height:r}=Yo({aspectRatio:o,width:i,height:r},"cover")),this.precise||(t=Math.round(t),e=Math.round(e),i=Math.round(i),r=Math.round(r)),t===this.x&&e===this.y&&i===this.width&&r===this.height&&Object.is(o,this.aspectRatio)&&!s?this:(this.hidden&&(this.hidden=!1),!1===this.$emit(zo,{x:t,y:e,width:i,height:r})?this:(this.$changing=!0,this.x=t,this.y=e,this.width=i,this.height=r,this.$changing=!1,this.$render())))}$reset(){const{x:t,y:e,width:i,height:r}=this.$initialSelection;return this.$change(t,e,i,r)}$clear(){return this.$change(0,0,0,0,NaN,!0),this.hidden=!0,this}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height})}$toCanvas(t){return new Promise((e,i)=>{if(!this.isConnected)return void i(new Error("The current element is not connected to the DOM."));const r=document.createElement("canvas");let{width:o,height:s}=this,a=1;if(Po(t)&&(Co(t.width)||Co(t.height))&&(({width:o,height:s}=Yo({aspectRatio:o/s,width:t.width,height:t.height})),a=o/this.width),r.width=o,r.height=s,!this.$canvas)return void e(r);const n=this.$canvas.querySelector(this.$getTagNameOf(Jr));n?n.$ready().then(i=>{const l=r.getContext("2d");if(l){const[e,c,d,h,p,u]=n.$getTransform(),m=-this.x,f=-this.y,v=(m*h-d*f)/(e*h-d*c),g=(f*e-c*m)/(e*h-d*c);let b=e*v+d*g+p,y=c*v+h*g+u,x=i.naturalWidth,w=i.naturalHeight;1!==a&&(b*=a,y*=a,x*=a,w*=a);const _=x/2,k=w/2;l.fillStyle="transparent",l.fillRect(0,0,o,s),Po(t)&&Oo(t.beforeDraw)&&t.beforeDraw.call(this,l,r),l.save(),l.translate(_,k),l.transform(e,c,d,h,b,y),l.translate(-_,-k),l.drawImage(i,0,0,x,w),l.restore()}e(r)}).catch(i):e(r)})}}ps.$name=Kr,ps.$version="2.1.0";class us extends rs{constructor(){super(...arguments),this.$style=":host{display:flex;flex-direction:column;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([bordered]){border:1px dashed var(--theme-color)}:host([covered]){bottom:0;left:0;position:absolute;right:0;top:0}:host>span{display:flex;flex:1}:host>span+span{border-top:1px dashed var(--theme-color)}:host>span>span{flex:1}:host>span>span+span{border-left:1px dashed var(--theme-color)}",this.bordered=!1,this.columns=3,this.covered=!1,this.rows=3,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["bordered","columns","covered","rows"])}$propertyChangedCallback(t,e,i){Object.is(i,e)||(super.$propertyChangedCallback(t,e,i),"rows"!==t&&"columns"!==t||this.$nextTick(()=>{this.$render()}))}connectedCallback(){super.connectedCallback(),this.$render()}$render(){const t=this.$getShadowRoot(),e=document.createDocumentFragment();for(let t=0;t<this.rows;t+=1){const t=document.createElement("span");t.setAttribute("role","row");for(let e=0;e<this.columns;e+=1){const e=document.createElement("span");e.setAttribute("role","gridcell"),t.appendChild(e)}e.appendChild(t)}t&&(t.innerHTML="",t.appendChild(e))}}us.$name=Xr,us.$version="2.1.0";class ms extends rs{constructor(){super(...arguments),this.$style=':host{display:inline-block;height:1em;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1em}:host:after,:host:before{background-color:var(--theme-color);content:"";display:block;position:absolute}:host:before{height:1px;left:0;top:50%;transform:translateY(-50%);width:100%}:host:after{height:100%;left:50%;top:0;transform:translateX(-50%);width:1px}:host([centered]){left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}',this.centered=!1,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["centered"])}}ms.$name=Wr,ms.$version="2.1.0";const fs=new WeakMap,vs=new WeakMap,gs=new WeakMap,bs=new WeakMap,ys="vertical";class xs extends rs{constructor(){super(...arguments),this.$onSelectionChange=null,this.$onSourceImageLoad=null,this.$onSourceImageTransform=null,this.$scale=1,this.$style=":host{display:block;height:100%;overflow:hidden;position:relative;width:100%}",this.resize=ys,this.selection="",this.slottable=!1}set $image(t){vs.set(this,t)}get $image(){return vs.get(this)}set $sourceImage(t){bs.set(this,t)}get $sourceImage(){return bs.get(this)}set $canvas(t){fs.set(this,t)}get $canvas(){return fs.get(this)}set $selection(t){gs.set(this,t)}get $selection(){return gs.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["resize","selection"])}connectedCallback(){var t,e;super.connectedCallback();let i=null;if(i=this.selection?null!==(e=null===(t=function(t){const e=t.getRootNode();switch(e.nodeType){case 1:return e.ownerDocument;case 9:case 11:return e}return null}(this))||void 0===t?void 0:t.querySelector(this.selection))&&void 0!==e?e:null:this.closest(this.$getTagNameOf(Kr)),Mo(i)){this.$selection=i,this.$onSelectionChange=this.$handleSelectionChange.bind(this),Fo(i,zo,this.$onSelectionChange);const t=i.closest(this.$getTagNameOf(Vr));if(t){this.$canvas=t;const e=t.querySelector(this.$getTagNameOf(Jr));e&&(this.$sourceImage=e,this.$image=e.cloneNode(!0),this.$getShadowRoot().appendChild(this.$image),this.$onSourceImageLoad=this.$handleSourceImageLoad.bind(this),this.$onSourceImageTransform=this.$handleSourceImageTransform.bind(this),Fo(e.$image,xo,this.$onSourceImageLoad),Fo(e,Ao,this.$onSourceImageTransform))}this.$render()}}disconnectedCallback(){const{$selection:t,$sourceImage:e}=this;t&&this.$onSelectionChange&&(Uo(t,zo,this.$onSelectionChange),this.$onSelectionChange=null),e&&this.$onSourceImageLoad&&(Uo(e.$image,xo,this.$onSourceImageLoad),this.$onSourceImageLoad=null),e&&this.$onSourceImageTransform&&(Uo(e,Ao,this.$onSourceImageTransform),this.$onSourceImageTransform=null),super.disconnectedCallback()}$handleSelectionChange(t){this.$render(t.defaultPrevented?this.$selection:t.detail)}$handleSourceImageLoad(){const{$image:t,$sourceImage:e}=this,i=t.getAttribute("src"),r=e.getAttribute("src");r&&r!==i&&(t.setAttribute("src",r),t.$ready(()=>{this.$render()}))}$handleSourceImageTransform(t){this.$render(void 0,t.detail.matrix)}$render(t,e){const{$canvas:i,$selection:r}=this;t||r.hidden||(t=r),(!t||0===t.x&&0===t.y&&0===t.width&&0===t.height)&&(t={x:0,y:0,width:i.offsetWidth,height:i.offsetHeight});const{x:o,y:s,width:a,height:n}=t,l={},{clientWidth:c,clientHeight:d}=this;let h=c,p=d,u=NaN;switch(this.resize){case"both":u=1,h=a,p=n,l.width=a,l.height=n;break;case"horizontal":u=n>0?d/n:0,h=a*u,l.width=h;break;case ys:u=a>0?c/a:0,p=n*u,l.height=p;break;default:c>0?u=a>0?c/a:0:d>0&&(u=n>0?d/n:0)}this.$scale=u,this.$setStyles(l),this.$sourceImage&&setTimeout(()=>{this.$transformImageByOffset(null!=e?e:this.$sourceImage.$getTransform(),-o,-s)})}$transformImageByOffset(t,e,i){const{$image:r,$scale:o,$sourceImage:s}=this;if(s&&r&&o>=0){const[s,a,n,l,c,d]=t,h=(e*l-n*i)/(s*l-n*a),p=(i*s-a*e)/(s*l-n*a),u=s*h+n*p+c,m=a*h+l*p+d;r.$ready(t=>{this.$setStyles.call(r,{width:t.naturalWidth*o,height:t.naturalHeight*o})}),r.$setTransform(s,a,n,l,u*o,m*o)}}}function ws(t){if(t.shadowRoot){const e=t.shadowRoot.querySelector(".scrim");e&&(e.style.display="none");const i=t.shadowRoot.querySelector("dialog"),r="<style>dialog::backdrop { display:block;    background: var(--md-sys-color-scrim, #000); opacity: 0.32; transition: all 250ms ease 0s; }</style>";i?.insertAdjacentHTML("beforeend",r)}}xs.$name=Zr,xs.$version="2.1.0",os.$define(),ms.$define(),us.$define(),ds.$define(),ns.$define(),ps.$define(),cs.$define(),xs.$define();const _s=d`
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
`,ks=d`
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
`,$s=d`
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
`,zs=d`
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
`,As=d`
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
`,Ss=d`
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
`,Ts=d`
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
`,Cs=d`
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
`,Es=[Ss,Ts,d`
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
      opacity: 0.8;
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
  `],Is=d`
  [ellipsis] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Ps=t=>t??X,Os={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},Ms={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},Rs={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv",bot:"bot"},Bs={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Ns={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class js{static getFirstMatch(t,e){const i=e.match(t);return i&&i.length>0&&i[1]||""}static getSecondMatch(t,e){const i=e.match(t);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(t,e,i){if(t.test(e))return i}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const e=t.split(".").splice(0,2).map(t=>parseInt(t,10)||0);if(e.push(0),10===e[0])switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const e=t.split(".").splice(0,2).map(t=>parseInt(t,10)||0);if(e.push(0),!(1===e[0]&&e[1]<5))return 1===e[0]&&e[1]<6?"Cupcake":1===e[0]&&e[1]>=6?"Donut":2===e[0]&&e[1]<2?"Eclair":2===e[0]&&2===e[1]?"Froyo":2===e[0]&&e[1]>2?"Gingerbread":3===e[0]?"Honeycomb":4===e[0]&&e[1]<1?"Ice Cream Sandwich":4===e[0]&&e[1]<4?"Jelly Bean":4===e[0]&&e[1]>=4?"KitKat":5===e[0]?"Lollipop":6===e[0]?"Marshmallow":7===e[0]?"Nougat":8===e[0]?"Oreo":9===e[0]?"Pie":void 0}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,e,i=!1){const r=js.getVersionPrecision(t),o=js.getVersionPrecision(e);let s=Math.max(r,o),a=0;const n=js.map([t,e],t=>{const e=s-js.getVersionPrecision(t),i=t+new Array(e+1).join(".0");return js.map(i.split("."),t=>new Array(20-t.length).join("0")+t).reverse()});for(i&&(a=s-Math.min(r,o)),s-=1;s>=a;){if(n[0][s]>n[1][s])return 1;if(n[0][s]===n[1][s]){if(s===a)return 0;s-=1}else if(n[0][s]<n[1][s])return-1}}static map(t,e){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(t,e);for(r=0;r<t.length;r+=1)i.push(e(t[r]));return i}static find(t,e){let i,r;if(Array.prototype.find)return Array.prototype.find.call(t,e);for(i=0,r=t.length;i<r;i+=1){const r=t[i];if(e(r,i))return r}}static assign(t,...e){const i=t;let r,o;if(Object.assign)return Object.assign(t,...e);for(r=0,o=e.length;r<o;r+=1){const t=e[r];if("object"==typeof t&&null!==t){Object.keys(t).forEach(e=>{i[e]=t[e]})}}return t}static getBrowserAlias(t){return Os[t]}static getBrowserTypeByAlias(t){return Ms[t]||""}}const Ls=/version\/(\d+(\.?_?\d+)+)/i,Us=[{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},i=js.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/opera/i],describe(t){const e={name:"Opera"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},i=js.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/PaleMoon/i],describe(t){const e={name:"Pale Moon"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},i=js.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},i=js.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},i=js.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(t){const e={name:"Opera Touch"},i=js.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},i=js.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},i=js.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},i=js.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},i=js.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},i=js.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},i=js.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},i=js.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},i=js.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},i=js.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return i&&(e.version=i),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},i=js.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},i=js.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},i=js.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},i=js.getFirstMatch(Ls,t)||js.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},i=js.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},i=js.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},i=js.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},i=js.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},i=js.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MiuiBrowser/i],describe(t){const e={name:"Miui"},i=js.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},i=js.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},i=js.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},i=js.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e={name:"Android Browser"},i=js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},i=js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},i=js.getFirstMatch(Ls,t);return i&&(e.version=i),e}},{test:[/.*/i],describe(t){const e=-1!==t.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:js.getFirstMatch(e,t),version:js.getSecondMatch(e,t)}}}];var Fs=[{test:[/Roku\/DVP/],describe(t){const e=js.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:Bs.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=js.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:Bs.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=js.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),i=js.getWindowsVersionName(e);return{name:Bs.Windows,version:e,versionName:i}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(t){const e={name:Bs.iOS},i=js.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return i&&(e.version=i),e}},{test:[/macintosh/i],describe(t){const e=js.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),i=js.getMacOSVersionName(e),r={name:Bs.MacOS,version:e};return i&&(r.versionName=i),r}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=js.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:Bs.iOS,version:e}}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e=js.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),i=js.getAndroidVersionName(e),r={name:Bs.Android,version:e};return i&&(r.versionName=i),r}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=js.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),i={name:Bs.WebOS};return e&&e.length&&(i.version=e),i}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=js.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||js.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||js.getFirstMatch(/\bbb(\d+)/i,t);return{name:Bs.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=js.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:Bs.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=js.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:Bs.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:Bs.Linux})},{test:[/CrOS/],describe:()=>({name:Bs.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=js.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:Bs.PlayStation4,version:e}}}],Ds=[{test:[/googlebot/i],describe:()=>({type:Rs.bot,vendor:"Google"})},{test:[/huawei/i],describe(t){const e=js.getFirstMatch(/(can-l01)/i,t)&&"Nova",i={type:Rs.mobile,vendor:"Huawei"};return e&&(i.model=e),i}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:Rs.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:Rs.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:()=>({type:Rs.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:Rs.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:Rs.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:Rs.tablet})},{test(t){const e=t.test(/ipod|iphone/i),i=t.test(/like (ipod|iphone)/i);return e&&!i},describe(t){const e=js.getFirstMatch(/(ipod|iphone)/i,t);return{type:Rs.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:Rs.mobile,vendor:"Nexus"})},{test:[/Nokia/i],describe(t){const e=js.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,t),i={type:Rs.mobile,vendor:"Nokia"};return e&&(i.model=e),i}},{test:[/[^-]mobi/i],describe:()=>({type:Rs.mobile})},{test:t=>"blackberry"===t.getBrowserName(!0),describe:()=>({type:Rs.mobile,vendor:"BlackBerry"})},{test:t=>"bada"===t.getBrowserName(!0),describe:()=>({type:Rs.mobile})},{test:t=>"windows phone"===t.getBrowserName(),describe:()=>({type:Rs.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&e>=3},describe:()=>({type:Rs.tablet})},{test:t=>"android"===t.getOSName(!0),describe:()=>({type:Rs.mobile})},{test:t=>"macos"===t.getOSName(!0),describe:()=>({type:Rs.desktop,vendor:"Apple"})},{test:t=>"windows"===t.getOSName(!0),describe:()=>({type:Rs.desktop})},{test:t=>"linux"===t.getOSName(!0),describe:()=>({type:Rs.desktop})},{test:t=>"playstation 4"===t.getOSName(!0),describe:()=>({type:Rs.tv})},{test:t=>"roku"===t.getOSName(!0),describe:()=>({type:Rs.tv})}],Gs=[{test:t=>"microsoft edge"===t.getBrowserName(!0),describe(t){if(/\sedg\//i.test(t))return{name:Ns.Blink};const e=js.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:Ns.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:Ns.Trident},i=js.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:Ns.Presto},i=js.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=t.test(/gecko/i),i=t.test(/like gecko/i);return e&&!i},describe(t){const e={name:Ns.Gecko},i=js.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:Ns.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:Ns.WebKit},i=js.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}}];class qs{constructor(t,e=!1){if(null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==e&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=js.find(Us,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=js.find(Fs,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:e}=this.getOS();return t?String(e).toLowerCase()||"":e||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:e}=this.getPlatform();return t?String(e).toLowerCase()||"":e||""}parsePlatform(){this.parsedResult.platform={};const t=js.find(Ds,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=js.find(Gs,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return js.assign({},this.parsedResult)}satisfies(t){const e={};let i=0;const r={};let o=0;if(Object.keys(t).forEach(s=>{const a=t[s];"string"==typeof a?(r[s]=a,o+=1):"object"==typeof a&&(e[s]=a,i+=1)}),i>0){const t=Object.keys(e),i=js.find(t,t=>this.isOS(t));if(i){const t=this.satisfies(e[i]);if(void 0!==t)return t}const r=js.find(t,t=>this.isPlatform(t));if(r){const t=this.satisfies(e[r]);if(void 0!==t)return t}}if(o>0){const t=Object.keys(r),e=js.find(t,t=>this.isBrowser(t,!0));if(void 0!==e)return this.compareVersion(r[e])}}isBrowser(t,e=!1){const i=this.getBrowserName().toLowerCase();let r=t.toLowerCase();const o=js.getBrowserTypeByAlias(r);return e&&o&&(r=o.toLowerCase()),r===i}compareVersion(t){let e=[0],i=t,r=!1;const o=this.getBrowserVersion();if("string"==typeof o)return">"===t[0]||"<"===t[0]?(i=t.substr(1),"="===t[1]?(r=!0,i=t.substr(2)):e=[],">"===t[0]?e.push(1):e.push(-1)):"="===t[0]?i=t.substr(1):"~"===t[0]&&(r=!0,i=t.substr(1)),e.indexOf(js.compareVersions(o,i,r))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,e=!1){return this.isBrowser(t,e)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(t=>this.is(t))}}class Hs{static getParser(t,e=!1){if("string"!=typeof t)throw new Error("UserAgent should be a string");return new qs(t,e)}static parse(t){return new qs(t).getResult()}static get BROWSER_MAP(){return Ms}static get ENGINE_MAP(){return Ns}static get OS_MAP(){return Bs}static get PLATFORMS_MAP(){return Rs}}const Vs=new URL(new URL("D9xn2E7Y.gif",import.meta.url).href).href;let Ws=class extends(Et(ht)){#lt;get dialog(){return this.#lt}set dialog(t){this.#lt=t}#Lt;get main(){return this.#Lt}set main(t){this.#Lt=t}#Ut;get cropperCanvas(){return this.#Ut}set cropperCanvas(t){this.#Ut=t}#Ft;get cropperSelection(){return this.#Ft}set cropperSelection(t){this.#Ft=t}#Dt;get cropperImage(){return this.#Dt}set cropperImage(t){this.#Dt=t}#Gt;get cropperShade(){return this.#Gt}set cropperShade(t){this.#Gt=t}#qt;get forcePNGOutput(){return this.#qt}set forcePNGOutput(t){this.#qt=t}#Ht;get options(){return this.#Ht}set options(t){this.#Ht=t}#mt="";get fileName(){return this.#mt}set fileName(t){this.#mt=t}#Vt="";get src(){return this.#Vt}set src(t){this.#Vt=t}#Wt="";#Xt="";#Yt=!1;firstUpdated(){const t=Hs.getParser(window.navigator.userAgent),e=t?.getOS?.()?.name??"";this.#Wt="iOS"===e||"macOS"===e||this.forcePNGOutput?"image/png":"image/webp",this.#Xt="iOS"===e||"macOS"===e||this.forcePNGOutput?"png":"webp",this.#Jt()}#Kt;#Jt(){this.#Kt=new ResizeObserver(()=>{this.#Yt&&this.cropperImage.$center("cover")}),this.#Kt.observe(this.main)}#Qt;#j;async open(t,e,i){return this.#Yt=!1,this.#Qt=i,this.dialog.returnValue="",this.reset(),this.fileName=e,this.src=t,await this.updateComplete,this.dialog.show(),this.cropperImage.$ready(async t=>{this.cropperCanvas.style.width=`${t.naturalWidth}px`,this.cropperCanvas.style.aspectRatio=`${t.naturalWidth} / ${t.naturalHeight}`;const e=this.cropperCanvas.getBoundingClientRect(),i=e.width/e.height,r=this.options?.selectionAspectRatio??i;this.options||(this.options={});const o=this.options.constrainSelectionTo;this.options.constrainSelectionTo=null,this.options?.maximizeSelection?(this.cropperSelection.width=i>r?e.height*r:e.width,this.cropperSelection.height=i<r?e.width/r:e.height):(this.cropperSelection.width=e.width/2,this.cropperSelection.height=e.height/2),this.cropperImage.$center("cover"),this.cropperSelection.$center(),this.options.constrainSelectionTo=o,this.#Yt=!0}),await new Promise(t=>{this.#j=t})}reset(){this.cropperImage.$resetTransform()}blobToFile(t,e){return new File([t],e,{lastModified:(new Date).getTime()})}#Zt(t,e){return t.slice(0,t.lastIndexOf("."))+`.${e}`}async#te(t){const e=document.createElement("canvas"),i=new Image,r=new Promise(t=>{i.onload=()=>{const r=Math.min(i.naturalWidth,i.naturalHeight);e.width=r,e.height=r;const o=e.getContext("2d");o.drawImage(i,0,0),o.globalCompositeOperation="destination-in",o.fillStyle="#000",o.beginPath(),o.arc(.5*r,.5*r,.5*r,0,2*Math.PI),o.fill(),o.globalCompositeOperation="source-over",t(e.toDataURL())}});return i.src=t,await r}#ee(t,e){return t.x>=e.x&&t.y>=e.y&&t.x+t.width<=e.x+e.width&&t.y+t.height<=e.y+e.height}#ie(t){if(!this.cropperCanvas||"image"!==this.options?.constrainSelectionTo)return;const e=this.cropperImage,i=this.cropperSelection,r=this.cropperCanvas.getBoundingClientRect(),o=e.cloneNode();o.style.transform=`matrix(${t.detail.matrix.join(", ")})`,o.style.opacity="0",this.cropperCanvas.appendChild(o);const s=o.getBoundingClientRect();this.cropperCanvas.removeChild(o);const a=i,n={x:s.left-r.left,y:s.top-r.top,width:s.width,height:s.height};this.#ee(a,n)||t.preventDefault()}#re(t){if(!this.cropperCanvas||!this.options?.constrainSelectionTo)return;const e=this.cropperCanvas.getBoundingClientRect(),i={x:t.detail.x,y:t.detail.y,width:t.detail.width-1,height:t.detail.height-1};switch(this.options?.constrainSelectionTo){case"canvas":{const r={x:0,y:0,width:e.width,height:e.height};this.#ee(i,r)||(t.preventDefault(),this.#oe());break}case"image":{if(!this.#Yt)return;const r=this.cropperImage.getBoundingClientRect(),o={x:r.left-e.left,y:r.top-e.top,width:r.width,height:r.height};this.#ee(i,o)||(t.preventDefault(),this.#oe());break}}}#oe(){setTimeout(()=>this.cropperShade.$change(this.cropperSelection.x,this.cropperSelection.y,this.cropperSelection.width,this.cropperSelection.height),0)}static{this.styles=[ks,Ts,_s,d`
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
    `]}render(){return V`
      <md-dialog
        @open=${t=>ws(t.target)}
        @close=${t=>{if("cancel"===t.target.returnValue||"cropped"===t.target.returnValue)return this.#j(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Crop image</div>
        <main slot="content">
          <loading-animation ?hidden=${!this.isLoading}>
            <img src=${Vs} />
            <p>Uploading image...</p>
          </loading-animation>
          <cropper-container
            ?hidden=${this.isLoading}
            @change=${t=>{t.stopPropagation()}}
          >
            <cropper-canvas ?background=${!this.options?.canvasHideBackground}>
              <cropper-image
                initial-center-size="cover"
                .src=${this.src}
                alt="Picture"
                rotatable
                scalable
                skewable
                translatable
                @transform=${this.#ie}
              ></cropper-image>
              <cropper-shade hidden></cropper-shade>
              <cropper-handle action="select" plain></cropper-handle>
              <cropper-selection
                movable
                resizable
                precise
                aspect-ratio=${"circle"===this.options?.shape?1:Ps(this.options?.selectionAspectRatio)}
                @change=${this.#re}
              >
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
          <md-filled-tonal-button
            ?disabled=${this.isLoading}
            @click=${async()=>{await(this.cropperCanvas?.$toCanvas());const t=this.cropperCanvas?.getBoundingClientRect(),e=this.cropperImage?.$image,i=e&&t?.width?e.naturalWidth/t.width:1,r=e&&t?.height?e.naturalHeight/t.height:i;let o=Math.max(1,Math.round(this.cropperSelection.width*i)),s=Math.max(1,Math.round(this.cropperSelection.height*r));if(this.options?.outputMaxWidth&&o>this.options.outputMaxWidth){const t=this.options.outputMaxWidth/o;o=this.options.outputMaxWidth,s=Math.max(1,Math.round(s*t))}if(this.options?.outputMaxHeight&&s>this.options.outputMaxHeight){const t=this.options.outputMaxHeight/s;s=this.options.outputMaxHeight,o=Math.max(1,Math.round(o*t))}const a=await(this.cropperSelection?.$toCanvas({width:o,height:s}));if(this.isLoading=!0,await this.updateComplete,!a)return;const n="circle"===this.options?.shape?await this.#te(a.toDataURL(this.#Wt)):a.toDataURL(this.#Wt),l=await fetch(n),c=this.blobToFile(await l.blob(),this.#Zt(this.fileName,this.#Xt)),d=this.#Qt?.(c,n)||Promise.resolve();this.loadWhile(d),await d,this.isLoading=!1,this.dialog.close("cropped")}}
            >Save</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};r([yt("md-dialog")],Ws.prototype,"dialog",null),r([yt("main")],Ws.prototype,"main",null),r([yt("cropper-canvas")],Ws.prototype,"cropperCanvas",null),r([yt("cropper-selection")],Ws.prototype,"cropperSelection",null),r([yt("cropper-image")],Ws.prototype,"cropperImage",null),r([yt("cropper-shade")],Ws.prototype,"cropperShade",null),r([vt({type:Boolean,reflect:!0,attribute:"force-png"})],Ws.prototype,"forcePNGOutput",null),r([vt({type:Object})],Ws.prototype,"options",null),r([gt()],Ws.prototype,"fileName",null),r([gt()],Ws.prototype,"src",null),Ws=r([ut("crop-and-save-image-dialog")],Ws);let Xs=class extends ht{#se;get imageUrl(){return this.#se}set imageUrl(t){this.#se=t}#ae;get downloadSrc(){return this.#ae}set downloadSrc(t){this.#ae=t}#ne;get filename(){return this.#ne}set filename(t){this.#ne=t}#lt;get dialog(){return this.#lt}set dialog(t){this.#lt=t}async open(t,e,i){return this.imageUrl=void 0,this.filename=i,this.downloadSrc=e,this.imageUrl=t,this.dialog.show()}static{this.styles=[d`
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
    `]}render(){return V`
      <md-dialog @open=${t=>ws(t.target)}>
        <div header slot="headline">${Pt(this.filename||"Image preview",60)}</div>
        <img slot="content" draggable="false" src=${Ps(this.imageUrl)} />
        <div slot="actions">
          ${this.downloadSrc?V`<md-text-button
                @click=${t=>{t.stopPropagation(),window.open(this.downloadSrc)}}
                ><md-icon slot="icon">file_download</md-icon>Download</md-text-button
              >`:V`<div></div>`}

          <md-text-button
            @click=${t=>{t.stopPropagation(),this.dialog.close("close")}}
            >Close</md-text-button
          >
        </div>
      </md-dialog>
    `}};r([gt()],Xs.prototype,"imageUrl",null),r([gt()],Xs.prototype,"downloadSrc",null),r([gt()],Xs.prototype,"filename",null),r([yt("md-dialog")],Xs.prototype,"dialog",null),Xs=r([ut("image-preview-dialog")],Xs);const Ys=le(ht);class Js extends Ys{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1,this.addEventListener("click",this.handleClick.bind(this))}focus(t){this.disabled&&!this.alwaysFocusable||super.focus(t)}render(){return V`
      <div class="container ${Yt(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(t){t.has("disabled")&&void 0!==t.get("disabled")&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled||this.softDisabled,"has-icon":this.hasIcon}}renderContainerContent(){return V`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return V`<span class="outline"></span>`}renderLeadingIcon(){return V`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return V`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">
        <span class="label-text" id="label">
          ${this.label?this.label:V`<slot></slot>`}
        </span>
      </span>
      <span class="touch"></span>
    `}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements({flatten:!0}).length>0}handleClick(t){if(this.softDisabled||this.disabled&&this.alwaysFocusable)return t.stopImmediatePropagation(),void t.preventDefault()}}Js.shadowRootOptions={...ht.shadowRootOptions,delegatesFocus:!0},r([vt({type:Boolean,reflect:!0})],Js.prototype,"disabled",void 0),r([vt({type:Boolean,attribute:"soft-disabled",reflect:!0})],Js.prototype,"softDisabled",void 0),r([vt({type:Boolean,attribute:"always-focusable"})],Js.prototype,"alwaysFocusable",void 0),r([vt()],Js.prototype,"label",void 0),r([vt({type:Boolean,reflect:!0,attribute:"has-icon"})],Js.prototype,"hasIcon",void 0);const Ks="aria-label-remove";class Qs extends Js{get ariaLabelRemove(){if(this.hasAttribute(Ks))return this.getAttribute(Ks);const{ariaLabel:t}=this;return t||this.label?`Remove ${t||this.label}`:null}set ariaLabelRemove(t){t!==this.ariaLabelRemove&&(null===t?this.removeAttribute(Ks):this.setAttribute(Ks,t),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(t){(this.alwaysFocusable||!this.disabled)&&t?.trailing&&this.trailingAction?this.trailingAction.focus(t):super.focus(t)}renderContainerContent(){return V`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(t){const e="ArrowLeft"===t.key,i="ArrowRight"===t.key;if(!e&&!i)return;if(!this.primaryAction||!this.trailingAction)return;const r="rtl"===getComputedStyle(this).direction?e:i,o=this.primaryAction?.matches(":focus-within"),s=this.trailingAction?.matches(":focus-within");if(r&&s||!r&&o)return;t.preventDefault(),t.stopPropagation();(r?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:t,trailingAction:e}=this;t&&e&&(t.tabIndex=-1,e.addEventListener("focusout",()=>{t.tabIndex=0},{once:!0}))}}function Zs({ariaLabel:t,disabled:e,focusListener:i,tabbable:r=!1}){return V`
    <span id="remove-label" hidden aria-hidden="true">Remove</span>
    <button
      class="trailing action"
      aria-label=${t||X}
      aria-labelledby=${t?X:"remove-label label"}
      tabindex=${r?X:-1}
      @click=${ta}
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
  `}function ta(t){if(this.disabled||this.softDisabled)return;t.stopPropagation();!this.dispatchEvent(new Event("remove",{cancelable:!0}))||this.remove()}class ea extends Qs{constructor(){super(...arguments),this.avatar=!1,this.href="",this.target="",this.removeOnly=!1,this.selected=!1}get primaryId(){return this.href?"link":this.removeOnly?"":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}get primaryAction(){return this.removeOnly?null:this.renderRoot.querySelector(".primary.action")}getContainerClasses(){return{...super.getContainerClasses(),avatar:this.avatar,disabled:!this.href&&(this.disabled||this.softDisabled),link:!!this.href,selected:this.selected,"has-trailing":!0}}renderPrimaryAction(t){const{ariaLabel:e}=this;return this.href?V`
        <a
          class="primary action"
          id="link"
          aria-label=${e||X}
          href=${this.href}
          target=${this.target||X}
          >${t}</a
        >
      `:this.removeOnly?V`
        <span class="primary action" aria-label=${e||X}>
          ${t}
        </span>
      `:V`
      <button
        class="primary action"
        id="button"
        aria-label=${e||X}
        aria-disabled=${this.softDisabled||X}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${t}</button
      >
    `}renderTrailingAction(t){return Zs({focusListener:t,ariaLabel:this.ariaLabelRemove,disabled:!this.href&&(this.disabled||this.softDisabled),tabbable:this.removeOnly})}}r([vt({type:Boolean})],ea.prototype,"avatar",void 0),r([vt()],ea.prototype,"href",void 0),r([vt()],ea.prototype,"target",void 0),r([vt({type:Boolean,attribute:"remove-only"})],ea.prototype,"removeOnly",void 0),r([vt({type:Boolean,reflect:!0})],ea.prototype,"selected",void 0),r([yt(".trailing.action")],ea.prototype,"trailingAction",void 0);const ia=d`:host{--_container-height: var(--md-input-chip-container-height, 32px);--_disabled-label-text-color: var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color: var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font: var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color: var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color: var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width: var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color: var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity: var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color: var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape: var(--md-input-chip-avatar-shape, var(--md-sys-shape-corner-full, 9999px));--_avatar-size: var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color: var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size: var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color: var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color: var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color: var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color: var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-input-chip-leading-space, 16px);--_trailing-space: var(--md-input-chip-trailing-space, 16px);--_icon-label-space: var(--md-input-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-input-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-input-chip-with-trailing-icon-trailing-space, 8px)}:host([avatar]){--_container-shape-start-start: var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end: var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end: var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start: var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors: active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}
`,ra=d`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`,oa=d`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}
`,sa=d`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;let aa=class extends ea{};aa.styles=[oa,sa,ra,ia],aa=r([ut("md-input-chip")],aa);const na=(t,e,i)=>{const r=new Map;for(let o=e;o<=i;o++)r.set(t[o],o);return r},la=Wt(class extends Xt{constructor(t){if(super(t),t.type!==Vt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let r;void 0===i?i=e:void 0!==e&&(r=e);const o=[],s=[];let a=0;for(const e of t)o[a]=r?r(e,a):a,s[a]=i(e,a),a++;return{values:s,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,r]){const o=(t=>t._$AH)(t),{values:s,keys:a}=this.dt(e,i,r);if(!Array.isArray(o))return this.ut=a,s;const n=this.ut??=[],l=[];let c,d,h=0,p=o.length-1,u=0,m=s.length-1;for(;h<=p&&u<=m;)if(null===o[h])h++;else if(null===o[p])p--;else if(n[h]===a[u])l[u]=er(o[h],s[u]),h++,u++;else if(n[p]===a[m])l[m]=er(o[p],s[m]),p--,m--;else if(n[h]===a[m])l[m]=er(o[h],s[m]),tr(t,l[m+1],o[h]),h++,m--;else if(n[p]===a[u])l[u]=er(o[p],s[u]),tr(t,o[h],o[p]),p--,u++;else if(void 0===c&&(c=na(a,u,m),d=na(n,h,p)),c.has(n[h]))if(c.has(n[p])){const e=d.get(a[u]),i=void 0!==e?o[e]:null;if(null===i){const e=tr(t,o[h]);er(e,s[u]),l[u]=e}else l[u]=er(i,s[u]),tr(t,o[h],i),o[e]=null;u++}else or(o[p]),p--;else or(o[h]),h++;for(;u<=m;){const e=tr(t,l[m+1]);er(e,s[u]),l[u++]=e}for(;h<=p;){const t=o[h++];null!==t&&or(t)}return this.ut=a,rr(t,l),W}}),ca=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];function da(t){const e=t.split(".");return e?.[e.length-1]||""}function ha(t){return"pdf"===t.toLowerCase()?new URL(new URL("BrwlMowD.png",import.meta.url).href).href:new URL(new URL("Ciwo_vsG.png",import.meta.url).href).href}function pa(t,e){if(t?.CdnFileName&&!e)return`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}?d=${encodeURIComponent(`${t.Name}.${t.Extension}`)}`}function ua(t,e){if(t?.CdnFileName)return t?.PreviewSizes&&t?.PreviewSizes?.split(",").includes(String(e))&&"svg"!==t.Extension?`https://cdn.leavitt.com/${t.CdnFileName}-${e}.${t.PreviewExtension}`:function(t){return"png"===t?.Extension||"jpg"===t?.Extension||"jpeg"===t?.Extension||"gif"===t?.Extension||"svg"===t?.Extension||"webp"===t?.Extension}(t)?`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}`:void 0}let ma=class extends ht{#le=[];get files(){return this.#le}set files(t){this.#le=t}#ce=!1;get isOver(){return this.#ce}set isOver(t){this.#ce=t}#de=void 0;get previewSrc(){return this.#de}set previewSrc(t){this.#de=t}#he;get input(){return this.#he}set input(t){this.#he=t}#pe;get imagePreviewDialog(){return this.#pe}set imagePreviewDialog(t){this.#pe=t}#ue;get cropperDialog(){return this.#ue}set cropperDialog(t){this.#ue=t}#me;get confirmDeleteDialog(){return this.#me}set confirmDeleteDialog(t){this.#me=t}#fe;get chipMultiSelect(){return this.#fe}set chipMultiSelect(t){this.#fe=t}#ve=[];#ge="image/*,.pdf";get accept(){return this.#ge}set accept(t){this.#ge=t}#be=!1;get multiple(){return this.#be}set multiple(t){this.#be=t}#It=!1;get required(){return this.#It}set required(t){this.#It=t}#Nt=!1;get disabled(){return this.#Nt}set disabled(t){this.#Nt=t}#ye=!1;get confirmDelete(){return this.#ye}set confirmDelete(t){this.#ye=t}#xe="Confirm delete";get confirmDeleteHeader(){return this.#xe}set confirmDeleteHeader(t){this.#xe=t}#we="Are you sure you would like to delete this attachment?";get confirmDeleteText(){return this.#we}set confirmDeleteText(t){this.#we=t}#_e="Add attachment";get addButtonLabel(){return this.#_e}set addButtonLabel(t){this.#_e=t}#Ct="Attachments";get label(){return this.#Ct}set label(t){this.#Ct=t}#Ot;get supportingText(){return this.#Ot}set supportingText(t){this.#Ot=t}#Et="No attachments";get noItemsText(){return this.#Et}set noItemsText(t){this.#Et=t}#Ht;get options(){return this.#Ht}set options(t){this.#Ht=t}#qt;get forcePNGOutput(){return this.#qt}set forcePNGOutput(t){this.#qt=t}#Tt=!1;get filled(){return this.#Tt}set filled(t){this.#Tt=t}#ke=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];get croppableImageFormats(){return this.#ke}set croppableImageFormats(t){this.#ke=t}getFiles(){return this.files}setFiles(...t){this.files=[...t].map(t=>({file:new File([""],t.fileName),previewSrc:t.previewSrc,downloadSrc:t.downloadSrc,id:t.id})),this.#ve=structuredClone(this.files)}setFilesFromDatabaseAttachments(...t){this.files=[...t].filter(t=>t.Name&&t.Extension).map(t=>({id:t.Id,file:new File([""],`${t?.Name}.${t?.Extension}`),previewSrc:ua(t,512),downloadSrc:pa(t)})),this.#ve=structuredClone(this.files)}checkValidity(){return this.chipMultiSelect.checkValidity()}reportValidity(){return this.chipMultiSelect.reportValidity()}hasChanges(){return JSON.stringify(this.#ve)!==JSON.stringify(this.files)}async reset(){this.#ve=[],this.previewSrc=void 0,this.files=[],this.isOver=!1,await this.updateComplete,this.chipMultiSelect.reset()}async handleNewFile(t){let e=!1;for(let i=0;i<(t?.length??0);i++){const r=t?.item(i);if(r){const t=this.croppableImageFormats.some(t=>r.name?.toLowerCase()?.endsWith(t?.toLowerCase()));if(t){"cropped"===await this.cropperDialog.open(URL.createObjectURL(r),r.name,async(t,e)=>{const i={file:t,previewSrc:e??void 0};this.multiple?this.files=[...this.files,i]:this.files=[i]})&&(this.reportValidity(),e=!0),await It(500)}else{const t={file:r},i=ca.some(t=>r.name.endsWith(t));if(i)try{const e=await this.toBase64(r);"string"==typeof e&&(t.previewSrc=e??void 0)}catch{}this.multiple?this.files=[...this.files,t]:this.files=[t],this.reportValidity(),e=!0}}}e&&this.#$e()}#ze=null;#Ae(t){const e=this.files.findIndex(e=>e===t);this.files.splice(e,1),this.requestUpdate("files"),this.reportValidity(),this.#$e()}toBase64(t){return new Promise((e,i)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(r.result),r.onerror=t=>i(t)})}#$e(){this.dispatchEvent(new Event("change"))}static{this.styles=[Ts,d`
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
    `]}render(){return Si`
      <titanium-chip-multi-select
        .supportingText=${this.supportingText}
        .required=${this.required}
        ?filled=${this.filled}
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
        <${this.filled?zi`md-filled-tonal-button`:zi`md-outlined-button`}
          ?hidden=${!this.multiple&&!!this.files.length}
          .disabled=${this.disabled}
          @click=${()=>{this.disabled||(this.input.value="",this.input.click())}}
          >${this.addButtonLabel} <md-icon slot="icon">add</md-icon>
        </${this.filled?zi`md-filled-tonal-button`:zi`md-outlined-button`}>
        ${la(this.files,t=>t.file.name,t=>Si`<md-input-chip
              label=${Pt(t.file.name)}
              ?closeable=${!this.disabled}
              ?remove-only=${!t.previewSrc&&!t.downloadSrc}
              @remove=${async e=>{e.preventDefault(),this.confirmDelete?(this.#ze=t,this.confirmDeleteDialog?.show()):this.#Ae(t)}}
              @click=${()=>{(t.previewSrc||t.downloadSrc)&&this.imagePreviewDialog.open(t.previewSrc||ha(da(t.file.name)),t.downloadSrc,t.file.name)}}
            >
              <img draggable="false" slot="icon" src=${t.previewSrc||ha(da(t.file.name))} />
            </md-input-chip>`)}
      </titanium-chip-multi-select>

      <label hidden for="upload">
        <input
          hidden
          type="file"
          id="input"
          name="image"
          ?multiple=${this.multiple}
          accept=${this.accept}
          @change=${t=>{const e=t.target.files;this.handleNewFile(e)}}
        />
      </label>
      <crop-and-save-image-dialog .forcePNGOutput=${this.forcePNGOutput} .options=${this.options}></crop-and-save-image-dialog>
      <image-preview-dialog></image-preview-dialog>

      <md-dialog confirm-delete>
        <div slot="headline">${this.confirmDeleteHeader}</div>
        <div slot="content"><p>${this.confirmDeleteText}</p></div>
        <div slot="actions">
          <md-text-button @click=${()=>this.confirmDeleteDialog.close()}>Cancel</md-text-button>
          <md-text-button
            @click=${()=>{this.#ze&&this.#Ae(this.#ze),this.confirmDeleteDialog.close()}}
            >Confirm</md-text-button
          >
        </div>
      </md-dialog>
    `}};r([vt({type:Array})],ma.prototype,"files",null),r([vt({type:Boolean,reflect:!0,attribute:"is-over"})],ma.prototype,"isOver",null),r([vt({type:String})],ma.prototype,"previewSrc",null),r([yt("input")],ma.prototype,"input",null),r([yt("image-preview-dialog")],ma.prototype,"imagePreviewDialog",null),r([yt("crop-and-save-image-dialog")],ma.prototype,"cropperDialog",null),r([yt("md-dialog[confirm-delete]")],ma.prototype,"confirmDeleteDialog",null),r([yt("titanium-chip-multi-select")],ma.prototype,"chipMultiSelect",null),r([vt({type:String})],ma.prototype,"accept",null),r([vt({type:Boolean})],ma.prototype,"multiple",null),r([vt({type:Boolean})],ma.prototype,"required",null),r([vt({type:Boolean,reflect:!0})],ma.prototype,"disabled",null),r([vt({type:Boolean})],ma.prototype,"confirmDelete",null),r([vt({type:String})],ma.prototype,"confirmDeleteHeader",null),r([vt({type:String})],ma.prototype,"confirmDeleteText",null),r([vt({type:String})],ma.prototype,"addButtonLabel",null),r([vt({type:String})],ma.prototype,"label",null),r([vt({type:String})],ma.prototype,"supportingText",null),r([vt({type:String})],ma.prototype,"noItemsText",null),r([vt({type:Object})],ma.prototype,"options",null),r([vt({type:Boolean,reflect:!0,attribute:"force-png"})],ma.prototype,"forcePNGOutput",null),r([vt({type:Boolean,attribute:"filled"})],ma.prototype,"filled",null),r([vt({type:Array})],ma.prototype,"croppableImageFormats",null),ma=r([ut("titanium-smart-attachment-input")],ma);class fa{async _getBearerTokenAsync(){return await Rt().getAccessTokenAsync()}}class va{constructor(t,e){this.status=t.status,this.headers=t.headers,this.blob=e}}class ga{constructor(){this.type=null,this.shortType=null}}class ba{constructor(t=new ga){this._odataInfo=t}}class ya{static#Se(t){const e=new Map;return Object.keys(t).filter(t=>0===t.indexOf("@odata")).forEach(i=>e.set(i.replace("@odata.",""),t[i])),e}#Te(t){return null===t.value||void 0===t.value||Array.isArray(t.value)?t:t.value}static#Ce(t){return Array.isArray(t.value)?t.value:[]}get odataCount(){return this.metadata.has("count")?this.metadata.get("count"):0}count(){return this.entities.length}firstOrDefault(){return this.count()>0?this.entities[0]:null}toList(){return this.entities}constructor(t,e){this.status=t.status,this.headers=t.headers,this.metadata=ya.#Se(e),this.entities=ya.#Ce(e),this.entity=0===this.entities.length?this.#Te(e):null}get containsMultipleEntities(){return this.entities.length>0}}const xa=new Map;function wa(t,e,i){const r=e||new FormData;let o;for(const e in t)if(Object.hasOwn(t,e)){if(void 0===t[e])continue;o=i?t instanceof Array&&t[e]instanceof File?i:t instanceof Array?i+"["+e+"]":i+"."+e:e,"object"!=typeof t[e]||t[e]instanceof File?r.append(o,t[e]):wa(t[e],r,o)}return r}xa.set(0,"CORS Error"),xa.set(200,"OK"),xa.set(201,"Created"),xa.set(202,"Accepted"),xa.set(203,"Non-Authoritative Information"),xa.set(204,"No Content"),xa.set(205,"Reset Content"),xa.set(206,"Partial Content"),xa.set(300,"Multiple Choices"),xa.set(301,"Moved Permanently"),xa.set(302,"Found"),xa.set(303,"See Other"),xa.set(304,"Not Modified"),xa.set(305,"Use Proxy"),xa.set(306,"Unused"),xa.set(307,"Temporary Redirect"),xa.set(400,"Bad Request"),xa.set(401,"Unauthorized"),xa.set(402,"Payment Required"),xa.set(403,"Forbidden"),xa.set(404,"Not Found"),xa.set(405,"Method Not Allowed"),xa.set(406,"Not Acceptable"),xa.set(407,"Proxy Authentication Required"),xa.set(408,"Request Timeout"),xa.set(409,"Conflict"),xa.set(410,"Gone"),xa.set(411,"Length Required"),xa.set(412,"Precondition Required"),xa.set(413,"Request Entry Too Large"),xa.set(414,"Request-URI Too Long"),xa.set(415,"Unsupported Media Type"),xa.set(416,"Requested Range Not Satisfiable"),xa.set(417,"Expectation Failed"),xa.set(418,"I'm a teapot"),xa.set(429,"Too Many Requests"),xa.set(500,"Internal Server Error"),xa.set(501,"Not Implemented"),xa.set(502,"Bad Gateway"),xa.set(503,"Service Unavailable"),xa.set(504,"Gateway Timeout"),xa.set(505,"HTTP Version Not Supported");class _a{constructor(t,e){this.headers={},this.baseUrl="https://api2.leavitt.com/",this.#Ee=t,this.addHeader("Content-Type","application/json"),this.#Ie=e?.appNameHeaderKey?e?.appNameHeaderKey:"X-LGAppName",this.addHeader(this.#Ie,"General")}#Ee;#Ie;addHeader(t,e){this.headers[t]=e}deleteHeader(t){delete this.headers[t]}#Pe(t){return this.baseUrl?.endsWith("/")&&t?.startsWith("/")&&Ct&&alert(`API Service Warning: Malformed url, double slashes present. \r\n\r\n${this.baseUrl}${t}`),`${this.baseUrl}${t}`}async uploadFile(t,e,i,r){try{if(r?.abortController?.signal&&r?.abortController.signal.aborted)throw new ka;const o=4;if(!e||!e.name)throw new Error("ArgumentException: Invalid file passed to uploadFile.");const s=new XMLHttpRequest;s.onabort=function(){throw new ka},r?.abortController?.signal&&(r?.abortController.signal.addEventListener("abort",()=>s.abort()),s.onreadystatechange=function(){s.readyState===o&&r?.abortController?.signal.removeEventListener("abort",()=>s.abort())}),s.upload.addEventListener("progress",t=>{i(t,s)}),s.open("POST",this.#Pe(t),!0);const a={...this.headers},n=await this.#Ee._getBearerTokenAsync();null!==n&&(a.Authorization=`Bearer ${n}`),a["X-LGAttachmentName"]=e.name;for(const t in a)s.setRequestHeader(t,a[t]);return new Promise((i,o)=>{s.addEventListener("loadend",()=>{try{const e={text:()=>s.response,status:s.status};if("blob"===r?.responseType){const r=this.#Oe(e,"UPLOAD",t);return i(r)}{const r=this.#Me(e,"UPLOAD",t);return i(r)}}catch(t){return o(t)}},!1),s.send(e)})}catch(e){return Promise.reject(this.#Re(e,"UPLOAD",t))}}async postAsync(t,e={},i){e instanceof ba&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers};i?.sendAsFormData&&delete r["Content-Type"];const o=await this.#Ee._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#Pe(t),{method:"POST",body:i?.sendAsFormData?wa(e):JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#Re(e,"POST",t))}return"blob"===i?.responseType?await this.#Oe(s,"POST",t):await this.#Me(s,"POST",t)}async patchAsync(t,e,i){e instanceof ba&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#Ee._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#Pe(t),{method:"PATCH",body:JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#Re(e,"PATCH",t))}return"blob"===i?.responseType?await this.#Oe(s,"PATCH",t):await this.#Me(s,"PATCH",t)}async patchReturnDtoAsync(t,e,i){e instanceof ba&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#Ee._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#Pe(t),{method:"PATCH",body:JSON.stringify(e),headers:{...r,Prefer:"return=representation"},signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#Re(e,"PATCH",t))}return"blob"===i?.responseType?await this.#Oe(s,"PATCH",t):await this.#Me(s,"PATCH",t)}async deleteAsync(t,e){const i={...this.headers},r=await this.#Ee._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#Pe(t),{method:"DELETE",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#Re(e,"DELETE",t))}return"blob"===e?.responseType?await this.#Oe(o,"DELETE",t):await this.#Me(o,"DELETE",t)}async getAsync(t,e){const i={...this.headers},r=await this.#Ee._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#Pe(t),{method:"GET",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#Re(e,"GET",t))}return"blob"===e?.responseType?await this.#Oe(o,"GET",t):await this.#Me(o,"GET",t)}#Be(t,e,i){return i.indexOf(t)===e}async aggregateResponses(t){const e=new Map,i=[],r=t.map(async t=>{try{await t()}catch(t){i.push(t);const r=t.message;e.set(r,(e.get(r)??0)+1)}});if(await Promise.allSettled(r),e.size>0){const r={type:"HttpError",action:i.map(t=>t.action).filter(this.#Be).join(", "),message:`${i.length} of ${t.length} actions failed`,detail:Array.from(e.keys()).map(t=>`${e.get(t)} error(s):  ${t}`).join("\n"),baseUrl:i.map(t=>t.baseUrl).filter(this.#Be).join(", "),path:i.map(t=>t.path).filter(this.#Be).join(", ")};return Promise.reject(r)}}#Re(t,e,i,r=void 0){const o=t?.message?.includes("Failed to fetch")?"Network error. Check your connection and try again.":"AbortError"===t?.name?"Abort error. Request has been aborted.":t?.message||t;return{type:"HttpError",statusCode:r,baseUrl:this.baseUrl,message:o,action:e,path:i}}async#Oe(t,e,i){try{if(0===t.status||t.status>=400&&t.status<=600){const r=await t.text(),o=r.length?JSON.parse(r):{},s=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||xa.get(t.status)||"unknown";o?.details&&console.warn(o.details);const a={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:s,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(a)}{const e=await t.blob();return Promise.resolve(new va(t,e))}}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}async#Me(t,e,i){const r=await t.text();let o;try{if(o=r.length?JSON.parse(r):{},0===t.status||t.status>=400&&t.status<=600){const r=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||xa.get(t.status)||"unknown";o?.details&&console.warn(o.details);const s={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:r,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(s)}return Promise.resolve(new ya(t,o))}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}}class ka extends Error{constructor(){super(...arguments),this.name="AbortError",this.message="Aborted"}}function $a(t){const e=()=>{t?.open&&t.close("navigation-close")};t.i=e,window.addEventListener("popstate",e,!1)}function za(t){t?.i&&(window.removeEventListener("popstate",t.i,!1),t.i=void 0)}const Aa=new _a(new fa);Aa.baseUrl=Ct?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",Aa.addHeader("X-LGAppName","IssueTracking"),Object.freeze(Aa);let Sa=class extends(Et(ht)){#lt;get dialog(){return this.#lt}set dialog(t){this.#lt=t}#Ne;get snackbar(){return this.#Ne}set snackbar(t){this.#Ne=t}#je;get textArea(){return this.#je}set textArea(t){this.#je=t}#Le;get imageInput(){return this.#Le}set imageInput(t){this.#Le=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.imageInput?.reset(),this.textArea?.reset()}async#Ue(){if(!this.textArea.reportValidity()||this.isLoading)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Bug",Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map(t=>t.file)};try{const e=Aa.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new Se(e)),this.loadWhile(e);if(!(await e).entity)throw new Error("Error submitting problem. Please try again.");document.dispatchEvent(new ze("",{overrideTemplate:V`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset(),this.dialog.close("done")}catch(t){this.dispatchEvent(new ze(t))}}static{this.styles=[ks,Ts,d`
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
    `]}render(){return V`
      <md-dialog
        @open=${t=>{$a(t.target),ws(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue)return za(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
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
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#Ue()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};r([yt("md-dialog")],Sa.prototype,"dialog",null),r([yt("titanium-snackbar-stack")],Sa.prototype,"snackbar",null),r([yt("md-outlined-text-field")],Sa.prototype,"textArea",null),r([yt("titanium-smart-attachment-input")],Sa.prototype,"imageInput",null),Sa=r([ut("report-a-problem-dialog")],Sa);const Ta=new _a(new fa);Ta.baseUrl=Ct?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",Ta.addHeader("X-LGAppName","IssueTracking"),Object.freeze(Ta);let Ca=class extends(Et(ht)){#lt;get dialog(){return this.#lt}set dialog(t){this.#lt=t}#Ne;get snackbar(){return this.#Ne}set snackbar(t){this.#Ne=t}#je;get textArea(){return this.#je}set textArea(t){this.#je=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.textArea?.reset()}async#Ue(){if(!this.textArea.reportValidity()||this.isLoading||!this.textArea.value)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Feedback",Description:this.textArea.value,Attachments:[]};try{const e=Ta.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new Se(e)),this.loadWhile(e);if(!(await e).entity)throw new Error("Error submitting feedback. Please try again.");document.dispatchEvent(new ze("We appreciate your input, and we will promptly conduct a review!")),this.reset(),this.dialog.close("done")}catch(t){this.dispatchEvent(new ze(t))}}static{this.styles=[ks,Ts,d`
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
    `]}render(){return V`
      <md-dialog
        @open=${t=>{$a(t.target),ws(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue)return za(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
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
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#Ue()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};r([yt("md-dialog")],Ca.prototype,"dialog",null),r([yt("titanium-snackbar-stack")],Ca.prototype,"snackbar",null),r([yt("md-outlined-text-field")],Ca.prototype,"textArea",null),Ca=r([ut("provide-feedback-dialog")],Ca);const Ea=d`:host{--_container-height: var(--md-outlined-icon-button-container-height, 40px);--_container-width: var(--md-outlined-icon-button-container-width, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_disabled-outline-color: var(--md-outlined-icon-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-icon-button-disabled-outline-opacity, 0.12);--_focus-icon-color: var(--md-outlined-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-outlined-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-outlined-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_icon-color: var(--md-outlined-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-outlined-icon-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-icon-button-outline-width, 1px);--_pressed-icon-color: var(--md-outlined-icon-button-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-outlined-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-outlined-icon-button-container-shape-start-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-icon-button-container-shape-start-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-icon-button-container-shape-end-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-icon-button-container-shape-end-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.outlined{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_outline-color);border-width:var(--_outline-width)}.outlined:hover{color:var(--_hover-icon-color)}.outlined:focus{color:var(--_focus-icon-color)}.outlined:active{color:var(--_pressed-icon-color)}.outlined:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.outlined:is(:disabled,[aria-disabled=true])::before{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.outlined:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}.selected:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-outline-opacity: 1}.selected::before{border-color:CanvasText;border-width:var(--_outline-width)}.selected:is(:disabled,[aria-disabled=true])::before{border-color:GrayText;opacity:1}}
`;let Ia=class extends Ei{getRenderClasses(){return{...super.getRenderClasses(),outlined:!0}}};Ia.styles=[Ii,Ea],Ia=r([ut("md-outlined-icon-button")],Ia);const Pa=new Set(Object.values(Ze));class Oa extends ht{get items(){return this.listController.items}constructor(){super(),this.listController=new ti({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>Pa.has(t),isActivatable:t=>!t.disabled&&"text"!==t.type}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return V`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}r([_t({flatten:!0})],Oa.prototype,"slotItems",void 0);const Ma=d`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;let Ra=class extends Oa{};Ra.styles=[Ma],Ra=r([ut("md-list")],Ra);class Ba extends ht{constructor(){super(...arguments),this.multiline=!1}render(){return V`
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
    `}handleTextSlotChange(){let t=!1,e=0;for(const i of this.textSlots)if(Na(i)&&(e+=1),e>1){t=!0;break}this.multiline=t}}function Na(t){for(const e of t.assignedNodes({flatten:!0})){const t=e.nodeType===Node.ELEMENT_NODE,i=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(t||i)return!0}return!1}r([vt({type:Boolean,reflect:!0})],Ba.prototype,"multiline",void 0),r([wt(".text slot")],Ba.prototype,"textSlots",void 0);const ja=d`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;let La=class extends Ba{};La.styles=[ja],La=r([ut("md-item")],La);const Ua=le(ht);class Fa extends Ua{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&"link"!==this.type}willUpdate(t){this.href&&(this.type="link"),super.willUpdate(t)}render(){return this.renderListItem(V`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const e="link"===this.type;let i;switch(this.type){case"link":i=zi`a`;break;case"button":i=zi`button`;break;default:i=zi`li`}const r="text"!==this.type,o=e&&this.target?this.target:X;return Si`
      <${i}
        id="item"
        tabindex="${this.isDisabled||!r?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||X}
        aria-checked=${this.ariaChecked||X}
        aria-expanded=${this.ariaExpanded||X}
        aria-haspopup=${this.ariaHasPopup||X}
        class="list-item ${Yt(this.getRenderClasses())}"
        href=${this.href||X}
        target=${o}
        @focus=${this.onFocus}
      >${t}</${i}>
    `}renderRipple(){return"text"===this.type?X:V` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return"text"===this.type?X:V` <md-focus-ring
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
    `}onFocus(){-1===this.tabIndex&&this.dispatchEvent(new Event("request-activation",{bubbles:!0,composed:!0}))}focus(){this.listItemRoot?.focus()}click(){this.listItemRoot?this.listItemRoot.click():super.click()}}Fa.shadowRootOptions={...ht.shadowRootOptions,delegatesFocus:!0},r([vt({type:Boolean,reflect:!0})],Fa.prototype,"disabled",void 0),r([vt({reflect:!0})],Fa.prototype,"type",void 0),r([vt({type:Boolean,attribute:"md-list-item",reflect:!0})],Fa.prototype,"isListItem",void 0),r([vt()],Fa.prototype,"href",void 0),r([vt()],Fa.prototype,"target",void 0),r([yt(".list-item")],Fa.prototype,"listItemRoot",void 0);const Da=d`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;let Ga=class extends Fa{};Ga.styles=[Da],Ga=r([ut("md-list-item")],Ga);var qa=function(){return qa=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},qa.apply(this,arguments)},Ha=function(){function t(t,e,i){var r=this;this.endVal=e,this.options=i,this.version="2.9.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var i=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=i?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(t){var e,i,o,s,a=t<0?"-":"";e=Math.abs(t).toFixed(r.options.decimalPlaces);var n=(e+="").split(".");if(i=n[0],o=n.length>1?r.options.decimal+n[1]:"",r.options.useGrouping){s="";for(var l=3,c=0,d=0,h=i.length;d<h;++d)r.options.useIndianSeparators&&4===d&&(l=2,c=1),0!==d&&c%l==0&&(s=r.options.separator+s),c++,s=i[h-d-1]+s;i=s}return r.options.numerals&&r.options.numerals.length&&(i=i.replace(/[0-9]/g,function(t){return r.options.numerals[+t]}),o=o.replace(/[0-9]/g,function(t){return r.options.numerals[+t]})),a+r.options.prefix+i+o+r.options.suffix},this.easeOutExpo=function(t,e,i,r){return i*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=qa(qa({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.el="string"==typeof t?document.getElementById(t):t,e=e??this.parse(this.el.innerHTML),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return r.handleScroll(r)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),r=i.top+window.pageYOffset,o=i.top+i.height+window.pageYOffset;o<e&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var i=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,i):"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t.prototype.parse=function(t){var e=function(t){return t.replace(/([.,'  ])/g,"\\$1")},i=e(this.options.separator),r=e(this.options.decimal),o=t.replace(new RegExp(i,"g"),"").replace(new RegExp(r,"g"),".");return parseFloat(o)},t}();let Va=class extends ht{#Fe;get major(){return this.#Fe}set major(t){this.#Fe=t}#De;get minor(){return this.#De}set minor(t){this.#De=t}#Ge;get rev(){return this.#Ge}set rev(t){this.#Ge=t}#qe;get downloads(){return this.#qe}set downloads(t){this.#qe=t}#He="@leavittsoftware%2Fweb";async firstUpdated(){const t=await this.#Ve(this.#He);if(t){const[e,i,r]=t.version?.split(".")?.map(t=>Number(t))??[],o=new Ha(this.major,e,{suffix:".",duration:1}),s=new Ha(this.minor,i,{suffix:".",duration:1}),a=new Ha(this.rev,r,{duration:1});o.start(),setTimeout(()=>{s.start()},500),setTimeout(()=>{a.start()},1e3);new Ha(this.downloads,t.downloads??0,{useGrouping:!0,suffix:" weekly downloads"}).start()}}async#Ve(t){try{const e=await fetch(`https://api.npmjs.org/versions/${t}/last-week`,{method:"GET"}),i=await e.text(),r=i.length?JSON.parse(i):{},o=Object.entries(r.downloads).map(t=>({version:t?.[0]?.split(".").map(t=>+t+1e5).join("."),downloads:t?.[1]})).sort((t,e)=>t.version.localeCompare(e.version)).map(t=>({...t,version:t.version?.split(".").map(t=>+t-1e5).join(".")}));return o?.pop()}catch(t){console.warn(t)}return null}static{this.styles=[d`
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
    `}};r([yt("span.major")],Va.prototype,"major",null),r([yt("span.minor")],Va.prototype,"minor",null),r([yt("span.rev")],Va.prototype,"rev",null),r([yt("span.downloads")],Va.prototype,"downloads",null),Va=r([ut("npm-stats")],Va);class Wa extends CustomEvent{static{this.eventName="change-route"}constructor(t){super(Wa.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class Xa extends CustomEvent{static{this.eventName="redirect-route"}constructor(t){super(Xa.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class Ya extends CustomEvent{static{this.eventName="site-error"}constructor(t){super(Ya.eventName,{bubbles:!0,composed:!0,detail:t})}}class Ja extends Event{static{this.eventType="confirm-dialog-open"}constructor(t,e){super(Ja.eventType,{bubbles:!0,composed:!0}),this.header=t,this.text=e,this.dialogResult=new Promise(t=>{this.resolver=t})}}const Ka=d`
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
`;var Qa=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Za=un,tn=an,en=function(t){return nn(an(t))},rn=nn,on=pn,sn=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function an(t){for(var e,i=[],r=0,o=0,s="";null!=(e=sn.exec(t));){var a=e[0],n=e[1],l=e.index;if(s+=t.slice(o,l),o=l+a.length,n)s+=n[1];else{s&&(i.push(s),s="");var c=e[2],d=e[3],h=e[4],p=e[5],u=e[6],m=e[7],f="+"===u||"*"===u,v="?"===u||"*"===u,g=c||"/",b=h||p||(m?".*":"[^"+g+"]+?");i.push({name:d||r++,prefix:c||"",delimiter:g,optional:v,repeat:f,pattern:cn(b)})}}return o<t.length&&(s+=t.substr(o)),s&&i.push(s),i}function nn(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^"+t[i].pattern+"$"));return function(i){for(var r="",o=i||{},s=0;s<t.length;s++){var a=t[s];if("string"!=typeof a){var n,l=o[a.name];if(null==l){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(Qa(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(n=encodeURIComponent(l[c]),!e[s].test(n))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+n+'"');r+=(0===c?a.prefix:a.delimiter)+n}}else{if(n=encodeURIComponent(l),!e[s].test(n))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+n+'"');r+=a.prefix+n}}else r+=a}return r}}function ln(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function cn(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function dn(t,e){return t.keys=e,t}function hn(t){return t.sensitive?"":"i"}function pn(t,e){for(var i=(e=e||{}).strict,r=!1!==e.end,o="",s=t[t.length-1],a="string"==typeof s&&/\/$/.test(s),n=0;n<t.length;n++){var l=t[n];if("string"==typeof l)o+=ln(l);else{var c=ln(l.prefix),d=l.pattern;l.repeat&&(d+="(?:"+c+d+")*"),o+=d=l.optional?c?"(?:"+c+"("+d+"))?":"("+d+")?":c+"("+d+")"}}return i||(o=(a?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":i&&a?"":"(?=\\/|$)",new RegExp("^"+o,hn(e))}function un(t,e,i){return Qa(e=e||[])?i||(i={}):(i=e,e=[]),t instanceof RegExp?function(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var r=0;r<i.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return dn(t,e)}(t,e):Qa(t)?function(t,e,i){for(var r=[],o=0;o<t.length;o++)r.push(un(t[o],e,i).source);return dn(new RegExp("(?:"+r.join("|")+")",hn(i)),e)}(t,e,i):function(t,e,i){for(var r=an(t),o=pn(r,i),s=0;s<r.length;s++)"string"!=typeof r[s]&&e.push(r[s]);return dn(o,e)}(t,e,i)}Za.parse=tn,Za.compile=en,Za.tokensToFunction=rn,Za.tokensToRegExp=on;var mn,fn="undefined"!=typeof document,vn="undefined"!=typeof window,gn="undefined"!=typeof history,bn="undefined"!=typeof process,yn=fn&&document.ontouchstart?"touchstart":"click",xn=vn&&!(!window.history.location&&!window.location);function wn(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function _n(t,e){if("function"==typeof t)return _n.call(this,"*",t);if("function"==typeof e)for(var i=new zn(t,null,this),r=1;r<arguments.length;++r)this.callbacks.push(i.middleware(arguments[r]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function kn(t){if(!t.handled){var e=this,i=e._window;(e._hashbang?xn&&this._getBase()+i.location.hash.replace("#!",""):xn&&i.location.pathname+i.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,xn&&(i.location.href=t.canonicalPath))}}function $n(t,e,i){var r=this.page=i||_n,o=r._window,s=r._hashbang,a=r._getBase();"/"===t[0]&&0!==t.indexOf(a)&&(t=a+(s?"#!":"")+t);var n=t.indexOf("?");this.canonicalPath=t;var l=new RegExp("^"+function(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(a));if(this.path=t.replace(l,"")||"/",s&&(this.path=this.path.replace("#!","")||"/"),this.title=fn&&o.document.title,this.state=e||{},this.state.path=t,this.querystring=~n?r._decodeURLEncodedURIComponent(t.slice(n+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~n?t.slice(0,n):t),this.params={},this.hash="",!s){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=r._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function zn(t,e,i){var r=this.page=i||An,o=e||{};o.strict=o.strict||r._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=Za(this.path,this.keys=[],o)}wn.prototype.configure=function(t){var e=t||{};this._window=e.window||vn&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&vn,this._click=!1!==e.click&&fn,this._hashbang=!!e.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):vn&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(yn,this.clickHandler,!1):fn&&i.document.removeEventListener(yn,this.clickHandler,!1),this._hashbang&&vn&&!gn?i.addEventListener("hashchange",this._onpopstate,!1):vn&&i.removeEventListener("hashchange",this._onpopstate,!1)},wn.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},wn.prototype._getBase=function(){var t=this._base;if(t)return t;var e=vn&&this._window&&this._window.location;return vn&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},wn.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},wn.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var i;if(this._running=!0,xn){var r=this._window.location;i=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(i,null,!0,e.dispatch)}},wn.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(yn,this.clickHandler,!1),vn&&t.removeEventListener("popstate",this._onpopstate,!1),vn&&t.removeEventListener("hashchange",this._onpopstate,!1)}},wn.prototype.show=function(t,e,i,r){var o=new $n(t,e,this),s=this.prevContext;return this.prevContext=o,this.current=o.path,!1!==i&&this.dispatch(o,s),!1!==o.handled&&!1!==r&&o.pushState(),o},wn.prototype.back=function(t,e){var i=this;if(this.len>0){var r=this._window;gn&&r.history.back(),this.len--}else t?setTimeout(function(){i.show(t,e)}):setTimeout(function(){i.show(i._getBase(),e)})},wn.prototype.redirect=function(t,e){var i=this;"string"==typeof t&&"string"==typeof e&&_n.call(this,t,function(t){setTimeout(function(){i.replace(e)},0)}),"string"==typeof t&&void 0===e&&setTimeout(function(){i.replace(t)},0)},wn.prototype.replace=function(t,e,i,r){var o=new $n(t,e,this),s=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=i,o.save(),!1!==r&&this.dispatch(o,s),o},wn.prototype.dispatch=function(t,e){var i=0,r=0,o=this;function s(){var e=o.callbacks[i++];if(t.path===o.current)return e?void e(t,s):kn.call(o,t);t.handled=!1}e?function t(){var i=o.exits[r++];if(!i)return s();i(e,t)}():s()},wn.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var i=new zn(t,null,this),r=1;r<arguments.length;++r)this.exits.push(i.middleware(arguments[r]))},wn.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,i=t.path||(t.composedPath?t.composedPath():null);if(i)for(var r=0;r<i.length;r++)if(i[r].nodeName&&"A"===i[r].nodeName.toUpperCase()&&i[r].href){e=i[r];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var o="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var s=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==s)&&!(s&&s.indexOf("mailto:")>-1)&&!(o?e.target.baseVal:e.target)&&(o||this.sameOrigin(e.href))){var a=o?e.href.baseVal:e.pathname+e.search+(e.hash||"");a="/"!==a[0]?"/"+a:a,bn&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var n=a,l=this._getBase();0===a.indexOf(l)&&(a=a.substr(l.length)),this._hashbang&&(a=a.replace("#!","")),(!l||n!==a||xn&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(n))}}}}},wn.prototype._onpopstate=(mn=!1,vn?(fn&&"complete"===document.readyState?mn=!0:window.addEventListener("load",function(){setTimeout(function(){mn=!0},0)}),function(t){if(mn){var e=this;if(t.state){var i=t.state.path;e.replace(i,t.state)}else if(xn){var r=e._window.location;e.show(r.pathname+r.search+r.hash,void 0,void 0,!1)}}}):function(){}),wn.prototype._which=function(t){return null==(t=t||vn&&this._window.event).which?t.button:t.which},wn.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&xn)return new URL(t,e.location.toString());if(fn){var i=e.document.createElement("a");return i.href=t,i}},wn.prototype.sameOrigin=function(t){if(!t||!xn)return!1;var e=this._toURL(t),i=this._window.location;return i.protocol===e.protocol&&i.hostname===e.hostname&&(i.port===e.port||""===i.port&&(80==e.port||443==e.port))},wn.prototype._samePath=function(t){if(!xn)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},wn.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},$n.prototype.pushState=function(){var t=this.page,e=t._window,i=t._hashbang;t.len++,gn&&e.history.pushState(this.state,this.title,i&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},$n.prototype.save=function(){var t=this.page;gn&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},zn.prototype.middleware=function(t){var e=this;return function(i,r){if(e.match(i.path,i.params))return i.routePath=e.path,t(i,r);r()}},zn.prototype.match=function(t,e){var i=this.keys,r=t.indexOf("?"),o=~r?t.slice(0,r):t,s=this.regexp.exec(decodeURIComponent(o));if(!s)return!1;delete e[0];for(var a=1,n=s.length;a<n;++a){var l=i[a-1],c=this.page._decodeURLEncodedURIComponent(s[a]);void 0===c&&hasOwnProperty.call(e,l.name)||(e[l.name]=c)}return!0};var An=function t(){var e=new wn;function i(){return _n.apply(e,arguments)}return i.callbacks=e.callbacks,i.exits=e.exits,i.base=e.base.bind(e),i.strict=e.strict.bind(e),i.start=e.start.bind(e),i.stop=e.stop.bind(e),i.show=e.show.bind(e),i.back=e.back.bind(e),i.redirect=e.redirect.bind(e),i.replace=e.replace.bind(e),i.dispatch=e.dispatch.bind(e),i.exit=e.exit.bind(e),i.configure=e.configure.bind(e),i.sameOrigin=e.sameOrigin.bind(e),i.clickHandler=e.clickHandler.bind(e),i.create=t,Object.defineProperty(i,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(i,"current",{get:function(){return e.current},set:function(t){e.current=t}}),i.Context=$n,i.Route=zn,i}(),Sn=An,Tn=An;Sn.default=Tn;class Cn{#We=[];subscribe(t,e,i){Array.isArray(t)?t.forEach(t=>this.subscribe(t,e,i)):Array.isArray(e)?e.forEach(e=>this.subscribe(t,e,i)):this.#Xe(t,e,i)}subscribeAll(t,e){Array.isArray(t)?t.forEach(t=>this.#Xe(t,"All",e)):this.#Xe(t,"All",e)}#Xe(t,e,i){const r={entityType:t,eventTypes:e,callback:i};this.#We.push(r)}unsubscribe(t,e,i){Array.isArray(t)?t.forEach(t=>this.unsubscribe(t,e,i)):Array.isArray(e)?e.forEach(e=>this.unsubscribe(t,e,i)):this.#Ye(t,e,i)}#Ye(t,e,i){this.#We=this.#We.filter(r=>r.callback!==i||r.entityType!==t||r.eventTypes!==e)}dispatch(t,e,i){this.#We.filter(i=>i.entityType===t&&("All"===i.eventTypes||i.eventTypes===e)).forEach(t=>t.callback(i))}}const En=new Cn;Object.freeze(En);const In=new URL(new URL("WQLuWBBr.svg",import.meta.url).href).href,Pn=new URL(new URL("BTVD-IEO.svg",import.meta.url).href).href;let On=class extends ht{#Je;get page(){return this.#Je}set page(t){this.#Je=t}#Ke="";get fatalErrorMessage(){return this.#Ke}set fatalErrorMessage(t){this.#Ke=t}#Qe=!1;get isWideViewPort(){return this.#Qe}set isWideViewPort(t){this.#Qe=t}#Ze=!1;get collapseMainMenu(){return this.#Ze}set collapseMainMenu(t){this.#Ze=t}#ti;get confirmDialog(){return this.#ti}set confirmDialog(t){this.#ti=t}#ei;get loadingIndicator(){return this.#ei}set loadingIndicator(t){this.#ei=t}#ii;get drawer(){return this.#ii}set drawer(t){this.#ii=t}get themePreference(){return localStorage.getItem("theme-preference")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}set themePreference(t){localStorage.setItem("theme-preference",t),this.#ri()}get prefersCollapsedMenu(){return JSON.parse(localStorage.getItem("prefers-collapsed-menu")||"false")}set prefersCollapsedMenu(t){localStorage.setItem("prefers-collapsed-menu",t.toString())}#ri(){document.firstElementChild?.setAttribute("data-theme",this.themePreference),En.dispatch("theme-preference","change",this.themePreference)}async firstUpdated(){this.#ri(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:t})=>{this.themePreference=t?"dark":"light",this.#ri()}),((t,e)=>{const i=window.matchMedia(t);i.addEventListener("change",t=>e(t.matches)),e(i.matches)})("(max-width: 920px)",async t=>{this.isWideViewPort=!t,this.isWideViewPort&&(this.drawer.closeQuick(),this.collapseMainMenu=this.prefersCollapsedMenu)}),await this.loadingIndicator.updateComplete,this.addEventListener(Ja.eventType,async t=>{await import("./9Xgw2LXu.js"),this.confirmDialog.handleEvent(t)}),this.addEventListener(Wa.eventName,t=>{Sn.show(t.detail.path)}),this.addEventListener(Xa.eventName,t=>{Sn.redirect(t.detail.path)}),this.addEventListener(Ya.eventName,t=>{this.fatalErrorMessage=t.detail,this.#oi("error")}),Sn("*",(t,e)=>{this.drawer?.close(),e()}),Sn("/",async()=>{Sn.show("/getting-started")}),Sn("/getting-started",()=>this.#oi("getting-started",()=>import("./QQF90k5a.js"))),Sn("/titanium-full-page-loading-indicator",()=>this.#oi("titanium-full-page-loading-indicator",()=>import("./BWuB9t5X.js"))),Sn("/available-cdn-icons",()=>this.#oi("available-cdn-icons",()=>import("./Cmy3F4nP.js"))),Sn("/leavitt-company-select",()=>this.#oi("leavitt-company-select",()=>import("./AG62XM15.js"))),Sn("/leavitt-file-explorer",()=>this.#oi("leavitt-file-explorer",()=>import("./BsGxm7J6.js"))),Sn("/titanium-date-range-selector",()=>this.#oi("titanium-date-range-selector",()=>import("./CsLAd5jF.js"))),Sn("/titanium-data-table-item",()=>this.#oi("titanium-data-table-item",()=>import("./Bcpv8hV7.js"))),Sn("/leavitt-person-select",()=>this.#oi("leavitt-person-select",()=>import("./CRZFZxoW.js"))),Sn("/leavitt-person-company-select",()=>this.#oi("leavitt-person-company-select",()=>import("./CWMBg67r.js"))),Sn("/leavitt-person-group-select",()=>this.#oi("leavitt-person-group-select",()=>import("./BM0PSkvi.js"))),Sn("/leavitt-email-history-viewer",()=>this.#oi("leavitt-email-history-viewer",()=>import("./ChDF55ZY.js"))),Sn("/leavitt-user-feedback",()=>this.#oi("leavitt-user-feedback",()=>import("./DL3p3AZr.js"))),Sn("/profile-picture",()=>this.#oi("profile-picture",()=>import("./CqHQ1mDU.js"))),Sn("/profile-picture-menu",()=>this.#oi("profile-picture-menu",()=>import("./DdUfWzSU.js"))),Sn("/titanium-access-denied-page",()=>this.#oi("titanium-access-denied-page",()=>import("./DilDirse.js"))),Sn("/titanium-data-table",()=>this.#oi("titanium-data-table",()=>import("./KcOUcdih.js"))),Sn("/titanium-data-table-item",()=>this.#oi("titanium-data-table-item",()=>import("./Bcpv8hV7.js"))),Sn("/titanium-drawer",()=>this.#oi("titanium-drawer",()=>import("./CVDw9eDT.js"))),Sn("/titanium-error-page",()=>this.#oi("titanium-error-page",()=>import("./Bt81YNtO.js"))),Sn("/titanium-address-input",()=>this.#oi("titanium-address-input",()=>import("./BVzVayhl.js"))),Sn("/titanium-header",()=>this.#oi("titanium-header",()=>import("./CeghtvsU.js"))),Sn("/titanium-icon-picker",()=>this.#oi("titanium-icon-picker",()=>import("./77fZ4gSN.js"))),Sn("/titanium-header",()=>this.#oi("titanium-header",()=>import("./CeghtvsU.js"))),Sn("/titanium-chip-multi-select",()=>this.#oi("titanium-chip-multi-select",()=>import("./Bnl4Sof6.js"))),Sn("/titanium-input-validator",()=>this.#oi("titanium-input-validator",()=>import("./McYdYa8d.js"))),Sn("/titanium-data-table-header",()=>this.#oi("titanium-data-table-header",()=>import("./CyabqwA9.js"))),Sn("/titanium-data-table-core",()=>this.#oi("titanium-data-table-core",()=>import("./Zc9wOY0M.js"))),Sn("/titanium-full-page-loading-indicator",()=>this.#oi("titanium-full-page-loading-indicator",()=>import("./BWuB9t5X.js"))),Sn("/titanium-page-control",()=>this.#oi("titanium-page-control",()=>import("./GovKRfV9.js"))),Sn("/titanium-smart-attachment-input",()=>this.#oi("titanium-smart-attachment-input",()=>import("./lLBnTX1t.js"))),Sn("/titanium-date-input",()=>this.#oi("titanium-date-input",()=>import("./0CwfTJuT.js"))),Sn("/titanium-search-input",()=>this.#oi("titanium-search-input",()=>import("./J30fRj3h.js"))),Sn("/titanium-toolbar",()=>this.#oi("titanium-toolbar",()=>import("./1U746MPh.js"))),Sn("/titanium-styles",()=>this.#oi("titanium-styles",()=>import("./BRsiQ_4h.js"))),Sn("/titanium-snackbar",()=>this.#oi("titanium-snackbar",()=>import("./C968efiq.js"))),Sn("/titanium-card",()=>this.#oi("titanium-card",()=>import("./ClYNDtj9.js"))),Sn("/titanium-chip",()=>this.#oi("titanium-chip",()=>import("./iqqS9Gqs.js"))),Sn("/titanium-youtube-input",()=>this.#oi("titanium-youtube-input",()=>import("./WINq9Olv.js"))),Sn("/titanium-show-hide",()=>this.#oi("titanium-show-hide",()=>import("./CrzNwqs2.js"))),Sn("/titanium-duration-input",()=>this.#oi("titanium-duration-input",()=>import("./CYP8llDI.js"))),Sn("/titanium-profile-picture-stack",()=>this.#oi("titanium-profile-picture-stack",()=>import("./BYJG4qEo.js"))),Sn("/titanium-confirm-dialog",()=>this.#oi("titanium-confirm-dialog",()=>import("./TYu7E-md.js"))),Sn("/titanium-confirmation-dialog",()=>this.#oi("titanium-confirmation-dialog",()=>import("./B9WRhEDe.js"))),Sn("*",()=>{this.fatalErrorMessage="We were unable to find the page you are looking for",this.#oi("error")}),Sn.start()}async#oi(t,e){this.page=t;try{const t=e?.();t&&this.dispatchEvent(new Se(t)),await t}catch(t){console.warn(t),this.fatalErrorMessage=t,this.page="error"}}static{this.styles=[Ka,Ts,d`
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
          @click=${()=>{this.isWideViewPort?(this.collapseMainMenu=!this.collapseMainMenu,this.prefersCollapsedMenu=this.collapseMainMenu):this.drawer?.open()}}
        >
          <md-icon>menu</md-icon>
        </md-icon-button>
        <a logo href="/" title="Back to home"><img src=${"dark"===this.themePreference?Pn:In} /></a>
        <h3 title="Leavitt book" @click=${()=>Sn.show("/")} main-title>Leavitt book</h3>
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
        <a slot="header" logo href="/" title="Back to home"><img src=${"dark"===this.themePreference?Pn:In} /></a>
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

            <md-list-item ?selected=${"titanium-confirmation-dialog"===this.page} href="/titanium-confirmation-dialog" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Confirmation dialog</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-data-table"===this.page} href="/titanium-data-table" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Data table</span>
            </md-list-item>

            <md-list-item ?selected=${"titanium-data-table-core"===this.page} href="/titanium-data-table-core" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Data table core</span>
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

            <md-list-item ?selected=${"leavitt-email-history-viewer"===this.page} href="/leavitt-email-history-viewer" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Email history viewer</span>
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
        ${"getting-started"===this.page?V`<getting-started></getting-started>`:X}
        ${"error"===this.page?V`<div>Oops, something went wrong.</div>`:X}

        <!-- Stories -->
        ${"available-cdn-icons"===this.page?V` <available-cdn-icons-demo large ?isActive=${"available-cdn-icons"===this.page}></available-cdn-icons-demo> `:X}
        ${"titanium-date-range-selector"===this.page?V` <titanium-date-range-selector-demo large ?isActive=${"titanium-date-range-selector"===this.page}></titanium-date-range-selector-demo> `:X}
        ${"leavitt-person-select"===this.page?V` <leavitt-person-select-demo large ?isActive=${"leavitt-person-select"===this.page}></leavitt-person-select-demo> `:X}
        ${"leavitt-company-select"===this.page?V` <leavitt-company-select-demo large ?isActive=${"leavitt-company-select"===this.page}></leavitt-company-select-demo> `:X}
        ${"leavitt-email-history-viewer"===this.page?V` <leavitt-email-history-viewer-demo large ?isActive=${"leavitt-email-history-viewer"===this.page}></leavitt-email-history-viewer-demo> `:X}
        ${"leavitt-file-explorer"===this.page?V` <leavitt-file-explorer-demo large ?isActive=${"leavitt-file-explorer"===this.page}></leavitt-file-explorer-demo> `:X}
        ${"leavitt-user-feedback"===this.page?V` <leavitt-user-feedback-demo large ?isActive=${"leavitt-user-feedback"===this.page}></leavitt-user-feedback-demo> `:X}
        ${"leavitt-person-company-select"===this.page?V` <leavitt-person-company-select-demo large ?isActive=${"leavitt-person-company-select"===this.page}></leavitt-person-company-select-demo> `:X}
        ${"leavitt-person-group-select"===this.page?V` <leavitt-person-group-select-demo large ?isActive=${"leavitt-person-group-select"===this.page}></leavitt-person-group-select-demo> `:X}
        ${"titanium-drawer"===this.page?V` <titanium-drawer-demo ?isActive=${"titanium-drawer"===this.page}></titanium-drawer-demo> `:X}
        ${"profile-picture"===this.page?V` <profile-picture-demo ?isActive=${"profile-picture"===this.page}></profile-picture-demo> `:X}
        ${"profile-picture-menu"===this.page?V` <profile-picture-menu-demo large ?isActive=${"profile-picture-menu"===this.page}></profile-picture-menu-demo> `:X}
        ${"titanium-input-validator"===this.page?V` <titanium-input-validator-demo large ?isActive=${"titanium-input-validator"===this.page}></titanium-input-validator-demo> `:X}
        ${"titanium-data-table"===this.page?V` <titanium-data-table-demo large ?isActive=${"titanium-data-table"===this.page}></titanium-data-table-demo> `:X}
        ${"titanium-data-table-core"===this.page?V` <titanium-data-table-core-demo large ?isActive=${"titanium-data-table-core"===this.page}></titanium-data-table-core-demo> `:X}
        ${"titanium-data-table-header"===this.page?V` <titanium-data-table-header-demo large ?isActive=${"titanium-data-table-header"===this.page}></titanium-data-table-header-demo> `:X}
        ${"titanium-data-table-item"===this.page?V` <titanium-data-table-item-demo large ?isActive=${"titanium-data-table-item"===this.page}></titanium-data-table-item-demo> `:X}
        ${"titanium-access-denied-page"===this.page?V` <titanium-access-denied-page-demo large ?isActive=${"titanium-access-denied-page"===this.page}></titanium-access-denied-page-demo> `:X}
        ${"titanium-address-input"===this.page?V` <titanium-address-input-demo large ?isActive=${"titanium-address-input"===this.page}></titanium-address-input-demo> `:X}
        ${"titanium-error-page"===this.page?V` <titanium-error-page-demo large ?isActive=${"titanium-error-page"===this.page}></titanium-error-page-demo> `:X}
        ${"titanium-header"===this.page?V` <titanium-header-demo ?isActive=${"titanium-header"===this.page}></titanium-header-demo> `:X}
        ${"titanium-icon"===this.page?V` <titanium-icon-demo ?isActive=${"titanium-icon"===this.page}></titanium-icon-demo> `:X}
        ${"titanium-icon-picker"===this.page?V` <titanium-icon-picker-demo large ?isActive=${"titanium-icon-picker"===this.page}></titanium-icon-picker-demo> `:X}
        ${"titanium-page-control"===this.page?V` <titanium-page-control-demo large ?isActive=${"titanium-page-control"===this.page}></titanium-page-control-demo> `:X}
        ${"titanium-date-input"===this.page?V` <titanium-date-input-demo large ?isActive=${"titanium-date-input"===this.page}></titanium-date-input-demo> `:X}
        ${"titanium-search-input"===this.page?V` <titanium-search-input-demo large ?isActive=${"titanium-search-input"===this.page}></titanium-search-input-demo> `:X}
        ${"titanium-toolbar"===this.page?V` <titanium-toolbar-demo large ?isActive=${"titanium-toolbar"===this.page}></titanium-toolbar-demo> `:X}
        ${"titanium-full-page-loading-indicator"===this.page?V`
              <titanium-full-page-loading-indicator-demo
                large
                ?isActive=${"titanium-full-page-loading-indicator"===this.page}
              ></titanium-full-page-loading-indicator-demo>
            `:X}
        ${"titanium-loading-indicator"===this.page?V` <titanium-loading-indicator-demo large ?isActive=${"titanium-loading-indicator"===this.page}></titanium-loading-indicator-demo> `:X}
        ${"titanium-chip-multi-select"===this.page?V` <titanium-chip-multi-select-demo large ?isActive=${"titanium-chip-multi-select"===this.page}></titanium-chip-multi-select-demo> `:X}
        ${"titanium-styles"===this.page?V` <titanium-styles-demo large ?isActive=${"titanium-styles"===this.page}></titanium-styles-demo> `:X}
        ${"titanium-snackbar"===this.page?V` <titanium-snackbar-demo large ?isActive=${"titanium-snackbar"===this.page}></titanium-snackbar-demo> `:X}
        ${"titanium-smart-attachment-input"===this.page?V`
              <titanium-smart-attachment-input-demo large ?isActive=${"titanium-smart-attachment-input"===this.page}></titanium-smart-attachment-input-demo>
            `:X}
        ${"titanium-card"===this.page?V` <titanium-card-demo large ?isActive=${"titanium-card"===this.page}></titanium-card-demo> `:X}
        ${"titanium-chip"===this.page?V` <titanium-chip-demo large ?isActive=${"titanium-chip"===this.page}></titanium-chip-demo> `:X}
        ${"titanium-youtube-input"===this.page?V` <titanium-youtube-input-demo large ?isActive=${"titanium-youtube-input"===this.page}></titanium-youtube-input-demo> `:X}
        ${"titanium-show-hide"===this.page?V` <titanium-show-hide-demo large ?isActive=${"titanium-show-hide"===this.page}></titanium-show-hide-demo> `:X}
        ${"titanium-duration-input"===this.page?V` <titanium-duration-input-demo large ?isActive=${"titanium-duration-input"===this.page}></titanium-duration-input-demo> `:X}
        ${"titanium-confirm-dialog"===this.page?V` <titanium-confirm-dialog-demo large ?isActive=${"titanium-confirm-dialog"===this.page}></titanium-confirm-dialog-demo> `:X}
        ${"titanium-confirmation-dialog"===this.page?V` <titanium-confirmation-dialog-demo large ?isActive=${"titanium-confirmation-dialog"===this.page}></titanium-confirmation-dialog-demo> `:X}
        ${"titanium-profile-picture-stack"===this.page?V`
              <titanium-profile-picture-stack-demo large ?isActive=${"titanium-profile-picture-stack"===this.page}></titanium-profile-picture-stack-demo>
            `:X}
        <titanium-access-denied-page ?hidden=${"access-denied"!==this.page}></titanium-access-denied-page>
        <titanium-error-page ?hidden=${"error"!==this.page} .message=${this.fatalErrorMessage}></titanium-error-page>
      </main-content>

      <report-a-problem-dialog></report-a-problem-dialog>
      <provide-feedback-dialog></provide-feedback-dialog>

      <titanium-confirm-dialog></titanium-confirm-dialog>
      <titanium-snackbar-stack .eventListenerTarget=${document}></titanium-snackbar-stack>
      <titanium-service-worker-notifier></titanium-service-worker-notifier>`}};r([gt()],On.prototype,"page",null),r([gt()],On.prototype,"fatalErrorMessage",null),r([gt()],On.prototype,"isWideViewPort",null),r([vt({type:Boolean,reflect:!0,attribute:"collapse-main-menu"})],On.prototype,"collapseMainMenu",null),r([yt("titanium-confirm-dialog")],On.prototype,"confirmDialog",null),r([yt("titanium-full-page-loading-indicator")],On.prototype,"loadingIndicator",null),r([yt("titanium-drawer")],On.prototype,"drawer",null),r([gt()],On.prototype,"themePreference",null),r([gt()],On.prototype,"prefersCollapsedMenu",null),On=r([ut("my-app")],On);export{ue as $,_a as A,Wt as B,Ja as C,la as D,X as E,Ii as F,Rt as G,zi as H,Ei as I,Si as J,ji as K,Et as L,Ct as M,Ka as N,zs as O,Se as P,En as Q,Ji as R,ze as S,W as T,Ee as U,_t as V,It as W,le as X,pr as Y,fr as Z,r as _,$s as a,ve as a0,fe as a1,Yt as a2,ur as a3,mr as a4,nr as a5,lr as a6,kr as a7,Pe as a8,ct as a9,i as aA,wr as aa,mi as ab,li as ac,vr as ad,pi as ae,ni as af,We as ag,ai as ah,ei as ai,si as aj,ri as ak,sr as al,ar as am,Sr as an,Cr as ao,bt as ap,Js as aq,oa as ar,Jt as as,Ya as at,ye as au,Nt as av,Lr as aw,As as ax,e as ay,o as az,Cs as b,d as c,fa as d,yt as e,wt as f,Cn as g,ks as h,ht as i,Ss as j,Is as k,Es as l,Pt as m,vt as n,Ps as o,Ts as p,ua as q,gt as r,pa as s,ut as t,ws as u,$a as v,za as w,V as x,Xt as y,Vt as z};
