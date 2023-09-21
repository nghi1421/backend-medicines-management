'use strict';
const {
  Model
} = require('sequelize');
const passwordService = require('../services/passwordService');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.staffs, { foreignKey: 'userId', as: 'staffInfo' })
      User.hasOne(models.customers, { foreignKey: 'userId', as: 'customerInfo' })
    }
  };
  User.init({
    email: {
        field: 'email',
        unique: true,
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        field: 'password',
        allowNull: false,
        type: DataTypes.STRING(1000)
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
    
  return User;
};