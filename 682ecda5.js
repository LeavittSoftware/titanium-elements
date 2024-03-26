import{l as e,P as t,S as i,x as s,h as a,p as r,i as o,_ as n,r as d,s as l,n as c,e as m,t as p,c as u,G as h,T as b}from"./f43924bd.js";import{S as g}from"./1c8b19cb.js";import"./3286da59.js";import"./fcfd02a6.js";import"./d0c3be22.js";import"./f2dbc2f1.js";import"./9a8dc7e8.js";import"./d8fb47ea.js";import{L as f}from"./49ad9f2f.js";import{A as x,a as v}from"./508363fc.js";import"./feb6c099.js";import{d as k,a as w}from"./85c22fe7.js";import{d as y}from"./791b1dff.js";import"./68491de3.js";import"./5c3aab95.js";import"./2f3f6766.js";import"./75986af6.js";import"./72abf9b4.js";import"./44994ced.js";import"./5bcb9e93.js";import"./35db0734.js";import"./d49dec57.js";import"./c47213b1.js";import"./08f0fa74.js";import"./f42dd0a8.js";import"./27c9cb5c.js";import"./f7d1f7f2.js";import"./ff84c309.js";const j=new x(new v);j.baseUrl=e?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",j.addHeader("X-LGAppName","WebsiteBug"),Object.freeze(j);const _=new x(new v);_.baseUrl=e?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",_.addHeader("X-LGAppName","WebsiteFeedback"),Object.freeze(_);let A=class extends(f(l)){#e=!1;get isActive(){return this.#e}set isActive(e){this.#e=e}#t=0;get activeIndex(){return this.#t}set activeIndex(e){this.#t=e}#i;get textArea(){return this.#i}set textArea(e){this.#i=e}#s;get imageInput(){return this.#s}set imageInput(e){this.#s=e}async updated(e){e.has("isActive")&&this.isActive&&this.reset()}reset(){this.imageInput?.reset(),this.textArea?.reset()}async#a(){if(!this.textArea.reportValidity()||this.isLoading)return;const e={SiteName:location.hostname,Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map((e=>e.file))};try{const a=j.postAsync("WebsiteBugs/ReportProblem",e,{sendAsFormData:!0});this.dispatchEvent(new t(a)),this.loadWhile(a);if(!(await a).entity)throw new Error("Error submitting problem. Please try again.");this.dispatchEvent(new i("",{overrideTemplate:s`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset()}catch(e){this.dispatchEvent(new i(e))}}async#r(){if(!this.textArea.reportValidity()||this.isLoading)return;const e={SiteName:location.hostname,Comment:this.textArea.value};try{const s=_.postAsync("WebsiteFeedbacks",e);this.dispatchEvent(new t(s)),this.loadWhile(s);if(!(await s).entity)throw new Error("Error submitting feedback. Please try again.");this.dispatchEvent(new i("We appreciate your input, and we will promptly conduct a review!")),this.reset()}catch(e){this.dispatchEvent(new i(e))}}static{this.styles=[a,r,o`
      :host {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 24px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 24px 0;
      }

      titanium-card {
        padding-top: 0;
      }

      md-tabs {
        margin-bottom: 16px;
        --md-primary-tab-container-shape: 12px;
      }

      md-outlined-text-field {
        resize: none;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return s`
      <titanium-header header="Report a problem" subHeader="Report bugs and provide feedback for this site" no-nav></titanium-header>

      <titanium-card has-footer>
        <md-tabs
          full-width
          @change=${e=>{this.reset(),this.activeIndex=e.target.activeTabIndex}}
        >
          <md-primary-tab
            >Report a problem
            <md-icon slot="icon">person_alert</md-icon>
          </md-primary-tab>
          <md-primary-tab
            >Provide feedback
            <md-icon slot="icon">rate_review</md-icon>
          </md-primary-tab>
        </md-tabs>

        <main>
          ${0===this.activeIndex?s` <form>
                <p full-width>
                  Please be specific and provide screenshots of the issue if possible in your report. Your report goes directly to our engineering teams so it
                  can be addressed as soon as possible.
                </p>
                <md-outlined-text-field type="textarea" problem label="Describe the issue" rows="5" required outlined></md-outlined-text-field>
                <titanium-smart-attachment-input
                  multiple
                  full-width
                  label="Supporting files"
                  noItemsText="No files"
                  addButtonLabel="Add file"
                ></titanium-smart-attachment-input>
              </form>`:s` <form>
                <p full-width>
                  User feedback is a valuable tool that empowers our users to share their thoughts, suggestions, and concerns, helping us improve the overall
                  user experience of our websites and tools. We welcome and appreciate user feedback as it enables us to make informed decisions and enhance our
                  website based on the needs and expectations of our users.
                </p>
                <p full-width>
                  Please be specific and provide as much detail as possible in your feedback. Your feedback goes directly to our development teams so it can be
                  carefully reviewed and planned into the next development cycle.
                </p>
                <md-outlined-text-field type="textarea" feedback label="Feedback" rows="5" required outlined></md-outlined-text-field>
              </form>`}
        </main>
        <span nav card-footer>
          <md-filled-tonal-button @click=${()=>0===this.activeIndex?this.#a():this.#r()} ?disabled=${this.isLoading}
            >Submit</md-filled-tonal-button
          >
        </span>
      </titanium-card>
    `}};n([c({type:Boolean})],A.prototype,"isActive",null),n([d()],A.prototype,"activeIndex",null),n([m("md-outlined-text-field")],A.prototype,"textArea",null),n([m("titanium-smart-attachment-input")],A.prototype,"imageInput",null),A=n([p("leavitt-user-feedback")],A);const $=new x(new v);$.baseUrl=e?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",$.addHeader("X-LGAppName","WebsiteBug"),Object.freeze($);let P=class extends(f(l)){#o;get dialog(){return this.#o}set dialog(e){this.#o=e}#n;get snackbar(){return this.#n}set snackbar(e){this.#n=e}#i;get textArea(){return this.#i}set textArea(e){this.#i=e}#s;get imageInput(){return this.#s}set imageInput(e){this.#s=e}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.imageInput?.reset(),this.textArea?.reset()}async#d(){if(!this.textArea.reportValidity()||this.isLoading)return;const e={SiteName:location.hostname,Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map((e=>e.file))};try{const a=$.postAsync("WebsiteBugs/ReportProblem",e,{sendAsFormData:!0});this.dispatchEvent(new t(a)),this.loadWhile(a);if(!(await a).entity)throw new Error("Error submitting problem. Please try again.");document.dispatchEvent(new i("",{overrideTemplate:s`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset(),this.dialog.close("done")}catch(e){this.dispatchEvent(new i(e))}}static{this.styles=[a,r,o`
      :host {
        display: grid;
        gap: 24px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      md-outlined-text-field {
        resize: none;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return s`
      <md-dialog
        @open=${e=>{k(e.target),y(e.target)}}
        @close=${e=>{if("cancel"===e.target.returnValue||"done"===e.target.returnValue)return w(e.target),void this.snackbar.dismissAll();e.preventDefault()}}
      >
        <div slot="headline">Report a problem</div>
        <form slot="content" method="dialog">
          <p>
            Please be specific and provide screenshots of the issue if possible in your report. Your report goes directly to our engineering teams so it can be
            addressed as soon as possible.
          </p>
          <md-outlined-text-field
            ?disabled=${this.isLoading}
            type="textarea"
            problem
            label="Describe the issue"
            rows="5"
            required
            outlined
          ></md-outlined-text-field>
          <titanium-smart-attachment-input
            ?disabled=${this.isLoading}
            multiple
            label="Supporting files"
            noItemsText="No files"
            addButtonLabel="Add file"
          ></titanium-smart-attachment-input>
        </form>
        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>

        <div slot="actions">
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.dialog.close("cancel")}> Cancel </md-text-button>
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#d()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};n([m("md-dialog")],P.prototype,"dialog",null),n([m("titanium-snackbar-stack")],P.prototype,"snackbar",null),n([m("md-outlined-text-field")],P.prototype,"textArea",null),n([m("titanium-smart-attachment-input")],P.prototype,"imageInput",null),P=n([p("report-a-problem-dialog")],P);const I=new x(new v);I.baseUrl=e?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",I.addHeader("X-LGAppName","WebsiteFeedback"),Object.freeze(I);let S=class extends(f(l)){#o;get dialog(){return this.#o}set dialog(e){this.#o=e}#n;get snackbar(){return this.#n}set snackbar(e){this.#n=e}#i;get textArea(){return this.#i}set textArea(e){this.#i=e}show(){this.reset(),this.dialog.show()}reset(){this.dialog.returnValue="",this.textArea?.reset()}async#d(){if(!this.textArea.reportValidity()||this.isLoading||!this.textArea.value)return;const e={SiteName:location.hostname,Comment:this.textArea.value};try{const s=I.postAsync("WebsiteFeedbacks",e);this.dispatchEvent(new t(s)),this.loadWhile(s);if(!(await s).entity)throw new Error("Error submitting feedback. Please try again.");document.dispatchEvent(new i("We appreciate your input, and we will promptly conduct a review!")),this.reset(),this.dialog.close("done")}catch(e){this.dispatchEvent(new i(e))}}static{this.styles=[a,r,o`
      :host {
        display: grid;
        gap: 24px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      md-outlined-text-field {
        resize: none;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return s`
      <md-dialog
        @open=${e=>{k(e.target),y(e.target)}}
        @close=${e=>{if("cancel"===e.target.returnValue||"done"===e.target.returnValue)return w(e.target),void this.snackbar.dismissAll();e.preventDefault()}}
      >
        <div slot="headline">Provide feedback</div>
        <form slot="content" method="dialog">
          <p>
            User feedback is a valuable tool that empowers our users to share their thoughts, suggestions, and concerns, helping us improve the overall user
            experience of our websites and tools. We welcome and appreciate user feedback as it enables us to make informed decisions and enhance our website
            based on the needs and expectations of our users.
          </p>
          <p>
            Please be specific and provide as much detail as possible in your feedback. Your feedback goes directly to our development teams so it can be
            carefully reviewed and planned into the next development cycle.
          </p>
          <md-outlined-text-field ?disabled=${this.isLoading} type="textarea" feedback label="Feedback" rows="5" required outlined></md-outlined-text-field>
        </form>
        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>

        <div slot="actions">
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.dialog.close("cancel")}> Cancel </md-text-button>
          <md-text-button ?disabled=${this.isLoading} @click=${()=>this.#d()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `}};n([m("md-dialog")],S.prototype,"dialog",null),n([m("titanium-snackbar-stack")],S.prototype,"snackbar",null),n([m("md-outlined-text-field")],S.prototype,"textArea",null),S=n([p("provide-feedback-dialog")],S);let D=class extends l{#l;get methodsSelect(){return this.#l}set methodsSelect(e){this.#l=e}#c;get reportAProblemDialog(){return this.#c}set reportAProblemDialog(e){this.#c=e}#m;get provideFeedbackDialog(){return this.#m}set provideFeedbackDialog(e){this.#m=e}#p;get inputs(){return this.#p}set inputs(e){this.#p=e}static{this.styles=[a,r,o`
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
    `]}render(){return s`
      <user-manager></user-manager>

      <h1>Default</h1>
      <p></p>
      <div>
        <md-outlined-button @click=${()=>this.reportAProblemDialog.show()}>Report a problem</md-outlined-button>
        <md-outlined-button @click=${()=>this.provideFeedbackDialog.show()}>Provide feedback</md-outlined-button>
        <leavitt-user-feedback></leavitt-user-feedback>
      </div>

      <report-a-problem-dialog></report-a-problem-dialog>
      <provide-feedback-dialog></provide-feedback-dialog>
      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};n([m("leavitt-user-feedback[methods-demo]")],D.prototype,"methodsSelect",null),n([m("report-a-problem-dialog")],D.prototype,"reportAProblemDialog",null),n([m("provide-feedback-dialog")],D.prototype,"provideFeedbackDialog",null),n([u("leavitt-user-feedback")],D.prototype,"inputs",null),D=n([p("leavitt-user-feedback-playground")],D);let F=class extends l{#u=null;get refreshToken(){return this.#u}set refreshToken(e){this.#u=e}static{this.styles=[g,o``]}async firstUpdated(){const e=await h();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return s`
      <story-header name="Leavitt user feedback" className="LeavittUserFeedback"></story-header>
      ${this.refreshToken?s`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-user-feedback/project.json"
          >
            <leavitt-user-feedback-playground></leavitt-user-feedback-playground>
          </smart-demo>`:b}
      <api-docs src="./custom-elements.json" selected="leavitt-user-feedback"></api-docs>
    `}};n([d()],F.prototype,"refreshToken",null),F=n([p("leavitt-user-feedback-demo")],F);export{F as LeavittUserFeedbackDemo};
