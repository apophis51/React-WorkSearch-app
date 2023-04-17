const axios = require ('axios')
const juice = lambo()

function lambo (){ 
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



module.exports = juice;
