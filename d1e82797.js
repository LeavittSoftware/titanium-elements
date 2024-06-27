import{_ as t,S as e,x as i,n as s,t as o,s as n,i as l,T as d,r as a,e as r,c,h,a as u,p}from"./d0ace671.js";import{S as m}from"./9e8552c1.js";import"./41178c5b.js";import{T as g}from"./8dfc0595.js";import{D as v}from"./b7c4d201.js";import"./3e67aa42.js";import"./ffc1a613.js";import"./1c72d69a.js";import"./ec341a4d.js";import"./20123ed4.js";import"./725c256f.js";import"./3d5c916a.js";import"./dc22cb98.js";import"./49ad9f2f.js";import"./f42dd0a8.js";import"./62698f2c.js";import"./663a7052.js";import"./c3dfe460.js";import"./22c1ed29.js";import"./fb6bc6bd.js";import"./7577643e.js";import"./ec5758e0.js";function y(t,e,i,s){return new(i||(i=Promise))((function(o,n){function l(t){try{a(s.next(t))}catch(t){n(t)}}function d(t){try{a(s.throw(t))}catch(t){n(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(l,d)}a((s=s.apply(t,e||[])).next())}))}function b(t){return t&&t.t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}"function"==typeof SuppressedError&&SuppressedError;var f=function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,o,n;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(o=s;0!=o--;)if(!t(e[o],i[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((s=(n=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(o=s;0!=o--;)if(!Object.prototype.hasOwnProperty.call(i,n[o]))return!1;for(o=s;0!=o--;){var l=n[o];if(!t(e[l],i[l]))return!1}return!0}return e!=e&&i!=i},w=b(f);const x="__googleMapsScriptId";var $;!function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"}($||($={}));class S{constructor({apiKey:t,authReferrerPolicy:e,channel:i,client:s,id:o=x,language:n,libraries:l=[],mapIds:d,nonce:a,region:r,retries:c=3,url:h="https://maps.googleapis.com/maps/api/js",version:u}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=t,this.authReferrerPolicy=e,this.channel=i,this.client=s,this.id=o||x,this.language=n,this.libraries=l,this.mapIds=d,this.nonce=a,this.region=r,this.retries=c,this.url=h,this.version=u,S.instance){if(!w(this.options,S.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(S.instance.options)}`);return S.instance}S.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?$.FAILURE:this.done?$.SUCCESS:this.loading?$.LOADING:$.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let t=this.url;return t+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(t+=`&key=${this.apiKey}`),this.channel&&(t+=`&channel=${this.channel}`),this.client&&(t+=`&client=${this.client}`),this.libraries.length>0&&(t+=`&libraries=${this.libraries.join(",")}`),this.language&&(t+=`&language=${this.language}`),this.region&&(t+=`&region=${this.region}`),this.version&&(t+=`&v=${this.version}`),this.mapIds&&(t+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(t+=`&auth_referrer_policy=${this.authReferrerPolicy}`),t}deleteScript(){const t=document.getElementById(this.id);t&&t.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((t,e)=>{this.loadCallback((i=>{i?e(i.error):t(window.google)}))}))}importLibrary(t){return this.execute(),google.maps.importLibrary(t)}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){var t,e;if(document.getElementById(this.id))return void this.callback();const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach((t=>!i[t]&&delete i[t])),(null===(e=null===(t=null===window||void 0===window?void 0:window.google)||void 0===t?void 0:t.maps)||void 0===e?void 0:e.importLibrary)||(t=>{let e,i,s,o="The Google Maps JavaScript API",n="google",l="importLibrary",d="__ib__",a=document,r=window;r=r[n]||(r[n]={});const c=r.maps||(r.maps={}),h=new Set,u=new URLSearchParams,p=()=>e||(e=new Promise(((l,r)=>y(this,void 0,void 0,(function*(){var p;for(s in yield i=a.createElement("script"),i.id=this.id,u.set("libraries",[...h]+""),t)u.set(s.replace(/[A-Z]/g,(t=>"_"+t[0].toLowerCase())),t[s]);u.set("callback",n+".maps."+d),i.src=this.url+"?"+u,c[d]=l,i.onerror=()=>e=r(Error(o+" could not load.")),i.nonce=this.nonce||(null===(p=a.querySelector("script[nonce]"))||void 0===p?void 0:p.nonce)||"",a.head.append(i)})))));c[l]?console.warn(o+" only loads once. Ignoring:",t):c[l]=(t,...e)=>h.add(t)&&p().then((()=>c[l](t,...e)))})(i);const s=this.libraries.map((t=>this.importLibrary(t)));s.length||s.push(this.importLibrary("core")),Promise.all(s).then((()=>this.callback()),(t=>{const e=new ErrorEvent("error",{error:t});this.loadErrorCallback(e)}))}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){if(this.errors.push(t),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),t)}else this.onerrorEvent=t,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((t=>{t(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setScript())}}}function _(t){return t?t.street?t.country?`${t.street}${t.street2?` ${t.street2}`:""}, ${t.city}, ${t.state}, ${"US"===t.country?"USA":t.country}`:`${t.street}${t.street2?` ${t.street2}`:""}, ${t.city}, ${t.state}`:`${t.city}, ${t.state}`:""}let A=class extends g{#t;get googleMapsApiKey(){return this.#t}set googleMapsApiKey(t){this.#t=t}#e="Address";get label(){return this.#e}set label(t){this.#e=t}#i="Search for an address";get placeholder(){return this.#i}set placeholder(t){this.#i=t}#s="primaryDisplayText";get pathToSelectedText(){return this.#s}set pathToSelectedText(t){this.#s=t}#o=new v((t=>this.#n(t)));#l=new AbortController;#d;#a;async firstUpdated(){const t=new S({apiKey:this.googleMapsApiKey,version:"weekly",libraries:["places"]});await t.importLibrary("places"),this.#d=new google.maps.places.PlacesService(document.createElement("div")),this.#a=new google.maps.places.AutocompleteService}updated(t){if(t.has("selected")&&this.selected){_(this.selected)!==this.selected.primaryDisplayText&&(this.selected.primaryDisplayText=_(this.selected),this.requestUpdate("selected"))}}async#r(t){return new Promise((e=>{this.#a.getPlacePredictions({input:t,types:["address"],componentRestrictions:{country:"us"}},((t,i)=>i==google.maps.places.PlacesServiceStatus.OK&&t?e(t.map((t=>({Id:t.place_id,primaryDisplayText:t?.structured_formatting?.main_text||t.description,secondaryText:t.structured_formatting?.secondary_text})))):(console.warn(i),e([]))))}))}async#c(t){return new Promise(((e,i)=>{const s={placeId:t,fields:["address_components","formatted_address","geometry"]};this.#d.getDetails(s,((t,s)=>s==google.maps.places.PlacesServiceStatus.OK&&t?e(t):i(s)))}))}async#n(t){if(t){this.#l.abort(),this.#l=new AbortController;try{const e=this.#r(t);this.loadWhile(e);const i=await e??[];return void this.showSuggestions(i,i.length)}catch(t){t?.message?.includes("Abort error")||this.dispatchEvent(new e(t))}this.showSuggestions([],0)}}customCheckValidity(){return!this.selected&&this.textfield?.value?(this.errorText="Please enter a valid address in this field",!1):!this.required&&!this.selected||(this.selected?function(t){const e=new RegExp(/^(?=.{1,64}$)[a-zA-Z \-\.\d #'\.,]{1,64}[\s][a-zA-Z \-\.\d #'\.,]{1,64}$/),i=new RegExp("[A-Z]"),s=new RegExp("[a-z]"),o=new RegExp("[0-9]");return!!e.test(t)&&(i.test(t)||s.test(t))&&o.test(t)}(this.selected?.street??"")?this.selected?.city?this.selected?.state?!!this.selected?.zip||(this.errorText="Please correct the missing zip code",!1):(this.errorText="Please correct the missing state",!1):(this.errorText="Please correct the missing city",!1):(this.errorText="Please correct the invalid street",!1):(this.errorText="Please enter a valid address in this field",!1))}customReportValidity(){return this.customCheckValidity()?(this.errorText="",this.error=!1):this.error=!0,!this.error}onInputChanged(t){this.#o.debounce(t)}async setSelected(t){if(t)try{const e=function(t){if(!t||!t.address_components||!t.formatted_address)return null;const e=t.address_components.find((t=>t.types.some((t=>"neighborhood"===t)))),i=t.address_components.find((t=>t.types.some((t=>"administrative_area_level_1"===t)))),s=t.address_components.find((t=>t.types.some((t=>"street_number"===t)))),o=t.address_components.find((t=>t.types.some((t=>"route"===t)))),n=t.address_components.find((t=>t.types.some((t=>"locality"===t)))),l=t.address_components.find((t=>t.types.some((t=>"sublocality"===t)))),d=e?.short_name&&t.formatted_address.includes(e.short_name+",")?e:n||l,a=t.address_components.find((t=>t.types.some((t=>"postal_code"===t)))),r=t.address_components.find((t=>t.types.some((t=>"administrative_area_level_2"===t)))),c=t.address_components.find((t=>t.types.some((t=>"country"===t)))),h=t.address_components.find((t=>t.types.some((t=>"subpremise"===t))));return{street:s?.short_name?`${s?.short_name} ${o?.short_name}`:o?.short_name,fullStreet:`${s?.long_name} ${o?.long_name}`,city:d?.short_name,street2:h?.short_name,county:r?.short_name,country:c?.short_name,state:i?.short_name,fullState:i?.long_name,zip:a?.short_name,latitude:t.geometry?.location?.lat(),longitude:t.geometry?.location?.lng()}}(await this.#c(t.Id));e&&(t={...t,...e})}catch(t){this.dispatchEvent(new e(t))}super.setSelected(t)}setSelectedBase(t){super.setSelected(t)}renderLeadingInputSlot(){return i`<slot name="leading-icon" slot="leading-icon"><md-icon>place</md-icon></slot>`}renderTrailingMenuSlot(){return i` <div
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
    </div>`}renderSelectedLeadingInputSlot(t){return i` <md-icon slot="leading-icon">place</md-icon> `}renderSuggestion(t){return i`<md-menu-item .item=${t} ?selected=${this.selected?.Id===t.Id}>
      <md-icon slot="start">place</md-icon>
      <span slot="headline">${t.primaryDisplayText}</span>
      <span slot="supporting-text">${t.secondaryText}</span>
    </md-menu-item>`}};t([s({type:String})],A.prototype,"googleMapsApiKey",null),t([s({type:String})],A.prototype,"label",null),t([s({type:String})],A.prototype,"placeholder",null),t([s({type:String})],A.prototype,"pathToSelectedText",null),A=t([o("google-address-input")],A);const I=t=>{t?.hasError&&t?.reportValidity()};let C=class extends n{#h;get dialog(){return this.#h}set dialog(t){this.#h=t}#e="";get label(){return this.#e}set label(t){this.#e=t}#u;get showCounty(){return this.#u}set showCounty(t){this.#u=t}#p;get showStreet2(){return this.#p}set showStreet2(t){this.#p=t}#m="";get street(){return this.#m}set street(t){this.#m=t}#g="";get street2(){return this.#g}set street2(t){this.#g=t}#v="";get city(){return this.#v}set city(t){this.#v=t}#y="";get county(){return this.#y}set county(t){this.#y=t}#b="";get state(){return this.#b}set state(t){this.#b=t}#f="";get zip(){return this.#f}set zip(t){this.#f=t}#w;get allInputs(){return this.#w}set allInputs(t){this.#w=t}async open(t){return this.reset(),await this.updateComplete,this.street=t?.street??"",this.street2=t?.street2??"",this.city=t?.city??"",this.state=t?.state??"",this.zip=t?.zip??"",this.county=t?.county??"",this.dialog.show(),new Promise((t=>{this.resolve=t}))}validate(){let t=!0;return this.allInputs.forEach((e=>{e.reportValidity()||(t=!1)})),t}async reset(){this.street="",this.street2="",this.city="",this.state="",this.zip="",this.county="",this.allInputs.forEach((t=>t.reset()))}static{this.styles=[l`
      md-dialog {
        width: -webkit-fill-available;
        max-width: min(0% + 550px, 100% - 48px);
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    `]}render(){return i`
      <md-dialog
        @closing=${t=>{"apply"!==t.target.returnValue&&this.resolve(null)}}
      >
        <div slot="headline">${this.label}</div>
        <form slot="content">
          <md-outlined-text-field
            label="Street"
            required
            .value=${this.street||""}
            @blur=${t=>I(t.target)}
            @change=${t=>this.street=t.target.value}
          >
            <md-icon slot="leading-icon">markunread_mailbox</md-icon>
          </md-outlined-text-field>
          ${this.showStreet2?i` <md-outlined-text-field
                @blur=${t=>I(t.target)}
                label="Street 2"
                .value=${this.street2||""}
                @change=${t=>this.street2=t.target.value}
              >
                <md-icon slot="leading-icon">meeting_room</md-icon></md-outlined-text-field
              >`:d}
          <md-outlined-text-field
            label="City"
            required
            .value=${this.city||""}
            @blur=${t=>I(t.target)}
            @change=${t=>this.city=t.target.value}
            ><md-icon slot="leading-icon">location_city</md-icon></md-outlined-text-field
          >
          ${this.showCounty?i`<md-outlined-text-field
                @blur=${t=>I(t.target)}
                label="County"
                required
                .value=${this.county||""}
                @change=${t=>this.county=t.target.value}
                ><md-icon slot="leading-icon">explore</md-icon></md-outlined-text-field
              >`:d}

          <md-outlined-select
            @opening=${()=>function(t){const e=t?.shadowRoot?.querySelector(".container"),i=e?.querySelector(".scroller");i&&(i.style.overflow="initial"),e&&(e.style.overflow="initial")}(this.dialog)}
            @closing=${()=>function(t){const e=t?.shadowRoot?.querySelector(".container"),i=e?.querySelector(".scroller");i&&(i.style.overflow=""),e&&(e.style.overflow="")}(this.dialog)}
            @blur=${t=>I(t.target)}
            label="State"
            required
            .value=${this.state||""}
            @request-selection=${t=>{t.stopPropagation(),this.state=t.target.value}}
          >
            <md-icon slot="location_on">location_on</md-icon>
            <md-select-option value="AL">
              <div slot="headline">Alabama</div>
            </md-select-option>

            <md-select-option value="AK"> <div slot="headline">Alaska</div></md-select-option>
            <md-select-option value="AS"> <div slot="headline">American Samoa</div></md-select-option>
            <md-select-option value="AZ"> <div slot="headline">Arizona</div></md-select-option>
            <md-select-option value="AR"> <div slot="headline">Arkansas</div></md-select-option>
            <md-select-option value="CA"> <div slot="headline">California</div></md-select-option>
            <md-select-option value="CO"> <div slot="headline">Colorado</div></md-select-option>
            <md-select-option value="CT"> <div slot="headline">Connecticut</div></md-select-option>
            <md-select-option value="DE"> <div slot="headline">Delaware</div></md-select-option>
            <md-select-option value="DC"> <div slot="headline">District of Columbia</div></md-select-option>
            <md-select-option value="FM"> <div slot="headline">Federated States of Micronesia</div></md-select-option>
            <md-select-option value="FL"> <div slot="headline">Florida</div></md-select-option>
            <md-select-option value="GA"> <div slot="headline">Georgia</div></md-select-option>
            <md-select-option value="GU"> <div slot="headline">Guam</div></md-select-option>
            <md-select-option value="HI"> <div slot="headline">Hawaii</div></md-select-option>
            <md-select-option value="ID"> <div slot="headline">Idaho</div></md-select-option>
            <md-select-option value="IL"> <div slot="headline">Illinois</div></md-select-option>
            <md-select-option value="IN"> <div slot="headline">Indiana</div></md-select-option>
            <md-select-option value="IA"> <div slot="headline">Iowa</div></md-select-option>
            <md-select-option value="KS"> <div slot="headline">Kansas</div></md-select-option>
            <md-select-option value="KY"> <div slot="headline">Kentucky</div></md-select-option>
            <md-select-option value="LA"> <div slot="headline">Louisiana</div></md-select-option>
            <md-select-option value="ME"> <div slot="headline">Maine</div></md-select-option>
            <md-select-option value="MH"> <div slot="headline">Marshall Islands</div></md-select-option>
            <md-select-option value="MD"> <div slot="headline">Maryland</div></md-select-option>
            <md-select-option value="MA"> <div slot="headline">Massachusetts</div></md-select-option>
            <md-select-option value="MI"> <div slot="headline">Michigan</div></md-select-option>
            <md-select-option value="MN"> <div slot="headline">Minnesota</div></md-select-option>
            <md-select-option value="MS"> <div slot="headline">Mississippi</div></md-select-option>
            <md-select-option value="MO"> <div slot="headline">Missouri</div></md-select-option>
            <md-select-option value="MT"> <div slot="headline">Montana</div></md-select-option>
            <md-select-option value="NE"> <div slot="headline">Nebraska</div></md-select-option>
            <md-select-option value="NV"> <div slot="headline">Nevada</div></md-select-option>
            <md-select-option value="NH"> <div slot="headline">New Hampshire</div></md-select-option>
            <md-select-option value="NJ"> <div slot="headline">New Jersey</div></md-select-option>
            <md-select-option value="NM"> <div slot="headline">New Mexico</div></md-select-option>
            <md-select-option value="NY"> <div slot="headline">New York</div></md-select-option>
            <md-select-option value="NC"> <div slot="headline">North Carolina</div></md-select-option>
            <md-select-option value="ND"> <div slot="headline">North Dakota</div></md-select-option>
            <md-select-option value="MP"> <div slot="headline">Northern Mariana Islands</div></md-select-option>
            <md-select-option value="OH"> <div slot="headline">Ohio</div></md-select-option>
            <md-select-option value="OK"> <div slot="headline">Oklahoma</div></md-select-option>
            <md-select-option value="OR"> <div slot="headline">Oregon</div></md-select-option>
            <md-select-option value="PW"> <div slot="headline">Palau</div></md-select-option>
            <md-select-option value="PA"> <div slot="headline">Pennsylvania</div></md-select-option>
            <md-select-option value="PR"> <div slot="headline">Puerto Rico</div></md-select-option>
            <md-select-option value="RI"> <div slot="headline">Rhode Island</div></md-select-option>
            <md-select-option value="SC"> <div slot="headline">South Carolina</div></md-select-option>
            <md-select-option value="SD"> <div slot="headline">South Dakota</div></md-select-option>
            <md-select-option value="TN"> <div slot="headline">Tennessee</div></md-select-option>
            <md-select-option value="TX"> <div slot="headline">Texas</div></md-select-option>
            <md-select-option value="UT"> <div slot="headline">Utah</div></md-select-option>
            <md-select-option value="VT"> <div slot="headline">Vermont</div></md-select-option>
            <md-select-option value="VI"> <div slot="headline">Virgin Islands</div></md-select-option>
            <md-select-option value="VA"> <div slot="headline">Virginia</div></md-select-option>
            <md-select-option value="WA"> <div slot="headline">Washington</div></md-select-option>
            <md-select-option value="WV"> <div slot="headline">West Virginia</div></md-select-option>
            <md-select-option value="WI"> <div slot="headline">Wisconsin</div></md-select-option>
            <md-select-option value="WY"> <div slot="headline">Wyoming</div></md-select-option>
          </md-outlined-select>
          <md-outlined-text-field
            label="Zip"
            pattern="^\\d{5}$|^\\d{5}-\\d{4}$"
            required
            .value=${this.zip||""}
            @blur=${t=>I(t.target)}
            @change=${t=>this.zip=t.target.value}
            ><md-icon slot="leading-icon">map</md-icon></md-outlined-text-field
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
    `}};t([r("md-dialog")],C.prototype,"dialog",null),t([s({type:String})],C.prototype,"label",null),t([s({type:Boolean,attribute:"show-county"})],C.prototype,"showCounty",null),t([s({type:Boolean,attribute:"show-street2"})],C.prototype,"showStreet2",null),t([a()],C.prototype,"street",null),t([a()],C.prototype,"street2",null),t([a()],C.prototype,"city",null),t([a()],C.prototype,"county",null),t([a()],C.prototype,"state",null),t([a()],C.prototype,"zip",null),t([c("md-outlined-text-field, md-outlined-select")],C.prototype,"allInputs",null),C=t([o("manual-address-dialog")],C);let k=class extends A{#p=!1;get showStreet2(){return this.#p}set showStreet2(t){this.#p=t}#u=!1;get showCounty(){return this.#u}set showCounty(t){this.#u=t}#x;get manualAddressDialog(){return this.#x}set manualAddressDialog(t){this.#x=t}static{this.styles=[...A.styles,l`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        --_supporting-text-trailing-space: 165px;
      }
    `]}renderTrailingSlot(){return i`<manual-address-dialog .showCounty=${this.showCounty} .showStreet2=${this.showStreet2} .label=${this.label}></manual-address-dialog>`}renderTrailingInputSlot(){return i`
      <md-icon-button
        ?hidden=${this.isLoading}
        ?disabled=${this.disabled}
        slot="trailing-icon"
        title="Can't find address"
        @click=${async t=>{t.preventDefault();const e=await this.manualAddressDialog.open(this.selected);e&&(super.setSelectedBase({Id:Math.random().toString(36).slice(2,7),...e}),this.reportValidity())}}
      >
        <md-icon>contact_support</md-icon>
      </md-icon-button>
    `}};t([s({type:Boolean,attribute:"show-street2"})],k.prototype,"showStreet2",null),t([s({type:Boolean,attribute:"show-county"})],k.prototype,"showCounty",null),t([r("manual-address-dialog")],k.prototype,"manualAddressDialog",null),k=t([o("titanium-address-input")],k);let M=class extends n{#$=null;get setLocationResult(){return this.#$}set setLocationResult(t){this.#$=t}#S;get googleAddressInputDemoA(){return this.#S}set googleAddressInputDemoA(t){this.#S=t}#_;get titaniumAddressInputDemoA(){return this.#_}set titaniumAddressInputDemoA(t){this.#_=t}static{this.styles=[h,u,p,l`
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
    `]}render(){return i`
      <h1>Google address input</h1>

      <component-demo>
        <h2>Main demo</h2>
        <google-address-input
          demo-a
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
          demo-a
          @selected=${t=>console.log("selected change 1",t.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </titanium-address-input>

        <section actions>
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
    `}};t([a()],M.prototype,"setLocationResult",null),t([r("google-address-input[demo-a]")],M.prototype,"googleAddressInputDemoA",null),t([r("titanium-address-input[demo-a]")],M.prototype,"titaniumAddressInputDemoA",null),M=t([o("titanium-address-input-playground")],M);let j=class extends n{static{this.styles=[m,l``]}render(){return i`
      <story-header name="Titanium Address Input" className="TitaniumAddressInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-address-input/project.json"
        ><titanium-address-input-playground></titanium-address-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-address-input"></api-docs>
    `}};j=t([o("titanium-address-input-demo")],j);export{j as TitaniumAddressInputDemo};
