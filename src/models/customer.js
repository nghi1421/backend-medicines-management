import Sequelize from 'sequelize';
import { sequelize } from '../config/connectDB.js';

const Customer = sequelize.define(
  'customers',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER
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
      type: Sequelize.STRING,

    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.STRING,
    },
  }, {}
);

Customer.associate = (models) => {
  Customer.belongsTo(models.users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    as: 'user'
  });
}

export default Customer;