import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error('Failed to fetch blogs:', err));
    }, []);

    return (
        <>
            {blogs.map((blog, index) => (
                <section className="lookbok-section" key={index}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-1">
                                <div className="lookbok-left">
                                    <div className="section-title">
                                        <h2>{blog.title}</h2>
                                    </div>
                                    <h2>{blog.author}</h2>
                                    <p>{blog.content}</p>

                                    <Link to={`/blog/${blog.id}`} className="primary-btn look-btn">See More</Link>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="lookbok-pic">
                                    <img
                                        src={`${blog.image}`}
                                        alt={blog.title}
                                    />
                                    <div className="pic-text">fashion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
