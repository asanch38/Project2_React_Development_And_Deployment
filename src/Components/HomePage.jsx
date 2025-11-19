import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./../index.css";


export default function HomePage(){
    const navigate = useNavigate();
    return(
        <div className="container">
        {/* Call on Header method*/}
            <Header />  
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

        {/* Call on Footer method*/}
            <Footer />
        </div>
    );
}