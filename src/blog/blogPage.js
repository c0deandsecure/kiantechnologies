// src/components/BlogPages.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard'; // Import the new BlogCard component
import './BlogPages.css'; // Import the CSS file

const BlogPages = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Fetch all published blog posts
        const response = await axios.get('http://localhost:5000/api/blog/');
        setBlogPosts(response.data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err.response?.data?.message || 'Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []); // Empty dependency array means this runs once on component mount

  if (loading) {
    return (
      <div className="blog-pages-container loading-state">
        <p>Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-pages-container error-state">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="blog-pages-container">
      <h2 className="blog-section-title">Our Latest Insights</h2>
      
      {blogPosts.length === 0 ? (
        <div className="no-blogs-message">
          <p>No blog posts published yet. Check back soon!</p>
        </div>
      ) : (
        <div className="blog-cards-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPages;