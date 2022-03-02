/* eslint-disable @typescript-eslint/no-empty-function */
import { Filter } from './filter';

export class FilterController<TKey extends string> {
  private _filters: Map<string, Filter> = new Map();

  /**
   * Set values of filters based on query string data
   *
   * @returns True if values of filter change from query string data
   */
  loadFromQueryString() {
    const urlParams = new URLSearchParams(location.search);
    let hasChanges = false;

    this._filters.forEach(filter => {
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
      this.onFilterValueUpdated();
    }

    return hasChanges;
  }

  get filters(): Filter[] {
    return Array.from(this._filters.values());
  }

  getActiveFilterOdata() {
    const odataFilters: Array<string> = [];
    this.filters.forEach(o => {
      const odata = o.getOdataFilter();
      if (odata !== null) {
        odataFilters.push(odata);
      }
    });
    return odataFilters;
  }

  setValue(key: TKey, value: string | null) {
    if (this._filters.has(key)) {
      const filter = this._filters.get(key);
      if (filter && filter?.value !== value) {
        filter.value = value;
        this.batchNotifyFiltersChanged();
      }
    }
  }

  getValue(key: TKey) {
    if (!this._filters.has(key)) {
      return null;
    }
    const filter = this._filters.get(key);
    return filter?.value;
  }

  setFilter(key: TKey, oDataFilter: (value: string) => string, initialValue: string | null = null) {
    this._filters.set(key, new Filter(key, oDataFilter, initialValue));
  }

  getFilter(key: TKey) {
    return this._filters.get(key);
  }

  // this will be called by any update to the filter values changed only by the user
  onFilterValueChanged: () => void = () => {};
  // this will be called by any update to the filter values changed programmatically or by the user
  onFilterValueUpdated: () => void = () => {};

  private _notifyTimer: number;
  private batchNotifyFiltersChanged() {
    clearTimeout(this._notifyTimer);
    this._setQueryString();
    this._notifyTimer = window.setTimeout(() => {
      this.onFilterValueChanged();
      this.onFilterValueUpdated();
    }, 50);
  }

  private _setQueryString() {
    const urlParams = new URLSearchParams(location.search);
    this._filters.forEach(filter => {
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
