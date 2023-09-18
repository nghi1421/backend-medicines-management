'use strict';
const { Model } = require('sequelize');

const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Position, { foreignKey: 'position_id' })
    }
  };
  User.init({
    email: {
        field: 'email',
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        field: 'password',
        allowNull: false,
        type: DataTypes.STRING
    },
    name: {
        field: "name",
        allowNull: false,
        type:DataTypes.STRING
    },
    address: {
        field: "address",
        allowNull: false,
        type:DataTypes.STRING
    },
    phoneNumber: {
        field: "phone_number",
        allowNull: false,
        type:DataTypes.STRING
    },
    gender: {
        field: "gender",
        allowNull: false,
        type: DataTypes.TINYINT
    },
    role: {
        field: "role",
        allowNull: false,
        type:DataTypes.STRING
    },
    positionId: {
        field: "position_id",
        allowNull: false,
        type:DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};