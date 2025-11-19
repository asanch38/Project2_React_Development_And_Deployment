import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useAuth } from './LoginAuthentication/AuthContext';
import "./../index.css";
import Header from './Header';
import Footer from './Footer';

function Login(){
    const { login } = useAuth();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        login(userData.username, userData.password);
        navigate("/");
    };
    return (
        <div>
            {/* Import header function */}
            <Header />
            
            <main className="main">
                <div className="login-card">
                    <h2 className="login-title">Login</h2>
                    <form onSubmit={onSubmit} className="login-form">
                        <input
                        placeholder="Username" 
                        className="border" 
                        value={userData.username} 
                        onChange={(e) => setUserData({...userData, username: e.target.value})}
                        />

                        <input 
                        placeholder="Password"
                        type="password"
                        className="border"
                        value={userData.password}
                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                        />

                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
            </main>
            {/* Call on Footer method*/}
            <Footer />
        </div>
    );
}

export default Login;