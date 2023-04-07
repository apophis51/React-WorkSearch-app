const Sequelize = require('sequelize')
const db = require('./db')

const JobApplications = db.define('jobapplication', {
    CompanyName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:true,
        }
    },
    URLofJobPosting: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:true,
        }
    },
    URLofApplication: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:true,
        }
    },
    ResumeSubmitted: {
        type: Sequelize.STRING,
    },
    MyPitch: {
        type: Sequelize.STRING,
    },
    Notes: {
        type: Sequelize.STRING,
    },
    
    JobTitle: {
        type: Sequelize.STRING,
    },
    // DateApplied: {
    //     type: Sequelize.STRING,
    // },
    ContactedforInterview: {
        type: Sequelize.STRING,
    },

})

module.exports = JobApplications
