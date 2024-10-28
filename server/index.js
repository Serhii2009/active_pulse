/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/authRoute')
require('dotenv').config()

const app = express()

// 1) MIDDLEWARES
app.use(
  cors({
    origin: 'https://active-pulse-frontend.onrender.com', // посилання на фронтенд
    credentials: true,
  })
)
app.use(express.json())

// 2) ROUTE
app.use('/api/auth', authRouter)

// 3) MONGO DB CONNECTION
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error))

// 4) GLOBAL ERROR HANDLER
app.use((err, res) => {
  console.error('Global error handler:', err) // Логування помилки
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  console.error('Error:', err)

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  })
})

//5) SERVER
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
