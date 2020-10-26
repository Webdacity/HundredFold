import React from 'react';
import classNames from "classnames";
import Img from 'gatsby-image';


// Styles, Images, Fonts
import styles from "../styles/components/content-grid.module.scss";

export default function ContentGrid(props) {

    let contentClass = classNames(
        styles.content,
        styles[props.theme],
        styles[props.contentAlign],
        props.capability ? styles.capability : ""
    );


    const wrapperStyles = {
        width: '100%',
    }

    const GodwinImage = (props) => {
        return (
            <div className={styles.godwin}>
                <div className={styles.image}>
                    <Img fluid={props.image.childImageSharp.fluid} style={wrapperStyles}></Img>
                </div>
                <h3><span>Godwin</span> Hatekah</h3>
                <p>Founder &amp; Chief Strategy Officer</p>
            </div>
        )
    }

    return (
        <div className={contentClass}>
            <header className={styles.header}>
                <h1>{props.heading}</h1>
                {props.image ? <GodwinImage {...props} /> : null}
            </header>
            <div className={styles.text}>
                {props.children}
            </div>
        </div>
    )
}
