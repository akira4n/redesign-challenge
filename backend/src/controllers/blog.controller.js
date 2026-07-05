const blogService = require('../services/blog.service');

class BlogController {
  async getAllBlogs(req, res) {
    try {
      const blogs = await blogService.getAllBlogs();
      return res.status(200).json(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getBlogById(req, res) {
    try {
      const { id } = req.params;
      const blog = await blogService.getBlogById(id);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      return res.status(200).json(blog);
    } catch (error) {
      console.error(`Error fetching blog with ID ${req.params.id}:`, error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new BlogController();
