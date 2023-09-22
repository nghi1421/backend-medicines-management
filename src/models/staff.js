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
    email: {
        field: 'email',
        unique: true,
        allowNull: false,
        type: DataTypes.STRING
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
  }, {
    sequelize,
    modelName: 'staffs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
    
  return Staff;
};