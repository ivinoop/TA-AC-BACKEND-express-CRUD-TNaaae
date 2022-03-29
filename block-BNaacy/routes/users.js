const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Users routes
router.get('/', (req, res) => {
  res.render('users')
})

router.get('/new', (req, res) => {
  res.render('addUser')
})

router.post('/', (req, res, next) => {
  User.create(req.body, (err, userCreated) => {
    if(err) return next (err)
    res.render('index')
  })
})

module.exports = router