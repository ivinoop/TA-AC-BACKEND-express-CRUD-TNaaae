const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Users routes

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if(err) return next(err)
    res.render('users', {users: users})
  })
})

router.post('/', (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if(err) return next(err)
    res.redirect('/users')
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  User.findById(id, (err, user) => {
    if(err) return next(err)
    res.render('userDetails', {user: user})
  })
})

router.put('/:id', (req, res, next) => {
  let id = req.params.id 
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if(err) return next(err)
    res.redirect('/users/' + id)
  })
})

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id
  User.findByIdAndDelete(id, (err, user) => {
    if(err) return next(err)
    res.redirect('/users')
  })
})

module.exports = router