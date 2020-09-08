# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.7.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.6.2...@comparethemarketau/manor-input@0.7.0) (2020-09-08)


### Features

* **hooks:** implemented useIsBreakpointRange hook and modified useBreakpoint to take in custom breakpoints ([#380](https://github.com/comparethemarketau/manor-react/issues/380)) ([4f63615](https://github.com/comparethemarketau/manor-react/commit/4f63615999b3c2fcaf947bc6fa248e701f7f65f1))





## [0.6.2](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.6.1...@comparethemarketau/manor-input@0.6.2) (2020-09-04)

**Note:** Version bump only for package @comparethemarketau/manor-input





## [0.6.1](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.6.0...@comparethemarketau/manor-input@0.6.1) (2020-09-03)

**Note:** Version bump only for package @comparethemarketau/manor-input





# [0.6.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.5.0...@comparethemarketau/manor-input@0.6.0) (2020-08-18)


### Features

* **all:** remove manorprovider from components, fix typography props ([#365](https://github.com/comparethemarketau/manor-react/issues/365)) ([9297cf7](https://github.com/comparethemarketau/manor-react/commit/9297cf72e8a7fe8762ec0dadf07d026aa88cbb44))





# [0.5.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.4.4...@comparethemarketau/manor-input@0.5.0) (2020-08-17)


* Fix/global styles micro ui (#359) ([bcf8ce9](https://github.com/comparethemarketau/manor-react/commit/bcf8ce92ba170a51113a4022728da22f47a6a768)), closes [#359](https://github.com/comparethemarketau/manor-react/issues/359)


### BREAKING CHANGES

* Global styles have been removed from ManorProvider, as such typography is not
styled by default. Import the Font component once in your application (or macro-ui) and use the
Typography component to render text, and the Link component to render links.

* fix(fonts): fix fonts dependencies

* fix(deps): fix provider dependencies

* fix(feedback): fixes based on PR feedback

Co-authored-by: PSJgit <psjj.dev@gmail.com>





## [0.4.4](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.4.3...@comparethemarketau/manor-input@0.4.4) (2020-08-11)

**Note:** Version bump only for package @comparethemarketau/manor-input





## [0.4.3](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.4.2...@comparethemarketau/manor-input@0.4.3) (2020-08-11)

**Note:** Version bump only for package @comparethemarketau/manor-input





## [0.4.2](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.4.1...@comparethemarketau/manor-input@0.4.2) (2020-08-07)

**Note:** Version bump only for package @comparethemarketau/manor-input





## [0.4.1](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.4.0...@comparethemarketau/manor-input@0.4.1) (2020-07-24)

**Note:** Version bump only for package @comparethemarketau/manor-input





# [0.4.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.3.7...@comparethemarketau/manor-input@0.4.0) (2020-07-20)


### Features

* **providers:** remove LayerEvent/Toast providers from manorprovider ([#348](https://github.com/comparethemarketau/manor-react/issues/348)) ([461d724](https://github.com/comparethemarketau/manor-react/commit/461d72498fca1aca9de0056a27d1a3d17a89ea77))


### BREAKING CHANGES

* **providers:** drawers and modals are no longer managed by manor, users will need to use the
zIndex prop (added to both) to do so particularly when multiple layered components are rendered
simultaneously. Additionally, you will need to implement your own keyboard bindings and focus
trapping to ensure conformance to the design system.





## [0.3.7](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.3.6...@comparethemarketau/manor-input@0.3.7) (2020-07-14)


### Bug Fixes

* **toastmanager:** removed portals from ToastManager ([#345](https://github.com/comparethemarketau/manor-react/issues/345)) ([1533377](https://github.com/comparethemarketau/manor-react/commit/1533377910e9cbac266abe24fae1ee42eba4c52f))





## [0.3.6](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.3.5...@comparethemarketau/manor-input@0.3.6) (2020-06-21)


### Bug Fixes

* **imports:** fix relative imports that shouldve been package ([#338](https://github.com/comparethemarketau/manor-react/issues/338)) ([d41af0a](https://github.com/comparethemarketau/manor-react/commit/d41af0aea1f21e2fd30d281301648d44fc566da4))





## [0.3.5](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.3.4...@comparethemarketau/manor-input@0.3.5) (2020-06-17)

**Note:** Version bump only for package @comparethemarketau/manor-input





## [0.3.4](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.3.3...@comparethemarketau/manor-input@0.3.4) (2020-06-16)

**Note:** Version bump only for package @comparethemarketau/manor-input





## [0.3.3](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.3.2...@comparethemarketau/manor-input@0.3.3) (2020-06-16)

**Note:** Version bump only for package @comparethemarketau/manor-input





## [0.3.2](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.3.1...@comparethemarketau/manor-input@0.3.2) (2020-06-16)

**Note:** Version bump only for package @comparethemarketau/manor-input





## [0.3.1](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.3.0...@comparethemarketau/manor-input@0.3.1) (2020-06-15)

**Note:** Version bump only for package @comparethemarketau/manor-input





# [0.3.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.2.0...@comparethemarketau/manor-input@0.3.0) (2020-06-12)


### Features

* **toasts:** manorProvider now injects ToastManager ([#333](https://github.com/comparethemarketau/manor-react/issues/333)) ([8621888](https://github.com/comparethemarketau/manor-react/commit/862188867bbc8258b29fa162f46e5ad5b108f778))


### BREAKING CHANGES

* **toasts:** Added ToastNotification component. Refactored toasts such that ManorProvider
injects the ToastManager. addToasts also now expects a <ToastNotification> instead of an object.

* fix(story): fix typo in toast notification story





# [0.2.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-input@0.1.0...@comparethemarketau/manor-input@0.2.0) (2020-06-11)


### Features

* **input:** make date input more flexible ([#331](https://github.com/comparethemarketau/manor-react/issues/331)) ([9020c88](https://github.com/comparethemarketau/manor-react/commit/9020c88ba8c9f7630b04f5eee3b557eaaaf57550))





# 0.1.0 (2020-06-11)


### Features

* **packages:** migrated to monorepo ([920a45e](https://github.com/comparethemarketau/manor-react/commit/920a45ec4b40a19de32f39f29693cbe1b1f314ae))
