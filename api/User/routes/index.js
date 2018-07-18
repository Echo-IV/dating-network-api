const express = require('express')
const router = express.Router()
const ctrlUser = require('../controllers')

router.route('/register').post(ctrlUser.register)

module.exports = router
