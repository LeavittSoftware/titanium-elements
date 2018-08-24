import {customElement, property} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('titanium-sw-notifier')

export class TitanuimServerWorkerNotifierElement extends PolymerElement {
  @property({type: String, notify: true}) notificationsStatus: string;

  async ready() {
    super.ready();

    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.register('service-worker.js', {
        scope: '/',
      });

      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing;
        if (!installingWorker)
          return;

        installingWorker.addEventListener('statechange', () => {
          if (installingWorker.state === 'installed' && !navigator.serviceWorker.controller) {
            this.$.installedMessage.classList.add('visible');
            setTimeout(() => {
              this.$.installedMessage.classList.remove('visible');
            }, 5000);
          }
        });
      });

      if ('PushManager' in window && 'Notification' in window) {
        registration.pushManager.getSubscription().then((subscription) => {
          this.notificationsStatus = subscription ? 'subscribed' : 'unsubscribed';
        });
      }

      // Check to see if the service worker controlling the page at initial load has
      // become redundant, since this implies there's a new service worker with fresh
      // content.
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.addEventListener('statechange', (event: any) => {
          if (event.target.state === 'redundant') {
            this.$.updatedMessage.classList.add('visible');
          }
        });
      }
    }
  }

  _reload() {
    window.location.reload();
  }

  static get template() {
    return html`<style>
    aside {
        position: fixed;
        bottom: 0;
        left: 8px;
        display: flex;
        max-width: 600px;
        margin: 0 auto;
        padding: 14px;
        background: var(--titanium-sw-notifier-background, #323232);
        color: var(--titanium-sw-notifier-color, #f1f1f1);
        font-size: 14px;
        visibility: hidden;
        transform: translate3d(0, 100%, 0);
        transition-property: transform, visibility;
        transition-duration: 0.2s;
        will-change: transform, visibility;
    }

    aside.visible {
        visibility: visible;
        transform: translate3d(0, 0, 0);
    }

    #updatedMessage span {
        flex: 1;
    }

    #updatedMessage a {
        text-decoration: none;
        color: var(--titanium-sw-notifier-link-color, #eeff41);
        font-weight: 400;
        padding-left: 8px;
    }
</style>

<aside id="installedMessage">Site cached for offline use.</aside>

<aside id="updatedMessage">
    <span>Site updated.</span>
    <a href on-click="_reload">Reload</a>
</aside>`;
  }
}