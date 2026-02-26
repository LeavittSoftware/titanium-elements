import{b as t,_ as i,n,t as e,au as s,av as r,i as u,c as o,r as a,e as h}from"./BkdWKSMI.js";import{S as l}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import{a as d,b as c,c as m,e as p,f,R as v,d as y}from"./fEBq_QNq.js";import{E as g}from"./Co12Lg7Y.js";var b,k,D=365*f,w=D/12,x=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,_={years:D,months:w,days:f,hours:p,minutes:m,seconds:c,milliseconds:1,weeks:d},$=function(t){return t instanceof O},S=function(t,i,n){return new O(t,n,i.$l)},T=function(t){return k.p(t)+"s"},j=function(t){return t<0},I=function(t){return j(t)?Math.ceil(t):Math.floor(t)},M=function(t){return Math.abs(t)},Y=function(t,i){return t?j(t)?{negative:!0,format:""+M(t)+i}:{negative:!1,format:""+t+i}:{negative:!1,format:""}},O=function(){function t(t,i,n){var e=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),i)return S(t*_[T(i)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach(function(i){e.$d[T(i)]=t[i]}),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(x);if(s){var r=s.slice(2).map(function(t){return null!=t?Number(t):0});return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var i=t.prototype;return i.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(i,n){return i+(t.$d[n]||0)*_[n]},0)},i.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=I(t/D),t%=D,this.$d.months=I(t/w),t%=w,this.$d.days=I(t/f),t%=f,this.$d.hours=I(t/p),t%=p,this.$d.minutes=I(t/m),t%=m,this.$d.seconds=I(t/c),t%=c,this.$d.milliseconds=t},i.toISOString=function(){var t=Y(this.$d.years,"Y"),i=Y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var e=Y(n,"D"),s=Y(this.$d.hours,"H"),r=Y(this.$d.minutes,"M"),u=this.$d.seconds||0;this.$d.milliseconds&&(u+=this.$d.milliseconds/1e3,u=Math.round(1e3*u)/1e3);var o=Y(u,"S"),a=t.negative||i.negative||e.negative||s.negative||r.negative||o.negative,h=s.format||r.format||o.format?"T":"",l=(a?"-":"")+"P"+t.format+i.format+e.format+h+s.format+r.format+o.format;return"P"===l||"-P"===l?"P0D":l},i.toJSON=function(){return this.toISOString()},i.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:k.s(this.$d.years,2,"0"),YYYY:k.s(this.$d.years,4,"0"),M:this.$d.months,MM:k.s(this.$d.months,2,"0"),D:this.$d.days,DD:k.s(this.$d.days,2,"0"),H:this.$d.hours,HH:k.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:k.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:k.s(this.$d.seconds,2,"0"),SSS:k.s(this.$d.milliseconds,3,"0")};return i.replace(v,function(t,i){return i||String(n[t])})},i.as=function(t){return this.$ms/_[T(t)]},i.get=function(t){var i=this.$ms,n=T(t);return"milliseconds"===n?i%=1e3:i="weeks"===n?I(i/_[n]):this.$d[n],i||0},i.add=function(t,i,n){var e;return e=i?t*_[T(i)]:$(t)?t.$ms:S(t,this).$ms,S(this.$ms+e*(n?-1:1),this)},i.subtract=function(t,i){return this.add(t,i,!0)},i.locale=function(t){var i=this.clone();return i.$l=t,i},i.clone=function(){return S(this.$ms,this)},i.humanize=function(t){return b().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},i.valueOf=function(){return this.asMilliseconds()},i.milliseconds=function(){return this.get("milliseconds")},i.asMilliseconds=function(){return this.as("milliseconds")},i.seconds=function(){return this.get("seconds")},i.asSeconds=function(){return this.as("seconds")},i.minutes=function(){return this.get("minutes")},i.asMinutes=function(){return this.as("minutes")},i.hours=function(){return this.get("hours")},i.asHours=function(){return this.as("hours")},i.days=function(){return this.get("days")},i.asDays=function(){return this.as("days")},i.weeks=function(){return this.get("weeks")},i.asWeeks=function(){return this.as("weeks")},i.months=function(){return this.get("months")},i.asMonths=function(){return this.as("months")},i.years=function(){return this.get("years")},i.asYears=function(){return this.as("years")},t}(),V=function(t,i,n){return t.add(i.years()*n,"y").add(i.months()*n,"M").add(i.days()*n,"d").add(i.hours()*n,"h").add(i.minutes()*n,"m").add(i.seconds()*n,"s").add(i.milliseconds()*n,"ms")},H=function(t,i,n){b=n,k=n().$utils(),n.duration=function(t,i){var e=n.locale();return S(t,{$l:e},i)},n.isDuration=$;var e=i.prototype.add,s=i.prototype.subtract;i.prototype.add=function(t,i){return $(t)?V(this,t,1):e.bind(this)(t,i)},i.prototype.subtract=function(t,i){return $(t)?V(this,t,-1):s.bind(this)(t,i)}};const N={second:1e3};N.minute=60*N.second,N.hour=60*N.minute,N.day=24*N.hour,N.week=7*N.day,N.month=30*N.day,N.year=365*N.day;const E={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},R=t=>t?"number"==typeof t?t:(t=(t=(t=>{const i=E,n=new RegExp("("+Object.keys(i).join("|")+")","g"),e=t.match(n);return e?(e.forEach(n=>{const e=i[n]>1?i[n]:i[n].toString().slice(1);t=t.replace(n,e)}),t):t})(t)).replace(/(second|minute|hour|day|week|month|year)s?(?! ?(s )?and |s?$)/,"$1,")).split(/and|,/).reduce((t,i)=>t+(i?(t=>{if(null===t.match(/(second|minute|hour|day|week|month|year)s?/))return;const i=parseFloat(t)||1,n=t.match(/(second|minute|hour|day|week|month|year)s?/)[1];return N[n]*i})(i):0),0):t;function F(t){return null==t?"":Object.entries({years:t.years(),months:t.months(),days:t.days(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds()}).filter(t=>0!==t[1]).map(t=>`${t[1]} ${1===t[1]?t[0].slice(0,-1):t[0]}`).join(" and ")}R.languageMap=E,y.extend(H);let P=class extends g{#t=null;get duration(){return this.#t}set duration(t){this.#t=t}#i="off";get autocomplete(){return this.#i}set autocomplete(t){this.#i=t}#n=!1;get spellcheck(){return this.#n}set spellcheck(t){this.#n=t}#e="3 hours and 30 minutes";get placeholder(){return this.#e}set placeholder(t){this.#e=t}#s="Duration";get label(){return this.#s}set label(t){this.#s=t}firstUpdated(){this.addEventListener("change",()=>{this.#r(this.input.value);const t=this.#u(this.input.value);t?.asMilliseconds()!=this.duration?.asMilliseconds()&&(this.duration=t,this.dispatchEvent(new Event("duration-change")))})}static{this.styles=t`
    :host {
      display: block;
    }

    md-outlined-text-field {
      width: 100%;
    }
  `}updated(t){t.has("duration")&&t.get("duration")!==this.duration&&(this.duration?this.value=F(this.duration):(this.duration=null,this.value=""))}checkValidity(){return super.checkValidity()&&this.#o(this.input.value)}reportValidity(){return this.#r(this.input.value),super.reportValidity()}#o(t){return!(t&&!this.#u(t))}#r(t){this.#o(t)?(this.error=!1,this.errorText=""):(this.error=!0,this.errorText='Duration was entered in an incorrect format. Try "3 hours and 30 minutes"')}#u(t){if(!t)return null;const i=R(t);return isNaN(i)?null:y.duration(i,"ms")}async reset(){super.reset(),this.error=!1,this.errorText="",this.duration=null}};i([n({type:Object})],P.prototype,"duration",null),i([n({reflect:!0,type:String})],P.prototype,"autocomplete",null),i([n({reflect:!0,type:Boolean})],P.prototype,"spellcheck",null),i([n({reflect:!0,type:String})],P.prototype,"placeholder",null),i([n({reflect:!0,type:String})],P.prototype,"label",null),P=i([e("titanium-duration-input")],P),y.extend(H);let U=class extends s{constructor(){super(...arguments),this.#t=null,this.label="Duration",this.placeholder="3 hours and 30 minutes",this.autocomplete="off",this.spellcheck=!1}#t;get duration(){return this.#t}set duration(t){this.#t=t}updated(t){t.has("duration")&&t.get("duration")!==this.duration&&(this.duration?this.value=F(this.duration):(this.duration=null,this.value=""))}firstUpdated(){this.addEventListener("change",()=>{this.reportValidity();const t=this.#u(this.value);t?.asMilliseconds()!=this.duration?.asMilliseconds()&&(this.duration=t,this.dispatchEvent(new Event("duration-change")))})}checkValidity(){return super.checkValidity()&&this.#o(this.value)}reportValidity(){return this.#o(this.value)?(this.error=!1,this.errorText=""):(this.error=!0,this.errorText='Duration was entered in an incorrect format. Try "3 hours and 30 minutes"'),super.reportValidity()}#o(t){return!(t&&!this.#u(t))}#u(t){if(!t)return null;const i=R(t);return isNaN(i)?null:y.duration(i,"ms")}async reset(){super.reset(),this.error=!1,this.errorText="",this.duration=null}static{this.styles=[...Array.isArray(s.styles)?s.styles:[s.styles],t`
      :host {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }
    `]}};i([n({type:Object})],U.prototype,"duration",null),i([n({type:String})],U.prototype,"label",void 0),i([n({type:String})],U.prototype,"placeholder",void 0),i([n({type:String})],U.prototype,"autocomplete",void 0),i([n({type:Boolean})],U.prototype,"spellcheck",void 0),U=i([e("titanium-filled-duration-input")],U),y.extend(H);let B=class extends r{constructor(){super(...arguments),this.#t=null,this.label="Duration",this.supportingText='Enter a duration ex. "3 hours and 30 minutes"',this.autocomplete="off",this.spellcheck=!1}#t;get duration(){return this.#t}set duration(t){this.#t=t}updated(t){t.has("duration")&&t.get("duration")!==this.duration&&(this.duration?this.value=F(this.duration):(this.duration=null,this.value=""))}firstUpdated(){this.addEventListener("change",()=>{this.reportValidity();const t=this.#u(this.value);t?.asMilliseconds()!=this.duration?.asMilliseconds()&&(this.duration=t,this.dispatchEvent(new Event("duration-change")))})}checkValidity(){return super.checkValidity()&&this.#o(this.value)}reportValidity(){return this.#o(this.value)?(this.error=!1,this.errorText=""):(this.error=!0,this.errorText='Duration was entered in an incorrect format. Try "3 hours and 30 minutes"'),super.reportValidity()}#o(t){return!(t&&!this.#u(t))}#u(t){if(!t)return null;const i=R(t);return isNaN(i)?null:y.duration(i,"ms")}async reset(){super.reset(),this.error=!1,this.errorText="",this.duration=null}};i([n({type:Object})],B.prototype,"duration",null),i([n({type:String})],B.prototype,"label",void 0),i([n({type:String})],B.prototype,"supportingText",void 0),i([n({type:String})],B.prototype,"autocomplete",void 0),i([n({type:Boolean})],B.prototype,"spellcheck",void 0),B=i([e("titanium-outlined-duration-input")],B),y.extend(H);let C=class extends u{#a=y.duration(14400);get filledDuration(){return this.#a}set filledDuration(t){this.#a=t}#h=y.duration(14400);get outlinedDuration(){return this.#h}set outlinedDuration(t){this.#h=t}#l;get filledInput(){return this.#l}set filledInput(t){this.#l=t}#d;get outlinedInput(){return this.#d}set outlinedInput(t){this.#d=t}static{this.styles=[l,t`
      titanium-filled-duration-input,
      titanium-outlined-duration-input {
        width: 100%;
        margin-bottom: 24px;
      }
    `]}render(){return o`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium duration input" level1Href="/titanium-duration-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p>
                <kbd>titanium-duration-input</kbd> is deprecated. Use <kbd>titanium-filled-duration-input</kbd> or
                <kbd>titanium-outlined-duration-input</kbd> instead (shown below).
              </p>
            </deprecation-notice>
            <story-header name="Titanium filled duration input" className="TitaniumFilledDurationInput"></story-header>

            <div>
              <h1>Filled duration input</h1>

              <titanium-filled-duration-input
                required
                label="Filled Duration"
                .duration=${this.filledDuration}
                @change=${t=>{this.filledDuration=t.target.duration}}
              ></titanium-filled-duration-input>
              <br />

              <section buttons>
                <md-filled-tonal-button
                  @click=${()=>{this.filledInput.reset()}}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.filledInput.focus()}}
                  >Focus</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.filledInput.reportValidity()}}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-duration-input"></api-docs>

            <md-divider></md-divider>

            <story-header name="Titanium outlined duration input" className="TitaniumOutlinedDurationInput"></story-header>

            <div>
              <h1>Outlined duration input</h1>

              <titanium-outlined-duration-input
                required
                label="Outlined Duration"
                .duration=${this.outlinedDuration}
                @change=${t=>{this.outlinedDuration=t.target.duration}}
              ></titanium-outlined-duration-input>

              <section buttons>
                <md-filled-tonal-button
                  @click=${()=>{this.outlinedInput.reset()}}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.outlinedInput.focus()}}
                  >Focus</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.outlinedInput.reportValidity()}}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>With different durations</h1>
              <titanium-outlined-duration-input label="1 hour" .duration=${y.duration(3600)}></titanium-outlined-duration-input>
              <titanium-outlined-duration-input label="30 minutes" .duration=${y.duration(1800)}></titanium-outlined-duration-input>
              <titanium-outlined-duration-input label="2 hours 30 min" .duration=${y.duration(9e3)}></titanium-outlined-duration-input>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-outlined-duration-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};i([a()],C.prototype,"filledDuration",null),i([a()],C.prototype,"outlinedDuration",null),i([h("titanium-filled-duration-input")],C.prototype,"filledInput",null),i([h("titanium-outlined-duration-input")],C.prototype,"outlinedInput",null),C=i([e("titanium-duration-input-demo")],C);export{C as TitaniumDurationInputDemo};
