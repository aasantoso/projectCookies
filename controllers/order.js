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
        Model.Cookie.findOne({
                include: [Model.Order],
                where: {
                    id: req.params.CookiesId
                }
            })
            .then(cookie => {
                if (customer.order.length === 0) {
                    let tempOrder = {}
                    tempOrder.name = cookie.name
                    tempOrder.stock = cookie.stock - 1
                    tempOrder.quantity = 1
                    tempOrder.CookiesId = Number(req.params.CookiesId)
                    tempOrder.CustomerId = customer.id
                    customer.order.push(tempOrder)
                } else {
                    let check = true
                    for (let i = 0; i < customer.order.length; i++) {
                        customer.order[i].stock -= 1
                        customer.order[i].quantity += 1
                        customer.order[i].CookiesId = Number(req.params.CookiesId)
                        check = false
                    }
                    if (check) {
                        let tempOrder = {}
                        tempOrder.name = cookie.name
                        tempOrder.stock = cookie.stock - 1
                        tempOrder.quantity = 1
                        tempOrder.CookiesId = Number(req.params.CookiesId)
                        tempOrder.CustomerId = customer.id
                        customer.order.push(tempOrder)
                    }
                }
                res.redirect('/cookie')
            })
    }

}

module.exports = Controller