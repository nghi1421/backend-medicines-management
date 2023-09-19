import Sequelize from 'sequelize';
import { sequelize } from '../config/connectDB.js';

const Staff = sequelize.define(
  'staffs',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER
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
        type:DataTypes.STRING(20)
    },
    gender: {
        field: "gender",
        allowNull: false,
        type: DataTypes.TINYINT
    },
    positionId: {
        field: "position_id",
        allowNull: false,
        type:DataTypes.STRING
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

Staff.associate = (models) => {
  Staff.belongsTo(models.users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    as: 'user'
  });

  Staff.belongsTo(models.positions, {
    foreignKey: 'position_id',
    as: 'position'
  })
}

export default Staff;