import {Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../index.css";

export default function BlogPostsPage() {
    const [postsData, setPostsData] = useState([]);
    const [loading, setLoading] = useState(true);

    //Fetch posts from the api
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            setPostsData(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching posts: ", error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading posts...</p>
    }

    if(postsData.length === 0){
        return <p>No posts available.</p>
    }

    return(
        <div className="container">
            {/* Import header function */}
            <Header />

            <main className="main">
                <div className="posts-container">
                    <h1 className="posts-title">Blog Posts</h1>

                    {postsData.map((post) => (
                        <article key={post.id} className="post-card">
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-body">
                                {post.body.substring(0, 100)}...
                            </p>

                            <Link to={`/post/${post.id}`} className="post-link">
                            Read more... 
                            </Link>
                        </article>
                    ))}
                </div>
            </main>

            {/* Call on Footer method*/}
            <Footer />
        </div>
    );
}