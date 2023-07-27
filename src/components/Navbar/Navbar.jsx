import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <div className="logo">
                    <span className="fName">ROHIT</span>
                    <span className="lName">SINGH</span>
                </div>
                <ul className="navLinks">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
