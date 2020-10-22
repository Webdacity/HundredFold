import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import styles from "../styles/components/slide.module.scss"

export default function Slide(props) {

    const Image = (props) => {
        const data = useStaticQuery(
            graphql`
            query SlideImages{
                one: file(relativePath: { eq: "slider/1.jpg" }) {
                childImageSharp {
                fluid(maxWidth: 1200,quality: 80, jpegProgressive: true) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
                }
                 two: file(relativePath: { eq: "slider/2.jpg" }) {
                childImageSharp {
                fluid(maxWidth: 1200,quality: 80, jpegProgressive: true) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
                }
                three: file(relativePath: { eq: "slider/3.jpg" }) {
                childImageSharp {
                fluid(maxWidth: 1200, quality: 80, jpegProgressive: true) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
                }
            }
        `
        )

        const wrapperStyles = {
            height: '100%',
        }

        switch (props.number) {
            case "one":
                return <Img fluid={data.one.childImageSharp.fluid} style={wrapperStyles} />
            case "two":
                return <Img fluid={data.two.childImageSharp.fluid} style={wrapperStyles} />
            case "three":
                return <Img fluid={data.three.childImageSharp.fluid} style={wrapperStyles} />
            default:
                return <Img />
        }
    }

    return (
        <div className={`${styles[props.number]} ${styles.slide}`} >
            <div className={styles.image}>
                {/* <Image {...props} /> */}
            </div>
            <div className={styles.info}>
                {props.heading}
                <p>
                    {props.text}
                </p>
                <button className="button">
                    <Link to={props.linkTo}>
                        {props.linkText}
                    </Link>
                </button>
            </div>
        </div>
    )
}
