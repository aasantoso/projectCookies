const Model = require('../models')
const bcrypt = require('bcrypt')
class Controller {

    static login(req, res, next) {
        Model.Customer.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(data => {
                bcrypt.compare(req.body.email, data.email)
                    .then(isItTrue => {
                        if (isItTrue) {
                            req.session.currentUser = customer
                            next()
                        } else {
                            res.send('Try again')
                        }
                    })
                    .catch(err => console.log(err))
            })
            .then(() => res.redirect('../cookie'))
    }

    static register(req, res) {
        Model.Customer.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email
            })
            .then(() => res.redirect('../cookie'))
            .catch(err => console.log(err))
    }
}

module.exports = Controller