# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [11.3.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@11.2.0...@leavittsoftware/titanium-data-table@11.3.0) (2021-07-22)


### Features

* add support for variable height list items ([fd9e729](https://github.com/LeavittSoftware/titanium-elements/commit/fd9e729309dc4f387561698e5b2778cb83120dfd))





# [11.2.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@11.1.0...@leavittsoftware/titanium-data-table@11.2.0) (2021-07-21)


### Features

* show drag handles on mobile ([acea979](https://github.com/LeavittSoftware/titanium-elements/commit/acea979472d4af13a81b7b017f6e5d6d3263da55))
* WIP drag and drop 2.0 ([fbbaf43](https://github.com/LeavittSoftware/titanium-elements/commit/fbbaf435c13c0c6e8e3956a51bf841a9bc63bc36))
* WIP drag and drop 2.0 ([40afd61](https://github.com/LeavittSoftware/titanium-elements/commit/40afd615645cc5a9c8f1d48b8b56a9f8f3e0d90c))
* WIP drag and drop 2.0 ([f2d54b3](https://github.com/LeavittSoftware/titanium-elements/commit/f2d54b31b14875caa83a8053b1761cbd006118d2))





# [11.1.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@11.0.0...@leavittsoftware/titanium-data-table@11.1.0) (2021-07-20)


### Bug Fixes

* better drag support with footer slots ([93c3b23](https://github.com/LeavittSoftware/titanium-elements/commit/93c3b23fda101bbd24f218db02f72ed511be187e))
* blur checkbox on deselect ([325d827](https://github.com/LeavittSoftware/titanium-elements/commit/325d82781b595d2e00ea8f6c995d444700443060))
* deselect items on drag start ([c5d2dcc](https://github.com/LeavittSoftware/titanium-elements/commit/c5d2dccd3c287762adb5e97d15e96c460b5d41df))


### Features

* implement drag and drop in datatables ([1bb6325](https://github.com/LeavittSoftware/titanium-elements/commit/1bb63250242867bdec8f35450a40c4213379e1de))





# [11.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@10.2.0...@leavittsoftware/titanium-data-table@11.0.0) (2021-07-15)


### Bug Fixes

* deprecated event listener  ([b11b43f](https://github.com/LeavittSoftware/titanium-elements/commit/b11b43f21546e2bf60367f2ad06145fb98cdd111))
* remove sub 14px font sizes ([f815378](https://github.com/LeavittSoftware/titanium-elements/commit/f81537801b0e31dd23b53bb40bd3e20ba9f43654))
* **titanium-data-table:** allow wrapping on selection action buttons; ellipsis text ([8ef27a9](https://github.com/LeavittSoftware/titanium-elements/commit/8ef27a910d81f03ac6d775d93febd02d9e75defc))


### Features

* add a slot add-button; moves search to top header row ([0cc52f7](https://github.com/LeavittSoftware/titanium-elements/commit/0cc52f733c5a5696c5945357e4829195b5cb4146))
* align loading indicator with material design table spec ([88f2bb0](https://github.com/LeavittSoftware/titanium-elements/commit/88f2bb02754edb853999661421e8db4e83bda800))
* replace largePages with pageSizes array of number ([851a99a](https://github.com/LeavittSoftware/titanium-elements/commit/851a99ae0065ad054d79573d9d53228d7252b02f))
* swap page menu from mwc-select; refine responsive layout ([4fa1a6a](https://github.com/LeavittSoftware/titanium-elements/commit/4fa1a6a7db549af590243423be7a57a838555ef6))


### BREAKING CHANGES

* removes largePages attribute; set  pageSizes with desired page sizes instead.





# 10.2.0 (2021-07-13)


### Features

* add a slot add-button; moves search to top header row ([0cc52f7](https://github.com/LeavittSoftware/titanium-elements/commit/0cc52f733c5a5696c5945357e4829195b5cb4146))





# [10.1.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@10.0.1...@leavittsoftware/titanium-data-table@10.1.0) (2021-07-12)


### Bug Fixes

* reduce overall footer padding ([1d7ab27](https://github.com/LeavittSoftware/titanium-elements/commit/1d7ab27da5cc3a34bd020679b4ab29f366446d43))


### Features

* add support for item-footer slot in data-table-item ([f62a244](https://github.com/LeavittSoftware/titanium-elements/commit/f62a24431274113cee2c766b37294e09aefd0b0c))





## [10.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@10.0.0...@leavittsoftware/titanium-data-table@10.0.1) (2021-07-12)


### Bug Fixes

* reduce overall footer padding ([1d7ab27](https://github.com/LeavittSoftware/titanium-elements/commit/1d7ab27da5cc3a34bd020679b4ab29f366446d43))





# [10.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@9.5.0...@leavittsoftware/titanium-data-table@10.0.0) (2021-07-12)


### Features

* **titanium-data-table:** moves date table-footer slot; adds footer-buttons slot ([828e463](https://github.com/LeavittSoftware/titanium-elements/commit/828e46342aa6e791eee34a03e9e1c00fe6f60ecf))


### BREAKING CHANGES

* **titanium-data-table:** moves footer slot to the right of the table-controls could break where footer slot was using in combination with table-controls.  This should be fairly rare.





# 9.5.0 (2021-07-09)


### Features

* add table-header-text slot ([4a881ab](https://github.com/LeavittSoftware/titanium-elements/commit/4a881aba983b2e2fd952772e539876f54cb261c7))





## [9.4.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@9.4.0...@leavittsoftware/titanium-data-table@9.4.1) (2021-07-02)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





# [9.4.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@9.3.0...@leavittsoftware/titanium-data-table@9.4.0) (2021-07-01)


### Bug Fixes

* add support for font-family var in footer actions ([8d97a39](https://github.com/LeavittSoftware/titanium-elements/commit/8d97a39761adfe1dd58b1c3ae91f1029a0a46c84))


### Features

* adds --titanium-data-table-font-family variable ([08322ef](https://github.com/LeavittSoftware/titanium-elements/commit/08322ef58cfadbcc97919d7e8d41e9ea668b8f6f))





# [9.3.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@9.2.2...@leavittsoftware/titanium-data-table@9.3.0) (2021-07-01)


### Features

* adds --titanium-data-table-font-family variable ([08322ef](https://github.com/LeavittSoftware/titanium-elements/commit/08322ef58cfadbcc97919d7e8d41e9ea668b8f6f))





## [9.2.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@9.2.1...@leavittsoftware/titanium-data-table@9.2.2) (2021-07-01)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [9.2.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@9.2.0...@leavittsoftware/titanium-data-table@9.2.1) (2021-06-15)


### Bug Fixes

* increase gap between image and text to 12px ([6eebaac](https://github.com/LeavittSoftware/titanium-elements/commit/6eebaac6c3a11a4407ec866c02004483f596752c))





# 9.2.0 (2021-06-15)


### Features

* adds support for images in row items ([813fa06](https://github.com/LeavittSoftware/titanium-elements/commit/813fa067d88d39553c61f1db10c114fdee2db766))





## 9.1.3 (2021-06-07)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [9.1.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@9.1.1...@leavittsoftware/titanium-data-table@9.1.2) (2021-04-29)


### Bug Fixes

* make comparable with pageJS ([700d530](https://github.com/LeavittSoftware/titanium-elements/commit/700d530246cc8aa080b5afc5120328b05954a405))





## 9.1.1 (2021-04-13)


### Bug Fixes

* make comparable with pageJS ([700d530](https://github.com/LeavittSoftware/titanium-elements/commit/700d530246cc8aa080b5afc5120328b05954a405))





# [9.1.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@9.0.0...@leavittsoftware/titanium-data-table@9.1.0) (2021-04-02)


### Features

* add filter and filter controller classes ([28a9c91](https://github.com/LeavittSoftware/titanium-elements/commit/28a9c91aeaf9f3db6bda5c281bb4212f75cb0275))





# [9.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@8.0.0...@leavittsoftware/titanium-data-table@9.0.0) (2021-03-31)


### Features

* expose take property ([fb62f8e](https://github.com/LeavittSoftware/titanium-elements/commit/fb62f8ee6f19a7ae5a2c5c4968917a93fd99b430))
* **titanium-datatable:** take-changed will no longer be called during constructor  ([d21cb17](https://github.com/LeavittSoftware/titanium-elements/commit/d21cb17305790e77d02d23883df0e2a7d9a9395a))


### BREAKING CHANGES

* **titanium-datatable:** take-changed will no longer be called during constructor 





# 8.0.0 (2021-03-31)


### Features

* **titanium-datatable:** take-changed will no longer be called during constructor  ([d21cb17](https://github.com/LeavittSoftware/titanium-elements/commit/d21cb17305790e77d02d23883df0e2a7d9a9395a))


### BREAKING CHANGES

* **titanium-datatable:** take-changed will no longer be called during constructor 





## 7.4.3 (2021-01-06)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## 7.4.2 (2020-07-21)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [7.4.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.4.0...@leavittsoftware/titanium-data-table@7.4.1) (2020-07-20)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





# [7.4.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.3.0...@leavittsoftware/titanium-data-table@7.4.0) (2020-07-18)


### Features

* add mwc-icon-button support ([2c156b1](https://github.com/LeavittSoftware/titanium-elements/commit/2c156b15b7caf9e58cb0dacf51d92ecbc5443e55))
* add support for mwc in table-actions  ([76871a6](https://github.com/LeavittSoftware/titanium-elements/commit/76871a6231a1318796eba6f176d9539bbbe98721))





# 7.3.0 (2020-07-17)


### Features

* add mwc-icon-button support ([2c156b1](https://github.com/LeavittSoftware/titanium-elements/commit/2c156b15b7caf9e58cb0dacf51d92ecbc5443e55))





## [7.2.5](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.2.4...@leavittsoftware/titanium-data-table@7.2.5) (2020-07-06)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [7.2.4](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.2.3...@leavittsoftware/titanium-data-table@7.2.4) (2020-07-01)


### Bug Fixes

* **data-table:** narrows left margin on checkboxs ([b721973](https://github.com/LeavittSoftware/titanium-elements/commit/b7219736bc96cd6514901e4cabac857032ac56d2))





## [7.2.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.2.2...@leavittsoftware/titanium-data-table@7.2.3) (2020-07-01)


### Bug Fixes

* **data-table:** narrows left margin on checkboxs ([b721973](https://github.com/LeavittSoftware/titanium-elements/commit/b7219736bc96cd6514901e4cabac857032ac56d2))





## [7.2.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.2.1...@leavittsoftware/titanium-data-table@7.2.2) (2020-06-30)


### Bug Fixes

* Reduce checkbox margin to compensate for larger checkbox ([7fc61e9](https://github.com/LeavittSoftware/titanium-elements/commit/7fc61e987b400c8a5eab4718e7c75bfb712fd411))





## 7.2.1 (2020-06-30)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





# 7.2.0 (2020-06-23)


### Features

* Adds localStorageKey property ([90eea84](https://github.com/LeavittSoftware/titanium-elements/commit/90eea844e951cbdcc93999cd243368b928a584bb))





## [7.1.10](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.1.9...@leavittsoftware/titanium-data-table@7.1.10) (2020-06-15)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## 7.1.9 (2020-06-15)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [7.1.8](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.1.7...@leavittsoftware/titanium-data-table@7.1.8) (2020-06-15)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## 7.1.7 (2020-06-15)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## 7.1.6 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## 7.1.5 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## 7.1.4 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## 7.1.3 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## 7.1.2 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## 7.1.1 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





# [7.1.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.9...@leavittsoftware/titanium-data-table@7.1.0) (2020-05-06)


### Features

* Upgrades mwc elements to .15; updates api's to comply. ([05ea81c](https://github.com/LeavittSoftware/titanium-elements/commit/05ea81cb6852d056c6f58d7cc0a1dd2ea0efea86))





## [7.0.9](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.8...@leavittsoftware/titanium-data-table@7.0.9) (2020-04-15)


### Bug Fixes

* Fixes selection-changed event being sent when no changes occurred. ([d426fb0](https://github.com/LeavittSoftware/titanium-elements/commit/d426fb0628a63471443f858e444b5fff1596cc35))





## [7.0.8](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.7...@leavittsoftware/titanium-data-table@7.0.8) (2020-04-02)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [7.0.7](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.6...@leavittsoftware/titanium-data-table@7.0.7) (2020-04-02)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [7.0.6](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.5...@leavittsoftware/titanium-data-table@7.0.6) (2020-03-25)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [7.0.5](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.4...@leavittsoftware/titanium-data-table@7.0.5) (2020-03-20)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [7.0.4](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.3...@leavittsoftware/titanium-data-table@7.0.4) (2020-03-19)


### Performance Improvements

* @material/mwc package bump  ([57adb92](https://github.com/LeavittSoftware/titanium-elements/commit/57adb92c645196c926cc8a6e8f93a5f713274fe8))





## [7.0.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.2...@leavittsoftware/titanium-data-table@7.0.3) (2020-03-04)


### Bug Fixes

* Sets narrow on slotchanged event to ensure new items are hidden or shown ([26b8043](https://github.com/LeavittSoftware/titanium-elements/commit/26b80433cdf9e2e8d8e52b7b350b6000e5a99192))





## [7.0.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.1...@leavittsoftware/titanium-data-table@7.0.2) (2020-03-03)


### Bug Fixes

* Prevent double click on checkbox from firing navigate ([e328432](https://github.com/LeavittSoftware/titanium-elements/commit/e328432b5693509a834957a32230c2f6211cc3d1))
* Remove unneeded bubbles on navigate event.  ([04b373e](https://github.com/LeavittSoftware/titanium-elements/commit/04b373e7198e44c58829af3411fa3d0e02af1813))





## [7.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@7.0.0...@leavittsoftware/titanium-data-table@7.0.1) (2020-03-02)


### Bug Fixes

* Restores double click item functionality. ([0464d11](https://github.com/LeavittSoftware/titanium-elements/commit/0464d116ab8113670db3f3749e5efc178452b3ea))





# [7.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.3.1...@leavittsoftware/titanium-data-table@7.0.0) (2020-03-02)


### Bug Fixes

* Accessibility use real radios in data table ([b8480f1](https://github.com/LeavittSoftware/titanium-elements/commit/b8480f160a5b6d9dd989f16bd1e95af6dc6b3f75))


### BREAKING CHANGES

* VISUAL:  Item height has increase a bit to fit the checkboxes





## [6.3.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.3.0...@leavittsoftware/titanium-data-table@6.3.1) (2020-03-02)


### Bug Fixes

* Reduces size in which narrow is set. ([f7a2118](https://github.com/LeavittSoftware/titanium-elements/commit/f7a2118e8ad95bdc00e822f428d5c9905ecd9b39))





# [6.3.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.2.3...@leavittsoftware/titanium-data-table@6.3.0) (2020-03-02)


### Bug Fixes

* Removes overflow from filter container.  ([2b72c32](https://github.com/LeavittSoftware/titanium-elements/commit/2b72c3262e195fb35a00e0fe4a7fcf3a99a29c3e))


### Features

* Use a resize observer to set when to hide/show data table items ([f4aa87e](https://github.com/LeavittSoftware/titanium-elements/commit/f4aa87e43b4cce48294e4bc333f1f4d1433ee242))





## [6.2.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.2.2...@leavittsoftware/titanium-data-table@6.2.3) (2020-02-05)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [6.2.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.2.1...@leavittsoftware/titanium-data-table@6.2.2) (2020-02-04)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [6.2.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.2.0...@leavittsoftware/titanium-data-table@6.2.1) (2020-01-21)


### Bug Fixes

* restores item selection when using disablePaging ([6f20573](https://github.com/LeavittSoftware/titanium-elements/commit/6f20573a5c987accdddd56ad99f5057aeed8fae1))





# [6.2.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.1.0...@leavittsoftware/titanium-data-table@6.2.0) (2020-01-21)


### Features

* Adds disable-paging  attr/prop and footer slot.  ([ab5bdae](https://github.com/LeavittSoftware/titanium-elements/commit/ab5bdae4d05bdb9aff1d7ad88a0fe08c3677413f))





# [6.1.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.0.7...@leavittsoftware/titanium-data-table@6.1.0) (2020-01-17)


### Features

* Convert paging button to a menu of page options ([618ad1a](https://github.com/LeavittSoftware/titanium-elements/commit/618ad1a98ab4326d364ceb16e3a391a940299ca2))





## [6.0.7](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.0.6...@leavittsoftware/titanium-data-table@6.0.7) (2020-01-16)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [6.0.6](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.0.5...@leavittsoftware/titanium-data-table@6.0.6) (2020-01-15)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [6.0.5](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.0.4...@leavittsoftware/titanium-data-table@6.0.5) (2020-01-08)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [6.0.4](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.0.3...@leavittsoftware/titanium-data-table@6.0.4) (2019-12-30)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [6.0.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.0.2...@leavittsoftware/titanium-data-table@6.0.3) (2019-12-26)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [6.0.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.0.1...@leavittsoftware/titanium-data-table@6.0.2) (2019-12-18)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [6.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@6.0.0...@leavittsoftware/titanium-data-table@6.0.1) (2019-12-13)


### Bug Fixes

* **titanium-data-table:** Adds try catch for pending-state ([2a22ea4](https://github.com/LeavittSoftware/titanium-elements/commit/2a22ea4c91790cd11b29c542cb00560d7cc257f7))





# [6.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@5.0.6...@leavittsoftware/titanium-data-table@6.0.0) (2019-12-13)


### Features

* **titanium-data-table:** Add loadWhile function; remove isLoading ([c16da8e](https://github.com/LeavittSoftware/titanium-elements/commit/c16da8eb62456bfb9c5a5db7d61ca496bc8ad73c))


### BREAKING CHANGES

* **titanium-data-table:** REMOVES isLoading property.  Use loadWhile function to provide the datatable with a promise.





## [5.0.6](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@5.0.5...@leavittsoftware/titanium-data-table@5.0.6) (2019-12-12)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [5.0.5](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@5.0.4...@leavittsoftware/titanium-data-table@5.0.5) (2019-12-04)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [5.0.4](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@5.0.3...@leavittsoftware/titanium-data-table@5.0.4) (2019-11-19)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [5.0.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@5.0.2...@leavittsoftware/titanium-data-table@5.0.3) (2019-11-18)


### Bug Fixes

* improper type ([bead92c](https://github.com/LeavittSoftware/titanium-elements/commit/bead92c83451b800326bdc600d21b34d57f99545))





## [5.0.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@5.0.1...@leavittsoftware/titanium-data-table@5.0.2) (2019-11-14)


### Bug Fixes

* align search and tables actions ([7473279](https://github.com/LeavittSoftware/titanium-elements/commit/7473279))





## [5.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@5.0.0...@leavittsoftware/titanium-data-table@5.0.1) (2019-11-12)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





# [5.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@4.0.2...@leavittsoftware/titanium-data-table@5.0.0) (2019-11-08)


### Bug Fixes

* property types Boolean ([f7d50dc](https://github.com/LeavittSoftware/titanium-elements/commit/f7d50dc))


### Features

* Improved data table header layout ([57cb5e1](https://github.com/LeavittSoftware/titanium-elements/commit/57cb5e1))


### BREAKING CHANGES

* Slot 'table-sub-action' REMOVED.  Use slot 'filter' and 'filter-button'





## [4.0.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@4.0.1...@leavittsoftware/titanium-data-table@4.0.2) (2019-10-29)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [4.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@4.0.0...@leavittsoftware/titanium-data-table@4.0.1) (2019-09-27)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





# [4.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.3.3...@leavittsoftware/titanium-data-table@4.0.0) (2019-09-24)


### Bug Fixes

* Supresses intial page-chage event (0) on DT load ([a70658f](https://github.com/LeavittSoftware/titanium-elements/commit/a70658f))


### BREAKING CHANGES

* Data Table no longer emits an initial page change event when it is connected.





## [3.3.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.3.2...@leavittsoftware/titanium-data-table@3.3.3) (2019-09-19)


### Bug Fixes

* Improved UX of sorting with titanium data table header ([481c8ea](https://github.com/LeavittSoftware/titanium-elements/commit/481c8ea))





## [3.3.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.3.1...@leavittsoftware/titanium-data-table@3.3.2) (2019-09-19)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [3.3.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.3.0...@leavittsoftware/titanium-data-table@3.3.1) (2019-09-05)


### Bug Fixes

* double click not always firing on data-table-item. ([493d207](https://github.com/LeavittSoftware/titanium-elements/commit/493d207))





# [3.3.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.2.0...@leavittsoftware/titanium-data-table@3.3.0) (2019-07-31)


### Features

* **titanium-data-table:** Adds ability to disable select entirely ([f3b70fb](https://github.com/LeavittSoftware/titanium-elements/commit/f3b70fb))





# [3.2.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.1.2...@leavittsoftware/titanium-data-table@3.2.0) (2019-07-16)


### Bug Fixes

* Moves sub-action DOM position so that select veils it. ([396181b](https://github.com/LeavittSoftware/titanium-elements/commit/396181b))


### Features

* Add largePages property ([3be4336](https://github.com/LeavittSoftware/titanium-elements/commit/3be4336))
* defaults bg color to white. ([d8b5167](https://github.com/LeavittSoftware/titanium-elements/commit/d8b5167))





## [3.1.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.1.1...@leavittsoftware/titanium-data-table@3.1.2) (2019-07-02)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [3.1.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.1.0...@leavittsoftware/titanium-data-table@3.1.1) (2019-06-20)


### Bug Fixes

* removes extra margin on no results indicator ([e975d25](https://github.com/LeavittSoftware/titanium-elements/commit/e975d25))
* Updated lit-element from dependency to peer dependency ([63d3324](https://github.com/LeavittSoftware/titanium-elements/commit/63d3324))





# [3.1.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.0.3...@leavittsoftware/titanium-data-table@3.1.0) (2019-06-10)


### Bug Fixes

* Allowed flex items to wrap. Removed margin on bottom and set -16px margin left to counter 16px left on children ([45f97a3](https://github.com/LeavittSoftware/titanium-elements/commit/45f97a3))
* Removed padding in case no slotted children are provided ([21c0ea7](https://github.com/LeavittSoftware/titanium-elements/commit/21c0ea7))


### Features

* added new table-sub-actions slot ([68edb4d](https://github.com/LeavittSoftware/titanium-elements/commit/68edb4d))





## [3.0.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.0.2...@leavittsoftware/titanium-data-table@3.0.3) (2019-06-05)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [3.0.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.0.1...@leavittsoftware/titanium-data-table@3.0.2) (2019-06-03)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





## [3.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@3.0.0...@leavittsoftware/titanium-data-table@3.0.1) (2019-05-29)


### Bug Fixes

* Fixes broken css selector due to rename ([a4ed049](https://github.com/LeavittSoftware/titanium-elements/commit/a4ed049))





# [3.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@2.0.0...@leavittsoftware/titanium-data-table@3.0.0) (2019-05-28)


### Features

* Adds site-wide theming vars; updates demo to match ([245abf9](https://github.com/LeavittSoftware/titanium-elements/commit/245abf9))
* Adds site-wide theming vars; updates demo to match ([0a93672](https://github.com/LeavittSoftware/titanium-elements/commit/0a93672))
* Adds site-wide theming vars; updates demo to match ([2a17288](https://github.com/LeavittSoftware/titanium-elements/commit/2a17288))
* More consistent app variables ([8f9655e](https://github.com/LeavittSoftware/titanium-elements/commit/8f9655e))


### BREAKING CHANGES

* Changes CSS variables
* Changes CSS variables
* Changes CSS variables





# [2.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@1.0.1...@leavittsoftware/titanium-data-table@2.0.0) (2019-05-02)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table






## [1.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/titanium-data-table@1.0.0...@leavittsoftware/titanium-data-table@1.0.1) (2019-04-30)

**Note:** Version bump only for package @leavittsoftware/titanium-data-table





# 1.0.0 (2019-04-29)


### Features

* Adds titanium-data-table-header package ([e88c7f0](https://github.com/LeavittSoftware/titanium-elements/commit/e88c7f0))


### BREAKING CHANGES

* Initial release.
