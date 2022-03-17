const express = require('express');
const logger = require('morgan');
const path = require('path');
const indexRouter = require('./routes/index');
const studentsRouter = require('./routes/students');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routing middlewares
app.use('/', indexRouter);
app.use('/students', studentsRouter);

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Handle error
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
  console.log('=> Server listening to port 3000');
});