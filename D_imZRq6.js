function t(t,e,i,r){var o,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(i,t,r)},n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,f=m.trustedTypes,v=f?f.emptyScript:"",g=m.reactiveElementPolyfillSupport,b=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const s=r?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=r;const s=o.fromAttribute(e,t.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(t,e,i,r=!1,o){if(void 0!==t){const s=this.constructor;if(!1===r&&(o=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??x)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[b("elementProperties")]=new Map,_[b("finalized")]=new Map,g?.({ReactiveElement:_}),(m.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,$=t=>t,z=k.trustedTypes,S=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,T=`<${E}>`,P=document,M=()=>P.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,B="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,N=/>/g,j=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,D=/"/g,F=/^(?:script|style|textarea|title)$/i,G=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),W=new WeakMap,V=P.createTreeWalker(P,129);function Y(t,e){if(!I(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}class X{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const a=t.length-1,n=this.parts,[l,d]=((t,e)=>{const i=t.length-1,r=[];let o,s=2===e?"<svg>":3===e?"<math>":"",a=R;for(let e=0;e<i;e++){const i=t[e];let n,l,d=-1,c=0;for(;c<i.length&&(a.lastIndex=c,l=a.exec(i),null!==l);)c=a.lastIndex,a===R?"!--"===l[1]?a=L:void 0!==l[1]?a=N:void 0!==l[2]?(F.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=j):void 0!==l[3]&&(a=j):a===j?">"===l[0]?(a=o??R,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?j:'"'===l[3]?D:U):a===D||a===U?a=j:a===L||a===N?a=R:(a=j,o=void 0);const h=a===j&&t[e+1].startsWith("/>")?" ":"";s+=a===R?i+T:d>=0?(r.push(n),i.slice(0,d)+A+i.slice(d)+C+h):i+C+(-2===d?e:h)}return[Y(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]})(t,e);if(this.el=X.createElement(l,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=V.nextNode())&&n.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(A)){const e=d[s++],i=r.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:Z}),r.removeAttribute(t)}else t.startsWith(C)&&(n.push({type:6,index:o}),r.removeAttribute(t));if(F.test(r.tagName)){const t=r.textContent.split(C),e=t.length-1;if(e>0){r.textContent=z?z.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],M()),V.nextNode(),n.push({type:2,index:++o});r.append(t[e],M())}}}else if(8===r.nodeType)if(r.data===E)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(C,t+1));)n.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,r){if(e===q)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const s=O(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=K(t,o._$AS(t,e.values),o,r)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??P).importNode(e,!0);V.currentNode=r;let o=V.nextNode(),s=0,a=0,n=i[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new Q(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new rt(o,this,t)),this._$AV.push(e),n=i[++a]}s!==n?.index&&(o=V.nextNode(),s++)}return V.currentNode=P,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),O(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new J(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new X(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new Q(this.O(M()),this.O(M()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(void 0===o)t=K(this,t,e,0),s=!O(t)||t!==this._$AH&&t!==q,s&&(this._$AH=t);else{const r=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=K(this,r[i+a],e,a),n===q&&(n=this._$AH[a]),s||=!O(n)||n!==this._$AH[a],n===H?t=H:t!==H&&(t+=(n??"")+o[a+1]),this._$AH[a]=n}s&&!r&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class et extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class it extends Z{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??H)===q)return;const i=this._$AH,r=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const ot={I:Q},st=k.litHtmlPolyfillSupport;st?.(X,Q),(k.litHtmlVersions??=[]).push("3.3.3");const at=(t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new Q(e.insertBefore(M(),t),t,void 0,i??{})}return o._$AI(t),o},nt=globalThis;let lt=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=at(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};lt._$litElement$=!0,lt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:lt});const dt=nt.litElementPolyfillSupport;dt?.({LitElement:lt}),(nt.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x},pt=(t=ht,e,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};function ut(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function mt(t){return ut({...t,state:!0,attribute:!1})}const ft=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function vt(t,e){return(e,i,r)=>ft(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}let gt;function bt(t){return(e,i)=>ft(e,i,{get(){return(this.renderRoot??(gt??=document.createDocumentFragment())).querySelectorAll(t)}})}function yt(t){return(e,i)=>{const{slot:r,selector:o}=t??{},s="slot"+(r?`[name=${r}]`:":not([name])");return ft(e,i,{get(){const e=this.renderRoot?.querySelector(s),i=e?.assignedElements(t)??[];return void 0===o?i:i.filter(t=>t.matches(o))}})}}class xt{#t=[];subscribe(t,e,i){Array.isArray(t)?t.forEach(t=>this.subscribe(t,e,i)):Array.isArray(e)?e.forEach(e=>this.subscribe(t,e,i)):this.#e(t,e,i)}subscribeAll(t,e){Array.isArray(t)?t.forEach(t=>this.#e(t,"All",e)):this.#e(t,"All",e)}#e(t,e,i){const r={entityType:t,eventTypes:e,callback:i};this.#t.push(r)}unsubscribe(t,e,i){Array.isArray(t)?t.forEach(t=>this.unsubscribe(t,e,i)):Array.isArray(e)?e.forEach(e=>this.unsubscribe(t,e,i)):this.#i(t,e,i)}#i(t,e,i){this.#t=this.#t.filter(r=>r.callback!==i||r.entityType!==t||r.eventTypes!==e)}dispatch(t,e,i){this.#t.filter(i=>i.entityType===t&&("All"===i.eventTypes||i.eventTypes===e)).forEach(t=>t.callback(i))}}const wt=new xt;Object.freeze(wt);const _t=e=>{class i extends e{constructor(){super(...arguments),this.themePreference="light"}connectedCallback(){super.connectedCallback(),wt.subscribe("theme-preference","change",t=>{this.themePreference=t}),this.themePreference="light"===document.firstElementChild?.getAttribute("data-theme")?"light":"dark"}}return t([ut({attribute:"theme-preference",reflect:!0})],i.prototype,"themePreference",void 0),i},kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},$t=t=>(...e)=>({_$litDirective$:t,values:e});let zt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const St=$t(class extends zt{constructor(t){if(super(t),t.type!==kt.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return q}}),At=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],Ct=At.map(Tt);function Et(t){return Ct.includes(t)}function Tt(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}const Pt=Symbol("privateIgnoreAttributeChangesFor");function Mt(t){var e;class i extends t{constructor(){super(...arguments),this[e]=new Set}attributeChangedCallback(t,e,i){if(!Et(t))return void super.attributeChangedCallback(t,e,i);if(this[Pt].has(t))return;this[Pt].add(t),this.removeAttribute(t),this[Pt].delete(t);const r=It(t);null===i?delete this.dataset[r]:this.dataset[r]=i,this.requestUpdate(It(t),e)}getAttribute(t){return Et(t)?super.getAttribute(Ot(t)):super.getAttribute(t)}removeAttribute(t){super.removeAttribute(t),Et(t)&&(super.removeAttribute(Ot(t)),this.requestUpdate())}}return e=Pt,function(t){for(const e of At){const i=Tt(e),r=Ot(i),o=It(i);t.createProperty(e,{attribute:i,noAccessor:!0}),t.createProperty(Symbol(r),{attribute:r,noAccessor:!0}),Object.defineProperty(t.prototype,e,{configurable:!0,enumerable:!0,get(){return this.dataset[o]??null},set(t){const i=this.dataset[o]??null;t!==i&&(null===t?delete this.dataset[o]:this.dataset[o]=t,this.requestUpdate(e,i))}})}}(i),i}function Ot(t){return`data-${t}`}function It(t){return t.replace(/-\w/,t=>t[1].toUpperCase())}const Bt=Mt(lt);class Rt extends Bt{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:t}=this;return G`
      <div
        class="progress ${St(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${t||H}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?H:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}t([ut({type:Number})],Rt.prototype,"value",void 0),t([ut({type:Number})],Rt.prototype,"max",void 0),t([ut({type:Boolean})],Rt.prototype,"indeterminate",void 0),t([ut({type:Boolean,attribute:"four-color"})],Rt.prototype,"fourColor",void 0);class Lt extends Rt{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const t=100*(1-this.value/this.max);return G`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${t}></circle>
      </svg>
    `}renderIndeterminateContainer(){return G` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`}}const Nt=a`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;let jt=class extends Lt{};jt.styles=[Nt],jt=t([ct("md-circular-progress")],jt);let Ut=class extends(_t(lt)){#r;get main(){return this.#r}set main(t){this.#r=t}#o=!1;get isLoading(){return this.#o}set isLoading(t){this.#o=t}#s;#a=!1;async connectedCallback(){if(super.connectedCallback(),"serviceWorker"in navigator){const t=navigator.serviceWorker.controller,e=await navigator.serviceWorker.getRegistration();e&&(e.addEventListener("updatefound",()=>{this.#s=e.installing,this.#s?.addEventListener("statechange",()=>{"installed"===this.#s?.state&&navigator.serviceWorker.controller&&this.#s?.postMessage({type:"SKIP_WAITING"})})}),e.waiting&&navigator.serviceWorker.controller&&(this.#s=e.waiting,this.#s?.postMessage({type:"SKIP_WAITING"}))),navigator.serviceWorker.addEventListener("controllerchange",()=>{this.#a||t&&(this.main.showPopover(),this.#a=!0)})}}static{this.styles=[a`
      :host {
        display: block;
        container-type: inline-size;
      }

      main {
        display: none;
        position: fixed;
        background-color: var(--app-background-color);
        color: var(--md-sys-color-on-background);

        cursor: pointer;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;

        grid: 'image text' / auto 1fr;
        align-items: center;
        gap: 16px 12px;

        border: 0;
        padding: 8px;

        @container (max-width: 500px) {
          grid:
            'image' auto
            'text' 1fr / auto;

          justify-items: center;
          text-align: center;
        }
      }

      main::backdrop {
        background-color: var(--app-background-color);
      }

      main:popover-open {
        display: grid;
      }

      md-circular-progress,
      img {
        grid-area: image;
        width: 48px;
        height: 48px;
      }

      h1 {
        font-family: var(--titanium-styles-h1-font-family, Metropolis, Roboto, Noto, sans-serif);
        -webkit-font-smoothing: antialiased;
        font-size: 32px;
        line-height: 34px;
        font-weight: 700;
        letter-spacing: -1px;

        margin: 0;
        padding: 0;

        @container (max-width: 500px) {
          font-size: 24px;
          line-height: 26px;

          margin-bottom: 6px;
        }
      }

      h3 {
        font-family: var(--titanium-styles-h2-font-family, Metropolis, Roboto, Noto, sans-serif);
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        line-height: 18px;
        font-weight: 300;
        letter-spacing: 0.6px;

        margin: 0;
        padding: 0;
        margin-left: 6px;
      }

      click-blocker {
        display: none;
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        left: 0;
        right: 0;
        background: transparent;
        cursor: pointer;
        pointer-events: all;
      }

      main:popover-open + click-blocker {
        display: block;
      }
    `]}render(){return G`<main popover="manual" @click=${this.handleClick}>
        ${this.isLoading?G`<md-circular-progress indeterminate></md-circular-progress>`:G`<img
              src=${"dark"===this.themePreference?"https://cdn.leavitt.com/company-mark-57-dark.svg":"https://cdn.leavitt.com/company-mark-57.svg"}
            />`}
        <div>
          <h1>This site has been updated!</h1>
          <h3>Please click to reload</h3>
        </div>
      </main>
      <click-blocker @click=${this.handleClick}></click-blocker>`}async handleClick(){this.isLoading=!0,await this.updateComplete,window.location.reload()}};t([vt("main")],Ut.prototype,"main",null),t([mt()],Ut.prototype,"isLoading",null),Ut=t([ct("leavitt-service-worker-notifier")],Ut);let Dt=class extends(_t(lt)){#n="/";get href(){return this.#n}set href(t){this.#n=t}#l="Back to home";get title(){return this.#l}set title(t){this.#l=t}#d=null;get appName(){return this.#d}set appName(t){this.#d=t}static{this.styles=[a`
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
    `]}renderLGLogoText(){return G`<span lg-logo><span lg-leavitt>Leavitt</span> <span lg-group>Group</span></span>`}render(){return G`<a mark href=${this.href} title=${this.title}>
      <img src=${"dark"===this.themePreference?"https://cdn.leavitt.com/company-mark-57-dark.svg":"https://cdn.leavitt.com/company-mark-57.svg"} />
      <span app-name>${this.appName}</span>${this.renderLGLogoText()}
    </a>`}};t([ut({type:String})],Dt.prototype,"href",null),t([ut({type:String})],Dt.prototype,"title",null),t([ut({type:String,attribute:"app-name"})],Dt.prototype,"appName",null),Dt=t([ct("leavitt-app-logo")],Dt);const Ft="cubic-bezier(0.2, 0, 0, 1)",Gt="cubic-bezier(.3,0,0,1)",qt="cubic-bezier(.3,0,.8,.15)";class Ht extends lt{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const t=this.count??-1,e=this.max??-1;return t<0||e<=0?"":`${t} / ${e}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&void 0!==t.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){const t=this.renderLabel(!0),e=this.renderLabel(!1),i=this.renderOutline?.(t),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return G`
      <div class="field ${St(r)}">
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
                ${e} ${i?H:t}
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
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return H;const i=G`<span>${t}</span>`,r=e?G`<span class="counter">${e}</span>`:H,o=this.error&&this.errorText&&!this.refreshErrorAlert;return G`
      <div class="supporting-text" role=${o?"alert":H}>${i}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)at(G`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return H;let e;e=t?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const i={hidden:!e,floating:t,resting:!t},r=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return G`
      <span class="label ${St(i)}" aria-hidden=${!e}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){if(!this.label)return;t??=this.focused,e??=this.populated;(t||e)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:Ft}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:i,y:r,height:o}=t.getBoundingClientRect(),{x:s,y:a,height:n}=e.getBoundingClientRect(),l=t.scrollWidth,d=e.scrollWidth,c=d/l,h=`translateX(${s-i}px) translateY(${a-r+Math.round((n-o*c)/2)}px) scale(${c})`,p="translateX(0) translateY(0) scale(1)",u=e.clientWidth,m=d>u?u/c+"px":"";return this.focused||this.populated?[{transform:h,width:m},{transform:p,width:m}]:[{transform:p,width:m},{transform:h,width:m}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}t([ut({type:Boolean})],Ht.prototype,"disabled",void 0),t([ut({type:Boolean})],Ht.prototype,"error",void 0),t([ut({type:Boolean})],Ht.prototype,"focused",void 0),t([ut()],Ht.prototype,"label",void 0),t([ut({type:Boolean,attribute:"no-asterisk"})],Ht.prototype,"noAsterisk",void 0),t([ut({type:Boolean})],Ht.prototype,"populated",void 0),t([ut({type:Boolean})],Ht.prototype,"required",void 0),t([ut({type:Boolean})],Ht.prototype,"resizable",void 0),t([ut({attribute:"supporting-text"})],Ht.prototype,"supportingText",void 0),t([ut({attribute:"error-text"})],Ht.prototype,"errorText",void 0),t([ut({type:Number})],Ht.prototype,"count",void 0),t([ut({type:Number})],Ht.prototype,"max",void 0),t([ut({type:Boolean,attribute:"has-start"})],Ht.prototype,"hasStart",void 0),t([ut({type:Boolean,attribute:"has-end"})],Ht.prototype,"hasEnd",void 0),t([yt({slot:"aria-describedby"})],Ht.prototype,"slottedAriaDescribedBy",void 0),t([mt()],Ht.prototype,"isAnimating",void 0),t([mt()],Ht.prototype,"refreshErrorAlert",void 0),t([mt()],Ht.prototype,"disableTransitions",void 0),t([vt(".label.floating")],Ht.prototype,"floatingLabelEl",void 0),t([vt(".label.resting")],Ht.prototype,"restingLabelEl",void 0),t([vt(".container")],Ht.prototype,"containerEl",void 0);class Wt extends Ht{renderBackground(){return G` <div class="background"></div> `}renderStateLayer(){return G` <div class="state-layer"></div> `}renderIndicator(){return G`<div class="active-indicator"></div>`}}const Vt=a`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-filled-field-content-space, 16px);--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_with-leading-content-leading-space: var(--md-filled-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-filled-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`,Yt=a`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;let Xt=class extends Wt{};Xt.styles=[Yt,Vt],Xt=t([ct("md-filled-field")],Xt);const Kt=Symbol.for(""),Jt=t=>{if(t?.r===Kt)return t?._$litStatic$},Qt=(t,...e)=>({_$litStatic$:e.reduce((e,i,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:Kt}),Zt=new Map,te=(t=>(e,...i)=>{const r=i.length;let o,s;const a=[],n=[];let l,d=0,c=!1;for(;d<r;){for(l=e[d];d<r&&void 0!==(s=i[d],o=Jt(s));)l+=o+e[++d],c=!0;d!==r&&n.push(s),a.push(l),d++}if(d===r&&a.push(e[r]),c){const t=a.join("$$lit$$");void 0===(e=Zt.get(t))&&(a.raw=a,Zt.set(t,e=a)),i=n}return t(e,...i)})(G),ee=a`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_icon-input-space: var(--md-filled-text-field-icon-input-space, 16px);--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-filled-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-filled-text-field-with-trailing-icon-trailing-space, 12px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-space: var(--_icon-input-space);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space);--md-filled-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-filled-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`,{I:ie}=ot,re=t=>t,oe=()=>document.createComment(""),se=(t,e,i)=>{const r=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=r.insertBefore(oe(),o),s=r.insertBefore(oe(),o);i=new ie(e,s,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,a=s!==t;if(a){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==o||a){let t=i._$AA;for(;t!==e;){const e=re(t).nextSibling;re(r).insertBefore(t,o),t=e}}}return i},ae=(t,e,i=t)=>(t._$AI(e,i),t),ne={},le=(t,e=ne)=>t._$AH=e,de=t=>{t._$AR(),t._$AA.remove()},ce=$t(class extends zt{constructor(t){if(super(t),t.type!==kt.PROPERTY&&t.type!==kt.ATTRIBUTE&&t.type!==kt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===q||e===H)return e;const i=t.element,r=t.name;if(t.type===kt.PROPERTY){if(e===i[r])return q}else if(t.type===kt.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(r))return q}else if(t.type===kt.ATTRIBUTE&&i.getAttribute(r)===e+"")return q;return le(t),e}}),he="important",pe=" !"+he,ue=$t(class extends zt{constructor(t){if(super(t),t.type!==kt.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(pe);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?he:""):i[t]=r}}return q}}),me={fromAttribute:t=>t??"",toAttribute:t=>t||null};function fe(t,e){!e.bubbles||t.shadowRoot&&!e.composed||e.stopPropagation();const i=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(i);return r||e.preventDefault(),r}const ve=Symbol("internals"),ge=Symbol("privateInternals");function be(t){return class extends t{get[ve](){return this[ge]||(this[ge]=this.attachInternals()),this[ge]}}}const ye=Symbol("createValidator"),xe=Symbol("getValidityAnchor"),we=Symbol("privateValidator"),_e=Symbol("privateSyncValidity"),ke=Symbol("privateCustomValidationMessage");function $e(t){var e;class i extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[_e](),this[ve].validity}get validationMessage(){return this[_e](),this[ve].validationMessage}get willValidate(){return this[_e](),this[ve].willValidate}checkValidity(){return this[_e](),this[ve].checkValidity()}reportValidity(){return this[_e](),this[ve].reportValidity()}setCustomValidity(t){this[ke]=t,this[_e]()}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[_e]()}firstUpdated(t){super.firstUpdated(t),this[_e]()}[(e=ke,_e)](){this[we]||(this[we]=this[ye]());const{validity:t,validationMessage:e}=this[we].getValidity(),i=!!this[ke],r=this[ke]||e;this[ve].setValidity({...t,customError:i},r,this[xe]()??void 0)}[ye](){throw new Error("Implement [createValidator]")}[xe](){throw new Error("Implement [getValidityAnchor]")}}return i}const ze=Symbol("getFormValue"),Se=Symbol("getFormState");function Ae(e){class i extends e{get form(){return this[ve].form}get labels(){return this[ve].labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t,e,i){if("name"===t||"disabled"===t){const i="disabled"===t?null!==e:e;return void this.requestUpdate(t,i)}super.attributeChangedCallback(t,e,i)}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[ve].setFormValue(this[ze](),this[Se]())}[ze](){throw new Error("Implement [getFormValue]")}[Se](){return this[ze]()}formDisabledCallback(t){this.disabled=t}}return i.formAssociated=!0,t([ut({noAccessor:!0})],i.prototype,"name",null),t([ut({type:Boolean,noAccessor:!0})],i.prototype,"disabled",null),i}const Ce=Symbol("onReportValidity"),Ee=Symbol("privateCleanupFormListeners"),Te=Symbol("privateDoNotReportInvalid"),Pe=Symbol("privateIsSelfReportingValidity"),Me=Symbol("privateCallOnReportValidity");function Oe(t){var e,i,r;class o extends t{constructor(...t){super(...t),this[e]=new AbortController,this[i]=!1,this[r]=!1,this.addEventListener("invalid",t=>{!this[Te]&&t.isTrusted&&this.addEventListener("invalid",()=>{this[Me](t)},{once:!0})},{capture:!0})}checkValidity(){this[Te]=!0;const t=super.checkValidity();return this[Te]=!1,t}reportValidity(){this[Pe]=!0;const t=super.reportValidity();return t&&this[Me](null),this[Pe]=!1,t}[(e=Ee,i=Te,r=Pe,Me)](t){const e=t?.defaultPrevented;if(e)return;this[Ce](t);!e&&t?.defaultPrevented&&(this[Pe]||function(t,e){if(!t)return!0;let i;for(const e of t.elements)if(e.matches(":invalid")){i=e;break}return i===e}(this[ve].form,this))&&this.focus()}[Ce](t){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(t){super.formAssociatedCallback&&super.formAssociatedCallback(t),this[Ee].abort(),t&&(this[Ee]=new AbortController,function(t,e,i,r){const o=function(t){if(!Ie.has(t)){const e=new EventTarget;Ie.set(t,e);for(const i of["reportValidity","requestSubmit"]){const r=t[i];t[i]=function(){e.dispatchEvent(new Event("before"));const t=Reflect.apply(r,this,arguments);return e.dispatchEvent(new Event("after")),t}}}return Ie.get(t)}(e);let s,a=!1,n=!1;o.addEventListener("before",()=>{n=!0,s=new AbortController,a=!1,t.addEventListener("invalid",()=>{a=!0},{signal:s.signal})},{signal:r}),o.addEventListener("after",()=>{n=!1,s?.abort(),a||i()},{signal:r}),e.addEventListener("submit",()=>{n||i()},{signal:r})}(this,t,()=>{this[Me](null)},this[Ee].signal))}}return o}const Ie=new WeakMap;class Be{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;const{validity:e,validationMessage:i}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:i,validity:{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing}},this.currentValidity}}class Re extends Be{computeValidity({state:t,renderedControl:e}){let i=e;Le(t)&&!i?(i=this.inputControl||document.createElement("input"),this.inputControl=i):i||(i=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=i);const r=Le(t)?i:null;if(r&&(r.type=t.type),i.value!==t.value&&(i.value=t.value),i.required=t.required,r){const e=t;e.pattern?r.pattern=e.pattern:r.removeAttribute("pattern"),e.min?r.min=e.min:r.removeAttribute("min"),e.max?r.max=e.max:r.removeAttribute("max"),e.step?r.step=e.step:r.removeAttribute("step")}return(t.minLength??-1)>-1?i.setAttribute("minlength",String(t.minLength)):i.removeAttribute("minlength"),(t.maxLength??-1)>-1?i.setAttribute("maxlength",String(t.maxLength)):i.removeAttribute("maxlength"),{validity:i.validity,validationMessage:i.validationMessage}}equals({state:t},{state:e}){const i=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return Le(t)&&Le(e)?i&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step:i}copy({state:t}){return{state:Le(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:e,pattern:i,min:r,max:o,step:s}=t;return{...this.copySharedState(t),type:e,pattern:i,min:r,max:o,step:s}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:i,maxLength:r}){return{value:t,required:e,minLength:i,maxLength:r}}}function Le(t){return"textarea"!==t.type}const Ne=Mt(Oe($e(Ae(be(lt)))));class je extends Ne{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,i){this.getInputOrTextarea().setSelectionRange(t,e,i)}showPicker(){const t=this.getInput();t&&t.showPicker()}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return G`
      <span class="text-field ${St(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return te`<${this.fieldTag}
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
    `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||H,i=this.autocomplete,r=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if("textarea"===this.type)return G`
        <textarea
          class="input"
          style=${ue(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||H}
          name=${this.name||H}
          ?disabled=${this.disabled}
          maxlength=${r?this.maxLength:H}
          minlength=${o?this.minLength:H}
          placeholder=${this.placeholder||H}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${ce(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const s=this.renderPrefix(),a=this.renderSuffix(),n=this.inputMode;return G`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${ue(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||H}
          name=${this.name||H}
          ?disabled=${this.disabled}
          inputmode=${n||H}
          max=${this.max||H}
          maxlength=${r?this.maxLength:H}
          min=${this.min||H}
          minlength=${o?this.minLength:H}
          pattern=${this.pattern||H}
          placeholder=${this.placeholder||H}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||H}
          type=${this.type}
          .value=${ce(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${a}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){if(!t)return H;return G`<span class="${St({suffix:e,prefix:!e})}">${t}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){fe(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[ze](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[ye](){return new Re(()=>({state:this,renderedControl:this.inputOrTextarea}))}[xe](){return this.inputOrTextarea}[Ce](t){t?.preventDefault();const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}}je.shadowRootOptions={...lt.shadowRootOptions,delegatesFocus:!0},t([ut({type:Boolean,reflect:!0})],je.prototype,"error",void 0),t([ut({attribute:"error-text"})],je.prototype,"errorText",void 0),t([ut()],je.prototype,"label",void 0),t([ut({type:Boolean,attribute:"no-asterisk"})],je.prototype,"noAsterisk",void 0),t([ut({type:Boolean,reflect:!0})],je.prototype,"required",void 0),t([ut()],je.prototype,"value",void 0),t([ut({attribute:"prefix-text"})],je.prototype,"prefixText",void 0),t([ut({attribute:"suffix-text"})],je.prototype,"suffixText",void 0),t([ut({type:Boolean,attribute:"has-leading-icon"})],je.prototype,"hasLeadingIcon",void 0),t([ut({type:Boolean,attribute:"has-trailing-icon"})],je.prototype,"hasTrailingIcon",void 0),t([ut({attribute:"supporting-text"})],je.prototype,"supportingText",void 0),t([ut({attribute:"text-direction"})],je.prototype,"textDirection",void 0),t([ut({type:Number})],je.prototype,"rows",void 0),t([ut({type:Number})],je.prototype,"cols",void 0),t([ut({reflect:!0})],je.prototype,"inputMode",void 0),t([ut()],je.prototype,"max",void 0),t([ut({type:Number})],je.prototype,"maxLength",void 0),t([ut()],je.prototype,"min",void 0),t([ut({type:Number})],je.prototype,"minLength",void 0),t([ut({type:Boolean,attribute:"no-spinner"})],je.prototype,"noSpinner",void 0),t([ut()],je.prototype,"pattern",void 0),t([ut({reflect:!0,converter:me})],je.prototype,"placeholder",void 0),t([ut({type:Boolean,reflect:!0})],je.prototype,"readOnly",void 0),t([ut({type:Boolean,reflect:!0})],je.prototype,"multiple",void 0),t([ut()],je.prototype,"step",void 0),t([ut({reflect:!0})],je.prototype,"type",void 0),t([ut({reflect:!0})],je.prototype,"autocomplete",void 0),t([mt()],je.prototype,"dirty",void 0),t([mt()],je.prototype,"focused",void 0),t([mt()],je.prototype,"nativeError",void 0),t([mt()],je.prototype,"nativeErrorText",void 0),t([vt(".input")],je.prototype,"inputOrTextarea",void 0),t([vt(".field")],je.prototype,"field",void 0),t([yt({slot:"leading-icon"})],je.prototype,"leadingIcons",void 0),t([yt({slot:"trailing-icon"})],je.prototype,"trailingIcons",void 0);class Ue extends je{constructor(){super(...arguments),this.fieldTag=Qt`md-filled-field`}}const De=a`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;let Fe=class extends Ue{constructor(){super(...arguments),this.fieldTag=Qt`md-filled-field`}};Fe.styles=[De,ee],Fe=t([ct("md-filled-text-field")],Fe);class Ge extends lt{render(){return G`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}const qe=a`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;let He=class extends Ge{};He.styles=[qe],He=t([ct("md-icon")],He);const We=Symbol("attachableController");let Ve;Ve=new MutationObserver(t=>{for(const e of t)e.target[We]?.hostConnected()});class Ye{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){null===t?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[We]=this,Ve?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}const Xe=["focusin","focusout","pointerdown"];class Ke extends lt{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Ye(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[Je]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}t[Je]=!0}}onControlChange(t,e){for(const i of Xe)t?.removeEventListener(i,this),e?.addEventListener(i,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}t([ut({type:Boolean,reflect:!0})],Ke.prototype,"visible",void 0),t([ut({type:Boolean,reflect:!0})],Ke.prototype,"inward",void 0);const Je=Symbol("handledByFocusRing"),Qe=a`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;let Ze=class extends Ke{};Ze.styles=[Qe],Ze=t([ct("md-focus-ring")],Ze);var ti;!function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(ti||(ti={}));const ei=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],ii=window.matchMedia("(forced-colors: active)");class ri extends lt{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=ti.INACTIVE,this.attachableController=new Ye(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return G`<div class="surface ${St(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==ti.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state!==ti.HOLDING)return this.state===ti.TOUCH_DELAY?(this.state=ti.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=ti.WAITING_FOR_CLICK}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t))return this.state=ti.WAITING_FOR_CLICK,void this.startPressAnimation(t);this.state=ti.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,150)}),this.state===ti.TOUCH_DELAY&&(this.state=ti.HOLDING,this.startPressAnimation(t))}}handleClick(){this.disabled||(this.state!==ti.WAITING_FOR_CLICK?this.state===ti.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),i=Math.max(t,e),r=Math.max(.35*i,75),o=this.currentCSSZoom??1,s=Math.floor(.2*i/o),a=Math.sqrt(e**2+t**2)+10;this.initialSize=s;const n=(a+r)/s;this.rippleScale=""+n/o,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:i}=window,{left:r,top:o}=this.getBoundingClientRect(),s=e+r,a=i+o,{pageX:n,pageY:l}=t,d=this.currentCSSZoom??1;return{x:(n-s)/d,y:(l-a)/d}}getTranslationCoordinates(t){const{height:e,width:i}=this.getBoundingClientRect(),r=this.currentCSSZoom??1,o={x:(i/r-this.initialSize)/2,y:(e/r-this.initialSize)/2};let s;return s=t instanceof PointerEvent?this.getNormalizedPointerEventCoords(t):{x:i/r/2,y:e/r/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:o}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:i}=this.getTranslationCoordinates(t),r=`${e.x}px, ${e.y}px`,o=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:Ft,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=ti.INACTIVE;const t=this.growAnimation;let e=1/0;"number"==typeof t?.currentTime?e=t.currentTime:t?.currentTime&&(e=t.currentTime.to("ms").value),e>=225?this.pressed=!1:(await new Promise(t=>{setTimeout(t,225-e)}),this.growAnimation===t&&(this.pressed=!1))}shouldReactToEvent(t){if(this.disabled||!t.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if("pointerenter"===t.type||"pointerleave"===t.type)return!this.isTouch(t);const e=1===t.buttons;return this.isTouch(t)||e}isTouch({pointerType:t}){return"touch"===t}async handleEvent(t){if(!ii?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t)}}onControlChange(t,e){for(const i of ei)t?.removeEventListener(i,this),e?.addEventListener(i,this)}}t([ut({type:Boolean,reflect:!0})],ri.prototype,"disabled",void 0),t([mt()],ri.prototype,"hovered",void 0),t([mt()],ri.prototype,"pressed",void 0),t([vt(".surface")],ri.prototype,"mdRoot",void 0);const oi=a`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;let si=class extends ri{};function ai(t){t.addInitializer(t=>{const e=t;e.addEventListener("click",async t=>{const{type:i,[ve]:r}=e,{form:o}=r;o&&"button"!==i&&(await new Promise(t=>{setTimeout(t)}),t.defaultPrevented||("reset"!==i?(o.addEventListener("submit",t=>{Object.defineProperty(t,"submitter",{configurable:!0,enumerable:!0,get:()=>e})},{capture:!0,once:!0}),r.setFormValue(e.value),o.requestSubmit()):o.reset()))})})}function ni(t,e=!0){return e&&"rtl"===getComputedStyle(t).getPropertyValue("direction").trim()}si.styles=[oi],si=t([ct("md-ripple")],si);const li=Mt(be(lt));class di extends li{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[ve].form}get labels(){return this[ve].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=ni(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){const t=this.href?Qt`div`:Qt`button`,{ariaLabel:e,ariaHasPopup:i,ariaExpanded:r}=this,o=e&&this.ariaLabelSelected,s=this.toggle?this.selected:H;let a=H;return this.href||(a=o&&this.selected?this.ariaLabelSelected:e),te`<${t}
        class="icon-button ${St(this.getRenderClasses())}"
        id="button"
        aria-label="${a||H}"
        aria-haspopup="${!this.href&&i||H}"
        aria-expanded="${!this.href&&r||H}"
        aria-pressed="${s}"
        aria-disabled=${!this.href&&this.softDisabled||H}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?H:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():H}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return G`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||H}"
        target="${this.target||H}"
        aria-label="${t||H}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return G`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return G`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return G`<span class="touch"></span>`}renderFocusRing(){return G`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){const t=!this.href&&(this.disabled||this.softDisabled);return G`<md-ripple
      for=${this.href?"link":H}
      ?disabled="${t}"></md-ripple>`}connectedCallback(){this.flipIcon=ni(this,this.flipIconInRtl),super.connectedCallback()}handleClick(t){if(!this.href&&this.softDisabled)return t.stopImmediatePropagation(),void t.preventDefault()}async handleClickOnChild(t){await 0,!this.toggle||this.disabled||this.softDisabled||t.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}ai(di),di.formAssociated=!0,di.shadowRootOptions={mode:"open",delegatesFocus:!0},t([ut({type:Boolean,reflect:!0})],di.prototype,"disabled",void 0),t([ut({type:Boolean,attribute:"soft-disabled",reflect:!0})],di.prototype,"softDisabled",void 0),t([ut({type:Boolean,attribute:"flip-icon-in-rtl"})],di.prototype,"flipIconInRtl",void 0),t([ut()],di.prototype,"href",void 0),t([ut()],di.prototype,"download",void 0),t([ut()],di.prototype,"target",void 0),t([ut({attribute:"aria-label-selected"})],di.prototype,"ariaLabelSelected",void 0),t([ut({type:Boolean})],di.prototype,"toggle",void 0),t([ut({type:Boolean,reflect:!0})],di.prototype,"selected",void 0),t([ut()],di.prototype,"type",void 0),t([ut({reflect:!0})],di.prototype,"value",void 0),t([mt()],di.prototype,"flipIcon",void 0);const ci=a`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`,hi=a`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}
`;let pi=class extends di{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};pi.styles=[ci,hi],pi=t([ct("md-icon-button")],pi);let ui=class extends lt{#c="";get value(){return this.#c}set value(t){this.#c=t}#h="Search";get placeholder(){return this.#h}set placeholder(t){this.#h=t}#p="off";get autocomplete(){return this.#p}set autocomplete(t){this.#p=t}#u=!1;get spellcheck(){return this.#u}set spellcheck(t){this.#u=t}#m=!1;get disabled(){return this.#m}set disabled(t){this.#m=t}#f;get textField(){return this.#f}set textField(t){this.#f=t}static{this.styles=a`
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
  `}render(){return G`
      <md-filled-text-field
        type="search"
        .autocomplete=${this.autocomplete}
        .spellcheck=${this.spellcheck}
        .disabled=${this.disabled}
        .value=${this.value}
        placeholder=${this.placeholder}
        @input=${t=>{this.value=t.target.value,this.dispatchEvent(new Event("input",{composed:!0}))}}
        @blur=${t=>fe(this,t)}
        @focus=${t=>fe(this,t)}
        @change=${t=>fe(this,t)}
        @invalid=${t=>fe(this,t)}
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
    `}};t([ut({type:String})],ui.prototype,"value",null),t([ut({type:String})],ui.prototype,"placeholder",null),t([ut({type:String})],ui.prototype,"autocomplete",null),t([ut({type:Boolean})],ui.prototype,"spellcheck",null),t([ut({type:Boolean})],ui.prototype,"disabled",null),t([vt("md-filled-text-field")],ui.prototype,"textField",null),ui=t([ct("titanium-filled-search-input")],ui);class mi extends lt{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return G`<span class="shadow"></span>`}}const fi=a`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;let vi=class extends mi{};vi.styles=[fi],vi=t([ct("md-elevation")],vi);let gi=class extends lt{#v=!1;get shadow(){return this.#v}set shadow(t){this.#v=t}static{this.styles=a`
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
  `}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.#g.bind(this),!1)}disconnectedCallback(){document.removeEventListener("scroll",this.#g,!1),super.disconnectedCallback()}#g(){this.#b()}#b(){const t=window.innerHeight||(document.documentElement||document.body).clientHeight,e=this.#y(),i=window.scrollY||(document.documentElement||document.body.parentNode||document.body).scrollTop,r=e-t,o=Math.floor(i/r*100);this.shadow=0!==(o||0)}#y(){const t=document;return Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight)}render(){return G` <md-elevation></md-elevation><slot></slot>`}};t([ut({type:Boolean,reflect:!0})],gi.prototype,"shadow",null),gi=t([ct("titanium-toolbar")],gi);const bi=a`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;function yi(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function xi(t){return t.currentTarget===t.target&&(t.composedPath()[0]===t.target&&(!t.target.disabled&&!function(t){const e=wi;e&&(t.preventDefault(),t.stopImmediatePropagation());return async function(){wi=!0,await null,wi=!1}(),e}(t)))}let wi=!1;const _i=Mt(be(lt));class ki extends _i{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[ve].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const t=this.disabled||this.softDisabled,e=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return G`
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
      aria-disabled=${this.softDisabled||H}
      aria-label="${t||H}"
      aria-haspopup="${e||H}"
      aria-expanded="${i||H}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return G`<a
      id="link"
      class="button"
      aria-label="${t||H}"
      aria-haspopup="${e||H}"
      aria-expanded="${i||H}"
      aria-disabled=${this.disabled||this.softDisabled||H}
      tabindex="${this.disabled&&!this.softDisabled?-1:H}"
      href=${this.href}
      download=${this.download||H}
      target=${this.target||H}
      >${this.renderContent()}
    </a>`}renderContent(){const t=G`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return G`
      <span class="touch"></span>
      ${this.trailingIcon?H:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:H}
    `}handleClick(t){if(this.softDisabled||this.disabled&&this.href)return t.stopImmediatePropagation(),void t.preventDefault();xi(t)&&this.buttonElement&&(this.focus(),yi(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}ai(ki),ki.formAssociated=!0,ki.shadowRootOptions={mode:"open",delegatesFocus:!0},t([ut({type:Boolean,reflect:!0})],ki.prototype,"disabled",void 0),t([ut({type:Boolean,attribute:"soft-disabled",reflect:!0})],ki.prototype,"softDisabled",void 0),t([ut()],ki.prototype,"href",void 0),t([ut()],ki.prototype,"download",void 0),t([ut()],ki.prototype,"target",void 0),t([ut({type:Boolean,attribute:"trailing-icon",reflect:!0})],ki.prototype,"trailingIcon",void 0),t([ut({type:Boolean,attribute:"has-icon",reflect:!0})],ki.prototype,"hasIcon",void 0),t([ut()],ki.prototype,"type",void 0),t([ut({reflect:!0})],ki.prototype,"value",void 0),t([vt(".button")],ki.prototype,"buttonElement",void 0),t([yt({slot:"icon",flatten:!0})],ki.prototype,"assignedIcons",void 0);class $i extends ki{}const zi=a`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;let Si=class extends $i{};Si.styles=[bi,zi],Si=t([ct("md-text-button")],Si);let Ai=class extends lt{#x;#w=!1;get open(){return this.#w}set open(t){this.#w=t}#_=!1;get noAction(){return this.#_}set noAction(t){this.#_=t}#k="";get actionText(){return this.#k}set actionText(t){this.#k=t}#$;get message(){return this.#$}set message(t){this.#$=t}show(t,e){if(this.showPopover?this.showPopover():this.open=!0,this.message=e?.overrideTemplate?e?.overrideTemplate:t,this.noAction=e?.noAction??!1,this.actionText=e?.actionText??"Dismiss",e?.autoHide){const t="number"==typeof e?.autoHide?e?.autoHide:5e3;this.#z=window.setTimeout(()=>this.close("auto-close"),t)}return new Promise(t=>{this.#x=t})}#z=0;close(t=""){clearTimeout(this.#z),this.hidePopover?this.hidePopover():this.open=!1,this.#x(t)}static{this.styles=[a`
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
    `}};t([ut({type:Boolean,reflect:!0})],Ai.prototype,"open",null),t([ut({type:Boolean,reflect:!0})],Ai.prototype,"noAction",null),t([ut({type:String})],Ai.prototype,"actionText",null),t([ut({type:String})],Ai.prototype,"message",null),Ai=t([ct("titanium-simple-snackbar")],Ai);let Ci=class extends lt{#x;#w=!1;get open(){return this.#w}set open(t){this.#w=t}#S=[];get httpErrors(){return this.#S}set httpErrors(t){this.#S=t}show(t,e){return this.showPopover?this.showPopover():this.open=!0,this.httpErrors.push(t),this.#A(e),this.#C(t),new Promise(t=>{this.#x=t})}#C(t){const e=t.message,i=t.detail;console.warn("APP-HTTP-ERROR:",e||"",i?`\n\n${i}`:"")}#A(t){if(t?.autoHide){clearTimeout(this.#z);const e="number"==typeof t?.autoHide?t?.autoHide:5e3;this.#z=window.setTimeout(()=>this.close("auto-close"),e)}}addError(t,e){this.#A(e),this.#C(t),this.httpErrors=[...this.httpErrors,t]}#z=0;close(t=""){this.hidePopover?this.hidePopover():this.open=!1,this.#x(t)}static{this.styles=[...Ai.styles,a`
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
    `]}#E(t){const e=t.split("\n"),i=e.length;return e.map((t,e)=>e===i-1?t:G`${t}<br />`)}render(){return G`
      <div main>
        <http-error>
          <span action> ${this.httpErrors.length>1?G`${this.httpErrors.length} Network errors`:this.httpErrors?.[0]?.action} </span>
          <span status> ${this.httpErrors.length>1?G`${this.httpErrors?.[0]?.action}`:H} ${this.httpErrors?.[0]?.statusCode} </span>
          <span error>${this.#E(this.httpErrors?.[0]?.message??"")}</span>
          ${this.httpErrors?.[0]?.detail?G` <code detail>${this.#E(this.httpErrors?.[0]?.detail)}</code>`:H}
        </http-error>
      </div>
      <div actions>
        <md-text-button
          @click=${()=>{1===this.httpErrors.length?this.close("dismiss"):this.httpErrors=[...this.httpErrors.filter(t=>t!==this.httpErrors?.[0])]}}
          >Dismiss
        </md-text-button>
        <md-text-button ?hidden=${1===this.httpErrors.length} @click=${()=>this.close("dismiss")}>Dismiss all (${this.httpErrors.length}) </md-text-button>
      </div>
    `}};t([ut({type:Boolean,reflect:!0})],Ci.prototype,"open",null),t([ut({type:Array})],Ci.prototype,"httpErrors",null),Ci=t([ct("titanium-http-error-snackbar")],Ci);class Ei extends Event{static{this.eventName="show-snackbar"}constructor(t,e){super(Ei.eventName,{bubbles:!0,composed:!0}),this.SnackbarMessage=t,this.SnackbarOptions=e}}let Ti=class extends lt{constructor(){super(...arguments),this.SnackbarStack=[]}#T;get eventListenerTarget(){return this.#T}set eventListenerTarget(t){this.#T=t}connectedCallback(){super.connectedCallback(),(this.eventListenerTarget||this.getRootNode()).addEventListener(Ei.eventName,t=>{t.stopImmediatePropagation(),this.open(t.SnackbarMessage,t.SnackbarOptions)})}static{this.styles=[a`
      :host {
        display: contents;
      }
    `]}async open(t,e){let i,r;if("string"==typeof t){const o=document.createElement("titanium-simple-snackbar");o.popover="manual",this.shadowRoot?.appendChild(o),e&&(e.close=t=>o.close(t)),this.SnackbarStack.unshift(o),i=o.show(t,e),r=o}else{let o=this.shadowRoot?.querySelector("titanium-http-error-snackbar");if(o)return void o.addError(t,e);o=document.createElement("titanium-http-error-snackbar"),this.shadowRoot?.appendChild(o),o.popover="manual",this.SnackbarStack.unshift(o),i=o.show(t,e),e&&(e.close=t=>o.close(t)),r=o}return this.reposition(),await i,this.SnackbarStack.splice(this.SnackbarStack.indexOf(r),1),r.remove(),this.reposition(),i}dismissAll(){this.SnackbarStack.forEach(t=>t.close())}async reposition(){let t=0;for(let e=0;e<this.SnackbarStack.length;e++){const i=this.SnackbarStack[e];await i.updateComplete,0===i.clientHeight&&i.close(),i.style.bottom=`${t}px`,t+=i.clientHeight+12}}};var Pi;t([ut({type:Object})],Ti.prototype,"eventListenerTarget",null),Ti=t([ct("titanium-snackbar-stack")],Ti);let Mi=class extends lt{static{Pi=this}#P;get dialog(){return this.#P}set dialog(t){this.#P=t}#M=!1;get fixed(){return this.#M}set fixed(t){this.#M=t}#O="ltr";get direction(){return this.#O}set direction(t){this.#O=t}#I=!1;get hasHeader(){return this.#I}set hasHeader(t){this.#I=t}#B=!1;get hasFooter(){return this.#B}set hasFooter(t){this.#B=t}#R=!1;get keepOpenWhenGoingToFlyover(){return this.#R}set keepOpenWhenGoingToFlyover(t){this.#R=t}#L=null;get mode(){return this.#L}set mode(t){this.#L=t}#N=!1;get isOpen(){return this.#N}set isOpen(t){this.#N=t}async updated(t){t.has("mode")&&("inline"===this.mode&&this.dialog?.close(),"flyover"===this.mode&&this.isOpen&&(this.keepOpenWhenGoingToFlyover?(this.dialog?.showModal(),this.dialog?.removeAttribute("hide"),this.setBodyOverflow("hidden")):this.#j(!1)))}#j(t){this.isOpen=t,this.dispatchEvent(new Event("open-change"))}async firstUpdated(){let t=0,e=0;this.addEventListener("touchstart",e=>{t=e.changedTouches[0].screenX}),this.addEventListener("touchend",i=>{e=i.changedTouches[0].screenX,t-e>50&&this.close()});let i=null;this.dialog?.addEventListener("mousedown",t=>{i=t.target}),this.dialog?.addEventListener("click",t=>{const e=t.target instanceof Element&&"DIALOG"===t.target.nodeName,r=i instanceof Element&&"DIALOG"===i.nodeName;e&&r&&this.close()}),this.dialog?.addEventListener("cancel",t=>{t.preventDefault(),this.close()}),window.addEventListener("popstate",()=>this.dialog?.close(),!1),await Pi.animationsComplete(this.dialog),await Pi.animationsComplete(this.dialog),this.dialog?.removeAttribute("loading")}static async animationsComplete(t){if(t)return await Promise.allSettled(t.getAnimations().map(t=>t.finished))}open(){"inline"===this.mode?this.#j(!0):(this.dialog?.showModal(),this.dialog?.removeAttribute("hide"),this.setBodyOverflow("hidden"))}async close(){"inline"===this.mode?this.#j(!1):(this.dialog?.setAttribute("hide",""),await Pi.animationsComplete(this.dialog),this.dialog?.close(),this.dialog?.removeAttribute("hide"))}toggle(){this.isOpen?this.close():this.open()}closeQuick(){"inline"===this.mode?this.#j(!1):this.dialog?.close()}setBodyOverflow(t){const e=document.querySelector("html");e&&(e.style.overflow=t)}static{this.styles=a`
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
      gap: 20px;
    }

    footer ::slotted(a) {
      text-decoration: none;
      color: var(--md-sys-color-on-surface-variant);
      font-family: var(--titanium-styles-a-font-family, Metropolis, Roboto, Noto, sans-serif);
      font-weight: 400;
      font-size: 12px;
      opacity: 0.8;
    }

    :host([mode='inline'][open]) dialog:not([open]) {
      position: sticky;
      top: var(--titanium-drawer-full-height-padding, 48px);

      display: grid;
      inset-inline-start: initial;
      inset-inline-end: inherit;
      border: 0;
      min-width: var(--titanium-drawer-width, 300px);
      padding: 0;
      margin: 0;
      width: var(--titanium-drawer-width, 300px);

      height: calc(100dvh - var(--titanium-drawer-full-height-padding, 48px));

      animation: show 0.25s ease normal;
    }

    :host([mode='inline'][open][direction='rtl']) dialog:not([open]) {
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
  `}render(){return G`<dialog
      loading
      @close=${t=>{this.setBodyOverflow(""),fe(this,t)}}
      @toggle=${t=>{if("flyover"===this.mode){const e=t.target?.hasAttribute("open");this.#j(e)}fe(this,t)}}
      part="dialog"
    >
      <header part="header"><slot name="header" @slotchange=${()=>this.hasHeader=this.headerElements.length>0}></slot></header>
      <main part="main"><slot></slot></main>
      <footer part="footer"><slot name="footer" @slotchange=${()=>this.hasFooter=this.footerElements.length>0}></slot></footer>
    </dialog>`}};t([vt("dialog")],Mi.prototype,"dialog",null),t([ut({type:Boolean,reflect:!0})],Mi.prototype,"fixed",null),t([ut({type:String,reflect:!0})],Mi.prototype,"direction",null),t([ut({type:Boolean,reflect:!0,attribute:"has-header"})],Mi.prototype,"hasHeader",null),t([ut({type:Boolean,reflect:!0,attribute:"has-footer"})],Mi.prototype,"hasFooter",null),t([ut({type:Boolean,reflect:!0,attribute:"keep-open-when-going-to-flyover"})],Mi.prototype,"keepOpenWhenGoingToFlyover",null),t([ut({type:String,reflect:!0,attribute:"mode"})],Mi.prototype,"mode",null),t([ut({type:Boolean,reflect:!0,attribute:"open"})],Mi.prototype,"isOpen",null),t([yt({slot:"header"})],Mi.prototype,"headerElements",void 0),t([yt({slot:"footer"})],Mi.prototype,"footerElements",void 0),Mi=Pi=t([ct("titanium-drawer")],Mi);const Oi=(t=>{const e=[new RegExp("^https://10[\\.]"),new RegExp("^http://10[\\.]"),new RegExp("^http://192.168[\\.]"),new RegExp("^http://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])"),new RegExp("^https://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])")];return!t||t.indexOf("dev")>-1||e.some(e=>null!==e.exec(t))})(window.location.origin);function Ii(t){return function(e,i,r){const o=Symbol(`__${String(i)}_count__`);Object.defineProperty(e,t,{configurable:!0,writable:!0,value:async function(t){this[o]=(this[o]??0)+1,this[i]=!0;try{await t}catch(t){Promise.reject(t)}finally{this[o]--,0===this[o]&&(this[i]=!1)}}})}}function Bi(t){return new Promise(function(e){setTimeout(e,t)})}function Ri(t,e=15,i=10){return t.length>e+i?t.slice(0,e)+"..."+t.slice(t.length-i,t.length):t}let Li=class extends lt{#U=null;get fileName(){return this.#U}set fileName(t){this.#U=t}#D="circle";get shape(){return this.#D}set shape(t){this.#D=t}#F=!1;get showRing(){return this.#F}set showRing(t){this.#F=t}#G=!1;get showTestUserIndicator(){return this.#G}set showTestUserIndicator(t){this.#G=t}#q=null;get profilePictureLinkPersonId(){return this.#q}set profilePictureLinkPersonId(t){this.#q=t}#H=120;get size(){return this.#H}set size(t){this.#H=t}#W=!1;get useIntrinsicImageSize(){return this.#W}set useIntrinsicImageSize(t){this.#W=t}#V=new Set([32,64,128,256,512,1024]);#Y="https://cdn.leavitt.com/icon-user-profile-sq.svg";updated(t){(t.has("size")||t.has("useIntrinsicImageSize"))&&(this.style.width=this.useIntrinsicImageSize||!this.size?"":this.size+"px",this.style.height=this.useIntrinsicImageSize||!this.size?"":this.size+"px")}#X(t){const e=[...this.#V];for(let i=0;i<e.length;i++){const r=e[i];if(t<=r)return r}return 512}#K(t,e){const i=this.#X(e);return t?`https://cdn.leavitt.com/${t}-${i}.webp`:this.#Y}static{this.styles=a`
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
      background-color: var(--md-sys-color-surface-container-high);
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
  `}renderProfilePicture(){return G`
      <img
        loading="lazy"
        draggable="false"
        src=${this.#K(this.fileName,this.size)}
        @load=${t=>{t.target.alt="User profile picture"}}
        @error=${t=>{t.target.src!==this.#Y?t.target.src=this.#Y:t.target.alt="User profile picture"}}
      />
      ${this.showTestUserIndicator?G`<md-icon part="test-user-indicator" style="--md-icon-size: calc(${this.size}px * 0.35);padding: calc(${this.size}px * 0.05)" title="Test user"
            >bug_report</md-icon
          >`:H}
    `}render(){return this.profilePictureLinkPersonId?G`<a target="_blank" href="https://${Oi?"dev":""}workforce.leavitt.com/user/${this.profilePictureLinkPersonId}/view"
        >${this.renderProfilePicture()}</a
      > `:this.renderProfilePicture()}};function Ni(t,e=Hi){const i=Di(t,e);return i&&(i.tabIndex=0,i.focus()),i}function ji(t,e=Hi){const i=Fi(t,e);return i&&(i.tabIndex=0,i.focus()),i}function Ui(t,e=Hi){for(let i=0;i<t.length;i++){const r=t[i];if(0===r.tabIndex&&e(r))return{item:r,index:i}}return null}function Di(t,e=Hi){for(const i of t)if(e(i))return i;return null}function Fi(t,e=Hi){for(let i=t.length-1;i>=0;i--){const r=t[i];if(e(r))return r}return null}function Gi(t,e,i=Hi,r=!0){if(e){const o=function(t,e,i=Hi,r=!0){for(let o=1;o<t.length;o++){const s=(o+e)%t.length;if(s<e&&!r)return null;const a=t[s];if(i(a))return a}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return Ni(t,i)}function qi(t,e,i=Hi,r=!0){if(e){const o=function(t,e,i=Hi,r=!0){for(let o=1;o<t.length;o++){const s=(e-o+t.length)%t.length;if(s>e&&!r)return null;const a=t[s];if(i(a))return a}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return ji(t,i)}function Hi(t){return!t.disabled}t([ut({reflect:!0,type:String})],Li.prototype,"fileName",null),t([ut({reflect:!0,type:String})],Li.prototype,"shape",null),t([ut({reflect:!0,type:Boolean,attribute:"show-ring"})],Li.prototype,"showRing",null),t([ut({reflect:!0,type:Boolean,attribute:"show-test-user-indicator"})],Li.prototype,"showTestUserIndicator",null),t([ut({reflect:!0,type:Number,attribute:"profile-picture-link-person-id"})],Li.prototype,"profilePictureLinkPersonId",null),t([ut({type:Number})],Li.prototype,"size",null),t([ut({type:Boolean})],Li.prototype,"useIntrinsicImageSize",null),Li=t([ct("profile-picture")],Li);const Wi={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class Vi{constructor(t){this.handleKeydown=t=>{const e=t.key;if(t.defaultPrevented||!this.isNavigableKey(e))return;const i=this.items;if(!i.length)return;const r=Ui(i,this.isActivatable);t.preventDefault();const o=this.isRtl();let s=null;switch(e){case Wi.ArrowDown:case o?Wi.ArrowLeft:Wi.ArrowRight:s=Gi(i,r,this.isActivatable,this.wrapNavigation());break;case Wi.ArrowUp:case o?Wi.ArrowRight:Wi.ArrowLeft:s=qi(i,r,this.isActivatable,this.wrapNavigation());break;case Wi.Home:s=Ni(i,this.isActivatable);break;case Wi.End:s=ji(i,this.isActivatable)}s&&r&&r.item!==s&&(r.item.tabIndex=-1)},this.onDeactivateItems=()=>{const t=this.items;for(const e of t)this.deactivateItem(e)},this.onRequestActivation=t=>{this.onDeactivateItems();const e=t.target;this.activateItem(e),e.focus()},this.onSlotchange=()=>{const t=this.items;let e=!1;for(const i of t){!(!i.disabled&&i.tabIndex>-1)||e?i.tabIndex=-1:(e=!0,i.tabIndex=0)}if(e)return;const i=Di(t,this.isActivatable);i&&(i.tabIndex=0)};const{isItem:e,getPossibleItems:i,isRtl:r,deactivateItem:o,activateItem:s,isNavigableKey:a,isActivatable:n,wrapNavigation:l}=t;this.isItem=e,this.getPossibleItems=i,this.isRtl=r,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=a,this.isActivatable=n,this.wrapNavigation=l??(()=>!0)}get items(){const t=this.getPossibleItems(),e=[];for(const i of t){if(this.isItem(i)){e.push(i);continue}const t=i.item;t&&this.isItem(t)&&e.push(t)}return e}activateNextItem(){const t=this.items,e=Ui(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Gi(t,e,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const t=this.items,e=Ui(t,this.isActivatable);return e&&(e.item.tabIndex=-1),qi(t,e,this.isActivatable,this.wrapNavigation())}}const Yi=function(t,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:t,reason:e,itemPath:[t]}})},Xi={SPACE:"Space",ENTER:"Enter"},Ki={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},Ji={ESCAPE:"Escape",SPACE:Xi.SPACE,ENTER:Xi.ENTER};function Qi(t){return Object.values(Ji).some(e=>e===t)}function Zi(t){return Object.values(Xi).some(e=>e===t)}function tr(t,e){const i=new Event("md-contains",{bubbles:!0,composed:!0});let r=[];const o=t=>{r=t.composedPath()};e.addEventListener("md-contains",o),t.dispatchEvent(i),e.removeEventListener("md-contains",o);return r.length>0}const er={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"},ir="end-start",rr="start-start";class or{constructor(t,e){this.host=t,this.getProperties=e,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:t,anchorEl:e,anchorCorner:i,surfaceCorner:r,positioning:o,xOffset:s,yOffset:a,disableBlockFlip:n,disableInlineFlip:l,repositionStrategy:d}=this.getProperties(),c=i.toLowerCase().trim(),h=r.toLowerCase().trim();if(!t||!e)return;const p=window.innerWidth,u=window.innerHeight,m=document.createElement("div");m.style.opacity="0",m.style.position="fixed",m.style.display="block",m.style.inset="0",document.body.appendChild(m);const f=m.getBoundingClientRect();m.remove();const v=window.innerHeight-f.bottom,g=window.innerWidth-f.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,t.popover&&t.isConnected&&t.showPopover();const b=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),y=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),[x,w]=h.split("-"),[_,k]=c.split("-"),$="ltr"===getComputedStyle(t).direction;let{blockInset:z,blockOutOfBoundsCorrection:S,surfaceBlockProperty:A}=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:_,surfaceBlock:x,yOffset:a,positioning:o,windowInnerHeight:u,blockScrollbarHeight:v});if(S&&!n){const t="start"===x?"end":"start",e="start"===_?"end":"start",i=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:e,surfaceBlock:t,yOffset:a,positioning:o,windowInnerHeight:u,blockScrollbarHeight:v});S>i.blockOutOfBoundsCorrection&&(z=i.blockInset,S=i.blockOutOfBoundsCorrection,A=i.surfaceBlockProperty)}let{inlineInset:C,inlineOutOfBoundsCorrection:E,surfaceInlineProperty:T}=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:k,surfaceInline:w,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:p,inlineScrollbarWidth:g});if(E&&!l){const t="start"===w?"end":"start",e="start"===k?"end":"start",i=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:e,surfaceInline:t,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:p,inlineScrollbarWidth:g});Math.abs(E)>Math.abs(i.inlineOutOfBoundsCorrection)&&(C=i.inlineInset,E=i.inlineOutOfBoundsCorrection,T=i.surfaceInlineProperty)}"move"===d&&(z-=S,C-=E),this.surfaceStylesInternal={display:"block",opacity:"1",[A]:`${z}px`,[T]:`${C}px`},"resize"===d&&(S&&(this.surfaceStylesInternal.height=b.height-S+"px"),E&&(this.surfaceStylesInternal.width=b.width-E+"px")),this.host.requestUpdate()}calculateBlock(t){const{surfaceRect:e,anchorRect:i,anchorBlock:r,surfaceBlock:o,yOffset:s,positioning:a,windowInnerHeight:n,blockScrollbarHeight:l}=t,d="fixed"===a||"document"===a?1:0,c="document"===a?1:0,h="start"===o?1:0,p="end"===o?1:0,u=(r!==o?1:0)*i.height+s,m=h*i.top+p*(n-i.bottom-l);return{blockInset:d*m+c*(h*window.scrollY-p*window.scrollY)+u,blockOutOfBoundsCorrection:Math.abs(Math.min(0,n-m-u-e.height)),surfaceBlockProperty:"start"===o?"inset-block-start":"inset-block-end"}}calculateInline(t){const{isLTR:e,surfaceInline:i,anchorInline:r,anchorRect:o,surfaceRect:s,xOffset:a,positioning:n,windowInnerWidth:l,inlineScrollbarWidth:d}=t,c="fixed"===n||"document"===n?1:0,h="document"===n?1:0,p=e?1:0,u=e?0:1,m="start"===i?1:0,f="end"===i?1:0,v=(r!==i?1:0)*o.width+a,g=p*(m*o.left+f*(l-o.right-d))+u*(m*(l-o.right-d)+f*o.left);let b="start"===i?"inset-inline-start":"inset-inline-end";return"document"!==n&&"fixed"!==n||(b="start"===i&&e||"end"===i&&!e?"left":"right"),{inlineInset:c*g+v+h*(p*(m*window.scrollX-f*window.scrollX)+u*(f*window.scrollX-m*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-g-v-s.width)),surfaceInlineProperty:b}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const t=this.getProperties();let e=!1;for(const[i,r]of Object.entries(t))if(e=e||r!==this.lastValues[i],e)break;const i=this.lastValues.isOpen!==t.isOpen,r=!!t.anchorEl,o=!!t.surfaceEl;e&&r&&o&&(this.lastValues.isOpen=t.isOpen,t.isOpen?(this.lastValues=t,await this.position(),t.onOpen()):i&&(await t.beforeClose(),this.close(),t.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const t=this.getProperties().surfaceEl;t?.popover&&t?.isConnected&&t.hidePopover()}}const sr={INDEX:0,ITEM:1,TEXT:2};class ar{constructor(t){this.getProperties=t,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=t=>{this.isTypingAhead?this.typeahead(t):this.beginTypeahead(t)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(t){this.active&&("Space"===t.code||"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((t,e)=>[e,t,t.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(t=>0===t[sr.ITEM].tabIndex)??null,this.lastActiveRecord&&(this.lastActiveRecord[sr.ITEM].tabIndex=-1),this.typeahead(t)))}typeahead(t){if(t.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[sr.ITEM].tabIndex=-1));"Space"===t.code&&t.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=t.key.toLowerCase();const e=this.lastActiveRecord?this.lastActiveRecord[sr.INDEX]:-1,i=this.typeaheadRecords.length,r=t=>(t[sr.INDEX]+i-e)%i,o=this.typeaheadRecords.filter(t=>!t[sr.ITEM].disabled&&t[sr.TEXT].startsWith(this.typaheadBuffer)).sort((t,e)=>r(t)-r(e));if(0===o.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[sr.ITEM].tabIndex=-1),void this.endTypeahead();const s=1===this.typaheadBuffer.length;let a;a=this.lastActiveRecord===o[0]&&s?o[1]??o[0]:o[0],this.lastActiveRecord&&(this.lastActiveRecord[sr.ITEM].tabIndex=-1),this.lastActiveRecord=a,a[sr.ITEM].tabIndex=0,a[sr.ITEM].focus()}}const nr=200,lr=new Set([Wi.ArrowDown,Wi.ArrowUp,Wi.Home,Wi.End]),dr=new Set([Wi.ArrowLeft,Wi.ArrowRight,...lr]);class cr extends lt{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(t){this.currentAnchorElement=t,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=200,this.anchorCorner=ir,this.menuCorner=rr,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=er.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=function(){let t=null;return{start:()=>(t?.abort(),t=new AbortController,t.signal),finish(){t=null}}}(),this.listController=new Vi({isItem:t=>t.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.selected=!1,t.tabIndex=-1},activateItem:t=>{t.selected=!0,t.tabIndex=0},isNavigableKey:t=>{if(!this.isSubmenu)return dr.has(t);return t===("rtl"===getComputedStyle(this).direction?Wi.ArrowLeft:Wi.ArrowRight)||lr.has(t)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new ar(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new or(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"})),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async t=>{const e=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(e))return;if(t.relatedTarget){if(tr(t.relatedTarget,this)||0!==this.pointerPath.length&&tr(t.relatedTarget,e))return}else if(this.pointerPath.includes(this))return;const i=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=i},this.onOpened=async()=>{this.lastFocusedElement=function(t=document){let e=t.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}();const t=this.items,e=Ui(t);e&&this.defaultFocus!==er.NONE&&(e.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case er.FIRST_ITEM:const e=Di(t);e&&(e.tabIndex=0,e.focus(),await e.updateComplete);break;case er.LAST_ITEM:const i=Fi(t);i&&(i.tabIndex=0,i.focus(),await i.updateComplete);break;case er.LIST_ROOT:this.focus()}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=t=>{this.pointerPath=t.composedPath()},this.onDocumentClick=t=>{if(!this.open)return;const e=t.composedPath();this.stayOpenOnOutsideClick||e.includes(this)||e.includes(this.anchorElement)||(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(t){t.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(t){t.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return G`
      <div
        class="menu ${St(this.getSurfaceClasses())}"
        style=${ue(this.menuPositionController.surfaceStyles)}
        popover=${"popover"===this.positioning?"manual":H}>
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
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return G`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(t){t.target===this&&!t.defaultPrevented&&Qi(t.code)&&(t.preventDefault(),this.close()),this.typeaheadController.onKeydown(t)}async animateOpen(){const t=this.surfaceEl,e=this.slotEl;if(!t||!e)return!0;const i=this.openDirection;this.dispatchEvent(new Event("opening")),t.classList.toggle("animating",!0);const r=this.openCloseAnimationSignal.start(),o=t.offsetHeight,s="UP"===i,a=this.items,n=250/a.length,l=t.animate([{height:"0px"},{height:`${o}px`}],{duration:500,easing:Gt}),d=e.animate([{transform:s?`translateY(-${o}px)`:""},{transform:""}],{duration:500,easing:Gt}),c=t.animate([{opacity:0},{opacity:1}],50),h=[];for(let t=0;t<a.length;t++){const e=a[s?a.length-1-t:t],i=e.animate([{opacity:0},{opacity:1}],{duration:250,delay:n*t});e.classList.toggle("md-menu-hidden",!0),i.addEventListener("finish",()=>{e.classList.toggle("md-menu-hidden",!1)}),h.push([e,i])}let p=t=>{};const u=new Promise(t=>{p=t});return r.addEventListener("abort",()=>{l.cancel(),d.cancel(),c.cancel(),h.forEach(([t,e])=>{t.classList.toggle("md-menu-hidden",!1),e.cancel()}),p(!0)}),l.addEventListener("finish",()=>{t.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),p(!1)}),await u}animateClose(){let t;const e=new Promise(e=>{t=e}),i=this.surfaceEl,r=this.slotEl;if(!i||!r)return t(!1),e;const o="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),i.classList.toggle("animating",!0);const s=this.openCloseAnimationSignal.start(),a=i.offsetHeight,n=this.items,l=150,d=50/n.length,c=i.animate([{height:`${a}px`},{height:.35*a+"px"}],{duration:l,easing:qt}),h=r.animate([{transform:""},{transform:o?`translateY(-${.65*a}px)`:""}],{duration:l,easing:qt}),p=i.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),u=[];for(let t=0;t<n.length;t++){const e=n[o?t:n.length-1-t],i=e.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+d*t});i.addEventListener("finish",()=>{e.classList.toggle("md-menu-hidden",!0)}),u.push([e,i])}return s.addEventListener("abort",()=>{c.cancel(),h.cancel(),p.cancel(),u.forEach(([t,e])=>{e.cancel(),t.classList.toggle("md-menu-hidden",!1)}),t(!1)}),c.addEventListener("finish",()=>{i.classList.toggle("animating",!1),u.forEach(([t])=>{t.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),t(!0)}),e}handleKeydown(t){this.pointerPath=[],this.listController.handleKeydown(t)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(t){t.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(t){t.stopPropagation(),this.listController.onRequestActivation(t)}handleDeactivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach(t=>{t.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}t([vt(".menu")],cr.prototype,"surfaceEl",void 0),t([vt("slot")],cr.prototype,"slotEl",void 0),t([ut()],cr.prototype,"anchor",void 0),t([ut()],cr.prototype,"positioning",void 0),t([ut({type:Boolean})],cr.prototype,"quick",void 0),t([ut({type:Boolean,attribute:"has-overflow"})],cr.prototype,"hasOverflow",void 0),t([ut({type:Boolean,reflect:!0})],cr.prototype,"open",void 0),t([ut({type:Number,attribute:"x-offset"})],cr.prototype,"xOffset",void 0),t([ut({type:Number,attribute:"y-offset"})],cr.prototype,"yOffset",void 0),t([ut({type:Boolean,attribute:"no-horizontal-flip"})],cr.prototype,"noHorizontalFlip",void 0),t([ut({type:Boolean,attribute:"no-vertical-flip"})],cr.prototype,"noVerticalFlip",void 0),t([ut({type:Number,attribute:"typeahead-delay"})],cr.prototype,"typeaheadDelay",void 0),t([ut({attribute:"anchor-corner"})],cr.prototype,"anchorCorner",void 0),t([ut({attribute:"menu-corner"})],cr.prototype,"menuCorner",void 0),t([ut({type:Boolean,attribute:"stay-open-on-outside-click"})],cr.prototype,"stayOpenOnOutsideClick",void 0),t([ut({type:Boolean,attribute:"stay-open-on-focusout"})],cr.prototype,"stayOpenOnFocusout",void 0),t([ut({type:Boolean,attribute:"skip-restore-focus"})],cr.prototype,"skipRestoreFocus",void 0),t([ut({attribute:"default-focus"})],cr.prototype,"defaultFocus",void 0),t([ut({type:Boolean,attribute:"no-navigation-wrap"})],cr.prototype,"noNavigationWrap",void 0),t([yt({flatten:!0})],cr.prototype,"slotItems",void 0),t([mt()],cr.prototype,"typeaheadActive",void 0);const hr=a`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;let pr=class extends cr{};pr.styles=[hr],pr=t([ct("md-menu")],pr);class ur extends ki{renderElevationOrOutline(){return G`<div class="outline"></div>`}}const mr=a`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host(:is([disabled],[soft-disabled])) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])) .background{border-color:GrayText}:host(:is([disabled],[soft-disabled])) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;let fr=class extends ur{};fr.styles=[bi,mr],fr=t([ct("md-outlined-button")],fr);class vr extends Error{}function gr(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(t){return decodeURIComponent(atob(t).replace(/(.)/g,(t,e)=>{let i=e.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}(e)}catch(t){return atob(e)}}function br(t,e){if("string"!=typeof t)throw new vr("Invalid token specified: must be a string");e||(e={});const i=!0===e.header?0:1,r=t.split(".")[i];if("string"!=typeof r)throw new vr(`Invalid token specified: missing part #${i+1}`);let o;try{o=gr(r)}catch(t){throw new vr(`Invalid token specified: invalid base64 for part #${i+1} (${t.message})`)}try{return JSON.parse(o)}catch(t){throw new vr(`Invalid token specified: invalid json for part #${i+1} (${t.message})`)}}vr.prototype.name="InvalidTokenError";class yr{constructor(){this.postLogoutRedirectUri="https://leavitt.com",this.authZeroDomainBaseURL="https://auth.leavitt.com",this.#J="VNreSE4Z8HsMaUfc1yRGgZQv9EN2quOS",this.#Q="https://auth.leavitt.com/oauth/token",this.#Z="https://auth.leavitt.com/",this.#tt="api3",this.#et=["openid","profile","email","offline_access"],this.#it=!1,this.#rt=!1,this.#ot=[],this.#st=[]}#J;#Q;#Z;#tt;#et;get#at(){return`https://${Oi?"dev":""}${this.#tt}.leavitt.com`}get apiVersion(){return this.#tt}set apiVersion(t){this.#tt=t}#it;#rt;#nt;get identity(){return this.#lt(this.#dt)}get refreshToken(){return this.#ct}get accessToken(){return this.#ht}get idToken(){return this.#dt}get#ct(){return localStorage.getItem("lg-auth0-rt")||null}set#ct(t){localStorage.setItem("lg-auth0-rt",t||"")}get#ht(){return localStorage.getItem("lg-auth0-at")||null}set#ht(t){localStorage.setItem("lg-auth0-at",t||"")}get#dt(){return localStorage.getItem("lg-auth0-id-token")||null}set#dt(t){localStorage.setItem("lg-auth0-id-token",t||""),this.#pt(this.identity)}get#ut(){return localStorage.getItem("lg-auth0-code-verifier")||null}set#ut(t){localStorage.setItem("lg-auth0-code-verifier",t||"")}#ot;#mt(t){this.#ot.forEach(({resolver:e})=>e(t)),this.#ot=[]}#ft(t){this.#ot.forEach(({reject:e})=>e(t)),this.#ot=[]}async _getBearerTokenAsync(){return await this.authenticate()}async initialize(){if(this.#it)return Promise.resolve();this.#it=!0;const t=new URLSearchParams(window.location.search),e=t.get("code"),i=t.get("state");if(e)return new Promise(async(t,r)=>{this.#ot.push({resolver:t,reject:r}),i&&window.history.replaceState({},"",i);try{await this.#vt(e)}catch(t){return this.#ft(t instanceof Error?t.message:String(t))}return this.#gt(this.#ht)?this.#mt(this.#ht):this.#ft("Login failed, please try again.")});const r=t.get("error"),o=t.get("error_description");if(r){const t=new URL(window.location.href);return t.searchParams.delete("error"),t.searchParams.delete("error_description"),t.searchParams.delete("state"),window.history.replaceState({},"",t.toString()),new Promise((t,e)=>(this.#ot.push({resolver:t,reject:e}),this.#rt=!0,this.#nt=o||"Login failed, please try again.",this.#ft(o||"Login failed, please try again.")))}return Promise.resolve()}async authenticate(){if(this.#rt)throw new Error(this.#nt);return this.#it||await this.initialize(),this.#ot.length?new Promise((t,e)=>{this.#ot.push({resolver:t,reject:e})}):new Promise(async(t,e)=>{if(this.#ot.push({resolver:t,reject:e}),this.#gt(this.#ht))return this.#mt(this.#ht);try{await this.#bt(this.#ct)}catch(t){return this.#ft(t instanceof Error?t.message:String(t))}if(this.#gt(this.#ht))return this.#mt(this.#ht);this.#yt()})}logout(){this.#ht=null,this.#ct=null,this.#dt=null,this.#ut=null;const t=`${this.authZeroDomainBaseURL}/oidc/logout?federated&client_id=${this.#J}&post_logout_redirect_uri=${encodeURIComponent(this.postLogoutRedirectUri)}`;console.log("redirecting to logout page..."),document.location.href=t}#st;onIdentityUpdated(t){this.#st.push(t)}removeOnIdentityUpdated(t){this.#st=this.#st.filter(e=>e!==t)}#pt(t){this.#st.forEach(e=>e(t))}async#yt(){const t=new URL(document.location.href),e=this.#xt(128),i=await this.#wt(e);this.#ut=e;const r={response_type:"code",client_id:this.#J,code_challenge:i,code_challenge_method:"S256",redirect_uri:t.origin,audience:this.#at,scope:this.#et.join(" "),state:t.pathname+t.search+t.hash},o=Object.entries(r).map(([t,e])=>`${t}=${encodeURIComponent(e)}`).join("&"),s=`${this.authZeroDomainBaseURL}/authorize?${o}`;console.log("redirecting to sign in page..."),document.location.href=s}#_t(t){if(!t)return null;let e;try{e=br(t)}catch(t){return console.error("Error decoding access token",t),null}return e&&(e.exp=new Date(0).setUTCSeconds(e.exp),e.iat=new Date(0).setUTCSeconds(e.iat)),e}#lt(t){if(!t)return null;let e;try{e=br(t)}catch(t){return console.error("Error decoding identity token",t),null}const i=new Date(0);i.setUTCSeconds(e.exp);const r=new Date(0);r.setUTCSeconds(e.iat);return{coreid:e["https://leavitt.com/coreid"]??0,roles:e["https://leavitt.com/roles"]||[],activeEmployee:!!e["https://leavitt.com/activeEmployee"],pendingEmployee:!!e["https://leavitt.com/pendingEmployee"],activeClient:!!e["https://leavitt.com/activeClient"],companyName:e["https://leavitt.com/company"],profilePictureFileName:e["https://leavitt.com/picCdnFileName"],lastname:e["https://leavitt.com/lastname"],firstname:e["https://leavitt.com/firstname"],companyId:e["https://leavitt.com/companyId"]??0,nickname:e.nickname,name:e.name,picture:e.picture,updatedAt:e.updated_at?new Date(e.updated_at):null,email:e.email,issuer:e.iss,audience:e.aud,uniqueIdentifier:e.sub,issuedDate:r,expirationDate:i,sid:e.sid}}#gt(t){if(!t)return!1;const e=this.#_t(t);if(!e)return!1;const i=new Date;return i.setSeconds(i.getSeconds()+30),!(!e.iss||e.iss!==this.#Z)&&!(!e.exp||e.exp<=i)}async#bt(t){if(t){try{const e=await fetch(this.#Q,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({grant_type:"refresh_token",refresh_token:t,audience:this.#at,client_id:this.#J,scope:this.#et.join(" ")})});if(!e.ok)return console.error("Error refreshing access token",e.statusText),null;const i=await e.json();return this.#ht=i.access_token,this.#ct=i.refresh_token,this.#dt=i.id_token,i.access_token}catch(t){if(!navigator.onLine)throw new Error("No internet connection. Please check your network.",{cause:t});console.error("Error refreshing access token",t)}return null}}async#vt(t){if(!t||!this.#ut)return null;try{const e=await fetch(this.#Q,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({grant_type:"authorization_code",client_id:this.#J,code:t,redirect_uri:new URL(window.location.href).origin,code_verifier:this.#ut})});if(!e.ok){const t=await e.text();throw new Error(`Error: ${e.status} - ${t}`)}const i=await e.json();return this.#ht=i.access_token,this.#ct=i.refresh_token,this.#dt=i.id_token,this.#ut=null,i.access_token}catch(t){if(!navigator.onLine)throw new Error("No internet connection. Please check your network.",{cause:t});throw console.error("Token exchange failed",t),new Error("Token exchange failed",{cause:t})}}#xt(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";let i="";const r=new Uint32Array(t);window.crypto.getRandomValues(r);for(let o=0;o<t;o++)i+=e[r[o]%66];return i}async#wt(t){const e=(new TextEncoder).encode(t),i=await window.crypto.subtle.digest("SHA-256",e);return btoa(String.fromCharCode(...new Uint8Array(i))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}}let xr=class extends lt{constructor(){super(...arguments),this.#kt=null,this.#H=40,this.#$t=null,this.#zt=0,this.#St="",this.#At="",this.#Ct="",this.positioning="popover"}#kt;get userManager(){return this.#kt}set userManager(t){this.#kt=t}#H;get size(){return this.#H}set size(t){this.#H=t}#$t;get profilePictureFileName(){return this.#$t}set profilePictureFileName(t){this.#$t=t}#zt;get personId(){return this.#zt}set personId(t){this.#zt=t}#St;get email(){return this.#St}set email(t){this.#St=t}#At;get company(){return this.#At}set company(t){this.#At=t}#Ct;get name(){return this.#Ct}set name(t){this.#Ct=t}#Et;get menu(){return this.#Et}set menu(t){this.#Et=t}firstUpdated(){const t=this.#Tt();t instanceof yr&&(t.onIdentityUpdated(()=>{this.personId=t.identity?.coreid??0,this.profilePictureFileName=t.identity?.profilePictureFileName??null,this.email=t.identity?.email??"",this.company=t.identity?.companyName??"",this.name=t.identity?.name??""}),this.personId=t.identity?.coreid??0,this.profilePictureFileName=t.identity?.profilePictureFileName??null,this.email=t.identity?.email??"",this.company=t.identity?.companyName??"",this.name=t.identity?.name??"")}#Tt(){return this.userManager}updated(t){t.has("size")&&t.get("size")!==this.size&&(this.style.width=this.size+"px",this.style.height=this.size+"px"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}static{this.styles=a`
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
        @click=${()=>{this.personId?this.menu.open=!this.menu.open:this.userManager?.authenticate()}}
        style=${ue({height:`${this.size}px`,width:`${this.size}px`})}
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
    `}};t([ut({type:Object})],xr.prototype,"userManager",null),t([ut({type:Number})],xr.prototype,"size",null),t([ut({type:String})],xr.prototype,"profilePictureFileName",null),t([ut({type:Number})],xr.prototype,"personId",null),t([ut({type:String})],xr.prototype,"email",null),t([ut({type:String})],xr.prototype,"company",null),t([ut({type:String})],xr.prototype,"name",null),t([vt("md-menu")],xr.prototype,"menu",null),t([ut()],xr.prototype,"positioning",void 0),xr=t([ct("profile-picture-menu")],xr);class wr extends lt{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}t([ut({type:Boolean,reflect:!0})],wr.prototype,"inset",void 0),t([ut({type:Boolean,reflect:!0,attribute:"inset-start"})],wr.prototype,"insetStart",void 0),t([ut({type:Boolean,reflect:!0,attribute:"inset-end"})],wr.prototype,"insetEnd",void 0);const _r=a`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;let kr=class extends wr{};kr.styles=[_r],kr=t([ct("md-divider")],kr);const $r={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Gt}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Gt,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},zr={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:qt}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:qt,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]},Sr=Mt(lt);class Ar extends Sr{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>$r,this.getCloseAnimation=()=>zr,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(t=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const e=this.dialog;if(!e.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=t;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),e.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),e={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,r=G`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:o}=this;return G`
      <div class="scrim"></div>
      <dialog
        class=${St(e)}
        aria-label=${o||H}
        aria-labelledby=${this.hasHeadline?"headline":H}
        role=${"alert"===this.type?"alertdialog":H}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||H}>
        ${i?r:H}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||H}>
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
        ${i?r:H}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(t=>{for(const e of t)this.handleAnchorIntersection(e)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:i}=t;"dialog"===e.getAttribute("method")&&i&&this.close(i.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const e=!fe(this,t);t.preventDefault(),e||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(t){"Escape"===t.key&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(t){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:e,scrim:i,container:r,headline:o,content:s,actions:a}=this;if(!(e&&i&&r&&o&&s&&a))return;const{container:n,dialog:l,scrim:d,headline:c,content:h,actions:p}=t,u=[[e,l??[]],[i,d??[]],[r,n??[]],[o,c??[]],[s,h??[]],[a,p??[]]],m=[];for(const[t,e]of u)for(const i of e){const e=t.animate(...i);this.cancelAnimations.signal.addEventListener("abort",()=>{e.cancel()}),m.push(e)}await Promise.all(m.map(t=>t.finished.catch(()=>{})))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}handleAnchorIntersection(t){const{target:e,isIntersecting:i}=t;e===this.topAnchor&&(this.isAtScrollTop=i),e===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise(t=>{this.isConnectedPromiseResolve=t})}handleFocusTrapFocus(t){const[e,i]=this.getFirstAndLastFocusableChildren();if(!e||!i)return void this.dialog?.focus();const r=t.target===this.firstFocusTrap,o=!r,s=t.relatedTarget===e,a=t.relatedTarget===i,n=!s&&!a;if(o&&a||r&&n)return void e.focus();(r&&s||o&&n)&&i.focus()}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let t=null,e=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;Cr(i)&&(t||(t=i),e=i)}return[t,e]}}function Cr(t){const e=":not(:disabled,[disabled])";if(t.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+e+':not([tabindex^="-"])'))return!0;return!!t.localName.includes("-")&&(!!t.matches(e)&&(t.shadowRoot?.delegatesFocus??!1))}t([ut({type:Boolean})],Ar.prototype,"open",null),t([ut({type:Boolean})],Ar.prototype,"quick",void 0),t([ut({attribute:!1})],Ar.prototype,"returnValue",void 0),t([ut()],Ar.prototype,"type",void 0),t([ut({type:Boolean,attribute:"no-focus-trap"})],Ar.prototype,"noFocusTrap",void 0),t([vt("dialog")],Ar.prototype,"dialog",void 0),t([vt(".scrim")],Ar.prototype,"scrim",void 0),t([vt(".container")],Ar.prototype,"container",void 0),t([vt(".headline")],Ar.prototype,"headline",void 0),t([vt(".content")],Ar.prototype,"content",void 0),t([vt(".actions")],Ar.prototype,"actions",void 0),t([mt()],Ar.prototype,"isAtScrollTop",void 0),t([mt()],Ar.prototype,"isAtScrollBottom",void 0),t([vt(".scroller")],Ar.prototype,"scroller",void 0),t([vt(".top.anchor")],Ar.prototype,"topAnchor",void 0),t([vt(".bottom.anchor")],Ar.prototype,"bottomAnchor",void 0),t([vt(".focus-trap")],Ar.prototype,"firstFocusTrap",void 0),t([mt()],Ar.prototype,"hasHeadline",void 0),t([mt()],Ar.prototype,"hasActions",void 0),t([mt()],Ar.prototype,"hasIcon",void 0);const Er=a`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;let Tr=class extends Ar{};Tr.styles=[Er],Tr=t([ct("md-dialog")],Tr);class Pr extends Ht{renderOutline(t){return G`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${t}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}}const Mr=a`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`;let Or=class extends Pr{};Or.styles=[Yt,Mr],Or=t([ct("md-outlined-field")],Or);const Ir=a`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`;class Br extends je{constructor(){super(...arguments),this.fieldTag=Qt`md-outlined-field`}}let Rr=class extends Br{constructor(){super(...arguments),this.fieldTag=Qt`md-outlined-field`}};Rr.styles=[De,Ir],Rr=t([ct("md-outlined-text-field")],Rr);let Lr=class extends Xt{constructor(){super(...arguments),this.populated=!0}#Pt;get evaluator(){return this.#Pt}set evaluator(t){this.#Pt=t}firstUpdated(){this.addEventListener("focusin",()=>this.focused=!0),this.addEventListener("focusout",()=>this.focused=!1)}reset(){this.error=!1}reportValidity(){const t=this.checkValidity();return this.error=!t,t}checkValidity(){return!!this.evaluator()}};t([ut({type:Boolean})],Lr.prototype,"populated",void 0),t([ut({type:Object})],Lr.prototype,"evaluator",null),Lr=t([ct("titanium-filled-input-validator")],Lr);let Nr=class extends lt{#Mt="";get label(){return this.#Mt}set label(t){this.#Mt=t}#Ot="No items";get noItemsText(){return this.#Ot}set noItemsText(t){this.#Ot=t}#It=!1;get required(){return this.#It}set required(t){this.#It=t}#Bt=!1;get hasItems(){return this.#Bt}set hasItems(t){this.#Bt=t}#Rt="";get supportingText(){return this.#Rt}set supportingText(t){this.#Rt=t}#Lt=!1;get error(){return this.#Lt}set error(t){this.#Lt=t}#Nt="";get errorText(){return this.#Nt}set errorText(t){this.#Nt=t}#jt=!1;get resizable(){return this.#jt}set resizable(t){this.#jt=t}#m=!1;get disabled(){return this.#m}set disabled(t){this.#m=t}#Ut;get validator(){return this.#Ut}set validator(t){this.#Ut=t}updated(t){(t.get("hasItems")&&t.has("hasItems")||this.hasItems&&t.has("hasItems"))&&this.reportValidity()}checkValidity(){return this.validator?.checkValidity()}reportValidity(){return this.validator?.reportValidity()}reset(){this.validator?.reset()}static{this.styles=[a`
      :host {
        display: block;
        width: 100%;

        --md-filled-field-container-shape: 16px;

        --md-filled-field-active-indicator-height: 0;
        --md-filled-field-error-active-indicator-height: 0;
        --md-filled-field-hover-active-indicator-height: 0;
        --md-filled-field-focus-active-indicator-height: 0;
        --md-filled-field-disabled-active-indicator-height: 0;
      }

      titanium-filled-input-validator {
        display: block;
        width: 100%;
        --md-filled-field-with-label-bottom-space: 12px;
      }

      slot-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-top: 6px;
      }

      span {
        font-size: 13px;
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
    `]}render(){return G`
      <titanium-filled-input-validator
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
      </titanium-filled-input-validator>
    `}};t([ut({type:String})],Nr.prototype,"label",null),t([ut({type:String})],Nr.prototype,"noItemsText",null),t([ut({type:Boolean})],Nr.prototype,"required",null),t([ut({type:Boolean})],Nr.prototype,"hasItems",null),t([ut({type:String})],Nr.prototype,"supportingText",null),t([ut({type:Boolean})],Nr.prototype,"error",null),t([ut({type:String})],Nr.prototype,"errorText",null),t([ut({type:Boolean})],Nr.prototype,"resizable",null),t([ut({type:Boolean,reflect:!0})],Nr.prototype,"disabled",null),t([vt("titanium-filled-input-validator")],Nr.prototype,"validator",null),Nr=t([ct("titanium-chip-multi-select")],Nr);class jr extends ki{renderElevationOrOutline(){return G`<md-elevation part="elevation"></md-elevation>`}}const Ur=a`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`,Dr=a`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;let Fr=class extends jr{};Fr.styles=[bi,Dr,Ur],Fr=t([ct("md-filled-tonal-button")],Fr);const Gr="undefined"!=typeof window&&void 0!==window.document,qr=Gr?window:{},Hr=!!Gr&&"ontouchstart"in qr.document.documentElement,Wr=!!Gr&&"PointerEvent"in qr,Vr="cropper",Yr=`${Vr}-canvas`,Xr=`${Vr}-crosshair`,Kr=`${Vr}-grid`,Jr=`${Vr}-handle`,Qr=`${Vr}-image`,Zr=`${Vr}-selection`,to=`${Vr}-shade`,eo=`${Vr}-viewer`,io="select",ro="move",oo="scale",so="rotate",ao="transform",no="none",lo="n-resize",co="e-resize",ho="s-resize",po="w-resize",uo="ne-resize",mo="nw-resize",fo="se-resize",vo="sw-resize",go=Wr?"pointerdown":Hr?"touchstart":"mousedown",bo=Wr?"pointermove":Hr?"touchmove":"mousemove",yo=Wr?"pointerup pointercancel":Hr?"touchend touchcancel":"mouseup",xo="error",wo="keydown",_o="load",ko="resize",$o="wheel",zo="action",So="actionend",Ao="actionstart",Co="change",Eo="transform";const To=Number.isNaN||qr.isNaN;function Po(t){return"number"==typeof t&&!To(t)}function Mo(t){return Po(t)&&t>0&&t<1/0}function Oo(t){return"object"==typeof t&&null!==t}const{hasOwnProperty:Io}=Object.prototype;function Bo(t){if(!Oo(t))return!1;try{const{constructor:e}=t,{prototype:i}=e;return e&&i&&Io.call(i,"isPrototypeOf")}catch(t){return!1}}function Ro(t){return"function"==typeof t}function Lo(t){return"object"==typeof t&&null!==t&&1===t.nodeType}const No=/([a-z\d])([A-Z])/g;function jo(t){return String(t).replace(No,"$1-$2").toLowerCase()}const Uo=/-[A-z\d]/g;function Do(t){return t.replace(Uo,t=>t.slice(1).toUpperCase())}const Fo=/\s\s*/;function Go(t,e,i,r){e.trim().split(Fo).forEach(e=>{t.removeEventListener(e,i,r)})}function qo(t,e,i,r){e.trim().split(Fo).forEach(e=>{t.addEventListener(e,i,r)})}function Ho(t,e,i,r){qo(t,e,i,Object.assign(Object.assign({},r),{once:!0}))}const Wo={bubbles:!0,cancelable:!0,composed:!0};const Vo=Promise.resolve();function Yo(t){const{documentElement:e}=t.ownerDocument,i=t.getBoundingClientRect();return{left:i.left+(qr.pageXOffset-e.clientLeft),top:i.top+(qr.pageYOffset-e.clientTop)}}const Xo=/deg|g?rad|turn$/i;function Ko(t){const e=parseFloat(t)||0;if(0!==e){const[i="rad"]=String(t).match(Xo)||[];switch(i.toLowerCase()){case"deg":return e/360*(2*Math.PI);case"grad":return e/400*(2*Math.PI);case"turn":return e*(2*Math.PI)}}return e}const Jo="contain";function Qo(t,e=Jo){const{aspectRatio:i}=t;let{width:r,height:o}=t;const s=Mo(r),a=Mo(o);if(s&&a){const t=o*i;e===Jo&&t>r||"cover"===e&&t<r?o=r/i:r=o*i}else s?o=r/i:a&&(r=o*i);return{width:r,height:o}}function Zo(t,...e){if(0===e.length)return t;const[i,r,o,s,a,n]=t,[l,d,c,h,p,u]=e[0];return Zo(t=[i*l+o*d,r*l+s*d,i*c+o*h,r*c+s*h,i*p+o*u+a,r*p+s*u+n],...e.slice(1))}const ts=/left|top|width|height/i,es="open",is=new WeakMap,rs=new WeakMap,os=new Map,ss=qr.document&&Array.isArray(qr.document.adoptedStyleSheets)&&"replaceSync"in qr.CSSStyleSheet.prototype;class as extends HTMLElement{get $sharedStyle(){return(this.themeColor?`:host{--theme-color: ${this.themeColor};}`:"")+":host([hidden]){display:none!important}"}constructor(){var t,e;super(),this.shadowRootMode=es,this.slottable=!0;const i=null===(e=null===(t=Object.getPrototypeOf(this))||void 0===t?void 0:t.constructor)||void 0===e?void 0:e.$name;i&&os.set(i,this.tagName.toLowerCase())}static get observedAttributes(){return["shadow-root-mode","slottable","theme-color"]}attributeChangedCallback(t,e,i){if(Object.is(i,e))return;const r=Do(t);let o=i;switch(typeof this[r]){case"boolean":o=null!==i&&"false"!==i;break;case"number":o=Number(i)}switch(this[r]=o,t){case"theme-color":{const t=rs.get(this),e=this.$sharedStyle;t&&e&&(ss?t.replaceSync(e):t.textContent=e);break}}}$propertyChangedCallback(t,e,i){if(!Object.is(i,e))switch(t=jo(t),typeof i){case"boolean":!0===i?this.hasAttribute(t)||this.setAttribute(t,""):this.removeAttribute(t);break;case"number":i=To(i)?"":String(i);default:i?this.getAttribute(t)!==i&&this.setAttribute(t,i):this.removeAttribute(t)}}connectedCallback(){Object.getPrototypeOf(this).constructor.observedAttributes.forEach(t=>{const e=Do(t);let i=this[e];(function(t){return void 0===t})(i)||this.$propertyChangedCallback(e,void 0,i),Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>i,set(t){const r=i;i=t,this.$propertyChangedCallback(e,r,t)}})});const t=this.shadowRoot||this.attachShadow({mode:this.shadowRootMode||es});if(is.set(this,t),rs.set(this,this.$addStyles(this.$sharedStyle)),this.$style&&this.$addStyles(this.$style),this.$template){const e=document.createElement("template");e.innerHTML=this.$template,t.appendChild(e.content)}if(this.slottable){const e=document.createElement("slot");t.appendChild(e)}}disconnectedCallback(){rs.has(this)&&rs.delete(this),is.has(this)&&is.delete(this)}$getTagNameOf(t){var e;return null!==(e=os.get(t))&&void 0!==e?e:t}$setStyles(t){return Object.keys(t).forEach(e=>{let i=t[e];Po(i)&&(i=0!==i&&ts.test(e)?`${i}px`:String(i)),this.style[e]=i}),this}$getShadowRoot(){return this.shadowRoot||is.get(this)}$addStyles(t){let e;const i=this.$getShadowRoot();return ss?(e=new CSSStyleSheet,e.replaceSync(t),i.adoptedStyleSheets=i.adoptedStyleSheets.concat(e)):(e=document.createElement("style"),e.textContent=t,i.appendChild(e)),e}$emit(t,e,i){return function(t,e,i,r){return t.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign(Object.assign({},Wo),{detail:i}),r)))}(this,t,e,i)}$nextTick(t){return function(t,e){return e?Vo.then(t?e.bind(t):e):Vo}(this,t)}static $define(t,e){Oo(t)&&(e=t,t=""),t||(t=this.$name||this.name),t=jo(t),Gr&&qr.customElements&&!qr.customElements.get(t)&&customElements.define(t,this,e)}}as.$version="2.1.1";class ns extends as{constructor(){super(...arguments),this.$onPointerDown=null,this.$onPointerMove=null,this.$onPointerUp=null,this.$onWheel=null,this.$wheeling=!1,this.$pointers=new Map,this.$style=':host{display:block;min-height:100px;min-width:200px;overflow:hidden;position:relative;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([background]){background-color:#fff;background-image:repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc),repeating-linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc);background-image:repeating-conic-gradient(#ccc 0 25%,#fff 0 50%);background-position:0 0,.5rem .5rem;background-size:1rem 1rem}:host([disabled]){pointer-events:none}:host([disabled]):after{bottom:0;content:"";cursor:not-allowed;display:block;left:0;pointer-events:none;position:absolute;right:0;top:0}',this.$action=no,this.background=!1,this.disabled=!1,this.scaleStep=.1,this.themeColor="#39f"}static get observedAttributes(){return super.observedAttributes.concat(["background","disabled","scale-step"])}connectedCallback(){super.connectedCallback(),this.disabled||this.$bind()}disconnectedCallback(){this.disabled||this.$unbind(),super.disconnectedCallback()}$propertyChangedCallback(t,e,i){if(!Object.is(i,e)&&(super.$propertyChangedCallback(t,e,i),"disabled"===t))i?this.$unbind():this.$bind()}$bind(){this.$onPointerDown||(this.$onPointerDown=this.$handlePointerDown.bind(this),qo(this,go,this.$onPointerDown)),this.$onPointerMove||(this.$onPointerMove=this.$handlePointerMove.bind(this),qo(this.ownerDocument,bo,this.$onPointerMove)),this.$onPointerUp||(this.$onPointerUp=this.$handlePointerUp.bind(this),qo(this.ownerDocument,yo,this.$onPointerUp)),this.$onWheel||(this.$onWheel=this.$handleWheel.bind(this),qo(this,$o,this.$onWheel,{passive:!1,capture:!0}))}$unbind(){this.$onPointerDown&&(Go(this,go,this.$onPointerDown),this.$onPointerDown=null),this.$onPointerMove&&(Go(this.ownerDocument,bo,this.$onPointerMove),this.$onPointerMove=null),this.$onPointerUp&&(Go(this.ownerDocument,yo,this.$onPointerUp),this.$onPointerUp=null),this.$onWheel&&(Go(this,$o,this.$onWheel,{capture:!0}),this.$onWheel=null)}$handlePointerDown(t){const{buttons:e,button:i,type:r}=t;if(this.disabled||("pointerdown"===r&&"mouse"===t.pointerType||"mousedown"===r)&&(Po(e)&&1!==e||Po(i)&&0!==i||t.ctrlKey))return;const{$pointers:o}=this;let s="";if(t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:t,pageX:e,pageY:i})=>{o.set(t,{startX:e,startY:i,endX:e,endY:i})});else{const{pointerId:e=0,pageX:i,pageY:r}=t;o.set(e,{startX:i,startY:r,endX:i,endY:r})}o.size>1?s=ao:Lo(t.target)&&(s=t.target.action||t.target.getAttribute("action")||""),!1!==this.$emit(Ao,{action:s,relatedEvent:t})&&(t.preventDefault(),this.$action=s,this.style.willChange="transform")}$handlePointerMove(t){const{$action:e,$pointers:i}=this;if(this.disabled||e===no||0===i.size)return;if(!1===this.$emit("actionmove",{action:e,relatedEvent:t}))return;if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:t,pageX:e,pageY:r})=>{const o=i.get(t);o&&Object.assign(o,{endX:e,endY:r})});else{const{pointerId:e=0,pageX:r,pageY:o}=t,s=i.get(e);s&&Object.assign(s,{endX:r,endY:o})}const r={action:e,relatedEvent:t};if(e===ao){const e=new Map(i);let o=0,s=0,a=0,n=0,l=t.pageX,d=t.pageY;i.forEach((t,i)=>{e.delete(i),e.forEach(e=>{let i=e.startX-t.startX,r=e.startY-t.startY,c=e.endX-t.endX,h=e.endY-t.endY,p=0,u=0,m=0,f=0;if(0===i?r<0?m=2*Math.PI:r>0&&(m=Math.PI):i>0?m=Math.PI/2+Math.atan(r/i):i<0&&(m=1.5*Math.PI+Math.atan(r/i)),0===c?h<0?f=2*Math.PI:h>0&&(f=Math.PI):c>0?f=Math.PI/2+Math.atan(h/c):c<0&&(f=1.5*Math.PI+Math.atan(h/c)),f>0||m>0){const i=f-m,r=Math.abs(i);r>o&&(o=r,a=i,l=(t.startX+e.startX)/2,d=(t.startY+e.startY)/2)}if(i=Math.abs(i),r=Math.abs(r),c=Math.abs(c),h=Math.abs(h),i>0&&r>0?p=Math.sqrt(i*i+r*r):i>0?p=i:r>0&&(p=r),c>0&&h>0?u=Math.sqrt(c*c+h*h):c>0?u=c:h>0&&(u=h),p>0&&u>0){const i=(u-p)/p,r=Math.abs(i);r>s&&(s=r,n=i,l=(t.startX+e.startX)/2,d=(t.startY+e.startY)/2)}})});const c=o>0,h=s>0;c&&h?(r.rotate=a,r.scale=n,r.centerX=l,r.centerY=d):c?(r.action=so,r.rotate=a,r.centerX=l,r.centerY=d):h?(r.action=oo,r.scale=n,r.centerX=l,r.centerY=d):r.action=no}else{const[t]=Array.from(i.values());Object.assign(r,t)}i.forEach(t=>{t.startX=t.endX,t.startY=t.endY}),r.action!==no&&this.$emit(zo,r,{cancelable:!1})}$handlePointerUp(t){const{$action:e,$pointers:i}=this;if(!this.disabled&&e!==no&&!1!==this.$emit(So,{action:e,relatedEvent:t})){if(t.preventDefault(),t.changedTouches)Array.from(t.changedTouches).forEach(({identifier:t})=>{i.delete(t)});else{const{pointerId:e=0}=t;i.delete(e)}0===i.size&&(this.style.willChange="",this.$action=no)}}$handleWheel(t){if(this.disabled)return;if(t.preventDefault(),this.$wheeling)return;this.$wheeling=!0,setTimeout(()=>{this.$wheeling=!1},50);const e=(t.deltaY>0?-1:1)*this.scaleStep;this.$emit(zo,{action:oo,scale:e,relatedEvent:t},{cancelable:!1})}$setAction(t){return"string"==typeof t&&(this.$action=t),this}$toCanvas(t){return new Promise((e,i)=>{if(!this.isConnected)return void i(new Error("The current element is not connected to the DOM."));const r=document.createElement("canvas");let o=this.offsetWidth,s=this.offsetHeight,a=1;Bo(t)&&(Mo(t.width)||Mo(t.height))&&(({width:o,height:s}=Qo({aspectRatio:o/s,width:t.width,height:t.height})),a=o/this.offsetWidth),r.width=o,r.height=s;const n=this.querySelector(this.$getTagNameOf(Qr));n?n.$ready().then(i=>{const l=r.getContext("2d");if(l){const[e,d,c,h,p,u]=n.$getTransform();let m=p,f=u,v=i.naturalWidth,g=i.naturalHeight;1!==a&&(m*=a,f*=a,v*=a,g*=a);const b=v/2,y=g/2;l.fillStyle="transparent",l.fillRect(0,0,o,s),Bo(t)&&Ro(t.beforeDraw)&&t.beforeDraw.call(this,l,r),l.save(),l.translate(b,y),l.transform(e,d,c,h,m,f),l.translate(-b,-y),l.drawImage(i,0,0,v,g),l.restore()}e(r)}).catch(i):e(r)})}}ns.$name=Yr,ns.$version="2.1.1";const ls=new WeakMap,ds=["alt","crossorigin","decoding","elementtiming","fetchpriority","loading","referrerpolicy","sizes","src","srcset"];class cs extends as{constructor(){super(...arguments),this.$isReady=!1,this.$matrix=[1,0,0,1,0,0],this.$onLoad=null,this.$onCanvasAction=null,this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$actionStartTarget=null,this.$style=":host{display:inline-block}img{display:block;height:100%;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}",this.$image=new Image,this.initialCenterSize="contain",this.rotatable=!1,this.scalable=!1,this.skewable=!1,this.slottable=!1,this.translatable=!1,this.alt="",this.crossorigin="",this.decoding="",this.elementtiming="",this.fetchpriority="",this.loading="",this.referrerpolicy="",this.sizes="",this.src="",this.srcset=""}set $canvas(t){ls.set(this,t)}get $canvas(){return ls.get(this)}static get observedAttributes(){return super.observedAttributes.concat(ds,["initial-center-size","rotatable","scalable","skewable","translatable"])}attributeChangedCallback(t,e,i){Object.is(i,e)||(super.attributeChangedCallback(t,e,i),ds.includes(t)&&this.$image.setAttribute(t,i))}$propertyChangedCallback(t,e,i){if(!Object.is(i,e))switch(super.$propertyChangedCallback(t,e,i),t){case"initialCenterSize":this.$nextTick(()=>{this.$center(i)});break;case"src":this.$isReady=!1}}connectedCallback(){super.connectedCallback();const{$image:t}=this,e=this.closest(this.$getTagNameOf(Yr));e&&(this.$canvas=e,this.$setStyles({display:"block",position:"absolute"}),this.$onCanvasActionStart=t=>{var e,i;this.$actionStartTarget=null===(i=null===(e=t.detail)||void 0===e?void 0:e.relatedEvent)||void 0===i?void 0:i.target},this.$onCanvasActionEnd=()=>{this.$actionStartTarget=null},this.$onCanvasAction=this.$handleAction.bind(this),qo(e,Ao,this.$onCanvasActionStart),qo(e,So,this.$onCanvasActionEnd),qo(e,zo,this.$onCanvasAction)),this.$onLoad=this.$handleLoad.bind(this),qo(t,_o,this.$onLoad),this.$getShadowRoot().appendChild(t)}disconnectedCallback(){const{$image:t,$canvas:e}=this;e&&(this.$onCanvasActionStart&&(Go(e,Ao,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Go(e,So,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(Go(e,zo,this.$onCanvasAction),this.$onCanvasAction=null)),t&&this.$onLoad&&(Go(t,_o,this.$onLoad),this.$onLoad=null),this.$getShadowRoot().removeChild(t),super.disconnectedCallback()}$handleLoad(){const{$image:t}=this;this.$setStyles({width:t.naturalWidth,height:t.naturalHeight}),this.$canvas&&this.$center(this.initialCenterSize),this.$isReady=!0}$handleAction(t){if(this.hidden||!(this.rotatable||this.scalable||this.translatable))return;const{$canvas:e}=this,{detail:i}=t;if(i){const{relatedEvent:t}=i;let{action:r}=i;switch(r!==ao||this.rotatable&&this.scalable||(r=this.rotatable?so:this.scalable?oo:no),r){case ro:if(this.translatable){let r=null;t&&(r=t.target.closest(this.$getTagNameOf(Zr))),r||(r=e.querySelector(this.$getTagNameOf(Zr))),r&&r.multiple&&!r.active&&(r=e.querySelector(`${this.$getTagNameOf(Zr)}[active]`)),r&&!r.hidden&&r.movable&&!r.dynamic&&this.$actionStartTarget&&r.contains(this.$actionStartTarget)||this.$move(i.endX-i.startX,i.endY-i.startY)}break;case so:if(this.rotatable)if(t){const{x:e,y:r}=this.getBoundingClientRect();this.$rotate(i.rotate,t.clientX-e,t.clientY-r)}else this.$rotate(i.rotate);break;case oo:if(this.scalable)if(t){const e=t.target.closest(this.$getTagNameOf(Zr));if(!e||!e.zoomable||e.zoomable&&e.dynamic){const{x:e,y:r}=this.getBoundingClientRect();this.$zoom(i.scale,t.clientX-e,t.clientY-r)}}else this.$zoom(i.scale);break;case ao:if(this.rotatable&&this.scalable){const{rotate:e}=i;let{scale:r}=i;r<0?r=1/(1-r):r+=1;const o=Math.cos(e),s=Math.sin(e),[a,n,l,d]=[o*r,s*r,-s*r,o*r];if(t){const e=this.getBoundingClientRect(),i=t.clientX-e.x,r=t.clientY-e.y,[o,s,c,h]=this.$matrix,p=i-e.width/2,u=r-e.height/2,m=(p*h-c*u)/(o*h-c*s),f=(u*o-s*p)/(o*h-c*s);this.$transform(a,n,l,d,m*(1-a)+f*l,f*(1-d)+m*n)}else this.$transform(a,n,l,d,0,0)}}}}$ready(t){const{$image:e}=this,i=new Promise((t,i)=>{const r=new Error("Failed to load the image source");if(e.complete)e.naturalWidth>0&&e.naturalHeight>0?t(e):i(r);else{const o=()=>{Go(e,xo,s),setTimeout(()=>{t(e)})},s=()=>{Go(e,_o,o),i(r)};Ho(e,_o,o),Ho(e,xo,s)}});return Ro(t)&&i.then(e=>(t(e),e)),i}$center(t){const{parentElement:e}=this;if(!e)return this;const i=e.getBoundingClientRect(),r=i.width,o=i.height,{x:s,y:a,width:n,height:l}=this.getBoundingClientRect(),d=s+n/2,c=a+l/2,h=i.x+r/2,p=i.y+o/2,{translatable:u}=this;if(u||this.$isReady||(this.translatable=!0,this.$nextTick(()=>{this.translatable=u})),this.$move(h-d,p-c),t&&(n!==r||l!==o)){const e=r/n,i=o/l,{scalable:s}=this;switch(!t||s||this.$isReady||(this.scalable=!0,this.$nextTick(()=>{this.scalable=s})),t){case"cover":this.$scale(Math.max(e,i));break;case"contain":this.$scale(Math.min(e,i))}}return this}$move(t,e=t){if(this.translatable&&Po(t)&&Po(e)){const[i,r,o,s]=this.$matrix,a=(t*s-o*e)/(i*s-o*r),n=(e*i-r*t)/(i*s-o*r);this.$translate(a,n)}return this}$moveTo(t,e=t){if(this.translatable&&Po(t)&&Po(e)){const[i,r,o,s]=this.$matrix,a=(t*s-o*e)/(i*s-o*r),n=(e*i-r*t)/(i*s-o*r);this.$setTransform(i,r,o,s,a,n)}return this}$rotate(t,e,i){if(this.rotatable){const r=Ko(t),o=Math.cos(r),s=Math.sin(r),[a,n,l,d]=[o,s,-s,o];if(Po(e)&&Po(i)){const[t,r,o,s]=this.$matrix,{width:c,height:h}=this.getBoundingClientRect(),p=e-c/2,u=i-h/2,m=(p*s-o*u)/(t*s-o*r),f=(u*t-r*p)/(t*s-o*r);this.$transform(a,n,l,d,m*(1-a)-f*l,f*(1-d)-m*n)}else this.$transform(a,n,l,d,0,0)}return this}$zoom(t,e,i){if(!this.scalable||0===t)return this;if(t<0?t=1/(1-t):t+=1,Po(e)&&Po(i)){const[r,o,s,a]=this.$matrix,{width:n,height:l}=this.getBoundingClientRect(),d=e-n/2,c=i-l/2,h=(d*a-s*c)/(r*a-s*o),p=(c*r-o*d)/(r*a-s*o);this.$transform(t,0,0,t,h*(1-t),p*(1-t))}else this.$scale(t);return this}$scale(t,e=t){return this.scalable&&this.$transform(t,0,0,e,0,0),this}$skew(t,e=0){if(this.skewable){const i=Ko(t),r=Ko(e);this.$transform(1,Math.tan(r),Math.tan(i),1,0,0)}return this}$translate(t,e=t){return this.translatable&&Po(t)&&Po(e)&&this.$transform(1,0,0,1,t,e),this}$transform(t,e,i,r,o,s){return Po(t)&&Po(e)&&Po(i)&&Po(r)&&Po(o)&&Po(s)?this.$setTransform(Zo(this.$matrix,[t,e,i,r,o,s])):this}$setTransform(t,e,i,r,o,s){if((this.rotatable||this.scalable||this.skewable||this.translatable)&&(Array.isArray(t)&&([t,e,i,r,o,s]=t),Po(t)&&Po(e)&&Po(i)&&Po(r)&&Po(o)&&Po(s))){const a=[...this.$matrix],n=[t,e,i,r,o,s];if(!1===this.$emit(Eo,{matrix:n,oldMatrix:a}))return this;this.$matrix=n,this.style.transform=`matrix(${n.join(", ")})`}return this}$getTransform(){return this.$matrix.slice()}$resetTransform(){return this.$setTransform([1,0,0,1,0,0])}}cs.$name=Qr,cs.$version="2.1.1";const hs=new WeakMap;class ps extends as{constructor(){super(...arguments),this.$onWindowResize=null,this.$onCanvasActionEnd=null,this.$onCanvasActionStart=null,this.$onSelectionChange=null,this.$style=":host{display:block;height:0;left:0;outline:var(--theme-color) solid 1px;position:relative;top:0;width:0}:host([transparent]){outline-color:transparent}",this.x=0,this.y=0,this.width=0,this.height=0,this.slottable=!1,this.themeColor="rgba(0, 0, 0, 0.65)"}set $canvas(t){hs.set(this,t)}get $canvas(){return hs.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["height","width","x","y"])}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Yr));if(t){this.$canvas=t,this.style.position="absolute";const e=t.querySelector(this.$getTagNameOf(Zr));e&&(this.$onWindowResize=this.$render.bind(this),this.$onCanvasActionStart=t=>{e.hidden&&t.detail.action===io&&(this.hidden=!1)},this.$onCanvasActionEnd=t=>{e.hidden&&t.detail.action===io&&(this.hidden=!0)},this.$onSelectionChange=t=>{const{x:i,y:r,width:o,height:s}=t.defaultPrevented?e:t.detail;this.$change(i,r,o,s),(e.hidden||0===i&&0===r&&0===o&&0===s)&&(this.hidden=!0)},qo(window,ko,this.$onWindowResize),qo(t,Ao,this.$onCanvasActionStart),qo(t,So,this.$onCanvasActionEnd),qo(t,Co,this.$onSelectionChange))}this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onWindowResize&&(Go(window,ko,this.$onWindowResize),this.$onWindowResize=null),this.$onCanvasActionStart&&(Go(t,Ao,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Go(t,So,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onSelectionChange&&(Go(t,Co,this.$onSelectionChange),this.$onSelectionChange=null)),super.disconnectedCallback()}$change(t,e,i=this.width,r=this.height){return Po(t)&&Po(e)&&Po(i)&&Po(r)&&(t!==this.x||e!==this.y||i!==this.width||r!==this.height)?(this.hidden&&(this.hidden=!1),this.x=t,this.y=e,this.width=i,this.height=r,this.$render()):this}$reset(){return this.$change(0,0,0,0)}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height,outlineWidth:qr.innerWidth*qr.devicePixelRatio})}}ps.$name=to,ps.$version="2.1.1";class us extends as{constructor(){super(...arguments),this.$onCanvasCropEnd=null,this.$onCanvasCropStart=null,this.$style=':host{background-color:var(--theme-color);display:block}:host([action=move]),:host([action=select]){height:100%;left:0;position:absolute;top:0;width:100%}:host([action=move]){cursor:move}:host([action=select]){cursor:crosshair}:host([action$=-resize]){background-color:transparent;height:15px;position:absolute;width:15px}:host([action$=-resize]):after{background-color:var(--theme-color);content:"";display:block;height:5px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:5px}:host([action=n-resize]),:host([action=s-resize]){cursor:ns-resize;left:50%;transform:translateX(-50%);width:100%}:host([action=n-resize]){top:-8px}:host([action=s-resize]){bottom:-8px}:host([action=e-resize]),:host([action=w-resize]){cursor:ew-resize;height:100%;top:50%;transform:translateY(-50%)}:host([action=e-resize]){right:-8px}:host([action=w-resize]){left:-8px}:host([action=ne-resize]){cursor:nesw-resize;right:-8px;top:-8px}:host([action=nw-resize]){cursor:nwse-resize;left:-8px;top:-8px}:host([action=se-resize]){bottom:-8px;cursor:nwse-resize;right:-8px}:host([action=se-resize]):after{height:15px;width:15px}@media (pointer:coarse){:host([action=se-resize]):after{height:10px;width:10px}}@media (pointer:fine){:host([action=se-resize]):after{height:5px;width:5px}}:host([action=sw-resize]){bottom:-8px;cursor:nesw-resize;left:-8px}:host([plain]){background-color:transparent}',this.action=no,this.plain=!1,this.slottable=!1,this.themeColor="rgba(51, 153, 255, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["action","plain"])}}us.$name=Jr,us.$version="2.1.1";const ms=new WeakMap;class fs extends as{constructor(){super(...arguments),this.$onCanvasAction=null,this.$onCanvasActionStart=null,this.$onCanvasActionEnd=null,this.$onDocumentKeyDown=null,this.$action="",this.$actionStartTarget=null,this.$changing=!1,this.$style=':host{display:block;left:0;position:relative;right:0}:host([outlined]){outline:1px solid var(--theme-color)}:host([multiple]){outline:1px dashed hsla(0,0%,100%,.5)}:host([multiple]):after{bottom:0;content:"";cursor:pointer;display:block;left:0;position:absolute;right:0;top:0}:host([multiple][active]){outline-color:var(--theme-color);z-index:1}:host([multiple])>*{visibility:hidden}:host([multiple][active])>*{visibility:visible}:host([multiple][active]):after{display:none}',this.$initialSelection={x:0,y:0,width:0,height:0},this.x=0,this.y=0,this.width=0,this.height=0,this.aspectRatio=NaN,this.initialAspectRatio=NaN,this.initialCoverage=NaN,this.active=!1,this.linked=!1,this.dynamic=!1,this.movable=!1,this.resizable=!1,this.zoomable=!1,this.multiple=!1,this.keyboard=!1,this.outlined=!1,this.precise=!1}set $canvas(t){ms.set(this,t)}get $canvas(){return ms.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["active","aspect-ratio","dynamic","height","initial-aspect-ratio","initial-coverage","keyboard","linked","movable","multiple","outlined","precise","resizable","width","x","y","zoomable"])}$propertyChangedCallback(t,e,i){if(!Object.is(i,e))switch(super.$propertyChangedCallback(t,e,i),t){case"x":case"y":case"width":case"height":this.$changing||this.$nextTick(()=>{this.$change(this.x,this.y,this.width,this.height,this.aspectRatio,!0)});break;case"aspectRatio":case"initialAspectRatio":this.$nextTick(()=>{this.$initSelection()});break;case"initialCoverage":this.$nextTick(()=>{Mo(i)&&i<=1&&this.$initSelection(!0,!0)});break;case"keyboard":this.$nextTick(()=>{this.$canvas&&(i?this.$onDocumentKeyDown||(this.$onDocumentKeyDown=this.$handleKeyDown.bind(this),qo(this.ownerDocument,wo,this.$onDocumentKeyDown)):this.$onDocumentKeyDown&&(Go(this.ownerDocument,wo,this.$onDocumentKeyDown),this.$onDocumentKeyDown=null))});break;case"multiple":this.$nextTick(()=>{if(this.$canvas){const t=this.$getSelections();i?(t.forEach(t=>{t.active=!1}),this.active=!0,this.$emit(Co,{x:this.x,y:this.y,width:this.width,height:this.height})):(this.active=!1,t.slice(1).forEach(t=>{this.$removeSelection(t)}))}});break;case"precise":this.$nextTick(()=>{this.$change(this.x,this.y)});break;case"linked":i&&(this.dynamic=!0)}}connectedCallback(){super.connectedCallback();const t=this.closest(this.$getTagNameOf(Yr));t?(this.$canvas=t,this.$setStyles({position:"absolute",transform:`translate(${this.x}px, ${this.y}px)`}),this.hidden||this.$render(),this.$initSelection(!0),this.$onCanvasActionStart=this.$handleActionStart.bind(this),this.$onCanvasActionEnd=this.$handleActionEnd.bind(this),this.$onCanvasAction=this.$handleAction.bind(this),qo(t,Ao,this.$onCanvasActionStart),qo(t,So,this.$onCanvasActionEnd),qo(t,zo,this.$onCanvasAction)):this.$render()}disconnectedCallback(){const{$canvas:t}=this;t&&(this.$onCanvasActionStart&&(Go(t,Ao,this.$onCanvasActionStart),this.$onCanvasActionStart=null),this.$onCanvasActionEnd&&(Go(t,So,this.$onCanvasActionEnd),this.$onCanvasActionEnd=null),this.$onCanvasAction&&(Go(t,zo,this.$onCanvasAction),this.$onCanvasAction=null)),super.disconnectedCallback()}$getSelections(){let t=[];return this.parentElement&&(t=Array.from(this.parentElement.querySelectorAll(this.$getTagNameOf(Zr)))),t}$initSelection(t=!1,e=!1){const{initialCoverage:i,parentElement:r}=this;if(Mo(i)&&r){const o=this.aspectRatio||this.initialAspectRatio;let s=(e?0:this.width)||r.offsetWidth*i,a=(e?0:this.height)||r.offsetHeight*i;Mo(o)&&({width:s,height:a}=Qo({aspectRatio:o,width:s,height:a})),this.$change(this.x,this.y,s,a),t&&this.$center(),this.$initialSelection={x:this.x,y:this.y,width:this.width,height:this.height}}}$createSelection(){const t=this.cloneNode(!0);return this.hasAttribute("id")&&t.removeAttribute("id"),t.initialCoverage=NaN,this.active=!1,this.parentElement&&this.parentElement.insertBefore(t,this.nextSibling),t}$removeSelection(t=this){if(this.parentElement){const e=this.$getSelections();if(e.length>1){const i=e.indexOf(t),r=e[i+1]||e[i-1];r&&(t.active=!1,this.parentElement.removeChild(t),r.active=!0,r.$emit(Co,{x:r.x,y:r.y,width:r.width,height:r.height}))}else this.$clear()}}$handleActionStart(t){var e,i;const r=null===(i=null===(e=t.detail)||void 0===e?void 0:e.relatedEvent)||void 0===i?void 0:i.target;this.$action="",this.$actionStartTarget=r,!this.hidden&&this.multiple&&!this.active&&r===this&&this.parentElement&&(this.$getSelections().forEach(t=>{t.active=!1}),this.active=!0,this.$emit(Co,{x:this.x,y:this.y,width:this.width,height:this.height}))}$handleAction(t){const{currentTarget:e,detail:i}=t;if(!e||!i)return;const{relatedEvent:r}=i;let{action:o}=i;const s=r?function(t){if("function"==typeof t.composedPath)return t.composedPath().find(Lo)||t.target;return t.target}(r):null;if(!o&&this.multiple&&(o=this.$action||(null==s?void 0:s.action),this.$action=o),!o||this.hidden&&o!==io||this.multiple&&!this.active&&o!==oo)return;const{width:a,height:n}=this;let l=i.endX-i.startX,d=i.endY-i.startY,{aspectRatio:c}=this;switch(!Mo(c)&&r.shiftKey&&(c=Mo(a)&&Mo(n)?a/n:1),o){case io:if(0!==l||0!==d){0===l?l=d:0===d&&(d=l);const{$canvas:t}=this,r=Yo(e);(this.multiple&&!this.hidden?this.$createSelection():this).$change(i.startX-r.left,i.startY-r.top,Math.abs(l),Math.abs(d),c),l<0?d<0?o=mo:d>0&&(o=vo):l>0&&(d<0?o=uo:d>0&&(o=fo)),t&&(t.$action=o)}break;case ro:this.movable&&(this.dynamic||this.$actionStartTarget&&this.contains(this.$actionStartTarget))&&this.$move(l,d);break;case oo:if(r&&this.zoomable&&(this.dynamic||this.contains(r.target))){const t=Yo(e);this.$zoom(i.scale,r.pageX-t.left,r.pageY-t.top)}break;default:this.$resize(o,l,d,c)}}$handleActionEnd(){this.$action="",this.$actionStartTarget=null}$handleKeyDown(t){if(this.hidden||!this.keyboard||this.multiple&&!this.active||t.defaultPrevented)return;const{activeElement:e}=document;if(!e||!["INPUT","TEXTAREA"].includes(e.tagName)&&!["true","plaintext-only"].includes(e.contentEditable))switch(t.key){case"Backspace":t.metaKey&&(t.preventDefault(),this.$removeSelection());break;case"Delete":t.preventDefault(),this.$removeSelection();break;case"ArrowLeft":t.preventDefault(),this.$move(-1,0);break;case"ArrowRight":t.preventDefault(),this.$move(1,0);break;case"ArrowUp":t.preventDefault(),this.$move(0,-1);break;case"ArrowDown":t.preventDefault(),this.$move(0,1);break;case"+":t.preventDefault(),this.$zoom(.1);break;case"-":t.preventDefault(),this.$zoom(-.1)}}$center(){const{parentElement:t}=this;if(!t)return this;const e=(t.offsetWidth-this.width)/2,i=(t.offsetHeight-this.height)/2;return this.$change(e,i)}$move(t,e=t){return this.$moveTo(this.x+t,this.y+e)}$moveTo(t,e=t){return this.movable?this.$change(t,e):this}$resize(t,e=0,i=0,r=this.aspectRatio){if(!this.resizable)return this;const o=Mo(r),{$canvas:s}=this;let{x:a,y:n,width:l,height:d}=this;switch(t){case lo:n+=i,d-=i,d<0&&(t=ho,d=-d,n-=d),o&&(a+=(e=i*r)/2,l-=e,l<0&&(l=-l,a-=l));break;case co:l+=e,l<0&&(t=po,l=-l,a-=l),o&&(n-=(i=e/r)/2,d+=i,d<0&&(d=-d,n-=d));break;case ho:d+=i,d<0&&(t=lo,d=-d,n-=d),o&&(a-=(e=i*r)/2,l+=e,l<0&&(l=-l,a-=l));break;case po:a+=e,l-=e,l<0&&(t=co,l=-l,a-=l),o&&(n+=(i=e/r)/2,d-=i,d<0&&(d=-d,n-=d));break;case uo:o&&(i=-e/r),n+=i,d-=i,l+=e,l<0&&d<0?(t=vo,l=-l,d=-d,a-=l,n-=d):l<0?(t=mo,l=-l,a-=l):d<0&&(t=fo,d=-d,n-=d);break;case mo:o&&(i=e/r),a+=e,n+=i,l-=e,d-=i,l<0&&d<0?(t=fo,l=-l,d=-d,a-=l,n-=d):l<0?(t=uo,l=-l,a-=l):d<0&&(t=vo,d=-d,n-=d);break;case fo:o&&(i=e/r),l+=e,d+=i,l<0&&d<0?(t=mo,l=-l,d=-d,a-=l,n-=d):l<0?(t=vo,l=-l,a-=l):d<0&&(t=uo,d=-d,n-=d);break;case vo:o&&(i=-e/r),a+=e,l-=e,d+=i,l<0&&d<0?(t=uo,l=-l,d=-d,a-=l,n-=d):l<0?(t=fo,l=-l,a-=l):d<0&&(t=mo,d=-d,n-=d)}return s&&s.$setAction(t),this.$change(a,n,l,d)}$zoom(t,e,i){if(!this.zoomable||0===t)return this;t<0?t=1/(1-t):t+=1;const{width:r,height:o}=this,s=r*t,a=o*t;let n=this.x,l=this.y;return Po(e)&&Po(i)?(n-=(s-r)*((e-this.x)/r),l-=(a-o)*((i-this.y)/o)):(n-=(s-r)/2,l-=(a-o)/2),this.$change(n,l,s,a)}$change(t,e,i=this.width,r=this.height,o=this.aspectRatio,s=!1){return this.$changing||!Po(t)||!Po(e)||!Po(i)||!Po(r)||i<0||r<0?this:(Mo(o)&&({width:i,height:r}=Qo({aspectRatio:o,width:i,height:r},"cover")),this.precise||(t=Math.round(t),e=Math.round(e),i=Math.round(i),r=Math.round(r)),t===this.x&&e===this.y&&i===this.width&&r===this.height&&Object.is(o,this.aspectRatio)&&!s?this:(this.hidden&&(this.hidden=!1),!1===this.$emit(Co,{x:t,y:e,width:i,height:r})?this:(this.$changing=!0,this.x=t,this.y=e,this.width=i,this.height=r,this.$changing=!1,this.$render())))}$reset(){const{x:t,y:e,width:i,height:r}=this.$initialSelection;return this.$change(t,e,i,r)}$clear(){return this.$change(0,0,0,0,NaN,!0),this.hidden=!0,this}$render(){return this.$setStyles({transform:`translate(${this.x}px, ${this.y}px)`,width:this.width,height:this.height})}$toCanvas(t){return new Promise((e,i)=>{if(!this.isConnected)return void i(new Error("The current element is not connected to the DOM."));const r=document.createElement("canvas");let{width:o,height:s}=this,a=1;if(Bo(t)&&(Mo(t.width)||Mo(t.height))&&(({width:o,height:s}=Qo({aspectRatio:o/s,width:t.width,height:t.height})),a=o/this.width),r.width=o,r.height=s,!this.$canvas)return void e(r);const n=this.$canvas.querySelector(this.$getTagNameOf(Qr));n?n.$ready().then(i=>{const l=r.getContext("2d");if(l){const[e,d,c,h,p,u]=n.$getTransform(),m=-this.x,f=-this.y,v=(m*h-c*f)/(e*h-c*d),g=(f*e-d*m)/(e*h-c*d);let b=e*v+c*g+p,y=d*v+h*g+u,x=i.naturalWidth,w=i.naturalHeight;1!==a&&(b*=a,y*=a,x*=a,w*=a);const _=x/2,k=w/2;l.fillStyle="transparent",l.fillRect(0,0,o,s),Bo(t)&&Ro(t.beforeDraw)&&t.beforeDraw.call(this,l,r),l.save(),l.translate(_,k),l.transform(e,d,c,h,b,y),l.translate(-_,-k),l.drawImage(i,0,0,x,w),l.restore()}e(r)}).catch(i):e(r)})}}fs.$name=Zr,fs.$version="2.1.1";class vs extends as{constructor(){super(...arguments),this.$style=":host{display:flex;flex-direction:column;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([bordered]){border:1px dashed var(--theme-color)}:host([covered]){bottom:0;left:0;position:absolute;right:0;top:0}:host>span{display:flex;flex:1}:host>span+span{border-top:1px dashed var(--theme-color)}:host>span>span{flex:1}:host>span>span+span{border-left:1px dashed var(--theme-color)}",this.bordered=!1,this.columns=3,this.covered=!1,this.rows=3,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["bordered","columns","covered","rows"])}$propertyChangedCallback(t,e,i){Object.is(i,e)||(super.$propertyChangedCallback(t,e,i),"rows"!==t&&"columns"!==t||this.$nextTick(()=>{this.$render()}))}connectedCallback(){super.connectedCallback(),this.$render()}$render(){const t=this.$getShadowRoot(),e=document.createDocumentFragment();for(let t=0;t<this.rows;t+=1){const t=document.createElement("span");t.setAttribute("role","row");for(let e=0;e<this.columns;e+=1){const e=document.createElement("span");e.setAttribute("role","gridcell"),t.appendChild(e)}e.appendChild(t)}t&&(t.innerHTML="",t.appendChild(e))}}vs.$name=Kr,vs.$version="2.1.1";class gs extends as{constructor(){super(...arguments),this.$style=':host{display:inline-block;height:1em;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1em}:host:after,:host:before{background-color:var(--theme-color);content:"";display:block;position:absolute}:host:before{height:1px;left:0;top:50%;transform:translateY(-50%);width:100%}:host:after{height:100%;left:50%;top:0;transform:translateX(-50%);width:1px}:host([centered]){left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}',this.centered=!1,this.slottable=!1,this.themeColor="rgba(238, 238, 238, 0.5)"}static get observedAttributes(){return super.observedAttributes.concat(["centered"])}}gs.$name=Xr,gs.$version="2.1.1";const bs=new WeakMap,ys=new WeakMap,xs=new WeakMap,ws=new WeakMap,_s="vertical";class ks extends as{constructor(){super(...arguments),this.$onSelectionChange=null,this.$onSourceImageLoad=null,this.$onSourceImageTransform=null,this.$scale=1,this.$style=":host{display:block;height:100%;overflow:hidden;position:relative;width:100%}",this.resize=_s,this.selection="",this.slottable=!1}set $image(t){ys.set(this,t)}get $image(){return ys.get(this)}set $sourceImage(t){ws.set(this,t)}get $sourceImage(){return ws.get(this)}set $canvas(t){bs.set(this,t)}get $canvas(){return bs.get(this)}set $selection(t){xs.set(this,t)}get $selection(){return xs.get(this)}static get observedAttributes(){return super.observedAttributes.concat(["resize","selection"])}connectedCallback(){var t,e;super.connectedCallback();let i=null;if(i=this.selection?null!==(e=null===(t=function(t){const e=t.getRootNode();switch(e.nodeType){case 1:return e.ownerDocument;case 9:case 11:return e}return null}(this))||void 0===t?void 0:t.querySelector(this.selection))&&void 0!==e?e:null:this.closest(this.$getTagNameOf(Zr)),Lo(i)){this.$selection=i,this.$onSelectionChange=this.$handleSelectionChange.bind(this),qo(i,Co,this.$onSelectionChange);const t=i.closest(this.$getTagNameOf(Yr));if(t){this.$canvas=t;const e=t.querySelector(this.$getTagNameOf(Qr));e&&(this.$sourceImage=e,this.$image=e.cloneNode(!0),this.$getShadowRoot().appendChild(this.$image),this.$onSourceImageLoad=this.$handleSourceImageLoad.bind(this),this.$onSourceImageTransform=this.$handleSourceImageTransform.bind(this),qo(e.$image,_o,this.$onSourceImageLoad),qo(e,Eo,this.$onSourceImageTransform))}this.$render()}}disconnectedCallback(){const{$selection:t,$sourceImage:e}=this;t&&this.$onSelectionChange&&(Go(t,Co,this.$onSelectionChange),this.$onSelectionChange=null),e&&this.$onSourceImageLoad&&(Go(e.$image,_o,this.$onSourceImageLoad),this.$onSourceImageLoad=null),e&&this.$onSourceImageTransform&&(Go(e,Eo,this.$onSourceImageTransform),this.$onSourceImageTransform=null),super.disconnectedCallback()}$handleSelectionChange(t){this.$render(t.defaultPrevented?this.$selection:t.detail)}$handleSourceImageLoad(){const{$image:t,$sourceImage:e}=this,i=t.getAttribute("src"),r=e.getAttribute("src");r&&r!==i&&(t.setAttribute("src",r),t.$ready(()=>{this.$render()}))}$handleSourceImageTransform(t){this.$render(void 0,t.detail.matrix)}$render(t,e){const{$canvas:i,$selection:r}=this;t||r.hidden||(t=r),(!t||0===t.x&&0===t.y&&0===t.width&&0===t.height)&&(t={x:0,y:0,width:i.offsetWidth,height:i.offsetHeight});const{x:o,y:s,width:a,height:n}=t,l={},{clientWidth:d,clientHeight:c}=this;let h=d,p=c,u=NaN;switch(this.resize){case"both":u=1,h=a,p=n,l.width=a,l.height=n;break;case"horizontal":u=n>0?c/n:0,h=a*u,l.width=h;break;case _s:u=a>0?d/a:0,p=n*u,l.height=p;break;default:d>0?u=a>0?d/a:0:c>0&&(u=n>0?c/n:0)}this.$scale=u,this.$setStyles(l),this.$sourceImage&&setTimeout(()=>{this.$transformImageByOffset(null!=e?e:this.$sourceImage.$getTransform(),-o,-s)})}$transformImageByOffset(t,e,i){const{$image:r,$scale:o,$sourceImage:s}=this;if(s&&r&&o>=0){const[a,n,l,d,c,h]=t,p=(e*d-l*i)/(a*d-l*n),u=(i*a-n*e)/(a*d-l*n),m=a*p+l*u+c,f=n*p+d*u+h;s.$ready(t=>{this.$setStyles.call(r,{width:t.naturalWidth*o,height:t.naturalHeight*o})}),r.$setTransform(a,n,l,d,m*o,f*o)}}}function $s(t){if(t.shadowRoot){const e=t.shadowRoot.querySelector(".scrim");e&&(e.style.display="none");const i=t.shadowRoot.querySelector("dialog"),r="<style>dialog::backdrop { display:block;    background: var(--md-sys-color-scrim, #000); opacity: 0.32; transition: all 250ms ease 0s; }</style>";i?.insertAdjacentHTML("beforeend",r)}}function zs(t){const e=window.location.pathname,i=i=>{new URL(i.destination.url).pathname!==e&&t?.open&&t.close("navigation-close")};window.navigation.addEventListener("navigate",i),t.i=i}function Ss(t){const e=t.i;e&&(window.navigation.removeEventListener("navigate",e),t.i=void 0)}ks.$name=eo,ks.$version="2.1.1",ns.$define(),gs.$define(),vs.$define(),us.$define(),cs.$define(),fs.$define(),ps.$define(),ks.$define();const As=a`
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
`,Cs=a`
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
`,Es=a`
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
`,Ts=a`
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
`,Ps=a`
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
`,Ms=a`
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
`,Os=a`
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
`,Is=a`
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
`,Bs=[Ms,Os,a`
    data-row {
      display: grid;
      grid: 'label text' / 150px 1fr;
      align-items: center;
      gap: 16px;

      padding: 16px 24px 16px 0;
      margin-left: 24px;

      border-bottom: 1px solid var(--md-sys-color-outline-variant);
    }

    data-row:not([hidden]):not(:has(~ data-row:not([hidden]))) {
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
  `],Rs=a`
  [ellipsis] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Ls=t=>t??H,Ns={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},js={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},Us={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},Ds={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},Fs={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"};class Gs{static getFirstMatch(t,e){const i=e.match(t);return i&&i.length>0&&i[1]||""}static getSecondMatch(t,e){const i=e.match(t);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(t,e,i){if(t.test(e))return i}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const e=t.split(".").splice(0,2).map(t=>parseInt(t,10)||0);e.push(0);const i=e[0],r=e[1];if(10===i)switch(r){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(i){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}}static getAndroidVersionName(t){const e=t.split(".").splice(0,2).map(t=>parseInt(t,10)||0);if(e.push(0),!(1===e[0]&&e[1]<5))return 1===e[0]&&e[1]<6?"Cupcake":1===e[0]&&e[1]>=6?"Donut":2===e[0]&&e[1]<2?"Eclair":2===e[0]&&2===e[1]?"Froyo":2===e[0]&&e[1]>2?"Gingerbread":3===e[0]?"Honeycomb":4===e[0]&&e[1]<1?"Ice Cream Sandwich":4===e[0]&&e[1]<4?"Jelly Bean":4===e[0]&&e[1]>=4?"KitKat":5===e[0]?"Lollipop":6===e[0]?"Marshmallow":7===e[0]?"Nougat":8===e[0]?"Oreo":9===e[0]?"Pie":void 0}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,e,i=!1){const r=Gs.getVersionPrecision(t),o=Gs.getVersionPrecision(e);let s=Math.max(r,o),a=0;const n=Gs.map([t,e],t=>{const e=s-Gs.getVersionPrecision(t),i=t+new Array(e+1).join(".0");return Gs.map(i.split("."),t=>new Array(20-t.length).join("0")+t).reverse()});for(i&&(a=s-Math.min(r,o)),s-=1;s>=a;){if(n[0][s]>n[1][s])return 1;if(n[0][s]===n[1][s]){if(s===a)return 0;s-=1}else if(n[0][s]<n[1][s])return-1}}static map(t,e){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(t,e);for(r=0;r<t.length;r+=1)i.push(e(t[r]));return i}static find(t,e){let i,r;if(Array.prototype.find)return Array.prototype.find.call(t,e);for(i=0,r=t.length;i<r;i+=1){const r=t[i];if(e(r,i))return r}}static assign(t,...e){const i=t;let r,o;if(Object.assign)return Object.assign(t,...e);for(r=0,o=e.length;r<o;r+=1){const t=e[r];if("object"==typeof t&&null!==t){Object.keys(t).forEach(e=>{i[e]=t[e]})}}return t}static getBrowserAlias(t){return Ns[t]}static getBrowserTypeByAlias(t){return js[t]||""}}const qs=/version\/(\d+(\.?_?\d+)+)/i,Hs=[{test:[/gptbot/i],describe(t){const e={name:"GPTBot"},i=Gs.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/chatgpt-user/i],describe(t){const e={name:"ChatGPT-User"},i=Gs.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/oai-searchbot/i],describe(t){const e={name:"OAI-SearchBot"},i=Gs.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe(t){const e={name:"ClaudeBot"},i=Gs.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/omgilibot/i,/webzio-extended/i],describe(t){const e={name:"Omgilibot"},i=Gs.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/diffbot/i],describe(t){const e={name:"Diffbot"},i=Gs.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/perplexitybot/i],describe(t){const e={name:"PerplexityBot"},i=Gs.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/perplexity-user/i],describe(t){const e={name:"Perplexity-User"},i=Gs.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/youbot/i],describe(t){const e={name:"YouBot"},i=Gs.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/meta-webindexer/i],describe(t){const e={name:"Meta-WebIndexer"},i=Gs.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/meta-externalads/i],describe(t){const e={name:"Meta-ExternalAds"},i=Gs.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/meta-externalagent/i],describe(t){const e={name:"Meta-ExternalAgent"},i=Gs.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/meta-externalfetcher/i],describe(t){const e={name:"Meta-ExternalFetcher"},i=Gs.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},i=Gs.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/linespider/i],describe(t){const e={name:"Linespider"},i=Gs.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/amazonbot/i],describe(t){const e={name:"AmazonBot"},i=Gs.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/bingbot/i],describe(t){const e={name:"BingCrawler"},i=Gs.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/baiduspider/i],describe(t){const e={name:"BaiduSpider"},i=Gs.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/duckduckbot/i],describe(t){const e={name:"DuckDuckBot"},i=Gs.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/ia_archiver/i],describe(t){const e={name:"InternetArchiveCrawler"},i=Gs.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:()=>({name:"FacebookExternalHit"})},{test:[/slackbot/i,/slack-imgProxy/i],describe(t){const e={name:"SlackBot"},i=Gs.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/yahoo!?[\s/]*slurp/i],describe:()=>({name:"YahooSlurp"})},{test:[/yandexbot/i,/yandexmobilebot/i],describe:()=>({name:"YandexBot"})},{test:[/pingdom/i],describe:()=>({name:"PingdomBot"})},{test:[/opera/i],describe(t){const e={name:"Opera"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},i=Gs.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/PaleMoon/i],describe(t){const e={name:"Pale Moon"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},i=Gs.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},i=Gs.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},i=Gs.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(t){const e={name:"Opera Touch"},i=Gs.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},i=Gs.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},i=Gs.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},i=Gs.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},i=Gs.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},i=Gs.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},i=Gs.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},i=Gs.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},i=Gs.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},i=Gs.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return i&&(e.version=i),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},i=Gs.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},i=Gs.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},i=Gs.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},i=Gs.getFirstMatch(qs,t)||Gs.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},i=Gs.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},i=Gs.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},i=Gs.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/librewolf/i],describe(t){const e={name:"LibreWolf"},i=Gs.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},i=Gs.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},i=Gs.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe(t){const e={name:"Sogou Browser"},i=Gs.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,t),r=Gs.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t),o=Gs.getFirstMatch(/se ([\d.]+)x/i,t),s=i||r||o;return s&&(e.version=s),e}},{test:[/MiuiBrowser/i],describe(t){const e={name:"Miui"},i=Gs.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:t=>!!t.hasBrand("DuckDuckGo")||t.test(/\sDdg\/[\d.]+$/i),describe(t,e){const i={name:"DuckDuckGo"};if(e){const t=e.getBrandVersion("DuckDuckGo");if(t)return i.version=t,i}const r=Gs.getFirstMatch(/\sDdg\/([\d.]+)$/i,t);return r&&(i.version=r),i}},{test:t=>t.hasBrand("Brave"),describe(t,e){const i={name:"Brave"};if(e){const t=e.getBrandVersion("Brave");if(t)return i.version=t,i}return i}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},i=Gs.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},i=Gs.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},i=Gs.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e={name:"Android Browser"},i=Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},i=Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},i=Gs.getFirstMatch(qs,t);return i&&(e.version=i),e}},{test:[/.*/i],describe(t){const e=-1!==t.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:Gs.getFirstMatch(e,t),version:Gs.getSecondMatch(e,t)}}}];var Ws=[{test:[/Roku\/DVP/],describe(t){const e=Gs.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:Ds.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=Gs.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:Ds.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=Gs.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),i=Gs.getWindowsVersionName(e);return{name:Ds.Windows,version:e,versionName:i}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(t){const e={name:Ds.iOS},i=Gs.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return i&&(e.version=i),e}},{test:[/macintosh/i],describe(t){const e=Gs.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),i=Gs.getMacOSVersionName(e),r={name:Ds.MacOS,version:e};return i&&(r.versionName=i),r}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=Gs.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:Ds.iOS,version:e}}},{test:[/OpenHarmony/i],describe(t){const e=Gs.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,t);return{name:Ds.HarmonyOS,version:e}}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e=Gs.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),i=Gs.getAndroidVersionName(e),r={name:Ds.Android,version:e};return i&&(r.versionName=i),r}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=Gs.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),i={name:Ds.WebOS};return e&&e.length&&(i.version=e),i}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=Gs.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||Gs.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||Gs.getFirstMatch(/\bbb(\d+)/i,t);return{name:Ds.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=Gs.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:Ds.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=Gs.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:Ds.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:Ds.Linux})},{test:[/CrOS/],describe:()=>({name:Ds.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=Gs.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:Ds.PlayStation4,version:e}}}],Vs=[{test:[/googlebot/i],describe:()=>({type:Us.bot,vendor:"Google"})},{test:[/linespider/i],describe:()=>({type:Us.bot,vendor:"Line"})},{test:[/amazonbot/i],describe:()=>({type:Us.bot,vendor:"Amazon"})},{test:[/gptbot/i],describe:()=>({type:Us.bot,vendor:"OpenAI"})},{test:[/chatgpt-user/i],describe:()=>({type:Us.bot,vendor:"OpenAI"})},{test:[/oai-searchbot/i],describe:()=>({type:Us.bot,vendor:"OpenAI"})},{test:[/baiduspider/i],describe:()=>({type:Us.bot,vendor:"Baidu"})},{test:[/bingbot/i],describe:()=>({type:Us.bot,vendor:"Bing"})},{test:[/duckduckbot/i],describe:()=>({type:Us.bot,vendor:"DuckDuckGo"})},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:()=>({type:Us.bot,vendor:"Anthropic"})},{test:[/omgilibot/i,/webzio-extended/i],describe:()=>({type:Us.bot,vendor:"Webz.io"})},{test:[/diffbot/i],describe:()=>({type:Us.bot,vendor:"Diffbot"})},{test:[/perplexitybot/i],describe:()=>({type:Us.bot,vendor:"Perplexity AI"})},{test:[/perplexity-user/i],describe:()=>({type:Us.bot,vendor:"Perplexity AI"})},{test:[/youbot/i],describe:()=>({type:Us.bot,vendor:"You.com"})},{test:[/ia_archiver/i],describe:()=>({type:Us.bot,vendor:"Internet Archive"})},{test:[/meta-webindexer/i],describe:()=>({type:Us.bot,vendor:"Meta"})},{test:[/meta-externalads/i],describe:()=>({type:Us.bot,vendor:"Meta"})},{test:[/meta-externalagent/i],describe:()=>({type:Us.bot,vendor:"Meta"})},{test:[/meta-externalfetcher/i],describe:()=>({type:Us.bot,vendor:"Meta"})},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:()=>({type:Us.bot,vendor:"Meta"})},{test:[/slackbot/i,/slack-imgProxy/i],describe:()=>({type:Us.bot,vendor:"Slack"})},{test:[/yahoo/i],describe:()=>({type:Us.bot,vendor:"Yahoo"})},{test:[/yandexbot/i,/yandexmobilebot/i],describe:()=>({type:Us.bot,vendor:"Yandex"})},{test:[/pingdom/i],describe:()=>({type:Us.bot,vendor:"Pingdom"})},{test:[/huawei/i],describe(t){const e=Gs.getFirstMatch(/(can-l01)/i,t)&&"Nova",i={type:Us.mobile,vendor:"Huawei"};return e&&(i.model=e),i}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:Us.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:Us.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:()=>({type:Us.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:Us.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:Us.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:Us.tablet})},{test(t){const e=t.test(/ipod|iphone/i),i=t.test(/like (ipod|iphone)/i);return e&&!i},describe(t){const e=Gs.getFirstMatch(/(ipod|iphone)/i,t);return{type:Us.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:Us.mobile,vendor:"Nexus"})},{test:[/Nokia/i],describe(t){const e=Gs.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,t),i={type:Us.mobile,vendor:"Nokia"};return e&&(i.model=e),i}},{test:[/[^-]mobi/i],describe:()=>({type:Us.mobile})},{test:t=>"blackberry"===t.getBrowserName(!0),describe:()=>({type:Us.mobile,vendor:"BlackBerry"})},{test:t=>"bada"===t.getBrowserName(!0),describe:()=>({type:Us.mobile})},{test:t=>"windows phone"===t.getBrowserName(),describe:()=>({type:Us.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&e>=3},describe:()=>({type:Us.tablet})},{test:t=>"android"===t.getOSName(!0),describe:()=>({type:Us.mobile})},{test:[/smart-?tv|smarttv/i],describe:()=>({type:Us.tv})},{test:[/netcast/i],describe:()=>({type:Us.tv})},{test:t=>"macos"===t.getOSName(!0),describe:()=>({type:Us.desktop,vendor:"Apple"})},{test:t=>"windows"===t.getOSName(!0),describe:()=>({type:Us.desktop})},{test:t=>"linux"===t.getOSName(!0),describe:()=>({type:Us.desktop})},{test:t=>"playstation 4"===t.getOSName(!0),describe:()=>({type:Us.tv})},{test:t=>"roku"===t.getOSName(!0),describe:()=>({type:Us.tv})}],Ys=[{test:t=>"microsoft edge"===t.getBrowserName(!0),describe(t){if(/\sedg\//i.test(t))return{name:Fs.Blink};const e=Gs.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:Fs.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:Fs.Trident},i=Gs.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:Fs.Presto},i=Gs.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=t.test(/gecko/i),i=t.test(/like gecko/i);return e&&!i},describe(t){const e={name:Fs.Gecko},i=Gs.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:Fs.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:Fs.WebKit},i=Gs.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}}];class Xs{constructor(t,e=!1,i=null){if(null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t;let r=!1;"boolean"==typeof e?(r=e,this._hints=i):this._hints=null!=e&&"object"==typeof e?e:null,this.parsedResult={},!0!==r&&this.parse()}getHints(){return this._hints}hasBrand(t){if(!this._hints||!Array.isArray(this._hints.brands))return!1;const e=t.toLowerCase();return this._hints.brands.some(t=>t.brand&&t.brand.toLowerCase()===e)}getBrandVersion(t){if(!this._hints||!Array.isArray(this._hints.brands))return;const e=t.toLowerCase(),i=this._hints.brands.find(t=>t.brand&&t.brand.toLowerCase()===e);return i?i.version:void 0}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=Gs.find(Hs,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA(),this)),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=Gs.find(Ws,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:e}=this.getOS();return t?String(e).toLowerCase()||"":e||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:e}=this.getPlatform();return t?String(e).toLowerCase()||"":e||""}parsePlatform(){this.parsedResult.platform={};const t=Gs.find(Vs,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=Gs.find(Ys,t=>{if("function"==typeof t.test)return t.test(this);if(Array.isArray(t.test))return t.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return Gs.assign({},this.parsedResult)}satisfies(t){const e={};let i=0;const r={};let o=0;if(Object.keys(t).forEach(s=>{const a=t[s];"string"==typeof a?(r[s]=a,o+=1):"object"==typeof a&&(e[s]=a,i+=1)}),i>0){const t=Object.keys(e),i=Gs.find(t,t=>this.isOS(t));if(i){const t=this.satisfies(e[i]);if(void 0!==t)return t}const r=Gs.find(t,t=>this.isPlatform(t));if(r){const t=this.satisfies(e[r]);if(void 0!==t)return t}}if(o>0){const t=Object.keys(r),e=Gs.find(t,t=>this.isBrowser(t,!0));if(void 0!==e)return this.compareVersion(r[e])}}isBrowser(t,e=!1){const i=this.getBrowserName().toLowerCase();let r=t.toLowerCase();const o=Gs.getBrowserTypeByAlias(r);return e&&o&&(r=o.toLowerCase()),r===i}compareVersion(t){let e=[0],i=t,r=!1;const o=this.getBrowserVersion();if("string"==typeof o)return">"===t[0]||"<"===t[0]?(i=t.substr(1),"="===t[1]?(r=!0,i=t.substr(2)):e=[],">"===t[0]?e.push(1):e.push(-1)):"="===t[0]?i=t.substr(1):"~"===t[0]&&(r=!0,i=t.substr(1)),e.indexOf(Gs.compareVersions(o,i,r))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,e=!1){return this.isBrowser(t,e)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(t=>this.is(t))}}class Ks{static getParser(t,e=!1,i=null){if("string"!=typeof t)throw new Error("UserAgent should be a string");return new Xs(t,e,i)}static parse(t,e=null){return new Xs(t,e).getResult()}static get BROWSER_MAP(){return js}static get ENGINE_MAP(){return Fs}static get OS_MAP(){return Ds}static get PLATFORMS_MAP(){return Us}}const Js=new URL(new URL("D9xn2E7Y.gif",import.meta.url).href).href;let Qs=class extends lt{#o=!1;get isLoading(){return this.#o}set isLoading(t){this.#o=t}#P;get dialog(){return this.#P}set dialog(t){this.#P=t}#r;get main(){return this.#r}set main(t){this.#r=t}#Dt;get cropperCanvas(){return this.#Dt}set cropperCanvas(t){this.#Dt=t}#Ft;get cropperSelection(){return this.#Ft}set cropperSelection(t){this.#Ft=t}#Gt;get cropperImage(){return this.#Gt}set cropperImage(t){this.#Gt=t}#qt;get cropperShade(){return this.#qt}set cropperShade(t){this.#qt=t}#Ht=!1;get forcePNGOutput(){return this.#Ht}set forcePNGOutput(t){this.#Ht=t}#Wt;get options(){return this.#Wt}set options(t){this.#Wt=t}#U="";get fileName(){return this.#U}set fileName(t){this.#U=t}#Vt="";get src(){return this.#Vt}set src(t){this.#Vt=t}#Yt="";#Xt="";#Kt=!1;firstUpdated(){const t=Ks.getParser(window.navigator.userAgent),e=t?.getOS?.()?.name??"";this.#Yt="iOS"===e||"macOS"===e||this.forcePNGOutput?"image/png":"image/webp",this.#Xt="iOS"===e||"macOS"===e||this.forcePNGOutput?"png":"webp",this.#Jt()}#Qt;#Jt(){this.#Qt=new ResizeObserver(()=>{this.#Kt&&this.cropperImage.$center("cover")}),this.#Qt.observe(this.main)}#Zt;#x;async open(t,e,i){return this.#Kt=!1,this.#Zt=i,this.dialog.returnValue="",this.reset(),this.fileName=e,this.src=t,this.options||(this.options={}),void 0===this.options.maximizeSelection&&(this.options.maximizeSelection=!0),void 0===this.options.constrainSelectionTo&&(this.options.constrainSelectionTo="image"),this.requestUpdate(),await this.updateComplete,this.dialog.show(),this.cropperImage.$ready(async t=>{this.cropperCanvas.style.width=`${t.naturalWidth}px`,this.cropperCanvas.style.aspectRatio=`${t.naturalWidth} / ${t.naturalHeight}`;const e=this.cropperCanvas.getBoundingClientRect(),i=e.width/e.height,r="circle"===this.options?.shape?1:this.options?.selectionAspectRatio??i,o=this.options.constrainSelectionTo;this.options.constrainSelectionTo=null,this.options?.maximizeSelection?(this.cropperSelection.width=i>r?e.height*r:e.width,this.cropperSelection.height=i<r?e.width/r:e.height):(this.cropperSelection.width=e.width/2,this.cropperSelection.height=e.height/2),this.cropperImage.$center("cover"),this.cropperSelection.$center(),this.options.constrainSelectionTo=o,this.#Kt=!0}),await new Promise(t=>{this.#x=t})}reset(){this.cropperImage.$resetTransform()}#te(t){"image"!==this.options?.constrainSelectionTo&&this.cropperImage?.$rotate(t)}blobToFile(t,e){return new File([t],e,{lastModified:(new Date).getTime()})}#ee(t,e){return t.slice(0,t.lastIndexOf("."))+`.${e}`}#ie(t,e,i){return new Promise((r,o)=>{t.toBlob(t=>t?r(t):o(new Error("Canvas toBlob returned null")),e,i)})}#re(t){const e=Math.min(t.width,t.height);if(t.width!==e||t.height!==e){const i=document.createElement("canvas");i.width=e,i.height=e;i.getContext("2d").drawImage(t,0,0),t.width=e,t.height=e;t.getContext("2d").drawImage(i,0,0)}const i=t.getContext("2d");i.globalCompositeOperation="destination-in",i.fillStyle="#000",i.beginPath(),i.arc(.5*e,.5*e,.5*e,0,2*Math.PI),i.fill(),i.globalCompositeOperation="source-over"}#oe(t,e){return t.x>=e.x&&t.y>=e.y&&t.x+t.width<=e.x+e.width&&t.y+t.height<=e.y+e.height}#se(t){if(!this.cropperCanvas||"image"!==this.options?.constrainSelectionTo)return;const e=this.cropperImage,i=this.cropperSelection,r=this.cropperCanvas.getBoundingClientRect(),o=e.cloneNode();o.style.transform=`matrix(${t.detail.matrix.join(", ")})`,o.style.opacity="0",this.cropperCanvas.appendChild(o);const s=o.getBoundingClientRect();this.cropperCanvas.removeChild(o);const a=i,n={x:s.left-r.left,y:s.top-r.top,width:s.width,height:s.height};this.#oe(a,n)||t.preventDefault()}#ae(t){if(!this.cropperCanvas||!this.options?.constrainSelectionTo)return;const e=this.cropperCanvas.getBoundingClientRect(),i={x:t.detail.x,y:t.detail.y,width:t.detail.width-1,height:t.detail.height-1};switch(this.options?.constrainSelectionTo){case"canvas":{const r={x:0,y:0,width:e.width,height:e.height};this.#oe(i,r)||(t.preventDefault(),this.#ne());break}case"image":{if(!this.#Kt)return;const r=this.cropperImage.getBoundingClientRect(),o={x:r.left-e.left,y:r.top-e.top,width:r.width,height:r.height};this.#oe(i,o)||(t.preventDefault(),this.#ne());break}}}#ne(){setTimeout(()=>this.cropperShade.$change(this.cropperSelection.x,this.cropperSelection.y,this.cropperSelection.width,this.cropperSelection.height),0)}static{this.styles=[Cs,Os,As,a`
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
        @open=${t=>{zs(t.target),$s(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"cropped"===t.target.returnValue||"navigation-close"===t.target.returnValue)return this.#Kt=!1,this.src="",Ss(t.target),this.#x(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Crop image</div>
        <main slot="content">
          <loading-animation ?hidden=${!this.isLoading}>
            <img src=${Js} />
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
                @transform=${this.#se}
              ></cropper-image>
              <cropper-shade hidden></cropper-shade>
              <cropper-handle action="select" plain></cropper-handle>
              <cropper-selection
                movable
                resizable
                precise
                aspect-ratio=${"circle"===this.options?.shape?1:Ls(this.options?.selectionAspectRatio)}
                @change=${this.#ae}
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
            <crop-buttons ?hidden=${"image"===this.options?.constrainSelectionTo}>
              <md-icon-button label="Rotate right" title="Rotate right" @click=${()=>this.#te("45deg")}>
                <md-icon>rotate_right</md-icon>
              </md-icon-button>
              <md-icon-button label="Rotate left" title="Rotate left" @click=${()=>this.#te("-45deg")}>
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
            @click=${async()=>{const t=this.cropperCanvas?.getBoundingClientRect(),e=this.cropperImage?.$image,i=e&&t?.width?e.naturalWidth/t.width:1,r=e&&t?.height?e.naturalHeight/t.height:i;let o=Math.max(1,Math.round(this.cropperSelection.width*i)),s=Math.max(1,Math.round(this.cropperSelection.height*r));if(this.options?.outputMaxWidth&&o>this.options.outputMaxWidth){const t=this.options.outputMaxWidth/o;o=this.options.outputMaxWidth,s=Math.max(1,Math.round(s*t))}if(this.options?.outputMaxHeight&&s>this.options.outputMaxHeight){const t=this.options.outputMaxHeight/s;s=this.options.outputMaxHeight,o=Math.max(1,Math.round(o*t))}const a=await(this.cropperSelection?.$toCanvas({width:o,height:s,beforeDraw:(t,e)=>{t.imageSmoothingQuality="high"}}));a&&await this.trackLoadingPromise((async()=>{"circle"===this.options?.shape&&this.#re(a);const t=await this.#ie(a,this.#Yt,this.options?.outputQuality??.8),e=URL.createObjectURL(t),i=this.blobToFile(t,this.#ee(this.fileName,this.#Xt)),r=this.#Zt?.(i,e)||Promise.resolve();await r,this.dialog.close("cropped")})())}}
            >Save</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};t([Ii("trackLoadingPromise"),mt()],Qs.prototype,"isLoading",null),t([vt("md-dialog")],Qs.prototype,"dialog",null),t([vt("main")],Qs.prototype,"main",null),t([vt("cropper-canvas")],Qs.prototype,"cropperCanvas",null),t([vt("cropper-selection")],Qs.prototype,"cropperSelection",null),t([vt("cropper-image")],Qs.prototype,"cropperImage",null),t([vt("cropper-shade")],Qs.prototype,"cropperShade",null),t([ut({type:Boolean,reflect:!0,attribute:"force-png"})],Qs.prototype,"forcePNGOutput",null),t([ut({type:Object})],Qs.prototype,"options",null),t([mt()],Qs.prototype,"fileName",null),t([mt()],Qs.prototype,"src",null),Qs=t([ct("crop-and-save-image-dialog")],Qs);let Zs=class extends lt{#le;get imageUrl(){return this.#le}set imageUrl(t){this.#le=t}#de;get downloadSrc(){return this.#de}set downloadSrc(t){this.#de=t}#ce;get filename(){return this.#ce}set filename(t){this.#ce=t}#P;get dialog(){return this.#P}set dialog(t){this.#P=t}async open(t,e,i){return this.imageUrl=void 0,this.filename=i,this.downloadSrc=e,this.imageUrl=t,this.dialog.show()}static{this.styles=[a`
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
      <md-dialog
        @open=${t=>{zs(t.target),$s(t.target)}}
        @close=${t=>{Ss(t.target)}}
      >
        <div header slot="headline">${Ri(this.filename||"Image preview",60)}</div>
        <img slot="content" draggable="false" src=${Ls(this.imageUrl)} />
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
    `}};t([mt()],Zs.prototype,"imageUrl",null),t([mt()],Zs.prototype,"downloadSrc",null),t([mt()],Zs.prototype,"filename",null),t([vt("md-dialog")],Zs.prototype,"dialog",null),Zs=t([ct("image-preview-dialog")],Zs);const ta=Mt(lt);class ea extends ta{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1,this.addEventListener("click",this.handleClick.bind(this))}focus(t){this.disabled&&!this.alwaysFocusable||super.focus(t)}render(){return G`
      <div class="container ${St(this.getContainerClasses())}">
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
    `}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements({flatten:!0}).length>0}handleClick(t){if(this.softDisabled||this.disabled&&this.alwaysFocusable)return t.stopImmediatePropagation(),void t.preventDefault()}}ea.shadowRootOptions={...lt.shadowRootOptions,delegatesFocus:!0},t([ut({type:Boolean,reflect:!0})],ea.prototype,"disabled",void 0),t([ut({type:Boolean,attribute:"soft-disabled",reflect:!0})],ea.prototype,"softDisabled",void 0),t([ut({type:Boolean,attribute:"always-focusable"})],ea.prototype,"alwaysFocusable",void 0),t([ut()],ea.prototype,"label",void 0),t([ut({type:Boolean,reflect:!0,attribute:"has-icon"})],ea.prototype,"hasIcon",void 0);const ia="aria-label-remove";class ra extends ea{get ariaLabelRemove(){if(this.hasAttribute(ia))return this.getAttribute(ia);const{ariaLabel:t}=this;return t||this.label?`Remove ${t||this.label}`:null}set ariaLabelRemove(t){t!==this.ariaLabelRemove&&(null===t?this.removeAttribute(ia):this.setAttribute(ia,t),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(t){(this.alwaysFocusable||!this.disabled)&&t?.trailing&&this.trailingAction?this.trailingAction.focus(t):super.focus(t)}renderContainerContent(){return G`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(t){const e="ArrowLeft"===t.key,i="ArrowRight"===t.key;if(!e&&!i)return;if(!this.primaryAction||!this.trailingAction)return;const r="rtl"===getComputedStyle(this).direction?e:i,o=this.primaryAction?.matches(":focus-within"),s=this.trailingAction?.matches(":focus-within");if(r&&s||!r&&o)return;t.preventDefault(),t.stopPropagation();(r?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:t,trailingAction:e}=this;t&&e&&(t.tabIndex=-1,e.addEventListener("focusout",()=>{t.tabIndex=0},{once:!0}))}}function oa({ariaLabel:t,disabled:e,focusListener:i,tabbable:r=!1}){return G`
    <span id="remove-label" hidden aria-hidden="true">Remove</span>
    <button
      class="trailing action"
      aria-label=${t||H}
      aria-labelledby=${t?H:"remove-label label"}
      tabindex=${r?H:-1}
      @click=${sa}
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
  `}function sa(t){if(this.disabled||this.softDisabled)return;t.stopPropagation();!this.dispatchEvent(new Event("remove",{cancelable:!0}))||this.remove()}class aa extends ra{constructor(){super(...arguments),this.avatar=!1,this.href="",this.target="",this.removeOnly=!1,this.selected=!1}get primaryId(){return this.href?"link":this.removeOnly?"":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}get primaryAction(){return this.removeOnly?null:this.renderRoot.querySelector(".primary.action")}getContainerClasses(){return{...super.getContainerClasses(),avatar:this.avatar,disabled:!this.href&&(this.disabled||this.softDisabled),link:!!this.href,selected:this.selected,"has-trailing":!0}}renderPrimaryAction(t){const{ariaLabel:e}=this;return this.href?G`
        <a
          class="primary action"
          id="link"
          aria-label=${e||H}
          href=${this.href}
          target=${this.target||H}
          >${t}</a
        >
      `:this.removeOnly?G`
        <span class="primary action" aria-label=${e||H}>
          ${t}
        </span>
      `:G`
      <button
        class="primary action"
        id="button"
        aria-label=${e||H}
        aria-disabled=${this.softDisabled||H}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${t}</button
      >
    `}renderTrailingAction(t){return oa({focusListener:t,ariaLabel:this.ariaLabelRemove,disabled:!this.href&&(this.disabled||this.softDisabled),tabbable:this.removeOnly})}}t([ut({type:Boolean})],aa.prototype,"avatar",void 0),t([ut()],aa.prototype,"href",void 0),t([ut()],aa.prototype,"target",void 0),t([ut({type:Boolean,attribute:"remove-only"})],aa.prototype,"removeOnly",void 0),t([ut({type:Boolean,reflect:!0})],aa.prototype,"selected",void 0),t([vt(".trailing.action")],aa.prototype,"trailingAction",void 0);const na=a`:host{--_container-height: var(--md-input-chip-container-height, 32px);--_disabled-label-text-color: var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color: var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font: var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color: var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color: var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width: var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color: var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity: var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color: var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape: var(--md-input-chip-avatar-shape, var(--md-sys-shape-corner-full, 9999px));--_avatar-size: var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color: var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size: var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color: var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color: var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color: var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color: var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-input-chip-leading-space, 16px);--_trailing-space: var(--md-input-chip-trailing-space, 16px);--_icon-label-space: var(--md-input-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-input-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-input-chip-with-trailing-icon-trailing-space, 8px)}:host([avatar]){--_container-shape-start-start: var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end: var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end: var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start: var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors: active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}
`,la=a`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`,da=a`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}
`,ca=a`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;let ha=class extends aa{};ha.styles=[da,ca,la,na],ha=t([ct("md-input-chip")],ha);const pa=(t,e,i)=>{const r=new Map;for(let o=e;o<=i;o++)r.set(t[o],o);return r},ua=$t(class extends zt{constructor(t){if(super(t),t.type!==kt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let r;void 0===i?i=e:void 0!==e&&(r=e);const o=[],s=[];let a=0;for(const e of t)o[a]=r?r(e,a):a,s[a]=i(e,a),a++;return{values:s,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,r]){const o=(t=>t._$AH)(t),{values:s,keys:a}=this.dt(e,i,r);if(!Array.isArray(o))return this.ut=a,s;const n=this.ut??=[],l=[];let d,c,h=0,p=o.length-1,u=0,m=s.length-1;for(;h<=p&&u<=m;)if(null===o[h])h++;else if(null===o[p])p--;else if(n[h]===a[u])l[u]=ae(o[h],s[u]),h++,u++;else if(n[p]===a[m])l[m]=ae(o[p],s[m]),p--,m--;else if(n[h]===a[m])l[m]=ae(o[h],s[m]),se(t,l[m+1],o[h]),h++,m--;else if(n[p]===a[u])l[u]=ae(o[p],s[u]),se(t,o[h],o[p]),p--,u++;else if(void 0===d&&(d=pa(a,u,m),c=pa(n,h,p)),d.has(n[h]))if(d.has(n[p])){const e=c.get(a[u]),i=void 0!==e?o[e]:null;if(null===i){const e=se(t,o[h]);ae(e,s[u]),l[u]=e}else l[u]=ae(i,s[u]),se(t,o[h],i),o[e]=null;u++}else de(o[p]),p--;else de(o[h]),h++;for(;u<=m;){const e=se(t,l[m+1]);ae(e,s[u]),l[u++]=e}for(;h<=p;){const t=o[h++];null!==t&&de(t)}return this.ut=a,le(t,l),q}}),ma=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];function fa(t){const e=t.split(".");return e?.[e.length-1]||""}function va(t){return"pdf"===t.toLowerCase()?new URL(new URL("BrwlMowD.png",import.meta.url).href).href:new URL(new URL("Ciwo_vsG.png",import.meta.url).href).href}function ga(t,e){if(t?.CdnFileName&&!e)return`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}?d=${encodeURIComponent(`${t.Name}.${t.Extension}`)}`}function ba(t,e){if(t?.CdnFileName)return t?.PreviewSizes&&t?.PreviewSizes?.split(",").includes(String(e))&&"svg"!==t.Extension?e?`https://cdn.leavitt.com/${t.CdnFileName}-${e}.${t.PreviewExtension}`:`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}`:function(t){return"png"===t?.Extension||"jpg"===t?.Extension||"jpeg"===t?.Extension||"gif"===t?.Extension||"svg"===t?.Extension||"webp"===t?.Extension}(t)?`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}`:void 0}let ya=class extends lt{#he=[];get files(){return this.#he}set files(t){this.#he=t}#pe=!1;get isOver(){return this.#pe}set isOver(t){this.#pe=t}#ue=void 0;get previewSrc(){return this.#ue}set previewSrc(t){this.#ue=t}#me;get input(){return this.#me}set input(t){this.#me=t}#fe;get imagePreviewDialog(){return this.#fe}set imagePreviewDialog(t){this.#fe=t}#ve;get cropperDialog(){return this.#ve}set cropperDialog(t){this.#ve=t}#ge;get confirmDeleteDialog(){return this.#ge}set confirmDeleteDialog(t){this.#ge=t}#be;get chipMultiSelect(){return this.#be}set chipMultiSelect(t){this.#be=t}#ye=[];#xe(t){for(const e of t)e.previewSrc?.startsWith("blob:")&&URL.revokeObjectURL(e.previewSrc)}#we="image/*,.pdf";get accept(){return this.#we}set accept(t){this.#we=t}#_e=!1;get multiple(){return this.#_e}set multiple(t){this.#_e=t}#It=!1;get required(){return this.#It}set required(t){this.#It=t}#m=!1;get disabled(){return this.#m}set disabled(t){this.#m=t}#ke=!1;get confirmDelete(){return this.#ke}set confirmDelete(t){this.#ke=t}#$e="Confirm delete";get confirmDeleteHeader(){return this.#$e}set confirmDeleteHeader(t){this.#$e=t}#ze="Are you sure you would like to delete this attachment?";get confirmDeleteText(){return this.#ze}set confirmDeleteText(t){this.#ze=t}#Se="Add attachment";get addButtonLabel(){return this.#Se}set addButtonLabel(t){this.#Se=t}#Mt="Attachments";get label(){return this.#Mt}set label(t){this.#Mt=t}#Rt="";get supportingText(){return this.#Rt}set supportingText(t){this.#Rt=t}#Ot="No attachments";get noItemsText(){return this.#Ot}set noItemsText(t){this.#Ot=t}#Wt;get options(){return this.#Wt}set options(t){this.#Wt=t}#Ht=!1;get forcePNGOutput(){return this.#Ht}set forcePNGOutput(t){this.#Ht=t}#Ae=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];get croppableImageFormats(){return this.#Ae}set croppableImageFormats(t){this.#Ae=t}getFiles(){return this.files}setFiles(...t){this.#xe(this.files),this.files=[...t].map(t=>({file:new File([""],t.fileName),previewSrc:t.previewSrc,downloadSrc:t.downloadSrc,id:t.id})),this.#ye=structuredClone(this.files)}setFilesFromDatabaseAttachments(...t){this.#xe(this.files),this.files=[...t].filter(t=>t.Name&&t.Extension).map(t=>({id:t.Id,file:new File([""],`${t?.Name}.${t?.Extension}`),previewSrc:ba(t),downloadSrc:ga(t)})),this.#ye=structuredClone(this.files)}checkValidity(){return this.chipMultiSelect.checkValidity()}reportValidity(){return this.chipMultiSelect.reportValidity()}hasChanges(){return JSON.stringify(this.#ye)!==JSON.stringify(this.files)}async reset(){this.#xe(this.files),this.#ye=[],this.previewSrc=void 0,this.files=[],this.isOver=!1,await this.updateComplete,this.chipMultiSelect.reset()}async handleNewFile(t){let e=!1;for(let i=0;i<(t?.length??0);i++){const r=t?.item(i);if(r){const t=this.croppableImageFormats.some(t=>r.name?.toLowerCase()?.endsWith(t?.toLowerCase()));if(t){const t=URL.createObjectURL(r),i=await this.cropperDialog.open(t,r.name,async(t,e)=>{const i={file:t,previewSrc:e??void 0};this.multiple?this.files=[...this.files,i]:(this.#xe(this.files),this.files=[i])});URL.revokeObjectURL(t),"cropped"===i&&(this.reportValidity(),e=!0),await Bi(500)}else{const t={file:r},i=ma.some(t=>r.name.endsWith(t));if(i)try{const e=await this.toBase64(r);"string"==typeof e&&(t.previewSrc=e??void 0)}catch{}this.multiple?this.files=[...this.files,t]:(this.#xe(this.files),this.files=[t]),this.reportValidity(),e=!0}}}e&&this.#Ce()}#Ee=null;#Te(t){this.#xe([t]);const e=this.files.findIndex(e=>e===t);this.files.splice(e,1),this.requestUpdate("files"),this.reportValidity(),this.#Ce()}toBase64(t){return new Promise((e,i)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(r.result),r.onerror=t=>i(t)})}#Ce(){this.dispatchEvent(new Event("change"))}static{this.styles=[Os,a`
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
        <md-filled-tonal-button
          ?hidden=${!this.multiple&&!!this.files.length}
          .disabled=${this.disabled}
          @click=${()=>{this.disabled||(this.input.value="",this.input.click())}}
          >${this.addButtonLabel} <md-icon slot="icon">add</md-icon>
        </md-filled-tonal-button>
        ${ua(this.files,t=>t.file.name,t=>G`<md-input-chip
              label=${Ri(t.file.name)}
              ?closeable=${!this.disabled}
              ?remove-only=${!t.previewSrc&&!t.downloadSrc}
              @remove=${async e=>{e.preventDefault(),this.confirmDelete?(this.#Ee=t,this.confirmDeleteDialog?.show()):this.#Te(t)}}
              @click=${()=>{(t.previewSrc||t.downloadSrc)&&this.imagePreviewDialog.open(t.previewSrc||va(fa(t.file.name)),t.downloadSrc,t.file.name)}}
            >
              <img draggable="false" slot="icon" src=${t.previewSrc||va(fa(t.file.name))} />
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
            @click=${()=>{this.#Ee&&this.#Te(this.#Ee),this.confirmDeleteDialog.close()}}
            >Confirm</md-text-button
          >
        </div>
      </md-dialog>
    `}};t([ut({type:Array})],ya.prototype,"files",null),t([ut({type:Boolean,reflect:!0,attribute:"is-over"})],ya.prototype,"isOver",null),t([ut({type:String})],ya.prototype,"previewSrc",null),t([vt("input")],ya.prototype,"input",null),t([vt("image-preview-dialog")],ya.prototype,"imagePreviewDialog",null),t([vt("crop-and-save-image-dialog")],ya.prototype,"cropperDialog",null),t([vt("md-dialog[confirm-delete]")],ya.prototype,"confirmDeleteDialog",null),t([vt("titanium-chip-multi-select")],ya.prototype,"chipMultiSelect",null),t([ut({type:String})],ya.prototype,"accept",null),t([ut({type:Boolean})],ya.prototype,"multiple",null),t([ut({type:Boolean})],ya.prototype,"required",null),t([ut({type:Boolean,reflect:!0})],ya.prototype,"disabled",null),t([ut({type:Boolean})],ya.prototype,"confirmDelete",null),t([ut({type:String})],ya.prototype,"confirmDeleteHeader",null),t([ut({type:String})],ya.prototype,"confirmDeleteText",null),t([ut({type:String})],ya.prototype,"addButtonLabel",null),t([ut({type:String})],ya.prototype,"label",null),t([ut({type:String})],ya.prototype,"supportingText",null),t([ut({type:String})],ya.prototype,"noItemsText",null),t([ut({type:Object})],ya.prototype,"options",null),t([ut({type:Boolean,reflect:!0,attribute:"force-png"})],ya.prototype,"forcePNGOutput",null),t([ut({type:Array})],ya.prototype,"croppableImageFormats",null),ya=t([ct("titanium-smart-attachment-input")],ya);class xa extends CustomEvent{static{this.eventType="pending-state"}constructor(t){super(xa.eventType,{bubbles:!0,composed:!0,detail:{promise:t}})}}class wa{constructor(t,e){this.metadata=new Map,this.status=t.status,this.headers=t.headers,this.blob=e}}class _a{constructor(){this.type=null,this.shortType=null}}class ka{constructor(t=new _a){this._odataInfo=t}}class $a{static#Pe(t){const e=new Map;return Object.keys(t).filter(t=>0===t.indexOf("@odata")).forEach(i=>e.set(i.replace("@odata.",""),t[i])),e}#Me(t){return null===t.value||void 0===t.value||Array.isArray(t.value)?t:t.value}static#Oe(t){return Array.isArray(t.value)?t.value:[]}get odataCount(){return this.metadata.has("count")?this.metadata.get("count"):0}count(){return this.entities.length}firstOrDefault(){return this.count()>0?this.entities[0]:null}toList(){return this.entities}constructor(t,e){this.status=t.status,this.headers=t.headers,this.metadata=$a.#Pe(e),this.entities=$a.#Oe(e),this.entity=0===this.entities.length?this.#Me(e):null}get containsMultipleEntities(){return this.entities.length>0}}const za=new Map;function Sa(t,e,i){const r=e||new FormData;let o;for(const e in t)if(Object.hasOwn(t,e)){if(void 0===t[e])continue;o=i?t instanceof Array&&t[e]instanceof File?i:t instanceof Array?i+"["+e+"]":i+"."+e:e,"object"!=typeof t[e]||t[e]instanceof File?r.append(o,t[e]):Sa(t[e],r,o)}return r}za.set(0,"CORS Error"),za.set(200,"OK"),za.set(201,"Created"),za.set(202,"Accepted"),za.set(203,"Non-Authoritative Information"),za.set(204,"No Content"),za.set(205,"Reset Content"),za.set(206,"Partial Content"),za.set(300,"Multiple Choices"),za.set(301,"Moved Permanently"),za.set(302,"Found"),za.set(303,"See Other"),za.set(304,"Not Modified"),za.set(305,"Use Proxy"),za.set(306,"Unused"),za.set(307,"Temporary Redirect"),za.set(400,"Bad Request"),za.set(401,"Unauthorized"),za.set(402,"Payment Required"),za.set(403,"Forbidden"),za.set(404,"Not Found"),za.set(405,"Method Not Allowed"),za.set(406,"Not Acceptable"),za.set(407,"Proxy Authentication Required"),za.set(408,"Request Timeout"),za.set(409,"Conflict"),za.set(410,"Gone"),za.set(411,"Length Required"),za.set(412,"Precondition Required"),za.set(413,"Request Entry Too Large"),za.set(414,"Request-URI Too Long"),za.set(415,"Unsupported Media Type"),za.set(416,"Requested Range Not Satisfiable"),za.set(417,"Expectation Failed"),za.set(418,"I'm a teapot"),za.set(429,"Too Many Requests"),za.set(500,"Internal Server Error"),za.set(501,"Not Implemented"),za.set(502,"Bad Gateway"),za.set(503,"Service Unavailable"),za.set(504,"Gateway Timeout"),za.set(505,"HTTP Version Not Supported");class Aa{constructor(t,e){this.headers={},this.baseUrl="https://api2.leavitt.com/",this.#Ie=t,this.addHeader("Content-Type","application/json"),this.#Be=e?.appNameHeaderKey?e?.appNameHeaderKey:"X-LGAppName",this.addHeader(this.#Be,"General")}#Ie;#Be;addHeader(t,e){this.headers[t]=e}deleteHeader(t){delete this.headers[t]}#Re(t){return this.baseUrl?.endsWith("/")&&t?.startsWith("/")&&Oi&&alert(`API Service Warning: Malformed url, double slashes present. \r\n\r\n${this.baseUrl}${t}`),`${this.baseUrl}${t}`}async uploadFile(t,e,i,r){try{if(r?.abortController?.signal&&r?.abortController.signal.aborted)throw new Ca;const o=4;if(!e||!e.name)throw new Error("ArgumentException: Invalid file passed to uploadFile.");const s=new XMLHttpRequest;s.onabort=function(){throw new Ca},r?.abortController?.signal&&(r?.abortController.signal.addEventListener("abort",()=>s.abort()),s.onreadystatechange=function(){s.readyState===o&&r?.abortController?.signal.removeEventListener("abort",()=>s.abort())}),s.upload.addEventListener("progress",t=>{i(t,s)}),s.open("POST",this.#Re(t),!0);const a={...this.headers},n=await this.#Ie._getBearerTokenAsync();null!==n&&(a.Authorization=`Bearer ${n}`),a["X-LGAttachmentName"]=e.name;for(const t in a)s.setRequestHeader(t,a[t]);return new Promise((i,o)=>{s.addEventListener("loadend",()=>{try{const e={text:()=>s.response,status:s.status};if("blob"===r?.responseType){const r=this.#Le(e,"UPLOAD",t);return i(r)}{const r=this.#Ne(e,"UPLOAD",t);return i(r)}}catch(t){return o(t)}},!1),s.send(e)})}catch(e){return Promise.reject(this.#je(e,"UPLOAD",t))}}async postAsync(t,e={},i){e instanceof ka&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers};i?.sendAsFormData&&delete r["Content-Type"];const o=await this.#Ie._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#Re(t),{method:"POST",body:i?.sendAsFormData?Sa(e):JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#je(e,"POST",t))}return"blob"===i?.responseType?await this.#Le(s,"POST",t):await this.#Ne(s,"POST",t)}async patchAsync(t,e,i){e instanceof ka&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#Ie._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#Re(t),{method:"PATCH",body:JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#je(e,"PATCH",t))}return"blob"===i?.responseType?await this.#Le(s,"PATCH",t):await this.#Ne(s,"PATCH",t)}async patchReturnDtoAsync(t,e,i){e instanceof ka&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#Ie._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#Re(t),{method:"PATCH",body:JSON.stringify(e),headers:{...r,Prefer:"return=representation"},signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#je(e,"PATCH",t))}return"blob"===i?.responseType?await this.#Le(s,"PATCH",t):await this.#Ne(s,"PATCH",t)}async deleteAsync(t,e){const i={...this.headers},r=await this.#Ie._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#Re(t),{method:"DELETE",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#je(e,"DELETE",t))}return"blob"===e?.responseType?await this.#Le(o,"DELETE",t):await this.#Ne(o,"DELETE",t)}async getAsync(t,e){const i={...this.headers},r=await this.#Ie._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#Re(t),{method:"GET",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#je(e,"GET",t))}return"blob"===e?.responseType?await this.#Le(o,"GET",t):await this.#Ne(o,"GET",t)}#Ue(t,e,i){return i.indexOf(t)===e}async aggregateResponses(t){const e=new Map,i=[],r=t.map(async t=>{try{await t()}catch(t){const r=t;i.push(r);const o=r.message;e.set(o,(e.get(o)??0)+1)}});if(await Promise.allSettled(r),e.size>0){const r={type:"HttpError",action:i.map(t=>t.action).filter(this.#Ue).join(", "),message:`${i.length} of ${t.length} actions failed`,detail:Array.from(e.keys()).map(t=>`${e.get(t)} error(s):  ${t}`).join("\n"),baseUrl:i.map(t=>t.baseUrl).filter(this.#Ue).join(", "),path:i.map(t=>t.path).filter(this.#Ue).join(", ")};return Promise.reject(r)}}#je(t,e,i,r=void 0){const o=t?.message?.includes("Failed to fetch")?"Network error. Check your connection and try again.":"AbortError"===t?.name?"Abort error. Request has been aborted.":t?.message||t;return{type:"HttpError",statusCode:r,baseUrl:this.baseUrl,message:o,action:e,path:i}}async#Le(t,e,i){try{if(0===t.status||t.status>=400&&t.status<=600){const r=await t.text(),o=r.length?JSON.parse(r):{},s=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||za.get(t.status)||"unknown";o?.details&&console.warn(o.details);const a={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:s,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(a)}{const e=await t.blob();return Promise.resolve(new wa(t,e))}}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}async#Ne(t,e,i){const r=await t.text();let o;try{if(o=r.length?JSON.parse(r):{},0===t.status||t.status>=400&&t.status<=600){const r=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||za.get(t.status)||"unknown";o?.details&&console.warn(o.details);const s={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:r,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(s)}return Promise.resolve(new $a(t,o))}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}}class Ca extends Error{constructor(){super(...arguments),this.name="AbortError",this.message="Aborted"}}let Ea=class extends lt{#o=!1;get isLoading(){return this.#o}set isLoading(t){this.#o=t}#kt;get userManager(){return this.#kt}set userManager(t){this.#kt=t}#P;get dialog(){return this.#P}set dialog(t){this.#P=t}#De;get snackbar(){return this.#De}set snackbar(t){this.#De=t}#Fe;get textArea(){return this.#Fe}set textArea(t){this.#Fe=t}#Ge;get imageInput(){return this.#Ge}set imageInput(t){this.#Ge=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.imageInput?.reset(),this.textArea?.reset()}async#qe(){if(!this.textArea.reportValidity()||this.isLoading)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Bug",Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map(t=>t.file)};try{const e=new Aa(this.userManager);e.baseUrl=Oi?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",e.addHeader("X-LGAppName","IssueTracking");const i=e.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new xa(i)),this.trackLoadingPromise(i);if(!(await i).entity)throw new Error("Error submitting problem. Please try again.");document.dispatchEvent(new Ei("",{overrideTemplate:G`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset(),this.dialog.close("done")}catch(t){this.dispatchEvent(new Ei(t))}}static{this.styles=[Cs,Os,a`
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
        @open=${t=>{zs(t.target),$s(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return Ss(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
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
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#qe()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};t([Ii("trackLoadingPromise"),mt()],Ea.prototype,"isLoading",null),t([ut({type:Object})],Ea.prototype,"userManager",null),t([vt("md-dialog")],Ea.prototype,"dialog",null),t([vt("titanium-snackbar-stack")],Ea.prototype,"snackbar",null),t([vt("md-outlined-text-field")],Ea.prototype,"textArea",null),t([vt("titanium-smart-attachment-input")],Ea.prototype,"imageInput",null),Ea=t([ct("report-a-problem-dialog")],Ea);let Ta=class extends lt{#o=!1;get isLoading(){return this.#o}set isLoading(t){this.#o=t}#kt;get userManager(){return this.#kt}set userManager(t){this.#kt=t}#P;get dialog(){return this.#P}set dialog(t){this.#P=t}#De;get snackbar(){return this.#De}set snackbar(t){this.#De=t}#Fe;get textArea(){return this.#Fe}set textArea(t){this.#Fe=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.textArea?.reset()}async#qe(){if(!this.textArea.reportValidity()||this.isLoading||!this.textArea.value)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Feedback",Description:this.textArea.value,Attachments:[]};try{if(this.userManager){const e=new Aa(this.userManager);e.baseUrl=Oi?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",e.addHeader("X-LGAppName","IssueTracking");const i=e.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new xa(i)),this.trackLoadingPromise(i);if(!(await i).entity)throw new Error("Error submitting feedback. Please try again.");document.dispatchEvent(new Ei("We appreciate your input, and we will promptly conduct a review!")),this.reset(),this.dialog.close("done")}}catch(t){this.dispatchEvent(new Ei(t))}}static{this.styles=[Cs,Os,a`
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
        @open=${t=>{zs(t.target),$s(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return Ss(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
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
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#qe()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};t([Ii("trackLoadingPromise"),mt()],Ta.prototype,"isLoading",null),t([ut({type:Object})],Ta.prototype,"userManager",null),t([vt("md-dialog")],Ta.prototype,"dialog",null),t([vt("titanium-snackbar-stack")],Ta.prototype,"snackbar",null),t([vt("md-outlined-text-field")],Ta.prototype,"textArea",null),Ta=t([ct("provide-feedback-dialog")],Ta);let Pa=class extends lt{#He=null;get pendingStateElement(){return this.#He}set pendingStateElement(t){this.#He=t}#w=!1;get open(){return this.#w}set open(t){this.#w=t}#We=!1;get closed(){return this.#We}set closed(t){this.#We=t}#Ve;#Ye;#Xe=75;#Ke=400;#Je;#Qe=0;firstUpdated(){(this.pendingStateElement??this).addEventListener(xa.eventType,async t=>{t.stopPropagation(),this.#Ze(),this.#Qe++;try{await t.detail.promise}catch{}finally{this.#Qe--,0===this.#Qe&&this.#ti()}})}#Ze(){window.clearTimeout(this.#Ve),window.clearTimeout(this.#Ye),this.#Ve=window.setTimeout(()=>{this.#Je=performance.now(),this.parentElement?.setAttribute("inert",""),this.open=!0,this.closed=!1},this.#Xe)}#ti(){window.clearTimeout(this.#Ve);const t=performance.now()-this.#Je,e=Math.max(this.#Ke-t,0);this.#Ye=window.setTimeout(()=>{this.open=!1,this.closed=!0,this.parentElement?.removeAttribute("inert")},e)}static{this.styles=a`
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
  `}render(){return G` <md-circular-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-circular-progress>`}};t([ut({type:Object})],Pa.prototype,"pendingStateElement",null),t([ut({type:Boolean,reflect:!0})],Pa.prototype,"open",null),t([ut({type:Boolean,reflect:!0})],Pa.prototype,"closed",null),Pa=t([ct("titanium-circle-loading-indicator")],Pa);let Ma=class extends Event{constructor(t,e,i,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=i,this.subscribe=r??!1}};let Oa=class{constructor(t,e,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ma(this.context,this.host,this.t,this.subscribe))}};class Ia{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}let Ba=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}},Ra=class extends Ia{constructor(t,e,i){super(void 0!==e.context?e.initialValue:i),this.onContextRequest=t=>{if(t.context!==this.context)return;const e=t.contextTarget??t.composedPath()[0];e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{if(t.context!==this.context)return;if((t.contextTarget??t.composedPath()[0])===this.host)return;const e=new Set;for(const[t,{consumerHost:i}]of this.subscriptions)e.has(t)||(e.add(t),i.dispatchEvent(new Ma(this.context,i,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ba(this.context,this.host))}};function La({context:t}){return(e,i)=>{const r=new WeakMap;if("object"==typeof i)return{get(){return e.get.call(this)},set(t){return r.get(this).setValue(t),e.set.call(this,t)},init(e){return r.set(this,new Ra(this,{context:t,initialValue:e})),e}};{e.constructor.addInitializer(e=>{r.set(e,new Ra(e,{context:t}))});const o=Object.getOwnPropertyDescriptor(e,i);let s;if(void 0===o){const t=new WeakMap;s={get(){return t.get(this)},set(e){r.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=o.set;s={...o,set(e){r.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,i,s)}}}const Na="mainMenuPositionContext";let ja=class extends lt{constructor(){super(...arguments),this.#He=null,this.mainMenuPosition="full"}#ei;get scrollContainer(){return this.#ei}set scrollContainer(t){this.#ei=t}#He;get pendingStateElement(){return this.#He}set pendingStateElement(t){this.#He=t}static{this.styles=[a`
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
    `]}render(){return G`
      <titanium-circle-loading-indicator part="loading-indicator" .pendingStateElement=${this.pendingStateElement}></titanium-circle-loading-indicator>
      <scroll-container part="scroll-container"><slot></slot></scroll-container>
    `}};t([vt("scroll-container")],ja.prototype,"scrollContainer",null),t([ut({type:Object})],ja.prototype,"pendingStateElement",null),t([function({context:t,subscribe:e}){return(i,r)=>{"object"==typeof r?r.addInitializer(function(){new Oa(this,{context:t,callback:t=>{i.set.call(this,t)},subscribe:e})}):i.constructor.addInitializer(i=>{new Oa(i,{context:t,callback:t=>{i[r]=t},subscribe:e})})}}({context:Na,subscribe:!0}),ut({type:String,reflect:!0,attribute:"main-menu-position"})],ja.prototype,"mainMenuPosition",void 0),ja=t([ct("leavitt-app-main-content-container")],ja);let Ua=class extends lt{#ii="640px";get maxWidth(){return this.#ii}set maxWidth(t){this.#ii=t}static{this.styles=[a`
      :host {
        display: grid;
        padding: 12px 16px 0 16px;
        width: 100%;
        justify-self: center;
        box-sizing: border-box;

        align-content: start;
      }
    `]}render(){return G`
      <style>
        :host {
          max-width: ${this.maxWidth};
        }
      </style>
      <slot></slot>
    `}};t([ut({type:String,attribute:"max-width"})],Ua.prototype,"maxWidth",null),Ua=t([ct("leavitt-app-width-limiter")],Ua);let Da=class extends(_t(lt)){#ri="Hmm...";get heading(){return this.#ri}set heading(t){this.#ri=t}#$="It looks like that page doesn't exist.";get message(){return this.#$}set message(t){this.#$=t}#oi;get canvas(){return this.#oi}set canvas(t){this.#oi=t}#si;get container(){return this.#si}set container(t){this.#si=t}#ai;#ni;#li=null;#di=[];#ci=0;#Qt;#hi=!1;#pi=t=>{this.#ui(t),this.#mi(),this.#hi&&this.#fi()};#mi(){this.container&&(this.container.style.backgroundColor=this.#ai)}firstUpdated(){this.#ui(this.themePreference),this.#mi(),wt.subscribe("theme-preference","change",this.#pi),this.#hi=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,this.canvas&&(this.#li=this.canvas.getContext("2d"),this.#Qt=new ResizeObserver(()=>this.#vi()),this.#Qt.observe(this.canvas),this.#vi(),this.#gi())}connectedCallback(){super.connectedCallback(),this.#gi()}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this.#ci),this.#ci=0,this.#Qt?.disconnect(),wt.unsubscribe("theme-preference","change",this.#pi)}#gi(){!this.#li||this.#hi||this.#ci||(this.#ci=requestAnimationFrame(this.#bi))}#vi(){if(!this.canvas)return;const t=window.devicePixelRatio||1,e=this.canvas.clientWidth,i=this.canvas.clientHeight;0!==e&&0!==i&&(this.canvas.width=Math.round(e*t),this.canvas.height=Math.round(i*t),this.#li?.setTransform(t,0,0,t,0,0),this.#yi(e,i),this.#hi&&this.#fi())}#yi(t,e){const i=Math.min(160,Math.max(24,Math.round(t*e/9e3))),r=[];for(let o=0;o<i;o++)r.push({x:Math.random()*t,y:Math.random()*e,r:1.6*Math.random()+.7,baseOpacity:.5*Math.random()+.5,phase:Math.random()*Math.PI*2,twinkleSpeed:.012*Math.random()+.004,vx:.08*(Math.random()-.5),vy:.08*(Math.random()-.5)});this.#di=r}#bi=()=>{if(!this.canvas)return;const t=this.canvas.clientWidth,e=this.canvas.clientHeight;for(const i of this.#di)i.phase+=i.twinkleSpeed,i.x+=i.vx,i.y+=i.vy,i.x<0?i.x+=t:i.x>t&&(i.x-=t),i.y<0?i.y+=e:i.y>e&&(i.y-=e);this.#fi(),this.#ci=requestAnimationFrame(this.#bi)};#fi(){if(this.#li&&this.canvas){this.#li.clearRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight),this.#li.fillStyle=this.#ni;for(const t of this.#di){const e=this.#hi?t.baseOpacity:t.baseOpacity*(.55+.45*Math.sin(t.phase));this.#li.globalAlpha=Math.max(0,Math.min(1,e)),this.#li.beginPath(),this.#li.arc(t.x,t.y,t.r,0,2*Math.PI),this.#li.fill()}this.#li.globalAlpha=1}}#ui(t){this.#ai="dark"===t?getComputedStyle(document.body).getPropertyValue("--md-sys-color-surface-container-lowest"):getComputedStyle(document.body).getPropertyValue("--md-sys-color-surface-container-highest"),this.#ni="dark"===this.themePreference?"#5c5959":"#bfbbbb"}static{this.styles=a`
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

    canvas[particles] {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}render(){return G`
      <leavitt-app-main-content-container>
        <leavitt-app-width-limiter>
          <canvas particles></canvas>
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
    `}};t([ut()],Da.prototype,"heading",null),t([ut()],Da.prototype,"message",null),t([vt("canvas[particles]")],Da.prototype,"canvas",null),t([vt("leavitt-app-main-content-container")],Da.prototype,"container",null),Da=t([ct("leavitt-error-page")],Da);const Fa=new Set(Object.values(Wi));class Ga extends lt{get items(){return this.listController.items}constructor(){super(),this.listController=new Vi({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>Fa.has(t),isActivatable:t=>!t.disabled&&"text"!==t.type}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return G`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}t([yt({flatten:!0})],Ga.prototype,"slotItems",void 0);const qa=a`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;let Ha=class extends Ga{};Ha.styles=[qa],Ha=t([ct("md-list")],Ha);class Wa extends lt{constructor(){super(...arguments),this.multiline=!1}render(){return G`
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
    `}handleTextSlotChange(){let t=!1,e=0;for(const i of this.textSlots)if(Va(i)&&(e+=1),e>1){t=!0;break}this.multiline=t}}function Va(t){for(const e of t.assignedNodes({flatten:!0})){const t=e.nodeType===Node.ELEMENT_NODE,i=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(t||i)return!0}return!1}t([ut({type:Boolean,reflect:!0})],Wa.prototype,"multiline",void 0),t([bt(".text slot")],Wa.prototype,"textSlots",void 0);const Ya=a`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;let Xa=class extends Wa{};Xa.styles=[Ya],Xa=t([ct("md-item")],Xa);const Ka=Mt(lt);class Ja extends Ka{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&"link"!==this.type}willUpdate(t){this.href&&(this.type="link"),super.willUpdate(t)}render(){return this.renderListItem(G`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const e="link"===this.type;let i;switch(this.type){case"link":i=Qt`a`;break;case"button":i=Qt`button`;break;default:i=Qt`li`}const r="text"!==this.type,o=e&&this.target?this.target:H;return te`
      <${i}
        id="item"
        tabindex="${this.isDisabled||!r?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||H}
        aria-checked=${this.ariaChecked||H}
        aria-expanded=${this.ariaExpanded||H}
        aria-haspopup=${this.ariaHasPopup||H}
        class="list-item ${St(this.getRenderClasses())}"
        href=${this.href||H}
        target=${o}
        @focus=${this.onFocus}
      >${t}</${i}>
    `}renderRipple(){return"text"===this.type?H:G` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return"text"===this.type?H:G` <md-focus-ring
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
    `}onFocus(){-1===this.tabIndex&&this.dispatchEvent(new Event("request-activation",{bubbles:!0,composed:!0}))}focus(){this.listItemRoot?.focus()}click(){this.listItemRoot?this.listItemRoot.click():super.click()}}Ja.shadowRootOptions={...lt.shadowRootOptions,delegatesFocus:!0},t([ut({type:Boolean,reflect:!0})],Ja.prototype,"disabled",void 0),t([ut({reflect:!0})],Ja.prototype,"type",void 0),t([ut({type:Boolean,attribute:"md-list-item",reflect:!0})],Ja.prototype,"isListItem",void 0),t([ut()],Ja.prototype,"href",void 0),t([ut()],Ja.prototype,"target",void 0),t([vt(".list-item")],Ja.prototype,"listItemRoot",void 0);const Qa=a`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;let Za=class extends Ja{};Za.styles=[Qa],Za=t([ct("md-list-item")],Za);var tn=function(){return tn=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},tn.apply(this,arguments)},en=function(){function t(t,e,i){var r=this;this.endVal=e,this.options=i,this.version="2.10.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",autoAnimate:!1,autoAnimateDelay:200,autoAnimateOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var i=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=i?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(t){var e,i,o,s,a=t<0?"-":"";e=Math.abs(t).toFixed(r.options.decimalPlaces);var n=(e+="").split(".");if(i=n[0],o=n.length>1?r.options.decimal+n[1]:"",r.options.useGrouping){s="";for(var l=3,d=0,c=0,h=i.length;c<h;++c)r.options.useIndianSeparators&&4===c&&(l=2,d=1),0!==c&&d%l==0&&(s=r.options.separator+s),d++,s=i[h-c-1]+s;i=s}return r.options.numerals&&r.options.numerals.length&&(i=i.replace(/[0-9]/g,function(t){return r.options.numerals[+t]}),o=o.replace(/[0-9]/g,function(t){return r.options.numerals[+t]})),a+r.options.prefix+i+o+r.options.suffix},this.easeOutExpo=function(t,e,i,r){return i*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=tn(tn({},this.defaults),i),this.options.enableScrollSpy&&(this.options.autoAnimate=!0),void 0!==this.options.scrollSpyDelay&&(this.options.autoAnimateDelay=this.options.scrollSpyDelay),this.options.scrollSpyOnce&&(this.options.autoAnimateOnce=!0),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.el="string"==typeof t?document.getElementById(t):t,e=e??this.parse(this.el.innerHTML),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.autoAnimate&&(this.error||"undefined"==typeof IntersectionObserver?this.error?console.error(this.error,t):console.error("IntersectionObserver is not supported by this browser"):this.setupObserver())}return t.prototype.setupObserver=function(){var e=this,i=t.observedElements.get(this.el);i&&i.unobserve(),t.observedElements.set(this.el,this),this.observer=new IntersectionObserver(function(t){for(var i=0,r=t;i<r.length;i++){var o=r[i];o.isIntersecting&&e.paused&&!e.once?(e.paused=!1,e.autoAnimateTimeout=setTimeout(function(){return e.start()},e.options.autoAnimateDelay),e.options.autoAnimateOnce&&(e.once=!0,e.observer.disconnect())):o.isIntersecting||e.paused||(clearTimeout(e.autoAnimateTimeout),e.reset())}},{threshold:0}),this.observer.observe(this.el)},t.prototype.unobserve=function(){var e;clearTimeout(this.autoAnimateTimeout),null===(e=this.observer)||void 0===e||e.disconnect(),t.observedElements.delete(this.el)},t.prototype.onDestroy=function(){clearTimeout(this.autoAnimateTimeout),cancelAnimationFrame(this.rAF),this.paused=!0,this.unobserve(),this.options.onCompleteCallback=null,this.options.onStartCallback=null},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){clearTimeout(this.autoAnimateTimeout),cancelAnimationFrame(this.rAF),this.paused=!0,this.once=!1,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var i=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,i):"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t.prototype.parse=function(t){var e=function(t){return t.replace(/([.,'  ])/g,"\\$1")},i=e(this.options.separator),r=e(this.options.decimal),o=t.replace(new RegExp(i,"g"),"").replace(new RegExp(r,"g"),".");return parseFloat(o)},t.observedElements=new WeakMap,t}();let rn=class extends lt{#xi=!1;get hideDownloads(){return this.#xi}set hideDownloads(t){this.#xi=t}#wi;get major(){return this.#wi}set major(t){this.#wi=t}#_i;get minor(){return this.#_i}set minor(t){this.#_i=t}#ki;get rev(){return this.#ki}set rev(t){this.#ki=t}#$i;get downloads(){return this.#$i}set downloads(t){this.#$i=t}#zi="@leavittsoftware%2Fweb";async firstUpdated(){const t=await this.#Si(this.#zi);if(t){const[e,i,r]=t.version?.split(".")?.map(t=>Number(t))??[],o=new en(this.major,e,{suffix:".",duration:1}),s=new en(this.minor,i,{suffix:".",duration:1}),a=new en(this.rev,r,{duration:1});o.start(),setTimeout(()=>{s.start()},500),setTimeout(()=>{a.start()},1e3);new en(this.downloads,t.downloads??0,{useGrouping:!0,suffix:" weekly downloads"}).start()}}async#Si(t){try{const e=await fetch(`https://api.npmjs.org/versions/${t}/last-week`,{method:"GET"}),i=await e.text(),r=i.length?JSON.parse(i):{},o=Object.entries(r.downloads).map(t=>({version:t?.[0]?.split(".").map(t=>+t+1e5).join("."),downloads:t?.[1]})).sort((t,e)=>t.version.localeCompare(e.version)).map(t=>({...t,version:t.version?.split(".").map(t=>+t-1e5).join(".")}));return o?.pop()}catch(t){console.warn(t)}return null}static{this.styles=[a`
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
    `]}render(){return G`
      <stats-container>
        <info-chip tertiary>
          <span>v<span class="major"></span><span class="minor"></span><span class="rev"></span></span
        ></info-chip>

        <info-chip ?hidden=${this.hideDownloads}>
          <span slot="label"><span class="downloads"></span></span
        ></info-chip>
      </stats-container>
    `}};t([ut({type:Boolean,reflect:!0,attribute:"hide-downloads"})],rn.prototype,"hideDownloads",null),t([vt("span.major")],rn.prototype,"major",null),t([vt("span.minor")],rn.prototype,"minor",null),t([vt("span.rev")],rn.prototype,"rev",null),t([vt("span.downloads")],rn.prototype,"downloads",null),rn=t([ct("npm-stats")],rn);class on extends CustomEvent{static{this.eventName="site-error"}constructor(t){super(on.eventName,{bubbles:!0,composed:!0,detail:t})}}const sn=a`
  :host {
    display: grid;
    grid:
      'toolbar toolbar' 64px
      'menu content' auto / 310px 1fr;

    transition: 250ms;

    --mdc-icon-font: 'Material Symbols Outlined';
  }

  :host([no-main-menu]) {
    grid-template-columns: 0 1fr !important;

    titanium-toolbar {
      grid-template-columns: auto auto 1fr auto !important;
      padding: 0 24px 0 24px !important;
    }
  }

  :host([no-main-menu]) main-content {
    margin-left: 16px;
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

  :host([no-main-menu][main-menu-position='drawer']) main-content {
    margin-left: 0;
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
      'menu content' auto / 85px 1fr;

    titanium-toolbar {
      grid: 'main-menu-button logo search-input page-actions' / 85px auto 1fr auto;
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
      display: grid;
      overflow: hidden;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 4px;
      padding: 0 12px 2px 24px;
      opacity: 0.8;
      --md-icon-size: 16px;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  titanium-toolbar {
    grid-area: toolbar;
    background-color: var(--app-background-color);
    display: grid;
    grid: 'main-menu-button logo search-input page-actions' / auto 250px 1fr auto;
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
`,an=new yr;Object.freeze(an);const nn="siteSearchTextField";let ln=class extends(function(t){return class extends t{constructor(){super(...arguments),this.#Ai=75,this.#Ci=350,this.openCount=0,this.handlePendingStateEvent=async t=>{const e=t;this.loadingStarted(),this.openCount++;try{await e.detail.promise}catch{}finally{this.openCount--,0===this.openCount&&this.loadingStopped()}}}static get properties(){return{stateIsPending:{type:Boolean},pendingStateCatcherTarget:{type:Object},pendingStateCatcherLoadingStartDelay:{type:Number},pendingStateCatcherMinTimeOpen:{type:Number}}}#Ei;get stateIsPending(){return this.#Ei}set stateIsPending(t){this.#Ei=t}#Ai;get pendingStateCatcherLoadingStartDelay(){return this.#Ai}set pendingStateCatcherLoadingStartDelay(t){this.#Ai=t}#Ci;get pendingStateCatcherMinTimeOpen(){return this.#Ci}set pendingStateCatcherMinTimeOpen(t){this.#Ci=t}#Ti;get pendingStateCatcherTarget(){return this.#Ti}set pendingStateCatcherTarget(t){this.#Ti=t}async connectedCallback(){super.connectedCallback();(await this.pendingStateCatcherTarget||window).addEventListener(xa.eventType,this.handlePendingStateEvent)}async disconnectedCallback(){super.disconnectedCallback();(await this.pendingStateCatcherTarget||window).removeEventListener(xa.eventType,this.handlePendingStateEvent)}loadingStarted(){window.clearTimeout(this.loadingDelayTimer),window.clearTimeout(this.closeDelayTimer),this.loadingDelayTimer=window.setTimeout(()=>{this.timeStampOfLoadingStart=performance.now(),this.stateIsPending=!0},this.pendingStateCatcherLoadingStartDelay)}loadingStopped(){window.clearTimeout(this.loadingDelayTimer);const t=performance.now()-this.timeStampOfLoadingStart,e=Math.max(this.pendingStateCatcherMinTimeOpen-t,0);this.closeDelayTimer=window.setTimeout(()=>{this.stateIsPending=!1},e)}}}(lt)){constructor(){super(...arguments),this.#Pi=null,this.#Mi=null,this.#Oi=!1,this.mainMenuPosition="full",this.#Qt=null,this.#Ii=[{pattern:new URLPattern({pathname:"/getting-started"}),page:"getting-started",import:()=>import("./CTnV2lE6.js")},{pattern:new URLPattern({pathname:"/available-cdn-icons"}),page:"available-cdn-icons",import:()=>import("./BJDEcpUG.js")},{pattern:new URLPattern({pathname:"/leavitt-company-select"}),page:"leavitt-company-select",import:()=>import("./C7l4jbyg.js")},{pattern:new URLPattern({pathname:"/leavitt-file-explorer"}),page:"leavitt-file-explorer",import:()=>import("./eOiO0jjJ.js")},{pattern:new URLPattern({pathname:"/titanium-date-range-selector"}),page:"titanium-date-range-selector",import:()=>import("./4YborGto.js")},{pattern:new URLPattern({pathname:"/leavitt-person-select"}),page:"leavitt-person-select",import:()=>import("./DNEsAyaD.js")},{pattern:new URLPattern({pathname:"/leavitt-person-company-select"}),page:"leavitt-person-company-select",import:()=>import("./CHPqmo3G.js")},{pattern:new URLPattern({pathname:"/leavitt-person-group-select"}),page:"leavitt-person-group-select",import:()=>import("./DGh2PDdz.js")},{pattern:new URLPattern({pathname:"/leavitt-email-history-viewer"}),page:"leavitt-email-history-viewer",import:()=>import("./2oDaal2H.js")},{pattern:new URLPattern({pathname:"/leavitt-error-page"}),page:"leavitt-error-page",import:()=>import("./C7pD_Exz.js")},{pattern:new URLPattern({pathname:"/profile-picture"}),page:"profile-picture",import:()=>import("./CPohnWmc.js")},{pattern:new URLPattern({pathname:"/profile-picture-menu"}),page:"profile-picture-menu",import:()=>import("./BTG6QvPT.js")},{pattern:new URLPattern({pathname:"/titanium-data-table-core"}),page:"titanium-data-table-core",import:()=>import("./CJIHwluM.js")},{pattern:new URLPattern({pathname:"/titanium-drawer"}),page:"titanium-drawer",import:()=>import("./B6tRHJMV.js")},{pattern:new URLPattern({pathname:"/titanium-address-input"}),page:"titanium-address-input",import:()=>import("./CsNVcI5W.js")},{pattern:new URLPattern({pathname:"/titanium-icon-picker"}),page:"titanium-icon-picker",import:()=>import("./B9aaAcPn.js")},{pattern:new URLPattern({pathname:"/titanium-chip-multi-select"}),page:"titanium-chip-multi-select",import:()=>import("./CIOOptyW.js")},{pattern:new URLPattern({pathname:"/titanium-input-validator"}),page:"titanium-input-validator",import:()=>import("./JaUmfqIW.js")},{pattern:new URLPattern({pathname:"/titanium-promise-tracking"}),page:"titanium-promise-tracking",import:()=>import("./CDg_EUm3.js")},{pattern:new URLPattern({pathname:"/titanium-page-control"}),page:"titanium-page-control",import:()=>import("./D-4aWth-.js")},{pattern:new URLPattern({pathname:"/titanium-smart-attachment-input"}),page:"titanium-smart-attachment-input",import:()=>import("./BOnZyHlx.js")},{pattern:new URLPattern({pathname:"/titanium-date-input"}),page:"titanium-date-input",import:()=>import("./D9RgNBJL.js")},{pattern:new URLPattern({pathname:"/titanium-search-input"}),page:"titanium-search-input",import:()=>import("./BvH9SBYl.js")},{pattern:new URLPattern({pathname:"/titanium-toolbar"}),page:"titanium-toolbar",import:()=>import("./C9EOLtmQ.js")},{pattern:new URLPattern({pathname:"/titanium-styles"}),page:"titanium-styles",import:()=>import("./BXl57hMp.js")},{pattern:new URLPattern({pathname:"/titanium-snackbar"}),page:"titanium-snackbar",import:()=>import("./D1YDrku7.js")},{pattern:new URLPattern({pathname:"/titanium-chip"}),page:"titanium-chip",import:()=>import("./D6mH8KQd.js")},{pattern:new URLPattern({pathname:"/titanium-youtube-input"}),page:"titanium-youtube-input",import:()=>import("./DR-N4qp_.js")},{pattern:new URLPattern({pathname:"/titanium-show-hide"}),page:"titanium-show-hide",import:()=>import("./BgGcCXOK.js")},{pattern:new URLPattern({pathname:"/titanium-duration-input"}),page:"titanium-duration-input",import:()=>import("./GNvX8ja3.js")},{pattern:new URLPattern({pathname:"/titanium-profile-picture-stack"}),page:"titanium-profile-picture-stack",import:()=>import("./gCj_Mf8Z.js")},{pattern:new URLPattern({pathname:"/titanium-confirmation-dialog"}),page:"titanium-confirmation-dialog",import:()=>import("./DV5q__Xi.js")},{pattern:new URLPattern({pathname:"/"}),redirect:"/getting-started"}],this.#Bi=t=>{if(!t.canIntercept||t.hashChange||null!==t.downloadRequest)return;const e=new URL(t.destination.url);e.origin===location.origin&&t.intercept({handler:()=>this.#Ri(e)})},this.searchTextField=null}#Li;get page(){return this.#Li}set page(t){this.#Li=t}#Pi;get fatalErrorMessage(){return this.#Pi}set fatalErrorMessage(t){this.#Pi=t}#Mi;get fatalErrorHeading(){return this.#Mi}set fatalErrorHeading(t){this.#Mi=t}#Oi;get showSearch(){return this.#Oi}set showSearch(t){this.#Oi=t}#Ni;get drawer(){return this.#Ni}set drawer(t){this.#Ni=t}#Qt;#Ii;#Bi;async#Ri(t){const{pathname:e}=t;"flyover"===this.drawer?.mode&&this.drawer.close();for(const t of this.#Ii){const i=t.pattern.exec({pathname:e});if(!i)continue;const r=i.pathname.groups;if("redirect"in t){const e="function"==typeof t.redirect?t.redirect(r):t.redirect;return void window.navigation.navigate(e,{history:"replace"})}return void await this.#ji(t.page,t.import)}this.#Ui()}async connectedCallback(){super.connectedCallback();try{an.initialize()}catch(t){return console.error(t),this.fatalErrorMessage=t instanceof Error?t.message:String(t),void this.#ji("error")}}get themePreference(){return localStorage.getItem("theme-preference")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}set themePreference(t){localStorage.setItem("theme-preference",t),this.#Di()}get prefersCollapsedMenu(){return JSON.parse(localStorage.getItem("prefers-collapsed-menu")||"false")}set prefersCollapsedMenu(t){localStorage.setItem("prefers-collapsed-menu",t.toString())}#Di(){document.firstElementChild?.setAttribute("data-theme",this.themePreference),wt.dispatch("theme-preference","change",this.themePreference)}async firstUpdated(){this.#Di(),this.searchTextField=this.shadowRoot?.querySelector("titanium-filled-search-input")??null,window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:t})=>{this.themePreference=t?"dark":"light",this.#Di()}),this.#Qt=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect.width;t<600?(this.drawer.mode="flyover",this.mainMenuPosition="drawer"):t>=600&&t<920?(this.drawer.mode="inline",this.drawer.open(),this.mainMenuPosition="slim"):(this.drawer.mode="inline",this.drawer.open(),this.mainMenuPosition=this.prefersCollapsedMenu?"slim":"full")}}),this.#Qt.observe(this),this.addEventListener(on.eventName,t=>{this.fatalErrorMessage=t.detail,this.#ji("error")}),"navigation"in window?(window.navigation.addEventListener("navigate",this.#Bi),this.#Ri(new URL(location.href))):this.#Ui("This app requires a browser with Navigation API support.","Unsupported browser")}async disconnectedCallback(){await super.disconnectedCallback(),this.#Qt?.disconnect(),"navigation"in window&&window.navigation.removeEventListener("navigate",this.#Bi)}#Fi(t){return this.shadowRoot?.querySelector(`${t}-demo`)??this.shadowRoot?.querySelector(t)??null}async#ji(t,e){this.page=t;try{const i=e?.();i&&this.dispatchEvent(new xa(i)),await i,await this.updateComplete,this.showSearch=!!this.#Fi(t)?.searchController}catch(t){console.warn(t),this.#Ui(t instanceof Error?t.message:String(t))}}#Ui(t,e){this.fatalErrorHeading=e||null,this.fatalErrorMessage=t||null,this.#ji("error")}static{this.styles=[sn,Os,Ps,a`
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
    `]}render(){return G`<titanium-toolbar>
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
          <profile-picture-menu size="36" .userManager=${an}></profile-picture-menu>
        </page-actions>
      </titanium-toolbar>

      <titanium-drawer main-menu>
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
            <profile-picture-menu size="36" .userManager=${an}></profile-picture-menu>
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

          <md-list-item ?selected=${"titanium-address-input"===this.page} href="/titanium-address-input" type="link">
            <md-icon slot="start">location_on</md-icon> <span>Address input</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-chip"===this.page} href="/titanium-chip" type="link">
            <md-icon slot="start">label</md-icon> <span>Chip</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-chip-multi-select"===this.page} href="/titanium-chip-multi-select" type="link">
            <md-icon slot="start">checklist</md-icon> <span>Chip multi select</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-confirmation-dialog"===this.page} href="/titanium-confirmation-dialog" type="link">
            <md-icon slot="start">check_circle</md-icon> <span>Confirmation dialog</span>
          </md-list-item>

          <md-list-item ?selected=${"titanium-data-table-core"===this.page} href="/titanium-data-table-core" type="link">
            <md-icon slot="start">table_rows</md-icon> <span>Data table core</span>
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

          <md-list-item ?selected=${"titanium-promise-tracking"===this.page} href="/titanium-promise-tracking" type="link">
            <md-icon slot="start">hourglass_top</md-icon> <span>Promise tracking</span>
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
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-email-history-viewer"===this.page} href="/leavitt-email-history-viewer" type="link">
            <md-icon slot="start">mail</md-icon> <span>Email history viewer</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-error-page"===this.page} href="/leavitt-error-page" type="link">
            <md-icon slot="start">error_outline</md-icon> <span>Error page</span>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-file-explorer"===this.page} href="/leavitt-file-explorer" type="link">
            <md-icon slot="start">folder_open</md-icon> <span>File explorer</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-person-company-select"===this.page} href="/leavitt-person-company-select" type="link">
            <md-icon slot="start">badge</md-icon> <span>Person company select</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-person-group-select"===this.page} href="/leavitt-person-group-select" type="link">
            <md-icon slot="start">diversity_3</md-icon> <span>Person group select</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${"leavitt-person-select"===this.page} href="/leavitt-person-select" type="link">
            <md-icon slot="start">person_search</md-icon> <span>Person select</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${"profile-picture"===this.page} href="/profile-picture" type="link">
            <md-icon slot="start">account_circle</md-icon> <span>Profile picture</span>
          </md-list-item>

          <md-list-item ?selected=${"profile-picture-menu"===this.page} href="/profile-picture-menu" type="link">
            <md-icon slot="start">account_box</md-icon> <span>Profile picture menu</span>
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
        ${"getting-started"===this.page?G`<getting-started></getting-started>`:H}

        <!-- Stories -->
        ${"available-cdn-icons"===this.page?G`<available-cdn-icons-demo large></available-cdn-icons-demo>`:H}
        ${"titanium-date-range-selector"===this.page?G`<titanium-date-range-selector-demo large></titanium-date-range-selector-demo>`:H}
        ${"leavitt-person-select"===this.page?G`<leavitt-person-select-demo large></leavitt-person-select-demo>`:H}
        ${"leavitt-company-select"===this.page?G`<leavitt-company-select-demo large></leavitt-company-select-demo>`:H}
        ${"leavitt-email-history-viewer"===this.page?G`<leavitt-email-history-viewer-demo large></leavitt-email-history-viewer-demo>`:H}
        ${"leavitt-file-explorer"===this.page?G`<leavitt-file-explorer-demo large></leavitt-file-explorer-demo>`:H}
        ${"leavitt-error-page"===this.page?G`<leavitt-error-page-demo large></leavitt-error-page-demo>`:H}
        ${"leavitt-person-company-select"===this.page?G`<leavitt-person-company-select-demo large></leavitt-person-company-select-demo>`:H}
        ${"leavitt-person-group-select"===this.page?G`<leavitt-person-group-select-demo large></leavitt-person-group-select-demo>`:H}
        ${"titanium-drawer"===this.page?G`<titanium-drawer-demo></titanium-drawer-demo>`:H}
        ${"profile-picture"===this.page?G`<profile-picture-demo></profile-picture-demo>`:H}
        ${"profile-picture-menu"===this.page?G`<profile-picture-menu-demo large></profile-picture-menu-demo>`:H}
        ${"titanium-input-validator"===this.page?G`<titanium-input-validator-demo large></titanium-input-validator-demo>`:H}
        ${"titanium-data-table-core"===this.page?G`<titanium-data-table-core-demo large></titanium-data-table-core-demo>`:H}
        ${"titanium-promise-tracking"===this.page?G`<titanium-promise-tracking-demo large></titanium-promise-tracking-demo>`:H}
        ${"titanium-address-input"===this.page?G`<titanium-address-input-demo large></titanium-address-input-demo>`:H}
        ${"titanium-icon-picker"===this.page?G`<titanium-icon-picker-demo large></titanium-icon-picker-demo>`:H}
        ${"titanium-page-control"===this.page?G`<titanium-page-control-demo large></titanium-page-control-demo>`:H}
        ${"titanium-date-input"===this.page?G`<titanium-date-input-demo large></titanium-date-input-demo>`:H}
        ${"titanium-search-input"===this.page?G`<titanium-search-input-demo large></titanium-search-input-demo>`:H}
        ${"titanium-toolbar"===this.page?G`<titanium-toolbar-demo large></titanium-toolbar-demo>`:H}
        ${"titanium-chip-multi-select"===this.page?G`<titanium-chip-multi-select-demo large></titanium-chip-multi-select-demo>`:H}
        ${"titanium-styles"===this.page?G`<titanium-styles-demo large></titanium-styles-demo>`:H}
        ${"titanium-snackbar"===this.page?G`<titanium-snackbar-demo large></titanium-snackbar-demo>`:H}
        ${"titanium-smart-attachment-input"===this.page?G`<titanium-smart-attachment-input-demo large></titanium-smart-attachment-input-demo>`:H}
        ${"titanium-chip"===this.page?G`<titanium-chip-demo large></titanium-chip-demo>`:H}
        ${"titanium-youtube-input"===this.page?G`<titanium-youtube-input-demo large></titanium-youtube-input-demo>`:H}
        ${"titanium-show-hide"===this.page?G`<titanium-show-hide-demo large></titanium-show-hide-demo>`:H}
        ${"titanium-duration-input"===this.page?G`<titanium-duration-input-demo large></titanium-duration-input-demo>`:H}
        ${"titanium-confirmation-dialog"===this.page?G`<titanium-confirmation-dialog-demo large></titanium-confirmation-dialog-demo>`:H}
        ${"titanium-profile-picture-stack"===this.page?G`<titanium-profile-picture-stack-demo large></titanium-profile-picture-stack-demo>`:H}

        <leavitt-error-page
          ?hidden=${"error"!==this.page}
          .message=${this.fatalErrorMessage||"It looks like that page doesn't exist."}
          .heading=${this.fatalErrorHeading||"Hmm..."}
        >
          ${"Sorry"===this.fatalErrorHeading?G`<md-icon slot="icon">lock</md-icon>`:H}
        </leavitt-error-page>
      </main-content>

      <report-a-problem-dialog .userManager=${an}></report-a-problem-dialog>
      <provide-feedback-dialog .userManager=${an}></provide-feedback-dialog>

      <titanium-snackbar-stack .eventListenerTarget=${document}></titanium-snackbar-stack> `}};t([mt()],ln.prototype,"page",null),t([mt()],ln.prototype,"fatalErrorMessage",null),t([mt()],ln.prototype,"fatalErrorHeading",null),t([mt()],ln.prototype,"showSearch",null),t([La({context:Na}),ut({type:String,reflect:!0,attribute:"main-menu-position"})],ln.prototype,"mainMenuPosition",void 0),t([vt("titanium-drawer")],ln.prototype,"drawer",null),t([mt()],ln.prototype,"themePreference",null),t([mt()],ln.prototype,"prefersCollapsedMenu",null),t([La({context:nn}),mt()],ln.prototype,"searchTextField",void 0),ln=t([ct("my-app")],ln);export{Se as $,H as A,kt as B,q as C,$t as D,xt as E,Oa as F,Oi as G,nn as H,ci as I,di as J,fe as K,Aa as L,Bi as M,Mt as N,$e as O,xa as P,Ae as Q,be as R,Ei as S,_t as T,an as U,Be as V,xi as W,yi as X,St as Y,ze as Z,t as _,Is as a,ye as a0,xe as a1,bt as a2,Qt as a3,te as a4,Rt as a5,ea as a6,da as a7,at as a8,Oe as a9,nr as aa,er as ab,Ce as ac,sr as ad,tr as ae,Ui as af,Zi as ag,ft as ah,Yi as ai,Qi as aj,Ki as ak,ce as al,me as am,Ts as an,Ps as ao,Fe as ap,ki as aq,bi as ar,Dr as as,a as b,G as c,Ii as d,vt as e,Ms as f,Rs as g,Cs as h,lt as i,Bs as j,ba as k,ga as l,Ri as m,ut as n,Ls as o,Os as p,Es as q,mt as r,ue as s,ct as t,yt as u,$s as v,zs as w,Ss as x,ua as y,zt as z};
