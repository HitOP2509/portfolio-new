import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import { ReactComponent as CloseMenuIcon } from "../../assets/close-menu.svg";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
    const [showMenuIcon, setShowMenuIcon] = useState(true);

    const pathname = useLocation();

    const handleToggleMenu = useCallback(
        () => setShowMenuIcon((prev) => !prev),
        []
    );

    useEffect(() => {
        setShowMenuIcon(true);
    }, [pathname]);
    return (
        <nav className="navbar">
            <div className="navContainer">
                <Link to="/" className="logo">
                    <span className="fName">ROHIT</span>
                    <span className="lName">SINGH</span>
                </Link>
                <ul className={`${showMenuIcon ? "navLinks" : "mobileLinks"}`}>
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
                <div className={["mobile-nav-icon"]} onClick={handleToggleMenu}>
                    {showMenuIcon ? <MenuIcon /> : <CloseMenuIcon />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
