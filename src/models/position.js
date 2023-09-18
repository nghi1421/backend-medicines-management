import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Position = sequelize.define('Position', {
    id: DataTypes.INTEGER,
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 50,
        }
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.STRING,
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.STRING,
    }
})

export default Position;