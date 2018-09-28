const routes = require('express').Router()
const Controller = require('../controllers/customer.js')

routes.get('/', (req, res) => {
    if (req.session.currentUser) {
        res.render('/cookie')
    } else {
        res.render('index')
    }
})

routes.post('/login', Controller.login)
routes.get('/logout', (req, res) => {
    req.session.currentUser = null
    res.redirect('/')
})

routes.get('/register', (req, res) => res.render('register'))
routes.post('/register', Controller.register)

module.exports = routes