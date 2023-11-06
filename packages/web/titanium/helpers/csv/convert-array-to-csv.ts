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

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function flattenObject(_o: Record<string, any>): any {
  throw new Error('Function not implemented.');
}
