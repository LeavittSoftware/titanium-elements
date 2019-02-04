import {ElementMixin} from '@polymer/polymer/lib/mixins/element-mixin';

type Constructable = new (...args: any[]) => ElementMixin;

export interface TitaniumCsvDownloadMixinConstructor {
  new(...args: any[]): TitaniumCsvDownloadMixin;
}

export interface TitaniumCsvDownloadMixin {
  startCsvDownload(fileName: string, csv: string);
  convertArrayToCsv(json: Array<any>, flatten: boolean);
}

export const titaniumCsvDownloadMixin =
    <T extends Constructable>(superClass: T): T&
    TitaniumCsvDownloadMixinConstructor => class extends superClass {
  startCsvDownload(fileName: string, csv: string) {
    return startCsvDownload(fileName, csv);
  }

  convertArrayToCsv(json: Array<any>, flatten: boolean) {
    return convertArrayToCsv(json, flatten);
  }

  /**
   *
   */
  constructor(..._params: any[]) {
    super(_params);
  }

  static get properties() {
    return {};
  }
};

export const startCsvDownload = (fileName: string, csv: string) => {
  if (window.navigator.msSaveBlob) {
    // IE 10+
    window.navigator.msSaveOrOpenBlob(
        new Blob([csv], {type: 'text/plain;charset=utf-8;'}), fileName);
  } else {
    let link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.setAttribute(
        'href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const convertArrayToCsv = (json: Array<any>, flatten = false) => {
  if (!json[0])
    return 'Empty List';

  if (flatten) {
    json = json.map(o => {
      return flattenObject(o);
    });
  }

  let fields = Object.keys(json[0]);
  let replacer = function(_key, value) {
    return value === null ? '' : value;
  };
  let csv = json.map(function(row) {
    return fields
        .map(function(fieldName) {
          let data = row[fieldName];
          if (data == null) {
            data = '';
          }
          if (typeof data === 'object') {
            data = 'object';
          }
          // JSON.stringify replaces double quotes with \"  , but in a csv,
          // double quotes are escaped by using two double quotes
          return JSON.stringify(data, replacer).replace(/\\"/g, '""');
        })
        .join(',');
  });
  csv.unshift(fields.join(','));  // add header column
  return csv.join('\r\n');
};

const flattenObject = (data) => {
  // also strips odata annotation properties
  let result = {};
  const recurse = (cur, prop) => {
    if (Object(cur) !== cur) {
      if (prop.indexOf('@odata') === -1) {
        result[prop] = cur;
      }
    } else if (Array.isArray(cur)) {
      let l;
      for (let i = 0, l = cur.length; i < l; i++)
        recurse(cur[i], prop ? prop + '.' + i : '' + i);
      if (l === 0)
        result[prop] = [];
    } else {
      let isEmpty = true;
      for (let p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + '.' + p : p);
      }
      if (isEmpty)
        result[prop] = {};
    }
  };
  recurse(data, '');
  return result;
};