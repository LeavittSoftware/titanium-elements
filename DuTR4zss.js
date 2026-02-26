import{i,b as o,S as n,c as s,_ as a,t as e}from"./BkdWKSMI.js";import{S as c}from"./D21mo-gf.js";import"./z-LiiMbg.js";let p=class extends i{#i=["icon-app-accounts.svg","icon-app-acm.svg","icon-app-amc.svg","icon-app-apps.svg","icon-app-broker-key.svg","icon-app-calc.svg","icon-app-company-manager.svg","icon-app-conference.svg","icon-app-crm-to-ams360.svg","icon-app-cust-search.svg","icon-app-departments.svg","icon-app-distribution.svg","icon-app-domo.svg","icon-app-duplicate.svg","icon-app-education.svg","icon-app-email.svg","icon-app-employee-lookup.svg","icon-app-employee-manager.svg","icon-app-farmer.svg","icon-app-game-cl.svg","icon-app-game-pl.svg","icon-app-gov-prin.svg","icon-app-home.svg","icon-app-investors.svg","icon-app-lamp.svg","icon-app-leases.svg","icon-app-leavitt-link.svg","icon-app-marketing.svg","icon-app-naics.svg","icon-app-pcms.svg","icon-place.svg","icon-app-permissions.svg","icon-app-phones.svg","icon-app-prod-budget.svg","icon-app-reporting-tools.svg","icon-app-service-timeline.svg","icon-app-stationary.svg","icon-app-surge.svg","icon-app-survey.svg","icon-app-tv.svg","icon-app-vital.svg","icon-biz-card.svg","icon-carousel.svg","icon-cancel.svg","icon-company-manager.svg","icon-csr-contest.svg","icon-delete-logo.svg","icon-department.svg","icon-dev-sales.svg","icon-domo.svg","icon-email-initial.svg","icon-email-recipients.svg","icon-email-reminder.svg","icon-employees.svg","icon-enterprise.svg","icon-event-details.svg","icon-icon-logs.svg","icon-logo.svg","icon-log-parser.svg","icon-low-balance.svg","icon-marketing.svg","icon-meetings.svg","icon-name-division.svg","icon-new-hire.svg","icon-onboarding.svg","icon-participants.svg","icon-pathways.svg","icon-pcms.svg","icon-permissions.svg","icon-phone.svg","icon-prod-budgets.svg","icon-program.svg","icon-reminder.svg","icon-reporting-tools.svg","icon-rules.svg","icon-sales-culture.svg","icon-scoreboard-details.svg","icon-scoreboard-prizes.svg","icon-success.svg","icon-template.svg","icon-transfer.svg","icon-unknown.svg","icon-zion-funding.svg","icon-offer-letter.svg","icon-posting.svg","icon-recruiter.svg"];static{this.styles=[c,o`
      all-icons {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 12px;
      }

      button {
        cursor: pointer;
        color: inherit;
        background-color: inherit;
        border: none;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        background-color: var(--md-sys-color-surface-container-low);
        padding: 24px;
        border-radius: 28px;
        --md-focus-ring-shape: 28px;
        text-align: center;
      }
    `]}render(){return s`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Available CDN Icons" level1Href="/available-cdn-icons" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Available CDN Icons"></story-header>
            <all-icons>
              ${this.#i.map(i=>s`<button
                    @click=${()=>{navigator.clipboard.writeText(`https://cdn.leavitt.com/icons/${i}`),this.dispatchEvent(new n("URL copied to clipboard!",{autoHide:1500,noAction:!0}))}}
                  >
                    <md-ripple></md-ripple>
                    <md-focus-ring></md-focus-ring>
                    <img src="https://cdn.leavitt.com/icons/${i}" height="92" />
                    <div>${i}</div>
                  </button>`)}
            </all-icons>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};p=a([e("available-cdn-icons-demo")],p);export{p as AvailableCdnIconsDemo};
