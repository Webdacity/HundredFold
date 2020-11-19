import React, { useEffect } from 'react';
import { graphql } from "gatsby";


// Components
import Layout from "../components/Layout";
import Landing from "../components/Landing.js";
import Section from "../components/Section";
import CapabilityBlock from "../components/CapabilityBlock";

// Data
import CapabilityData from "../assets/data/capabilities.json"

// Styles, Images, Fonts
import styles from "../styles/pages/capabilities.module.scss";

export default function Capabilities({ data }) {
    // Slider Text
    const slidesText = [
        <h1> We believe in <span>driving change</span> through strong networks in Africa</h1>,
        <h1>Unearthing <span>insights</span> through our work</h1>,
        <h1>Delivering value through <span>cost efficiency</span></h1>
    ]


    useEffect(() => {
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            const mybutton = document.getElementById("scrollTopButton");

            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    })

    return (
        <Layout
            pageMeta={{
                title: "Capabilities",
                description: "We believe in driving change through strong networks in Africa",
                canonical: "/"
            }}
        >

            <Landing image={data.slide} name="industry" slidesText={slidesText} short="Our Capabilities" multiple={true} linkTo="/contact" linkText="Get in Touch" />

            <Section heading="Capabilities" theme="dark" id="capabilityMenu">
                <div className={styles.menuGrid} >
                    {CapabilityData.map((capability, index) => {
                        let anchorLink = `#${capability.name}`;
                        return (
                            <div key={index} className={styles.menuItem}>
                                <a data-scroll href={anchorLink}>{capability.name}</a>
                            </div>
                        )
                    })}
                </div>
            </Section>

            <section className={styles.section}>
                <div className={styles.content}>
                    {CapabilityData.map((capability, index) => {
                        if (index % 2 === 0) {
                            return (
                                <CapabilityBlock key={index}
                                    heading={capability.name}
                                    contentAlign="right"
                                >
                                    <p>{capability.description}</p>
                                </CapabilityBlock>
                            )
                        }
                        return (
                            <CapabilityBlock key={index}
                                heading={capability.name}
                                contentAlign="left"
                                theme="dark"
                            >
                                <p>{capability.description}</p>
                            </CapabilityBlock>
                        )
                    })}
                </div>
            </section>

            <button className={styles.backToMenuButton} id="scrollTopButton">
                <a href="#capabilityMenu">
                    <i className="material-icons">keyboard_arrow_up</i>
                </a>
            </button>

        </Layout>
    )
}

export const query = graphql`
  query CapabilitySlideImages{
    slide: file(relativePath: { eq: "slides/capabilities/slide1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
