# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.2.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-tabs@0.1.0...@comparethemarketau/manor-tabs@0.2.0) (2020-06-12)


### Features

* **toasts:** manorProvider now injects ToastManager ([#333](https://github.com/comparethemarketau/manor-react/issues/333)) ([8621888](https://github.com/comparethemarketau/manor-react/commit/862188867bbc8258b29fa162f46e5ad5b108f778))


### BREAKING CHANGES

* **toasts:** Added ToastNotification component. Refactored toasts such that ManorProvider
injects the ToastManager. addToasts also now expects a <ToastNotification> instead of an object.

* fix(story): fix typo in toast notification story





# 0.1.0 (2020-06-11)


### Features

* **packages:** migrated to monorepo ([920a45e](https://github.com/comparethemarketau/manor-react/commit/920a45ec4b40a19de32f39f29693cbe1b1f314ae))
