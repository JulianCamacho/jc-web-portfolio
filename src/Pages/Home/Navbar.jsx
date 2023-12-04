import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import DarkMode from "../DarkMode/DarkMode";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => { setNavActive(!navActive) };

    const closeMenu = () => { setNavActive(false) };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/jc-logo-3.png" alt="Logo" className="logo"/>
            </div>
            <a className={`nav__hamburguer ${navActive ? "active" : ""}`}
                onClick={toggleNav}>
                <span className="nav__hamburguer__line"></span>
                <span className="nav__hamburguer__line"></span>
                <span className="nav__hamburguer__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu}
                              activeClass="navbar--active-content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="heroSection"
                              className="navbar--content"
                        >Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                              activeClass="navbar--active-content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="MyPortfolio"
                              className="navbar--content"
                        >Portfolio</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                              activeClass="navbar--active-content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="AboutMe"
                              className="navbar--content"
                        >About Me</Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="btn btn-outline-primary" 
            >Contact Me</Link>
            <DarkMode />
        </nav>
    )
}

export default Navbar;
