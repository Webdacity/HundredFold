import React from "react";
import { Link, graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";

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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem sapiente ducimus eligendi? Reiciendis ipsum adipisci odit ut atque id error. Numquam sunt explicabo minima eius, fugiat deserunt quae illum nobis maiores et iure nam unde, obcaecati inventore molestiae officiis voluptate soluta! Sunt magni iure sequi voluptates sapiente at laudantium animi cupiditate. Repellat modi ullam, illum
          <br /><br />
          reiciendis cumque atque voluptatum laudantium molestias in, sapiente magni expedita sint molestiae excepturi soluta consequuntur iure! Repudiandae, assumenda eveniet. Reiciendis, dolorem provident delectus aut ex doloremque tenetur adipisci. Illum, dolore quaerat dolorem odit aperiam laborum aliquam doloribus itaque, veniam quia maxime similique excepturi non eveniet!</p>
        </div>
      </Section>

    </Layout>
  )
}
