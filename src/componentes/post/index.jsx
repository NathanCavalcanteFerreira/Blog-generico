import React from 'react';
import "./style.css";

export default function Post({ post }) {
    return (
        <div className="post-container">
            <div>
                <img className="post-image" src={post.image} />
            </div>

            <div>
                <p className="post-date">{post.date}</p>

                <a className="post-title" href="https://www.linkedin.com/in/nathancavalcante01">
                    <p className="post-title">{post.title}</p>
                </a>

                <p className="post-description">
                    {post.description}
                </p>
            </div>
        </div>
    );
}

