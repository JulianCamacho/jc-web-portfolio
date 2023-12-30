import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ReactComponent as LogoSVG } from '../../assets/jc-logo-3.svg';
import DarkMode from "../DarkMode/DarkMode";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    /* Hamburger Menu */
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

    /* Hide navbar when scrolling down */
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <div className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <nav className={`navbar ${navActive ? "active" : ""}`}>
                <div>
                    <LogoSVG className="navbar--logo" />
                </div>
                {/* eslint-disable-next-line*/}
                <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                    <span className="nav__hamburger__line"></span>
                    <span className="nav__hamburger__line"></span>
                    <span className="nav__hamburger__line"></span>
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
                                to="mySkills"
                                className="navbar--content"
                            >My Skills</Link>
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
        </div>
    )
}

export default Navbar;
