var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function r(t,e,i,r){var o,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,i,n):o(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new WeakMap;let c=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}};const d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new c(i,t,a)},h=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:u,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:f,getOwnPropertySymbols:v,getPrototypeOf:g}=Object,b=globalThis,y=b.trustedTypes,x=y?y.emptyScript:"",w=b.reactiveElementPolyfillSupport,_=(t,e)=>t,k={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!u(t,e),A={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&p(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const s=r?.call(this);o.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...f(t),...v(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:k).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=r,this[r]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[_("elementProperties")]=new Map,S[_("finalized")]=new Map,w?.({ReactiveElement:S}),(b.reactiveElementVersions??=[]).push("2.0.4");const z=globalThis,T=z.trustedTypes,C=T?T.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+M,P=`<${I}>`,R=document,O=()=>R.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,j=t=>N(t)||"function"==typeof t?.[Symbol.iterator],L="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,U=/>/g,H=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,V=/"/g,G=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),X=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),K=new WeakMap,J=R.createTreeWalker(R,129);function Q(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,r=[];let o,s=2===e?"<svg>":3===e?"<math>":"",n=D;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===D?"!--"===l[1]?n=F:void 0!==l[1]?n=U:void 0!==l[2]?(G.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=H):void 0!==l[3]&&(n=H):n===H?">"===l[0]?(n=o??D,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?H:'"'===l[3]?V:q):n===V||n===q?n=H:n===F||n===U?n=D:(n=H,o=void 0);const h=n===H&&t[e+1].startsWith("/>")?" ":"";s+=n===D?i+P:c>=0?(r.push(a),i.slice(0,c)+E+i.slice(c)+M+h):i+M+(-2===c?e:h)}return[Q(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class tt{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const n=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=tt.createElement(l,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=c[s++],i=r.getAttribute(t).split(M),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?st:"?"===n[1]?nt:"@"===n[1]?at:ot}),r.removeAttribute(t)}else t.startsWith(M)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(G.test(r.tagName)){const t=r.textContent.split(M),e=t.length-1;if(e>0){r.textContent=T?T.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],O()),J.nextNode(),a.push({type:2,index:++o});r.append(t[e],O())}}}else if(8===r.nodeType)if(r.data===I)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(M,t+1));)a.push({type:7,index:o}),t+=M.length-1}o++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function et(t,e,i=t,r){if(e===X)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const s=B(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=et(t,o._$AS(t,e.values),o,r)),e}let it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??R).importNode(e,!0);J.currentNode=r;let o=J.nextNode(),s=0,n=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new rt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new lt(o,this,t)),this._$AV.push(e),a=i[++n]}s!==a?.index&&(o=J.nextNode(),s++)}return J.currentNode=R,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),B(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==X&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):j(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=tt.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new it(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new tt(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new rt(this.O(O()),this.O(O()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(void 0===o)t=et(this,t,e,0),s=!B(t)||t!==this._$AH&&t!==X,s&&(this._$AH=t);else{const r=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=et(this,r[i+n],e,n),a===X&&(a=this._$AH[n]),s||=!B(a)||a!==this._$AH[n],a===Y?t=Y:t!==Y&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}s&&!r&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class nt extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class at extends ot{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??Y)===X)return;const i=this._$AH,r=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Y&&(i===Y||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const ct={M:E,P:M,A:I,C:1,L:Z,R:it,D:j,V:et,I:rt,H:ot,N:nt,U:at,B:st,F:lt},dt=z.litHtmlPolyfillSupport;dt?.(tt,rt),(z.litHtmlVersions??=[]).push("3.2.1");const ht=(t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new rt(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o};let ut=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};ut._$litElement$=!0,ut.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ut});const pt=globalThis.litElementPolyfillSupport;pt?.({LitElement:ut}),(globalThis.litElementVersions??=[]).push("4.1.1");const mt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ft={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$},vt=(t=ft,e,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function gt(t){return(e,i)=>"object"==typeof i?vt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function bt(t){return gt({...t,state:!0,attribute:!1})}const yt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function xt(t,e){return(i,r,o)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof r?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return yt(i,r,{get(){let i=t.call(this);return void 0===i&&(i=s(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return yt(i,r,{get(){return s(this)}})}}let wt;function _t(t){return(e,i)=>yt(e,i,{get(){return(this.renderRoot??(wt??=document.createDocumentFragment())).querySelectorAll(t)}})}function kt(t){return(e,i)=>{const{slot:r,selector:o}=t??{},s="slot"+(r?`[name=${r}]`:":not([name])");return yt(e,i,{get(){const e=this.renderRoot?.querySelector(s),i=e?.assignedElements(t)??[];return void 0===o?i:i.filter((t=>t.matches(o)))}})}}class $t extends ut{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return W`<span class="shadow"></span>`}}const At=d`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;let St=class extends $t{};St.styles=[At],St=r([mt("md-elevation")],St);let zt=class extends ut{#t;get shadow(){return this.#t}set shadow(t){this.#t=t}static{this.styles=d`
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
  `}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.#e.bind(this),!1)}disconnectedCallback(){document.removeEventListener("scroll",this.#e,!1),super.disconnectedCallback()}#e(){this.#i()}#i(){const t=window.innerHeight||(document.documentElement||document.body).clientHeight,e=this.#r(),i=window.scrollY||(document.documentElement||document.body.parentNode||document.body).scrollTop,r=e-t,o=Math.floor(i/r*100);this.shadow=0!==(o||0)}#r(){const t=document;return Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight)}render(){return W` <md-elevation></md-elevation><slot></slot>`}};r([gt({type:Boolean,reflect:!0})],zt.prototype,"shadow",null),zt=r([mt("titanium-toolbar")],zt);class Tt extends Error{}function Ct(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(t){return decodeURIComponent(atob(t).replace(/(.)/g,((t,e)=>{let i=e.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i})))}(e)}catch(t){return atob(e)}}Tt.prototype.name="InvalidTokenError";const Et=(t=>{const e=[new RegExp("^https://10[\\.]"),new RegExp("^http://10[\\.]"),new RegExp("^http://192.168[\\.]"),new RegExp("^http://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])"),new RegExp("^https://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])")];return!t||t.indexOf("dev")>-1||e.some((e=>null!==e.exec(t)))})(window.location.origin),Mt=t=>class extends t{static get properties(){return{isLoading:{type:Boolean}}}#o=0;async loadWhile(t){this.isLoading=!0,this.#o++;try{await t}finally{this.#o--,0===this.#o&&(this.isLoading=!1)}}};function It(t){return new Promise((function(e){setTimeout(e,t)}))}function Pt(t,e=15,i=10){return t.length>e+i?t.substr(0,e)+"..."+t.substr(t.length-i,t.length):t}class Rt extends Event{static{this.eventName="um-updated"}constructor(){super(Rt.eventName,{bubbles:!1,composed:!0})}}let Ot=null;const Bt=()=>{if(Ot)return Ot;throw"GetUserManagerInstance requested before an instance was created. Did you forget to add the <user-manager> element to your project?"};let Nt=class extends ut{#s=[];get roles(){return this.#s}set roles(t){this.#s=t}#n;get fullname(){return this.#n}set fullname(t){this.#n=t}#a;get username(){return this.#a}set username(t){this.#a=t}#l;get firstName(){return this.#l}set firstName(t){this.#l=t}#c;get lastName(){return this.#c}set lastName(t){this.#c=t}#d;get company(){return this.#d}set company(t){this.#d=t}#h;get companyId(){return this.#h}set companyId(t){this.#h=t}#u;get profilePictureFileName(){return this.#u}set profilePictureFileName(t){this.#u=t}#p;get email(){return this.#p}set email(t){this.#p=t}#m=0;get personId(){return this.#m}set personId(t){this.#m=t}#f=0;get refreshTokenId(){return this.#f}set refreshTokenId(t){this.#f=t}#v="https://signin.leavitt.com/";get redirectUrl(){return this.#v}set redirectUrl(t){this.#v=t}#g="https://devsignin.leavitt.com/";get redirectDevUrl(){return this.#g}set redirectDevUrl(t){this.#g=t}#b=Et?"https://devoauth2.leavitt.com/token":"https://oauth2.leavitt.com/token";get tokenUri(){return this.#b}set tokenUri(t){this.#b=t}#y="https://oauth2.leavitt.com/";get issuerIdentifier(){return this.#y}set issuerIdentifier(t){this.#y=t}#x;get disableAutoload(){return this.#x}set disableAutoload(t){this.#x=t}#w;get isActiveEmployee(){return this.#w}set isActiveEmployee(t){this.#w=t}#_;constructor(){super(),Ot?console.warn("More than one <user-manager> element has been used in this web application, consider removing one."):Ot=this}async firstUpdated(){if(!this.disableAutoload||this.#k("refreshToken"))try{await this.authenticateAsync()}catch{}console.log("UserManager Ready.")}async isRefreshTokenValid(t){try{return await this.#$(t,this.tokenUri),!0}catch(t){}return!1}#A(t){const e=`${Et?this.redirectDevUrl:this.redirectUrl}?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#S(t){const e=`${Et?this.redirectDevUrl:this.redirectUrl}sign-out/?continue=${encodeURIComponent(t)}`;document.location&&(document.location.href=e)}#z(){const t=[];if(window.location.hash){let e=window.location.hash.substring(1);e=decodeURIComponent(e);const i=e.split("&");for(const e in i)if(Object.hasOwn(i,e)){const r=i[e].split("=");r.length>1&&t.push({key:r[0],value:decodeURIComponent(r[1])})}}return t}#T(t){try{return JSON.parse(window.localStorage.getItem(t)||"[]")}catch(t){return console.warn(`Failed to parse scopes in local storage. ${t}`),[]}}#C(){document.location&&document.location.hash&&document.location.hash.indexOf("refreshToken")>-1&&(document.location.hash="")}#k(t){const e=this.#z().filter((e=>e.key===t));return 0===e.length?null:e[0].value}#E(t){if(!t)return null;let e;try{e=function(t,e){if("string"!=typeof t)throw new Tt("Invalid token specified: must be a string");e||(e={});const i=!0===e.header?0:1,r=t.split(".")[i];if("string"!=typeof r)throw new Tt(`Invalid token specified: missing part #${i+1}`);let o;try{o=Ct(r)}catch(t){throw new Tt(`Invalid token specified: invalid base64 for part #${i+1} (${t.message})`)}try{return JSON.parse(o)}catch(t){throw new Tt(`Invalid token specified: invalid json for part #${i+1} (${t.message})`)}}(t)}catch(t){return null}return e&&(e.exp=new Date(0).setUTCSeconds(e.exp)),e}#M(t){const e=new Date;return e.setSeconds(e.getSeconds()+30),t.iss===this.issuerIdentifier&&!(t.exp<=e)}#I(){return window.localStorage.getItem("LG-AUTH-AT")||""}#P(t){window.localStorage.setItem("LG-AUTH-AT",t)}#R(){return window.localStorage.getItem("LG-AUTH-RT")||""}#O(t){window.localStorage.setItem("LG-AUTH-RT",t||"")}async#$(t,e){if(!window.navigator.onLine)return Promise.reject("Computer not connected. Make sure your computer is connected to the internet.");const i=this.#T("LgClaimScopes"),r={grant_type:"refresh_token",refresh_token:t};i.length>0&&(r.claim_scopes=i);const o=await fetch(e,{method:"POST",body:JSON.stringify(r),headers:[["Content-Type","application/json"],["Accept","application/json"]]});let s;try{s=await o.json()}catch(t){return Promise.reject("Get Auth Token: The server sent back invalid JSON.")}return 200===o.status&&s.access_token?Promise.resolve(s.access_token):s.error?"unauthorized_client"===s.error?Promise.reject("Not authenticated"):Promise.reject(s.error):Promise.reject("Not authenticated")}#B(t){this.personId=Number(t.nameid),this.refreshTokenId=Number(t.RefreshTokenId),this.fullname=t.unique_name,this.username=t.username,this.firstName=t.given_name,this.lastName=t.family_name,this.email=t.email,this.isActiveEmployee="True"===t.IsActiveEmployee,this.roles="string"==typeof t.role?[t.role]:t.role??[],this.company=t.Company??"",this.companyId=t.CompanyId?Number(t.CompanyId):0,this.profilePictureFileName=t.PicCdnFileName||null,this.dispatchEvent(new Rt)}async#N(){const t=this.#k("refreshToken");let e=t?"":this.#I();const i=t||this.#R()||null;this.#C();const r=this.#E(e);if(r&&this.#M(r))return this.#P(e),this.#O(i),this.#B(r),Promise.resolve(r);if(null!=i){try{e=await this.#$(i,this.tokenUri)}catch(t){return Promise.reject(t)}const t=this.#E(e);if(t&&this.#M(t))return this.#P(e),this.#O(i),this.#B(t),Promise.resolve(t)}return Promise.reject("Not authenticated")}async getAccessTokenAsync(){return await this.authenticateAsync(),this.#I()}async isAuthenticatedAsync(){try{await this.#N()}catch(t){return!1}return!0}async authenticateAsync(){const t=this;return this.#_?new Promise(((e,i)=>{this.addEventListener("token",(function r(o){t.removeEventListener("token",r),o.detail.rejected&&i(o.detail.message),e(o.detail.accessToken)}))})):new Promise((async(e,i)=>{let r;try{this.#_=!0,r=await this.#N()}catch(t){if("Not authenticated"===t)return document.location&&this.#A(document.location.href),this.#_=!1,void this.dispatchEvent(new CustomEvent("token",{detail:{rejected:!0,message:t}}));this.#_=!1,i(t)}this.#_=!1,t.dispatchEvent(new CustomEvent("token",{detail:r})),e(r)}))}reset(){localStorage.removeItem("LG-AUTH-AT"),localStorage.removeItem("LG-AUTH-RT"),this.personId=0,this.refreshTokenId=0,this.username="",this.fullname="",this.company="",this.companyId=null,this.profilePictureFileName=null,this.firstName="",this.lastName="",this.email="",this.isActiveEmployee=!1,this.roles.forEach((t=>{window.dispatchEvent(new CustomEvent("um-role-removed",{detail:{role:t}}))})),this.roles=[],this.dispatchEvent(new Rt)}logout(){this.reset(),document.location&&this.#S(document.location.href)}};r([gt({type:Array})],Nt.prototype,"roles",null),r([gt({type:String})],Nt.prototype,"fullname",null),r([gt({type:String})],Nt.prototype,"username",null),r([gt({type:String})],Nt.prototype,"firstName",null),r([gt({type:String})],Nt.prototype,"lastName",null),r([gt({type:String})],Nt.prototype,"company",null),r([gt({type:Number})],Nt.prototype,"companyId",null),r([gt({type:String})],Nt.prototype,"profilePictureFileName",null),r([gt({type:String})],Nt.prototype,"email",null),r([gt({type:Number})],Nt.prototype,"personId",null),r([gt({type:Number})],Nt.prototype,"refreshTokenId",null),r([gt({type:String})],Nt.prototype,"redirectUrl",null),r([gt({type:String})],Nt.prototype,"redirectDevUrl",null),r([gt({type:String})],Nt.prototype,"tokenUri",null),r([gt({type:String})],Nt.prototype,"issuerIdentifier",null),r([gt({type:Boolean})],Nt.prototype,"disableAutoload",null),r([gt({type:Boolean})],Nt.prototype,"isActiveEmployee",null),Nt=r([mt("user-manager")],Nt);const jt=d`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`,Lt=Symbol("attachableController");let Dt;Dt=new MutationObserver((t=>{for(const e of t)e.target[Lt]?.hostConnected()}));class Ft{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){null===t?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[Lt]=this,Dt?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}const Ut=["focusin","focusout","pointerdown"];class Ht extends ut{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Ft(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[qt]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}t[qt]=!0}}onControlChange(t,e){for(const i of Ut)t?.removeEventListener(i,this),e?.addEventListener(i,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}r([gt({type:Boolean,reflect:!0})],Ht.prototype,"visible",void 0),r([gt({type:Boolean,reflect:!0})],Ht.prototype,"inward",void 0);const qt=Symbol("handledByFocusRing"),Vt=d`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;let Gt=class extends Ht{};Gt.styles=[Vt],Gt=r([mt("md-focus-ring")],Gt);const Wt=1,Xt=2,Yt=3,Kt=4,Jt=t=>(...e)=>({_$litDirective$:t,values:e});let Qt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const Zt=Jt(class extends Qt{constructor(t){if(super(t),t.type!==Wt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return X}}),te={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};var ee;!function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(ee||(ee={}));const ie=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],re=window.matchMedia("(forced-colors: active)");class oe extends ut{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=ee.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Ft(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return W`<div class="surface ${Zt(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==ee.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state!==ee.HOLDING)return this.state===ee.TOUCH_DELAY?(this.state=ee.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=ee.WAITING_FOR_CLICK}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t))return this.state=ee.WAITING_FOR_CLICK,void this.startPressAnimation(t);this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=ee.TOUCH_DELAY,await new Promise((t=>{setTimeout(t,150)})),this.state===ee.TOUCH_DELAY&&(this.state=ee.HOLDING,this.startPressAnimation(t)))}}handleClick(){this.disabled||(this.state!==ee.WAITING_FOR_CLICK?this.state===ee.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),i=Math.max(t,e),r=Math.max(.35*i,75),o=Math.floor(.2*i),s=Math.sqrt(e**2+t**2)+10;this.initialSize=o,this.rippleScale=""+(s+r)/o,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:i}=window,{left:r,top:o}=this.getBoundingClientRect(),s=e+r,n=i+o,{pageX:a,pageY:l}=t;return{x:a-s,y:l-n}}getTranslationCoordinates(t){const{height:e,width:i}=this.getBoundingClientRect(),r={x:(i-this.initialSize)/2,y:(e-this.initialSize)/2};let o;return o=t instanceof PointerEvent?this.getNormalizedPointerEventCoords(t):{x:i/2,y:e/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:r}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:i}=this.getTranslationCoordinates(t),r=`${e.x}px, ${e.y}px`,o=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:te.STANDARD,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=ee.INACTIVE;const t=this.growAnimation;let e=1/0;"number"==typeof t?.currentTime?e=t.currentTime:t?.currentTime&&(e=t.currentTime.to("ms").value),e>=225?this.pressed=!1:(await new Promise((t=>{setTimeout(t,225-e)})),this.growAnimation===t&&(this.pressed=!1))}shouldReactToEvent(t){if(this.disabled||!t.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if("pointerenter"===t.type||"pointerleave"===t.type)return!this.isTouch(t);const e=1===t.buttons;return this.isTouch(t)||e}inBounds({x:t,y:e}){const{top:i,left:r,bottom:o,right:s}=this.getBoundingClientRect();return t>=r&&t<=s&&e>=i&&e<=o}isTouch({pointerType:t}){return"touch"===t}async handleEvent(t){if(!re?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t)}}onControlChange(t,e){for(const i of ie)t?.removeEventListener(i,this),e?.addEventListener(i,this)}}r([gt({type:Boolean,reflect:!0})],oe.prototype,"disabled",void 0),r([bt()],oe.prototype,"hovered",void 0),r([bt()],oe.prototype,"pressed",void 0),r([xt(".surface")],oe.prototype,"mdRoot",void 0);const se=d`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;let ne=class extends oe{};ne.styles=[se],ne=r([mt("md-ripple")],ne);const ae=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],le=ae.map(de);function ce(t){return le.includes(t)}function de(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}const he=Symbol("privateIgnoreAttributeChangesFor");function ue(t){var e;class i extends t{constructor(){super(...arguments),this[e]=new Set}attributeChangedCallback(t,e,i){if(!ce(t))return void super.attributeChangedCallback(t,e,i);if(this[he].has(t))return;this[he].add(t),this.removeAttribute(t),this[he].delete(t);const r=me(t);null===i?delete this.dataset[r]:this.dataset[r]=i,this.requestUpdate(me(t),e)}getAttribute(t){return ce(t)?super.getAttribute(pe(t)):super.getAttribute(t)}removeAttribute(t){super.removeAttribute(t),ce(t)&&(super.removeAttribute(pe(t)),this.requestUpdate())}}return e=he,function(t){for(const e of ae){const i=de(e),r=pe(i),o=me(i);t.createProperty(e,{attribute:i,noAccessor:!0}),t.createProperty(Symbol(r),{attribute:r,noAccessor:!0}),Object.defineProperty(t.prototype,e,{configurable:!0,enumerable:!0,get(){return this.dataset[o]??null},set(t){const i=this.dataset[o]??null;t!==i&&(null===t?delete this.dataset[o]:this.dataset[o]=t,this.requestUpdate(e,i))}})}}(i),i}function pe(t){return`data-${t}`}function me(t){return t.replace(/-\w/,(t=>t[1].toUpperCase()))}const fe=Symbol("internals"),ve=Symbol("privateInternals");function ge(t){return class extends t{get[fe](){return this[ve]||(this[ve]=this.attachInternals()),this[ve]}}}function be(t){t.addInitializer((t=>{const e=t;e.addEventListener("click",(async t=>{const{type:i,[fe]:r}=e,{form:o}=r;o&&"button"!==i&&(await new Promise((t=>{setTimeout(t)})),t.defaultPrevented||("reset"!==i?(o.addEventListener("submit",(t=>{Object.defineProperty(t,"submitter",{configurable:!0,enumerable:!0,get:()=>e})}),{capture:!0,once:!0}),r.setFormValue(e.value),o.requestSubmit()):o.reset()))}))}))}function ye(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function xe(t){return t.currentTarget===t.target&&(t.composedPath()[0]===t.target&&(!t.target.disabled&&!function(t){const e=we;e&&(t.preventDefault(),t.stopImmediatePropagation());return async function(){we=!0,await null,we=!1}(),e}(t)))}let we=!1;const _e=ue(ge(ut));class ke extends _e{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[fe].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const t=!this.href&&(this.disabled||this.softDisabled),e=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return W`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${i}
        ?disabled="${t}"></md-ripple>
      ${e}
    `}renderButton(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return W`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||Y}
      aria-label="${t||Y}"
      aria-haspopup="${e||Y}"
      aria-expanded="${i||Y}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return W`<a
      id="link"
      class="button"
      aria-label="${t||Y}"
      aria-haspopup="${e||Y}"
      aria-expanded="${i||Y}"
      href=${this.href}
      target=${this.target||Y}
      >${this.renderContent()}
    </a>`}renderContent(){const t=W`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return W`
      <span class="touch"></span>
      ${this.trailingIcon?Y:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:Y}
    `}handleClick(t){if(!this.href&&this.softDisabled)return t.stopImmediatePropagation(),void t.preventDefault();xe(t)&&this.buttonElement&&(this.focus(),ye(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}be(ke),ke.formAssociated=!0,ke.shadowRootOptions={mode:"open",delegatesFocus:!0},r([gt({type:Boolean,reflect:!0})],ke.prototype,"disabled",void 0),r([gt({type:Boolean,attribute:"soft-disabled",reflect:!0})],ke.prototype,"softDisabled",void 0),r([gt()],ke.prototype,"href",void 0),r([gt()],ke.prototype,"target",void 0),r([gt({type:Boolean,attribute:"trailing-icon",reflect:!0})],ke.prototype,"trailingIcon",void 0),r([gt({type:Boolean,attribute:"has-icon",reflect:!0})],ke.prototype,"hasIcon",void 0),r([gt()],ke.prototype,"type",void 0),r([gt({reflect:!0})],ke.prototype,"value",void 0),r([xt(".button")],ke.prototype,"buttonElement",void 0),r([kt({slot:"icon",flatten:!0})],ke.prototype,"assignedIcons",void 0);class $e extends ke{}const Ae=d`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;let Se=class extends $e{};Se.styles=[jt,Ae],Se=r([mt("md-text-button")],Se);let ze=class extends ut{#j;#L;get open(){return this.#L}set open(t){this.#L=t}#D;get noAction(){return this.#D}set noAction(t){this.#D=t}#F;get actionText(){return this.#F}set actionText(t){this.#F=t}#U;get message(){return this.#U}set message(t){this.#U=t}constructor(){super(),this.popover="manual"}show(t,e){if(this.showPopover?this.showPopover():this.open=!0,this.message=e?.overrideTemplate?e?.overrideTemplate:t,this.noAction=e?.noAction??!1,this.actionText=e?.actionText??"Dismiss",e?.autoHide){const t="number"==typeof e?.autoHide?e?.autoHide:5e3;this.#H=window.setTimeout((()=>this.close("auto-close")),t)}return new Promise((t=>{this.#j=t}))}#H=0;close(t=""){clearTimeout(this.#H),this.hidePopover?this.hidePopover():this.open=!1,this.#j(t)}static{this.styles=[d`
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
    `]}render(){return W`
      <div main>${this.message}</div>
      <md-text-button ?hidden=${this.noAction} @click=${()=>this.close("dismiss")}>${this.actionText} </md-text-button>
    `}};r([gt({type:Boolean,reflect:!0})],ze.prototype,"open",null),r([gt({type:Boolean,reflect:!0})],ze.prototype,"noAction",null),r([gt({type:String})],ze.prototype,"actionText",null),r([gt({type:String})],ze.prototype,"message",null),ze=r([mt("titanium-simple-snackbar")],ze);let Te=class extends ut{#j;#L;get open(){return this.#L}set open(t){this.#L=t}#q=[];get httpErrors(){return this.#q}set httpErrors(t){this.#q=t}constructor(){super(),this.popover="manual"}show(t){return this.showPopover?this.showPopover():this.open=!0,this.httpErrors.push(t),new Promise((t=>{this.#j=t}))}addError(t){this.httpErrors=[...this.httpErrors,t]}#H=0;close(t=""){clearTimeout(this.#H),this.hidePopover?this.hidePopover():this.open=!1,this.#j(t)}static{this.styles=[...ze.styles,d`
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
    `]}#V(t){const e=t.split("\n"),i=e.length;return e.map(((t,e)=>e===i-1?t:W`${t}<br />`))}render(){return W`
      <div main>
        <http-error>
          <span action> ${this.httpErrors.length>1?W`${this.httpErrors.length} Network errors`:this.httpErrors?.[0]?.action} </span>
          <span status> ${this.httpErrors.length>1?W`${this.httpErrors?.[0]?.action}`:Y} ${this.httpErrors?.[0]?.statusCode} </span>
          <span error>${this.#V(this.httpErrors?.[0]?.message??"")}</span>
          ${this.httpErrors?.[0]?.detail?W` <code detail>${this.#V(this.httpErrors?.[0]?.detail)}</code>`:Y}
        </http-error>
      </div>
      <div actions>
        <md-text-button
          @click=${()=>{1===this.httpErrors.length?this.close("dismiss"):this.httpErrors=[...this.httpErrors.filter((t=>t!==this.httpErrors?.[0]))]}}
          >Dismiss
        </md-text-button>
        <md-text-button ?hidden=${1===this.httpErrors.length} @click=${()=>this.close("dismiss")}>Dismiss all (${this.httpErrors.length}) </md-text-button>
      </div>
    `}};r([gt({type:Boolean,reflect:!0})],Te.prototype,"open",null),r([gt({type:Array})],Te.prototype,"httpErrors",null),Te=r([mt("titanium-http-error-snackbar")],Te);class Ce extends Event{static{this.eventName="show-snackbar"}constructor(t,e){super(Ce.eventName,{bubbles:!0,composed:!0}),this.SnackbarMessage=t,this.SnackbarOptions=e}}let Ee=class extends ut{constructor(){super(...arguments),this.SnackbarStack=[]}#G;get eventListenerTarget(){return this.#G}set eventListenerTarget(t){this.#G=t}connectedCallback(){(this.eventListenerTarget||this.getRootNode()).addEventListener(Ce.eventName,(t=>{t.stopImmediatePropagation(),this.open(t.SnackbarMessage,t.SnackbarOptions)}))}async open(t,e){let i,r;if("string"==typeof t){const o="<titanium-simple-snackbar newest></titanium-simple-snackbar>";this.insertAdjacentHTML("beforeend",o);const s=this.querySelector("titanium-simple-snackbar[newest]");s.removeAttribute("newest"),e&&(e.close=t=>s.close(t)),this.SnackbarStack.unshift(s),i=s.show(t,e),r=s}else{let o=this.querySelector("titanium-http-error-snackbar");if(o)return void o.addError(t);{const e="<titanium-http-error-snackbar></titanium-http-error-snackbar>";this.insertAdjacentHTML("beforeend",e),o=this.querySelector("titanium-http-error-snackbar"),this.SnackbarStack.unshift(o),i=o.show(t)}e&&(e.close=t=>o.close(t)),r=o}return this.reposition(),await i,this.SnackbarStack.splice(this.SnackbarStack.indexOf(r),1),r.remove(),this.reposition(),i}dismissAll(){this.SnackbarStack.forEach((t=>t.close()))}async reposition(){let t=0;for(let e=0;e<this.SnackbarStack.length;e++){const i=this.SnackbarStack[e];await i.updateComplete,0===i.clientHeight&&i.close(),i.style.bottom=`${t}px`,t+=i.clientHeight+12}}};r([gt({type:Object})],Ee.prototype,"eventListenerTarget",null),Ee=r([mt("titanium-snackbar-stack")],Ee);class Me extends CustomEvent{static{this.eventType="pending-state"}constructor(t){super(Me.eventType,{bubbles:!0,composed:!0,detail:{promise:t}})}}const Ie="important",Pe=" !"+Ie,Re=Jt(class extends Qt{constructor(t){if(super(t),t.type!==Wt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(Pe);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?Ie:""):i[t]=r}}return X}}),Oe=ue(ut);class Be extends Oe{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:t}=this;return W`
      <div
        class="progress ${Zt(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${t||Y}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?Y:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}r([gt({type:Number})],Be.prototype,"value",void 0),r([gt({type:Number})],Be.prototype,"max",void 0),r([gt({type:Boolean})],Be.prototype,"indeterminate",void 0),r([gt({type:Boolean,attribute:"four-color"})],Be.prototype,"fourColor",void 0);class Ne extends Be{constructor(){super(...arguments),this.buffer=0}renderIndicator(){const t={transform:`scaleX(${100*(this.indeterminate?1:this.value/this.max)}%)`},e=this.buffer??0,i=e>0,r={transform:`scaleX(${100*(this.indeterminate||!i?1:e/this.max)}%)`},o=this.indeterminate||!i||e>=this.max||this.value>=this.max;return W`
      <div class="dots" ?hidden=${o}></div>
      <div class="inactive-track" style=${Re(r)}></div>
      <div class="bar primary-bar" style=${Re(t)}>
        <div class="bar-inner"></div>
      </div>
      <div class="bar secondary-bar">
        <div class="bar-inner"></div>
      </div>
    `}}r([gt({type:Number})],Ne.prototype,"buffer",void 0);const je=d`:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, var(--md-sys-shape-corner-none, 0px));border-radius:var(--_track-shape);display:flex;position:relative;min-width:80px;height:var(--_track-height);content-visibility:auto;contain:strict}.progress,.dots,.inactive-track,.bar,.bar-inner{position:absolute}.progress{direction:ltr;inset:0;border-radius:inherit;overflow:hidden;display:flex;align-items:center}.bar{animation:none;width:100%;height:var(--_active-indicator-height);transform-origin:left center;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.inactive-track{background:var(--_track-color);inset:0;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.dots{inset:0;animation:linear infinite 250ms;animation-name:buffering;background-color:var(--_track-color);background-repeat:repeat-x;-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");z-index:-1}.dots[hidden]{display:none}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .primary-bar{animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate .primary-bar>.bar-inner{animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate .secondary-bar{animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate .secondary-bar>.bar-inner{animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host(:dir(rtl)){transform:scale(-1)}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(var(--_track-height) / 2 * 5))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.6714%)}100%{transform:translateX(200.611%)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.6519%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.3862%)}100%{transform:translateX(160.278%)}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media(forced-colors: active){:host{outline:1px solid CanvasText}.bar-inner,.dots{background-color:CanvasText}}
`;let Le=class extends Ne{};Le.styles=[je],Le=r([mt("md-linear-progress")],Le);let De=class extends ut{#L;get open(){return this.#L}set open(t){this.#L=t}#W;#X;#Y=75;#K=350;#J;#Q=0;firstUpdated(){this.popover="manual",this.addEventListener("toggle",(t=>this.open="open"===t.newState)),window.addEventListener(Me.eventType,(async t=>{this.#Z(),this.#Q++;try{await t.detail.promise}finally{this.#Q--,0===this.#Q&&this.#tt()}}))}#Z(){window.clearTimeout(this.#W),window.clearTimeout(this.#X),this.#W=window.setTimeout((()=>{this.#J=performance.now(),this.showPopover?this.showPopover():this.open=!0,this.style.display="block"}),this.#Y)}#tt(){window.clearTimeout(this.#W);const t=performance.now()-this.#J,e=Math.max(this.#K-t,0);this.#X=window.setTimeout((()=>{this.hidePopover?this.hidePopover():this.open=!1,this.style.display="none"}),e)}static{this.styles=d`
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
  `}render(){return W` <md-linear-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-linear-progress> `}};r([bt()],De.prototype,"open",null),De=r([mt("titanium-full-page-loading-indicator")],De);let Fe=class extends ut{#U="We were unable to find the page you are looking for...";get message(){return this.#U}set message(t){this.#U=t}static{this.styles=d`
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
  `}render(){return W`
      <header>
        <h1>Oops!</h1>
        <h2>${this.message}</h2>
      </header>
      <img src="https://www.leavitt.com/images/alert.svg" />
    `}};r([gt({type:String})],Fe.prototype,"message",null),Fe=r([mt("titanium-error-page")],Fe);let Ue=class extends ut{#et;get notificationsStatus(){return this.#et}set notificationsStatus(t){this.#et=t}#it="service-worker.js";get scriptUrl(){return this.#it}set scriptUrl(t){this.#it=t}#rt;#ot=!1;async connectedCallback(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration();t&&(t.addEventListener("updatefound",(()=>{this.#rt=t.installing,this.#rt?.addEventListener("statechange",(()=>{"installed"===this.#rt?.state&&navigator.serviceWorker.controller&&this.#st()}))})),t.waiting&&navigator.serviceWorker.controller&&(this.#rt=t.waiting,this.#st())),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.#ot||(window.location.reload(),this.#ot=!0)}))}}async#st(){await this.dispatchEvent(new Ce("Site has been updated",{actionText:"RELOAD"})),this.#rt?.postMessage({type:"SKIP_WAITING"})}render(){return W``}};var He;r([gt({type:String})],Ue.prototype,"notificationsStatus",null),r([gt({type:String})],Ue.prototype,"scriptUrl",null),Ue=r([mt("titanium-service-worker-notifier")],Ue);let qe=class extends ut{static{He=this}#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}#at=!1;get fixed(){return this.#at}set fixed(t){this.#at=t}#lt=!1;get alwayShowContent(){return this.#lt}set alwayShowContent(t){this.#lt=t}#ct="ltr";get direction(){return this.#ct}set direction(t){this.#ct=t}#dt=!1;get hasHeader(){return this.#dt}set hasHeader(t){this.#dt=t}#ht=!1;get hasFooter(){return this.#ht}set hasFooter(t){this.#ht=t}async firstUpdated(){let t=0,e=0;this.addEventListener("touchstart",(e=>{t=e.changedTouches[0].screenX})),this.addEventListener("touchend",(i=>{e=i.changedTouches[0].screenX,t-e>50&&this.close()})),this.dialog?.addEventListener("click",(t=>{t.target instanceof Element&&"DIALOG"===t.target?.nodeName&&this.close()})),this.dialog?.addEventListener("cancel",(t=>{t.preventDefault(),this.close()})),window.addEventListener("popstate",(()=>this.dialog?.close()),!1),await He.animationsComplete(this.dialog),await He.animationsComplete(this.dialog),this.dialog?.removeAttribute("loading")}static async animationsComplete(t){return await Promise.allSettled(t.getAnimations().map((t=>t.finished)))}open(){this.dialog?.showModal(),this.dialog?.removeAttribute("hide"),this.setBodyOverflow("hidden")}async close(){this.dialog?.open&&(this.dialog?.setAttribute("hide",""),await He.animationsComplete(this.dialog),this.dialog?.close(),this.dialog?.removeAttribute("hide"))}closeQuick(){this.dialog?.open&&this.dialog?.close()}setBodyOverflow(t){const e=document.querySelector("html");e&&(e.style.overflow=t)}static{this.styles=d`
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
  `}render(){return W`<dialog
      loading
      @close=${()=>{this.setBodyOverflow("")}}
      part="dialog"
    >
      <header part="header"><slot name="header" @slotchange=${()=>this.hasHeader=this.headerElements.length>0}></slot></header>
      <main part="main"><slot></slot></main>
      <footer part="footer"><slot name="footer" @slotchange=${()=>this.hasFooter=this.footerElements.length>0}></slot></footer>
    </dialog>`}};r([xt("dialog")],qe.prototype,"dialog",null),r([gt({type:Boolean,reflect:!0})],qe.prototype,"fixed",null),r([gt({type:Boolean,reflect:!0,attribute:"always-show-content"})],qe.prototype,"alwayShowContent",null),r([gt({type:String,reflect:!0})],qe.prototype,"direction",null),r([gt({type:Boolean,reflect:!0,attribute:"has-header"})],qe.prototype,"hasHeader",null),r([gt({type:Boolean,reflect:!0,attribute:"has-footer"})],qe.prototype,"hasFooter",null),r([kt({slot:"header"})],qe.prototype,"headerElements",void 0),r([kt({slot:"footer"})],qe.prototype,"footerElements",void 0),qe=He=r([mt("titanium-drawer")],qe);let Ve=class extends ut{#ut;get fileName(){return this.#ut}set fileName(t){this.#ut=t}#pt="circle";get shape(){return this.#pt}set shape(t){this.#pt=t}#mt;get showRing(){return this.#mt}set showRing(t){this.#mt=t}#ft;get profilePictureLinkPersonId(){return this.#ft}set profilePictureLinkPersonId(t){this.#ft=t}#vt=120;get size(){return this.#vt}set size(t){this.#vt=t}#gt=!1;get useIntrinsicImageSize(){return this.#gt}set useIntrinsicImageSize(t){this.#gt=t}#bt=new Set([32,64,128,256,512,1024]);updated(t){(t.has("size")||t.has("useIntrinsicImageSize"))&&(this.style.width=this.useIntrinsicImageSize||!this.size?"":this.size+"px",this.style.height=this.useIntrinsicImageSize||!this.size?"":this.size+"px")}#yt(t){const e=[...this.#bt];for(let i=0;i<e.length;i++){const r=e[i];if(t<=r)return r}return 512}#xt(t,e){const i=this.#yt(e);return t?`https://cdn.leavitt.com/${t}-${i}.webp`:"https://cdn.leavitt.com/icon-user-profile-sq.svg"}static{this.styles=d`
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
  `}renderProfilePicture(){return W` <img loading="lazy" draggable="false" alt="User profile picture" src=${this.#xt(this.fileName,this.size)} /> `}render(){return this.profilePictureLinkPersonId?W`<a target="_blank" href="https://${Et?"dev":""}directory.leavitt.com/profile/${this.profilePictureLinkPersonId}"
        >${this.renderProfilePicture()}</a
      > `:this.renderProfilePicture()}};function Ge(t,e=Ze){const i=Ye(t,e);return i&&(i.tabIndex=0,i.focus()),i}function We(t,e=Ze){const i=Ke(t,e);return i&&(i.tabIndex=0,i.focus()),i}function Xe(t,e=Ze){for(let i=0;i<t.length;i++){const r=t[i];if(0===r.tabIndex&&e(r))return{item:r,index:i}}return null}function Ye(t,e=Ze){for(const i of t)if(e(i))return i;return null}function Ke(t,e=Ze){for(let i=t.length-1;i>=0;i--){const r=t[i];if(e(r))return r}return null}function Je(t,e,i=Ze,r=!0){if(e){const o=function(t,e,i=Ze,r=!0){for(let o=1;o<t.length;o++){const s=(o+e)%t.length;if(s<e&&!r)return null;const n=t[s];if(i(n))return n}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return Ge(t,i)}function Qe(t,e,i=Ze,r=!0){if(e){const o=function(t,e,i=Ze,r=!0){for(let o=1;o<t.length;o++){const s=(e-o+t.length)%t.length;if(s>e&&!r)return null;const n=t[s];if(i(n))return n}return t[e]?t[e]:null}(t,e.index,i,r);return o&&(o.tabIndex=0,o.focus()),o}return We(t,i)}function Ze(t){return!t.disabled}r([gt({reflect:!0,type:String})],Ve.prototype,"fileName",null),r([gt({reflect:!0,type:String})],Ve.prototype,"shape",null),r([gt({reflect:!0,type:Boolean,attribute:"show-ring"})],Ve.prototype,"showRing",null),r([gt({reflect:!0,type:Number,attribute:"profile-picture-link-person-id"})],Ve.prototype,"profilePictureLinkPersonId",null),r([gt({type:Number})],Ve.prototype,"size",null),r([gt({type:Boolean})],Ve.prototype,"useIntrinsicImageSize",null),Ve=r([mt("profile-picture")],Ve);const ti={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class ei{constructor(t){this.handleKeydown=t=>{const e=t.key;if(t.defaultPrevented||!this.isNavigableKey(e))return;const i=this.items;if(!i.length)return;const r=Xe(i,this.isActivatable);t.preventDefault();const o=this.isRtl();let s=null;switch(e){case ti.ArrowDown:case o?ti.ArrowLeft:ti.ArrowRight:s=Je(i,r,this.isActivatable,this.wrapNavigation());break;case ti.ArrowUp:case o?ti.ArrowRight:ti.ArrowLeft:s=Qe(i,r,this.isActivatable,this.wrapNavigation());break;case ti.Home:s=Ge(i,this.isActivatable);break;case ti.End:s=We(i,this.isActivatable)}s&&r&&r.item!==s&&(r.item.tabIndex=-1)},this.onDeactivateItems=()=>{const t=this.items;for(const e of t)this.deactivateItem(e)},this.onRequestActivation=t=>{this.onDeactivateItems();const e=t.target;this.activateItem(e),e.focus()},this.onSlotchange=()=>{const t=this.items;let e=!1;for(const i of t){!(!i.disabled&&i.tabIndex>-1)||e?i.tabIndex=-1:(e=!0,i.tabIndex=0)}if(e)return;const i=Ye(t,this.isActivatable);i&&(i.tabIndex=0)};const{isItem:e,getPossibleItems:i,isRtl:r,deactivateItem:o,activateItem:s,isNavigableKey:n,isActivatable:a,wrapNavigation:l}=t;this.isItem=e,this.getPossibleItems=i,this.isRtl=r,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=n,this.isActivatable=a,this.wrapNavigation=l??(()=>!0)}get items(){const t=this.getPossibleItems(),e=[];for(const i of t){if(this.isItem(i)){e.push(i);continue}const t=i.item;t&&this.isItem(t)&&e.push(t)}return e}activateNextItem(){const t=this.items,e=Xe(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Je(t,e,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const t=this.items,e=Xe(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Qe(t,e,this.isActivatable,this.wrapNavigation())}}const ii=function(t,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:t,reason:e,itemPath:[t]}})},ri={SPACE:"Space",ENTER:"Enter"},oi={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},si={ESCAPE:"Escape",SPACE:ri.SPACE,ENTER:ri.ENTER};function ni(t){return Object.values(si).some((e=>e===t))}function ai(t){return Object.values(ri).some((e=>e===t))}function li(t,e){const i=new Event("md-contains",{bubbles:!0,composed:!0});let r=[];const o=t=>{r=t.composedPath()};e.addEventListener("md-contains",o),t.dispatchEvent(i),e.removeEventListener("md-contains",o);return r.length>0}const ci={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"},di="end-start",hi="start-start";class ui{constructor(t,e){this.host=t,this.getProperties=e,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:t,anchorEl:e,anchorCorner:i,surfaceCorner:r,positioning:o,xOffset:s,yOffset:n,disableBlockFlip:a,disableInlineFlip:l,repositionStrategy:c}=this.getProperties(),d=i.toLowerCase().trim(),h=r.toLowerCase().trim();if(!t||!e)return;const u=window.innerWidth,p=window.innerHeight,m=document.createElement("div");m.style.opacity="0",m.style.position="fixed",m.style.display="block",m.style.inset="0",document.body.appendChild(m);const f=m.getBoundingClientRect();m.remove();const v=window.innerHeight-f.bottom,g=window.innerWidth-f.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,t.popover&&t.isConnected&&t.showPopover();const b=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),y=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),[x,w]=h.split("-"),[_,k]=d.split("-"),$="ltr"===getComputedStyle(t).direction;let{blockInset:A,blockOutOfBoundsCorrection:S,surfaceBlockProperty:z}=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:_,surfaceBlock:x,yOffset:n,positioning:o,windowInnerHeight:p,blockScrollbarHeight:v});if(S&&!a){const t="start"===x?"end":"start",e="start"===_?"end":"start",i=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:e,surfaceBlock:t,yOffset:n,positioning:o,windowInnerHeight:p,blockScrollbarHeight:v});S>i.blockOutOfBoundsCorrection&&(A=i.blockInset,S=i.blockOutOfBoundsCorrection,z=i.surfaceBlockProperty)}let{inlineInset:T,inlineOutOfBoundsCorrection:C,surfaceInlineProperty:E}=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:k,surfaceInline:w,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:u,inlineScrollbarWidth:g});if(C&&!l){const t="start"===w?"end":"start",e="start"===k?"end":"start",i=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:e,surfaceInline:t,xOffset:s,positioning:o,isLTR:$,windowInnerWidth:u,inlineScrollbarWidth:g});Math.abs(C)>Math.abs(i.inlineOutOfBoundsCorrection)&&(T=i.inlineInset,C=i.inlineOutOfBoundsCorrection,E=i.surfaceInlineProperty)}"move"===c&&(A-=S,T-=C),this.surfaceStylesInternal={display:"block",opacity:"1",[z]:`${A}px`,[E]:`${T}px`},"resize"===c&&(S&&(this.surfaceStylesInternal.height=b.height-S+"px"),C&&(this.surfaceStylesInternal.width=b.width-C+"px")),this.host.requestUpdate()}calculateBlock(t){const{surfaceRect:e,anchorRect:i,anchorBlock:r,surfaceBlock:o,yOffset:s,positioning:n,windowInnerHeight:a,blockScrollbarHeight:l}=t,c="fixed"===n||"document"===n?1:0,d="document"===n?1:0,h="start"===o?1:0,u="end"===o?1:0,p=(r!==o?1:0)*i.height+s,m=h*i.top+u*(a-i.bottom-l);return{blockInset:c*m+d*(h*window.scrollY-u*window.scrollY)+p,blockOutOfBoundsCorrection:Math.abs(Math.min(0,a-m-p-e.height)),surfaceBlockProperty:"start"===o?"inset-block-start":"inset-block-end"}}calculateInline(t){const{isLTR:e,surfaceInline:i,anchorInline:r,anchorRect:o,surfaceRect:s,xOffset:n,positioning:a,windowInnerWidth:l,inlineScrollbarWidth:c}=t,d="fixed"===a||"document"===a?1:0,h="document"===a?1:0,u=e?1:0,p=e?0:1,m="start"===i?1:0,f="end"===i?1:0,v=(r!==i?1:0)*o.width+n,g=u*(m*o.left+f*(l-o.right-c))+p*(m*(l-o.right-c)+f*o.left);let b="start"===i?"inset-inline-start":"inset-inline-end";return"document"!==a&&"fixed"!==a||(b="start"===i&&e||"end"===i&&!e?"left":"right"),{inlineInset:d*g+v+h*(u*(m*window.scrollX-f*window.scrollX)+p*(f*window.scrollX-m*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-g-v-s.width)),surfaceInlineProperty:b}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const t=this.getProperties();let e=!1;for(const[i,r]of Object.entries(t))if(e=e||r!==this.lastValues[i],e)break;const i=this.lastValues.isOpen!==t.isOpen,r=!!t.anchorEl,o=!!t.surfaceEl;e&&r&&o&&(this.lastValues.isOpen=t.isOpen,t.isOpen?(this.lastValues=t,await this.position(),t.onOpen()):i&&(await t.beforeClose(),this.close(),t.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const t=this.getProperties().surfaceEl;t?.popover&&t?.isConnected&&t.hidePopover()}}const pi={INDEX:0,ITEM:1,TEXT:2};class mi{constructor(t){this.getProperties=t,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=t=>{this.isTypingAhead?this.typeahead(t):this.beginTypeahead(t)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(t){this.active&&("Space"===t.code||"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map(((t,e)=>[e,t,t.typeaheadText.trim().toLowerCase()])),this.lastActiveRecord=this.typeaheadRecords.find((t=>0===t[pi.ITEM].tabIndex))??null,this.lastActiveRecord&&(this.lastActiveRecord[pi.ITEM].tabIndex=-1),this.typeahead(t)))}typeahead(t){if(t.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===t.code||t.code.startsWith("Arrow")||"Escape"===t.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[pi.ITEM].tabIndex=-1));"Space"===t.code&&t.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=t.key.toLowerCase();const e=this.lastActiveRecord?this.lastActiveRecord[pi.INDEX]:-1,i=this.typeaheadRecords.length,r=t=>(t[pi.INDEX]+i-e)%i,o=this.typeaheadRecords.filter((t=>!t[pi.ITEM].disabled&&t[pi.TEXT].startsWith(this.typaheadBuffer))).sort(((t,e)=>r(t)-r(e)));if(0===o.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[pi.ITEM].tabIndex=-1),void this.endTypeahead();const s=1===this.typaheadBuffer.length;let n;n=this.lastActiveRecord===o[0]&&s?o[1]??o[0]:o[0],this.lastActiveRecord&&(this.lastActiveRecord[pi.ITEM].tabIndex=-1),this.lastActiveRecord=n,n[pi.ITEM].tabIndex=0,n[pi.ITEM].focus()}}const fi=200,vi=new Set([ti.ArrowDown,ti.ArrowUp,ti.Home,ti.End]),gi=new Set([ti.ArrowLeft,ti.ArrowRight,...vi]);class bi extends ut{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(t){this.currentAnchorElement=t,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=200,this.anchorCorner=di,this.menuCorner=hi,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=ci.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=function(){let t=null;return{start:()=>(t?.abort(),t=new AbortController,t.signal),finish(){t=null}}}(),this.listController=new ei({isItem:t=>t.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.selected=!1,t.tabIndex=-1},activateItem:t=>{t.selected=!0,t.tabIndex=0},isNavigableKey:t=>{if(!this.isSubmenu)return gi.has(t);return t===("rtl"===getComputedStyle(this).direction?ti.ArrowLeft:ti.ArrowRight)||vi.has(t)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new mi((()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive}))),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new ui(this,(()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"}))),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async t=>{const e=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(e))return;if(t.relatedTarget){if(li(t.relatedTarget,this)||0!==this.pointerPath.length&&li(t.relatedTarget,e))return}else if(this.pointerPath.includes(this))return;const i=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=i},this.onOpened=async()=>{this.lastFocusedElement=function(t=document){let e=t.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}();const t=this.items,e=Xe(t);e&&this.defaultFocus!==ci.NONE&&(e.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case ci.FIRST_ITEM:const e=Ye(t);e&&(e.tabIndex=0,e.focus(),await e.updateComplete);break;case ci.LAST_ITEM:const i=Ke(t);i&&(i.tabIndex=0,i.focus(),await i.updateComplete);break;case ci.LIST_ROOT:this.focus()}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=t=>{this.pointerPath=t.composedPath()},this.onDocumentClick=t=>{if(!this.open)return;const e=t.composedPath();this.stayOpenOnOutsideClick||e.includes(this)||e.includes(this.anchorElement)||(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(t){t.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(t){t.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return W`
      <div
        class="menu ${Zt(this.getSurfaceClasses())}"
        style=${Re(this.menuPositionController.surfaceStyles)}
        popover=${"popover"===this.positioning?"manual":Y}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return W`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return W`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(t){t.target===this&&!t.defaultPrevented&&ni(t.code)&&(t.preventDefault(),this.close()),this.typeaheadController.onKeydown(t)}async animateOpen(){const t=this.surfaceEl,e=this.slotEl;if(!t||!e)return!0;const i=this.openDirection;this.dispatchEvent(new Event("opening")),t.classList.toggle("animating",!0);const r=this.openCloseAnimationSignal.start(),o=t.offsetHeight,s="UP"===i,n=this.items,a=250/n.length,l=t.animate([{height:"0px"},{height:`${o}px`}],{duration:500,easing:te.EMPHASIZED}),c=e.animate([{transform:s?`translateY(-${o}px)`:""},{transform:""}],{duration:500,easing:te.EMPHASIZED}),d=t.animate([{opacity:0},{opacity:1}],50),h=[];for(let t=0;t<n.length;t++){const e=n[s?n.length-1-t:t],i=e.animate([{opacity:0},{opacity:1}],{duration:250,delay:a*t});e.classList.toggle("md-menu-hidden",!0),i.addEventListener("finish",(()=>{e.classList.toggle("md-menu-hidden",!1)})),h.push([e,i])}let u=t=>{};const p=new Promise((t=>{u=t}));return r.addEventListener("abort",(()=>{l.cancel(),c.cancel(),d.cancel(),h.forEach((([t,e])=>{t.classList.toggle("md-menu-hidden",!1),e.cancel()})),u(!0)})),l.addEventListener("finish",(()=>{t.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),u(!1)})),await p}animateClose(){let t;const e=new Promise((e=>{t=e})),i=this.surfaceEl,r=this.slotEl;if(!i||!r)return t(!1),e;const o="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),i.classList.toggle("animating",!0);const s=this.openCloseAnimationSignal.start(),n=i.offsetHeight,a=this.items,l=150,c=50/a.length,d=i.animate([{height:`${n}px`},{height:.35*n+"px"}],{duration:l,easing:te.EMPHASIZED_ACCELERATE}),h=r.animate([{transform:""},{transform:o?`translateY(-${.65*n}px)`:""}],{duration:l,easing:te.EMPHASIZED_ACCELERATE}),u=i.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),p=[];for(let t=0;t<a.length;t++){const e=a[o?t:a.length-1-t],i=e.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+c*t});i.addEventListener("finish",(()=>{e.classList.toggle("md-menu-hidden",!0)})),p.push([e,i])}return s.addEventListener("abort",(()=>{d.cancel(),h.cancel(),u.cancel(),p.forEach((([t,e])=>{e.cancel(),t.classList.toggle("md-menu-hidden",!1)})),t(!1)})),d.addEventListener("finish",(()=>{i.classList.toggle("animating",!1),p.forEach((([t])=>{t.classList.toggle("md-menu-hidden",!1)})),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),t(!0)})),e}handleKeydown(t){this.pointerPath=[],this.listController.handleKeydown(t)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(t){t.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(t){t.stopPropagation(),this.listController.onRequestActivation(t)}handleDeactivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach((t=>{t.close?.()}))}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}r([xt(".menu")],bi.prototype,"surfaceEl",void 0),r([xt("slot")],bi.prototype,"slotEl",void 0),r([gt()],bi.prototype,"anchor",void 0),r([gt()],bi.prototype,"positioning",void 0),r([gt({type:Boolean})],bi.prototype,"quick",void 0),r([gt({type:Boolean,attribute:"has-overflow"})],bi.prototype,"hasOverflow",void 0),r([gt({type:Boolean,reflect:!0})],bi.prototype,"open",void 0),r([gt({type:Number,attribute:"x-offset"})],bi.prototype,"xOffset",void 0),r([gt({type:Number,attribute:"y-offset"})],bi.prototype,"yOffset",void 0),r([gt({type:Boolean,attribute:"no-horizontal-flip"})],bi.prototype,"noHorizontalFlip",void 0),r([gt({type:Boolean,attribute:"no-vertical-flip"})],bi.prototype,"noVerticalFlip",void 0),r([gt({type:Number,attribute:"typeahead-delay"})],bi.prototype,"typeaheadDelay",void 0),r([gt({attribute:"anchor-corner"})],bi.prototype,"anchorCorner",void 0),r([gt({attribute:"menu-corner"})],bi.prototype,"menuCorner",void 0),r([gt({type:Boolean,attribute:"stay-open-on-outside-click"})],bi.prototype,"stayOpenOnOutsideClick",void 0),r([gt({type:Boolean,attribute:"stay-open-on-focusout"})],bi.prototype,"stayOpenOnFocusout",void 0),r([gt({type:Boolean,attribute:"skip-restore-focus"})],bi.prototype,"skipRestoreFocus",void 0),r([gt({attribute:"default-focus"})],bi.prototype,"defaultFocus",void 0),r([gt({type:Boolean,attribute:"no-navigation-wrap"})],bi.prototype,"noNavigationWrap",void 0),r([kt({flatten:!0})],bi.prototype,"slotItems",void 0),r([bt()],bi.prototype,"typeaheadActive",void 0);const yi=d`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;let xi=class extends bi{};xi.styles=[yi],xi=r([mt("md-menu")],xi);class wi extends ke{renderElevationOrOutline(){return W`<div class="outline"></div>`}}const _i=d`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host(:is([disabled],[soft-disabled])) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])) .background{border-color:GrayText}:host(:is([disabled],[soft-disabled])) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;let ki=class extends wi{};ki.styles=[jt,_i],ki=r([mt("md-outlined-button")],ki);class $i extends ut{render(){return W`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}const Ai=d`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;let Si=class extends $i{};Si.styles=[Ai],Si=r([mt("md-icon")],Si);const zi=Symbol.for(""),Ti=t=>{if(t?.r===zi)return t?._$litStatic$},Ci=(t,...e)=>({_$litStatic$:e.reduce(((e,i,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1]),t[0]),r:zi}),Ei=new Map,Mi=(t=>(e,...i)=>{const r=i.length;let o,s;const n=[],a=[];let l,c=0,d=!1;for(;c<r;){for(l=e[c];c<r&&void 0!==(s=i[c],o=Ti(s));)l+=o+e[++c],d=!0;c!==r&&a.push(s),n.push(l),c++}if(c===r&&n.push(e[r]),d){const t=n.join("$$lit$$");void 0===(e=Ei.get(t))&&(n.raw=n,Ei.set(t,e=n)),i=a}return t(e,...i)})(W);function Ii(t,e=!0){return e&&"rtl"===getComputedStyle(t).getPropertyValue("direction").trim()}const Pi=ue(ge(ut));class Ri extends Pi{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[fe].form}get labels(){return this[fe].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Ii(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){const t=this.href?Ci`div`:Ci`button`,{ariaLabel:e,ariaHasPopup:i,ariaExpanded:r}=this,o=e&&this.ariaLabelSelected,s=this.toggle?this.selected:Y;let n=Y;return this.href||(n=o&&this.selected?this.ariaLabelSelected:e),Mi`<${t}
        class="icon-button ${Zt(this.getRenderClasses())}"
        id="button"
        aria-label="${n||Y}"
        aria-haspopup="${!this.href&&i||Y}"
        aria-expanded="${!this.href&&r||Y}"
        aria-pressed="${s}"
        aria-disabled=${!this.href&&this.softDisabled||Y}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?Y:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():Y}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return W`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||Y}"
        aria-label="${t||Y}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return W`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return W`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return W`<span class="touch"></span>`}renderFocusRing(){return W`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){const t=!this.href&&(this.disabled||this.softDisabled);return W`<md-ripple
      for=${this.href?"link":Y}
      ?disabled="${t}"></md-ripple>`}connectedCallback(){this.flipIcon=Ii(this,this.flipIconInRtl),super.connectedCallback()}handleClick(t){if(!this.href&&this.softDisabled)return t.stopImmediatePropagation(),void t.preventDefault()}async handleClickOnChild(t){await 0,!this.toggle||this.disabled||this.softDisabled||t.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}be(Ri),Ri.formAssociated=!0,Ri.shadowRootOptions={mode:"open",delegatesFocus:!0},r([gt({type:Boolean,reflect:!0})],Ri.prototype,"disabled",void 0),r([gt({type:Boolean,attribute:"soft-disabled",reflect:!0})],Ri.prototype,"softDisabled",void 0),r([gt({type:Boolean,attribute:"flip-icon-in-rtl"})],Ri.prototype,"flipIconInRtl",void 0),r([gt()],Ri.prototype,"href",void 0),r([gt()],Ri.prototype,"target",void 0),r([gt({attribute:"aria-label-selected"})],Ri.prototype,"ariaLabelSelected",void 0),r([gt({type:Boolean})],Ri.prototype,"toggle",void 0),r([gt({type:Boolean,reflect:!0})],Ri.prototype,"selected",void 0),r([gt()],Ri.prototype,"type",void 0),r([gt({reflect:!0})],Ri.prototype,"value",void 0),r([bt()],Ri.prototype,"flipIcon",void 0);const Oi=d`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`,Bi=d`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}
`;let Ni=class extends Ri{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Ni.styles=[Oi,Bi],Ni=r([mt("md-icon-button")],Ni);let ji=class extends ut{constructor(){super(...arguments),this.#vt=40,this.#m=0,this.#p="",this.#d="",this.#wt="",this.positioning="popover"}#vt;get size(){return this.#vt}set size(t){this.#vt=t}#u;get profilePictureFileName(){return this.#u}set profilePictureFileName(t){this.#u=t}#m;get personId(){return this.#m}set personId(t){this.#m=t}#p;get email(){return this.#p}set email(t){this.#p=t}#d;get company(){return this.#d}set company(t){this.#d=t}#wt;get name(){return this.#wt}set name(t){this.#wt=t}#_t;get menu(){return this.#_t}set menu(t){this.#_t=t}firstUpdated(){Bt().addEventListener(Rt.eventName,(()=>this.setUserProps())),this.setUserProps()}setUserProps(){this.personId=Bt().personId,this.profilePictureFileName=Bt().profilePictureFileName,this.email=Bt().email,this.company=Bt().company,this.name=Bt().fullname}updated(t){t.has("size")&&t.get("size")!==this.size&&(this.style.width=this.size+"px",this.style.height=this.size+"px"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}static{this.styles=d`
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
  `}render(){return W`
      <md-icon-button
        id="icon-button"
        @click=${()=>{this.personId?this.menu.open=!this.menu.open:Bt().authenticateAsync()}}
        style=${Re({height:`${this.size}px`,width:`${this.size}px`})}
      >
        <profile-picture shape="circle" .fileName=${this.profilePictureFileName} .size=${this.size}></profile-picture>
      </md-icon-button>
      <md-menu y-offset="4" anchor="icon-button" menu-corner="start-end" anchor-corner="end-end" .positioning=${this.positioning}>
        <main>
          <profile-picture shape="circle" .fileName=${this.profilePictureFileName} size="90"></profile-picture>
          <h1>${this.name}</h1>
          ${this.company?W`<h2 company>${this.company}</h2>`:""}
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
          <md-text-button @click=${()=>Bt().logout()}>Sign out</md-text-button>
        </footer>
      </md-menu>
    `}};r([gt({type:Number})],ji.prototype,"size",null),r([gt({type:String})],ji.prototype,"profilePictureFileName",null),r([gt({type:Number})],ji.prototype,"personId",null),r([gt({type:String})],ji.prototype,"email",null),r([gt({type:String})],ji.prototype,"company",null),r([gt({type:String})],ji.prototype,"name",null),r([xt("md-menu")],ji.prototype,"menu",null),r([gt()],ji.prototype,"positioning",void 0),ji=r([mt("profile-picture-menu")],ji);class Li extends ut{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}r([gt({type:Boolean,reflect:!0})],Li.prototype,"inset",void 0),r([gt({type:Boolean,reflect:!0,attribute:"inset-start"})],Li.prototype,"insetStart",void 0),r([gt({type:Boolean,reflect:!0,attribute:"inset-end"})],Li.prototype,"insetEnd",void 0);const Di=d`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;let Fi=class extends Li{};function Ui(t,e){!e.bubbles||t.shadowRoot&&!e.composed||e.stopPropagation();const i=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(i);return r||e.preventDefault(),r}Fi.styles=[Di],Fi=r([mt("md-divider")],Fi);const Hi={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:te.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:te.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},qi={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:te.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:te.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]},Vi=ue(ut);class Gi extends Vi{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>Hi,this.getCloseAnimation=()=>qi,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(t=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const e=this.dialog;if(!e.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=t;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),e.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),e={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,r=W`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:o}=this;return W`
      <div class="scrim"></div>
      <dialog
        class=${Zt(e)}
        aria-label=${o||Y}
        aria-labelledby=${this.hasHeadline?"headline":Y}
        role=${"alert"===this.type?"alertdialog":Y}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||Y}>
        ${i?r:Y}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||Y}>
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
        ${i?r:Y}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver((t=>{for(const e of t)this.handleAnchorIntersection(e)}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:i}=t;"dialog"===e.method&&i&&this.close(i.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const e=!Ui(this,t);t.preventDefault(),e||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(t){"Escape"===t.key&&(this.escapePressedWithoutCancel=!0,setTimeout((()=>{this.escapePressedWithoutCancel=!1})))}async animateDialog(t){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:e,scrim:i,container:r,headline:o,content:s,actions:n}=this;if(!(e&&i&&r&&o&&s&&n))return;const{container:a,dialog:l,scrim:c,headline:d,content:h,actions:u}=t,p=[[e,l??[]],[i,c??[]],[r,a??[]],[o,d??[]],[s,h??[]],[n,u??[]]],m=[];for(const[t,e]of p)for(const i of e){const e=t.animate(...i);this.cancelAnimations.signal.addEventListener("abort",(()=>{e.cancel()})),m.push(e)}await Promise.all(m.map((t=>t.finished.catch((()=>{})))))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}handleAnchorIntersection(t){const{target:e,isIntersecting:i}=t;e===this.topAnchor&&(this.isAtScrollTop=i),e===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise((t=>{this.isConnectedPromiseResolve=t}))}handleFocusTrapFocus(t){const[e,i]=this.getFirstAndLastFocusableChildren();if(!e||!i)return void this.dialog?.focus();const r=t.target===this.firstFocusTrap,o=!r,s=t.relatedTarget===e,n=t.relatedTarget===i,a=!s&&!n;if(o&&n||r&&a)return void e.focus();(r&&s||o&&a)&&i.focus()}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let t=null,e=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;Wi(i)&&(t||(t=i),e=i)}return[t,e]}}function Wi(t){const e=":not(:disabled,[disabled])";if(t.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+e+':not([tabindex^="-"])'))return!0;return!!t.localName.includes("-")&&(!!t.matches(e)&&(t.shadowRoot?.delegatesFocus??!1))}r([gt({type:Boolean})],Gi.prototype,"open",null),r([gt({type:Boolean})],Gi.prototype,"quick",void 0),r([gt({attribute:!1})],Gi.prototype,"returnValue",void 0),r([gt()],Gi.prototype,"type",void 0),r([gt({type:Boolean,attribute:"no-focus-trap"})],Gi.prototype,"noFocusTrap",void 0),r([xt("dialog")],Gi.prototype,"dialog",void 0),r([xt(".scrim")],Gi.prototype,"scrim",void 0),r([xt(".container")],Gi.prototype,"container",void 0),r([xt(".headline")],Gi.prototype,"headline",void 0),r([xt(".content")],Gi.prototype,"content",void 0),r([xt(".actions")],Gi.prototype,"actions",void 0),r([bt()],Gi.prototype,"isAtScrollTop",void 0),r([bt()],Gi.prototype,"isAtScrollBottom",void 0),r([xt(".scroller")],Gi.prototype,"scroller",void 0),r([xt(".top.anchor")],Gi.prototype,"topAnchor",void 0),r([xt(".bottom.anchor")],Gi.prototype,"bottomAnchor",void 0),r([xt(".focus-trap")],Gi.prototype,"firstFocusTrap",void 0),r([bt()],Gi.prototype,"hasHeadline",void 0),r([bt()],Gi.prototype,"hasActions",void 0),r([bt()],Gi.prototype,"hasIcon",void 0);const Xi=d`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;let Yi=class extends Gi{};Yi.styles=[Xi],Yi=r([mt("md-dialog")],Yi);class Ki extends ut{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const t=this.count??-1,e=this.max??-1;return t<0||e<=0?"":`${t} / ${e}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&void 0!==t.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){const t=this.renderLabel(!0),e=this.renderLabel(!1),i=this.renderOutline?.(t),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return W`
      <div class="field ${Zt(r)}">
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
                ${e} ${i?Y:t}
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
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame((()=>{this.refreshErrorAlert=!1})),this.disableTransitions&&requestAnimationFrame((()=>{this.disableTransitions=!1}))}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return Y;const i=W`<span>${t}</span>`,r=e?W`<span class="counter">${e}</span>`:Y,o=this.error&&this.errorText&&!this.refreshErrorAlert;return W`
      <div class="supporting-text" role=${o?"alert":Y}>${i}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)ht(W`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return Y;let e;e=t?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const i={hidden:!e,floating:t,resting:!t},r=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return W`
      <span class="label ${Zt(i)}" aria-hidden=${!e}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){if(!this.label)return;t??=this.focused,e??=this.populated;(t||e)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:te.STANDARD}),this.labelAnimation?.addEventListener("finish",(()=>{this.isAnimating=!1})))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:i,y:r,height:o}=t.getBoundingClientRect(),{x:s,y:n,height:a}=e.getBoundingClientRect(),l=t.scrollWidth,c=e.scrollWidth,d=c/l,h=`translateX(${s-i}px) translateY(${n-r+Math.round((a-o*d)/2)}px) scale(${d})`,u="translateX(0) translateY(0) scale(1)",p=e.clientWidth,m=c>p?p/d+"px":"";return this.focused||this.populated?[{transform:h,width:m},{transform:u,width:m}]:[{transform:u,width:m},{transform:h,width:m}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}r([gt({type:Boolean})],Ki.prototype,"disabled",void 0),r([gt({type:Boolean})],Ki.prototype,"error",void 0),r([gt({type:Boolean})],Ki.prototype,"focused",void 0),r([gt()],Ki.prototype,"label",void 0),r([gt({type:Boolean,attribute:"no-asterisk"})],Ki.prototype,"noAsterisk",void 0),r([gt({type:Boolean})],Ki.prototype,"populated",void 0),r([gt({type:Boolean})],Ki.prototype,"required",void 0),r([gt({type:Boolean})],Ki.prototype,"resizable",void 0),r([gt({attribute:"supporting-text"})],Ki.prototype,"supportingText",void 0),r([gt({attribute:"error-text"})],Ki.prototype,"errorText",void 0),r([gt({type:Number})],Ki.prototype,"count",void 0),r([gt({type:Number})],Ki.prototype,"max",void 0),r([gt({type:Boolean,attribute:"has-start"})],Ki.prototype,"hasStart",void 0),r([gt({type:Boolean,attribute:"has-end"})],Ki.prototype,"hasEnd",void 0),r([kt({slot:"aria-describedby"})],Ki.prototype,"slottedAriaDescribedBy",void 0),r([bt()],Ki.prototype,"isAnimating",void 0),r([bt()],Ki.prototype,"refreshErrorAlert",void 0),r([bt()],Ki.prototype,"disableTransitions",void 0),r([xt(".label.floating")],Ki.prototype,"floatingLabelEl",void 0),r([xt(".label.resting")],Ki.prototype,"restingLabelEl",void 0),r([xt(".container")],Ki.prototype,"containerEl",void 0);class Ji extends Ki{renderOutline(t){return W`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${t}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}}const Qi=d`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`,Zi=d`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;let tr=class extends Ji{};tr.styles=[Zi,Qi],tr=r([mt("md-outlined-field")],tr);const er=d`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`,{I:ir}=ct,rr=()=>document.createComment(""),or=(t,e,i)=>{const r=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=r.insertBefore(rr(),o),s=r.insertBefore(rr(),o);i=new ir(e,s,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,n=s!==t;if(n){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==o||n){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,o),t=e}}}return i},sr=(t,e,i=t)=>(t._$AI(e,i),t),nr={},ar=(t,e=nr)=>t._$AH=e,lr=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},cr=Jt(class extends Qt{constructor(t){if(super(t),t.type!==Yt&&t.type!==Wt&&t.type!==Kt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===X||e===Y)return e;const i=t.element,r=t.name;if(t.type===Yt){if(e===i[r])return X}else if(t.type===Kt){if(!!e===i.hasAttribute(r))return X}else if(t.type===Wt&&i.getAttribute(r)===e+"")return X;return ar(t),e}}),dr={fromAttribute:t=>t??"",toAttribute:t=>t||null},hr=Symbol("createValidator"),ur=Symbol("getValidityAnchor"),pr=Symbol("privateValidator"),mr=Symbol("privateSyncValidity"),fr=Symbol("privateCustomValidationMessage");function vr(t){var e;class i extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[mr](),this[fe].validity}get validationMessage(){return this[mr](),this[fe].validationMessage}get willValidate(){return this[mr](),this[fe].willValidate}checkValidity(){return this[mr](),this[fe].checkValidity()}reportValidity(){return this[mr](),this[fe].reportValidity()}setCustomValidity(t){this[fr]=t,this[mr]()}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[mr]()}firstUpdated(t){super.firstUpdated(t),this[mr]()}[(e=fr,mr)](){this[pr]||(this[pr]=this[hr]());const{validity:t,validationMessage:e}=this[pr].getValidity(),i=!!this[fr],r=this[fr]||e;this[fe].setValidity({...t,customError:i},r,this[ur]()??void 0)}[hr](){throw new Error("Implement [createValidator]")}[ur](){throw new Error("Implement [getValidityAnchor]")}}return i}const gr=Symbol("getFormValue"),br=Symbol("getFormState");function yr(t){class e extends t{get form(){return this[fe].form}get labels(){return this[fe].labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t,e,i){if("name"!==t&&"disabled"!==t)super.attributeChangedCallback(t,e,i);else{const i="disabled"===t?null!==e:e;this.requestUpdate(t,i)}}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[fe].setFormValue(this[gr](),this[br]())}[gr](){throw new Error("Implement [getFormValue]")}[br](){return this[gr]()}formDisabledCallback(t){this.disabled=t}}return e.formAssociated=!0,r([gt({noAccessor:!0})],e.prototype,"name",null),r([gt({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}const xr=Symbol("onReportValidity"),wr=Symbol("privateCleanupFormListeners"),_r=Symbol("privateDoNotReportInvalid"),kr=Symbol("privateIsSelfReportingValidity"),$r=Symbol("privateCallOnReportValidity");function Ar(t){var e,i,r;class o extends t{constructor(...t){super(...t),this[e]=new AbortController,this[i]=!1,this[r]=!1,this.addEventListener("invalid",(t=>{!this[_r]&&t.isTrusted&&this.addEventListener("invalid",(()=>{this[$r](t)}),{once:!0})}),{capture:!0})}checkValidity(){this[_r]=!0;const t=super.checkValidity();return this[_r]=!1,t}reportValidity(){this[kr]=!0;const t=super.reportValidity();return t&&this[$r](null),this[kr]=!1,t}[(e=wr,i=_r,r=kr,$r)](t){const e=t?.defaultPrevented;if(e)return;this[xr](t);!e&&t?.defaultPrevented&&(this[kr]||function(t,e){if(!t)return!0;let i;for(const e of t.elements)if(e.matches(":invalid")){i=e;break}return i===e}(this[fe].form,this))&&this.focus()}[xr](t){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(t){super.formAssociatedCallback&&super.formAssociatedCallback(t),this[wr].abort(),t&&(this[wr]=new AbortController,function(t,e,i,r){const o=function(t){if(!Sr.has(t)){const e=new EventTarget;Sr.set(t,e);for(const i of["reportValidity","requestSubmit"]){const r=t[i];t[i]=function(){e.dispatchEvent(new Event("before"));const t=Reflect.apply(r,this,arguments);return e.dispatchEvent(new Event("after")),t}}}return Sr.get(t)}(e);let s,n=!1,a=!1;o.addEventListener("before",(()=>{a=!0,s=new AbortController,n=!1,t.addEventListener("invalid",(()=>{n=!0}),{signal:s.signal})}),{signal:r}),o.addEventListener("after",(()=>{a=!1,s?.abort(),n||i()}),{signal:r}),e.addEventListener("submit",(()=>{a||i()}),{signal:r})}(this,t,(()=>{this[$r](null)}),this[wr].signal))}}return o}const Sr=new WeakMap;class zr{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;const{validity:e,validationMessage:i}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:i,validity:{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing}},this.currentValidity}}class Tr extends zr{computeValidity({state:t,renderedControl:e}){let i=e;Cr(t)&&!i?(i=this.inputControl||document.createElement("input"),this.inputControl=i):i||(i=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=i);const r=Cr(t)?i:null;if(r&&(r.type=t.type),i.value!==t.value&&(i.value=t.value),i.required=t.required,r){const e=t;e.pattern?r.pattern=e.pattern:r.removeAttribute("pattern"),e.min?r.min=e.min:r.removeAttribute("min"),e.max?r.max=e.max:r.removeAttribute("max"),e.step?r.step=e.step:r.removeAttribute("step")}return(t.minLength??-1)>-1?i.setAttribute("minlength",String(t.minLength)):i.removeAttribute("minlength"),(t.maxLength??-1)>-1?i.setAttribute("maxlength",String(t.maxLength)):i.removeAttribute("maxlength"),{validity:i.validity,validationMessage:i.validationMessage}}equals({state:t},{state:e}){const i=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return Cr(t)&&Cr(e)?i&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step:i}copy({state:t}){return{state:Cr(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:e,pattern:i,min:r,max:o,step:s}=t;return{...this.copySharedState(t),type:e,pattern:i,min:r,max:o,step:s}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:i,maxLength:r}){return{value:t,required:e,minLength:i,maxLength:r}}}function Cr(t){return"textarea"!==t.type}const Er=ue(Ar(vr(yr(ge(ut)))));class Mr extends Er{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,i){this.getInputOrTextarea().setSelectionRange(t,e,i)}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return W`
      <span class="text-field ${Zt(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return Mi`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return W`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return W`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||Y,i=this.autocomplete,r=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if("textarea"===this.type)return W`
        <textarea
          class="input"
          style=${Re(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||Y}
          name=${this.name||Y}
          ?disabled=${this.disabled}
          maxlength=${r?this.maxLength:Y}
          minlength=${o?this.minLength:Y}
          placeholder=${this.placeholder||Y}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${cr(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const s=this.renderPrefix(),n=this.renderSuffix(),a=this.inputMode;return W`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${Re(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||Y}
          name=${this.name||Y}
          ?disabled=${this.disabled}
          inputmode=${a||Y}
          max=${this.max||Y}
          maxlength=${r?this.maxLength:Y}
          min=${this.min||Y}
          minlength=${o?this.minLength:Y}
          pattern=${this.pattern||Y}
          placeholder=${this.placeholder||Y}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||Y}
          type=${this.type}
          .value=${cr(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${n}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){if(!t)return Y;return W`<span class="${Zt({suffix:e,prefix:!e})}">${t}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){Ui(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[gr](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[hr](){return new Tr((()=>({state:this,renderedControl:this.inputOrTextarea})))}[ur](){return this.inputOrTextarea}[xr](t){t?.preventDefault();const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}}Mr.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0},r([gt({type:Boolean,reflect:!0})],Mr.prototype,"error",void 0),r([gt({attribute:"error-text"})],Mr.prototype,"errorText",void 0),r([gt()],Mr.prototype,"label",void 0),r([gt({type:Boolean,attribute:"no-asterisk"})],Mr.prototype,"noAsterisk",void 0),r([gt({type:Boolean,reflect:!0})],Mr.prototype,"required",void 0),r([gt()],Mr.prototype,"value",void 0),r([gt({attribute:"prefix-text"})],Mr.prototype,"prefixText",void 0),r([gt({attribute:"suffix-text"})],Mr.prototype,"suffixText",void 0),r([gt({type:Boolean,attribute:"has-leading-icon"})],Mr.prototype,"hasLeadingIcon",void 0),r([gt({type:Boolean,attribute:"has-trailing-icon"})],Mr.prototype,"hasTrailingIcon",void 0),r([gt({attribute:"supporting-text"})],Mr.prototype,"supportingText",void 0),r([gt({attribute:"text-direction"})],Mr.prototype,"textDirection",void 0),r([gt({type:Number})],Mr.prototype,"rows",void 0),r([gt({type:Number})],Mr.prototype,"cols",void 0),r([gt({reflect:!0})],Mr.prototype,"inputMode",void 0),r([gt()],Mr.prototype,"max",void 0),r([gt({type:Number})],Mr.prototype,"maxLength",void 0),r([gt()],Mr.prototype,"min",void 0),r([gt({type:Number})],Mr.prototype,"minLength",void 0),r([gt({type:Boolean,attribute:"no-spinner"})],Mr.prototype,"noSpinner",void 0),r([gt()],Mr.prototype,"pattern",void 0),r([gt({reflect:!0,converter:dr})],Mr.prototype,"placeholder",void 0),r([gt({type:Boolean,reflect:!0})],Mr.prototype,"readOnly",void 0),r([gt({type:Boolean,reflect:!0})],Mr.prototype,"multiple",void 0),r([gt()],Mr.prototype,"step",void 0),r([gt({reflect:!0})],Mr.prototype,"type",void 0),r([gt({reflect:!0})],Mr.prototype,"autocomplete",void 0),r([bt()],Mr.prototype,"dirty",void 0),r([bt()],Mr.prototype,"focused",void 0),r([bt()],Mr.prototype,"nativeError",void 0),r([bt()],Mr.prototype,"nativeErrorText",void 0),r([xt(".input")],Mr.prototype,"inputOrTextarea",void 0),r([xt(".field")],Mr.prototype,"field",void 0),r([kt({slot:"leading-icon"})],Mr.prototype,"leadingIcons",void 0),r([kt({slot:"trailing-icon"})],Mr.prototype,"trailingIcons",void 0);class Ir extends Mr{constructor(){super(...arguments),this.fieldTag=Ci`md-outlined-field`}}const Pr=d`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;let Rr=class extends Ir{constructor(){super(...arguments),this.fieldTag=Ci`md-outlined-field`}};Rr.styles=[Pr,er],Rr=r([mt("md-outlined-text-field")],Rr);let Or=class extends tr{constructor(){super(...arguments),this.populated=!0}#kt;get evaluator(){return this.#kt}set evaluator(t){this.#kt=t}firstUpdated(){this.addEventListener("focusin",(()=>this.focused=!0)),this.addEventListener("focusout",(()=>this.focused=!1))}reset(){this.error=!1}reportValidity(){const t=this.checkValidity();return this.error=!t,t}checkValidity(){return!!this.evaluator()}};r([gt({type:Boolean})],Or.prototype,"populated",void 0),r([gt({type:Object})],Or.prototype,"evaluator",null),Or=r([mt("titanium-input-validator")],Or);let Br=class extends ut{#$t;get label(){return this.#$t}set label(t){this.#$t=t}#At="No items";get noItemsText(){return this.#At}set noItemsText(t){this.#At=t}#St=!1;get required(){return this.#St}set required(t){this.#St=t}#zt;get hasItems(){return this.#zt}set hasItems(t){this.#zt=t}#Tt;get supportingText(){return this.#Tt}set supportingText(t){this.#Tt=t}#Ct;get error(){return this.#Ct}set error(t){this.#Ct=t}#Et;get errorText(){return this.#Et}set errorText(t){this.#Et=t}#Mt;get resizable(){return this.#Mt}set resizable(t){this.#Mt=t}#It;get disabled(){return this.#It}set disabled(t){this.#It=t}#Pt;get validator(){return this.#Pt}set validator(t){this.#Pt=t}updated(t){(t.get("hasItems")&&t.has("hasItems")||this.hasItems&&t.has("hasItems"))&&this.reportValidity()}checkValidity(){return this.validator?.checkValidity()}reportValidity(){return this.validator?.reportValidity()}reset(){this.validator?.reset()}static{this.styles=[d`
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
    `]}render(){return W`
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
          ${this.hasItems?"":W` <span>${this.noItemsText}</span>`}
        </slot-container>
      </titanium-input-validator>
    `}};function Nr(t){if(t.shadowRoot){const e=t.shadowRoot.querySelector(".scrim");e&&(e.style.display="none");const i=t.shadowRoot.querySelector("dialog"),r="<style>dialog::backdrop { display:block;    background: var(--md-sys-color-scrim, #000); opacity: 0.32; transition: all 250ms ease 0s; }</style>";i?.insertAdjacentHTML("beforeend",r)}}function jr(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function Lr(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?jr(Object(i),!0).forEach((function(e){Hr(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):jr(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function Dr(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}function Fr(t){return Fr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fr(t)}function Ur(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Dr(r.key),r)}}function Hr(t,e,i){return(e=Dr(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function qr(t){return function(t){if(Array.isArray(t))return Vr(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Vr(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Vr(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Vr(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}r([gt({type:String})],Br.prototype,"label",null),r([gt({type:String})],Br.prototype,"noItemsText",null),r([gt({type:Boolean})],Br.prototype,"required",null),r([gt({type:Boolean})],Br.prototype,"hasItems",null),r([gt({type:String})],Br.prototype,"supportingText",null),r([gt({type:Boolean})],Br.prototype,"error",null),r([gt({type:String})],Br.prototype,"errorText",null),r([gt({type:Boolean})],Br.prototype,"resizable",null),r([gt({type:Boolean,reflect:!0})],Br.prototype,"disabled",null),r([xt("titanium-input-validator")],Br.prototype,"validator",null),Br=r([mt("titanium-chip-multi-select")],Br);var Gr="undefined"!=typeof window&&void 0!==window.document,Wr=Gr?window:{},Xr=!(!Gr||!Wr.document.documentElement)&&"ontouchstart"in Wr.document.documentElement,Yr=!!Gr&&"PointerEvent"in Wr,Kr="cropper",Jr="all",Qr="crop",Zr="move",to="zoom",eo="e",io="w",ro="s",oo="n",so="ne",no="nw",ao="se",lo="sw",co="".concat(Kr,"-crop"),ho="".concat(Kr,"-disabled"),uo="".concat(Kr,"-hidden"),po="".concat(Kr,"-hide"),mo="".concat(Kr,"-invisible"),fo="".concat(Kr,"-modal"),vo="".concat(Kr,"-move"),go="".concat(Kr,"Action"),bo="".concat(Kr,"Preview"),yo="crop",xo="move",wo="none",_o="crop",ko="cropend",$o="cropmove",Ao="cropstart",So="dblclick",zo=Yr?"pointerdown":Xr?"touchstart":"mousedown",To=Yr?"pointermove":Xr?"touchmove":"mousemove",Co=Yr?"pointerup pointercancel":Xr?"touchend touchcancel":"mouseup",Eo="ready",Mo="resize",Io="wheel",Po="zoom",Ro="image/jpeg",Oo=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Bo=/^data:/,No=/^data:image\/jpeg;base64,/,jo=/^img|canvas$/i,Lo={viewMode:0,dragMode:yo,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Do=Number.isNaN||Wr.isNaN;function Fo(t){return"number"==typeof t&&!Do(t)}var Uo=function(t){return t>0&&t<1/0};function Ho(t){return void 0===t}function qo(t){return"object"===Fr(t)&&null!==t}var Vo=Object.prototype.hasOwnProperty;function Go(t){if(!qo(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&Vo.call(i,"isPrototypeOf")}catch(t){return!1}}function Wo(t){return"function"==typeof t}var Xo=Array.prototype.slice;function Yo(t){return Array.from?Array.from(t):Xo.call(t)}function Ko(t,e){return t&&Wo(e)&&(Array.isArray(t)||Fo(t.length)?Yo(t).forEach((function(i,r){e.call(t,i,r,t)})):qo(t)&&Object.keys(t).forEach((function(i){e.call(t,t[i],i,t)}))),t}var Jo=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];return qo(t)&&i.length>0&&i.forEach((function(e){qo(e)&&Object.keys(e).forEach((function(i){t[i]=e[i]}))})),t},Qo=/\.\d*(?:0|9){12}\d*$/;function Zo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return Qo.test(t)?Math.round(t*e)/e:t}var ts=/^width|height|left|top|marginLeft|marginTop$/;function es(t,e){var i=t.style;Ko(e,(function(t,e){ts.test(e)&&Fo(t)&&(t="".concat(t,"px")),i[e]=t}))}function is(t,e){if(e)if(Fo(t.length))Ko(t,(function(t){is(t,e)}));else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function rs(t,e){e&&(Fo(t.length)?Ko(t,(function(t){rs(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function os(t,e,i){e&&(Fo(t.length)?Ko(t,(function(t){os(t,e,i)})):i?is(t,e):rs(t,e))}var ss=/([a-z\d])([A-Z])/g;function ns(t){return t.replace(ss,"$1-$2").toLowerCase()}function as(t,e){return qo(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(ns(e)))}function ls(t,e,i){qo(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(ns(e)),i)}var cs=/\s\s*/,ds=function(){var t=!1;if(Gr){var e=!1,i=function(){},r=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});Wr.addEventListener("test",i,r),Wr.removeEventListener("test",i,r)}return t}();function hs(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i;e.trim().split(cs).forEach((function(e){if(!ds){var s=t.listeners;s&&s[e]&&s[e][i]&&(o=s[e][i],delete s[e][i],0===Object.keys(s[e]).length&&delete s[e],0===Object.keys(s).length&&delete t.listeners)}t.removeEventListener(e,o,r)}))}function us(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i;e.trim().split(cs).forEach((function(e){if(r.once&&!ds){var s=t.listeners,n=void 0===s?{}:s;o=function(){delete n[e][i],t.removeEventListener(e,o,r);for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];i.apply(t,a)},n[e]||(n[e]={}),n[e][i]&&t.removeEventListener(e,n[e][i],r),n[e][i]=o,t.listeners=n}t.addEventListener(e,o,r)}))}function ps(t,e,i){var r;return Wo(Event)&&Wo(CustomEvent)?r=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(r=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(r)}function ms(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var fs=Wr.location,vs=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function gs(t){var e=t.match(vs);return null!==e&&(e[1]!==fs.protocol||e[2]!==fs.hostname||e[3]!==fs.port)}function bs(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function ys(t){var e=t.rotate,i=t.scaleX,r=t.scaleY,o=t.translateX,s=t.translateY,n=[];Fo(o)&&0!==o&&n.push("translateX(".concat(o,"px)")),Fo(s)&&0!==s&&n.push("translateY(".concat(s,"px)")),Fo(e)&&0!==e&&n.push("rotate(".concat(e,"deg)")),Fo(i)&&1!==i&&n.push("scaleX(".concat(i,")")),Fo(r)&&1!==r&&n.push("scaleY(".concat(r,")"));var a=n.length?n.join(" "):"none";return{WebkitTransform:a,msTransform:a,transform:a}}function xs(t,e){var i=t.pageX,r=t.pageY,o={endX:i,endY:r};return e?o:Lr({startX:i,startY:r},o)}function ws(t){var e=t.aspectRatio,i=t.height,r=t.width,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",s=Uo(r),n=Uo(i);if(s&&n){var a=i*e;"contain"===o&&a>r||"cover"===o&&a<r?i=r/e:r=i*e}else s?i=r/e:n&&(r=i*e);return{width:r,height:i}}var _s=String.fromCharCode;var ks=/^data:.*,/;function $s(t){var e,i=new DataView(t);try{var r,o,s;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var n=i.byteLength,a=2;a+1<n;){if(255===i.getUint8(a)&&225===i.getUint8(a+1)){o=a;break}a+=1}if(o){var l=o+10;if("Exif"===function(t,e,i){var r="";i+=e;for(var o=e;o<i;o+=1)r+=_s(t.getUint8(o));return r}(i,o+4,4)){var c=i.getUint16(l);if(((r=18761===c)||19789===c)&&42===i.getUint16(l+2,r)){var d=i.getUint32(l+4,r);d>=8&&(s=l+d)}}}if(s){var h,u,p=i.getUint16(s,r);for(u=0;u<p;u+=1)if(h=s+12*u+2,274===i.getUint16(h,r)){h+=8,e=i.getUint16(h,r),i.setUint16(h,1,r);break}}}catch(t){e=1}return e}var As={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,r=this.cropper,o=Number(e.minContainerWidth),s=Number(e.minContainerHeight);is(r,uo),rs(t,uo);var n={width:Math.max(i.offsetWidth,o>=0?o:200),height:Math.max(i.offsetHeight,s>=0?s:100)};this.containerData=n,es(r,{width:n.width,height:n.height}),is(t,uo),rs(r,uo)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,r=Math.abs(e.rotate)%180==90,o=r?e.naturalHeight:e.naturalWidth,s=r?e.naturalWidth:e.naturalHeight,n=o/s,a=t.width,l=t.height;t.height*n>t.width?3===i?a=t.height*n:l=t.width/n:3===i?l=t.width/n:a=t.height*n;var c={aspectRatio:n,naturalWidth:o,naturalHeight:s,width:a,height:l};this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),c.width=Math.min(Math.max(c.width,c.minWidth),c.maxWidth),c.height=Math.min(Math.max(c.height,c.minHeight),c.maxHeight),c.left=(t.width-c.width)/2,c.top=(t.height-c.height)/2,c.oldLeft=c.left,c.oldTop=c.top,this.initialCanvasData=Jo({},c)},limitCanvas:function(t,e){var i=this.options,r=this.containerData,o=this.canvasData,s=this.cropBoxData,n=i.viewMode,a=o.aspectRatio,l=this.cropped&&s;if(t){var c=Number(i.minCanvasWidth)||0,d=Number(i.minCanvasHeight)||0;n>1?(c=Math.max(c,r.width),d=Math.max(d,r.height),3===n&&(d*a>c?c=d*a:d=c/a)):n>0&&(c?c=Math.max(c,l?s.width:0):d?d=Math.max(d,l?s.height:0):l&&(c=s.width,(d=s.height)*a>c?c=d*a:d=c/a));var h=ws({aspectRatio:a,width:c,height:d});c=h.width,d=h.height,o.minWidth=c,o.minHeight=d,o.maxWidth=1/0,o.maxHeight=1/0}if(e)if(n>(l?0:1)){var u=r.width-o.width,p=r.height-o.height;o.minLeft=Math.min(0,u),o.minTop=Math.min(0,p),o.maxLeft=Math.max(0,u),o.maxTop=Math.max(0,p),l&&this.limited&&(o.minLeft=Math.min(s.left,s.left+(s.width-o.width)),o.minTop=Math.min(s.top,s.top+(s.height-o.height)),o.maxLeft=s.left,o.maxTop=s.top,2===n&&(o.width>=r.width&&(o.minLeft=Math.min(0,u),o.maxLeft=Math.max(0,u)),o.height>=r.height&&(o.minTop=Math.min(0,p),o.maxTop=Math.max(0,p))))}else o.minLeft=-o.width,o.minTop=-o.height,o.maxLeft=r.width,o.maxTop=r.height},renderCanvas:function(t,e){var i=this.canvasData,r=this.imageData;if(e){var o=function(t){var e=t.width,i=t.height,r=t.degree;if(90==(r=Math.abs(r)%180))return{width:i,height:e};var o=r%90*Math.PI/180,s=Math.sin(o),n=Math.cos(o),a=e*n+i*s,l=e*s+i*n;return r>90?{width:l,height:a}:{width:a,height:l}}({width:r.naturalWidth*Math.abs(r.scaleX||1),height:r.naturalHeight*Math.abs(r.scaleY||1),degree:r.rotate||0}),s=o.width,n=o.height,a=i.width*(s/i.naturalWidth),l=i.height*(n/i.naturalHeight);i.left-=(a-i.width)/2,i.top-=(l-i.height)/2,i.width=a,i.height=l,i.aspectRatio=s/n,i.naturalWidth=s,i.naturalHeight=n,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,es(this.canvas,Jo({width:i.width,height:i.height},ys({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,r=i.naturalWidth*(e.width/e.naturalWidth),o=i.naturalHeight*(e.height/e.naturalHeight);Jo(i,{width:r,height:o,left:(e.width-r)/2,top:(e.height-o)/2}),es(this.image,Jo({width:i.width,height:i.height},ys(Jo({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,r=Number(t.autoCropArea)||.8,o={width:e.width,height:e.height};i&&(e.height*i>e.width?o.height=o.width/i:o.width=o.height*i),this.cropBoxData=o,this.limitCropBox(!0,!0),o.width=Math.min(Math.max(o.width,o.minWidth),o.maxWidth),o.height=Math.min(Math.max(o.height,o.minHeight),o.maxHeight),o.width=Math.max(o.minWidth,o.width*r),o.height=Math.max(o.minHeight,o.height*r),o.left=e.left+(e.width-o.width)/2,o.top=e.top+(e.height-o.height)/2,o.oldLeft=o.left,o.oldTop=o.top,this.initialCropBoxData=Jo({},o)},limitCropBox:function(t,e){var i=this.options,r=this.containerData,o=this.canvasData,s=this.cropBoxData,n=this.limited,a=i.aspectRatio;if(t){var l=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,d=n?Math.min(r.width,o.width,o.width+o.left,r.width-o.left):r.width,h=n?Math.min(r.height,o.height,o.height+o.top,r.height-o.top):r.height;l=Math.min(l,r.width),c=Math.min(c,r.height),a&&(l&&c?c*a>l?c=l/a:l=c*a:l?c=l/a:c&&(l=c*a),h*a>d?h=d/a:d=h*a),s.minWidth=Math.min(l,d),s.minHeight=Math.min(c,h),s.maxWidth=d,s.maxHeight=h}e&&(n?(s.minLeft=Math.max(0,o.left),s.minTop=Math.max(0,o.top),s.maxLeft=Math.min(r.width,o.left+o.width)-s.width,s.maxTop=Math.min(r.height,o.top+o.height)-s.height):(s.minLeft=0,s.minTop=0,s.maxLeft=r.width-s.width,s.maxTop=r.height-s.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&ls(this.face,go,i.width>=e.width&&i.height>=e.height?Zr:Jr),es(this.cropBox,Jo({width:i.width,height:i.height},ys({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),ps(this.element,_o,this.getData())}},Ss={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,r=e?this.crossOriginUrl:this.url,o=t.alt||"The image to preview",s=document.createElement("img");if(e&&(s.crossOrigin=e),s.src=r,s.alt=o,this.viewBox.appendChild(s),this.viewBoxImage=s,i){var n=i;"string"==typeof i?n=t.ownerDocument.querySelectorAll(i):i.querySelector&&(n=[i]),this.previews=n,Ko(n,(function(t){var i=document.createElement("img");ls(t,bo,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=r,i.alt=o,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)}))}},resetPreview:function(){Ko(this.previews,(function(t){var e=as(t,bo);es(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(t,e){if(qo(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(ns(e)))}(t,bo)}))},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,r=i.width,o=i.height,s=t.width,n=t.height,a=i.left-e.left-t.left,l=i.top-e.top-t.top;this.cropped&&!this.disabled&&(es(this.viewBoxImage,Jo({width:s,height:n},ys(Jo({translateX:-a,translateY:-l},t)))),Ko(this.previews,(function(e){var i=as(e,bo),c=i.width,d=i.height,h=c,u=d,p=1;r&&(u=o*(p=c/r)),o&&u>d&&(h=r*(p=d/o),u=d),es(e,{width:h,height:u}),es(e.getElementsByTagName("img")[0],Jo({width:s*p,height:n*p},ys(Jo({translateX:-a*p,translateY:-l*p},t))))})))}},zs={bind:function(){var t=this.element,e=this.options,i=this.cropper;Wo(e.cropstart)&&us(t,Ao,e.cropstart),Wo(e.cropmove)&&us(t,$o,e.cropmove),Wo(e.cropend)&&us(t,ko,e.cropend),Wo(e.crop)&&us(t,_o,e.crop),Wo(e.zoom)&&us(t,Po,e.zoom),us(i,zo,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&us(i,Io,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&us(i,So,this.onDblclick=this.dblclick.bind(this)),us(t.ownerDocument,To,this.onCropMove=this.cropMove.bind(this)),us(t.ownerDocument,Co,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&us(window,Mo,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;Wo(e.cropstart)&&hs(t,Ao,e.cropstart),Wo(e.cropmove)&&hs(t,$o,e.cropmove),Wo(e.cropend)&&hs(t,ko,e.cropend),Wo(e.crop)&&hs(t,_o,e.crop),Wo(e.zoom)&&hs(t,Po,e.zoom),hs(i,zo,this.onCropStart),e.zoomable&&e.zoomOnWheel&&hs(i,Io,this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&hs(i,So,this.onDblclick),hs(t.ownerDocument,To,this.onCropMove),hs(t.ownerDocument,Co,this.onCropEnd),e.responsive&&hs(window,Mo,this.onResize)}},Ts={resize:function(){if(!this.disabled){var t,e,i=this.options,r=this.container,o=this.containerData,s=r.offsetWidth/o.width,n=r.offsetHeight/o.height,a=Math.abs(s-1)>Math.abs(n-1)?s:n;if(1!==a)i.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(Ko(t,(function(e,i){t[i]=e*a}))),this.setCropBoxData(Ko(e,(function(t,i){e[i]=t*a}))))}},dblclick:function(){var t,e;this.disabled||this.options.dragMode===wo||this.setDragMode((t=this.dragBox,e=co,(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?xo:yo))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,r=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?r=t.deltaY>0?1:-1:t.wheelDelta?r=-t.wheelDelta/120:t.detail&&(r=t.detail>0?1:-1),this.zoom(-r*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(Fo(e)&&1!==e||Fo(i)&&0!==i||t.ctrlKey))){var r,o=this.options,s=this.pointers;t.changedTouches?Ko(t.changedTouches,(function(t){s[t.identifier]=xs(t)})):s[t.pointerId||0]=xs(t),r=Object.keys(s).length>1&&o.zoomable&&o.zoomOnTouch?to:as(t.target,go),Oo.test(r)&&!1!==ps(this.element,Ao,{originalEvent:t,action:r})&&(t.preventDefault(),this.action=r,this.cropping=!1,r===Qr&&(this.cropping=!0,is(this.dragBox,fo)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==ps(this.element,$o,{originalEvent:t,action:e})&&(t.changedTouches?Ko(t.changedTouches,(function(t){Jo(i[t.identifier]||{},xs(t,!0))})):Jo(i[t.pointerId||0]||{},xs(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?Ko(t.changedTouches,(function(t){delete i[t.identifier]})):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,os(this.dragBox,fo,this.cropped&&this.options.modal)),ps(this.element,ko,{originalEvent:t,action:e}))}}},Cs={change:function(t){var e,i=this.options,r=this.canvasData,o=this.containerData,s=this.cropBoxData,n=this.pointers,a=this.action,l=i.aspectRatio,c=s.left,d=s.top,h=s.width,u=s.height,p=c+h,m=d+u,f=0,v=0,g=o.width,b=o.height,y=!0;!l&&t.shiftKey&&(l=h&&u?h/u:1),this.limited&&(f=s.minLeft,v=s.minTop,g=f+Math.min(o.width,r.width,r.left+r.width),b=v+Math.min(o.height,r.height,r.top+r.height));var x=n[Object.keys(n)[0]],w={x:x.endX-x.startX,y:x.endY-x.startY},_=function(t){switch(t){case eo:p+w.x>g&&(w.x=g-p);break;case io:c+w.x<f&&(w.x=f-c);break;case oo:d+w.y<v&&(w.y=v-d);break;case ro:m+w.y>b&&(w.y=b-m)}};switch(a){case Jr:c+=w.x,d+=w.y;break;case eo:if(w.x>=0&&(p>=g||l&&(d<=v||m>=b))){y=!1;break}_(eo),(h+=w.x)<0&&(a=io,c-=h=-h),l&&(u=h/l,d+=(s.height-u)/2);break;case oo:if(w.y<=0&&(d<=v||l&&(c<=f||p>=g))){y=!1;break}_(oo),u-=w.y,d+=w.y,u<0&&(a=ro,d-=u=-u),l&&(h=u*l,c+=(s.width-h)/2);break;case io:if(w.x<=0&&(c<=f||l&&(d<=v||m>=b))){y=!1;break}_(io),h-=w.x,c+=w.x,h<0&&(a=eo,c-=h=-h),l&&(u=h/l,d+=(s.height-u)/2);break;case ro:if(w.y>=0&&(m>=b||l&&(c<=f||p>=g))){y=!1;break}_(ro),(u+=w.y)<0&&(a=oo,d-=u=-u),l&&(h=u*l,c+=(s.width-h)/2);break;case so:if(l){if(w.y<=0&&(d<=v||p>=g)){y=!1;break}_(oo),u-=w.y,d+=w.y,h=u*l}else _(oo),_(eo),w.x>=0?p<g?h+=w.x:w.y<=0&&d<=v&&(y=!1):h+=w.x,w.y<=0?d>v&&(u-=w.y,d+=w.y):(u-=w.y,d+=w.y);h<0&&u<0?(a=lo,d-=u=-u,c-=h=-h):h<0?(a=no,c-=h=-h):u<0&&(a=ao,d-=u=-u);break;case no:if(l){if(w.y<=0&&(d<=v||c<=f)){y=!1;break}_(oo),u-=w.y,d+=w.y,h=u*l,c+=s.width-h}else _(oo),_(io),w.x<=0?c>f?(h-=w.x,c+=w.x):w.y<=0&&d<=v&&(y=!1):(h-=w.x,c+=w.x),w.y<=0?d>v&&(u-=w.y,d+=w.y):(u-=w.y,d+=w.y);h<0&&u<0?(a=ao,d-=u=-u,c-=h=-h):h<0?(a=so,c-=h=-h):u<0&&(a=lo,d-=u=-u);break;case lo:if(l){if(w.x<=0&&(c<=f||m>=b)){y=!1;break}_(io),h-=w.x,c+=w.x,u=h/l}else _(ro),_(io),w.x<=0?c>f?(h-=w.x,c+=w.x):w.y>=0&&m>=b&&(y=!1):(h-=w.x,c+=w.x),w.y>=0?m<b&&(u+=w.y):u+=w.y;h<0&&u<0?(a=so,d-=u=-u,c-=h=-h):h<0?(a=ao,c-=h=-h):u<0&&(a=no,d-=u=-u);break;case ao:if(l){if(w.x>=0&&(p>=g||m>=b)){y=!1;break}_(eo),u=(h+=w.x)/l}else _(ro),_(eo),w.x>=0?p<g?h+=w.x:w.y>=0&&m>=b&&(y=!1):h+=w.x,w.y>=0?m<b&&(u+=w.y):u+=w.y;h<0&&u<0?(a=no,d-=u=-u,c-=h=-h):h<0?(a=lo,c-=h=-h):u<0&&(a=so,d-=u=-u);break;case Zr:this.move(w.x,w.y),y=!1;break;case to:this.zoom(function(t){var e=Lr({},t),i=0;return Ko(t,(function(t,r){delete e[r],Ko(e,(function(e){var r=Math.abs(t.startX-e.startX),o=Math.abs(t.startY-e.startY),s=Math.abs(t.endX-e.endX),n=Math.abs(t.endY-e.endY),a=Math.sqrt(r*r+o*o),l=(Math.sqrt(s*s+n*n)-a)/a;Math.abs(l)>Math.abs(i)&&(i=l)}))})),i}(n),t),y=!1;break;case Qr:if(!w.x||!w.y){y=!1;break}e=ms(this.cropper),c=x.startX-e.left,d=x.startY-e.top,h=s.minWidth,u=s.minHeight,w.x>0?a=w.y>0?ao:so:w.x<0&&(c-=h,a=w.y>0?lo:no),w.y<0&&(d-=u),this.cropped||(rs(this.cropBox,uo),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}y&&(s.width=h,s.height=u,s.left=c,s.top=d,this.action=a,this.renderCropBox()),Ko(n,(function(t){t.startX=t.endX,t.startY=t.endY}))}},Es={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&is(this.dragBox,fo),rs(this.cropBox,uo),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=Jo({},this.initialImageData),this.canvasData=Jo({},this.initialCanvasData),this.cropBoxData=Jo({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(Jo(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),rs(this.dragBox,fo),is(this.cropBox,uo)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,Ko(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,rs(this.cropper,ho)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,is(this.cropper,ho)),this},destroy:function(){var t=this.element;return t[Kr]?(t[Kr]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,r=i.left,o=i.top;return this.moveTo(Ho(t)?t:r+Number(t),Ho(e)?e:o+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,r=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(Fo(t)&&(i.left=t,r=!0),Fo(e)&&(i.top=e,r=!0),r&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var r=this.options,o=this.canvasData,s=o.width,n=o.height,a=o.naturalWidth,l=o.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&r.zoomable){var c=a*t,d=l*t;if(!1===ps(this.element,Po,{ratio:t,oldRatio:s/a,originalEvent:i}))return this;if(i){var h=this.pointers,u=ms(this.cropper),p=h&&Object.keys(h).length?function(t){var e=0,i=0,r=0;return Ko(t,(function(t){var o=t.startX,s=t.startY;e+=o,i+=s,r+=1})),{pageX:e/=r,pageY:i/=r}}(h):{pageX:i.pageX,pageY:i.pageY};o.left-=(c-s)*((p.pageX-u.left-o.left)/s),o.top-=(d-n)*((p.pageY-u.top-o.top)/n)}else Go(e)&&Fo(e.x)&&Fo(e.y)?(o.left-=(c-s)*((e.x-o.left)/s),o.top-=(d-n)*((e.y-o.top)/n)):(o.left-=(c-s)/2,o.top-=(d-n)/2);o.width=c,o.height=d,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return Fo(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,Fo(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(Fo(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,r=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(Fo(t)&&(i.scaleX=t,r=!0),Fo(e)&&(i.scaleY=e,r=!0),r&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,r=this.imageData,o=this.canvasData,s=this.cropBoxData;if(this.ready&&this.cropped){t={x:s.left-o.left,y:s.top-o.top,width:s.width,height:s.height};var n=r.width/r.naturalWidth;if(Ko(t,(function(e,i){t[i]=e/n})),e){var a=Math.round(t.y+t.height),l=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=l-t.x,t.height=a-t.y}}else t={x:0,y:0,width:0,height:0};return i.rotatable&&(t.rotate=r.rotate||0),i.scalable&&(t.scaleX=r.scaleX||1,t.scaleY=r.scaleY||1),t},setData:function(t){var e=this.options,i=this.imageData,r=this.canvasData,o={};if(this.ready&&!this.disabled&&Go(t)){var s=!1;e.rotatable&&Fo(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,s=!0),e.scalable&&(Fo(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,s=!0),Fo(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,s=!0)),s&&this.renderCanvas(!0,!0);var n=i.width/i.naturalWidth;Fo(t.x)&&(o.left=t.x*n+r.left),Fo(t.y)&&(o.top=t.y*n+r.top),Fo(t.width)&&(o.width=t.width*n),Fo(t.height)&&(o.height=t.height*n),this.setCropBoxData(o)}return this},getContainerData:function(){return this.ready?Jo({},this.containerData):{}},getImageData:function(){return this.sized?Jo({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&Ko(["left","top","width","height","naturalWidth","naturalHeight"],(function(i){e[i]=t[i]})),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&Go(t)&&(Fo(t.left)&&(e.left=t.left),Fo(t.top)&&(e.top=t.top),Fo(t.width)?(e.width=t.width,e.height=t.width/i):Fo(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,r=this.cropBoxData,o=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&Go(t)&&(Fo(t.left)&&(r.left=t.left),Fo(t.top)&&(r.top=t.top),Fo(t.width)&&t.width!==r.width&&(e=!0,r.width=t.width),Fo(t.height)&&t.height!==r.height&&(i=!0,r.height=t.height),o&&(e?r.height=r.width/o:i&&(r.width=r.height*o)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=function(t,e,i,r){var o=e.aspectRatio,s=e.naturalWidth,n=e.naturalHeight,a=e.rotate,l=void 0===a?0:a,c=e.scaleX,d=void 0===c?1:c,h=e.scaleY,u=void 0===h?1:h,p=i.aspectRatio,m=i.naturalWidth,f=i.naturalHeight,v=r.fillColor,g=void 0===v?"transparent":v,b=r.imageSmoothingEnabled,y=void 0===b||b,x=r.imageSmoothingQuality,w=void 0===x?"low":x,_=r.maxWidth,k=void 0===_?1/0:_,$=r.maxHeight,A=void 0===$?1/0:$,S=r.minWidth,z=void 0===S?0:S,T=r.minHeight,C=void 0===T?0:T,E=document.createElement("canvas"),M=E.getContext("2d"),I=ws({aspectRatio:p,width:k,height:A}),P=ws({aspectRatio:p,width:z,height:C},"cover"),R=Math.min(I.width,Math.max(P.width,m)),O=Math.min(I.height,Math.max(P.height,f)),B=ws({aspectRatio:o,width:k,height:A}),N=ws({aspectRatio:o,width:z,height:C},"cover"),j=Math.min(B.width,Math.max(N.width,s)),L=Math.min(B.height,Math.max(N.height,n)),D=[-j/2,-L/2,j,L];return E.width=Zo(R),E.height=Zo(O),M.fillStyle=g,M.fillRect(0,0,R,O),M.save(),M.translate(R/2,O/2),M.rotate(l*Math.PI/180),M.scale(d,u),M.imageSmoothingEnabled=y,M.imageSmoothingQuality=w,M.drawImage.apply(M,[t].concat(qr(D.map((function(t){return Math.floor(Zo(t))}))))),M.restore(),E}(this.image,this.imageData,e,t);if(!this.cropped)return i;var r=this.getData(t.rounded),o=r.x,s=r.y,n=r.width,a=r.height,l=i.width/Math.floor(e.naturalWidth);1!==l&&(o*=l,s*=l,n*=l,a*=l);var c=n/a,d=ws({aspectRatio:c,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),h=ws({aspectRatio:c,width:t.minWidth||0,height:t.minHeight||0},"cover"),u=ws({aspectRatio:c,width:t.width||(1!==l?i.width:n),height:t.height||(1!==l?i.height:a)}),p=u.width,m=u.height;p=Math.min(d.width,Math.max(h.width,p)),m=Math.min(d.height,Math.max(h.height,m));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=Zo(p),f.height=Zo(m),v.fillStyle=t.fillColor||"transparent",v.fillRect(0,0,p,m);var g=t.imageSmoothingEnabled,b=void 0===g||g,y=t.imageSmoothingQuality;v.imageSmoothingEnabled=b,y&&(v.imageSmoothingQuality=y);var x,w,_,k,$,A,S=i.width,z=i.height,T=o,C=s;T<=-n||T>S?(T=0,x=0,_=0,$=0):T<=0?(_=-T,T=0,$=x=Math.min(S,n+T)):T<=S&&(_=0,$=x=Math.min(n,S-T)),x<=0||C<=-a||C>z?(C=0,w=0,k=0,A=0):C<=0?(k=-C,C=0,A=w=Math.min(z,a+C)):C<=z&&(k=0,A=w=Math.min(a,z-C));var E=[T,C,x,w];if($>0&&A>0){var M=p/n;E.push(_*M,k*M,$*M,A*M)}return v.drawImage.apply(v,[i].concat(qr(E.map((function(t){return Math.floor(Zo(t))}))))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||Ho(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,r=this.face;if(this.ready&&!this.disabled){var o=t===yo,s=e.movable&&t===xo;t=o||s?t:wo,e.dragMode=t,ls(i,go,t),os(i,co,o),os(i,vo,s),e.cropBoxMovable||(ls(r,go,t),os(r,co,o),os(r,vo,s))}return this}},Ms=Wr.Cropper,Is=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e||!jo.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=Jo({},Lo,Go(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return e=t,i=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[Kr]){if(e[Kr]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,r=this.options;if(r.rotatable||r.scalable||(r.checkOrientation=!1),r.checkOrientation&&window.ArrayBuffer)if(Bo.test(t))No.test(t)?this.read((o=t.replace(ks,""),s=atob(o),n=new ArrayBuffer(s.length),Ko(a=new Uint8Array(n),(function(t,e){a[e]=s.charCodeAt(e)})),n)):this.clone();else{var o,s,n,a,l=new XMLHttpRequest,c=this.clone.bind(this);this.reloading=!0,this.xhr=l,l.onabort=c,l.onerror=c,l.ontimeout=c,l.onprogress=function(){l.getResponseHeader("content-type")!==Ro&&l.abort()},l.onload=function(){e.read(l.response)},l.onloadend=function(){e.reloading=!1,e.xhr=null},r.checkCrossOrigin&&gs(t)&&i.crossOrigin&&(t=bs(t)),l.open("GET",t,!0),l.responseType="arraybuffer",l.withCredentials="use-credentials"===i.crossOrigin,l.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,r=$s(t),o=0,s=1,n=1;if(r>1){this.url=function(t,e){for(var i=[],r=new Uint8Array(t);r.length>0;)i.push(_s.apply(null,Yo(r.subarray(0,8192)))),r=r.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,Ro);var a=function(t){var e=0,i=1,r=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:r=-1;break;case 5:e=90,r=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:r}}(r);o=a.rotate,s=a.scaleX,n=a.scaleY}e.rotatable&&(i.rotate=o),e.scalable&&(i.scaleX=s,i.scaleY=n),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,r=e;this.options.checkCrossOrigin&&gs(e)&&(i||(i="anonymous"),r=bs(e)),this.crossOrigin=i,this.crossOriginUrl=r;var o=document.createElement("img");i&&(o.crossOrigin=i),o.src=r||e,o.alt=t.alt||"The image to crop",this.image=o,o.onload=this.start.bind(this),o.onerror=this.stop.bind(this),is(o,po),t.parentNode.insertBefore(o,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=Wr.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Wr.navigator.userAgent),r=function(e,i){Jo(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.initialImageData=Jo({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var o=document.createElement("img"),s=document.body||document.documentElement;this.sizingImage=o,o.onload=function(){r(o.width,o.height),i||s.removeChild(o)},o.src=e.src,i||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(o))}else r(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,r=t.parentNode,o=document.createElement("div");o.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var s=o.querySelector(".".concat(Kr,"-container")),n=s.querySelector(".".concat(Kr,"-canvas")),a=s.querySelector(".".concat(Kr,"-drag-box")),l=s.querySelector(".".concat(Kr,"-crop-box")),c=l.querySelector(".".concat(Kr,"-face"));this.container=r,this.cropper=s,this.canvas=n,this.dragBox=a,this.cropBox=l,this.viewBox=s.querySelector(".".concat(Kr,"-view-box")),this.face=c,n.appendChild(i),is(t,uo),r.insertBefore(s,t.nextSibling),rs(i,po),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,is(l,uo),e.guides||is(l.getElementsByClassName("".concat(Kr,"-dashed")),uo),e.center||is(l.getElementsByClassName("".concat(Kr,"-center")),uo),e.background&&is(s,"".concat(Kr,"-bg")),e.highlight||is(c,mo),e.cropBoxMovable&&(is(c,vo),ls(c,go,Jr)),e.cropBoxResizable||(is(l.getElementsByClassName("".concat(Kr,"-line")),uo),is(l.getElementsByClassName("".concat(Kr,"-point")),uo)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),Wo(e.ready)&&us(t,Eo,e.ready,{once:!0}),ps(t,Eo)}}},{key:"unbuild",value:function(){if(this.ready){this.ready=!1,this.unbind(),this.resetPreview();var t=this.cropper.parentNode;t&&t.removeChild(this.cropper),rs(this.element,uo)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],r=[{key:"noConflict",value:function(){return window.Cropper=Ms,t}},{key:"setDefaults",value:function(t){Jo(Lo,Go(t)&&t)}}],i&&Ur(e.prototype,i),r&&Ur(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,i,r}();Jo(Is.prototype,As,Ss,zs,Ts,Cs,Es);const Ps=d`
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
`,Rs=d`
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
`,Os=d`
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
`,Bs=d`
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
`,Ns=d`
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
`,js=d`
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
`,Ls=d`
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
`,Ds=d`
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
`,Fs=[js,Ls,d`
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
  `],Us=d`
  [ellipsis] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Hs={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},qs={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},Vs={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},Gs={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Ws={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class Xs{static getFirstMatch(t,e){const i=e.match(t);return i&&i.length>0&&i[1]||""}static getSecondMatch(t,e){const i=e.match(t);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(t,e,i){if(t.test(e))return i}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const e=t.split(".").splice(0,2).map((t=>parseInt(t,10)||0));if(e.push(0),10===e[0])switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const e=t.split(".").splice(0,2).map((t=>parseInt(t,10)||0));if(e.push(0),!(1===e[0]&&e[1]<5))return 1===e[0]&&e[1]<6?"Cupcake":1===e[0]&&e[1]>=6?"Donut":2===e[0]&&e[1]<2?"Eclair":2===e[0]&&2===e[1]?"Froyo":2===e[0]&&e[1]>2?"Gingerbread":3===e[0]?"Honeycomb":4===e[0]&&e[1]<1?"Ice Cream Sandwich":4===e[0]&&e[1]<4?"Jelly Bean":4===e[0]&&e[1]>=4?"KitKat":5===e[0]?"Lollipop":6===e[0]?"Marshmallow":7===e[0]?"Nougat":8===e[0]?"Oreo":9===e[0]?"Pie":void 0}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,e,i=!1){const r=Xs.getVersionPrecision(t),o=Xs.getVersionPrecision(e);let s=Math.max(r,o),n=0;const a=Xs.map([t,e],(t=>{const e=s-Xs.getVersionPrecision(t),i=t+new Array(e+1).join(".0");return Xs.map(i.split("."),(t=>new Array(20-t.length).join("0")+t)).reverse()}));for(i&&(n=s-Math.min(r,o)),s-=1;s>=n;){if(a[0][s]>a[1][s])return 1;if(a[0][s]===a[1][s]){if(s===n)return 0;s-=1}else if(a[0][s]<a[1][s])return-1}}static map(t,e){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(t,e);for(r=0;r<t.length;r+=1)i.push(e(t[r]));return i}static find(t,e){let i,r;if(Array.prototype.find)return Array.prototype.find.call(t,e);for(i=0,r=t.length;i<r;i+=1){const r=t[i];if(e(r,i))return r}}static assign(t,...e){const i=t;let r,o;if(Object.assign)return Object.assign(t,...e);for(r=0,o=e.length;r<o;r+=1){const t=e[r];if("object"==typeof t&&null!==t){Object.keys(t).forEach((e=>{i[e]=t[e]}))}}return t}static getBrowserAlias(t){return Hs[t]}static getBrowserTypeByAlias(t){return qs[t]||""}}const Ys=/version\/(\d+(\.?_?\d+)+)/i,Ks=[{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},i=Xs.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/opera/i],describe(t){const e={name:"Opera"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},i=Xs.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},i=Xs.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},i=Xs.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},i=Xs.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(t){const e={name:"Opera Touch"},i=Xs.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},i=Xs.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},i=Xs.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},i=Xs.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},i=Xs.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},i=Xs.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},i=Xs.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},i=Xs.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},i=Xs.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},i=Xs.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return i&&(e.version=i),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},i=Xs.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},i=Xs.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},i=Xs.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},i=Xs.getFirstMatch(Ys,t)||Xs.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},i=Xs.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},i=Xs.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},i=Xs.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},i=Xs.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},i=Xs.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MiuiBrowser/i],describe(t){const e={name:"Miui"},i=Xs.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},i=Xs.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},i=Xs.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},i=Xs.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e={name:"Android Browser"},i=Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},i=Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},i=Xs.getFirstMatch(Ys,t);return i&&(e.version=i),e}},{test:[/.*/i],describe(t){const e=-1!==t.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:Xs.getFirstMatch(e,t),version:Xs.getSecondMatch(e,t)}}}];var Js=[{test:[/Roku\/DVP/],describe(t){const e=Xs.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:Gs.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=Xs.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:Gs.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=Xs.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),i=Xs.getWindowsVersionName(e);return{name:Gs.Windows,version:e,versionName:i}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(t){const e={name:Gs.iOS},i=Xs.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return i&&(e.version=i),e}},{test:[/macintosh/i],describe(t){const e=Xs.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),i=Xs.getMacOSVersionName(e),r={name:Gs.MacOS,version:e};return i&&(r.versionName=i),r}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=Xs.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:Gs.iOS,version:e}}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e=Xs.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),i=Xs.getAndroidVersionName(e),r={name:Gs.Android,version:e};return i&&(r.versionName=i),r}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=Xs.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),i={name:Gs.WebOS};return e&&e.length&&(i.version=e),i}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=Xs.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||Xs.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||Xs.getFirstMatch(/\bbb(\d+)/i,t);return{name:Gs.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=Xs.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:Gs.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=Xs.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:Gs.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:Gs.Linux})},{test:[/CrOS/],describe:()=>({name:Gs.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=Xs.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:Gs.PlayStation4,version:e}}}],Qs=[{test:[/googlebot/i],describe:()=>({type:"bot",vendor:"Google"})},{test:[/huawei/i],describe(t){const e=Xs.getFirstMatch(/(can-l01)/i,t)&&"Nova",i={type:Vs.mobile,vendor:"Huawei"};return e&&(i.model=e),i}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:Vs.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:Vs.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:()=>({type:Vs.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:Vs.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:Vs.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:Vs.tablet})},{test(t){const e=t.test(/ipod|iphone/i),i=t.test(/like (ipod|iphone)/i);return e&&!i},describe(t){const e=Xs.getFirstMatch(/(ipod|iphone)/i,t);return{type:Vs.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:Vs.mobile,vendor:"Nexus"})},{test:[/[^-]mobi/i],describe:()=>({type:Vs.mobile})},{test:t=>"blackberry"===t.getBrowserName(!0),describe:()=>({type:Vs.mobile,vendor:"BlackBerry"})},{test:t=>"bada"===t.getBrowserName(!0),describe:()=>({type:Vs.mobile})},{test:t=>"windows phone"===t.getBrowserName(),describe:()=>({type:Vs.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&e>=3},describe:()=>({type:Vs.tablet})},{test:t=>"android"===t.getOSName(!0),describe:()=>({type:Vs.mobile})},{test:t=>"macos"===t.getOSName(!0),describe:()=>({type:Vs.desktop,vendor:"Apple"})},{test:t=>"windows"===t.getOSName(!0),describe:()=>({type:Vs.desktop})},{test:t=>"linux"===t.getOSName(!0),describe:()=>({type:Vs.desktop})},{test:t=>"playstation 4"===t.getOSName(!0),describe:()=>({type:Vs.tv})},{test:t=>"roku"===t.getOSName(!0),describe:()=>({type:Vs.tv})}],Zs=[{test:t=>"microsoft edge"===t.getBrowserName(!0),describe(t){if(/\sedg\//i.test(t))return{name:Ws.Blink};const e=Xs.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:Ws.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:Ws.Trident},i=Xs.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:Ws.Presto},i=Xs.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=t.test(/gecko/i),i=t.test(/like gecko/i);return e&&!i},describe(t){const e={name:Ws.Gecko},i=Xs.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:Ws.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:Ws.WebKit},i=Xs.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}}];class tn{constructor(t,e=!1){if(null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==e&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=Xs.find(Ks,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=Xs.find(Js,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:e}=this.getOS();return t?String(e).toLowerCase()||"":e||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:e}=this.getPlatform();return t?String(e).toLowerCase()||"":e||""}parsePlatform(){this.parsedResult.platform={};const t=Xs.find(Qs,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=Xs.find(Zs,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return Xs.assign({},this.parsedResult)}satisfies(t){const e={};let i=0;const r={};let o=0;if(Object.keys(t).forEach((s=>{const n=t[s];"string"==typeof n?(r[s]=n,o+=1):"object"==typeof n&&(e[s]=n,i+=1)})),i>0){const t=Object.keys(e),i=Xs.find(t,(t=>this.isOS(t)));if(i){const t=this.satisfies(e[i]);if(void 0!==t)return t}const r=Xs.find(t,(t=>this.isPlatform(t)));if(r){const t=this.satisfies(e[r]);if(void 0!==t)return t}}if(o>0){const t=Object.keys(r),e=Xs.find(t,(t=>this.isBrowser(t,!0)));if(void 0!==e)return this.compareVersion(r[e])}}isBrowser(t,e=!1){const i=this.getBrowserName().toLowerCase();let r=t.toLowerCase();const o=Xs.getBrowserTypeByAlias(r);return e&&o&&(r=o.toLowerCase()),r===i}compareVersion(t){let e=[0],i=t,r=!1;const o=this.getBrowserVersion();if("string"==typeof o)return">"===t[0]||"<"===t[0]?(i=t.substr(1),"="===t[1]?(r=!0,i=t.substr(2)):e=[],">"===t[0]?e.push(1):e.push(-1)):"="===t[0]?i=t.substr(1):"~"===t[0]&&(r=!0,i=t.substr(1)),e.indexOf(Xs.compareVersions(o,i,r))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,e=!1){return this.isBrowser(t,e)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some((t=>this.is(t)))}}class en{static getParser(t,e=!1){if("string"!=typeof t)throw new Error("UserAgent should be a string");return new tn(t,e)}static parse(t){return new tn(t).getResult()}static get BROWSER_MAP(){return qs}static get ENGINE_MAP(){return Ws}static get OS_MAP(){return Gs}static get PLATFORMS_MAP(){return Vs}}const rn=new URL(new URL("D9xn2E7Y.gif",import.meta.url).href,import.meta.url).href;let on=class extends(Mt(ut)){#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}#Rt;get img(){return this.#Rt}set img(t){this.#Rt=t}#Ot={};get options(){return this.#Ot}set options(t){this.#Ot=t}#Bt;get forcePNGOutput(){return this.#Bt}set forcePNGOutput(t){this.#Bt=t}#ut="";get fileName(){return this.#ut}set fileName(t){this.#ut=t}#Nt;#jt="";#Lt="";firstUpdated(){const t=en.getParser(window.navigator.userAgent),e=t?.getOS?.()?.name??"";this.#jt="iOS"===e||"macOS"===e||this.forcePNGOutput?"image/png":"image/webp",this.#Lt="iOS"===e||"macOS"===e||this.forcePNGOutput?"png":"webp"}static{this.styles=[Rs,Ls,Ps,d`
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

      section[crop] {
        display: grid;
        width: 100%;
        grid: 'cropper buttons' / 1fr 58px;
      }

      cropper-container {
        grid-area: cropper;

        display: block;
        max-width: 800px;
        max-height: 600px;
        overflow: hidden;
      }

      cropper-container img {
        display: block;
        /* This rule is very important, please don't ignore this */
        max-width: 100%;
      }

      crop-buttons {
        grid-area: buttons;

        display: grid;
        align-content: start;
        grid-auto-flow: row;

        padding: 0 8px;
        gap: 8px;
      }

      @media (max-width: 600px) {
        section[crop] {
          grid:
            'cropper'
            'buttons';
        }

        crop-buttons {
          justify-content: end;
          grid-auto-flow: column;
          padding: 8px 0;
        }
      }

      [hidden] {
        display: none !important;
      }
    `]}#Dt;#j;async open(t,e,i){return this.#Dt=i,this.dialog.returnValue="",this.reset(),this.fileName=e,this.#Ft(t),this.dialog.show(),await new Promise((t=>{this.#j=t}))}reset(){this.img.src="",this.#Nt?.destroy()}blobToFile(t,e){return new File([t],e,{lastModified:(new Date).getTime()})}#Ft(t){this.img.src=t,this.#Nt=new Is(this.img,{viewMode:2,aspectRatio:"circle"===this.options.shape?1:this.options.aspectRatio,...this.options})}#Ut(t,e){return t.slice(0,t.lastIndexOf("."))+`.${e}`}async#Ht(t){const e=document.createElement("canvas"),i=new Image,r=new Promise((t=>{i.onload=()=>{const r=Math.min(i.naturalWidth,i.naturalHeight);e.width=r,e.height=r;const o=e.getContext("2d");o.drawImage(i,0,0),o.globalCompositeOperation="destination-in",o.fillStyle="#000",o.beginPath(),o.arc(.5*r,.5*r,.5*r,0,2*Math.PI),o.fill(),o.globalCompositeOperation="source-over",t(e.toDataURL())}}));return i.src=t,await r}render(){return W`
      <md-dialog
        @open=${t=>Nr(t.target)}
        @close=${t=>{if("cancel"===t.target.returnValue||"cropped"===t.target.returnValue)return this.#j(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Crop and save image</div>
        <main slot="content">
          <loading-animation ?hidden=${!this.isLoading}>
            <img src=${rn} />
            <p>Uploading image...</p>
          </loading-animation>
          <section crop ?hidden=${this.isLoading}>
            <cropper-container ?circle=${"circle"===this.options.shape}>
              <img />
            </cropper-container>
            <crop-buttons>
              <md-icon-button label="Rotate right" title="Rotate right" @click=${()=>this.#Nt?.rotate(90)}
                ><md-icon>rotate_right</md-icon></md-icon-button
              >
              <md-icon-button label="Rotate left" title="Rotate left" @click=${()=>this.#Nt?.rotate(-90)}>
                <md-icon>rotate_left</md-icon>
              </md-icon-button>
            </crop-buttons>
          </section>
        </main>
        <div slot="actions">
          <md-text-button
            ?disabled=${this.isLoading}
            @click=${()=>{this.reset(),this.dialog.close("cancel")}}
            >Cancel</md-text-button
          >
          <md-text-button
            ?disabled=${this.isLoading}
            @click=${async()=>{this.isLoading=!0,await this.updateComplete,this.#Nt?.getCroppedCanvas();const t=this.#Nt?.getCroppedCanvas();if(!t)return;const e="circle"===this.options.shape?await this.#Ht(t.toDataURL(this.#jt)):t.toDataURL(this.#jt),i=await fetch(e),r=this.blobToFile(await i.blob(),this.#Ut(this.fileName,this.#Lt)),o=this.#Dt?.(r,e)||Promise.resolve();this.loadWhile(o),await o,this.isLoading=!1,this.dialog.close("cropped")}}
            >Save</md-text-button
          >
        </div>
      </md-dialog>
    `}};r([xt("md-dialog")],on.prototype,"dialog",null),r([xt("cropper-container > img")],on.prototype,"img",null),r([gt({type:Object})],on.prototype,"options",null),r([gt({type:Boolean,reflect:!0,attribute:"force-png"})],on.prototype,"forcePNGOutput",null),r([bt()],on.prototype,"fileName",null),on=r([mt("crop-and-save-image-dialog")],on);const sn=t=>t??Y;let nn=class extends ut{#qt;get imageUrl(){return this.#qt}set imageUrl(t){this.#qt=t}#Vt;get downloadSrc(){return this.#Vt}set downloadSrc(t){this.#Vt=t}#Gt;get filename(){return this.#Gt}set filename(t){this.#Gt=t}#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}async open(t,e,i){return this.imageUrl=void 0,this.filename=i,this.downloadSrc=e,this.imageUrl=t,this.dialog.show()}static{this.styles=[d`
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
    `]}render(){return W`
      <md-dialog @open=${t=>Nr(t.target)}>
        <div header slot="headline">${Pt(this.filename||"Image preview",60)}</div>
        <img slot="content" draggable="false" src=${sn(this.imageUrl)} />
        <div slot="actions">
          ${this.downloadSrc?W`<md-text-button
                @click=${t=>{t.stopPropagation(),window.open(this.downloadSrc)}}
                ><md-icon slot="icon">file_download</md-icon>Download</md-text-button
              >`:W`<div></div>`}

          <md-text-button
            @click=${t=>{t.stopPropagation(),this.dialog.close("close")}}
            >Close</md-text-button
          >
        </div>
      </md-dialog>
    `}};r([bt()],nn.prototype,"imageUrl",null),r([bt()],nn.prototype,"downloadSrc",null),r([bt()],nn.prototype,"filename",null),r([xt("md-dialog")],nn.prototype,"dialog",null),nn=r([mt("image-preview-dialog")],nn);const an=ue(ut);class ln extends an{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1,this.addEventListener("click",this.handleClick.bind(this))}focus(t){this.disabled&&!this.alwaysFocusable||super.focus(t)}render(){return W`
      <div class="container ${Zt(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(t){t.has("disabled")&&void 0!==t.get("disabled")&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled||this.softDisabled,"has-icon":this.hasIcon}}renderContainerContent(){return W`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return W`<span class="outline"></span>`}renderLeadingIcon(){return W`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return W`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">
        <span class="label-text" id="label">
          ${this.label?this.label:W`<slot></slot>`}
        </span>
      </span>
      <span class="touch"></span>
    `}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements({flatten:!0}).length>0}handleClick(t){if(this.softDisabled||this.disabled&&this.alwaysFocusable)return t.stopImmediatePropagation(),void t.preventDefault()}}ln.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0},r([gt({type:Boolean,reflect:!0})],ln.prototype,"disabled",void 0),r([gt({type:Boolean,attribute:"soft-disabled",reflect:!0})],ln.prototype,"softDisabled",void 0),r([gt({type:Boolean,attribute:"always-focusable"})],ln.prototype,"alwaysFocusable",void 0),r([gt()],ln.prototype,"label",void 0),r([gt({type:Boolean,reflect:!0,attribute:"has-icon"})],ln.prototype,"hasIcon",void 0);const cn="aria-label-remove";class dn extends ln{get ariaLabelRemove(){if(this.hasAttribute(cn))return this.getAttribute(cn);const{ariaLabel:t}=this;return t||this.label?`Remove ${t||this.label}`:null}set ariaLabelRemove(t){t!==this.ariaLabelRemove&&(null===t?this.removeAttribute(cn):this.setAttribute(cn,t),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(t){(this.alwaysFocusable||!this.disabled)&&t?.trailing&&this.trailingAction?this.trailingAction.focus(t):super.focus(t)}renderContainerContent(){return W`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(t){const e="ArrowLeft"===t.key,i="ArrowRight"===t.key;if(!e&&!i)return;if(!this.primaryAction||!this.trailingAction)return;const r="rtl"===getComputedStyle(this).direction?e:i,o=this.primaryAction?.matches(":focus-within"),s=this.trailingAction?.matches(":focus-within");if(r&&s||!r&&o)return;t.preventDefault(),t.stopPropagation();(r?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:t,trailingAction:e}=this;t&&e&&(t.tabIndex=-1,e.addEventListener("focusout",(()=>{t.tabIndex=0}),{once:!0}))}}function hn({ariaLabel:t,disabled:e,focusListener:i,tabbable:r=!1}){return W`
    <span id="remove-label" hidden aria-hidden="true">Remove</span>
    <button
      class="trailing action"
      aria-label=${t||Y}
      aria-labelledby=${t?Y:"remove-label label"}
      tabindex=${r?Y:-1}
      @click=${un}
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
  `}function un(t){if(this.disabled||this.softDisabled)return;t.stopPropagation();!this.dispatchEvent(new Event("remove",{cancelable:!0}))||this.remove()}class pn extends dn{constructor(){super(...arguments),this.avatar=!1,this.href="",this.target="",this.removeOnly=!1,this.selected=!1}get primaryId(){return this.href?"link":this.removeOnly?"":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}get primaryAction(){return this.removeOnly?null:this.renderRoot.querySelector(".primary.action")}getContainerClasses(){return{...super.getContainerClasses(),avatar:this.avatar,disabled:!this.href&&(this.disabled||this.softDisabled),link:!!this.href,selected:this.selected,"has-trailing":!0}}renderPrimaryAction(t){const{ariaLabel:e}=this;return this.href?W`
        <a
          class="primary action"
          id="link"
          aria-label=${e||Y}
          href=${this.href}
          target=${this.target||Y}
          >${t}</a
        >
      `:this.removeOnly?W`
        <span class="primary action" aria-label=${e||Y}>
          ${t}
        </span>
      `:W`
      <button
        class="primary action"
        id="button"
        aria-label=${e||Y}
        aria-disabled=${this.softDisabled||Y}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${t}</button
      >
    `}renderTrailingAction(t){return hn({focusListener:t,ariaLabel:this.ariaLabelRemove,disabled:!this.href&&(this.disabled||this.softDisabled),tabbable:this.removeOnly})}}r([gt({type:Boolean})],pn.prototype,"avatar",void 0),r([gt()],pn.prototype,"href",void 0),r([gt()],pn.prototype,"target",void 0),r([gt({type:Boolean,attribute:"remove-only"})],pn.prototype,"removeOnly",void 0),r([gt({type:Boolean,reflect:!0})],pn.prototype,"selected",void 0),r([xt(".trailing.action")],pn.prototype,"trailingAction",void 0);const mn=d`:host{--_container-height: var(--md-input-chip-container-height, 32px);--_disabled-label-text-color: var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color: var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font: var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color: var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color: var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width: var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color: var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity: var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color: var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape: var(--md-input-chip-avatar-shape, var(--md-sys-shape-corner-full, 9999px));--_avatar-size: var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color: var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size: var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color: var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color: var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color: var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color: var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-input-chip-leading-space, 16px);--_trailing-space: var(--md-input-chip-trailing-space, 16px);--_icon-label-space: var(--md-input-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-input-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-input-chip-with-trailing-icon-trailing-space, 8px)}:host([avatar]){--_container-shape-start-start: var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end: var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end: var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start: var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors: active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}
`,fn=d`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`,vn=d`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}
`,gn=d`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;let bn=class extends pn{};bn.styles=[vn,gn,fn,mn],bn=r([mt("md-input-chip")],bn);const yn=(t,e,i)=>{const r=new Map;for(let o=e;o<=i;o++)r.set(t[o],o);return r},xn=Jt(class extends Qt{constructor(t){if(super(t),t.type!==Xt)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let r;void 0===i?i=e:void 0!==e&&(r=e);const o=[],s=[];let n=0;for(const e of t)o[n]=r?r(e,n):n,s[n]=i(e,n),n++;return{values:s,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,r]){const o=(t=>t._$AH)(t),{values:s,keys:n}=this.dt(e,i,r);if(!Array.isArray(o))return this.ut=n,s;const a=this.ut??=[],l=[];let c,d,h=0,u=o.length-1,p=0,m=s.length-1;for(;h<=u&&p<=m;)if(null===o[h])h++;else if(null===o[u])u--;else if(a[h]===n[p])l[p]=sr(o[h],s[p]),h++,p++;else if(a[u]===n[m])l[m]=sr(o[u],s[m]),u--,m--;else if(a[h]===n[m])l[m]=sr(o[h],s[m]),or(t,l[m+1],o[h]),h++,m--;else if(a[u]===n[p])l[p]=sr(o[u],s[p]),or(t,o[h],o[u]),u--,p++;else if(void 0===c&&(c=yn(n,p,m),d=yn(a,h,u)),c.has(a[h]))if(c.has(a[u])){const e=d.get(n[p]),i=void 0!==e?o[e]:null;if(null===i){const e=or(t,o[h]);sr(e,s[p]),l[p]=e}else l[p]=sr(i,s[p]),or(t,o[h],i),o[e]=null;p++}else lr(o[u]),u--;else lr(o[h]),h++;for(;p<=m;){const e=or(t,l[m+1]);sr(e,s[p]),l[p++]=e}for(;h<=u;){const t=o[h++];null!==t&&lr(t)}return this.ut=n,ar(t,l),X}}),wn=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];function _n(t){const e=t.split(".");return e?.[e.length-1]||""}function kn(t){return"pdf"===t.toLowerCase()?new URL(new URL("BrwlMowD.png",import.meta.url).href,import.meta.url).href:new URL(new URL("Ciwo_vsG.png",import.meta.url).href,import.meta.url).href}function $n(t,e){if(t?.CdnFileName&&!e)return`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}?d=${encodeURIComponent(`${t.Name}.${t.Extension}`)}`}function An(t,e){if(t?.CdnFileName)return t?.PreviewSizes&&t?.PreviewSizes?.split(",").includes(String(e))?`https://cdn.leavitt.com/${t.CdnFileName}-${e}.${t.PreviewExtension}`:function(t){return"png"===t?.Extension||"jpg"===t?.Extension||"jpeg"===t?.Extension||"gif"===t?.Extension||"svg"===t?.Extension||"webp"===t?.Extension}(t)?`https://cdn.leavitt.com/${t.CdnFileName}.${t.Extension}`:void 0}let Sn=class extends ut{#Wt=[];get files(){return this.#Wt}set files(t){this.#Wt=t}#Xt=!1;get isOver(){return this.#Xt}set isOver(t){this.#Xt=t}#Yt=void 0;get previewSrc(){return this.#Yt}set previewSrc(t){this.#Yt=t}#Kt;get input(){return this.#Kt}set input(t){this.#Kt=t}#Jt;get imagePreviewDialog(){return this.#Jt}set imagePreviewDialog(t){this.#Jt=t}#Qt;get cropperDialog(){return this.#Qt}set cropperDialog(t){this.#Qt=t}#Zt;get confirmDeleteDialog(){return this.#Zt}set confirmDeleteDialog(t){this.#Zt=t}#te;get chipMultiSelect(){return this.#te}set chipMultiSelect(t){this.#te=t}#ee=[];#ie="image/*,.pdf";get accept(){return this.#ie}set accept(t){this.#ie=t}#re=!1;get multiple(){return this.#re}set multiple(t){this.#re=t}#St=!1;get required(){return this.#St}set required(t){this.#St=t}#It=!1;get disabled(){return this.#It}set disabled(t){this.#It=t}#oe=!1;get confirmDelete(){return this.#oe}set confirmDelete(t){this.#oe=t}#se="Confirm delete";get confirmDeleteHeader(){return this.#se}set confirmDeleteHeader(t){this.#se=t}#ne="Are you sure you would like to delete this attachment?";get confirmDeleteText(){return this.#ne}set confirmDeleteText(t){this.#ne=t}#ae="Add attachment";get addButtonLabel(){return this.#ae}set addButtonLabel(t){this.#ae=t}#$t="Attachments";get label(){return this.#$t}set label(t){this.#$t=t}#Tt;get supportingText(){return this.#Tt}set supportingText(t){this.#Tt=t}#At="No attachments";get noItemsText(){return this.#At}set noItemsText(t){this.#At=t}#Ot={};get options(){return this.#Ot}set options(t){this.#Ot=t}#le=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];get croppableImageFormats(){return this.#le}set croppableImageFormats(t){this.#le=t}getFiles(){return this.files}setFiles(...t){this.files=[...t].map((t=>({file:new File([""],t.fileName),previewSrc:t.previewSrc,downloadSrc:t.downloadSrc,id:t.id}))),this.#ee=structuredClone(this.files)}setFilesFromDatabaseAttachments(...t){this.files=[...t].filter((t=>t.Name&&t.Extension)).map((t=>({id:t.Id,file:new File([""],`${t?.Name}.${t?.Extension}`),previewSrc:An(t,512),downloadSrc:$n(t)}))),this.#ee=structuredClone(this.files)}checkValidity(){return this.chipMultiSelect.checkValidity()}reportValidity(){return this.chipMultiSelect.reportValidity()}hasChanges(){return JSON.stringify(this.#ee)!==JSON.stringify(this.files)}async reset(){this.#ee=[],this.previewSrc=void 0,this.files=[],this.isOver=!1,await this.updateComplete,this.chipMultiSelect.reset()}async handleNewFile(t){let e=!1;for(let i=0;i<(t?.length??0);i++){const r=t?.item(i);if(r){const t=this.croppableImageFormats.some((t=>r.name.endsWith(t)));if(t){"cropped"===await this.cropperDialog.open(URL.createObjectURL(r),r.name,(async(t,e)=>{const i={file:t,previewSrc:e??void 0};this.multiple?this.files=[...this.files,i]:this.files=[i]}))&&(this.reportValidity(),e=!0),await It(500)}else{const t={file:r},i=wn.some((t=>r.name.endsWith(t)));if(i)try{const e=await this.toBase64(r);"string"==typeof e&&(t.previewSrc=e??void 0)}catch{}this.multiple?this.files=[...this.files,t]:this.files=[t],this.reportValidity(),e=!0}}}e&&this.#ce()}#de=null;#he(t){const e=this.files.findIndex((e=>e===t));this.files.splice(e,1),this.requestUpdate("files"),this.reportValidity(),this.#ce()}toBase64(t){return new Promise(((e,i)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(r.result),r.onerror=t=>i(t)}))}#ce(){this.dispatchEvent(new Event("change"))}static{this.styles=[Ls,d`
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
    `]}render(){return W`
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
        ${xn(this.files,(t=>t.file.name),(t=>W`<md-input-chip
              label=${Pt(t.file.name)}
              ?closeable=${!this.disabled}
              @remove=${async e=>{e.preventDefault(),this.confirmDelete?(this.#de=t,this.confirmDeleteDialog?.show()):this.#he(t)}}
              @click=${()=>{(t.previewSrc||t.downloadSrc)&&this.imagePreviewDialog.open(t.previewSrc||kn(_n(t.file.name)),t.downloadSrc,t.file.name)}}
            >
              <img draggable="false" slot="icon" src="${t.previewSrc||kn(_n(t.file.name))}" />
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
            @click=${()=>{this.#de&&this.#he(this.#de),this.confirmDeleteDialog.close()}}
            >Confirm</md-text-button
          >
        </div>
      </md-dialog>
    `}};r([gt({type:Array})],Sn.prototype,"files",null),r([gt({type:Boolean,reflect:!0,attribute:"is-over"})],Sn.prototype,"isOver",null),r([gt({type:String})],Sn.prototype,"previewSrc",null),r([xt("input")],Sn.prototype,"input",null),r([xt("image-preview-dialog")],Sn.prototype,"imagePreviewDialog",null),r([xt("crop-and-save-image-dialog")],Sn.prototype,"cropperDialog",null),r([xt("md-dialog[confirm-delete]")],Sn.prototype,"confirmDeleteDialog",null),r([xt("titanium-chip-multi-select")],Sn.prototype,"chipMultiSelect",null),r([gt({type:String})],Sn.prototype,"accept",null),r([gt({type:Boolean})],Sn.prototype,"multiple",null),r([gt({type:Boolean})],Sn.prototype,"required",null),r([gt({type:Boolean,reflect:!0})],Sn.prototype,"disabled",null),r([gt({type:Boolean})],Sn.prototype,"confirmDelete",null),r([gt({type:String})],Sn.prototype,"confirmDeleteHeader",null),r([gt({type:String})],Sn.prototype,"confirmDeleteText",null),r([gt({type:String})],Sn.prototype,"addButtonLabel",null),r([gt({type:String})],Sn.prototype,"label",null),r([gt({type:String})],Sn.prototype,"supportingText",null),r([gt({type:String})],Sn.prototype,"noItemsText",null),r([gt({type:Object})],Sn.prototype,"options",null),r([gt({type:Array})],Sn.prototype,"croppableImageFormats",null),Sn=r([mt("titanium-smart-attachment-input")],Sn);class zn{async _getBearerTokenAsync(){return await Bt().getAccessTokenAsync()}}class Tn{constructor(t,e){this.status=t.status,this.headers=t.headers,this.blob=e}}class Cn{constructor(){this.type=null,this.shortType=null}}class En{constructor(t=new Cn){this._odataInfo=t}}class Mn{static#ue(t){const e=new Map;return Object.keys(t).filter((t=>0===t.indexOf("@odata"))).forEach((i=>e.set(i.replace("@odata.",""),t[i]))),e}#pe(t){return null===t.value||void 0===t.value||Array.isArray(t.value)?t:t.value}static#me(t){return Array.isArray(t.value)?t.value:[]}get odataCount(){return this.metadata.has("count")?this.metadata.get("count"):0}count(){return this.entities.length}firstOrDefault(){return this.count()>0?this.entities[0]:null}toList(){return this.entities}constructor(t,e){this.status=t.status,this.headers=t.headers,this.metadata=Mn.#ue(e),this.entities=Mn.#me(e),this.entity=0===this.entities.length?this.#pe(e):null}get containsMultipleEntities(){return this.entities.length>0}}const In=new Map;In.set(0,"CORS Error"),In.set(200,"OK"),In.set(201,"Created"),In.set(202,"Accepted"),In.set(203,"Non-Authoritative Information"),In.set(204,"No Content"),In.set(205,"Reset Content"),In.set(206,"Partial Content"),In.set(300,"Multiple Choices"),In.set(301,"Moved Permanently"),In.set(302,"Found"),In.set(303,"See Other"),In.set(304,"Not Modified"),In.set(305,"Use Proxy"),In.set(306,"Unused"),In.set(307,"Temporary Redirect"),In.set(400,"Bad Request"),In.set(401,"Unauthorized"),In.set(402,"Payment Required"),In.set(403,"Forbidden"),In.set(404,"Not Found"),In.set(405,"Method Not Allowed"),In.set(406,"Not Acceptable"),In.set(407,"Proxy Authentication Required"),In.set(408,"Request Timeout"),In.set(409,"Conflict"),In.set(410,"Gone"),In.set(411,"Length Required"),In.set(412,"Precondition Required"),In.set(413,"Request Entry Too Large"),In.set(414,"Request-URI Too Long"),In.set(415,"Unsupported Media Type"),In.set(416,"Requested Range Not Satisfiable"),In.set(417,"Expectation Failed"),In.set(418,"I'm a teapot"),In.set(429,"Too Many Requests"),In.set(500,"Internal Server Error"),In.set(501,"Not Implemented"),In.set(502,"Bad Gateway"),In.set(503,"Service Unavailable"),In.set(504,"Gateway Timeout"),In.set(505,"HTTP Version Not Supported");class Pn{constructor(t,e){this.headers={},this.baseUrl="https://api2.leavitt.com/",this.#fe=t,this.addHeader("Content-Type","application/json"),this.#ve=e?.appNameHeaderKey?e?.appNameHeaderKey:"X-LGAppName",this.addHeader(this.#ve,"General")}#fe;#ve;addHeader(t,e){this.headers[t]=e}deleteHeader(t){delete this.headers[t]}#ge(t){return this.baseUrl?.endsWith("/")&&t?.startsWith("/")&&Et&&alert(`API Service Warning: Malformed url, double slashes present. \r\n\r\n${this.baseUrl}${t}`),`${this.baseUrl}${t}`}async uploadFile(t,e,i,r){return new Promise((async(o,s)=>{r?.abortController?.signal&&r?.abortController.signal.aborted&&s(new Rn);e&&e.name||s("ArgumentException: Invalid file passed to uploadFile.");try{const n=new XMLHttpRequest;n.onabort=function(){s(new Rn)},r?.abortController?.signal&&(r?.abortController.signal.addEventListener("abort",(()=>n.abort())),n.onreadystatechange=function(){4===n.readyState&&r?.abortController?.signal.removeEventListener("abort",(()=>n.abort()))}),n.upload.addEventListener("progress",(t=>{i(t,n)})),n.open("POST",this.#ge(t),!0);const a={...this.headers},l=await this.#fe._getBearerTokenAsync();null!==l&&(a.Authorization=`Bearer ${l}`),a["X-LGAttachmentName"]=e.name;for(const t in a)n.setRequestHeader(t,a[t]);n.addEventListener("loadend",(()=>{try{const e={text:()=>n.response,status:n.status};if("blob"===r?.responseType){const i=this.#be(e,"UPLOAD",t);return o(i)}{const i=this.#ye(e,"UPLOAD",t);return o(i)}}catch(t){return s(t)}}),!1),n.send(e)}catch(e){return Promise.reject(this.#xe(e,"UPLOAD",t))}}))}async postAsync(t,e={},i){e instanceof En&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers};i?.sendAsFormData&&delete r["Content-Type"];const o=await this.#fe._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#ge(t),{method:"POST",body:i?.sendAsFormData?this.#we(e):JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#xe(e,"POST",t))}return"blob"===i?.responseType?await this.#be(s,"POST",t):await this.#ye(s,"POST",t)}async patchAsync(t,e,i){e instanceof En&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#fe._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#ge(t),{method:"PATCH",body:JSON.stringify(e),headers:r,signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#xe(e,"PATCH",t))}return"blob"===i?.responseType?await this.#be(s,"PATCH",t):await this.#ye(s,"PATCH",t)}async patchReturnDtoAsync(t,e,i){e instanceof En&&e._odataInfo&&!e["@odata.type"]&&(e._odataInfo.type&&(e["@odata.type"]=e._odataInfo.type),delete e._odataInfo);const r={...this.headers},o=await this.#fe._getBearerTokenAsync();let s;null!==o&&(r.Authorization=`Bearer ${o}`);try{s=await fetch(this.#ge(t),{method:"PATCH",body:JSON.stringify(e),headers:{...r,Prefer:"return=representation"},signal:i?.abortController?.signal})}catch(e){return Promise.reject(this.#xe(e,"PATCH",t))}return"blob"===i?.responseType?await this.#be(s,"PATCH",t):await this.#ye(s,"PATCH",t)}async deleteAsync(t,e){const i={...this.headers},r=await this.#fe._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#ge(t),{method:"DELETE",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#xe(e,"DELETE",t))}return"blob"===e?.responseType?await this.#be(o,"DELETE",t):await this.#ye(o,"DELETE",t)}async getAsync(t,e){const i={...this.headers},r=await this.#fe._getBearerTokenAsync();let o;null!==r&&(i.Authorization=`Bearer ${r}`);try{o=await fetch(this.#ge(t),{method:"GET",headers:i,signal:e?.abortController?.signal})}catch(e){return Promise.reject(this.#xe(e,"GET",t))}return"blob"===e?.responseType?await this.#be(o,"GET",t):await this.#ye(o,"GET",t)}#_e(t,e,i){return i.indexOf(t)===e}async aggregateResponses(t){const e=new Map,i=[],r=t.map((async t=>{try{await t()}catch(t){i.push(t);const r=t.message;e.set(r,(e.get(r)??0)+1)}}));if(await Promise.allSettled(r),e.size>0){const r={type:"HttpError",action:i.map((t=>t.action)).filter(this.#_e).join(", "),message:`${i.length} of ${t.length} actions failed`,detail:Array.from(e.keys()).map((t=>`${e.get(t)} error(s):  ${t}`)).join("\n"),baseUrl:i.map((t=>t.baseUrl)).filter(this.#_e).join(", "),path:i.map((t=>t.path)).filter(this.#_e).join(", ")};return Promise.reject(r)}}#xe(t,e,i,r=void 0){const o=t?.message?.includes("Failed to fetch")?"Network error. Check your connection and try again.":"AbortError"===t?.name?"Abort error. Request has been aborted.":t?.message||t;return{type:"HttpError",statusCode:r,baseUrl:this.baseUrl,message:o,action:e,path:i}}async#be(t,e,i){try{if(0===t.status||t.status>=400&&t.status<=600){const r=await t.text(),o=r.length?JSON.parse(r):{},s=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||In.get(t.status)||"unknown";o?.details&&console.warn(o.details);const n={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:s,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(n)}{const e=await t.blob();return Promise.resolve(new Tn(t,e))}}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}async#ye(t,e,i){const r=await t.text();let o;try{if(o=r.length?JSON.parse(r):{},0===t.status||t.status>=400&&t.status<=600){const r=o?.error?.message||(o.error&&"string"==typeof o.error?o.error:void 0)||o?.value||In.get(t.status)||"unknown";o?.details&&console.warn(o.details);const s={type:"HttpError",statusCode:t.status,baseUrl:this.baseUrl,message:r,detail:o?.details||o?.error_description,raw:o,action:e,path:i};return Promise.reject(s)}return Promise.resolve(new Mn(t,o))}catch(t){return Promise.reject(`The server sent back invalid JSON. ${t}`)}}#we(t,e,i){const r=e||new FormData;let o;for(const e in t)if(Object.hasOwn(t,e)){if(void 0===t[e])continue;o=i?t[e]instanceof File?i:i+"["+e+"]":e,"object"!=typeof t[e]||t[e]instanceof File?r.append(o,t[e]):this.#we(t[e],r,o)}return r}}class Rn extends Error{constructor(){super(...arguments),this.name="AbortError",this.message="Aborted"}}function On(t){const e=()=>{t?.open&&t.close("navigation-close")};t.i=e,window.addEventListener("popstate",e,!1)}function Bn(t){t?.i&&(window.removeEventListener("popstate",t.i,!1),t.i=void 0)}const Nn=new Pn(new zn);Nn.baseUrl=Et?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",Nn.addHeader("X-LGAppName","IssueTracking"),Object.freeze(Nn);let jn=class extends(Mt(ut)){#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}#ke;get snackbar(){return this.#ke}set snackbar(t){this.#ke=t}#$e;get textArea(){return this.#$e}set textArea(t){this.#$e=t}#Ae;get imageInput(){return this.#Ae}set imageInput(t){this.#Ae=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.imageInput?.reset(),this.textArea?.reset()}async#Se(){if(!this.textArea.reportValidity()||this.isLoading)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Bug",Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map((t=>t.file))};try{const e=Nn.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new Me(e)),this.loadWhile(e);if(!(await e).entity)throw new Error("Error submitting problem. Please try again.");document.dispatchEvent(new Ce("",{overrideTemplate:W`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset(),this.dialog.close("done")}catch(t){this.dispatchEvent(new Ce(t))}}static{this.styles=[Rs,Ls,d`
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
    `]}render(){return W`
      <md-dialog
        @open=${t=>{On(t.target),Nr(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue)return Bn(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
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
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#Se()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};r([xt("md-dialog")],jn.prototype,"dialog",null),r([xt("titanium-snackbar-stack")],jn.prototype,"snackbar",null),r([xt("md-outlined-text-field")],jn.prototype,"textArea",null),r([xt("titanium-smart-attachment-input")],jn.prototype,"imageInput",null),jn=r([mt("report-a-problem-dialog")],jn);const Ln=new Pn(new zn);Ln.baseUrl=Et?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",Ln.addHeader("X-LGAppName","IssueTracking"),Object.freeze(Ln);let Dn=class extends(Mt(ut)){#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}#ke;get snackbar(){return this.#ke}set snackbar(t){this.#ke=t}#$e;get textArea(){return this.#$e}set textArea(t){this.#$e=t}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.textArea?.reset()}async#Se(){if(!this.textArea.reportValidity()||this.isLoading||!this.textArea.value)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Feedback",Description:this.textArea.value,Attachments:[]};try{const e=Ln.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new Me(e)),this.loadWhile(e);if(!(await e).entity)throw new Error("Error submitting feedback. Please try again.");document.dispatchEvent(new Ce("We appreciate your input, and we will promptly conduct a review!")),this.reset(),this.dialog.close("done")}catch(t){this.dispatchEvent(new Ce(t))}}static{this.styles=[Rs,Ls,d`
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
    `]}render(){return W`
      <md-dialog
        @open=${t=>{On(t.target),Nr(t.target)}}
        @close=${t=>{if("cancel"===t.target.returnValue||"done"===t.target.returnValue)return Bn(t.target),void this.snackbar.dismissAll();t.preventDefault()}}
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
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#Se()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};r([xt("md-dialog")],Dn.prototype,"dialog",null),r([xt("titanium-snackbar-stack")],Dn.prototype,"snackbar",null),r([xt("md-outlined-text-field")],Dn.prototype,"textArea",null),Dn=r([mt("provide-feedback-dialog")],Dn);const Fn=d`:host{--_container-height: var(--md-outlined-icon-button-container-height, 40px);--_container-width: var(--md-outlined-icon-button-container-width, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_disabled-outline-color: var(--md-outlined-icon-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-icon-button-disabled-outline-opacity, 0.12);--_focus-icon-color: var(--md-outlined-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-outlined-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-outlined-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_icon-color: var(--md-outlined-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-outlined-icon-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-icon-button-outline-width, 1px);--_pressed-icon-color: var(--md-outlined-icon-button-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-outlined-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-outlined-icon-button-container-shape-start-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-icon-button-container-shape-start-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-icon-button-container-shape-end-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-icon-button-container-shape-end-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.outlined{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_outline-color);border-width:var(--_outline-width)}.outlined:hover{color:var(--_hover-icon-color)}.outlined:focus{color:var(--_focus-icon-color)}.outlined:active{color:var(--_pressed-icon-color)}.outlined:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.outlined:is(:disabled,[aria-disabled=true])::before{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.outlined:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}.selected:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-outline-opacity: 1}.selected::before{border-color:CanvasText;border-width:var(--_outline-width)}.selected:is(:disabled,[aria-disabled=true])::before{border-color:GrayText;opacity:1}}
`;let Un=class extends Ri{getRenderClasses(){return{...super.getRenderClasses(),outlined:!0}}};Un.styles=[Oi,Fn],Un=r([mt("md-outlined-icon-button")],Un);const Hn=new Set(Object.values(ti));class qn extends ut{get items(){return this.listController.items}constructor(){super(),this.listController=new ei({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>Hn.has(t),isActivatable:t=>!t.disabled&&"text"!==t.type}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return W`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}r([kt({flatten:!0})],qn.prototype,"slotItems",void 0);const Vn=d`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;let Gn=class extends qn{};Gn.styles=[Vn],Gn=r([mt("md-list")],Gn);class Wn extends ut{constructor(){super(...arguments),this.multiline=!1}render(){return W`
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
    `}handleTextSlotChange(){let t=!1,e=0;for(const i of this.textSlots)if(Xn(i)&&(e+=1),e>1){t=!0;break}this.multiline=t}}function Xn(t){for(const e of t.assignedNodes({flatten:!0})){const t=e.nodeType===Node.ELEMENT_NODE,i=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(t||i)return!0}return!1}r([gt({type:Boolean,reflect:!0})],Wn.prototype,"multiline",void 0),r([_t(".text slot")],Wn.prototype,"textSlots",void 0);const Yn=d`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;let Kn=class extends Wn{};Kn.styles=[Yn],Kn=r([mt("md-item")],Kn);const Jn=ue(ut);class Qn extends Jn{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&"link"!==this.type}willUpdate(t){this.href&&(this.type="link"),super.willUpdate(t)}render(){return this.renderListItem(W`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const e="link"===this.type;let i;switch(this.type){case"link":i=Ci`a`;break;case"button":i=Ci`button`;break;default:i=Ci`li`}const r="text"!==this.type,o=e&&this.target?this.target:Y;return Mi`
      <${i}
        id="item"
        tabindex="${this.isDisabled||!r?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||Y}
        aria-checked=${this.ariaChecked||Y}
        aria-expanded=${this.ariaExpanded||Y}
        aria-haspopup=${this.ariaHasPopup||Y}
        class="list-item ${Zt(this.getRenderClasses())}"
        href=${this.href||Y}
        target=${o}
        @focus=${this.onFocus}
      >${t}</${i}>
    `}renderRipple(){return"text"===this.type?Y:W` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return"text"===this.type?Y:W` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(t){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return W`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){-1===this.tabIndex&&this.dispatchEvent(new Event("request-activation",{bubbles:!0,composed:!0}))}focus(){this.listItemRoot?.focus()}}Qn.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0},r([gt({type:Boolean,reflect:!0})],Qn.prototype,"disabled",void 0),r([gt({reflect:!0})],Qn.prototype,"type",void 0),r([gt({type:Boolean,attribute:"md-list-item",reflect:!0})],Qn.prototype,"isListItem",void 0),r([gt()],Qn.prototype,"href",void 0),r([gt()],Qn.prototype,"target",void 0),r([xt(".list-item")],Qn.prototype,"listItemRoot",void 0);const Zn=d`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;let ta=class extends Qn{};ta.styles=[Zn],ta=r([mt("md-list-item")],ta);var ea=function(){return ea=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},ea.apply(this,arguments)},ia=function(){function t(t,e,i){var r=this;this.endVal=e,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var i=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=i?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(t){var e,i,o,s,n=t<0?"-":"";e=Math.abs(t).toFixed(r.options.decimalPlaces);var a=(e+="").split(".");if(i=a[0],o=a.length>1?r.options.decimal+a[1]:"",r.options.useGrouping){s="";for(var l=3,c=0,d=0,h=i.length;d<h;++d)r.options.useIndianSeparators&&4===d&&(l=2,c=1),0!==d&&c%l==0&&(s=r.options.separator+s),c++,s=i[h-d-1]+s;i=s}return r.options.numerals&&r.options.numerals.length&&(i=i.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]})),o=o.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]}))),n+r.options.prefix+i+o+r.options.suffix},this.easeOutExpo=function(t,e,i,r){return i*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=ea(ea({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return r.handleScroll(r)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),r=i.top+window.pageYOffset,o=i.top+i.height+window.pageYOffset;o<e&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var i=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,i):"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();let ra=class extends ut{#ze;get major(){return this.#ze}set major(t){this.#ze=t}#Te;get minor(){return this.#Te}set minor(t){this.#Te=t}#Ce;get rev(){return this.#Ce}set rev(t){this.#Ce=t}#Ee;get downloads(){return this.#Ee}set downloads(t){this.#Ee=t}#Me="@leavittsoftware%2Fweb";async firstUpdated(){const t=await this.#Ie(this.#Me);if(t){const[e,i,r]=t.version?.split(".")?.map((t=>Number(t)))??[],o=new ia(this.major,e,{suffix:".",duration:1}),s=new ia(this.minor,i,{suffix:".",duration:1}),n=new ia(this.rev,r,{duration:1});o.start(),setTimeout((()=>{s.start()}),500),setTimeout((()=>{n.start()}),1e3);new ia(this.downloads,t.downloads??0,{useGrouping:!0,suffix:" weekly downloads"}).start()}}async#Ie(t){try{const e=await fetch(`https://api.npmjs.org/versions/${t}/last-week`,{method:"GET"}),i=await e.text(),r=i.length?JSON.parse(i):{},o=Object.entries(r.downloads).map((t=>({version:t?.[0]?.split(".").map((t=>+t+1e5)).join("."),downloads:t?.[1]}))).sort(((t,e)=>t.version.localeCompare(e.version))).map((t=>({...t,version:t.version?.split(".").map((t=>+t-1e5)).join(".")})));return o?.pop()}catch(t){console.warn(t)}return null}static{this.styles=[d`
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
    `]}render(){return W`
      <stats-container>
        <info-chip tertiary>
          <span>v<span class="major"></span><span class="minor"></span><span class="rev"></span></span
        ></info-chip>

        <info-chip>
          <span slot="label"><span class="downloads"></span></span
        ></info-chip>
      </stats-container>
    `}};r([xt("span.major")],ra.prototype,"major",null),r([xt("span.minor")],ra.prototype,"minor",null),r([xt("span.rev")],ra.prototype,"rev",null),r([xt("span.downloads")],ra.prototype,"downloads",null),ra=r([mt("npm-stats")],ra);class oa extends CustomEvent{static{this.eventName="change-route"}constructor(t){super(oa.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class sa extends CustomEvent{static{this.eventName="redirect-route"}constructor(t){super(sa.eventName,{bubbles:!0,composed:!0,detail:{path:t}})}}class na extends CustomEvent{static{this.eventName="site-error"}constructor(t){super(na.eventName,{bubbles:!0,composed:!0,detail:t})}}class aa extends Event{static{this.eventType="confirm-dialog-open"}constructor(t,e){super(aa.eventType,{bubbles:!0,composed:!0}),this.header=t,this.text=e,this.dialogResult=new Promise((t=>{this.resolver=t}))}}const la=d`
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
`;var ca=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},da=ka,ha=va,ua=function(t){return ga(va(t))},pa=ga,ma=_a,fa=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function va(t){for(var e,i=[],r=0,o=0,s="";null!=(e=fa.exec(t));){var n=e[0],a=e[1],l=e.index;if(s+=t.slice(o,l),o=l+n.length,a)s+=a[1];else{s&&(i.push(s),s="");var c=e[2],d=e[3],h=e[4],u=e[5],p=e[6],m=e[7],f="+"===p||"*"===p,v="?"===p||"*"===p,g=c||"/",b=h||u||(m?".*":"[^"+g+"]+?");i.push({name:d||r++,prefix:c||"",delimiter:g,optional:v,repeat:f,pattern:ya(b)})}}return o<t.length&&(s+=t.substr(o)),s&&i.push(s),i}function ga(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^"+t[i].pattern+"$"));return function(i){for(var r="",o=i||{},s=0;s<t.length;s++){var n=t[s];if("string"!=typeof n){var a,l=o[n.name];if(null==l){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to be defined')}if(ca(l)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(a=encodeURIComponent(l[c]),!e[s].test(a))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received "'+a+'"');r+=(0===c?n.prefix:n.delimiter)+a}}else{if(a=encodeURIComponent(l),!e[s].test(a))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+a+'"');r+=n.prefix+a}}else r+=n}return r}}function ba(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function ya(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function xa(t,e){return t.keys=e,t}function wa(t){return t.sensitive?"":"i"}function _a(t,e){for(var i=(e=e||{}).strict,r=!1!==e.end,o="",s=t[t.length-1],n="string"==typeof s&&/\/$/.test(s),a=0;a<t.length;a++){var l=t[a];if("string"==typeof l)o+=ba(l);else{var c=ba(l.prefix),d=l.pattern;l.repeat&&(d+="(?:"+c+d+")*"),o+=d=l.optional?c?"(?:"+c+"("+d+"))?":"("+d+")?":c+"("+d+")"}}return i||(o=(n?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":i&&n?"":"(?=\\/|$)",new RegExp("^"+o,wa(e))}function ka(t,e,i){return ca(e=e||[])?i||(i={}):(i=e,e=[]),t instanceof RegExp?function(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var r=0;r<i.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return xa(t,e)}(t,e):ca(t)?function(t,e,i){for(var r=[],o=0;o<t.length;o++)r.push(ka(t[o],e,i).source);return xa(new RegExp("(?:"+r.join("|")+")",wa(i)),e)}(t,e,i):function(t,e,i){for(var r=va(t),o=_a(r,i),s=0;s<r.length;s++)"string"!=typeof r[s]&&e.push(r[s]);return xa(o,e)}(t,e,i)}da.parse=ha,da.compile=ua,da.tokensToFunction=pa,da.tokensToRegExp=ma;var $a,Aa="undefined"!=typeof document,Sa="undefined"!=typeof window,za="undefined"!=typeof history,Ta="undefined"!=typeof process,Ca=Aa&&document.ontouchstart?"touchstart":"click",Ea=Sa&&!(!window.history.location&&!window.location);function Ma(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function Ia(t,e){if("function"==typeof t)return Ia.call(this,"*",t);if("function"==typeof e)for(var i=new Oa(t,null,this),r=1;r<arguments.length;++r)this.callbacks.push(i.middleware(arguments[r]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function Pa(t){if(!t.handled){var e=this,i=e._window;(e._hashbang?Ea&&this._getBase()+i.location.hash.replace("#!",""):Ea&&i.location.pathname+i.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,Ea&&(i.location.href=t.canonicalPath))}}function Ra(t,e,i){var r=this.page=i||Ia,o=r._window,s=r._hashbang,n=r._getBase();"/"===t[0]&&0!==t.indexOf(n)&&(t=n+(s?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var l=new RegExp("^"+function(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(n));if(this.path=t.replace(l,"")||"/",s&&(this.path=this.path.replace("#!","")||"/"),this.title=Aa&&o.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?r._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!s){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=r._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function Oa(t,e,i){var r=this.page=i||Ba,o=e||{};o.strict=o.strict||r._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=da(this.path,this.keys=[],o)}Ma.prototype.configure=function(t){var e=t||{};this._window=e.window||Sa&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&Sa,this._click=!1!==e.click&&Aa,this._hashbang=!!e.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):Sa&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(Ca,this.clickHandler,!1):Aa&&i.document.removeEventListener(Ca,this.clickHandler,!1),this._hashbang&&Sa&&!za?i.addEventListener("hashchange",this._onpopstate,!1):Sa&&i.removeEventListener("hashchange",this._onpopstate,!1)},Ma.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},Ma.prototype._getBase=function(){var t=this._base;if(t)return t;var e=Sa&&this._window&&this._window.location;return Sa&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},Ma.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},Ma.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var i;if(this._running=!0,Ea){var r=this._window.location;i=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(i,null,!0,e.dispatch)}},Ma.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(Ca,this.clickHandler,!1),Sa&&t.removeEventListener("popstate",this._onpopstate,!1),Sa&&t.removeEventListener("hashchange",this._onpopstate,!1)}},Ma.prototype.show=function(t,e,i,r){var o=new Ra(t,e,this),s=this.prevContext;return this.prevContext=o,this.current=o.path,!1!==i&&this.dispatch(o,s),!1!==o.handled&&!1!==r&&o.pushState(),o},Ma.prototype.back=function(t,e){var i=this;if(this.len>0){var r=this._window;za&&r.history.back(),this.len--}else t?setTimeout((function(){i.show(t,e)})):setTimeout((function(){i.show(i._getBase(),e)}))},Ma.prototype.redirect=function(t,e){var i=this;"string"==typeof t&&"string"==typeof e&&Ia.call(this,t,(function(t){setTimeout((function(){i.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){i.replace(t)}),0)},Ma.prototype.replace=function(t,e,i,r){var o=new Ra(t,e,this),s=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=i,o.save(),!1!==r&&this.dispatch(o,s),o},Ma.prototype.dispatch=function(t,e){var i=0,r=0,o=this;function s(){var e=o.callbacks[i++];if(t.path===o.current)return e?void e(t,s):Pa.call(o,t);t.handled=!1}e?function t(){var i=o.exits[r++];if(!i)return s();i(e,t)}():s()},Ma.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var i=new Oa(t,null,this),r=1;r<arguments.length;++r)this.exits.push(i.middleware(arguments[r]))},Ma.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,i=t.path||(t.composedPath?t.composedPath():null);if(i)for(var r=0;r<i.length;r++)if(i[r].nodeName&&"A"===i[r].nodeName.toUpperCase()&&i[r].href){e=i[r];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var o="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var s=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==s)&&!(s&&s.indexOf("mailto:")>-1)&&!(o?e.target.baseVal:e.target)&&(o||this.sameOrigin(e.href))){var n=o?e.href.baseVal:e.pathname+e.search+(e.hash||"");n="/"!==n[0]?"/"+n:n,Ta&&n.match(/^\/[a-zA-Z]:\//)&&(n=n.replace(/^\/[a-zA-Z]:\//,"/"));var a=n,l=this._getBase();0===n.indexOf(l)&&(n=n.substr(l.length)),this._hashbang&&(n=n.replace("#!","")),(!l||a!==n||Ea&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},Ma.prototype._onpopstate=($a=!1,Sa?(Aa&&"complete"===document.readyState?$a=!0:window.addEventListener("load",(function(){setTimeout((function(){$a=!0}),0)})),function(t){if($a){var e=this;if(t.state){var i=t.state.path;e.replace(i,t.state)}else if(Ea){var r=e._window.location;e.show(r.pathname+r.search+r.hash,void 0,void 0,!1)}}}):function(){}),Ma.prototype._which=function(t){return null==(t=t||Sa&&this._window.event).which?t.button:t.which},Ma.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&Ea)return new URL(t,e.location.toString());if(Aa){var i=e.document.createElement("a");return i.href=t,i}},Ma.prototype.sameOrigin=function(t){if(!t||!Ea)return!1;var e=this._toURL(t),i=this._window.location;return i.protocol===e.protocol&&i.hostname===e.hostname&&(i.port===e.port||""===i.port&&(80==e.port||443==e.port))},Ma.prototype._samePath=function(t){if(!Ea)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},Ma.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},Ra.prototype.pushState=function(){var t=this.page,e=t._window,i=t._hashbang;t.len++,za&&e.history.pushState(this.state,this.title,i&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},Ra.prototype.save=function(){var t=this.page;za&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},Oa.prototype.middleware=function(t){var e=this;return function(i,r){if(e.match(i.path,i.params))return i.routePath=e.path,t(i,r);r()}},Oa.prototype.match=function(t,e){var i=this.keys,r=t.indexOf("?"),o=~r?t.slice(0,r):t,s=this.regexp.exec(decodeURIComponent(o));if(!s)return!1;delete e[0];for(var n=1,a=s.length;n<a;++n){var l=i[n-1],c=this.page._decodeURLEncodedURIComponent(s[n]);void 0===c&&hasOwnProperty.call(e,l.name)||(e[l.name]=c)}return!0};var Ba=function t(){var e=new Ma;function i(){return Ia.apply(e,arguments)}return i.callbacks=e.callbacks,i.exits=e.exits,i.base=e.base.bind(e),i.strict=e.strict.bind(e),i.start=e.start.bind(e),i.stop=e.stop.bind(e),i.show=e.show.bind(e),i.back=e.back.bind(e),i.redirect=e.redirect.bind(e),i.replace=e.replace.bind(e),i.dispatch=e.dispatch.bind(e),i.exit=e.exit.bind(e),i.configure=e.configure.bind(e),i.sameOrigin=e.sameOrigin.bind(e),i.clickHandler=e.clickHandler.bind(e),i.create=t,Object.defineProperty(i,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(i,"current",{get:function(){return e.current},set:function(t){e.current=t}}),i.Context=Ra,i.Route=Oa,i}(),Na=Ba,ja=Ba;Na.default=ja;const La=new URL(new URL("WQLuWBBr.svg",import.meta.url).href,import.meta.url).href,Da=new URL(new URL("BTVD-IEO.svg",import.meta.url).href,import.meta.url).href;let Fa=class extends ut{#Pe;get page(){return this.#Pe}set page(t){this.#Pe=t}#Re="";get fatalErrorMessage(){return this.#Re}set fatalErrorMessage(t){this.#Re=t}#Oe=!1;get isWideViewPort(){return this.#Oe}set isWideViewPort(t){this.#Oe=t}#Be=!1;get collapseMainMenu(){return this.#Be}set collapseMainMenu(t){this.#Be=t}#Ne;get confirmDialog(){return this.#Ne}set confirmDialog(t){this.#Ne=t}#je;get loadingIndicator(){return this.#je}set loadingIndicator(t){this.#je=t}#Le;get drawer(){return this.#Le}set drawer(t){this.#Le=t}get themePreference(){return localStorage.getItem("theme-preference")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}set themePreference(t){localStorage.setItem("theme-preference",t),this.#De()}#De(){document.firstElementChild?.setAttribute("data-theme",this.themePreference)}async firstUpdated(){this.#De(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(({matches:t})=>{this.themePreference=t?"dark":"light",this.#De()})),((t,e)=>{const i=window.matchMedia(t);i.addListener((t=>e(t.matches))),e(i.matches)})("(max-width: 920px)",(async t=>{this.isWideViewPort=!t,this.isWideViewPort&&(this.drawer.closeQuick(),this.collapseMainMenu=!1)})),await this.loadingIndicator.updateComplete,this.addEventListener(aa.eventType,(async t=>{await import("./B_mgBMJt.js"),this.confirmDialog.handleEvent(t)})),this.addEventListener(oa.eventName,(t=>{Na.show(t.detail.path)})),this.addEventListener(sa.eventName,(t=>{Na.redirect(t.detail.path)})),this.addEventListener(na.eventName,(t=>{this.fatalErrorMessage=t.detail,this.#Fe("error")})),Na("*",((t,e)=>{this.drawer?.close(),e()})),Na("/",(async()=>{Na.show("/getting-started")})),Na("/getting-started",(()=>this.#Fe("getting-started",(()=>import("./CkCFcSxj.js"))))),Na("/titanium-full-page-loading-indicator",(()=>this.#Fe("titanium-full-page-loading-indicator",(()=>import("./BPzEeP1m.js"))))),Na("/available-cdn-icons",(()=>this.#Fe("available-cdn-icons",(()=>import("./C-StwSa_.js"))))),Na("/leavitt-company-select",(()=>this.#Fe("leavitt-company-select",(()=>import("./BPamVBOw.js"))))),Na("/leavitt-file-explorer",(()=>this.#Fe("leavitt-file-explorer",(()=>import("./DsUHhV5M.js"))))),Na("/titanium-date-range-selector",(()=>this.#Fe("titanium-date-range-selector",(()=>import("./DZUdeOn5.js"))))),Na("/titanium-data-table-item",(()=>this.#Fe("titanium-data-table-item",(()=>import("./C9P-ymDp.js"))))),Na("/leavitt-person-select",(()=>this.#Fe("leavitt-person-select",(()=>import("./CTVRo52L.js"))))),Na("/leavitt-person-company-select",(()=>this.#Fe("leavitt-person-company-select",(()=>import("./BfOJvLfh.js"))))),Na("/leavitt-person-group-select",(()=>this.#Fe("leavitt-person-group-select",(()=>import("./Db7ZTwJy.js"))))),Na("/leavitt-user-feedback",(()=>this.#Fe("leavitt-user-feedback",(()=>import("./DIzICU2U.js"))))),Na("/profile-picture",(()=>this.#Fe("profile-picture",(()=>import("./JCezjI5R.js"))))),Na("/profile-picture-menu",(()=>this.#Fe("profile-picture-menu",(()=>import("./BbqPnP6t.js"))))),Na("/titanium-access-denied-page",(()=>this.#Fe("titanium-access-denied-page",(()=>import("./SWP8N18N.js"))))),Na("/titanium-data-table",(()=>this.#Fe("titanium-data-table",(()=>import("./B8RBhyce.js"))))),Na("/titanium-data-table-item",(()=>this.#Fe("titanium-data-table-item",(()=>import("./C9P-ymDp.js"))))),Na("/titanium-drawer",(()=>this.#Fe("titanium-drawer",(()=>import("./DR_aPvNN.js"))))),Na("/titanium-error-page",(()=>this.#Fe("titanium-error-page",(()=>import("./BckUQRIv.js"))))),Na("/titanium-address-input",(()=>this.#Fe("titanium-address-input",(()=>import("./CBN3KiEo.js"))))),Na("/titanium-header",(()=>this.#Fe("titanium-header",(()=>import("./BCdsyZ69.js"))))),Na("/titanium-icon-picker",(()=>this.#Fe("titanium-icon-picker",(()=>import("./B2n7IFsH.js"))))),Na("/titanium-header",(()=>this.#Fe("titanium-header",(()=>import("./BCdsyZ69.js"))))),Na("/titanium-chip-multi-select",(()=>this.#Fe("titanium-chip-multi-select",(()=>import("./K_xpOck0.js"))))),Na("/titanium-input-validator",(()=>this.#Fe("titanium-input-validator",(()=>import("./CxFXRpHM.js"))))),Na("/titanium-data-table-header",(()=>this.#Fe("titanium-data-table-header",(()=>import("./B2jZfrle.js"))))),Na("/titanium-full-page-loading-indicator",(()=>this.#Fe("titanium-full-page-loading-indicator",(()=>import("./BPzEeP1m.js"))))),Na("/titanium-page-control",(()=>this.#Fe("titanium-page-control",(()=>import("./Cwu5pFwj.js"))))),Na("/titanium-smart-attachment-input",(()=>this.#Fe("titanium-smart-attachment-input",(()=>import("./DpXuYJ3n.js"))))),Na("/titanium-date-input",(()=>this.#Fe("titanium-date-input",(()=>import("./Dw8aHRAy.js"))))),Na("/titanium-search-input",(()=>this.#Fe("titanium-search-input",(()=>import("./Bok9iaMJ.js"))))),Na("/titanium-toolbar",(()=>this.#Fe("titanium-toolbar",(()=>import("./CnuIjsxl.js"))))),Na("/titanium-styles",(()=>this.#Fe("titanium-styles",(()=>import("./ZvqDplVj.js"))))),Na("/titanium-snackbar",(()=>this.#Fe("titanium-snackbar",(()=>import("./DhdIdXBJ.js"))))),Na("/titanium-card",(()=>this.#Fe("titanium-card",(()=>import("./D884WgzC.js"))))),Na("/titanium-chip",(()=>this.#Fe("titanium-chip",(()=>import("./DhYrkJGY.js"))))),Na("/titanium-youtube-input",(()=>this.#Fe("titanium-youtube-input",(()=>import("./Djd5sFsL.js"))))),Na("/titanium-show-hide",(()=>this.#Fe("titanium-show-hide",(()=>import("./Bkyy8enK.js"))))),Na("/titanium-duration-input",(()=>this.#Fe("titanium-duration-input",(()=>import("./dE6tHXjW.js"))))),Na("/titanium-profile-picture-stack",(()=>this.#Fe("titanium-profile-picture-stack",(()=>import("./C1zGDJNt.js"))))),Na("/titanium-confirm-dialog",(()=>this.#Fe("titanium-confirm-dialog",(()=>import("./BCya_MuX.js"))))),Na("*",(()=>{this.fatalErrorMessage="We were unable to find the page you are looking for",this.#Fe("error")})),Na.start()}async#Fe(t,e){this.page=t;try{const t=e?.();t&&this.dispatchEvent(new Me(t)),await t}catch(t){console.warn(t),this.fatalErrorMessage=t,this.page="error"}}static{this.styles=[la,Ls,d`
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
    `]}render(){return W`<titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
      <user-manager disableAutoload></user-manager>

      <titanium-toolbar>
        <md-icon-button
          title="Main menu"
          @click=${()=>{this.isWideViewPort?this.collapseMainMenu=!this.collapseMainMenu:this.drawer?.open()}}
        >
          <md-icon>menu</md-icon>
        </md-icon-button>
        <a logo href="/" title="Back to home"><img src=${"dark"===this.themePreference?Da:La} /></a>
        <h3 title="Leavitt book" @click=${()=>Na.show("/")} main-title>Leavitt book</h3>
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
        <a slot="header" logo href="/" title="Back to home"><img src=${"dark"===this.themePreference?Da:La} /></a>
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
        ${"getting-started"===this.page?W`<getting-started></getting-started>`:Y}
        ${"error"===this.page?W`<div>Oops, something went wrong.</div>`:Y}

        <!-- Stories -->
        ${"available-cdn-icons"===this.page?W` <available-cdn-icons-demo large ?isActive=${"available-cdn-icons"===this.page}></available-cdn-icons-demo> `:Y}
        ${"titanium-date-range-selector"===this.page?W` <titanium-date-range-selector-demo large ?isActive=${"titanium-date-range-selector"===this.page}></titanium-date-range-selector-demo> `:Y}
        ${"leavitt-person-select"===this.page?W` <leavitt-person-select-demo large ?isActive=${"leavitt-person-select"===this.page}></leavitt-person-select-demo> `:Y}
        ${"leavitt-company-select"===this.page?W` <leavitt-company-select-demo large ?isActive=${"leavitt-company-select"===this.page}></leavitt-company-select-demo> `:Y}
        ${"leavitt-file-explorer"===this.page?W` <leavitt-file-explorer-demo large ?isActive=${"leavitt-file-explorer"===this.page}></leavitt-file-explorer-demo> `:Y}
        ${"leavitt-user-feedback"===this.page?W` <leavitt-user-feedback-demo large ?isActive=${"leavitt-user-feedback"===this.page}></leavitt-user-feedback-demo> `:Y}
        ${"leavitt-person-company-select"===this.page?W` <leavitt-person-company-select-demo large ?isActive=${"leavitt-person-company-select"===this.page}></leavitt-person-company-select-demo> `:Y}
        ${"leavitt-person-group-select"===this.page?W` <leavitt-person-group-select-demo large ?isActive=${"leavitt-person-group-select"===this.page}></leavitt-person-group-select-demo> `:Y}
        ${"titanium-drawer"===this.page?W` <titanium-drawer-demo ?isActive=${"titanium-drawer"===this.page}></titanium-drawer-demo> `:Y}
        ${"profile-picture"===this.page?W` <profile-picture-demo ?isActive=${"profile-picture"===this.page}></profile-picture-demo> `:Y}
        ${"profile-picture-menu"===this.page?W` <profile-picture-menu-demo large ?isActive=${"profile-picture-menu"===this.page}></profile-picture-menu-demo> `:Y}
        ${"titanium-input-validator"===this.page?W` <titanium-input-validator-demo large ?isActive=${"titanium-input-validator"===this.page}></titanium-input-validator-demo> `:Y}
        ${"titanium-data-table"===this.page?W` <titanium-data-table-demo large ?isActive=${"titanium-data-table"===this.page}></titanium-data-table-demo> `:Y}
        ${"titanium-data-table-header"===this.page?W` <titanium-data-table-header-demo large ?isActive=${"titanium-data-table-header"===this.page}></titanium-data-table-header-demo> `:Y}
        ${"titanium-data-table-item"===this.page?W` <titanium-data-table-item-demo large ?isActive=${"titanium-data-table-item"===this.page}></titanium-data-table-item-demo> `:Y}
        ${"titanium-access-denied-page"===this.page?W` <titanium-access-denied-page-demo large ?isActive=${"titanium-access-denied-page"===this.page}></titanium-access-denied-page-demo> `:Y}
        ${"titanium-address-input"===this.page?W` <titanium-address-input-demo large ?isActive=${"titanium-address-input"===this.page}></titanium-address-input-demo> `:Y}
        ${"titanium-error-page"===this.page?W` <titanium-error-page-demo large ?isActive=${"titanium-error-page"===this.page}></titanium-error-page-demo> `:Y}
        ${"titanium-header"===this.page?W` <titanium-header-demo ?isActive=${"titanium-header"===this.page}></titanium-header-demo> `:Y}
        ${"titanium-icon"===this.page?W` <titanium-icon-demo ?isActive=${"titanium-icon"===this.page}></titanium-icon-demo> `:Y}
        ${"titanium-icon-picker"===this.page?W` <titanium-icon-picker-demo large ?isActive=${"titanium-icon-picker"===this.page}></titanium-icon-picker-demo> `:Y}
        ${"titanium-page-control"===this.page?W` <titanium-page-control-demo large ?isActive=${"titanium-page-control"===this.page}></titanium-page-control-demo> `:Y}
        ${"titanium-date-input"===this.page?W` <titanium-date-input-demo large ?isActive=${"titanium-date-input"===this.page}></titanium-date-input-demo> `:Y}
        ${"titanium-search-input"===this.page?W` <titanium-search-input-demo large ?isActive=${"titanium-search-input"===this.page}></titanium-search-input-demo> `:Y}
        ${"titanium-toolbar"===this.page?W` <titanium-toolbar-demo large ?isActive=${"titanium-toolbar"===this.page}></titanium-toolbar-demo> `:Y}
        ${"titanium-full-page-loading-indicator"===this.page?W`
              <titanium-full-page-loading-indicator-demo
                large
                ?isActive=${"titanium-full-page-loading-indicator"===this.page}
              ></titanium-full-page-loading-indicator-demo>
            `:Y}
        ${"titanium-loading-indicator"===this.page?W` <titanium-loading-indicator-demo large ?isActive=${"titanium-loading-indicator"===this.page}></titanium-loading-indicator-demo> `:Y}
        ${"titanium-chip-multi-select"===this.page?W` <titanium-chip-multi-select-demo large ?isActive=${"titanium-chip-multi-select"===this.page}></titanium-chip-multi-select-demo> `:Y}
        ${"titanium-styles"===this.page?W` <titanium-styles-demo large ?isActive=${"titanium-styles"===this.page}></titanium-styles-demo> `:Y}
        ${"titanium-snackbar"===this.page?W` <titanium-snackbar-demo large ?isActive=${"titanium-snackbar"===this.page}></titanium-snackbar-demo> `:Y}
        ${"titanium-smart-attachment-input"===this.page?W`
              <titanium-smart-attachment-input-demo large ?isActive=${"titanium-smart-attachment-input"===this.page}></titanium-smart-attachment-input-demo>
            `:Y}
        ${"titanium-card"===this.page?W` <titanium-card-demo large ?isActive=${"titanium-card"===this.page}></titanium-card-demo> `:Y}
        ${"titanium-chip"===this.page?W` <titanium-chip-demo large ?isActive=${"titanium-chip"===this.page}></titanium-chip-demo> `:Y}
        ${"titanium-youtube-input"===this.page?W` <titanium-youtube-input-demo large ?isActive=${"titanium-youtube-input"===this.page}></titanium-youtube-input-demo> `:Y}
        ${"titanium-show-hide"===this.page?W` <titanium-show-hide-demo large ?isActive=${"titanium-show-hide"===this.page}></titanium-show-hide-demo> `:Y}
        ${"titanium-duration-input"===this.page?W` <titanium-duration-input-demo large ?isActive=${"titanium-duration-input"===this.page}></titanium-duration-input-demo> `:Y}
        ${"titanium-confirm-dialog"===this.page?W` <titanium-confirm-dialog-demo large ?isActive=${"titanium-confirm-dialog"===this.page}></titanium-confirm-dialog-demo> `:Y}
        ${"titanium-profile-picture-stack"===this.page?W`
              <titanium-profile-picture-stack-demo large ?isActive=${"titanium-profile-picture-stack"===this.page}></titanium-profile-picture-stack-demo>
            `:Y}
        <titanium-access-denied-page ?hidden=${"access-denied"!==this.page}></titanium-access-denied-page>
        <titanium-error-page ?hidden=${"error"!==this.page} .message=${this.fatalErrorMessage}></titanium-error-page>
      </main-content>

      <report-a-problem-dialog></report-a-problem-dialog>
      <provide-feedback-dialog></provide-feedback-dialog>

      <titanium-confirm-dialog></titanium-confirm-dialog>
      <titanium-snackbar-stack .eventListenerTarget=${document}></titanium-snackbar-stack>
      <titanium-service-worker-notifier></titanium-service-worker-notifier>`}};r([bt()],Fa.prototype,"page",null),r([bt()],Fa.prototype,"fatalErrorMessage",null),r([bt()],Fa.prototype,"isWideViewPort",null),r([gt({type:Boolean,reflect:!0,attribute:"collapse-main-menu"})],Fa.prototype,"collapseMainMenu",null),r([xt("titanium-confirm-dialog")],Fa.prototype,"confirmDialog",null),r([xt("titanium-full-page-loading-indicator")],Fa.prototype,"loadingIndicator",null),r([xt("titanium-drawer")],Fa.prototype,"drawer",null),r([bt()],Fa.prototype,"themePreference",null),Fa=r([mt("my-app")],Fa);export{Be as $,Pn as A,xn as B,aa as C,ue as D,Y as E,Ki as F,Bt as G,vr as H,Ri as I,yr as J,ge as K,Mt as L,xe as M,ye as N,Zt as O,Me as P,gr as Q,br as R,Ce as S,Mr as T,hr as U,ur as V,zr as W,la as X,Nr as Y,Bs as Z,r as _,Os as a,kt as a0,Mi as a1,ht as a2,Ar as a3,fi as a4,ci as a5,xr as a6,Re as a7,pi as a8,li as a9,Xe as aa,ai as ab,ii as ac,ni as ad,oi as ae,cr as af,dr as ag,Ns as ah,On as ai,Bn as aj,yt as ak,ln as al,vn as am,te as an,na as ao,ke as ap,jt as aq,e as ar,o as as,i as at,Ds as b,zn as c,bt as d,xt as e,_t as f,Ci as g,Rs as h,d as i,Pr as j,js as k,Us as l,Fs as m,gt as n,Pt as o,Ls as p,sn as q,ut as r,Zi as s,mt as t,An as u,$n as v,Oi as w,W as x,Ui as y,Et as z};
