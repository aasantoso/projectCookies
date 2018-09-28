const routes = require('express').Router()

routes.get('/', (req, res) => res.redirect('/customer'))

module.exports = routes