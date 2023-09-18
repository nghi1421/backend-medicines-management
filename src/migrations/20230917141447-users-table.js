'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        unique: false,
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        length: 1000
      },
      name: {
        allowNull: false,
        length: 100,
        type: Sequelize.STRING
      },
      address: {        
        type: Sequelize.STRING
      },
      gender: {
          //0: Nữ, 1: Nam; 2: Khác
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      role: {
        type: Sequelize.STRING,
        length: 20,
      },
      phone_number: {
        allowNull: false,
        length: 20,
        type: Sequelize.STRING
      },
      position_id: {
        references: {
          model: 'positions',
          key: 'id',
        },
        allowNull: false,
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