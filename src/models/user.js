import Sequelize from 'sequelize';
import { sequelize } from '../config/connectDB.js';

const User = sequelize.define(
  'users',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER
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
      type: Sequelize.STRING,

    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.STRING,
    },
  }, {}
);

export default User;