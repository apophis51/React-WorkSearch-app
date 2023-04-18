const router = require("express").Router();
const { JobApplications } = require('../db')
const axios = require('axios')
//var request = require('request');
//let fuckstick = lambo()
//this route is used to display all applications
router.get("/",  async (req, res, next) => {
  try {
    console.log("inside get request")
    const applications = await JobApplications.findAll();
    console.log("fetching application data...")
    // process.env.MY_VAR = lambo();
    // let bitches =  lambo()
    res.json(applications);
    //  res.json(bitches)
  } catch (error) {
    console.log("fetch f")
    next(error);
  }
});

// router.get("/",  async (req, res, next) => {
//   try {
//     console.log("inside get request")
//     const applications = axios ('https://app.amattendees.com/v2/getdata.php?query=marketing&intent=all');
//     console.log("fetching application data...")
//     // process.env.MY_VAR = lambo();
//     // let bitches =  lambo()
//     res.json(applications);
//     //  res.json(bitches)
//   } catch (error) {
//     console.log("fetch f")
//     next(error);
//   }
// });

// router.get("/data",  (req, res, next) => {
 
//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: 'https://app.amattendees.com/v2/getdata.php?query=marketing&intent=all',
//     headers: { 
//       'Cookie': 'PHPSESSID=a2d8d7d574a71d2ebb94c82e91a0c095'
//     }
//   };
  
//   //axios.get('https://app.amattendees.com/v2/getdata.php?query=marketing&intent=all')
//   let data = []

//   axios.request(config)
//   .then((reponce) => {
//     console.log(JSON.stringify(reponce.data));
//     data.push(reponce)
//   })

//   .catch((error) => {
//     console.log(error);
//   });
  

//   res.json(data)

// });
const dummy = [  {
  name: 'Andrea Snow',
  conference: 'Leadscon',
  company: 'Ancora Education',
  website: 'https://www.ancora.com/',
  title: 'SVP Academics and Career Services',
  linkedin: 'https://www.linkedin.com/in/andreamsnowesq/',
  email: 'andrea.snow@ancoraeducation.com',
  phone: null,
  skype: null,
  type: 'Solution Provider'
},
{
  name: 'Bill Nance',
  conference: 'Leadscon',
  company: 'Ancora Education',
  website: 'https://www.ancora.com/',
  title: 'CEO',
  linkedin: 'https://www.linkedin.com/in/billnance/',
  email: 'bnance@ancoraeducation.com',
  phone: null,
  skype: null,
  type: 'Solution Provider'
},
{
  name: 'Daylan Childress',
  conference: 'Leadscon',
  company: 'Ancora Education',
  website: 'https://www.ancora.com/',
  title: 'VP Operations',
  linkedin: 'https://www.linkedin.com/in/daylan-childress-30b8271a/',
  email: 'dchildress@ancoraeducation.com',
  phone: null,
  skype: null,
  type: 'Solution Provider'
},
{
  name: 'Anish Ashtekar',
  conference: 'Leadscon',
  company: 'Archer Education',
  website: 'http://www.archeredu.com/',
  title: 'Director of Performance Marketing',
  linkedin: 'https://www.linkedin.com/in/anishashtekar/',
  email: 'aashtekar@archeredu.com',
  phone: '+1-908-295-1877',
  skype: 'live:anish_ashtekar',
  type: null
},
{
  name: 'Brandon Platt',
  conference: 'Leadscon',
  company: 'Archer Education',
  website: 'https://www.archeredu.com/',
  title: 'VP Partnership Development',
  linkedin: 'https://www.linkedin.com/in/brandon-platt-7a9a5512/',
  email: 'bplatt@archeredu.com',
  phone: null,
  skype: null,
  type: null
}]


router.get("/data", async (req, res, next) => {
 
  try {
    // const response = await axios.get('https://app.amattendees.com/v2/getdata.php?query=cat&intent=all');
    const response = await axios.get('');
    console.log((response.data));
    // res.json(response.data)
    res.json(dummy)
  } catch (error) {
    console.error(error);
    res.json(dummy)
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





router.get('/data',  (req, res) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://app.amattendees.com/v2/getdata.php?query=marketing&intent=all',
    headers: { 
      'Cookie': 'PHPSESSID=a2d8d7d574a71d2ebb94c82e91a0c095'
    }
  };
   axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  res.json(response.data)
})
.catch((error) => {
  console.log(error);
});
  
});



router.get("/shawn", async (req, res) => {
  try {
    console.log("inside get request")
    // const applications = await JobApplications.findAll();
    let payload = "car"
  const response = await axios.get(`https://app.amattendees.com/v2/getdata.php?query=${payload}&intent=all`);

    console.log("fetching application data...")
    //res.json(applications);
    console.log("meow")
    console.log(response)
    res.json(response.data);
  } catch (error) {
    console.log("fetch f")
    next(error);
  }
});




module.exports = router;
