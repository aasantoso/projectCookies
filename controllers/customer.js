const Model = require('../models')
const bcrypt = require('bcrypt')

class Controller {

    static login(req, res, next) {
        Model.Customer.find({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                let customer = {
                    id: user.id,
                    name: user.name,
                    order: []
                }
                let pwdCheck = bcrypt.compareSync(req.body.password, user.password)
                if (user && pwdCheck) {
                    req.session.currentUser = customer
                    res.redirect('/cookie')
                } else {
                    res.render('index')
                }
            })
            .catch(err => res.render('index', {
                err
            }))
    }

    static register(req, res) {
        Model.Customer.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email
            })
            .then(() => res.redirect('/'))
            .catch(err => res.render('register', {
                err
            }))
    }
}

module.exports = Controller