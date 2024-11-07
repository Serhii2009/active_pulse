/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const multer = require('multer')
const Card = require('../models/cardModel')

// Налаштування multer для зберігання файлів у папку "uploads"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})
const upload = multer({ storage: storage })

// Маршрут для завантаження іконки та створення картки
router.post('/upload', upload.single('icon'), async (req, res) => {
  try {
    const { text } = req.body
    const imageUrl = `/uploads/${req.file.filename}`
    const card = new Card({ imageUrl, text })
    await card.save()
    res.status(201).json({ success: true, card })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Маршрут для створення картки (без завантаження файлу)
router.post('/create', async (req, res) => {
  try {
    const { imageUrl, text } = req.body
    const card = new Card({ imageUrl, text })
    await card.save()
    res.status(201).json({ success: true, card })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Маршрут для отримання всіх карток
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find()
    res.status(200).json({ success: true, cards })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

module.exports = router
