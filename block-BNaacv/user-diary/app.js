const express = require('express');
const logger = require('morgan');
const path = require('path');
const usersRouter = require('./routes/users');

let app = express();

// Built-in middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Setup views engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routing middlewares
app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('Index page');
});

// Listener
app.listen(3000, () => {
  console.log('=> Server listening to port 3000');
});