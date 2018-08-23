import '@polymer/paper-button';


import {customElement, listen, property} from '@polymer/decorators';
import {DeclarativeEventListeners} from '@polymer/decorators/lib/declarative-event-listeners.js';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('titanium-offline-notice-demo')
export class TitaniumOfflineNoticeDemo extends DeclarativeEventListeners
(PolymerElement) {
  @property() isOnline: boolean;
  @property() buttonText: string = 'Go Offline';

  @listen('tap', 'onlineStatusButton')
  setOnlineStatus() {
    if (this.isOnline) {
      this.set('isOnline', false);
      this.set('buttonText', 'Go Online');

    } else {
      this.set('isOnline', true);
      this.set('buttonText', 'Go Offline');
    }
  }

  static get template() {
    return html`<style>
    :host {
       
    }

    paper-button {
        margin: 8px;
    }
    div{
      padding: 12px;
    }
</style>

<h3>Titanium Offline Notice Demo</h3>
<div>
    <titanium-offline-notice is-online="{{isOnline}}"></titanium-offline-notice>
  </div>
    <paper-button id="onlineStatusButton" raised>{{buttonText}}</paper-button>
<script src="titanium-offline-notice-demo.js">
</script>`;
  }
}
