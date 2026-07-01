import{_ as e,n as a,t as i,S as t,c as n,i as o,b as r,A as s,v as l,e as b,r as d,a2 as m}from"./D_imZRq6.js";import{S as c}from"./Cp0ERCaT.js";import"./Cr5T8rNp.js";import"./BrugqwTk.js";import{T as h}from"./9hfUjaz1.js";import{D as u}from"./DTS7lhmZ.js";import"./Bzz7vt2X.js";import"./DP0o14fc.js";import"./B4dJ93Bs.js";const v=globalThis;void 0===v.process?v.process={env:{NODE_ENV:"production"}}:void 0===v.process.env&&(v.process.env={NODE_ENV:"production"});const p="There already is a script loading the Google Maps JavaScript API, and no google.maps.importLibrary function is defined. @googlemaps/js-api-loader will proceed to bootstrap the API with the specified options, but the existing script might cause problems using the API. Make sure to remove the script loading the API.",g="production"!==process.env.NODE_ENV,f=g?e=>{console.warn(`[@googlemaps/js-api-loader] ${e}`)}:()=>{},y=g?e=>{console.info(`[@googlemaps/js-api-loader] ${e}`)}:()=>{},S="@googlemaps/js-api-loader",A={createScriptURL:e=>e};let w;function I(){if(w)return w;const e=globalThis.trustedTypes;if(!e)return w=A,w;try{w=e.createPolicy(S,{createScriptURL:e=>e})}catch(e){f(`Failed to create Trusted Types policy "${a=S}": ${(i=e)instanceof Error?i.message:String(i)}.\n\nIf your Content Security Policy uses "require-trusted-types-for 'script'", allow this policy with "trusted-types ${a} google-maps-api-loader google-maps-api#html lit-html". The "google-maps-api-loader", "lit-html", and "google-maps-api#html" policies are required for full Maps JavaScript API execution. Falling back to a string script URL.`),w=A}var a,i;return w}const M=e=>{var a,i,t,n="The Google Maps JavaScript API",o="google",r="importLibrary",s="__ib__",l=document,b=window,d=b[o]||(b[o]={}),m=d.maps||(d.maps={}),c=new Set,h=new URLSearchParams,u=()=>a||(a=new Promise(async(r,b)=>{for(t in await(i=l.createElement("script")),h.set("libraries",[...c]+""),e)h.set(t.replace(/[A-Z]/g,e=>"_"+e[0].toLowerCase()),e[t]);h.set("callback",o+".maps."+s),function(e,a){e.src=I().createScriptURL(a)}(i,"https://maps.googleapis.com/maps/api/js?"+h),m[s]=r,i.onerror=()=>a=b(Error(n+" could not load.")),i.nonce=l.querySelector("script[nonce]")?.nonce||"",l.head.append(i)}));m[r]?console.warn(n+" only loads once. Ignoring:",e):m[r]=(e,...a)=>c.add(e)&&u().then(()=>m[r](e,...a))},C="production"!==process.env.NODE_ENV;let $=!1;function T(e){$?f((e=>`The setOptions() function should only be called once. The options passed to the additional call (${JSON.stringify(e)}) will be ignored.`)(e)):(e.apiKey&&(f("The 'apiKey' parameter was used in setOptions(), but 'key' is the correct parameter name. Please update your configuration."),e.key||(e.key=e.apiKey)),function(e){const a=Boolean(window.google?.maps?.importLibrary);if(a)y((e=>`The google.maps.importLibrary() function is already defined, and @googlemaps/js-api-loader will use the existing function instead of overwriting it. The options passed to setOptions (${JSON.stringify(e)}) will be ignored.`)(e));else if(C){document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')&&f(p)}a||M(e)}(e),$=!0)}const x=[{abbreviation:"AF",name:"Afghanistan"},{abbreviation:"AL",name:"Albania"},{abbreviation:"DZ",name:"Algeria"},{abbreviation:"AS",name:"American Samoa"},{abbreviation:"AD",name:"Andorra"},{abbreviation:"AO",name:"Angola"},{abbreviation:"AI",name:"Anguilla"},{abbreviation:"AQ",name:"Antarctica"},{abbreviation:"AG",name:"Antigua and Barbuda"},{abbreviation:"AR",name:"Argentina"},{abbreviation:"AM",name:"Armenia"},{abbreviation:"AW",name:"Aruba"},{abbreviation:"AU",name:"Australia"},{abbreviation:"AT",name:"Austria"},{abbreviation:"AZ",name:"Azerbaijan"},{abbreviation:"BS",name:"Bahamas"},{abbreviation:"BH",name:"Bahrain"},{abbreviation:"BD",name:"Bangladesh"},{abbreviation:"BB",name:"Barbados"},{abbreviation:"BY",name:"Belarus"},{abbreviation:"BE",name:"Belgium"},{abbreviation:"BZ",name:"Belize"},{abbreviation:"BJ",name:"Benin"},{abbreviation:"BM",name:"Bermuda"},{abbreviation:"BT",name:"Bhutan"},{abbreviation:"BO",name:"Bolivia"},{abbreviation:"BA",name:"Bosnia and Herzegovina"},{abbreviation:"BW",name:"Botswana"},{abbreviation:"BR",name:"Brazil"},{abbreviation:"IO",name:"British Indian Ocean Territory"},{abbreviation:"VG",name:"British Virgin Islands"},{abbreviation:"BN",name:"Brunei"},{abbreviation:"BG",name:"Bulgaria"},{abbreviation:"BF",name:"Burkina Faso"},{abbreviation:"BI",name:"Burundi"},{abbreviation:"KH",name:"Cambodia"},{abbreviation:"CM",name:"Cameroon"},{abbreviation:"CA",name:"Canada"},{abbreviation:"CV",name:"Cape Verde"},{abbreviation:"KY",name:"Cayman Islands"},{abbreviation:"CF",name:"Central African Republic"},{abbreviation:"TD",name:"Chad"},{abbreviation:"CL",name:"Chile"},{abbreviation:"CN",name:"China"},{abbreviation:"CX",name:"Christmas Island"},{abbreviation:"CC",name:"Cocos Islands"},{abbreviation:"CO",name:"Colombia"},{abbreviation:"KM",name:"Comoros"},{abbreviation:"CK",name:"Cook Islands"},{abbreviation:"CR",name:"Costa Rica"},{abbreviation:"HR",name:"Croatia"},{abbreviation:"CU",name:"Cuba"},{abbreviation:"CW",name:"Curacao"},{abbreviation:"CY",name:"Cyprus"},{abbreviation:"CZ",name:"Czech Republic"},{abbreviation:"CD",name:"Democratic Republic of the Congo"},{abbreviation:"DK",name:"Denmark"},{abbreviation:"DJ",name:"Djibouti"},{abbreviation:"DM",name:"Dominica"},{abbreviation:"DO",name:"Dominican Republic"},{abbreviation:"TL",name:"East Timor"},{abbreviation:"EC",name:"Ecuador"},{abbreviation:"EG",name:"Egypt"},{abbreviation:"SV",name:"El Salvador"},{abbreviation:"GQ",name:"Equatorial Guinea"},{abbreviation:"ER",name:"Eritrea"},{abbreviation:"EE",name:"Estonia"},{abbreviation:"ET",name:"Ethiopia"},{abbreviation:"FK",name:"Falkland Islands"},{abbreviation:"FO",name:"Faroe Islands"},{abbreviation:"FJ",name:"Fiji"},{abbreviation:"FI",name:"Finland"},{abbreviation:"FR",name:"France"},{abbreviation:"PF",name:"French Polynesia"},{abbreviation:"GA",name:"Gabon"},{abbreviation:"GM",name:"Gambia"},{abbreviation:"GE",name:"Georgia"},{abbreviation:"DE",name:"Germany"},{abbreviation:"GH",name:"Ghana"},{abbreviation:"GI",name:"Gibraltar"},{abbreviation:"GR",name:"Greece"},{abbreviation:"GL",name:"Greenland"},{abbreviation:"GD",name:"Grenada"},{abbreviation:"GU",name:"Guam"},{abbreviation:"GT",name:"Guatemala"},{abbreviation:"GG",name:"Guernsey"},{abbreviation:"GN",name:"Guinea"},{abbreviation:"GW",name:"Guinea-Bissau"},{abbreviation:"GY",name:"Guyana"},{abbreviation:"HT",name:"Haiti"},{abbreviation:"HN",name:"Honduras"},{abbreviation:"HK",name:"Hong Kong"},{abbreviation:"HU",name:"Hungary"},{abbreviation:"IS",name:"Iceland"},{abbreviation:"IN",name:"India"},{abbreviation:"ID",name:"Indonesia"},{abbreviation:"IR",name:"Iran"},{abbreviation:"IQ",name:"Iraq"},{abbreviation:"IE",name:"Ireland"},{abbreviation:"IM",name:"Isle of Man"},{abbreviation:"IL",name:"Israel"},{abbreviation:"IT",name:"Italy"},{abbreviation:"CI",name:"Ivory Coast"},{abbreviation:"JM",name:"Jamaica"},{abbreviation:"JP",name:"Japan"},{abbreviation:"JE",name:"Jersey"},{abbreviation:"JO",name:"Jordan"},{abbreviation:"KZ",name:"Kazakhstan"},{abbreviation:"KE",name:"Kenya"},{abbreviation:"KI",name:"Kiribati"},{abbreviation:"XK",name:"Kosovo"},{abbreviation:"KW",name:"Kuwait"},{abbreviation:"KG",name:"Kyrgyzstan"},{abbreviation:"LA",name:"Laos"},{abbreviation:"LV",name:"Latvia"},{abbreviation:"LB",name:"Lebanon"},{abbreviation:"LS",name:"Lesotho"},{abbreviation:"LR",name:"Liberia"},{abbreviation:"LY",name:"Libya"},{abbreviation:"LI",name:"Liechtenstein"},{abbreviation:"LT",name:"Lithuania"},{abbreviation:"LU",name:"Luxembourg"},{abbreviation:"MO",name:"Macao"},{abbreviation:"MG",name:"Madagascar"},{abbreviation:"MW",name:"Malawi"},{abbreviation:"MY",name:"Malaysia"},{abbreviation:"MV",name:"Maldives"},{abbreviation:"ML",name:"Mali"},{abbreviation:"MT",name:"Malta"},{abbreviation:"MH",name:"Marshall Islands"},{abbreviation:"MR",name:"Mauritania"},{abbreviation:"MU",name:"Mauritius"},{abbreviation:"YT",name:"Mayotte"},{abbreviation:"MX",name:"Mexico"},{abbreviation:"FM",name:"Micronesia"},{abbreviation:"MD",name:"Moldova"},{abbreviation:"MC",name:"Monaco"},{abbreviation:"MN",name:"Mongolia"},{abbreviation:"ME",name:"Montenegro"},{abbreviation:"MS",name:"Montserrat"},{abbreviation:"MA",name:"Morocco"},{abbreviation:"MZ",name:"Mozambique"},{abbreviation:"MM",name:"Myanmar"},{abbreviation:"NA",name:"Namibia"},{abbreviation:"NR",name:"Nauru"},{abbreviation:"NP",name:"Nepal"},{abbreviation:"NL",name:"Netherlands"},{abbreviation:"AN",name:"Netherlands Antilles"},{abbreviation:"NC",name:"New Caledonia"},{abbreviation:"NZ",name:"New Zealand"},{abbreviation:"NI",name:"Nicaragua"},{abbreviation:"NE",name:"Niger"},{abbreviation:"NG",name:"Nigeria"},{abbreviation:"NU",name:"Niue"},{abbreviation:"KP",name:"North Korea"},{abbreviation:"MK",name:"North Macedonia"},{abbreviation:"MP",name:"Northern Mariana Islands"},{abbreviation:"NO",name:"Norway"},{abbreviation:"OM",name:"Oman"},{abbreviation:"PK",name:"Pakistan"},{abbreviation:"PW",name:"Palau"},{abbreviation:"PS",name:"Palestine"},{abbreviation:"PA",name:"Panama"},{abbreviation:"PG",name:"Papua New Guinea"},{abbreviation:"PY",name:"Paraguay"},{abbreviation:"PE",name:"Peru"},{abbreviation:"PH",name:"Philippines"},{abbreviation:"PN",name:"Pitcairn"},{abbreviation:"PL",name:"Poland"},{abbreviation:"PT",name:"Portugal"},{abbreviation:"PR",name:"Puerto Rico"},{abbreviation:"QA",name:"Qatar"},{abbreviation:"CG",name:"Republic of the Congo"},{abbreviation:"RE",name:"Reunion"},{abbreviation:"RO",name:"Romania"},{abbreviation:"RU",name:"Russia"},{abbreviation:"RW",name:"Rwanda"},{abbreviation:"BL",name:"Saint Barthelemy"},{abbreviation:"SH",name:"Saint Helena"},{abbreviation:"KN",name:"Saint Kitts and Nevis"},{abbreviation:"LC",name:"Saint Lucia"},{abbreviation:"MF",name:"Saint Martin"},{abbreviation:"PM",name:"Saint Pierre and Miquelon"},{abbreviation:"VC",name:"Saint Vincent and the Grenadines"},{abbreviation:"WS",name:"Samoa"},{abbreviation:"SM",name:"San Marino"},{abbreviation:"ST",name:"Sao Tome and Principe"},{abbreviation:"SA",name:"Saudi Arabia"},{abbreviation:"SN",name:"Senegal"},{abbreviation:"RS",name:"Serbia"},{abbreviation:"SC",name:"Seychelles"},{abbreviation:"SL",name:"Sierra Leone"},{abbreviation:"SG",name:"Singapore"},{abbreviation:"SX",name:"Sint Maarten"},{abbreviation:"SK",name:"Slovakia"},{abbreviation:"SI",name:"Slovenia"},{abbreviation:"SB",name:"Solomon Islands"},{abbreviation:"SO",name:"Somalia"},{abbreviation:"ZA",name:"South Africa"},{abbreviation:"KR",name:"South Korea"},{abbreviation:"SS",name:"South Sudan"},{abbreviation:"ES",name:"Spain"},{abbreviation:"LK",name:"Sri Lanka"},{abbreviation:"SD",name:"Sudan"},{abbreviation:"SR",name:"Suriname"},{abbreviation:"SJ",name:"Svalbard and Jan Mayen"},{abbreviation:"SZ",name:"Swaziland"},{abbreviation:"SE",name:"Sweden"},{abbreviation:"CH",name:"Switzerland"},{abbreviation:"SY",name:"Syria"},{abbreviation:"TW",name:"Taiwan"},{abbreviation:"TJ",name:"Tajikistan"},{abbreviation:"TZ",name:"Tanzania"},{abbreviation:"TH",name:"Thailand"},{abbreviation:"TG",name:"Togo"},{abbreviation:"TK",name:"Tokelau"},{abbreviation:"TO",name:"Tonga"},{abbreviation:"TT",name:"Trinidad and Tobago"},{abbreviation:"TN",name:"Tunisia"},{abbreviation:"TR",name:"Türkiye"},{abbreviation:"TM",name:"Turkmenistan"},{abbreviation:"TC",name:"Turks and Caicos Islands"},{abbreviation:"TV",name:"Tuvalu"},{abbreviation:"VI",name:"U.S. Virgin Islands"},{abbreviation:"UG",name:"Uganda"},{abbreviation:"UA",name:"Ukraine"},{abbreviation:"AE",name:"United Arab Emirates"},{abbreviation:"GB",name:"United Kingdom"},{abbreviation:"US",name:"United States"},{abbreviation:"UY",name:"Uruguay"},{abbreviation:"UZ",name:"Uzbekistan"},{abbreviation:"VU",name:"Vanuatu"},{abbreviation:"VA",name:"Vatican"},{abbreviation:"VE",name:"Venezuela"},{abbreviation:"VN",name:"Vietnam"},{abbreviation:"WF",name:"Wallis and Futuna"},{abbreviation:"EH",name:"Western Sahara"},{abbreviation:"YE",name:"Yemen"},{abbreviation:"ZM",name:"Zambia"},{abbreviation:"ZW",name:"Zimbabwe"}];function _(e){if(!e)return"";const a=[],i=e.street?.trim(),t=e.street2?.trim();(i||t)&&a.push(`${i||""} ${t||""}`?.trim());const n=e.city?.trim(),o=e.state?.trim(),r=e.zip?.trim();a.push(`${n&&o?`${n}, ${o}`:`${n||""} ${o||""}`?.trim()} ${r}`?.trim());const s=e.county?.trim();"US"!==e?.country&&"CA"!==e?.country&&s&&a.push(s);const l=e.country?.trim();return l&&a.push("US"===l?"USA":function(e,a=!1){if(!e)return"";if(a&&"us"===e.toLowerCase())return"";const i=x.find(a=>a.abbreviation.toLowerCase()===e.toLowerCase());return i?i.name:e}(l)),a.join(", ")}let N=class extends h{#e="";get googleMapsApiKey(){return this.#e}set googleMapsApiKey(e){this.#e=e}#a="Address";get label(){return this.#a}set label(e){this.#a=e}#i="Search for an address";get placeholder(){return this.#i}set placeholder(e){this.#i=e}#t="primaryDisplayText";get pathToSelectedText(){return this.#t}set pathToSelectedText(e){this.#t=e}#n=!1;get allowInternational(){return this.#n}set allowInternational(e){this.#n=e}#o="off";get autocomplete(){return this.#o}set autocomplete(e){this.#o=e}#r=!1;get spellcheck(){return this.#r}set spellcheck(e){this.#r=e}#s=new u(e=>this.#l(e));#b=new AbortController;#d;#m=new Map;async firstUpdated(){T({key:this.googleMapsApiKey,v:"weekly"}),await async function(e){if($||f("No options were set before calling importLibrary. Make sure to configure the loader using setOptions()."),!window?.google?.maps?.importLibrary)throw new Error("google.maps.importLibrary is not installed.");return await google.maps.importLibrary(e)}("places"),this.#c()}#c(){this.#m.clear(),this.#d=new google.maps.places.AutocompleteSessionToken}updated(e){if(e.has("selected")&&this.selected){_(this.selected)!==this.selected.primaryDisplayText&&(this.selected.primaryDisplayText=_(this.selected),this.requestUpdate("selected"))}}async#h(e){const a={input:e,sessionToken:this.#d,includedPrimaryTypes:["street_address"]};this.allowInternational||(a.includedRegionCodes=["us"]);try{const{suggestions:e}=await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(a);this.#m.clear();const i=[];for(const a of e){const e=a.placePrediction;e&&(this.#m.set(e.placeId,e),i.push({Id:e.placeId,primaryDisplayText:e.mainText?.text??e.text.text,secondaryText:e.secondaryText?.text}))}return i}catch(e){throw new Error(this.#u(e),{cause:e})}}#u(e){const a=String(e?.message??e);return a.includes("SERVICE_DISABLED")?'Google Places API (New) is not enabled for this API key. In Google Cloud Console, enable "Places API (New)" and "Maps JavaScript API" for the project that owns the key.':a}async#v(e){const a=this.#m.get(e),i=a?.toPlace()??new google.maps.places.Place({id:e}),{place:t}=await i.fetchFields({fields:["addressComponents","formattedAddress","location"]});return this.#c(),t}async#l(e){if(e){this.#b.abort(),this.#b=new AbortController;try{const a=this.#h(e);this.trackLoadingPromise(a);const i=await a??[];return void this.showSuggestions(i,i.length)}catch(e){const a=e;"AbortError"===a?.name||a?.message?.includes("Abort error")||this.dispatchEvent(new t(e))}this.showSuggestions([],0)}}customCheckValidity(){if(!this.selected&&this.getTextField()?.value)return this.errorText="Please enter a valid address in this field",!1;if(!this.required&&!this.selected)return!0;if(!this.selected)return this.errorText="Please enter a valid address in this field",!1;if(!this.allowInternational||"US"===this.selected?.country){if(!function(e){const a=new RegExp(/^(?=.{1,64}$)[a-zA-Z \-.\d #'.,]{1,64}[\s][a-zA-Z \-.\d #'.,]{1,64}$/),i=new RegExp("[A-Z]"),t=new RegExp("[a-z]"),n=new RegExp("[0-9]");return!!a.test(e)&&(i.test(e)||t.test(e))&&n.test(e)}(this.selected?.street??""))return this.errorText="Please correct the invalid street",!1;if(!this.selected?.city)return this.errorText="Please correct the missing city",!1;if(!this.selected?.state)return this.errorText="Please correct the missing state",!1;if(!this.selected?.zip)return this.errorText="Please correct the missing zip code",!1}return!0}customReportValidity(){return this.customCheckValidity()?(this.errorText="",this.error=!1):this.error=!0,!this.error}onInputChanged(e){this.#s.debounce(e)}async setSelected(e){if(e)try{const a=function(e){const a=e.addressComponents,i=e.formattedAddress;if(!a?.length||!i)return null;const t=a.find(e=>e.types.some(e=>"neighborhood"===e)),n=a.find(e=>e.types.some(e=>"administrative_area_level_1"===e)),o=a.find(e=>e.types.some(e=>"street_number"===e))||a.find(e=>e.types.some(e=>"premise"===e)),r=a.find(e=>e.types.some(e=>"route"===e)),s=a.find(e=>e.types.some(e=>"locality"===e)),l=a.find(e=>e.types.some(e=>"sublocality"===e)),b=a.find(e=>e.types.some(e=>"administrative_area_level_3"===e)),d=a.find(e=>e.types.some(e=>"administrative_area_level_4"===e)),m=t?.shortText&&i.includes(t.shortText+",")?t:s||l||b||d,c=a.find(e=>e.types.some(e=>"postal_code"===e)),h=a.find(e=>e.types.some(e=>"administrative_area_level_2"===e)),u=a.find(e=>e.types.some(e=>"country"===e)),v=a.find(e=>e.types.some(e=>"subpremise"===e));return{street:o?.shortText?`${o?.shortText} ${r?.shortText||""}`?.trim():r?.shortText||"",fullStreet:`${o?.longText} ${r?.longText}`,city:m?.shortText??void 0,street2:v?.shortText??void 0,county:h?.shortText??void 0,country:u?.shortText??void 0,state:n?.shortText??void 0,fullState:n?.longText??void 0,zip:c?.shortText??void 0,latitude:e.location?.lat(),longitude:e.location?.lng()}}(await this.#v(e.Id));a&&(e={...e,...a})}catch(e){this.dispatchEvent(new t(e))}super.setSelected(e)}setSelectedBase(e){super.setSelected(e)}renderLeadingInputSlot(){return n`<slot name="leading-icon" slot="leading-icon"><md-icon>place</md-icon></slot>`}renderTrailingMenuSlot(){return n` <div
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
    </md-menu-item>`}};function k(e){const a=e?.shadowRoot?.querySelector(".container"),i=a?.querySelector(".scroller");i&&(i.style.overflow="initial"),a&&(a.style.overflow="initial")}function P(e){const a=e?.shadowRoot?.querySelector(".container"),i=a?.querySelector(".scroller");i&&(i.style.overflow=""),a&&(a.style.overflow="")}e([a({type:String})],N.prototype,"googleMapsApiKey",null),e([a({type:String})],N.prototype,"label",null),e([a({type:String})],N.prototype,"placeholder",null),e([a({type:String})],N.prototype,"pathToSelectedText",null),e([a({type:Boolean,attribute:"allow-international"})],N.prototype,"allowInternational",null),e([a({reflect:!0,type:String})],N.prototype,"autocomplete",null),e([a({reflect:!0,type:Boolean})],N.prototype,"spellcheck",null),N=e([i("google-address-input")],N);const B=e=>{e?.hasError&&e?.reportValidity()},L=[{abbreviation:"AL",name:"Alabama"},{abbreviation:"AK",name:"Alaska"},{abbreviation:"AS",name:"American Samoa"},{abbreviation:"AZ",name:"Arizona"},{abbreviation:"AR",name:"Arkansas"},{abbreviation:"CA",name:"California"},{abbreviation:"CO",name:"Colorado"},{abbreviation:"CT",name:"Connecticut"},{abbreviation:"DE",name:"Delaware"},{abbreviation:"DC",name:"District of Columbia"},{abbreviation:"FM",name:"Federated States of Micronesia"},{abbreviation:"FL",name:"Florida"},{abbreviation:"GA",name:"Georgia"},{abbreviation:"GU",name:"Guam"},{abbreviation:"HI",name:"Hawaii"},{abbreviation:"ID",name:"Idaho"},{abbreviation:"IL",name:"Illinois"},{abbreviation:"IN",name:"Indiana"},{abbreviation:"IA",name:"Iowa"},{abbreviation:"KS",name:"Kansas"},{abbreviation:"KY",name:"Kentucky"},{abbreviation:"LA",name:"Louisiana"},{abbreviation:"ME",name:"Maine"},{abbreviation:"MH",name:"Marshall Islands"},{abbreviation:"MD",name:"Maryland"},{abbreviation:"MA",name:"Massachusetts"},{abbreviation:"MI",name:"Michigan"},{abbreviation:"MN",name:"Minnesota"},{abbreviation:"MS",name:"Mississippi"},{abbreviation:"MO",name:"Missouri"},{abbreviation:"MT",name:"Montana"},{abbreviation:"NE",name:"Nebraska"},{abbreviation:"NV",name:"Nevada"},{abbreviation:"NH",name:"New Hampshire"},{abbreviation:"NJ",name:"New Jersey"},{abbreviation:"NM",name:"New Mexico"},{abbreviation:"NY",name:"New York"},{abbreviation:"NC",name:"North Carolina"},{abbreviation:"ND",name:"North Dakota"},{abbreviation:"MP",name:"Northern Mariana Islands"},{abbreviation:"OH",name:"Ohio"},{abbreviation:"OK",name:"Oklahoma"},{abbreviation:"OR",name:"Oregon"},{abbreviation:"PW",name:"Palau"},{abbreviation:"PA",name:"Pennsylvania"},{abbreviation:"PR",name:"Puerto Rico"},{abbreviation:"RI",name:"Rhode Island"},{abbreviation:"SC",name:"South Carolina"},{abbreviation:"SD",name:"South Dakota"},{abbreviation:"TN",name:"Tennessee"},{abbreviation:"TX",name:"Texas"},{abbreviation:"UT",name:"Utah"},{abbreviation:"VT",name:"Vermont"},{abbreviation:"VI",name:"Virgin Islands"},{abbreviation:"VA",name:"Virginia"},{abbreviation:"WA",name:"Washington"},{abbreviation:"WV",name:"West Virginia"},{abbreviation:"WI",name:"Wisconsin"},{abbreviation:"WY",name:"Wyoming"}],D=[{name:"Alberta",abbreviation:"AB"},{name:"British Columbia",abbreviation:"BC"},{name:"Manitoba",abbreviation:"MB"},{name:"New Brunswick",abbreviation:"NB"},{name:"Newfoundland and Labrador",abbreviation:"NL"},{name:"Northwest Territories",abbreviation:"NT"},{name:"Nova Scotia",abbreviation:"NS"},{name:"Nunavut",abbreviation:"NU"},{name:"Ontario",abbreviation:"ON"},{name:"Prince Edward Island",abbreviation:"PE"},{name:"Quebec",abbreviation:"QC"},{name:"Saskatchewan",abbreviation:"SK"},{name:"Yukon Territory",abbreviation:"YT"}];let E=class extends o{#p;get dialog(){return this.#p}set dialog(e){this.#p=e}#a="";get label(){return this.#a}set label(e){this.#a=e}#g=!1;get showCounty(){return this.#g}set showCounty(e){this.#g=e}#f=!1;get showStreet2(){return this.#f}set showStreet2(e){this.#f=e}#n=!1;get allowInternational(){return this.#n}set allowInternational(e){this.#n=e}#y="";get street(){return this.#y}set street(e){this.#y=e}#S="";get street2(){return this.#S}set street2(e){this.#S=e}#A="";get city(){return this.#A}set city(e){this.#A=e}#w="";get county(){return this.#w}set county(e){this.#w=e}#I="";get country(){return this.#I}set country(e){this.#I=e}#M="";get state(){return this.#M}set state(e){this.#M=e}#C="";get zip(){return this.#C}set zip(e){this.#C=e}#$;get allInputs(){return this.#$}set allInputs(e){this.#$=e}async open(e){return this.reset(),await this.updateComplete,this.street=e?.street??"",this.street2=e?.street2??"",this.city=e?.city??"",this.state=e?.state??"",this.zip=e?.zip??"",this.county=e?.county??"",this.country=e?.country??"",this.dialog.show(),new Promise(e=>{this.resolve=e})}validate(){let e=!0;return this.allInputs.forEach(a=>{a.reportValidity()||(e=!1)}),e}async reset(){this.street="",this.street2="",this.city="",this.state="",this.zip="",this.county="",this.country="",this.allInputs.forEach(e=>e.reset())}static{this.styles=[r`
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
    `]}render(){return n`
      <md-dialog
        @open=${e=>{l(e.target)}}
        @closing=${e=>{"apply"!==e.target.returnValue&&this.resolve(null)}}
      >
        <div slot="headline">${this.label}</div>
        <form slot="content">
          <md-filled-text-field
            label="Street"
            autocomplete="address-line1"
            ?required=${!this.allowInternational||"US"===this.country}
            .value=${this.street||""}
            @blur=${e=>B(e.target)}
            @change=${e=>this.street=e.target.value}
          >
            <md-icon slot="leading-icon">markunread_mailbox</md-icon>
          </md-filled-text-field>
          ${this.showStreet2||"US"!==this.country&&this.country?n`<md-filled-text-field
                @blur=${e=>B(e.target)}
                label="Street 2/Apartment"
                autocomplete="address-line2"
                .value=${this.street2||""}
                @change=${e=>this.street2=e.target.value}
              >
                <md-icon slot="leading-icon">meeting_room</md-icon>
              </md-filled-text-field>`:s}
          <md-filled-text-field
            label="City"
            autocomplete="address-level2"
            ?required=${!this.allowInternational||"US"===this.country}
            .value=${this.city||""}
            @blur=${e=>B(e.target)}
            @change=${e=>this.city=e.target.value}
            ><md-icon slot="leading-icon">location_city</md-icon></md-filled-text-field
          >
          ${this.showCounty||"US"!==this.country&&this.country?n`<md-filled-text-field
                @blur=${e=>B(e.target)}
                label="County"
                ?required=${!this.allowInternational||"US"===this.country}
                .value=${this.county||""}
                @change=${e=>this.county=e.target.value}
                ><md-icon slot="leading-icon">explore</md-icon></md-filled-text-field
              >`:s}
          ${this.allowInternational?n`<md-filled-select
                @opening=${()=>k(this.dialog)}
                @closing=${()=>P(this.dialog)}
                @blur=${e=>B(e.target)}
                label="Country"
                autocomplete="country"
                required
                .value=${this.country||""}
                @change=${e=>{if(e.stopPropagation(),this.country=e.target.value,"US"===this.country){const e=L?.find(e=>e.abbreviation.toLowerCase()===this.state.toLowerCase()||e.name?.toLowerCase()===this.state.toLowerCase());this.state=e?e?.abbreviation:""}else if("CA"===this.country){const e=D?.find(e=>e.abbreviation.toLowerCase()===this.state.toLowerCase()||e.name?.toLowerCase()===this.state.toLowerCase());this.state=e?e?.abbreviation:""}else this.state=""}}
              >
                <md-icon slot="leading-icon">map</md-icon>
                ${x.map(e=>n`<md-select-option value=${e.abbreviation}> <div slot="headline">${e.name}</div></md-select-option>`)}
              </md-filled-select>`:s}
          ${this.allowInternational&&"US"!==this.country&&"CA"!==this.country?n`
                <md-filled-text-field
                  label="State/Province"
                  autocomplete="address-level1"
                  .value=${this.state||""}
                  @blur=${e=>B(e.target)}
                  @change=${e=>this.state=e.target.value}
                >
                  <md-icon slot="leading-icon">location_on</md-icon>
                </md-filled-text-field>
              `:n`
                <md-filled-select
                  @opening=${()=>k(this.dialog)}
                  @closing=${()=>P(this.dialog)}
                  @blur=${e=>B(e.target)}
                  label="State"
                  autocomplete="address-level1"
                  required
                  .value=${this.state||""}
                  @change=${e=>{e.stopPropagation(),this.state=e.target.value,L.some(e=>e.abbreviation.toLowerCase()===this.state.toLowerCase())&&(this.country="US")}}
                >
                  <md-icon slot="leading-icon">location_on</md-icon>

                  ${L.map(e=>n`<md-select-option ?hidden=${"CA"===this.country} ?selected=${e.abbreviation===this.state} value=${e.abbreviation}>
                        <div slot="headline">${e.name}</div>
                        <div slot="supporting-text">United States</div>
                      </md-select-option>`)}
                  ${D.map(e=>n`<md-select-option
                        ?hidden=${!this.allowInternational||"US"===this.country}
                        ?selected=${e.abbreviation===this.state}
                        value=${e.abbreviation}
                      >
                        <div slot="headline">${e.name}</div>
                        <div slot="supporting-text">Canada</div>
                      </md-select-option>`)}
                </md-filled-select>
              `}

          <md-filled-text-field
            label="Zip"
            autocomplete="postal-code"
            ?required=${!this.allowInternational||"US"===this.country}
            .value=${this.zip||""}
            @blur=${e=>B(e.target)}
            @change=${e=>this.zip=e.target.value}
            ><md-icon slot="leading-icon">universal_local</md-icon></md-filled-text-field
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
    `}};e([b("md-dialog")],E.prototype,"dialog",null),e([a({type:String})],E.prototype,"label",null),e([a({type:Boolean,attribute:"show-county"})],E.prototype,"showCounty",null),e([a({type:Boolean,attribute:"show-street2"})],E.prototype,"showStreet2",null),e([a({type:Boolean,attribute:"allow-international"})],E.prototype,"allowInternational",null),e([d()],E.prototype,"street",null),e([d()],E.prototype,"street2",null),e([d()],E.prototype,"city",null),e([d()],E.prototype,"county",null),e([d()],E.prototype,"country",null),e([d()],E.prototype,"state",null),e([d()],E.prototype,"zip",null),e([m("md-filled-text-field, md-filled-select")],E.prototype,"allInputs",null),E=e([i("manual-address-dialog")],E);let G=class extends N{#f=!1;get showStreet2(){return this.#f}set showStreet2(e){this.#f=e}#g=!1;get showCounty(){return this.#g}set showCounty(e){this.#g=e}#T;get manualAddressDialog(){return this.#T}set manualAddressDialog(e){this.#T=e}#x=!1;get hasSelection(){return this.#x}set hasSelection(e){this.#x=e}static{this.styles=[...N.styles,r`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        --_supporting-text-trailing-space: 165px;
      }

      :host([has-selection]) {
        --md-filled-text-field-with-trailing-icon-trailing-space: 36px;
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
    `}};e([a({type:Boolean,attribute:"show-street2"})],G.prototype,"showStreet2",null),e([a({type:Boolean,attribute:"show-county"})],G.prototype,"showCounty",null),e([b("manual-address-dialog")],G.prototype,"manualAddressDialog",null),e([a({type:Boolean,attribute:"has-selection",reflect:!0})],G.prototype,"hasSelection",null),G=e([i("titanium-address-input")],G);let U=class extends o{#_=null;get setLocationResult(){return this.#_}set setLocationResult(e){this.#_=e}#N;get googleAddressInputDemoA(){return this.#N}set googleAddressInputDemoA(e){this.#N=e}#k;get googleAddressInputDemoAFilled(){return this.#k}set googleAddressInputDemoAFilled(e){this.#k=e}#P;get titaniumAddressInputDemoA(){return this.#P}set titaniumAddressInputDemoA(e){this.#P=e}#B;get titaniumAddressInputDemoAFilled(){return this.#B}set titaniumAddressInputDemoAFilled(e){this.#B=e}#n=!1;get allowInternational(){return this.#n}set allowInternational(e){this.#n=e}static{this.styles=[c,r`
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
    `}};e([d()],U.prototype,"setLocationResult",null),e([b("google-address-input[demo-a]")],U.prototype,"googleAddressInputDemoA",null),e([b("google-address-input[demo-a-filled]")],U.prototype,"googleAddressInputDemoAFilled",null),e([b("titanium-address-input[demo-a]")],U.prototype,"titaniumAddressInputDemoA",null),e([b("titanium-address-input[demo-a-filled]")],U.prototype,"titaniumAddressInputDemoAFilled",null),e([d()],U.prototype,"allowInternational",null),U=e([i("titanium-address-input-demo")],U);export{U as TitaniumAddressInputDemo};
