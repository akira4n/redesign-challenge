const blogRepository = require('../repositories/blog.repository');

class BlogService {
  async getAllBlogs() {
    return blogRepository.findAll();
  }

  async getBlogById(id) {
    return blogRepository.findById(id);
  }
}

module.exports = new BlogService();
