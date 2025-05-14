import{_ as t,n as e,t as i,S as s,x as o,i as n,c as a,E as r,Y as l,e as d,r as c,f as h,h as u,a as m,p}from"./CW20JWwx.js";import{S as g}from"./DOG8MWDK.js";import"./XakGrGxB.js";import"./CkNhTk-E.js";import{T as b}from"./DZ5pPt-9.js";import{D as v}from"./Bbv0u4bt.js";import"./CW6BcIIX.js";import"./B7j9AJeN.js";function y(t,e,i,s){return new(i||(i=Promise))((function(e,o){function n(t){try{r(s.next(t))}catch(t){o(t)}}function a(t){try{r(s.throw(t))}catch(t){o(t)}}function r(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(t){t(s)}))).then(n,a)}r((s=s.apply(t,[])).next())}))}function f(t){return t&&t.t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}"function"==typeof SuppressedError&&SuppressedError;var $=function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,o,n;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(o=s;0!==o--;)if(!t(e[o],i[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((s=(n=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(o=s;0!==o--;)if(!Object.prototype.hasOwnProperty.call(i,n[o]))return!1;for(o=s;0!==o--;){var a=n[o];if(!t(e[a],i[a]))return!1}return!0}return e!=e&&i!=i},w=f($);const S="__googleMapsScriptId";var x;!function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"}(x||(x={}));class _{constructor({apiKey:t,authReferrerPolicy:e,channel:i,client:s,id:o=S,language:n,libraries:a=[],mapIds:r,nonce:l,region:d,retries:c=3,url:h="https://maps.googleapis.com/maps/api/js",version:u}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=t,this.authReferrerPolicy=e,this.channel=i,this.client=s,this.id=o||S,this.language=n,this.libraries=a,this.mapIds=r,this.nonce=l,this.region=d,this.retries=c,this.url=h,this.version=u,_.instance){if(!w(this.options,_.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(_.instance.options)}`);return _.instance}_.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?x.FAILURE:this.done?x.SUCCESS:this.loading?x.LOADING:x.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let t=this.url;return t+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(t+=`&key=${this.apiKey}`),this.channel&&(t+=`&channel=${this.channel}`),this.client&&(t+=`&client=${this.client}`),this.libraries.length>0&&(t+=`&libraries=${this.libraries.join(",")}`),this.language&&(t+=`&language=${this.language}`),this.region&&(t+=`&region=${this.region}`),this.version&&(t+=`&v=${this.version}`),this.mapIds&&(t+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(t+=`&auth_referrer_policy=${this.authReferrerPolicy}`),t}deleteScript(){const t=document.getElementById(this.id);t&&t.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((t,e)=>{this.loadCallback((i=>{i?e(i.error):t(window.google)}))}))}importLibrary(t){return this.execute(),google.maps.importLibrary(t)}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){var t,e;if(document.getElementById(this.id))return void this.callback();const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach((t=>!i[t]&&delete i[t])),(null===(e=null===(t=null===window||void 0===window?void 0:window.google)||void 0===t?void 0:t.maps)||void 0===e?void 0:e.importLibrary)||(t=>{let e,i,s,o="The Google Maps JavaScript API",n="google",a="importLibrary",r="__ib__",l=document,d=window;d=d[n]||(d[n]={});const c=d.maps||(d.maps={}),h=new Set,u=new URLSearchParams,m=()=>e||(e=new Promise(((a,d)=>y(this,0,void 0,(function*(){var m;for(s in yield i=l.createElement("script"),i.id=this.id,u.set("libraries",[...h]+""),t)u.set(s.replace(/[A-Z]/g,(t=>"_"+t[0].toLowerCase())),t[s]);u.set("callback",n+".maps."+r),i.src=this.url+"?"+u,c[r]=a,i.onerror=()=>e=d(Error(o+" could not load.")),i.nonce=this.nonce||(null===(m=l.querySelector("script[nonce]"))||void 0===m?void 0:m.nonce)||"",l.head.append(i)})))));c[a]?console.warn(o+" only loads once. Ignoring:",t):c[a]=(t,...e)=>h.add(t)&&m().then((()=>c[a](t,...e)))})(i);const s=this.libraries.map((t=>this.importLibrary(t)));s.length||s.push(this.importLibrary("core")),Promise.all(s).then((()=>this.callback()),(t=>{const e=new ErrorEvent("error",{error:t});this.loadErrorCallback(e)}))}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){if(this.errors.push(t),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),t)}else this.onerrorEvent=t,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((t=>{t(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading=!0,this.setScript()}}}function A(t){return t?t.street?t.country?`${t.street}${t.street2?` ${t.street2}`:""}, ${t.city}, ${t.state}, ${"US"===t.country?"USA":"CA"===t.country?"Canada":t.country}`:`${t.street}${t.street2?` ${t.street2}`:""}, ${t.city}, ${t.state}`:`${t.city}, ${t.state}`:""}let C=class extends b{#t;get googleMapsApiKey(){return this.#t}set googleMapsApiKey(t){this.#t=t}#e="Address";get label(){return this.#e}set label(t){this.#e=t}#i="Search for an address";get placeholder(){return this.#i}set placeholder(t){this.#i=t}#s="primaryDisplayText";get pathToSelectedText(){return this.#s}set pathToSelectedText(t){this.#s=t}#o=["us"];get countries(){return this.#o}set countries(t){this.#o=t}#n="off";get autocomplete(){return this.#n}set autocomplete(t){this.#n=t}#a=!1;get spellcheck(){return this.#a}set spellcheck(t){this.#a=t}#r="off";get autocorrect(){return this.#r}set autocorrect(t){this.#r=t}#l=new v((t=>this.#d(t)));#c=new AbortController;#h;#u;async firstUpdated(){const t=new _({apiKey:this.googleMapsApiKey,version:"weekly",libraries:["places"]});await t.importLibrary("places"),this.#h=new google.maps.places.PlacesService(document.createElement("div")),this.#u=new google.maps.places.AutocompleteService}updated(t){if(t.has("selected")&&this.selected){A(this.selected)!==this.selected.primaryDisplayText&&(this.selected.primaryDisplayText=A(this.selected),this.requestUpdate("selected"))}}async#m(t){return new Promise((e=>{this.#u.getPlacePredictions({input:t,types:["address"],componentRestrictions:{country:this.countries}},((t,i)=>i==google.maps.places.PlacesServiceStatus.OK&&t?e(t.map((t=>({Id:t.place_id,primaryDisplayText:t?.structured_formatting?.main_text||t.description,secondaryText:t.structured_formatting?.secondary_text})))):(console.warn(i),e([]))))}))}async#p(t){return new Promise(((e,i)=>{const s={placeId:t,fields:["address_components","formatted_address","geometry"]};this.#h.getDetails(s,((t,s)=>s==google.maps.places.PlacesServiceStatus.OK&&t?e(t):i(s)))}))}async#d(t){if(t){this.#c.abort(),this.#c=new AbortController;try{const e=this.#m(t);this.loadWhile(e);const i=await e??[];return void this.showSuggestions(i,i.length)}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new s(t))}this.showSuggestions([],0)}}customCheckValidity(){return!this.selected&&this.textfield?.value?(this.errorText="Please enter a valid address in this field",!1):!this.required&&!this.selected||(this.selected?function(t){const e=new RegExp(/^(?=.{1,64}$)[a-zA-Z \-.\d #'.,]{1,64}[\s][a-zA-Z \-.\d #'.,]{1,64}$/),i=new RegExp("[A-Z]"),s=new RegExp("[a-z]"),o=new RegExp("[0-9]");return!!e.test(t)&&(i.test(t)||s.test(t))&&o.test(t)}(this.selected?.street??"")?this.selected?.city?this.selected?.state?!!this.selected?.zip||(this.errorText="Please correct the missing zip code",!1):(this.errorText="Please correct the missing state",!1):(this.errorText="Please correct the missing city",!1):(this.errorText="Please correct the invalid street",!1):(this.errorText="Please enter a valid address in this field",!1))}customReportValidity(){return this.customCheckValidity()?(this.errorText="",this.error=!1):this.error=!0,!this.error}onInputChanged(t){this.#l.debounce(t)}async setSelected(t){if(t)try{const e=function(t){if(!t||!t.address_components||!t.formatted_address)return null;const e=t.address_components.find((t=>t.types.some((t=>"neighborhood"===t)))),i=t.address_components.find((t=>t.types.some((t=>"administrative_area_level_1"===t)))),s=t.address_components.find((t=>t.types.some((t=>"street_number"===t)))),o=t.address_components.find((t=>t.types.some((t=>"route"===t)))),n=t.address_components.find((t=>t.types.some((t=>"locality"===t)))),a=t.address_components.find((t=>t.types.some((t=>"sublocality"===t)))),r=e?.short_name&&t.formatted_address.includes(e.short_name+",")?e:n||a,l=t.address_components.find((t=>t.types.some((t=>"postal_code"===t)))),d=t.address_components.find((t=>t.types.some((t=>"administrative_area_level_2"===t)))),c=t.address_components.find((t=>t.types.some((t=>"country"===t)))),h=t.address_components.find((t=>t.types.some((t=>"subpremise"===t))));return{street:s?.short_name?`${s?.short_name} ${o?.short_name}`:o?.short_name,fullStreet:`${s?.long_name} ${o?.long_name}`,city:r?.short_name,street2:h?.short_name,county:d?.short_name,country:c?.short_name,state:i?.short_name,fullState:i?.long_name,zip:l?.short_name,latitude:t.geometry?.location?.lat(),longitude:t.geometry?.location?.lng()}}(await this.#p(t.Id));e&&(t={...t,...e})}catch(t){this.dispatchEvent(new s(t))}super.setSelected(t)}setSelectedBase(t){super.setSelected(t)}renderLeadingInputSlot(){return o`<slot name="leading-icon" slot="leading-icon"><md-icon>place</md-icon></slot>`}renderTrailingMenuSlot(){return o` <div
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
    </div>`}renderSelectedLeadingInputSlot(t){return o` <md-icon slot="leading-icon">place</md-icon> `}renderSuggestion(t){return o`<md-menu-item .item=${t} ?selected=${this.selected?.Id===t.Id}>
      <md-icon slot="start">place</md-icon>
      <span slot="headline">${t.primaryDisplayText}</span>
      <span slot="supporting-text">${t.secondaryText}</span>
    </md-menu-item>`}};function I(t){const e=t?.shadowRoot?.querySelector(".container"),i=e?.querySelector(".scroller");i&&(i.style.overflow="initial"),e&&(e.style.overflow="initial")}function k(t){const e=t?.shadowRoot?.querySelector(".container"),i=e?.querySelector(".scroller");i&&(i.style.overflow=""),e&&(e.style.overflow="")}t([e({type:String})],C.prototype,"googleMapsApiKey",null),t([e({type:String})],C.prototype,"label",null),t([e({type:String})],C.prototype,"placeholder",null),t([e({type:String})],C.prototype,"pathToSelectedText",null),t([e({type:Array})],C.prototype,"countries",null),t([e({reflect:!0,type:String})],C.prototype,"autocomplete",null),t([e({reflect:!0,type:Boolean})],C.prototype,"spellcheck",null),t([e({reflect:!0,type:String})],C.prototype,"autocorrect",null),C=t([i("google-address-input")],C);const M=t=>{t?.hasError&&t?.reportValidity()},T=[{abbreviation:"AL",name:"Alabama"},{abbreviation:"AK",name:"Alaska"},{abbreviation:"AS",name:"American Samoa"},{abbreviation:"AZ",name:"Arizona"},{abbreviation:"AR",name:"Arkansas"},{abbreviation:"CA",name:"California"},{abbreviation:"CO",name:"Colorado"},{abbreviation:"CT",name:"Connecticut"},{abbreviation:"DE",name:"Delaware"},{abbreviation:"DC",name:"District of Columbia"},{abbreviation:"FM",name:"Federated States of Micronesia"},{abbreviation:"FL",name:"Florida"},{abbreviation:"GA",name:"Georgia"},{abbreviation:"GU",name:"Guam"},{abbreviation:"HI",name:"Hawaii"},{abbreviation:"ID",name:"Idaho"},{abbreviation:"IL",name:"Illinois"},{abbreviation:"IN",name:"Indiana"},{abbreviation:"IA",name:"Iowa"},{abbreviation:"KS",name:"Kansas"},{abbreviation:"KY",name:"Kentucky"},{abbreviation:"LA",name:"Louisiana"},{abbreviation:"ME",name:"Maine"},{abbreviation:"MH",name:"Marshall Islands"},{abbreviation:"MD",name:"Maryland"},{abbreviation:"MA",name:"Massachusetts"},{abbreviation:"MI",name:"Michigan"},{abbreviation:"MN",name:"Minnesota"},{abbreviation:"MS",name:"Mississippi"},{abbreviation:"MO",name:"Missouri"},{abbreviation:"MT",name:"Montana"},{abbreviation:"NE",name:"Nebraska"},{abbreviation:"NV",name:"Nevada"},{abbreviation:"NH",name:"New Hampshire"},{abbreviation:"NJ",name:"New Jersey"},{abbreviation:"NM",name:"New Mexico"},{abbreviation:"NY",name:"New York"},{abbreviation:"NC",name:"North Carolina"},{abbreviation:"ND",name:"North Dakota"},{abbreviation:"MP",name:"Northern Mariana Islands"},{abbreviation:"OH",name:"Ohio"},{abbreviation:"OK",name:"Oklahoma"},{abbreviation:"OR",name:"Oregon"},{abbreviation:"PW",name:"Palau"},{abbreviation:"PA",name:"Pennsylvania"},{abbreviation:"PR",name:"Puerto Rico"},{abbreviation:"RI",name:"Rhode Island"},{abbreviation:"SC",name:"South Carolina"},{abbreviation:"SD",name:"South Dakota"},{abbreviation:"TN",name:"Tennessee"},{abbreviation:"TX",name:"Texas"},{abbreviation:"UT",name:"Utah"},{abbreviation:"VT",name:"Vermont"},{abbreviation:"VI",name:"Virgin Islands"},{abbreviation:"VA",name:"Virginia"},{abbreviation:"WA",name:"Washington"},{abbreviation:"WV",name:"West Virginia"},{abbreviation:"WI",name:"Wisconsin"},{abbreviation:"WY",name:"Wyoming"}],N=[{name:"Alberta",abbreviation:"AB"},{name:"British Columbia",abbreviation:"BC"},{name:"Manitoba",abbreviation:"MB"},{name:"New Brunswick",abbreviation:"NB"},{name:"Newfoundland and Labrador",abbreviation:"NL"},{name:"Northwest Territories",abbreviation:"NT"},{name:"Nova Scotia",abbreviation:"NS"},{name:"Nunavut",abbreviation:"NU"},{name:"Ontario",abbreviation:"ON"},{name:"Prince Edward Island",abbreviation:"PE"},{name:"Quebec",abbreviation:"QC"},{name:"Saskatchewan",abbreviation:"SK"},{name:"Yukon Territory",abbreviation:"YT"}],P=[{abbreviation:"US",name:"United States"},{abbreviation:"CA",name:"Canada"}];let D=class extends n{#g;get dialog(){return this.#g}set dialog(t){this.#g=t}#e="";get label(){return this.#e}set label(t){this.#e=t}#b;get showCounty(){return this.#b}set showCounty(t){this.#b=t}#v;get showStreet2(){return this.#v}set showStreet2(t){this.#v=t}#o;get countries(){return this.#o}set countries(t){this.#o=t}#y="";get street(){return this.#y}set street(t){this.#y=t}#f="";get street2(){return this.#f}set street2(t){this.#f=t}#$="";get city(){return this.#$}set city(t){this.#$=t}#w="";get county(){return this.#w}set county(t){this.#w=t}#S="";get country(){return this.#S}set country(t){this.#S=t}#x="";get state(){return this.#x}set state(t){this.#x=t}#_="";get zip(){return this.#_}set zip(t){this.#_=t}#A;get allInputs(){return this.#A}set allInputs(t){this.#A=t}async open(t){return this.reset(),await this.updateComplete,this.street=t?.street??"",this.street2=t?.street2??"",this.city=t?.city??"",this.state=t?.state??"",this.zip=t?.zip??"",this.county=t?.county??"",this.country=t?.country??"",this.dialog.show(),new Promise((t=>{this.resolve=t}))}validate(){let t=!0;return this.allInputs.forEach((e=>{e.reportValidity()||(t=!1)})),t}async reset(){this.street="",this.street2="",this.city="",this.state="",this.zip="",this.county="",this.country="",this.allInputs.forEach((t=>t.reset()))}static{this.styles=[a`
      md-dialog {
        width: -webkit-fill-available;
        max-width: min(0% + 550px, 100% - 48px);
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    `]}render(){return o`
      <md-dialog
        @open=${t=>{l(t.target)}}
        @closing=${t=>{"apply"!==t.target.returnValue&&this.resolve(null)}}
      >
        <div slot="headline">${this.label}</div>
        <form slot="content">
          <md-outlined-text-field
            label="Street"
            autocomplete="address-line1"
            required
            .value=${this.street||""}
            @blur=${t=>M(t.target)}
            @change=${t=>this.street=t.target.value}
          >
            <md-icon slot="leading-icon">markunread_mailbox</md-icon>
          </md-outlined-text-field>
          ${this.showStreet2?o` <md-outlined-text-field
                @blur=${t=>M(t.target)}
                label="Street 2"
                autocomplete="address-line2"
                .value=${this.street2||""}
                @change=${t=>this.street2=t.target.value}
              >
                <md-icon slot="leading-icon">meeting_room</md-icon></md-outlined-text-field
              >`:r}
          <md-outlined-text-field
            label="City"
            autocomplete="address-level2"
            required
            .value=${this.city||""}
            @blur=${t=>M(t.target)}
            @change=${t=>this.city=t.target.value}
            ><md-icon slot="leading-icon">location_city</md-icon></md-outlined-text-field
          >
          ${this.showCounty?o`<md-outlined-text-field
                @blur=${t=>M(t.target)}
                label="County"
                required
                .value=${this.county||""}
                @change=${t=>this.county=t.target.value}
                ><md-icon slot="leading-icon">explore</md-icon></md-outlined-text-field
              >`:r}

          <md-outlined-select
            @opening=${()=>I(this.dialog)}
            @closing=${()=>k(this.dialog)}
            @blur=${t=>M(t.target)}
            label="State"
            autocomplete="address-level1"
            required
            .value=${this.state||""}
            @input=${t=>alert(t.target.value)}
            @change=${t=>{t.stopPropagation(),this.state=t.target.value,T.some((t=>t.abbreviation.toLowerCase()===this.state.toLowerCase()))&&(this.country="US"),N.some((t=>t.abbreviation.toLowerCase()===this.state.toLowerCase()))&&(this.country="CA")}}
          >
            <md-icon slot="leading-icon">location_on</md-icon>

            ${this.countries.some((t=>"us"===t.toLowerCase()))?T.map((t=>o`<md-select-option value=${t.abbreviation}>
                      <div slot="headline">${t.name}</div>
                      <div slot="supporting-text">United States</div>
                    </md-select-option>`)):r}
            ${this.countries.some((t=>"ca"===t.toLowerCase()))?N.map((t=>o`<md-select-option value=${t.abbreviation}>
                      <div slot="headline">${t.name}</div>
                      <div slot="supporting-text">Canada</div>
                    </md-select-option>`)):r}
          </md-outlined-select>

          ${this.countries.length>1?o`<md-outlined-select
                @opening=${()=>I(this.dialog)}
                @closing=${()=>k(this.dialog)}
                @blur=${t=>M(t.target)}
                label="Country"
                autocomplete="country"
                required
                .value=${this.country||""}
                @change=${t=>{t.stopPropagation(),this.country=t.target.value}}
              >
                <md-icon slot="leading-icon">map</md-icon>

                ${P.filter((t=>this.countries.some((e=>e.toLowerCase()===t.abbreviation.toLowerCase())))).map((t=>o`<md-select-option value=${t.abbreviation}> <div slot="headline">${t.name}</div></md-select-option>`))}
              </md-outlined-select> `:r}

          <md-outlined-text-field
            label="Zip"
            autocomplete="postal-code"
            required
            .value=${this.zip||""}
            @blur=${t=>M(t.target)}
            @change=${t=>this.zip=t.target.value}
            ><md-icon slot="leading-icon">universal_local</md-icon></md-outlined-text-field
          >
        </form>

        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}> Cancel </md-text-button>
          <md-text-button
            @click=${()=>{if(this.validate()){this.dialog.close("apply");const t={street:this.street,street2:this.street2,city:this.city,state:this.state,zip:this.zip,county:this.county};this.resolve(t)}}}
            >Update</md-text-button
          >
        </div>
      </md-dialog>
    `}};t([d("md-dialog")],D.prototype,"dialog",null),t([e({type:String})],D.prototype,"label",null),t([e({type:Boolean,attribute:"show-county"})],D.prototype,"showCounty",null),t([e({type:Boolean,attribute:"show-street2"})],D.prototype,"showStreet2",null),t([e({type:Array})],D.prototype,"countries",null),t([c()],D.prototype,"street",null),t([c()],D.prototype,"street2",null),t([c()],D.prototype,"city",null),t([c()],D.prototype,"county",null),t([c()],D.prototype,"country",null),t([c()],D.prototype,"state",null),t([c()],D.prototype,"zip",null),t([h("md-outlined-text-field, md-outlined-select")],D.prototype,"allInputs",null),D=t([i("manual-address-dialog")],D);let L=class extends C{#v=!1;get showStreet2(){return this.#v}set showStreet2(t){this.#v=t}#b=!1;get showCounty(){return this.#b}set showCounty(t){this.#b=t}#C;get manualAddressDialog(){return this.#C}set manualAddressDialog(t){this.#C=t}#I=!1;get hasSelection(){return this.#I}set hasSelection(t){this.#I=t}static{this.styles=[...C.styles,a`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        --_supporting-text-trailing-space: 165px;
      }

      :host([has-selection]) {
        --md-outlined-text-field-with-trailing-icon-trailing-space: 36px;
      }
    `]}update(t){t.has("selected")&&(this.hasSelection=!!this.selected),super.update(t)}renderTrailingSlot(){return o`<manual-address-dialog
      .showCounty=${this.showCounty}
      .showStreet2=${this.showStreet2}
      .label=${this.label}
      .countries=${this.countries}
    ></manual-address-dialog>`}renderTrailingInputSlot(){return o`
      <md-icon-button
        ?hidden=${this.isLoading}
        ?disabled=${this.disabled}
        slot="trailing-icon"
        title="Can't find address"
        @click=${async t=>{t.preventDefault();const e=await this.manualAddressDialog.open(this.selected);e&&(super.setSelectedBase({Id:Math.random().toString(36).slice(2,7),...e}),this.reportValidity())}}
      >
        <md-icon>contact_support</md-icon>
      </md-icon-button>
    `}};t([e({type:Boolean,attribute:"show-street2"})],L.prototype,"showStreet2",null),t([e({type:Boolean,attribute:"show-county"})],L.prototype,"showCounty",null),t([d("manual-address-dialog")],L.prototype,"manualAddressDialog",null),t([e({type:Boolean,attribute:"has-selection",reflect:!0})],L.prototype,"hasSelection",null),L=t([i("titanium-address-input")],L);let j=class extends n{#k=null;get setLocationResult(){return this.#k}set setLocationResult(t){this.#k=t}#M;get googleAddressInputDemoA(){return this.#M}set googleAddressInputDemoA(t){this.#M=t}#T;get titaniumAddressInputDemoA(){return this.#T}set titaniumAddressInputDemoA(t){this.#T=t}#o=["us"];get countries(){return this.#o}set countries(t){this.#o=t}static{this.styles=[u,m,p,a`
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
    `]}render(){return o`
      <h1>Google address input</h1>

      <component-demo>
        <h2>Main demo</h2>
        <google-address-input
          demo-a
          autocomplete="street-address"
          @selected=${t=>console.log("selected change 1",t.target.selected)}
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
          @selected=${t=>console.log("selected change 1",t.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
          <md-icon slot="trailing-icon">security</md-icon><md-icon slot="leading-icon">map</md-icon>
        </google-address-input>
      </component-demo>

      <h1>Titanium address input</h1>

      <component-demo>
        <h2>Main demo</h2>
        <titanium-address-input
          autocomplete="address"
          demo-a
          .countries=${this.countries}
          @selected=${t=>console.log("selected change 1",t.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </titanium-address-input>

        <section actions>
          <md-outlined-select
            label="Allowed countries"
            @request-selection=${t=>{t.stopPropagation(),"US-CA"===t.target.value?this.countries=["us","ca"]:"US"===t.target.value?this.countries=["us"]:"CA"===t.target.value&&(this.countries=["ca"])}}
          >
            <md-icon slot="leading-icon">map</md-icon>
            <md-select-option value="US"> <div slot="headline">United States</div></md-select-option>
            <md-select-option value="CA"> <div slot="headline">Canada</div></md-select-option>
            <md-select-option value="US-CA"> <div slot="headline">US and Canada</div></md-select-option>
          </md-outlined-select>

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
            >Toggle showCounty text</md-outlined-button
          >

          <md-outlined-button @click=${()=>this.titaniumAddressInputDemoA.showStreet2=!this.titaniumAddressInputDemoA.showCounty}
            >Toggle showStreet2 text</md-outlined-button
          >

          <md-outlined-button
            @click=${()=>this.titaniumAddressInputDemoA.selected={Id:"1",street:"11 North Main Street",city:"Cedar City",state:"UT",zip:"84720"}}
            >Prefill an address</md-outlined-button
          >
          <md-outlined-button @click=${()=>this.titaniumAddressInputDemoA.reset()}>reset()</md-outlined-button>
        </section>
      </component-demo>
    `}};t([c()],j.prototype,"setLocationResult",null),t([d("google-address-input[demo-a]")],j.prototype,"googleAddressInputDemoA",null),t([d("titanium-address-input[demo-a]")],j.prototype,"titaniumAddressInputDemoA",null),t([c()],j.prototype,"countries",null),j=t([i("titanium-address-input-playground")],j);let O=class extends n{static{this.styles=[g,a``]}render(){return o`
      <story-header name="Titanium Address Input" className="TitaniumAddressInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-address-input/project.json"
        ><titanium-address-input-playground></titanium-address-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-address-input"></api-docs>
    `}};O=t([i("titanium-address-input-demo")],O);export{O as TitaniumAddressInputDemo};
