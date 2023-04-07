//This file Initializes the Database Connection
const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/job_applications_db', { logging: false })

module.exports = db
