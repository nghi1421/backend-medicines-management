'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.belongsTo(models.users, { foreignKey: 'user_id' })
    }
  };
  Customer.init({
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
        type:DataTypes.STRING(20)
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
    modelName: 'customers',
  });
    
  return Customer;
};