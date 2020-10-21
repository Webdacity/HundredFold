import React from 'react';

// Styles, Images, Fonts
import styles from "../styles/components/section.module.scss"

export default function Section(props) {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <h1>{props.heading}</h1>
                    <div></div>
                </div>
                {props.children}
            </div>
        </section>
    )
}
