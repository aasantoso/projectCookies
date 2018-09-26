'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cookie = sequelize.define('Cookie', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {});
  Cookie.associate = function(models) {
    // associations can be defined here
  };
  return Cookie;
};