var Cache = require('./lib/cache')
var assert = require('assert')

module.exports = store

function store (lru) {
  return function (state, emitter, app) {
    var cache = new Cache(state, emitter.emit.bind(emitter), lru)
    state.cache = Render

    function Render (Component, id) {
      assert.equal(typeof Component, 'function', 'choo-component-preview: Component should be type function')
      var args = []
      for (var i = 0, len = arguments.length; i < len; i++) {
        args.push(arguments[i])
      }
      return cache.render.apply(cache, args)
    }

    // When the state gets stringified, make sure `state.cache` isn't
    // stringified too.
    Render.toJSON = function () {
      return null
    }
  }
}
