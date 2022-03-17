const express = require('express');
const logger = require('morgan');
const path = require('path');

let app = express();

app.use(logger('dev'));
app.use(express.json());

// views engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  // res.send('Index page');
  let school = {
    name: 'AltCampus',
    state: 'Himachal Pradesh'
  }
  res.render('index', {school: school});
});

app.listen(3000, () => {
  console.log('=> Server listening to port 3000');
});