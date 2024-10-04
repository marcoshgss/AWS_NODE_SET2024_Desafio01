const { DataTypes } = require('sequelize');
const db = require('../db/conn');

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


module.exports = Car;
