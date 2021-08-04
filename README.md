# Superbet Shared Commitlint Config

[Commitlint](https://commitlint.js.org) is a commit message linter.

- [Committing the code guide](https://www.notion.so/superbet/Committing-the-code-204a158c82c348b68ced716911251afa)

## Add to a Project

### Install Configuration

```bash
npm i @commitlint/{config-conventional,cli} @superbet-group/commitlint-config --save-dev
```

### Add to Commitlint Config

```js
module.exports = {
    extends: ["@superbet-group/commitlint-config"]
};
```

_Using `.commitlintrc.js`_


### Add to Husky
```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## Suggestions?

Create a discussion on `#tech-frontend-developers` Slack channel and open a PR.
