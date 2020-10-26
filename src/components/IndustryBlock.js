import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"

// Styles
import styles from "../styles/components/industry-block.module.scss";

// import image from "../assets/images/indust/service.jpg"

export default function IndustryBlock(props) {
    const data = useStaticQuery(graphql`
    query IndustryImages {
      allFile(filter: {ext: {regex: "/(jpg)/"}, relativeDirectory: {eq: "industries"}}) {
        edges {
          node {
            base
            name
            childImageSharp {
                fluid(maxWidth: 400, quality: 75) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcWebp
              }
            }
          }
        }
      }
    }
    `)

    const getImage = (name) => {
        let edges = data.allFile.edges;
        const item = edges.find(item => item.node.name === name);
        if (item) {
            return item.node.childImageSharp.fluid
        }
    }

    const image = getImage(props.image);

    return (
        <article className={styles.block}>
            <div className={styles.image}>
                <Img fluid={image} />
            </div>
            <h4>
                <i className="icon-circle"></i>
                {props.name}</h4>
            <p>{props.description}</p>
        </article>
    )
}
