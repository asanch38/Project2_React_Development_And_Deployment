import { Link } from "react-router-dom";
import { useAuth, useUsername } from "./authcontext";

function Header() {
    const username = useUsername();
    return(
        <div className="container">
            <header className="header">
                <div className="logo"> 
                    MyBlog
                </div>
                <nav className="nav">
                    <button className="nav-link" onClick={() => navigate("/")}> Home</button>
                    <button className="nav-link" onClick={() => navigate("/login")}>Login</button>
                    {username ? <p>Logout</p> : <link to="/login">Login</link>}
                </nav>
            </header>
        </div>
    );
}

export default Header;