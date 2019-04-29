import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('titanium-offline-notice')
export class TitaniumOfflineNoticeElement extends LitElement {
  @property({ type: Boolean, reflect: true }) isOnline: boolean = true;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('online', this.onlineStatusChanged.bind(this));
    window.addEventListener('offline', this.onlineStatusChanged.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('online', this.onlineStatusChanged.bind(this));
    window.removeEventListener('offline', this.onlineStatusChanged.bind(this));
    super.disconnectedCallback();
  }

  onlineStatusChanged() {
    this.isOnline = navigator.onLine;
    this.dispatchEvent(new CustomEvent('is-online-changed', { composed: true, detail: this.isOnline }));
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: var(--titanium-offline-notice-top-offset, 48px);
      left: 0;
      right: 0;
      background-color: var(--titanium-offline-notice-background-color, #ef5350);
      height: var(--titanium-offline-notice-height, 48px);
      padding: 0 8px;
    }

    :host([isonline]) {
      display: none;
    }

    notice-container {
      display: flex;
      flex-direction: row;
      font-size: 14px;
      line-height: 18px;
      color: #ffffff;
    }

    notice-text {
      display: flex;
      flex-direction: column;
      margin: 8px 8px 8px 4px;
      overflow: hidden;
    }

    [secondary] {
      font-size: 12px;
      line-height: 14px;
      opacity: 0.6;
    }

    notice-container svg {
      margin: 12px 4px 12px 0;
      width: 24px;
      height: 24px;
      vertical-align: top;
      fill: #fff;
    }

    limit-width {
      display: flex;
      flex-direction: column;
      align-self: center;
      max-width: var(--titanium-offline-notice-max-content-width, inherit);
      width: 100%;
      overflow: hidden;
    }

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <limit-width>
        <notice-container>
          <svg>
            <path
              d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"
            ></path>
          </svg>
          <notice-text>
            <div>Device not connected</div>
            <div secondary>Connect to the internet for up to date content!</div>
          </notice-text>
        </notice-container>
      </limit-width>
    `;
  }
}
