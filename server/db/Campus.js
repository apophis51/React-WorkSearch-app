// This file defines the Campus Model
const Sequelize = require('sequelize')
const db = require('./db')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: Sequelize.TEXT('long'),
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'college.jpg'
    }
})

module.exports = Campus
