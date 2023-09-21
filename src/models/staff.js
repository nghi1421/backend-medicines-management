'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    static associate(models) {
      Staff.belongsTo(models.positions, { foreignKey: 'position_id', as: 'position' })
      
      // Staff.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' })
    }
  };
  Staff.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
        field: "name",
        allowNull: false,
        type: DataTypes.STRING
    },
    address: {
        field: "address",
        allowNull: false,
        type: DataTypes.STRING
    },
    phoneNumber: {
        field: "phone_number",
        allowNull: false,
        type: DataTypes.STRING(20)
    },
    gender: {
        field: "gender",
        allowNull: false,
        type: DataTypes.TINYINT
    },
    positionId: {
        field: "position_id",
        allowNull: false,
        type: DataTypes.STRING
    },
    userId: {
        field: "user_id",
        type: DataTypes.INTEGER,
        allowNull: false,
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
    modelName: 'staffs',
  });
    
  return Staff;
};