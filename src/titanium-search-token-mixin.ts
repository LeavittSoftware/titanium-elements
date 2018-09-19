type Constructable = new (...args: any[]) => any;

export interface TitaniumSearchTokenMixinConstructor {
  new(...args: any[]): TitaniumSearchTokenMixin;
}

export interface TitaniumSearchTokenMixin {
  getSearchTokens(inputText: string, allowedComplexityLevel?: number):
      Array<string>;
}

export const titaniumSearchTokenMixin =
    <T extends Constructable>(superClass: T): T&
    TitaniumSearchTokenMixinConstructor => class extends superClass {
  getSearchTokens(inputText: string, allowedComplexityLevel: number = 3):
      Array<string> {
    return getSearchTokens(inputText, allowedComplexityLevel);
  }
};

export const getSearchTokens =
    (inputText: string, allowedComplexityLevel = 3) => {
      if (typeof inputText === 'undefined' || inputText === null ||
          inputText.length === 0)
        return [];
      inputText = inputText.replace(/'/g, '\'\'');  // Escape all ' with ''
      let tokens = inputText.split(' ')
                       .map((token) => {
                         return token.trim();
                       })
                       .filter((token) => {
                         return token.length > 0;
                       });
      if (tokens.length >
          allowedComplexityLevel) {  // if user types more than
                                     // three words, do not tokenize
        tokens = [inputText.trim()];
      }
      return tokens;
    };