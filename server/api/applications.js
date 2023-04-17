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



router.get("/data", async (req, res, next) => {
 
  try {
    const response = await axios.get('https://app.amattendees.com/v2/getdata.php?query=cat&intent=all');
    console.log((response.data));
    res.json(response.data)
  } catch (error) {
    console.error(error);
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


function lambo() {
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
  return response.data
})
.catch((error) => {
  console.log(error);
});

}


// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
//   package = response.data
// })
// .catch((error) => {
//   console.log(error);
// });
  


// router.get('/data', (req, res) => {
//   try {
//     res.send(package);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred while fetching the data.');
//   }
// });
 

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
