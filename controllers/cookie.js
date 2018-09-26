const Model = require('../models')

class Controller {
    static showAll(req, res) {
        Model.Cookie.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(data => res.render('cookies', {
                cookies: data
            }))
            .catch(err => console.log(err))
    }
}

module.exports = Controller