# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
