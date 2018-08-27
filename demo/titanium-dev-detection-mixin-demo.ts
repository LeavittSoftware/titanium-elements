import {titaniumDevDetectionMixin} from '@leavittsoftware/titanium-elements/lib/titanium-dev-detection-mixin.js';
import {customElement} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer/polymer-element';

@customElement('titanium-dev-detection-mixin-demo')
export default class TitaniumDevDetectionMixinDemo extends
    titaniumDevDetectionMixin
(PolymerElement) {
  static get template() {
    return html`
         <style>
            h1 {
                @apply --paper-font-title;
            }
            um-prop {
                display: block;
                @apply --paper-font-body1;
            }
        </style>
        <um-prop><b>isDev:</b> [[isDev]]</um-prop>`;
  }
}