/* eslint-disable @typescript-eslint/no-explicit-any */

export const reportValidityIfError = (input: { reportValidity: () => boolean }) => {
  if ((input as any)?.hasError) {
    input?.reportValidity();
  }
};
