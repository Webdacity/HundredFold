import React from 'react';

// Components
import Head from "./Head";
import Footer from "./Footer";
import Landing from "./Landing";

// Fonts, Styles
import "typeface-spartan";
import "typeface-roboto";
import "../styles/global.scss";
import "../styles/fonts/icons/icons.css"

export default function Layout(props) {
    return (
        <>
            <Head pageMeta={props.pageMeta}></Head>
            <Landing
                slider={props.slider}
            />
            {props.children}
            <Footer></Footer>
        </>
    )
}
