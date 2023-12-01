export function formatBytes(bytes, decimalPlaces = 2) {
  if (0 === bytes) {
    return '0 Bytes';
  }
  const c = 1024,
    d = decimalPlaces || 2,
    e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    f = Math.floor(Math.log(bytes) / Math.log(c));
  return parseFloat((bytes / Math.pow(c, f)).toFixed(d)) + ' ' + e[f];
}
