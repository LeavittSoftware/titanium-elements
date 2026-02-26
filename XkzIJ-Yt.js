import{_ as e,n as a,t as i,S as t,c as n,i as o,b as s,f as r,u as l,K as d,M as b,e as m,r as h,W as c}from"./BkdWKSMI.js";import{S as u}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import{T as v}from"./CletilfP.js";import{D as g}from"./DTS7lhmZ.js";import"./Crvvf7pv.js";import"./ChwwPp1m.js";import"./pNeA5_IP.js";import"./CIHPGdiZ.js";import"./DbnfmX2U.js";function p(e,a,i,t){return new(i||(i=Promise))(function(a,n){function o(e){try{r(t.next(e))}catch(e){n(e)}}function s(e){try{r(t.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(o,s)}r((t=t.apply(e,[])).next())})}function f(e){return e&&e.i&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y,S;"function"==typeof SuppressedError&&SuppressedError;var A=(S||(S=1,y=function e(a,i){if(a===i)return!0;if(a&&i&&"object"==typeof a&&"object"==typeof i){if(a.constructor!==i.constructor)return!1;var t,n,o;if(Array.isArray(a)){if((t=a.length)!=i.length)return!1;for(n=t;0!==n--;)if(!e(a[n],i[n]))return!1;return!0}if(a.constructor===RegExp)return a.source===i.source&&a.flags===i.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===i.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===i.toString();if((t=(o=Object.keys(a)).length)!==Object.keys(i).length)return!1;for(n=t;0!==n--;)if(!Object.prototype.hasOwnProperty.call(i,o[n]))return!1;for(n=t;0!==n--;){var s=o[n];if(!e(a[s],i[s]))return!1}return!0}return a!=a&&i!=i}),y),w=f(A);const I="__googleMapsScriptId";var $;!function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"}($||($={}));class M{constructor({apiKey:e,authReferrerPolicy:a,channel:i,client:t,id:n=I,language:o,libraries:s=[],mapIds:r,nonce:l,region:d,retries:b=3,url:m="https://maps.googleapis.com/maps/api/js",version:h}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=a,this.channel=i,this.client=t,this.id=n||I,this.language=o,this.libraries=s,this.mapIds=r,this.nonce=l,this.region=d,this.retries=b,this.url=m,this.version=h,M.instance){if(!w(this.options,M.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(M.instance.options)}`);return M.instance}M.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?$.FAILURE:this.done?$.SUCCESS:this.loading?$.LOADING:$.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,a)=>{this.loadCallback(i=>{i?a(i.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,a;if(document.getElementById(this.id))return void this.callback();const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach(e=>!i[e]&&delete i[e]),(null===(a=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.maps)||void 0===a?void 0:a.importLibrary)||(e=>{let a,i,t,n="The Google Maps JavaScript API",o="google",s="importLibrary",r="__ib__",l=document,d=window;d=d[o]||(d[o]={});const b=d.maps||(d.maps={}),m=new Set,h=new URLSearchParams,c=()=>a||(a=new Promise((s,d)=>p(this,0,void 0,function*(){var c;for(t in yield i=l.createElement("script"),i.id=this.id,h.set("libraries",[...m]+""),e)h.set(t.replace(/[A-Z]/g,e=>"_"+e[0].toLowerCase()),e[t]);h.set("callback",o+".maps."+r),i.src=this.url+"?"+h,b[r]=s,i.onerror=()=>a=d(Error(n+" could not load.")),i.nonce=this.nonce||(null===(c=l.querySelector("script[nonce]"))||void 0===c?void 0:c.nonce)||"",l.head.append(i)})));b[s]?console.warn(n+" only loads once. Ignoring:",e):b[s]=(e,...a)=>m.add(e)&&c().then(()=>b[s](e,...a))})(i);const t=this.libraries.map(e=>this.importLibrary(e));t.length||t.push(this.importLibrary("core")),Promise.all(t).then(()=>this.callback(),e=>{const a=new ErrorEvent("error",{error:e});this.loadErrorCallback(a)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading=!0,this.setScript()}}}const x=[{abbreviation:"AF",name:"Afghanistan"},{abbreviation:"AL",name:"Albania"},{abbreviation:"DZ",name:"Algeria"},{abbreviation:"AS",name:"American Samoa"},{abbreviation:"AD",name:"Andorra"},{abbreviation:"AO",name:"Angola"},{abbreviation:"AI",name:"Anguilla"},{abbreviation:"AQ",name:"Antarctica"},{abbreviation:"AG",name:"Antigua and Barbuda"},{abbreviation:"AR",name:"Argentina"},{abbreviation:"AM",name:"Armenia"},{abbreviation:"AW",name:"Aruba"},{abbreviation:"AU",name:"Australia"},{abbreviation:"AT",name:"Austria"},{abbreviation:"AZ",name:"Azerbaijan"},{abbreviation:"BS",name:"Bahamas"},{abbreviation:"BH",name:"Bahrain"},{abbreviation:"BD",name:"Bangladesh"},{abbreviation:"BB",name:"Barbados"},{abbreviation:"BY",name:"Belarus"},{abbreviation:"BE",name:"Belgium"},{abbreviation:"BZ",name:"Belize"},{abbreviation:"BJ",name:"Benin"},{abbreviation:"BM",name:"Bermuda"},{abbreviation:"BT",name:"Bhutan"},{abbreviation:"BO",name:"Bolivia"},{abbreviation:"BA",name:"Bosnia and Herzegovina"},{abbreviation:"BW",name:"Botswana"},{abbreviation:"BR",name:"Brazil"},{abbreviation:"IO",name:"British Indian Ocean Territory"},{abbreviation:"VG",name:"British Virgin Islands"},{abbreviation:"BN",name:"Brunei"},{abbreviation:"BG",name:"Bulgaria"},{abbreviation:"BF",name:"Burkina Faso"},{abbreviation:"BI",name:"Burundi"},{abbreviation:"KH",name:"Cambodia"},{abbreviation:"CM",name:"Cameroon"},{abbreviation:"CA",name:"Canada"},{abbreviation:"CV",name:"Cape Verde"},{abbreviation:"KY",name:"Cayman Islands"},{abbreviation:"CF",name:"Central African Republic"},{abbreviation:"TD",name:"Chad"},{abbreviation:"CL",name:"Chile"},{abbreviation:"CN",name:"China"},{abbreviation:"CX",name:"Christmas Island"},{abbreviation:"CC",name:"Cocos Islands"},{abbreviation:"CO",name:"Colombia"},{abbreviation:"KM",name:"Comoros"},{abbreviation:"CK",name:"Cook Islands"},{abbreviation:"CR",name:"Costa Rica"},{abbreviation:"HR",name:"Croatia"},{abbreviation:"CU",name:"Cuba"},{abbreviation:"CW",name:"Curacao"},{abbreviation:"CY",name:"Cyprus"},{abbreviation:"CZ",name:"Czech Republic"},{abbreviation:"CD",name:"Democratic Republic of the Congo"},{abbreviation:"DK",name:"Denmark"},{abbreviation:"DJ",name:"Djibouti"},{abbreviation:"DM",name:"Dominica"},{abbreviation:"DO",name:"Dominican Republic"},{abbreviation:"TL",name:"East Timor"},{abbreviation:"EC",name:"Ecuador"},{abbreviation:"EG",name:"Egypt"},{abbreviation:"SV",name:"El Salvador"},{abbreviation:"GQ",name:"Equatorial Guinea"},{abbreviation:"ER",name:"Eritrea"},{abbreviation:"EE",name:"Estonia"},{abbreviation:"ET",name:"Ethiopia"},{abbreviation:"FK",name:"Falkland Islands"},{abbreviation:"FO",name:"Faroe Islands"},{abbreviation:"FJ",name:"Fiji"},{abbreviation:"FI",name:"Finland"},{abbreviation:"FR",name:"France"},{abbreviation:"PF",name:"French Polynesia"},{abbreviation:"GA",name:"Gabon"},{abbreviation:"GM",name:"Gambia"},{abbreviation:"GE",name:"Georgia"},{abbreviation:"DE",name:"Germany"},{abbreviation:"GH",name:"Ghana"},{abbreviation:"GI",name:"Gibraltar"},{abbreviation:"GR",name:"Greece"},{abbreviation:"GL",name:"Greenland"},{abbreviation:"GD",name:"Grenada"},{abbreviation:"GU",name:"Guam"},{abbreviation:"GT",name:"Guatemala"},{abbreviation:"GG",name:"Guernsey"},{abbreviation:"GN",name:"Guinea"},{abbreviation:"GW",name:"Guinea-Bissau"},{abbreviation:"GY",name:"Guyana"},{abbreviation:"HT",name:"Haiti"},{abbreviation:"HN",name:"Honduras"},{abbreviation:"HK",name:"Hong Kong"},{abbreviation:"HU",name:"Hungary"},{abbreviation:"IS",name:"Iceland"},{abbreviation:"IN",name:"India"},{abbreviation:"ID",name:"Indonesia"},{abbreviation:"IR",name:"Iran"},{abbreviation:"IQ",name:"Iraq"},{abbreviation:"IE",name:"Ireland"},{abbreviation:"IM",name:"Isle of Man"},{abbreviation:"IL",name:"Israel"},{abbreviation:"IT",name:"Italy"},{abbreviation:"CI",name:"Ivory Coast"},{abbreviation:"JM",name:"Jamaica"},{abbreviation:"JP",name:"Japan"},{abbreviation:"JE",name:"Jersey"},{abbreviation:"JO",name:"Jordan"},{abbreviation:"KZ",name:"Kazakhstan"},{abbreviation:"KE",name:"Kenya"},{abbreviation:"KI",name:"Kiribati"},{abbreviation:"XK",name:"Kosovo"},{abbreviation:"KW",name:"Kuwait"},{abbreviation:"KG",name:"Kyrgyzstan"},{abbreviation:"LA",name:"Laos"},{abbreviation:"LV",name:"Latvia"},{abbreviation:"LB",name:"Lebanon"},{abbreviation:"LS",name:"Lesotho"},{abbreviation:"LR",name:"Liberia"},{abbreviation:"LY",name:"Libya"},{abbreviation:"LI",name:"Liechtenstein"},{abbreviation:"LT",name:"Lithuania"},{abbreviation:"LU",name:"Luxembourg"},{abbreviation:"MO",name:"Macao"},{abbreviation:"MG",name:"Madagascar"},{abbreviation:"MW",name:"Malawi"},{abbreviation:"MY",name:"Malaysia"},{abbreviation:"MV",name:"Maldives"},{abbreviation:"ML",name:"Mali"},{abbreviation:"MT",name:"Malta"},{abbreviation:"MH",name:"Marshall Islands"},{abbreviation:"MR",name:"Mauritania"},{abbreviation:"MU",name:"Mauritius"},{abbreviation:"YT",name:"Mayotte"},{abbreviation:"MX",name:"Mexico"},{abbreviation:"FM",name:"Micronesia"},{abbreviation:"MD",name:"Moldova"},{abbreviation:"MC",name:"Monaco"},{abbreviation:"MN",name:"Mongolia"},{abbreviation:"ME",name:"Montenegro"},{abbreviation:"MS",name:"Montserrat"},{abbreviation:"MA",name:"Morocco"},{abbreviation:"MZ",name:"Mozambique"},{abbreviation:"MM",name:"Myanmar"},{abbreviation:"NA",name:"Namibia"},{abbreviation:"NR",name:"Nauru"},{abbreviation:"NP",name:"Nepal"},{abbreviation:"NL",name:"Netherlands"},{abbreviation:"AN",name:"Netherlands Antilles"},{abbreviation:"NC",name:"New Caledonia"},{abbreviation:"NZ",name:"New Zealand"},{abbreviation:"NI",name:"Nicaragua"},{abbreviation:"NE",name:"Niger"},{abbreviation:"NG",name:"Nigeria"},{abbreviation:"NU",name:"Niue"},{abbreviation:"KP",name:"North Korea"},{abbreviation:"MK",name:"North Macedonia"},{abbreviation:"MP",name:"Northern Mariana Islands"},{abbreviation:"NO",name:"Norway"},{abbreviation:"OM",name:"Oman"},{abbreviation:"PK",name:"Pakistan"},{abbreviation:"PW",name:"Palau"},{abbreviation:"PS",name:"Palestine"},{abbreviation:"PA",name:"Panama"},{abbreviation:"PG",name:"Papua New Guinea"},{abbreviation:"PY",name:"Paraguay"},{abbreviation:"PE",name:"Peru"},{abbreviation:"PH",name:"Philippines"},{abbreviation:"PN",name:"Pitcairn"},{abbreviation:"PL",name:"Poland"},{abbreviation:"PT",name:"Portugal"},{abbreviation:"PR",name:"Puerto Rico"},{abbreviation:"QA",name:"Qatar"},{abbreviation:"CG",name:"Republic of the Congo"},{abbreviation:"RE",name:"Reunion"},{abbreviation:"RO",name:"Romania"},{abbreviation:"RU",name:"Russia"},{abbreviation:"RW",name:"Rwanda"},{abbreviation:"BL",name:"Saint Barthelemy"},{abbreviation:"SH",name:"Saint Helena"},{abbreviation:"KN",name:"Saint Kitts and Nevis"},{abbreviation:"LC",name:"Saint Lucia"},{abbreviation:"MF",name:"Saint Martin"},{abbreviation:"PM",name:"Saint Pierre and Miquelon"},{abbreviation:"VC",name:"Saint Vincent and the Grenadines"},{abbreviation:"WS",name:"Samoa"},{abbreviation:"SM",name:"San Marino"},{abbreviation:"ST",name:"Sao Tome and Principe"},{abbreviation:"SA",name:"Saudi Arabia"},{abbreviation:"SN",name:"Senegal"},{abbreviation:"RS",name:"Serbia"},{abbreviation:"SC",name:"Seychelles"},{abbreviation:"SL",name:"Sierra Leone"},{abbreviation:"SG",name:"Singapore"},{abbreviation:"SX",name:"Sint Maarten"},{abbreviation:"SK",name:"Slovakia"},{abbreviation:"SI",name:"Slovenia"},{abbreviation:"SB",name:"Solomon Islands"},{abbreviation:"SO",name:"Somalia"},{abbreviation:"ZA",name:"South Africa"},{abbreviation:"KR",name:"South Korea"},{abbreviation:"SS",name:"South Sudan"},{abbreviation:"ES",name:"Spain"},{abbreviation:"LK",name:"Sri Lanka"},{abbreviation:"SD",name:"Sudan"},{abbreviation:"SR",name:"Suriname"},{abbreviation:"SJ",name:"Svalbard and Jan Mayen"},{abbreviation:"SZ",name:"Swaziland"},{abbreviation:"SE",name:"Sweden"},{abbreviation:"CH",name:"Switzerland"},{abbreviation:"SY",name:"Syria"},{abbreviation:"TW",name:"Taiwan"},{abbreviation:"TJ",name:"Tajikistan"},{abbreviation:"TZ",name:"Tanzania"},{abbreviation:"TH",name:"Thailand"},{abbreviation:"TG",name:"Togo"},{abbreviation:"TK",name:"Tokelau"},{abbreviation:"TO",name:"Tonga"},{abbreviation:"TT",name:"Trinidad and Tobago"},{abbreviation:"TN",name:"Tunisia"},{abbreviation:"TR",name:"Türkiye"},{abbreviation:"TM",name:"Turkmenistan"},{abbreviation:"TC",name:"Turks and Caicos Islands"},{abbreviation:"TV",name:"Tuvalu"},{abbreviation:"VI",name:"U.S. Virgin Islands"},{abbreviation:"UG",name:"Uganda"},{abbreviation:"UA",name:"Ukraine"},{abbreviation:"AE",name:"United Arab Emirates"},{abbreviation:"GB",name:"United Kingdom"},{abbreviation:"US",name:"United States"},{abbreviation:"UY",name:"Uruguay"},{abbreviation:"UZ",name:"Uzbekistan"},{abbreviation:"VU",name:"Vanuatu"},{abbreviation:"VA",name:"Vatican"},{abbreviation:"VE",name:"Venezuela"},{abbreviation:"VN",name:"Vietnam"},{abbreviation:"WF",name:"Wallis and Futuna"},{abbreviation:"EH",name:"Western Sahara"},{abbreviation:"YE",name:"Yemen"},{abbreviation:"ZM",name:"Zambia"},{abbreviation:"ZW",name:"Zimbabwe"}];function C(e){if(!e)return"";const a=[],i=e.street?.trim(),t=e.street2?.trim();(i||t)&&a.push(`${i||""} ${t||""}`?.trim());const n=e.city?.trim(),o=e.state?.trim(),s=e.zip?.trim();a.push(`${n&&o?`${n}, ${o}`:`${n||""} ${o||""}`?.trim()} ${s}`?.trim());const r=e.county?.trim();"US"!==e?.country&&"CA"!==e?.country&&r&&a.push(r);const l=e.country?.trim();return l&&a.push("US"===l?"USA":function(e,a=!1){if(!e)return"";if(a&&"us"===e.toLowerCase())return"";const i=x.find(a=>a.abbreviation.toLowerCase()===e.toLowerCase());return i?i.name:e}(l)),a.join(", ")}let _=class extends v{#e;get googleMapsApiKey(){return this.#e}set googleMapsApiKey(e){this.#e=e}#a="Address";get label(){return this.#a}set label(e){this.#a=e}#i="Search for an address";get placeholder(){return this.#i}set placeholder(e){this.#i=e}#t="primaryDisplayText";get pathToSelectedText(){return this.#t}set pathToSelectedText(e){this.#t=e}#n=!1;get allowInternational(){return this.#n}set allowInternational(e){this.#n=e}#o="off";get autocomplete(){return this.#o}set autocomplete(e){this.#o=e}#s=!1;get spellcheck(){return this.#s}set spellcheck(e){this.#s=e}#r=new g(e=>this.#l(e));#d=new AbortController;#b;#m;async firstUpdated(){const e=new M({apiKey:this.googleMapsApiKey,version:"weekly",libraries:["places"]});await e.importLibrary("places"),this.#b=new google.maps.places.PlacesService(document.createElement("div")),this.#m=new google.maps.places.AutocompleteService}updated(e){if(e.has("selected")&&this.selected){C(this.selected)!==this.selected.primaryDisplayText&&(this.selected.primaryDisplayText=C(this.selected),this.requestUpdate("selected"))}}async#h(e){return new Promise(a=>{const i={input:e,types:["address"]};this.allowInternational||(i.componentRestrictions={country:["us"]}),this.#m.getPlacePredictions(i,(e,i)=>i==google.maps.places.PlacesServiceStatus.OK&&e?a(e.map(e=>({Id:e.place_id,primaryDisplayText:e?.structured_formatting?.main_text||e.description,secondaryText:e.structured_formatting?.secondary_text}))):(console.warn(i),a([])))})}async#c(e){return new Promise((a,i)=>{const t={placeId:e,fields:["address_components","formatted_address","geometry"]};this.#b.getDetails(t,(e,t)=>t==google.maps.places.PlacesServiceStatus.OK&&e?a(e):i(t))})}async#l(e){if(e){this.#d.abort(),this.#d=new AbortController;try{const a=this.#h(e);this.loadWhile(a);const i=await a??[];return void this.showSuggestions(i,i.length)}catch(e){e?.message?.includes("Abort error")||this.dispatchEvent(new t(e))}this.showSuggestions([],0)}}customCheckValidity(){if(!this.selected&&this.getTextField()?.value)return this.errorText="Please enter a valid address in this field",!1;if(!this.required&&!this.selected)return!0;if(!this.selected)return this.errorText="Please enter a valid address in this field",!1;if(!this.allowInternational||"US"===this.selected?.country){if(!function(e){const a=new RegExp(/^(?=.{1,64}$)[a-zA-Z \-.\d #'.,]{1,64}[\s][a-zA-Z \-.\d #'.,]{1,64}$/),i=new RegExp("[A-Z]"),t=new RegExp("[a-z]"),n=new RegExp("[0-9]");return!!a.test(e)&&(i.test(e)||t.test(e))&&n.test(e)}(this.selected?.street??""))return this.errorText="Please correct the invalid street",!1;if(!this.selected?.city)return this.errorText="Please correct the missing city",!1;if(!this.selected?.state)return this.errorText="Please correct the missing state",!1;if(!this.selected?.zip)return this.errorText="Please correct the missing zip code",!1}return!0}customReportValidity(){return this.customCheckValidity()?(this.errorText="",this.error=!1):this.error=!0,!this.error}onInputChanged(e){this.#r.debounce(e)}async setSelected(e){if(e)try{const a=function(e){if(!e||!e.address_components||!e.formatted_address)return null;const a=e.address_components.find(e=>e.types.some(e=>"neighborhood"===e)),i=e.address_components.find(e=>e.types.some(e=>"administrative_area_level_1"===e)),t=e.address_components.find(e=>e.types.some(e=>"street_number"===e))||e.address_components.find(e=>e.types.some(e=>"premise"===e)),n=e.address_components.find(e=>e.types.some(e=>"route"===e)),o=e.address_components.find(e=>e.types.some(e=>"locality"===e)),s=e.address_components.find(e=>e.types.some(e=>"sublocality"===e)),r=e.address_components.find(e=>e.types.some(e=>"administrative_area_level_3"===e)),l=e.address_components.find(e=>e.types.some(e=>"administrative_area_level_4"===e)),d=a?.short_name&&e.formatted_address.includes(a.short_name+",")?a:o||s||r||l,b=e.address_components.find(e=>e.types.some(e=>"postal_code"===e)),m=e.address_components.find(e=>e.types.some(e=>"administrative_area_level_2"===e)),h=e.address_components.find(e=>e.types.some(e=>"country"===e)),c=e.address_components.find(e=>e.types.some(e=>"subpremise"===e));return{street:t?.short_name?`${t?.short_name} ${n?.short_name||""}`?.trim():n?.short_name||"",fullStreet:`${t?.long_name} ${n?.long_name}`,city:d?.short_name,street2:c?.short_name,county:m?.short_name,country:h?.short_name,state:i?.short_name,fullState:i?.long_name,zip:b?.short_name,latitude:e.geometry?.location?.lat(),longitude:e.geometry?.location?.lng()}}(await this.#c(e.Id));a&&(e={...e,...a})}catch(e){this.dispatchEvent(new t(e))}super.setSelected(e)}setSelectedBase(e){super.setSelected(e)}renderLeadingInputSlot(){return n`<slot name="leading-icon" slot="leading-icon"><md-icon>place</md-icon></slot>`}renderTrailingMenuSlot(){return n` <div
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
    </md-menu-item>`}};function T(e){const a=e?.shadowRoot?.querySelector(".container"),i=a?.querySelector(".scroller");i&&(i.style.overflow="initial"),a&&(a.style.overflow="initial")}function N(e){const a=e?.shadowRoot?.querySelector(".container"),i=a?.querySelector(".scroller");i&&(i.style.overflow=""),a&&(a.style.overflow="")}e([a({type:String})],_.prototype,"googleMapsApiKey",null),e([a({type:String})],_.prototype,"label",null),e([a({type:String})],_.prototype,"placeholder",null),e([a({type:String})],_.prototype,"pathToSelectedText",null),e([a({type:Boolean,attribute:"allow-international"})],_.prototype,"allowInternational",null),e([a({reflect:!0,type:String})],_.prototype,"autocomplete",null),e([a({reflect:!0,type:Boolean})],_.prototype,"spellcheck",null),_=e([i("google-address-input")],_);const k=e=>{e?.hasError&&e?.reportValidity()},B=[{abbreviation:"AL",name:"Alabama"},{abbreviation:"AK",name:"Alaska"},{abbreviation:"AS",name:"American Samoa"},{abbreviation:"AZ",name:"Arizona"},{abbreviation:"AR",name:"Arkansas"},{abbreviation:"CA",name:"California"},{abbreviation:"CO",name:"Colorado"},{abbreviation:"CT",name:"Connecticut"},{abbreviation:"DE",name:"Delaware"},{abbreviation:"DC",name:"District of Columbia"},{abbreviation:"FM",name:"Federated States of Micronesia"},{abbreviation:"FL",name:"Florida"},{abbreviation:"GA",name:"Georgia"},{abbreviation:"GU",name:"Guam"},{abbreviation:"HI",name:"Hawaii"},{abbreviation:"ID",name:"Idaho"},{abbreviation:"IL",name:"Illinois"},{abbreviation:"IN",name:"Indiana"},{abbreviation:"IA",name:"Iowa"},{abbreviation:"KS",name:"Kansas"},{abbreviation:"KY",name:"Kentucky"},{abbreviation:"LA",name:"Louisiana"},{abbreviation:"ME",name:"Maine"},{abbreviation:"MH",name:"Marshall Islands"},{abbreviation:"MD",name:"Maryland"},{abbreviation:"MA",name:"Massachusetts"},{abbreviation:"MI",name:"Michigan"},{abbreviation:"MN",name:"Minnesota"},{abbreviation:"MS",name:"Mississippi"},{abbreviation:"MO",name:"Missouri"},{abbreviation:"MT",name:"Montana"},{abbreviation:"NE",name:"Nebraska"},{abbreviation:"NV",name:"Nevada"},{abbreviation:"NH",name:"New Hampshire"},{abbreviation:"NJ",name:"New Jersey"},{abbreviation:"NM",name:"New Mexico"},{abbreviation:"NY",name:"New York"},{abbreviation:"NC",name:"North Carolina"},{abbreviation:"ND",name:"North Dakota"},{abbreviation:"MP",name:"Northern Mariana Islands"},{abbreviation:"OH",name:"Ohio"},{abbreviation:"OK",name:"Oklahoma"},{abbreviation:"OR",name:"Oregon"},{abbreviation:"PW",name:"Palau"},{abbreviation:"PA",name:"Pennsylvania"},{abbreviation:"PR",name:"Puerto Rico"},{abbreviation:"RI",name:"Rhode Island"},{abbreviation:"SC",name:"South Carolina"},{abbreviation:"SD",name:"South Dakota"},{abbreviation:"TN",name:"Tennessee"},{abbreviation:"TX",name:"Texas"},{abbreviation:"UT",name:"Utah"},{abbreviation:"VT",name:"Vermont"},{abbreviation:"VI",name:"Virgin Islands"},{abbreviation:"VA",name:"Virginia"},{abbreviation:"WA",name:"Washington"},{abbreviation:"WV",name:"West Virginia"},{abbreviation:"WI",name:"Wisconsin"},{abbreviation:"WY",name:"Wyoming"}],P=[{name:"Alberta",abbreviation:"AB"},{name:"British Columbia",abbreviation:"BC"},{name:"Manitoba",abbreviation:"MB"},{name:"New Brunswick",abbreviation:"NB"},{name:"Newfoundland and Labrador",abbreviation:"NL"},{name:"Northwest Territories",abbreviation:"NT"},{name:"Nova Scotia",abbreviation:"NS"},{name:"Nunavut",abbreviation:"NU"},{name:"Ontario",abbreviation:"ON"},{name:"Prince Edward Island",abbreviation:"PE"},{name:"Quebec",abbreviation:"QC"},{name:"Saskatchewan",abbreviation:"SK"},{name:"Yukon Territory",abbreviation:"YT"}];let L=class extends o{#u;get dialog(){return this.#u}set dialog(e){this.#u=e}#a="";get label(){return this.#a}set label(e){this.#a=e}#v;get showCounty(){return this.#v}set showCounty(e){this.#v=e}#g;get showStreet2(){return this.#g}set showStreet2(e){this.#g=e}#n=!1;get allowInternational(){return this.#n}set allowInternational(e){this.#n=e}#p=!1;get filled(){return this.#p}set filled(e){this.#p=e}#f="";get street(){return this.#f}set street(e){this.#f=e}#y="";get street2(){return this.#y}set street2(e){this.#y=e}#S="";get city(){return this.#S}set city(e){this.#S=e}#A="";get county(){return this.#A}set county(e){this.#A=e}#w="";get country(){return this.#w}set country(e){this.#w=e}#I="";get state(){return this.#I}set state(e){this.#I=e}#$="";get zip(){return this.#$}set zip(e){this.#$=e}#M;get allInputs(){return this.#M}set allInputs(e){this.#M=e}async open(e){return this.reset(),await this.updateComplete,this.street=e?.street??"",this.street2=e?.street2??"",this.city=e?.city??"",this.state=e?.state??"",this.zip=e?.zip??"",this.county=e?.county??"",this.country=e?.country??"",this.dialog.show(),new Promise(e=>{this.resolve=e})}validate(){let e=!0;return this.allInputs.forEach(a=>{a.reportValidity()||(e=!1)}),e}async reset(){this.street="",this.street2="",this.city="",this.state="",this.zip="",this.county="",this.country="",this.allInputs.forEach(e=>e.reset())}static{this.styles=[s`
      md-dialog {
        max-width: 550px;
        width: calc(100vw - 24px);
        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      md-filled-select {
        --md-filled-select-text-field-container-shape: 16px;
        --md-menu-container-shape: 16px;
        --md-filled-select-text-field-active-indicator-height: 0;
        --md-filled-select-text-field-error-active-indicator-height: 0;
        --md-filled-select-text-field-hover-active-indicator-height: 0;
        --md-filled-select-text-field-focus-active-indicator-height: 0;
        --md-filled-select-text-field-disabled-active-indicator-height: 0;
      }

      md-filled-text-field {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return b`
      <md-dialog
        @open=${e=>{l(e.target)}}
        @closing=${e=>{"apply"!==e.target.returnValue&&this.resolve(null)}}
      >
        <div slot="headline">${this.label}</div>
        <form slot="content">
          <${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
            label="Street"
            autocomplete="address-line1"
            ?required=${!this.allowInternational||"US"===this.country}
            .value=${this.street||""}
            @blur=${e=>k(e.target)}
            @change=${e=>this.street=e.target.value}
          >
            <md-icon slot="leading-icon">markunread_mailbox</md-icon>
          </${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}>
          ${this.showStreet2||"US"!==this.country&&this.country?b` <${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
                @blur=${e=>k(e.target)}
                label="Street 2/Apartment"
                autocomplete="address-line2"
                .value=${this.street2||""}
                @change=${e=>this.street2=e.target.value}
              >
                <md-icon slot="leading-icon">meeting_room</md-icon></${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
              >`:r}
          <${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
            label="City"
            autocomplete="address-level2"
            ?required=${!this.allowInternational||"US"===this.country}
            .value=${this.city||""}
            @blur=${e=>k(e.target)}
            @change=${e=>this.city=e.target.value}
            ><md-icon slot="leading-icon">location_city</md-icon></${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
          >
          ${this.showCounty||"US"!==this.country&&this.country?b`<${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
                @blur=${e=>k(e.target)}
                label="County"
                ?required=${!this.allowInternational||"US"===this.country}
                .value=${this.county||""}
                @change=${e=>this.county=e.target.value}
                ><md-icon slot="leading-icon">explore</md-icon></${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
              >`:r}
          ${this.allowInternational?b`<${this.filled?d`md-filled-select`:d`md-outlined-select`}
                @opening=${()=>T(this.dialog)}
                @closing=${()=>N(this.dialog)}
                @blur=${e=>k(e.target)}
                label="Country"
                autocomplete="country"
                required
                .value=${this.country||""}
                @change=${e=>{if(e.stopPropagation(),this.country=e.target.value,"US"===this.country){const e=B?.find(e=>e.abbreviation.toLowerCase()===this.state.toLowerCase()||e.name?.toLowerCase()===this.state.toLowerCase());this.state=e?e?.abbreviation:""}else if("CA"===this.country){const e=P?.find(e=>e.abbreviation.toLowerCase()===this.state.toLowerCase()||e.name?.toLowerCase()===this.state.toLowerCase());this.state=e?e?.abbreviation:""}else this.state=""}}
              >
                <md-icon slot="leading-icon">map</md-icon>
                ${x.map(e=>b`<md-select-option value=${e.abbreviation}> <div slot="headline">${e.name}</div></md-select-option>`)}
              </${this.filled?d`md-filled-select`:d`md-outlined-select`}> `:r}
          ${this.allowInternational&&"US"!==this.country&&"CA"!==this.country?b`
                <${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
                  label="State/Province"
                  autocomplete="address-level1"
                  .value=${this.state||""}
                  @blur=${e=>k(e.target)}
                  @change=${e=>this.state=e.target.value}
                >
                  <md-icon slot="leading-icon">location_on</md-icon>
                </${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}>
              `:b`
                <${this.filled?d`md-filled-select`:d`md-outlined-select`}
                  @opening=${()=>T(this.dialog)}
                  @closing=${()=>N(this.dialog)}
                  @blur=${e=>k(e.target)}
                  label="State"
                  autocomplete="address-level1"
                  required
                  .value=${this.state||""}
                  @change=${e=>{e.stopPropagation(),this.state=e.target.value,B.some(e=>e.abbreviation.toLowerCase()===this.state.toLowerCase())&&(this.country="US")}}
                >
                  <md-icon slot="leading-icon">location_on</md-icon>

                  ${B.map(e=>b`<md-select-option ?hidden=${"CA"===this.country} ?selected=${e.abbreviation===this.state} value=${e.abbreviation}>
                        <div slot="headline">${e.name}</div>
                        <div slot="supporting-text">United States</div>
                      </md-select-option>`)}
                  ${P.map(e=>b`<md-select-option
                        ?hidden=${!this.allowInternational||"US"===this.country}
                        ?selected=${e.abbreviation===this.state}
                        value=${e.abbreviation}
                      >
                        <div slot="headline">${e.name}</div>
                        <div slot="supporting-text">Canada</div>
                      </md-select-option>`)}
                </${this.filled?d`md-filled-select`:d`md-outlined-select`}>
              `}

          <${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
            label="Zip"
            autocomplete="postal-code"
            ?required=${!this.allowInternational||"US"===this.country}
            .value=${this.zip||""}
            @blur=${e=>k(e.target)}
            @change=${e=>this.zip=e.target.value}
            ><md-icon slot="leading-icon">universal_local</md-icon></${this.filled?d`md-filled-text-field`:d`md-outlined-text-field`}
          >
        </form>

        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}> Cancel </md-text-button>
          <md-filled-tonal-button
            @click=${()=>{if(this.validate()){this.dialog.close("apply");const e={street:this.street,street2:this.street2,city:this.city,state:this.state,zip:this.zip,county:this.county,country:this.country};this.resolve(e)}}}
            >Update</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};e([m("md-dialog")],L.prototype,"dialog",null),e([a({type:String})],L.prototype,"label",null),e([a({type:Boolean,attribute:"show-county"})],L.prototype,"showCounty",null),e([a({type:Boolean,attribute:"show-street2"})],L.prototype,"showStreet2",null),e([a({type:Boolean,attribute:"allow-international"})],L.prototype,"allowInternational",null),e([a({type:Boolean,attribute:"filled"})],L.prototype,"filled",null),e([h()],L.prototype,"street",null),e([h()],L.prototype,"street2",null),e([h()],L.prototype,"city",null),e([h()],L.prototype,"county",null),e([h()],L.prototype,"country",null),e([h()],L.prototype,"state",null),e([h()],L.prototype,"zip",null),e([c("md-outlined-text-field, md-outlined-select, md-filled-text-field, md-filled-select")],L.prototype,"allInputs",null),L=e([i("manual-address-dialog")],L);let D=class extends _{#g=!1;get showStreet2(){return this.#g}set showStreet2(e){this.#g=e}#v=!1;get showCounty(){return this.#v}set showCounty(e){this.#v=e}#x;get manualAddressDialog(){return this.#x}set manualAddressDialog(e){this.#x=e}#C=!1;get hasSelection(){return this.#C}set hasSelection(e){this.#C=e}static{this.styles=[..._.styles,s`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        --_supporting-text-trailing-space: 165px;
      }

      :host([has-selection]) {
        --md-outlined-text-field-with-trailing-icon-trailing-space: 36px;
        --md-filled-text-field-with-trailing-icon-trailing-space: 36px;
      }
    `]}update(e){e.has("selected")&&(this.hasSelection=!!this.selected),super.update(e)}renderTrailingSlot(){return n`<manual-address-dialog
      .allowInternational=${this.allowInternational}
      .showCounty=${this.showCounty}
      .showStreet2=${this.showStreet2}
      .filled=${this.filled}
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
    `}};e([a({type:Boolean,attribute:"show-street2"})],D.prototype,"showStreet2",null),e([a({type:Boolean,attribute:"show-county"})],D.prototype,"showCounty",null),e([m("manual-address-dialog")],D.prototype,"manualAddressDialog",null),e([a({type:Boolean,attribute:"has-selection",reflect:!0})],D.prototype,"hasSelection",null),D=e([i("titanium-address-input")],D);let E=class extends o{#_=null;get setLocationResult(){return this.#_}set setLocationResult(e){this.#_=e}#T;get googleAddressInputDemoA(){return this.#T}set googleAddressInputDemoA(e){this.#T=e}#N;get googleAddressInputDemoAFilled(){return this.#N}set googleAddressInputDemoAFilled(e){this.#N=e}#k;get titaniumAddressInputDemoA(){return this.#k}set titaniumAddressInputDemoA(e){this.#k=e}#B;get titaniumAddressInputDemoAFilled(){return this.#B}set titaniumAddressInputDemoAFilled(e){this.#B=e}#n=!1;get allowInternational(){return this.#n}set allowInternational(e){this.#n=e}static{this.styles=[u,s`
      h2 {
        margin-bottom: 12px;
      }

      titanium-address-input,
      google-address-input {
        margin-bottom: 24px;
      }

      section[actions] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `]}render(){return n`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium address input" level1Href="/titanium-address-input" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium address input" className="TitaniumAddressInput"></story-header>
            <h1>Google address input</h1>
            <div>
              <h2>Main demo</h2>
              <google-address-input
                demo-a
                autocomplete="street-address"
                @selected=${e=>console.log("selected change 1",e.target.selected)}
                googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
              >
              </google-address-input>

              <google-address-input
                filled
                demo-a-filled
                autocomplete="street-address"
                @selected=${e=>console.log("selected change 1",e.target.selected)}
                googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
              >
              </google-address-input>

              <section actions>
                <md-filled-tonal-button
                  @click=${()=>{this.googleAddressInputDemoA.reportValidity(),console.log("googleAddressInputDemoAFilled",this.googleAddressInputDemoAFilled.reportValidity),this.googleAddressInputDemoAFilled.reportValidity()}}
                  >reportValidity()</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.googleAddressInputDemoA.required=!this.googleAddressInputDemoA.required,this.googleAddressInputDemoAFilled.required=!this.googleAddressInputDemoAFilled.required}}
                  >Toggle required</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>{this.googleAddressInputDemoA.disabled=!this.googleAddressInputDemoA.disabled,this.googleAddressInputDemoAFilled.disabled=!this.googleAddressInputDemoAFilled.disabled}}
                  >Toggle disabled</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>{this.googleAddressInputDemoA.supportingText=this.googleAddressInputDemoA.supportingText?"":"Select an address above",this.googleAddressInputDemoAFilled.supportingText=this.googleAddressInputDemoAFilled.supportingText?"":"Select an address above"}}
                  >Toggle supporting text</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.googleAddressInputDemoA.selected={Id:"1",street:"11 North Main Street",city:"Cedar City",state:"UT",zip:"84720"},this.googleAddressInputDemoAFilled.selected={Id:"1",street:"11 North Main Street",city:"Cedar City",state:"UT",zip:"84720"}}}
                  >Prefill an address</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.googleAddressInputDemoA.reset(),this.googleAddressInputDemoAFilled.reset()}}
                  >reset()</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h2>Slots demo</h2>
              <google-address-input
                autocomplete="address"
                label="Slots"
                @selected=${e=>console.log("selected change 1",e.target.selected)}
                googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
              >
                <md-icon slot="trailing-icon">security</md-icon><md-icon slot="leading-icon">map</md-icon>
              </google-address-input>
            </div>

            <h1>Titanium address input</h1>

            <div>
              <h2>Main demo</h2>
              <titanium-address-input
                ?allow-international=${this.allowInternational}
                autocomplete="address"
                demo-a
                @selected=${e=>console.log("selected change 1",e.target.selected)}
                googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
              >
              </titanium-address-input>

              <titanium-address-input
                filled
                ?allow-international=${this.allowInternational}
                autocomplete="address"
                demo-a-filled
                @selected=${e=>console.log("selected change 1",e.target.selected)}
                googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
              >
              </titanium-address-input>

              <section actions>
                <md-filled-tonal-button @click=${()=>this.allowInternational=!this.allowInternational}>Allow international</md-filled-tonal-button>
                <md-filled-tonal-button
                  @click=${()=>{this.titaniumAddressInputDemoA.reportValidity(),this.titaniumAddressInputDemoAFilled.reportValidity()}}
                  >reportValidity()</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.titaniumAddressInputDemoA.required=!this.titaniumAddressInputDemoA.required,this.titaniumAddressInputDemoAFilled.required=!this.titaniumAddressInputDemoAFilled.required}}
                  >Toggle required</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>{this.titaniumAddressInputDemoA.disabled=!this.titaniumAddressInputDemoA.disabled,this.titaniumAddressInputDemoAFilled.disabled=!this.titaniumAddressInputDemoAFilled.disabled}}
                  >Toggle disabled</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>{this.titaniumAddressInputDemoA.supportingText=this.titaniumAddressInputDemoA.supportingText?"":"Select an address above",this.titaniumAddressInputDemoAFilled.supportingText=this.titaniumAddressInputDemoAFilled.supportingText?"":"Select an address above"}}
                  >Toggle supporting text</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>{this.titaniumAddressInputDemoA.showCounty=!this.titaniumAddressInputDemoA.showCounty,this.titaniumAddressInputDemoAFilled.showCounty=!this.titaniumAddressInputDemoAFilled.showCounty}}
                  >Toggle show county</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>{this.titaniumAddressInputDemoA.showStreet2=!this.titaniumAddressInputDemoA.showStreet2,this.titaniumAddressInputDemoAFilled.showStreet2=!this.titaniumAddressInputDemoAFilled.showStreet2}}
                  >Toggle show street2</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${()=>{this.titaniumAddressInputDemoA.selected={Id:"1",street:"11 North Main Street",city:"Cedar City",state:"UT",zip:"84720",country:"US"},this.titaniumAddressInputDemoAFilled.selected={Id:"1",street:"11 North Main Street",city:"Cedar City",state:"UT",zip:"84720",country:"US"}}}
                  >Prefill an address</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${()=>this.titaniumAddressInputDemoA.reset()}>reset()</md-filled-tonal-button>
              </section>
            </div>
            <api-docs src="./custom-elements.json" selected="titanium-address-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};e([h()],E.prototype,"setLocationResult",null),e([m("google-address-input[demo-a]")],E.prototype,"googleAddressInputDemoA",null),e([m("google-address-input[demo-a-filled]")],E.prototype,"googleAddressInputDemoAFilled",null),e([m("titanium-address-input[demo-a]")],E.prototype,"titaniumAddressInputDemoA",null),e([m("titanium-address-input[demo-a-filled]")],E.prototype,"titaniumAddressInputDemoAFilled",null),e([h()],E.prototype,"allowInternational",null),E=e([i("titanium-address-input-demo")],E);export{E as TitaniumAddressInputDemo};
