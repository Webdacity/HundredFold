import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Transition from '../components/Transition'


// Styles & Fonts
import "typeface-spartan";
import "typeface-roboto";
import "../styles/global.scss";
import "../styles/fonts/icons/icons.css"

// Icons

const Layout = ({ children, location }) => {
    return (
        <>
            <Header />
            <Transition location={location}>
                {children}
            </Transition>
            <Footer />
        </>
    )

}

export default Layout