import React from 'react';
import classNames from "classnames";

// Styles, Images, Fonts
import styles from "../styles/components/section.module.scss";

export default function Section(props) {

    let sectionClass = classNames(
        styles[props.theme],
        styles[props.contentAlign]
    );

    const Heading = (props) => {
        if (props.heading) {
            return (
                <div className={styles.heading}>
                    <h1>{props.heading}</h1>
                    <div></div>
                </div>
            )
        }
        return null
    }

    return (
        <section className={sectionClass}>
            <div className="container">
                <Heading {...props} />
                {props.children}
            </div>
        </section>
    )
}
