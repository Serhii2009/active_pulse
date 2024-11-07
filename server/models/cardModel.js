/* eslint-disable no-undef */
const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Card', cardSchema)
