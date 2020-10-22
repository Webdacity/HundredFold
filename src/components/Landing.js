import React from 'react';
import Header from "./Header";
import { Link } from "gatsby";

// Components
// import LandingSlider from "../components/LandingSlider";

//  Styles
import styles from "../styles/components/landing.module.scss"
import NavbarLogo from "../assets/images/logos/hundredfold/navbar.svg";


export default function Landing() {

    return (
        <div className={styles.landing}>
            <header>
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
            <div className="hero">
                {/* {props.slider: </>} */}
            </div>
        </div>
    )
}
