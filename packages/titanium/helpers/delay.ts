export function delay(delay: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}
