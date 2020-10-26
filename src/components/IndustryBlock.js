import React from 'react';

// Styles
import styles from "../styles/components/industry-block.module.scss";

import image from "../assets/images/services/service.jpg"

export default function IndustryBlock(props) {
    return (
        <article className={styles.block}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <h4>
                <i className="icon-circle"></i>
                {props.name}</h4>
            <p>{props.description}</p>
        </article>
    )
}
