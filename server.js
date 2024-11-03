// all required libraries
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const path = require('path')

// initialize some parameters
const app = express()
const port = process.env.PORT

// connect to DB
mongoose.connect(process.env.MONGO_DB)
mongoose.connection.on('connected', () => {
  console.log(`connected to MongoDB ${mongoose.connection.name}`)
})

// import model
const Blog = require('./models/Blogs.js')
const blogRoute = require('./routes/blog.js')

// Log the HTTP requests
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
// app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(blogRoute)

// add listener
app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
