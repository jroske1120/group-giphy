const express = require('express');
const pool = require('../modules/pool');
const {default: Axios} = require('axios');
require('dotenv').config();
console.log('giphy key', process.env.GIPHY_API_KEY);

const router = express.Router();

console.log('api key:', process.env.GIPHY_API_KEY)

router.get('/', (req, res) => {
  console.log('hit server', req);
  Axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`)
      .then((response)=>{
          console.log('sending back:')
          res.send(response.data);
      })
      .catch((error)=>{
          console.log('error getting trending', error);
          res.sendStatus(500);
      })
})

module.exports = router;