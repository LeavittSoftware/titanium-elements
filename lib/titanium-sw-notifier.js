var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { customElement, property } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
let TitanuimServerWorkerNotifierElement = class TitanuimServerWorkerNotifierElement extends PolymerElement {
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            _super("ready").call(this);
            if ('serviceWorker' in navigator) {
                const registration = yield navigator.serviceWorker.register('service-worker.js', {
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
                    navigator.serviceWorker.controller.addEventListener('statechange', (event) => {
                        if (event.target.state === 'redundant') {
                            this.$.updatedMessage.classList.add('visible');
                        }
                    });
                }
            }
        });
    }
    _reload() {
        window.location.reload();
    }
    static get template() {
        return html `<style>
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
};
__decorate([
    property({ type: String, notify: true })
], TitanuimServerWorkerNotifierElement.prototype, "notificationsStatus", void 0);
TitanuimServerWorkerNotifierElement = __decorate([
    customElement('titanium-sw-notifier')
], TitanuimServerWorkerNotifierElement);
export { TitanuimServerWorkerNotifierElement };
//# sourceMappingURL=titanium-sw-notifier.js.map