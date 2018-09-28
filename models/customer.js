'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email'
                }
            }
        }
    }, {
        hooks: {
            beforeCreate: (customer, option) => {
                var hash = bcrypt.hashSync(customer.password, 10)
                customer.password = hash
            }
        }
    });
    Customer.associate = function(models) {
        Customer.belongsToMany(models.Cookie, {
            through: models.Order
        })
    };
    return Customer;
};