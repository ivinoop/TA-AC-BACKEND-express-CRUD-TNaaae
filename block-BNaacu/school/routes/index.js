const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('Index page');
  res.render('index', {name: 'Vinoo'});
});

module.exports = router;