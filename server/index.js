/* eslint-disable no-undef */

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt') // Для хешування паролів
const jwt = require('jsonwebtoken') // Для роботи з JWT
const UsersModel = require('./models/Users.js')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE_URL)

// Секретний ключ для підпису токенів (бажано зберігати в env)
const JWT_SECRET = 'your_jwt_secret_key'

app.post('/register', async (req, res) => {
  const { email, password } = req.body

  // Хешування паролю перед збереженням
  const hashedPassword = await bcrypt.hash(password, 10)

  UsersModel.create({ email, password: hashedPassword })
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await UsersModel.findOne({ email: email })

  if (!user) {
    return res.json('No record existed')
  }

  // Перевірка паролю за допомогою bcrypt
  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.json('The password is incorrect')
  }

  // Створення JWT токену
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: '1h', // токен дійсний 1 годину
  })

  res.json({ message: 'Success', token })
})

// Middleware для перевірки токену
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.sendStatus(401)

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

// Захищений маршрут (доступний тільки для авторизованих користувачів)
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user })
})

app.listen(3001, () => {
  console.log('server is running')
})
