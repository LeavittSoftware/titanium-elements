// eslint-disable-next-line @typescript-eslint/no-var-requires
const lernaScopesConfig = require('@commitlint/config-lerna-scopes');

const customScopes = ['release', 'tooling'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': async () => [2, 'always', [...customScopes, ...(await lernaScopesConfig.utils.getPackages())]],
  },
};