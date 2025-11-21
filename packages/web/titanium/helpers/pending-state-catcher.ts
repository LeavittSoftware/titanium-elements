import { PendingStateEvent } from '../types/pending-state-event';
import { LitElement } from 'lit';

export type Constructor<T> = { new (...args: any[]): T };
export const PendingStateCatcher = <C extends Constructor<LitElement>>(base: C) =>
  class extends base {
    static get properties() {
      return {
        stateIsPending: { type: Boolean },
        pendingStateCatcherTarget: { type: HTMLElement },
        pendingStateCatcherLoadingStartDelay: { type: Number },
        pendingStateCatcherMinTimeOpen: { type: Number },
      };
    }

    /**
     * !! Handled by the pending state catcher !!
     */
    public accessor stateIsPending: boolean;

    /**
     * Promises faster than this do not cause stateIsPending to be set to true at all
     * Prevents flicker for fast promises
     */
    public accessor pendingStateCatcherLoadingStartDelay: number = 75;

    /**
     * min time stateIsPending must remain true
     */
    public accessor pendingStateCatcherMinTimeOpen: number = 350;

    /**
     * async reference to the element that will be used to listen for pending state events
     * defaults to window
     */
    public accessor pendingStateCatcherTarget: Promise<HTMLElement> | null;

    /**
     *  @internal
     */
    #loadingDelayTimer: number;
    #closeDelayTimer: number;
    #openCount = 0;
    #timeStampOfLoadingStart: number;

    async connectedCallback(): Promise<void> {
      super.connectedCallback();

      const target = (await this.pendingStateCatcherTarget) || window;
      target.addEventListener(PendingStateEvent.eventType, this.#handlePendingStateEvent.bind(this));
    }

    disconnectedCallback(): void {
      super.disconnectedCallback();
      window.removeEventListener(PendingStateEvent.eventType, this.#handlePendingStateEvent);
    }

    async #handlePendingStateEvent(e: PendingStateEvent) {
      this.#loadingStarted();
      this.#openCount++;
      try {
        await e.detail.promise;
      } catch {
        // Do nothing, this will be handled by others
      } finally {
        this.#openCount--;
        if (this.#openCount === 0) {
          this.#loadingStopped();
        }
      }
    }

    #loadingStarted() {
      window.clearTimeout(this.#loadingDelayTimer);

      //If new event is received while close timer is running, prevent the close
      window.clearTimeout(this.#closeDelayTimer);

      this.#loadingDelayTimer = window.setTimeout(() => {
        this.#timeStampOfLoadingStart = performance.now();
        this.stateIsPending = true;
      }, this.pendingStateCatcherLoadingStartDelay);
    }

    #loadingStopped() {
      window.clearTimeout(this.#loadingDelayTimer);
      const totalTimeOpened = performance.now() - this.#timeStampOfLoadingStart;
      const loadingStopDelay = Math.max(this.pendingStateCatcherMinTimeOpen - totalTimeOpened, 0);

      this.#closeDelayTimer = window.setTimeout(() => {
        this.stateIsPending = false;
      }, loadingStopDelay);
    }
  } as C;
