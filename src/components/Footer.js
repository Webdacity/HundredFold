import React from 'react';
import { Link } from "gatsby"

// Styles, Images, Fonts
import styles from "../styles/components/footer.module.scss";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.gridUpper}>
                    <h2>Hundred<span>Fold</span></h2>
                    <div className={styles.nav}>
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
                </div>
                <div className={styles.divider} />
                <div className={styles.gridLower}>
                    <p>© 2020 - Hundredfold (PTY) LTD</p>
                    <p>Design &amp; Development by <a target="blank" href="https://webdacity.dev">Webdacity</a></p>
                    <div className={styles.social}>
                        <a href="">
                            <i className="icon-facebook"></i>
                        </a>
                        <a href="">
                            <i className="icon-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
