'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Customers', [{
                name: 'Jake Peralta',
                password: 'Jake',
                email: 'jp@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Terry Jefford',
                password: 'Terry',
                email: 'tj@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Amy Santiago',
                password: 'Amy',
                email: 'as@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Raymond Holt',
                password: 'Raymond',
                email: 'rh@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Charles Boyle',
                password: 'Charles',
                email: 'cb@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Customers', null, {});
    }
};