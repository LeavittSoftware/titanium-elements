export function validateStreet(street: string) {
  const streetRegex = new RegExp(/^(?=.{1,64}$)[a-zA-Z \-.\d #'.,]{1,64}[\s][a-zA-Z \-.\d #'.,]{1,64}$/);
  const uppercaseRegex = new RegExp('[A-Z]');
  const lowercaseRegex = new RegExp('[a-z]');
  const numberRegex = new RegExp('[0-9]');

  return streetRegex.test(street) ? (uppercaseRegex.test(street) || lowercaseRegex.test(street)) && numberRegex.test(street) : !1;
}
