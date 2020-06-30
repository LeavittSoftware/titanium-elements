export const escapeTerm = (term: string): string => encodeURIComponent(term.replace(/'/g, "''"));
