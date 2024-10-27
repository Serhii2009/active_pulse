/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/authRoute')
const app = express()

// 1) MIDDLEWARES
app.use(cors())
app.use(express.json())

// 2) ROUTE
app.use('/api/auth', authRouter)

// 3) MONGO DB CONNECTION
mongoose
  .connect(
    'mongodb+srv://Serhii:-C2Jfbw7M7fhc7d@activepulse.y9hma.mongodb.net/users'
  )
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error))

// 4) GLOBAL ERROR HANDLER
app.use((err, res) => {
  // req, next
  err.statuCode = err.statuCode || 500
  err.status = err.status || 'error'

  res.status(err.statuCode).json({
    status: err.status,
    message: err.message,
  })
})

//5) SERVER
const PORT = 3000
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
