export const startCsvDownload = (fileName: string, csv: string, context: HTMLElement = document.body) => {
  if (window.navigator.msSaveBlob) {
    // IE 10+
    window.navigator.msSaveOrOpenBlob(new Blob([csv], { type: 'text/plain;charset=utf-8;' }), fileName);
  } else {
    const link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    link.style.visibility = 'hidden';

    const clickEvent = document.createEvent('MouseEvent');
    clickEvent.initEvent('click', true, true);

    context.appendChild(link);
    link.dispatchEvent(clickEvent);
    context.removeChild(link);
  }
};

//TODO: Rewrite in a safer way...check types, etc...
// tslint:disable-next-line: no-any
export const convertArrayToCsv = (json: Array<any>, flatten = false) => {
  if (!json[0]) return 'Empty List';

  if (flatten) {
    json = json.map((o: Object) => {
      return flattenObject(o);
    });
  }

  const fields = Object.keys(json[0]);
  const replacer = function(_key, value) {
    return value === null ? '' : value;
  };
  const csv = json.map(function(row) {
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
  csv.unshift(fields.join(',')); // add header column
  return csv.join('\r\n');
};

const flattenObject = (data: Object) => {
  // also strips odata annotation properties
  const result = {};
  const recurse = (cur, prop) => {
    if (Object(cur) !== cur) {
      if (prop.indexOf('@odata') === -1) {
        result[prop] = cur;
      }
    } else if (Array.isArray(cur)) {
      const l = 0;
      for (let i = 0, l = cur.length; i < l; i++) recurse(cur[i], prop ? prop + '.' + i : '' + i);
      if (l === 0) result[prop] = [];
    } else {
      let isEmpty = true;
      for (const p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + '.' + p : p);
      }
      if (isEmpty) result[prop] = {};
    }
  };
  recurse(data, '');
  return result;
};
