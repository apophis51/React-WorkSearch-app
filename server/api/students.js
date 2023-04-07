const router = require("express").Router();
const { Student, Campus } = require('../db')

//this route is used to display all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    next(error);
  }
});

//this route is used to display a single student
router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: Campus
    });

    res.json(student);
  } catch (error) {
    next(error);
  }
});

//this route is used to destroy students by id
router.delete('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.send(student);
  } catch (error) {
    next(error);
  }
});

//this route is used to update students by id
router.put('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.send(await student.update(req.body));
  } catch (error) {
    next(error);
  }
});


//this route is used to create new students
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
