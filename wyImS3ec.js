import{ar as t,b as i,_ as n,n as e,t as s,i as r,c as u,r as o,e as a}from"./CyOMU7b-.js";import{S as h}from"./DayneWRO.js";import"./D528NSl_.js";import"./jB0Bcmk4.js";import{a as l,b as d,c,e as f,f as m,d as p}from"./CuDVc1pF.js";var v,y,g=365*m,b=g/12,Y=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,x=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,D={years:g,months:b,days:m,hours:f,minutes:c,seconds:d,milliseconds:1,weeks:l},w=function(t){return t instanceof T},M=function(t,i,n){return new T(t,n,i.$l)},$=function(t){return y.p(t)+"s"},k=function(t){return t<0},S=function(t){return k(t)?Math.ceil(t):Math.floor(t)},j=function(t){return Math.abs(t)},H=function(t,i){return t?k(t)?{negative:!0,format:""+j(t)+i}:{negative:!1,format:""+t+i}:{negative:!1,format:""}},T=function(){function t(t,i,n){var e=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),i)return M(t*D[$(i)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach(function(i){e.$d[$(i)]=t[i]}),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(Y);if(s){var r=s.slice(2).map(function(t){return null!=t?Number(t):0});return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var i=t.prototype;return i.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(i,n){return i+(t.$d[n]||0)*D[n]},0)},i.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=S(t/g),t%=g,this.$d.months=S(t/b),t%=b,this.$d.days=S(t/m),t%=m,this.$d.hours=S(t/f),t%=f,this.$d.minutes=S(t/c),t%=c,this.$d.seconds=S(t/d),t%=d,this.$d.milliseconds=t},i.toISOString=function(){var t=H(this.$d.years,"Y"),i=H(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var e=H(n,"D"),s=H(this.$d.hours,"H"),r=H(this.$d.minutes,"M"),u=this.$d.seconds||0;this.$d.milliseconds&&(u+=this.$d.milliseconds/1e3,u=Math.round(1e3*u)/1e3);var o=H(u,"S"),a=t.negative||i.negative||e.negative||s.negative||r.negative||o.negative,h=s.format||r.format||o.format?"T":"",l=(a?"-":"")+"P"+t.format+i.format+e.format+h+s.format+r.format+o.format;return"P"===l||"-P"===l?"P0D":l},i.toJSON=function(){return this.toISOString()},i.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:y.s(this.$d.years,2,"0"),YYYY:y.s(this.$d.years,4,"0"),M:this.$d.months,MM:y.s(this.$d.months,2,"0"),D:this.$d.days,DD:y.s(this.$d.days,2,"0"),H:this.$d.hours,HH:y.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:y.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:y.s(this.$d.seconds,2,"0"),SSS:y.s(this.$d.milliseconds,3,"0")};return i.replace(x,function(t,i){return i||String(n[t])})},i.as=function(t){return this.$ms/D[$(t)]},i.get=function(t){var i=this.$ms,n=$(t);return"milliseconds"===n?i%=1e3:i="weeks"===n?S(i/D[n]):this.$d[n],i||0},i.add=function(t,i,n){var e;return e=i?t*D[$(i)]:w(t)?t.$ms:M(t,this).$ms,M(this.$ms+e*(n?-1:1),this)},i.subtract=function(t,i){return this.add(t,i,!0)},i.locale=function(t){var i=this.clone();return i.$l=t,i},i.clone=function(){return M(this.$ms,this)},i.humanize=function(t){return v().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},i.valueOf=function(){return this.asMilliseconds()},i.milliseconds=function(){return this.get("milliseconds")},i.asMilliseconds=function(){return this.as("milliseconds")},i.seconds=function(){return this.get("seconds")},i.asSeconds=function(){return this.as("seconds")},i.minutes=function(){return this.get("minutes")},i.asMinutes=function(){return this.as("minutes")},i.hours=function(){return this.get("hours")},i.asHours=function(){return this.as("hours")},i.days=function(){return this.get("days")},i.asDays=function(){return this.as("days")},i.weeks=function(){return this.get("weeks")},i.asWeeks=function(){return this.as("weeks")},i.months=function(){return this.get("months")},i.asMonths=function(){return this.as("months")},i.years=function(){return this.get("years")},i.asYears=function(){return this.as("years")},t}(),_=function(t,i,n){return t.add(i.years()*n,"y").add(i.months()*n,"M").add(i.days()*n,"d").add(i.hours()*n,"h").add(i.minutes()*n,"m").add(i.seconds()*n,"s").add(i.milliseconds()*n,"ms")},I=function(t,i,n){v=n,y=n().$utils(),n.duration=function(t,i){var e=n.locale();return M(t,{$l:e},i)},n.isDuration=w;var e=i.prototype.add,s=i.prototype.subtract;i.prototype.add=function(t,i){return w(t)?_(this,t,1):e.bind(this)(t,i)},i.prototype.subtract=function(t,i){return w(t)?_(this,t,-1):s.bind(this)(t,i)}};const F={second:1e3};F.minute=60*F.second,F.hour=60*F.minute,F.day=24*F.hour,F.week=7*F.day,F.month=30*F.day,F.year=365*F.day;const O={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},P=t=>t?"number"==typeof t?t:(t=(t=(t=>{const i=O,n=new RegExp("("+Object.keys(i).join("|")+")","g"),e=t.match(n);return e?(e.forEach(n=>{const e=i[n]>1?i[n]:i[n].toString().slice(1);t=t.replace(n,e)}),t):t})(t)).replace(/(second|minute|hour|day|week|month|year)s?(?! ?(s )?and |s?$)/,"$1,")).split(/and|,/).reduce((t,i)=>t+(i?(t=>{if(null===t.match(/(second|minute|hour|day|week|month|year)s?/))return;const i=parseFloat(t)||1,n=t.match(/(second|minute|hour|day|week|month|year)s?/)[1];return F[n]*i})(i):0),0):t;P.languageMap=O,p.extend(I);let N=class extends t{constructor(){super(...arguments),this.#t=null,this.label="Duration",this.placeholder="3 hours and 30 minutes",this.autocomplete="off",this.spellcheck=!1}#t;get duration(){return this.#t}set duration(t){this.#t=t}updated(t){var i;t.has("duration")&&t.get("duration")!==this.duration&&(this.duration?this.value=null==(i=this.duration)?"":Object.entries({years:i.years(),months:i.months(),days:i.days(),hours:i.hours(),minutes:i.minutes(),seconds:i.seconds()}).filter(t=>0!==t[1]).map(t=>`${t[1]} ${1===t[1]?t[0].slice(0,-1):t[0]}`).join(" and "):(this.duration=null,this.value=""))}firstUpdated(){this.addEventListener("change",()=>{this.reportValidity();const t=this.#i(this.value);t?.asMilliseconds()!=this.duration?.asMilliseconds()&&(this.duration=t,this.dispatchEvent(new Event("duration-change")))})}checkValidity(){return super.checkValidity()&&this.#n(this.value)}reportValidity(){return this.#n(this.value)?(this.error=!1,this.errorText=""):(this.error=!0,this.errorText='Duration was entered in an incorrect format. Try "3 hours and 30 minutes"'),super.reportValidity()}#n(t){return!(t&&!this.#i(t))}#i(t){if(!t)return null;const i=P(t);return isNaN(i)?null:p.duration(i,"ms")}async reset(){super.reset(),this.error=!1,this.errorText="",this.duration=null}static{this.styles=[...Array.isArray(t.styles)?t.styles:[t.styles],i`
      :host {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }
    `]}};n([e({type:Object})],N.prototype,"duration",null),n([e({type:String})],N.prototype,"label",void 0),n([e({type:String})],N.prototype,"placeholder",void 0),n([e({type:String})],N.prototype,"autocomplete",void 0),n([e({type:Boolean})],N.prototype,"spellcheck",void 0),N=n([s("titanium-filled-duration-input")],N),p.extend(I);let E=class extends r{#e=p.duration(14400);get filledDuration(){return this.#e}set filledDuration(t){this.#e=t}#s;get filledInput(){return this.#s}set filledInput(t){this.#s=t}static{this.styles=[h,i`
      titanium-filled-duration-input {
        width: 100%;
        margin-bottom: 24px;
      }
    `]}render(){return u`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium duration input" level1Href="/titanium-duration-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
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

            <div>
              <h1>With different durations</h1>
              <titanium-filled-duration-input label="1 hour" .duration=${p.duration(3600)}></titanium-filled-duration-input>
              <titanium-filled-duration-input label="30 minutes" .duration=${p.duration(1800)}></titanium-filled-duration-input>
              <titanium-filled-duration-input label="2 hours 30 min" .duration=${p.duration(9e3)}></titanium-filled-duration-input>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-duration-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};n([o()],E.prototype,"filledDuration",null),n([a("titanium-filled-duration-input[required]")],E.prototype,"filledInput",null),E=n([s("titanium-duration-input-demo")],E);export{E as TitaniumDurationInputDemo};
