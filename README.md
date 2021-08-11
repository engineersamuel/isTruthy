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

## Why

Most truthiness libraries are either extremely basic or simply adhere to the standard defnition of [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) in JavaScript.

However, what happens when you want to consider `''`, `[]`, `{}`, `0`, or `[null]` false?  This is where `@engineersamuel/istruthy` comes in.

## Install

`$ npm i -D @engineersamuel/istruthy`

## Usage

```javascript
import { isTruthy, isFalsy } from '@engineersamuel/istruthy';

console.log(isTruthy('abc')); // prints true
console.log(isTruthy('', { isEmptyStringFalse: true })); // prints false

console.log(isFalse('abc')); // prints false
console.log(isFalsy('', { isEmptyStringFalse: true })); // prints true
```

## Config

| Option | Default | Description |
|---|---|---|
| isZeroFalse | false | When set to `true` then `0` will be will be evaluated to false. Ex. `isTruthy(0, { isZeroFalse: true}); // returns false` |
| isInfinityFalse | false | When set to `true` then `Infinity` and `-Infinity` will be will be evaluated to false. Ex. `isTruthy(Infinity, { isInfinityFalse: true}); // returns false` |
| isEmptyStringFalse | false | When set to `true` then `''` will be will be evaluated to false. Ex. `isTruthy('', { isEmptyStringFalse: true}); // returns false` |
| isEmptyObjectFalse | false | When set to `true` then `{}` will be will be evaluated to false. Ex. `isTruthy({}, { isEmptyObjectFalse: true}); // returns false` |
| isEmptyArrayFalse | false | When set to  `true` then `[]` will be will be evaluated to false. Ex. `isTruthy([], { isEmptyArrayFalse: true}); // returns false` |
| isFilteredArrayFalse | false | When set to `true` then `[null, undefined]` will be will be evaluated to false. Ex. `isTruthy([null, undefined], { isFilteredArrayFalse: true }); // returns false` Note: This specific flag will recursively check each value, so passing options to isTruthy are recursively respected. |
| isFalsyArrayFalse | false | When set to `true` then `[null, undefined]` will be will be evaluated to false. Ex. `isTruthy([null, undefined], { isFalsyArrayFalse: true})/ // returns false` Ex. `isTruthy([0, ''], { isFalsyArrayFalse: true, isZeroFalse: true, isEmptyStringFalse: true }); // returns false` Note: This specific flag will recursively check each value, so passing options to isTruthy are recursively respected. |

## Testing

See the `*.spec.ts` files in the [./test](https://github.com/engineersamuel/isTruthy/tree/master/test) directory for a great reference on using `isTruthy`.

`npm run test`

```text
  63 passing (38ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```

## Contributing

- `npm i`
- _make code changes_
- `npm run test`
- `npm run lint`
- `npm run build`

## Publishing

- Bump the [package.json](package.json) version
- `npm publish --access public`
- `git tag vx.y.z`
- `git push origin --tags`
