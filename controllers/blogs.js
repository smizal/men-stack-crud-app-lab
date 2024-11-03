const { response } = require('express')
const Blog = require('../models/Blogs.js')

const mainTitle = 'My Blog'

const newPost = (req, res) => {
  res.render('blogs/new.ejs', { pageTitle: `${mainTitle} - Add New Post` })
}

const create = async (req, res) => {
  console.log(req.body)

  if (req.body.isPublished === 'on') {
    req.body.isPublished = true
  } else {
    req.body.isPublished = false
  }
  await Blog.create(req.body)
  res.redirect('/blogs/admin')
}

const admin = async (req, res) => {
  const posts = await Blog.find({})
  res.render('blogs/admin.ejs', { posts, pageTitle: `${mainTitle} - Admin` })
}

const index = async (req, res) => {
  const posts = await Blog.find({ isPublished: true })
  res.render('blogs/index.ejs', { posts, pageTitle: `${mainTitle} - Posts` })
}

const show = async (req, res) => {
  const foundPost = await Blog.findById(req.params.postId)
  res.render('blogs/show.ejs', {
    post: foundPost,
    pageTitle: `${mainTitle} - Show Post`
  })
}

const deletePost = async (req, res) => {
  const foundPost = await Blog.findByIdAndDelete(req.params.postId)
  res.redirect('/blogs/admin')
}

const edit = async (req, res) => {
  const foundPost = await Blog.findById(req.params.postId)
  res.render('blogs/edit.ejs', {
    post: foundPost,
    pageTitle: `${mainTitle} - Edit Post`
  })
}

const update = async (req, res) => {
  if (req.body.isPublished === 'on') {
    req.body.isPublished = true
  } else {
    req.body.isPublished = false
  }
  console.log(req.body)
  await Blog.findByIdAndUpdate(req.params.postId, req.body)

  res.redirect(`/blogs/admin`)
}

module.exports = {
  newPost,
  create,
  admin,
  index,
  show,
  deletePost,
  edit,
  update
}
