# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.2.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-typography@0.1.3...@comparethemarketau/manor-typography@0.2.0) (2020-07-20)


### Features

* **providers:** remove LayerEvent/Toast providers from manorprovider ([#348](https://github.com/comparethemarketau/manor-react/issues/348)) ([461d724](https://github.com/comparethemarketau/manor-react/commit/461d72498fca1aca9de0056a27d1a3d17a89ea77))


### BREAKING CHANGES

* **providers:** drawers and modals are no longer managed by manor, users will need to use the
zIndex prop (added to both) to do so particularly when multiple layered components are rendered
simultaneously. Additionally, you will need to implement your own keyboard bindings and focus
trapping to ensure conformance to the design system.





## [0.1.3](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-typography@0.1.2...@comparethemarketau/manor-typography@0.1.3) (2020-07-14)


### Bug Fixes

* **toastmanager:** removed portals from ToastManager ([#345](https://github.com/comparethemarketau/manor-react/issues/345)) ([1533377](https://github.com/comparethemarketau/manor-react/commit/1533377910e9cbac266abe24fae1ee42eba4c52f))





## [0.1.2](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-typography@0.1.1...@comparethemarketau/manor-typography@0.1.2) (2020-06-16)


### Bug Fixes

* **typography:** trigger a release ([#340](https://github.com/comparethemarketau/manor-react/issues/340)) ([12c0411](https://github.com/comparethemarketau/manor-react/commit/12c04118e1854a895d34f9fc07ed7f4825dd23bc))





## [0.1.1](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-typography@0.1.0...@comparethemarketau/manor-typography@0.1.1) (2020-06-15)

**Note:** Version bump only for package @comparethemarketau/manor-typography





# 0.1.0 (2020-06-11)


### Features

* **packages:** migrated to monorepo ([920a45e](https://github.com/comparethemarketau/manor-react/commit/920a45ec4b40a19de32f39f29693cbe1b1f314ae))
