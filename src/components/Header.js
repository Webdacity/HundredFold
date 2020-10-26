import React from 'react';
import { Link } from "gatsby";

// Components

//  Styles
import styles from "../styles/components/header.module.scss"
import NavbarLogo from "../assets/images/logos/hundredfold/navbar.svg";


export default function Header() {

    const toggleNav = () => {
        let icon = document.getElementById("navbar-icon");
        icon.classList.toggle(styles.open);

        let body = document.getElementsByTagName('body')[0];
        body.classList.toggle("noscroll");

        let nav = document.getElementById('mobile-nav');
        // initial state
        if (!nav.classList.contains(styles.open) && !nav.classList.contains(styles.closed)) {
            nav.classList.add(styles.open);
        } else if (nav.classList.contains(styles.open)) {
            nav.classList.remove(styles.open);
            nav.classList.add(styles.closed);
            setTimeout(() => {
                nav.classList.remove(styles.closed);
            }, 300);
        } else {
            nav.classList.remove("closed");
            nav.classList.add(styles.open);
        }
    }

    const closeNav = () => {

        let body = document.getElementsByTagName('body')[0];
        body.classList.toggle("noscroll");

        let nav = document.getElementById('mobile-nav');
        nav.classList.remove(styles.closed);
        nav.classList.remove(styles.open);
    }


    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.logo} onClick={closeNav} >
                    <img src={NavbarLogo} alt="Hundredfold Navbar Logo" />
                </div>
                <div className={styles.list}>
                    <Link to="/">
                        About
                        </Link>
                    <Link to="/capabilities">
                        Capabilities
                        </Link>
                    <Link to="/industries">
                        Industries
                        </Link>
                    <Link to="/contact">
                        Contact
                        </Link>
                </div>
                <div className={styles.button} onClick={toggleNav} >
                    <div className={styles.icon} id="navbar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
            <nav className={styles.mobileNav} id="mobile-nav">
                <div className={styles.list}>
                    <Link to="/" className={styles.item} onClick={toggleNav}>
                        About
                        </Link>
                    <Link to="/capabilities" className={styles.item} onClick={toggleNav}>
                        Capabilities
                        </Link>
                    <Link to="/industries" className={styles.item} onClick={toggleNav}>
                        Industries
                        </Link>
                    <Link to="/contact" className={styles.item} onClick={toggleNav}>
                        Contact
                        </Link>
                </div>
            </nav>
        </header>
    )
}
