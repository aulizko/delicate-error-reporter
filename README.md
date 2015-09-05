# delicate-error-reporter

[![npm version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

This one displays error *unobtrusively*. It won't jump on you.

## Usage

Feed component with fresh errors.

Specifically designed to work with [react-transform-webpack-hmr](https://github.com/gaearon/react-transform-webpack-hmr) and
[react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors).
See [example](examples/babel-plugin-react-transform).

May even work with [react-hot-loader](https://github.com/gaearon/react-hot-loader), but I haven't tested it.
*Sidenote*: All hail to the new king, [react-transform-webpack-hmr](https://github.com/gaearon/react-transform-webpack-hmr)!

anyway, here is how it call manually:

```javascript
import DelicateErrorReporter from 'delicate-error-reporter';
const e = new Error('Ergh');

ReactDOM.render(<DelicateErrorReporter error={ e } />, root);
```

## Apologies

I must say that I borrowed a *lot* of [redbox-react](https://github.com/KeywordBrain/redbox-react)'s code. I really feel myself ashamed :(


[npm-image]: https://img.shields.io/npm/v/delicate-error-reporter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/delicate-error-reporter
[downloads-image]: http://img.shields.io/npm/dm/delicate-error-reporter.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/delicate-error-reporter
