# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [9.3.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@9.2.3...@leavittsoftware/api-service@9.3.0) (2022-03-31)


### Features

* **api-service:** add support for error_description ([0b92c99](https://github.com/LeavittSoftware/titanium-elements/commit/0b92c993397f43f15d9d664af72669a1085dcbb6))





## [9.2.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@9.2.2...@leavittsoftware/api-service@9.2.3) (2022-03-31)

**Note:** Version bump only for package @leavittsoftware/api-service





## [9.2.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@9.2.1...@leavittsoftware/api-service@9.2.2) (2022-03-31)

**Note:** Version bump only for package @leavittsoftware/api-service





## [9.2.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@9.2.0...@leavittsoftware/api-service@9.2.1) (2022-03-30)

**Note:** Version bump only for package @leavittsoftware/api-service





# [9.2.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@9.1.1...@leavittsoftware/api-service@9.2.0) (2022-03-22)


### Bug Fixes

* **api-service:** remove improper assumption that return object for simple types ([e55f663](https://github.com/LeavittSoftware/titanium-elements/commit/e55f66374c6ab42ff9620800c2860a3560e77e92))


### Features

* **api-service:** adds ability to parse oauth spec error message text ([91dac85](https://github.com/LeavittSoftware/titanium-elements/commit/91dac851b2091ae36bdee024dfa5516f6199fef5))





## [9.1.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@9.1.0...@leavittsoftware/api-service@9.1.1) (2022-03-21)


### Bug Fixes

* **api-service:** remove improper assumption that return object for simple types ([e55f663](https://github.com/LeavittSoftware/titanium-elements/commit/e55f66374c6ab42ff9620800c2860a3560e77e92))





# [9.1.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@9.0.1...@leavittsoftware/api-service@9.1.0) (2022-03-14)


### Features

* **api-service:** allow for unencapsulated json in api returns ([5700cf5](https://github.com/LeavittSoftware/titanium-elements/commit/5700cf5fc168134850237c972e4c485e26a8bc65))





## [9.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@8.0.1...@leavittsoftware/api-service@9.0.1) (2022-03-14)

**Note:** Version bump only for package @leavittsoftware/api-service





# [9.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@8.0.1...@leavittsoftware/api-service@9.0.0) (2022-03-10)


### Bug Fixes

* **api-service:** prevent uncaught exceptions in aggregateResponses ([a8a3421](https://github.com/LeavittSoftware/titanium-elements/commit/a8a342194bf8872ba38612d01aef8759b5d51ecb))
* **api-service:** properly handle a CORS error from XhrRequest ([21d0f93](https://github.com/LeavittSoftware/titanium-elements/commit/21d0f9335f1afac8896e25171040231315bd5655))


### BREAKING CHANGES

* **api-service:** change signature of aggregateResponses to take a func that returns promise vs only  promises in order to control execution





## 8.0.1 (2022-03-09)


### Bug Fixes

* **api-service:** properly handle a CORS error from XhrRequest ([21d0f93](https://github.com/LeavittSoftware/titanium-elements/commit/21d0f9335f1afac8896e25171040231315bd5655))





# [8.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@7.3.3...@leavittsoftware/api-service@8.0.0) (2022-03-01)


### Bug Fixes

* **api-service:** fallback to message then error ([7c39a05](https://github.com/LeavittSoftware/titanium-elements/commit/7c39a05127feae2ebbbae90fd67cf911a607dca2))


* feat(api-service)!: add more error details on GET, POST, PATCH, DELETE ([f57e984](https://github.com/LeavittSoftware/titanium-elements/commit/f57e984cef3d019132b7700f56cc32a2211dbc93))


### BREAKING CHANGES

* Error return object from GET, POST, PATCH, DELETE has change to HTTPError object





## [7.3.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@7.3.2...@leavittsoftware/api-service@7.3.3) (2022-03-01)


### Bug Fixes

* get lit and tslib versions nsync ([c8fa1b7](https://github.com/LeavittSoftware/titanium-elements/commit/c8fa1b77320c6b6854009bb076ba0bcc2c632ae0))





## [7.3.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@7.3.1...@leavittsoftware/api-service@7.3.2) (2022-02-22)


### Bug Fixes

* **api-service:** add error status code checks prior to rejecting promise ([fe3fe7a](https://github.com/LeavittSoftware/titanium-elements/commit/fe3fe7a12cc3ebd85db268fd161314c7a1c58450))
* **api-service:** corrects broken range ([102054e](https://github.com/LeavittSoftware/titanium-elements/commit/102054ebfd760e17f8c42bdb4040346edb1cfeac))





## [7.3.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@7.3.0...@leavittsoftware/api-service@7.3.1) (2022-02-22)


### Bug Fixes

* **api-service:** add error status code checks prior to rejecting promise ([fe3fe7a](https://github.com/LeavittSoftware/titanium-elements/commit/fe3fe7a12cc3ebd85db268fd161314c7a1c58450))





# [7.3.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@7.2.1...@leavittsoftware/api-service@7.3.0) (2022-02-22)


### Features

* **api-service:** add support for value error messages in newer API's ([0ad92a2](https://github.com/LeavittSoftware/titanium-elements/commit/0ad92a226141876df675e41f69c27f053e242ccf))





## 7.2.1 (2022-01-28)

**Note:** Version bump only for package @leavittsoftware/api-service





# 7.2.0 (2022-01-24)


### Features

* **api-service:** add support for 409 on POST ([d7ed9a9](https://github.com/LeavittSoftware/titanium-elements/commit/d7ed9a9c7853168ea4c8e33f3bc9c187f322c34a))





## 7.1.3 (2021-11-10)

**Note:** Version bump only for package @leavittsoftware/api-service





## [7.1.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@7.1.1...@leavittsoftware/api-service@7.1.2) (2021-11-09)

**Note:** Version bump only for package @leavittsoftware/api-service





## 7.1.1 (2021-11-08)

**Note:** Version bump only for package @leavittsoftware/api-service





# 7.1.0 (2021-09-23)


### Features

* convert element imports to lit 2.0 ([2fb5a2d](https://github.com/LeavittSoftware/titanium-elements/commit/2fb5a2da5a5af636541ce58e398fdf587e2c008a))





## [7.0.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@7.0.0...@leavittsoftware/api-service@7.0.2) (2021-09-07)

**Note:** Version bump only for package @leavittsoftware/api-service





## [7.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@7.0.0...@leavittsoftware/api-service@7.0.1) (2021-08-31)

**Note:** Version bump only for package @leavittsoftware/api-service





# 7.0.0 (2021-08-27)


### Bug Fixes

* abort error response ([865ca11](https://github.com/LeavittSoftware/titanium-elements/commit/865ca11a272e9bd9c2400aa44a55ad45262f1845))


### Features

* takes options instead of appname ([eb89ad2](https://github.com/LeavittSoftware/titanium-elements/commit/eb89ad2f5dd654e32d0efd10510f4613226d2da6))


### BREAKING CHANGES

* updates the parameters passed into api service request methods to take options instead of an appname





## 6.3.3 (2021-08-19)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.3.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.3.1...@leavittsoftware/api-service@6.3.2) (2021-03-31)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.3.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.3.0...@leavittsoftware/api-service@6.3.1) (2021-03-31)

**Note:** Version bump only for package @leavittsoftware/api-service





# 6.3.0 (2021-03-25)


### Features

* adds options parameter to api service ([15cf540](https://github.com/LeavittSoftware/titanium-elements/commit/15cf540883981be7f9c09df286ea4155b2ce734b))





## [6.2.17](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.2.16...@leavittsoftware/api-service@6.2.17) (2020-06-30)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.2.16](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.2.15...@leavittsoftware/api-service@6.2.16) (2020-06-26)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.2.15](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.2.14...@leavittsoftware/api-service@6.2.15) (2020-06-26)

**Note:** Version bump only for package @leavittsoftware/api-service





## 6.2.14 (2020-06-26)

**Note:** Version bump only for package @leavittsoftware/api-service





## 6.2.13 (2020-06-15)

**Note:** Version bump only for package @leavittsoftware/api-service





## 6.2.12 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/api-service





## 6.2.11 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/api-service





## 6.2.10 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/api-service





## 6.2.9 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/api-service





## 6.2.8 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/api-service





## 6.2.7 (2020-06-08)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.2.6](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.2.5...@leavittsoftware/api-service@6.2.6) (2020-04-02)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.2.5](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.2.4...@leavittsoftware/api-service@6.2.5) (2020-04-02)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.2.4](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.2.3...@leavittsoftware/api-service@6.2.4) (2020-03-25)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.2.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.2.2...@leavittsoftware/api-service@6.2.3) (2020-03-25)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.2.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.2.1...@leavittsoftware/api-service@6.2.2) (2020-03-24)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.2.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.2.0...@leavittsoftware/api-service@6.2.1) (2020-03-12)


### Bug Fixes

* allow options to be optionally set ([9b3354a](https://github.com/LeavittSoftware/titanium-elements/commit/9b3354a3fb1119a13495cf05280986ae3ca61213))





# [6.2.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.1.2...@leavittsoftware/api-service@6.2.0) (2020-03-12)


### Features

* Adds disableAuthentication and defaultLGAppNameHeader options ([de382ae](https://github.com/LeavittSoftware/titanium-elements/commit/de382ae3cc0f91bea2d38453d66ddc0210412afd))





## [6.1.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.1.1...@leavittsoftware/api-service@6.1.2) (2020-02-13)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.1.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.1.0...@leavittsoftware/api-service@6.1.1) (2020-02-05)

**Note:** Version bump only for package @leavittsoftware/api-service





# [6.1.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.13...@leavittsoftware/api-service@6.1.0) (2020-02-04)


### Features

*  Publish 7df83da092a1602559747dc9ee091c5bc9742972 ([4fc853c](https://github.com/LeavittSoftware/titanium-elements/commit/4fc853c827e521b1c63b4d7f1748776798cf0e0c))
* Adds mix-ins for Leavitt Groups API's.  ([4d8e3bc](https://github.com/LeavittSoftware/titanium-elements/commit/4d8e3bcf95881c136e4c7a5d33cdd3949ebd199a))





## [6.0.13](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.12...@leavittsoftware/api-service@6.0.13) (2020-01-17)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.0.12](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.11...@leavittsoftware/api-service@6.0.12) (2019-12-19)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.0.11](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.10...@leavittsoftware/api-service@6.0.11) (2019-12-18)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.0.10](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.9...@leavittsoftware/api-service@6.0.10) (2019-12-13)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.0.9](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.8...@leavittsoftware/api-service@6.0.9) (2019-11-26)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.0.8](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.7...@leavittsoftware/api-service@6.0.8) (2019-11-20)


### Bug Fixes

* Version bump to restore compilation.  ([a23c11f](https://github.com/LeavittSoftware/titanium-elements/commit/a23c11f1768ba53ffecf8a5b80268aa6b1867235))





## [6.0.7](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.6...@leavittsoftware/api-service@6.0.7) (2019-11-18)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.0.6](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.5...@leavittsoftware/api-service@6.0.6) (2019-09-23)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.0.5](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.4...@leavittsoftware/api-service@6.0.5) (2019-09-12)

**Note:** Version bump only for package @leavittsoftware/api-service





## [6.0.4](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.3...@leavittsoftware/api-service@6.0.4) (2019-07-02)


### Bug Fixes

* fixes race condition caused by asynchronous appName setting ([3fe2a51](https://github.com/LeavittSoftware/titanium-elements/commit/3fe2a51))





## [6.0.3](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.2...@leavittsoftware/api-service@6.0.3) (2019-07-02)


### Bug Fixes

* Fixes bad ref to outer scope var in patchReturnDtoAsync ([739cbba](https://github.com/LeavittSoftware/titanium-elements/commit/739cbba))
* Updated lit-element from dependency to peer dependency ([63d3324](https://github.com/LeavittSoftware/titanium-elements/commit/63d3324))





## [6.0.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.1...@leavittsoftware/api-service@6.0.2) (2019-06-10)


### Bug Fixes

* Fixes presisting appName headers. ([fcb5888](https://github.com/LeavittSoftware/titanium-elements/commit/fcb5888))





## [6.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@6.0.0...@leavittsoftware/api-service@6.0.1) (2019-05-28)

**Note:** Version bump only for package @leavittsoftware/api-service





# [6.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@5.0.0...@leavittsoftware/api-service@6.0.0) (2019-05-21)


### Features

* **api-service:** Introduces new odata-response type ([2772cee](https://github.com/LeavittSoftware/titanium-elements/commit/2772cee))


### BREAKING CHANGES

* **api-service:** Signature change due to introduction of odata-reposnse type.





# [5.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@4.0.2...@leavittsoftware/api-service@5.0.0) (2019-05-10)


### Bug Fixes

* Corrects spelling in progress event ([221e3ec](https://github.com/LeavittSoftware/titanium-elements/commit/221e3ec))
* Corrects typo in error message. ([36ed622](https://github.com/LeavittSoftware/titanium-elements/commit/36ed622))


### Features

* Exposes add and delete header on element. ([e04acba](https://github.com/LeavittSoftware/titanium-elements/commit/e04acba))


### BREAKING CHANGES

* Progress event name changed to fix typo.





## [4.0.2](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@4.0.1...@leavittsoftware/api-service@4.0.2) (2019-05-06)

**Note:** Version bump only for package @leavittsoftware/api-service





## [4.0.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@4.0.0...@leavittsoftware/api-service@4.0.1) (2019-05-02)


### Bug Fixes

* Restores adding bearer token on POST. ([762743a](https://github.com/LeavittSoftware/titanium-elements/commit/762743a))
* **uploadFile:** Fixes improper setting of headers ([1d4af56](https://github.com/LeavittSoftware/titanium-elements/commit/1d4af56))





# [4.0.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@3.3.0...@leavittsoftware/api-service@4.0.0) (2019-05-02)

**Note:** Version bump only for package @leavittsoftware/api-service






# [3.3.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@3.2.0...@leavittsoftware/api-service@3.3.0) (2019-05-01)


### Features

* **api-service:** Adds uploadFile method to api-service ([fd9ee2c](https://github.com/LeavittSoftware/titanium-elements/commit/fd9ee2c))





# [3.2.0](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@3.1.1...@leavittsoftware/api-service@3.2.0) (2019-04-30)


### Features

* Improved typing on POST, GET, PATCH, DEL ([4cee8c2](https://github.com/LeavittSoftware/titanium-elements/commit/4cee8c2))





## [3.1.1](https://github.com/LeavittSoftware/titanium-elements/compare/@leavittsoftware/api-service@3.1.0...@leavittsoftware/api-service@3.1.1) (2019-04-30)

**Note:** Version bump only for package @leavittsoftware/api-service





# 3.1.0 (2019-04-30)


### Features

* Adds api-service package. ([79516e5](https://github.com/LeavittSoftware/titanium-elements/commit/79516e5))
