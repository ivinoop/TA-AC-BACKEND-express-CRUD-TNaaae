const express = require('express')
const router = express.Router()

// Users routes
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
