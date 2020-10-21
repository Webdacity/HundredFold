import React from 'react';

// Components
import Layout from "../components/Layout";

// Styles, Images, Fonts
import styles from "../styles/pages/404.module.scss"

export default function PageNotFound() {
    return (
        <Layout
            pageMeta={{
                title: "Page not Found",
                description: "Page not Found",
                robots: "noindex, nofollow"

            }}
        >

            <section className={styles.section}>
                <h1>Page not Found</h1>
                <h4>The page you are looking for does not exist</h4>
            </section>

        </Layout>
    )
}
