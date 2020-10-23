import React from 'react';
import classNames from "classnames";

// Styles, Images, Fonts
import styles from "../styles/components/capability-block.module.scss";

export default function ContentGrid(props) {

    const outerClass = classNames(
        styles.article,
        styles[props.theme],
    )

    const contentClass = classNames(
        styles.content,
        styles[props.contentAlign],
    );

    // let description = props.text;
    // description = description.replace("<br />", <br />)

    return (
        <article className={outerClass} id={props.heading}>
            <div className="container">
                <div className={contentClass}>
                    <header className={styles.header}>
                        <h1>{props.heading}</h1>
                    </header>
                    <div className={styles.text}>
                        {props.children}
                    </div>
                </div>
            </div>
        </article>
    )
}
