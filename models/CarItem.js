const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const CarItem = db.define('CarItem', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CarId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cars',
            key: 'id'
        }
    }
}, {
    tableName: 'cars_items'
});

module.exports = CarItem;
