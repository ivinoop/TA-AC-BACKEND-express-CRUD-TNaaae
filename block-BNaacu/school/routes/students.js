const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('studentForm');
});

router.post('/', (req, res) => {
  res.send(req.body);
});

router.get('/', (req, res) => {
  res.render('allStudents', {students: ['Vinoo', 'Vatsa', 'Daaku', 'Pochi']});
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  res.render('singleStudent', {
    student: {
      name: 'Daaku',
      email: 'daaku@kalla.com'
    }
  });
});

module.exports = router;