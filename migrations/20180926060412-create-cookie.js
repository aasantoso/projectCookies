'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Cookies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            stock: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('Cookies');
    }
};