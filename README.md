![@superbet/commitlint-config logo](/logo.svg "CommitLint logo reimagined with Superbet colors")

# Superbet Shared Commitlint Config

[Commitlint](https://commitlint.js.org) is a commit message linter.

- [Committing the code guide](https://www.notion.so/superbet/Committing-the-code-204a158c82c348b68ced716911251afa)

## What it does?

- Extends [`@commitlint/config-conventional`](https://www.npmjs.com/package/@commitlint/config-conventional)
- Adds a rule that enforces `fix` and `feat` commits to have a Jira ticket id at the end in square brackets.

### Allowed commits

```
docs: fixed typo in readme
feat: infantry units move 10% faster [ABC-123]
```

### Disallowed commits

```
fix: ships no longer count as infantry
```

## Add to a Project

### Install Configuration

```bash
npm i @commitlint/{config-conventional,cli} @superbet/commitlint-config --save-dev
```

### Add to Commitlint Config

```js
module.exports = {
  extends: ["@superbet/commitlint-config"],
};
```

_Using `.commitlintrc.js`_

### Add to Husky

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## Suggestions?

Create a discussion on [GitHub](/discussions) or [learn how to make a contribution](https://github.com/firstcontributions/first-contributions).
