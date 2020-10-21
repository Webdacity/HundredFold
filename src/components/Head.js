import React from 'react';
import { Helmet } from "react-helmet";

export default function Head({ pageMeta }) {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();

    return (
        <Helmet htmlAttributes={{ "lang": "en" }}>
            <title>{pageMeta.title} | Hundredfold</title>
            <meta name="description" content={pageMeta.description} />
            <link rel="canonical" href={`https://www.hundredfold.co.za${pageMeta.canonical}`} />
            <meta name="robots" content={pageMeta.robots ? pageMeta.robots : "index, follow"} />

            <meta name="author" content="Webdacity" />
            <meta name="copyright" content={`Hundredfold © ${currentYear}`} />
            <meta name="theme-color" content="#151614" />

            {/* Open Graph */}
            <meta property="og:site_name" content="Hundredfold" />
            <meta property="og:title" content={pageMeta.title} />
            <meta property="og:description" content={pageMeta.description} />
            <meta property="og:type" content="Website" />
            <meta property="og:url" content={`https://www.hundredfold.co.za${pageMeta.canonical}`} />
            <meta property="og:image" content="https://www.hundredfold.co.za/social.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1000" />
            <meta property="og:image:height" content="1000" />
            <meta property="og:image:alt" content="Hundredfold Logo" />

            {/* Stylesheets */}
            <script src="/pace.min.js"></script>

        </Helmet >
    )
}
