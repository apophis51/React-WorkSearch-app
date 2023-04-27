const router = require("express").Router();
const axios = require('axios')
//var request = require('request');
//let fuckstick = lambo()
//this route is used to display all applications


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

router.get("/data/:applicationId", async (req, res, next) => {
  try {
    // const application = await JobApplications.findByPk(req.params.applicationId);
    const response = await axios.get(`https://app.amattendees.com/v2/getdata.php?query=${req.params.applicationId}&intent=all`);
    console.log(response.data)

    res.json(response.data);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
