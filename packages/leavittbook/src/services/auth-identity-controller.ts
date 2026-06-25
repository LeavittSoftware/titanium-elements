import { ReactiveController, ReactiveControllerHost } from 'lit';
import { AuthZeroLgIdenitity } from '@leavittsoftware/web/leavitt/user-manager/auth-zero-lg-identity';

import UserManager from './user-manager-service';

export class AuthIdentityController implements ReactiveController {
  #host: ReactiveControllerHost;

  identity: AuthZeroLgIdenitity | null = null;

  #onIdentityUpdated = (identity: AuthZeroLgIdenitity | null) => {
    this.identity = identity;
    this.#host.requestUpdate();
  };

  constructor(host: ReactiveControllerHost) {
    this.#host = host;
    host.addController(this);
  }

  hostConnected() {
    this.identity = UserManager.identity;
    UserManager.onIdentityUpdated(this.#onIdentityUpdated);
  }

  hostDisconnected() {
    UserManager.removeOnIdentityUpdated(this.#onIdentityUpdated);
  }
}
