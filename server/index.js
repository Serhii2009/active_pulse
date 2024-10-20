/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require('./models/Users.js')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://Serhii:-C2Jfbw7M7fhc7d@activepulse.y9hma.mongodb.net/users'
)

app.post('/login', (req, res) => {
  const { email, password } = req.body
  UsersModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json('Success')
      } else {
        res.json('The password is incorrect')
      }
    } else {
      res.json('No record existed')
    }
  })
})

app.post('/register', (req, res) => {
  UsersModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
})

app.listen(3001, () => {
  console.log('server is running')
})
