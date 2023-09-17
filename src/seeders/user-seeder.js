'use strict';

export default {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'thanhnghi1421@gmail.com',
      password: '123123123',
      name: 'Nguyen Thanh Nghi',
      phoneNumber: '0987234234',
      address: 'Thanh pho Thu Duc, thanh pho Ho Chi Minh',
      gender: 1,
      roleId: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
  }
};