const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log('in / POST:', req.body);
  let queryString = `INSERT INTO "favorite" ( "path" ) 
      VALUES ( $1);`;
  pool.query(queryString,
      [req.body ]).then((result) => {
          res.send(result.rows);
      }).catch((err) => {
          console.log(err);
          res.sendStatus(500);
      }) //end query
})

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
