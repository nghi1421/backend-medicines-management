'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // static associate(models) {
    //   User.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' })
    // }
  };
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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
    createdAt: {
      field: 'created_at',
      type: DataTypes.STRING,

    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'users',
  });
    
  return User;
};