export class Filter {
  constructor(key: string, oDataFilter: (value: string | null) => string, initialValue: string | null = null) {
    this.key = key;
    this.oDataFilter = oDataFilter;
    this.value = initialValue;
  }

  value: string | null;
  key: string;
  oDataFilter: (value: string) => string;

  getOdataFilter() {
    if (this.value === null) {
      return null;
    } else {
      return this.oDataFilter(this.value);
    }
  }
}
