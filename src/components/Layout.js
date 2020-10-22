import React from 'react';

// Components
import Head from "./Head";
import Footer from "./Footer";
import Header from "./Header";

// Fonts, Styles
import "typeface-spartan";
import "typeface-roboto";
import "../styles/global.scss";
import "../styles/fonts/icons/icons.css"

export default function Layout(props) {
    return (
        <>
            <Head pageMeta={props.pageMeta}></Head>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </>
    )
}
