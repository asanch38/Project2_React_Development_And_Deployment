import { Link, useNavigate } from "react-router-dom";
import { useAuth, useUsername } from "./LoginAuthentication/AuthContext";

function Header() {
    const navigate = useNavigate();
    const username = useUsername();
    const { logout } = useAuth();
    return(
        <header className="header">
            <div className="logo"> 
                MyBlog
            </div>

            <nav className="nav">
                <button className="nav-link" onClick={() => navigate("/")}> Home</button>
                {/* Dynamic functionality for Login/Logout button */}
                {username ? (<button className="nav-link" onClick={() => {logout(); navigate("/");}}>Logout</button>)
                 : (<button className="nav-link" onClick={() => navigate("/login")}>Login</button>)}
            </nav>
        </header>
    );
}

export default Header;