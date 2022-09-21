# Titanium Elements

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)

![Publish](https://github.com/LeavittSoftware/titanium-elements/workflows/Publish/badge.svg?branch=master)

A collection of lightweight web components used by Leavitt Group Enterprises and partnering organizations.

## Development

    npm i
    npm start

## Contributions

**[Conventional Commits ](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary) Required**

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](http://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

**[TypeScript](https://www.typescriptlang.org/) Required**

Types enable JavaScript developers to use highly-productive development tools and practices like static checking and code refactoring when developing JavaScript applications.

## Creating a new component

### Create the component

- [ ] Copy an existing component
- [ ] Delete the CHANGELOG.md
- [ ] Update the package.json
  - Find and replace the old package name with the new package name
  - Change dependencies (keep tslib)
  - Reset version number to 1.0.0 (this is important)
- [ ] Delete lib and node_modules inside the new component folder
- [ ] Replace the copied component in src with your component
- [ ] Add a path to your component in the root level tsconfig.json
- [ ] Run npm start (npm install prior if you haven't ran it already)

### Create the leavittbook story

- [ ] Copy an existing component story leavittbook/demos/titanium-chip
- [ ] Rename all folders and files replacing the old component name with the new one
- [ ] find and replace old component name with new in the following files
  - index.html
  - project.json
  - {componentname}-demo.ts (find and replace will miss a few places here)
  - {componentname}-playground.ts
- [ ] Update my-app inside of leavittbook
  - Add a PageJS route for your story
  - Add a link in the menu for your story
  - Add your component tags in the main content
- [ ] Write your stories in the playground.ts file

### Important

- [ ] Publish to NPM after the PR has been approved but before it gets merged

### Publishing to NPM

- [ ] Create NPM account and get invited to the leavittsoftware org
- [ ] Run the login command - `npm login`
- [ ] Change directory to the new package (Verify the version is 1.0.0 in package.json)
- [ ] Run the publish command - `npm publish --access=public`
