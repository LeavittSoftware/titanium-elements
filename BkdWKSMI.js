function t(t,e,i,r){var o,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,i,n):o(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(i,t,r)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,f=m.trustedTypes,v=f?f.emptyScript:"",g=m.reactiveElementPolyfillSupport,b=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const s=r?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=r;const s=o.fromAttribute(e,t.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(t,e,i,r=!1,o){if(void 0!==t){const s=this.constructor;if(!1===r&&(o=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??x)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[b("elementProperties")]=new Map,_[b("finalized")]=new Map,g?.({ReactiveElement:_}),(m.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,$=t=>t,S=k.trustedTypes,z=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+C,E=`<${M}>`,T=document,P=()=>T.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,B="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,j=/>/g,D=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,F=/"/g,U=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),G=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,W=T.createTreeWalker(T,129);function Y(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(e):e}class X{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const n=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,r=[];let o,s=2===e?"<svg>":3===e?"<math>":"",n=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===R?"!--"===l[1]?n=N:void 0!==l[1]?n=j:void 0!==l[2]?(U.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=o??R,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?F:L):n===F||n===L?n=D:n===N||n===j?n=R:(n=D,o=void 0);const h=n===D&&t[e+1].startsWith("/>")?" ":"";s+=n===R?i+E:c>=0?(r.push(a),i.slice(0,c)+A+i.slice(c)+C+h):i+C+(-2===c?e:h)}return[Y(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]})(t,e);if(this.el=X.createElement(l,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=W.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(A)){const e=c[s++],i=r.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Z}),r.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(U.test(r.tagName)){const t=r.textContent.split(C),e=t.length-1;if(e>0){r.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],P()),W.nextNode(),a.push({type:2,index:++o});r.append(t[e],P())}}}else if(8===r.nodeType)if(r.data===M)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,r){if(e===G)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const s=I(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,r)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??T).importNode(e,!0);W.currentNode=r;let o=W.nextNode(),s=0,n=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new rt(o,this,t)),this._$AV.push(e),a=i[++n]}s!==a?.index&&(o=W.nextNode(),s++)}return W.currentNode=T,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),I(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new K(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new X(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(void 0===o)t=J(this,t,e,0),s=!I(t)||t!==this._$AH&&t!==G,s&&(this._$AH=t);else{const r=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=J(this,r[i+n],e,n),a===G&&(a=this._$AH[n]),s||=!I(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}s&&!r&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends Z{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??q)===G)return;const i=this._$AH,r=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const ot={I:Q},st=k.litHtmlPolyfillSupport;st?.(X,Q),(k.litHtmlVersions??=[]).push("3.3.2");const nt=(t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o},at=globalThis;let lt=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}};lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x},ut=(t=ht,e,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};function pt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function mt(t){return pt({...t,state:!0,attribute:!1})}const ft=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function vt(t,e){return(e,i,r)=>ft(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}let gt;function bt(t){return(e,i)=>ft(e,i,{get(){return(this.renderRoot??(gt??=document.createDocumentFragment())).querySelectorAll(t)}})}function yt(t){return(e,i)=>{const{slot:r,selector:o}=t??{},s="slot"+(r?`[name=${r}]`:":not([name])");return ft(e,i,{get(){const e=this.renderRoot?.querySelector(s),i=e?.assignedElements(t)??[];return void 0===o?i:i.filter(t=>t.matches(o))}})}}class xt{#t=[];subscribe(t,e,i){Array.isArray(t)?t.forEach(t=>this.subscribe(t,e,i)):Array.isArray(e)?e.forEach(e=>this.subscribe(t,e,i)):this.#e(t,e,i)}subscribeAll(t,e){Array.isArray(t)?t.forEach(t=>this.#e(t,"All",e)):this.#e(t,"All",e)}#e(t,e,i){const r={entityType:t,eventTypes:e,callback:i};this.#t.push(r)}unsubscribe(t,e,i){Array.isArray(t)?t.forEach(t=>this.unsubscribe(t,e,i)):Array.isArray(e)?e.forEach(e=>this.unsubscribe(t,e,i)):this.#i(t,e,i)}#i(t,e,i){this.#t=this.#t.filter(r=>r.callback!==i||r.entityType!==t||r.eventTypes!==e)}dispatch(t,e,i){this.#t.filter(i=>i.entityType===t&&("All"===i.eventTypes||i.eventTypes===e)).forEach(t=>t.callback(i))}}const wt=new xt;Object.freeze(wt);const _t=e=>{class i extends e{connectedCallback(){super.connectedCallback(),wt.subscribe("theme-preference","change",t=>{this.themePreference=t}),this.themePreference="light"===document.firstElementChild?.getAttribute("data-theme")?"light":"dark"}}return t([pt({attribute:"theme-preference",reflect:!0})],i.prototype,"themePreference",void 0),i};let kt=class extends(_t(lt)){#r="/";get href(){return this.#r}set href(t){this.#r=t}#o="Back to home";get title(){return this.#o}set title(t){this.#o=t}#s;get appName(){return this.#s}set appName(t){this.#s=t}static{this.styles=[n`
      :host {
        display: grid;
      }

      :host(:hover) {
        span[lg-logo] {
          opacity: 1;
        }

        span[app-name] {
          opacity: 0;
        }

        img {
          width: 22px;
          margin-right: 4px;
        }
      }

      a {
        display: grid;
        grid: 'logo text' / auto 1fr;
        align-items: center;

        font-family: zurchlc, Metropolis;
        font-size: 26px;
        line-height: 28px;
        word-spacing: -4px;
        font-weight: 300;
        color: var(--md-sys-color-on-surface);
        text-decoration: none;

        overflow: hidden;

        img {
          grid-area: logo;
          height: 22px;
          width: 0;
          transition:
            width 0.4s ease-in-out 0.3s,
            margin-right 0.4s ease-in-out 0.3s;
        }

        span {
          transition: opacity 0.4s ease-in-out 0.3s;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span[lg-logo],
        span[app-name] {
          grid-area: text;
        }

        span[lg-logo] {
          opacity: 0;
        }

        span[app-name] {
          opacity: 1;
        }

        span[app-name],
        span[lg-leavitt] {
          color: #15467b;
        }

        span[lg-group] {
          color: #919294;
        }
      }

      :host([theme-preference='dark']) {
        span[app-name],
        span[lg-leavitt],
        span[lg-group] {
          color: #fff;
        }
      }

      @media (max-width: 920px) {
        span[lg-logo],
        span[app-name] {
          font-size: 20px;
          line-height: 22px;
        }
        a {
          img {
            height: 18px;
          }
        }
        :host(:hover) {
          img {
            width: 18px;
            margin-right: 4px;
          }
        }
      }
    `]}renderLGLogoText(){return H`<span lg-logo><span lg-leavitt>Leavitt</span> <span lg-group>Group</span></span>`}render(){return H`<a mark href=${this.href} title=${this.title}>
      <img src=${"dark"===this.themePreference?"https://cdn.leavitt.com/company-mark-57-dark.svg":"https://cdn.leavitt.com/company-mark-57.svg"} />
      <span app-name>${this.appName}</span>${this.renderLGLogoText()}
    </a>`}};t([pt({type:String})],kt.prototype,"href",null),t([pt({type:String})],kt.prototype,"title",null),t([pt({type:String,attribute:"app-name"})],kt.prototype,"appName",null),kt=t([dt("leavitt-app-logo")],kt);const $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},St=t=>(...e)=>({_$litDirective$:t,values:e});let zt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const At=St(class extends zt{constructor(t){if(super(t),t.type!==$t.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return G}}),Ct={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)"};class Mt extends lt{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const t=this.count??-1,e=this.max??-1;return t<0||e<=0?"":`${t} / ${e}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&void 0!==t.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){const t=this.renderLabel(!0),e=this.renderLabel(!1),i=this.renderOutline?.(t),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return H`
      <div class="field ${At(r)}">
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
                ${e} ${i?q:t}
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
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return q;const i=H`<span>${t}</span>`,r=e?H`<span class="counter">${e}</span>`:q,o=this.error&&this.errorText&&!this.refreshErrorAlert;return H`
      <div class="supporting-text" role=${o?"alert":q}>${i}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)nt(H`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return q;let e;e=t?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const i={hidden:!e,floating:t,resting:!t},r=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return H`
      <span class="label ${At(i)}" aria-hidden=${!e}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){if(!this.label)return;t??=this.focused,e??=this.populated;(t||e)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:Ct.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:i,y:r,height:o}=t.getBoundingClientRect(),{x:s,y:n,height:a}=e.getBoundingClientRect(),l=t.scrollWidth,c=e.scrollWidth,d=c/l,h=`translateX(${s-i}px) translateY(${n-r+Math.round((a-o*d)/2)}px) scale(${d})`,u="translateX(0) translateY(0) scale(1)",p=e.clientWidth,m=c>p?p/d+"px":"";return this.focused||this.populated?[{transform:h,width:m},{transform:u,width:m}]:[{transform:u,width:m},{transform:h,width:m}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}t([pt({type:Boolean})],Mt.prototype,"disabled",void 0),t([pt({type:Boolean})],Mt.prototype,"error",void 0),t([pt({type:Boolean})],Mt.prototype,"focused",void 0),t([pt()],Mt.prototype,"label",void 0),t([pt({type:Boolean,attribute:"no-asterisk"})],Mt.prototype,"noAsterisk",void 0),t([pt({type:Boolean})],Mt.prototype,"populated",void 0),t([pt({type:Boolean})],Mt.prototype,"required",void 0),t([pt({type:Boolean})],Mt.prototype,"resizable",void 0),t([pt({attribute:"supporting-text"})],Mt.prototype,"supportingText",void 0),t([pt({attribute:"error-text"})],Mt.prototype,"errorText",void 0),t([pt({type:Number})],Mt.prototype,"count",void 0),t([pt({type:Number})],Mt.prototype,"max",void 0),t([pt({type:Boolean,attribute:"has-start"})],Mt.prototype,"hasStart",void 0),t([pt({type:Boolean,attribute:"has-end"})],Mt.prototype,"hasEnd",void 0),t([yt({slot:"aria-describedby"})],Mt.prototype,"slottedAriaDescribedBy",void 0),t([mt()],Mt.prototype,"isAnimating",void 0),t([mt()],Mt.prototype,"refreshErrorAlert",void 0),t([mt()],Mt.prototype,"disableTransitions",void 0),t([vt(".label.floating")],Mt.prototype,"floatingLabelEl",void 0),t([vt(".label.resting")],Mt.prototype,"restingLabelEl",void 0),t([vt(".container")],Mt.prototype,"containerEl",void 0);class Et extends Mt{renderBackground(){return H` <div class="background"></div> `}renderStateLayer(){return H` <div class="state-layer"></div> `}renderIndicator(){return H`<div class="active-indicator"></div>`}}const Tt=n`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-filled-field-content-space, 16px);--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_with-leading-content-leading-space: var(--md-filled-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-filled-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`,Pt=n`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;let It=class extends Et{};It.styles=[Pt,Tt],It=t([dt("md-filled-field")],It);const Ot=Symbol.for(""),Bt=t=>{if(t?.r===Ot)return t?._$litStatic$},Rt=(t,...e)=>({_$litStatic$:e.reduce((e,i,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:Ot}),Nt=new Map,jt=(t=>(e,...i)=>{const r=i.length;let o,s;const n=[],a=[];let l,c=0,d=!1;for(;c<r;){for(l=e[c];c<r&&void 0!==(s=i[c],o=Bt(s));)l+=o+e[++c],d=!0;c!==r&&a.push(s),n.push(l),c++}if(c===r&&n.push(e[r]),d){const t=n.join("$$lit$$");void 0===(e=Nt.get(t))&&(n.raw=n,Nt.set(t,e=n)),i=a}return t(e,...i)})(H),Dt=n`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_icon-input-space: var(--md-filled-text-field-icon-input-space, 16px);--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-filled-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-filled-text-field-with-trailing-icon-trailing-space, 12px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-space: var(--_icon-input-space);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space);--md-filled-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-filled-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`,{I:Lt}=ot,Ft=t=>t,Ut=()=>document.createComment(""),Ht=(t,e,i)=>{const r=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=r.insertBefore(Ut(),o),s=r.insertBefore(Ut(),o);i=new Lt(e,s,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,n=s!==t;if(n){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==o||n){let t=i._$AA;for(;t!==e;){const e=Ft(t).nextSibling;Ft(r).insertBefore(t,o),t=e}}}return i},Gt=(t,e,i=t)=>(t._$AI(e,i),t),qt={},Vt=(t,e=qt)=>t._$AH=e,Wt=t=>{t._$AR(),t._$AA.remove()},Yt=St(class extends zt{constructor(t){if(super(t),t.type!==$t.PROPERTY&&t.type!==$t.ATTRIBUTE&&t.type!==$t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===G||e===q)return e;const i=t.element,r=t.name;if(t.type===$t.PROPERTY){if(e===i[r])return G}else if(t.type===$t.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(r))return G}else if(t.type===$t.ATTRIBUTE&&i.getAttribute(r)===e+"")return G;return Vt(t),e}}),Xt="important",Jt=" !"+Xt,Kt=St(class extends zt{constructor(t){if(super(t),t.type!==$t.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(Jt);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?Xt:""):i[t]=r}}return G}}),Qt=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],Zt=Qt.map(ee);function te(t){return Zt.includes(t)}function ee(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}const ie=Symbol("privateIgnoreAttributeChangesFor");function re(t){var e;class i extends t{constructor(){super(...arguments),this[e]=new Set}attributeChangedCallback(t,e,i){if(!te(t))return void super.attributeChangedCallback(t,e,i);if(this[ie].has(t))return;this[ie].add(t),this.removeAttribute(t),this[ie].delete(t);const r=se(t);null===i?delete this.dataset[r]:this.dataset[r]=i,this.requestUpdate(se(t),e)}getAttribute(t){return te(t)?super.getAttribute(oe(t)):super.getAttribute(t)}removeAttribute(t){super.removeAttribute(t),te(t)&&(super.removeAttribute(oe(t)),this.requestUpdate())}}return e=ie,function(t){for(const e of Qt){const i=ee(e),r=oe(i),o=se(i);t.createProperty(e,{attribute:i,noAccessor:!0}),t.createProperty(Symbol(r),{attribute:r,noAccessor:!0}),Object.defineProperty(t.prototype,e,{configurable:!0,enumerable:!0,get(){return this.dataset[o]??null},set(t){const i=this.dataset[o]??null;t!==i&&(null===t?delete this.dataset[o]:this.dataset[o]=t,this.requestUpdate(e,i))}})}}(i),i}function oe(t){return`data-${t}`}function se(t){return t.replace(/-\w/,t=>t[1].toUpperCase())}const ne={fromAttribute:t=>t??"",toAttribute:t=>t||null};function ae(t,e){!e.bubbles||t.shadowRoot&&!e.composed||e.stopPropagation();const i=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(i);return r||e.preventDefault(),r}const le=Symbol("internals"),ce=Symbol("privateInternals");function de(t){return class extends t{get[le](){return this[ce]||(this[ce]=this.attachInternals()),this[ce]}}}const he=Symbol("createValidator"),ue=Symbol("getValidityAnchor"),pe=Symbol("privateValidator"),me=Symbol("privateSyncValidity"),fe=Symbol("privateCustomValidationMessage");function ve(t){var e;class i extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[me](),this[le].validity}get validationMessage(){return this[me](),this[le].validationMessage}get willValidate(){return this[me](),this[le].willValidate}checkValidity(){return this[me](),this[le].checkValidity()}reportValidity(){return this[me](),this[le].reportValidity()}setCustomValidity(t){this[fe]=t,this[me]()}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[me]()}firstUpdated(t){super.firstUpdated(t),this[me]()}[(e=fe,me)](){this[pe]||(this[pe]=this[he]());const{validity:t,validationMessage:e}=this[pe].getValidity(),i=!!this[fe],r=this[fe]||e;this[le].setValidity({...t,customError:i},r,this[ue]()??void 0)}[he](){throw new Error("Implement [createValidator]")}[ue](){throw new Error("Implement [getValidityAnchor]")}}return i}const ge=Symbol("getFormValue"),be=Symbol("getFormState");function ye(e){class i extends e{get form(){return this[le].form}get labels(){return this[le].labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t,e,i){if("name"===t||"disabled"===t){const i="disabled"===t?null!==e:e;return void this.requestUpdate(t,i)}super.attributeChangedCallback(t,e,i)}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[le].setFormValue(this[ge](),this[be]())}[ge](){throw new Error("Implement [getFormValue]")}[be](){return this[ge]()}formDisabledCallback(t){this.disabled=t}}return i.formAssociated=!0,t([pt({noAccessor:!0})],i.prototype,"name",null),t([pt({type:Boolean,noAccessor:!0})],i.prototype,"disabled",null),i}const xe=Symbol("onReportValidity"),we=Symbol("privateCleanupFormListeners"),_e=Symbol("privateDoNotReportInvalid"),ke=Symbol("privateIsSelfReportingValidity"),$e=Symbol("privateCallOnReportValidity");function Se(t){var e,i,r;class o extends t{constructor(...t){super(...t),this[e]=new AbortController,this[i]=!1,this[r]=!1,this.addEventListener("invalid",t=>{!this[_e]&&t.isTrusted&&this.addEventListener("invalid",()=>{this[$e](t)},{once:!0})},{capture:!0})}checkValidity(){this[_e]=!0;const t=super.checkValidity();return this[_e]=!1,t}reportValidity(){this[ke]=!0;const t=super.reportValidity();return t&&this[$e](null),this[ke]=!1,t}[(e=we,i=_e,r=ke,$e)](t){const e=t?.defaultPrevented;if(e)return;this[xe](t);!e&&t?.defaultPrevented&&(this[ke]||function(t,e){if(!t)return!0;let i;for(const e of t.elements)if(e.matches(":invalid")){i=e;break}return i===e}(this[le].form,this))&&this.focus()}[xe](t){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(t){super.formAssociatedCallback&&super.formAssociatedCallback(t),this[we].abort(),t&&(this[we]=new AbortController,function(t,e,i,r){const o=function(t){if(!ze.has(t)){const e=new EventTarget;ze.set(t,e);for(const i of["reportValidity","requestSubmit"]){const r=t[i];t[i]=function(){e.dispatchEvent(new Event("before"));const t=Reflect.apply(r,this,arguments);return e.dispatchEvent(new Event("after")),t}}}return ze.get(t)}(e);let s,n=!1,a=!1;o.addEventListener("before",()=>{a=!0,s=new AbortController,n=!1,t.addEventListener("invalid",()=>{n=!0},{signal:s.signal})},{signal:r}),o.addEventListener("after",()=>{a=!1,s?.abort(),n||i()},{signal:r}),e.addEventListener("submit",()=>{a||i()},{signal:r})}(this,t,()=>{this[$e](null)},this[we].signal))}}return o}const ze=new WeakMap;class Ae{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;const{validity:e,validationMessage:i}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:i,validity:{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing}},this.currentValidity}}class Ce extends Ae{computeValidity({state:t,renderedControl:e}){let i=e;Me(t)&&!i?(i=this.inputControl||document.createElement("input"),this.inputControl=i):i||(i=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=i);const r=Me(t)?i:null;if(r&&(r.type=t.type),i.value!==t.value&&(i.value=t.value),i.required=t.required,r){const e=t;e.pattern?r.pattern=e.pattern:r.removeAttribute("pattern"),e.min?r.min=e.min:r.removeAttribute("min"),e.max?r.max=e.max:r.removeAttribute("max"),e.step?r.step=e.step:r.removeAttribute("step")}return(t.minLength??-1)>-1?i.setAttribute("minlength",String(t.minLength)):i.removeAttribute("minlength"),(t.maxLength??-1)>-1?i.setAttribute("maxlength",String(t.maxLength)):i.removeAttribute("maxlength"),{validity:i.validity,validationMessage:i.validationMessage}}equals({state:t},{state:e}){const i=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return Me(t)&&Me(e)?i&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step:i}copy({state:t}){return{state:Me(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:e,pattern:i,min:r,max:o,step:s}=t;return{...this.copySharedState(t),type:e,pattern:i,min:r,max:o,step:s}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:i,maxLength:r}){return{value:t,required:e,minLength:i,maxLength:r}}}function Me(t){return"textarea"!==t.type}const Ee=re(Se(ve(ye(de(lt)))));class Te extends Ee{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,i){this.getInputOrTextarea().setSelectionRange(t,e,i)}showPicker(){const t=this.getInput();t&&t.showPicker()}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return H`
      <span class="text-field ${At(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return jt`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return H`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return H`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||q,i=this.autocomplete,r=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if("textarea"===this.type)return H`
        <textarea
          class="input"
          style=${Kt(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||q}
          name=${this.name||q}
          ?disabled=${this.disabled}
          maxlength=${r?this.maxLength:q}
          minlength=${o?this.minLength:q}
          placeholder=${this.placeholder||q}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${Yt(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const s=this.renderPrefix(),n=this.renderSuffix(),a=this.inputMode;return H`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${Kt(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||q}
          name=${this.name||q}
          ?disabled=${this.disabled}
          inputmode=${a||q}
          max=${this.max||q}
          maxlength=${r?this.maxLength:q}
          min=${this.min||q}
          minlength=${o?this.minLength:q}
          pattern=${this.pattern||q}
          placeholder=${this.placeholder||q}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||q}
          type=${this.type}
          .value=${Yt(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${n}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){if(!t)return q;return H`<span class="${At({suffix:e,prefix:!e})}">${t}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){ae(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[ge](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[he](){return new Ce(()=>({state:this,renderedControl:this.inputOrTextarea}))}[ue](){return this.inputOrTextarea}[xe](t){t?.preventDefault();const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}}Te.shadowRootOptions={...lt.shadowRootOptions,delegatesFocus:!0},t([pt({type:Boolean,reflect:!0})],Te.prototype,"error",void 0),t([pt({attribute:"error-text"})],Te.prototype,"errorText",void 0),t([pt()],Te.prototype,"label",void 0),t([pt({type:Boolean,attribute:"no-asterisk"})],Te.prototype,"noAsterisk",void 0),t([pt({type:Boolean,reflect:!0})],Te.prototype,"required",void 0),t([pt()],Te.prototype,"value",void 0),t([pt({attribute:"prefix-text"})],Te.prototype,"prefixText",void 0),t([pt({attribute:"suffix-text"})],Te.prototype,"suffixText",void 0),t([pt({type:Boolean,attribute:"has-leading-icon"})],Te.prototype,"hasLeadingIcon",void 0),t([pt({type:Boolean,attribute:"has-trailing-icon"})],Te.prototype,"hasTrailingIcon",void 0),t([pt({attribute:"supporting-text"})],Te.prototype,"supportingText",void 0),t([pt({attribute:"text-direction"})],Te.prototype,"textDirection",void 0),t([pt({type:Number})],Te.prototype,"rows",void 0),t([pt({type:Number})],Te.prototype,"cols",void 0),t([pt({reflect:!0})],Te.prototype,"inputMode",void 0),t([pt()],Te.prototype,"max",void 0),t([pt({type:Number})],Te.prototype,"maxLength",void 0),t([pt()],Te.prototype,"min",void 0),t([pt({type:Number})],Te.prototype,"minLength",void 0),t([pt({type:Boolean,attribute:"no-spinner"})],Te.prototype,"noSpinner",void 0),t([pt()],Te.prototype,"pattern",void 0),t([pt({reflect:!0,converter:ne})],Te.prototype,"placeholder",void 0),t([pt({type:Boolean,reflect:!0})],Te.prototype,"readOnly",void 0),t([pt({type:Boolean,reflect:!0})],Te.prototype,"multiple",void 0),t([pt()],Te.prototype,"step",void 0),t([pt({reflect:!0})],Te.prototype,"type",void 0),t([pt({reflect:!0})],Te.prototype,"autocomplete",void 0),t([mt()],Te.prototype,"dirty",void 0),t([mt()],Te.prototype,"focused",void 0),t([mt()],Te.prototype,"nativeError",void 0),t([mt()],Te.prototype,"nativeErrorText",void 0),t([vt(".input")],Te.prototype,"inputOrTextarea",void 0),t([vt(".field")],Te.prototype,"field",void 0),t([yt({slot:"leading-icon"})],Te.prototype,"leadingIcons",void 0),t([yt({slot:"trailing-icon"})],Te.prototype,"trailingIcons",void 0);class Pe extends Te{constructor(){super(...arguments),this.fieldTag=Rt`md-filled-field`}}const Ie=n`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;let Oe=class extends Pe{constructor(){super(...arguments),this.fieldTag=Rt`md-filled-field`}};Oe.styles=[Ie,Dt],Oe=t([dt("md-filled-text-field")],Oe);class Be extends lt{render(){return H`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}const Re=n`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;let Ne=class extends Be{};Ne.styles=[Re],Ne=t([dt("md-icon")],Ne);const je=Symbol("attachableController");let De;De=new MutationObserver(t=>{for(const e of t)e.target[je]?.hostConnected()});class Le{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){null===t?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[je]=this,De?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}const Fe=["focusin","focusout","pointerdown"];class Ue extends lt{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Le(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[He]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}t[He]=!0}}onControlChange(t,e){for(const i of Fe)t?.removeEventListener(i,this),e?.addEventListener(i,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}t([pt({type:Boolean,reflect:!0})],Ue.prototype,"visible",void 0),t([pt({type:Boolean,reflect:!0})],Ue.prototype,"inward",void 0);const He=Symbol("handledByFocusRing"),Ge=n`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;let qe=class extends Ue{};qe.styles=[Ge],qe=t([dt("md-focus-ring")],qe);var Ve;!function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Ve||(Ve={}));const We=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Ye=window.matchMedia("(forced-colors: active)");class Xe extends lt{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Ve.INACTIVE,this.attachableController=new Le(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return H`<div class="surface ${At(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==Ve.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state!==Ve.HOLDING)return this.state===Ve.TOUCH_DELAY?(this.state=Ve.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Ve.WAITING_FOR_CLICK}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t))return this.state=Ve.WAITING_FOR_CLICK,void this.startPressAnimation(t);this.state=Ve.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,150)}),this.state===Ve.TOUCH_DELAY&&(this.state=Ve.HOLDING,this.startPressAnimation(t))}}handleClick(){this.disabled||(this.state!==Ve.WAITING_FOR_CLICK?this.state===Ve.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),i=Math.max(t,e),r=Math.max(.35*i,75),o=this.currentCSSZoom??1,s=Math.floor(.2*i/o),n=Math.sqrt(e**2+t**2)+10;this.initialSize=s;const a=(n+r)/s;this.rippleScale=""+a/o,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:i}=window,{left:r,top:o}=this.getBoundingClientRect(),s=e+r,n=i+o,{pageX:a,pageY:l}=t,c=this.currentCSSZoom??1;return{x:(a-s)/c,y:(l-n)/c}}getTranslationCoordinates(t){const{height:e,width:i}=this.getBoundingClientRect(),r=this.currentCSSZoom??1,o={x:(i/r-this.initialSize)/2,y:(e/r-this.initialSize)/2};let s;return s=t instanceof PointerEvent?this.getNormalizedPointerEventCoords(t):{x:i/r/2,y:e/r/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:o}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:i}=this.getTranslationCoordinates(t),r=`${e.x}px, ${e.y}px`,o=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:Ct.STANDARD,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Ve.INACTIVE;const t=this.growAnimation;let e=1/0;"number"==typeof t?.currentTime?e=t.currentTime:t?.currentTime&&(e=t.currentTime.to("ms").value),e>=225?this.pressed=!1:(await new Promise(t=>{setTimeout(t,225-e)}),this.growAnimation===t&&(this.pressed=!1))}shouldReactToEvent(t){if(this.disabled||!t.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if("pointerenter"===t.type||"pointerleave"===t.type)return!this.isTouch(t);const e=1===t.buttons;return this.isTouch(t)||e}isTouch({pointerType:t}){return"touch"===t}async handleEvent(t){if(!Ye?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t)}}onControlChange(t,e){for(const i of We)t?.removeEventListener(i,this),e?.addEventListener(i,this)}}t([pt({type:Boolean,reflect:!0})],Xe.prototype,"disabled",void 0),t([mt()],Xe.prototype,"hovered",void 0),t([mt()],Xe.prototype,"pressed",void 0),t([vt(".surface")],Xe.prototype,"mdRoot",void 0);const Je=n`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;let Ke=class extends Xe{};function Qe(t){t.addInitializer(t=>{const e=t;e.addEventListener("click",async t=>{const{type:i,[le]:r}=e,{form:o}=r;o&&"button"!==i&&(await new Promise(t=>{setTimeout(t)}),t.defaultPrevented||("reset"!==i?(o.addEventListener("submit",t=>{Object.defineProperty(t,"submitter",{configurable:!0,enumerable:!0,get:()=>e})},{capture:!0,once:!0}),r.setFormValue(e.value),o.requestSubmit()):o.reset()))})})}function Ze(t,e=!0){return e&&"rtl"===getComputedStyle(t).getPropertyValue("direction").trim()}Ke.styles=[Je],Ke=t([dt("md-ripple")],Ke);const ti=re(de(lt));class ei extends ti{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[le].form}get labels(){return this[le].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Ze(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){const t=this.href?Rt`div`:Rt`button`,{ariaLabel:e,ariaHasPopup:i,ariaExpanded:r}=this,o=e&&this.ariaLabelSelected,s=this.toggle?this.selected:q;let n=q;return this.href||(n=o&&this.selected?this.ariaLabelSelected:e),jt`<${t}
        class="icon-button ${At(this.getRenderClasses())}"
        id="button"
        aria-label="${n||q}"
        aria-haspopup="${!this.href&&i||q}"
        aria-expanded="${!this.href&&r||q}"
        aria-pressed="${s}"
        aria-disabled=${!this.href&&this.softDisabled||q}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?q:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():q}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return H`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||q}"
        target="${this.target||q}"
        aria-label="${t||q}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return H`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return H`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return H`<span class="touch"></span>`}renderFocusRing(){return H`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){const t=!this.href&&(this.disabled||this.softDisabled);return H`<md-ripple
      for=${this.href?"link":q}
      ?disabled="${t}"></md-ripple>`}connectedCallback(){this.flipIcon=Ze(this,this.flipIconInRtl),super.connectedCallback()}handleClick(t){if(!this.href&&this.softDisabled)return t.stopImmediatePropagation(),void t.preventDefault()}async handleClickOnChild(t){await 0,!this.toggle||this.disabled||this.softDisabled||t.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Qe(ei),ei.formAssociated=!0,ei.shadowRootOptions={mode:"open",delegatesFocus:!0},t([pt({type:Boolean,reflect:!0})],ei.prototype,"disabled",void 0),t([pt({type:Boolean,attribute:"soft-disabled",reflect:!0})],ei.prototype,"softDisabled",void 0),t([pt({type:Boolean,attribute:"flip-icon-in-rtl"})],ei.prototype,"flipIconInRtl",void 0),t([pt()],ei.prototype,"href",void 0),t([pt()],ei.prototype,"download",void 0),t([pt()],ei.prototype,"target",void 0),t([pt({attribute:"aria-label-selected"})],ei.prototype,"ariaLabelSelected",void 0),t([pt({type:Boolean})],ei.prototype,"toggle",void 0),t([pt({type:Boolean,reflect:!0})],ei.prototype,"selected",void 0),t([pt()],ei.prototype,"type",void 0),t([pt({reflect:!0})],ei.prototype,"value",void 0),t([mt()],ei.prototype,"flipIcon",void 0);const ii=n`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`,ri=n`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}
`;let oi=class extends ei{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};oi.styles=[ii,ri],oi=t([dt("md-icon-button")],oi);let si=class extends lt{#n="";get value(){return this.#n}set value(t){this.#n=t}#a="Search";get placeholder(){return this.#a}set placeholder(t){this.#a=t}#l="off";get autocomplete(){return this.#l}set autocomplete(t){this.#l=t}#c=!1;get spellcheck(){return this.#c}set spellcheck(t){this.#c=t}#d=!1;get disabled(){return this.#d}set disabled(t){this.#d=t}#h;get textField(){return this.#h}set textField(t){this.#h=t}static{this.styles=n`
    :host {
      display: block;
      max-width: 640px;
      width: 100%;

      --md-filled-text-field-container-color: var(--md-sys-color-surface-container-high);
      --md-filled-text-field-container-shape: 24px;
      --md-filled-field-container-shape: 24px;

      --md-filled-text-field-active-indicator-height: 0;
      --md-filled-text-field-error-active-indicator-height: 0;
      --md-filled-text-field-hover-active-indicator-height: 0;
      --md-filled-text-field-focus-active-indicator-height: 0;
      --md-filled-text-field-disabled-active-indicator-height: 0;

      --md-filled-text-field-bottom-space: 12px;
      --md-filled-text-field-top-space: 12px;
    }

    md-filled-text-field {
      width: 100%;
    }

    [hidden] {
      display: none !important;
    }
  `}render(){return H`
      <md-filled-text-field
        type="search"
        .autocomplete=${this.autocomplete}
        .spellcheck=${this.spellcheck}
        .disabled=${this.disabled}
        .value=${this.value}
        placeholder=${this.placeholder}
        @input=${t=>{this.value=t.target.value,this.dispatchEvent(new Event("input",{composed:!0}))}}
        @blur=${t=>ae(this,t)}
        @focus=${t=>ae(this,t)}
        @change=${t=>ae(this,t)}
        @invalid=${t=>ae(this,t)}
      >
        <md-icon slot="leading-icon">search</md-icon>
        <md-icon-button
          slot="trailing-icon"
          ?hidden=${!this.value}
          @click=${()=>{this.value="",this.textField?.focus?.(),this.dispatchEvent(new Event("input",{composed:!0}))}}
        >
          <md-icon>close</md-icon>
        </md-icon-button>
      </md-filled-text-field>
    `}};t([pt({type:String})],si.prototype,"value",null),t([pt({type:String})],si.prototype,"placeholder",null),t([pt({type:String})],si.prototype,"autocomplete",null),t([pt({type:Boolean})],si.prototype,"spellcheck",null),t([pt({type:Boolean})],si.prototype,"disabled",null),t([vt("md-filled-text-field")],si.prototype,"textField",null),si=t([dt("titanium-filled-search-input")],si);class ni extends lt{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return H`<span class="shadow"></span>`}}const ai=n`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;let li=class extends ni{};li.styles=[ai],li=t([dt("md-elevation")],li);let ci=class extends lt{#u;get shadow(){return this.#u}set shadow(t){this.#u=t}static{this.styles=n`
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
  `}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.#p.bind(this),!1)}disconnectedCallback(){document.removeEventListener("scroll",this.#p,!1),super.disconnectedCallback()}#p(){this.#m()}#m(){const t=window.innerHeight||(document.documentElement||document.body).clientHeight,e=this.#f(),i=window.scrollY||(document.documentElement||document.body.parentNode||document.body).scrollTop,r=e-t,o=Math.floor(i/r*100);this.shadow=0!==(o||0)}#f(){const t=document;return Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight)}render(){return H` <md-elevation></md-elevation><slot></slot>`}};t([pt({type:Boolean,reflect:!0})],ci.prototype,"shadow",null),ci=t([dt("titanium-toolbar")],ci);const di=n`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;function hi(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function ui(t){return t.currentTarget===t.target&&(t.composedPath()[0]===t.target&&(!t.target.disabled&&!function(t){const e=pi;e&&(t.preventDefault(),t.stopImmediatePropagation());return async function(){pi=!0,await null,pi=!1}(),e}(t)))}let pi=!1;const mi=re(de(lt));class fi extends mi{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[le].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const t=this.disabled||this.softDisabled,e=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return H`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${i}
        ?disabled="${t}"></md-ripple>
      ${e}
    `}renderButton(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return H`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||q}
      aria-label="${t||q}"
      aria-haspopup="${e||q}"
      aria-expanded="${i||q}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return H`<a
      id="link"
      class="button"
      aria-label="${t||q}"
      aria-haspopup="${e||q}"
      aria-expanded="${i||q}"
      aria-disabled=${this.disabled||this.softDisabled||q}
      tabindex="${this.disabled&&!this.softDisabled?-1:q}"
      href=${this.href}
      download=${this.download||q}
      target=${this.target||q}
      >${this.renderContent()}
    </a>`}renderContent(){const t=H`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return H`
      <span class="touch"></span>
      ${this.trailingIcon?q:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:q}
    `}handleClick(t){if(this.softDisabled||this.disabled&&this.href)return t.stopImmediatePropagation(),void t.preventDefault();ui(t)&&this.buttonElement&&(this.focus(),hi(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Qe(fi),fi.formAssociated=!0,fi.shadowRootOptions={mode:"open",delegatesFocus:!0},t([pt({type:Boolean,reflect:!0})],fi.prototype,"disabled",void 0),t([pt({type:Boolean,attribute:"soft-disabled",reflect:!0})],fi.prototype,"softDisabled",void 0),t([pt()],fi.prototype,"href",void 0),t([pt()],fi.prototype,"download",void 0),t([pt()],fi.prototype,"target",void 0),t([pt({type:Boolean,attribute:"trailing-icon",reflect:!0})],fi.prototype,"trailingIcon",void 0),t([pt({type:Boolean,attribute:"has-icon",reflect:!0})],fi.prototype,"hasIcon",void 0),t([pt()],fi.prototype,"type",void 0),t([pt({reflect:!0})],fi.prototype,"value",void 0),t([vt(".button")],fi.prototype,"buttonElement",void 0),t([yt({slot:"icon",flatten:!0})],fi.prototype,"assignedIcons",void 0);class vi extends fi{}const gi=n`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;let bi=class extends vi{};bi.styles=[di,gi],bi=t([dt("md-text-button")],bi);let yi=class extends lt{#v;#g;get open(){return this.#g}set open(t){this.#g=t}#b;get noAction(){return this.#b}set noAction(t){this.#b=t}#y;get actionText(){return this.#y}set actionText(t){this.#y=t}#x;get message(){return this.#x}set message(t){this.#x=t}show(t,e){if(this.showPopover?this.showPopover():this.open=!0,this.message=e?.overrideTemplate?e?.overrideTemplate:t,this.noAction=e?.noAction??!1,this.actionText=e?.actionText??"Dismiss",e?.autoHide){const t="number"==typeof e?.autoHide?e?.autoHide:5e3;this.#w=window.setTimeout(()=>this.close("auto-close"),t)}return new Promise(t=>{this.#v=t})}#w=0;close(t=""){clearTimeout(this.#w),this.hidePopover?this.hidePopover():this.open=!1,this.#v(t)}static{this.styles=[n`
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
    `]}render(){return H`
      <div main>${this.message}</div>
      <md-text-button ?hidden=${this.noAction} @click=${()=>this.close("dismiss")}>${this.actionText} </md-text-button>
    `}};t([pt({type:Boolean,reflect:!0})],yi.prototype,"open",null),t([pt({type:Boolean,reflect:!0})],yi.prototype,"noAction",null),t([pt({type:String})],yi.prototype,"actionText",null),t([pt({type:String})],yi.prototype,"message",null),yi=t([dt("titanium-simple-snackbar")],yi);let xi=class extends lt{#v;#g;get open(){return this.#g}set open(t){this.#g=t}#_=[];get httpErrors(){return this.#_}set httpErrors(t){this.#_=t}show(t,e){return this.showPopover?this.showPopover():this.open=!0,this.httpErrors.push(t),this.#k(e),this.#$(t),new Promise(t=>{this.#v=t})}#$(t){const e=t.message,i=t.detail;console.warn("APP-HTTP-ERROR:",e||"",i?`\n\n${i}`:"")}#k(t){if(t?.autoHide){clearTimeout(this.#w);const e="number"==typeof t?.autoHide?t?.autoHide:5e3;this.#w=window.setTimeout(()=>this.close("auto-close"),e)}}addError(t,e){this.#k(e),this.#$(t),this.httpErrors=[...this.httpErrors,t]}#w=0;close(t=""){this.hidePopover?this.hidePopover():this.open=!1,this.#v(t)}static{this.styles=[...yi.styles,n`
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
    `]}#S(t){const e=t.split("\n"),i=e.length;return e.map((t,e)=>e===i-1?t:H`${t}<br />`)}render(){return H`
      <div main>
        <http-error>
          <span action> ${this.httpErrors.length>1?H`${this.httpErrors.length} Network errors`:this.httpErrors?.[0]?.action} </span>
          <span status> ${this.httpErrors.length>1?H`${this.httpErrors?.[0]?.action}`:q} ${this.httpErrors?.[0]?.statusCode} </span>
          <span error>${this.#S(this.httpErrors?.[0]?.message??"")}</span>
          ${this.httpErrors?.[0]?.detail?H` <code detail>${this.#S(this.httpErrors?.[0]?.detail)}</code>`:q}
        </http-error>
      </div>
      <div actions>
        <md-text-button
          @click=${()=>{1===this.httpErrors.length?this.close("dismiss"):this.httpErrors=[...this.httpErrors.filter(t=>t!==this.httpErrors?.[0])]}}
          >Dismiss
        </md-text-button>
        <md-text-button ?hidden=${1===this.httpErrors.length} @click=${()=>this.close("dismiss")}>Dismiss all (${this.httpErrors.length}) </md-text-button>
      </div>
    `}};t([pt({type:Boolean,reflect:!0})],xi.prototype,"open",null),t([pt({type:Array})],xi.prototype,"httpErrors",null),xi=t([dt("titanium-http-error-snackbar")],xi);class wi extends Event{static{this.eventName="show-snackbar"}constructor(t,e){super(wi.eventName,{bubbles:!0,composed:!0}),this.SnackbarMessage=t,this.SnackbarOptions=e}}let _i=class extends lt{constructor(){super(...arguments),this.SnackbarStack=[]}#z;get eventListenerTarget(){return this.#z}set eventListenerTarget(t){this.#z=t}connectedCallback(){super.connectedCallback(),(this.eventListenerTarget||this.getRootNode()).addEventListener(wi.eventName,t=>{t.stopImmediatePropagation(),this.open(t.SnackbarMessage,t.SnackbarOptions)})}static{this.styles=[n`
      :host {
        display: contents;
      }
    `]}async open(t,e){let i,r;if("string"==typeof t){const o=document.createElement("titanium-simple-snackbar");o.popover="manual",this.shadowRoot?.appendChild(o),e&&(e.close=t=>o.close(t)),this.SnackbarStack.unshift(o),i=o.show(t,e),r=o}else{let o=this.shadowRoot?.querySelector("titanium-http-error-snackbar");if(o)return void o.addError(t,e);o=document.createElement("titanium-http-error-snackbar"),this.shadowRoot?.appendChild(o),o.popover="manual",this.SnackbarStack.unshift(o),i=o.show(t,e),e&&(e.close=t=>o.close(t)),r=o}return this.reposition(),await i,this.SnackbarStack.splice(this.SnackbarStack.indexOf(r),1),r.remove(),this.reposition(),i}dismissAll(){this.SnackbarStack.forEach(t=>t.close())}async reposition(){let t=0;for(let e=0;e<this.SnackbarStack.length;e++){const i=this.SnackbarStack[e];await i.updateComplete,0===i.clientHeight&&i.close(),i.style.bottom=`${t}px`,t+=i.clientHeight+12}}};t([pt({type:Object})],_i.prototype,"eventListenerTarget",null),_i=t([dt("titanium-snackbar-stack")],_i);let ki=class extends lt{#x="We were unable to find the page you are looking for...";get message(){return this.#x}set message(t){this.#x=t}static{this.styles=n`
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
  `}render(){return H`
      <header>
        <h1>Oops!</h1>
        <h2>${this.message}</h2>
      </header>
      <img src="https://www.leavitt.com/images/alert.svg" />
    `}};var $i;t([pt({type:String})],ki.prototype,"message",null),ki=t([dt("titanium-error-page")],ki);let Si=class extends lt{static{$i=this}#A;get dialog(){return this.#A}set dialog(t){this.#A=t}#C=!1;get fixed(){return this.#C}set fixed(t){this.#C=t}#M=!1;get alwayShowContent(){return this.#M}set alwayShowContent(t){this.#M=t}#E="ltr";get direction(){return this.#E}set direction(t){this.#E=t}#T=!1;get hasHeader(){return this.#T}set hasHeader(t){this.#T=t}#P=!1;get hasFooter(){return this.#P}set hasFooter(t){this.#P=t}#I=!1;get keepOpenWhenGoingToFlyover(){return this.#I}set keepOpenWhenGoingToFlyover(t){this.#I=t}#O;get mode(){return this.#O}set mode(t){this.#O=t}#B=!1;get isOpen(){return this.#B}set isOpen(t){this.#B=t}async updated(t){t.has("mode")&&("inline"===this.mode&&(this.isOpen&&(this.alwayShowContent=!0),this.dialog?.close()),"flyover"===this.mode&&(this.isOpen&&(this.keepOpenWhenGoingToFlyover?(this.dialog?.showModal(),this.dialog?.removeAttribute("hide"),this.setBodyOverflow("hidden")):this.#R(!1)),this.alwayShowContent=!1))}#R(t){this.isOpen=t,this.dispatchEvent(new Event("open-change"))}async firstUpdated(){let t=0,e=0;this.addEventListener("touchstart",e=>{t=e.changedTouches[0].screenX}),this.addEventListener("touchend",i=>{e=i.changedTouches[0].screenX,t-e>50&&this.close()}),this.dialog?.addEventListener("click",t=>{t.target instanceof Element&&"DIALOG"===t.target?.nodeName&&this.close()}),this.dialog?.addEventListener("cancel",t=>{t.preventDefault(),this.close()}),window.addEventListener("popstate",()=>this.dialog?.close(),!1),await $i.animationsComplete(this.dialog),await $i.animationsComplete(this.dialog),this.dialog?.removeAttribute("loading")}static async animationsComplete(t){if(t)return await Promise.allSettled(t.getAnimations().map(t=>t.finished))}open(){"inline"===this.mode?(this.#R(!0),this.alwayShowContent=!0):(this.dialog?.showModal(),this.dialog?.removeAttribute("hide"),this.setBodyOverflow("hidden"))}async close(){"inline"===this.mode?(this.#R(!1),this.alwayShowContent=!1):(this.dialog?.setAttribute("hide",""),await $i.animationsComplete(this.dialog),this.dialog?.close(),this.dialog?.removeAttribute("hide"))}toggle(){this.isOpen?this.close():this.open()}closeQuick(){"inline"===this.mode?(this.#R(!1),this.alwayShowContent=!1):this.dialog?.close()}setBodyOverflow(t){const e=document.querySelector("html");e&&(e.style.overflow=t)}static{this.styles=n`
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
  `}render(){return H`<dialog
      loading
      @close=${t=>{this.setBodyOverflow(""),ae(this,t)}}
      @toggle=${t=>{if("flyover"===this.mode){const e=t.target?.hasAttribute("open");this.#R(e)}ae(this,t)}}
      part="dialog"
    >
      <header part="header"><slot name="header" @slotchange=${()=>this.hasHeader=this.headerElements.length>0}></slot></header>
      <main part="main"><slot></slot></main>
      <footer part="footer"><slot name="footer" @slotchange=${()=>this.hasFooter=this.footerElements.length>0}></slot></footer>
    </dialog>`}};t([vt("dialog")],Si.prototype,"dialog",null),t([pt({type:Boolean,reflect:!0})],Si.prototype,"fixed",null),t([pt({type:Boolean,reflect:!0,attribute:"always-show-content"})],Si.prototype,"alwayShowContent",null),t([pt({type:String,reflect:!0})],Si.prototype,"direction",null),t([pt({type:Boolean,reflect:!0,attribute:"has-header"})],Si.prototype,"hasHeader",null),t([pt({type:Boolean,reflect:!0,attribute:"has-footer"})],Si.prototype,"hasFooter",null),t([pt({type:Boolean,reflect:!0,attribute:"keep-open-when-going-to-flyover"})],Si.prototype,"keepOpenWhenGoingToFlyover",null),t([pt({type:String,reflect:!0,attribute:"mode"})],Si.prototype,"mode",null),t([pt({type:Boolean,reflect:!0,attribute:"open"})],Si.prototype,"isOpen",null),t([yt({slot:"header"})],Si.prototype,"headerElements",void 0),t([yt({slot:"footer"})],Si.prototype,"footerElements",void 0),Si=$i=t([dt("titanium-drawer")],Si);const zi=(t=>{const e=[new RegExp("^https://10[\\.]"),new RegExp("^http://10[\\.]"),new RegExp("^http://192.168[\\.]"),new RegExp("^http://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])"),new RegExp("^https://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])")];return!t||t.indexOf("dev")>-1||e.some(e=>null!==e.exec(t))})(window.location.origin),Ai=t=>class extends t{static get properties(){return{isLoading:{type:Boolean}}}#N=0;async loadWhile(t){this.isLoading=!0,this.#N++;try{await t}catch{}finally{this.#N--,0===this.#N&&(this.isLoading=!1)}}};function Ci(t){return new Promise(function(e){setTimeout(e,t)})}function Mi(t,e=15,i=10){return t.length>e+i?t.slice(0,e)+"..."+t.slice(t.length-i,t.length):t}let Ei=class extends lt{#j;get fileName(){return this.#j}set fileName(t){this.#j=t}#D="circle";get shape(){return this.#D}set shape(t){this.#D=t}#L;get showRing(){return this.#L}set showRing(t){this.#L=t}#F;get showTestUserIndicator(){return this.#F}set showTestUserIndicator(t){this.#F=t}#U;get profilePictureLinkPersonId(){return this.#U}set profilePictureLinkPersonId(t){this.#U=t}#H=120;get size(){return this.#H}set size(t){this.#H=t}#G=!1;get useIntrinsicImageSize(){return this.#G}set useIntrinsicImageSize(t){this.#G=t}#q=new Set([32,64,128,256,512,1024]);#V="https://cdn.leavitt.com/icon-user-profile-sq.svg";updated(t){(t.has("size")||t.has("useIntrinsicImageSize"))&&(this.style.width=this.useIntrinsicImageSize||!this.size?"":this.size+"px",this.style.height=this.useIntrinsicImageSize||!this.size?"":this.size+"px")}#W(t){const e=[...this.#q];for(let i=0;i<e.length;i++){const r=e[i];if(t<=r)return r}return 512}#Y(t,e){const i=this.#W(e);return t?`https://cdn.leavitt.com/${t}-${i}.webp`:this.#V}static{this.styles=n`
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
  `}renderProfilePicture(){return H`
      <img
        loading="lazy"
        draggable="false"
        alt="User profile picture"
        src=${this.#Y(this.fileName,this.size)}
        @error=${t=>{t.target.src!==this.#V&&(t.target.src=this.#V)}}
      />
      ${this.showTestUserIndicator?H`<md-icon part="test-user-indicator" style="--md-icon-size: calc(${this.size}px * 0.35);padding: calc(${this.size}px * 0.05)" title="Test user"
            >bug_report</md-icon
          >`:q}
    `}render(){return this.profilePictureLinkPersonId?H`<a target="_blank" href="https://${zi?"dev":""}workforce.leavitt.com/user/${this.profilePictureLinkPersonId}/view"
        >${this.renderProfilePicture()}</a
      > `:this.renderProfilePicture()}};function Ti(t,e=ji){const i=Oi(t,e);return i&&(i.tabIndex=0,i.focus()),i}function Pi(t,e=ji){const i=Bi(t,e);return i&&(i.tabIndex=0,i.focus()),i}function Ii(t,e=ji){for(let i=0;i<t.length;i++){const r=t[i];if(0===r.tabIndex&&e(r))return{item:r,index:i}}return null}function Oi(t,e=ji){for(const i of t)if(e(i))return i;return null}function Bi(t,e=ji){for(let i=t.length-1;i>=0;i--){const r=t[i];if(e(r))return r}return null}function Ri(t,e,i=ji,r=!0){if(e){const o=function(t,e,i=ji,r=!0){for(let o=1;o<t.length;o++){const s=(o+e)%t.length;if(s<e&&!r)return null;const n=t[s];if(i(n))return n}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return Ti(t,i)}function Ni(t,e,i=ji,r=!0){if(e){const o=function(t,e,i=ji,r=!0){for(let o=1;o<t.length;o++){const s=(e-o+t.length)%t.length;if(s>e&&!r)return null;const n=t[s];if(i(n))return n}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return Pi(t,i)}function ji(t){return!t.disabled}t([pt({reflect:!0,type:String})],Ei.prototype,"fileName",null),t([pt({reflect:!0,type:String})],Ei.prototype,"shape",null),t([pt({reflect:!0,type:Boolean,attribute:"show-ring"})],Ei.prototype,"showRing",null),t([pt({reflect:!0,type:Boolean,attribute:"show-test-user-indicator"})],Ei.prototype,"showTestUserIndicator",null),t([pt({reflect:!0,type:Number,attribute:"profile-picture-link-person-id"})],Ei.prototype,"profilePictureLinkPersonId",null),t([pt({type:Number})],Ei.prototype,"size",null),t([pt({type:Boolean})],Ei.prototype,"useIntrinsicImageSize",null),Ei=t([dt("profile-picture")],Ei);const Di={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class Li{constructor(t){this.handleKeydown=t=>{const e=t.key;if(t.defaultPrevented||!this.isNavigableKey(e))return;const i=this.items;if(!i.length)return;const r=Ii(i,this.isActivatable);t.preventDefault();const o=this.isRtl();let s=null;switch(e){case Di.ArrowDown:case o?Di.ArrowLeft:Di.ArrowRight:s=Ri(i,r,this.isActivatable,this.wrapNavigation());break;case Di.ArrowUp:case o?Di.ArrowRight:Di.ArrowLeft:s=Ni(i,r,this.isActivatable,this.wrapNavigation());break;case Di.Home:s=Ti(i,this.isActivatable);break;case Di.End:s=Pi(i,this.isActivatable)}s&&r&&r.item!==s&&(r.item.tabIndex=-1)},this.onDeactivateItems=()=>{const t=this.items;for(const e of t)this.deactivateItem(e)},this.onRequestActivation=t=>{this.onDeactivateItems();const e=t.target;this.activateItem(e),e.focus()},this.onSlotchange=()=>{const t=this.items;let e=!1;for(const i of t){!(!i.disabled&&i.tabIndex>-1)||e?i.tabIndex=-1:(e=!0,i.tabIndex=0)}if(e)return;const i=Oi(t,this.isActivatable);i&&(i.tabIndex=0)};const{isItem:e,getPossibleItems:i,isRtl:r,deactivateItem:o,activateItem:s,isNavigableKey:n,isActivatable:a,wrapNavigation:l}=t;this.isItem=e,this.getPossibleItems=i,this.isRtl=r,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=n,this.isActivatable=a,this.wrapNavigation=l??(()=>!0)}get items(){const t=this.getPossibleItems(),e=[];for(const i of t){if(this.isItem(i)){e.push(i);continue}const t=i.item;t&&this.isItem(t)&&e.push(t)}return e}activateNextItem(){const t=this.items,e=Ii(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Ri(t,e,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const t=this.items,e=Ii(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Ni(t,e,this.isActivatable,this.wrapNavigation())}}const Fi=function(t,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:t,reason:e,itemPath:[t]}})},Ui={SPACE:"Space",ENTER:"Enter"},Hi={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},Gi={ESCAPE:"Escape",SPACE:Ui.SPACE,ENTER:Ui.ENTER};function qi(t){return Object.values(Gi).some(e=>e===t)}function Vi(t){return Object.values(Ui).some(e=>e===t)}function Wi(t,e){const i=new Event("md-contains",{bubbles:!0,composed:!0});let r=[];const o=t=>{r=t.composedPath()};e.addEventListener("md-contains",o),t.dispatchEvent(i),e.removeEventListener("md-contains",o);return r.length>0}const Yi={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"},Xi="end-start",Ji="start-start";class Ki{constructor(t,e){this.host=t,this.getProperties=e,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:t,anchorEl:e,anchorCorner:i,surfaceCorner:r,positioning:o,xOffset:s,yOffset:n,disableBlockFlip:a,disableInlineFlip:l,repositionStrategy:c}=this.getProperties(),d=i.toLowerCase().trim(),h=r.toLowerCase().trim();if(!t||!e)return;const u=window.innerWidth,p=window.innerHeight,m=document.createElement("div");m.style.opacity="0",m.style.position="fixed",m.style.display="block",m.style.inset="0",document.body.appendChild(m);const f=m.getBoundingClientRect();m.remove();const v=window.innerHeight-f.bottom,g=window.innerWidth-f.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,t.popover&&t.isConnected&&t.showPopover();const b=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),y=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),[x,w]=h.split("-"),[_,k]=d.split("-"),$="ltr"===getComputedStyle(t).direction;let{blockInset:S,blockOutOfBoundsCorrection:z,surfaceBlockProperty:A}=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:_,surfaceBlock:x,yOffset:n,positioning:o,windowInnerHeight:p,blockScrollbarHeight:v});if(z&&!a){const t="start"===x?"end":"start",e="start"===_?"end":"start",i=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:e,surfaceBlock:t,yOffset:n,positioning:o,windowInnerHeight:p,blockScrollbarHeight:v});z>i.blockOutOfBoundsCorrection&&(S=i.blockInset,z=i.blockOutOfBoundsCorrection,A=i.surfaceBlockProperty)}let{inlineInset:C,inlineOutOfBoundsCorrection:M,surfaceInlineProperty:E}=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:k,surfaceInline:w,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:u,inlineScrollbarWidth:g});if(M&&!l){const t="start"===w?"end":"start",e="start"===k?"end":"start",i=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:e,surfaceInline:t,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:u,inlineScrollbarWidth:g});Math.abs(M)>Math.abs(i.inlineOutOfBoundsCorrection)&&(C=i.inlineInset,M=i.inlineOutOfBoundsCorrection,E=i.surfaceInlineProperty)}"move"===c&&(S-=z,C-=M),this.surfaceStylesInternal={display:"block",opacity:"1",[A]:`${S}px`,[E]:`${C}px`},"resize"===c&&(z&&(this.surfaceStylesInternal.height=b.height-z+"px"),M&&(this.surfaceStylesInternal.width=b.width-M+"px")),this.host.requestUpdate()}calculateBlock(t){const{surfaceRect:e,anchorRect:i,anchorBlock:r,surfaceBlock:o,yOffset:s,positioning:n,windowInnerHeight:a,blockScrollbarHeight:l}=t,c="fixed"===n||"document"===n?1:0,d="document"===n?1:0,h="start"===o?1:0,u="end"===o?1:0,p=(r!==o?1:0)*i.height+s,m=h*i.top+u*(a-i.bottom-l);return{blockInset:c*m+d*(h*window.scrollY-u*window.scrollY)+p,blockOutOfBoundsCorrection:Math.abs(Math.min(0,a-m-p-e.height)),surfaceBlockProperty:"start"===o?"inset-block-start":"inset-block-end"}}calculateInline(t){const{isLTR:e,surfaceInline:i,anchorInline:r,anchorRect:o,surfaceRect:s,xOffset:n,positioning:a,windowInnerWidth:l,inlineScrollbarWidth:c}=t,d="fixed"===a||"document"===a?1:0,h="document"===a?1:0,u=e?1:0,p=e?0:1,m="start"===i?1:0,f="end"===i?1:0,v=(r!==i?1:0)*o.width+n,g=u*(m*o.left+f*(l-o.right-c))+p*(m*(l-o.right-c)+f*o.left);let b="start"===i?"inset-inline-start":"inset-inline-end";return"document"!==a&&"fixed"!==a||(b="start"===i&&e||"end"===i&&!e?"left":"right"),{inlineInset:d*g+v+h*(u*(m*window.scrollX-f*window.scrollX)+p*(f*window.scrollX-m*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-g-v-s.width)),surfaceInlineProperty:b}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const t=this.getProperties();let e=!1;for(const[i,r]of Object.entries(t))if(e=e||r!==this.lastValues[i],e)break;const i=this.lastValues.isOpen!==t.isOpen,r=!!t.anchorEl,o=!!t.surfaceEl;e&&r&&o&&(this.lastValues.isOpen=t.isOpen,t.isOpen?(this.lastValues=t,await this.position(),t.onOpen()):i&&(await t.beforeClose(),this.close(),t.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const t=this.getProperties().surfaceEl;t?.popover&&t?.isConnected&&t.hidePopover()}}const Qi={INDEX:0,ITEM:1,TEXT:2};class Zi{constructor(t){this.getProperties=t,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=t=>{this.isTypingAhead?this.typeahead(t):this.beginTypeahead(t)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(t){this.active&&("Space"===t.code||"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((t,e)=>[e,t,t.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(t=>0===t[Qi.ITEM].tabIndex)??null,this.lastActiveRecord&&(this.lastActiveRecord[Qi.ITEM].tabIndex=-1),this.typeahead(t)))}typeahead(t){if(t.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[Qi.ITEM].tabIndex=-1));"Space"===t.code&&t.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=t.key.toLowerCase();const e=this.lastActiveRecord?this.lastActiveRecord[Qi.INDEX]:-1,i=this.typeaheadRecords.length,r=t=>(t[Qi.INDEX]+i-e)%i,o=this.typeaheadRecords.filter(t=>!t[Qi.ITEM].disabled&&t[Qi.TEXT].startsWith(this.typaheadBuffer)).sort((t,e)=>r(t)-r(e));if(0===o.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[Qi.ITEM].tabIndex=-1),void this.endTypeahead();const s=1===this.typaheadBuffer.length;let n;n=this.lastActiveRecord===o[0]&&s?o[1]??o[0]:o[0],this.lastActiveRecord&&(this.lastActiveRecord[Qi.ITEM].tabIndex=-1),this.lastActiveRecord=n,n[Qi.ITEM].tabIndex=0,n[Qi.ITEM].focus()}}const tr=200,er=new Set([Di.ArrowDown,Di.ArrowUp,Di.Home,Di.End]),ir=new Set([Di.ArrowLeft,Di.ArrowRight,...er]);class rr extends lt{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(t){this.currentAnchorElement=t,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=200,this.anchorCorner=Xi,this.menuCorner=Ji,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=Yi.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=function(){let t=null;return{start:()=>(t?.abort(),t=new AbortController,t.signal),finish(){t=null}}}(),this.listController=new Li({isItem:t=>t.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.selected=!1,t.tabIndex=-1},activateItem:t=>{t.selected=!0,t.tabIndex=0},isNavigableKey:t=>{if(!this.isSubmenu)return ir.has(t);return t===("rtl"===getComputedStyle(this).direction?Di.ArrowLeft:Di.ArrowRight)||er.has(t)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new Zi(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new Ki(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"})),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async t=>{const e=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(e))return;if(t.relatedTarget){if(Wi(t.relatedTarget,this)||0!==this.pointerPath.length&&Wi(t.relatedTarget,e))return}else if(this.pointerPath.includes(this))return;const i=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=i},this.onOpened=async()=>{this.lastFocusedElement=function(t=document){let e=t.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}();const t=this.items,e=Ii(t);e&&this.defaultFocus!==Yi.NONE&&(e.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case Yi.FIRST_ITEM:const e=Oi(t);e&&(e.tabIndex=0,e.focus(),await e.updateComplete);break;case Yi.LAST_ITEM:const i=Bi(t);i&&(i.tabIndex=0,i.focus(),await i.updateComplete);break;case Yi.LIST_ROOT:this.focus()}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=t=>{this.pointerPath=t.composedPath()},this.onDocumentClick=t=>{if(!this.open)return;const e=t.composedPath();this.stayOpenOnOutsideClick||e.includes(this)||e.includes(this.anchorElement)||(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(t){t.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(t){t.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return H`
      <div
        class="menu ${At(this.getSurfaceClasses())}"
        style=${Kt(this.menuPositionController.surfaceStyles)}
        popover=${"popover"===this.positioning?"manual":q}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return H`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return H`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(t){t.target===this&&!t.defaultPrevented&&qi(t.code)&&(t.preventDefault(),this.close()),this.typeaheadController.onKeydown(t)}async animateOpen(){const t=this.surfaceEl,e=this.slotEl;if(!t||!e)return!0;const i=this.openDirection;this.dispatchEvent(new Event("opening")),t.classList.toggle("animating",!0);const r=this.openCloseAnimationSignal.start(),o=t.offsetHeight,s="UP"===i,n=this.items,a=250/n.length,l=t.animate([{height:"0px"},{height:`${o}px`}],{duration:500,easing:Ct.EMPHASIZED}),c=e.animate([{transform:s?`translateY(-${o}px)`:""},{transform:""}],{duration:500,easing:Ct.EMPHASIZED}),d=t.animate([{opacity:0},{opacity:1}],50),h=[];for(let t=0;t<n.length;t++){const e=n[s?n.length-1-t:t],i=e.animate([{opacity:0},{opacity:1}],{duration:250,delay:a*t});e.classList.toggle("md-menu-hidden",!0),i.addEventListener("finish",()=>{e.classList.toggle("md-menu-hidden",!1)}),h.push([e,i])}let u=t=>{};const p=new Promise(t=>{u=t});return r.addEventListener("abort",()=>{l.cancel(),c.cancel(),d.cancel(),h.forEach(([t,e])=>{t.classList.toggle("md-menu-hidden",!1),e.cancel()}),u(!0)}),l.addEventListener("finish",()=>{t.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),u(!1)}),await p}animateClose(){let t;const e=new Promise(e=>{t=e}),i=this.surfaceEl,r=this.slotEl;if(!i||!r)return t(!1),e;const o="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),i.classList.toggle("animating",!0);const s=this.openCloseAnimationSignal.start(),n=i.offsetHeight,a=this.items,l=150,c=50/a.length,d=i.animate([{height:`${n}px`},{height:.35*n+"px"}],{duration:l,easing:Ct.EMPHASIZED_ACCELERATE}),h=r.animate([{transform:""},{transform:o?`translateY(-${.65*n}px)`:""}],{duration:l,easing:Ct.EMPHASIZED_ACCELERATE}),u=i.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),p=[];for(let t=0;t<a.length;t++){const e=a[o?t:a.length-1-t],i=e.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+c*t});i.addEventListener("finish",()=>{e.classList.toggle("md-menu-hidden",!0)}),p.push([e,i])}return s.addEventListener("abort",()=>{d.cancel(),h.cancel(),u.cancel(),p.forEach(([t,e])=>{e.cancel(),t.classList.toggle("md-menu-hidden",!1)}),t(!1)}),d.addEventListener("finish",()=>{i.classList.toggle("animating",!1),p.forEach(([t])=>{t.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),t(!0)}),e}handleKeydown(t){this.pointerPath=[],this.listController.handleKeydown(t)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(t){t.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(t){t.stopPropagation(),this.listController.onRequestActivation(t)}handleDeactivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach(t=>{t.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}t([vt(".menu")],rr.prototype,"surfaceEl",void 0),t([vt("slot")],rr.prototype,"slotEl",void 0),t([pt()],rr.prototype,"anchor",void 0),t([pt()],rr.prototype,"positioning",void 0),t([pt({type:Boolean})],rr.prototype,"quick",void 0),t([pt({type:Boolean,attribute:"has-overflow"})],rr.prototype,"hasOverflow",void 0),t([pt({type:Boolean,reflect:!0})],rr.prototype,"open",void 0),t([pt({type:Number,attribute:"x-offset"})],rr.prototype,"xOffset",void 0),t([pt({type:Number,attribute:"y-offset"})],rr.prototype,"yOffset",void 0),t([pt({type:Boolean,attribute:"no-horizontal-flip"})],rr.prototype,"noHorizontalFlip",void 0),t([pt({type:Boolean,attribute:"no-vertical-flip"})],rr.prototype,"noVerticalFlip",void 0),t([pt({type:Number,attribute:"typeahead-delay"})],rr.prototype,"typeaheadDelay",void 0),t([pt({attribute:"anchor-corner"})],rr.prototype,"anchorCorner",void 0),t([pt({attribute:"menu-corner"})],rr.prototype,"menuCorner",void 0),t([pt({type:Boolean,attribute:"stay-open-on-outside-click"})],rr.prototype,"stayOpenOnOutsideClick",void 0),t([pt({type:Boolean,attribute:"stay-open-on-focusout"})],rr.prototype,"stayOpenOnFocusout",void 0),t([pt({type:Boolean,attribute:"skip-restore-focus"})],rr.prototype,"skipRestoreFocus",void 0),t([pt({attribute:"default-focus"})],rr.prototype,"defaultFocus",void 0),t([pt({type:Boolean,attribute:"no-navigation-wrap"})],rr.prototype,"noNavigationWrap",void 0),t([yt({flatten:!0})],rr.prototype,"slotItems",void 0),t([mt()],rr.prototype,"typeaheadActive",void 0);const or=n`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;let sr=class extends rr{};sr.styles=[or],sr=t([dt("md-menu")],sr);class nr extends fi{renderElevationOrOutline(){return H`<div class="outline"></div>`}}const ar=n`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host(:is([disabled],[soft-disabled])) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])) .background{border-color:GrayText}:host(:is([disabled],[soft-disabled])) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;let lr=class extends nr{};lr.styles=[di,ar],lr=t([dt("md-outlined-button")],lr);class cr extends Error{}function dr(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(t){return decodeURIComponent(atob(t).replace(/(.)/g,(t,e)=>{let i=e.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}(e)}catch(t){return atob(e)}}function hr(t,e){if("string"!=typeof t)throw new cr("Invalid token specified: must be a string");e||(e={});const i=!0===e.header?0:1,r=t.split(".")[i];if("string"!=typeof r)throw new cr(`Invalid token specified: missing part #${i+1}`);let o;try{o=dr(r)}catch(t){throw new cr(`Invalid token specified: invalid base64 for part #${i+1} (${t.message})`)}try{return JSON.parse(o)}catch(t){throw new cr(`Invalid token specified: invalid json for part #${i+1} (${t.message})`)}}cr.prototype.name="InvalidTokenError";class ur extends Event{static{this.eventName="um-updated"}constructor(){super(ur.eventName,{bubbles:!1,composed:!0})}}let pr=null;const mr=()=>pr||(console.warn("GetUserManagerInstance requested before an instance was created. Did you forget to add the <user-manager> element to your project?"),null);let fr=class extends lt{#X=[];get roles(){return this.#X}set roles(t){this.#X=t}#J;get fullname(){return this.#J}set fullname(t){this.#J=t}#K;get username(){return this.#K}set username(t){this.#K=t}#Q;get firstName(){return this.#Q}set firstName(t){this.#Q=t}#Z;get lastName(){return this.#Z}set lastName(t){this.#Z=t}#tt;get company(){return this.#tt}set company(t){this.#tt=t}#et;get companyId(){return this.#et}set companyId(t){this.#et=t}#it;get profilePictureFileName(){return this.#it}set profilePictureFileName(t){this.#it=t}#rt;get email(){return this.#rt}set email(t){this.#rt=t}#ot=0;get personId(){return this.#ot}set personId(t){this.#ot=t}#st=0;get refreshTokenId(){return this.#st}set refreshTokenId(t){this.#st=t}#nt="https://signin.leavitt.com/";get redirectUrl(){return this.#nt}set redirectUrl(t){this.#nt=t}#at="https://devsignin.leavitt.com/";get redirectDevUrl(){return this.#at}set redirectDevUrl(t){this.#at=t}#lt=zi?"https://devoauth2.leavitt.com/token":"https://oauth2.leavitt.com/token";get tokenUri(){return this.#lt}set tokenUri(t){this.#lt=t}#ct="https://oauth2.leavitt.com/";get issuerIdentifier(){return this.#ct}set issuerIdentifier(t){this.#ct=t}#dt;get disableAutoload(){return this.#dt}set disableAutoload(t){this.#dt=t}#ht;get isActiveEmployee(){return this.#ht}set isActiveEmployee(t){this.#ht=t}#ut;get isPendingEmployee(){return this.#ut}set isPendingEmployee(t){this.#ut=t}#pt;get isActiveClient(){return this.#pt}set isActiveClient(t){this.#pt=t}#mt;get authenticationMethod(){return this.#mt}set authenticationMethod(t){this.#mt=t}#ft;constructor(){super(),pr?console.warn("More than one <user-manager> element has been used in this web application, consider removing one."):pr=this}async firstUpdated(){if(!this.disableAutoload||this.#vt("refreshToken"))try{await this.authenticateAsync()}catch{}console.log("UserManager Ready.")}async isRefreshTokenValid(t){try{return await this.#gt(t,this.tokenUri),!0}catch(t){}return!1}#bt(t){const e=`${zi?this.redirectDevUrl:this.redirectUrl}?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#yt(t){const e=`${zi?this.redirectDevUrl:this.redirectUrl}sign-out/?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#xt(){const t=[];if(window.location.hash){let e=window.location.hash.substring(1);e=decodeURIComponent(e);const i=e.split("&");for(const e in i)if(Object.hasOwn(i,e)){const r=i[e].split("=");r.length>1&&t.push({key:r[0],value:decodeURIComponent(r[1])})}}return t}#wt(t){try{return JSON.parse(window.localStorage.getItem(t)||"[]")}catch(t){return console.warn(`Failed to parse scopes in local storage. ${t}`),[]}}#_t(){document.location&&document.location.hash&&document.location.hash.indexOf("refreshToken")>-1&&(document.location.hash="")}#vt(t){const e=this.#xt().filter(e=>e.key===t);return 0===e.length?null:e[0].value}#kt(t){if(!t)return null;let e;try{e=hr(t)}catch(t){return null}return e&&(e.exp=new Date(0).setUTCSeconds(e.exp)),e}#$t(t){const e=new Date;return e.setSeconds(e.getSeconds()+30),t.iss===this.issuerIdentifier&&!(t.exp<=e)}#St(){return window.localStorage.getItem("LG-AUTH-AT")||""}#zt(t){window.localStorage.setItem("LG-AUTH-AT",t)}#At(){return window.localStorage.getItem("LG-AUTH-RT")||""}#Ct(t){window.localStorage.setItem("LG-AUTH-RT",t||"")}async#gt(t,e){if(!window.navigator.onLine)return Promise.reject("Computer not connected. Make sure your computer is connected to the internet.");const i=this.#wt("LgClaimScopes"),r={grant_type:"refresh_token",refresh_token:t};i.length>0&&(r.claim_scopes=i);const o=await fetch(e,{method:"POST",body:JSON.stringify(r),headers:[["Content-Type","application/json"],["Accept","application/json"]]});let s;try{s=await o.json()}catch(t){return Promise.reject("Get Auth Token: The server sent back invalid JSON.")}return 200===o.status&&s.access_token?Promise.resolve(s.access_token):s.error?"unauthorized_client"===s.error?Promise.reject("Not authenticated"):Promise.reject(s.error):Promise.reject("Not authenticated")}#Mt(t){this.personId=Number(t.nameid),this.refreshTokenId=Number(t.RefreshTokenId),this.fullname=t.unique_name,this.username=t.username,this.firstName=t.given_name,this.lastName=t.family_name,this.email=t.email,this.isActiveEmployee="True"===t.IsActiveEmployee,this.isPendingEmployee="True"===t.IsPendingEmployee,this.isActiveClient="True"===t.IsActiveClient,this.authenticationMethod=t.authmethod,this.roles="string"==typeof t.role?[t.role]:t.role??[],this.company=t.Company??"",this.companyId=t.CompanyId?Number(t.CompanyId):0,this.profilePictureFileName=t.PicCdnFileName||null,this.dispatchEvent(new ur)}async#Et(){const t=this.#vt("refreshToken");let e=t?"":this.#St();const i=t||this.#At()||null;this.#_t();const r=this.#kt(e);if(r&&this.#$t(r))return this.#zt(e),this.#Ct(i),this.#Mt(r),Promise.resolve(r);if(null!=i){try{e=await this.#gt(i,this.tokenUri)}catch(t){return Promise.reject(t)}const t=this.#kt(e);if(t&&this.#$t(t))return this.#zt(e),this.#Ct(i),this.#Mt(t),Promise.resolve(t)}return Promise.reject("Not authenticated")}async getAccessTokenAsync(){return await this.authenticateAsync(),this.#St()}async isAuthenticatedAsync(){try{await this.#Et()}catch(t){return!1}return!0}async authenticateAsync(){const t=this;return this.#ft?new Promise((e,i)=>{this.addEventListener("token",function r(o){t.removeEventListener("token",r),o.detail.rejected&&i(o.detail.message),e(o.detail.accessToken)})}):new Promise(async(e,i)=>{let r;try{this.#ft=!0,r=await this.#Et()}catch(t){if("Not authenticated"===t)return document.location&&this.#bt(document.location.href),this.#ft=!1,void this.dispatchEvent(new CustomEvent("token",{detail:{rejected:!0,message:t}}));this.#ft=!1,i(t)}this.#ft=!1,t.dispatchEvent(new CustomEvent("token",{detail:r})),e(r)})}reset(){localStorage.removeItem("LG-AUTH-AT"),localStorage.removeItem("LG-AUTH-RT"),this.personId=0,this.refreshTokenId=0,this.username="",this.fullname="",this.company="",this.companyId=null,this.profilePictureFileName=null,this.firstName="",this.lastName="",this.email="",this.isActiveEmployee=!1,this.isPendingEmployee=!1,this.isActiveClient=!1,this.authenticationMethod=null,this.roles.forEach(t=>{window.dispatchEvent(new CustomEvent("um-role-removed",{detail:{role:t}}))}),this.roles=[],this.dispatchEvent(new ur)}logout(){this.reset(),document.location&&this.#yt(document.location.href)}};t([pt({type:Array})],fr.prototype,"roles",null),t([pt({type:String})],fr.prototype,"fullname",null),t([pt({type:String})],fr.prototype,"username",null),t([pt({type:String})],fr.prototype,"firstName",null),t([pt({type:String})],fr.prototype,"lastName",null),t([pt({type:String})],fr.prototype,"company",null),t([pt({type:Number})],fr.prototype,"companyId",null),t([pt({type:String})],fr.prototype,"profilePictureFileName",null),t([pt({type:String})],fr.prototype,"email",null),t([pt({type:Number})],fr.prototype,"personId",null),t([pt({type:Number})],fr.prototype,"refreshTokenId",null),t([pt({type:String})],fr.prototype,"redirectUrl",null),t([pt({type:String})],fr.prototype,"redirectDevUrl",null),t([pt({type:String})],fr.prototype,"tokenUri",null),t([pt({type:String})],fr.prototype,"issuerIdentifier",null),t([pt({type:Boolean})],fr.prototype,"disableAutoload",null),t([pt({type:Boolean})],fr.prototype,"isActiveEmployee",null),t([pt({type:Boolean})],fr.prototype,"isPendingEmployee",null),t([pt({type:Boolean})],fr.prototype,"isActiveClient",null),t([pt({type:String})],fr.prototype,"authenticationMethod",null),fr=t([dt("user-manager")],fr);class vr{constructor(){this.postLogoutRedirectUri="https://leavitt.com",this.authZeroDomainBaseURL="https://auth.leavitt.com",this.#Tt="VNreSE4Z8HsMaUfc1yRGgZQv9EN2quOS",this.#Pt="https://auth.leavitt.com/oauth/token",this.#It="https://auth.leavitt.com/",this.#Ot=`https://${zi?"dev":""}api3.leavitt.com`,this.#Bt=["openid","profile","email","offline_access"],this.#Rt=!1,this.#Nt=!1,this.#jt=[],this.#Dt=[]}#Tt;#Pt;#It;#Ot;#Bt;#Rt;#Nt;#Lt;get identity(){return this.#Ft(this.#Ut)}get refreshToken(){return this.#Ht}get accessToken(){return this.#Gt}get idToken(){return this.#Ut}get#Ht(){return localStorage.getItem("lg-auth0-rt")||null}set#Ht(t){localStorage.setItem("lg-auth0-rt",t||"")}get#Gt(){return localStorage.getItem("lg-auth0-at")||null}set#Gt(t){localStorage.setItem("lg-auth0-at",t||"")}get#Ut(){return localStorage.getItem("lg-auth0-id-token")||null}set#Ut(t){localStorage.setItem("lg-auth0-id-token",t||""),this.#qt(this.identity)}get#Vt(){return localStorage.getItem("lg-auth0-code-verifier")||null}set#Vt(t){localStorage.setItem("lg-auth0-code-verifier",t||"")}#jt;#Wt(t){this.#jt.forEach(({resolver:e})=>e(t)),this.#jt=[]}#Yt(t){this.#jt.forEach(({reject:e})=>e(t)),this.#jt=[]}async _getBearerTokenAsync(){return await this.authenticate()}async initialize(){if(this.#Rt)return Promise.resolve();this.#Rt=!0;const t=new URLSearchParams(window.location.search),e=t.get("code"),i=t.get("state");if(e)return new Promise(async(t,r)=>{this.#jt.push({resolver:t,reject:r}),i&&window.history.replaceState({},"",i);try{await this.#Xt(e)}catch(t){return this.#Yt(t.message)}return this.#$t(this.#Gt)?this.#Wt(this.#Gt):this.#Yt("Login failed, please try again.")});const r=t.get("error"),o=t.get("error_description");if(r){const t=new URL(window.location.href);return t.searchParams.delete("error"),t.searchParams.delete("error_description"),t.searchParams.delete("state"),window.history.replaceState({},"",t.toString()),new Promise((t,e)=>(this.#jt.push({resolver:t,reject:e}),this.#Nt=!0,this.#Lt=o||"Login failed, please try again.",this.#Yt(o||"Login failed, please try again.")))}return Promise.resolve()}async authenticate(){if(this.#Nt)throw new Error(this.#Lt);return this.#Rt||await this.initialize(),this.#jt.length?new Promise((t,e)=>{this.#jt.push({resolver:t,reject:e})}):new Promise(async(t,e)=>{if(this.#jt.push({resolver:t,reject:e}),this.#$t(this.#Gt))return this.#Wt(this.#Gt);try{await this.#Jt(this.#Ht)}catch(t){return this.#Yt(t.message)}if(this.#$t(this.#Gt))return this.#Wt(this.#Gt);this.#bt()})}logout(){this.#Gt=null,this.#Ht=null,this.#Ut=null,this.#Vt=null;const t=`${this.authZeroDomainBaseURL}/oidc/logout?federated&client_id=${this.#Tt}&post_logout_redirect_uri=${encodeURIComponent(this.postLogoutRedirectUri)}`;console.log("redirecting to logout page..."),document.location.href=t}#Dt;onIdentityUpdated(t){this.#Dt.push(t)}removeOnIdentityUpdated(t){this.#Dt=this.#Dt.filter(e=>e!==t)}#qt(t){this.#Dt.forEach(e=>e(t))}async#bt(){const t=new URL(document.location.href),e=this.#Kt(128),i=await this.#Qt(e);this.#Vt=e;const r={response_type:"code",client_id:this.#Tt,code_challenge:i,code_challenge_method:"S256",redirect_uri:t.origin,audience:this.#Ot,scope:this.#Bt.join(" "),state:t.pathname+t.search+t.hash},o=Object.entries(r).map(([t,e])=>`${t}=${encodeURIComponent(e)}`).join("&"),s=`${this.authZeroDomainBaseURL}/authorize?${o}`;console.log("redirecting to sign in page..."),document.location.href=s}#kt(t){if(!t)return null;let e;try{e=hr(t)}catch(t){return console.error("Error decoding access token",t),null}return e&&(e.exp=new Date(0).setUTCSeconds(e.exp),e.iat=new Date(0).setUTCSeconds(e.iat)),e}#Ft(t){if(!t)return null;let e;try{e=hr(t)}catch(t){return console.error("Error decoding identity token",t),null}const i=new Date(0);i.setUTCSeconds(e.exp);const r=new Date(0);r.setUTCSeconds(e.iat);return{coreid:e["https://leavitt.com/coreid"]??0,roles:e["https://leavitt.com/roles"]||[],activeEmployee:!!e["https://leavitt.com/activeEmployee"],pendingEmployee:!!e["https://leavitt.com/pendingEmployee"],activeClient:!!e["https://leavitt.com/activeClient"],companyName:e["https://leavitt.com/company"],profilePictureFileName:e["https://leavitt.com/picCdnFileName"],lastname:e["https://leavitt.com/lastname"],firstname:e["https://leavitt.com/firstname"],companyId:e["https://leavitt.com/companyId"]??0,nickname:e.nickname,name:e.name,picture:e.picture,updatedAt:e.updated_at?new Date(e.updated_at):null,email:e.email,issuer:e.iss,audience:e.aud,uniqueIdentifier:e.sub,issuedDate:r,expirationDate:i,sid:e.sid}}#$t(t){if(!t)return!1;const e=this.#kt(t);if(!e)return!1;const i=new Date;return i.setSeconds(i.getSeconds()+30),!(!e.iss||e.iss!==this.#It)&&!(!e.exp||e.exp<=i)}async#Jt(t){if(t){try{const e=await fetch(this.#Pt,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({grant_type:"refresh_token",refresh_token:t,audience:this.#Ot,client_id:this.#Tt,scope:this.#Bt.join(" ")})});if(!e.ok)return console.error("Error refreshing access token",e.statusText),null;const i=await e.json();return this.#Gt=i.access_token,this.#Ht=i.refresh_token,this.#Ut=i.id_token,i.access_token}catch(t){if(!navigator.onLine)throw new Error("No internet connection. Please check your network.");console.error("Error refreshing access token",t)}return null}}async#Xt(t){if(!t||!this.#Vt)return null;try{const e=await fetch(this.#Pt,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({grant_type:"authorization_code",client_id:this.#Tt,code:t,redirect_uri:new URL(window.location.href).origin,code_verifier:this.#Vt})});if(!e.ok){const t=await e.text();throw new Error(`Error: ${e.status} - ${t}`)}const i=await e.json();return this.#Gt=i.access_token,this.#Ht=i.refresh_token,this.#Ut=i.id_token,this.#Vt=null,i.access_token}catch(t){if(!navigator.onLine)throw new Error("No internet connection. Please check your network.");throw console.error("Token exchange failed",t),new Error("Token exchange failed")}}#Kt(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";let i="";const r=new Uint32Array(t);window.crypto.getRandomValues(r);for(let o=0;o<t;o++)i+=e[r[o]%66];return i}async#Qt(t){const e=(new TextEncoder).encode(t),i=await window.crypto.subtle.digest("SHA-256",e);return btoa(String.fromCharCode(...new Uint8Array(i))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}}let gr=class extends lt{constructor(){super(...arguments),this.#H=40,this.#ot=0,this.#rt="",this.#tt="",this.#Zt="",this.positioning="popover"}#te;get userManager(){return this.#te}set userManager(t){this.#te=t}#H;get size(){return this.#H}set size(t){this.#H=t}#it;get profilePictureFileName(){return this.#it}set profilePictureFileName(t){this.#it=t}#ot;get personId(){return this.#ot}set personId(t){this.#ot=t}#rt;get email(){return this.#rt}set email(t){this.#rt=t}#tt;get company(){return this.#tt}set company(t){this.#tt=t}#Zt;get name(){return this.#Zt}set name(t){this.#Zt=t}#ee;get menu(){return this.#ee}set menu(t){this.#ee=t}firstUpdated(){const t=this.#ie();t instanceof vr?(t.onIdentityUpdated(()=>{this.personId=t.identity?.coreid??0,this.profilePictureFileName=t.identity?.profilePictureFileName??null,this.email=t.identity?.email??"",this.company=t.identity?.companyName??"",this.name=t.identity?.name??""}),this.personId=t.identity?.coreid??0,this.profilePictureFileName=t.identity?.profilePictureFileName??null,this.email=t.identity?.email??"",this.company=t.identity?.companyName??"",this.name=t.identity?.name??""):t instanceof fr&&(t.addEventListener(ur.eventName,()=>{this.personId=t.personId,this.profilePictureFileName=t.profilePictureFileName,this.email=t.email,this.company=t.company,this.name=t.fullname}),this.personId=t.personId,this.profilePictureFileName=t.profilePictureFileName,this.email=t.email,this.company=t.company,this.name=t.fullname)}#ie(){return this.userManager??mr()}updated(t){t.has("size")&&t.get("size")!==this.size&&(this.style.width=this.size+"px",this.style.height=this.size+"px"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}static{this.styles=n`
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
  `}render(){return H`
      <md-icon-button
        id="icon-button"
        @click=${()=>{this.personId?this.menu.open=!this.menu.open:this.userManager instanceof vr?this.userManager.authenticate():mr()?.authenticateAsync()}}
        style=${Kt({height:`${this.size}px`,width:`${this.size}px`})}
      >
        <profile-picture shape="circle" .fileName=${this.profilePictureFileName} .size=${this.size}></profile-picture>
      </md-icon-button>
      <md-menu y-offset="4" anchor="icon-button" menu-corner="start-end" anchor-corner="end-end" .positioning=${this.positioning}>
        <main>
          <profile-picture shape="circle" .fileName=${this.profilePictureFileName} size="90"></profile-picture>
          <h1>${this.name}</h1>
          ${this.company?H`<h2 company>${this.company}</h2>`:""}
          <h2>${this.email}</h2>
          <slot-container>
            <slot name="content"></slot>
          </slot-container>
          <md-outlined-button account href="https://accounts.leavitt.com/your-apps" target="_blank"
            ><md-icon slot="icon">apps</md-icon>Browse Leavitt applications</md-outlined-button
          >
        </main>
        <md-divider role="separator" tabindex="-1"></md-divider>
        <footer>
          <md-text-button href="https://accounts.leavitt.com/" target="_blank">Account settings</md-text-button>
          <md-text-button @click=${()=>this.userManager?.logout()}>Sign out</md-text-button>
        </footer>
      </md-menu>
    `}};t([pt({type:Object})],gr.prototype,"userManager",null),t([pt({type:Number})],gr.prototype,"size",null),t([pt({type:String})],gr.prototype,"profilePictureFileName",null),t([pt({type:Number})],gr.prototype,"personId",null),t([pt({type:String})],gr.prototype,"email",null),t([pt({type:String})],gr.prototype,"company",null),t([pt({type:String})],gr.prototype,"name",null),t([vt("md-menu")],gr.prototype,"menu",null),t([pt()],gr.prototype,"positioning",void 0),gr=t([dt("profile-picture-menu")],gr);class br extends lt{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}t([pt({type:Boolean,reflect:!0})],br.prototype,"inset",void 0),t([pt({type:Boolean,reflect:!0,attribute:"inset-start"})],br.prototype,"insetStart",void 0),t([pt({type:Boolean,reflect:!0,attribute:"inset-end"})],br.prototype,"insetEnd",void 0);const yr=n`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;let xr=class extends br{};xr.styles=[yr],xr=t([dt("md-divider")],xr);const wr={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Ct.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Ct.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},_r={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Ct.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Ct.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]},kr=re(lt);class $r extends kr{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>wr,this.getCloseAnimation=()=>_r,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(t=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const e=this.dialog;if(!e.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=t;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),e.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),e={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,r=H`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:o}=this;return H`
      <div class="scrim"></div>
      <dialog
        class=${At(e)}
        aria-label=${o||q}
        aria-labelledby=${this.hasHeadline?"headline":q}
        role=${"alert"===this.type?"alertdialog":q}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||q}>
        ${i?r:q}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||q}>
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
        ${i?r:q}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(t=>{for(const e of t)this.handleAnchorIntersection(e)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:i}=t;"dialog"===e.getAttribute("method")&&i&&this.close(i.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const e=!ae(this,t);t.preventDefault(),e||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(t){"Escape"===t.key&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(t){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:e,scrim:i,container:r,headline:o,content:s,actions:n}=this;if(!(e&&i&&r&&o&&s&&n))return;const{container:a,dialog:l,scrim:c,headline:d,content:h,actions:u}=t,p=[[e,l??[]],[i,c??[]],[r,a??[]],[o,d??[]],[s,h??[]],[n,u??[]]],m=[];for(const[t,e]of p)for(const i of e){const e=t.animate(...i);this.cancelAnimations.signal.addEventListener("abort",()=>{e.cancel()}),m.push(e)}await Promise.all(m.map(t=>t.finished.catch(()=>{})))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}handleAnchorIntersection(t){const{target:e,isIntersecting:i}=t;e===this.topAnchor&&(this.isAtScrollTop=i),e===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise(t=>{this.isConnectedPromiseResolve=t})}handleFocusTrapFocus(t){const[e,i]=this.getFirstAndLastFocusableChildren();if(!e||!i)return void this.dialog?.focus();const r=t.target===this.firstFocusTrap,o=!r,s=t.relatedTarget===e,n=t.relatedTarget===i,a=!s&&!n;if(o&&n||r&&a)return void e.focus();(r&&s||o&&a)&&i.focus()}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let t=null,e=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;Sr(i)&&(t||(t=i),e=i)}return[t,e]}}function Sr(t){const e=":not(:disabled,[disabled])";if(t.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+e+':not([tabindex^="-"])'))return!0;return!!t.localName.includes("-")&&(!!t.matches(e)&&(t.shadowRoot?.delegatesFocus??!1))}t([pt({type:Boolean})],$r.prototype,"open",null),t([pt({type:Boolean})],$r.prototype,"quick",void 0),t([pt({attribute:!1})],$r.prototype,"returnValue",void 0),t([pt()],$r.prototype,"type",void 0),t([pt({type:Boolean,attribute:"no-focus-trap"})],$r.prototype,"noFocusTrap",void 0),t([vt("dialog")],$r.prototype,"dialog",void 0),t([vt(".scrim")],$r.prototype,"scrim",void 0),t([vt(".container")],$r.prototype,"container",void 0),t([vt(".headline")],$r.prototype,"headline",void 0),t([vt(".content")],$r.prototype,"content",void 0),t([vt(".actions")],$r.prototype,"actions",void 0),t([mt()],$r.prototype,"isAtScrollTop",void 0),t([mt()],$r.prototype,"isAtScrollBottom",void 0),t([vt(".scroller")],$r.prototype,"scroller",void 0),t([vt(".top.anchor")],$r.prototype,"topAnchor",void 0),t([vt(".bottom.anchor")],$r.prototype,"bottomAnchor",void 0),t([vt(".focus-trap")],$r.prototype,"firstFocusTrap",void 0),t([mt()],$r.prototype,"hasHeadline",void 0),t([mt()],$r.prototype,"hasActions",void 0),t([mt()],$r.prototype,"hasIcon",void 0);const zr=n`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;let Ar=class extends $r{};Ar.styles=[zr],Ar=t([dt("md-dialog")],Ar);class Cr extends Mt{renderOutline(t){return H`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${t}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}}const Mr=n`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`;let Er=class extends Cr{};Er.styles=[Pt,Mr],Er=t([dt("md-outlined-field")],Er);const Tr=n`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`;class Pr extends Te{constructor(){super(...arguments),this.fieldTag=Rt`md-outlined-field`}}let Ir=class extends Pr{constructor(){super(...arguments),this.fieldTag=Rt`md-outlined-field`}};Ir.styles=[Ie,Tr],Ir=t([dt("md-outlined-text-field")],Ir);let Or=class extends Er{constructor(){super(...arguments),this.populated=!0}#re;get evaluator(){return this.#re}set evaluator(t){this.#re=t}firstUpdated(){this.addEventListener("focusin",()=>this.focused=!0),this.addEventListener("focusout",()=>this.focused=!1)}reset(){this.error=!1}reportValidity(){const t=this.checkValidity();return this.error=!t,t}checkValidity(){return!!this.evaluator()}};t([pt({type:Boolean})],Or.prototype,"populated",void 0),t([pt({type:Object})],Or.prototype,"evaluator",null),Or=t([dt("titanium-outlined-input-validator")],Or);let Br=class extends It{constructor(){super(...arguments),this.populated=!0}#re;get evaluator(){return this.#re}set evaluator(t){this.#re=t}firstUpdated(){this.addEventListener("focusin",()=>this.focused=!0),this.addEventListener("focusout",()=>this.focused=!1)}reset(){this.error=!1}reportValidity(){const t=this.checkValidity();return this.error=!t,t}checkValidity(){return!!this.evaluator()}};t([pt({type:Boolean})],Br.prototype,"populated",void 0),t([pt({type:Object})],Br.prototype,"evaluator",null),Br=t([dt("titanium-filled-input-validator")],Br);let Rr=class extends lt{#oe=!1;get filled(){return this.#oe}set filled(t){this.#oe=t}#se;get label(){return this.#se}set label(t){this.#se=t}#ne="No items";get noItemsText(){return this.#ne}set noItemsText(t){this.#ne=t}#ae=!1;get required(){return this.#ae}set required(t){this.#ae=t}#le;get hasItems(){return this.#le}set hasItems(t){this.#le=t}#ce;get supportingText(){return this.#ce}set supportingText(t){this.#ce=t}#de;get error(){return this.#de}set error(t){this.#de=t}#he;get errorText(){return this.#he}set errorText(t){this.#he=t}#ue;get resizable(){return this.#ue}set resizable(t){this.#ue=t}#d;get disabled(){return this.#d}set disabled(t){this.#d=t}#pe;get validator(){return this.#pe}set validator(t){this.#pe=t}updated(t){(t.get("hasItems")&&t.has("hasItems")||this.hasItems&&t.has("hasItems"))&&this.reportValidity()}checkValidity(){return this.validator?.checkValidity()}reportValidity(){return this.validator?.reportValidity()}reset(){this.validator?.reset()}static{this.styles=[n`
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
    `]}render(){return jt`
      <${this.filled?Rt`titanium-filled-input-validator`:Rt`titanium-outlined-input-validator`}
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
          ${this.hasItems?"":jt` <span>${this.noItemsText}</span>`}
        </slot-container>
      </${this.filled?Rt`titanium-filled-input-validator`:Rt`titanium-outlined-input-validator`}>
    `}};t([pt({type:Boolean,attribute:"filled"})],Rr.prototype,"filled",null),t([pt({type:String})],Rr.prototype,"label",null),t([pt({type:String})],Rr.prototype,"noItemsText",null),t([pt({type:Boolean})],Rr.prototype,"required",null),t([pt({type:Boolean})],Rr.prototype,"hasItems",null),t([pt({type:String})],Rr.prototype,"supportingText",null),t([pt({type:Boolean})],Rr.prototype,"error",null),t([pt({type:String})],Rr.prototype,"errorText",null),t([pt({type:Boolean})],Rr.prototype,"resizable",null),t([pt({type:Boolean,reflect:!0})],Rr.prototype,"disabled",null),t([vt("titanium-outlined-input-validator, titanium-filled-input-validator")],Rr.prototype,"validator",null),Rr=t([dt("titanium-chip-multi-select")],Rr);class Nr extends fi{renderElevationOrOutline(){return H`<md-elevation part="elevation"></md-elevation>`}}const jr=n`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`,Dr=n`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;let Lr=class extends Nr{};Lr.styles=[di,Dr,jr],Lr=t([dt("md-filled-tonal-button")],Lr);const Fr="undefined"!=typeof window&&void 0!==window.document,Ur=Fr?window:{},Hr=!!Fr&&"ontouchstart"in Ur.document.documentElement,Gr=!!Fr&&"PointerEvent"in Ur,qr="cropper",Vr=`${qr}-canvas`,Wr=`${qr}-crosshair`,Yr=`${qr}-grid`,Xr=`${qr}-handle`,Jr=`${qr}-image`,Kr=`${qr}-selection`,Qr=`${qr}-shade`,Zr=`${qr}-viewer`,to="select",eo="move",io="scale",ro="rotate",oo="transform",so="none",no="n-resize",ao="e-resize",lo="s-resize",co="w-resize",ho="ne-resize",uo="nw-resize",po="se-resize",mo="sw-resize",fo=Gr?"pointerdown":Hr?"touchstart":"mousedown",vo=Gr?"pointermove":Hr?"touchmove":"mousemove",go=Gr?"pointerup pointercancel":Hr?"touchend touchcancel":"mouseup",bo="error",yo="keydown",xo="load",wo="wheel",_o="action",ko="actionend",$o="actionstart",So="change",zo="transform";const Ao=Number.isNaN||Ur.isNaN;function Co(t){return"number"==typeof t&&!Ao(t)}function Mo(t){return Co(t)&&t>0&&t<1/0}function Eo(t){return"object"==typeof t&&null!==t}const{hasOwnProperty:To}=Object.prototype;function Po(t){if(!Eo(t))return!1;try{const{constructor:e}=t,{prototype:i}=e;return e&&i&&To.call(i,"isPrototypeOf")}catch(t){return!1}}function Io(t){return"function"==typeof t}function Oo(t){return"object"==typeof t&&null!==t&&1===t.nodeType}const Bo=/([a-z\d])([A-Z])/g;function Ro(t){return String(t).replace(Bo,"$1-$2").toLowerCase()}const No=/-[A-z\d]/g;function jo(t){return t.replace(No,t=>t.slice(1).toUpperCase())}const Do=/\s\s*/;function Lo(t,e,i,r){e.trim().split(Do).forEach(e=>{t.removeEventListener(e,i,r)})}function Fo(t,e,i,r){e.trim().split(Do).forEach(e=>{t.addEventListener(e,i,r)})}function Uo(t,e,i,r){Fo(t,e,i,Object.assign(Object.assign({},r),{once:!0}))}const Ho={bubbles:!0,cancelable:!0,composed:!0};const Go=Promise.resolve();function qo(t){const{documentElement:e}=t.ownerDocument,i=t.getBoundingClientRect();return{left:i.left+(Ur.pageXOffset-e.clientLeft),top:i.top+(Ur.pageYOffset-e.clientTop)}}const Vo=/deg|g?rad|turn$/i;function Wo(t){const e=parseFloat(t)||0;if(0!==e){const[i="rad"]=String(t).match(Vo)||[];switch(i.toLowerCase()){case"deg":return e/360*(2*Math.PI);case"grad":return e/400*(2*Math.PI);case"turn":return e*(2*Math.PI)}}return e}const Yo="contain";function Xo(t,e=Yo){const{aspectRatio:i}=t;let{width:r,height:o}=t;const s=Mo(r),n=Mo(o);if(s&&n){const t=o*i;e===Yo&&t>r||"cover"===e&&t<r?o=r/i:r=o*i}else s?o=r/i:n&&(r=o*i);return{width:r,height:o}}function Jo(t,...e){if(0===e.length)return t;const[i,r,o,s,n,a]=t,[l,c,d,h,u,p]=e[0];return Jo(t=[i*l+o*c,r*l+s*c,i*d+o*h,r*d+s*h,i*u+o*p+n,r*u+s*p+a],...e.slice(1))}const Ko=/left|top|width|height/i,Qo="open",Zo=new WeakMap,ts=new WeakMap,es=new Map,is=Ur.document&&Array.isArray(Ur.document.adoptedStyleSheets)&&"replaceSync"in Ur.CSSStyleSheet.prototype;class rs extends HTMLElement{get $sharedStyle(){return(this.themeColor?`:host{--theme-color: ${this.themeColor};}`:"")+":host([hidden]){display:none!important}"}constructor(){var t,e;super(),this.shadowRootMode=Qo,this.slottable=!0;const i=null===(e=null===(t=Object.getPrototypeOf(this))||void 0===t?void 0:t.constructor)||void 0===e?void 0:e.$name;i&&es.set(i,this.tagName.toLowerCase())}static get observedAttributes(){return["shadow-root-mode","slottable","theme-color"]}attributeChangedCallback(t,e,i){if(Object.is(i,e))return;const r=jo(t);let o=i;switch(typeof this[r]){case"boolean":o=null!==i&&"false"!==i;break;case"number":o=Number(i)}switch(this[r]=o,t){case"theme-color":{const t=ts.get(this),e=this.$sharedStyle;t&&e&&(is?t.replaceSync(e):t.textContent=e);break}}}$propertyChangedCallback(t,e,i){if(!Object.is(i,e))switch(t=Ro(t),typeof i){case"boolean":!0===i?this.hasAttribute(t)||this.setAttribute(t,""):this.removeAttribute(t);break;case"number":i=Ao(i)?"":String(i);default:i?this.getAttribute(t)!==i&&this.setAttribute(t,i):this.removeAttribute(t)}}connectedCallback(){Object.getPrototypeOf(this).constructor.observedAttributes.forEach(t=>{const e=jo(t);let i=this[e];(function(t){return void 0===t})(i)||this.$propertyChangedCallback(e,void 0,i),Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>i,set(t){const r=i;i=t,this.$propertyChangedCallback(e,r,t)}})});const t=this.shadowRoot||this.attachShadow({mode:this.shadowRootMode||Qo});if(Zo.set(this,t),ts.set(this,this.$addStyles(this.$sharedStyle)),this.$style&&this.$addStyles(this.$style),this.$template){const e=document.createElement("template");e.innerHTML=this.$template,t.appendChild(e.content)}if(this.slottable){const e=document.createElement("slot");t.appendChild(e)}}disconnectedCallback(){ts.has(this)&&ts.delete(this),Zo.has(this)&&Zo.delete(this)}$getTagNameOf(t){var e;return null!==(e=es.get(t))&&void 0!==e?e:t}$setStyles(t){return Object.keys(t).forEach(e=>{let i=t[e];Co(i)&&(i=0!==i&&Ko.test(e)?`${i}px`:String(i)),this.style[e]=i}),this}$getShadowRoot(){return this.shadowRoot||Zo.get(this)}$addStyles(t){let e;const i=this.$getShadowRoot();return is?(e=new CSSStyleSheet,e.replaceSync(t),i.adoptedStyleSheets=i.adoptedStyleSheets.concat(e)):(e=document.createElement("style"),e.textContent=t,i.appendChild(e)),e}$emit(t,e,i){return function(t,e,i,r){return t.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign(Object.assign({},Ho),{detail:i}),r)))}(this,t,e,i)}$nextTick(t){return function(t,e){return e?Go.then(t?e.bind(t):e):Go}(this,t)}static $define(t,e){Eo(t)&&(e=t,t=""),t||(t=this.$name||this.name),t=Ro(t),Fr&&Ur.customElements&&!Ur.customElements.get(t)&&customElements.define(t,this,e)}}rs.$version="2.1.0";class os extends rs{constructor(){super(...arguments),this.$onPointerDown=null,this.$onPointerMove=null,this.$onPointerUp=null,this.$onWheel=null,this.$wheeling=!1,this.$pointers=new Map,this.$style=':host{display:block;min-height:100px;min-width:200px;overflow:hidden;position:relative;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([background]){background-color:#fff;background-image:repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc),repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc);background-image:repeating-conic-gradient(#ccc 0 25%,#fff 0 50%);background-position:0 0,.5rem .5rem;background-size:1rem 1rem}:host([disabled]){pointer-events:none}:host([disabled]):after{bottom:0;content:"";cursor:not-allowed;display:block;left:0;pointer-events:none;position:absolute;right:0;top:0}',this.$action=so,this.background=!1,this.disabled=!1,this.scaleStep=.1,this.themeColor="#39f"}static get observedAttributes(){return super.observedAttributes.concat(["background","disabled","scale-step"])}connectedCallback(){super.connectedCallback(),this.disabled||this.$bind()}disconnectedCallback(){this.disabled||this.$unbind(),super.disconnectedCallback()}$propertyChangedCallback(t,e,i){if(!Object.is(i,e)&&(super.$propertyChangedCallback(t,e,i),"disabled"===t))i?this.$unbind():this.$bind()}$bind(){this.$onPointerDown||(this.$onPointerDown=this.$handlePointerDown.bind(this),Fo(this,fo,this.$onPointerDown)),this.$onPointerMove||(this.$onPointerMove=this.$handlePointerMove.bind(this),Fo(this.ownerDocument,vo,this.$onPointerMove)),this.$onPointerUp||(this.$onPointerUp=this.$handlePointerUp.bind(this),Fo(this.ownerDocument,go,this.$onPointerUp)),this.$onWheel||(this.$onWheel=this.$handleWheel.bind(this),Fo(this,wo,this.$onWheel,{passive:!1,capture:!0}))}$unbind(){this.$onPointerDown&&(Lo(this,fo,this.$onPointerDown),this.$onPointerDown=null),this.$onPointerMove&&(Lo(this.ownerDocument,vo,this.$onPointerMove),this.$onPointerMove=null),this.$onPointerUp&&(Lo(this.ownerDocument,go,this.$onPointerUp),this.$onPointerUp=null),this.$onWheel&&(Lo(this,wo,this.$onWheel,{capture:!0}),this.$onWheel=null)}$handlePointerDown(t){const{buttons:e,button:i,type:r}=t;if(this.disabled||("pointerdown"===r&&"mouse"===t.pointerType||"mousedown"===r)&&(Co(e)&&1!==e||Co(i)&&0!==i||t.ctrlKey))return;const{$pointers:o}=this;let s="";if(t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:t,pageX:e,pageY:i})=>{o.set(t,{startX:e,startY:i,endX:e,endY:i})});else{const{pointerId:e=0,pageX:i,pageY:r}=t;o.set(e,{startX:i,startY:r,endX:i,endY:r})}o.size>1?s=oo:Oo(t.target)&&(s=t.target.action||t.target.getAttribute("action")||""),!1!==this.$emit($o,{action:s,relatedEvent:t})&&(t.preventDefault(),this.$action=s,this.style.willChange="transform")}$handlePointerMove(t){const{$action:e,$pointers:i}=this;if(this.disabled||e===so||0===i.size)return;if(!1===this.$emit("actionmove",{action:e,relatedEvent:t}))return;if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:t,pageX:e,pageY:r})=>{const o=i.get(t);o&&Object.assign(o,{endX:e,endY:r})});else{const{pointerId:e=0,pageX:r,pageY:o}=t,s=i.get(e);s&&Object.assign(s,{endX:r,endY:o})}const r={action:e,relatedEvent:t};if(e===oo){const e=new Map(i);let o=0,s=0,n=0,a=0,l=t.pageX,c=t.pageY;i.forEach((t,i)=>{e.delete(i),e.forEach(e=>{let i=e.startX-t.startX,r=e.startY-t.startY,d=e.endX-t.endX,h=e.endY-t.endY,u=0,p=0,m=0,f=0;if(0===i?r<0?m=2*Math.PI:r>0&&(m=Math.PI):i>0?m=Math.PI/2+Math.atan(r/i):i<0&&(m=1.5*Math.PI+Math.atan(r/i)),0===d?h<0?f=2*Math.PI:h>0&&(f=Math.PI):d>0?f=Math.PI/2+Math.atan(h/d):d<0&&(f=1.5*Math.PI+Math.atan(h/d)),f>0||m>0){const i=f-m,r=Math.abs(i);r>o&&(o=r,n=i,l=(t.startX+e.startX)/2,c=(t.startY+e.startY)/2)}if(i=Math.abs(i),r=Math.abs(r),d=Math.abs(d),h=Math.abs(h),i>0&&r>0?u=Math.sqrt(i*i+r*r):i>0?u=i:r>0&&(u=r),d>0&&h>0?p=Math.sqrt(d*d+h*h):d>0?p=d:h>0&&(p=h),u>0&&p>0){const i=(p-u)/u,r=Math.abs(i);r>s&&(s=r,a=i,l=(t.startX+e.startX)/2,c=(t.startY+e.startY)/2)}})});const d=o>0,h=s>0;d&&h?(r.rotate=n,r.scale=a,r.centerX=l,r.centerY=c):d?(r.action=ro,r.rotate=n,r.centerX=l,r.centerY=c):h?(r.action=io,r.scale=a,r.centerX=l,r.centerY=c):r.action=so}else{const[t]=Array.from(i.values());Object.assign(r,t)}i.forEach(t=>{t.startX=t.endX,t.startY=t.endY}),r.action!==so&&this.$emit(_o,r,{cancelable:!1})}$handlePointerUp(t){const{$action:e,$pointers:i}=this;if(!this.disabled&&e!==so&&!1!==this.$emit(ko,{action:e,relatedEvent:t})){if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:t})=>{i.delete(t)});else{const{pointerId:e=0}=t;i.delete(e)}0===i.size&&(this.style.willChange="",this.$action=so)}}$handleWheel(t){if(this.disabled)return;if(t.preventDefault(),this.$wheeling)return;this.$wheeling=!0,setTimeout(()=>{this.$wheeling=!1},50);const e=(t.deltaY>0?-1:1)*this.scaleStep;this.$emit(_o,{action:io,scale:e,relatedEvent:t},{cancelable:!1})}$setAction(t){return"string"==typeof t&&(this.$action=t),this}$toCanvas(t){return new Promise((e,i)=>{if(!this.isConnected)return void i(new Error("The current element is not connected to the DOM."));const r=document.createElement("canvas");let o=this.offsetWidth,s=this.offsetHeight,n=1;Po(t)&&(Mo(t.width)||Mo(t.height))&&(({width:o,height:s}=Xo({aspectRatio:o/s,width:t.width,height:t.height})),n=o/this.offsetWidth),r.width=o,r.height=s;const a=this.querySelector(this.$getTagNameOf(Jr));a?a.$ready().then(i=>{const l=r.getContext("2d");if(l){const[e,c,d,h,u,p]=a.$getTransform();let m=u,f=p,v=i.naturalWidth,g=i.naturalHeight;1!==n&&(m*=n,f*=n,v*=n,g*=n);const b=v/2,y=g/2;l.fillStyle="transparent",l.fillRect(0,0,o,s),Po(t)&&Io(t.beforeDraw)&&t.beforeDraw.call(this,l,r),l.save(),l.translate(b,y),l.transform(e,c,d,h,m,f),l.translate(-b,-y),l.drawImage(i,0,0,v,g),l.restore()}e(r)}).catch(i):e(r)})}}os.$name=Vr,os.$version="2.1.0";const ss=new WeakMap,ns=["alt","crossorigin","decoding","elementtiming","fetchpriority","loading","referrerpolicy","sizes","src","srcset"];class as extends rs{constructor(){super(...arguments),this.$matrix=[1,0,0,1,0,0],this.$onLoad=null,this.$onCanvasAction=null,this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$actionStartTarget=null,this.$style=":host{display:inline-block}img{display:block;height:100%;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}",this.$image=new Image,this.initialCenterSize="contain",this.rotatable=!1,this.scalable=!1,this.skewable=!1,this.slottable=!1,this.translatable=!1,this.alt="",this.crossorigin="",this.decoding="",this.elementtiming="",this.fetchpriority="",this.loading="",this.referrerpolicy="",this.sizes="",this.src="",this.srcset=""}set $canvas(t){ss.set(this,t)}get $canvas(){return ss.get(this)}static get observedAttributes(){return super.observedAttributes.concat(ns,["initial-center-size","rotatable","scalable","skewable","translatable"])}attributeChangedCallback(t,e,i){Object.is(i,e)||(super.attributeChangedCallback(t,e,i),ns.includes(t)&&this.$image.setAttribute(t,i))}$propertyChangedCallback(t,e,i){if(!Object.is(i,e)&&(super.$propertyChangedCallback(t,e,i),"initialCenterSize"===t))this.$nextTick(()=>{this.$center(i)})}connectedCallback(){super.connectedCallback();const{$image:t}=this,e=this.closest(this.$getTagNameOf(Vr));e&&(this.$canvas=e,this.$setStyles({display:"block",position:"absolute"}),this.$onCanvasActionStart=t=>{var e,i;this.$actionStartTarget=null===(i=null===(e=t.detail)||void 0===e?void 0:e.relatedEvent)||void 0===i?void 0:i.target},this.$onCanvasActionEnd=()=>{this.$actionStartTarget=null},this.$onCanvasAction=this.$handleAction.bind(this),Fo(e,$o,this.$onCanvasActionStart),Fo(e,ko,this.$onCanvasActionEnd),Fo(e,_o,this.$onCanvasAction)),this.$onLoad=this.$handleLoad.bind(this),Fo(t,xo,this.$onLoad),this.$getShadowRoot().appendChild(t)}disconnectedCallback(){const{$image:t,$canvas:e}=this;e&&(this.$onCanvasActionStart&&(Lo(e,$o,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Lo(e,ko,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(Lo(e,_o,this.$onCanvasAction),this.$onCanvasAction=null)),t&&this.$onLoad&&(Lo(t,xo,this.$onLoad),this.$onLoad=null),this.$getShadowRoot().removeChild(t),super.disconnectedCallback()}$handleLoad(){const{$image:t}=this;this.$setStyles({width:t.naturalWidth,height:t.naturalHeight}),this.$canvas&&this.$center(this.initialCenterSize)}$handleAction(t){if(this.hidden||!(this.rotatable||this.scalable||this.translatable))return;const{$canvas:e}=this,{detail:i}=t;if(i){const{relatedEvent:t}=i;let{action:r}=i;switch(r!==oo||this.rotatable&&this.scalable||(r=this.rotatable?ro:this.scalable?io:so),r){case eo:if(this.translatable){let r=null;t&&(r=t.target.closest(this.$getTagNameOf(Kr))),r||(r=e.querySelector(this.$getTagNameOf(Kr))),r&&r.multiple&&!r.active&&(r=e.querySelector(`${this.$getTagNameOf(Kr)}[active]`)),r&&!r.hidden&&r.movable&&!r.dynamic&&this.$actionStartTarget&&r.contains(this.$actionStartTarget)||this.$move(i.endX-i.startX,i.endY-i.startY)}break;case ro:if(this.rotatable)if(t){const{x:e,y:r}=this.getBoundingClientRect();this.$rotate(i.rotate,t.clientX-e,t.clientY-r)}else this.$rotate(i.rotate);break;case io:if(this.scalable)if(t){const e=t.target.closest(this.$getTagNameOf(Kr));if(!e||!e.zoomable||e.zoomable&&e.dynamic){const{x:e,y:r}=this.getBoundingClientRect();this.$zoom(i.scale,t.clientX-e,t.clientY-r)}}else this.$zoom(i.scale);break;case oo:if(this.rotatable&&this.scalable){const{rotate:e}=i;let{scale:r}=i;r<0?r=1/(1-r):r+=1;const o=Math.cos(e),s=Math.sin(e),[n,a,l,c]=[o*r,s*r,-s*r,o*r];if(t){const e=this.getBoundingClientRect(),i=t.clientX-e.x,r=t.clientY-e.y,[o,s,d,h]=this.$matrix,u=i-e.width/2,p=r-e.height/2,m=(u*h-d*p)/(o*h-d*s),f=(p*o-s*u)/(o*h-d*s);this.$transform(n,a,l,c,m*(1-n)+f*l,f*(1-c)+m*a)}else this.$transform(n,a,l,c,0,0)}}}}$ready(t){const{$image:e}=this,i=new Promise((t,i)=>{const r=new Error("Failed to load the image source");if(e.complete)e.naturalWidth>0&&e.naturalHeight>0?t(e):i(r);else{const o=()=>{Lo(e,bo,s),setTimeout(()=>{t(e)})},s=()=>{Lo(e,xo,o),i(r)};Uo(e,xo,o),Uo(e,bo,s)}});return Io(t)&&i.then(e=>(t(e),e)),i}$center(t){const{parentElement:e}=this;if(!e)return this;const i=e.getBoundingClientRect(),r=i.width,o=i.height,{x:s,y:n,width:a,height:l}=this.getBoundingClientRect(),c=s+a/2,d=n+l/2,h=i.x+r/2,u=i.y+o/2;if(this.$move(h-c,u-d),t&&(a!==r||l!==o)){const e=r/a,i=o/l;switch(t){case"cover":this.$scale(Math.max(e,i));break;case"contain":this.$scale(Math.min(e,i))}}return this}$move(t,e=t){if(this.translatable&&Co(t)&&Co(e)){const[i,r,o,s]=this.$matrix,n=(t*s-o*e)/(i*s-o*r),a=(e*i-r*t)/(i*s-o*r);this.$translate(n,a)}return this}$moveTo(t,e=t){if(this.translatable&&Co(t)&&Co(e)){const[i,r,o,s]=this.$matrix,n=(t*s-o*e)/(i*s-o*r),a=(e*i-r*t)/(i*s-o*r);this.$setTransform(i,r,o,s,n,a)}return this}$rotate(t,e,i){if(this.rotatable){const r=Wo(t),o=Math.cos(r),s=Math.sin(r),[n,a,l,c]=[o,s,-s,o];if(Co(e)&&Co(i)){const[t,r,o,s]=this.$matrix,{width:d,height:h}=this.getBoundingClientRect(),u=e-d/2,p=i-h/2,m=(u*s-o*p)/(t*s-o*r),f=(p*t-r*u)/(t*s-o*r);this.$transform(n,a,l,c,m*(1-n)-f*l,f*(1-c)-m*a)}else this.$transform(n,a,l,c,0,0)}return this}$zoom(t,e,i){if(!this.scalable||0===t)return this;if(t<0?t=1/(1-t):t+=1,Co(e)&&Co(i)){const[r,o,s,n]=this.$matrix,{width:a,height:l}=this.getBoundingClientRect(),c=e-a/2,d=i-l/2,h=(c*n-s*d)/(r*n-s*o),u=(d*r-o*c)/(r*n-s*o);this.$transform(t,0,0,t,h*(1-t),u*(1-t))}else this.$scale(t);return this}$scale(t,e=t){return this.scalable&&this.$transform(t,0,0,e,0,0),this}$skew(t,e=0){if(this.skewable){const i=Wo(t),r=Wo(e);this.$transform(1,Math.tan(r),Math.tan(i),1,0,0)}return this}$translate(t,e=t){return this.translatable&&Co(t)&&Co(e)&&this.$transform(1,0,0,1,t,e),this}$transform(t,e,i,r,o,s){return Co(t)&&Co(e)&&Co(i)&&Co(r)&&Co(o)&&Co(s)?this.$setTransform(Jo(this.$matrix,[t,e,i,r,o,s])):this}$setTransform(t,e,i,r,o,s){if((this.rotatable||this.scalable||this.skewable||this.translatable)&&(Array.isArray(t)&&([t,e,i,r,o,s]=t),Co(t)&&Co(e)&&Co(i)&&Co(r)&&Co(o)&&Co(s))){const n=[...this.$matrix],a=[t,e,i,r,o,s];if(!1===this.$emit(zo,{matrix:a,oldMatrix:n}))return this;this.$matrix=a,this.style.transform=`matrix(${a.join(", ")})`}return this}$getTransform(){return this.$matrix.slice()}$resetTransform(){return this.$setTransform([1,0,0,1,0,0])}}as.$name=Jr,as.$version="2.1.0";const ls=new WeakMap;class cs extends rs{constructor(){super(...arguments),this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$onSelectionChange=null,this.$style=":host{display:block;height:0;left:0;outline:var(--theme-color) solid 1px;position:relative;top:0;width:0}:host([transparent]){outline-color:transparent}",this.x=0,this.y=0,this.width=0,this.height=0,this.slottable=!1,this.themeColor="rgba(0, 0, 0, 0.65)"}set $canvas(t){ls.set(this,t)}get $canvas(){return ls.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["height","width","x","y"])}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Vr));if(t){this.$canvas=t,this.style.position="absolute";const e=t.querySelector(this.$getTagNameOf(Kr));e&&(this.$onCanvasActionStart=t=>{e.hidden&&t.detail.action===to&&(this.hidden=!1)},this.$onCanvasActionEnd=t=>{e.hidden&&t.detail.action===to&&(this.hidden=!0)},this.$onSelectionChange=t=>{const{x:i,y:r,width:o,height:s}=t.defaultPrevented?e:t.detail;this.$change(i,r,o,s),(e.hidden||0===i&&0===r&&0===o&&0===s)&&(this.hidden=!0)},Fo(t,$o,this.$onCanvasActionStart),Fo(t,ko,this.$onCanvasActionEnd),Fo(t,So,this.$onSelectionChange))}this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onCanvasActionStart&&(Lo(t,$o,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Lo(t,ko,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onSelectionChange&&(Lo(t,So,this.$onSelectionChange),this.$onSelectionChange=null)),super.disconnectedCallback()}$change(t,e,i=this.width,r=this.height){return Co(t)&&Co(e)&&Co(i)&&Co(r)&&(t!==this.x||e!==this.y||i!==this.width||r!==this.height)?(this.hidden&&(this.hidden=!1),this.x=t,this.y=e,this.width=i,this.height=r,this.$render()):this}$reset(){return this.$change(0,0,0,0)}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height,outlineWidth:Ur.innerWidth})}}cs.$name=Qr,cs.$version="2.1.0";class ds extends rs{constructor(){super(...arguments),this.$onCanvasCropEnd=null,this.$onCanvasCropStart=null,this.$style=':host{background-color:var(--theme-color);display:block}:host([action=move]),:host([action=select]){height:100%;left:0;position:absolute;top:0;width:100%}:host([action=move]){cursor:move}:host([action=select]){cursor:crosshair}:host([action$=-resize]){background-color:transparent;height:15px;position:absolute;width:15px}:host([action$=-resize]):after{background-color:var(--theme-color);content:"";display:block;height:5px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:5px}:host([action=n-resize]),:host([action=s-resize]){cursor:ns-resize;left:50%;transform:translateX(-50%);width:100%}:host([action=n-resize]){top:-8px}:host([action=s-resize]){bottom:-8px}:host([action=e-resize]),:host([action=w-resize]){cursor:ew-resize;height:100%;top:50%;transform:translateY(-50%)}:host([action=e-resize]){right:-8px}:host([action=w-resize]){left:-8px}:host([action=ne-resize]){cursor:nesw-resize;right:-8px;top:-8px}:host([action=nw-resize]){cursor:nwse-resize;left:-8px;top:-8px}:host([action=se-resize]){bottom:-8px;cursor:nwse-resize;right:-8px}:host([action=se-resize]):after{height:15px;width:15px}@media (pointer:coarse){:host([action=se-resize]):after{height:10px;width:10px}}@media (pointer:fine){:host([action=se-resize]):after{height:5px;width:5px}}:host([action=sw-resize]){bottom:-8px;cursor:nesw-resize;left:-8px}:host([plain]){background-color:transparent}',this.action=so,this.plain=!1,this.slottable=!1,this.themeColor="rgba(51, 153, 255, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["action","plain"])}}ds.$name=Xr,ds.$version="2.1.0";const hs=new WeakMap;class us extends rs{constructor(){super(...arguments),this.$onCanvasAction=null,this.$onCanvasActionStart=null,this.$onCanvasActionEnd=null,this.$onDocumentKeyDown=null,this.$action="",this.$actionStartTarget=null,this.$changing=!1,this.$style=':host{display:block;left:0;position:relative;right:0}:host([outlined]){outline:1px solid var(--theme-color)}:host([multiple]){outline:1px dashed hsla(0,0%,100%,.5)}:host([multiple]):after{bottom:0;content:"";cursor:pointer;display:block;left:0;position:absolute;right:0;top:0}:host([multiple][active]){outline-color:var(--theme-color);z-index:1}:host([multiple])>*{visibility:hidden}:host([multiple][active])>*{visibility:visible}:host([multiple][active]):after{display:none}',this.$initialSelection={x:0,y:0,width:0,height:0},this.x=0,this.y=0,this.width=0,this.height=0,this.aspectRatio=NaN,this.initialAspectRatio=NaN,this.initialCoverage=NaN,this.active=!1,this.linked=!1,this.dynamic=!1,this.movable=!1,this.resizable=!1,this.zoomable=!1,this.multiple=!1,this.keyboard=!1,this.outlined=!1,this.precise=!1}set $canvas(t){hs.set(this,t)}get $canvas(){return hs.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["active","aspect-ratio","dynamic","height","initial-aspect-ratio","initial-coverage","keyboard","linked","movable","multiple","outlined","precise","resizable","width","x","y","zoomable"])}$propertyChangedCallback(t,e,i){if(!Object.is(i,e))switch(super.$propertyChangedCallback(t,e,i),t){case"x":case"y":case"width":case"height":this.$changing||this.$nextTick(()=>{this.$change(this.x,this.y,this.width,this.height,this.aspectRatio,!0)});break;case"aspectRatio":case"initialAspectRatio":this.$nextTick(()=>{this.$initSelection()});break;case"initialCoverage":this.$nextTick(()=>{Mo(i)&&i<=1&&this.$initSelection(!0,!0)});break;case"keyboard":this.$nextTick(()=>{this.$canvas&&(i?this.$onDocumentKeyDown||(this.$onDocumentKeyDown=this.$handleKeyDown.bind(this),Fo(this.ownerDocument,yo,this.$onDocumentKeyDown)):this.$onDocumentKeyDown&&(Lo(this.ownerDocument,yo,this.$onDocumentKeyDown),this.$onDocumentKeyDown=null))});break;case"multiple":this.$nextTick(()=>{if(this.$canvas){const t=this.$getSelections();i?(t.forEach(t=>{t.active=!1}),this.active=!0,this.$emit(So,{x:this.x,y:this.y,width:this.width,height:this.height})):(this.active=!1,t.slice(1).forEach(t=>{this.$removeSelection(t)}))}});break;case"precise":this.$nextTick(()=>{this.$change(this.x,this.y)});break;case"linked":i&&(this.dynamic=!0)}}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Vr));t?(this.$canvas=t,this.$setStyles({position:"absolute",transform:`translate(${this.x}px, ${this.y}px)`}),this.hidden||this.$render(),this.$initSelection(!0),this.$onCanvasActionStart=this.$handleActionStart.bind(this),this.$onCanvasActionEnd=this.$handleActionEnd.bind(this),this.$onCanvasAction=this.$handleAction.bind(this),Fo(t,$o,this.$onCanvasActionStart),Fo(t,ko,this.$onCanvasActionEnd),Fo(t,_o,this.$onCanvasAction)):this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onCanvasActionStart&&(Lo(t,$o,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Lo(t,ko,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(Lo(t,_o,this.$onCanvasAction),this.$onCanvasAction=null)),super.disconnectedCallback()}$getSelections(){let t=[];return this.parentElement&&(t=Array.from(this.parentElement.querySelectorAll(this.$getTagNameOf(Kr)))),t}$initSelection(t=!1,e=!1){const{initialCoverage:i,parentElement:r}=this;if(Mo(i)&&r){const o=this.aspectRatio||this.initialAspectRatio;let s=(e?0:this.width)||r.offsetWidth*i,n=(e?0:this.height)||r.offsetHeight*i;Mo(o)&&({width:s,height:n}=Xo({aspectRatio:o,width:s,height:n})),this.$change(this.x,this.y,s,n),t&&this.$center(),this.$initialSelection={x:this.x,y:this.y,width:this.width,height:this.height}}}$createSelection(){const t=this.cloneNode(!0);return this.hasAttribute("id")&&t.removeAttribute("id"),t.initialCoverage=NaN,this.active=!1,this.parentElement&&this.parentElement.insertBefore(t,this.nextSibling),t}$removeSelection(t=this){if(this.parentElement){const e=this.$getSelections();if(e.length>1){const i=e.indexOf(t),r=e[i+1]||e[i-1];r&&(t.active=!1,this.parentElement.removeChild(t),r.active=!0,r.$emit(So,{x:r.x,y:r.y,width:r.width,height:r.height}))}else this.$clear()}}$handleActionStart(t){var e,i;const r=null===(i=null===(e=t.detail)||void 0===e?void 0:e.relatedEvent)||void 0===i?void 0:i.target;this.$action="",this.$actionStartTarget=r,!this.hidden&&this.multiple&&!this.active&&r===this&&this.parentElement&&(this.$getSelections().forEach(t=>{t.active=!1}),this.active=!0,this.$emit(So,{x:this.x,y:this.y,width:this.width,height:this.height}))}$handleAction(t){const{currentTarget:e,detail:i}=t;if(!e||!i)return;const{relatedEvent:r}=i;let{action:o}=i;const s=r?function(t){if("function"==typeof t.composedPath)return t.composedPath().find(Oo)||t.target;return t.target}(r):null;if(!o&&this.multiple&&(o=this.$action||(null==s?void 0:s.action),this.$action=o),!o||this.hidden&&o!==to||this.multiple&&!this.active&&o!==io)return;const{width:n,height:a}=this;let l=i.endX-i.startX,c=i.endY-i.startY,{aspectRatio:d}=this;switch(!Mo(d)&&r.shiftKey&&(d=Mo(n)&&Mo(a)?n/a:1),o){case to:if(0!==l||0!==c){0===l?l=c:0===c&&(c=l);const{$canvas:t}=this,r=qo(e);(this.multiple&&!this.hidden?this.$createSelection():this).$change(i.startX-r.left,i.startY-r.top,Math.abs(l),Math.abs(c),d),l<0?c<0?o=uo:c>0&&(o=mo):l>0&&(c<0?o=ho:c>0&&(o=po)),t&&(t.$action=o)}break;case eo:this.movable&&(this.dynamic||this.$actionStartTarget&&this.contains(this.$actionStartTarget))&&this.$move(l,c);break;case io:if(r&&this.zoomable&&(this.dynamic||this.contains(r.target))){const t=qo(e);this.$zoom(i.scale,r.pageX-t.left,r.pageY-t.top)}break;default:this.$resize(o,l,c,d)}}$handleActionEnd(){this.$action="",this.$actionStartTarget=null}$handleKeyDown(t){if(this.hidden||!this.keyboard||this.multiple&&!this.active||t.defaultPrevented)return;const{activeElement:e}=document;if(!e||!["INPUT","TEXTAREA"].includes(e.tagName)&&!["true","plaintext-only"].includes(e.contentEditable))switch(t.key){case"Backspace":t.metaKey&&(t.preventDefault(),this.$removeSelection());break;case"Delete":t.preventDefault(),this.$removeSelection();break;case"ArrowLeft":t.preventDefault(),this.$move(-1,0);break;case"ArrowRight":t.preventDefault(),this.$move(1,0);break;case"ArrowUp":t.preventDefault(),this.$move(0,-1);break;case"ArrowDown":t.preventDefault(),this.$move(0,1);break;case"+":t.preventDefault(),this.$zoom(.1);break;case"-":t.preventDefault(),this.$zoom(-.1)}}$center(){const{parentElement:t}=this;if(!t)return this;const e=(t.offsetWidth-this.width)/2,i=(t.offsetHeight-this.height)/2;return this.$change(e,i)}$move(t,e=t){return this.$moveTo(this.x+t,this.y+e)}$moveTo(t,e=t){return this.movable?this.$change(t,e):this}$resize(t,e=0,i=0,r=this.aspectRatio){if(!this.resizable)return this;const o=Mo(r),{$canvas:s}=this;let{x:n,y:a,width:l,height:c}=this;switch(t){case no:a+=i,c-=i,c<0&&(t=lo,c=-c,a-=c),o&&(n+=(e=i*r)/2,l-=e,l<0&&(l=-l,n-=l));break;case ao:l+=e,l<0&&(t=co,l=-l,n-=l),o&&(a-=(i=e/r)/2,c+=i,c<0&&(c=-c,a-=c));break;case lo:c+=i,c<0&&(t=no,c=-c,a-=c),o&&(n-=(e=i*r)/2,l+=e,l<0&&(l=-l,n-=l));break;case co:n+=e,l-=e,l<0&&(t=ao,l=-l,n-=l),o&&(a+=(i=e/r)/2,c-=i,c<0&&(c=-c,a-=c));break;case ho:o&&(i=-e/r),a+=i,c-=i,l+=e,l<0&&c<0?(t=mo,l=-l,c=-c,n-=l,a-=c):l<0?(t=uo,l=-l,n-=l):c<0&&(t=po,c=-c,a-=c);break;case uo:o&&(i=e/r),n+=e,a+=i,l-=e,c-=i,l<0&&c<0?(t=po,l=-l,c=-c,n-=l,a-=c):l<0?(t=ho,l=-l,n-=l):c<0&&(t=mo,c=-c,a-=c);break;case po:o&&(i=e/r),l+=e,c+=i,l<0&&c<0?(t=uo,l=-l,c=-c,n-=l,a-=c):l<0?(t=mo,l=-l,n-=l):c<0&&(t=ho,c=-c,a-=c);break;case mo:o&&(i=-e/r),n+=e,l-=e,c+=i,l<0&&c<0?(t=ho,l=-l,c=-c,n-=l,a-=c):l<0?(t=po,l=-l,n-=l):c<0&&(t=uo,c=-c,a-=c)}return s&&s.$setAction(t),this.$change(n,a,l,c)}$zoom(t,e,i){if(!this.zoomable||0===t)return this;t<0?t=1/(1-t):t+=1;const{width:r,height:o}=this,s=r*t,n=o*t;let a=this.x,l=this.y;return Co(e)&&Co(i)?(a-=(s-r)*((e-this.x)/r),l-=(n-o)*((i-this.y)/o)):(a-=(s-r)/2,l-=(n-o)/2),this.$change(a,l,s,n)}$change(t,e,i=this.width,r=this.height,o=this.aspectRatio,s=!1){return this.$changing||!Co(t)||!Co(e)||!Co(i)||!Co(r)||i<0||r<0?this:(Mo(o)&&({width:i,height:r}=Xo({aspectRatio:o,width:i,height:r},"cover")),this.precise||(t=Math.round(t),e=Math.round(e),i=Math.round(i),r=Math.round(r)),t===this.x&&e===this.y&&i===this.width&&r===this.height&&Object.is(o,this.aspectRatio)&&!s?this:(this.hidden&&(this.hidden=!1),!1===this.$emit(So,{x:t,y:e,width:i,height:r})?this:(this.$changing=!0,this.x=t,this.y=e,this.width=i,this.height=r,this.$changing=!1,this.$render())))}$reset(){const{x:t,y:e,width:i,height:r}=this.$initialSelection;return this.$change(t,e,i,r)}$clear(){return this.$change(0,0,0,0,NaN,!0),this.hidden=!0,this}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height})}$toCanvas(t){return new Promise((e,i)=>{if(!this.isConnected)return void i(new Error("The current element is not connected to the DOM."));const r=document.createElement("canvas");let{width:o,height:s}=this,n=1;if(Po(t)&&(Mo(t.width)||Mo(t.height))&&(({width:o,height:s}=Xo({aspectRatio:o/s,width:t.width,height:t.height})),n=o/this.width),r.width=o,r.height=s,!this.$canvas)return void e(r);const a=this.$canvas.querySelector(this.$getTagNameOf(Jr));a?a.$ready().then(i=>{const l=r.getContext("2d");if(l){const[e,c,d,h,u,p]=a.$getTransform(),m=-this.x,f=-this.y,v=(m*h-d*f)/(e*h-d*c),g=(f*e-c*m)/(e*h-d*c);let b=e*v+d*g+u,y=c*v+h*g+p,x=i.naturalWidth,w=i.naturalHeight;1!==n&&(b*=n,y*=n,x*=n,w*=n);const _=x/2,k=w/2;l.fillStyle="transparent",l.fillRect(0,0,o,s),Po(t)&&Io(t.beforeDraw)&&t.beforeDraw.call(this,l,r),l.save(),l.translate(_,k),l.transform(e,c,d,h,b,y),l.translate(-_,-k),l.drawImage(i,0,0,x,w),l.restore()}e(r)}).catch(i):e(r)})}}us.$name=Kr,us.$version="2.1.0";class ps extends rs{constructor(){super(...arguments),this.$style=":host{display:flex;flex-direction:column;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([bordered]){border:1px dashed var(--theme-color)}:host([covered]){bottom:0;left:0;position:absolute;right:0;top:0}:host>span{display:flex;flex:1}:host>span+span{border-top:1px dashed var(--theme-color)}:host>span>span{flex:1}:host>span>span+span{border-left:1px dashed var(--theme-color)}",this.bordered=!1,this.columns=3,this.covered=!1,this.rows=3,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["bordered","columns","covered","rows"])}$propertyChangedCallback(t,e,i){Object.is(i,e)||(super.$propertyChangedCallback(t,e,i),"rows"!==t&&"columns"!==t||this.$nextTick(()=>{this.$render()}))}connectedCallback(){super.connectedCallback(),this.$render()}$render(){const t=this.$getShadowRoot(),e=document.createDocumentFragment();for(let t=0;t<this.rows;t+=1){const t=document.createElement("span");t.setAttribute("role","row");for(let e=0;e<this.columns;e+=1){const e=document.createElement("span");e.setAttribute("role","gridcell"),t.appendChild(e)}e.appendChild(t)}t&&(t.innerHTML="",t.appendChild(e))}}ps.$name=Yr,ps.$version="2.1.0";class ms extends rs{constructor(){super(...arguments),this.$style=':host{display:inline-block;height:1em;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1em}:host:after,:host:before{background-color:var(--theme-color);content:"";display:block;position:absolute}:host:before{height:1px;left:0;top:50%;transform:translateY(-50%);width:100%}:host:after{height:100%;left:50%;top:0;transform:translateX(-50%);width:1px}:host([centered]){left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}',this.centered=!1,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["centered"])}}ms.$name=Wr,ms.$version="2.1.0";const fs=new WeakMap,vs=new WeakMap,gs=new WeakMap,bs=new WeakMap,ys="vertical";class xs extends rs{constructor(){super(...arguments),this.$onSelectionChange=null,this.$onSourceImageLoad=null,this.$onSourceImageTransform=null,this.$scale=1,this.$style=":host{display:block;height:100%;overflow:hidden;position:relative;width:100%}",this.resize=ys,this.selection="",this.slottable=!1}set $image(t){vs.set(this,t)}get $image(){return vs.get(this)}set $sourceImage(t){bs.set(this,t)}get $sourceImage(){return bs.get(this)}set $canvas(t){fs.set(this,t)}get $canvas(){return fs.get(this)}set $selection(t){gs.set(this,t)}get $selection(){return gs.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["resize","selection"])}connectedCallback(){var t,e;super.connectedCallback();let i=null;if(i=this.selection?null!==(e=null===(t=function(t){const e=t.getRootNode();switch(e.nodeType){case 1:return e.ownerDocument;case 9:case 11:return e}return null}(this))||void 0===t?void 0:t.querySelector(this.selection))&&void 0!==e?e:null:this.closest(this.$getTagNameOf(Kr)),Oo(i)){this.$selection=i,this.$onSelectionChange=this.$handleSelectionChange.bind(this),Fo(i,So,this.$onSelectionChange);const t=i.closest(this.$getTagNameOf(Vr));if(t){this.$canvas=t;const e=t.querySelector(this.$getTagNameOf(Jr));e&&(this.$sourceImage=e,this.$image=e.cloneNode(!0),this.$getShadowRoot().appendChild(this.$image),this.$onSourceImageLoad=this.$handleSourceImageLoad.bind(this),this.$onSourceImageTransform=this.$handleSourceImageTransform.bind(this),Fo(e.$image,xo,this.$onSourceImageLoad),Fo(e,zo,this.$onSourceImageTransform))}this.$render()}}disconnectedCallback(){const{$selection:t,$sourceImage:e}=this;t&&this.$onSelectionChange&&(Lo(t,So,this.$onSelectionChange),this.$onSelectionChange=null),e&&this.$onSourceImageLoad&&(Lo(e.$image,xo,this.$onSourceImageLoad),this.$onSourceImageLoad=null),e&&this.$onSourceImageTransform&&(Lo(e,zo,this.$onSourceImageTransform),this.$onSourceImageTransform=null),super.disconnectedCallback()}$handleSelectionChange(t){this.$render(t.defaultPrevented?this.$selection:t.detail)}$handleSourceImageLoad(){const{$image:t,$sourceImage:e}=this,i=t.getAttribute("src"),r=e.getAttribute("src");r&&r!==i&&(t.setAttribute("src",r),t.$ready(()=>{this.$render()}))}$handleSourceImageTransform(t){this.$render(void 0,t.detail.matrix)}$render(t,e){const{$canvas:i,$selection:r}=this;t||r.hidden||(t=r),(!t||0===t.x&&0===t.y&&0===t.width&&0===t.height)&&(t={x:0,y:0,width:i.offsetWidth,height:i.offsetHeight});const{x:o,y:s,width:n,height:a}=t,l={},{clientWidth:c,clientHeight:d}=this;let h=c,u=d,p=NaN;switch(this.resize){case"both":p=1,h=n,u=a,l.width=n,l.height=a;break;case"horizontal":p=a>0?d/a:0,h=n*p,l.width=h;break;case ys:p=n>0?c/n:0,u=a*p,l.height=u;break;default:c>0?p=n>0?c/n:0:d>0&&(p=a>0?d/a:0)}this.$scale=p,this.$setStyles(l),this.$sourceImage&&setTimeout(()=>{this.$transformImageByOffset(null!=e?e:this.$sourceImage.$getTransform(),-o,-s)})}$transformImageByOffset(t,e,i){const{$image:r,$scale:o,$sourceImage:s}=this;if(s&&r&&o>=0){const[s,n,a,l,c,d]=t,h=(e*l-a*i)/(s*l-a*n),u=(i*s-n*e)/(s*l-a*n),p=s*h+a*u+c,m=n*h+l*u+d;r.$ready(t=>{this.$setStyles.call(r,{width:t.naturalWidth*o,height:t.naturalHeight*o})}),r.$setTransform(s,n,a,l,p*o,m*o)}}}function ws(t){if(t.shadowRoot){const e=t.shadowRoot.querySelector(".scrim");e&&(e.style.display="none");const i=t.shadowRoot.querySelector("dialog"),r="<style>dialog::backdrop { display:block;    background: var(--md-sys-color-scrim, #000); opacity: 0.32; transition: all 250ms ease 0s; }</style>";i?.insertAdjacentHTML("beforeend",r)}}xs.$name=Zr,xs.$version="2.1.0",os.$define(),ms.$define(),ps.$define(),ds.$define(),as.$define(),us.$define(),cs.$define(),xs.$define();const _s=n`
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

  [circle] cropper-selection {
    box-shadow: 0 0 0 1px #39f;
    border-radius: 50%;
    outline: 0;
  }

  [circle] cropper-shade {
    border-radius: 50%;
  }

  [circle] cropper-handle {
    background-color: transparent;
  }

  [circle] cropper-grid {
    border-radius: 50%;
    overflow: hidden;
  }
`,ks=n`
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
`,$s=n`
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
`,Ss=n`
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
`,zs=n`
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
`,As=n`
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
`,Cs=n`
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
`,Ms=n`
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
`,Es=[As,Cs,n`
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
  `],Ts=n`
  [ellipsis] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Ps=t=>t??q,Is={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},Os={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},Bs={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},Rs={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},Ns={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"};class js{static getFirstMatch(t,e){const i=e.match(t);return i&&i.length>0&&i[1]||""}static getSecondMatch(t,e){const i=e.match(t);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(t,e,i){if(t.test(e))return i}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const e=t.split(".").splice(0,2).map(t=>parseInt(t,10)||0);e.push(0);const i=e[0],r=e[1];if(10===i)switch(r){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(i){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}}static getAndroidVersionName(t){const e=t.split(".").splice(0,2).map(t=>parseInt(t,10)||0);if(e.push(0),!(1===e[0]&&e[1]<5))return 1===e[0]&&e[1]<6?"Cupcake":1===e[0]&&e[1]>=6?"Donut":2===e[0]&&e[1]<2?"Eclair":2===e[0]&&2===e[1]?"Froyo":2===e[0]&&e[1]>2?"Gingerbread":3===e[0]?"Honeycomb":4===e[0]&&e[1]<1?"Ice Cream Sandwich":4===e[0]&&e[1]<4?"Jelly Bean":4===e[0]&&e[1]>=4?"KitKat":5===e[0]?"Lollipop":6===e[0]?"Marshmallow":7===e[0]?"Nougat":8===e[0]?"Oreo":9===e[0]?"Pie":void 0}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,e,i=!1){const r=js.getVersionPrecision(t),o=js.getVersionPrecision(e);let s=Math.max(r,o),n=0;const a=js.map([t,e],t=>{const e=s-js.getVersionPrecision(t),i=t+new Array(e+1).join(".0");return js.map(i.split("."),t=>new Array(20-t.length).join("0")+t).reverse()});for(i&&(n=s-Math.min(r,o)),s-=1;s>=n;){if(a[0][s]>a[1][s])return 1;if(a[0][s]===a[1][s]){if(s===n)return 0;s-=1}else if(a[0][s]<a[1][s])return-1}}static map(t,e){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(t,e);for(r=0;r<t.length;r+=1)i.push(e(t[r]));return i}static find(t,e){let i,r;if(Array.prototype.find)return Array.prototype.find.call(t,e);for(i=0,r=t.length;i<r;i+=1){const r=t[i];if(e(r,i))return r}}static assign(t,...e){const i=t;let r,o;if(Object.assign)return Object.assign(t,...e);for(r=0,o=e.length;r<o;r+=1){const t=e[r];if("object"==typeof t&&null!==t){Object.keys(t).forEach(e=>{i[e]=t[e]})}}return t}static getBrowserAlias(t){return Is[t]}static getBrowserTypeByAlias(t){return Os[t]||""}}const Ds=/version\/(\d+(\.?_?\d+)+)/i,Ls=[{test:[/gptbot/i],describe(t){const e={name:"GPTBot"},i=js.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/chatgpt-user/i],describe(t){const e={name:"ChatGPT-User"},i=js.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/oai-searchbot/i],describe(t){const e={name:"OAI-SearchBot"},i=js.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe(t){const e={name:"ClaudeBot"},i=js.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/omgilibot/i,/webzio-extended/i],describe(t){const e={name:"Omgilibot"},i=js.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/diffbot/i],describe(t){const e={name:"Diffbot"},i=js.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/perplexitybot/i],describe(t){const e={name:"PerplexityBot"},i=js.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/perplexity-user/i],describe(t){const e={name:"Perplexity-User"},i=js.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/youbot/i],describe(t){const e={name:"YouBot"},i=js.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/meta-webindexer/i],describe(t){const e={name:"Meta-WebIndexer"},i=js.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/meta-externalads/i],describe(t){const e={name:"Meta-ExternalAds"},i=js.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/meta-externalagent/i],describe(t){const e={name:"Meta-ExternalAgent"},i=js.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/meta-externalfetcher/i],describe(t){const e={name:"Meta-ExternalFetcher"},i=js.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},i=js.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/linespider/i],describe(t){const e={name:"Linespider"},i=js.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/amazonbot/i],describe(t){const e={name:"AmazonBot"},i=js.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/bingbot/i],describe(t){const e={name:"BingCrawler"},i=js.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/baiduspider/i],describe(t){const e={name:"BaiduSpider"},i=js.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/duckduckbot/i],describe(t){const e={name:"DuckDuckBot"},i=js.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/ia_archiver/i],describe(t){const e={name:"InternetArchiveCrawler"},i=js.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:()=>({name:"FacebookExternalHit"})},{test:[/slackbot/i,/slack-imgProxy/i],describe(t){const e={name:"SlackBot"},i=js.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/yahoo!?[\s/]*slurp/i],describe:()=>({name:"YahooSlurp"})},{test:[/yandexbot/i,/yandexmobilebot/i],describe:()=>({name:"YandexBot"})},{test:[/pingdom/i],describe:()=>({name:"PingdomBot"})},{test:[/opera/i],describe(t){const e={name:"Opera"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},i=js.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/PaleMoon/i],describe(t){const e={name:"Pale Moon"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},i=js.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},i=js.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},i=js.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(t){const e={name:"Opera Touch"},i=js.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},i=js.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},i=js.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},i=js.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},i=js.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},i=js.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},i=js.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},i=js.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},i=js.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},i=js.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return i&&(e.version=i),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},i=js.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},i=js.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},i=js.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},i=js.getFirstMatch(Ds,t)||js.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},i=js.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},i=js.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},i=js.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/librewolf/i],describe(t){const e={name:"LibreWolf"},i=js.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},i=js.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},i=js.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe(t){const e={name:"Sogou Browser"},i=js.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,t),r=js.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t),o=js.getFirstMatch(/se ([\d.]+)x/i,t),s=i||r||o;return s&&(e.version=s),e}},{test:[/MiuiBrowser/i],describe(t){const e={name:"Miui"},i=js.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:t=>!!t.hasBrand("DuckDuckGo")||t.test(/\sDdg\/[\d.]+$/i),describe(t,e){const i={name:"DuckDuckGo"};if(e){const t=e.getBrandVersion("DuckDuckGo");if(t)return i.version=t,i}const r=js.getFirstMatch(/\sDdg\/([\d.]+)$/i,t);return r&&(i.version=r),i}},{test:t=>t.hasBrand("Brave"),describe(t,e){const i={name:"Brave"};if(e){const t=e.getBrandVersion("Brave");if(t)return i.version=t,i}return i}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},i=js.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},i=js.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},i=js.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e={name:"Android Browser"},i=js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},i=js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},i=js.getFirstMatch(Ds,t);return i&&(e.version=i),e}},{test:[/.*/i],describe(t){const e=-1!==t.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:js.getFirstMatch(e,t),version:js.getSecondMatch(e,t)}}}];var Fs=[{test:[/Roku\/DVP/],describe(t){const e=js.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:Rs.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=js.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:Rs.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=js.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),i=js.getWindowsVersionName(e);return{name:Rs.Windows,version:e,versionName:i}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(t){const e={name:Rs.iOS},i=js.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return i&&(e.version=i),e}},{test:[/macintosh/i],describe(t){const e=js.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),i=js.getMacOSVersionName(e),r={name:Rs.MacOS,version:e};return i&&(r.versionName=i),r}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=js.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:Rs.iOS,version:e}}},{test:[/OpenHarmony/i],describe(t){const e=js.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,t);return{name:Rs.HarmonyOS,version:e}}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e=js.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),i=js.getAndroidVersionName(e),r={name:Rs.Android,version:e};return i&&(r.versionName=i),r}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=js.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),i={name:Rs.WebOS};return e&&e.length&&(i.version=e),i}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=js.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||js.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||js.getFirstMatch(/\bbb(\d+)/i,t);return{name:Rs.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=js.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:Rs.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=js.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:Rs.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:Rs.Linux})},{test:[/CrOS/],describe:()=>({name:Rs.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=js.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:Rs.PlayStation4,version:e}}}],Us=[{test:[/googlebot/i],describe:()=>({type:Bs.bot,vendor:"Google"})},{test:[/linespider/i],describe:()=>({type:Bs.bot,vendor:"Line"})},{test:[/amazonbot/i],describe:()=>({type:Bs.bot,vendor:"Amazon"})},{test:[/gptbot/i],describe:()=>({type:Bs.bot,vendor:"OpenAI"})},{test:[/chatgpt-user/i],describe:()=>({type:Bs.bot,vendor:"OpenAI"})},{test:[/oai-searchbot/i],describe:()=>({type:Bs.bot,vendor:"OpenAI"})},{test:[/baiduspider/i],describe:()=>({type:Bs.bot,vendor:"Baidu"})},{test:[/bingbot/i],describe:()=>({type:Bs.bot,vendor:"Bing"})},{test:[/duckduckbot/i],describe:()=>({type:Bs.bot,vendor:"DuckDuckGo"})},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:()=>({type:Bs.bot,vendor:"Anthropic"})},{test:[/omgilibot/i,/webzio-extended/i],describe:()=>({type:Bs.bot,vendor:"Webz.io"})},{test:[/diffbot/i],describe:()=>({type:Bs.bot,vendor:"Diffbot"})},{test:[/perplexitybot/i],describe:()=>({type:Bs.bot,vendor:"Perplexity AI"})},{test:[/perplexity-user/i],describe:()=>({type:Bs.bot,vendor:"Perplexity AI"})},{test:[/youbot/i],describe:()=>({type:Bs.bot,vendor:"You.com"})},{test:[/ia_archiver/i],describe:()=>({type:Bs.bot,vendor:"Internet Archive"})},{test:[/meta-webindexer/i],describe:()=>({type:Bs.bot,vendor:"Meta"})},{test:[/meta-externalads/i],describe:()=>({type:Bs.bot,vendor:"Meta"})},{test:[/meta-externalagent/i],describe:()=>({type:Bs.bot,vendor:"Meta"})},{test:[/meta-externalfetcher/i],describe:()=>({type:Bs.bot,vendor:"Meta"})},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:()=>({type:Bs.bot,vendor:"Meta"})},{test:[/slackbot/i,/slack-imgProxy/i],describe:()=>({type:Bs.bot,vendor:"Slack"})},{test:[/yahoo/i],describe:()=>({type:Bs.bot,vendor:"Yahoo"})},{test:[/yandexbot/i,/yandexmobilebot/i],describe:()=>({type:Bs.bot,vendor:"Yandex"})},{test:[/pingdom/i],describe:()=>({type:Bs.bot,vendor:"Pingdom"})},{test:[/huawei/i],describe(t){const e=js.getFirstMatch(/(can-l01)/i,t)&&"Nova",i={type:Bs.mobile,vendor:"Huawei"};return e&&(i.model=e),i}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:Bs.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:Bs.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:()=>({type:Bs.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:Bs.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:Bs.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:Bs.tablet})},{test(t){const e=t.test(/ipod|iphone/i),i=t.test(/like (ipod|iphone)/i);return e&&!i},describe(t){const e=js.getFirstMatch(/(ipod|iphone)/i,t);return{type:Bs.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:Bs.mobile,vendor:"Nexus"})},{test:[/Nokia/i],describe(t){const e=js.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,t),i={type:Bs.mobile,vendor:"Nokia"};return e&&(i.model=e),i}},{test:[/[^-]mobi/i],describe:()=>({type:Bs.mobile})},{test:t=>"blackberry"===t.getBrowserName(!0),describe:()=>({type:Bs.mobile,vendor:"BlackBerry"})},{test:t=>"bada"===t.getBrowserName(!0),describe:()=>({type:Bs.mobile})},{test:t=>"windows phone"===t.getBrowserName(),describe:()=>({type:Bs.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&e>=3},describe:()=>({type:Bs.tablet})},{test:t=>"android"===t.getOSName(!0),describe:()=>({type:Bs.mobile})},{test:[/smart-?tv|smarttv/i],describe:()=>({type:Bs.tv})},{test:[/netcast/i],describe:()=>({type:Bs.tv})},{test:t=>"macos"===t.getOSName(!0),describe:()=>({type:Bs.desktop,vendor:"Apple"})},{test:t=>"windows"===t.getOSName(!0),describe:()=>({type:Bs.desktop})},{test:t=>"linux"===t.getOSName(!0),describe:()=>({type:Bs.desktop})},{test:t=>"playstation 4"===t.getOSName(!0),describe:()=>({type:Bs.tv})},{test:t=>"roku"===t.getOSName(!0),describe:()=>({type:Bs.tv})}],Hs=[{test:t=>"microsoft edge"===t.getBrowserName(!0),describe(t){if(/\sedg\//i.test(t))return{name:Ns.Blink};const e=js.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:Ns.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:Ns.Trident},i=js.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:Ns.Presto},i=js.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=t.test(/gecko/i),i=t.test(/like gecko/i);return e&&!i},describe(t){const e={name:Ns.Gecko},i=js.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:Ns.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:Ns.WebKit},i=js.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}}];class Gs{constructor(t,e=!1,i=null){if(null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t;let r=!1;"boolean"==typeof e?(r=e,this._hints=i):this._hints=null!=e&&"object"==typeof e?e:null,this.parsedResult={},!0!==r&&this.parse()}getHints(){return this._hints}hasBrand(t){if(!this._hints||!Array.isArray(this._hints.brands))return!1;const e=t.toLowerCase();return this._hints.brands.some(t=>t.brand&&t.brand.toLowerCase()===e)}getBrandVersion(t){if(!this._hints||!Array.isArray(this._hints.brands))return;const e=t.toLowerCase(),i=this._hints.brands.find(t=>t.brand&&t.brand.toLowerCase()===e);return i?i.version:void 0}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=js.find(Ls,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA(),this)),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=js.find(Fs,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:e}=this.getOS();return t?String(e).toLowerCase()||"":e||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:e}=this.getPlatform();return t?String(e).toLowerCase()||"":e||""}parsePlatform(){this.parsedResult.platform={};const t=js.find(Us,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=js.find(Hs,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return js.assign({},this.parsedResult)}satisfies(t){const e={};let i=0;const r={};let o=0;if(Object.keys(t).forEach(s=>{const n=t[s];"string"==typeof n?(r[s]=n,o+=1):"object"==typeof n&&(e[s]=n,i+=1)}),i>0){const t=Object.keys(e),i=js.find(t,t=>this.isOS(t));if(i){const t=this.satisfies(e[i]);if(void 0!==t)return t}const r=js.find(t,t=>this.isPlatform(t));if(r){const t=this.satisfies(e[r]);if(void 0!==t)return t}}if(o>0){const t=Object.keys(r),e=js.find(t,t=>this.isBrowser(t,!0));if(void 0!==e)return this.compareVersion(r[e])}}isBrowser(t,e=!1){const i=this.getBrowserName().toLowerCase();let r=t.toLowerCase();const o=js.getBrowserTypeByAlias(r);return e&&o&&(r=o.toLowerCase()),r===i}compareVersion(t){let e=[0],i=t,r=!1;const o=this.getBrowserVersion();if("string"==typeof o)return">"===t[0]||"<"===t[0]?(i=t.substr(1),"="===t[1]?(r=!0,i=t.substr(2)):e=[],">"===t[0]?e.push(1):e.push(-1)):"="===t[0]?i=t.substr(1):"~"===t[0]&&(r=!0,i=t.substr(1)),e.indexOf(js.compareVersions(o,i,r))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,e=!1){return this.isBrowser(t,e)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(t=>this.is(t))}}class qs{static getParser(t,e=!1,i=null){if("string"!=typeof t)throw new Error("UserAgent should be a string");return new Gs(t,e,i)}static parse(t,e=null){return new Gs(t,e).getResult()}static get BROWSER_MAP(){return Os}static get ENGINE_MAP(){return Ns}static get OS_MAP(){return Rs}static get PLATFORMS_MAP(){return Bs}}const Vs=new URL(new URL("D9xn2E7Y.gif",import.meta.url).href).href;let Ws=class extends(Ai(lt)){#A;get dialog(){return this.#A}set dialog(t){this.#A=t}#me;get main(){return this.#me}set main(t){this.#me=t}#fe;get cropperCanvas(){return this.#fe}set cropperCanvas(t){this.#fe=t}#ve;get cropperSelection(){return this.#ve}set cropperSelection(t){this.#ve=t}#ge;get cropperImage(){return this.#ge}set cropperImage(t){this.#ge=t}#be;get cropperShade(){return this.#be}set cropperShade(t){this.#be=t}#ye;get forcePNGOutput(){return this.#ye}set forcePNGOutput(t){this.#ye=t}#xe;get options(){return this.#xe}set options(t){this.#xe=t}#j="";get fileName(){return this.#j}set fileName(t){this.#j=t}#we="";get src(){return this.#we}set src(t){this.#we=t}#_e="";#ke="";#$e=!1;firstUpdated(){const t=qs.getParser(window.navigator.userAgent),e=t?.getOS?.()?.name??"";this.#_e="iOS"===e||"macOS"===e||this.forcePNGOutput?"image/png":"image/webp",this.#ke="iOS"===e||"macOS"===e||this.forcePNGOutput?"png":"webp",this.#Se()}#ze;#Se(){this.#ze=new ResizeObserver(()=>{this.#$e&&this.cropperImage.$center("cover")}),this.#ze.observe(this.main)}#Ae;#v;async open(t,e,i){return this.#$e=!1,this.#Ae=i,this.dialog.returnValue="",this.reset(),this.fileName=e,this.src=t,await this.updateComplete,this.dialog.show(),this.cropperImage.$ready(async t=>{this.cropperCanvas.style.width=`${t.naturalWidth}px`,this.cropperCanvas.style.aspectRatio=`${t.naturalWidth} / ${t.naturalHeight}`;const e=this.cropperCanvas.getBoundingClientRect(),i=e.width/e.height,r=this.options?.selectionAspectRatio??i;this.options||(this.options={}),void 0===this.options.maximizeSelection&&(this.options.maximizeSelection=!0),void 0===this.options.constrainSelectionTo&&(this.options.constrainSelectionTo="image");const o=this.options.constrainSelectionTo;this.options.constrainSelectionTo=null,this.options?.maximizeSelection?(this.cropperSelection.width=i>r?e.height*r:e.width,this.cropperSelection.height=i<r?e.width/r:e.height):(this.cropperSelection.width=e.width/2,this.cropperSelection.height=e.height/2),this.cropperImage.$center("cover"),this.cropperSelection.$center(),this.options.constrainSelectionTo=o,this.#$e=!0}),await new Promise(t=>{this.#v=t})}reset(){this.cropperImage.$resetTransform()}blobToFile(t,e){return new File([t],e,{lastModified:(new Date).getTime()})}#Ce(t,e){return t.slice(0,t.lastIndexOf("."))+`.${e}`}async#Me(t){const e=document.createElement("canvas"),i=new Image,r=new Promise(t=>{i.onload=()=>{const r=Math.min(i.naturalWidth,i.naturalHeight);e.width=r,e.height=r;const o=e.getContext("2d");o.drawImage(i,0,0),o.globalCompositeOperation="destination-in",o.fillStyle="#000",o.beginPath(),o.arc(.5*r,.5*r,.5*r,0,2*Math.PI),o.fill(),o.globalCompositeOperation="source-over",t(e.toDataURL())}});return i.src=t,await r}#Ee(t,e){return t.x>=e.x&&t.y>=e.y&&t.x+t.width<=e.x+e.width&&t.y+t.height<=e.y+e.height}#Te(t){if(!this.cropperCanvas||"image"!==this.options?.constrainSelectionTo)return;const e=this.cropperImage,i=this.cropperSelection,r=this.cropperCanvas.getBoundingClientRect(),o=e.cloneNode();o.style.transform=`matrix(${t.detail.matrix.join(", ")})`,o.style.opacity="0",this.cropperCanvas.appendChild(o);const s=o.getBoundingClientRect();this.cropperCanvas.removeChild(o);const n=i,a={x:s.left-r.left,y:s.top-r.top,width:s.width,height:s.height};this.#Ee(n,a)||t.preventDefault()}#Pe(t){if(!this.cropperCanvas||!this.options?.constrainSelectionTo)return;const e=this.cropperCanvas.getBoundingClientRect(),i={x:t.detail.x,y:t.detail.y,width:t.detail.width-1,height:t.detail.height-1};switch(this.options?.constrainSelectionTo){case"canvas":{const r={x:0,y:0,width:e.width,height:e.height};this.#Ee(i,r)||(t.preventDefault(),this.#Ie());break}case"image":{if(!this.#$e)return;const r=this.cropperImage.getBoundingClientRect(),o={x:r.left-e.left,y:r.top-e.top,width:r.width,height:r.height};this.#Ee(i,o)||(t.preventDefault(),this.#Ie());break}}}#Ie(){setTimeout(()=>this.cropperShade.$change(this.cropperSelection.x,this.cropperSelection.y,this.cropperSelection.width,this.cropperSelection.height),0)}static{this.styles=[ks,Cs,_s,n`
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
    `]}render(){return H`
      <md-dialog
        @open=${t=>ws(t.target)}
        @close=${t=>{if("cancel"===t.target.returnValue||"cropped"===t.target.returnValue)return this.#v(t.target.returnValue);t.preventDefault()}}
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
            <cropper-canvas ?background=${!this.options?.canvasHideBackground} ?circle=${"circle"===this.options?.shape}>
              <cropper-image
                initial-center-size="cover"
                .src=${this.src}
                alt="Picture"
                rotatable
                scalable
                skewable
                translatable
                @transform=${this.#Te}
              ></cropper-image>
              <cropper-shade hidden></cropper-shade>
              <cropper-handle action="select" plain></cropper-handle>
              <cropper-selection
                movable
                resizable
                precise
                aspect-ratio=${"circle"===this.options?.shape?1:Ps(this.options?.selectionAspectRatio)}
                @change=${this.#Pe}
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
            @click=${async()=>{await(this.cropperCanvas?.$toCanvas());const t=this.cropperCanvas?.getBoundingClientRect(),e=this.cropperImage?.$image,i=e&&t?.width?e.naturalWidth/t.width:1,r=e&&t?.height?e.naturalHeight/t.height:i;let o=Math.max(1,Math.round(this.cropperSelection.width*i)),s=Math.max(1,Math.round(this.cropperSelection.height*r));if(this.options?.outputMaxWidth&&o>this.options.outputMaxWidth){const t=this.options.outputMaxWidth/o;o=this.options.outputMaxWidth,s=Math.max(1,Math.round(s*t))}if(this.options?.outputMaxHeight&&s>this.options.outputMaxHeight){const t=this.options.outputMaxHeight/s;s=this.options.outputMaxHeight,o=Math.max(1,Math.round(o*t))}const n=await(this.cropperSelection?.$toCanvas({width:o,height:s}));if(this.isLoading=!0,await this.updateComplete,!n)return;const a="circle"===this.options?.shape?await this.#Me(n.toDataURL(this.#_e)):n.toDataURL(this.#_e),l=await fetch(a),c=this.blobToFile(await l.blob(),this.#Ce(this.fileName,this.#ke)),d=this.#Ae?.(c,a)||Promise.resolve();this.loadWhile(d),await d,this.isLoading=!1,this.dialog.close("cropped")}}
            >Save</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};t([vt("md-dialog")],Ws.prototype,"dialog",null),t([vt("main")],Ws.prototype,"main",null),t([vt("cropper-canvas")],Ws.prototype,"cropperCanvas",null),t([vt("cropper-selection")],Ws.prototype,"cropperSelection",null),t([vt("cropper-image")],Ws.prototype,"cropperImage",null),t([vt("cropper-shade")],Ws.prototype,"cropperShade",null),t([pt({type:Boolean,reflect:!0,attribute:"force-png"})],Ws.prototype,"forcePNGOutput",null),t([pt({type:Object})],Ws.prototype,"options",null),t([mt()],Ws.prototype,"fileName",null),t([mt()],Ws.prototype,"src",null),Ws=t([dt("crop-and-save-image-dialog")],Ws);let Ys=class extends lt{#Oe;get imageUrl(){return this.#Oe}set imageUrl(t){this.#Oe=t}#Be;get downloadSrc(){return this.#Be}set downloadSrc(t){this.#Be=t}#Re;get filename(){return this.#Re}set filename(t){this.#Re=t}#A;get dialog(){return this.#A}set dialog(t){this.#A=t}async open(t,e,i){return this.imageUrl=void 0,this.filename=i,this.downloadSrc=e,this.imageUrl=t,this.dialog.show()}static{this.styles=[n`
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
    `]}render(){return H`
      <md-dialog @open=${t=>ws(t.target)}>
        <div header slot="headline">${Mi(this.filename||"Image preview",60)}</div>
        <img slot="content" draggable="false" src=${Ps(this.imageUrl)} />
        <div slot="actions">
          ${this.downloadSrc?H`<md-text-button
                @click=${t=>{t.stopPropagation(),window.open(this.downloadSrc)}}
                ><md-icon slot="icon">file_download</md-icon>Download</md-text-button
              >`:H`<div></div>`}

          <md-text-button
            @click=${t=>{t.stopPropagation(),this.dialog.close("close")}}
            >Close</md-text-button
          >
        </div>
      </md-dialog>
    `}};t([mt()],Ys.prototype,"imageUrl",null),t([mt()],Ys.prototype,"downloadSrc",null),t([mt()],Ys.prototype,"filename",null),t([vt("md-dialog")],Ys.prototype,"dialog",null),Ys=t([dt("image-preview-dialog")],Ys);const Xs=re(lt);class Js extends Xs{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1,this.addEventListener("click",this.handleClick.bind(this))}focus(t){this.disabled&&!this.alwaysFocusable||super.focus(t)}render(){return H`
      <div class="container ${At(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(t){t.has("disabled")&&void 0!==t.get("disabled")&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled||this.softDisabled,"has-icon":this.hasIcon}}renderContainerContent(){return H`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return H`<span class="outline"></span>`}renderLeadingIcon(){return H`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return H`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">
        <span class="label-text" id="label">
          ${this.label?this.label:H`<slot></slot>`}
        </span>
      </span>
      <span class="touch"></span>
    `}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements({flatten:!0}).length>0}handleClick(t){if(this.softDisabled||this.disabled&&this.alwaysFocusable)return t.stopImmediatePropagation(),void t.preventDefault()}}Js.shadowRootOptions={...lt.shadowRootOptions,delegatesFocus:!0},t([pt({type:Boolean,reflect:!0})],Js.prototype,"disabled",void 0),t([pt({type:Boolean,attribute:"soft-disabled",reflect:!0})],Js.prototype,"softDisabled",void 0),t([pt({type:Boolean,attribute:"always-focusable"})],Js.prototype,"alwaysFocusable",void 0),t([pt()],Js.prototype,"label",void 0),t([pt({type:Boolean,reflect:!0,attribute:"has-icon"})],Js.prototype,"hasIcon",void 0);const Ks="aria-label-remove";class Qs extends Js{get ariaLabelRemove(){if(this.hasAttribute(Ks))return this.getAttribute(Ks);const{ariaLabel:t}=this;return t||this.label?`Remove ${t||this.label}`:null}set ariaLabelRemove(t){t!==this.ariaLabelRemove&&(null===t?this.removeAttribute(Ks):this.setAttribute(Ks,t),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(t){(this.alwaysFocusable||!this.disabled)&&t?.trailing&&this.trailingAction?this.trailingAction.focus(t):super.focus(t)}renderContainerContent(){return H`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(t){const e="ArrowLeft"===t.key,i="ArrowRight"===t.key;if(!e&&!i)return;if(!this.primaryAction||!this.trailingAction)return;const r="rtl"===getComputedStyle(this).direction?e:i,o=this.primaryAction?.matches(":focus-within"),s=this.trailingAction?.matches(":focus-within");if(r&&s||!r&&o)return;t.preventDefault(),t.stopPropagation();(r?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:t,trailingAction:e}=this;t&&e&&(t.tabIndex=-1,e.addEventListener("focusout",()=>{t.tabIndex=0},{once:!0}))}}function Zs({ariaLabel:t,disabled:e,focusListener:i,tabbable:r=!1}){return H`
    <span id="remove-label" hidden aria-hidden="true">Remove</span>
    <button
      class="trailing action"
      aria-label=${t||q}
      aria-labelledby=${t?q:"remove-label label"}
      tabindex=${r?q:-1}
      @click=${tn}
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
  `}function tn(t){if(this.disabled||this.softDisabled)return;t.stopPropagation();!this.dispatchEvent(new Event("remove",{cancelable:!0}))||this.remove()}class en extends Qs{constructor(){super(...arguments),this.avatar=!1,this.href="",this.target="",this.removeOnly=!1,this.selected=!1}get primaryId(){return this.href?"link":this.removeOnly?"":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}get primaryAction(){return this.removeOnly?null:this.renderRoot.querySelector(".primary.action")}getContainerClasses(){return{...super.getContainerClasses(),avatar:this.avatar,disabled:!this.href&&(this.disabled||this.softDisabled),link:!!this.href,selected:this.selected,"has-trailing":!0}}renderPrimaryAction(t){const{ariaLabel:e}=this;return this.href?H`
        <a
          class="primary action"
          id="link"
          aria-label=${e||q}
          href=${this.href}
          target=${this.target||q}
          >${t}</a
        >
      `:this.removeOnly?H`
        <span class="primary action" aria-label=${e||q}>
          ${t}
        </span>
      `:H`
      <button
        class="primary action"
        id="button"
        aria-label=${e||q}
        aria-disabled=${this.softDisabled||q}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${t}</button
      >
    `}renderTrailingAction(t){return Zs({focusListener:t,ariaLabel:this.ariaLabelRemove,disabled:!this.href&&(this.disabled||this.softDisabled),tabbable:this.removeOnly})}}t([pt({type:Boolean})],en.prototype,"avatar",void 0),t([pt()],en.prototype,"href",void 0),t([pt()],en.prototype,"target",void 0),t([pt({type:Boolean,attribute:"remove-only"})],en.prototype,"removeOnly",void 0),t([pt({type:Boolean,reflect:!0})],en.prototype,"selected",void 0),t([vt(".trailing.action")],en.prototype,"trailingAction",void 0);const rn=n`:host{--_container-height: var(--md-input-chip-container-height, 32px);--_disabled-label-text-color: var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color: var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font: var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color: var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color: var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width: var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color: var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity: var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color: var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape: var(--md-input-chip-avatar-shape, var(--md-sys-shape-corner-full, 9999px));--_avatar-size: var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color: var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size: var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color: var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color: var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color: var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color: var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-input-chip-leading-space, 16px);--_trailing-space: var(--md-input-chip-trailing-space, 16px);--_icon-label-space: var(--md-input-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-input-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-input-chip-with-trailing-icon-trailing-space, 8px)}:host([avatar]){--_container-shape-start-start: var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end: var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end: var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start: var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors: active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}
`,on=n`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`,sn=n`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}
`,nn=n`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;let an=class extends en{};an.styles=[sn,nn,on,rn],an=t([dt("md-input-chip")],an);const ln=(t,e,i)=>{const r=new Map;for(let o=e;o<=i;o++)r.set(t[o],o);return r},cn=St(class extends zt{constructor(t){if(super(t),t.type!==$t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let r;void 0===i?i=e:void 0!==e&&(r=e);const o=[],s=[];let n=0;for(const e of t)o[n]=r?r(e,n):n,s[n]=i(e,n),n++;return{values:s,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,r]){const o=(t=>t._$AH)(t),{values:s,keys:n}=this.dt(e,i,r);if(!Array.isArray(o))return this.ut=n,s;const a=this.ut??=[],l=[];let c,d,h=0,u=o.length-1,p=0,m=s.length-1;for(;h<=u&&p<=m;)if(null===o[h])h++;else if(null===o[u])u--;else if(a[h]===n[p])l[p]=Gt(o[h],s[p]),h++,p++;else if(a[u]===n[m])l[m]=Gt(o[u],s[m]),u--,m--;else if(a[h]===n[m])l[m]=Gt(o[h],s[m]),Ht(t,l[m+1],o[h]),h++,m--;else if(a[u]===n[p])l[p]=Gt(o[u],s[p]),Ht(t,o[h],o[u]),u--,p++;else if(void 0===c&&(c=ln(n,p,m),d=ln(a,h,u)),c.has(a[h]))if(c.has(a[u])){const e=d.get(n[p]),i=void 0!==e?o[e]:null;if(null===i){const e=Ht(t,o[h]);Gt(e,s[p]),l[p]=e}else l[p]=Gt(i,s[p]),Ht(t,o[h],i),o[e]=null;p++}else Wt(o[u]),u--;else Wt(o[h]),h++;for(;p<=m;){const e=Ht(t,l[m+1]);Gt(e,s[p]),l[p++]=e}for(;h<=u;){const t=o[h++];null!==t&&Wt(t)}return this.ut=n,Vt(t,l),G}}),dn=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];function hn(t){const e=t.split(".");return e?.[e.length-1]||""}function un(t){return"pdf"===t.toLowerCase()?new URL(new URL("BrwlMowD.png",import.meta.url).href).href:new URL(new URL("Ciwo_vsG.png",import.meta.url).href).href}function pn(t,e){if(t?.CdnFileName&&!e)return`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}?d=${encodeURIComponent(`${t.Name}.${t.Extension}`)}`}function mn(t,e){if(t?.CdnFileName)return t?.PreviewSizes&&t?.PreviewSizes?.split(",").includes(String(e))&&"svg"!==t.Extension?`https://cdn.leavitt.com/${t.CdnFileName}-${e}.${t.PreviewExtension}`:function(t){return"png"===t?.Extension||"jpg"===t?.Extension||"jpeg"===t?.Extension||"gif"===t?.Extension||"svg"===t?.Extension||"webp"===t?.Extension}(t)?`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}`:void 0}let fn=class extends lt{#Ne=[];get files(){return this.#Ne}set files(t){this.#Ne=t}#je=!1;get isOver(){return this.#je}set isOver(t){this.#je=t}#De=void 0;get previewSrc(){return this.#De}set previewSrc(t){this.#De=t}#Le;get input(){return this.#Le}set input(t){this.#Le=t}#Fe;get imagePreviewDialog(){return this.#Fe}set imagePreviewDialog(t){this.#Fe=t}#Ue;get cropperDialog(){return this.#Ue}set cropperDialog(t){this.#Ue=t}#He;get confirmDeleteDialog(){return this.#He}set confirmDeleteDialog(t){this.#He=t}#Ge;get chipMultiSelect(){return this.#Ge}set chipMultiSelect(t){this.#Ge=t}#qe=[];#Ve="image/*,.pdf";get accept(){return this.#Ve}set accept(t){this.#Ve=t}#We=!1;get multiple(){return this.#We}set multiple(t){this.#We=t}#ae=!1;get required(){return this.#ae}set required(t){this.#ae=t}#d=!1;get disabled(){return this.#d}set disabled(t){this.#d=t}#Ye=!1;get confirmDelete(){return this.#Ye}set confirmDelete(t){this.#Ye=t}#Xe="Confirm delete";get confirmDeleteHeader(){return this.#Xe}set confirmDeleteHeader(t){this.#Xe=t}#Je="Are you sure you would like to delete this attachment?";get confirmDeleteText(){return this.#Je}set confirmDeleteText(t){this.#Je=t}#Ke="Add attachment";get addButtonLabel(){return this.#Ke}set addButtonLabel(t){this.#Ke=t}#se="Attachments";get label(){return this.#se}set label(t){this.#se=t}#ce;get supportingText(){return this.#ce}set supportingText(t){this.#ce=t}#ne="No attachments";get noItemsText(){return this.#ne}set noItemsText(t){this.#ne=t}#xe;get options(){return this.#xe}set options(t){this.#xe=t}#ye;get forcePNGOutput(){return this.#ye}set forcePNGOutput(t){this.#ye=t}#oe=!1;get filled(){return this.#oe}set filled(t){this.#oe=t}#Qe=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];get croppableImageFormats(){return this.#Qe}set croppableImageFormats(t){this.#Qe=t}getFiles(){return this.files}setFiles(...t){this.files=[...t].map(t=>({file:new File([""],t.fileName),previewSrc:t.previewSrc,downloadSrc:t.downloadSrc,id:t.id})),this.#qe=structuredClone(this.files)}setFilesFromDatabaseAttachments(...t){this.files=[...t].filter(t=>t.Name&&t.Extension).map(t=>({id:t.Id,file:new File([""],`${t?.Name}.${t?.Extension}`),previewSrc:mn(t,512),downloadSrc:pn(t)})),this.#qe=structuredClone(this.files)}checkValidity(){return this.chipMultiSelect.checkValidity()}reportValidity(){return this.chipMultiSelect.reportValidity()}hasChanges(){return JSON.stringify(this.#qe)!==JSON.stringify(this.files)}async reset(){this.#qe=[],this.previewSrc=void 0,this.files=[],this.isOver=!1,await this.updateComplete,this.chipMultiSelect.reset()}async handleNewFile(t){let e=!1;for(let i=0;i<(t?.length??0);i++){const r=t?.item(i);if(r){const t=this.croppableImageFormats.some(t=>r.name?.toLowerCase()?.endsWith(t?.toLowerCase()));if(t){"cropped"===await this.cropperDialog.open(URL.createObjectURL(r),r.name,async(t,e)=>{const i={file:t,previewSrc:e??void 0};this.multiple?this.files=[...this.files,i]:this.files=[i]})&&(this.reportValidity(),e=!0),await Ci(500)}else{const t={file:r},i=dn.some(t=>r.name.endsWith(t));if(i)try{const e=await this.toBase64(r);"string"==typeof e&&(t.previewSrc=e??void 0)}catch{}this.multiple?this.files=[...this.files,t]:this.files=[t],this.reportValidity(),e=!0}}}e&&this.#Ze()}#ti=null;#ei(t){const e=this.files.findIndex(e=>e===t);this.files.splice(e,1),this.requestUpdate("files"),this.reportValidity(),this.#Ze()}toBase64(t){return new Promise((e,i)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(r.result),r.onerror=t=>i(t)})}#Ze(){this.dispatchEvent(new Event("change"))}static{this.styles=[Cs,n`
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
    `]}render(){return jt`
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
        <${this.filled?Rt`md-filled-tonal-button`:Rt`md-outlined-button`}
          ?hidden=${!this.multiple&&!!this.files.length}
          .disabled=${this.disabled}
          @click=${()=>{this.disabled||(this.input.value="",this.input.click())}}
          >${this.addButtonLabel} <md-icon slot="icon">add</md-icon>
        </${this.filled?Rt`md-filled-tonal-button`:Rt`md-outlined-button`}>
        ${cn(this.files,t=>t.file.name,t=>jt`<md-input-chip
              label=${Mi(t.file.name)}
              ?closeable=${!this.disabled}
              ?remove-only=${!t.previewSrc&&!t.downloadSrc}
              @remove=${async e=>{e.preventDefault(),this.confirmDelete?(this.#ti=t,this.confirmDeleteDialog?.show()):this.#ei(t)}}
              @click=${()=>{(t.previewSrc||t.downloadSrc)&&this.imagePreviewDialog.open(t.previewSrc||un(hn(t.file.name)),t.downloadSrc,t.file.name)}}
            >
              <img draggable="false" slot="icon" src=${t.previewSrc||un(hn(t.file.name))} />
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
            @click=${()=>{this.#ti&&this.#ei(this.#ti),this.confirmDeleteDialog.close()}}
            >Confirm</md-text-button
          >
        </div>
      </md-dialog>
    `}};t([pt({type:Array})],fn.prototype,"files",null),t([pt({type:Boolean,reflect:!0,attribute:"is-over"})],fn.prototype,"isOver",null),t([pt({type:String})],fn.prototype,"previewSrc",null),t([vt("input")],fn.prototype,"input",null),t([vt("image-preview-dialog")],fn.prototype,"imagePreviewDialog",null),t([vt("crop-and-save-image-dialog")],fn.prototype,"cropperDialog",null),t([vt("md-dialog[confirm-delete]")],fn.prototype,"confirmDeleteDialog",null),t([vt("titanium-chip-multi-select")],fn.prototype,"chipMultiSelect",null),t([pt({type:String})],fn.prototype,"accept",null),t([pt({type:Boolean})],fn.prototype,"multiple",null),t([pt({type:Boolean})],fn.prototype,"required",null),t([pt({type:Boolean,reflect:!0})],fn.prototype,"disabled",null),t([pt({type:Boolean})],fn.prototype,"confirmDelete",null),t([pt({type:String})],fn.prototype,"confirmDeleteHeader",null),t([pt({type:String})],fn.prototype,"confirmDeleteText",null),t([pt({type:String})],fn.prototype,"addButtonLabel",null),t([pt({type:String})],fn.prototype,"label",null),t([pt({type:String})],fn.prototype,"supportingText",null),t([pt({type:String})],fn.prototype,"noItemsText",null),t([pt({type:Object})],fn.prototype,"options",null),t([pt({type:Boolean,reflect:!0,attribute:"force-png"})],fn.prototype,"forcePNGOutput",null),t([pt({type:Boolean,attribute:"filled"})],fn.prototype,"filled",null),t([pt({type:Array})],fn.prototype,"croppableImageFormats",null),fn=t([dt("titanium-smart-attachment-input")],fn);class vn extends CustomEvent{static{this.eventType="pending-state"}constructor(t){super(vn.eventType,{bubbles:!0,composed:!0,detail:{promise:t}})}}class gn{async _getBearerTokenAsync(){return await(mr()?.getAccessTokenAsync())??null}}class bn{constructor(t,e){this.status=t.status,this.headers=t.headers,this.blob=e}}class yn{constructor(){this.type=null,this.shortType=null}}class xn{constructor(t=new yn){this._odataInfo=t}}class wn{static#ii(t){const e=new Map;return Object.keys(t).filter(t=>0===t.indexOf("@odata")).forEach(i=>e.set(i.replace("@odata.",""),t[i])),e}#ri(t){return null===t.value||void 0===t.value||Array.isArray(t.value)?t:t.value}static#oi(t){return Array.isArray(t.value)?t.value:[]}get odataCount(){return this.metadata.has("count")?this.metadata.get("count"):0}count(){return this.entities.length}firstOrDefault(){return this.count()>0?this.entities[0]:null}toList(){return this.entities}constructor(t,e){this.status=t.status,this.headers=t.headers,this.metadata=wn.#ii(e),this.entities=wn.#oi(e),this.entity=0===this.entities.length?this.#ri(e):null}get containsMultipleEntities(){return this.entities.length>0}}const _n=new Map;function kn(t,e,i){const r=e||new FormData;let o;for(const e in t)if(Object.hasOwn(t,e)){if(void 0===t[e])continue;o=i?t instanceof Array&&t[e]instanceof File?i:t instanceof Array?i+"["+e+"]":i+"."+e:e,"object"!=typeof t[e]||t[e]instanceof File?r.append(o,t[e]):kn(t[e],r,o)}return r}_n.set(0,"CORS Error"),_n.set(200,"OK"),_n.set(201,"Created"),_n.set(202,"Accepted"),_n.set(203,"Non-Authoritative Information"),_n.set(204,"No Content"),_n.set(205,"Reset Content"),_n.set(206,"Partial Content"),_n.set(300,"Multiple Choices"),_n.set(301,"Moved Permanently"),_n.set(302,"Found"),_n.set(303,"See Other"),_n.set(304,"Not Modified"),_n.set(305,"Use Proxy"),_n.set(306,"Unused"),_n.set(307,"Temporary Redirect"),_n.set(400,"Bad Request"),_n.set(401,"Unauthorized"),_n.set(402,"Payment Required"),_n.set(403,"Forbidden"),_n.set(404,"Not Found"),_n.set(405,"Method Not Allowed"),_n.set(406,"Not Acceptable"),_n.set(407,"Proxy Authentication Required"),_n.set(408,"Request Timeout"),_n.set(409,"Conflict"),_n.set(410,"Gone"),_n.set(411,"Length Required"),_n.set(412,"Precondition Required"),_n.set(413,"Request Entry Too Large"),_n.set(414,"Request-URI Too Long"),_n.set(415,"Unsupported Media Type"),_n.set(416,"Requested Range Not Satisfiable"),_n.set(417,"Expectation Failed"),_n.set(418,"I'm a teapot"),_n.set(429,"Too Many Requests"),_n.set(500,"Internal Server Error"),_n.set(501,"Not Implemented"),_n.set(502,"Bad Gateway"),_n.set(503,"Service Unavailable"),_n.set(504,"Gateway Timeout"),_n.set(505,"HTTP Version Not Supported");class $n{constructor(t,e){this.headers={},this.baseUrl="https://api2.leavitt.com/",this.#si=t,this.addHeader("Content-Type","application/json"),this.#ni=e?.appNameHeaderKey?e?.appNameHeaderKey:"X-LGAppName",this.addHeader(this.#ni,"General")}#si;#ni;addHeader(t,e){this.headers[t]=e}deleteHeader(t){delete this.headers[t]}#ai(t){return this.baseUrl?.endsWith("/")&&t?.startsWith("/")&&zi&&alert(`API Service Warning: Malformed url, double slashes present. \r\n\r\n${this.baseUrl}${t}`),`${this.baseUrl}${t}`}async uploadFile(t,e,i,r){try{if(r?.abortController?.signal&&r?.abortController.signal.aborted)throw new Sn;const o=4;if(!e||!e.name)throw new Error("ArgumentException: Invalid file passed to uploadFile.");const s=new XMLHttpRequest;s.onabort=function(){throw new Sn},r?.abortController?.signal&&(r?.abortController.signal.addEventListener("abort",()=>s.abort()),s.onreadystatechange=function(){s.readyState===o&&r?.abortController?.signal.removeEventListener("abort",()=>s.abort())}),s.upload.addEventListener("progress",t=>{i(t,s)}),s.open("POST",this.#ai(t),!0);const n={...this.headers},a=await this.#si._getBearerTokenAsync();null!==a&&(n.Authorization=`Bearer ${a}`),n["X-LGAttachmentName"]=e.name;for(const t in n)s.setRequestHeader(t,n[t]);return new Promise((i,o)=>{s.addEventListener("loadend",()=>{try{const e={text:()=>s.response,status:s.status};if("blob"===r?.responseType){const r=this.#li(e,"UPLOAD",t);return i(r)}{const r=this.#ci(e,"UPLOAD",t);return i(r)}}catch(t){return o(t)}},!1),s.send(e)})}catch(e){return Promise.reject(this.#di(e,"UPLOAD",t))}}async postAsync(t,e={},i){e instanceof xn&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers};i?.sendAsFormData&&delete r["Content-Type"];const o=await this.#si._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#ai(t),{method:"POST",body:i?.sendAsFormData?kn(e):JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#di(e,"POST",t))}return"blob"===i?.responseType?await this.#li(s,"POST",t):await this.#ci(s,"POST",t)}async patchAsync(t,e,i){e instanceof xn&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#si._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#ai(t),{method:"PATCH",body:JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#di(e,"PATCH",t))}return"blob"===i?.responseType?await this.#li(s,"PATCH",t):await this.#ci(s,"PATCH",t)}async patchReturnDtoAsync(t,e,i){e instanceof xn&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#si._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#ai(t),{method:"PATCH",body:JSON.stringify(e),headers:{...r,Prefer:"return=representation"},signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#di(e,"PATCH",t))}return"blob"===i?.responseType?await this.#li(s,"PATCH",t):await this.#ci(s,"PATCH",t)}async deleteAsync(t,e){const i={...this.headers},r=await this.#si._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#ai(t),{method:"DELETE",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#di(e,"DELETE",t))}return"blob"===e?.responseType?await this.#li(o,"DELETE",t):await this.#ci(o,"DELETE",t)}async getAsync(t,e){const i={...this.headers},r=await this.#si._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#ai(t),{method:"GET",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#di(e,"GET",t))}return"blob"===e?.responseType?await this.#li(o,"GET",t):await this.#ci(o,"GET",t)}#hi(t,e,i){return i.indexOf(t)===e}async aggregateResponses(t){const e=new Map,i=[],r=t.map(async t=>{try{await t()}catch(t){i.push(t);const r=t.message;e.set(r,(e.get(r)??0)+1)}});if(await Promise.allSettled(r),e.size>0){const r={type:"HttpError",action:i.map(t=>t.action).filter(this.#hi).join(", "),message:`${i.length} of ${t.length} actions failed`,detail:Array.from(e.keys()).map(t=>`${e.get(t)} error(s):  ${t}`).join("\n"),baseUrl:i.map(t=>t.baseUrl).filter(this.#hi).join(", "),path:i.map(t=>t.path).filter(this.#hi).join(", ")};return Promise.reject(r)}}#di(t,e,i,r=void 0){const o=t?.message?.includes("Failed to fetch")?"Network error. Check your connection and try again.":"AbortError"===t?.name?"Abort error. Request has been aborted.":t?.message||t;return{type:"HttpError",statusCode:r,baseUrl:this.baseUrl,message:o,action:e,path:i}}async#li(t,e,i){try{if(0===t.status||t.status>=400&&t.status<=600){const r=await t.text(),o=r.length?JSON.parse(r):{},s=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||_n.get(t.status)||"unknown";o?.details&&console.warn(o.details);const n={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:s,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(n)}{const e=await t.blob();return Promise.resolve(new bn(t,e))}}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}async#ci(t,e,i){const r=await t.text();let o;try{if(o=r.length?JSON.parse(r):{},0===t.status||t.status>=400&&t.status<=600){const r=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||_n.get(t.status)||"unknown";o?.details&&console.warn(o.details);const s={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:r,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(s)}return Promise.resolve(new wn(t,o))}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}}class Sn extends Error{constructor(){super(...arguments),this.name="AbortError",this.message="Aborted"}}function zn(t){const e=window.location.pathname,i=i=>{new URL(i.destination.url).pathname!==e&&t?.open&&t.close("navigation-close")};window.navigation.addEventListener("navigate",i),t.i=i}function An(t){const e=t.i;e&&(window.navigation.removeEventListener("navigate",e),t.i=void 0)}let Cn=class extends(Ai(lt)){#te;get userManager(){return this.#te}set userManager(t){this.#te=t}#A;get dialog(){return this.#A}set dialog(t){this.#A=t}#ui;get snackbar(){return this.#ui}set snackbar(t){this.#ui=t}#pi;get textArea(){return this.#pi}set textArea(t){this.#pi=t}#mi;get imageInput(){return this.#mi}set imageInput(t){this.#mi=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.imageInput?.reset(),this.textArea?.reset()}async#fi(){if(!this.textArea.reportValidity()||this.isLoading)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Bug",Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map(t=>t.file)};try{const e=new $n(this.userManager||new gn);e.baseUrl=zi?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",e.addHeader("X-LGAppName","IssueTracking");const i=e.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new vn(i)),this.loadWhile(i);if(!(await i).entity)throw new Error("Error submitting problem. Please try again.");document.dispatchEvent(new wi("",{overrideTemplate:H`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset(),this.dialog.close("done")}catch(t){this.dispatchEvent(new wi(t))}}static{this.styles=[ks,Cs,n`
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
    `]}render(){return H`
      <md-dialog
        @open=${t=>{zn(t.target),ws(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return An(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
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
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#fi()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};t([pt({type:Object})],Cn.prototype,"userManager",null),t([vt("md-dialog")],Cn.prototype,"dialog",null),t([vt("titanium-snackbar-stack")],Cn.prototype,"snackbar",null),t([vt("md-outlined-text-field")],Cn.prototype,"textArea",null),t([vt("titanium-smart-attachment-input")],Cn.prototype,"imageInput",null),Cn=t([dt("report-a-problem-dialog")],Cn);let Mn=class extends(Ai(lt)){#te;get userManager(){return this.#te}set userManager(t){this.#te=t}#A;get dialog(){return this.#A}set dialog(t){this.#A=t}#ui;get snackbar(){return this.#ui}set snackbar(t){this.#ui=t}#pi;get textArea(){return this.#pi}set textArea(t){this.#pi=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.textArea?.reset()}async#fi(){if(!this.textArea.reportValidity()||this.isLoading||!this.textArea.value)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Feedback",Description:this.textArea.value,Attachments:[]};try{if(this.userManager){const e=new $n(this.userManager||new gn);e.baseUrl=zi?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",e.addHeader("X-LGAppName","IssueTracking");const i=e.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new vn(i)),this.loadWhile(i);if(!(await i).entity)throw new Error("Error submitting feedback. Please try again.");document.dispatchEvent(new wi("We appreciate your input, and we will promptly conduct a review!")),this.reset(),this.dialog.close("done")}}catch(t){this.dispatchEvent(new wi(t))}}static{this.styles=[ks,Cs,n`
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
    `]}render(){return H`
      <md-dialog
        @open=${t=>{zn(t.target),ws(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return An(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
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
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#fi()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};t([pt({type:Object})],Mn.prototype,"userManager",null),t([vt("md-dialog")],Mn.prototype,"dialog",null),t([vt("titanium-snackbar-stack")],Mn.prototype,"snackbar",null),t([vt("md-outlined-text-field")],Mn.prototype,"textArea",null),Mn=t([dt("provide-feedback-dialog")],Mn);const En=re(lt);class Tn extends En{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:t}=this;return H`
      <div
        class="progress ${At(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${t||q}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?q:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}t([pt({type:Number})],Tn.prototype,"value",void 0),t([pt({type:Number})],Tn.prototype,"max",void 0),t([pt({type:Boolean})],Tn.prototype,"indeterminate",void 0),t([pt({type:Boolean,attribute:"four-color"})],Tn.prototype,"fourColor",void 0);class Pn extends Tn{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const t=100*(1-this.value/this.max);return H`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${t}></circle>
      </svg>
    `}renderIndeterminateContainer(){return H` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`}}const In=n`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;let On=class extends Pn{};On.styles=[In],On=t([dt("md-circular-progress")],On);let Bn=class extends lt{#vi;get pendingStateElement(){return this.#vi}set pendingStateElement(t){this.#vi=t}#g;get open(){return this.#g}set open(t){this.#g=t}#gi;get closed(){return this.#gi}set closed(t){this.#gi=t}#bi;#yi;#xi=75;#wi=400;#_i;#ki=0;firstUpdated(){(this.pendingStateElement??this).addEventListener(vn.eventType,async t=>{t.stopPropagation(),this.#$i(),this.#ki++;try{await t.detail.promise}catch{}finally{this.#ki--,0===this.#ki&&this.#Si()}})}#$i(){window.clearTimeout(this.#bi),window.clearTimeout(this.#yi),this.#bi=window.setTimeout(()=>{this.#_i=performance.now(),this.parentElement?.setAttribute("inert",""),this.open=!0,this.closed=!1},this.#xi)}#Si(){window.clearTimeout(this.#bi);const t=performance.now()-this.#_i,e=Math.max(this.#wi-t,0);this.#yi=window.setTimeout(()=>{this.open=!1,this.closed=!0,this.parentElement?.removeAttribute("inert")},e)}static{this.styles=n`
    :host {
      display: none;
      opacity: 0;

      position: absolute;
      inset: 0;

      z-index: 1000;
      background-color: rgb(from var(--md-sys-color-scrim, #000) r g b / 0.52);
      backdrop-filter: blur(2px);

      transition:
        display 0.2s ease,
        opacity 0.2s ease;
      transition-behavior: allow-discrete;
    }

    :host([open]) {
      display: grid;
      opacity: 1;

      @starting-style {
        opacity: 0;
      }
    }

    md-circular-progress {
      place-self: center;
    }
  `}render(){return H` <md-circular-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-circular-progress>`}};t([pt({type:Object})],Bn.prototype,"pendingStateElement",null),t([pt({type:Boolean,reflect:!0})],Bn.prototype,"open",null),t([pt({type:Boolean,reflect:!0})],Bn.prototype,"closed",null),Bn=t([dt("titanium-circle-loading-indicator")],Bn);let Rn=class extends Event{constructor(t,e,i,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=i,this.subscribe=r??!1}};let Nn=class{constructor(t,e,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Rn(this.context,this.host,this.t,this.subscribe))}};class jn{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}let Dn=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}},Ln=class extends jn{constructor(t,e,i){super(void 0!==e.context?e.initialValue:i),this.onContextRequest=t=>{if(t.context!==this.context)return;const e=t.contextTarget??t.composedPath()[0];e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{if(t.context!==this.context)return;if((t.contextTarget??t.composedPath()[0])===this.host)return;const e=new Set;for(const[t,{consumerHost:i}]of this.subscriptions)e.has(t)||(e.add(t),i.dispatchEvent(new Rn(this.context,i,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Dn(this.context,this.host))}};function Fn({context:t}){return(e,i)=>{const r=new WeakMap;if("object"==typeof i)return{get(){return e.get.call(this)},set(t){return r.get(this).setValue(t),e.set.call(this,t)},init(e){return r.set(this,new Ln(this,{context:t,initialValue:e})),e}};{e.constructor.addInitializer(e=>{r.set(e,new Ln(e,{context:t}))});const o=Object.getOwnPropertyDescriptor(e,i);let s;if(void 0===o){const t=new WeakMap;s={get(){return t.get(this)},set(e){r.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=o.set;s={...o,set(e){r.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,i,s)}}}const Un="mainMenuPositionContext";let Hn=class extends lt{#zi;get scrollContainer(){return this.#zi}set scrollContainer(t){this.#zi=t}#vi;get pendingStateElement(){return this.#vi}set pendingStateElement(t){this.#vi=t}static{this.styles=[n`
      :host {
        display: grid;
        border-radius: 28px;
        background-color: var(--md-sys-color-surface-container-lowest);
        height: calc(100dvh - (64px + 12px));
        box-sizing: border-box;
        overflow: hidden;

        position: relative;

        margin-right: 16px;
      }

      :host([main-menu-position='drawer']) {
        border-radius: 0;
        height: calc(100dvh - (54px + 12px));
        margin-right: 0;
      }

      scroll-container {
        display: grid;
        overflow-y: auto;

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        border-radius: 28px;
      }
    `]}render(){return H`
      <titanium-circle-loading-indicator part="loading-indicator" .pendingStateElement=${this.pendingStateElement}></titanium-circle-loading-indicator>
      <scroll-container part="scroll-container"><slot></slot></scroll-container>
    `}};t([vt("scroll-container")],Hn.prototype,"scrollContainer",null),t([pt({type:Object})],Hn.prototype,"pendingStateElement",null),t([function({context:t,subscribe:e}){return(i,r)=>{"object"==typeof r?r.addInitializer(function(){new Nn(this,{context:t,callback:t=>{i.set.call(this,t)},subscribe:e})}):i.constructor.addInitializer(i=>{new Nn(i,{context:t,callback:t=>{i[r]=t},subscribe:e})})}}({context:Un,subscribe:!0}),pt({type:String,reflect:!0,attribute:"main-menu-position"})],Hn.prototype,"mainMenuPosition",void 0),Hn=t([dt("leavitt-app-main-content-container")],Hn);let Gn=class extends lt{#Ai="640px";get maxWidth(){return this.#Ai}set maxWidth(t){this.#Ai=t}static{this.styles=[n`
      :host {
        display: grid;
        padding: 12px 16px 0 16px;
        width: 100%;
        justify-self: center;
        box-sizing: border-box;

        align-content: start;
      }
    `]}render(){return H`
      <style>
        :host {
          max-width: ${this.maxWidth};
        }
      </style>
      <slot></slot>
    `}};t([pt({type:String,attribute:"max-width"})],Gn.prototype,"maxWidth",null),Gn=t([dt("leavitt-app-width-limiter")],Gn);const qn="generated",Vn="pointerleave",Wn="pointermove",Yn="touchend",Xn="tsParticles - Error",Jn=100,Kn=.5,Qn=1e3,Zn=0,ta=0,ea=0,ia=1,ra=0,oa=0,sa=1,na="random",aa=2*Math.PI,la="true",ca="false",da="canvas",ha=255,ua=360,pa=100,ma=100,fa=.25,va=255;var ga;function ba(t){return"boolean"==typeof t}function ya(t){return"string"==typeof t}function xa(t){return"number"==typeof t}function wa(t){return"object"==typeof t&&null!==t}function _a(t){return Array.isArray(t)}function ka(t){return null==t}!function(t){t.bottom="bottom",t.bottomLeft="bottom-left",t.bottomRight="bottom-right",t.left="left",t.none="none",t.right="right",t.top="top",t.topLeft="top-left",t.topRight="top-right",t.outside="outside",t.inside="inside"}(ga||(ga={}));class $a{constructor(t,e,i){if(this._updateFromAngle=(t,e)=>{this.x=Math.cos(t)*e,this.y=Math.sin(t)*e},!xa(t)&&t){this.x=t.x,this.y=t.y;const e=t;this.z=e.z?e.z:ea}else{if(void 0===t||void 0===e)throw new Error(`${Xn} Vector3d not initialized correctly`);this.x=t,this.y=e,this.z=i??ea}}static get origin(){return $a.create(Zn,ta,ea)}get angle(){return Math.atan2(this.y,this.x)}set angle(t){this._updateFromAngle(t,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(t){this._updateFromAngle(this.angle,t)}static clone(t){return $a.create(t.x,t.y,t.z)}static create(t,e,i){return new $a(t,e,i)}add(t){return $a.create(this.x+t.x,this.y+t.y,this.z+t.z)}addTo(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}copy(){return $a.clone(this)}distanceTo(t){return this.sub(t).length}distanceToSq(t){return this.sub(t).getLengthSq()}div(t){return $a.create(this.x/t,this.y/t,this.z/t)}divTo(t){this.x/=t,this.y/=t,this.z/=t}getLengthSq(){return this.x**2+this.y**2}mult(t){return $a.create(this.x*t,this.y*t,this.z*t)}multTo(t){this.x*=t,this.y*=t,this.z*=t}normalize(){const t=this.length;0!=t&&this.multTo(1/t)}rotate(t){return $a.create(this.x*Math.cos(t)-this.y*Math.sin(t),this.x*Math.sin(t)+this.y*Math.cos(t),ea)}setTo(t){this.x=t.x,this.y=t.y;const e=t;this.z=e.z?e.z:ea}sub(t){return $a.create(this.x-t.x,this.y-t.y,this.z-t.z)}subFrom(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}}class Sa extends $a{constructor(t,e){super(t,e,ea)}static get origin(){return Sa.create(Zn,ta)}static clone(t){return Sa.create(t.x,t.y)}static create(t,e){return new Sa(t,e)}}let za=Math.random;const Aa=t=>requestAnimationFrame(t),Ca=t=>cancelAnimationFrame(t);function Ma(){return Ea(za(),0,1-Number.EPSILON)}function Ea(t,e,i){return Math.min(Math.max(t,e),i)}function Ta(t){const e=Oa(t);let i=Ia(t);return e===i&&(i=0),Ma()*(e-i)+i}function Pa(t){return xa(t)?t:Ta(t)}function Ia(t){return xa(t)?t:t.min}function Oa(t){return xa(t)?t:t.max}function Ba(t,e){if(t===e||void 0===e&&xa(t))return t;const i=Ia(t),r=Oa(t);return void 0!==e?{min:Math.min(i,e),max:Math.max(r,e)}:Ba(i,r)}function Ra(t,e){const i=t.x-e.x,r=t.y-e.y;return{dx:i,dy:r,distance:Math.sqrt(i**2+r**2)}}function Na(t,e){return Ra(t,e).distance}function ja(t){return t*Math.PI/180}function Da(t){return t?t.endsWith("%")?parseFloat(t)/Jn:parseFloat(t):1}var La,Fa,Ua,Ha,Ga,qa;!function(t){t.auto="auto",t.increase="increase",t.decrease="decrease",t.random="random"}(La||(La={})),function(t){t.increasing="increasing",t.decreasing="decreasing"}(Fa||(Fa={})),function(t){t.none="none",t.max="max",t.min="min"}(Ua||(Ua={})),function(t){t.bottom="bottom",t.left="left",t.right="right",t.top="top"}(Ha||(Ha={})),function(t){t.precise="precise",t.percent="percent"}(Ga||(Ga={})),function(t){t.max="max",t.min="min",t.random="random"}(qa||(qa={}));const Va={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function Wa(){return Va}function Ya(){return"undefined"==typeof window||!window||void 0===window.document||!window.document}function Xa(t){if(!Ya()&&"undefined"!=typeof matchMedia)return matchMedia(t)}function Ja(t,e,i=!0){return t[void 0!==e&&i?e%t.length:function(t){return Math.floor(Ma()*t.length)}(t)]}function Ka(t,e,i,r,o){return function(t,e,i,r){let o=!0;r&&r!==Ha.bottom||(o=t.top<e.height+i.x);!o||r&&r!==Ha.left||(o=t.right>i.x);!o||r&&r!==Ha.right||(o=t.left<e.width+i.y);!o||r&&r!==Ha.top||(o=t.bottom>i.y);return o}(Qa(t,r??0),e,i,o)}function Qa(t,e){return{bottom:t.y+e,left:t.x-e,right:t.x+e,top:t.y-e}}function Za(t,...e){for(const i of e){if(null==i)continue;if(!wa(i)){t=i;continue}const e=Array.isArray(i);!e||!wa(t)&&t&&Array.isArray(t)?e||!wa(t)&&t&&!Array.isArray(t)||(t={}):t=[];for(const e in i){if("__proto__"===e)continue;const r=i[e],o=t;o[e]=wa(r)&&Array.isArray(r)?r.map(t=>Za(o[e],t)):Za(o[e],r)}}return t}function tl(t,e){return _a(t)?t.map((t,i)=>e(t,i)):e(t,0)}function el(t,e,i){return _a(t)?Ja(t,e,i):t}function il(t,e){const i=t.value,r=t.animation,o={delayTime:Pa(r.delay)*Qn,enable:r.enable,value:Pa(t.value)*e,max:Oa(i)*e,min:Ia(i)*e,loops:0,maxLoops:Pa(r.count),time:0};if(r.enable){switch(o.decay=1-Pa(r.decay),r.mode){case La.increase:o.status=Fa.increasing;break;case La.decrease:o.status=Fa.decreasing;break;case La.random:o.status=Ma()>=Kn?Fa.increasing:Fa.decreasing}const t=r.mode===La.auto;switch(r.startValue){case qa.min:o.value=o.min,t&&(o.status=Fa.increasing);break;case qa.max:o.value=o.max,t&&(o.status=Fa.decreasing);break;case qa.random:default:o.value=Ta(o),t&&(o.status=Ma()>=Kn?Fa.increasing:Fa.decreasing)}}return o.initialValue=o.value,o}function rl(t,e){return function(t,e){if(t.mode!==Ga.percent){const{mode:e,...i}=t;return i}return"x"in t?{x:t.x/Jn*e.width,y:t.y/Jn*e.height}:{width:t.width/Jn*e.width,height:t.height/Jn*e.height}}(t,e)}function ol(t,e,i,r,o){if(t.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const s=(e.velocity??0)*o.factor,n=e.min,a=e.max,l=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=o.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case Fa.increasing:e.value>=a?(e.status=Fa.decreasing,e.loops||(e.loops=0),e.loops++):e.value+=s;break;case Fa.decreasing:e.value<=n?(e.status=Fa.increasing,e.loops||(e.loops=0),e.loops++):e.value-=s}e.velocity&&1!==l&&(e.velocity*=l),function(t,e,i,r,o){switch(e){case Ua.max:i>=o&&t.destroy();break;case Ua.min:i<=r&&t.destroy()}}(t,r,e.value,n,a),t.destroyed||(e.value=Ea(e.value,n,a))}}const sl=function(t){const e=new Map;return(...i)=>{const r=JSON.stringify(i);if(e.has(r))return e.get(r);const o=t(...i);return e.set(r,o),o}}(function(t){const e=document.createElement("div").style,i={width:"100%",height:"100%",margin:"0",padding:"0",borderWidth:"0",position:"fixed",zIndex:t.toString(10),"z-index":t.toString(10),top:"0",left:"0"};for(const t in i){const r=i[t];e.setProperty(t,r)}return e});var nl,al,ll,cl,dl,hl,ul,pl,ml,fl,vl,gl;function bl(t,e,i,r=!0){if(!e)return;const o=ya(e)?{value:e}:e;if(ya(o.value))return yl(t,o.value,i,r);if(_a(o.value))return bl(t,{value:Ja(o.value,i,r)});for(const e of t.colorManagers.values()){const t=e.handleRangeColor(o);if(t)return t}}function yl(t,e,i,r=!0){if(!e)return;const o=ya(e)?{value:e}:e;if(ya(o.value))return o.value===na?function(){const t=0,e=256;return{b:Math.floor(Ta(Ba(t,e))),g:Math.floor(Ta(Ba(t,e))),r:Math.floor(Ta(Ba(t,e)))}}():function(t,e){return function(t,e){if(e)for(const i of t.colorManagers.values())if(e.startsWith(i.stringPrefix))return i.parseString(e)}(t,e)}(t,o.value);if(_a(o.value))return yl(t,{value:Ja(o.value,i,r)});for(const e of t.colorManagers.values()){const t=e.handleColor(o);if(t)return t}}function xl(t,e,i,r=!0){const o=bl(t,e,i,r);return o?function(t){const e=t.r/ha,i=t.g/ha,r=t.b/ha,o=Math.max(e,i,r),s=Math.min(e,i,r),n={h:0,l:(o+s)*Kn,s:0};o!==s&&(n.s=n.l<Kn?(o-s)/(o+s):(o-s)/(2-o-s),n.h=e===o?(i-r)/(o-s):n.h=i===o?2+(r-e)/(o-s):4+(e-i)/(o-s));n.l*=ma,n.s*=pa,n.h*=60,n.h<0&&(n.h+=ua);n.h>=ua&&(n.h-=ua);return n}(o):void 0}function wl(t){const e=(t.h%ua+ua)%ua,i=Math.max(0,Math.min(pa,t.s)),r=Math.max(0,Math.min(ma,t.l)),o=e/ua,s=i/pa,n=r/ma;if(0===i){const t=Math.round(n*va);return{r:t,g:t,b:t}}const a=(t,e,i)=>{if(i<0&&i++,i>1&&i--,6*i<1)return t+6*(e-t)*i;if(2*i<1)return e;if(3*i<2){return t+(e-t)*(2/3-i)*6}return t},l=n<Kn?n*(1+s):n+s-n*s,c=2*n-l,d=1/3,h=Math.min(va,va*a(c,l,o+d)),u=Math.min(va,va*a(c,l,o)),p=Math.min(va,va*a(c,l,o-d));return{r:Math.round(h),g:Math.round(u),b:Math.round(p)}}function _l(t,e){return`rgba(${t.r}, ${t.g}, ${t.b}, ${e??1})`}function kl(t,e){return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??1})`}function $l(t){return void 0!==t?{h:t.h.value,s:t.s.value,l:t.l.value}:void 0}function Sl(t,e,i){t.enable=e.enable,t.enable?(t.velocity=Pa(e.speed)/Jn*i,t.decay=1-Pa(e.decay),t.status=Fa.increasing,t.loops=0,t.maxLoops=Pa(e.count),t.time=0,t.delayTime=Pa(e.delay)*Qn,e.sync||(t.velocity*=Ma(),t.value*=Ma()),t.initialValue=t.value,t.offset=Ba(e.offset)):t.velocity=0}function zl(t,e,i,r){if(!t||!t.enable||(t.maxLoops??0)>0&&(t.loops??0)>(t.maxLoops??0))return;if(t.time||(t.time=0),(t.delayTime??0)>0&&t.time<(t.delayTime??0)&&(t.time+=r.value),(t.delayTime??0)>0&&t.time<(t.delayTime??0))return;const o=t.offset?Ta(t.offset):0,s=(t.velocity??0)*r.factor+3.6*o,n=t.decay??1,a=Oa(e),l=Ia(e);if(i&&t.status!==Fa.increasing){t.value-=s;const e=0;t.value<e&&(t.loops||(t.loops=0),t.loops++,t.status=Fa.increasing)}else t.value+=s,t.value>a&&(t.loops||(t.loops=0),t.loops++,i?t.status=Fa.decreasing:t.value-=a);t.velocity&&1!==n&&(t.velocity*=n),t.value=Ea(t.value,l,a)}function Al(t,e){t.clearRect(Zn,ta,e.width,e.height)}function Cl(t){const{container:e,context:i,particle:r,delta:o,colorStyles:s,backgroundMask:n,composite:a,radius:l,opacity:c,shadow:d,transform:h}=t,u=r.getPosition(),p=r.rotation+(r.pathRotation?r.velocity.angle:0),m=Math.sin(p),f=Math.cos(p),v=!!p,g={a:f*(h.a??ia),b:v?m*(h.b??1):h.b??ra,c:v?-m*(h.c??1):h.c??oa,d:f*(h.d??sa)};i.setTransform(g.a,g.b,g.c,g.d,u.x,u.y),n&&(i.globalCompositeOperation=a);const b=r.shadowColor;d.enable&&b&&(i.shadowBlur=d.blur,i.shadowColor=_l(b),i.shadowOffsetX=d.offset.x,i.shadowOffsetY=d.offset.y),s.fill&&(i.fillStyle=s.fill);const y=r.strokeWidth??0;i.lineWidth=y,s.stroke&&(i.strokeStyle=s.stroke);const x={container:e,context:i,particle:r,radius:l,opacity:c,delta:o,transformData:g,strokeWidth:y};!function(t){const{container:e,context:i,particle:r,radius:o,opacity:s,delta:n,strokeWidth:a,transformData:l}=t;if(!r.shape)return;const c=e.shapeDrawers.get(r.shape);if(!c)return;i.beginPath(),c.draw({context:i,particle:r,radius:o,opacity:s,delta:n,pixelRatio:e.retina.pixelRatio,transformData:{...l}}),r.shapeClose&&i.closePath();a>0&&i.stroke();r.shapeFill&&i.fill()}(x),function(t){const{container:e,context:i,particle:r,radius:o,opacity:s,delta:n,transformData:a}=t;if(!r.shape)return;const l=e.shapeDrawers.get(r.shape);if(!l?.afterDraw)return;l.afterDraw({context:i,particle:r,radius:o,opacity:s,delta:n,pixelRatio:e.retina.pixelRatio,transformData:{...a}})}(x),function(t){const{container:e,context:i,particle:r,radius:o,opacity:s,delta:n,transformData:a}=t;if(!r.effect)return;const l=e.effectDrawers.get(r.effect);if(!l)return;l.draw({context:i,particle:r,radius:o,opacity:s,delta:n,pixelRatio:e.retina.pixelRatio,transformData:{...a}})}(x),i.globalCompositeOperation="source-over",i.resetTransform()}function Ml(t,e,i){const r=e[i];void 0!==r&&(t[i]=(t[i]??1)*r)}function El(t,e,i=!1){if(!e)return;if(!t)return;const r=t.style;if(!r)return;const o=new Set;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&o.add(r[t]);for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.add(e[t]);for(const t of o){const o=e.getPropertyValue(t);o?r.setProperty(t,o,i?"important":""):r.removeProperty(t)}}!function(t){t.darken="darken",t.enlighten="enlighten"}(nl||(nl={}));class Tl{constructor(t,e){this.container=t,this._applyPostDrawUpdaters=t=>{for(const e of this._postDrawUpdaters)e.afterDraw?.(t)},this._applyPreDrawUpdaters=(t,e,i,r,o,s)=>{for(const n of this._preDrawUpdaters){if(n.getColorStyles){const{fill:s,stroke:a}=n.getColorStyles(e,t,i,r);s&&(o.fill=s),a&&(o.stroke=a)}if(n.getTransformValues){const t=n.getTransformValues(e);for(const e in t)Ml(s,t,e)}n.beforeDraw?.(e)}},this._applyResizePlugins=()=>{for(const t of this._resizePlugins)t.resize?.()},this._getPluginParticleColors=t=>{let e,i;for(const r of this._colorPlugins)if(!e&&r.particleFillColor&&(e=xl(this._engine,r.particleFillColor(t))),!i&&r.particleStrokeColor&&(i=xl(this._engine,r.particleStrokeColor(t))),e&&i)break;return[e,i]},this._initCover=async()=>{const t=this.container.actualOptions.backgroundMask.cover,e=t.color;if(e){const i=bl(this._engine,e);if(i){const e={...i,a:t.opacity};this._coverColorStyle=_l(e,e.a)}}else await new Promise((e,i)=>{if(!t.image)return;const r=document.createElement("img");r.addEventListener("load",()=>{this._coverImage={image:r,opacity:t.opacity},e()}),r.addEventListener("error",t=>{i(t.error)}),r.src=t.image})},this._initStyle=()=>{const t=this.element,e=this.container.actualOptions;if(t){this._fullScreen?this._setFullScreenStyle():this._resetOriginalStyle();for(const i in e.style){if(!i||!e.style||!Object.prototype.hasOwnProperty.call(e.style,i))continue;const r=e.style[i];r&&t.style.setProperty(i,r,"important")}}},this._initTrail=async()=>{const t=this.container.actualOptions.particles.move.trail,e=t.fill;if(!t.enable)return;const i=1/t.length;if(e.color){const t=bl(this._engine,e.color);if(!t)return;this._trailFill={color:{...t},opacity:i}}else await new Promise((t,r)=>{if(!e.image)return;const o=document.createElement("img");o.addEventListener("load",()=>{this._trailFill={image:o,opacity:i},t()}),o.addEventListener("error",t=>{r(t.error)}),o.src=e.image})},this._paintBase=t=>{this.draw(e=>function(t,e,i){t.fillStyle=i??"rgba(0,0,0,0)",t.fillRect(Zn,ta,e.width,e.height)}(e,this.size,t))},this._paintImage=(t,e)=>{this.draw(i=>function(t,e,i,r){i&&(t.globalAlpha=r,t.drawImage(i,Zn,ta,e.width,e.height),t.globalAlpha=1)}(i,this.size,t,e))},this._repairStyle=()=>{const t=this.element;if(!t)return;this._safeMutationObserver(t=>t.disconnect()),this._initStyle(),this.initBackground();const e=this._pointerEvents;t.style.pointerEvents=e,t.setAttribute("pointer-events",e),this._safeMutationObserver(e=>{t&&t instanceof Node&&e.observe(t,{attributes:!0})})},this._resetOriginalStyle=()=>{const t=this.element,e=this._originalStyle;t&&e&&El(t,e,!0)},this._safeMutationObserver=t=>{this._mutationObserver&&t(this._mutationObserver)},this._setFullScreenStyle=()=>{const t=this.element;t&&El(t,sl(this.container.actualOptions.fullScreen.zIndex),!0)},this._engine=e,this._standardSize={height:0,width:0};const i=t.retina.pixelRatio,r=this._standardSize;this.size={height:r.height*i,width:r.width*i},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[],this._pointerEvents="none"}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const t=this.container.actualOptions,e=t.particles.move.trail,i=this._trailFill;t.backgroundMask.enable?this.paint():e.enable&&e.length>0&&i?i.color?this._paintBase(_l(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):t.clear&&this.draw(t=>{Al(t,this.size)})}destroy(){if(this.stop(),this._generated){const t=this.element;t?.remove(),this.element=void 0}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(t){const e=this._context;if(e)return t(e)}drawAsync(t){const e=this._context;if(e)return t(e)}drawParticle(t,e){if(t.spawning||t.destroyed)return;const i=t.getRadius();if(i<=0)return;const r=t.getFillColor(),o=t.getStrokeColor()??r;let[s,n]=this._getPluginParticleColors(t);s||(s=r),n||(n=o),(s||n)&&this.draw(r=>{const o=this.container,a=o.actualOptions,l=t.options.zIndex,c=1-t.zIndexFactor,d=c**l.opacityRate,h=t.bubble.opacity??t.opacity?.value??1,u=h*d,p=(t.strokeOpacity??h)*d,m={},f={fill:s?kl(s,u):void 0};f.stroke=n?kl(n,p):f.fill,this._applyPreDrawUpdaters(r,t,i,u,f,m),Cl({container:o,context:r,particle:t,delta:e,colorStyles:f,backgroundMask:a.backgroundMask.enable,composite:a.backgroundMask.composite,radius:i*c**l.sizeRate,opacity:u,shadow:t.options.shadow,transform:m}),this._applyPostDrawUpdaters(t)})}drawParticlePlugin(t,e,i){this.draw(r=>function(t,e,i,r){e.drawParticle&&e.drawParticle(t,i,r)}(r,t,e,i))}drawPlugin(t,e){this.draw(i=>function(t,e,i){e.draw&&e.draw(t,i)}(i,t,e))}async init(){this._safeMutationObserver(t=>t.disconnect()),this._mutationObserver=function(t){if(!Ya()&&"undefined"!=typeof MutationObserver)return new MutationObserver(t)}(t=>{for(const e of t)"attributes"===e.type&&"style"===e.attributeName&&this._repairStyle()}),this.resize(),this._initStyle(),await this._initCover();try{await this._initTrail()}catch(t){Wa().error(t)}this.initBackground(),this._safeMutationObserver(t=>{this.element&&this.element instanceof Node&&t.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const t=this.container.actualOptions.background,e=this.element;if(!e)return;const i=e.style;if(i){if(t.color){const e=bl(this._engine,t.color);i.backgroundColor=e?_l(e,t.opacity):""}else i.backgroundColor="";i.backgroundImage=t.image||"",i.backgroundPosition=t.position||"",i.backgroundRepeat=t.repeat||"",i.backgroundSize=t.size||""}}initPlugins(){this._resizePlugins=[];for(const t of this.container.plugins.values())t.resize&&this._resizePlugins.push(t),(t.particleFillColor??t.particleStrokeColor)&&this._colorPlugins.push(t)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const t of this.container.particles.updaters)t.afterDraw&&this._postDrawUpdaters.push(t),(t.getColorStyles??t.getTransformValues??t.beforeDraw)&&this._preDrawUpdaters.push(t)}loadCanvas(t){this._generated&&this.element&&this.element.remove(),this._generated=t.dataset&&qn in t.dataset?"true"===t.dataset[qn]:this._generated,this.element=t,this.element.ariaHidden="true",this._originalStyle=function(t){const e=document.createElement("div").style;if(!t)return e;for(const i in t){const r=t[i];if(!Object.prototype.hasOwnProperty.call(t,i)||ka(r))continue;const o=t.getPropertyValue?.(r);if(!o)continue;const s=t.getPropertyPriority?.(r);s?e.setProperty?.(r,o,s):e.setProperty?.(r,o)}return e}(this.element.style);const e=this._standardSize;e.height=t.offsetHeight,e.width=t.offsetWidth;const i=this.container.retina.pixelRatio,r=this.size;t.height=r.height=e.height*i,t.width=r.width=e.width*i,this._context=this.element.getContext("2d"),this._safeMutationObserver(t=>t.disconnect()),this.container.retina.init(),this.initBackground(),this._safeMutationObserver(t=>{this.element&&this.element instanceof Node&&t.observe(this.element,{attributes:!0})})}paint(){const t=this.container.actualOptions;this.draw(e=>{t.backgroundMask.enable&&t.backgroundMask.cover?(Al(e,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;const t=this.container,e=t.canvas._standardSize,i={width:this.element.offsetWidth,height:this.element.offsetHeight},r=t.retina.pixelRatio,o={width:i.width*r,height:i.height*r};if(i.height===e.height&&i.width===e.width&&o.height===this.element.height&&o.width===this.element.width)return!1;const s={...e};e.height=i.height,e.width=i.width;const n=this.size;return this.element.width=n.width=o.width,this.element.height=n.height=o.height,this.container.started&&t.particles.setResizeFactor({width:e.width/s.width,height:e.height/s.height}),!0}setPointerEvents(t){this.element&&(this._pointerEvents=t,this._repairStyle())}stop(){this._safeMutationObserver(t=>t.disconnect()),this._mutationObserver=void 0,this.draw(t=>Al(t,this.size))}async windowResize(){if(!this.element||!this.resize())return;const t=this.container,e=t.updateActualOptions();t.particles.setDensity(),this._applyResizePlugins(),e&&await t.refresh()}}function Pl(t,e,i,r,o){if(r){let r={passive:!0};ba(o)?r.capture=o:void 0!==o&&(r=o),t.addEventListener(e,i,r)}else{const r=o;t.removeEventListener(e,i,r)}}!function(t){t.canvas="canvas",t.parent="parent",t.window="window"}(al||(al={}));class Il{constructor(t){this.container=t,this._doMouseTouchClick=t=>{const e=this.container,i=e.actualOptions;if(this._canPush){const t=e.interactivity.mouse,r=t.position;if(!r)return;t.clickPosition={...r},t.clickTime=(new Date).getTime();tl(i.interactivity.events.onClick.mode,t=>this.container.handleClickMode(t))}"touchend"===t.type&&setTimeout(()=>this._mouseTouchFinish(),500)},this._handleThemeChange=t=>{const e=t,i=this.container,r=i.options,o=r.defaultThemes,s=e.matches?o.dark:o.light,n=r.themes.find(t=>t.name===s);n?.default.auto&&i.loadTheme(s)},this._handleVisibilityChange=()=>{const t=this.container,e=t.actualOptions;this._mouseTouchFinish(),e.pauseOnBlur&&(document?.hidden?(t.pageHidden=!0,t.pause()):(t.pageHidden=!1,t.animationStatus?t.play(!0):t.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);const t=async()=>{const t=this.container.canvas;await(t?.windowResize())};this._resizeTimeout=setTimeout(()=>{t()},this.container.actualOptions.interactivity.events.resize.delay*Qn)},this._manageInteractivityListeners=(t,e)=>{const i=this._handlers,r=this.container,o=r.actualOptions,s=r.interactivity.element;if(!s)return;const n=s,a=r.canvas;a.setPointerEvents(n===a.element?"initial":"none"),(o.interactivity.events.onHover.enable||o.interactivity.events.onClick.enable)&&(Pl(s,Wn,i.mouseMove,e),Pl(s,"touchstart",i.touchStart,e),Pl(s,"touchmove",i.touchMove,e),o.interactivity.events.onClick.enable?(Pl(s,Yn,i.touchEndClick,e),Pl(s,"pointerup",i.mouseUp,e),Pl(s,"pointerdown",i.mouseDown,e)):Pl(s,Yn,i.touchEnd,e),Pl(s,t,i.mouseLeave,e),Pl(s,"touchcancel",i.touchCancel,e))},this._manageListeners=t=>{const e=this._handlers,i=this.container,r=i.actualOptions.interactivity.detectsOn,o=i.canvas.element;let s=Vn;r===al.window?(i.interactivity.element=window,s="pointerout"):r===al.parent&&o?i.interactivity.element=o.parentElement??o.parentNode:i.interactivity.element=o,this._manageMediaMatch(t),this._manageResize(t),this._manageInteractivityListeners(s,t),document&&Pl(document,"visibilitychange",e.visibilityChange,t,!1)},this._manageMediaMatch=t=>{const e=this._handlers,i=Xa("(prefers-color-scheme: dark)");i&&(void 0===i.addEventListener?void 0!==i.addListener&&(t?i.addListener(e.oldThemeChange):i.removeListener(e.oldThemeChange)):Pl(i,"change",e.themeChange,t))},this._manageResize=t=>{const e=this._handlers,i=this.container;if(!i.actualOptions.interactivity.events.resize)return;if("undefined"==typeof ResizeObserver)return void Pl(window,"resize",e.resize,t);const r=i.canvas.element;this._resizeObserver&&!t?(r&&this._resizeObserver.unobserve(r),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&t&&r&&(this._resizeObserver=new ResizeObserver(t=>{const e=t.find(t=>t.target===r);e&&this._handleWindowResize()}),this._resizeObserver.observe(r))},this._mouseDown=()=>{const{interactivity:t}=this.container;if(!t)return;const{mouse:e}=t;e.clicking=!0,e.downPosition=e.position},this._mouseTouchClick=t=>{const e=this.container,i=e.actualOptions,{mouse:r}=e.interactivity;r.inside=!0;let o=!1;const s=r.position;if(s&&i.interactivity.events.onClick.enable){for(const t of e.plugins.values())if(t.clickPositionValid&&(o=t.clickPositionValid(s),o))break;o||this._doMouseTouchClick(t),r.clicking=!1}},this._mouseTouchFinish=()=>{const t=this.container.interactivity;if(!t)return;const e=t.mouse;delete e.position,delete e.clickPosition,delete e.downPosition,t.status=Vn,e.inside=!1,e.clicking=!1},this._mouseTouchMove=t=>{const e=this.container,i=e.actualOptions,r=e.interactivity,o=e.canvas.element;if(!r?.element)return;let s;if(r.mouse.inside=!0,t.type.startsWith("pointer")){this._canPush=!0;const e=t;if(r.element===window){if(o){const t=o.getBoundingClientRect();s={x:e.clientX-t.left,y:e.clientY-t.top}}}else if(i.interactivity.detectsOn===al.parent){const t=e.target,i=e.currentTarget;if(t&&i&&o){const r=t.getBoundingClientRect(),n=i.getBoundingClientRect(),a=o.getBoundingClientRect();s={x:e.offsetX+2*r.left-(n.left+a.left),y:e.offsetY+2*r.top-(n.top+a.top)}}else s={x:e.offsetX??e.clientX,y:e.offsetY??e.clientY}}else e.target===o&&(s={x:e.offsetX??e.clientX,y:e.offsetY??e.clientY})}else if(this._canPush="touchmove"!==t.type,o){const e=t,i=e.touches[e.touches.length-1],r=o.getBoundingClientRect();s={x:i.clientX-(r.left??0),y:i.clientY-(r.top??0)}}const n=e.retina.pixelRatio;s&&(s.x*=n,s.y*=n),r.mouse.position=s,r.status=Wn},this._touchEnd=t=>{const e=t,i=Array.from(e.changedTouches);for(const t of i)this._touches.delete(t.identifier);this._mouseTouchFinish()},this._touchEndClick=t=>{const e=t,i=Array.from(e.changedTouches);for(const t of i)this._touches.delete(t.identifier);this._mouseTouchClick(t)},this._touchStart=t=>{const e=t,i=Array.from(e.changedTouches);for(const t of i)this._touches.set(t.identifier,performance.now());this._mouseTouchMove(t)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:t=>this._mouseTouchMove(t),mouseUp:t=>this._mouseTouchClick(t),touchStart:t=>this._touchStart(t),touchMove:t=>this._mouseTouchMove(t),touchEnd:t=>this._touchEnd(t),touchCancel:t=>this._touchEnd(t),touchEndClick:t=>this._touchEndClick(t),visibilityChange:()=>this._handleVisibilityChange(),themeChange:t=>this._handleThemeChange(t),oldThemeChange:t=>this._handleThemeChange(t),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}!function(t){t.configAdded="configAdded",t.containerInit="containerInit",t.particlesSetup="particlesSetup",t.containerStarted="containerStarted",t.containerStopped="containerStopped",t.containerDestroyed="containerDestroyed",t.containerPaused="containerPaused",t.containerPlay="containerPlay",t.containerBuilt="containerBuilt",t.particleAdded="particleAdded",t.particleDestroyed="particleDestroyed",t.particleRemoved="particleRemoved"}(ll||(ll={}));class Ol{constructor(){this.value=""}static create(t,e){const i=new Ol;return i.load(t),void 0!==e&&(ya(e)||_a(e)?i.load({value:e}):i.load(e)),i}load(t){ka(t)||ka(t.value)||(this.value=t.value)}}class Bl{constructor(){this.color=new Ol,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(t){ka(t)||(void 0!==t.color&&(this.color=Ol.create(this.color,t.color)),void 0!==t.image&&(this.image=t.image),void 0!==t.position&&(this.position=t.position),void 0!==t.repeat&&(this.repeat=t.repeat),void 0!==t.size&&(this.size=t.size),void 0!==t.opacity&&(this.opacity=t.opacity))}}class Rl{constructor(){this.opacity=1}load(t){ka(t)||(void 0!==t.color&&(this.color=Ol.create(this.color,t.color)),void 0!==t.image&&(this.image=t.image),void 0!==t.opacity&&(this.opacity=t.opacity))}}class Nl{constructor(){this.composite="destination-out",this.cover=new Rl,this.enable=!1}load(t){if(!ka(t)){if(void 0!==t.composite&&(this.composite=t.composite),void 0!==t.cover){const e=t.cover,i=ya(t.cover)?{color:t.cover}:t.cover;this.cover.load(void 0!==e.color||void 0!==e.image?e:{color:i})}void 0!==t.enable&&(this.enable=t.enable)}}}class jl{constructor(){this.enable=!0,this.zIndex=0}load(t){ka(t)||(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.zIndex&&(this.zIndex=t.zIndex))}}class Dl{constructor(){this.enable=!1,this.mode=[]}load(t){ka(t)||(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.mode&&(this.mode=t.mode))}}!function(t){t.circle="circle",t.rectangle="rectangle"}(cl||(cl={}));class Ll{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type=cl.circle}load(t){ka(t)||(void 0!==t.selectors&&(this.selectors=t.selectors),void 0!==t.enable&&(this.enable=t.enable),void 0!==t.mode&&(this.mode=t.mode),void 0!==t.type&&(this.type=t.type))}}class Fl{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(t){ka(t)||(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.force&&(this.force=t.force),void 0!==t.smooth&&(this.smooth=t.smooth))}}class Ul{constructor(){this.enable=!1,this.mode=[],this.parallax=new Fl}load(t){ka(t)||(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.mode&&(this.mode=t.mode),this.parallax.load(t.parallax))}}class Hl{constructor(){this.delay=.5,this.enable=!0}load(t){ka(t)||(void 0!==t.delay&&(this.delay=t.delay),void 0!==t.enable&&(this.enable=t.enable))}}class Gl{constructor(){this.onClick=new Dl,this.onDiv=new Ll,this.onHover=new Ul,this.resize=new Hl}load(t){if(ka(t))return;this.onClick.load(t.onClick);const e=t.onDiv;void 0!==e&&(this.onDiv=tl(e,t=>{const e=new Ll;return e.load(t),e})),this.onHover.load(t.onHover),this.resize.load(t.resize)}}class ql{constructor(t,e){this._engine=t,this._container=e}load(t){if(ka(t))return;if(!this._container)return;const e=this._engine.interactors.get(this._container);if(e)for(const i of e)i.loadModeOptions&&i.loadModeOptions(this,t)}}class Vl{constructor(t,e){this.detectsOn=al.window,this.events=new Gl,this.modes=new ql(t,e)}load(t){if(ka(t))return;const e=t.detectsOn;void 0!==e&&(this.detectsOn=e),this.events.load(t.events),this.modes.load(t.modes)}}class Wl{load(t){ka(t)||(t.position&&(this.position={x:t.position.x??50,y:t.position.y??50,mode:t.position.mode??Ga.percent}),t.options&&(this.options=Za({},t.options)))}}!function(t){t.screen="screen",t.canvas="canvas"}(dl||(dl={}));class Yl{constructor(){this.maxWidth=1/0,this.options={},this.mode=dl.canvas}load(t){ka(t)||(ka(t.maxWidth)||(this.maxWidth=t.maxWidth),ka(t.mode)||(t.mode===dl.screen?this.mode=dl.screen:this.mode=dl.canvas),ka(t.options)||(this.options=Za({},t.options)))}}!function(t){t.any="any",t.dark="dark",t.light="light"}(hl||(hl={}));class Xl{constructor(){this.auto=!1,this.mode=hl.any,this.value=!1}load(t){ka(t)||(void 0!==t.auto&&(this.auto=t.auto),void 0!==t.mode&&(this.mode=t.mode),void 0!==t.value&&(this.value=t.value))}}class Jl{constructor(){this.name="",this.default=new Xl}load(t){ka(t)||(void 0!==t.name&&(this.name=t.name),this.default.load(t.default),void 0!==t.options&&(this.options=Za({},t.options)))}}class Kl{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(t){ka(t)||(void 0!==t.count&&(this.count=Ba(t.count)),void 0!==t.enable&&(this.enable=t.enable),void 0!==t.speed&&(this.speed=Ba(t.speed)),void 0!==t.decay&&(this.decay=Ba(t.decay)),void 0!==t.delay&&(this.delay=Ba(t.delay)),void 0!==t.sync&&(this.sync=t.sync))}}class Ql extends Kl{constructor(){super(),this.mode=La.auto,this.startValue=qa.random}load(t){super.load(t),ka(t)||(void 0!==t.mode&&(this.mode=t.mode),void 0!==t.startValue&&(this.startValue=t.startValue))}}class Zl extends Kl{constructor(){super(),this.offset=0,this.sync=!0}load(t){super.load(t),ka(t)||void 0!==t.offset&&(this.offset=Ba(t.offset))}}class tc{constructor(){this.h=new Zl,this.s=new Zl,this.l=new Zl}load(t){ka(t)||(this.h.load(t.h),this.s.load(t.s),this.l.load(t.l))}}class ec extends Ol{constructor(){super(),this.animation=new tc}static create(t,e){const i=new ec;return i.load(t),void 0!==e&&(ya(e)||_a(e)?i.load({value:e}):i.load(e)),i}load(t){if(super.load(t),ka(t))return;const e=t.animation;void 0!==e&&(void 0!==e.enable?this.animation.h.load(e):this.animation.load(t.animation))}}!function(t){t.absorb="absorb",t.bounce="bounce",t.destroy="destroy"}(ul||(ul={}));class ic{constructor(){this.speed=2}load(t){ka(t)||void 0!==t.speed&&(this.speed=t.speed)}}class rc{constructor(){this.enable=!0,this.retries=0}load(t){ka(t)||(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.retries&&(this.retries=t.retries))}}class oc{constructor(){this.value=0}load(t){ka(t)||ka(t.value)||(this.value=Ba(t.value))}}class sc extends oc{constructor(){super(),this.animation=new Kl}load(t){if(super.load(t),ka(t))return;const e=t.animation;void 0!==e&&this.animation.load(e)}}class nc extends sc{constructor(){super(),this.animation=new Ql}load(t){super.load(t)}}class ac extends oc{constructor(){super(),this.value=1}}class lc{constructor(){this.horizontal=new ac,this.vertical=new ac}load(t){ka(t)||(this.horizontal.load(t.horizontal),this.vertical.load(t.vertical))}}class cc{constructor(){this.absorb=new ic,this.bounce=new lc,this.enable=!1,this.maxSpeed=50,this.mode=ul.bounce,this.overlap=new rc}load(t){ka(t)||(this.absorb.load(t.absorb),this.bounce.load(t.bounce),void 0!==t.enable&&(this.enable=t.enable),void 0!==t.maxSpeed&&(this.maxSpeed=Ba(t.maxSpeed)),void 0!==t.mode&&(this.mode=t.mode),this.overlap.load(t.overlap))}}class dc{constructor(){this.close=!0,this.fill=!0,this.options={},this.type=[]}load(t){if(ka(t))return;const e=t.options;if(void 0!==e)for(const t in e){const i=e[t];i&&(this.options[t]=Za(this.options[t]??{},i))}void 0!==t.close&&(this.close=t.close),void 0!==t.fill&&(this.fill=t.fill),void 0!==t.type&&(this.type=t.type)}}class hc{constructor(){this.offset=0,this.value=90}load(t){ka(t)||(void 0!==t.offset&&(this.offset=Ba(t.offset)),void 0!==t.value&&(this.value=Ba(t.value)))}}class uc{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}load(t){if(!ka(t)&&(void 0!==t.distance&&(this.distance=Ba(t.distance)),void 0!==t.enable&&(this.enable=t.enable),t.rotate)){const e=t.rotate.x;void 0!==e&&(this.rotate.x=e);const i=t.rotate.y;void 0!==i&&(this.rotate.y=i)}}}class pc{constructor(){this.x=50,this.y=50,this.mode=Ga.percent,this.radius=0}load(t){ka(t)||(void 0!==t.x&&(this.x=t.x),void 0!==t.y&&(this.y=t.y),void 0!==t.mode&&(this.mode=t.mode),void 0!==t.radius&&(this.radius=t.radius))}}class mc{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(t){ka(t)||(void 0!==t.acceleration&&(this.acceleration=Ba(t.acceleration)),void 0!==t.enable&&(this.enable=t.enable),void 0!==t.inverse&&(this.inverse=t.inverse),void 0!==t.maxSpeed&&(this.maxSpeed=Ba(t.maxSpeed)))}}class fc{constructor(){this.clamp=!0,this.delay=new oc,this.enable=!1,this.options={}}load(t){ka(t)||(void 0!==t.clamp&&(this.clamp=t.clamp),this.delay.load(t.delay),void 0!==t.enable&&(this.enable=t.enable),this.generator=t.generator,t.options&&(this.options=Za(this.options,t.options)))}}class vc{load(t){ka(t)||(void 0!==t.color&&(this.color=Ol.create(this.color,t.color)),void 0!==t.image&&(this.image=t.image))}}class gc{constructor(){this.enable=!1,this.length=10,this.fill=new vc}load(t){ka(t)||(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.fill&&this.fill.load(t.fill),void 0!==t.length&&(this.length=t.length))}}!function(t){t.bounce="bounce",t.none="none",t.out="out",t.destroy="destroy",t.split="split"}(pl||(pl={}));class bc{constructor(){this.default=pl.out}load(t){ka(t)||(void 0!==t.default&&(this.default=t.default),this.bottom=t.bottom??t.default,this.left=t.left??t.default,this.right=t.right??t.default,this.top=t.top??t.default)}}class yc{constructor(){this.acceleration=0,this.enable=!1}load(t){ka(t)||(void 0!==t.acceleration&&(this.acceleration=Ba(t.acceleration)),void 0!==t.enable&&(this.enable=t.enable),t.position&&(this.position=Za({},t.position)))}}class xc{constructor(){this.angle=new hc,this.attract=new uc,this.center=new pc,this.decay=0,this.distance={},this.direction=ga.none,this.drift=0,this.enable=!1,this.gravity=new mc,this.path=new fc,this.outModes=new bc,this.random=!1,this.size=!1,this.speed=2,this.spin=new yc,this.straight=!1,this.trail=new gc,this.vibrate=!1,this.warp=!1}load(t){if(ka(t))return;this.angle.load(xa(t.angle)?{value:t.angle}:t.angle),this.attract.load(t.attract),this.center.load(t.center),void 0!==t.decay&&(this.decay=Ba(t.decay)),void 0!==t.direction&&(this.direction=t.direction),void 0!==t.distance&&(this.distance=xa(t.distance)?{horizontal:t.distance,vertical:t.distance}:{...t.distance}),void 0!==t.drift&&(this.drift=Ba(t.drift)),void 0!==t.enable&&(this.enable=t.enable),this.gravity.load(t.gravity);const e=t.outModes;void 0!==e&&(wa(e)?this.outModes.load(e):this.outModes.load({default:e})),this.path.load(t.path),void 0!==t.random&&(this.random=t.random),void 0!==t.size&&(this.size=t.size),void 0!==t.speed&&(this.speed=Ba(t.speed)),this.spin.load(t.spin),void 0!==t.straight&&(this.straight=t.straight),this.trail.load(t.trail),void 0!==t.vibrate&&(this.vibrate=t.vibrate),void 0!==t.warp&&(this.warp=t.warp)}}class wc extends Ql{constructor(){super(),this.destroy=Ua.none,this.speed=2}load(t){super.load(t),ka(t)||void 0!==t.destroy&&(this.destroy=t.destroy)}}class _c extends nc{constructor(){super(),this.animation=new wc,this.value=1}load(t){if(ka(t))return;super.load(t);const e=t.animation;void 0!==e&&this.animation.load(e)}}class kc{constructor(){this.enable=!1,this.width=1920,this.height=1080}load(t){if(ka(t))return;void 0!==t.enable&&(this.enable=t.enable);const e=t.width;void 0!==e&&(this.width=e);const i=t.height;void 0!==i&&(this.height=i)}}!function(t){t.delete="delete",t.wait="wait"}(ml||(ml={}));class $c{constructor(){this.mode=ml.delete,this.value=0}load(t){ka(t)||(void 0!==t.mode&&(this.mode=t.mode),void 0!==t.value&&(this.value=t.value))}}class Sc{constructor(){this.density=new kc,this.limit=new $c,this.value=0}load(t){ka(t)||(this.density.load(t.density),this.limit.load(t.limit),void 0!==t.value&&(this.value=t.value))}}class zc{constructor(){this.blur=0,this.color=new Ol,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(t){ka(t)||(void 0!==t.blur&&(this.blur=t.blur),this.color=Ol.create(this.color,t.color),void 0!==t.enable&&(this.enable=t.enable),void 0!==t.offset&&(void 0!==t.offset.x&&(this.offset.x=t.offset.x),void 0!==t.offset.y&&(this.offset.y=t.offset.y)))}}class Ac{constructor(){this.close=!0,this.fill=!0,this.options={},this.type="circle"}load(t){if(ka(t))return;const e=t.options;if(void 0!==e)for(const t in e){const i=e[t];i&&(this.options[t]=Za(this.options[t]??{},i))}void 0!==t.close&&(this.close=t.close),void 0!==t.fill&&(this.fill=t.fill),void 0!==t.type&&(this.type=t.type)}}class Cc extends Ql{constructor(){super(),this.destroy=Ua.none,this.speed=5}load(t){super.load(t),ka(t)||void 0!==t.destroy&&(this.destroy=t.destroy)}}class Mc extends nc{constructor(){super(),this.animation=new Cc,this.value=3}load(t){if(super.load(t),ka(t))return;const e=t.animation;void 0!==e&&this.animation.load(e)}}class Ec{constructor(){this.width=0}load(t){ka(t)||(void 0!==t.color&&(this.color=ec.create(this.color,t.color)),void 0!==t.width&&(this.width=Ba(t.width)),void 0!==t.opacity&&(this.opacity=Ba(t.opacity)))}}class Tc extends oc{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(t){super.load(t),ka(t)||(void 0!==t.opacityRate&&(this.opacityRate=t.opacityRate),void 0!==t.sizeRate&&(this.sizeRate=t.sizeRate),void 0!==t.velocityRate&&(this.velocityRate=t.velocityRate))}}class Pc{constructor(t,e){this._engine=t,this._container=e,this.bounce=new lc,this.collisions=new cc,this.color=new ec,this.color.value="#fff",this.effect=new dc,this.groups={},this.move=new xc,this.number=new Sc,this.opacity=new _c,this.reduceDuplicates=!1,this.shadow=new zc,this.shape=new Ac,this.size=new Mc,this.stroke=new Ec,this.zIndex=new Tc}load(t){if(ka(t))return;if(void 0!==t.groups)for(const e of Object.keys(t.groups)){if(!Object.hasOwn(t.groups,e))continue;const i=t.groups[e];void 0!==i&&(this.groups[e]=Za(this.groups[e]??{},i))}void 0!==t.reduceDuplicates&&(this.reduceDuplicates=t.reduceDuplicates),this.bounce.load(t.bounce),this.color.load(ec.create(this.color,t.color)),this.effect.load(t.effect),this.move.load(t.move),this.number.load(t.number),this.opacity.load(t.opacity),this.shape.load(t.shape),this.size.load(t.size),this.shadow.load(t.shadow),this.zIndex.load(t.zIndex),this.collisions.load(t.collisions),void 0!==t.interactivity&&(this.interactivity=Za({},t.interactivity));const e=t.stroke;if(e&&(this.stroke=tl(e,t=>{const e=new Ec;return e.load(t),e})),this._container){const e=this._engine.updaters.get(this._container);if(e)for(const i of e)i.loadOptions&&i.loadOptions(this,t);const i=this._engine.interactors.get(this._container);if(i)for(const e of i)e.loadParticlesOptions&&e.loadParticlesOptions(this,t)}}}function Ic(t,...e){for(const i of e)t.load(i)}function Oc(t,e,...i){const r=new Pc(t,e);return Ic(r,...i),r}class Bc{constructor(t,e){this._findDefaultTheme=t=>this.themes.find(e=>e.default.value&&e.default.mode===t)??this.themes.find(t=>t.default.value&&t.default.mode===hl.any),this._importPreset=t=>{this.load(this._engine.getPreset(t))},this._engine=t,this._container=e,this.autoPlay=!0,this.background=new Bl,this.backgroundMask=new Nl,this.clear=!0,this.defaultThemes={},this.delay=0,this.fullScreen=new jl,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new Vl(t,e),this.manualParticles=[],this.particles=Oc(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}load(t){if(ka(t))return;void 0!==t.preset&&tl(t.preset,t=>this._importPreset(t)),void 0!==t.autoPlay&&(this.autoPlay=t.autoPlay),void 0!==t.clear&&(this.clear=t.clear),void 0!==t.key&&(this.key=t.key),void 0!==t.name&&(this.name=t.name),void 0!==t.delay&&(this.delay=Ba(t.delay));const e=t.detectRetina;void 0!==e&&(this.detectRetina=e),void 0!==t.duration&&(this.duration=Ba(t.duration));const i=t.fpsLimit;void 0!==i&&(this.fpsLimit=i),void 0!==t.pauseOnBlur&&(this.pauseOnBlur=t.pauseOnBlur),void 0!==t.pauseOnOutsideViewport&&(this.pauseOnOutsideViewport=t.pauseOnOutsideViewport),void 0!==t.zLayers&&(this.zLayers=t.zLayers),this.background.load(t.background);const r=t.fullScreen;ba(r)?this.fullScreen.enable=r:this.fullScreen.load(r),this.backgroundMask.load(t.backgroundMask),this.interactivity.load(t.interactivity),t.manualParticles&&(this.manualParticles=t.manualParticles.map(t=>{const e=new Wl;return e.load(t),e})),this.particles.load(t.particles),this.style=Za(this.style,t.style),this._engine.loadOptions(this,t),void 0!==t.smooth&&(this.smooth=t.smooth);const o=this._engine.interactors.get(this._container);if(o)for(const e of o)e.loadOptions&&e.loadOptions(this,t);if(void 0!==t.responsive)for(const e of t.responsive){const t=new Yl;t.load(e),this.responsive.push(t)}if(this.responsive.sort((t,e)=>t.maxWidth-e.maxWidth),void 0!==t.themes)for(const e of t.themes){const t=this.themes.find(t=>t.name===e.name);if(t)t.load(e);else{const t=new Jl;t.load(e),this.themes.push(t)}}this.defaultThemes.dark=this._findDefaultTheme(hl.dark)?.name,this.defaultThemes.light=this._findDefaultTheme(hl.light)?.name}setResponsive(t,e,i){this.load(i);const r=this.responsive.find(i=>i.mode===dl.screen&&screen?i.maxWidth>screen.availWidth:i.maxWidth*e>t);return this.load(r?.options),r?.maxWidth}setTheme(t){if(t){const e=this.themes.find(e=>e.name===t);e&&this.load(e.options)}else{const t=Xa("(prefers-color-scheme: dark)"),e=t?.matches,i=this._findDefaultTheme(e?hl.dark:hl.light);i&&this.load(i.options)}}}!function(t){t.external="external",t.particles="particles"}(fl||(fl={}));class Rc{constructor(t,e){this.container=e,this._engine=t,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(t){for(const e of this._externalInteractors)e.isEnabled()&&e.interact(t)}handleClickMode(t){for(const e of this._externalInteractors)e.handleClickMode?.(t)}async init(){this._interactors=await this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[];for(const t of this._interactors){switch(t.type){case fl.external:this._externalInteractors.push(t);break;case fl.particles:this._particleInteractors.push(t)}t.init()}}particlesInteract(t,e){for(const i of this._externalInteractors)i.clear(t,e);for(const i of this._particleInteractors)i.isEnabled(t)&&i.interact(t,e)}reset(t){for(const e of this._externalInteractors)e.isEnabled()&&e.reset(t);for(const e of this._particleInteractors)e.isEnabled(t)&&e.reset(t)}}function Nc(t){if(e=t.outMode,i=t.checkModes,!(e===i||_a(i)&&i.indexOf(e)>-1))return;var e,i;const r=2*t.radius;t.coord>t.maxCoord-r?t.setCb(-t.radius):t.coord<r&&t.setCb(t.radius)}!function(t){t.normal="normal",t.inside="inside",t.outside="outside"}(vl||(vl={}));class jc{constructor(t,e){this.container=e,this._calcPosition=(t,e,i,r=0)=>{for(const r of t.plugins.values()){const t=void 0!==r.particlePosition?r.particlePosition(e,this):void 0;if(t)return $a.create(t.x,t.y,i)}const o=t.canvas.size,s=(h={size:o,position:e},{x:h.position?.x??Ma()*h.size.width,y:h.position?.y??Ma()*h.size.height}),n=$a.create(s.x,s.y,i),a=this.getRadius(),l=this.options.move.outModes,c=e=>{Nc({outMode:e,checkModes:[pl.bounce],coord:n.x,maxCoord:t.canvas.size.width,setCb:t=>n.x+=t,radius:a})},d=e=>{Nc({outMode:e,checkModes:[pl.bounce],coord:n.y,maxCoord:t.canvas.size.height,setCb:t=>n.y+=t,radius:a})};var h;return c(l.left??l.default),c(l.right??l.default),d(l.top??l.default),d(l.bottom??l.default),this._checkOverlap(n,r)?this._calcPosition(t,void 0,i,r+1):n},this._calculateVelocity=()=>{const t=function(t){const e=Sa.origin;return e.length=1,e.angle=t,e}(this.direction).copy(),e=this.options.move;if(e.direction===ga.inside||e.direction===ga.outside)return t;const i=ja(Pa(e.angle.value)),r=ja(Pa(e.angle.offset)),o={left:r-i*Kn,right:r+i*Kn};return e.straight||(t.angle+=Ta(Ba(o.left,o.right))),e.random&&"number"==typeof e.speed&&(t.length*=Ma()),t},this._checkOverlap=(t,e=0)=>{const i=this.options.collisions,r=this.getRadius();if(!i.enable)return!1;const o=i.overlap;if(o.enable)return!1;const s=o.retries;if(s>=0&&e>s)throw new Error(`${Xn} particle is overlapping and can't be placed`);return!!this.container.particles.find(e=>Na(t,e.position)<r+e.getRadius())},this._getRollColor=t=>{if(!t||!this.roll||!this.backColor&&!this.roll.alter)return t;const e=this.roll.horizontal&&this.roll.vertical?2:1,i=this.roll.horizontal?Math.PI*Kn:0;return Math.floor(((this.roll.angle??0)+i)/(Math.PI/e))%2?this.backColor?this.backColor:this.roll.alter?function(t,e,i){return{h:t.h,s:t.s,l:t.l+(e===nl.darken?-1:1)*i}}(t,this.roll.alter.type,this.roll.alter.value):t:t},this._initPosition=t=>{const e=this.container,i=Pa(this.options.zIndex.value);this.position=this._calcPosition(e,t,Ea(i,0,e.zLayers)),this.initialPosition=this.position.copy();const r=e.canvas.size;switch(this.moveCenter={...rl(this.options.move.center,r),radius:this.options.move.center.radius??0,mode:this.options.move.center.mode??Ga.percent},this.direction=function(t,e,i){if(xa(t))return ja(t);switch(t){case ga.top:return-Math.PI*Kn;case ga.topRight:return-Math.PI*fa;case ga.right:return 0;case ga.bottomRight:return Math.PI*fa;case ga.bottom:return Math.PI*Kn;case ga.bottomLeft:return.75*Math.PI;case ga.left:return Math.PI;case ga.topLeft:return.75*-Math.PI;case ga.inside:return Math.atan2(i.y-e.y,i.x-e.x);case ga.outside:return Math.atan2(e.y-i.y,e.x-i.x);default:return Ma()*aa}}(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case ga.inside:this.outType=vl.inside;break;case ga.outside:this.outType=vl.outside}this.offset=Sa.origin},this._engine=t}destroy(t){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const e=this.container,i=this.pathGenerator,r=e.shapeDrawers.get(this.shape);r?.particleDestroy?.(this);for(const i of e.plugins.values())i.particleDestroyed?.(this,t);for(const i of e.particles.updaters)i.particleDestroyed?.(this,t);i?.reset(this),this._engine.dispatchEvent(ll.particleDestroyed,{container:this.container,data:{particle:this}})}draw(t){const e=this.container,i=e.canvas;for(const r of e.plugins.values())i.drawParticlePlugin(r,this,t);i.drawParticle(this,t)}getFillColor(){return this._getRollColor(this.bubble.color??$l(this.color))}getMass(){return this.getRadius()**2*Math.PI*Kn}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??$l(this.strokeColor))}init(t,e,i,r){const o=this.container,s=this._engine;this.id=t,this.group=r,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.isRotating=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType=vl.normal,this.ignoresResizeRatio=!0;const n=o.retina.pixelRatio,a=o.actualOptions,l=Oc(this._engine,o,a.particles),{reduceDuplicates:c}=l,d=l.effect.type,h=l.shape.type;this.effect=el(d,this.id,c),this.shape=el(h,this.id,c);const u=l.effect,p=l.shape;if(i){if(i.effect?.type){const t=el(i.effect.type,this.id,c);t&&(this.effect=t,u.load(i.effect))}if(i.shape?.type){const t=el(i.shape.type,this.id,c);t&&(this.shape=t,p.load(i.shape))}}if(this.effect===na){const t=[...this.container.effectDrawers.keys()];this.effect=t[Math.floor(Ma()*t.length)]}if(this.shape===na){const t=[...this.container.shapeDrawers.keys()];this.shape=t[Math.floor(Ma()*t.length)]}this.effectData=function(t,e,i,r){const o=e.options[t];if(o)return Za({close:e.close,fill:e.fill},el(o,i,r))}(this.effect,u,this.id,c),this.shapeData=function(t,e,i,r){const o=e.options[t];if(o)return Za({close:e.close,fill:e.fill},el(o,i,r))}(this.shape,p,this.id,c),l.load(i);const m=this.effectData;m&&l.load(m.particles);const f=this.shapeData;f&&l.load(f.particles);const v=new Vl(s,o);v.load(o.actualOptions.interactivity),v.load(l.interactivity),this.interactivity=v,this.effectFill=m?.fill??l.effect.fill,this.effectClose=m?.close??l.effect.close,this.shapeFill=f?.fill??l.shape.fill,this.shapeClose=f?.close??l.shape.close,this.options=l;const g=this.options.move.path;this.pathDelay=Pa(g.delay.value)*Qn,g.generator&&(this.pathGenerator=this._engine.getPathGenerator(g.generator),this.pathGenerator&&o.addPath(g.generator,this.pathGenerator)&&this.pathGenerator.init(o)),o.retina.initParticle(this),this.size=il(this.options.size,n),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(e),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=1-Pa(this.options.move.decay);const b=o.particles;b.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/o.zLayers,this.sides=24;let y=o.effectDrawers.get(this.effect);y||(y=this._engine.getEffectDrawer(this.effect),y&&o.effectDrawers.set(this.effect,y)),y?.loadEffect&&y.loadEffect(this);let x=o.shapeDrawers.get(this.shape);x||(x=this._engine.getShapeDrawer(this.shape),x&&o.shapeDrawers.set(this.shape,x)),x?.loadShape&&x.loadShape(this);const w=x?.getSidesCount;w&&(this.sides=w(this)),this.spawning=!1,this.shadowColor=bl(this._engine,this.options.shadow.color);for(const t of b.updaters)t.init(this);for(const t of b.movers)t.init?.(this);y?.particleInit?.(o,this),x?.particleInit?.(o,this);for(const t of o.plugins.values())t.particleCreated?.(this)}isInsideCanvas(){const t=this.getRadius(),e=this.container.canvas.size,i=this.position;return i.x>=-t&&i.y>=-t&&i.y<=e.height+t&&i.x<=e.width+t}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const t of this.container.particles.updaters)t.reset?.(this)}}class Dc{constructor(t,e){this.position=t,this.particle=e}}!function(t){t.circle="circle",t.rectangle="rectangle"}(gl||(gl={}));class Lc{constructor(t,e,i){this.position={x:t,y:e},this.type=i}}class Fc extends Lc{constructor(t,e,i){super(t,e,gl.circle),this.radius=i}contains(t){return Na(t,this.position)<=this.radius}intersects(t){const e=this.position,i=t.position,r=Math.abs(i.x-e.x),o=Math.abs(i.y-e.y),s=this.radius;if(t instanceof Fc||t.type===gl.circle){return s+t.radius>Math.sqrt(r**2+o**2)}if(t instanceof Uc||t.type===gl.rectangle){const e=t,{width:i,height:n}=e.size;return Math.pow(r-i,2)+Math.pow(o-n,2)<=s**2||r<=s+i&&o<=s+n||r<=i||o<=n}return!1}}class Uc extends Lc{constructor(t,e,i,r){super(t,e,gl.rectangle),this.size={height:r,width:i}}contains(t){const e=this.size.width,i=this.size.height,r=this.position;return t.x>=r.x&&t.x<=r.x+e&&t.y>=r.y&&t.y<=r.y+i}intersects(t){if(t instanceof Fc)return t.intersects(this);const e=this.size.width,i=this.size.height,r=this.position,o=t.position,s=t instanceof Uc?t.size:{width:0,height:0},n=s.width,a=s.height;return o.x<r.x+e&&o.x+n>r.x&&o.y<r.y+i&&o.y+a>r.y}}class Hc{constructor(t,e){this.rectangle=t,this.capacity=e,this._subdivide=()=>{const{x:t,y:e}=this.rectangle.position,{width:i,height:r}=this.rectangle.size,{capacity:o}=this;for(let s=0;s<4;s++){const n=s%2;this._subs.push(new Hc(new Uc(t+i*Kn*n,e+r*Kn*(Math.round(s*Kn)-n),i*Kn,r*Kn),o))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(t){return!!this.rectangle.contains(t.position)&&(this._points.length<this.capacity?(this._points.push(t),!0):(this._divided||this._subdivide(),this._subs.some(e=>e.insert(t))))}query(t,e){const i=[];if(!t.intersects(this.rectangle))return[];for(const r of this._points)!t.contains(r.position)&&Na(t.position,r.position)>r.particle.getRadius()&&(!e||e(r.particle))||i.push(r.particle);if(this._divided)for(const r of this._subs)i.push(...r.query(t,e));return i}queryCircle(t,e,i){return this.query(new Fc(t.x,t.y,e),i)}queryRectangle(t,e,i){return this.query(new Uc(t.x,t.y,e.width,e.height),i)}}const Gc=t=>{const{height:e,width:i}=t;return new Uc(-.25*i,-.25*e,1.5*i,1.5*e)};class qc{constructor(t,e){this._addToPool=(...t)=>{this._pool.push(...t)},this._applyDensity=(t,e,i,r)=>{const o=t.number;if(!t.number.density?.enable)return void(void 0===i?this._limit=o.limit.value:(r?.number.limit?.value??o.limit.value)&&this._groupLimits.set(i,r?.number.limit?.value??o.limit.value));const s=this._initDensityFactor(o.density),n=o.value,a=o.limit.value>0?o.limit.value:n,l=Math.min(n,a)*s+e,c=Math.min(this.count,this.filter(t=>t.group===i).length);void 0===i?this._limit=o.limit.value*s:this._groupLimits.set(i,o.limit.value*s),c<l?this.push(Math.abs(l-c),void 0,t,i):c>l&&this.removeQuantity(c-l,i)},this._initDensityFactor=t=>{const e=this._container;if(!e.canvas.element||!t.enable)return 1;const i=e.canvas.element,r=e.retina.pixelRatio;return i.width*i.height/(t.height*t.width*r**2)},this._pushParticle=(t,e,i,r)=>{try{let o=this._pool.pop();o||(o=new jc(this._engine,this._container)),o.init(this._nextId,t,e,i);let s=!0;if(r&&(s=r(o)),!s)return;return this._array.push(o),this._zArray.push(o),this._nextId++,this._engine.dispatchEvent(ll.particleAdded,{container:this._container,data:{particle:o}}),o}catch(t){Wa().warning(`${Xn} adding particle: ${t}`)}},this._removeParticle=(t,e,i)=>{const r=this._array[t];if(!r||r.group!==e)return!1;const o=this._zArray.indexOf(r);return this._array.splice(t,1),this._zArray.splice(o,1),r.destroy(i),this._engine.dispatchEvent(ll.particleRemoved,{container:this._container,data:{particle:r}}),this._addToPool(r),!0},this._engine=t,this._container=e,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new Rc(t,e),this._pluginsInitialized=!1;const i=e.canvas.size;this.quadTree=new Hc(Gc(i),4),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){const t=this._container;t.actualOptions.manualParticles.forEach(e=>this.addParticle(e.position?rl(e.position,t.canvas.size):void 0,e.options))}addParticle(t,e,i,r){const o=this._container.actualOptions.particles.number.limit.mode,s=void 0===i?this._limit:this._groupLimits.get(i)??this._limit,n=this.count;if(s>0)switch(o){case ml.delete:{const t=n+1-s;t>0&&this.removeQuantity(t);break}case ml.wait:if(n>=s)return}return this._pushParticle(t,e,i,r)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(t){const e=this._container,i=e.canvas;i.clear(),this.update(t);for(const r of e.plugins.values())i.drawPlugin(r,t);for(const e of this._zArray)e.draw(t)}filter(t){return this._array.filter(t)}find(t){return this._array.find(t)}get(t){return this._array[t]}handleClickMode(t){this._interactionManager.handleClickMode(t)}async init(){const t=this._container,e=t.actualOptions;this._lastZIndex=0,this._needsSort=!1,await this.initPlugins();let i=!1;for(const e of t.plugins.values())if(i=e.particlesInitialization?.()??i,i)break;if(this.addManualParticles(),!i){const t=e.particles,i=t.groups;for(const e in i){const r=i[e];for(let i=this.count,o=0;o<r.number?.value&&i<t.number.value;i++,o++)this.addParticle(void 0,r,e)}for(let e=this.count;e<t.number.value;e++)this.addParticle()}}async initPlugins(){if(this._pluginsInitialized)return;const t=this._container;this.movers=await this._engine.getMovers(t,!0),this.updaters=await this._engine.getUpdaters(t,!0),await this._interactionManager.init();for(const e of t.pathGenerators.values())e.init(t)}push(t,e,i,r){for(let o=0;o<t;o++)this.addParticle(e?.position,i,r)}async redraw(){this.clear(),await this.init(),this.draw({value:0,factor:0})}remove(t,e,i){this.removeAt(this._array.indexOf(t),void 0,e,i)}removeAt(t,e=1,i,r){if(t<0||t>this.count)return;let o=0;for(let s=t;o<e&&s<this.count;s++)this._removeParticle(s,i,r)&&(s--,o++)}removeQuantity(t,e){this.removeAt(0,t,e)}setDensity(){const t=this._container.actualOptions,e=t.particles.groups,i=t.manualParticles.length;for(const t in e)this._applyDensity(e[t],i,t);this._applyDensity(t.particles,i)}setLastZIndex(t){this._lastZIndex=t,this._needsSort=this._needsSort||this._lastZIndex<t}setResizeFactor(t){this._resizeFactor=t}update(t){const e=this._container,i=new Set;this.quadTree=new Hc(Gc(e.canvas.size),4);for(const t of e.pathGenerators.values())t.update();for(const i of e.plugins.values())i.update?.(t);const r=this._resizeFactor;for(const e of this._array){r&&!e.ignoresResizeRatio&&(e.position.x*=r.width,e.position.y*=r.height,e.initialPosition.x*=r.width,e.initialPosition.y*=r.height),e.ignoresResizeRatio=!1,this._interactionManager.reset(e);for(const i of this._container.plugins.values()){if(e.destroyed)break;i.particleUpdate?.(e,t)}for(const i of this.movers)i.isEnabled(e)&&i.move(e,t);e.destroyed?i.add(e):this.quadTree.insert(new Dc(e.getPosition(),e))}if(i.size){const t=t=>!i.has(t);this._array=this.filter(t),this._zArray=this._zArray.filter(t);for(const t of i)this._engine.dispatchEvent(ll.particleRemoved,{container:this._container,data:{particle:t}});this._addToPool(...i)}this._interactionManager.externalInteract(t);for(const e of this._array){for(const i of this.updaters)i.update(e,t);e.destroyed||e.spawning||this._interactionManager.particlesInteract(e,t)}if(delete this._resizeFactor,this._needsSort){const t=this._zArray;t.sort((t,e)=>e.position.z-t.position.z||t.id-e.id),this._lastZIndex=t[t.length-1].position.z,this._needsSort=!1}}}class Vc{constructor(t){this.container=t,this.pixelRatio=1,this.reduceFactor=1}init(){const t=this.container,e=t.actualOptions;this.pixelRatio=!e.detectRetina||Ya()?1:devicePixelRatio,this.reduceFactor=1;const i=this.pixelRatio,r=t.canvas;if(r.element){const t=r.element;r.size.width=t.offsetWidth*i,r.size.height=t.offsetHeight*i}const o=e.particles,s=o.move;this.maxSpeed=Pa(s.gravity.maxSpeed)*i,this.sizeAnimationSpeed=Pa(o.size.animation.speed)*i}initParticle(t){const e=t.options,i=this.pixelRatio,r=e.move,o=r.distance,s=t.retina;s.moveDrift=Pa(r.drift)*i,s.moveSpeed=Pa(r.speed)*i,s.sizeAnimationSpeed=Pa(e.size.animation.speed)*i;const n=s.maxDistance;n.horizontal=void 0!==o.horizontal?o.horizontal*i:void 0,n.vertical=void 0!==o.vertical?o.vertical*i:void 0,s.maxSpeed=Pa(r.gravity.maxSpeed)*i}}function Wc(t){return t&&!t.destroyed}function Yc(t,e,...i){const r=new Bc(t,e);return Ic(r,...i),r}class Xc{constructor(t,e,i){this._intersectionManager=t=>{if(Wc(this)&&this.actualOptions.pauseOnOutsideViewport)for(const e of t)e.target===this.interactivity.element&&(e.isIntersecting?this.play():this.pause())},this._nextFrame=t=>{try{if(!this._smooth&&void 0!==this._lastFrameTime&&t<this._lastFrameTime+Qn/this.fpsLimit)return void this.draw(!1);this._lastFrameTime??=t;const e=function(t,e=60,i=!1){return{value:t,factor:i?60/e:60*t/Qn}}(t-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(e.value),this._lastFrameTime=t,e.value>Qn)return void this.draw(!1);if(this.particles.draw(e),!this.alive())return void this.destroy();this.animationStatus&&this.draw(!1)}catch(t){Wa().error(`${Xn} in animation loop`,t)}},this._engine=t,this.id=Symbol(e),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._clickHandlers=new Map,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new Vc(this),this.canvas=new Tl(this,this._engine),this.particles=new qc(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=Yc(this._engine,this),this.actualOptions=Yc(this._engine,this),this._eventListeners=new Il(this),this._intersectionObserver=function(t){if(!Ya()&&"undefined"!=typeof IntersectionObserver)return new IntersectionObserver(t)}(t=>this._intersectionManager(t)),this._engine.dispatchEvent(ll.containerBuilt,{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&Wc(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(t){if(!Wc(this))return;const e=this.interactivity.element;if(!e)return;const i=(e,i,r)=>{if(!Wc(this))return;const o=this.retina.pixelRatio,s={x:i.x*o,y:i.y*o},n=this.particles.quadTree.queryCircle(s,r*o);t(e,n)};let r=!1,o=!1;this._clickHandlers.set("click",t=>{if(!Wc(this))return;const e=t,r={x:e.offsetX||e.clientX,y:e.offsetY||e.clientY};i(t,r,1)}),this._clickHandlers.set("touchstart",()=>{Wc(this)&&(r=!0,o=!1)}),this._clickHandlers.set("touchmove",()=>{Wc(this)&&(o=!0)}),this._clickHandlers.set("touchend",t=>{if(Wc(this)){if(r&&!o){const e=t;let r=e.touches[e.touches.length-1];if(!r&&(r=e.changedTouches[e.changedTouches.length-1],!r))return;const o=this.canvas.element,s=o?o.getBoundingClientRect():void 0,n={x:r.clientX-(s?s.left:0),y:r.clientY-(s?s.top:0)};i(t,n,Math.max(r.radiusX,r.radiusY))}r=!1,o=!1}}),this._clickHandlers.set("touchcancel",()=>{Wc(this)&&(r=!1,o=!1)});for(const[t,i]of this._clickHandlers)e.addEventListener(t,i)}addLifeTime(t){this._lifeTime+=t}addPath(t,e,i=!1){return!(!Wc(this)||!i&&this.pathGenerators.has(t))&&(this.pathGenerators.set(t,e),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}clearClickHandlers(){if(Wc(this)){for(const[t,e]of this._clickHandlers)this.interactivity.element?.removeEventListener(t,e);this._clickHandlers.clear()}}destroy(t=!0){if(Wc(this)){this.stop(),this.clearClickHandlers(),this.particles.destroy(),this.canvas.destroy();for(const t of this.effectDrawers.values())t.destroy?.(this);for(const t of this.shapeDrawers.values())t.destroy?.(this);for(const t of this.effectDrawers.keys())this.effectDrawers.delete(t);for(const t of this.shapeDrawers.keys())this.shapeDrawers.delete(t);if(this._engine.clearPlugins(this),this.destroyed=!0,t){const t=this._engine.items,e=t.findIndex(t=>t===this);e>=0&&t.splice(e,1)}this._engine.dispatchEvent(ll.containerDestroyed,{container:this})}}draw(t){if(!Wc(this))return;let e=t;const i=t=>{e&&(this._lastFrameTime=void 0,e=!1),this._nextFrame(t)};this._drawAnimationFrame=Aa(t=>i(t))}async export(t,e={}){for(const i of this.plugins.values()){if(!i.export)continue;const r=await i.export(t,e);if(r.supported)return r.blob}Wa().error(`${Xn} - Export plugin with type ${t} not found`)}handleClickMode(t){if(Wc(this)){this.particles.handleClickMode(t);for(const e of this.plugins.values())e.handleClickMode?.(t)}}async init(){if(!Wc(this))return;const t=this._engine.getSupportedEffects();for(const e of t){const t=this._engine.getEffectDrawer(e);t&&this.effectDrawers.set(e,t)}const e=this._engine.getSupportedShapes();for(const t of e){const e=this._engine.getShapeDrawer(t);e&&this.shapeDrawers.set(t,e)}await this.particles.initPlugins(),this._options=Yc(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Yc(this._engine,this,this._options);const i=await this._engine.getAvailablePlugins(this);for(const[t,e]of i)this.plugins.set(t,e);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize();const{zLayers:r,duration:o,delay:s,fpsLimit:n,smooth:a}=this.actualOptions;this.zLayers=r,this._duration=Pa(o)*Qn,this._delay=Pa(s)*Qn,this._lifeTime=0,this.fpsLimit=n>0?n:120,this._smooth=a;for(const t of this.effectDrawers.values())await(t.init?.(this));for(const t of this.shapeDrawers.values())await(t.init?.(this));for(const t of this.plugins.values())await(t.init?.());this._engine.dispatchEvent(ll.containerInit,{container:this}),await this.particles.init(),this.particles.setDensity();for(const t of this.plugins.values())t.particlesSetup?.();this._engine.dispatchEvent(ll.particlesSetup,{container:this})}async loadTheme(t){Wc(this)&&(this._currentTheme=t,await this.refresh())}pause(){var t;if(Wc(this)&&(void 0!==this._drawAnimationFrame&&(t=this._drawAnimationFrame,Ca(t),delete this._drawAnimationFrame),!this._paused)){for(const t of this.plugins.values())t.pause?.();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent(ll.containerPaused,{container:this})}}play(t){if(!Wc(this))return;const e=this._paused||t;if(!this._firstStart||this.actualOptions.autoPlay){if(this._paused&&(this._paused=!1),e)for(const t of this.plugins.values())t.play&&t.play();this._engine.dispatchEvent(ll.containerPlay,{container:this}),this.draw(e??!1)}else this._firstStart=!1}async refresh(){if(Wc(this))return this.stop(),this.start()}async reset(t){if(Wc(this))return this._initialSourceOptions=t,this._sourceOptions=t,this._options=Yc(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Yc(this._engine,this,this._options),this.refresh()}async start(){Wc(this)&&!this.started&&(await this.init(),this.started=!0,await new Promise(t=>{const e=async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const t of this.plugins.values())await(t.start?.());this._engine.dispatchEvent(ll.containerStarted,{container:this}),this.play(),t()};this._delayTimeout=setTimeout(()=>{e()},this._delay)}))}stop(){if(Wc(this)&&this.started){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const t of this.plugins.values())t.stop?.();for(const t of this.plugins.keys())this.plugins.delete(t);this._sourceOptions=this._options,this._engine.dispatchEvent(ll.containerStopped,{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const t=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth!==t&&(this._responsiveMaxWidth=t,!0)}}class Jc{constructor(){this._listeners=new Map}addEventListener(t,e){this.removeEventListener(t,e);let i=this._listeners.get(t);i||(i=[],this._listeners.set(t,i)),i.push(e)}dispatchEvent(t,e){const i=this._listeners.get(t);i?.forEach(t=>t(e))}hasEventListener(t){return!!this._listeners.get(t)}removeAllEventListeners(t){t?this._listeners.delete(t):this._listeners=new Map}removeEventListener(t,e){const i=this._listeners.get(t);if(!i)return;const r=i.length,o=i.indexOf(e);o<0||(1===r?this._listeners.delete(t):i.splice(o,1))}}async function Kc(t,e,i,r=!1){let o=e.get(t);return o&&!r||(o=await Promise.all([...i.values()].map(e=>e(t))),e.set(t,o)),o}class Qc{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new Jc,this._initialized=!1,this.plugins=[],this.colorManagers=new Map,this.easingFunctions=new Map,this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this.pathGenerators=new Map}get configs(){const t={};for(const[e,i]of this._configs)t[e]=i;return t}get items(){return this._domArray}get version(){return"3.9.1"}async addColorManager(t,e=!0){this.colorManagers.set(t.key,t),await this.refresh(e)}addConfig(t){const e=t.key??t.name??"default";this._configs.set(e,t),this._eventDispatcher.dispatchEvent(ll.configAdded,{data:{name:e,config:t}})}async addEasing(t,e,i=!0){this.getEasing(t)||(this.easingFunctions.set(t,e),await this.refresh(i))}async addEffect(t,e,i=!0){tl(t,t=>{this.getEffectDrawer(t)||this.effectDrawers.set(t,e)}),await this.refresh(i)}addEventListener(t,e){this._eventDispatcher.addEventListener(t,e)}async addInteractor(t,e,i=!0){this._initializers.interactors.set(t,e),await this.refresh(i)}async addMover(t,e,i=!0){this._initializers.movers.set(t,e),await this.refresh(i)}async addParticleUpdater(t,e,i=!0){this._initializers.updaters.set(t,e),await this.refresh(i)}async addPathGenerator(t,e,i=!0){this.getPathGenerator(t)||this.pathGenerators.set(t,e),await this.refresh(i)}async addPlugin(t,e=!0){this.getPlugin(t.id)||this.plugins.push(t),await this.refresh(e)}async addPreset(t,e,i=!1,r=!0){!i&&this.getPreset(t)||this.presets.set(t,e),await this.refresh(r)}async addShape(t,e=!0){for(const e of t.validTypes)this.getShapeDrawer(e)||this.shapeDrawers.set(e,t);await this.refresh(e)}checkVersion(t){if(this.version!==t)throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${t}`)}clearPlugins(t){this.updaters.delete(t),this.movers.delete(t),this.interactors.delete(t)}dispatchEvent(t,e){this._eventDispatcher.dispatchEvent(t,e)}dom(){return this.items}domItem(t){return this.item(t)}async getAvailablePlugins(t){const e=new Map;for(const i of this.plugins)i.needsPlugin(t.actualOptions)&&e.set(i.id,await i.getPlugin(t));return e}getEasing(t){return this.easingFunctions.get(t)??(t=>t)}getEffectDrawer(t){return this.effectDrawers.get(t)}async getInteractors(t,e=!1){return Kc(t,this.interactors,this._initializers.interactors,e)}async getMovers(t,e=!1){return Kc(t,this.movers,this._initializers.movers,e)}getPathGenerator(t){return this.pathGenerators.get(t)}getPlugin(t){return this.plugins.find(e=>e.id===t)}getPreset(t){return this.presets.get(t)}getShapeDrawer(t){return this.shapeDrawers.get(t)}getSupportedEffects(){return this.effectDrawers.keys()}getSupportedShapes(){return this.shapeDrawers.keys()}async getUpdaters(t,e=!1){return Kc(t,this.updaters,this._initializers.updaters,e)}init(){this._initialized||(this._initialized=!0)}item(t){const{items:e}=this,i=e[t];if(i&&!i.destroyed)return i;e.splice(t,1)}async load(t){const e=t.id??t.element?.id??`tsparticles${Math.floor(1e4*Ma())}`,{index:i,url:r}=t,o=r?await async function(t){const e=el(t.url,t.index);if(!e)return t.fallback;const i=await fetch(e);return i.ok?await i.json():(Wa().error(`${Xn} ${i.status} while retrieving config file`),t.fallback)}({fallback:t.options,url:r,index:i}):t.options,s=el(o,i),{items:n}=this,a=n.findIndex(t=>t.id.description===e),l=new Xc(this,e,s);if(a>=0){const t=this.item(a),e=t?1:0;t&&!t.destroyed&&t.destroy(!1),n.splice(a,e,l)}else n.push(l);const c=((t,e)=>{let i=e??document.getElementById(t);return i||(i=document.createElement("div"),i.id=t,i.dataset[qn]=la,document.body.append(i),i)})(e,t.element),d=(t=>{let e;if(t instanceof HTMLCanvasElement||t.tagName.toLowerCase()===da)e=t,e.dataset[qn]||(e.dataset[qn]=ca);else{const i=t.getElementsByTagName(da);i.length?(e=i[0],e.dataset[qn]=ca):(e=document.createElement(da),e.dataset[qn]=la,t.appendChild(e))}const i="100%";return e.style.width||(e.style.width=i),e.style.height||(e.style.height=i),e})(c);return l.canvas.loadCanvas(d),await l.start(),l}loadOptions(t,e){this.plugins.forEach(i=>i.loadOptions?.(t,e))}loadParticlesOptions(t,e,...i){const r=this.updaters.get(t);r&&r.forEach(t=>t.loadOptions?.(e,...i))}async refresh(t=!0){t&&await Promise.all(this.items.map(t=>t.refresh()))}removeEventListener(t,e){this._eventDispatcher.removeEventListener(t,e)}setOnClickHandler(t){const{items:e}=this;if(!e.length)throw new Error(`${Xn} can only set click handlers after calling tsParticles.load()`);e.forEach(e=>e.addClickHandler(t))}}var Zc,td,ed;!function(t){t.clockwise="clockwise",t.counterClockwise="counter-clockwise",t.random="random"}(Zc||(Zc={})),function(t){t.linear="linear",t.radial="radial",t.random="random"}(td||(td={})),function(t){t.easeInBack="ease-in-back",t.easeInCirc="ease-in-circ",t.easeInCubic="ease-in-cubic",t.easeInLinear="ease-in-linear",t.easeInQuad="ease-in-quad",t.easeInQuart="ease-in-quart",t.easeInQuint="ease-in-quint",t.easeInExpo="ease-in-expo",t.easeInSine="ease-in-sine",t.easeOutBack="ease-out-back",t.easeOutCirc="ease-out-circ",t.easeOutCubic="ease-out-cubic",t.easeOutLinear="ease-out-linear",t.easeOutQuad="ease-out-quad",t.easeOutQuart="ease-out-quart",t.easeOutQuint="ease-out-quint",t.easeOutExpo="ease-out-expo",t.easeOutSine="ease-out-sine",t.easeInOutBack="ease-in-out-back",t.easeInOutCirc="ease-in-out-circ",t.easeInOutCubic="ease-in-out-cubic",t.easeInOutLinear="ease-in-out-linear",t.easeInOutQuad="ease-in-out-quad",t.easeInOutQuart="ease-in-out-quart",t.easeInOutQuint="ease-in-out-quint",t.easeInOutExpo="ease-in-out-expo",t.easeInOutSine="ease-in-out-sine"}(ed||(ed={}));const id=function(){const t=new Qc;return t.init(),t}();Ya()||(window.tsParticles=id);const rd=2*Math.PI;function od(t,e,i,r,o,s,n){!function(t,e){const i=t.options,r=i.move.path;if(!r.enable)return;if(t.lastPathTime<=t.pathDelay)return void(t.lastPathTime+=e.value);const o=t.pathGenerator?.generate(t,e);o&&t.velocity.addTo(o);r.clamp&&(t.velocity.x=Ea(t.velocity.x,-1,1),t.velocity.y=Ea(t.velocity.y,-1,1));t.lastPathTime-=t.pathDelay}(t,n);const a=t.gravity,l=a?.enable&&a.inverse?-1:1;o&&i&&(t.velocity.x+=o*n.factor/(60*i)),a?.enable&&i&&(t.velocity.y+=l*(a.acceleration*n.factor)/(60*i));const c=t.moveDecay;t.velocity.multTo(c);const d=t.velocity.mult(i);a?.enable&&r>0&&(!a.inverse&&d.y>=0&&d.y>=r||a.inverse&&d.y<=0&&d.y<=-r)&&(d.y=l*r,i&&(t.velocity.y=d.y/i));const h=t.options.zIndex,u=(1-t.zIndexFactor)**h.velocityRate;d.multTo(u),d.multTo(s);const{position:p}=t;p.addTo(d),e.vibrate&&(p.x+=Math.sin(p.x*Math.cos(p.y))*s,p.y+=Math.cos(p.y*Math.sin(p.x))*s)}class sd{init(t){const e=t.options.move.gravity;t.gravity={enable:e.enable,acceleration:Pa(e.acceleration),inverse:e.inverse},function(t){const e=t.container,i=t.options.move.spin;if(!i.enable)return;const r=i.position??{x:50,y:50},o={x:.01*r.x*e.canvas.size.width,y:.01*r.y*e.canvas.size.height},s=Na(t.getPosition(),o),n=Pa(i.acceleration);t.retina.spinAcceleration=n*e.retina.pixelRatio,t.spin={center:o,direction:t.velocity.x>=0?Zc.clockwise:Zc.counterClockwise,angle:Ma()*rd,radius:s,acceleration:t.retina.spinAcceleration}}(t)}isEnabled(t){return!t.destroyed&&t.options.move.enable}move(t,e){const i=t.options,r=i.move;if(!r.enable)return;const o=t.container,s=o.retina.pixelRatio;t.retina.moveSpeed??=Pa(r.speed)*s,t.retina.moveDrift??=Pa(t.options.move.drift)*s;const n=function(t){return t.slow.inRange?t.slow.factor:1}(t),a=o.retina.reduceFactor,l=t.retina.moveSpeed,c=t.retina.moveDrift,d=Oa(i.size.value)*s,h=l*(r.size?t.getRadius()/d:1)*n*(e.factor||1)/2,u=t.retina.maxSpeed??o.retina.maxSpeed;r.spin.enable?function(t,e,i){const r=t.container;if(!t.spin)return;const o=t.spin.direction===Zc.clockwise,s={x:o?Math.cos:Math.sin,y:o?Math.sin:Math.cos};t.position.x=t.spin.center.x+t.spin.radius*s.x(t.spin.angle)*i,t.position.y=t.spin.center.y+t.spin.radius*s.y(t.spin.angle)*i,t.spin.radius+=t.spin.acceleration*i;const n=Math.max(r.canvas.size.width,r.canvas.size.height),a=.5*n;t.spin.radius>a?(t.spin.radius=a,t.spin.acceleration*=-1):t.spin.radius<0&&(t.spin.radius=0,t.spin.acceleration*=-1),t.spin.angle+=.01*e*(1-t.spin.radius/n)}(t,h,a):od(t,r,h,u,c,a,e),function(t){const e=t.initialPosition,{dx:i,dy:r}=Ra(e,t.position),o=Math.abs(i),s=Math.abs(r),{maxDistance:n}=t.retina,a=n.horizontal,l=n.vertical;if(!a&&!l)return;if((a&&o>=a||l&&s>=l)&&!t.misplaced)t.misplaced=!!a&&o>a||!!l&&s>l,a&&(t.velocity.x=.5*t.velocity.y-t.velocity.x),l&&(t.velocity.y=.5*t.velocity.x-t.velocity.y);else if((!a||o<a)&&(!l||s<l)&&t.misplaced)t.misplaced=!1;else if(t.misplaced){const i=t.position,r=t.velocity;a&&(i.x<e.x&&r.x<0||i.x>e.x&&r.x>0)&&(r.x*=-Ma()),l&&(i.y<e.y&&r.y<0||i.y>e.y&&r.y>0)&&(r.y*=-Ma())}}(t)}}const nd=2*Math.PI,ad=0,ld=0;class cd{constructor(){this.validTypes=["circle"]}draw(t){!function(t){const{context:e,particle:i,radius:r}=t;i.circleRange||(i.circleRange={min:0,max:nd});const o=i.circleRange;e.arc(ad,ld,r,o.min,o.max,!1)}(t)}getSidesCount(){return 12}particleInit(t,e){const i=e.shapeData,r=i?.angle??{max:360,min:0};e.circleRange=wa(r)?{min:ja(r.min),max:ja(r.max)}:{min:0,max:ja(r)}}}class dd{constructor(t,e){this._container=t,this._engine=e}init(t){const e=xl(this._engine,t.options.color,t.id,t.options.reduceDuplicates);e&&(t.color=function(t,e,i){const r={h:{enable:!1,value:t.h},s:{enable:!1,value:t.s},l:{enable:!1,value:t.l}};return e&&(Sl(r.h,e.h,i),Sl(r.s,e.s,i),Sl(r.l,e.l,i)),r}(e,t.options.color.animation,this._container.retina.reduceFactor))}isEnabled(t){const{h:e,s:i,l:r}=t.options.color.animation,{color:o}=t;return!t.destroyed&&!t.spawning&&(void 0!==o?.h.value&&e.enable||void 0!==o?.s.value&&i.enable||void 0!==o?.l.value&&r.enable)}update(t,e){!function(t,e){if(!t)return;const{h:i,s:r,l:o}=t,s={min:0,max:100},n={min:0,max:100};i&&zl(i,{min:0,max:360},!1,e),r&&zl(r,s,!0,e),o&&zl(o,n,!0,e)}(t.color,e)}}var hd;!function(t){t[t.r=1]="r",t[t.g=2]="g",t[t.b=3]="b",t[t.a=4]="a"}(hd||(hd={}));const ud=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,pd=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;class md{constructor(){this.key="hex",this.stringPrefix="#"}handleColor(t){return this._parseString(t.value)}handleRangeColor(t){return this._parseString(t.value)}parseString(t){return this._parseString(t)}_parseString(t){if("string"!=typeof t)return;if(!t?.startsWith(this.stringPrefix))return;const e=t.replace(ud,(t,e,i,r,o)=>e+e+i+i+r+r+(void 0!==o?o+o:"")),i=pd.exec(e);return i?{a:void 0!==i[hd.a]?parseInt(i[hd.a],16)/255:1,b:parseInt(i[hd.b],16),g:parseInt(i[hd.g],16),r:parseInt(i[hd.r],16)}:void 0}}var fd;!function(t){t[t.h=1]="h",t[t.s=2]="s",t[t.l=3]="l",t[t.a=5]="a"}(fd||(fd={}));class vd{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(t){const e=t.value.hsl??t.value;if(void 0!==e.h&&void 0!==e.s&&void 0!==e.l)return wl(e)}handleRangeColor(t){const e=t.value.hsl??t.value;if(void 0!==e.h&&void 0!==e.l)return wl({h:Pa(e.h),l:Pa(e.l),s:Pa(e.s)})}parseString(t){if(!t.startsWith("hsl"))return;const e=/hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i.exec(t);return e?function(t){const e=wl(t);return{a:t.a,b:e.b,g:e.g,r:e.r}}({a:e.length>4?Da(e[fd.a]):1,h:parseInt(e[fd.h],10),l:parseInt(e[fd.l],10),s:parseInt(e[fd.s],10)}):void 0}}class gd{constructor(t){this.container=t}init(t){const e=t.options.opacity;t.opacity=il(e,1);const i=e.animation;i.enable&&(t.opacity.velocity=Pa(i.speed)/Jn*this.container.retina.reduceFactor,i.sync||(t.opacity.velocity*=Ma()))}isEnabled(t){return!t.destroyed&&!t.spawning&&!!t.opacity&&t.opacity.enable&&((t.opacity.maxLoops??0)<=0||(t.opacity.maxLoops??0)>0&&(t.opacity.loops??0)<(t.opacity.maxLoops??0))}reset(t){t.opacity&&(t.opacity.time=0,t.opacity.loops=0)}update(t,e){this.isEnabled(t)&&t.opacity&&ol(t,t.opacity,0,t.options.opacity.animation.destroy,e)}}class bd{constructor(t){this.container=t,this.modes=[pl.bounce,pl.split]}update(t,e,i,r){if(!this.modes.includes(r))return;const o=this.container;let s=!1;for(const r of o.plugins.values())if(void 0!==r.particleBounce&&(s=r.particleBounce(t,i,e)),s)break;if(s)return;const n=t.getPosition(),a=t.offset,l=t.getRadius(),c=Qa(n,l),d=o.canvas.size;!function(t){if(t.outMode!==pl.bounce&&t.outMode!==pl.split||t.direction!==Ha.left&&t.direction!==Ha.right)return;t.bounds.right<0&&t.direction===Ha.left?t.particle.position.x=t.size+t.offset.x:t.bounds.left>t.canvasSize.width&&t.direction===Ha.right&&(t.particle.position.x=t.canvasSize.width-t.size-t.offset.x);const e=t.particle.velocity.x;let i=!1;if(t.direction===Ha.right&&t.bounds.right>=t.canvasSize.width&&e>0||t.direction===Ha.left&&t.bounds.left<=0&&e<0){const e=Pa(t.particle.options.bounce.horizontal.value);t.particle.velocity.x*=-e,i=!0}if(!i)return;const r=t.offset.x+t.size;t.bounds.right>=t.canvasSize.width&&t.direction===Ha.right?t.particle.position.x=t.canvasSize.width-r:t.bounds.left<=0&&t.direction===Ha.left&&(t.particle.position.x=r),t.outMode===pl.split&&t.particle.destroy()}({particle:t,outMode:r,direction:e,bounds:c,canvasSize:d,offset:a,size:l}),function(t){if(t.outMode!==pl.bounce&&t.outMode!==pl.split||t.direction!==Ha.bottom&&t.direction!==Ha.top)return;t.bounds.bottom<0&&t.direction===Ha.top?t.particle.position.y=t.size+t.offset.y:t.bounds.top>t.canvasSize.height&&t.direction===Ha.bottom&&(t.particle.position.y=t.canvasSize.height-t.size-t.offset.y);const e=t.particle.velocity.y;let i=!1;if(t.direction===Ha.bottom&&t.bounds.bottom>=t.canvasSize.height&&e>0||t.direction===Ha.top&&t.bounds.top<=0&&e<0){const e=Pa(t.particle.options.bounce.vertical.value);t.particle.velocity.y*=-e,i=!0}if(!i)return;const r=t.offset.y+t.size;t.bounds.bottom>=t.canvasSize.height&&t.direction===Ha.bottom?t.particle.position.y=t.canvasSize.height-r:t.bounds.top<=0&&t.direction===Ha.top&&(t.particle.position.y=r),t.outMode===pl.split&&t.particle.destroy()}({particle:t,outMode:r,direction:e,bounds:c,canvasSize:d,offset:a,size:l})}}class yd{constructor(t){this.container=t,this.modes=[pl.destroy]}update(t,e,i,r){if(!this.modes.includes(r))return;const o=this.container;switch(t.outType){case vl.normal:case vl.outside:if(Ka(t.position,o.canvas.size,Sa.origin,t.getRadius(),e))return;break;case vl.inside:{const{dx:e,dy:i}=Ra(t.position,t.moveCenter),{x:r,y:o}=t.velocity;if(r<0&&e>t.moveCenter.radius||o<0&&i>t.moveCenter.radius||r>=0&&e<-t.moveCenter.radius||o>=0&&i<-t.moveCenter.radius)return;break}}o.particles.remove(t,t.group,!0)}}class xd{constructor(t){this.container=t,this.modes=[pl.none]}update(t,e,i,r){if(!this.modes.includes(r))return;if((t.options.move.distance.horizontal&&(e===Ha.left||e===Ha.right))??(t.options.move.distance.vertical&&(e===Ha.top||e===Ha.bottom)))return;const o=t.options.move.gravity,s=this.container,n=s.canvas.size,a=t.getRadius();if(o.enable){const i=t.position;(!o.inverse&&i.y>n.height+a&&e===Ha.bottom||o.inverse&&i.y<-a&&e===Ha.top)&&s.particles.remove(t)}else{if(t.velocity.y>0&&t.position.y<=n.height+a||t.velocity.y<0&&t.position.y>=-a||t.velocity.x>0&&t.position.x<=n.width+a||t.velocity.x<0&&t.position.x>=-a)return;Ka(t.position,s.canvas.size,Sa.origin,a,e)||s.particles.remove(t)}}}class wd{constructor(t){this.container=t,this.modes=[pl.out]}update(t,e,i,r){if(!this.modes.includes(r))return;const o=this.container;switch(t.outType){case vl.inside:{const{x:e,y:i}=t.velocity,r=Sa.origin;r.length=t.moveCenter.radius,r.angle=t.velocity.angle+Math.PI,r.addTo(Sa.create(t.moveCenter));const{dx:s,dy:n}=Ra(t.position,r);if(e<=0&&s>=0||i<=0&&n>=0||e>=0&&s<=0||i>=0&&n<=0)return;t.position.x=Math.floor(Ta({min:0,max:o.canvas.size.width})),t.position.y=Math.floor(Ta({min:0,max:o.canvas.size.height}));const{dx:a,dy:l}=Ra(t.position,t.moveCenter);t.direction=Math.atan2(-l,-a),t.velocity.angle=t.direction;break}default:if(Ka(t.position,o.canvas.size,Sa.origin,t.getRadius(),e))return;switch(t.outType){case vl.outside:{t.position.x=Math.floor(Ta({min:-t.moveCenter.radius,max:t.moveCenter.radius}))+t.moveCenter.x,t.position.y=Math.floor(Ta({min:-t.moveCenter.radius,max:t.moveCenter.radius}))+t.moveCenter.y;const{dx:e,dy:i}=Ra(t.position,t.moveCenter);t.moveCenter.radius&&(t.direction=Math.atan2(i,e),t.velocity.angle=t.direction);break}case vl.normal:{const i=t.options.move.warp,r=o.canvas.size,s={bottom:r.height+t.getRadius()+t.offset.y,left:-t.getRadius()-t.offset.x,right:r.width+t.getRadius()+t.offset.x,top:-t.getRadius()-t.offset.y},n=t.getRadius(),a=Qa(t.position,n);e===Ha.right&&a.left>r.width+t.offset.x?(t.position.x=s.left,t.initialPosition.x=t.position.x,i||(t.position.y=Ma()*r.height,t.initialPosition.y=t.position.y)):e===Ha.left&&a.right<-t.offset.x&&(t.position.x=s.right,t.initialPosition.x=t.position.x,i||(t.position.y=Ma()*r.height,t.initialPosition.y=t.position.y)),e===Ha.bottom&&a.top>r.height+t.offset.y?(i||(t.position.x=Ma()*r.width,t.initialPosition.x=t.position.x),t.position.y=s.top,t.initialPosition.y=t.position.y):e===Ha.top&&a.bottom<-t.offset.y&&(i||(t.position.x=Ma()*r.width,t.initialPosition.x=t.position.x),t.position.y=s.bottom,t.initialPosition.y=t.position.y);break}}}}}class _d{constructor(t){this._addUpdaterIfMissing=(t,e,i)=>{const r=t.options.move.outModes;!this.updaters.has(e)&&((t,e)=>t.default===e||t.bottom===e||t.left===e||t.right===e||t.top===e)(r,e)&&this.updaters.set(e,i(this.container))},this._updateOutMode=(t,e,i,r)=>{for(const o of this.updaters.values())o.update(t,r,e,i)},this.container=t,this.updaters=new Map}init(t){this._addUpdaterIfMissing(t,pl.bounce,t=>new bd(t)),this._addUpdaterIfMissing(t,pl.out,t=>new wd(t)),this._addUpdaterIfMissing(t,pl.destroy,t=>new yd(t)),this._addUpdaterIfMissing(t,pl.none,t=>new xd(t))}isEnabled(t){return!t.destroyed&&!t.spawning}update(t,e){const i=t.options.move.outModes;this._updateOutMode(t,e,i.bottom??i.default,Ha.bottom),this._updateOutMode(t,e,i.left??i.default,Ha.left),this._updateOutMode(t,e,i.right??i.default,Ha.right),this._updateOutMode(t,e,i.top??i.default,Ha.top)}}var kd;!function(t){t[t.r=1]="r",t[t.g=2]="g",t[t.b=3]="b",t[t.a=5]="a"}(kd||(kd={}));class $d{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(t){const e=t.value.rgb??t.value;if(void 0!==e.r)return e}handleRangeColor(t){const e=t.value.rgb??t.value;if(void 0!==e.r)return{r:Pa(e.r),g:Pa(e.g),b:Pa(e.b)}}parseString(t){if(!t.startsWith(this.stringPrefix))return;const e=/rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i.exec(t);return e?{a:e.length>4?Da(e[kd.a]):1,b:parseInt(e[kd.b],10),g:parseInt(e[kd.g],10),r:parseInt(e[kd.r],10)}:void 0}}class Sd{init(t){const e=t.container,i=t.options.size.animation;i.enable&&(t.size.velocity=(t.retina.sizeAnimationSpeed??e.retina.sizeAnimationSpeed)/Jn*e.retina.reduceFactor,i.sync||(t.size.velocity*=Ma()))}isEnabled(t){return!t.destroyed&&!t.spawning&&t.size.enable&&((t.size.maxLoops??0)<=0||(t.size.maxLoops??0)>0&&(t.size.loops??0)<(t.size.maxLoops??0))}reset(t){t.size.loops=0}update(t,e){this.isEnabled(t)&&ol(t,t.size,0,t.options.size.animation.destroy,e)}}async function zd(t,e=!0){t.checkVersion("3.9.1"),await async function(t,e=!0){t.checkVersion("3.9.1"),await t.addColorManager(new md,e)}(t,!1),await async function(t,e=!0){t.checkVersion("3.9.1"),await t.addColorManager(new vd,e)}(t,!1),await async function(t,e=!0){t.checkVersion("3.9.1"),await t.addColorManager(new $d,e)}(t,!1),await async function(t,e=!0){t.checkVersion("3.9.1"),await t.addMover("base",()=>Promise.resolve(new sd),e)}(t,!1),await async function(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new cd,e)}(t,!1),await async function(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("color",e=>Promise.resolve(new dd(e,t)),e)}(t,!1),await async function(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("opacity",t=>Promise.resolve(new gd(t)),e)}(t,!1),await async function(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("outModes",t=>Promise.resolve(new _d(t)),e)}(t,!1),await async function(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("size",()=>Promise.resolve(new Sd),e)}(t,!1),await t.refresh(e)}const Ad={background:{color:"#000"},particles:{number:{value:100},move:{direction:ga.none,enable:!0,outModes:{default:pl.out},random:!0,speed:.1,straight:!1},opacity:{animation:{enable:!0,speed:1,sync:!1},value:{min:0,max:1}},size:{value:{min:1,max:3}}}};let Cd=class extends(_t(lt)){#Ci="Hmm...";get heading(){return this.#Ci}set heading(t){this.#Ci=t}#x="It looks like that page doesn't exist.";get message(){return this.#x}set message(t){this.#x=t}#Mi;get particlesContainer(){return this.#Mi}set particlesContainer(t){this.#Mi=t}#Ei;#Ti;#Pi;async firstUpdated(){this.#Ii(this.themePreference),wt.subscribe("theme-preference","change",t=>{this.#Ii(t),this.#Pi&&(this.#Pi.options.background.color=this.#Ei,this.#Pi.options.particles.color.value=this.#Ti,this.#Pi.refresh())}),await async function(t,e=!0){await zd(t,!1),await t.addPreset("stars",Ad,!1),await t.refresh(e)}(id),this.particlesContainer&&(this.#Pi=await id.load({element:this.particlesContainer,options:{preset:"stars",background:{color:this.#Ei},particles:{color:{value:this.#Ti}},fullScreen:{enable:!1}}}))}#Ii(t){this.#Ei="dark"===t?getComputedStyle(document.body).getPropertyValue("--md-sys-color-surface-container-lowest"):getComputedStyle(document.body).getPropertyValue("--md-sys-color-surface-container-highest"),this.#Ti="dark"===this.themePreference?"#5c5959":"#bfbbbb"}static{this.styles=n`
    :host {
      display: grid;
    }

    h1 {
      font-family: var(Metropolis, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
      font-size: 48px;
      line-height: 52px;
      font-weight: 700;
      letter-spacing: -1px;

      margin: 48px 0 24px 0;
      padding: 0;

      text-align: center;

      z-index: 1;
    }

    h2 {
      font-family: Roboto;
      -webkit-font-smoothing: antialiased;
      font-size: 20px;
      line-height: 22px;
      font-weight: 300;
      letter-spacing: 0.3px;

      margin: 0;
      padding: 0;

      text-align: center;

      z-index: 1;
    }

    image-container {
      display: grid;
      max-width: 390px;
      min-width: 200px;
      justify-self: center;
      position: relative;
      z-index: 1;
      margin-top: 24px;

      div[icon-container] {
        display: grid;
        position: absolute;
        --md-icon-size: 30px;
        width: 30px;
        top: 12%;
        right: 12%;
        z-index: 1;
        opacity: 0.5;
        animation: spin 4.5s infinite linear;
        color: var(--md-sys-color-primary);
      }

      img[planet] {
        z-index: 1;
        width: 100%;
        height: auto;
        object-fit: contain;
        object-position: center;
      }
    }

    div[particles] {
      position: absolute;
      inset: 0;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}render(){return H`
      <leavitt-app-main-content-container>
        <leavitt-app-width-limiter>
          <div particles></div>
          <h1>${this.heading}</h1>
          <h2>${this.message}</h2>
          <image-container>
            <div icon-container>
              <slot name="icon">
                <img mark src="https://cdn.leavitt.com/icons/lg-mark.svg" />
              </slot>
            </div>
            <img planet src="https://cdn.leavitt.com/icons/lg-planet.svg" />
          </image-container>
        </leavitt-app-width-limiter>
      </leavitt-app-main-content-container>
    `}};t([pt({type:String})],Cd.prototype,"heading",null),t([pt({type:String})],Cd.prototype,"message",null),t([vt("div[particles]")],Cd.prototype,"particlesContainer",null),Cd=t([dt("leavitt-error-page")],Cd);const Md=new Set(Object.values(Di));class Ed extends lt{get items(){return this.listController.items}constructor(){super(),this.listController=new Li({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>Md.has(t),isActivatable:t=>!t.disabled&&"text"!==t.type}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return H`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}t([yt({flatten:!0})],Ed.prototype,"slotItems",void 0);const Td=n`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;let Pd=class extends Ed{};Pd.styles=[Td],Pd=t([dt("md-list")],Pd);class Id extends lt{constructor(){super(...arguments),this.multiline=!1}render(){return H`
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
    `}handleTextSlotChange(){let t=!1,e=0;for(const i of this.textSlots)if(Od(i)&&(e+=1),e>1){t=!0;break}this.multiline=t}}function Od(t){for(const e of t.assignedNodes({flatten:!0})){const t=e.nodeType===Node.ELEMENT_NODE,i=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(t||i)return!0}return!1}t([pt({type:Boolean,reflect:!0})],Id.prototype,"multiline",void 0),t([bt(".text slot")],Id.prototype,"textSlots",void 0);const Bd=n`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;let Rd=class extends Id{};Rd.styles=[Bd],Rd=t([dt("md-item")],Rd);const Nd=re(lt);class jd extends Nd{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&"link"!==this.type}willUpdate(t){this.href&&(this.type="link"),super.willUpdate(t)}render(){return this.renderListItem(H`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const e="link"===this.type;let i;switch(this.type){case"link":i=Rt`a`;break;case"button":i=Rt`button`;break;default:i=Rt`li`}const r="text"!==this.type,o=e&&this.target?this.target:q;return jt`
      <${i}
        id="item"
        tabindex="${this.isDisabled||!r?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||q}
        aria-checked=${this.ariaChecked||q}
        aria-expanded=${this.ariaExpanded||q}
        aria-haspopup=${this.ariaHasPopup||q}
        class="list-item ${At(this.getRenderClasses())}"
        href=${this.href||q}
        target=${o}
        @focus=${this.onFocus}
      >${t}</${i}>
    `}renderRipple(){return"text"===this.type?q:H` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return"text"===this.type?q:H` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(t){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return H`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){-1===this.tabIndex&&this.dispatchEvent(new Event("request-activation",{bubbles:!0,composed:!0}))}focus(){this.listItemRoot?.focus()}click(){this.listItemRoot?this.listItemRoot.click():super.click()}}jd.shadowRootOptions={...lt.shadowRootOptions,delegatesFocus:!0},t([pt({type:Boolean,reflect:!0})],jd.prototype,"disabled",void 0),t([pt({reflect:!0})],jd.prototype,"type",void 0),t([pt({type:Boolean,attribute:"md-list-item",reflect:!0})],jd.prototype,"isListItem",void 0),t([pt()],jd.prototype,"href",void 0),t([pt()],jd.prototype,"target",void 0),t([vt(".list-item")],jd.prototype,"listItemRoot",void 0);const Dd=n`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;let Ld=class extends jd{};Ld.styles=[Dd],Ld=t([dt("md-list-item")],Ld);var Fd=function(){return Fd=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Fd.apply(this,arguments)},Ud=function(){function t(t,e,i){var r=this;this.endVal=e,this.options=i,this.version="2.9.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var i=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=i?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(t){var e,i,o,s,n=t<0?"-":"";e=Math.abs(t).toFixed(r.options.decimalPlaces);var a=(e+="").split(".");if(i=a[0],o=a.length>1?r.options.decimal+a[1]:"",r.options.useGrouping){s="";for(var l=3,c=0,d=0,h=i.length;d<h;++d)r.options.useIndianSeparators&&4===d&&(l=2,c=1),0!==d&&c%l==0&&(s=r.options.separator+s),c++,s=i[h-d-1]+s;i=s}return r.options.numerals&&r.options.numerals.length&&(i=i.replace(/[0-9]/g,function(t){return r.options.numerals[+t]}),o=o.replace(/[0-9]/g,function(t){return r.options.numerals[+t]})),n+r.options.prefix+i+o+r.options.suffix},this.easeOutExpo=function(t,e,i,r){return i*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=Fd(Fd({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.el="string"==typeof t?document.getElementById(t):t,e=e??this.parse(this.el.innerHTML),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return r.handleScroll(r)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),r=i.top+window.pageYOffset,o=i.top+i.height+window.pageYOffset;o<e&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var i=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,i):"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t.prototype.parse=function(t){var e=function(t){return t.replace(/([.,'  ])/g,"\\$1")},i=e(this.options.separator),r=e(this.options.decimal),o=t.replace(new RegExp(i,"g"),"").replace(new RegExp(r,"g"),".");return parseFloat(o)},t}();let Hd=class extends lt{#Oi=!1;get hideDownloads(){return this.#Oi}set hideDownloads(t){this.#Oi=t}#Bi;get major(){return this.#Bi}set major(t){this.#Bi=t}#Ri;get minor(){return this.#Ri}set minor(t){this.#Ri=t}#Ni;get rev(){return this.#Ni}set rev(t){this.#Ni=t}#ji;get downloads(){return this.#ji}set downloads(t){this.#ji=t}#Di="@leavittsoftware%2Fweb";async firstUpdated(){const t=await this.#Li(this.#Di);if(t){const[e,i,r]=t.version?.split(".")?.map(t=>Number(t))??[],o=new Ud(this.major,e,{suffix:".",duration:1}),s=new Ud(this.minor,i,{suffix:".",duration:1}),n=new Ud(this.rev,r,{duration:1});o.start(),setTimeout(()=>{s.start()},500),setTimeout(()=>{n.start()},1e3);new Ud(this.downloads,t.downloads??0,{useGrouping:!0,suffix:" weekly downloads"}).start()}}async#Li(t){try{const e=await fetch(`https://api.npmjs.org/versions/${t}/last-week`,{method:"GET"}),i=await e.text(),r=i.length?JSON.parse(i):{},o=Object.entries(r.downloads).map(t=>({version:t?.[0]?.split(".").map(t=>+t+1e5).join("."),downloads:t?.[1]})).sort((t,e)=>t.version.localeCompare(e.version)).map(t=>({...t,version:t.version?.split(".").map(t=>+t-1e5).join(".")}));return o?.pop()}catch(t){console.warn(t)}return null}static{this.styles=[n`
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
        border-radius: 28px;
        font-size: 13px;
        align-content: center;
      }

      .downloads {
        opacity: 0.8;
      }

      [hidden] {
        display: none;
      }
    `]}render(){return H`
      <stats-container>
        <info-chip tertiary>
          <span>v<span class="major"></span><span class="minor"></span><span class="rev"></span></span
        ></info-chip>

        <info-chip ?hidden=${this.hideDownloads}>
          <span slot="label"><span class="downloads"></span></span
        ></info-chip>
      </stats-container>
    `}};t([pt({type:Boolean,reflect:!0,attribute:"hide-downloads"})],Hd.prototype,"hideDownloads",null),t([vt("span.major")],Hd.prototype,"major",null),t([vt("span.minor")],Hd.prototype,"minor",null),t([vt("span.rev")],Hd.prototype,"rev",null),t([vt("span.downloads")],Hd.prototype,"downloads",null),Hd=t([dt("npm-stats")],Hd);class Gd extends CustomEvent{static{this.eventName="change-route"}constructor(t){super(Gd.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class qd extends CustomEvent{static{this.eventName="redirect-route"}constructor(t){super(qd.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class Vd extends CustomEvent{static{this.eventName="site-error"}constructor(t){super(Vd.eventName,{bubbles:!0,composed:!0,detail:t})}}const Wd=n`
  :host {
    display: grid;
    grid:
      'toolbar toolbar' 64px
      'menu content' auto / 300px 1fr;

    transition: 250ms;

    --mdc-icon-font: 'Material Symbols Outlined';
  }

  :host([main-menu-position='drawer']) {
    grid:
      'toolbar toolbar' 64px
      'menu content' auto / 0 1fr;

    titanium-toolbar {
      grid: 'main-menu-button logo search-input page-actions' / auto auto 1fr auto;
      padding: 0 12px 0 6px;
      page-actions {
        display: none;
      }
    }

    titanium-drawer[main-menu] {
      --titanium-drawer-width: 310px;
      width: initial;
      header {
        display: flex;
      }
    }
  }

  /* safari does not like nested selectors on host */
  :host([main-menu-position='slim']) titanium-drawer[main-menu] {
    --titanium-drawer-width: 80px;

    md-list-item {
      width: 44px;
      --md-list-item-leading-space: 10px;
      margin: 1px 0 1px 17px;
    }

    md-list-item[sub] {
      width: 32px;
      --md-list-item-leading-space: 7px;
      margin: 1px 0 1px 22px;

      span {
        visibility: hidden;
      }
    }

    a[slot='footer'] {
      display: none;
    }

    h4[sub] {
      padding: 0 12px 2px 29px;
      span {
        display: none;
      }
    }

    h4:not([sub]) {
      height: 1px;
      font-size: 0;
      line-height: 0;
      margin: 17px 24px;
      min-height: 0;
      padding: 0;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
    }
  }

  :host([main-menu-position='slim']) {
    grid:
      'toolbar toolbar' 64px
      'menu content' auto / 80px 1fr;

    titanium-toolbar {
      grid: 'main-menu-button logo search-input page-actions' / 80px auto 1fr auto;
    }
  }

  main-content {
    display: grid;
    grid-area: content;

    container-type: inline-size;
    container-name: main-content;
  }

  titanium-drawer[main-menu] {
    grid-area: menu;

    --titanium-drawer-background-color: var(--app-background-color);
    --titanium-drawer-full-height-padding: 64px;

    header {
      display: none;
      justify-content: space-between;
      align-items: center;
      margin: 8px 8px 8px 12px;
    }

    md-list-item {
      border-radius: 24px;
      --md-list-item-label-text-font: Metropolis;
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
      margin: 1px 8px 1px 11px;

      /*use interpolate-size or https://developer.mozilla.org/en-US/docs/Web/CSS/calc-size when available in all browsers*/
      width: 281px;
      transition: width 150ms linear;

      span {
        white-space: nowrap;
      }
    }

    md-list-item[sub] {
      --md-list-item-leading-space: 28px;
      --md-list-item-one-line-container-height: 20px;
      --md-list-item-top-space: 4px;
      --md-list-item-bottom-space: 4px;
      --md-icon-size: 18px;
    }

    md-list-item[selected] {
      background-color: var(--md-sys-color-secondary-container);
    }

    menu-divider {
      display: block;
      border-top: 1px solid var(--md-sys-color-outline-variant);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin: 12px 8px 0 8px;
      padding-bottom: 12px;
    }

    menu-divider + h4 {
      padding-top: 8px;
    }

    p {
      margin-bottom: 12px;
      margin-left: 24px;
    }

    h4[menu-category] {
      font-family: Metropolis;
      font-size: 14px;
      font-weight: 400;
      padding: 12px 16px 0px 24px;
      opacity: 0.6;
    }

    h4[sub] {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 12px 2px 35px;
      opacity: 0.8;
      --md-icon-size: 16px;
    }
  }

  titanium-toolbar {
    grid-area: toolbar;
    background-color: var(--app-background-color);
    display: grid;
    grid: 'main-menu-button logo search-input page-actions' / auto 240px 1fr auto;
    align-items: center;
    height: 64px;
    z-index: 6;
    padding: 0 24px 0 12px;

    leavitt-app-logo {
      grid-area: logo;
      margin-right: 6px;
    }

    md-icon-button[hamburger] {
      grid-area: main-menu-button;
      margin: 0 4px 0 8px;
    }

    md-circular-progress[root-loading] {
      grid-area: main-menu-button;
      --md-circular-progress-size: 36px;
      --md-circular-progress-active-indicator-width: 15;
      margin: 0 6px 0 10px;
    }

    titanium-filled-search-input {
      grid-area: search-input;
    }

    h3[main-title] {
      text-align: center;
    }
  }

  page-actions {
    grid-area: page-actions;
    justify-self: end;
    display: flex;
    gap: 12px;
    align-items: center;
    margin-left: 12px;
  }

  [hidden] {
    display: none !important;
  }
`;var Yd=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Xd=lh,Jd=eh,Kd=function(t){return ih(eh(t))},Qd=ih,Zd=ah,th=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function eh(t){for(var e,i=[],r=0,o=0,s="";null!=(e=th.exec(t));){var n=e[0],a=e[1],l=e.index;if(s+=t.slice(o,l),o=l+n.length,a)s+=a[1];else{s&&(i.push(s),s="");var c=e[2],d=e[3],h=e[4],u=e[5],p=e[6],m=e[7],f="+"===p||"*"===p,v="?"===p||"*"===p,g=c||"/",b=h||u||(m?".*":"[^"+g+"]+?");i.push({name:d||r++,prefix:c||"",delimiter:g,optional:v,repeat:f,pattern:oh(b)})}}return o<t.length&&(s+=t.substr(o)),s&&i.push(s),i}function ih(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^"+t[i].pattern+"$"));return function(i){for(var r="",o=i||{},s=0;s<t.length;s++){var n=t[s];if("string"!=typeof n){var a,l=o[n.name];if(null==l){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to be defined')}if(Yd(l)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(a=encodeURIComponent(l[c]),!e[s].test(a))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received "'+a+'"');r+=(0===c?n.prefix:n.delimiter)+a}}else{if(a=encodeURIComponent(l),!e[s].test(a))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+a+'"');r+=n.prefix+a}}else r+=n}return r}}function rh(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function oh(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function sh(t,e){return t.keys=e,t}function nh(t){return t.sensitive?"":"i"}function ah(t,e){for(var i=(e=e||{}).strict,r=!1!==e.end,o="",s=t[t.length-1],n="string"==typeof s&&/\/$/.test(s),a=0;a<t.length;a++){var l=t[a];if("string"==typeof l)o+=rh(l);else{var c=rh(l.prefix),d=l.pattern;l.repeat&&(d+="(?:"+c+d+")*"),o+=d=l.optional?c?"(?:"+c+"("+d+"))?":"("+d+")?":c+"("+d+")"}}return i||(o=(n?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":i&&n?"":"(?=\\/|$)",new RegExp("^"+o,nh(e))}function lh(t,e,i){return Yd(e=e||[])?i||(i={}):(i=e,e=[]),t instanceof RegExp?function(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var r=0;r<i.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return sh(t,e)}(t,e):Yd(t)?function(t,e,i){for(var r=[],o=0;o<t.length;o++)r.push(lh(t[o],e,i).source);return sh(new RegExp("(?:"+r.join("|")+")",nh(i)),e)}(t,e,i):function(t,e,i){for(var r=eh(t),o=ah(r,i),s=0;s<r.length;s++)"string"!=typeof r[s]&&e.push(r[s]);return sh(o,e)}(t,e,i)}Xd.parse=Jd,Xd.compile=Kd,Xd.tokensToFunction=Qd,Xd.tokensToRegExp=Zd;var ch,dh="undefined"!=typeof document,hh="undefined"!=typeof window,uh="undefined"!=typeof history,ph="undefined"!=typeof process,mh=dh&&document.ontouchstart?"touchstart":"click",fh=hh&&!(!window.history.location&&!window.location);function vh(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function gh(t,e){if("function"==typeof t)return gh.call(this,"*",t);if("function"==typeof e)for(var i=new xh(t,null,this),r=1;r<arguments.length;++r)this.callbacks.push(i.middleware(arguments[r]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function bh(t){if(!t.handled){var e=this,i=e._window;(e._hashbang?fh&&this._getBase()+i.location.hash.replace("#!",""):fh&&i.location.pathname+i.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,fh&&(i.location.href=t.canonicalPath))}}function yh(t,e,i){var r=this.page=i||gh,o=r._window,s=r._hashbang,n=r._getBase();"/"===t[0]&&0!==t.indexOf(n)&&(t=n+(s?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var l=new RegExp("^"+function(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(n));if(this.path=t.replace(l,"")||"/",s&&(this.path=this.path.replace("#!","")||"/"),this.title=dh&&o.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?r._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!s){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=r._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function xh(t,e,i){var r=this.page=i||wh,o=e||{};o.strict=o.strict||r._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=Xd(this.path,this.keys=[],o)}vh.prototype.configure=function(t){var e=t||{};this._window=e.window||hh&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&hh,this._click=!1!==e.click&&dh,this._hashbang=!!e.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):hh&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(mh,this.clickHandler,!1):dh&&i.document.removeEventListener(mh,this.clickHandler,!1),this._hashbang&&hh&&!uh?i.addEventListener("hashchange",this._onpopstate,!1):hh&&i.removeEventListener("hashchange",this._onpopstate,!1)},vh.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},vh.prototype._getBase=function(){var t=this._base;if(t)return t;var e=hh&&this._window&&this._window.location;return hh&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},vh.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},vh.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var i;if(this._running=!0,fh){var r=this._window.location;i=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(i,null,!0,e.dispatch)}},vh.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(mh,this.clickHandler,!1),hh&&t.removeEventListener("popstate",this._onpopstate,!1),hh&&t.removeEventListener("hashchange",this._onpopstate,!1)}},vh.prototype.show=function(t,e,i,r){var o=new yh(t,e,this),s=this.prevContext;return this.prevContext=o,this.current=o.path,!1!==i&&this.dispatch(o,s),!1!==o.handled&&!1!==r&&o.pushState(),o},vh.prototype.back=function(t,e){var i=this;if(this.len>0){var r=this._window;uh&&r.history.back(),this.len--}else t?setTimeout(function(){i.show(t,e)}):setTimeout(function(){i.show(i._getBase(),e)})},vh.prototype.redirect=function(t,e){var i=this;"string"==typeof t&&"string"==typeof e&&gh.call(this,t,function(t){setTimeout(function(){i.replace(e)},0)}),"string"==typeof t&&void 0===e&&setTimeout(function(){i.replace(t)},0)},vh.prototype.replace=function(t,e,i,r){var o=new yh(t,e,this),s=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=i,o.save(),!1!==r&&this.dispatch(o,s),o},vh.prototype.dispatch=function(t,e){var i=0,r=0,o=this;function s(){var e=o.callbacks[i++];if(t.path===o.current)return e?void e(t,s):bh.call(o,t);t.handled=!1}e?function t(){var i=o.exits[r++];if(!i)return s();i(e,t)}():s()},vh.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var i=new xh(t,null,this),r=1;r<arguments.length;++r)this.exits.push(i.middleware(arguments[r]))},vh.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,i=t.path||(t.composedPath?t.composedPath():null);if(i)for(var r=0;r<i.length;r++)if(i[r].nodeName&&"A"===i[r].nodeName.toUpperCase()&&i[r].href){e=i[r];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var o="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var s=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==s)&&!(s&&s.indexOf("mailto:")>-1)&&!(o?e.target.baseVal:e.target)&&(o||this.sameOrigin(e.href))){var n=o?e.href.baseVal:e.pathname+e.search+(e.hash||"");n="/"!==n[0]?"/"+n:n,ph&&n.match(/^\/[a-zA-Z]:\//)&&(n=n.replace(/^\/[a-zA-Z]:\//,"/"));var a=n,l=this._getBase();0===n.indexOf(l)&&(n=n.substr(l.length)),this._hashbang&&(n=n.replace("#!","")),(!l||a!==n||fh&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},vh.prototype._onpopstate=(ch=!1,hh?(dh&&"complete"===document.readyState?ch=!0:window.addEventListener("load",function(){setTimeout(function(){ch=!0},0)}),function(t){if(ch){var e=this;if(t.state){var i=t.state.path;e.replace(i,t.state)}else if(fh){var r=e._window.location;e.show(r.pathname+r.search+r.hash,void 0,void 0,!1)}}}):function(){}),vh.prototype._which=function(t){return null==(t=t||hh&&this._window.event).which?t.button:t.which},vh.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&fh)return new URL(t,e.location.toString());if(dh){var i=e.document.createElement("a");return i.href=t,i}},vh.prototype.sameOrigin=function(t){if(!t||!fh)return!1;var e=this._toURL(t),i=this._window.location;return i.protocol===e.protocol&&i.hostname===e.hostname&&(i.port===e.port||""===i.port&&(80==e.port||443==e.port))},vh.prototype._samePath=function(t){if(!fh)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},vh.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},yh.prototype.pushState=function(){var t=this.page,e=t._window,i=t._hashbang;t.len++,uh&&e.history.pushState(this.state,this.title,i&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},yh.prototype.save=function(){var t=this.page;uh&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},xh.prototype.middleware=function(t){var e=this;return function(i,r){if(e.match(i.path,i.params))return i.routePath=e.path,t(i,r);r()}},xh.prototype.match=function(t,e){var i=this.keys,r=t.indexOf("?"),o=~r?t.slice(0,r):t,s=this.regexp.exec(decodeURIComponent(o));if(!s)return!1;delete e[0];for(var n=1,a=s.length;n<a;++n){var l=i[n-1],c=this.page._decodeURLEncodedURIComponent(s[n]);void 0===c&&hasOwnProperty.call(e,l.name)||(e[l.name]=c)}return!0};var wh=function t(){var e=new vh;function i(){return gh.apply(e,arguments)}return i.callbacks=e.callbacks,i.exits=e.exits,i.base=e.base.bind(e),i.strict=e.strict.bind(e),i.start=e.start.bind(e),i.stop=e.stop.bind(e),i.show=e.show.bind(e),i.back=e.back.bind(e),i.redirect=e.redirect.bind(e),i.replace=e.replace.bind(e),i.dispatch=e.dispatch.bind(e),i.exit=e.exit.bind(e),i.configure=e.configure.bind(e),i.sameOrigin=e.sameOrigin.bind(e),i.clickHandler=e.clickHandler.bind(e),i.create=t,Object.defineProperty(i,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(i,"current",{get:function(){return e.current},set:function(t){e.current=t}}),i.Context=yh,i.Route=xh,i}(),_h=wh,kh=wh;_h.default=kh;const $h=new vr;Object.freeze($h);const Sh=t=>class extends t{static get properties(){return{stateIsPending:{type:Boolean},pendingStateCatcherTarget:{type:Object},pendingStateCatcherLoadingStartDelay:{type:Number},pendingStateCatcherMinTimeOpen:{type:Number}}}#Fi;get stateIsPending(){return this.#Fi}set stateIsPending(t){this.#Fi=t}#Ui=75;get pendingStateCatcherLoadingStartDelay(){return this.#Ui}set pendingStateCatcherLoadingStartDelay(t){this.#Ui=t}#Hi=350;get pendingStateCatcherMinTimeOpen(){return this.#Hi}set pendingStateCatcherMinTimeOpen(t){this.#Hi=t}#Gi;get pendingStateCatcherTarget(){return this.#Gi}set pendingStateCatcherTarget(t){this.#Gi=t}#qi;#yi;#ki=0;#Vi;async connectedCallback(){super.connectedCallback();(await this.pendingStateCatcherTarget||window).addEventListener(vn.eventType,this.#Wi.bind(this))}async disconnectedCallback(){super.disconnectedCallback();(await this.pendingStateCatcherTarget||window).removeEventListener(vn.eventType,this.#Wi.bind(this))}async#Wi(t){this.#Yi(),this.#ki++;try{await t.detail.promise}catch{}finally{this.#ki--,0===this.#ki&&this.#Xi()}}#Yi(){window.clearTimeout(this.#qi),window.clearTimeout(this.#yi),this.#qi=window.setTimeout(()=>{this.#Vi=performance.now(),this.stateIsPending=!0},this.pendingStateCatcherLoadingStartDelay)}#Xi(){window.clearTimeout(this.#qi);const t=performance.now()-this.#Vi,e=Math.max(this.pendingStateCatcherMinTimeOpen-t,0);this.#yi=window.setTimeout(()=>{this.stateIsPending=!1},e)}},zh="siteSearchTextField";let Ah=class extends(Sh(lt)){constructor(){super(...arguments),this.#Ji=null,this.#Ki=null,this.#Qi=!1,this.mainMenuPosition="full",this.searchTextField=null}#Zi;get page(){return this.#Zi}set page(t){this.#Zi=t}#Ji;get fatalErrorMessage(){return this.#Ji}set fatalErrorMessage(t){this.#Ji=t}#Ki;get fatalErrorHeading(){return this.#Ki}set fatalErrorHeading(t){this.#Ki=t}#Qi;get showSearch(){return this.#Qi}set showSearch(t){this.#Qi=t}#tr;get drawer(){return this.#tr}set drawer(t){this.#tr=t}async connectedCallback(){super.connectedCallback();try{$h.initialize()}catch(t){return console.error(t),this.fatalErrorMessage=t,void this.#er("error")}}get themePreference(){return localStorage.getItem("theme-preference")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}set themePreference(t){localStorage.setItem("theme-preference",t),this.#ir()}get prefersCollapsedMenu(){return JSON.parse(localStorage.getItem("prefers-collapsed-menu")||"false")}set prefersCollapsedMenu(t){localStorage.setItem("prefers-collapsed-menu",t.toString())}#ir(){document.firstElementChild?.setAttribute("data-theme",this.themePreference),wt.dispatch("theme-preference","change",this.themePreference)}async firstUpdated(){this.#ir(),this.searchTextField=this.shadowRoot?.querySelector("titanium-filled-search-input")??null,window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:t})=>{this.themePreference=t?"dark":"light",this.#ir()});new ResizeObserver(t=>{for(const e of t){const t=e.contentRect.width;t<600?this.mainMenuPosition="drawer":t>=600&&t<920?(this.mainMenuPosition="slim",this.drawer?.closeQuick()):(this.mainMenuPosition=this.prefersCollapsedMenu?"slim":"full",this.drawer?.closeQuick())}}).observe(this),this.addEventListener(Gd.eventName,t=>{_h.show(t.detail.path)}),this.addEventListener(qd.eventName,t=>{_h.redirect(t.detail.path)}),this.addEventListener(Vd.eventName,t=>{this.fatalErrorMessage=t.detail,this.#er("error")}),_h("*",(t,e)=>{this.drawer?.close(),e()}),_h("/",async()=>{_h.show("/getting-started")}),_h("/getting-started",()=>this.#er("getting-started",()=>import("./DZAjbdOG.js"))),_h("/titanium-full-page-loading-indicator",()=>this.#er("titanium-full-page-loading-indicator",()=>import("./BK4Gq-lV.js"))),_h("/available-cdn-icons",()=>this.#er("available-cdn-icons",()=>import("./DuTR4zss.js"))),_h("/leavitt-company-select",()=>this.#er("leavitt-company-select",()=>import("./DV4UUrC-.js"))),_h("/leavitt-file-explorer",()=>this.#er("leavitt-file-explorer",()=>import("./6er3hUHL.js"))),_h("/titanium-date-range-selector",()=>this.#er("titanium-date-range-selector",()=>import("./CimmcM2N.js"))),_h("/titanium-data-table-item",()=>this.#er("titanium-data-table-item",()=>import("./Dlirzn0C.js"))),_h("/leavitt-person-select",()=>this.#er("leavitt-person-select",()=>import("./zPkDEjW3.js"))),_h("/leavitt-person-company-select",()=>this.#er("leavitt-person-company-select",()=>import("./D3cTjLwI.js"))),_h("/leavitt-person-group-select",()=>this.#er("leavitt-person-group-select",()=>import("./BArSP9NR.js"))),_h("/leavitt-email-history-viewer",()=>this.#er("leavitt-email-history-viewer",()=>import("./B2EdWj4o.js"))),_h("/leavitt-user-feedback",()=>this.#er("leavitt-user-feedback",()=>import("./BNnRsZBS.js"))),_h("/leavitt-error-page",()=>this.#er("leavitt-error-page",()=>import("./DOqG164_.js"))),_h("/profile-picture",()=>this.#er("profile-picture",()=>import("./ONylF9E9.js"))),_h("/profile-picture-menu",()=>this.#er("profile-picture-menu",()=>import("./CfEtTCjX.js"))),_h("/titanium-access-denied-page",()=>this.#er("titanium-access-denied-page",()=>import("./BsKy92_N.js"))),_h("/titanium-data-table",()=>this.#er("titanium-data-table",()=>import("./C6VWK6YD.js"))),_h("/titanium-data-table-item",()=>this.#er("titanium-data-table-item",()=>import("./Dlirzn0C.js"))),_h("/titanium-drawer",()=>this.#er("titanium-drawer",()=>import("./PWKJENYF.js"))),_h("/titanium-error-page",()=>this.#er("titanium-error-page",()=>import("./D0AUsl9f.js"))),_h("/titanium-address-input",()=>this.#er("titanium-address-input",()=>import("./XkzIJ-Yt.js"))),_h("/titanium-header",()=>this.#er("titanium-header",()=>import("./DCZ4oWna.js"))),_h("/titanium-icon-picker",()=>this.#er("titanium-icon-picker",()=>import("./DLQhBXM0.js"))),_h("/titanium-header",()=>this.#er("titanium-header",()=>import("./DCZ4oWna.js"))),_h("/titanium-chip-multi-select",()=>this.#er("titanium-chip-multi-select",()=>import("./bWWdvEes.js"))),_h("/titanium-input-validator",()=>this.#er("titanium-input-validator",()=>import("./CZYJq9uj.js"))),_h("/titanium-data-table-header",()=>this.#er("titanium-data-table-header",()=>import("./DOJcT4Ys.js"))),_h("/titanium-data-table-core",()=>this.#er("titanium-data-table-core",()=>import("./jRH8FZNa.js"))),_h("/titanium-full-page-loading-indicator",()=>this.#er("titanium-full-page-loading-indicator",()=>import("./BK4Gq-lV.js"))),_h("/titanium-page-control",()=>this.#er("titanium-page-control",()=>import("./fCNYuZUs.js"))),_h("/titanium-smart-attachment-input",()=>this.#er("titanium-smart-attachment-input",()=>import("./BQzQKA2A.js"))),_h("/titanium-date-input",()=>this.#er("titanium-date-input",()=>import("./BbJtwcoZ.js"))),_h("/titanium-search-input",()=>this.#er("titanium-search-input",()=>import("./BLrxh_NC.js"))),_h("/titanium-toolbar",()=>this.#er("titanium-toolbar",()=>import("./NHWEjm0v.js"))),_h("/titanium-styles",()=>this.#er("titanium-styles",()=>import("./Czk4NloU.js"))),_h("/titanium-snackbar",()=>this.#er("titanium-snackbar",()=>import("./BIeRp8H5.js"))),_h("/titanium-card",()=>this.#er("titanium-card",()=>import("./6Grvhnam.js"))),_h("/titanium-chip",()=>this.#er("titanium-chip",()=>import("./i_OXY05W.js"))),_h("/titanium-youtube-input",()=>this.#er("titanium-youtube-input",()=>import("./DK4CyJi0.js"))),_h("/titanium-show-hide",()=>this.#er("titanium-show-hide",()=>import("./BedO_Mlz.js"))),_h("/titanium-duration-input",()=>this.#er("titanium-duration-input",()=>import("./H9gc-jbO.js"))),_h("/titanium-profile-picture-stack",()=>this.#er("titanium-profile-picture-stack",()=>import("./DjDL5tw9.js"))),_h("/titanium-confirm-dialog",()=>this.#er("titanium-confirm-dialog",()=>import("./D43dz4-N.js"))),_h("/titanium-confirmation-dialog",()=>this.#er("titanium-confirmation-dialog",()=>import("./DnIbEdt2.js"))),_h("*",()=>{this.#rr()}),_h.start()}async#er(t,e){this.page=t;try{const i=e?.();i&&this.dispatchEvent(new vn(i)),await i,this.showSearch="leavitt-email-history-viewer"===t}catch(t){console.warn(t),this.#rr(t)}}#rr(t,e){this.fatalErrorHeading=e||null,this.fatalErrorMessage=t||null,this.#er("error")}static{this.styles=[Wd,Cs,zs,n`
      titanium-drawer {
        --titanium-drawer-width: 310px;

        npm-stats {
          margin: 0 12px 12px 24px;
          gap: 12px;
        }

        md-icon {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
      }

      titanium-drawer[main-menu] {
        md-list-item {
          --md-list-item-one-line-container-height: 36px;
          --md-list-item-top-space: 2px;
          --md-list-item-bottom-space: 2px;
        }

        & h4[menu-category] {
          padding: 12px 16px 5px 24px;
        }
      }

      titanium-drawer details {
        user-select: none;
      }

      :host([main-menu-position='slim']) titanium-drawer[main-menu] {
        md-list-item {
          width: 36px;
        }

        npm-stats {
          margin-left: 0;
          margin-right: 0;
          place-self: center;

          stats-container {
            display: none;
          }
        }
      }

      summary:hover {
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08);
      }
    `]}render(){return H`<titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
      <titanium-toolbar>
        <md-circular-progress ?hidden=${!this.stateIsPending} root-loading ?indeterminate=${this.stateIsPending}></md-circular-progress>
        <md-icon-button
          hamburger
          title="Main menu"
          ?hidden=${this.stateIsPending}
          @click=${()=>{const t=this.mainMenuPosition;"drawer"===this.mainMenuPosition?this.drawer?.open():(this.mainMenuPosition="slim"===t?"full":"slim",this.prefersCollapsedMenu="slim"===this.mainMenuPosition)}}
        >
          <md-icon>menu</md-icon>
        </md-icon-button>

        <leavitt-app-logo app-name="Titanium Elements"></leavitt-app-logo>

        <titanium-filled-search-input ?hidden=${!this.showSearch}></titanium-filled-search-input>

        <page-actions>
          <md-icon-button
            title="Switch to ${"light"===this.themePreference?"dark":"light"} theme "
            themePref
            @click=${()=>this.themePreference="light"===this.themePreference?"dark":"light"}
          >
            <md-icon>${"light"===this.themePreference?"dark_mode":"light_mode"}</md-icon>
          </md-icon-button>
          <profile-picture-menu size="36" .userManager=${$h}></profile-picture-menu>
        </page-actions>
      </titanium-toolbar>

      <titanium-drawer main-menu ?always-show-content=${"drawer"!==this.mainMenuPosition}>
        <header slot="header">
          <leavitt-app-logo app-name="Titanium Elements"></leavitt-app-logo>
          <page-actions>
            <md-icon-button
              title="Switch to ${"light"===this.themePreference?"dark":"light"} theme "
              themePref
              @click=${()=>this.themePreference="light"===this.themePreference?"dark":"light"}
            >
              <md-icon>${"light"===this.themePreference?"dark_mode":"light_mode"}</md-icon>
            </md-icon-button>
            <profile-picture-menu size="36" .userManager=${$h}></profile-picture-menu>
          </page-actions>
        </header>
        <npm-stats ?hide-downloads=${"slim"===this.mainMenuPosition}></npm-stats>

        <md-list-item ?selected=${!!this.page?.includes("getting-started")} href="/getting-started" type="link">
          <md-icon slot="start">home</md-icon> <span>Getting started</span>
        </md-list-item>

        <md-list-item ?selected=${!!this.page?.includes("available-cdn-icons")} href="/available-cdn-icons" type="link">
          <md-icon slot="start">interests</md-icon> <span>Icons</span>
        </md-list-item>

        <section>
          <h4 menu-category>Titanium</h4>

          <md-list-item ?selected=${"titanium-access-denied-page"===this.page} href="/titanium-access-denied-page" type="link">
            <md-icon slot="start">block</md-icon> <span>Access denied page</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-address-input"===this.page} href="/titanium-address-input" type="link">
            <md-icon slot="start">location_on</md-icon> <span>Address input</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-card"===this.page} href="/titanium-card" type="link">
            <md-icon slot="start">dashboard</md-icon> <span>Card</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-chip"===this.page} href="/titanium-chip" type="link">
            <md-icon slot="start">label</md-icon> <span>Chip</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-chip-multi-select"===this.page} href="/titanium-chip-multi-select" type="link">
            <md-icon slot="start">checklist</md-icon> <span>Chip multi select</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-confirm-dialog"===this.page} href="/titanium-confirm-dialog" type="link">
            <md-icon slot="start">help_outline</md-icon> <span>Confirm dialog</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-confirmation-dialog"===this.page} href="/titanium-confirmation-dialog" type="link">
            <md-icon slot="start">check_circle</md-icon> <span>Confirmation dialog</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-data-table"===this.page} href="/titanium-data-table" type="link">
            <md-icon slot="start">table_chart</md-icon> <span>Data table</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-data-table-core"===this.page} href="/titanium-data-table-core" type="link">
            <md-icon slot="start">table_rows</md-icon> <span>Data table core</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-data-table-header"===this.page} href="/titanium-data-table-header" type="link">
            <md-icon slot="start">view_column</md-icon> <span>Data table header</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-data-table-item"===this.page} href="/titanium-data-table-item" type="link">
            <md-icon slot="start">format_list_numbered</md-icon> <span>Data table item</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-date-input")} href="/titanium-date-input" type="link">
            <md-icon slot="start">calendar_today</md-icon> <span>Date input </span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-date-range-selector"===this.page} href="/titanium-date-range-selector" type="link">
            <md-icon slot="start">date_range</md-icon> <span>Date range selector</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-drawer"===this.page} href="/titanium-drawer" type="link">
            <md-icon slot="start">menu_open</md-icon> <span>Drawer</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-duration-input")} href="/titanium-duration-input" type="link">
            <md-icon slot="start">timer</md-icon> <span>Duration input</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-error-page")} href="/titanium-error-page" type="link">
            <md-icon slot="start">error</md-icon> <span>Error page</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-full-page-loading-indicator")} href="/titanium-full-page-loading-indicator" type="link">
            <md-icon slot="start">hourglass_top</md-icon> <span>Full page loading indicator</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-header"===this.page} href="/titanium-header" type="link">
            <md-icon slot="start">title</md-icon> <span>Header</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-icon-picker"===this.page} href="/titanium-icon-picker" type="link">
            <md-icon slot="start">emoji_symbols</md-icon> <span>Icon picker</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-input-validator")} href="/titanium-input-validator" type="link">
            <md-icon slot="start">fact_check</md-icon> <span>Input validator</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-page-control")} href="/titanium-page-control" type="link">
            <md-icon slot="start">tune</md-icon> <span>Page control</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-profile-picture-stack")} href="/titanium-profile-picture-stack" type="link">
            <md-icon slot="start">groups</md-icon> <span>Profile picture stack</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-search-input")} href="/titanium-search-input" type="link">
            <md-icon slot="start">search</md-icon> <span>Search input </span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-show-hide")} href="/titanium-show-hide" type="link">
            <md-icon slot="start">visibility</md-icon> <span>Show hide </span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-smart-attachment-input")} href="/titanium-smart-attachment-input" type="link">
            <md-icon slot="start">attach_file</md-icon> <span>Smart attachment input</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-snackbar")} href="/titanium-snackbar" type="link">
            <md-icon slot="start">chat_bubble</md-icon> <span>Snackbar</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-styles")} href="/titanium-styles" type="link">
            <md-icon slot="start">palette</md-icon> <span>Styles</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-toolbar")} href="/titanium-toolbar" type="link">
            <md-icon slot="start">build</md-icon> <span>Toolbar</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes("titanium-youtube-input")} href="/titanium-youtube-input" type="link">
            <md-icon slot="start">smart_display</md-icon> <span>Youtube input</span>
          </md-list-item>
        </section>

        <section>
          <h4 menu-category>Leavitt</h4>
          <md-list-item ?selected=${"leavitt-company-select"===this.page} href="/leavitt-company-select" type="link">
            <md-icon slot="start">business</md-icon> <span>Company select</span>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-email-history-viewer"===this.page} href="/leavitt-email-history-viewer" type="link">
            <md-icon slot="start">mail</md-icon> <span>Email history viewer</span>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-error-page"===this.page} href="/leavitt-error-page" type="link">
            <md-icon slot="start">error_outline</md-icon> <span>Error page</span>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-file-explorer"===this.page} href="/leavitt-file-explorer" type="link">
            <md-icon slot="start">folder_open</md-icon> <span>File explorer</span>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-person-company-select"===this.page} href="/leavitt-person-company-select" type="link">
            <md-icon slot="start">badge</md-icon> <span>Person company select</span>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-person-group-select"===this.page} href="/leavitt-person-group-select" type="link">
            <md-icon slot="start">diversity_3</md-icon> <span>Person group select</span>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-person-select"===this.page} href="/leavitt-person-select" type="link">
            <md-icon slot="start">person_search</md-icon> <span>Person select</span>
          </md-list-item>

          <md-list-item ?selected=${"profile-picture"===this.page} href="/profile-picture" type="link">
            <md-icon slot="start">account_circle</md-icon> <span>Profile picture</span>
          </md-list-item>

          <md-list-item ?selected=${"profile-picture-menu"===this.page} href="/profile-picture-menu" type="link">
            <md-icon slot="start">account_box</md-icon> <span>Profile picture menu</span>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-user-feedback"===this.page} href="/leavitt-user-feedback" type="link">
            <md-icon slot="start">feedback</md-icon> <span>User feedback</span>
          </md-list-item>
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
      </titanium-drawer>

      <main-content>
        ${"getting-started"===this.page?H`<getting-started></getting-started>`:q}
        ${"error"===this.page?H`<div>Oops, something went wrong.</div>`:q}

        <!-- Stories -->
        ${"available-cdn-icons"===this.page?H` <available-cdn-icons-demo large ?isActive=${"available-cdn-icons"===this.page}></available-cdn-icons-demo> `:q}
        ${"titanium-date-range-selector"===this.page?H` <titanium-date-range-selector-demo large ?isActive=${"titanium-date-range-selector"===this.page}></titanium-date-range-selector-demo> `:q}
        ${"leavitt-person-select"===this.page?H` <leavitt-person-select-demo large ?isActive=${"leavitt-person-select"===this.page}></leavitt-person-select-demo> `:q}
        ${"leavitt-company-select"===this.page?H` <leavitt-company-select-demo large ?isActive=${"leavitt-company-select"===this.page}></leavitt-company-select-demo> `:q}
        ${"leavitt-email-history-viewer"===this.page?H` <leavitt-email-history-viewer-demo large ?isActive=${"leavitt-email-history-viewer"===this.page}></leavitt-email-history-viewer-demo> `:q}
        ${"leavitt-file-explorer"===this.page?H` <leavitt-file-explorer-demo large ?isActive=${"leavitt-file-explorer"===this.page}></leavitt-file-explorer-demo> `:q}
        ${"leavitt-user-feedback"===this.page?H` <leavitt-user-feedback-demo large ?isActive=${"leavitt-user-feedback"===this.page}></leavitt-user-feedback-demo> `:q}
        ${"leavitt-error-page"===this.page?H` <leavitt-error-page-demo large ?isActive=${"leavitt-error-page"===this.page}></leavitt-error-page-demo> `:q}
        ${"leavitt-person-company-select"===this.page?H` <leavitt-person-company-select-demo large ?isActive=${"leavitt-person-company-select"===this.page}></leavitt-person-company-select-demo> `:q}
        ${"leavitt-person-group-select"===this.page?H` <leavitt-person-group-select-demo large ?isActive=${"leavitt-person-group-select"===this.page}></leavitt-person-group-select-demo> `:q}
        ${"titanium-drawer"===this.page?H` <titanium-drawer-demo ?isActive=${"titanium-drawer"===this.page}></titanium-drawer-demo> `:q}
        ${"profile-picture"===this.page?H` <profile-picture-demo ?isActive=${"profile-picture"===this.page}></profile-picture-demo> `:q}
        ${"profile-picture-menu"===this.page?H` <profile-picture-menu-demo large ?isActive=${"profile-picture-menu"===this.page}></profile-picture-menu-demo> `:q}
        ${"titanium-input-validator"===this.page?H` <titanium-input-validator-demo large ?isActive=${"titanium-input-validator"===this.page}></titanium-input-validator-demo> `:q}
        ${"titanium-data-table"===this.page?H` <titanium-data-table-demo large ?isActive=${"titanium-data-table"===this.page}></titanium-data-table-demo> `:q}
        ${"titanium-data-table-core"===this.page?H` <titanium-data-table-core-demo large ?isActive=${"titanium-data-table-core"===this.page}></titanium-data-table-core-demo> `:q}
        ${"titanium-data-table-header"===this.page?H` <titanium-data-table-header-demo large ?isActive=${"titanium-data-table-header"===this.page}></titanium-data-table-header-demo> `:q}
        ${"titanium-data-table-item"===this.page?H` <titanium-data-table-item-demo large ?isActive=${"titanium-data-table-item"===this.page}></titanium-data-table-item-demo> `:q}
        ${"titanium-access-denied-page"===this.page?H` <titanium-access-denied-page-demo large ?isActive=${"titanium-access-denied-page"===this.page}></titanium-access-denied-page-demo> `:q}
        ${"titanium-address-input"===this.page?H` <titanium-address-input-demo large ?isActive=${"titanium-address-input"===this.page}></titanium-address-input-demo> `:q}
        ${"titanium-error-page"===this.page?H` <titanium-error-page-demo large ?isActive=${"titanium-error-page"===this.page}></titanium-error-page-demo> `:q}
        ${"titanium-header"===this.page?H` <titanium-header-demo ?isActive=${"titanium-header"===this.page}></titanium-header-demo> `:q}
        ${"titanium-icon"===this.page?H` <titanium-icon-demo ?isActive=${"titanium-icon"===this.page}></titanium-icon-demo> `:q}
        ${"titanium-icon-picker"===this.page?H` <titanium-icon-picker-demo large ?isActive=${"titanium-icon-picker"===this.page}></titanium-icon-picker-demo> `:q}
        ${"titanium-page-control"===this.page?H` <titanium-page-control-demo large ?isActive=${"titanium-page-control"===this.page}></titanium-page-control-demo> `:q}
        ${"titanium-date-input"===this.page?H` <titanium-date-input-demo large ?isActive=${"titanium-date-input"===this.page}></titanium-date-input-demo> `:q}
        ${"titanium-search-input"===this.page?H` <titanium-search-input-demo large ?isActive=${"titanium-search-input"===this.page}></titanium-search-input-demo> `:q}
        ${"titanium-toolbar"===this.page?H` <titanium-toolbar-demo large ?isActive=${"titanium-toolbar"===this.page}></titanium-toolbar-demo> `:q}
        ${"titanium-full-page-loading-indicator"===this.page?H`
              <titanium-full-page-loading-indicator-demo
                large
                ?isActive=${"titanium-full-page-loading-indicator"===this.page}
              ></titanium-full-page-loading-indicator-demo>
            `:q}
        ${"titanium-loading-indicator"===this.page?H` <titanium-loading-indicator-demo large ?isActive=${"titanium-loading-indicator"===this.page}></titanium-loading-indicator-demo> `:q}
        ${"titanium-chip-multi-select"===this.page?H` <titanium-chip-multi-select-demo large ?isActive=${"titanium-chip-multi-select"===this.page}></titanium-chip-multi-select-demo> `:q}
        ${"titanium-styles"===this.page?H` <titanium-styles-demo large ?isActive=${"titanium-styles"===this.page}></titanium-styles-demo> `:q}
        ${"titanium-snackbar"===this.page?H` <titanium-snackbar-demo large ?isActive=${"titanium-snackbar"===this.page}></titanium-snackbar-demo> `:q}
        ${"titanium-smart-attachment-input"===this.page?H`
              <titanium-smart-attachment-input-demo large ?isActive=${"titanium-smart-attachment-input"===this.page}></titanium-smart-attachment-input-demo>
            `:q}
        ${"titanium-card"===this.page?H` <titanium-card-demo large ?isActive=${"titanium-card"===this.page}></titanium-card-demo> `:q}
        ${"titanium-chip"===this.page?H` <titanium-chip-demo large ?isActive=${"titanium-chip"===this.page}></titanium-chip-demo> `:q}
        ${"titanium-youtube-input"===this.page?H` <titanium-youtube-input-demo large ?isActive=${"titanium-youtube-input"===this.page}></titanium-youtube-input-demo> `:q}
        ${"titanium-show-hide"===this.page?H` <titanium-show-hide-demo large ?isActive=${"titanium-show-hide"===this.page}></titanium-show-hide-demo> `:q}
        ${"titanium-duration-input"===this.page?H` <titanium-duration-input-demo large ?isActive=${"titanium-duration-input"===this.page}></titanium-duration-input-demo> `:q}
        ${"titanium-confirm-dialog"===this.page?H` <titanium-confirm-dialog-demo large ?isActive=${"titanium-confirm-dialog"===this.page}></titanium-confirm-dialog-demo> `:q}
        ${"titanium-confirmation-dialog"===this.page?H` <titanium-confirmation-dialog-demo large ?isActive=${"titanium-confirmation-dialog"===this.page}></titanium-confirmation-dialog-demo> `:q}
        ${"titanium-profile-picture-stack"===this.page?H`
              <titanium-profile-picture-stack-demo large ?isActive=${"titanium-profile-picture-stack"===this.page}></titanium-profile-picture-stack-demo>
            `:q}
        <titanium-access-denied-page ?hidden=${"access-denied"!==this.page}></titanium-access-denied-page>

        <leavitt-error-page
          ?hidden=${"error"!==this.page}
          .message=${this.fatalErrorMessage||"It looks like that page doesn't exist."}
          .heading=${this.fatalErrorHeading||"Hmm..."}
        >
          ${"Sorry"===this.fatalErrorHeading?H`<md-icon slot="icon">lock</md-icon>`:q}
        </leavitt-error-page>
      </main-content>

      <report-a-problem-dialog .userManager=${$h}></report-a-problem-dialog>
      <provide-feedback-dialog .userManager=${$h}></provide-feedback-dialog>

      <titanium-confirm-dialog></titanium-confirm-dialog>
      <titanium-snackbar-stack .eventListenerTarget=${document}></titanium-snackbar-stack>
      <titanium-service-worker-notifier></titanium-service-worker-notifier>`}};t([mt()],Ah.prototype,"page",null),t([mt()],Ah.prototype,"fatalErrorMessage",null),t([mt()],Ah.prototype,"fatalErrorHeading",null),t([mt()],Ah.prototype,"showSearch",null),t([Fn({context:Un}),pt({type:String,reflect:!0,attribute:"main-menu-position"})],Ah.prototype,"mainMenuPosition",void 0),t([vt("titanium-drawer")],Ah.prototype,"drawer",null),t([mt()],Ah.prototype,"themePreference",null),t([mt()],Ah.prototype,"prefersCollapsedMenu",null),t([Fn({context:zh}),mt()],Ah.prototype,"searchTextField",void 0),Ah=t([dt("my-app")],Ah);export{ve as $,$n as A,St as B,cn as C,Kt as D,xt as E,yt as F,Nn as G,zh as H,ii as I,ei as J,Rt as K,Ai as L,jt as M,ae as N,At as O,vn as P,Ct as Q,gn as R,wi as S,_t as T,$h as U,Tn as V,bt as W,Ss as X,Ci as Y,re as Z,t as _,Ms as a,ye as a0,de as a1,ui as a2,hi as a3,ge as a4,be as a5,he as a6,ue as a7,Ae as a8,nt as a9,Se as aa,tr as ab,Yi as ac,xe as ad,Qi as ae,Wi as af,Ii as ag,Vi as ah,Fi as ai,qi as aj,Hi as ak,ft as al,Yt as am,ne as an,Js as ao,sn as ap,fi as aq,di as ar,Dr as as,zs as at,Oe as au,Ir as av,n as b,H as c,zi as d,vt as e,q as f,As as g,ks as h,lt as i,Ts as j,Es as k,mn as l,Mi as m,pt as n,Ps as o,Cs as p,pn as q,mt as r,$s as s,dt as t,ws as u,zn as v,An as w,zt as x,$t as y,G as z};
