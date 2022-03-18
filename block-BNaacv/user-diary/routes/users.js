const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
  res.render('users', {
    users: ['Vinoo', 'Vatsa', 'Varsha', 'Fifi', 'Gopi', 'Cheems']
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  if(id !== 'new') {
    res.render('singleUser', {
      singleUser: {
        name: 'Vinoo',
        job: 'Developer'
      }
    });
  }
  else if(id === 'new') {
    res.render('userForm');
  }
});

module.exports = router;