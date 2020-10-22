import React from 'react';
import classNames from "classnames";

// Styles, Images, Fonts
import styles from "../styles/components/content-grid.module.scss";

export default function ContentGrid(props) {

    let contentClass = classNames(
        styles.content,
        styles[props.theme],
        styles[props.contentAlign]
    );

    return (
        <div className={contentClass}>
            <div className={styles.heading}>
                <h1>{props.heading}</h1>
            </div>
            <div className={styles.text}>
                {props.children}
            </div>
        </div>
    )
}
