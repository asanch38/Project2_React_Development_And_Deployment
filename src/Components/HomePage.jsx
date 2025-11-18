import React from "react";
import {useNavigate} from "react-router-dom";
import "./../index.css";


export default function HomePage(){
    const navigate = useNavigate();
    return(
        <div className="container">
            <header className="header">
                <div className="logo"> 
                    MyBlog
                </div>
                <nav className="nav">
                    <button className="nav-link" onClick={() => navigate("/")}> Home</button>
                    <button className="nav-link" onClick={() => navigate("/login")}>Login</button>
                </nav>
            </header>

            <main className="main">
                <h1 className="main-title">
                    Welcome to our Blog!
                </h1>
                <p className="main-description">
                    Welcome to our blog! Here we will demonstrate the various
                    skills we have learned throughout our time in Front-End 
                    Development! Here we developed this website using react, 
                    and utilizing our skills in HTML, CSS, and JavaScript.
                </p>
            </main>

            <footer className="footer">
                <p>2025 MyBlog. All rights reserved.</p>
            </footer>
        </div>
    );
}