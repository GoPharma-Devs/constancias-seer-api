const express = require("express")
const userSchema = require("../models/model.user")
const router = express.Router()


//create user instance
router.post('/users', (req, res) => {
  const user = userSchema(req.body)
  user.save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})
//get all users
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})
router.get('/users/email', (req, res) => {
  userSchema
    .findOne({ email: req.body.email })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})
//get some users from api
router.get('/users/:id', (req, res) => {
  const { id } = req.params
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})

module.exports = router;