/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */

/* playground-fold */
@customElement('available-cdn-icons-playground')
export class AvailableCdnIconsPlayground extends LitElement {
  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Available CDN icons</h1>
      <div>
        <img src="https://cdn.leavitt.com/icons/icon-logo.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-scoreboard-prizes.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-delete-logo.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-rules.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-scoreboard-details.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-carousel.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-name-division.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-company-manager.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-domo.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-employees.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-log-parser.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-pcms.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-permissions.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-prod-budgets.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-email-recipients.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-event-details.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-participants.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-accounts.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-acm.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-amc.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-apps.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-broker-key.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-calc.svg " height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-company-manager.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-conference.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-crm-to-ams360.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-cust-search.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-departments.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-distribution.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-domo.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-duplicate.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-education.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-email.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-employee-lookup.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-employee-manager.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-farmer.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-game-cl.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-game-pl.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-gov-prin.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-home.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-investors.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-lamp.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-leases.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-leavitt-link.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-marketing.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-naics.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-pcms.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-permissions.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-phones.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-prod-budget.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-reporting-tools.svg " height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-service-timeline.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-stationary.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-surge.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-survey.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-tv.svg " height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-app-vital.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-carousel.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-delete-logo.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-department.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-email-initial.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-email-reminder.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-employees.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-enterprise.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-event-details.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-icon-logs.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-logo.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-marketing.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-name-division.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-pcms.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-phone.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-prod-budgets.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-reminder.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-reporting-tools.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-rules.svg   " height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-scoreboard-details.svg" height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-scoreboard-prizes.svg " height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-success.svg " height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-biz-card.svg " height="48" />
        <img src="https://cdn.leavitt.com/icons/icon-template.svg " height="48" />
      </div>
    `;
  }
}
