const routes = require('express').Router()
const Controller = require('../controllers/customer.js')

routes.get('/', (req, res) => res.render('index'))

module.exports = routes