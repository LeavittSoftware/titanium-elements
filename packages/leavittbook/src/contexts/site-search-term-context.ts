import { createContext } from '@lit/context';

export const siteSearchTermsContext = createContext<Map<string, string>>('siteSearchTermsContext');
