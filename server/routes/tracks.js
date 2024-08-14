const express = require('express')
const mongoose = require('mongoose')
const { authenticate } = require('../middleware/auth')
const Track = mongoose.model('Track')

const router = express.Router()

router.get('/', authenticate, async (req, res) => {
  try {
    const tracks = await Track.find({ userId: req.user._id })
    res.json({ tracks })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/', authenticate, async (req, res) => {
  try {
    const { name, locations } = req.body

    if (!name || !locations) return res.status(422).json({ message: 'You must provide name and locations' })

    const track = new Track({ name, locations, userId: req.user._id })
    await track.save()

    res.json({ track })
  } catch (error) {
    res.status(422).json({ message: error.message })
  }
})

module.exports = router
