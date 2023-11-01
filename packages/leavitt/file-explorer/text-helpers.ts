export function middleEllipsis(str: string) {
  if (str.length > 60) {
    return str.substr(0, 45) + '...' + str.substr(str.length - 10, str.length);
  }
  return str;
}
