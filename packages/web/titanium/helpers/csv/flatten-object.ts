// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flattenObject = (data: Record<string, any>) => {
  // also strips odata annotation properties
  const result = {};
  const recurse = (cur, prop) => {
    if (Object(cur) !== cur) {
      if (prop.indexOf('@odata') === -1) {
        result[prop] = cur;
      }
    } else if (Array.isArray(cur)) {
      const l = 0;
      for (let i = 0, l = cur.length; i < l; i++) {
        recurse(cur[i], prop ? prop + '.' + i : '' + i);
      }
      if (l === 0) {
        result[prop] = [];
      }
    } else {
      let isEmpty = true;
      for (const p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + '.' + p : p);
      }
      if (isEmpty) {
        result[prop] = {};
      }
    }
  };
  recurse(data, '');
  return result;
};

//TODO: Rewrite in a safer way...check types, etc...
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertArrayToCsv = (json: Array<any>, flatten = false) => {
  if (!json[0]) {
    return 'Empty List';
  }

  if (flatten) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    json = json.map((o: Record<string, any>) => flattenObject(o));
  }

  const fields = Object.keys(json[0]);
  const replacer = function (_key, value) {
    return value === null ? '' : value;
  };
  const csv = json.map(function (row) {
    return fields
      .map(function (fieldName) {
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
