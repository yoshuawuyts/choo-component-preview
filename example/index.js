var choo = require('choo')

var app = choo()
app.use(require('../')())
app.route('/', require('./view'))
app.mount('body')
