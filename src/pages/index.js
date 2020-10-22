import React from "react";
import { Link, graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import ContentGrid from "../components/ContentGrid";

// Styles, Images, Fonts
import styles from "../styles/pages/index.module.scss";

export default function About() {
  return (
    <Layout
      pageMeta={{
        title: "About",
        description: "An Africa Focused Strategy Company",
        canonical: "/"
      }}
    >

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
          <p>
            We believe in driving change through strong ethics and strong data analytics. We are driven by our efficiency culture that we believe will pay off for clients. We believe in respect for our clients and those around us; strong or weak, rich or poor, learned or unlearned, with us or not us. We believe in the society we live in and thrive to make it better than we first met it.
          </p>
          <p>
            We believe in collaborations and partnerships. We believe in our culture of multi-experience and multi industry skills and resources. We believe in local contexts. We believe in diversity and inclusivity.
          </p>
        </ContentGrid>
      </Section>

      <Section      >
        <ContentGrid
          heading="The Hundredfold difference"
          contentAlign="right"
        >
          <p>
            <span>
              How our work impacts on our clients is the difference we make to their bottom line, direction and efficiency:
            </span>
          </p>
          <ul>
            <li>
              <i></i>
              Bringing international network of companies together to execute African centered projects
            </li>
            <li>
              <i></i>
              Driving competitively low-cost advisory business enhancing clients’ sustainability
            </li>
            <li>
              <i></i>
              Providing continuous support leading to empowered clients
            </li>
            <li>
              <i></i>
              Advancing local and internal ownership of our work
            </li>
            <li>
              <i></i>
              Assisting with quick response to difficult situations and uncertain times in complicated and complex environments
            </li>
          </ul>
        </ContentGrid>
      </Section>

      <Section
        theme="dark"
      >
        <ContentGrid
          heading="Our Leadership"
          contentAlign="left"
          theme="dark"
        >
          <p>
            Hundredfold was founded to impact the real and every day needs of businesses and organizations in Africa to survive and grow by its Founder, Godwin Hatekah.
          </p>
          <p>
            Godwin’s background at board level, executive and managerial levels spanning 25 years across 3 countries with deep knowledge in finance and financial management, strategy, mergers and acquisitions, budgeting, public sector has helped to sharpen the convictions, philosophies and culture of the firm.  He has deep industry-wide experience that cover telecommunications and digital network, mining, construction, food and beverages, management consulting and BPO, energy, medical devices, public sector, water and sanitation.
          </p>
          <p>
            Hundredfold prides itself in international networks and global collaborations that will unearth opportunities that gives local community, society and country level impacts.
          </p>
          <p>
            The Hundredfold team is made of individuals and networks with massive experience and background in strategy, digital innovations and digital transformations, finance, engineering, economic management, IT systems and planning.</p>
        </ContentGrid>
      </Section >

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
