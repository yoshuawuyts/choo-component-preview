# choo-component-preview
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Choo component API preview. See
[discussion](https://github.com/choojs/choo/issues/593) for more information.

## Usage
```js
var choo = require('choo')

var app = choo()
app.use(require('choo-component-preview')())
app.mount('body')
```

```js
var Component = require('nanocomponent')
var html = require('choo/html')

module.exports = class Article extends Component {
  static identity (article) {
    return `article-${article.id}`
  }

  createElement (article) {
    return html`
      <article>
        <h2>${article.title}</h2>
        <p>${article.body}</p>
      </article>
    `
  }

  update () {
    return false
  }
}
```

```js
var Article = require('./components/article')
var Header = require('./components/header')
var Footer = require('./components/footer')

module.exports = function (state, emit, render) {
  return html`
    <body
      ${render(Header)}
      ${state.articles.map(article => render(Article, article))}
      ${render(Footer)}
    </body
  `
}
```

## Installation
```sh
$ npm install choo-component-preview
```

## License
[Apache-2.0](./LICENSE)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/choo-component-preview.svg?style=flat-square
[3]: https://npmjs.org/package/choo-component-preview
[4]: https://img.shields.io/travis/yoshuawuyts/choo-component-preview/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/choo-component-preview
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/choo-component-preview/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/choo-component-preview
[8]: http://img.shields.io/npm/dm/choo-component-preview.svg?style=flat-square
[9]: https://npmjs.org/package/choo-component-preview
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
