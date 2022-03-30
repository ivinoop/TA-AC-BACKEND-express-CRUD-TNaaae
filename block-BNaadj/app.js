const express = require('express')
const logger = require('morgan')
const path = require('path')
const mongoose = require('mongoose')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

mongoose.connect('mongodb://localhost/user-diary-3', (err) => {
  console.log(err ? err : 'Connected to database')
})

let app = express()

// Built in middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Setup views engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Routing middlewares
app.use('/', indexRouter)
app.use('/users', usersRouter)

// Handle static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(5000, () => {
  console.log('=> Server listening to port 5000');
})