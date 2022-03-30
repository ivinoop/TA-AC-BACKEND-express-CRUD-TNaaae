const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Users routes
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if(err) return err
    res.render('users', {users: users})
  })
})

router.get('/new', (req, res) => {
  res.render('addUser')
})

router.post('/', (req, res, next) => {
  User.create(req.body, (err, userCreated) => {
    if(err) return next (err)
    res.redirect('/users')
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  User.findById(id, (err, user) => {
    if(err) return next(err)
    res.render('singleUser', {user: user})
  })
})

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id
  User.findById(id, (err, user) => {
    if(err) return next(err)
    res.render('userEditForm', {user: user})
  })
})

router.post('/:id', (req, res) => {
  let id = req.params.id
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if(err) return next(err)
    res.redirect('/users')
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