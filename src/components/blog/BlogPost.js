import React from "react";
import { useParams } from "react-router";
import { posts } from "./posts/Posts"
import "./BlogPost.css"

function BlogPost() {
    var { postSlug } = useParams();
    var index = posts.map(function (e) { return e.to; }).indexOf(postSlug);
    var post = posts.at(index);
    console.log(postSlug)

    return (
        <article>
            <h1 className="blog-title">{post.title}</h1>
            <h2 className="blog-subtitle">{post.subtitle}</h2>
            <img src={post.cover} alt="alt text" className="blog-image" />
            <time className="date">{post.date}</time>
            <p className="body">{post.body}</p>
        </article>
    );
}

export default BlogPost;
