// src/components/SingleBlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import './SingleBlogPost.css'; // Make sure this CSS file exists

function SingleBlogPost() {
  const { slug, id } = useParams(); // Get slug or ID from URL parameters
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response;
        if (slug) {
          // Fetch by slug for SEO-friendly URLs
          response = await axios.get(`http://localhost:5000/api/blog/posts/slug/${slug}`);
        } else if (id) {
          // Fallback to fetch by ID if slug is not available or used
          response = await axios.get(`http://localhost:5000/api/blog/posts/${id}`);
        } else {
          setError('No blog post identifier (slug or ID) provided in the URL.');
          setLoading(false);
          return;
        }
        setPost(response.data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(err.response?.data?.message || 'Failed to load blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, id]); // Re-run effect if slug or id changes

  if (loading) {
    return (
      <div className="single-blog-post-container loading-state">
        <p>Loading blog post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="single-blog-post-container error-state">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="single-blog-post-container no-post-found">
        <p>Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="single-blog-post-container">
      <article className="blog-post-content">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <p className="post-author">By {post.author}</p>
          <p className="post-date">Published on {new Date(post.createdAt).toLocaleDateString()}</p>
          {post.category && <p className="post-category">Category: {post.category}</p>}
        </div>
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="post-image" />
        )}
        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <div className="back-link-container">
          <Link to="/blog" className="back-to-blog-link">&larr; Back to all posts</Link>
        </div>
      </article>
    </div>
  );
}

export default SingleBlogPost;