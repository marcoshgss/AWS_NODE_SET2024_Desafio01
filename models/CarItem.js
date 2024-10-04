const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const Car = require('./Car');

const CarItem = db.define('CarItem', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CarId: {
        type: DataTypes.INTEGER,
        references: {
            model: Car,
            key: 'id'
        }
    }
}, {
    tableName: 'cars_items'
});

Car.hasMany(CarItem, { foreignKey: 'CarId' });
CarItem.belongsTo(Car, { foreignKey: 'CarId' });

module.exports = CarItem;
