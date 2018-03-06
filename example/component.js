var Component = require('nanocomponent')
var html = require('choo/html')

module.exports = class Something extends Component {
  createElement (name) {
    return html`
      <h1>${name}</h1>
    `
  }

  update () {
    return false
  }
}
