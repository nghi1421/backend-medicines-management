'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('staffs', [{
      id: 1,
      name: 'Nguyen Thanh Nghi',
      phone_number: '0987234234',
      email: 'thanhnghi1421@gmail.com',
      address: 'Thanh pho Thu Duc, thanh pho Ho Chi Minh',
      gender: 1,
      position_id: 1,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('staffs', {[Op.or]: [{name: 'Nguyen Thanh Nghi'}]});
  }
};