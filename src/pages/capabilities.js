import React from 'react';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import CapabilityBlock from "../components/CapabilityBlock";

// Data
import CapabilityData from "../assets/data/capabilities.json"

// Styles, Images, Fonts
import styles from "../styles/pages/capabilities.module.scss";

export default function Capabilities() {
    return (
        <Layout
            pageMeta={{
                title: "Capabilities",
                description: "An Africa Focused Strategy Company",
                canonical: "/"
            }}
        >
            <Section heading="Capabilities" theme="dark" >
                <div className={styles.menuGrid}>
                    {CapabilityData.map((capability, index) => {
                        return (
                            <div key={index} className={styles.menuItem}>
                                <a href="#">{capability.name}</a>
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
