import { escapeTerm } from './titanium-odata-helpers';

export const getSearchTokens = (inputText: string, allowedComplexityLevel = 3) => {
  if (typeof inputText === 'undefined' || inputText === null || inputText.length === 0) {
    return [];
  }
  let tokens = inputText
    .split(' ')
    .map(token => escapeTerm(token.trim()))
    .filter(token => token.length > 0);
  if (tokens.length > allowedComplexityLevel) {
    // if user types more than
    // three words, do not tokenize
    tokens = [inputText.trim()];
  }
  return tokens;
};
