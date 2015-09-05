# delicate-error-reporter

[![npm version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

This one displays error *unobtrusively*. It won't jump on you.

![out](https://cloud.githubusercontent.com/assets/4025/9697088/3139c1de-5388-11e5-8227-41cc35d28309.gif)


## Usage

Feed component with fresh errors.

Specifically designed to work with [react-transform-webpack-hmr](https://github.com/gaearon/react-transform-webpack-hmr) and
[react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors).
See [example](examples/babel-plugin-react-transform).

May even work with [react-hot-loader](https://github.com/gaearon/react-hot-loader), but I haven't tested it.
*Sidenote:* All hail to the new king, [react-transform-webpack-hmr](https://github.com/gaearon/react-transform-webpack-hmr)!

The *right* way to get things done:

Install the [Babel plugin](https://raw.githubusercontent.com/gaearon/babel-plugin-react-transform):

```
npm install --save-dev babel-plugin-react-transform
```

Then, install the transform:

```
npm install --save-dev react-transform-catch-errors
```

Finally, install this one package for rendering errors:

```
npm install --save-dev delicate-error-reporter
```

Now edit your .babelrc to include extra.babel-plugin-react-transform.

```json
{
  "stage": 0,
  "plugins": [
    "react-transform"
  ],
  "extra": {
    "react-transform": [{
      "target": "react-transform-catch-errors",
      "imports": ["react", "delicate-error-reporter"]
    }]
  }
}
```

And that's it.

### Programmatic usage

```javascript
import DelicateErrorReporter from 'delicate-error-reporter';
const e = new Error('Ergh');

ReactDOM.render(<DelicateErrorReporter error={ e } />, root);
```

## Apologies

I must say that I borrowed a *lot* of [redbox-react](https://github.com/KeywordBrain/redbox-react)'s code. I really feel myself ashamed :(

### Thanks

Many thanks goes to [@gaearon](https://github.com/gaearon/) for his awesome work and many thanks goes to [@KeywordBrain](https://github.com/KeywordBrain/) for inspiration.

# License

MIT, see [LICENSE](LICENSE) for details.

[npm-image]: https://img.shields.io/npm/v/delicate-error-reporter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/delicate-error-reporter
[downloads-image]: http://img.shields.io/npm/dm/delicate-error-reporter.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/delicate-error-reporter
