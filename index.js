var Cache = require('./lib/cache')
var onIdle = require('on-idle')
var assert = require('assert')

module.exports = store

function store () {
  return function (state, emitter, app) {
    var cache = new Cache(state, emitter.emit.bind(emitter))

    // TODO: replace with LRU cache.
    emitter.on(state.events.RENDER, function () {
      onIdle(function cleanup () {
        var keys = Object.keys(cache.cache)
        for (var id, i = 0, len = keys.length; i < len; i++) {
          id = keys[i]
          if (!cache.cache[id].element) delete cache.cache[id]
        }
      })
    })

    state.cache = Render

    function Render (Component, id) {
      assert.equal(typeof Component, 'function', 'choo-component-preview: Component should be type function')
      var args = []
      for (var i = 0, len = arguments.length; i < len; i++) {
        args.push(arguments[i])
      }
      return cache.render.apply(cache, args)
    }
  }
}
