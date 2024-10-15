import{A as e,c as t,z as s,L as i,P as a,S as r,x as o,h as n,p as d,i as l,_ as c,d as p,r as m,n as u,e as h,t as b,f,G as g,E as v}from"./BRzihpuF.js";import{S as w}from"./DxTkCELB.js";import"./DpsMy9xV.js";import"./DpbIhdVk.js";import"./DOnPD6Qs.js";import"./B_yPmIVf.js";const x=new e(new t);x.baseUrl=s?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",x.addHeader("X-LGAppName","IssueTracking"),Object.freeze(x);const k=new e(new t);k.baseUrl=s?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",k.addHeader("X-LGAppName","IssueTracking"),Object.freeze(k);let y=class extends(i(m)){#e=!1;get isActive(){return this.#e}set isActive(e){this.#e=e}#t=0;get activeIndex(){return this.#t}set activeIndex(e){this.#t=e}#s;get textArea(){return this.#s}set textArea(e){this.#s=e}#i;get imageInput(){return this.#i}set imageInput(e){this.#i=e}async updated(e){e.has("isActive")&&this.isActive&&this.reset()}reset(){this.imageInput?.reset(),this.textArea?.reset()}async#a(){if(!this.textArea.reportValidity()||this.isLoading)return;const e={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Bug",Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map((e=>e.file))};try{const t=x.postAsync("Issues/ReportIssue",e,{sendAsFormData:!0});this.dispatchEvent(new a(t)),this.loadWhile(t);if(!(await t).entity)throw new Error("Error submitting problem. Please try again.");this.dispatchEvent(new r("",{overrideTemplate:o`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset()}catch(e){this.dispatchEvent(new r(e))}}async#r(){if(!this.textArea.reportValidity()||this.isLoading)return;const e={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Feedback",Description:this.textArea.value,Attachments:[]};try{const t=k.postAsync("Issues/ReportIssue",e,{sendAsFormData:!0});this.dispatchEvent(new a(t)),this.loadWhile(t);if(!(await t).entity)throw new Error("Error submitting feedback. Please try again.");this.dispatchEvent(new r("We appreciate your input, and we will promptly conduct a review!")),this.reset()}catch(e){this.dispatchEvent(new r(e))}}static{this.styles=[n,d,l`
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
    `]}render(){return o`
      <titanium-header header="Report a problem" subHeader="Report bugs and provide feedback for this site" no-nav></titanium-header>

      <titanium-card>
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
          ${0===this.activeIndex?o` <form>
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
              </form>`:o` <form>
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
    `}};c([u({type:Boolean})],y.prototype,"isActive",null),c([p()],y.prototype,"activeIndex",null),c([h("md-outlined-text-field")],y.prototype,"textArea",null),c([h("titanium-smart-attachment-input")],y.prototype,"imageInput",null),y=c([b("leavitt-user-feedback")],y);let A=class extends m{#o;get methodsSelect(){return this.#o}set methodsSelect(e){this.#o=e}#n;get reportAProblemDialog(){return this.#n}set reportAProblemDialog(e){this.#n=e}#d;get provideFeedbackDialog(){return this.#d}set provideFeedbackDialog(e){this.#d=e}#l;get inputs(){return this.#l}set inputs(e){this.#l=e}static{this.styles=[n,d,l`
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
    `]}render(){return o`
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
    `}};c([h("leavitt-user-feedback[methods-demo]")],A.prototype,"methodsSelect",null),c([h("report-a-problem-dialog")],A.prototype,"reportAProblemDialog",null),c([h("provide-feedback-dialog")],A.prototype,"provideFeedbackDialog",null),c([f("leavitt-user-feedback")],A.prototype,"inputs",null),A=c([b("leavitt-user-feedback-playground")],A);let _=class extends m{#c=null;get refreshToken(){return this.#c}set refreshToken(e){this.#c=e}static{this.styles=[w,l``]}async firstUpdated(){const e=await g();await e.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return o`
      <story-header name="Leavitt user feedback" className="LeavittUserFeedback"></story-header>
      ${this.refreshToken?o`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-user-feedback/project.json"
          >
            <leavitt-user-feedback-playground></leavitt-user-feedback-playground>
          </smart-demo>`:v}
      <api-docs src="./custom-elements.json" selected="leavitt-user-feedback"></api-docs>
    `}};c([p()],_.prototype,"refreshToken",null),_=c([b("leavitt-user-feedback-demo")],_);export{_ as LeavittUserFeedbackDemo};
