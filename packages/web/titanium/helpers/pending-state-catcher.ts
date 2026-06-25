import { PendingStateEvent } from '../types/pending-state-event';

declare global {
  interface HTMLElement {
    connectedCallback(): void;
    disconnectedCallback(): void;
  }
}

export type Constructor<T> = { new (...args: any[]): T };

export type PendingStateCatcherMixin = {
  stateIsPending: boolean;
  pendingStateCatcherLoadingStartDelay: number;
  pendingStateCatcherMinTimeOpen: number;
  pendingStateCatcherTarget: Promise<HTMLElement> | null;
};

export function PendingStateCatcher<C extends Constructor<HTMLElement>>(base: C): C & Constructor<PendingStateCatcherMixin> {
  class PendingStateCatcherClass extends base {
    static get properties() {
      return {
        stateIsPending: { type: Boolean },
        pendingStateCatcherTarget: { type: Object },
        pendingStateCatcherLoadingStartDelay: { type: Number },
        pendingStateCatcherMinTimeOpen: { type: Number },
      };
    }

    /**
     * !! Handled by the pending state catcher !!
     */
    public accessor stateIsPending!: boolean;

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
    public accessor pendingStateCatcherTarget!: Promise<HTMLElement> | null;

    /**
     *  @internal
     */
    private loadingDelayTimer!: number;
    private closeDelayTimer!: number;
    private openCount = 0;
    private timeStampOfLoadingStart!: number;

    private handlePendingStateEvent = async (e: Event) => {
      const event = e as PendingStateEvent;
      this.loadingStarted();
      this.openCount++;
      try {
        await event.detail.promise;
      } catch {
        // Do nothing, this will be handled by others
      } finally {
        this.openCount--;
        if (this.openCount === 0) {
          this.loadingStopped();
        }
      }
    };

    async connectedCallback() {
      super.connectedCallback();

      const target = (await this.pendingStateCatcherTarget) || window;
      target.addEventListener(PendingStateEvent.eventType, this.handlePendingStateEvent);
    }

    async disconnectedCallback() {
      super.disconnectedCallback();

      const target = (await this.pendingStateCatcherTarget) || window;
      target.removeEventListener(PendingStateEvent.eventType, this.handlePendingStateEvent);
    }

    private loadingStarted() {
      window.clearTimeout(this.loadingDelayTimer);

      //If new event is received while close timer is running, prevent the close
      window.clearTimeout(this.closeDelayTimer);

      this.loadingDelayTimer = window.setTimeout(() => {
        this.timeStampOfLoadingStart = performance.now();
        this.stateIsPending = true;
      }, this.pendingStateCatcherLoadingStartDelay);
    }

    private loadingStopped() {
      window.clearTimeout(this.loadingDelayTimer);
      const totalTimeOpened = performance.now() - this.timeStampOfLoadingStart;
      const loadingStopDelay = Math.max(this.pendingStateCatcherMinTimeOpen - totalTimeOpened, 0);

      this.closeDelayTimer = window.setTimeout(() => {
        this.stateIsPending = false;
      }, loadingStopDelay);
    }
  }

  return PendingStateCatcherClass as C & Constructor<PendingStateCatcherMixin>;
}
