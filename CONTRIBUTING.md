# Contributing Guidelines

## General

* Develop in an appropriate branch, not on `master`
* Follow branching standards (i.e. naming convention feature/CTM-123-add-component)
* Merge requests must be reviewed and approved by at least one code owner

## Committing

[Commitizen](https://github.com/commitizen/cz-cli) is implemented and helps to properly format the commit message 
in command line, it will also run tests and linting pre-commit. You can run **commitizen** using ```yarn commit``` or ```npm run commit``` 

#### Commit guidelines
* Don't capitalize the letter
* Use the imperative mood ("move cursor to..." not "moves cursor to...")
* Use present tense ("add feature" not "added feature")
* No period (.) at the end
* Limit the commit message to 72 characters or less. This allows the message to be easier to read on github. 
The subject line with more than 72 characters will be truncated with an ellipsis on github web page.
* Each commit message should include a **type**, a **scope** and a **description**: ``<type>[optional scope]: <description>``
	* The following are the examples of commit message: 

```
- feat(standard): add style config and refactor to match  
- fix(config): only override publicPath when served by webpack    
- docs(styles): add css naming conventions 
- feat(lang): added polish language
- build(deps): added react-responsive
- docs: correct spelling of CHANGELOG
```
For more details about convention on commit messages, check out [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/).

## Pull Requests

Please ensure:

1. Existing tests pass
2. New test cases covering your changes are added (we have a high level of test covereage in manor, please try to keep it that way!)
3. Include context for the change in your PR
4. Ensure breaking changes are documented 

## Releasing
Releasing is done by Bamboo using the semantic-release package. To trigger a release of the manor library you must merge 
a feature branch to Master. **Unfortunately** this may not always happen due to the way Github does squash merges 
(https://github.com/semantic-release/semantic-release/issues/734). Currently we haven't resolved this and are working around 
it by merging a single commit (properly formatted) after the fact to get it to release.
