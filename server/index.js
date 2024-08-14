require('dotenv').config()

require('./models/User')
require('./models/Track')
const express = require('express')
const Mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const trackRoutes = require('./routes/tracks')
const { verifyToken, authenticate } = require('./middleware/auth')

const app = express()

app.use(express.json())

app.use(verifyToken)

app.use(authRoutes)
app.use('/tracks', trackRoutes)

app.get('/', authenticate, (req, res) => {
  res.send(`Hi there! Your email is ${req.user.email}`)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
  Mongoose.connect(process.env.DB_URI)
    .then(() => console.log('Connected to database'))
    .catch(err => console.log("Can't connect to database"))
})
