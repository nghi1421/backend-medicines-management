import Sequelize from 'sequelize';
import { sequelize } from '../config/connectDB.js';

const Position = sequelize.define(
  'positions',
  {
    id: Sequelize.INTEGER,
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            max: 50,
        }
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.STRING,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.STRING,
    }
  },
  { freezeTableName: true }
);

export default Position;