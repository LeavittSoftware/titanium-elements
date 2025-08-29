import{_ as e,n as a,t as i,S as t,x as n,i as o,c as r,E as s,Z as l,e as b,r as m,f as d,h as c,a as u,p as h}from"./Dis8517n.js";import{S as v}from"./DMe0zOFc.js";import"./C5yNkNgZ.js";import"./HyqDXZWP.js";import{T as g}from"./CfjmyVcl.js";import{D as p}from"./DTS7lhmZ.js";import"./4m_CwfdP.js";import"./DtYO05ZE.js";function y(e,a,i,t){return new(i||(i=Promise))(function(a,n){function o(e){try{s(t.next(e))}catch(e){n(e)}}function r(e){try{s(t.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(o,r)}s((t=t.apply(e,[])).next())})}function S(e){return e&&e.i&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f,w;"function"==typeof SuppressedError&&SuppressedError;var A=(w||(w=1,f=function e(a,i){if(a===i)return!0;if(a&&i&&"object"==typeof a&&"object"==typeof i){if(a.constructor!==i.constructor)return!1;var t,n,o;if(Array.isArray(a)){if((t=a.length)!=i.length)return!1;for(n=t;0!==n--;)if(!e(a[n],i[n]))return!1;return!0}if(a.constructor===RegExp)return a.source===i.source&&a.flags===i.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===i.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===i.toString();if((t=(o=Object.keys(a)).length)!==Object.keys(i).length)return!1;for(n=t;0!==n--;)if(!Object.prototype.hasOwnProperty.call(i,o[n]))return!1;for(n=t;0!==n--;){var r=o[n];if(!e(a[r],i[r]))return!1}return!0}return a!=a&&i!=i}),f),I=S(A);const M="__googleMapsScriptId";var $;!function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"}($||($={}));class C{constructor({apiKey:e,authReferrerPolicy:a,channel:i,client:t,id:n=M,language:o,libraries:r=[],mapIds:s,nonce:l,region:b,retries:m=3,url:d="https://maps.googleapis.com/maps/api/js",version:c}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=a,this.channel=i,this.client=t,this.id=n||M,this.language=o,this.libraries=r,this.mapIds=s,this.nonce=l,this.region=b,this.retries=m,this.url=d,this.version=c,C.instance){if(!I(this.options,C.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(C.instance.options)}`);return C.instance}C.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?$.FAILURE:this.done?$.SUCCESS:this.loading?$.LOADING:$.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,a)=>{this.loadCallback(i=>{i?a(i.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,a;if(document.getElementById(this.id))return void this.callback();const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach(e=>!i[e]&&delete i[e]),(null===(a=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.maps)||void 0===a?void 0:a.importLibrary)||(e=>{let a,i,t,n="The Google Maps JavaScript API",o="google",r="importLibrary",s="__ib__",l=document,b=window;b=b[o]||(b[o]={});const m=b.maps||(b.maps={}),d=new Set,c=new URLSearchParams,u=()=>a||(a=new Promise((r,b)=>y(this,0,void 0,function*(){var u;for(t in yield i=l.createElement("script"),i.id=this.id,c.set("libraries",[...d]+""),e)c.set(t.replace(/[A-Z]/g,e=>"_"+e[0].toLowerCase()),e[t]);c.set("callback",o+".maps."+s),i.src=this.url+"?"+c,m[s]=r,i.onerror=()=>a=b(Error(n+" could not load.")),i.nonce=this.nonce||(null===(u=l.querySelector("script[nonce]"))||void 0===u?void 0:u.nonce)||"",l.head.append(i)})));m[r]?console.warn(n+" only loads once. Ignoring:",e):m[r]=(e,...a)=>d.add(e)&&u().then(()=>m[r](e,...a))})(i);const t=this.libraries.map(e=>this.importLibrary(e));t.length||t.push(this.importLibrary("core")),Promise.all(t).then(()=>this.callback(),e=>{const a=new ErrorEvent("error",{error:e});this.loadErrorCallback(a)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading=!0,this.setScript()}}}const x=[{abbreviation:"AF",name:"Afghanistan"},{abbreviation:"AL",name:"Albania"},{abbreviation:"DZ",name:"Algeria"},{abbreviation:"AS",name:"American Samoa"},{abbreviation:"AD",name:"Andorra"},{abbreviation:"AO",name:"Angola"},{abbreviation:"AI",name:"Anguilla"},{abbreviation:"AQ",name:"Antarctica"},{abbreviation:"AG",name:"Antigua and Barbuda"},{abbreviation:"AR",name:"Argentina"},{abbreviation:"AM",name:"Armenia"},{abbreviation:"AW",name:"Aruba"},{abbreviation:"AU",name:"Australia"},{abbreviation:"AT",name:"Austria"},{abbreviation:"AZ",name:"Azerbaijan"},{abbreviation:"BS",name:"Bahamas"},{abbreviation:"BH",name:"Bahrain"},{abbreviation:"BD",name:"Bangladesh"},{abbreviation:"BB",name:"Barbados"},{abbreviation:"BY",name:"Belarus"},{abbreviation:"BE",name:"Belgium"},{abbreviation:"BZ",name:"Belize"},{abbreviation:"BJ",name:"Benin"},{abbreviation:"BM",name:"Bermuda"},{abbreviation:"BT",name:"Bhutan"},{abbreviation:"BO",name:"Bolivia"},{abbreviation:"BA",name:"Bosnia and Herzegovina"},{abbreviation:"BW",name:"Botswana"},{abbreviation:"BR",name:"Brazil"},{abbreviation:"IO",name:"British Indian Ocean Territory"},{abbreviation:"VG",name:"British Virgin Islands"},{abbreviation:"BN",name:"Brunei"},{abbreviation:"BG",name:"Bulgaria"},{abbreviation:"BF",name:"Burkina Faso"},{abbreviation:"BI",name:"Burundi"},{abbreviation:"KH",name:"Cambodia"},{abbreviation:"CM",name:"Cameroon"},{abbreviation:"CA",name:"Canada"},{abbreviation:"CV",name:"Cape Verde"},{abbreviation:"KY",name:"Cayman Islands"},{abbreviation:"CF",name:"Central African Republic"},{abbreviation:"TD",name:"Chad"},{abbreviation:"CL",name:"Chile"},{abbreviation:"CN",name:"China"},{abbreviation:"CX",name:"Christmas Island"},{abbreviation:"CC",name:"Cocos Islands"},{abbreviation:"CO",name:"Colombia"},{abbreviation:"KM",name:"Comoros"},{abbreviation:"CK",name:"Cook Islands"},{abbreviation:"CR",name:"Costa Rica"},{abbreviation:"HR",name:"Croatia"},{abbreviation:"CU",name:"Cuba"},{abbreviation:"CW",name:"Curacao"},{abbreviation:"CY",name:"Cyprus"},{abbreviation:"CZ",name:"Czech Republic"},{abbreviation:"CD",name:"Democratic Republic of the Congo"},{abbreviation:"DK",name:"Denmark"},{abbreviation:"DJ",name:"Djibouti"},{abbreviation:"DM",name:"Dominica"},{abbreviation:"DO",name:"Dominican Republic"},{abbreviation:"TL",name:"East Timor"},{abbreviation:"EC",name:"Ecuador"},{abbreviation:"EG",name:"Egypt"},{abbreviation:"SV",name:"El Salvador"},{abbreviation:"GQ",name:"Equatorial Guinea"},{abbreviation:"ER",name:"Eritrea"},{abbreviation:"EE",name:"Estonia"},{abbreviation:"ET",name:"Ethiopia"},{abbreviation:"FK",name:"Falkland Islands"},{abbreviation:"FO",name:"Faroe Islands"},{abbreviation:"FJ",name:"Fiji"},{abbreviation:"FI",name:"Finland"},{abbreviation:"FR",name:"France"},{abbreviation:"PF",name:"French Polynesia"},{abbreviation:"GA",name:"Gabon"},{abbreviation:"GM",name:"Gambia"},{abbreviation:"GE",name:"Georgia"},{abbreviation:"DE",name:"Germany"},{abbreviation:"GH",name:"Ghana"},{abbreviation:"GI",name:"Gibraltar"},{abbreviation:"GR",name:"Greece"},{abbreviation:"GL",name:"Greenland"},{abbreviation:"GD",name:"Grenada"},{abbreviation:"GU",name:"Guam"},{abbreviation:"GT",name:"Guatemala"},{abbreviation:"GG",name:"Guernsey"},{abbreviation:"GN",name:"Guinea"},{abbreviation:"GW",name:"Guinea-Bissau"},{abbreviation:"GY",name:"Guyana"},{abbreviation:"HT",name:"Haiti"},{abbreviation:"HN",name:"Honduras"},{abbreviation:"HK",name:"Hong Kong"},{abbreviation:"HU",name:"Hungary"},{abbreviation:"IS",name:"Iceland"},{abbreviation:"IN",name:"India"},{abbreviation:"ID",name:"Indonesia"},{abbreviation:"IR",name:"Iran"},{abbreviation:"IQ",name:"Iraq"},{abbreviation:"IE",name:"Ireland"},{abbreviation:"IM",name:"Isle of Man"},{abbreviation:"IL",name:"Israel"},{abbreviation:"IT",name:"Italy"},{abbreviation:"CI",name:"Ivory Coast"},{abbreviation:"JM",name:"Jamaica"},{abbreviation:"JP",name:"Japan"},{abbreviation:"JE",name:"Jersey"},{abbreviation:"JO",name:"Jordan"},{abbreviation:"KZ",name:"Kazakhstan"},{abbreviation:"KE",name:"Kenya"},{abbreviation:"KI",name:"Kiribati"},{abbreviation:"XK",name:"Kosovo"},{abbreviation:"KW",name:"Kuwait"},{abbreviation:"KG",name:"Kyrgyzstan"},{abbreviation:"LA",name:"Laos"},{abbreviation:"LV",name:"Latvia"},{abbreviation:"LB",name:"Lebanon"},{abbreviation:"LS",name:"Lesotho"},{abbreviation:"LR",name:"Liberia"},{abbreviation:"LY",name:"Libya"},{abbreviation:"LI",name:"Liechtenstein"},{abbreviation:"LT",name:"Lithuania"},{abbreviation:"LU",name:"Luxembourg"},{abbreviation:"MO",name:"Macao"},{abbreviation:"MG",name:"Madagascar"},{abbreviation:"MW",name:"Malawi"},{abbreviation:"MY",name:"Malaysia"},{abbreviation:"MV",name:"Maldives"},{abbreviation:"ML",name:"Mali"},{abbreviation:"MT",name:"Malta"},{abbreviation:"MH",name:"Marshall Islands"},{abbreviation:"MR",name:"Mauritania"},{abbreviation:"MU",name:"Mauritius"},{abbreviation:"YT",name:"Mayotte"},{abbreviation:"MX",name:"Mexico"},{abbreviation:"FM",name:"Micronesia"},{abbreviation:"MD",name:"Moldova"},{abbreviation:"MC",name:"Monaco"},{abbreviation:"MN",name:"Mongolia"},{abbreviation:"ME",name:"Montenegro"},{abbreviation:"MS",name:"Montserrat"},{abbreviation:"MA",name:"Morocco"},{abbreviation:"MZ",name:"Mozambique"},{abbreviation:"MM",name:"Myanmar"},{abbreviation:"NA",name:"Namibia"},{abbreviation:"NR",name:"Nauru"},{abbreviation:"NP",name:"Nepal"},{abbreviation:"NL",name:"Netherlands"},{abbreviation:"AN",name:"Netherlands Antilles"},{abbreviation:"NC",name:"New Caledonia"},{abbreviation:"NZ",name:"New Zealand"},{abbreviation:"NI",name:"Nicaragua"},{abbreviation:"NE",name:"Niger"},{abbreviation:"NG",name:"Nigeria"},{abbreviation:"NU",name:"Niue"},{abbreviation:"KP",name:"North Korea"},{abbreviation:"MK",name:"North Macedonia"},{abbreviation:"MP",name:"Northern Mariana Islands"},{abbreviation:"NO",name:"Norway"},{abbreviation:"OM",name:"Oman"},{abbreviation:"PK",name:"Pakistan"},{abbreviation:"PW",name:"Palau"},{abbreviation:"PS",name:"Palestine"},{abbreviation:"PA",name:"Panama"},{abbreviation:"PG",name:"Papua New Guinea"},{abbreviation:"PY",name:"Paraguay"},{abbreviation:"PE",name:"Peru"},{abbreviation:"PH",name:"Philippines"},{abbreviation:"PN",name:"Pitcairn"},{abbreviation:"PL",name:"Poland"},{abbreviation:"PT",name:"Portugal"},{abbreviation:"PR",name:"Puerto Rico"},{abbreviation:"QA",name:"Qatar"},{abbreviation:"CG",name:"Republic of the Congo"},{abbreviation:"RE",name:"Reunion"},{abbreviation:"RO",name:"Romania"},{abbreviation:"RU",name:"Russia"},{abbreviation:"RW",name:"Rwanda"},{abbreviation:"BL",name:"Saint Barthelemy"},{abbreviation:"SH",name:"Saint Helena"},{abbreviation:"KN",name:"Saint Kitts and Nevis"},{abbreviation:"LC",name:"Saint Lucia"},{abbreviation:"MF",name:"Saint Martin"},{abbreviation:"PM",name:"Saint Pierre and Miquelon"},{abbreviation:"VC",name:"Saint Vincent and the Grenadines"},{abbreviation:"WS",name:"Samoa"},{abbreviation:"SM",name:"San Marino"},{abbreviation:"ST",name:"Sao Tome and Principe"},{abbreviation:"SA",name:"Saudi Arabia"},{abbreviation:"SN",name:"Senegal"},{abbreviation:"RS",name:"Serbia"},{abbreviation:"SC",name:"Seychelles"},{abbreviation:"SL",name:"Sierra Leone"},{abbreviation:"SG",name:"Singapore"},{abbreviation:"SX",name:"Sint Maarten"},{abbreviation:"SK",name:"Slovakia"},{abbreviation:"SI",name:"Slovenia"},{abbreviation:"SB",name:"Solomon Islands"},{abbreviation:"SO",name:"Somalia"},{abbreviation:"ZA",name:"South Africa"},{abbreviation:"KR",name:"South Korea"},{abbreviation:"SS",name:"South Sudan"},{abbreviation:"ES",name:"Spain"},{abbreviation:"LK",name:"Sri Lanka"},{abbreviation:"SD",name:"Sudan"},{abbreviation:"SR",name:"Suriname"},{abbreviation:"SJ",name:"Svalbard and Jan Mayen"},{abbreviation:"SZ",name:"Swaziland"},{abbreviation:"SE",name:"Sweden"},{abbreviation:"CH",name:"Switzerland"},{abbreviation:"SY",name:"Syria"},{abbreviation:"TW",name:"Taiwan"},{abbreviation:"TJ",name:"Tajikistan"},{abbreviation:"TZ",name:"Tanzania"},{abbreviation:"TH",name:"Thailand"},{abbreviation:"TG",name:"Togo"},{abbreviation:"TK",name:"Tokelau"},{abbreviation:"TO",name:"Tonga"},{abbreviation:"TT",name:"Trinidad and Tobago"},{abbreviation:"TN",name:"Tunisia"},{abbreviation:"TR",name:"Türkiye"},{abbreviation:"TM",name:"Turkmenistan"},{abbreviation:"TC",name:"Turks and Caicos Islands"},{abbreviation:"TV",name:"Tuvalu"},{abbreviation:"VI",name:"U.S. Virgin Islands"},{abbreviation:"UG",name:"Uganda"},{abbreviation:"UA",name:"Ukraine"},{abbreviation:"AE",name:"United Arab Emirates"},{abbreviation:"GB",name:"United Kingdom"},{abbreviation:"US",name:"United States"},{abbreviation:"UY",name:"Uruguay"},{abbreviation:"UZ",name:"Uzbekistan"},{abbreviation:"VU",name:"Vanuatu"},{abbreviation:"VA",name:"Vatican"},{abbreviation:"VE",name:"Venezuela"},{abbreviation:"VN",name:"Vietnam"},{abbreviation:"WF",name:"Wallis and Futuna"},{abbreviation:"EH",name:"Western Sahara"},{abbreviation:"YE",name:"Yemen"},{abbreviation:"ZM",name:"Zambia"},{abbreviation:"ZW",name:"Zimbabwe"}];function _(e){if(!e)return"";const a=[],i=e.street?.trim(),t=e.street2?.trim();(i||t)&&a.push(`${i||""} ${t||""}`?.trim());const n=e.city?.trim(),o=e.state?.trim(),r=e.zip?.trim();a.push(`${n&&o?`${n}, ${o}`:`${n||""} ${o||""}`?.trim()} ${r}`?.trim());const s=e.county?.trim();"US"!==e?.country&&"CA"!==e?.country&&s&&a.push(s);const l=e.country?.trim();return l&&a.push("US"===l?"USA":function(e,a=!1){if(!e)return"";if(a&&"us"===e.toLowerCase())return"";const i=x.find(a=>a.abbreviation.toLowerCase()===e.toLowerCase());return i?i.name:e}(l)),a.join(", ")}let T=class extends g{#e;get googleMapsApiKey(){return this.#e}set googleMapsApiKey(e){this.#e=e}#a="Address";get label(){return this.#a}set label(e){this.#a=e}#i="Search for an address";get placeholder(){return this.#i}set placeholder(e){this.#i=e}#t="primaryDisplayText";get pathToSelectedText(){return this.#t}set pathToSelectedText(e){this.#t=e}#n=!1;get allowInternational(){return this.#n}set allowInternational(e){this.#n=e}#o="off";get autocomplete(){return this.#o}set autocomplete(e){this.#o=e}#r=!1;get spellcheck(){return this.#r}set spellcheck(e){this.#r=e}#s=new p(e=>this.#l(e));#b=new AbortController;#m;#d;async firstUpdated(){const e=new C({apiKey:this.googleMapsApiKey,version:"weekly",libraries:["places"]});await e.importLibrary("places"),this.#m=new google.maps.places.PlacesService(document.createElement("div")),this.#d=new google.maps.places.AutocompleteService}updated(e){if(e.has("selected")&&this.selected){_(this.selected)!==this.selected.primaryDisplayText&&(this.selected.primaryDisplayText=_(this.selected),this.requestUpdate("selected"))}}async#c(e){return new Promise(a=>{const i={input:e,types:["address"]};this.allowInternational||(i.componentRestrictions={country:["us"]}),this.#d.getPlacePredictions(i,(e,i)=>i==google.maps.places.PlacesServiceStatus.OK&&e?a(e.map(e=>({Id:e.place_id,primaryDisplayText:e?.structured_formatting?.main_text||e.description,secondaryText:e.structured_formatting?.secondary_text}))):(console.warn(i),a([])))})}async#u(e){return new Promise((a,i)=>{const t={placeId:e,fields:["address_components","formatted_address","geometry"]};this.#m.getDetails(t,(e,t)=>t==google.maps.places.PlacesServiceStatus.OK&&e?a(e):i(t))})}async#l(e){if(e){this.#b.abort(),this.#b=new AbortController;try{const a=this.#c(e);this.loadWhile(a);const i=await a??[];return void this.showSuggestions(i,i.length)}catch(e){e?.message?.includes("Abort error")||this.dispatchEvent(new t(e))}this.showSuggestions([],0)}}customCheckValidity(){if(!this.selected&&this.textfield?.value)return this.errorText="Please enter a valid address in this field",!1;if(!this.required&&!this.selected)return!0;if(!this.selected)return this.errorText="Please enter a valid address in this field",!1;if(!this.allowInternational||"US"===this.selected?.country){if(!function(e){const a=new RegExp(/^(?=.{1,64}$)[a-zA-Z \-.\d #'.,]{1,64}[\s][a-zA-Z \-.\d #'.,]{1,64}$/),i=new RegExp("[A-Z]"),t=new RegExp("[a-z]"),n=new RegExp("[0-9]");return!!a.test(e)&&(i.test(e)||t.test(e))&&n.test(e)}(this.selected?.street??""))return this.errorText="Please correct the invalid street",!1;if(!this.selected?.city)return this.errorText="Please correct the missing city",!1;if(!this.selected?.state)return this.errorText="Please correct the missing state",!1;if(!this.selected?.zip)return this.errorText="Please correct the missing zip code",!1}return!0}customReportValidity(){return this.customCheckValidity()?(this.errorText="",this.error=!1):this.error=!0,!this.error}onInputChanged(e){this.#s.debounce(e)}async setSelected(e){if(e)try{const a=function(e){if(!e||!e.address_components||!e.formatted_address)return null;const a=e.address_components.find(e=>e.types.some(e=>"neighborhood"===e)),i=e.address_components.find(e=>e.types.some(e=>"administrative_area_level_1"===e)),t=e.address_components.find(e=>e.types.some(e=>"street_number"===e))||e.address_components.find(e=>e.types.some(e=>"premise"===e)),n=e.address_components.find(e=>e.types.some(e=>"route"===e)),o=e.address_components.find(e=>e.types.some(e=>"locality"===e)),r=e.address_components.find(e=>e.types.some(e=>"sublocality"===e)),s=e.address_components.find(e=>e.types.some(e=>"administrative_area_level_3"===e)),l=e.address_components.find(e=>e.types.some(e=>"administrative_area_level_4"===e)),b=a?.short_name&&e.formatted_address.includes(a.short_name+",")?a:o||r||s||l,m=e.address_components.find(e=>e.types.some(e=>"postal_code"===e)),d=e.address_components.find(e=>e.types.some(e=>"administrative_area_level_2"===e)),c=e.address_components.find(e=>e.types.some(e=>"country"===e)),u=e.address_components.find(e=>e.types.some(e=>"subpremise"===e));return{street:t?.short_name?`${t?.short_name} ${n?.short_name||""}`?.trim():n?.short_name||"",fullStreet:`${t?.long_name} ${n?.long_name}`,city:b?.short_name,street2:u?.short_name,county:d?.short_name,country:c?.short_name,state:i?.short_name,fullState:i?.long_name,zip:m?.short_name,latitude:e.geometry?.location?.lat(),longitude:e.geometry?.location?.lng()}}(await this.#u(e.Id));a&&(e={...e,...a})}catch(e){this.dispatchEvent(new t(e))}super.setSelected(e)}setSelectedBase(e){super.setSelected(e)}renderLeadingInputSlot(){return n`<slot name="leading-icon" slot="leading-icon"><md-icon>place</md-icon></slot>`}renderTrailingMenuSlot(){return n` <div
      ?hidden=${!this.suggestions.length}
      style="display: flex; gap: 4px; justify-content: flex-end; margin: 0 8px -4px 8px; align-items: center; "
    >
      <span style="color: var(--md-sys-color-on-surface-variant); font-weight: 500; font-size:12px;opacity: .6;">powered by</span>
      <img
        google
        style="height: 28px"
        src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
        alt="Powered by Google"
      />
    </div>`}renderSelectedLeadingInputSlot(e){return n` <md-icon slot="leading-icon">place</md-icon> `}renderSuggestion(e){return n`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
      <md-icon slot="start">place</md-icon>
      <span slot="headline">${e.primaryDisplayText}</span>
      <span slot="supporting-text">${e.secondaryText}</span>
    </md-menu-item>`}};function N(e){const a=e?.shadowRoot?.querySelector(".container"),i=a?.querySelector(".scroller");i&&(i.style.overflow="initial"),a&&(a.style.overflow="initial")}function k(e){const a=e?.shadowRoot?.querySelector(".container"),i=a?.querySelector(".scroller");i&&(i.style.overflow=""),a&&(a.style.overflow="")}e([a({type:String})],T.prototype,"googleMapsApiKey",null),e([a({type:String})],T.prototype,"label",null),e([a({type:String})],T.prototype,"placeholder",null),e([a({type:String})],T.prototype,"pathToSelectedText",null),e([a({type:Boolean,attribute:"allow-international"})],T.prototype,"allowInternational",null),e([a({reflect:!0,type:String})],T.prototype,"autocomplete",null),e([a({reflect:!0,type:Boolean})],T.prototype,"spellcheck",null),T=e([i("google-address-input")],T);const P=e=>{e?.hasError&&e?.reportValidity()},B=[{abbreviation:"AL",name:"Alabama"},{abbreviation:"AK",name:"Alaska"},{abbreviation:"AS",name:"American Samoa"},{abbreviation:"AZ",name:"Arizona"},{abbreviation:"AR",name:"Arkansas"},{abbreviation:"CA",name:"California"},{abbreviation:"CO",name:"Colorado"},{abbreviation:"CT",name:"Connecticut"},{abbreviation:"DE",name:"Delaware"},{abbreviation:"DC",name:"District of Columbia"},{abbreviation:"FM",name:"Federated States of Micronesia"},{abbreviation:"FL",name:"Florida"},{abbreviation:"GA",name:"Georgia"},{abbreviation:"GU",name:"Guam"},{abbreviation:"HI",name:"Hawaii"},{abbreviation:"ID",name:"Idaho"},{abbreviation:"IL",name:"Illinois"},{abbreviation:"IN",name:"Indiana"},{abbreviation:"IA",name:"Iowa"},{abbreviation:"KS",name:"Kansas"},{abbreviation:"KY",name:"Kentucky"},{abbreviation:"LA",name:"Louisiana"},{abbreviation:"ME",name:"Maine"},{abbreviation:"MH",name:"Marshall Islands"},{abbreviation:"MD",name:"Maryland"},{abbreviation:"MA",name:"Massachusetts"},{abbreviation:"MI",name:"Michigan"},{abbreviation:"MN",name:"Minnesota"},{abbreviation:"MS",name:"Mississippi"},{abbreviation:"MO",name:"Missouri"},{abbreviation:"MT",name:"Montana"},{abbreviation:"NE",name:"Nebraska"},{abbreviation:"NV",name:"Nevada"},{abbreviation:"NH",name:"New Hampshire"},{abbreviation:"NJ",name:"New Jersey"},{abbreviation:"NM",name:"New Mexico"},{abbreviation:"NY",name:"New York"},{abbreviation:"NC",name:"North Carolina"},{abbreviation:"ND",name:"North Dakota"},{abbreviation:"MP",name:"Northern Mariana Islands"},{abbreviation:"OH",name:"Ohio"},{abbreviation:"OK",name:"Oklahoma"},{abbreviation:"OR",name:"Oregon"},{abbreviation:"PW",name:"Palau"},{abbreviation:"PA",name:"Pennsylvania"},{abbreviation:"PR",name:"Puerto Rico"},{abbreviation:"RI",name:"Rhode Island"},{abbreviation:"SC",name:"South Carolina"},{abbreviation:"SD",name:"South Dakota"},{abbreviation:"TN",name:"Tennessee"},{abbreviation:"TX",name:"Texas"},{abbreviation:"UT",name:"Utah"},{abbreviation:"VT",name:"Vermont"},{abbreviation:"VI",name:"Virgin Islands"},{abbreviation:"VA",name:"Virginia"},{abbreviation:"WA",name:"Washington"},{abbreviation:"WV",name:"West Virginia"},{abbreviation:"WI",name:"Wisconsin"},{abbreviation:"WY",name:"Wyoming"}],L=[{name:"Alberta",abbreviation:"AB"},{name:"British Columbia",abbreviation:"BC"},{name:"Manitoba",abbreviation:"MB"},{name:"New Brunswick",abbreviation:"NB"},{name:"Newfoundland and Labrador",abbreviation:"NL"},{name:"Northwest Territories",abbreviation:"NT"},{name:"Nova Scotia",abbreviation:"NS"},{name:"Nunavut",abbreviation:"NU"},{name:"Ontario",abbreviation:"ON"},{name:"Prince Edward Island",abbreviation:"PE"},{name:"Quebec",abbreviation:"QC"},{name:"Saskatchewan",abbreviation:"SK"},{name:"Yukon Territory",abbreviation:"YT"}];let G=class extends o{#h;get dialog(){return this.#h}set dialog(e){this.#h=e}#a="";get label(){return this.#a}set label(e){this.#a=e}#v;get showCounty(){return this.#v}set showCounty(e){this.#v=e}#g;get showStreet2(){return this.#g}set showStreet2(e){this.#g=e}#n=!1;get allowInternational(){return this.#n}set allowInternational(e){this.#n=e}#p="";get street(){return this.#p}set street(e){this.#p=e}#y="";get street2(){return this.#y}set street2(e){this.#y=e}#S="";get city(){return this.#S}set city(e){this.#S=e}#f="";get county(){return this.#f}set county(e){this.#f=e}#w="";get country(){return this.#w}set country(e){this.#w=e}#A="";get state(){return this.#A}set state(e){this.#A=e}#I="";get zip(){return this.#I}set zip(e){this.#I=e}#M;get allInputs(){return this.#M}set allInputs(e){this.#M=e}async open(e){return this.reset(),await this.updateComplete,this.street=e?.street??"",this.street2=e?.street2??"",this.city=e?.city??"",this.state=e?.state??"",this.zip=e?.zip??"",this.county=e?.county??"",this.country=e?.country??"",this.dialog.show(),new Promise(e=>{this.resolve=e})}validate(){let e=!0;return this.allInputs.forEach(a=>{a.reportValidity()||(e=!1)}),e}async reset(){this.street="",this.street2="",this.city="",this.state="",this.zip="",this.county="",this.country="",this.allInputs.forEach(e=>e.reset())}static{this.styles=[r`
      md-dialog {
        max-width: 550px;
        width: calc(100vw - 24px);
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return n`
      <md-dialog
        @open=${e=>{l(e.target)}}
        @closing=${e=>{"apply"!==e.target.returnValue&&this.resolve(null)}}
      >
        <div slot="headline">${this.label}</div>
        <form slot="content">
          <md-outlined-text-field
            label="Street"
            autocomplete="address-line1"
            ?required=${!this.allowInternational||"US"===this.country}
            .value=${this.street||""}
            @blur=${e=>P(e.target)}
            @change=${e=>this.street=e.target.value}
          >
            <md-icon slot="leading-icon">markunread_mailbox</md-icon>
          </md-outlined-text-field>
          ${this.showStreet2||"US"!==this.country&&this.country?n` <md-outlined-text-field
                @blur=${e=>P(e.target)}
                label="Street 2"
                autocomplete="address-line2"
                .value=${this.street2||""}
                @change=${e=>this.street2=e.target.value}
              >
                <md-icon slot="leading-icon">meeting_room</md-icon></md-outlined-text-field
              >`:s}
          <md-outlined-text-field
            label="City"
            autocomplete="address-level2"
            ?required=${!this.allowInternational||"US"===this.country}
            .value=${this.city||""}
            @blur=${e=>P(e.target)}
            @change=${e=>this.city=e.target.value}
            ><md-icon slot="leading-icon">location_city</md-icon></md-outlined-text-field
          >
          ${this.showCounty||"US"!==this.country&&this.country?n`<md-outlined-text-field
                @blur=${e=>P(e.target)}
                label="County"
                ?required=${!this.allowInternational||"US"===this.country}
                .value=${this.county||""}
                @change=${e=>this.county=e.target.value}
                ><md-icon slot="leading-icon">explore</md-icon></md-outlined-text-field
              >`:s}
          ${this.allowInternational?n`<md-outlined-select
                @opening=${()=>N(this.dialog)}
                @closing=${()=>k(this.dialog)}
                @blur=${e=>P(e.target)}
                label="Country"
                autocomplete="country"
                required
                .value=${this.country||""}
                @change=${e=>{if(e.stopPropagation(),this.country=e.target.value,"US"===this.country){const e=B?.find(e=>e.abbreviation.toLowerCase()===this.state.toLowerCase()||e.name?.toLowerCase()===this.state.toLowerCase());this.state=e?e?.abbreviation:""}else if("CA"===this.country){const e=L?.find(e=>e.abbreviation.toLowerCase()===this.state.toLowerCase()||e.name?.toLowerCase()===this.state.toLowerCase());this.state=e?e?.abbreviation:""}else this.state=""}}
              >
                <md-icon slot="leading-icon">map</md-icon>
                ${x.map(e=>n`<md-select-option value=${e.abbreviation}> <div slot="headline">${e.name}</div></md-select-option>`)}
              </md-outlined-select> `:s}
          ${this.allowInternational&&"US"!==this.country&&"CA"!==this.country?n`
                <md-outlined-text-field
                  label="State/Province"
                  autocomplete="address-level1"
                  .value=${this.state||""}
                  @blur=${e=>P(e.target)}
                  @change=${e=>this.state=e.target.value}
                >
                  <md-icon slot="leading-icon">location_on</md-icon>
                </md-outlined-text-field>
              `:n`
                <md-outlined-select
                  @opening=${()=>N(this.dialog)}
                  @closing=${()=>k(this.dialog)}
                  @blur=${e=>P(e.target)}
                  label="State"
                  autocomplete="address-level1"
                  required
                  .value=${this.state||""}
                  @change=${e=>{e.stopPropagation(),this.state=e.target.value,B.some(e=>e.abbreviation.toLowerCase()===this.state.toLowerCase())&&(this.country="US")}}
                >
                  <md-icon slot="leading-icon">location_on</md-icon>

                  ${B.map(e=>n`<md-select-option ?hidden=${"CA"===this.country} ?selected=${e.abbreviation===this.state} value=${e.abbreviation}>
                        <div slot="headline">${e.name}</div>
                        <div slot="supporting-text">United States</div>
                      </md-select-option>`)}
                  ${L.map(e=>n`<md-select-option
                        ?hidden=${!this.allowInternational||"US"===this.country}
                        ?selected=${e.abbreviation===this.state}
                        value=${e.abbreviation}
                      >
                        <div slot="headline">${e.name}</div>
                        <div slot="supporting-text">Canada</div>
                      </md-select-option>`)}
                </md-outlined-select>
              `}

          <md-outlined-text-field
            label="Zip"
            autocomplete="postal-code"
            ?required=${!this.allowInternational||"US"===this.country}
            .value=${this.zip||""}
            @blur=${e=>P(e.target)}
            @change=${e=>this.zip=e.target.value}
            ><md-icon slot="leading-icon">universal_local</md-icon></md-outlined-text-field
          >
        </form>

        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}> Cancel </md-text-button>
          <md-text-button
            @click=${()=>{if(this.validate()){this.dialog.close("apply");const e={street:this.street,street2:this.street2,city:this.city,state:this.state,zip:this.zip,county:this.county,country:this.country};this.resolve(e)}}}
            >Update</md-text-button
          >
        </div>
      </md-dialog>
    `}};e([b("md-dialog")],G.prototype,"dialog",null),e([a({type:String})],G.prototype,"label",null),e([a({type:Boolean,attribute:"show-county"})],G.prototype,"showCounty",null),e([a({type:Boolean,attribute:"show-street2"})],G.prototype,"showStreet2",null),e([a({type:Boolean,attribute:"allow-international"})],G.prototype,"allowInternational",null),e([m()],G.prototype,"street",null),e([m()],G.prototype,"street2",null),e([m()],G.prototype,"city",null),e([m()],G.prototype,"county",null),e([m()],G.prototype,"country",null),e([m()],G.prototype,"state",null),e([m()],G.prototype,"zip",null),e([d("md-outlined-text-field, md-outlined-select")],G.prototype,"allInputs",null),G=e([i("manual-address-dialog")],G);let E=class extends T{#g=!1;get showStreet2(){return this.#g}set showStreet2(e){this.#g=e}#v=!1;get showCounty(){return this.#v}set showCounty(e){this.#v=e}#$;get manualAddressDialog(){return this.#$}set manualAddressDialog(e){this.#$=e}#C=!1;get hasSelection(){return this.#C}set hasSelection(e){this.#C=e}static{this.styles=[...T.styles,r`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        --_supporting-text-trailing-space: 165px;
      }

      :host([has-selection]) {
        --md-outlined-text-field-with-trailing-icon-trailing-space: 36px;
      }
    `]}update(e){e.has("selected")&&(this.hasSelection=!!this.selected),super.update(e)}renderTrailingSlot(){return n`<manual-address-dialog
      .allowInternational=${this.allowInternational}
      .showCounty=${this.showCounty}
      .showStreet2=${this.showStreet2}
      .label=${this.label}
    ></manual-address-dialog>`}renderTrailingInputSlot(){return n`
      <md-icon-button
        ?hidden=${this.isLoading}
        ?disabled=${this.disabled}
        slot="trailing-icon"
        title="Can't find address"
        @click=${async e=>{e.preventDefault();const a=await this.manualAddressDialog.open(this.selected);a&&(super.setSelectedBase({Id:Math.random().toString(36).slice(2,7),...a}),this.reportValidity())}}
      >
        <md-icon>contact_support</md-icon>
      </md-icon-button>
    `}};e([a({type:Boolean,attribute:"show-street2"})],E.prototype,"showStreet2",null),e([a({type:Boolean,attribute:"show-county"})],E.prototype,"showCounty",null),e([b("manual-address-dialog")],E.prototype,"manualAddressDialog",null),e([a({type:Boolean,attribute:"has-selection",reflect:!0})],E.prototype,"hasSelection",null),E=e([i("titanium-address-input")],E);let R=class extends o{#x=null;get setLocationResult(){return this.#x}set setLocationResult(e){this.#x=e}#_;get googleAddressInputDemoA(){return this.#_}set googleAddressInputDemoA(e){this.#_=e}#T;get titaniumAddressInputDemoA(){return this.#T}set titaniumAddressInputDemoA(e){this.#T=e}#n=!1;get allowInternational(){return this.#n}set allowInternational(e){this.#n=e}static{this.styles=[c,u,h,r`
      :host {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 24px 0;
      }

      h1,
      h2 {
        margin-bottom: -12px;
      }

      component-demo {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        gap: 24px;
      }

      section[actions] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      [locked] {
        display: block;
        position: relative;
        height: 300px;
        max-width: 650px;
        width: 100%;
      }

      [absolute] {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        will-change: transform;
        width: 100%;
      }

      @media (min-width: 450px) {
        titanium-address-input {
          min-width: 400px;
        }
      }
    `]}render(){return n`
      <h1>Google address input</h1>

      <component-demo>
        <h2>Main demo</h2>
        <google-address-input
          demo-a
          autocomplete="street-address"
          @selected=${e=>console.log("selected change 1",e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </google-address-input>

        <section actions>
          <md-outlined-button @click=${()=>this.googleAddressInputDemoA.reportValidity()}>reportValidity()</md-outlined-button>
          <md-outlined-button @click=${()=>this.googleAddressInputDemoA.required=!this.googleAddressInputDemoA.required}
            >Toggle required</md-outlined-button
          >

          <md-outlined-button @click=${()=>this.googleAddressInputDemoA.disabled=!this.googleAddressInputDemoA.disabled}
            >Toggle disabled</md-outlined-button
          >

          <md-outlined-button
            @click=${()=>this.googleAddressInputDemoA.supportingText=this.googleAddressInputDemoA.supportingText?"":"Select an address above"}
            >Toggle supporting text</md-outlined-button
          >
          <md-outlined-button
            @click=${()=>this.googleAddressInputDemoA.selected={Id:"1",street:"11 North Main Street",city:"Cedar City",state:"UT",zip:"84720"}}
            >Prefill an address</md-outlined-button
          >
          <md-outlined-button @click=${()=>this.googleAddressInputDemoA.reset()}>reset()</md-outlined-button>
        </section>
      </component-demo>
      <component-demo>
        <h2>Slots demo</h2>
        <google-address-input
          autocomplete="address"
          label="Slots"
          @selected=${e=>console.log("selected change 1",e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
          <md-icon slot="trailing-icon">security</md-icon><md-icon slot="leading-icon">map</md-icon>
        </google-address-input>
      </component-demo>

      <h1>Titanium address input</h1>

      <component-demo>
        <h2>Main demo</h2>
        <titanium-address-input
          ?allow-international=${this.allowInternational}
          autocomplete="address"
          demo-a
          @selected=${e=>console.log("selected change 1",e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </titanium-address-input>

        <section actions>
          <md-outlined-button @click=${()=>this.allowInternational=!this.allowInternational}>Allow international</md-outlined-button>
          <md-outlined-button @click=${()=>this.titaniumAddressInputDemoA.reportValidity()}>reportValidity()</md-outlined-button>
          <md-outlined-button @click=${()=>this.titaniumAddressInputDemoA.required=!this.titaniumAddressInputDemoA.required}
            >Toggle required</md-outlined-button
          >

          <md-outlined-button @click=${()=>this.titaniumAddressInputDemoA.disabled=!this.titaniumAddressInputDemoA.disabled}
            >Toggle disabled</md-outlined-button
          >

          <md-outlined-button
            @click=${()=>this.titaniumAddressInputDemoA.supportingText=this.titaniumAddressInputDemoA.supportingText?"":"Select an address above"}
            >Toggle supporting text</md-outlined-button
          >

          <md-outlined-button @click=${()=>this.titaniumAddressInputDemoA.showCounty=!this.titaniumAddressInputDemoA.showCounty}
            >Toggle show county</md-outlined-button
          >

          <md-outlined-button @click=${()=>this.titaniumAddressInputDemoA.showStreet2=!this.titaniumAddressInputDemoA.showStreet2}
            >Toggle show street2</md-outlined-button
          >

          <md-outlined-button
            @click=${()=>this.titaniumAddressInputDemoA.selected={Id:"1",street:"11 North Main Street",city:"Cedar City",state:"UT",zip:"84720",country:"US"}}
            >Prefill an address</md-outlined-button
          >
          <md-outlined-button @click=${()=>this.titaniumAddressInputDemoA.reset()}>reset()</md-outlined-button>
        </section>
      </component-demo>
    `}};e([m()],R.prototype,"setLocationResult",null),e([b("google-address-input[demo-a]")],R.prototype,"googleAddressInputDemoA",null),e([b("titanium-address-input[demo-a]")],R.prototype,"titaniumAddressInputDemoA",null),e([m()],R.prototype,"allowInternational",null),R=e([i("titanium-address-input-playground")],R);let K=class extends o{static{this.styles=[v,r``]}render(){return n`
      <story-header name="Titanium Address Input" className="TitaniumAddressInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-address-input/project.json"
        ><titanium-address-input-playground></titanium-address-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-address-input"></api-docs>
    `}};K=e([i("titanium-address-input-demo")],K);export{K as TitaniumAddressInputDemo};
