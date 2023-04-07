const router = require('express').Router()
const { Student, Campus } = require('../db')

//this route is your to display all campuses by using findAll() from db
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll()
    res.json(campuses)
  }
  catch (error) {
    next(error)
  }
})

//this route is use to find a campus by its individual id
router.get("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId, { include: Student });
    res.json(campus);
  } catch (error) {
    next(error);
  }
});

//this route is used to create new campuses
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Campus.create(req.body));
  } catch (error) {
    next(error);
  }
});

//this route is used to delete a campus by id
router.delete('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.destroy();
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

//this route is used to update a campus by id
router.put('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    res.send(await campus.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router