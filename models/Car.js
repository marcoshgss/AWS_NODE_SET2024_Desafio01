const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const CarItem = require('./CarItem'); 

const Car = db.define('Car', {
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'cars'
});


Car.hasMany(CarItem, { foreignKey: 'CarId', onDelete: 'CASCADE',});
CarItem.belongsTo(Car, {foreignKey: 'CarId',});

module.exports = Car;
