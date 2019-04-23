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
import { customElement, html, LitElement, property } from 'lit-element';
import { TitaniumSnackbarSingleton as AppSnackbar } from '@leavittsoftware/titanium-snackbar';
let TitanuimServiceWorkerNotifierElement = class TitanuimServiceWorkerNotifierElement extends LitElement {
    firstUpdated() {
        return __awaiter(this, void 0, void 0, function* () {
            if ('serviceWorker' in navigator) {
                const registration = yield navigator.serviceWorker.register('service-worker.js', {
                    scope: '/',
                });
                registration.addEventListener('updatefound', () => {
                    const installingWorker = registration.installing;
                    if (!installingWorker)
                        return;
                    installingWorker.addEventListener('statechange', () => __awaiter(this, void 0, void 0, function* () {
                        if (installingWorker.state === 'installed' && !navigator.serviceWorker.controller) {
                            this._showInstalledSnackbar();
                        }
                    }));
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
                    navigator.serviceWorker.controller.addEventListener('statechange', (event) => {
                        if (event.target.state === 'redundant') {
                            this._showUpdatedSnackbar();
                        }
                    });
                }
            }
        });
    }
    _showUpdatedSnackbar() {
        return __awaiter(this, void 0, void 0, function* () {
            yield AppSnackbar.open('Site has been updated', 'RELOAD');
            window.location.reload();
        });
    }
    _showInstalledSnackbar() {
        return __awaiter(this, void 0, void 0, function* () {
            const closeTimeout = setTimeout(() => {
                AppSnackbar.close();
            }, 5000);
            yield AppSnackbar.open('Site cached for offline use', 'DISMISS');
            clearTimeout(closeTimeout);
        });
    }
    render() {
        return html ``;
    }
};
__decorate([
    property({ type: String })
], TitanuimServiceWorkerNotifierElement.prototype, "notificationsStatus", void 0);
TitanuimServiceWorkerNotifierElement = __decorate([
    customElement('titanium-sw-notifier')
], TitanuimServiceWorkerNotifierElement);
export { TitanuimServiceWorkerNotifierElement };
//# sourceMappingURL=titanium-sw-notifier.js.map