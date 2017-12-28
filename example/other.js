var html = require('choo/html')

var Component = require('./component')

module.exports = function (state, emit, render) {
  return html`
    <body>
      <h1>Sup planet</h1>
      ${render(Component, 'other')}
      ${render(Component, 'header')}
      ${render(Component, 'footer')}
      <a href="/">home</a>
    </body>
  `
}
