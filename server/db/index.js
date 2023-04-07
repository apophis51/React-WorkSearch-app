const db = require('./db')
const Student = require('./Student')
const Campus = require('./Campus')
const JobApplications = require('./JobApplications')


Campus.hasMany(Student )
// Student.belongsTo(Campus, { as: 'Enrollee' })
// Student.belongsTo(Campus, { foreignKey: 'EnrolleeId' })
Student.belongsTo(Campus)


module.exports = {
  db,
  Student,
  Campus,
  JobApplications
  // JobApplications
}