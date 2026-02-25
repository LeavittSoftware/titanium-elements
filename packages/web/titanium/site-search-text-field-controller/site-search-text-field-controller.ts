import { LitElement, ReactiveController, ReactiveControllerHost } from 'lit';
import { Context, ContextConsumer } from '@lit/context';
import { Debouncer } from '@leavittsoftware/web/titanium/helpers/debouncer';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

export type PageElement = LitElement & { isActive: boolean; searchController?: TitaniumSiteSearchTextFieldController | null };

type SiteSearchHost = ReactiveControllerHost & PageElement;

export type TitaniumTextFieldSearchContext = Context<string, MdFilledTextField | MdOutlinedTextField>;

/**
 * Reactive controller that connects a page component to the app-level shared search text field
 * provided via context. Automatically attaches/detaches the input listener as the host page
 * becomes active/inactive and configures the text field's placeholder.
 *
 * @example
 * ```ts
 * searchController = new TitaniumSiteSearchTextFieldController(this, siteSearchTextFieldContext, {
 *   placeholder: 'Search name...',
 *   onSearch: () => {
 *     if (this.pageControl) {
 *       this.pageControl.page = 0;
 *     }
 *     return this.#reload();
 *   },
 * });
 * ```
 */
export class TitaniumSiteSearchTextFieldController implements ReactiveController {
  #host: SiteSearchHost;
  #dispatchSearch: () => void;
  #textField: MdFilledTextField | MdOutlinedTextField | null = null;
  #placeholder: string;
  #wasActive = false;
  #listenerCleanup: AbortController | null = null;

  /** Current value of the search text field. Read this in your data-fetching method to apply the search filter. */
  searchTerm = '';

  /**
   * @param host - The page element that owns this controller. Must satisfy {@link PageElement}.
   * @param context - The Lit context key used to consume the shared search text field instance.
   * @param options.placeholder - Placeholder text shown in the shared search text field when this page is active.
   * @param options.onSearch - Called when the user types. Handle page resets and data reloads here.
   * @param options.debounceDelay - Debounce interval in ms. Omit to use the default delay. Set to `0` to fire `onSearch` immediately on every keystroke.
   */
  constructor(
    host: SiteSearchHost,
    context: TitaniumTextFieldSearchContext,
    options: {
      debounceDelay?: number;
      placeholder: string;
      onSearch: () => Promise<void>;
    }
  ) {
    this.#host = host;
    this.#placeholder = options.placeholder;

    if (options.debounceDelay !== 0) {
      const debouncer = new Debouncer<void, never>(() => {
        if (!this.#host.isActive) return Promise.resolve();
        return options.onSearch();
      }, options.debounceDelay);
      this.#dispatchSearch = () => debouncer.debounce();
    } else {
      this.#dispatchSearch = () => {
        if (this.#host.isActive) options.onSearch();
      };
    }

    new ContextConsumer(host, {
      context,
      subscribe: true,
      callback: (textField) => this.#onTextFieldChanged(textField),
    });

    host.addController(this);
  }

  #onTextFieldChanged(textField: MdFilledTextField | MdOutlinedTextField | null) {
    this.#textField = textField;
    if (this.#host.isActive) {
      this.#activate();
    }
  }

  #activate() {
    this.#detachListener();
    if (!this.#textField) return;

    this.#listenerCleanup = new AbortController();
    this.#textField.addEventListener('input', this.#handleInput, { signal: this.#listenerCleanup.signal });
    this.#textField.value = this.searchTerm;
    this.#textField.placeholder = this.#placeholder;
  }

  #detachListener() {
    this.#listenerCleanup?.abort();
    this.#listenerCleanup = null;
  }

  #handleInput = () => {
    this.searchTerm = this.#textField!.value;
    this.#host.requestUpdate();
    this.#dispatchSearch();
  };

  /** Resets {@link searchTerm} and the text field value without triggering `onSearch`. */
  clearSearch() {
    this.searchTerm = '';
    if (this.#textField) {
      this.#textField.value = '';
    }
    this.#host.requestUpdate();
  }

  hostUpdated() {
    const isActive = this.#host.isActive;
    if (isActive && !this.#wasActive) {
      this.#activate();
    } else if (!isActive && this.#wasActive) {
      this.#detachListener();
    }
    this.#wasActive = isActive;
  }

  hostDisconnected() {
    this.#detachListener();
    this.#textField = null;
    this.#wasActive = false;
  }
}
