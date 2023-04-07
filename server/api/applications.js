const router = require("express").Router();
const { JobApplications } = require('../db')

//this route is used to display all applications
router.get("/", async (req, res, next) => {
  try {
    console.log("inside get request")
    const applications = await JobApplications.findAll();
    console.log("fetching application data...")
    res.json(applications);
  } catch (error) {
    console.log("fetch f")
    next(error);
  }
});

//this route is used to display a single application
router.get("/:applicationId", async (req, res, next) => {
  try {
    const application = await JobApplications.findByPk(req.params.applicationId);

    res.json(application);
  } catch (error) {
    next(error);
  }
});

//this route is used to destroy applications by id
router.delete('/:id', async (req, res, next) => {
  try {
    const application = await JobApplications.findByPk(req.params.id);
    await application.destroy();
    res.send(application);
  } catch (error) {
    next(error);
  }
});

//this route is used to update applications by id
router.put('/:id', async (req, res, next) => {
  try {
    const application = await JobApplications.findByPk(req.params.id);
    res.send(await application.update(req.body));
  } catch (error) {
    next(error);
  }
});


//this route is used to create new applications
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await JobApplications.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
