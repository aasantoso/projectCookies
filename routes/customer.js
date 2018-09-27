const routes = require('express').Router()
const Controller = require('../controllers/customer.js')

routes.get('/', (req, res) => {
    res.redirect('index')
})
routes.post('/login', Controller.login)

routes.get('/register', (req, res) => res.render('register'))
routes.post('/register', Controller.register)

module.exports = routes