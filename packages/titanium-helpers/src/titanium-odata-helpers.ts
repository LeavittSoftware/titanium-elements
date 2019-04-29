export const escapeTerm = (term: string): string => {
  return encodeURIComponent(term.replace(/'/g, '\'\''));
};