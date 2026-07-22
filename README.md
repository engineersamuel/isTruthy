<div align="center">
  <h1>
    <br/>
    ⚖️
    <br />
    Truthiness with options!
    <br />
    <br />
  </h1>
  <sup>
    <br />
    <a href="https://www.npmjs.com/package/@engineersamuel/istruthy">
       <img src="https://img.shields.io/npm/v/@engineersamuel/istruthy.svg" alt="npm package" />
    </a>
    <a href="https://github.com/engineersamuel/isTruthy/issues">
      <img src="https://img.shields.io/github/issues/engineersamuel/isTruthy" alt="github issues" />
    </a>
    <a href="https://www.npmjs.com/package/@engineersamuel/istruthy">
      <img src="https://img.shields.io/npm/dm/@engineersamuel/istruthy.svg" alt="npm downloads" />
    </a>
  </sup>
  <br />
  <pre>npm i <a href="https://www.npmjs.com/package/@engineersamuel/istruthy">@engineersamuel/istruthy</a></pre>
  <br />
  Zero dependency micro-library (1kb minified / 2.7kb unminified)
  <br />
</div>

# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Why](#why)
  - [Install](#install)
  - [Usage](#usage)
  - [Config](#config)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [Publishing](#publishing)
  - [License](#license)

## Why

Most truthiness libraries are either extremely basic or simply adhere to the standard defnition of [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) in JavaScript.

However, what happens when you want to consider `' '`, `[]`, `{}`, `0`, or `[null]` false?  This is where `@engineersamuel/istruthy` comes in.

## Install

`$ npm i @engineersamuel/istruthy`

## Usage

```javascript
import { isTruthy, isFalsy } from '@engineersamuel/istruthy';

console.log(isTruthy('abc')); // prints true
console.log(isTruthy('', { isEmptyStringFalse: true })); // prints false

console.log(isFalsy('abc')); // prints false
console.log(isFalsy('', { isEmptyStringFalse: true })); // prints true
```

See the `*.spec.ts` files in the [./test](https://github.com/engineersamuel/isTruthy/tree/master/test) directory for a great reference on using `isTruthy`.

If you want to reference this library directly in html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Other resources here -->
    <!-- ... -->
    <!-- Assembler CSS -->
    <script src="https://cdn.jsdelivr.net/npm/@engineersamuel/istruthy@1/dist/index.min.js"></script>
</head>
<body>
<!-- Your code here -->
  <script>
    console.log(Truthiness.isTruthy('abc')); // prints true
    console.log(Truthiness.isTruthy('', { isEmptyStringFalse: true })); // prints false

    console.log(Truthiness.isFalsy('abc')); // prints false
    console.log(Truthiness.isFalsy('', { isEmptyStringFalse: true })); // prints true
  </script>
</body>
</html>
```

Note that the UMD is built with [rollup.js](https://rollupjs.org/) (which is minimally necessary considering there are no dependencies) and the global variable name is `Truthiness`, so in the above browser environment you would access `isTruthy` via `Truthiness.isTruthy` and `isFalsy` via `Truthiness.isFalsy`.

## Config

| Option | Default | Description |
|---|---|---|
| isZeroFalse | false | When set to `true`, `0` is evaluated as false. Ex. `isTruthy(0, { isZeroFalse: true }); // returns false` |
| isInfinityFalse | false | When set to `true`, `Infinity` and `-Infinity` are evaluated as false. Ex. `isTruthy(Infinity, { isInfinityFalse: true }); // returns false` |
| isEmptyStringFalse | false | When set to `true`, `''` is evaluated as false. Ex. `isTruthy('', { isEmptyStringFalse: true }); // returns false` |
| isEmptyObjectFalse | false | When set to `true`, `{}` is evaluated as false. Ex. `isTruthy({}, { isEmptyObjectFalse: true }); // returns false` |
| isEmptyArrayFalse | false | When set to `true`, rejects an empty array. Ex. `isTruthy([], { isEmptyArrayFalse: true }); // returns false` |
| isFilteredArrayFalse | false | When set to `true`, rejects an array with no values that are truthy under native JavaScript truthiness. Ex. `isTruthy([null, undefined], { isFilteredArrayFalse: true }); // returns false` |
| isFalsyArrayFalse | false | When set to `true`, rejects an array with no values considered truthy by `isTruthy` under the same options. Ex. `isTruthy([0, ''], { isFalsyArrayFalse: true, isZeroFalse: true, isEmptyStringFalse: true }); // returns false` |

Enabled array options are cumulative: `isEmptyArrayFalse`, `isFilteredArrayFalse`, and `isFalsyArrayFalse` can all apply to the same array.

## Testing

- `npm ci`
- `npm run check`

`npm run check` is the one-command verification gate. Optional focused commands:

- `npm test`
- `npm run lint`
- `npm run build`
- `npm run typecheck`

```text
 Test Files  6 passed (6)
      Tests  69 passed (69)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```

## Contributing

- `npm ci`
- _make code changes_
- `npm run check`
- optional: `npm test`, `npm run lint`, `npm run build`, `npm run typecheck`

## Publishing

Releases are automated with GitHub Actions and [semantic-release](https://semantic-release.org/).

- Use Conventional Commits in commits that land on `master`; for squash merges, make the PR title a Conventional Commit. `fix:` creates a patch release, `feat:` creates a minor release, and `feat!:` or `BREAKING CHANGE:` creates a major release.
- Pull requests run CI before merge with `npm ci` and `npm run check`.
- When changes land on `master`, the release workflow runs `npm ci`, `npm test`, `npm run lint`, and `npm run build`.
- If semantic-release finds releasable changes, it updates the package version, commits `package.json` and `package-lock.json` back to `master`, publishes to npm, creates the Git tag, and creates the GitHub Release.
- Add an `NPM_TOKEN` repository secret in GitHub Actions with permission to publish this package. Alternatively, configure npm trusted publishing for this package with this repository and the `.github/workflows/release.yml` workflow file.

## License

[MIT](./LICENSE)
