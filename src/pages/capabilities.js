import React from 'react';
import SmoothScroll from "smooth-scroll";

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
    let scroll = new SmoothScroll('[data-scroll]');

    // Slider Text
    const slidesText = [
        <h1> We <span>pride</span> ourselves in international networks and global collaborations</h1>,
        <h1>Unearthing <span>insights</span> through our work</h1>,
        <h1>Delivering value through <span>cost efficiency</span></h1>
    ]

    return (
        <Layout
            pageMeta={{
                title: "Capabilities",
                description: "An Africa Focused Strategy Company",
                canonical: "/"
            }}
        >

            <Landing image={data.slide} name="industry" slidesText={slidesText} short="Our Capabilities" multiple={true} linkTo="/contact" linkText="Get in Touch" />

            <Section heading="Capabilities" theme="dark" >
                <div className={styles.menuGrid}>
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
