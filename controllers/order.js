const Model = require('../models')

class Controller {
    static add(req, res) {
        let customer = req.session.currentUser
        let listOrder = []
        for (let i = 0; i < customer.order.length; i++) {
            listOrder.push({
                CustomerId: customer.order[i].CustomerId,
                CookiesId: customer.order[i].BookId,
                quantity: customer.order[i].quantity
            })
        }

        Model.Order.bulkCreate(listOrder)
            .then(data => res.redirect('/cookie'))
            .catch(err => console.log(err))
    }

    static addCookie(req, res) {
        let customer = req.session.currentUser
        Model.Cookie.findById(req.params.CookiesId)
            .then(cookie => {
                let index = customer.order.findIndex(data => data.CookiesId === cookie.id)
                if (index == -1) {
                    let tempOrder = {}
                    tempOrder.name = cookie.name
                    tempOrder.quantity = 1
                    tempOrder.CookiesId = Number(req.params.CookiesId)
                    tempOrder.CustomerId = customer.id
                    customer.order.push(tempOrder)
                } else {
                    customer.order[index].quantity += 1
                }
                res.redirect('/cookie')
            })
            .catch(err => console.log(err))

    }

}

module.exports = Controller