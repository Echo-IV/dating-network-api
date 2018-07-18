const express = require('express')
const router = express.Router()
const usersRoutes = require('../User/routes')

router.use('/users', usersRoutes)

module.exports = router
