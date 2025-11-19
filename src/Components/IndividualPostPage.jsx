import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CommentForm from "./CommentForm";

export default function IndividualPostPage() {
  const { id } = useParams();
  const[post, setPost] = useState(null);
  const[user, setUser] = useState(null);
  const[comments, setComments] = useState([]);
  const[loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setPost(data);
      return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
    })
    .then((res) => res.json())
    .then((userData) => setUser(userData))
    .catch((err) => console.error("Error fetching post: ", err));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      setComments(data);
      setLoadingComments(false);
    })
    .catch((err) => {
      console.error("Error fetching comments: ", err);
      setLoadingComments(false);
    });
  }, [id]);

  if(!post){
    return(
      <div className="text-center mt-10 text-gray-700">
        <p>Loading post...</p>
      </div>
    );
  }

  return(
    <div className="container">
        {/* Import Header Function */}
        <Header />

        <main className="individual-post-container">
            <h1 className="individual-post-title">{post.title}</h1>
            {user && <p className="individual-post-user">{user.name} ({user.email})</p>}
            <p className="individual-post-body">{post.body}</p>

            <CommentForm 
                postId={id}
                onCommentAdded={(newComment) => 
                    setComments((prev) => [newComment, ...prev])
                }
                />

            <div className="comment-box">
                <h3>Comments</h3>
                {loadingComments ? (
                    <p>Loading Comments...</p>
                ) : comments.length === 0 ? (
                    <p>No comments yet. Be the first to comment!</p>                    
                ) : (
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>
                                <strong>{comment.name}</strong>
                                <p>{comment.email}</p>
                                <p>{comment.body}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
        
        {/* Call on Footer method*/}
        <Footer />
    </div>
  )
}
