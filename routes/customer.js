const routes = require('express').Router()
const Controller = require('../controllers/customer.js')

routes.get('/', Controller.showAll)

module.exports = routes