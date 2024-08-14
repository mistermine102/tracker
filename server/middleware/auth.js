const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.verifyToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers

    if (!authorization) {
      req.isAuthenticated = false
      return next()
    }
    const token = authorization.split(' ')[1]
    if (!token) {
      req.isAuthenticated = false
      return next()
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const { userId } = payload

    const user = await User.findById(userId)

    req.user = user
    req.isAuthenticated = true
    next()
  } catch (error) {
    next(error)
  }
}

exports.authenticate = (req, res, next) => {
  if (!req.isAuthenticated) {
    return res.status(401).json({ message: 'Authentication failed' })
  }
  next()
}
