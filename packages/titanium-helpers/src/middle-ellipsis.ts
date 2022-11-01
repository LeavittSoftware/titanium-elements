export function middleEllipsis(str: string, frontMax: number = 15, backMax: number = 10) {
  if (str.length > frontMax + backMax) {
    return str.substr(0, frontMax) + '...' + str.substr(str.length - backMax, str.length);
  }
  return str;
}
