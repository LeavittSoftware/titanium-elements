import{c as t,_ as i,n,t as e,ay as s,i as r,h as u,p as o,x as a,r as h,e as d}from"./BF9KQ0mY.js";import{S as l}from"./DXaJJx1J.js";import{a as c,b as p,c as m,e as f,f as g,R as y,d as v}from"./fEBq_QNq.js";import{E as b}from"./DBI2Eh_k.js";import{M as x}from"./liJGpnRE.js";import"./iTE8CZYn.js";var k,D,$=365*g,_=$/12,w=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,S={years:$,months:_,days:g,hours:f,minutes:m,seconds:p,milliseconds:1,weeks:c},T=function(t){return t instanceof R},j=function(t,i,n){return new R(t,n,i.$l)},M=function(t){return D.p(t)+"s"},I=function(t){return t<0},Y=function(t){return I(t)?Math.ceil(t):Math.floor(t)},V=function(t){return Math.abs(t)},q=function(t,i){return t?I(t)?{negative:!0,format:""+V(t)+i}:{negative:!1,format:""+t+i}:{negative:!1,format:""}},R=function(){function t(t,i,n){var e=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),i)return j(t*S[M(i)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach(function(i){e.$d[M(i)]=t[i]}),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(w);if(s){var r=s.slice(2).map(function(t){return null!=t?Number(t):0});return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var i=t.prototype;return i.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(i,n){return i+(t.$d[n]||0)*S[n]},0)},i.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=Y(t/$),t%=$,this.$d.months=Y(t/_),t%=_,this.$d.days=Y(t/g),t%=g,this.$d.hours=Y(t/f),t%=f,this.$d.minutes=Y(t/m),t%=m,this.$d.seconds=Y(t/p),t%=p,this.$d.milliseconds=t},i.toISOString=function(){var t=q(this.$d.years,"Y"),i=q(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var e=q(n,"D"),s=q(this.$d.hours,"H"),r=q(this.$d.minutes,"M"),u=this.$d.seconds||0;this.$d.milliseconds&&(u+=this.$d.milliseconds/1e3,u=Math.round(1e3*u)/1e3);var o=q(u,"S"),a=t.negative||i.negative||e.negative||s.negative||r.negative||o.negative,h=s.format||r.format||o.format?"T":"",d=(a?"-":"")+"P"+t.format+i.format+e.format+h+s.format+r.format+o.format;return"P"===d||"-P"===d?"P0D":d},i.toJSON=function(){return this.toISOString()},i.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:D.s(this.$d.years,2,"0"),YYYY:D.s(this.$d.years,4,"0"),M:this.$d.months,MM:D.s(this.$d.months,2,"0"),D:this.$d.days,DD:D.s(this.$d.days,2,"0"),H:this.$d.hours,HH:D.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:D.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:D.s(this.$d.seconds,2,"0"),SSS:D.s(this.$d.milliseconds,3,"0")};return i.replace(y,function(t,i){return i||String(n[t])})},i.as=function(t){return this.$ms/S[M(t)]},i.get=function(t){var i=this.$ms,n=M(t);return"milliseconds"===n?i%=1e3:i="weeks"===n?Y(i/S[n]):this.$d[n],i||0},i.add=function(t,i,n){var e;return e=i?t*S[M(i)]:T(t)?t.$ms:j(t,this).$ms,j(this.$ms+e*(n?-1:1),this)},i.subtract=function(t,i){return this.add(t,i,!0)},i.locale=function(t){var i=this.clone();return i.$l=t,i},i.clone=function(){return j(this.$ms,this)},i.humanize=function(t){return k().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},i.valueOf=function(){return this.asMilliseconds()},i.milliseconds=function(){return this.get("milliseconds")},i.asMilliseconds=function(){return this.as("milliseconds")},i.seconds=function(){return this.get("seconds")},i.asSeconds=function(){return this.as("seconds")},i.minutes=function(){return this.get("minutes")},i.asMinutes=function(){return this.as("minutes")},i.hours=function(){return this.get("hours")},i.asHours=function(){return this.as("hours")},i.days=function(){return this.get("days")},i.asDays=function(){return this.as("days")},i.weeks=function(){return this.get("weeks")},i.asWeeks=function(){return this.as("weeks")},i.months=function(){return this.get("months")},i.asMonths=function(){return this.as("months")},i.years=function(){return this.get("years")},i.asYears=function(){return this.as("years")},t}(),N=function(t,i,n){return t.add(i.years()*n,"y").add(i.months()*n,"M").add(i.days()*n,"d").add(i.hours()*n,"h").add(i.minutes()*n,"m").add(i.seconds()*n,"s").add(i.milliseconds()*n,"ms")},O=function(t,i,n){k=n,D=n().$utils(),n.duration=function(t,i){var e=n.locale();return j(t,{$l:e},i)},n.isDuration=T;var e=i.prototype.add,s=i.prototype.subtract;i.prototype.add=function(t,i){return T(t)?N(this,t,1):e.bind(this)(t,i)},i.prototype.subtract=function(t,i){return T(t)?N(this,t,-1):s.bind(this)(t,i)}};const H={second:1e3};H.minute=60*H.second,H.hour=60*H.minute,H.day=24*H.hour,H.week=7*H.day,H.month=30*H.day,H.year=365*H.day;const C={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},E=t=>t?"number"==typeof t?t:(t=(t=(t=>{const i=C,n=new RegExp("("+Object.keys(i).join("|")+")","g"),e=t.match(n);return e?(e.forEach(n=>{const e=i[n]>1?i[n]:i[n].toString().slice(1);t=t.replace(n,e)}),t):t})(t)).replace(/(second|minute|hour|day|week|month|year)s?(?! ?(s )?and |s?$)/,"$1,")).split(/and|,/).reduce((t,i)=>t+(i?(t=>{if(null===t.match(/(second|minute|hour|day|week|month|year)s?/))return;const i=parseFloat(t)||1,n=t.match(/(second|minute|hour|day|week|month|year)s?/)[1];return H[n]*i})(i):0),0):t;function P(t){return null==t?"":Object.entries({years:t.years(),months:t.months(),days:t.days(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds()}).filter(t=>0!==t[1]).map(t=>`${t[1]} ${1===t[1]?t[0].slice(0,-1):t[0]}`).join(" and ")}E.languageMap=C,v.extend(O);let U=class extends b{#t=null;get duration(){return this.#t}set duration(t){this.#t=t}#i="off";get autocomplete(){return this.#i}set autocomplete(t){this.#i=t}#n=!1;get spellcheck(){return this.#n}set spellcheck(t){this.#n=t}#e="3 hours and 30 minutes";get placeholder(){return this.#e}set placeholder(t){this.#e=t}#s="Duration";get label(){return this.#s}set label(t){this.#s=t}firstUpdated(){this.addEventListener("change",()=>{this.#r(this.input.value);const t=this.#u(this.input.value);t?.asMilliseconds()!=this.duration?.asMilliseconds()&&(this.duration=t,this.dispatchEvent(new Event("duration-change")))})}static{this.styles=t`
    :host {
      display: block;
    }

    md-outlined-text-field {
      width: 100%;
    }
  `}updated(t){t.has("duration")&&t.get("duration")!==this.duration&&(this.duration?this.value=P(this.duration):(this.duration=null,this.value=""))}checkValidity(){return super.checkValidity()&&this.#o(this.input.value)}reportValidity(){return this.#r(this.input.value),super.reportValidity()}#o(t){return!(t&&!this.#u(t))}#r(t){this.#o(t)?(this.error=!1,this.errorText=""):(this.error=!0,this.errorText='Duration was entered in an incorrect format. Try "3 hours and 30 minutes"')}#u(t){if(!t)return null;const i=E(t);return isNaN(i)?null:v.duration(i,"ms")}async reset(){super.reset(),this.error=!1,this.errorText="",this.duration=null}};i([n({type:Object})],U.prototype,"duration",null),i([n({reflect:!0,type:String})],U.prototype,"autocomplete",null),i([n({reflect:!0,type:Boolean})],U.prototype,"spellcheck",null),i([n({reflect:!0,type:String})],U.prototype,"placeholder",null),i([n({reflect:!0,type:String})],U.prototype,"label",null),U=i([e("titanium-duration-input")],U),v.extend(O);let B=class extends x{constructor(){super(...arguments),this.#t=null,this.label="Duration",this.placeholder="3 hours and 30 minutes",this.autocomplete="off",this.spellcheck=!1}#t;get duration(){return this.#t}set duration(t){this.#t=t}updated(t){t.has("duration")&&t.get("duration")!==this.duration&&(this.duration?this.value=P(this.duration):(this.duration=null,this.value=""))}firstUpdated(){this.addEventListener("change",()=>{this.reportValidity();const t=this.#u(this.value);t?.asMilliseconds()!=this.duration?.asMilliseconds()&&(this.duration=t,this.dispatchEvent(new Event("duration-change")))})}checkValidity(){return super.checkValidity()&&this.#o(this.value)}reportValidity(){return this.#o(this.value)?(this.error=!1,this.errorText=""):(this.error=!0,this.errorText='Duration was entered in an incorrect format. Try "3 hours and 30 minutes"'),super.reportValidity()}#o(t){return!(t&&!this.#u(t))}#u(t){if(!t)return null;const i=E(t);return isNaN(i)?null:v.duration(i,"ms")}async reset(){super.reset(),this.error=!1,this.errorText="",this.duration=null}static{this.styles=[...Array.isArray(x.styles)?x.styles:[x.styles],t`
      :host {
       --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }
    `]}};i([n({type:Object})],B.prototype,"duration",null),i([n({type:String})],B.prototype,"label",void 0),i([n({type:String})],B.prototype,"placeholder",void 0),i([n({type:String})],B.prototype,"autocomplete",void 0),i([n({type:Boolean})],B.prototype,"spellcheck",void 0),B=i([e("titanium-filled-duration-input")],B),v.extend(O);let F=class extends s{constructor(){super(...arguments),this.#t=null,this.label="Duration",this.supportingText='Enter a duration ex. "3 hours and 30 minutes"',this.autocomplete="off",this.spellcheck=!1}#t;get duration(){return this.#t}set duration(t){this.#t=t}updated(t){t.has("duration")&&t.get("duration")!==this.duration&&(this.duration?this.value=P(this.duration):(this.duration=null,this.value=""))}firstUpdated(){this.addEventListener("change",()=>{this.reportValidity();const t=this.#u(this.value);t?.asMilliseconds()!=this.duration?.asMilliseconds()&&(this.duration=t,this.dispatchEvent(new Event("duration-change")))})}checkValidity(){return super.checkValidity()&&this.#o(this.value)}reportValidity(){return this.#o(this.value)?(this.error=!1,this.errorText=""):(this.error=!0,this.errorText='Duration was entered in an incorrect format. Try "3 hours and 30 minutes"'),super.reportValidity()}#o(t){return!(t&&!this.#u(t))}#u(t){if(!t)return null;const i=E(t);return isNaN(i)?null:v.duration(i,"ms")}async reset(){super.reset(),this.error=!1,this.errorText="",this.duration=null}};i([n({type:Object})],F.prototype,"duration",null),i([n({type:String})],F.prototype,"label",void 0),i([n({type:String})],F.prototype,"supportingText",void 0),i([n({type:String})],F.prototype,"autocomplete",void 0),i([n({type:Boolean})],F.prototype,"spellcheck",void 0),F=i([e("titanium-outlined-duration-input")],F),v.extend(O);let z=class extends r{#t=v.duration(14400);get duration(){return this.#t}set duration(t){this.#t=t}#a=v.duration(14400);get filledDuration(){return this.#a}set filledDuration(t){this.#a=t}#h=v.duration(14400);get outlinedDuration(){return this.#h}set outlinedDuration(t){this.#h=t}#d;get input(){return this.#d}set input(t){this.#d=t}#l;get filledInput(){return this.#l}set filledInput(t){this.#l=t}#c;get outlinedInput(){return this.#c}set outlinedInput(t){this.#c=t}static{this.styles=[u,o,t`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }
      
      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      p {
        margin-top: 24px;
      }
    `]}render(){return a`
      <h1>Titanium duration input (deprecated)</h1>
      <div>
        <titanium-duration-input
          .duration=${this.duration}
          required
          validationMessage="This duration is required"
          label="Duration"
          @duration-change=${t=>{this.duration=t.target.duration}}
        ></titanium-duration-input>
        <p>Duration is: ${this.duration?a`${this.duration.asSeconds()} seconds`:String(this.duration)}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${()=>this.input.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${()=>this.input.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${()=>this.input.required=!this.input.required}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${()=>console.log(this.input.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>

      <h1>Outlined duration input</h1>
      <div>
        <titanium-outlined-duration-input
          .duration=${this.outlinedDuration}
          required
          validationMessage="This duration is required"
          label="Duration"
          @duration-change=${t=>{this.outlinedDuration=t.target.duration}}
        ></titanium-outlined-duration-input>
        <p>Duration is: ${this.outlinedDuration?a`${this.outlinedDuration.asSeconds()} seconds`:String(this.outlinedDuration)}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${()=>this.outlinedInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${()=>this.outlinedInput.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${()=>this.outlinedInput.required=!this.outlinedInput.required}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${()=>console.log(this.outlinedInput.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>

      <h1>Filled duration input</h1>
      <div>
        <titanium-filled-duration-input
          .duration=${this.filledDuration}
          required
          validationMessage="This duration is required"
          label="Duration"
          @duration-change=${t=>{this.filledDuration=t.target.duration}}
        ></titanium-filled-duration-input>
        <p>Duration is: ${this.filledDuration?a`${this.filledDuration.asSeconds()} seconds`:String(this.filledDuration)}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${()=>this.filledInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${()=>this.filledInput.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${()=>this.filledInput.required=!this.filledInput.required}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${()=>console.log(this.filledInput.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>
    `}};i([h()],z.prototype,"duration",null),i([h()],z.prototype,"filledDuration",null),i([h()],z.prototype,"outlinedDuration",null),i([d("titanium-duration-input")],z.prototype,"input",null),i([d("titanium-filled-duration-input")],z.prototype,"filledInput",null),i([d("titanium-outlined-duration-input")],z.prototype,"outlinedInput",null),z=i([e("titanium-duration-input-playground")],z);let A=class extends r{static{this.styles=[l,t``]}render(){return a`
      <story-header name="Titanium Duration Input" className="TitaniumDurationInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-duration-input/project.json"
        ><titanium-duration-input-playground></titanium-duration-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-duration-input"></api-docs>
    `}};A=i([e("titanium-duration-input-demo")],A);export{A as TitaniumDurationInputDemo};
