import React from 'react';
import { graphql } from "gatsby";


// Components
import Layout from "../components/Layout";
import Landing from "../components/Landing.js";
import Section from "../components/Section";
import IndustryBlock from "../components/IndustryBlock"

// Data
import IndustryData from "../assets/data/industries.json"

// Styles, Images, Fonts
import styles from "../styles/pages/industries.module.scss";

export default function Industries({ data }) {
  // Slider Text
  const slidesText =
    [
      <h1> We <span>pride</span> ourselves in international networks and global collaborations</h1>,
      <h1>Driving change through <span>ethics</span></h1>,
      <h1>Spotting emerging events for <span>opportunities</span></h1>
    ]

  return (
    <Layout
      pageMeta={{
        title: "Industries",
        description: "We pride ourselves in international networks and global collaborations",
        canonical: "/"
      }}
    >

      <Landing image={data.slide} name="industry" slidesText={slidesText} short="Industries" multiple={true} linkTo="/contact" linkText="Get in Touch" align="right" />

      <Section heading="Industries" >
        <div className={styles.grid}>
          {IndustryData.map((industry, index) => {
            return (
              <IndustryBlock key={index}
                name={industry.name}
                description={industry.description}
                image={industry.image}
              />
            )
          })}
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query IndustrySlideImages{
    slide: file(relativePath: { eq: "slides/industries/slide1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`