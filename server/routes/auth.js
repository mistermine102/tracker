const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      email,
      password: hashedPassword,
    })

    await newUser.save()

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET)

    res.json({ token })
  } catch (err) {
    return res.status(422).send(err.message)
  }
})

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) return res.status(422).json({ message: 'Wrong email or password' })

    const user = await User.findOne({ email })

    if (!user) return res.status(422).json({ message: 'Wrong email or password' })

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return res.status(422).json({ message: 'Wrong email or password' })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

    res.json({ token })
  } catch (err) {
    return res.status(422).send(err.message)
  }
})

module.exports = router
