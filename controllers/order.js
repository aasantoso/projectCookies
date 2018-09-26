const Model = require('../models')

class Controller {
    static showAll(req, res) {
        Model.Order.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(data => res.render('customer', {
                customers: data
            }))
            .catch(err => console.log(err))
    }
}

module.exports = Controller