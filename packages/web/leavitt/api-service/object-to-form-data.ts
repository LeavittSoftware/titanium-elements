/**
 * Converts a JavaScript object to FormData format
 * @param obj - The object to convert
 * @param form - Optional existing FormData to append to
 * @param namespace - Optional namespace prefix for nested objects
 * @returns FormData containing the converted object
 */
export function objectToFormData(obj: any, form?: FormData, namespace?: string): FormData {
  const fd = form || new FormData();
  let formKey: string;
  for (const property in obj) {
    if (Object.hasOwn(obj, property)) {
      if (typeof obj[property] === 'undefined') {
        continue;
      }
      if (namespace) {
        if (obj instanceof Array && obj[property] instanceof File) {
          // don't include array notation in FormData keys for Files in arrays
          formKey = namespace;
        } else if (obj instanceof Array) {
          formKey = namespace + '[' + property + ']';
        } else {
          formKey = namespace + '.' + property;
        }
      } else {
        formKey = property;
      }
      if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
        objectToFormData(obj[property], fd, formKey);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }
  return fd;
}
