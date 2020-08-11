# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.2](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.3.1...@comparethemarketau/manor-provider@0.3.2) (2020-08-11)

**Note:** Version bump only for package @comparethemarketau/manor-provider





## [0.3.1](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.3.0...@comparethemarketau/manor-provider@0.3.1) (2020-08-07)

**Note:** Version bump only for package @comparethemarketau/manor-provider





# [0.3.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.2.6...@comparethemarketau/manor-provider@0.3.0) (2020-07-20)


### Features

* **providers:** remove LayerEvent/Toast providers from manorprovider ([#348](https://github.com/comparethemarketau/manor-react/issues/348)) ([461d724](https://github.com/comparethemarketau/manor-react/commit/461d72498fca1aca9de0056a27d1a3d17a89ea77))


### BREAKING CHANGES

* **providers:** drawers and modals are no longer managed by manor, users will need to use the
zIndex prop (added to both) to do so particularly when multiple layered components are rendered
simultaneously. Additionally, you will need to implement your own keyboard bindings and focus
trapping to ensure conformance to the design system.





## [0.2.6](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.2.5...@comparethemarketau/manor-provider@0.2.6) (2020-07-14)


### Bug Fixes

* **toastmanager:** removed portals from ToastManager ([#345](https://github.com/comparethemarketau/manor-react/issues/345)) ([1533377](https://github.com/comparethemarketau/manor-react/commit/1533377910e9cbac266abe24fae1ee42eba4c52f))





## [0.2.5](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.2.4...@comparethemarketau/manor-provider@0.2.5) (2020-06-21)

**Note:** Version bump only for package @comparethemarketau/manor-provider





## [0.2.4](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.2.3...@comparethemarketau/manor-provider@0.2.4) (2020-06-17)

**Note:** Version bump only for package @comparethemarketau/manor-provider





## [0.2.3](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.2.2...@comparethemarketau/manor-provider@0.2.3) (2020-06-16)

**Note:** Version bump only for package @comparethemarketau/manor-provider





## [0.2.2](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.2.1...@comparethemarketau/manor-provider@0.2.2) (2020-06-15)

**Note:** Version bump only for package @comparethemarketau/manor-provider





## [0.2.1](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.2.0...@comparethemarketau/manor-provider@0.2.1) (2020-06-15)

**Note:** Version bump only for package @comparethemarketau/manor-provider





# [0.2.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-provider@0.1.0...@comparethemarketau/manor-provider@0.2.0) (2020-06-12)


### Features

* **toasts:** manorProvider now injects ToastManager ([#333](https://github.com/comparethemarketau/manor-react/issues/333)) ([8621888](https://github.com/comparethemarketau/manor-react/commit/862188867bbc8258b29fa162f46e5ad5b108f778))


### BREAKING CHANGES

* **toasts:** Added ToastNotification component. Refactored toasts such that ManorProvider
injects the ToastManager. addToasts also now expects a <ToastNotification> instead of an object.

* fix(story): fix typo in toast notification story





# 0.1.0 (2020-06-11)


### Features

* **packages:** migrated to monorepo ([920a45e](https://github.com/comparethemarketau/manor-react/commit/920a45ec4b40a19de32f39f29693cbe1b1f314ae))
