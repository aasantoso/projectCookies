const routes = require('express').Router()
const Controller = require('../controllers/order.js')

routes.get('/', Controller.showAll)

module.exports = routes