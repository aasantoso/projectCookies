const routes = require('express').Router()
const Controller = require('../controllers/order.js')

routes.get('/', (req, res) => {
    let customer = req.session.currentUser
        //res.send(customer)
    res.render('order', {
        customer
    })
})

routes.get('/add/:CookiesId', Controller.addCookie)

routes.post('/', (req, res) => res.render('order'))

routes.post('/done', Controller.add)

module.exports = routes