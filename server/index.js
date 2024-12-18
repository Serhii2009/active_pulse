/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/authRoute')
const cardsRouter = require('./routes/cardRoute') // Імпортуємо новий маршрутизатор для карток
require('dotenv').config()

const app = express()

// 1) MIDDLEWARES
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://active-pulse-frontend.onrender.com',
    ],
  })
)
app.use(express.json())

app.use('/uploads', express.static('uploads'))

// 2) ROUTES
app.use('/api/auth', authRouter)
app.use('/api/cards', cardsRouter) // Додаємо маршрут для карток

// 3) MONGO DB CONNECTION
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error))

// 4) GLOBAL ERROR HANDLER
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('Global error handler:', err) // Логування помилки
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  })
})

// 5) SERVER
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
