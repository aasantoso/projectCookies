'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            CookiesId: {
                type: Sequelize.INTEGER
            },
            CustomerId: {
                type: Sequelize.INTEGER
            },
            quantity: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: sequelize.literal('NOW()')
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: sequelize.literal('NOW()')
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Orders');
    }
};