import React from "react";
import { graphql } from "gatsby";
import classNames from "classnames";
import Img from 'gatsby-image';

// Components
import Layout from "../components/Layout";
import Landing from "../components/Landing.js";
import Section from "../components/Section";
import ContentGrid from "../components/ContentGrid";

// Styles, Images, Fonts
import styles from "../styles/pages/index.module.scss";

export default function About({ data }) {

  // Slider Text
  const slidesText = [<h1> An <span>Africa Focused</span> Strategy Company</h1>]

  const QuoteBlock = (props) => {
    let quoteClass = classNames(
      styles.quoteBlock,
      styles[props.align]

    );

    const wrapperStyles = {
      height: '100%',
    }

    const quote1ImgStyle = {
      objectPosition: "left center"
    }

    const quote2ImgStyle = {
      objectPosition: "right center"
    }

    return (
      <section className={quoteClass}>
        <div className={styles.quoteImage}>
          {props.image === "quote1" ? <Img fluid={data.quote1.childImageSharp.fluid} style={wrapperStyles} imgStyle={quote1ImgStyle} /> : <Img fluid={data.quote2.childImageSharp.fluid} style={wrapperStyles} imgStyle={quote2ImgStyle} />}
        </div>
        <div className={styles.overlay}>
          <div className="container">
            <div className={styles.inner}>
              {props.children}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <Layout
      pageMeta={{
        title: "About",
        description: "An Africa Focused Strategy Company",
        canonical: "/"
      }}
    >

      <Landing image={data.slide} name="about" slidesText={slidesText} short="About Us" multiple={true} linkTo="/contact" linkText="Get in Touch" align="right" />

      <Section heading="About Us" >
        <div className={styles.about}>
          <p>
            Hundredfold was established on the back of our convictions of what works and what can turn around a business, an organization towards the path of recovery and growth in Africa.
          </p>
          <p>
            These are our convictions, because we have experienced, practiced, and witnessed what works in turning around businesses and organizations towards cost efficiency, credible governance practices, Africa business networking, reliable operating models, financial efficiency and strategic outlook and direction.
          </p>
          <p>Hundredfold is BBBEE Level 2 company.</p>
        </div>
      </Section>

      <Section
        theme="dark"
      >
        <ContentGrid
          heading="What we Believe"
          contentAlign="right"
          theme="dark"
        >
          <p> We believe in driving change through strong ethics and strong data analytics. </p >
          <p>  We are driven by our efficiency culture that we believe will pay off for clients. </p >
          <p> We believe in respect for our clients and those around us; strong or weak, rich or poor, learned or unlearned, with us or not us. </p >
          <p> We believe in the society we live in and thrive to make it better than we first met it. </p >
          <p> We believe in collaborations and partnerships. We believe in our culture of multi-experience and multi industry skills and resources. </p >
          <p> We believe in local contexts. </p >
          <p> We believe in diversity and inclusivity. </p >
        </ContentGrid>
      </Section>

      <QuoteBlock align="right" image="quote1">
        <h3>
          We believe in the <span>Hundredfold</span> story of turning things around for good.
        </h3>
      </QuoteBlock>

      <Section      >
        <ContentGrid
          heading="The Hundredfold difference"
          contentAlign="right"
        >
          <div className={styles.difference}>
            <p>
              <span>
                How our work impacts on our clients is the difference we make to their bottom line, direction and efficiency:
            </span>
            </p>
            <ul>
              <li>
                <span></span>
              Bringing international network of companies together to execute African centered projects
            </li>
              <li>
                <span></span>
              Driving competitively low-cost advisory business, enhancing clients’ sustainability
            </li>
              <li>
                <span></span>
              Providing continuous support leading to empowered clients
            </li>
              <li>
                <span></span>
              Advancing local and internal ownership of our work
            </li>
              <li>
                <span></span>
              Assisting with quick response to difficult situations and uncertain times in complicated and complex environments
            </li>
            </ul>
          </div>
        </ContentGrid>
      </Section>

      <Section
        theme="dark"
      >
        <ContentGrid
          heading="Our Leadership"
          contentAlign="left"
          theme="dark"
          image={data.godwin}
        >
          <p>
            Hundredfold was founded to impact the real and every day needs of businesses and organizations in Africa to survive and grow by its Founder, Godwin Hatekah.
          </p>
          <p>
            Godwin’s background at board level, executive and managerial levels spanning 25 years across 3 countries with deep knowledge in finance and financial management, strategy, mergers and acquisitions, budgeting, public sector has helped to sharpen the convictions, philosophies and culture of the Firm.  He has deep industry-wide experience that cover telecommunications and digital network, mining, construction, food and beverages, management consulting and BPO, energy, medical devices, public sector, water and sanitation.
          </p>
          <p>
            Hundredfold prides itself in international networks and global collaborations that will unearth opportunities that gives local community, society and country level impacts.
          </p>
          <p>
            The Hundredfold team is made of individuals and networks with massive experience and background in strategy, digital innovations and digital transformations, finance, engineering, economic management, IT systems and planning.
          </p>
        </ContentGrid>
      </Section >

      <QuoteBlock >
        <h3>
          We make <span>direct</span> contributions to groups and people in our communities we consider as vulnerable.
        </h3>
      </QuoteBlock>

      <Section>
        <ContentGrid
          heading="Social Initiatives"
          contentAlign="left"
        >
          <p>
            At Hundredfold we see our business as an integral part of our inter-connectedness between us and our community, society, and people. We embrace diversity and inclusivity.
          </p>
          <p>
            We see economic transformation beyond, simply legislative compliance. We make direct contributions to groups and people we see in our communities as vulnerable.
            For a start we are working with organizations involved in helping blind people, homeless people and autistic children.
          </p>
          <p>
            Hundredfold was established on the back of our convictions that we can share the little resources we have with others so we can make our world a “better place”.
          </p>
        </ContentGrid>
      </Section >

    </Layout >
  )
}

export const query = graphql`
  query HomeServicesImages{
                    quote1: file(relativePath: {eq: "quotes/quote1.jpg" }) {
                    childImageSharp {
                    fluid(maxWidth: 1920, quality: 80) {
                    ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    quote2: file(relativePath: {eq: "quotes/quote2.jpg" }) {
                    childImageSharp {
                    fluid(maxWidth: 1920, quality: 80) {
                    ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    slide: file(relativePath: {eq: "slides/about/slide1.jpg" }) {
                    childImageSharp {
                    fluid(maxWidth: 1920, quality: 80) {
                    ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    godwin: file(relativePath: {eq: "other/godwin.jpeg" }) {
                    childImageSharp {
                    fluid(maxWidth: 500, quality: 80) {
                    ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`