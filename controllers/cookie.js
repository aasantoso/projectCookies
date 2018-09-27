const Model = require('../models')

class Controller {
    static showAll(req, res) {
        Model.Cookie.findAll({
                include: [Model.Customer],
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(data => {
                var quantity = 0;
                res.render('cookies', {
                    cookies: data,
                    quantity: JSON.stringify(quantity)
                })
            })
            .catch(err => console.log(err))
    }
}

module.exports = Controller