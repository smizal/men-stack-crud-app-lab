const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  body: String,
  rating: Number,
  publisher: String,
  isPublished: Boolean
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
