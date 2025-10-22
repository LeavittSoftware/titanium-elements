import{c as t,_ as i,n,t as s,i as e,h as r,p as u,x as o,r as a,e as h}from"./D1VSxa58.js";import{S as c}from"./8Xb6ke5I.js";import{a as d,b as l,c as m,e as f,f as p,R as y,d as g}from"./fEBq_QNq.js";import{E as v}from"./dfztzt7q.js";import"./BKA6Xqhf.js";var b,x,k=365*p,w=k/12,D=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,j={years:k,months:w,days:p,hours:f,minutes:m,seconds:l,milliseconds:1,weeks:d},M=function(t){return t instanceof H},$=function(t,i,n){return new H(t,n,i.$l)},Y=function(t){return x.p(t)+"s"},_=function(t){return t<0},S=function(t){return _(t)?Math.ceil(t):Math.floor(t)},T=function(t){return Math.abs(t)},q=function(t,i){return t?_(t)?{negative:!0,format:""+T(t)+i}:{negative:!1,format:""+t+i}:{negative:!1,format:""}},H=function(){function t(t,i,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),i)return $(t*j[Y(i)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach(function(i){s.$d[Y(i)]=t[i]}),this.calMilliseconds(),this;if("string"==typeof t){var e=t.match(D);if(e){var r=e.slice(2).map(function(t){return null!=t?Number(t):0});return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var i=t.prototype;return i.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(i,n){return i+(t.$d[n]||0)*j[n]},0)},i.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=S(t/k),t%=k,this.$d.months=S(t/w),t%=w,this.$d.days=S(t/p),t%=p,this.$d.hours=S(t/f),t%=f,this.$d.minutes=S(t/m),t%=m,this.$d.seconds=S(t/l),t%=l,this.$d.milliseconds=t},i.toISOString=function(){var t=q(this.$d.years,"Y"),i=q(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=q(n,"D"),e=q(this.$d.hours,"H"),r=q(this.$d.minutes,"M"),u=this.$d.seconds||0;this.$d.milliseconds&&(u+=this.$d.milliseconds/1e3,u=Math.round(1e3*u)/1e3);var o=q(u,"S"),a=t.negative||i.negative||s.negative||e.negative||r.negative||o.negative,h=e.format||r.format||o.format?"T":"",c=(a?"-":"")+"P"+t.format+i.format+s.format+h+e.format+r.format+o.format;return"P"===c||"-P"===c?"P0D":c},i.toJSON=function(){return this.toISOString()},i.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:x.s(this.$d.years,2,"0"),YYYY:x.s(this.$d.years,4,"0"),M:this.$d.months,MM:x.s(this.$d.months,2,"0"),D:this.$d.days,DD:x.s(this.$d.days,2,"0"),H:this.$d.hours,HH:x.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:x.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:x.s(this.$d.seconds,2,"0"),SSS:x.s(this.$d.milliseconds,3,"0")};return i.replace(y,function(t,i){return i||String(n[t])})},i.as=function(t){return this.$ms/j[Y(t)]},i.get=function(t){var i=this.$ms,n=Y(t);return"milliseconds"===n?i%=1e3:i="weeks"===n?S(i/j[n]):this.$d[n],i||0},i.add=function(t,i,n){var s;return s=i?t*j[Y(i)]:M(t)?t.$ms:$(t,this).$ms,$(this.$ms+s*(n?-1:1),this)},i.subtract=function(t,i){return this.add(t,i,!0)},i.locale=function(t){var i=this.clone();return i.$l=t,i},i.clone=function(){return $(this.$ms,this)},i.humanize=function(t){return b().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},i.valueOf=function(){return this.asMilliseconds()},i.milliseconds=function(){return this.get("milliseconds")},i.asMilliseconds=function(){return this.as("milliseconds")},i.seconds=function(){return this.get("seconds")},i.asSeconds=function(){return this.as("seconds")},i.minutes=function(){return this.get("minutes")},i.asMinutes=function(){return this.as("minutes")},i.hours=function(){return this.get("hours")},i.asHours=function(){return this.as("hours")},i.days=function(){return this.get("days")},i.asDays=function(){return this.as("days")},i.weeks=function(){return this.get("weeks")},i.asWeeks=function(){return this.as("weeks")},i.months=function(){return this.get("months")},i.asMonths=function(){return this.as("months")},i.years=function(){return this.get("years")},i.asYears=function(){return this.as("years")},t}(),I=function(t,i,n){return t.add(i.years()*n,"y").add(i.months()*n,"M").add(i.days()*n,"d").add(i.hours()*n,"h").add(i.minutes()*n,"m").add(i.seconds()*n,"s").add(i.milliseconds()*n,"ms")},P=function(t,i,n){b=n,x=n().$utils(),n.duration=function(t,i){var s=n.locale();return $(t,{$l:s},i)},n.isDuration=M;var s=i.prototype.add,e=i.prototype.subtract;i.prototype.add=function(t,i){return M(t)?I(this,t,1):s.bind(this)(t,i)},i.prototype.subtract=function(t,i){return M(t)?I(this,t,-1):e.bind(this)(t,i)}};const O={second:1e3};O.minute=60*O.second,O.hour=60*O.minute,O.day=24*O.hour,O.week=7*O.day,O.month=30*O.day,O.year=365*O.day;const R={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},E=t=>t?"number"==typeof t?t:(t=(t=(t=>{const i=R,n=new RegExp("("+Object.keys(i).join("|")+")","g"),s=t.match(n);return s?(s.forEach(n=>{const s=i[n]>1?i[n]:i[n].toString().slice(1);t=t.replace(n,s)}),t):t})(t)).replace(/(second|minute|hour|day|week|month|year)s?(?! ?(s )?and |s?$)/,"$1,")).split(/and|,/).reduce((t,i)=>t+(i?(t=>{if(null===t.match(/(second|minute|hour|day|week|month|year)s?/))return;const i=parseFloat(t)||1,n=t.match(/(second|minute|hour|day|week|month|year)s?/)[1];return O[n]*i})(i):0),0):t;E.languageMap=R,g.extend(P);let N=class extends v{#t=null;get duration(){return this.#t}set duration(t){this.#t=t}#i="off";get autocomplete(){return this.#i}set autocomplete(t){this.#i=t}#n=!1;get spellcheck(){return this.#n}set spellcheck(t){this.#n=t}firstUpdated(){this.label="Duration",this.supportingText='Enter a duration ex. "3 hours and 30 minutes"',this.addEventListener("change",()=>{this.#s(this.input.value);const t=this.#e(this.input.value);t?.asMilliseconds()!=this.duration?.asMilliseconds()&&(this.duration=t,this.dispatchEvent(new Event("duration-change")))})}static{this.styles=t`
    :host {
      display: block;
    }

    md-outlined-text-field {
      width: 100%;
    }
  `}updated(t){var i;t.has("duration")&&t.get("duration")!==this.duration&&(this.duration?this.value=null==(i=this.duration)?"":Object.entries({years:i.years(),months:i.months(),days:i.days(),hours:i.hours(),minutes:i.minutes(),seconds:i.seconds()}).filter(t=>0!==t[1]).map(t=>`${t[1]} ${1===t[1]?t[0].slice(0,-1):t[0]}`).join(" and "):(this.duration=null,this.value=""))}checkValidity(){return super.checkValidity()&&this.#r(this.input.value)}reportValidity(){return this.#s(this.input.value),super.reportValidity()}#r(t){return!(t&&!this.#e(t))}#s(t){this.#r(t)?(this.error=!1,this.errorText=""):(this.error=!0,this.errorText='Duration was entered in an incorrect format. Try "3 hours and 30 minutes"')}#e(t){if(!t)return null;const i=E(t);return isNaN(i)?null:g.duration(i,"ms")}async reset(){super.reset(),this.error=!1,this.errorText="",this.duration=null}};i([n({type:Object})],N.prototype,"duration",null),i([n({reflect:!0,type:String})],N.prototype,"autocomplete",null),i([n({reflect:!0,type:Boolean})],N.prototype,"spellcheck",null),N=i([s("titanium-duration-input")],N),g.extend(P);let V=class extends e{#t=g.duration(14400);get duration(){return this.#t}set duration(t){this.#t=t}#u;get requiredInput(){return this.#u}set requiredInput(t){this.#u=t}static{this.styles=[r,u,t`
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
    `}};i([a()],V.prototype,"duration",null),i([h("titanium-duration-input[demo]")],V.prototype,"requiredInput",null),V=i([s("titanium-duration-input-playground")],V);let C=class extends e{static{this.styles=[c,t``]}render(){return o`
      <story-header name="Titanium Duration Input" className="TitaniumDurationInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-duration-input/project.json"
        ><titanium-duration-input-playground></titanium-duration-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-duration-input"></api-docs>
    `}};C=i([s("titanium-duration-input-demo")],C);export{C as TitaniumDurationInputDemo};
