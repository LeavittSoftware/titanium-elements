export class Filter {
  constructor(key: string, oDataFilter: (value: string) => string, initialValue: string | null = null) {
    this.key = key;
    this.oDataFilter = oDataFilter;
    this.value = initialValue;
  }

  value: string | null;
  key: string;
  oDataFilter: (value: string) => string;

  getOdataFilter() {
    return this.value === null ? null : this.oDataFilter(this.value);
  }
}
