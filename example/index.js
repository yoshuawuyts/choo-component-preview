var choo = require('choo')

var app = choo()
app.use(require('../')())
app.route('/', require('./view'))
app.route('/other', require('./other'))
app.mount('body')
