import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <span className="fName">Rohit</span>
                <span className="lName">Singh</span>
            </div>
            <ul>
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
        </nav>
    );
};

export default Navbar;
