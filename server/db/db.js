//This file Initializes the Database Connection
const Sequelize = require('sequelize')
//const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/job_applications_db', { logging: false })
const db = new Sequelize(process.env.DATABASE_URL || 'postgresql://postgres:gQ5l7AZQ9ZYm90ER8Hc9@containers-us-west-114.railway.app:6357/railway', { logging: false })
module.exports = db
