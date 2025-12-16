import{L as e,i as t,A as a,N as i,d as s,P as r,S as o,x as n,h as d,p as l,c,_ as p,n as u,r as m,e as h,t as b,U as g,f}from"./BriKlvrl.js";import{S as v}from"./BYDhJ-qH.js";import"./B5dYKavm.js";import"./DEp7IXki.js";import"./BsKq--vW.js";let x=class extends(e(t)){#e;get userManager(){return this.#e}set userManager(e){this.#e=e}#t=!1;get isActive(){return this.#t}set isActive(e){this.#t=e}#a=0;get activeIndex(){return this.#a}set activeIndex(e){this.#a=e}#i;get textArea(){return this.#i}set textArea(e){this.#i=e}#s;get imageInput(){return this.#s}set imageInput(e){this.#s=e}async updated(e){e.has("isActive")&&this.isActive&&this.reset()}reset(){this.imageInput?.reset(),this.textArea?.reset()}async#r(){if(!this.textArea.reportValidity()||this.isLoading)return;const e={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Bug",Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map(e=>e.file)};try{const t=new a(this.userManager||new i);t.baseUrl=s?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",t.addHeader("X-LGAppName","IssueTracking");const d=t.postAsync("Issues/ReportIssue",e,{sendAsFormData:!0});this.dispatchEvent(new r(d)),this.loadWhile(d);if(!(await d).entity)throw new Error("Error submitting problem. Please try again.");this.dispatchEvent(new o("",{overrideTemplate:n`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset()}catch(e){this.dispatchEvent(new o(e))}}async#o(){if(!this.textArea.reportValidity()||this.isLoading)return;const e={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Feedback",Description:this.textArea.value,Attachments:[]};try{const t=new a(this.userManager||new i);t.baseUrl=s?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",t.addHeader("X-LGAppName","IssueTracking");const n=t.postAsync("Issues/ReportIssue",e,{sendAsFormData:!0});this.dispatchEvent(new r(n)),this.loadWhile(n);if(!(await n).entity)throw new Error("Error submitting feedback. Please try again.");this.dispatchEvent(new o("We appreciate your input, and we will promptly conduct a review!")),this.reset()}catch(e){this.dispatchEvent(new o(e))}}static{this.styles=[d,l,c`
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
    `]}render(){return n`
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
          ${0===this.activeIndex?n` <form>
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
              </form>`:n` <form>
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
          <md-filled-tonal-button @click=${()=>0===this.activeIndex?this.#r():this.#o()} ?disabled=${this.isLoading}
            >Submit</md-filled-tonal-button
          >
        </span>
      </titanium-card>
    `}};p([u({type:Object})],x.prototype,"userManager",null),p([u({type:Boolean})],x.prototype,"isActive",null),p([m()],x.prototype,"activeIndex",null),p([h("md-outlined-text-field")],x.prototype,"textArea",null),p([h("titanium-smart-attachment-input")],x.prototype,"imageInput",null),x=p([b("leavitt-user-feedback")],x);let w=class extends t{#n;get methodsSelect(){return this.#n}set methodsSelect(e){this.#n=e}#d;get reportAProblemDialog(){return this.#d}set reportAProblemDialog(e){this.#d=e}#l;get provideFeedbackDialog(){return this.#l}set provideFeedbackDialog(e){this.#l=e}#c;get inputs(){return this.#c}set inputs(e){this.#c=e}static{this.styles=[d,l,c`
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
    `]}render(){return n`
      <h1>Default</h1>
      <p></p>
      <div>
        <md-outlined-button @click=${()=>this.reportAProblemDialog.show()}>Report a problem</md-outlined-button>
        <md-outlined-button @click=${()=>this.provideFeedbackDialog.show()}>Provide feedback</md-outlined-button>
        <leavitt-user-feedback></leavitt-user-feedback>
      </div>

      <report-a-problem-dialog .userManager=${g}></report-a-problem-dialog>
      <provide-feedback-dialog .userManager=${g}></provide-feedback-dialog>
      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};p([h("leavitt-user-feedback[methods-demo]")],w.prototype,"methodsSelect",null),p([h("report-a-problem-dialog")],w.prototype,"reportAProblemDialog",null),p([h("provide-feedback-dialog")],w.prototype,"provideFeedbackDialog",null),p([f("leavitt-user-feedback")],w.prototype,"inputs",null),w=p([b("leavitt-user-feedback-playground")],w);let k=class extends t{static{this.styles=[v,c``]}render(){return n`
      <story-header name="Leavitt user feedback" className="LeavittUserFeedback"></story-header>
      <leavitt-user-feedback-playground></leavitt-user-feedback-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-user-feedback"></api-docs>
    `}};k=p([b("leavitt-user-feedback-demo")],k);export{k as LeavittUserFeedbackDemo};
