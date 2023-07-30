import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";
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
        <header className="navbar">
            <nav className="container">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <ul className={`${showMenuIcon ? "navLinks" : "mobileLinks"}`}>
                    <li>
                        <Link to="/">{"// Home"}</Link>
                    </li>
                    <li>
                        <Link to="/#about">{"// About"}</Link>
                    </li>
                    <li>
                        <Link to="/#projects">{"// Projects"}</Link>
                    </li>
                    <li>
                        <Link to="/#contact">{"// Contact"}</Link>
                    </li>
                </ul>
                <div className={["mobile-nav-icon"]} onClick={handleToggleMenu}>
                    {showMenuIcon ? <MenuIcon /> : <CloseMenuIcon />}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
