# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.8](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-fonts@0.2.7...@comparethemarketau/manor-fonts@0.2.8) (2020-09-18)


### Bug Fixes

* **dependencies:** fix more incorrect dependencies ([#392](https://github.com/comparethemarketau/manor-react/issues/392)) ([6fa55a1](https://github.com/comparethemarketau/manor-react/commit/6fa55a11ba89125ccfe61385d9776e4185bff6f3))





## [0.2.7](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-fonts@0.2.6...@comparethemarketau/manor-fonts@0.2.7) (2020-09-18)

**Note:** Version bump only for package @comparethemarketau/manor-fonts





## [0.2.6](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-fonts@0.2.5...@comparethemarketau/manor-fonts@0.2.6) (2020-09-16)

**Note:** Version bump only for package @comparethemarketau/manor-fonts





## [0.2.5](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-fonts@0.2.4...@comparethemarketau/manor-fonts@0.2.5) (2020-09-16)

**Note:** Version bump only for package @comparethemarketau/manor-fonts





## [0.2.4](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-fonts@0.2.3...@comparethemarketau/manor-fonts@0.2.4) (2020-09-09)

**Note:** Version bump only for package @comparethemarketau/manor-fonts





## [0.2.3](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-fonts@0.2.2...@comparethemarketau/manor-fonts@0.2.3) (2020-09-08)

**Note:** Version bump only for package @comparethemarketau/manor-fonts





## [0.2.2](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-fonts@0.2.1...@comparethemarketau/manor-fonts@0.2.2) (2020-09-04)

**Note:** Version bump only for package @comparethemarketau/manor-fonts





## [0.2.1](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-fonts@0.2.0...@comparethemarketau/manor-fonts@0.2.1) (2020-09-03)

**Note:** Version bump only for package @comparethemarketau/manor-fonts





# [0.2.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-fonts@0.1.0...@comparethemarketau/manor-fonts@0.2.0) (2020-08-18)


### Features

* **all:** remove manorprovider from components, fix typography props ([#365](https://github.com/comparethemarketau/manor-react/issues/365)) ([9297cf7](https://github.com/comparethemarketau/manor-react/commit/9297cf72e8a7fe8762ec0dadf07d026aa88cbb44))





# 0.1.0 (2020-08-17)


* Fix/global styles micro ui (#359) ([bcf8ce9](https://github.com/comparethemarketau/manor-react/commit/bcf8ce92ba170a51113a4022728da22f47a6a768)), closes [#359](https://github.com/comparethemarketau/manor-react/issues/359)


### Features

* **all:** added missing readmes/changelogs to new packages ([#361](https://github.com/comparethemarketau/manor-react/issues/361)) ([0212404](https://github.com/comparethemarketau/manor-react/commit/021240449d7b766ea078e3f0c6bae5cfae763c54))


### BREAKING CHANGES

* Global styles have been removed from ManorProvider, as such typography is not
styled by default. Import the Font component once in your application (or macro-ui) and use the
Typography component to render text, and the Link component to render links.

* fix(fonts): fix fonts dependencies

* fix(deps): fix provider dependencies

* fix(feedback): fixes based on PR feedback

Co-authored-by: PSJgit <psjj.dev@gmail.com>
