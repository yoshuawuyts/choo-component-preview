var html = require('choo/html')

var Component = require('./component')

module.exports = function (state, emit) {
  return html`
    <body>
      <h1>Sup planet</h1>
        ${state.cache(Component, 'header').render()}
        ${state.cache(Component, 'footer').render()}
      <a href="/other">other</a>
    </body>
  `
}
