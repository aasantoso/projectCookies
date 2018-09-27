'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cookies', [{
                name: 'Classic Chocolate Chip Cookies',
                description: 'Soft, gooey, chewy on the inside and crisp on the outside, these top-rated chocolate chip cookies will never disappoint.',
                stock: 1000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Oatmeal Raisin Sandwich Cookies',
                description: 'A fun treat for when you need an energy boost, these oatmeal raisin sandwich cookies are stuffed with a smooth, creamy peanut butter filled, and packed with nutritious oats.',
                stock: 1000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Almond Linzer Cookies',
                description: 'Shortbread cookies sandwiched together with blueberry jam and dusted with icing sugar, these teardrop-shaped cookies are eye-catching, beautiful, and truly delicious!',
                stock: 1000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pancake Breakfast Cookie',
                description: 'Your favourite breakfast foods, including bacon and maple syrup, come together in these chewy Canadian cookies. ',
                stock: 1000,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'The Ultimate Peanut Butter Cookie',
                description: 'Tried, tested and true, the secret ingredient to these perfectly chewy cookies is cornstarch, resulting in the absolutely perfect bite.',
                stock: 1000,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};