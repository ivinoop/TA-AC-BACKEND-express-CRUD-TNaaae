const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
  res.render('users', {
    users: ['Vinoo', 'Vatsa', 'Varsha', 'Fifi', 'Gopi', 'Cheems']
  });
});

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  // Capture data
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
    res.render('singleUser', {
      singleUser: {
        name: 'Vinoo',
        job: 'Developer'
      }
    });
});

router.get('/:id/edit', (req, res) => {
  // Edit form
});

router.put('/:id/', (req, res) => {
  // Capture data
});

router.delete('/:id', (req, res) => {
  // Delete user
})

module.exports = router;