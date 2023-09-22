'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
      Position.hasMany(models.staffs, { foreignKey: 'position_id', as: 'staffs' })
    }
  };
  Position.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            max: 50,
        }
    },
  }, {
    sequelize,
    modelName: 'positions',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
    
  return Position;
};