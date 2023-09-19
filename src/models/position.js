import Sequelize from 'sequelize';
import { sequelize } from '../config/connectDB.js';

const Position = sequelize.define(
  'positions', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
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
    },
  }, {}
);

Position.associate = (models) => {
  Position.hasMany(models.staffs, {
    foreignKey: 'position_id',
    as: 'staffs'
  });
}

export default Position;