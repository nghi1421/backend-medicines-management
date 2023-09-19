'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('staffs', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      address: {        
        type: Sequelize.STRING
      },
      gender: {
          //0: Nữ, 1: Nam; 2: Khác
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      position_id: {
        references: {
          model: 'positions',
          key: 'id',
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      user_id: {
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: true,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};