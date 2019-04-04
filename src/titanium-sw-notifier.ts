import './titanium-snackbar';

import {customElement, html, LitElement, property, query} from 'lit-element';

import {TitaniumSnackbar} from './titanium-snackbar';

@customElement('titanium-sw-notifier')
export class TitanuimServiceWorkerNotifierElement extends LitElement {
  @property({type: String}) notificationsStatus: string;

  @query('titanium-snackbar') snackbar: TitaniumSnackbar;

  async firstUpdated() {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.register('service-worker.js', {
        scope: '/',
      });

      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing;
        if (!installingWorker)
          return;

        installingWorker.addEventListener('statechange', async () => {
          if (installingWorker.state === 'installed' && !navigator.serviceWorker.controller) {
            this._showInstalledSnackbar();
          }
        });
      });

      if ('PushManager' in window && 'Notification' in window) {
        registration.pushManager.getSubscription().then((subscription) => {
          this.notificationsStatus = subscription ? 'subscribed' : 'unsubscribed';
          this.dispatchEvent(new CustomEvent('notifications-status-changed', {detail: this.notificationsStatus}));
        });
      }

      // Check to see if the service worker controlling the page at initial load
      // has become redundant, since this implies there's a new service worker
      // with fresh content.
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.addEventListener('statechange', (event: any) => {
          if (event.target.state === 'redundant') {
            this._showUpdatedSnackbar();
          }
        });
      }
    }
  }

  private async _showUpdatedSnackbar() {
    this.snackbar.message = 'Site has been updated';
    this.snackbar.actionText = 'RELOAD';
    await this.snackbar.open();
    window.location.reload();
  }

  private async _showInstalledSnackbar() {
    this.snackbar.message = 'Site cached for offline use';
    this.snackbar.actionText = 'DISMISS';
    const closeTimeout = setTimeout(() => {
      this.snackbar.close();
    }, 5000);

    await this.snackbar.open();
    clearTimeout(closeTimeout);
  }

  render() {
    return html`<titanium-snackbar></titanium-snackbar>`;
  }
}