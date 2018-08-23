var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
let TitaniumOfflineNoticeElement = class TitaniumOfflineNoticeElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.isOnline = true;
    }
    ready() {
        super.ready();
        window.addEventListener('online', this.onlineStatusChanged.bind(this));
        window.addEventListener('offline', this.onlineStatusChanged.bind(this));
        console.log(this.isOnline);
    }
    onlineStatusChanged() {
        this.isOnline = navigator.onLine;
    }
    static get template() {
        return html `<style>
    :host {
        @apply --layout-vertical;
        position: fixed;
        top: var(--titanium-offline-notice-top-offset, 48px);
        left: 0;
        right: 0;
        background-color: var(--titanium-offline-notice-background-color, #ef5350);
        height: var(--titanium-offline-notice-height, 48px);
        padding: 0 8px;
    }

    :host([is-online]) {
        display: none;
    }

    notice-container {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
        font-size: 14px;
        line-height: 18px;
        color: #ffffff;
        --paper-item-icon-width: 36px;
    }

    notice-text {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
        margin: 8px 8px 8px 4px;
        overflow: hidden;
    }

    [secondary] {
        font-size: 12px;
        line-height: 14px;
        opacity: .6;
    }

    notice-container svg {
        margin: 12px 4px 12px 0;
        width: 24px;
        height: 24px;
        vertical-align: top;
        fill: #fff;
    }

    limit-width {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
        max-width: var(--titanium-offline-notice-max-content-width, inherit);
        width: 100%;
        overflow: hidden;
    }

    [hidden] {
        display: none;
    }
</style>
<limit-width>
    <notice-container>
        <svg>
            <path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"></path>
        </svg>
        <notice-text>
            <div>Device not connected</div>
            <div secondary>Connect to the internet for up to date content!</div>
        </notice-text>
    </notice-container>
</limit-width>`;
    }
};
__decorate([
    property({ type: Boolean, notify: true, reflectToAttribute: true })
], TitaniumOfflineNoticeElement.prototype, "isOnline", void 0);
TitaniumOfflineNoticeElement = __decorate([
    customElement('titanium-offline-notice')
], TitaniumOfflineNoticeElement);
export { TitaniumOfflineNoticeElement };
//# sourceMappingURL=titanium-offline-notice.js.map