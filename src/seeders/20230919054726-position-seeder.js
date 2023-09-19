'use strict';

module.exports =  {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('positions', [{
      id: 1,
      name: 'Quản lí',
    }, {
      id: 2,
      name: 'Bán hàng',
    }, {
      id: 3,
      name: 'Kiểm toán',
    }]);
  },

  down: async (queryInterface, Sequelize) => {

  }
};