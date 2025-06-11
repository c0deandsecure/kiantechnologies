import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './CaseStudies.css'; // Import the CSS file

const CaseStudies = () => {
  // State for tab switching (Grid vs. List view)
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' for grid, 'tab2' for list

  // Function to switch tabs
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Example data for a blog post (you'd likely fetch this from an API)
  const blogPost = {
    id: 4,
    image: 'uploads/bc-1.jpg', // You'll need to ensure this path is correct relative to your public folder
    date: '22 Dec 2024',
    title: 'Paid ransom to have the hijacked data destroyed by the cybercriminalsPaid ransom to have the hijacked data destroyed by the cybercriminals @ Blackbaud and Blackbaud Inc.',
    shortContent: 'In July 2020, the company, which provides hundreds of non-profits and educational facilities with customer relationship management services, disclosed...',
    link: '/case-study/4' // Use React Router Link path
  };

  // Example data for related news (you'd likely fetch this from an API)
  const relatedNews = [
    {
      id: 1,
      image: 'assets/img/blog img/bybit1.png',
      date: '22 Feb 2025',
      title: 'Bybit Confirms $1.46B Crypto Heist in Cold Wallet Attack.',
      link: '/blog/1'
    },
    {
      id: 2,
      image: 'assets/img/blog img/openai1.png',
      date: '22 Feb 2025',
      title: 'OpenAI Bans ChatGPT Misuse for Surveillance & Influence.',
      link: '/blog/2'
    },
    // Add more news items as needed
  ];

  return (
    <section id="blog-item" className="blog-item-post">
      <div className="container">
        <div className="blog-content-details">
          <div className="row">
            <div className="col-md-9">
              <div className="blog-post-content">
                <div className="short-filter-tab">
                  <div className="shorting-filter">
                    <span><b>Sort</b> By</span>
                    <select>
                      <option value="9" selected>Popularity</option>
                      <option value="10">Most Read</option>
                      <option value="11">Most View</option>
                      <option value="12">Most Shared</option>
                    </select>
                  </div>
                  <div className="tab-button blog-button text-center">
                    <ul className="product-tab">
                      <li className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>
                        <i className="fas fa-th"></i>
                      </li>
                      <li className={activeTab === 'tab2' ? 'active tab_last' : 'tab_last'} onClick={() => handleTabClick('tab2')}>
                        <i className="fas fa-list"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="genius-post-item">
                  <div className="tab-container">

                    {/* Grid View (tab1) */}
                    <div id="tab1" className={`tab-content-1 pt35 ${activeTab === 'tab1' ? 'active-tab' : ''}`}>
                      <div className="row">
                        {/* Example Blog Post Item - You can map over an array of posts here */}
                        <div className="col-md-6">
                          <div className="blog-post-card"> {/* Changed classname for better CSS targeting */}
                            <div className="blog-img-date relative-position">
                              <div className="blog-thumnile">
                                <img src={blogPost.image} alt="Blog Thumbnail" />
                              </div>
                              <div className="course-price text-center gradient-bg">
                                <span>{blogPost.date}</span>
                              </div>
                            </div>
                            <div className="blog-title-content headline">
                              <div className="title-box">
                                <h3>{blogPost.title}</h3>
                              </div>
                              <div className="blog-content">
                                {blogPost.shortContent}
                              </div>
                              <div className="view-all-btn bold-font">
                                <Link to={blogPost.link}>Read More</Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Add more blog post items here by duplicating the col-md-6 div */}
                        <div className="col-md-6">
                          <div className="blog-post-card">
                            <div className="blog-img-date relative-position">
                              <div className="blog-thumnile">
                                <img src="uploads/bc-2.jpg" alt="Blog Thumbnail 2" />
                              </div>
                              <div className="course-price text-center gradient-bg">
                                <span>15 Nov 2024</span>
                              </div>
                            </div>
                            <div className="blog-title-content headline">
                              <div className="title-box">
                                <h3>Another Blog Post Title Here: Cybersecurity Trends 2025 Outlook</h3>
                              </div>
                              <div className="blog-content">
                                This is a short description for the second blog post, summarizing its content and encouraging readers to click for more details.
                              </div>
                              <div className="view-all-btn bold-font">
                                <Link to="/case-study/5">Read More</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{/* End of tab1 */}

                    {/* List View (tab2) - Currently commented out in original HTML, but structure provided */}
                    <div id="tab2" className={`tab-content-1 pt35 ${activeTab === 'tab2' ? 'active-tab' : ''}`}>
                      <div className="blog-list-view">
                        {/* Example List Blog Item - You can map over an array of posts here */}
                        <div className="list-blog-item">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="blog-post-card"> {/* Using same card class for consistency */}
                                <div className="blog-img-date relative-position">
                                  <div className="blog-thumnile">
                                    <img src="assets/img/blog/bp-1.jpg" alt="Blog Thumbnail" />
                                  </div>
                                  <div className="course-price text-center gradient-bg">
                                    <span>26 April 2025</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="blog-title-content headline">
                                <h3><Link to="/case-study/7">94 million customer records breached at major US retailer</Link></h3>
                                <div className="blog-content">
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                </div>
                                <div className="view-all-btn bold-font">
                                  <Link to="/case-study/7">Read More <i className="fas fa-chevron-circle-right"></i></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Add more list items as needed */}
                      </div>
                    </div> {/* End of tab2 */}

                  </div>{/* End tab-container */}
                </div> {/* End genius-post-item */}

                <div className="couse-pagination text-center">
                  <ul>
                    <li className="pg-text"><Link to="#">PREV</Link></li>
                    <li className="active"><Link to="#">01</Link></li>
                    <li><Link to="#">02</Link></li>
                    <li><Link to="#">03</Link></li>
                    <li><Link to="#">04</Link></li>
                    <li><Link to="#">...</Link></li>
                    <li><Link to="#">15</Link></li>
                    <li className="pg-text"><Link to="#">NEXT</Link></li>
                  </ul>
                </div>
              </div>{/* End blog-post-content */}
            </div>{/* End col-md-9 */}

            <div className="col-md-3">
              <div className="side-bar">
                <div className="side-bar-search">
                  <form action="#" method="get">
                    <input type="text" className="" placeholder="Search" />
                    <button type="submit"><i className="fas fa-search"></i></button>
                  </form>
                </div>

                <div className="side-bar-widget">
                  <h2 className="widget-title text-capitalize">Case studies <span>Categories.</span></h2>
                  <div className="post-categori ul-li-block">
                    <ul>
                      <li className="cat-item"><Link to="#">Real-World Cyber Attacks</Link></li>
                      <li className="cat-item"><Link to="#">Bug Bounty Success Stories</Link></li>
                      <li className="cat-item"><Link to="#">Insider Threats &amp; Data Breaches</Link></li>
                      <li className="cat-item"><Link to="#">Penetration Testing Case Studies</Link></li>
                      <li className="cat-item"><Link to="#">Social Engineering &amp; Phishing Attacks</Link></li>
                      <li className="cat-item"><Link to="#">Nation-State &amp; APT Attacks</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="side-bar-widget">
                  <h2 className="widget-title text-capitalize"><span>Related</span> News.</h2>
                  <div className="latest-news-posts">
                    {relatedNews.map(news => (
                      <div className="latest-news-area" key={news.id}>
                        <div className="latest-news-thumbnile relative-position">
                          <img src={news.image} alt={news.title} />
                          <div className="hover-search">
                            <i className="fas fa-search"></i>
                          </div>
                          <div className="blakish-overlay"></div>
                        </div>
                        <div className="date-meta">
                          <i className="fas fa-calendar-alt"></i> {news.date}
                        </div>
                        <h3 className="latest-title bold-font"><Link to={news.link}>{news.title}</Link></h3>
                      </div>
                    ))}
                    <div className="view-all-btn bold-font">
                      <Link to="/blog">View All News <i className="fas fa-chevron-circle-right"></i></Link>
                    </div>
                  </div>
                </div>

                <div className="side-bar-widget">
                  <h2 className="widget-title text-capitalize">Popular <span>Tags.</span></h2>
                  <div className="tag-clouds">
                    <ul>
                      <li><Link to="#">hacking</Link></li>
                      <li><Link to="#">network</Link></li>
                      <li><Link to="#">ec-council</Link></li>
                      <li><Link to="#">ethical</Link></li>
                      <li><Link to="#">ethicalhacking</Link></li>
                      <li><Link to="#">python</Link></li> {/* Corrected typo */}
                      <li><Link to="#">System</Link></li>
                      <li><Link to="#">Language</Link></li> {/* Corrected typo */}
                    </ul>
                  </div>
                </div>

                <div className="side-bar-widget">
                  <h2 className="widget-title text-capitalize"><span>Featured</span> Course.</h2>
                  <div className="featured-course">
                    <div className="best-course-pic-text relative-position">
                      <div className="best-course-pic relative-position">
                        <img src="assets/img/blog/fb-1.jpg" alt="Featured Course" />
                        <div className="trend-badge-2 text-center text-uppercase">
                          <i className="fas fa-bolt"></i>
                          <span>Trending</span>
                        </div>
                      </div>
                      <div className="best-course-text">
                        <div className="course-title mb20 headline relative-position">
                          <h3><Link to="#">Certified Penetration Testing Professional (CPENT)</Link></h3>
                        </div>
                        <div className="course-meta">
                          <span className="course-category"><Link to="#">EC-Council</Link></span>
                          <span className="course-author"><Link to="#">250 Students</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* End side-bar */}
            </div>{/* End col-md-3 */}
          </div>{/* End row */}
        </div>{/* End blog-content-details */}
      </div>{/* End container */}
    </section>
  );
};

export default CaseStudies;