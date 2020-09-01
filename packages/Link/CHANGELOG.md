# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.4.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-link@0.2.0...@comparethemarketau/manor-link@0.4.0) (2020-09-01)


### Features

* **link:** add role and onClick props to Link ([#370](https://github.com/comparethemarketau/manor-react/issues/370)) ([5d5d06c](https://github.com/comparethemarketau/manor-react/commit/5d5d06c94ac878cf1b0e6e642ceef0dd1bcbcd3b))





# [0.3.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-link@0.2.0...@comparethemarketau/manor-link@0.3.0) (2020-08-19)


### Features

* **link:** add role and onClick props to Link ([1e74840](https://github.com/comparethemarketau/manor-react/commit/1e74840485d79393afe0775d604797eb50e7590f))





# [0.2.0](https://github.com/comparethemarketau/manor-react/compare/@comparethemarketau/manor-link@0.1.0...@comparethemarketau/manor-link@0.2.0) (2020-08-18)


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
