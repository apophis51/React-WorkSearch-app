const router = require('express').Router()

router.use('/students', require('./students'))
router.use('/campuses', require('./campuses'))
router.use('/applications', require('./applications'))

module.exports = router