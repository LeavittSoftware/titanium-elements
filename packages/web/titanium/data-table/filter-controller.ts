/* eslint-disable @typescript-eslint/no-empty-function */

import { Filter } from './filter';
import { parse } from 'regexparam';

export class FilterController<TKey extends string> {
  #filters: Map<string, Filter> = new Map();
  #valueUpdateCallbacks: Array<() => void> = [];

  subscribeToFilterChange(callback: () => void) {
    this.#valueUpdateCallbacks.push(callback);
  }

  unsubscribeFromFilterChange(callback: () => void) {
    this.#valueUpdateCallbacks = this.#valueUpdateCallbacks.filter((o) => o != callback);
  }

  #notifyChange() {
    this.#valueUpdateCallbacks.forEach((o) => o());
  }

  /**
   *
   */
  constructor(path: string) {
    const pushState = history.pushState.bind(history);
    history.pushState = (...args) => {
      pushState(...args);
      const pathRegex = parse(path);
      if (pathRegex.pattern.test(window.location.pathname)) {
        this.loadFromQueryString();
      }
    };
    const replaceState = history.replaceState.bind(history);
    history.replaceState = (...args) => {
      replaceState(...args);
      const pathRegex = parse(path);
      if (pathRegex.pattern.test(window.location.pathname)) {
        this.loadFromQueryString();
      }
    };
  }

  /**
   * Set values of filters based on query string data
   *
   * @returns True if values of filter change from query string data
   */
  loadFromQueryString() {
    const urlParams = new URLSearchParams(location.search);
    let hasChanges = false;

    this.#filters.forEach((filter) => {
      let value: string | null = null;
      if (urlParams.has(filter.key)) {
        value = urlParams.get(filter.key);
      }

      if (filter.value !== value) {
        filter.value = value;
        hasChanges = true;
      }
    });

    if (hasChanges) {
      this.#notifyChange();
    }

    return hasChanges;
  }

  get filters(): Filter[] {
    return Array.from(this.#filters.values());
  }

  getActiveFilterOdata() {
    const odataFilters: Array<string> = [];
    this.filters.forEach((o) => {
      const odata = o.getOdataFilter();
      if (odata) {
        odataFilters.push(odata);
      }
    });
    return odataFilters;
  }

  setValue(key: TKey, value: string | null) {
    if (this.#filters.has(key)) {
      const filter = this.#filters.get(key);
      if (filter && filter?.value !== value) {
        filter.value = value;
        this.#batchNotifyFiltersChanged();
      }
    }
  }

  getValue(key: TKey) {
    if (!this.#filters.has(key)) {
      return null;
    }
    const filter = this.#filters.get(key);
    return filter?.value;
  }

  setFilter(key: TKey, oDataFilter: (value: string) => string, initialValue: string | null = null) {
    this.#filters.set(key, new Filter(key, oDataFilter, initialValue));
  }

  getFilter(key: TKey) {
    return this.#filters.get(key);
  }

  #notifyTimer: number;
  #batchNotifyFiltersChanged() {
    clearTimeout(this.#notifyTimer);
    this.#setQueryString();
    this.#notifyTimer = window.setTimeout(() => {
      this.#notifyChange();
    }, 50);
  }

  #setQueryString() {
    const urlParams = new URLSearchParams(location.search);
    this.#filters.forEach((filter) => {
      if (typeof filter.value !== 'undefined' && filter.value !== null) {
        urlParams.set(filter.key, String(filter.value));
      } else {
        if (urlParams.has(filter.key)) {
          urlParams.delete(filter.key);
        }
      }
    });
    const path = `${location.pathname}?${urlParams}`;
    window.history.replaceState({ path: path }, '', path);
  }
}
