import React from 'react';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import IndustryBlock from "../components/IndustryBlock"

// Data
import IndustryData from "../assets/data/industries.json"

// Styles, Images, Fonts
import styles from "../styles/pages/industries.module.scss";

export default function Industries() {
    return (
        <Layout
            pageMeta={{
                title: "Industries",
                description: "An Africa Focused Strategy Company",
                canonical: "/"
            }}
        >

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
