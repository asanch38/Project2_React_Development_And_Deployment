import React, { useState } from "react";
import "./../index.css";

export default function CommentForm({ postId, onCommentAdded}) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name.trim() || !comment.trim()) {
            setError("Name and comment cannot be empty");
            return;
        
    }

    const newComment = {
        postId: parseInt(postId),
        name, 
        body: comment,
        email: `${name.toLowerCase().replace(/\s+/g, "")}@example.com`,
    };

    console.log("Submitting comment: ", newComment);

    fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        headers: {"Content-Type": "application/json",}, body: JSON.stringify(newComment),
    })
    .then((res) => {
        if (!res.ok){
            throw new Error("Network response was not ok");
        }
        return res.json();
    })
    .then((data) => {
        const postedComment = {
            ...newComment,
            id: data.id || Math.floor(Math.random() * 10000),
        };
        onCommentAdded(postedComment);
        setName("");
        setComment("");
        setError("");
    })
    .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to post comment. Try again.");
    });
    }
    return (
        <div className="comment-form-box">
            <h3 className="comment-form-title">Leave a Comment</h3>

            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} className="comment-form">
                <input 
                    type="text"
                    placeholder="Your name"
                    className="border-comment-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />

                <textarea 
                    placeholder="Your comment"
                    className="border-comment-textarea"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    )
}