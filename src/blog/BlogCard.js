// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'; // Import its own CSS file

const BlogCard = ({ post }) => {
  // Ensure post.content exists before trying to substring
  const excerpt = post.excerpt || (post.content ? post.content.substring(0, 150) + '...' : 'No excerpt available.');
  const postDate = post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : 'No Date';

  return (
    <div className="blog-card">
      {post.imageUrl && (
        <div className="blog-card-image-wrapper">
          <img src={post.imageUrl} alt={post.title} className="blog-card-image" />
          {/* Date Overlay */}
          <div className="blog-card-date-overlay">
            {postDate.split(' ')[0]} {/* Day */}
            <br />
            {postDate.split(' ')[1]} {postDate.split(' ')[2]} {/* Month Year */}
          </div>
        </div>
      )}
      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        {/* Author and original date are not explicitly shown in the example image's main content area,
            but can be kept if desired. For strict match, we remove them from here.
            <div className="blog-card-meta">
              <span className="meta-item">By {post.author}</span>
            </div>
        */}
        <p className="blog-card-excerpt">{excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="read-more-button">
          Read More &gt; {/* Changed to > as per image */}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;