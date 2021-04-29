export class Filter {
  constructor(key: string, oDataFilter: (value: string | null) => string | null, initialValue: string | null = null) {
    this.key = key;
    this.oDataFilter = oDataFilter;
    this.value = initialValue;
  }

  value: string | null;
  key: string;
  oDataFilter: (value: string | null) => string | null;

  getOdataFilter() {
    if (this.value === null || this.value === '') {
      return null;
    } else {
      return this.oDataFilter(this.value);
    }
  }
}
