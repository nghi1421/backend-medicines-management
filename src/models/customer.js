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
    email: {
        field: 'email',
        unique: true,
        allowNull: false,
        type: DataTypes.STRING
    },
    userId: {
        field: "user_id",
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'customers',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
    
  return Customer;
};