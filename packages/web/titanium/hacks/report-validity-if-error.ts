export const reportValidityIfError = (input: { reportValidity: () => boolean }) => {
  if ((input as any)?.hasError) {
    input?.reportValidity();
  }
};
