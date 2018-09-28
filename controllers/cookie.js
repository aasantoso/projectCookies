const Model = require('../models')

class Controller {
    static showAll(req, res) {
        Model.Cookie.findAll({
                include: [Model.Customer],
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(listCookie => {
                let customer = req.session.currentUser
                if (customer) {
                    let quantity = 0
                    for (let i = 0; i < customer.order.length; i++) {
                        quantity += customer.order[i].quantity
                    }
                    res.render('cookies', {
                        cookies: listCookie,
                        quantity: JSON.stringify(quantity)
                    })
                } else {
                    res.redirect('/')
                }
            })
            .catch(err => console.log(err))
    }
}

module.exports = Controller