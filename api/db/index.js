const mongoose = require('mongoose')
const db = require('../../config/db')

mongoose.connect(
  db.mongoURI,
  { useNewUrlParser: true }
)

module.exports