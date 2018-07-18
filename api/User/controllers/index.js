const bcrypt = require('bcryptjs')
const UserModel = require('../models')

module.exports.register = (req, res) => {
  const { email, name, password } = req.body

  UserModel.create(
    {
      name,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    },
    (err, user) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(201).json(user)
      }
    }
  )
}
