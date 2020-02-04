import { customElement, html, LitElement, property } from 'lit-element';
import { TitaniumSnackbarSingleton as AppSnackbar } from '@leavittsoftware/titanium-snackbar';

@customElement('titanium-sw-notifier')
export class TitanuimServiceWorkerNotifierElement extends LitElement {
  @property({ type: String }) notificationsStatus: string;

  async firstUpdated() {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.register('service-worker.js', {
        scope: '/',
      });

      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing;
        if (!installingWorker) {
          return;
        }

        installingWorker.addEventListener('statechange', async () => {
          if (installingWorker.state === 'installed' && !navigator.serviceWorker.controller) {
            this._showInstalledSnackbar();
          }
        });
      });

      if ('PushManager' in window && 'Notification' in window) {
        registration.pushManager.getSubscription().then(subscription => {
          this.notificationsStatus = subscription ? 'subscribed' : 'unsubscribed';
          this.dispatchEvent(new CustomEvent('notifications-status-changed', { detail: this.notificationsStatus }));
        });
      }

      // Check to see if the service worker controlling the page at initial load
      // has become redundant, since this implies there's a new service worker
      // with fresh content.
      if (navigator.serviceWorker.controller) {
        // tslint:disable-next-line: no-any
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigator.serviceWorker.controller.addEventListener('statechange', (event: any) => {
          if (event && event.target && event.target.state === 'redundant') {
            this._showUpdatedSnackbar();
          }
        });
      }
    }
  }

  private async _showUpdatedSnackbar() {
    await AppSnackbar.open('Site has been updated', { actionText: 'RELOAD' });
    window.location.reload();
  }

  private async _showInstalledSnackbar() {
    const closeTimeout = setTimeout(() => {
      AppSnackbar.close();
    }, 5000);

    await AppSnackbar.open('Site cached for offline use', { actionText: 'DISMISS' });
    clearTimeout(closeTimeout);
  }

  render() {
    return html``;
  }
}
