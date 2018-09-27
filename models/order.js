'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        CookiesId: DataTypes.INTEGER,
        CustomerId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,

    }, {});
    Order.associate = function(models) {
        // Order.belongsTo(models.Customer)
    };
    return Order;
};