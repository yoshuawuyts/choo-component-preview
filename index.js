var createCache = require('./lib/cache')
var onIdle = require('on-idle')
var assert = require('assert')

module.exports = store

function store () {
  return function (state, emitter, app) {
    var setRoute = app.route.bind(app)
    var cache = createCache(state, emitter.emit.bind(emitter))

    app.route = function (route, callback) {
      setRoute(route, function (state, emit) {
        return callback(state, emit, Render)
      })
    }

    emitter.on(state.events.RENDER, function () {
      onIdle(cleanup)
    })

    function cleanup () {
      var keys = Object.keys(cache.cache)
      for (var id, i = 0, len = keys.length; i < len; i++) {
        id = keys[i]
        if (!cache.cache[id].element) delete cache.cache[id]
      }
    }

    function Render (Component) {
      assert.equal(typeof Component, 'function', 'choo-component-preview: Component should be type function')
      var args = []
      for (var i = 0, len = arguments.length; i < len; i++) {
        args.push(arguments[i])
      }
      return cache.render.apply(cache, args)
    }
  }
}
