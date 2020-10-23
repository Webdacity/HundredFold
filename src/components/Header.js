import React from 'react';
import { Link } from "gatsby";

// Components

//  Styles
import styles from "../styles/components/header.module.scss"
import NavbarLogo from "../assets/images/logos/hundredfold/navbar.svg";


export default function Header() {

    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.logo}>
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
            </nav>
        </header>
    )
}
