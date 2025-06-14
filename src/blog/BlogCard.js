// src/components/blog/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };
  
  // Use post.image instead of post.imageUrl
  const imageUrl = post.image;
  const excerpt = post.excerpt || (post.content ? 
    post.content.substring(0, 100) + '...' : 
    'No excerpt available.'
  );
  
  const postDate = post.createdAt ? formatDate(post.createdAt) : 'No Date';

  return (
    <div className="blog-card">
      <div className="blog-header">
        <div className="blog-brand">BYBIT</div>
        <div className="blog-date">{postDate}</div>
      </div>
      
      <div className="divider"></div>
      
      {/* Image should be at the top of the card */}
      {imageUrl && (
        <div className="blog-card-image-wrapper">
          <img 
            src={imageUrl} 
            alt={post.title} 
            className="blog-card-image" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.style.display = 'none';
            }}
          />
        </div>
      )}
      
      <h3 className="blog-card-title">{post.title}</h3>
      <p className="blog-card-excerpt">{excerpt}</p>
      
      <Link 
        to={`http://localhost:5000/blog/${post.slug}`} 
        className="read-more-button"
      >
        Read More <span className="smiley">😊</span>
      </Link>
    </div>
  );
};

export default BlogCard;