const routes = require('express').Router()
const Controller = require('../controllers/order.js')

routes.get('/', (req, res) => {
    let customer = req.session.currentUser
    res.render('order', {
        customer
    })
})
routes.post('/', Controller.add)

routes.get('/add/:CookiesId', Controller.addCookie)

module.exports = routes