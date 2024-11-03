const express = require('express')
const route = express.Router()
const blogController = require('../controllers/blogs')

route.get('/', blogController.index) // done
route.get('/blogs', blogController.index) // done
route.get('/blogs/new', blogController.newPost) // done
route.get('/blogs/admin', blogController.admin) // done
route.get('/blogs/:postId', blogController.show)
route.post('/blogs', blogController.create) // done
route.delete('/blogs/:postId', blogController.deletePost) // done
route.get('/blogs/:postId/edit', blogController.edit) // done
route.put('/blogs/:postId', blogController.update) // done

module.exports = route
