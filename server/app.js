const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()
const axios = require('axios')

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json());
app.use(express.text())
app.use(express.raw())

app.use("/api", require("./api"));


app.use(cors())
app.use(volleyball)

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


// app.get('/data', (req, res) => {
//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: 'https://app.amattendees.com/v2/getdata.php?query=marketing&intent=all',
//     headers: {
//       'Cookie': 'PHPSESSID=a2d8d7d574a71d2ebb94c82e91a0c095'
//     }
//   };
//   axios.request(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
//       res.json(response.data); // Send the response data back to the client
//     })
//     .catch((error) => {
//       console.log(error);
//       res.sendStatus(500); // Send an error status code back to the client
//     });
// });

module.exports = app;

