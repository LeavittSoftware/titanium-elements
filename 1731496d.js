import{i as t,_ as i,n,t as s,s as r,h as e,p as u,x as o,r as h,e as a}from"./f43924bd.js";import{S as d}from"./1c8b19cb.js";import{R as c,a as m,b as l,c as p,e as f,f as y,d as v}from"./5f341198.js";import{E as g}from"./a1524b94.js";import"./3286da59.js";import"./68491de3.js";import"./d8fb47ea.js";import"./75986af6.js";import"./72abf9b4.js";import"./c47213b1.js";import"./08f0fa74.js";import"./d49dec57.js";import"./f42dd0a8.js";import"./27c9cb5c.js";import"./f7d1f7f2.js";import"./ff84c309.js";var b,j,x=365*m,w=x/12,D=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,k={years:x,months:w,days:m,hours:l,minutes:p,seconds:f,milliseconds:1,weeks:y},M=function(t){return t instanceof P},$=function(t,i,n){return new P(t,n,i.$l)},Y=function(t){return j.p(t)+"s"},T=function(t){return t<0},S=function(t){return T(t)?Math.ceil(t):Math.floor(t)},H=function(t){return Math.abs(t)},I=function(t,i){return t?T(t)?{negative:!0,format:""+H(t)+i}:{negative:!1,format:""+t+i}:{negative:!1,format:""}},P=function(){function t(t,i,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),i)return $(t*k[Y(i)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(i){s.$d[Y(i)]=t[i]})),this.calMilliseconds(),this;if("string"==typeof t){var r=t.match(D);if(r){var e=r.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=e[0],this.$d.months=e[1],this.$d.weeks=e[2],this.$d.days=e[3],this.$d.hours=e[4],this.$d.minutes=e[5],this.$d.seconds=e[6],this.calMilliseconds(),this}}return this}var i=t.prototype;return i.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(i,n){return i+(t.$d[n]||0)*k[n]}),0)},i.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=S(t/x),t%=x,this.$d.months=S(t/w),t%=w,this.$d.days=S(t/m),t%=m,this.$d.hours=S(t/l),t%=l,this.$d.minutes=S(t/p),t%=p,this.$d.seconds=S(t/f),t%=f,this.$d.milliseconds=t},i.toISOString=function(){var t=I(this.$d.years,"Y"),i=I(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=I(n,"D"),r=I(this.$d.hours,"H"),e=I(this.$d.minutes,"M"),u=this.$d.seconds||0;this.$d.milliseconds&&(u+=this.$d.milliseconds/1e3,u=Math.round(1e3*u)/1e3);var o=I(u,"S"),h=t.negative||i.negative||s.negative||r.negative||e.negative||o.negative,a=r.format||e.format||o.format?"T":"",d=(h?"-":"")+"P"+t.format+i.format+s.format+a+r.format+e.format+o.format;return"P"===d||"-P"===d?"P0D":d},i.toJSON=function(){return this.toISOString()},i.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:j.s(this.$d.years,2,"0"),YYYY:j.s(this.$d.years,4,"0"),M:this.$d.months,MM:j.s(this.$d.months,2,"0"),D:this.$d.days,DD:j.s(this.$d.days,2,"0"),H:this.$d.hours,HH:j.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:j.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:j.s(this.$d.seconds,2,"0"),SSS:j.s(this.$d.milliseconds,3,"0")};return i.replace(c,(function(t,i){return i||String(n[t])}))},i.as=function(t){return this.$ms/k[Y(t)]},i.get=function(t){var i=this.$ms,n=Y(t);return"milliseconds"===n?i%=1e3:i="weeks"===n?S(i/k[n]):this.$d[n],i||0},i.add=function(t,i,n){var s;return s=i?t*k[Y(i)]:M(t)?t.$ms:$(t,this).$ms,$(this.$ms+s*(n?-1:1),this)},i.subtract=function(t,i){return this.add(t,i,!0)},i.locale=function(t){var i=this.clone();return i.$l=t,i},i.clone=function(){return $(this.$ms,this)},i.humanize=function(t){return b().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},i.valueOf=function(){return this.asMilliseconds()},i.milliseconds=function(){return this.get("milliseconds")},i.asMilliseconds=function(){return this.as("milliseconds")},i.seconds=function(){return this.get("seconds")},i.asSeconds=function(){return this.as("seconds")},i.minutes=function(){return this.get("minutes")},i.asMinutes=function(){return this.as("minutes")},i.hours=function(){return this.get("hours")},i.asHours=function(){return this.as("hours")},i.days=function(){return this.get("days")},i.asDays=function(){return this.as("days")},i.weeks=function(){return this.get("weeks")},i.asWeeks=function(){return this.as("weeks")},i.months=function(){return this.get("months")},i.asMonths=function(){return this.as("months")},i.years=function(){return this.get("years")},i.asYears=function(){return this.as("years")},t}(),q=function(t,i,n){return t.add(i.years()*n,"y").add(i.months()*n,"M").add(i.days()*n,"d").add(i.hours()*n,"h").add(i.minutes()*n,"m").add(i.seconds()*n,"s").add(i.milliseconds()*n,"ms")},_=function(t,i,n){b=n,j=n().$utils(),n.duration=function(t,i){var s=n.locale();return $(t,{$l:s},i)},n.isDuration=M;var s=i.prototype.add,r=i.prototype.subtract;i.prototype.add=function(t,i){return M(t)?q(this,t,1):s.bind(this)(t,i)},i.prototype.subtract=function(t,i){return M(t)?q(this,t,-1):r.bind(this)(t,i)}};const R={second:1e3};R.minute=60*R.second,R.hour=60*R.minute,R.day=24*R.hour,R.week=7*R.day,R.month=30*R.day,R.year=365*R.day;const O={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},V=t=>t?"number"==typeof t?t:(t=(t=(t=>{const i=O,n=new RegExp("("+Object.keys(i).join("|")+")","g"),s=t.match(n);return s?(s.forEach((n=>{const s=i[n]>1?i[n]:i[n].toString().slice(1);t=t.replace(n,s)})),t):t})(t)).replace(/(second|minute|hour|day|week|month|year)s?(?! ?(s )?and |s?$)/,"$1,")).split(/and|,/).reduce(((t,i)=>t+(i?(t=>{if(null===t.match(/(second|minute|hour|day|week|month|year)s?/))return;const i=parseFloat(t)||1,n=t.match(/(second|minute|hour|day|week|month|year)s?/)[1];return R[n]*i})(i):0)),0):t;V.languageMap=O,v.extend(_);let E=class extends g{#t=null;get duration(){return this.#t}set duration(t){this.#t=t}firstUpdated(){this.label="Duration",this.supportingText='Enter a duration ex. "3 hours and 30 minutes"',this.addEventListener("change",(()=>{this.#i(this.input.value);const t=this.#n(this.input.value);t?.asMilliseconds()!=this.duration?.asMilliseconds()&&(this.duration=t,this.dispatchEvent(new Event("duration-change")))}))}static{this.styles=t`
    :host {
      display: block;
    }

    md-outlined-text-field {
      width: 100%;
    }
  `}updated(t){var i;t.has("duration")&&t.get("duration")!==this.duration&&(this.duration?this.value=null==(i=this.duration)?"":Object.entries({years:i.years(),months:i.months(),days:i.days(),hours:i.hours(),minutes:i.minutes(),seconds:i.seconds()}).filter((t=>0!==t[1])).map((t=>`${t[1]} ${1===t[1]?t[0].slice(0,-1):t[0]}`)).join(" and "):(this.duration=null,this.value=""))}checkValidity(){return super.checkValidity()&&this.#s(this.input.value)}reportValidity(){return this.#i(this.input.value),super.reportValidity()}#s(t){return!(t&&!this.#n(t))}#i(t){this.#s(t)?(this.error=!1,this.errorText=""):(this.error=!0,this.errorText='Duration was entered in an incorrect format. Try "3 hours and 30 minutes"')}#n(t){if(!t)return null;const i=V(t);return isNaN(i)?null:v.duration(i,"ms")}async reset(){super.reset(),this.error=!1,this.errorText="",this.duration=null}};i([n({type:Object})],E.prototype,"duration",null),E=i([s("titanium-duration-input")],E),v.extend(_);let N=class extends r{#t=v.duration(14400);get duration(){return this.#t}set duration(t){this.#t=t}#r;get requiredInput(){return this.#r}set requiredInput(t){this.#r=t}static{this.styles=[e,u,t`
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
    `]}render(){return o`
      <h1>Default</h1>
      <div>
        <titanium-duration-input
          label="Duration"
          helperPersistent
          .duration=${this.duration}
          outlined
          @duration-change=${t=>{this.duration=t.target.duration}}
        ></titanium-duration-input>
        <p>Duration is: ${this.duration?o`${this.duration.asSeconds()} seconds`:String(this.duration)}</p>
      </div>

      <h1>Demo</h1>
      <div>
        <titanium-duration-input demo required validationMessage="This duration is required" label="Duration" helperPersistent outlined
          ><md-icon slot="leading-icon"> timer </md-icon>
          <md-icon slot="trailing-icon"> timer </md-icon>
        </titanium-duration-input>
        <br />
        <section buttons>
          <md-outlined-button @click=${()=>this.requiredInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${()=>this.requiredInput.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${()=>this.requiredInput.required=!this.requiredInput.required}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${()=>console.log(this.requiredInput.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>
    `}};i([h()],N.prototype,"duration",null),i([a("titanium-duration-input[demo]")],N.prototype,"requiredInput",null),N=i([s("titanium-duration-input-playground")],N);let C=class extends r{static{this.styles=[d,t``]}render(){return o`
      <story-header name="Titanium Duration Input" className="TitaniumDurationInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-duration-input/project.json"
        ><titanium-duration-input-playground></titanium-duration-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-duration-input"></api-docs>
    `}};C=i([s("titanium-duration-input-demo")],C);export{C as TitaniumDurationInputDemo};
