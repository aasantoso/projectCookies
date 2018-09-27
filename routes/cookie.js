const routes = require('express').Router()
const Controller = require('../controllers/cookie.js')

routes.get('/', Controller.showAll)


module.exports = routes