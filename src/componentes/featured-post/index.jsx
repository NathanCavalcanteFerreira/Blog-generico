import React from 'react';
import AuthorBadge from '../author-badge';
import "./style.css";

export default function FeaturedPost() {
    return (
        <div className="featured-post-container">
            <div>
                <img className="featured-post-image" src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80" />
            </div>

            <div>
                <p className="featured-post-date">March 02, 2000</p>

                <a className="featured-post-title" href="https://www.linkedin.com/in/nathancavalcante01">
                    <h2 className="featured-post-title">Lorem ipsum dolor sit amet consectetur</h2>
                </a>

                <p className="featured-post-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Fusce finibus arcu nec tortor porta tristique.
                    Ut volutpat justo felis, volutpat luctus magna sodales
                    vel. Duis consequat justo et tellus pharetra, a lacinia risus
                    pharetra. Cras malesuada ligula vel tortor molestie
                    rutrum. In semper mi ac massa faucibus dictum.
                    Cras vel tristique leo. Mauris suscipit dignissim
                    turpis in fermentum. Phasellus dictum placerat massa
                    id varius.

                    <AuthorBadge />
                </p>
            </div>
        </div>
    );
}

