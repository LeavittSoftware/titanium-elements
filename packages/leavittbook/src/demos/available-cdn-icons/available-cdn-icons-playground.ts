/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@material/web/ripple/ripple';
import '@material/web/focus/md-focus-ring';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';

/* playground-fold-end */

/* playground-fold */
@customElement('available-cdn-icons-playground')
export class AvailableCdnIconsPlayground extends LitElement {
  icons = [
    'icon-app-accounts.svg',
    'icon-app-acm.svg',
    'icon-app-amc.svg',
    'icon-app-apps.svg',
    'icon-app-broker-key.svg',
    'icon-app-calc.svg',
    'icon-app-company-manager.svg',
    'icon-app-conference.svg',
    'icon-app-crm-to-ams360.svg',
    'icon-app-cust-search.svg',
    'icon-app-departments.svg',
    'icon-app-distribution.svg',
    'icon-app-domo.svg',
    'icon-app-duplicate.svg',
    'icon-app-education.svg',
    'icon-app-email.svg',
    'icon-app-employee-lookup.svg',
    'icon-app-employee-manager.svg',
    'icon-app-farmer.svg',
    'icon-app-game-cl.svg',
    'icon-app-game-pl.svg',
    'icon-app-gov-prin.svg',
    'icon-app-home.svg',
    'icon-app-investors.svg',
    'icon-app-lamp.svg',
    'icon-app-leases.svg',
    'icon-app-leavitt-link.svg',
    'icon-app-marketing.svg',
    'icon-app-naics.svg',
    'icon-app-pcms.svg',
    'icon-app-permissions.svg',
    'icon-app-phones.svg',
    'icon-app-prod-budget.svg',
    'icon-app-reporting-tools.svg',
    'icon-app-service-timeline.svg',
    'icon-app-stationary.svg',
    'icon-app-surge.svg',
    'icon-app-survey.svg',
    'icon-app-tv.svg',
    'icon-app-vital.svg',
    'icon-biz-card.svg',
    'icon-carousel.svg',
    'icon-company-manager.svg',
    'icon-delete-logo.svg',
    'icon-department.svg',
    'icon-dev-sales.svg',
    'icon-domo.svg',
    'icon-email-initial.svg',
    'icon-email-recipients.svg',
    'icon-email-reminder.svg',
    'icon-employees.svg',
    'icon-enterprise.svg',
    'icon-event-details.svg',
    'icon-icon-logs.svg',
    'icon-logo.svg',
    'icon-log-parser.svg',
    'icon-marketing.svg',
    'icon-meetings.svg',
    'icon-name-division.svg',
    'icon-new-hire.svg',
    'icon-onboarding.svg',
    'icon-participants.svg',
    'icon-pathways.svg',
    'icon-pcms.svg',
    'icon-permissions.svg',
    'icon-phone.svg',
    'icon-prod-budgets.svg',
    'icon-program.svg',
    'icon-reminder.svg',
    'icon-reporting-tools.svg',
    'icon-rules.svg',
    'icon-sales-culture.svg',
    'icon-scoreboard-details.svg',
    'icon-scoreboard-prizes.svg',
    'icon-success.svg',
    'icon-template.svg',
  ];

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

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
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        --md-focus-ring-shape: 8px;
        text-align: center;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <all-icons>
        ${this.icons.map(
          (o) =>
            html`<button
              @click=${() => {
                navigator.clipboard.writeText(`https://cdn.leavitt.com/icons/${o}`);
                this.dispatchEvent(new ShowSnackbarEvent('URL copied to clipboard!', { autoHide: 1500, noAction: true }));
              }}
            >
              <md-ripple></md-ripple>
              <md-focus-ring></md-focus-ring>
              <img src="https://cdn.leavitt.com/icons/${o}" height="92" />
              <div>${o}</div>
            </button>`
        )}
      </all-icons>
    `;
  }
}
