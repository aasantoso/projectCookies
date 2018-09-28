'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cookie = sequelize.define('Cookie', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        stock: DataTypes.INTEGER
    }, {});
    Cookie.associate = function(models) {
        Cookie.belongsToMany(models.Customer, {
            through: models.Order,
            foreignKey: 'CookiesId'
        })

    };
    return Cookie;
};